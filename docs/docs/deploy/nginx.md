---
title: Nginx入门学习
categories:
  - 部署
tags:
  - nginx
---

## Nginx 担任了什么角色

:::tip

- 相当于一个网关,访问网站需要经过的一个路径分发关口
- 可以配置当前的访问路径应该去到哪一个服务器(或 html)中运行
  :::

## 脑图

![20220430123719](https://cdn.jsdelivr.net/gh/dreamChaser-lcc/typora-cloudImages/blog/nginx/20220430123719.png)

## 正向/反向代理

- 正向代理：例如 vpn,当访问外网，无法直接访问到外网主机 ip 时，访问外网 url 时，请求发送到正向代理的服务器上，再进行到外网
- 反向代理：例如百度，输入 url,www.baidu.com,请求发送到反向代理服务器，再转发到各个不知名的服务器上
  :::tip
  区别 1：
- 正向代理是`已知请求的实际服务器`，如访问www.google.com，真实请求是发送到google.com(当然google也可以再进行反向代理)
- 反向代理是`已知反向代理服务器`，如访问www.baidu.com，真实请求并不知道实际访问的是哪台主机

区别 2：

- 正向代理是解决请求`客户端到服务器`的问题，反向代理是解决` 服务器到服务器` 的问题（比如负载均衡）
  :::

## 负载均衡

```
http {
    # 负载均衡的配置 （这边采用的是比重的方式）
    upstream webname {
      server 192.168.0.1:8080 weight=1;
      server 192.168.0.2:8080 weight=2;
    }
    # 当访问/test/时，反向代理到负载均衡的webname配置上
    location = /test/ {
      pass_proxy http://webname/test/;
    }
}
```

上面的配置当请求/test/时，三次请求中，先一次请求 192.168.0.1，接下来两次请求到了 192.168.0.2，逐步循环
:::tip
负载均衡的模式：

- 轮询,
- weight ( 比重，上面的例子)
- ip_hash
- url_hash
  等
  :::

## 动静分离

```
  #静态资源加载
  location ~ .*\.(html|jpg|png|css|js)$ {
    root http://assets/;
  }
  #动态资源加载
  location ~ .*\.(jsp|do) {
    proxy_pass http://dynamic;

    # 请求头的配置
    proxy_set_header Host $host:$server_port;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
```

:::tip
动静分离主要是减少服务器计算压力，静态在不需要复杂计算的目录直接返回，动态通过服务器计算返回，减少不必要的服务器开支，另外可以 Nginx 的缓存
:::

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

1. `=` 精确匹配路径，用于不含正则表达式的 uri 前，如果匹配成功，不再进行后续的查找；
2. `^~` 用于不含正则表达式的 url 前，表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找；
3. `~` 表示用该符号后面的正则去匹配路径，区分大小写；
4. `~*` 表示用该符号后面的正则去匹配路径，不区分大小写。跟`~`优先级都比较低，如有多个 location 的正则能匹配的话，则使用正则表达式最长的那个；

如果 uri 包含正则表达式，则必须要有 `~`或 `~*` 标志

:::

## FQA

### location 配置中 root 和 alias 的区别

```

http {
  # root 配置资源根目录，匹配路径 /root/
  location ~ /root/ {
    # root配置路径
    root /www/asset/;
  }
  # alias 别名,匹配路径 /alias/
  location ~ /alias/ {
    # alias配置路径,句末一定要加上 /
    alias /www/asset/root/;
  }
}
#上面配置：
#  当访问 www.test.com/root/img.jpg和www.test.com/alias/img.jpg时
#  实际资源路径都是 /www/asset/root/img.jpg
#  返回的是同样的结果，都是 /www/asset/root/img.jpg 这个文件
```

:::tip
所以，可以看出:

- 当用 root 时，实际资源路径 是 配置路径的后面`加上`匹配路径，
- 而当使用 alias 时，实际资源路径 是 匹配路径`替换`成配置路径的结果
  :::

### 语法注意点

句末配置都需要加分号，避免配置错误
