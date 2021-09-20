# **介绍**

Discord 机器人读取消息，然后推送到 Server 酱，由 Server 酱提供末端通知服务。

# 配置与使用

`html`文件夹内为 php 后端内容，其余文件是 nodejs 内容。
其中 php 用来通知用户，nodejs 用来监听 discord 消息。

## 使用公共服务

由于程序初衷用于自用，所以预想会有性能问题，等到性能不够用时再进行优化。

网页：https://steam.3gxk.net
sendkey：由 https://sct.ftqq.com/ 提供
密钥：1472580369

本服务会在 steam 有限免游戏时自动进行推送通知。

## 自搭建

1. 新建 Discord 机器人
   1. 登录 Discord： https://discord.com/developers/applications/me、
   2. 点击右上角“New Application” 新建应用
   3. 点击新建的 Application，点击左侧"Bot"，设定机器人信息，并复制 TOKEN
   4. 把 TOKEN 填写到`config.example.json`文件内
2. 新建 discord
   1. 该服务器只有自己和上列机器人在内
3. 邀请机器人
   1. 在 Application 界面内，点击左侧 Oauth2
   2. 选择 SCOPES 项中的 bot
   3. 再勾选权限 Administrator 项
   4. 复制输入框中的 url，并访问
   5. 把机器人添加到上述 discord 服务器
4. 订阅信息源
   1. 进入 [free-promotions (discord.com)](https://discord.com/channels/467730051622764565/845984309638463488/888154820987469864) 服务器
   2. 关注此频道并选择服务器
   3. 后续消息更新会在服务器内收到
5. 修改`config.example.json`中的`pushkey`，保持与`html/emit.php`中`key`相同
6. 修改`config.example.json`文件为`config.json`
7. 修改 `index.js`中的 post 地址为`html/emit.php`地址。
8. nodejs 运行 index.js、html 文件夹使用 php
9. 在 php 网页中添加任务

网页添加 sendkey 时，密钥和`html/create.php`中的`pwd`相同
