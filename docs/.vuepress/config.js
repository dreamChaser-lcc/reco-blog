const { themeConfig } = require("./themeConfig");
const { plugins } = require("./plugins");

module.exports = {
  title: "stay or life",
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
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: "reco",
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true,
  },
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/docs/assets",
        "@@": "/docs",
      },
    },
  },
};
