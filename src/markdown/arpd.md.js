module.exports = `

收集免费ARP信息

## 补充说明

**arpd命令** 是用来收集免费arp信息的一个守护进程，它将收集到的信息保存在磁盘上或者在需要时，提供给内核用户用于避免多余广播。

###  语法

\`\`\`shell
arpd(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-l：将arp数据库输出到标准输出设备显示并退出；
-f：指定读取和加载arpd数据库的文本文件，文件的格式与“-l”输出信息类似；
-b：指定arpd数据库文件，默认的位置为“/var/lib/arpd.db”；
-a：指定目标被认为死掉前查询的次数；
-k：禁止通过内核发送广播查询；
-n：设定缓冲失效时间。
\`\`\`

###  参数

网络接口：指定网络接口。

###  实例

启动arpd进程：

\`\`\`shell
arpd -b /var/tmp/arpd.db
\`\`\`

运行一段时间后，查看结果：

\`\`\`shell
arpd -l -b /var/tmp/arpd.db
\`\`\`


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;