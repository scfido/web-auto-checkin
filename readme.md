# 简介
使用Selenium控制浏览器自动签到示例脚本。

# 环境

1. Nodejs
2. selenium webdriver chrome
3. Chrome

本脚本在Mac OS和Windows x64下都能运行，但只在Mac OS下测试过。

# 安装

```sh
git clone https://github.com/scfido/web-auto-chekin.git
cd web-auto-chekin
npm install
```

# 配置
复制`config.example.js`为`config.js`。
按你的账户信息修改文件中的`username`和`password`。


# 运行签到
```sh
npm start
```

# 自定签到
我们可以使用系统的crontab定时自定执行签到脚本。例如每天8：30自动签到。
```sh
# 编辑定时任务
crontab -e

# 输入以下内容，签到脚本路径要根据你的文件位置修改
30 8 * * * /web-auto-checkin/check.sh

# 保存以后可以查询计划任务列表
crontab -l
```