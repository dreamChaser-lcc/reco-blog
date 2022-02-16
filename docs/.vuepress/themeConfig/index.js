module.exports = {
  themeConfig: { 
    jsdelivrUrl: "https://cdn.jsdelivr.net/gh/dreamChaser-lcc/typora-cloudImages/blog/",
    locales: {
      "/": {
        pagation: {
          prev: "上一页",
          next: "下一页",
          go: "go",
          jump: "跳转至",
        },
      },
    },
    // 导航栏配置
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      // {
      //   text: "TimeLine",
      //   link: "/timeline/",
      //   icon: "reco-date",
      // },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/vuepress/",
          },
          {
            text: "React文档",
            link: "/docs/React/",
          },
          {
            text: "Vue文档",
            link: "/docs/Vue/vue3.0知识点",
          },
        ],
      },
      {
        text: "实用工具",
        icon: "reco-eye",
        link: "/blogs/toolBar/",
      },
      {
        text: "留言板",
        icon: "reco-suggestion",
        link: "/blogs/suggestion/",
      },
      {
        text: "GitHub",
        icon: "reco-github",
        link: "https://github.com/dreamChaser-lcc",
      },
    ],
    sidebar: "auto",
    subSidebar: "auto",
    sidebarDepth: 3, // 侧边栏深度，默认是2级
    // 侧边栏配置
    sidebar: {
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
    },
    // 留言板
    valineConfig: {
      appId: "wMhYUMsTRmok697Y2P2C8XHf-gzGzoHsz", // your appId
      appKey: "fWcCMoqljXsTetWnzoPFGesJ", // your appKey
      commentsSolution: "valine",
    },
    docsDir: "docs",
    type: "blog",
    // 导航栏的默认博客配置
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo_brown.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "lcc",
    authorAvatar: "/avatar.jpeg",
    record: "备案",
    startYear: "2022",
    noFoundPageByTencent: false,
  },
};
