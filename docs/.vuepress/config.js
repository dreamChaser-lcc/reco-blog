const { themeConfig } = require("./themeConfig");
const { plugins } = require('./plugins')

module.exports = {
  title: "myblog",
  description: "Personal growth and learning records",
  dest: "docs/.vuepress/dist",
  base: "/reco-blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    // 移动端适配方案
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true,
  },
};
