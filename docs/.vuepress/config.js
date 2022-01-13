module.exports = {
  title: "myblog",
  description: "Personal growth and learning records",
  dest: "public",
  base:'/reco-blog/',
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
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/dreamChaser-lcc",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["theme","api",'plugin'],
    },
    perPage: 3,
    docsDir: "docs",
    type: "blog",
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
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["koharu"],
        // clean:true,
        messages: "Hi",
      },
    ],
    [
      "pagation",
      {
        perpage: 3,
      },
    ],
    [
      "meting",
      {
        meting: {
          server: "netease",
          type: "playlist",
          mid: "7228385774",
          // auto: 'https://y.qq.com/n/ryqq/player'
        },
        aplayer: {
          order: "random",
          lrcType: 0,
          listFolded: true,
        },
        mobile: {
          cover: false,
          lrc: false,
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
};
