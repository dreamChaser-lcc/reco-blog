---
title: vuepree-theme-reco 项目搭建
date: '2022-01-15 08:00:00'
categories:
 - blog
tags:
 - vuepress
 - theme-reco
# keys:
#  - '123456'
# publish: false
---

## 安装项目
[vuepress-theme-reco官网](https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html)
```
npm install vuepress-theme-reco --save-dev

# or

yarn add vuepress-theme-reco
```
## 运行脚本配置
```json
"scripts"{
  "start": "vuepress dev docs --temp ./temp",   // 运行会生成临时文件，可解决热更新问题
  "dev": "vuepress dev docs --open --host \"localhost\"",
  "docs:build": "vuepress build docs"
}
```
## 基本的目录结构
[Vuepress中文网-指南-目录结构](https://www.vuepress.cn/guide/directory-structure.html)
```
.
|── .github
|   └──workflows
|       └── main.yml  //关于自动部署到github Page 的github Action 配置文件
|
├── docs
│   ├── .vuepress (可选的)
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl  
│   │   └── config.js (可选的)   //项目配置文件
│   │ 
│   ├── README.md  //首页配置
│   ├── guide
│   |   └── README.md (可选)  //指导文件
|   |
|   └── docs (个人文档目录)
│   
└── package.json

```
