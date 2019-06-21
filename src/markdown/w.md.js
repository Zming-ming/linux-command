module.exports = `

显示目前登入系统的用户信息

## 补充说明

**w命令** 用于显示已经登陆系统的用户列表，并显示用户正在执行的指令。执行这个命令可得知目前登入系统的用户有那些人，以及他们正在执行的程序。单独执行w命令会显示所有的用户，您也可指定用户名称，仅显示某位用户的相关信息。

###  语法 

\`\`\`shell
w(选项)(参数)
\`\`\`

###  选项 

\`\`\`shell
 -h, --no-header     不打印头信息；
 -u, --no-current    当显示当前进程和cpu时间时忽略用户名；
 -s, --short         使用短输出格式；
 -f, --from          显示用户从哪登录；
 -o, --old-style     老式输出
 -i, --ip-addr       显示IP地址而不是主机名（如果可能）

     --help     显示此帮助并退出
 -V, --version  显示版本信息。
\`\`\`

###  参数 

用户：仅显示指定用户。

###  实例 

\`\`\`shell
w
 20:39:37 up 136 days,  3:58,  1 user,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM              login@   IDLE   JCPU   PCPU WHAT
root     pts/0    222.94.97.122    20:39    1.00s  0.00s  0.00s w
\`\`\`


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;