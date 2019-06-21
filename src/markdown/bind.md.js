module.exports = `

显示或设置键盘按键与其相关的功能

## 补充说明

**bind命令** 用于显示和设置命令行的键盘序列绑定功能。通过这一命令，可以提高命令行中操作效率。您可以利用bind命令了解有哪些按键组合与其功能，也可以自行指定要用哪些按键组合。

###  语法

\`\`\`shell
bind(选项)
\`\`\`

###  选项

\`\`\`shell
-d：显示按键配置的内容；
-f<按键配置文件>：载入指定的按键配置文件；
-l：列出所有的功能；
-m<按键配置>：指定按键配置；
-q<功能>：显示指定功能的按键；
-v：列出目前的按键配置与其功能。
\`\`\`

###  实例

\`\`\`shell
bind -x '"\C-l":ls -l'    #直接按 CTRL+L 就列出目录
\`\`\`

其中keyseq可以使用\`showkey -a\`命令来获取：

\`\`\`shell
[root@localhost ~]# showkey -a

Press any keys - Ctrl-D will terminate this program

^[[A     27 0033 0x1b  上
         91 0133 0x5b
         65 0101 0x41
^[[B     27 0033 0x1b  下
         91 0133 0x5b
         66 0102 0x42
^[[D     27 0033 0x1b  左
         91 0133 0x5b
         68 0104 0x44
^[[C     27 0033 0x1b 右
         91 0133 0x5b
         67 0103 0x43
         32 0040 0x20
^M       13 0015 0x0d 字母M
^C        3 0003 0x03 Ctrl-C
^D        4 0004 0x04 Ctrl-D 退出
\`\`\`


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;