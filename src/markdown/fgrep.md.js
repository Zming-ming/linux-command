module.exports = `

为文件搜索文字字符串

## 补充说明

**fgrep命令** 是用来搜索 file 参数指定的输入文件（缺省为标准输入）中的匹配模式的行。fgrep 命令特别搜索 Pattern 参数，它们是固定的字符串。如果在 File 参数中指定一个以上的文件 fgrep 命令将显示包含匹配行的文件。

fgrep 命令于 grep 和 egrep 命令不同，因为它搜索字符串而不是搜索匹配表达式的模式。fgrep 命令使用快速的压缩算法。\`$, *, &#91;, |, (, )\`和\`\\\`等字符串被 fgrep 命令按字面意思解释。这些字符并不解释为正则表达式，但它们在 grep 和 egrep 命令中解释为正则表达式。因为这些字符对于 shell 有特定的含义，完整的字符串应该加上单引号\`‘ ... ’\`。. 如果没有指定文件， fgrep 命令假定标准输入。一般，找到的每行都复制到标准输出中去。如果不止一个输入文件，则在找到的每行前打印文件名。

1.  fgrep 命令和带 -F 标志的 grep命令是一样的但出错和用法消息不同-s 标志功能也不同。
2.  每行限制在 2048 个字节。
3.  段落（-p 标志下）目前限制在5000个字符的长度。
4.  不要在特定的文件中运行 grep 命令，因为会产生不可预料的结果。
5.  输入行不能包含空字符。
6.  输入文件应该以换行字符结尾。
7.  虽然可以同时指定很多标志，但某些标志会覆盖其余的标志。例如，如果同时指定 -l 和 -n ，只有文件名写入到标准输出中去。

###  语法

\`\`\`shell
fgrep(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-b：在找到的每行之前添加行所在的块编号。使用此标志有助于按照上下文查找磁盘块号码。-b 标志不能用于标准输入或者管道输入。
-c：仅显示匹配行的计数。
-e 模式：指定模式。这个工作模式很简单，但当此模式以 a-(减号) 开头时却是很有用的。
-f StringFile：指定包含字符串的文件。
-h：当多个文件被处理时隐藏文件名。
-i：当进行比较时忽略字母的大小写。
-l：只列出包含匹配行的文件名（一次）。文件名之间用换行符分隔。
n：将文件中每行的相对行号置于行前。
-pSeparator：显示包含匹配行的整个段落。段落之间将按照Separator参数指定的段落分隔符加以分隔，这些分隔符是与搜索模式有着相同格式的模式。包含段落分隔符的行将仅用作分隔符；它们不会被包含在输出中。缺省的段落分隔符是空白行。
-q：禁止所有写入到标准输出的操作，不管是否为匹配行。如果选中输入行，以 0 状态退出。
-s：仅显示出错消息。这在检查状态时很有用。
-v：显示除了匹配特定模式的行以外的所有行。
-w：执行单词搜索。
-x：显示匹配模式的行，要求无额外的字符。
-y：当进行比较时忽略字符的大小写。
\`\`\`

此命令返回以下出口值：

\`\`\`shell
0    找到匹配项。
1    未找到匹配项。
>1   发现语法错误，或者文件不可访问（即使找到了匹配项）。
\`\`\`

###  实例

 **搜索几个文件中的一个简单字符串：** 

\`\`\`shell
fgrep strcpy *.c
\`\`\`

在当前目录下所有以 .c 字符串结尾的文件中搜索字符串 strcpy。

 **计数匹配某模式的行数：** 

\`\`\`shell
fgrep -c 『{』pgm.cfgrep -c 『}』pgm.c
\`\`\`

显示在 pgm.c 中包含左括号和右括号的行的数目。

如果在您的 C 程序中一行中没有包含多于一个 { (左括号) 或者 } (右括号)，并且括号正确匹配，那么这两个数字将是一样的。如果这两个数字不一样，您可以将包含括号的行按照他们在文件中的位置顺序显示出来，使用以下命令：

\`\`\`shell
egrep {\|} pgm.c
\`\`\`

 **显示包含某模式的文件名：** 

\`\`\`shell
fgrep -l strcpy *.c
\`\`\`

搜索当前目录下以 .c 结尾的文件，然后显示包含 strcpy 字符串的文件名。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;