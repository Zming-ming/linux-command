module.exports = `

从当前终端登录到远程Linux主机

## 补充说明

**rlogin命令** 用于从当前终端登录到远程Linux主机。

###  语法

\`\`\`shell
rlogin(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-8：允许输入8位字符数据；
-e脱离字符>：设置脱离字符；
-E：滤除脱离字符；
-l用户名称>：指定要登入远端主机的用户名称；
-L：使用litout模式进行远端登入阶段操作。
\`\`\`

###  参数

远程主机：指定要登录的远程主机（ip地址或者域名）。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;