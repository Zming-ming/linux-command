module.exports = `

删除由alias设置的别名

## 补充说明

**unalias命令** 用来取消命令别名，是为shell内建命令。如果需要取消任意一个命令别名，则使用该命令别名作为指令的参数选项即可。如果使用\`-a\`选项，则表示取消所有已经存在的命令别名。

###  语法

\`\`\`shell
unalias(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-a：取消所有命令别名。
\`\`\`

###  参数

命令别名：指定要取消的命令别名。

###  实例

使用unalias命令将已经设置的命令别名"cc"取消，输入如下命令：

\`\`\`shell
unalias cc            #取消已经设置的命令别名
\`\`\`

上面的命令执行后，系统会将指定的命令别名取消掉。如果用户再使用该命令别名时，系统将提示如下信息：

\`\`\`shell
cc：no input files
\`\`\`

因此，当使用该指令将命令别名取消后，将不能够再进行使用。否则，将出现错误提示。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;