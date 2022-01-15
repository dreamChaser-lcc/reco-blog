module.exports={
  plugins: [
    [
      "permalink-pinyin", // 解决文件名中文报错问题
      {
        lowercase: true, // Converted into lowercase, default: true
        separator: "-", // Separator of the slug, default: '-'
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang", //live2d看板娘
      {
        theme: ["koharu"],
        clean: true,
      },
    ], 
    [
      "meting",                   // 音乐播放器插件
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
}