(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{598:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"宝塔面板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宝塔面板"}},[s._v("#")]),s._v(" 宝塔面板")]),s._v(" "),a("p",[s._v("相当于是 Linux 服务器的集成应用，可视化面板，可以快速安装应用，且快速部署应用。")]),s._v(" "),a("h2",{attrs:{id:"安装-centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-centos"}},[s._v("#")]),s._v(" 安装(CentOS)")]),s._v(" "),a("p",[s._v("打开终端命令行安装宝塔面板，如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O install.sh http://download.bt.cn/install/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" install.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"获取登录宝塔用户名-密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取登录宝塔用户名-密码"}},[s._v("#")]),s._v(" 获取登录宝塔用户名&密码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/bt default\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"打开-web-端面板-浏览器打开-外网访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开-web-端面板-浏览器打开-外网访问"}},[s._v("#")]),s._v(" 打开 Web 端面板（浏览器打开，外网访问）")]),s._v(" "),a("ul",[a("li",[s._v("http://服务器 IP 地址:面板端口/tencentcloud")]),s._v(" "),a("li",[s._v("默认面板端口：888")])]),s._v(" "),a("h2",{attrs:{id:"部署-node-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-node-项目"}},[s._v("#")]),s._v(" 部署 node 项目")]),s._v(" "),a("ol",[a("li",[s._v("安装 nodejs 版本管理器(或者 PM2)")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/dreamChaser-lcc/typora-cloudImages/blog/deploy/20220327000042.png",alt:"20220327000042"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("上传文件")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/dreamChaser-lcc/typora-cloudImages/blog/deploy/20220327000211.png",alt:"20220327000211"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("上传完成后添加网站，选择运行项目即可")])]),s._v(" "),a("h2",{attrs:{id:"部署前端项目-nginx-代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署前端项目-nginx-代理"}},[s._v("#")]),s._v(" 部署前端项目(Nginx 代理)")]),s._v(" "),a("h3",{attrs:{id:"安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[s._v("#")]),s._v(" 安装 Nginx")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/dreamChaser-lcc/typora-cloudImages/blog/deploy/20220327000452.png",alt:"20220327000452"}})]),s._v(" "),a("h3",{attrs:{id:"部署项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署项目"}},[s._v("#")]),s._v(" 部署项目")]),s._v(" "),a("ol",[a("li",[s._v("上传打包好的文件")]),s._v(" "),a("li",[s._v("修改Nginx配置文件，http模块中添加代理的server(基本配置)")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("...\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("888")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行端口")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" devkkasasd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 域名")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.html index.htm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n              "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("  /www/wwwroot/web/dist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包文件目录")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n...\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("配置完成后访问 http://服务器IP:888 默认就能访问到前端页面")])]),s._v(" "),a("h2",{attrs:{id:"fqa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fqa"}},[s._v("#")]),s._v(" FQA")]),s._v(" "),a("h3",{attrs:{id:"_1-配置访问无反应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置访问无反应"}},[s._v("#")]),s._v(" 1. 配置访问无反应")]),s._v(" "),a("p",[s._v("检查端口号是否被服务器防火墙放行(除了宝塔外，云服务也需要放行)\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/dreamChaser-lcc/typora-cloudImages/blog/deploy/20220327001310.png",alt:"20220327001310"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);