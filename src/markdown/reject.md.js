module.exports = `

指示打印系统拒绝发往指定目标打印机的打印任务

## 补充说明

**reject命令** 属于CUPS套件，用于指示打印系统拒绝发往指定目标打印机的打印任务。

###  语法

\`\`\`shell
reject(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-E：当连接到服务器时强制使用加密；
-U：指定连接服务器时使用的用户名；
-h：指定连接服务器名和端口号；
-r：指定拒绝打印任务的原因。
\`\`\`

###  参数

目标：指定目标打印机。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;