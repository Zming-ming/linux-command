module.exports = `

用于查找并显示用户信息

## 补充说明

**finger命令** 用于查找并显示用户信息。包括本地与远端主机的用户皆可，帐号名称没有大小写的差别。单独执行finger指令，它会显示本地主机现在所有的用户的登陆信息，包括帐号名称，真实姓名，登入终端机，闲置时间，登入时间以及地址和电话。

###  语法

\`\`\`shell
finger(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-l：列出该用户的帐号名称，真实姓名，用户专属目录，登入所用的Shell，登入时间，转信地址，电子邮件状态，还有计划文件和方案文件内容；
-m：排除查找用户的真实姓名；
-s：列出该用户的帐号名称，真实姓名，登入终端机，闲置时间，登入时间以及地址和电话；
-p：列出该用户的帐号名称，真实姓名，用户专属目录，登入所用的Shell，登入时间，转信地址，电子邮件状态，但不显示该用户的计划文件和方案文件内容。
\`\`\`

不指定finger的选项如果提供操作者的话，缺省设为\`-l\`输出风格，否则为\`-s\`风格，注意在两种格式中，如果信息不足，都有一些域可能丢失，如果没有指定参数finger会为当前登录的每个用户打印一个条目。

###  参数

用户名：指定要查询信息的用户。

###  实例

在计算机上使用finger：

\`\`\`shell
[root@localhost root]# finger
login Name Tty Idle Login time Office Office Phone
root root tty1 2 Dec 18 13
root root pts/0 1 Dec 18 13
root root *pts/1 Dec 18 13
\`\`\`

如果要查询远程机上的用户信息，需要在用户名后面接\`@主机名\`，采用\`用户名@主机名\`的格式，不过要查询的网络主机需要运行finger守护进程的支持。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;