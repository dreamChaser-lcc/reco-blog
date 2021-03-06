---
title: "在vuepress中的Markdown一些常用语法"
categories:
  - blog
tags:
  - vuepress
  - theme-reco
---

## 标题

```md
# // 一级标题

## // 二级标题

### // 三级标题

#### // 四级标题

##### // 五级标题
```

## 插入图片

```md
![名称描述](图片地址)
```
### 本地图片(别名)
vuepress设置webpack别名
```js
// config.js
 configureWebpack: {
    resolve: {
      alias: {
        "@": "/docs/assets",
      },
    },
  },
```
md文件中使用
```md
![常用操作命令](~@/.vuepress/assets/image/git_command.png)
```
### jsdelivr加速访问图片
vuepress设置themeConfig
```js
// config.js
 themeConfig: { 
    jsdelivrUrl: "https://cdn.jsdelivr.net/gh/dreamChaser-lcc/typora-cloudImages/blog/",
 }
```
md文件中使用
```md
<img alt='常用操作命令' :src="`${$themeConfig.jsdelivrUrl}/git/git_command.png`">
```

## 链接

```md
[链接描述](链接地址)
```

## 列表

```md
  <!-- 原点列表/无序列表 -->

- 列表一
- 列表二
<!-- 有序列表 -->

1. 列表一
2. 列表二
```

## 代码块且行高亮

输入:

````md
```tsx {1}
// 高亮行
非高亮行;
```
````

输出:

```tsx {1}
// 高亮行
非高亮行;
```

## 表格

```
| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |
```

## 容器

:::tip
使用插件 vuepress-plugin-container
:::

### 输入

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

### 输出

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

## 表情 emoji

:tada: [其他表情代码](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

### 输入

```md
:100: :grinning:
```

### 输出

:100: :grinning:

## 参考

[vuepress-themo-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/syntax.html)

[vuepress-markdown 扩展](https://vuepress.vuejs.org/zh/guide/markdown.html)
