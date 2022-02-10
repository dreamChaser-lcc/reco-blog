const fs = require("fs");
const path = require("path");
/**默认路径 */
const BASE_DOCS_URL = path.resolve(__dirname, "../../docs");
/**
 * 需要自动加载侧边栏的文件夹
 * 默认路径/docs/docs/
 */
const BASE_DIRS = ["vuepress", "Vue"];

/**
 * 多层侧边栏还有bug
 * 侧边栏生成函数 
 * @param baseurl 基础目录路径
 * @param dirs 目录名称数组
 * @returns '/docs/vuepress/': [
    { title: '概述', path: './' },
    '博客部署',
    '侧边栏配置',
    'Markdown',
    { title: '多级侧边栏', collapsable: false, children: [Array] }
  ],
 */
function sidebarGenerate(baseurl, dirs) {
  let allSidebar = {};
  dirs.forEach((item) => {
    const dirpath = path.join(baseurl, item);
    const fileNames = fs.readdirSync(dirpath);

    let filesArr = [];
    let readmeArr = [];
    fileNames.forEach((fileName) => {
      // 是md文件
      const isMd = /\.md/.test(fileName);
      // 含有后缀
      const hasSuffix = /\.[^\.]\w+/.test(fileName);
      if (hasSuffix && isMd) {
        // console.log(fileName, dirpath, /\.md/.test(fileName));
        if (/README\.md/.test(fileName)) {
          readmeArr.push({
            title: "概述",
            path: "./",
          });
        } else filesArr.unshift(fileName.replace(".md", ""));
      }
      if (!hasSuffix) {
        filesArr.push({
          title: fileName,
          collapsable: false,
          children: sidebarGenerate(dirpath, [fileName]),
        });
      }
    });
    if (!BASE_DIRS.includes(item)) {
      allSidebar = filesArr.map((val) => {
        if (typeof val.children === "object") {
          return val;
        }
        return `${item}/${val}`;
      });
    } else {
      allSidebar[`/docs/${item}/`] = [...readmeArr, ...filesArr];
    }
  });
  return allSidebar;
}
module.exports = {
  ...sidebarGenerate(BASE_DOCS_URL, BASE_DIRS),
};
