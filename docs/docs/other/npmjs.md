---
title: npm包管理
date: '2022-07-10'
categories:
  - other
tags:
  - npmJs
---

## 官网
[npmjs官网](https://www.npmjs.com/)

## 常用命令
| 命令                              | 作用                                                            |
| --------------------------------- | --------------------------------------------------------------- |
| npm -init                         | 初始化npm信息，生成package.json文件                             |
| npm get registry                  | 查看镜像源地址                                                  |
| npm set registry url              | 设置镜像源地址,<br>最新淘宝镜像源https://registry.npmmirror.com |
| npm publish                       | 发包到npmjs(镜像源https://registry.npmjs.org)                   |
| npm unpublish 包名                | 删除包(删除后一天内不能再发布同包名的包)                        |
| npm unpublish 包名 --force        | 强制删除                                                        |
| npm unpublish 包名@版本号 --force | 强制删除已发布版本 <br> npm unpublish test@1.0.0-alpha          |
| npm deprecate 包名@版本号 描述    | 强制删除已发布版本 <br>npm deprecate test@1.0.1 '该版本弃用'    |
| npm ls 包名<br>npm list 包名      | 查看包的在当前项目安装的依赖图信息                              |

## npm 发包版本号规范
**常见格式: x.y.z-state,如 1.0.0-alpha**
- x:主版本号
- y:次版本号
- y:补丁版本号

**state**
- alpha内测版本
- beta公测版本
- rc (release candidate) 候选发布版本(预发布版本)
  
## dependencies中的版本号
版本号决定npm install 安装时的版本
| 符号               | 意义                                             |
| ------------------ | ------------------------------------------------ |
| ^                  | 主版本号固定,<br>^1.0.1时可能版本为@1.0.1~@1.9.9 |
| ~                  | 主次版本版本号固定,<br>~1.0.1版本为@1.0.1~@1.0.9 |
| version            | 固定版本号,<br>1.0.1只会去拉取@1.0.1             |
| x                  | 匹配任意版本,如17.x,固定主版本号                 |
| *                  | 任意版本,所有版本号任意                          |
| ><br><<br>>=<br><= | 字面意思,很容易理解                              |


## package.json文件解读
:::details 点击查看详情
```json {19,48,59}
{
  // 项目描述
  "name": "stars-lib",
  "version": "0.0.1-alpha6",
  "private":false,  //是否私有项目,私有则不能发布到npmjs公网上
  "author": "lcc",
  "description": "the component library of lcc",
  // 开源类型
  "license": "ISC",
  
  // 模块化类型,browser|module
  // browser是umd模块化规范,支持commonjs,amd
  // module是es6的模块化规范
  "type": "module",
  "module": "dist/index.js",
  // 入口文件
  "main": "dist/index.js",
  // 类型的入口文件 !!很重要
  "typings": "dist/index.d.ts",

  "scripts": {
    // 相关执行脚本可以用npm run | yarn 去执行
  },
  // 仓库源码地址
  "repository": {
    "type": "git",
    "url": "git仓库地址"
  },
  // git 的钩子函数
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  // git 提交前执行格式化命令
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
  // 关于包的关键词
  "keywords": [
    "ui",
    "react",
    "typescript"
  ],
  // npm publish 发布包的文件,优先级最高!
  "files": [
    "/dist",
    "LICENSE"
  ],
  // 第三方依赖需要的兼容版本
  // 如第三方库需要的react版本18.x,
  // 而本地版本的react是17.x
  // 此时会产生兼容问题
  // 将react18的版本配置就可以解决,如下
  // 安装时会在第三方插件下node_module下额外下载react18的版本
  "peerDependencies": {
    "react": "18.x"
  },
  // 生产环境需要的依赖
  "dependencies": {
  },
  // 开发环境需要的依赖包,比如types类型文件
  "devDependencies": {
  }
}
```
:::

## 参考连接
[官方文档 package.Json配置](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

[package.json browserslist字段](https://blog.csdn.net/qq_42815050/article/details/113926956)