# **介绍**



Discord 机器人读取消息，然后推送到 Server 酱，由 Server 酱提供末端通知服务。



# **配置与使用(自搭建)**

1. 新建 Discord 机器人
   1. 登录 Discord： https://discord.com/developers/applications/me、
   2. 点击右上角“New Application” 新建应用
   3. 点击新建的Application，点击左侧"Bot"，设定机器人信息，并复制TOKEN
   4. 把TOKEN填写到`config.example.json`文件内
2. 新建discord
   1. 该服务器只有自己和上列机器人在内
3. 邀请机器人
   1. 在Application界面内，点击左侧Oauth2
   2. 选择SCOPES项中的bot
   3. 再勾选权限Administrator项
   4. 复制输入框中的url，并访问
   5. 把机器人添加到上述discord服务器
4. 订阅信息源
   1. 进入 [free-promotions (discord.com)](https://discord.com/channels/467730051622764565/845984309638463488/888154820987469864) 服务器
   2. 关注此频道并选择服务器
   3. 后续消息更新会在服务器内收到
5. 注册Server酱
   1. 该服务提供多种末端提醒功能
   2. [Server酱·Turbo版 (ftqq.com)](https://sct.ftqq.com/)
   3. 复制Key到`config.example.json`文件内
6. 启动
   1. 修改`config.example.json`文件名为`config.json`
   2. 使用node启动index.js
   3. 推荐使用pm2后台运行



# 配置与使用

暂未实现，该功能直接提供服务，无需创建discord机器人。

