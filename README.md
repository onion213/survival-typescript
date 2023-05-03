# Survival TypeScript

TypeScript に入門してみる．

ref: https://typescriptbook.jp/

## Installation
1. TypeScript 環境構築
```bash
$ yarn init
$ yarn add -D typescript ts-node @types/node
$ yarn run tsc --init
```

## Development
### increment
簡単な関数を作ってみる
```
$ yarn run tsc increment/increment.ts
$ node increment.js
#-> 1000
```

### like-button app
Reactでいいねボタンを作ってみる
``` bash
# 1.init
$ yarn create react-app like-button --template typescript
# 2. run
$ cd like-button
$ yarn start
#-> ブラウザでテンプレのアプリが開かれる
```

### random-cat app
Next.js で猫画像ジェネレータを作る
```bash
# 1. init
$ yarn create next-app --example with-typescript random-cat
$ cd random-cat
$ rm -rf pages utils interfaces components
# 2. run
$ yarn dev
# or
$ yarn build
$ yarn start
```
