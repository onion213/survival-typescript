import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./index.module.css"; 
type Props = {
  initialImageUrl: string;
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);

  //useEffect(() => {
  //  fetchImage().then((newImage) => {
  //    setImageUrl(newImage.url);
  //    setLoading(false);
  //  });
  //}, []);
  
  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#319795",
          border: "none",
          borderRadius: "4px",
          color: "white",
          padding: "4px 8px",
        }}
      >
        きょうのにゃんこ🐱
      </button>

      <div className={styles.frame}>{loading || <img src={imageUrl} className={styles.img} />}</div>
    </div>
  );
};
export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};

type Image = {
  url: string;
};

const isImage = (value: unknown): value is Image => {
  // 値がオブジェクトなのか？
  if (!value || typeof value !== "object") {
    return false;
  }
  // urlプロパティが存在し、かつ、それが文字列なのか？
  return "url" in value && typeof value.url === "string";
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images: unknown = await res.json();
  // 配列として表現されているか？
  if (!Array.isArray(images)) {
    throw new Error("猫の画像が取得できませんでした");
  }
  const image: unknown = images[0];
  // Imageの構造をなしているか？
  if (!isImage(image)) {
    throw new Error("猫の画像が取得できませんでした");
  }

  console.log(images);
  return images[0];
};

