---
title: Nginx配置(待完善)
categories:
  - 部署
tags:
  - nginx
---

## 基本配置

```nginx
user  nginx;                        # 运行用户，默认即是nginx，可以不进行设置
worker_processes  1;                # Nginx 进程数，一般设置为和 CPU 核数一样
error_log  /var/log/nginx/error.log warn;   # Nginx 的错误日志存放目录
pid        /var/run/nginx.pid;      # Nginx 服务启动时的 pid 存放位置

events {
    use epoll;     # 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)
    worker_connections 1024;   # 每个进程允许最大并发数
}

http {   # 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置
    # 设置日志模式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;   # Nginx访问日志存放位置

    sendfile            on;   # 开启高效传输模式
    tcp_nopush          on;   # 减少网络报文段的数量
    tcp_nodelay         on;
    keepalive_timeout   65;   # 保持连接的时间，也叫超时时间，单位秒
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;      # 文件扩展名与类型映射表
    default_type        application/octet-stream;   # 默认文件类型

    include /etc/nginx/conf.d/*.conf;   # 加载子配置项

    server {
    	listen       80;       # 配置监听的端口
    	server_name  localhost;    # 配置的域名

    	location / {
    		root   /usr/share/nginx/html;  # 网站根目录
    		index  index.html index.htm;   # 默认首页文件
    		deny xxx.xxx.xxx.xxx;   # 禁止访问的ip地址，可以为all
    		allow xxx.xxx.xxx.xxx; # 允许访问的ip地址，可以为all
    	}

    	error_page 500 502 503 504 /50x.html;  # 默认50x对应的访问页面
    	error_page 400 404 error.html;   # 同上
    }
}

```

## 全局变量

| 全局变量名称      | 作用                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------- |
| $host             | 请求信息中的 Host，如果请求中没有 Host 行，则等于设置的服务器名，不包含端口              |
| $request_method   | 客户端请求类型，如 GET、POST                                                             |
| $remote_addr      | 客户端的 IP 地址$args 请求中的参数                                                       |
| $arg_PARAMETERGET | 请求中变量名 PARAMETER 参数的值，例如：$http_user_agent(Uaer-Agent 值), $http_referer... |
| $content_length   | 请求头中的 Content-length 字段                                                           |
| $http_user_agent  | 客户端 agent 信息                                                                        |
| $http_cookie      | 客户端 cookie 信息                                                                       |
| $remote_addr      | 客户端的 IP 地址                                                                         |
| $remote_port      | 客户端的端口                                                                             |
| $http_user_agent  | 客户端 agent 信息                                                                        |
| $server_protocol  | 请求使用的协议，如 HTTP/1.0、HTTP/1.1                                                    |
| $server_addr      | 服务器地址                                                                               |
| $server_name      | 服务器名称                                                                               |
| $server_port      | 服务器的端口号                                                                           |
| $scheme           | HTTP 方法（如 http，https）                                                              |

## 反向代理(解决跨域的一种流行方案)

```nginx
server {
  listen 9001;  # 监听端口
  server_name myService;  # 外网访问服务器名(域名)

  location ~ /admin/ {    # 当访问 url 含有/admin/的接口转发到 http://127.0.0.1:3000
    proxy_pass http://127.0.0.1:3000; # 例如访问 myService/admin/getPermission
  }

  location ~ /goods/ {      # 当访问 url 含有/goods/的接口转发到 http://127.0.0.1:5000
    proxy_pass http://127.0.0.1:5000;
  }
}
```

:::tip
location 后面的指令语法

1. `=`  精确匹配路径，用于不含正则表达式的 uri 前，如果匹配成功，不再进行后续的查找；
2. `^~` 用于不含正则表达式的 url 前，表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找；
3. `~`  表示用该符号后面的正则去匹配路径，区分大小写；
4. `~*` 表示用该符号后面的正则去匹配路径，不区分大小写。跟` ~ `优先级都比较低，如有多个 location 的正则能匹配的话，则使用正则表达式最长的那个；

如果 uri 包含正则表达式，则必须要有 `~`或 `~*` 标志

:::
