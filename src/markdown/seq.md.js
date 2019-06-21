module.exports = `

以指定增量从首数开始打印数字到尾数

## 补充说明

**seq命令** 用于产生从某个数到另外一个数之间的所有整数。

###  语法

\`\`\`shell
seq [选项]... 尾数
seq [选项]... 首数 尾数
seq [选项]... 首数 增量 尾数
\`\`\`

###  选项

\`\`\`shell
-f, --format=格式        使用printf 样式的浮点格式
-s, --separator=字符串   使用指定字符串分隔数字（默认使用：\n）
-w, --equal-width        在列前添加0 使得宽度相同
\`\`\`

###  实例

 **-f选项：指定格式** 

\`\`\`shell
#seq -f"%3g" 9 11
9
10
11
\`\`\`

\`%\`后面指定数字的位数 默认是\`%g\`，\`%3g\`那么数字位数不足部分是空格。

\`\`\`shell
#sed -f"%03g" 9 11
#seq -f"str%03g" 9 11
str009
str010
str011
\`\`\`

这样的话数字位数不足部分是0，\`%\`前面制定字符串。

 **-w选项：指定输出数字同宽** 

\`\`\`shell
seq -w 98 101
098
099
100
101
\`\`\`

不能和\`-f\`一起用，输出是同宽的。

 **-s选项：指定分隔符（默认是回车）** 

\`\`\`shell
seq -s" " -f"str%03g" 9 11
str009 str010 str011
\`\`\`

要指定\`/t\`做为分隔符号：

\`\`\`shell
seq -s"\`echo -e "/t"\`" 9 11
\`\`\`

指定\`\n\`作为分隔符号：

\`\`\`shell
seq -s"\`echo -e "\n"\`" 9 11
19293949596979899910911
\`\`\`

得到的是个错误结果，不过一般也没有这个必要，它默认的就是回车作为分隔符。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;