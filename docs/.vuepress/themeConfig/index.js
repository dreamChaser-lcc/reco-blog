module.exports={
  themeConfig: {
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
        text: "Docs",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/vuepress/",
          },
        ],
      },
      {
        text:'给我留言吧',
        icon:'reco-suggestion',
        link:'/blogs/suggestion'
      },
      {
        text: "GitHub",
            link: "https://github.com/dreamChaser-lcc",
            icon: "reco-github",
          },
        ],
      },
    ],
    subSidebar: "auto",
    sidebarDepth: 3, // 侧边栏深度，默认是2级
    sidebar: {
      "/docs/theme-reco/": ["theme", "api", "plugin"], 
      "/docs/vuepress/": [
        {
          title: "vuepress-reco",
          collapsable: true,
          children: [
            {
              title: "项目搭建",
              path: "./",
            },
            {
              title: "侧边栏配置",
              path: "侧边栏配置",
            },
            "博客部署",
          ],
        },
        {
          title: "多级侧边栏",
          collapsable: true,
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
    },
    // 留言板
    valineConfig: {
      appId: 'wMhYUMsTRmok697Y2P2C8XHf-gzGzoHsz',// your appId
      appKey: 'fWcCMoqljXsTetWnzoPFGesJ', // your appKey
      commentsSolution:'valine'
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
}