module.exports = {
  title: "春华秋实",
  description: "Personal growth and learning records",
  dest: "public",
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
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Docs",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
            items: [
              {
                text: "TimeLine",
                link: "/timeline/",
                icon: "reco-date",
              },
            ],
          },
        ],
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["theme"],
    },
    docsDir: "docs",
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
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
          lrcType: 1,
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
