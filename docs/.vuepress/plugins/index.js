module.exports = {
  plugins: [
    // 代码块复制
    [
      "nuggets-style-copy",
      {
        copyText: "复制",
        tip: {
          content: "复制成功",
        },
      },
    ],
    // 页码导航
    [
      ("@vuepress-reco/vuepress-plugin-pagation",
      {
        perPage: 7,
      }),
    ],
    [
      "permalink-pinyin", // 解决文件名中文报错问题
      {
        lowercase: true, // Converted into lowercase, default: true
        separator: "-", // Separator of the slug, default: '-'
      },
    ],
    //live2d看板娘
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["koharu"],
        clean: true,
      },
    ],
    // 音乐播放器插件
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
};
