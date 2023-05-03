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
