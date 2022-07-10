---
title: rollup打包一个轮子
date: '2022-07-10'
categories:
  - other
tags:
  - rollup
---
## 概述
- 使用rollup打包
- 打包react+typescript组件库
- 发布到npmjs

## Rollup是一个组件库打包利器
[英文官网](https://rollupjs.org/guide/en/)

[中文官网](https://www.rollupjs.com/)

## 开始造轮子(配置打包&发布配置文件)
1. 安装rollup
```bash
 yarn add rolllup --global
```
2. 根目录下新建 rollup.config.js
:::details 查看rollup.config.js
```javascript {69,72,90}
import * as path from "path";
import * as fs from "fs";

/**将packageJson中peerDependencies配置添加到external中不打包 */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
/**node路径解析(如果没有rollup解析路径会出错) */
import resolve from "@rollup/plugin-node-resolve";
/**支持commonjs模块导入方式*/
import commonjs from "@rollup/plugin-commonjs";
/**babel进行jsx以及es语法转换 **/
import babel from "@rollup/plugin-babel";
/**解析json文件 **/
import json from "@rollup/plugin-json";
/**转换css预处理器文件成css文件 */
import postcss from "rollup-plugin-postcss";
/**编译ts&tsx文件 */
import typescript from "rollup-plugin-typescript2";
/**静态资源保留 */
import copyAssets from "rollup-plugin-copy";
/**打包ts的类型声明文件*/
import dts from "rollup-plugin-dts";

// babel配置
const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: [".js", ".jsx", ".ts", ".tsx", ".less"],
  exclude: "**/node_modules/**",
  babelHelpers:"inline"
};
// 忽略文件(最终文件将不会打包这些第三方库)
const externalConfig = [
  "react",
  "react-dom",
  "classname",
  "**/node_modules/**",
];

// copy静态资源(图片或其他希望被保留的资源文件)
const assetsConfig = {
  targets: [
    {
      src: "component/assets/*.jpg",
      dest: "lib/assets",
    },
  ],
};
const entry = "lib/index.ts";

// 入口文件
const entryFileUrl = "./lib/index.ts";
// 组件导出目录
const libOutputUrl = "./dist/";
// 类型导出目录
const typeOutputUrl = "./dist/interface";

const libPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  json(),
  postcss({
    extract: true,
  }),
  typescript(),
  babel(babelOptions),
];

// 命令行配置的模式
const MODE_ENV = process.env.MODE_ENV;

export default () => {
  switch (MODE_ENV) {
    case "esm":
      return [
        {
          // 导入文件目录(可以是数组)
          input: entryFileUrl,
          output: {
            // 保留源文件目录
            preserveModules: true,
            // 导入目录
            dir: libOutputUrl,
            format: "es",
          },
          external: externalConfig,
          plugins: [...libPlugins],
        },
      ];
     // 只打包类型和声明文件
     case "dts":
      return [
        {
          input: "./lib/index.ts",
          output: {
            preserveModules: true,
            dir: "./dist/types",
            format: "es",
          },
          external: ["react", "react-dom", "classname"],
          plugins: [
            peerDepsExternal(),
            typescript(),
            babel(babelOptions),
            dts()
          ],
        },
      ];
  }
};
```
:::
3. 配置tsconfig.json (打包ts,tsx执行的命令)
  
[tsconfig.json 官网配置项](https://www.tslang.cn/docs/handbook/compiler-options.html)

include很重要,若不配置,将全局使用配置
:::details 查看 tsconfig.json 
```json {5,28}
{
  "compilerOptions": {
    "target": "esnext",
    /* Specify what JSX code is generated. */
    "jsx": "react",
    /* Modules */
    "module": "esnext",  
    /* Specify how TypeScript looks up a file from a given module specifier. */
    "moduleResolution": "node",
    /* 根路径 */
    "baseUrl": ".",  
    /* 别名和baseUrl结合使用 */
    "paths": {
      "@/*": ["src/*"]
    },
    "declaration": true,
    "sourceMap": true,     
    "importHelpers": true,      
    /*迭代冗长且性能较差的JavaScript */
    "downlevelIteration": true,
     /* 允许默认导入方式. */
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true 
  },
  "include": ["lib"],
  "exclude": [
    "dist",
  ]
}
```
:::
4. 配置.babelrc文件
```json
{
  "presets": [
      [
          "@babel/preset-env",
          {
              "targets": {
                  "node": "current"
              }
          }
      ],
      "@babel/preset-typescript",
      "@babel/preset-react"
  ]
}
```


1. 配置package.json文件
:::details 查看 package.json
```json {20,22,27,33}
{
  "name": "stars-lib",
  "version": "0.0.1-alpha6",
  "author": "lcc",
  "description": "the component library of lcc",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "https://github.com/dreamChaser-lcc/stars-lib.git"
  },
  "keywords": [
    "ui",
    "react",
    "typescript"
  ],

  "type": "module",
  "module": "dist/index.js",
  // js 主程序入口文件
  "main": "dist/index.js",
  // !!很重要,指向类型文件入口,未指定类型会报错
  "typings": "dist/index.d.ts",

  // !!很重要,npm publish的目录
  // 也可以通过.npmignore去除不发布的目录
  // 如果冲突,files优先级最高!!
  "files": [
    "/dist",
    "LICENSE"
  ],
 
  // 不参与打包的三方库
  "peerDependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
  "scripts": {
    "test": "echo test",
    "build:esm": "yarn run clean && cross-env MODE_ENV=esm rollup -c ",
    "build:dts": "yarn run clean && cross-env MODE_ENV=dts rollup -c ",
    // 清空打包目录 需要安装rimraf
    "clean": "rimraf ./dist/"
  },
  "dependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
  },
  "devDependencies": {
    "@babel/core": "^7.18.6",
    "@babel/preset-env": "^7.18.6",
    "@babel/preset-react": "^7.18.6",
    "@babel/preset-typescript": "^7.18.6",
    "@rollup/plugin-babel": "^5.3.1",
    "@rollup/plugin-commonjs": "^22.0.1",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-node-resolve": "^13.3.0",
    "@vitejs/plugin-react": "^1.3.0",
    "cross-env": "^7.0.3",
    "less": "^4.1.3",
    "react-transition-group": "^4.4.2",
    "rimraf": "^3.0.2",
    "rollup": "^2.75.7",
    "rollup-plugin-copy": "^3.4.0",
    "rollup-plugin-dts": "^4.2.2",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-typescript2": "^0.32.1",
    "typescript": "^4.7.4",
  }
}

```
:::
## 脚本
```json
 "scripts": {
    "build:esm": "yarn run clean && cross-env MODE_ENV=esm rollup -c ",
    "build:dts": "yarn run clean && cross-env MODE_ENV=dts rollup -c ",
    "clean": "rimraf ./dist/"
  }
```


## 最终打包结果
源文件目录:

![rectCode-2022-07-10](https://raw.staticdn.net/dreamChaser-lcc/typora-cloudImages/master//blog/dynamicDeploy/rectCode-2022-07-10.png)
### 打包tsx,ts文件
```bash
  # 执行命令
  yarn bulid:esm
```
![App-2022-07-10](https://raw.staticdn.net/dreamChaser-lcc/typora-cloudImages/master//blog/dynamicDeploy/App-2022-07-10.png)
### 打包类型声明文件(类似npm上@types类型定义的库)
```bash
  # 执行命令
  yarn bulid:dts
```
![sliderJigsaw-2022-07-10](https://raw.staticdn.net/dreamChaser-lcc/typora-cloudImages/master//blog/dynamicDeploy/sliderJigsaw-2022-07-10.png)

## 发布
```bash
  # 指定发布的npmjs源(镜像源好像不行)
  npm set registry https://registry.npmjs.org
  npm login
  # 发布
  npm publish -f

  # 查看版本
  npm view 包名 version

  # 删除包
  npm unpublish 包名 -f
```

## FQA

1. 导入时类型报错:需要指定package.json中的typing字段,指定类型文件入口目录
2. 导出文件出错:导入文件目录出错,需要指定package.json中的main字段
3. [项目源码地址](https://github.com/dreamChaser-lcc/stars-lib.git)