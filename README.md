# fis-receiver

## 前言

本项目基于FIS2，没了。

## 服务端接收脚本部署

首先，克隆项目

```
git clone https://github.com/chyingp/fis-receiver.git
```

跟着，安装依赖

```
cd fis-receiver/
npm install
```

然后，启动服务

```
npm start
```

## 配置修改：fis-conf.js

>以下内容参考 fis-receiver/examples 的例子

在`fis-conf.js`中加入如下配置。其中：

* `receiver`：修改成服务端脚本实际部署的路径。
* `to`：修改成项目打算部署到的远程服务器上的路径。

```
fis.config.merge({
    deploy: {
        remote: {               
            receiver: 'http://127.0.0.1:3000/cgi-bin/release',  // 接收服务的地址
            from: '/',
            to: '/tmp/test' // 服务器上部署的的路径
        }       
    }   
});
```

启动远程部署。

```
fis release -d remote
```

从打印的日志可以看到项目已经被部署到远程服务器。

```
 δ 7ms

 Ω ... 35ms
 - [22:53:51] css/index.css >> /tmp/test/css/index.css
 - [22:53:51] index.html >> /tmp/test/index.html
 - [22:53:51] js/index.js >> /tmp/test/js/index.js
 - [22:53:51] map.json >> /tmp/test/map.json
```

打开远程服务器目录，查看部署结果。

```
cd /tmp/test 
test  ll
```

从目录下的内容来看，部署成功。

```
total 16
drwxr-xr-x   6 a     wheel  204  3  3 22:53 .
drwxrwxrwt  13 root  wheel  442  3  3 22:56 ..
drwxr-xr-x   3 a     wheel  102  3  3 22:53 css
-rw-r--r--   1 a     wheel   82  3  3 22:53 index.html
drwxr-xr-x   3 a     wheel  102  3  3 22:53 js
-rw-r--r--   1 a     wheel  233  3  3 22:53 map.json
```

## 相关链接

官方部署配置：
http://fex.baidu.com/fis-site/docs/api/fis-conf.html#deploy

fis中自带的php版本的例子
https://github.com/fex-team/fis-command-release/blob/master/tools/receiver.php