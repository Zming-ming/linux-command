module.exports = `

一款表达式计算工具

## 补充说明

**expr命令** 是一款表达式计算工具，使用它完成表达式的求值操作。

expr的常用运算符：

- 加法运算：\`+\`
- 减法运算：\`-\`
- 乘法运算：\`\*\`
- 除法运算：\`/\`
- 求摸（取余）运算：\`%\`

###  语法

\`\`\`shell
expr(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
--help：显示指令的帮助信息；
--version：显示指令版本信息。
\`\`\`

###  参数

表达式：要求值的表达式。

###  实例

\`\`\`shell
result=\`expr 2 + 3\`
result=$(expr $no1 + 5)
\`\`\`


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;