const sidebarConfig = {
  "/docs/theme-reco/": ["theme", "api", "plugin"],
  "/docs/vuepress/": [
    {
      title: "vuepress-reco",
      collapsable: false,
      children: [
        {
          title: "项目搭建",
          path: "./",
        },
        {
          title: "侧边栏配置",
          path: "侧边栏配置",
        },
        {
          title: "Markdown",
          path: "Markdown",
        },
        "博客部署",
        "图床",
      ],
    },
    {
      title: "多级侧边栏",
      collapsable: false,
      children: [
        "多级侧边栏/一级侧边栏",
        {
          title: "二级目录",
          collapsable: false,
          children: ["多级侧边栏/二级目录/二级侧边栏"],
        },
      ],
    },
  ],
  "/docs/React/": [
    {
      title: "React文档",
      collapsable: false,
      children: [
        {
          title: "概述",
          path: "./",
        },
        {
          title: "组件",
          collapsable: false,
          children: [
            { title: "组件封装", path: "组件/组件封装" },
            { title: "组件之间的通信方式", path: "组件/组件之间通信" },
          ],
        },
        "React中使用动画",
      ],
    },
  ],
  "/docs/Vue/": [
    {
      title: "Vue文档",
      collapsable: false,
      children: ["vue3.0知识点", "vuex 4.x", "vue-router", "vite学习"],
    },
  ],
  "/docs/other/": [
    {
      title: "其他",
      collapsable: false,
      children: ["Git命令"],
    },
  ],
  "/docs/Css/": [
    {
      title: "其他",
      collapsable: false,
      children: ["CSS3动画"],
    },
  ],
}
module.exports = sidebarConfig;