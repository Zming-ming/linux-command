module.exports = `

强大的纯文本编辑器

## 补充说明

**joe命令** 是一款功能强大的纯文本编辑器，拥有众多编写程序和文本的优良特性。

###  语法

\`\`\`shell
joe(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-force：强制在最后一行的结尾处加上换行符号；
-lines<行数>：设置行数；
-lightoff：选取的区块在执行完区块命令后，就会恢复成原来的状态；
-autoindent：自动缩排；
-backpath：<目录>：指定备份文件的目录；
-beep：编辑时，若有错误即发出哔声；
-columns<栏位>：设置栏数；
-csmode：可执行连续查找模式；
-dopadding：是程序跟tty间存在缓冲区；
-exask：在程序中，执行“Ctrl+k+x”时，会先确认是否要保存文件；
-force：强制在最后一行的结尾处加上换行符号；
-help：执行程序时一并显示帮助；
-keepup：在进入程序后，画面上方为状态列；
-marking：在选取区块时，反白区块会随着光标移动；
-mid：当光标移出画面时，即自动卷页，使光标回到中央；
-nobackups：不建立备份文件；
-nonotice：程序执行时，不显示版本信息；
-nosta：程序执行时，不显示状态列；
-noxon：尝试取消“Ctrl+s”和“Ctrl+q”键的功能；
-orphan：若同时开启一个以上的文件，则其他文件会置于独立的缓冲区，而不会另外开启编辑区；
-pg<行数>：按“PageUp”或“PageDown”换页时，所要保留前一页的行数；
-skiptop<行数>：不使用屏幕上方指定的行数。
\`\`\`

###  参数

文件：指定要编辑的文件。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;