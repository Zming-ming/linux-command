module.exports = `

安装核心载入开机管理程序

## 补充说明

**lilo命令** 用于安装核心载入，开机管理程序。lilo是个Linux系统核心载入程序，同时具备管理开机的功能。单独执行lilo指令，它会读取/etc/lilo.conf配置文件，然后根据其内容安装lilo。

Linux lilo已经成为所有 Linux 发行版的标准组成部分。作为一个 较老的/最老的 Linux 引导加载程序，它那不断壮大的 Linux 社区支持使它能够随时间的推移而发展，并始终能够充当一个可用的现代引导加载程序。有一些新的功能，比如增强的用户界面，以及对能够突破原来 1024-柱面限制的新 BIOS 功能的利用。

虽然 LILO 仍在不断地发展，但 LILO 工作原理的基本概念保持不变。

###  语法

\`\`\`shell
lilo(选项)
\`\`\`

###  选项

\`\`\`shell
-b<外围设备代号>：指定安装lilo之处的外围设备代号；
-c：使用紧致映射模式；
-C<配置文件>：指定lilo的配置文件；
-d<延迟时间>：设置开机延迟时间；
-D<识别标签>：指定开机后预设启动的操作系统，或系统核心识别标签；
-f<几何参数文件>：指定磁盘的几何参数配置文件；
-i<开机磁区文件>：指定欲使用的开机磁区文件，预设是/boot目录里的boot.b文件；
-I<识别标签>：显示系统核心存放之处；
-l：产生线形磁区地址；
-m<映射文件>：指定映射文件；
-P<fix/ignore>：决定要修复或忽略分区表的错误；
-q：列出映射的系统核心文件；
-r<根目录>：设置系统启动时欲挂入成为根目录的目录；
-R<执行指令>：设置下次启动系统时，首先执行的指令；
-s<备份文件>：指定备份文件；
-S<备份文件>：强制指定备份文件；
-t：不执行指令，仅列出实际执行会进行的动作；
-u<外围色设备代号>：删除lilo；
-U<外围设备代号>：此选项的效果和指定"-u"参数类似，当不检查时间戳记；
-v：显示指令执行过程；
-V：显示版本信息。
\`\`\`

###  实例

 **使用 LILO 作为引导加载程序** 

要使用 LILO 作为引导加载程序，需要做的事情取决于是要进行全新安装还是要让已经安装的 Linux 改为使用 LILO。如果是要进行全新安装，那么直接跳转到 配置 LILO 那一节。如果已经安装了某个 Linux 发行版，那么通常可以选择安装并配置 LILO（并可以将机器引导到新的 Linux 安装）。

要将现有的 Linux 迁移到 LILO，首先必须获得最新版本的 LILO（见 参考资料）。在做任何其他事情之前，建议您确保在手边拥有一张 Linux 引导盘 —— 如果偶而弄错了某些地方，它可以提供很大的帮助，能够恢复到初始的 Linux 配置！将 LILO 安装到系统中之后，让它接管 MBR 非常简单。以 root 用户身份输入：

\`\`\`shell
/sbin/lilo -v -v
\`\`\`

这将使用当前的 LILO 默认值，抹去 MBR 中当前所有内容。不过，请阅读 配置 LILO，以确保能够按预期引导起来。也要注意，如果想要在同一机器上运行 Windows 和 Linux，那么应该先安装 Windows OS，然后再安装 Linux OS，这样，在 Linux 安装中所选择的引导加载程序就不会被 Windows 引导加载程序所覆盖。与 Linux 引导加载程序不同，多数 Window 引导加载程序不支持引导 Linux。如果已经先安装了 Linux，那么只需要自己创建一张 Linux 引导盘，这样就可以在安装完 Windows 之后，回到 Linux 安装中并重写 MBR。

 **配置 LILO** 

LILO 的配置都是通过位于 /etc/lilo.conf 的一个配置文件来完成的。清单 1 给出了一个示例配置，使用的是我的家用机器，支持 Linux 和 Windows 机器的双重引导。了解我的工作站的基本配置，就可以想像出这些配置是如何与实际机器相关联的：

主 HDD（物理磁盘 1）上安装了 Windows XP（最初机器上只有它）。在 Linux 术语中，这个 HDD 是 /dev/hda（在 grub 术语中是 hd0,0）。

从 HDD（物理磁盘 2）上安装了 Red Hat Linux；root 分区位于这个硬盘驱动器的第三个分区，即 /dev/hdb3（在 GRUB 术语中是 hd1,3）。

lilo.conf 示例文件：

\`\`\`shell
boot=/dev/hda
map=/boot/map
install=/boot/boot.b
prompt
timeout=100
compact
default=Linux
image=/boot/vmlinuz-2.4.18-14
	label=Linux
	root=/dev/hdb3
	read-only
	password=linux
other=/dev/hda
	label=WindowsXP
\`\`\`

配置文件选项说明：

*   boot= 行告诉 LILO 在哪里安装引导加载程序。在上面的示例中，将把它安装到第一块硬盘的 MBR。也可以选择将 LILO 安装到 /dev/hdb3（示例中的 Linux 分区），这样需要向 /dev/hda 安装另一个引导加载程序，并令其指向 LILO 引导加载程序；然后只需要让 LILO 作为二级引导加载程序。通常，引导加载程序应该位于 /dev/hda。还可以将这个参数指向软盘驱动器（最常见的是 /dev/fd0），来制做 LILO 软盘引导磁盘。
*   map= 指向引导期间 LILO 内部使用的映射文件。当使用 /sbin/lilo 命令安装 LILO 时， 它会自动生成这个文件，其中包含有描述符表（还有其他内容）。建议不要改动这个文件！
*   install= 是 LILO 在引导过程中内部使用的文件之一。它同时包含有引导加载程序的主要部分和二级部分。boot.b 文件的 一个片段被写入到 MBR（引导加载程序的主要部分），它会指向那个映射，接下来指向二级引导加载程序。同样，不要改动它！
*   prompt= 告诉 LILO 使用用户界面（本例中给出了两个选择 —— Linux 和 WindowsXP）。除了使用 prompt/user 界面以外，在适当情况下还可以为 Linux 内核等指定具体的参数。如果不在配置文件中指定此选项，那么 LILO 将引导到 默认的 OS，不发生任何用户交互，也不会等待。（但是请注意，如果在引导时按下了 SHIFT，那么还是可以得到提示，当不想把 引导加载程序暴露给普通用户时，这非常有用）。
*   timeout= 是引导提示在自动引导默认 OS（本例中是 Linux）之前的等待时间（以十分之一秒为单位）。 如果在 lilo.conf 没有指定 prompt，那么这个参数就会被忽略。
*   compact 选项可以大大加速引导过程，它会将连续的读磁盘的请求合并为一个单独的请求。不过，这可能是 一件祸福参半的事情，因为我在论坛上看到过很多贴子提到了关于此选项的问题。当希望从软盘引导时，这个选项尤其有用。
*   default= 选项告诉 LILO 默认使用哪个映像进行引导，比如在等待超时之后。这与 lilo.conf 文件中的某个映像的 标签相关联。如果没有在配置文件中指定此选项，那么它将引导文件中指定的第一个映像。
*   对于允许用户引导到的每一个 Linux 版本，都应该指定 image= 及以下三个选项。image 选项指定希望 引导到的内核版本。
*   label= 标明了在运行期间希望能够从用户界面引导的不同 OS。另外，这个标签用于指定引导的默认 OS。 （注意：标签名称中避免出现空格；否则，引导那个文件时会出现无法预期的错误。）
*   root= 告诉 LILO OS 文件系统实际所在的位置。在我们的示例中为 /dev/hdb3，即第二块硬盘上的第三个分区。
*   read-only 告诉 LILO 以只读的方式初始引导到文件系统。OS 一旦完全引导起来，就会以读写方式挂载。
*   password= 允许您为将要引导到的特定 OS 设置口令。不幸的是，这个口令是以可读文本的方式保存在 lilo.conf 文件中，所以，所有人都能够读取它。如果需要，还可以对想要引导自的每个操作系统设置口令（在我们的示例中，只为 Linux 的引导 设置了一个口令）。
*   other= 的动作类似于 image 和 root 选项的组合，但是用于除了 Linux 以外的其他操作系统。 在我们的示例中，它告诉 LILO 到哪里去找到 Windows OS（位于第一块硬盘的第一个分区）。如果先安装 Windows，后安装 Linux，通常会是这样。
*   label= 与所有其他 label 选项相同。

在 lilo.conf 文件中可以使用很多其他参数，不过清单 1 中的参数就足以让机器可用了。要获得关于 lilo.conf 的这些以及其他参数的 进一步资料，请参考手册页（man lilo.conf）。由于在引导时不会读取 lilo.conf，所以，当这个文件有改动时，需要“更新”MBR。 如果不完成此步骤就重新引导，那么对 lilo.conf 的修改不会在启动中反映出来。与先前将 LILO 写入 MBR 类似，需要运行：

\`\`\`shell
/sbin/lilo -v -v
\`\`\`

\`-v -v\`标记会为您给出非常详细的输出。当像我们那样运行 LILO 时，有很多参数可以指定。 参阅手册页以获得更进一步的信息（man lilo）。

 **初始引导过程** 

当 LILO 初始引导时，它会按次序打印出每个字母 —— L-I-L-O。如果所有字母都显示出来，那么第一阶段引导就成功了。缺少任何内容 都表示出现了问题：

L：第一阶段引导加载程序已经被加载。如果 LILO 停止在这里，那么是在引导第二阶段引导加载程序时出现了问题。这通常会伴随有一个错误代码。 在这个阶段的常见问题是介质问题，或者在 lilo.conf 文件中指定了不正确的磁盘参数。

LI：第二阶段引导加载程序已经被加载。LILO 在此处停止表示第二阶段引导加载程序不能被执行。同样，这可能是因为出现了与只显示 L 类似的问题： 正在加载，或者因 boot.b 文件被破坏、移动或删除而不能加载。

LIL：第二阶段引导加载程序正在被执行。此时，可能会再次出现介质问题，或者映射文件（如 lilo.conf 文件中所指定的）在寻找描述符表时 可能会出现问题。

LIL?：加载到与上面相同的阶段。这通常意味着加载第二阶段引导加载程序使用了错误的地址，最常见的原因是 boot.b 所在的位置与 lilo.conf 文件所指定的不同。

LIL-：加载到与上面相同的阶段。加载描述符表时出现问题，最常见的原因是描述符表错误。

LILO：LILO 成功被加载，没有出现任何错误。

 **引导时的附加配置** 

LILO 被成功加载后，将看到 LILO 提示符。还是使用前面的示例 lilo.conf 文件，此时将有两个选择，可能对 LILO 新手来说并不直观。首先，可以 让 LILO 超时（10 秒后），这将引导\`/dev/hdb3\`，即 Linux 分区。另外，可以按下 TAB 键，这将列出将要引导的操作系统选项。在我们的示例 lilo.conf 中， 将得到的选项是 “Linux” 和 “Windows”。输入哪一个，就会引导到哪个 OS。指定加载 Linux 选项，会提示输入一个口令，在本例中是 linux。如果输入的口令有误，则会返回 LILO 提示符。

不幸的是，LILO 不支持引导期间的交互式配置，所以，只能在 lilo.conf 中或者运行\`/sbin/lilo\`时指定选项。

关于第一次尝试 LILO 的最后一点建议是：我发现使用软盘引导磁盘比使用硬盘实现 LILO 配置更为安全。为此，必须在 lilo.conf 文件中使用\`boot=/dev/fd0\`替换\`boot=/dev/hda\`。那样，如果弄乱了lilo.conf文件 中的任何配置，都可以取出引导磁盘并像先前一样引导到 Linux。当使用软盘进行引导一切正常以后，可以将lilo.conf修改回\`boot=/dev/hda\`，然后最后一次运行\`/sbin/lilo\`来上传修改。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
`;