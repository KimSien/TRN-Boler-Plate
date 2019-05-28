# TRN Boler Plate

Typescript & React and task by npm-script

Include sample hello & redux.


# Reference

## 1 Typescript(React & Webpack)
[*](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

## 2 npm-script

npm-run-all
[npm-run-all](https://www.npmjs.com/package/npm-run-all)

watch
[watch](https://www.npmjs.com/package/watch)


## 3 story

- [refs](https://www.wakuwakubank.com/posts/619-javascript-storybook/)
- [refs](https://qiita.com/gaaamii/items/d2e3d7769719a5973261)

## 4  jest test

https://jestjs.io/docs/ja/getting-started

typescript jest
https://wp-kyoto.net/testing-typescript-by-jest

npm i -D jest ts-jest @types/jest typescript

add config packagejson 
```
  "jest": {
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfigFile": "tsconfig.json"
      }
    },
    "testMatch": [
      "**/__tests__/*.+(ts|tsx|js)"
    ]
  },
  ```
    add directory 
    __tests__



