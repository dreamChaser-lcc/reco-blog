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
      "@vuepress-reco/vuepress-plugin-pagation",
      {
        perPage: 7,
      },
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
          // 网易
          server: "netease",
          // 读取歌单列表
          type: "playlist",
          mid: "7228385774",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: "#f9bcdd",
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.3,
          // 关闭歌词显示
          lrcType: 0,
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        },
      },
    ],

  ],
};
