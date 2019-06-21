module.exports = `

删除待执行任务队列中的指定任务

## 补充说明

**atrm命令** 用于删除待执行任务队列中的指定任务。

###  语法

\`\`\`shell
atrm(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-V：显示版本号。
\`\`\`

###  参数

任务号：指定待执行队列中要删除的任务。

###  实例

删除已经排队的任务

\`\`\`shell
atq        # 显示当前已经设置的任务
2 Mon May 17 08:00:00 2010 a root
1 Sat May 15 17:00:00 2010 a root

atrm 2     # 删除任务2
\`\`\`


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;