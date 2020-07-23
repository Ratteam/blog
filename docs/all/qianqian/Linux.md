<TOC />

## vim-plug插件管理器插件使用指南

> Vim-plug 是一个自由、开源、速度非常快的、极简的 vim 插件管理器。它可以并行地安装或更新插件。你还可以回滚更新。它创建浅层克隆shallow clone最小化磁盘空间使用和下载时间。它支持按需加载插件以加快启动时间。其他值得注意的特性是支持分支/标签/提交、post-update 钩子、支持外部管理的插件等。

### 1.安装
Windows中gvim安装

下载地址：https://github.com/junegunn/vim-plug.git

将下载到的plug.vim放入D:\Program Files (x86)\Vim\vim81\autoload内

### 2.用法

#### 安装插件
要安装插件，你必须如下所示首先在 Vim 配置文件中声明它们。一般 Vim 的配置文件是 ~/.vimrc，Neovim 的配置文件是 ~/.config/nvim/init.vim。请记住，当你在配置文件中声明插件时，列表应该以 call plug#begin(PLUGIN_DIRECTORY) 开始，并以 plug#end() 结束。

例如，我们安装 “lightline.vim” 插件。为此，请在 ~/.vimrc 的顶部添加以下行。
```vim
call plug#begin('~/.vim/plugged')
Plug 'itchyny/lightline.vim'
call plug#end()
```
在 vim 配置文件中添加上面的行后，通过输入以下命令重新加载：
:source ~/.vimrc
或者，只需重新打开 Vim 编辑器

现在，打开 vim 编辑器：

$ vim
使用以下命令检查状态：

:PlugStatus
然后输入下面的命令，然后按回车键安装之前在配置文件中声明的插件。

:PlugInstall
更新插件
要更新插件，请运行：

:PlugUpdate
更新插件后，按下 d 查看更改。或者，你可以之后输入 :PlugDiff。

审查插件
有时，更新的插件可能有新的 bug 或无法正常工作。要解决这个问题，你可以简单地回滚有问题的插件。输入 :PlugDiff 命令，然后按回车键查看上次 :PlugUpdate的更改，并在每个段落上按 X 将每个插件回滚到更新前的前一个状态。

删除插件
删除一个插件删除或注释掉你以前在你的 vim 配置文件中添加的 plug 命令。然后，运行 :source ~/.vimrc 或重启 Vim 编辑器。最后，运行以下命令卸载插件：

:PlugClean
该命令将删除 vim 配置文件中所有未声明的插件。

升级 Vim-plug
要升级vim-plug本身，请输入：

:PlugUpgrade
如你所见，使用 Vim-plug 管理插件并不难。它简化了插件管理。现在去找出你最喜欢的插件并使用 Vim-plug 来安装它们。

参考：https://linux.cn/article-9751-1.htm
## netrw文件浏览器插件使用指南

>在vim 7.0之前，文件浏览功能由explorer.vim插件提供；从vim 7.0之后，这个插件被netrw.vim插件所代替。Netrw插件伴随vim发行，不需要单独安装。

启动
使用:Explore命令或缩写:E命令（注意E大写），将在当前窗口中打开文件浏览器：


使用:Sexplore命令或缩写:Sex命令，将在水平拆分窗口中打开文件浏览器：


使用:Vexplore命令或缩写:Vex命令，将在垂直拆分窗口中打开文件浏览器：


当然，也可以在启动Netwr时，指定浏览特定的文件夹：

:Sex C:\Temp

打开文件
在Netrw中，可以切换目录并打开文件。使用键盘移动光标至文件或文件夹名称上，然后点击Enter回车键，可以在当前窗口中打开该文件或文件夹；如果希望在新建窗口中打开文件或文件夹，那么可以点击o键。

直接使用鼠标点击文件或文件夹名称，也可以在当前窗口中打开该文件或文件夹。

点击/键，可以在文件列表中进行查找。


改变盘符和目录
通过编辑目录，可以使用Netrw来浏览该文件夹：

:edit E:\_ToDo

排序
通过设置g:netrw_sort_by和g:netrw_sort_direction，可以按照最近修改时间来进行排序：

let g:netrw_sort_by = 'time'
let g:netrw_sort_direction = 'reverse'
重命名
点击大写R键，然后修改窗口底部信息中的第二个文件名，可以重命名当前光标下的文件。


删除
点击大写D键，然后在窗口底部信息中进行确认，则可以删除当前光标下的文件。


配置文件打开方式
默认情况下，Netrw将在当前窗口中打开文件。 使用以下命令，可以配置Netrw打开文件的方式：

let g:netrw_browse_split = n

其中，参数的值可以为以下四种：

用水平拆分窗口打开文件
用垂直拆分窗口打开文件
用新建标签页打开文件
用前一个窗口打开文件
定制外观
点击i键，可以在thin/long/wide/tree这4种显示模式之间切换。也可以在vimrc配置文件中，使用以下命令来设置显示模式：

let g:netrw_liststyle = 3

点击I键，可以显示或隐藏Netrw顶端的横幅（Banner）。例如以下命令，将隐藏横幅：

let g:netrw_banner = 0

使用以下命令，可以设置文件浏览器的宽度，为窗口的25%：

let g:netrw_winsize = 25

通过以上配置，我们可以得到通常IDE环境的文件显示效果：


退出
使用:q命令，可以退出当前的Netrw；如果Netrw是唯一打开的窗口，那么将同时退出Vim。

我们可以将Netrw理解为，使用编辑命令对于目录进行操作的特殊缓冲区。也就是说，我们可以使用:bdelete命令，来关闭Netwr打开的缓冲区，但不会退出Vim。

帮助信息
Netrw不仅可以浏览本地文件，还支持远程文件的读写。你可以通过ftp，ssh，http等多种协议来浏览远程机器的目录并编辑远程文件。

如果你使用图形界面的GVim，那么也可以通过菜单来使用Netrw的功能：


在Netrw中点击F1键，或者使用:help netrw命令，可以查看更多帮助信息。
## gvim文本编辑器使用指南

>gVim是着名文本编辑器Vim的windows版本

### 1.安装gvim
下载地址：https://pc.qq.com/detail/1/detail_3021.html

安装后出现gvim打开中文乱码和菜单乱码处理方法
在配置文件_vimrc添加以下内容
```vim
"解决页面乱码
set encoding=utf-8
set fileencodings=utf-8,chiese,latin-1
if has("win32")
  set fileencoding=chinese
else
  set fileencoding=utf-8
endif
"解决菜单乱码
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim
"解决console输出乱码
language messages zh_CN.utf-8
set gfn=Consolas:h11
set nu
set cindent
```
### 2.安装Vim-plug插件管理器
下载地址：https://github.com/junegunn/vim-plug.git

将下载到的plug.vim放入D:\Program Files (x86)\Vim\vim81\autoload内

### 3.使用文件浏览器(Netrw)
>在vim 7.0之前，文件浏览功能由explorer.vim插件提供；从vim 7.0之后，这个插件被netrw.vim插件所代替。Netrw插件伴随vim发行，不需要单独安装。

使用:Explore命令或缩写:E命令（注意E大写），将在当前窗口中打开文件浏览器

vim打开多窗口、多文件之间的切换
```vim
打开多个文件：
一、vim还没有启动的时候：
1.在终端里输入 
vim file1 file2 ... filen便可以打开所有想要打开的文件
2.vim已经启动
输入
:e file
可以再打开一个文件，并且此时vim里会显示出file文件的内容。
3.同时显示多个文件：
:sp         //水平切分窗口
:vsplit     //垂直切分窗口
二、在文件之间切换：
1.文件间切换
Ctrl+6  //两文件间的切换
:bn      //下一个文件
:bp      //上一个文件
:ls       //列出打开的文件，带编号
:b1~n  //切换至第n个文件
对于用(v)split在多个窗格中打开的文件，这种方法只会在当前窗格中切换不同的文件。
2.在窗格间切换的方法
Ctrl+w+方向键——切换到前／下／上／后一个窗格
Ctrl+w+h/j/k/l ——同上
Ctrl+ww——依次向后切换到下一个窗格中
```
### 4.常用的操作技巧
insert模式
```
i insert模式，按ESC回到Normal模式
x 删除当前光标所在处的一个字符
:wq 存盘+退出（:w 存盘，:q 退出）
dd 删除当前行，并把内容复制到剪贴板
p 粘贴
hjkl 左下上右移动
a 在光标后插入
o 在当前行下插入新行
O 在当前行上插入新行
cw 替换从光标所在位置后到第一个单词结尾的字符
0 数字零，到行头
^ 到本行第一个不是blank字符的位置（所谓blank字符就是空格，tab，换行，回车等）
$ 到本行行尾
_ 到本行最后一个不是blank字符的位置
/pattern 搜索pattern字符串 \c大小写不敏感 \C大小写敏感（如果有多个匹配项，按n可到下一个）
p 粘贴在当前位置之后，P是之前
yy 拷贝当前行
u 撤销
c-r 恢复（ctrl+r）
:e <path/file> 打开一个文件
:w 存盘
:saveas <path/file> 另存为
:x :wq 保存并退出
:q! 退出不保存
:bn :bp 打开多个文件时，使用这两个命令切换到上一个下一个文件
. 可重复上一组命令
N<command> 重复命令N次
2dd 删除两行
3p 粘贴3次
NG 13G跳转到13行
gg 到第一行
G 到最后一行
w 到下一个单词的开头
e 到一个单词的结尾
% 匹配括号移动
* # 匹配光标当前位置的单词，移动当上一个下一个
0y$ 0先到行头，y从这里开始拷贝，$拷贝到本行最后一个字符
ye 从当前位置拷贝到本单词最后一个字符
y2/foo 拷贝2个foo之间的字符串
d 删除
v 可视化选择(你可以先按v，然后移动光标，你就会看到文本被选择，然后，你可以d，也可y，也可以变大写等)
gU 变大写
gu 变小写
fa 到下一个为a的字符处
t, 到逗号前的第一个字符处
3fa 在当前行查找第三个出现的a
F T f t 用法一样，只是方向相反
dt" 删除所有内容，知道遇到双引号"
```
visual模式
```
区域选择：
<action>a<object>
<action>i<object>
action:可以是任何命令，如：d（删除），y（拷贝）
object:可能是w（一个单词）,W（一个以空格为分隔的单词），s（一个句子），p（一个段落）。也可以是特别的符号："、')]}。
例如：假设你在一个字符串 (map (+) ("foo")) 第一个o的位置
vi 选择了foo
va" 选择了"foo"
vi) 选择了"foo"
va) 选择了("foo")
v2i) 选择了map (+) ("foo")
v2a) (map (+) ("foo"))

块操作<c-v>
例如：^ <c-v> <c-d> i-- [ESC]
^ 到行头
<c-v> 开始块操作（windows下使用<c-q>）
<c-d> 向下移动（也是可以使用hjkl，%等）
i-- [ESC] 进入insert模式，插入--，按ESC来为块内每一行生效

自动提示：<c-n>和<c-p>
在insert模式下，你可以输入一个词的开头，然后按<c-p>或<c-n>，自动补齐功能就出现了

宏录制：qa q @a @@
qa 把你的操作记录在寄存器a
q 停止录制
@a 会替换被录制的宏
@@ 用来替换最新录制的宏
例如：在一个只有一行且这一行只用1字符串，键入如下命令 qaYp<c-a>q
qa 开始录制
Yp 复制行
<c-a> 数字1增加1
q 停止录制
@a 在1下一行写下2
@@ 在2下一行写下3
100@@ 会创建100行，并把数据增加到103

可视化选择：v V <c-v>
J 把所有行连起来（变成一行）
< > 左右缩进
= 自动给缩进

分屏：:split vsplit
:split 创建分屏（vsplit创建垂直分屏）
<c-w><dir> dir就是方向，可以是hjkl,用来切换分屏
<c-w>_ <c-w>| 最大化尺寸
<c-w>+ <c-w>- 增加减小窗口尺寸

查找和替换：
:s/foo/goo/g 在当前行查找foo替换为goo
:%s/foo/goo/g 在全文查找foo替换为goo
:21,31s/foo/goo/g 在21行到31行之间查找foo替换为goo
:s/foo/goo/i i大小写不敏感查找替换,I敏感
:s/foo/goo/gc c表示需要确认是否替换

自动折行 是把长的一行用多行显示 , 不在文件里加换行符用
:set wrap 设置自动折行
:set nowrap 设置不自动折行

快速复制一个单词
vey 复制
vep 粘贴
```


# g++编译器使用指南
> gcc and g++分别是GNU的c & c++编译器。

## g++编译时的步骤
gcc/g++在执行编译的时候一般有下面4步：

⒈预处理，生成.i的文件[预处理器cpp]。
⒉将预处理后的文件转换成汇编语言，生成文件.s[编译器egcs]。
⒊由汇编变为目标代码（机器代码）生成.o的文件[汇编器as]。
⒋连接目标代码，生成可执行程序[链接器ld]。

## 常用操作

```
$ gcc main.cpp -lstdc++ -o main
```
>下面是一个保存在文件 helloworld.cpp 中一个简单的 C++ 程序的代码：
```
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}
```
>最简单的编译方式：
```
$ g++ helloworld.cpp
```
>由于命令行中未指定可执行程序的文件名，编译器采用默认的 a.out。程序可以这样来运行：
```
$ ./a.out
Hello, world!
```
>通常我们使用 -o 选项指定可执行程序的文件名，以下实例生成一个 helloworld 的可执行文件：
```
$ g++ helloworld.cpp -o helloworld
```
>执行 helloworld:
```
$ ./helloworld
Hello, world!
```
>如果是多个 C++ 代码文件，如 runoob1.cpp、runoob2.cpp，编译命令如下：
```
$ g++ runoob1.cpp runoob2.cpp -o runoob
```
>生成一个 runoob 可执行文件。

>g++ 有些系统默认是使用 C++98，我们可以指定使用 C++11 来编译 main.cpp 文件：
```
g++ -g -Wall -std=c++11 main.cpp
```
g++ 常用命令选项
```
选项	解释
-ansi	只支持 ANSI 标准的 C 语法。这一选项将禁止 GNU C 的某些特色， 例如 asm 或 typeof 关键词。
-c 	只编译并生成目标文件。
-DMACRO 	以字符串"1"定义 MACRO 宏。
-DMACRO=DEFN	以字符串"DEFN"定义 MACRO 宏。
-E 	只运行 C 预编译器。
-g 	生成调试信息。GNU 调试器可利用该信息。
-IDIRECTORY 	指定额外的头文件搜索路径DIRECTORY。
-LDIRECTORY	指定额外的函数库搜索路径DIRECTORY。
-lLIBRARY	连接时搜索指定的函数库LIBRARY。
-m486 	针对 486 进行代码优化。
-o	FILE 生成指定的输出文件。用在生成可执行文件时。
-O0	不进行优化处理。
-O 	或 -O1 优化生成代码。
-O2	进一步优化。
-O3	比 -O2 更进一步优化，包括 inline 函数。
-shared	生成共享目标文件。通常用在建立共享库时。
-static	禁止使用共享连接。
-UMACRO 	取消对 MACRO 宏的定义。
-w	不生成任何警告信息。
-Wall 	生成所有警告信息。
```

## Linux虚拟机添加新硬盘
```
一、在vmwarre添加新硬盘，忽略，可以看原文。
二、虚拟机中windows对于虚拟的磁盘的挂载
方法比较的简单，和在实际的电脑中操作一样，只要在“设备管理器”中将新建的虚拟磁盘进行分区格式化后即可正常使用
基于windows中设置较为简单，故而没有截图
1、右击“我的电脑”－“管理”－“磁盘管理”，然后会看到新分配的磁盘没有分区
2、右键“新加卷”（未分区的磁盘），选择“新建”，按照向导，一步步，选择硬盘分区模式、格式化硬盘即可使用
三、虚拟机中Linux对于虚拟的磁盘的挂载
1、使用“fdisk -l”的命令查看当前系统的分区（如果刚才设置VMware--setting的时候运行了系统，则会出现下图情况：没有识别到新的磁盘即sdb），解决办法，重启虚拟机：shutdown -r now
 
 2、如果执行第一步的时候是关闭虚拟机中的系统的，则使用“fdisk -l 命令(root 用户)的时候则会出现新的磁盘sdb（不过提示未分区）
 
 
 
3、对新建的磁盘进行分区及格式化的工作：
输入 fdisk  /dev/sdb
终端会提示：Command （m for help）：
 
 
 
4、在上一步骤的基础上输入：m  则会出现下列的提示：
 
 
 
5、然后根据提示输入：n
会出现下面的提示，依次输入p 和 1 即可
接着便会提示卷的起始地址和结束地址，都保持默认按回车的即可（意思是只分一个区）
 
 
 
6、输入“w”保存并推出
 
 
7、再次使用 “fdisk -l ”这个命令来查看会发现出现了/dev/sdb1（说明已经完成了分区工作）
 
 
 8、对新建的分区进行格式化：格式化成ext3的文件系统即可
Mkfs.ext3 /dev/sdb1
或者下面的那个 : Mkfs  -t ext3 /dev/sdb1
出现Proceed anyway？（y，n）时，这时输入“Y”回车。    
 
 
9、下面便是对于分好区的/dev/sdb1 这一个分区进行挂载及访问
9、1手动挂载：使用mount /dev/sdb1  /要挂载的目录（自己自定义）
访问时：cd  /挂载的目录   即可对其进行存储和访问
 如:
格式化完成后，我们要做的就是对新硬盘设定挂载点,可以新建目录，例如：mkdir /newdisk然后把新硬盘挂载到这个位置：mount /dev/sdb1 /newdisk 挂载好了
，查看一下：df 
 
(我这个是sdb)
9、2自动挂载：修改/etc/fstab即可
使用vim /etc/fstab打开配置的文件，然后将下面的一行文字添加即可
/dev/sdb1       /newdisk （这个挂载的目录你自己设置即可）      ext3    defaults       0       0

```

## 使用linux分割较大的日志文件，查看日志
```
在排查项目问题的时候，日志文件是很有参考价值的。但是如果项目运行时间比较久，产生的日志可能是海量的，如果需要查看较大日志文件就会很麻烦，我们可以使用linux提供的split命令，将较大的日志文件切割为小文件，方便我们查看日志文件，进行问题的定位。
1.切割文件
1）使用split分割大文件
原文件为图所
命令按照行数分割 分割后的文件自动加上后缀名 --verbose参数显示进度。
##$ split -l 50000 mgr-0618.log new-file_1 --verbose
如果所示：![默认生成的新文件以字母排序]
-d参数为新生成的文件使用数字的后缀。如图：

2:）按照字节大小进行分割
命令：split -b 40m mgr-0618.log -d newfile_ --verbose
![以每个文件40mb分割，]

3）合并文件
命令：cat newfile_* > catfile.log
![合并之后的文件和原文件大小是相同的]

```

## ssh 登录时常出现的几种错误以及解决方法（Linux）
```
1.SSH连接时出现Connection refused,如下：
报错如下：
ssh: connect to host 123.123.123.111 port 22: Connection refused

通常是由于22端口未打开、ssh服务未启动或防火墙禁止22端口等原因引起的

解决方法：

【1】启动服务，设置防火墙步骤如下：

<1>.进入该服务器（本地登陆）

<2>.查看ssh服务是否启动
systemctl status sshd

如未启动
systemctl start sshd

<3>.查看端口是否打开
netstat -lnput |grep :22

如未打开,再次启动sshd

<4>测试网络的联通性
ping www.baidu.com (ping外网)

如果ping不通，就检查dns

如果dns无问题，就说明是网络原因，看服务器的网线是否连接或是否有问题

<5>如果能连接外网，就查看服务器的防火墙规则,并开放ssh服务的22号端口（如防火墙未放行ssh的端口）

iptables -L

[1]直接打开端口：
iptables -I INPUT -p tcp --dport 22 -j ACCEPT

[2]永久打开端口

打开防火墙配置文件：
vim /etc/sysconfig/iptables

在iptables文件内容中追加
-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT

保存配置文件后，重启防火墙:
service iptables restart（centos6）
systemctl restart iptables(centos7)

2.SSH连接时出现Host key verification failed
报错如下：
Host key verification failed

通常是由于访问使用的公钥与服务器记录的差异引起的

ssh服务会把每个曾经访问过计算机或服务器的公钥（public key），记录在~/.ssh/known_hosts
当下次访问曾经访问过的计算机或服务器时，ssh就会核对公钥，如果和上次记录的不同，OpenSSH会发出警告。
而ssh对主机的public_key的检查是有等级的，根据等级执行不同的策略。（StrictHostKeyChecking就是配置等级的参数）

[1]StrictHostKeyChecking=no

最不安全的级别，提示最少，应在相对安全的内网测试时使用。（当连接的服务器的公钥在本地不存在，就会自动添加到文件（默认是known_hosts）中，并且给出警告。

[2]StrictHostKeyChecking=ask

默认的级别。如果连接的服务器的公钥和本地的known_hosts文件中不匹配，就给出提示（Host key verification failed），并拒绝登录。

[3]StrictHostKeyChecking=yes

最安全的级别，如果连接的服务器的公钥和本地的known_hosts文件中的不匹配，就拒绝连接，不会提示详细信息。

解决方法 :

【1】可更改安全选择最低的安全级别。在.ssh/config或/etc/ssh/ssh_config）中配置：

StrictHostKeyChecking no
UserKnownHostsFile /dev/null

(将knownhostfile设为/dev/null)，为了方便使用在known_hosts中了）

【2】删除对应ip的在known_hosts相关信息

vim /.ssh/known_hosts



【3】直接删除known_hosts文件
rm known_hosts

3.SSH公私钥正确的情况下免密登录失败
有的时候我们经常会遇到：在服务器上配置ssh公钥后，一段时间可以免密码登录，后来登录时，每次都提示要输入密码。这时我们可以删除known_hosts，重新把id_rsa.pub添加到服务器~/.ssh/authorized_keys下。 如果这个办法也不行，我们（首先考虑是权限问题）要查看日志。

/var/log/auth.log日志中报错如下：
coffeeserver sshd[6761]: Authentication refused: bad ownership or modes for directory /root/.ssh

/var/log/secure日志中报错如下：
Authentication refused: bad ownership or modes for directory /root/.ssh

这些日志都告诉了我们/root/.ssh的目录的权限的配置出现了（权限应为700）

解决方法：

【1】更改目录及文件权限

chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

4.SSH连接时密码正确，登陆失败，出现Permission denied, please try again
报错如下：
Password authentication failed
或
Permission denied, please try again

通常是由于/etc/ssh/sshd_config的PasswordAuthentication或PermitRootLogin参数的配置引起的

补充：
还有特殊一种情况，你要连接的这台服务器的ip地址与你局域网中的某台电脑的ip地址一致，造成冲突。(这种情况，无论怎么改都会失败，会让你怀疑自己。解决方法只能是一方改IP或关闭其中一方，先解决冲突问题)

解决方法：

【1】修改相关配置文件

<1>查看本服务器和电脑的防火墙设置，是否打开ssh服务，22端口（一般都是打开的）
如果服务不是打开的要将服务启动，防火墙开放22端口（配置规则看本文目录第1条中）

<2>编辑sshd_config文件

vim /etc/ssh/sshd_config

将PasswordAuthentication前面的#号去掉
将PasswordAuthentication 设为yes

<3> 重启sshd服务

/etc/init.d/sshd restart (centos6)
systemctl restart sshd(centos7)

【2】修改相关配置文件

<1>基本上与上一个方法相同，但编辑sshd_config文件的另一个参数

vim /etc/ssh/sshd_config

将PermitRootLogin前面的#号去掉
将PermitRootLogin设为yes

<2>重启sshd服务

/etc/init.d/sshd restart (centos6)
systemctl restart sshd(centos7)

5.SSH连接时出现Permission denied, please try againssh_exchange_identification: read: Connection reset by peer
报错如下：
Permission denied, please try againssh_exchange_identification: read: Connection reset by peer

原因是由于所访问的服务器启用了tcp_wrapper,拒绝接受该ip或网段发起访问的服务，可能是限制了ip或是网段

解决方法：

【1】修改发起访问端的ip或网段

该方法在无法进入被访问端服务器时使用，但可用率不高，因为大多少情况下是对网段进行限制并开放某些IP。

建议联系 系统管理员解除限制或放开该IP或网段

<1>查看本机的ip或网段

ip a

<2>修改一个正在使用的网卡的配置文件

例如：

vim /etc/sysconfig/network-scripts/ifcfg-eth0
(重点修改IPADDR，NETMASK，GATEWAY，将其修改为新网段的IP)

TYPE=Ethernet
BOOTPROTO=none
DEFROUTE=yes
NAME=eth0
DEVICE=eth0
ONBOOT=yes
IPADDR=10.10.10.10
NETMASK=255.255.254.0
GATEWAY=10.10.10.254
DNS1=.8.8.8.8

<3> 重启网卡

service network restart(centos6)
systemctl restart network(centos7)

【2】进入被访问端解除限制或放开IP

<1>进入/etc/hosts.allow中进行修改

(123.123.123.123此处代表发起访问端的IP)

vim /etc/hosts.allow

追加
sshd:123.123.123.123:allow

或仅注释一行
#sshd:123.123.123.123:deny

或注释所有规则，并添加
sshd:all:allow

更多的设置方法如下：
https://blog.csdn.net/GX_1_11_real/article/details/89452719

6.连接服务器时，提示要输入密码，成功推送过公钥到服务器后，再次连接仍提示要输入密码

```

## 为什么ssh一关闭，程序就不再运行了？
```
问题描述
当SSH远程连接到服务器上,然后运行一个程序,eg: ./test.sh, 然后把终端开闭（切断SSH连接）之后,发现该程序中断.
原因
主要元凶: 挂断信号(SIGHUP) 信号
概念介绍
在Linux/Unix中，有这样几个概念：
进程组(process group): 一个或多个进程的集合,每一个进程组有唯一一个进程组ID,即进程组长进程的ID.
会话期(session): 一个或多个进程组的集合,有唯一一个会话期首进程(session leader). 会话期ID为首进程的ID.
会话期可以有一个单独的控制终端(controlling terminal).
与控制终端连接的会话期首进程叫做控制进程(controlling process).
当前与终端交互的进程称为前台进程组.
其余进程组称为后台进程组.
根据POSIX.1定义: 挂断信号(SIGHUP)默认的动作是终止程序。
解释
当终端接口检测到网络连接断开, 将挂断信号发送给控制进程(会话期首进程).
如果会话期首进程终止,则该信号发送到该会话期前台进程组.
一个进程退出导致一个孤儿进程组产生时, 如果任意一个孤儿进程组进程处于STOP状态, 发送 SIGHUP 和 SIGCONT 信号到该进程组中所有进程.
孤儿进程参照
结论
因此当网络断开或终端窗口关闭后, 也就是SSH断开以后, 控制进程收到 SIGHUP 信号退出, 会导致该会话期内其他进程退出.
简而言之: 就是 ssh 打开以后, bash等都是他的子程序, 一旦ssh关闭, 系统将所有相关进程杀掉!! 导致一旦ssh关闭, 执行中的任务就取消了.
相关问题
为什么守护程序就算是 ssh 打开的, 关闭ssh也不会影响其运行？
因为他们的程序特殊, 比如httpd –k start运行这个以后, 他不属于sshd这个进程组, 而是单独的进程组, 所以就算关闭了ssh, 和他也没有任何关系!
使用后台运行命令 & 能否将程序摆脱ssh进程组控制? 即关闭 ssh, 后台程序能否继续运行?
只要是ssh 打开执行的一般命令，不是守护程序，无论加不加&，一旦关闭ssh，系统就会用SIGHUP终止.
如何解决方案
在远端开启 tmux , 在 tmux 里运行程序, 此时运行的程序属于 tmux 的进程组, 不属于 ssh 进程组.
使用 nohup 命令
```

## Linux 常用命令集合
```
系统信息
arch 显示机器的处理器架构(1)
uname -m 显示机器的处理器架构(2)
uname -r 显示正在使用的内核版本
dmidecode -q 显示硬件系统部件 - (SMBIOS / DMI)
hdparm -i /dev/hda 罗列一个磁盘的架构特性
hdparm -tT /dev/sda 在磁盘上执行测试性读取操作
cat /proc/cpuinfo 显示CPU info的信息
cat /proc/interrupts 显示中断
cat /proc/meminfo 校验内存使用
cat /proc/swaps 显示哪些swap被使用
cat /proc/version 显示内核的版本
cat /proc/net/dev 显示网络适配器及统计
cat /proc/mounts 显示已加载的文件系统
lspci -tv 罗列 PCI 设备
lsusb -tv 显示 USB 设备
date 显示系统日期
cal 2007 显示2007年的日历表
date 041217002007.00 设置日期和时间 - 月日时分年.秒
clock -w 将时间修改保存到 BIOS
关机 (系统的关机、重启以及登出 )
shutdown -h now 关闭系统(1)
init 0 关闭系统(2)
telinit 0 关闭系统(3)
shutdown -h hours:minutes & 按预定时间关闭系统
shutdown -c 取消按预定时间关闭系统
shutdown -r now 重启(1)
reboot 重启(2)
logout 注销
文件和目录
cd /home 进入 '/ home' 目录'
cd .. 返回上一级目录
cd ../.. 返回上两级目录
cd 进入个人的主目录
cd ~user1 进入个人的主目录
cd - 返回上次所在的目录
pwd 显示工作路径
ls 查看目录中的文件
ls -F 查看目录中的文件
ls -l 显示文件和目录的详细资料
ls -a 显示隐藏文件
ls *[0-9]* 显示包含数字的文件名和目录名
tree 显示文件和目录由根目录开始的树形结构(1)
lstree 显示文件和目录由根目录开始的树形结构(2)
mkdir dir1 创建一个叫做 'dir1' 的目录'
mkdir dir1 dir2 同时创建两个目录
mkdir -p /tmp/dir1/dir2 创建一个目录树
rm -f file1 删除一个叫做 'file1' 的文件'
rmdir dir1 删除一个叫做 'dir1' 的目录'
rm -rf dir1 删除一个叫做 'dir1' 的目录并同时删除其内容
rm -rf dir1 dir2 同时删除两个目录及它们的内容
mv dir1 new_dir 重命名/移动 一个目录
cp file1 file2 复制一个文件
cp dir/* . 复制一个目录下的所有文件到当前工作目录
cp -a /tmp/dir1 . 复制一个目录到当前工作目录
cp -a dir1 dir2 复制一个目录
ln -s file1 lnk1 创建一个指向文件或目录的软链接
ln file1 lnk1 创建一个指向文件或目录的物理链接
touch -t 0712250000 file1 修改一个文件或目录的时间戳 - (YYMMDDhhmm)
file file1 outputs the mime type of the file as text
iconv -l 列出已知的编码
iconv -f fromEncoding -t toEncoding inputFile > outputFile creates a new from the given input file by assuming it is encoded in fromEncoding and converting it to toEncoding.
find . -maxdepth 1 -name *.jpg -print -exec convert "{}" -resize 80x60 "thumbs/{}" \; batch resize files in the current directory and send them to a thumbnails directory (requires convert from Imagemagick)
文件搜索
find / -name file1 从 '/' 开始进入根文件系统搜索文件和目录
find / -user user1 搜索属于用户 'user1' 的文件和目录
find /home/user1 -name \*.bin 在目录 '/ home/user1' 中搜索带有'.bin' 结尾的文件
find /usr/bin -type f -atime +100 搜索在过去100天内未被使用过的执行文件
find /usr/bin -type f -mtime -10 搜索在10天内被创建或者修改过的文件
find / -name \*.rpm -exec chmod 755 '{}' \; 搜索以 '.rpm' 结尾的文件并定义其权限
find / -xdev -name \*.rpm 搜索以 '.rpm' 结尾的文件，忽略光驱、捷盘等可移动设备
locate \*.ps 寻找以 '.ps' 结尾的文件 - 先运行 'updatedb' 命令
whereis halt 显示一个二进制文件、源码或man的位置
which halt 显示一个二进制文件或可执行文件的完整路径
挂载一个文件系统
mount /dev/hda2 /mnt/hda2 挂载一个叫做hda2的盘 - 确定目录 '/ mnt/hda2' 已经存在
umount /dev/hda2 卸载一个叫做hda2的盘 - 先从挂载点 '/ mnt/hda2' 退出
fuser -km /mnt/hda2 当设备繁忙时强制卸载
umount -n /mnt/hda2 运行卸载操作而不写入 /etc/mtab 文件- 当文件为只读或当磁盘写满时非常有用
mount /dev/fd0 /mnt/floppy 挂载一个软盘
mount /dev/cdrom /mnt/cdrom 挂载一个cdrom或dvdrom
mount /dev/hdc /mnt/cdrecorder 挂载一个cdrw或dvdrom
mount /dev/hdb /mnt/cdrecorder 挂载一个cdrw或dvdrom
mount -o loop file.iso /mnt/cdrom 挂载一个文件或ISO镜像文件
mount -t vfat /dev/hda5 /mnt/hda5 挂载一个Windows FAT32文件系统
mount /dev/sda1 /mnt/usbdisk 挂载一个usb 捷盘或闪存设备
mount -t smbfs -o username=user,password=pass //WinClient/share /mnt/share 挂载一个windows网络共享
磁盘空间
df -h 显示已经挂载的分区列表
ls -lSr |more 以尺寸大小排列文件和目录
du -sh dir1 估算目录 'dir1' 已经使用的磁盘空间'
du -sk * | sort -rn 以容量大小为依据依次显示文件和目录的大小
rpm -q -a --qf '%10{SIZE}t%{NAME}n' | sort -k1,1n 以大小为依据依次显示已安装的rpm包所使用的空间 (fedora, redhat类系统)
dpkg-query -W -f='${Installed-Size;10}t${Package}n' | sort -k1,1n 以大小为依据显示已安装的deb包所使用的空间 (ubuntu, debian类系统)
用户和群组
groupadd group_name 创建一个新用户组
groupdel group_name 删除一个用户组
groupmod -n new_group_name old_group_name 重命名一个用户组
useradd -c "Name Surname " -g admin -d /home/user1 -s /bin/bash user1 创建一个属于 "admin" 用户组的用户
useradd user1 创建一个新用户
userdel -r user1 删除一个用户 ( '-r' 排除主目录)
usermod -c "User FTP" -g system -d /ftp/user1 -s /bin/nologin user1 修改用户属性
passwd 修改口令
passwd user1 修改一个用户的口令 (只允许root执行)
chage -E 2005-12-31 user1 设置用户口令的失效期限
pwck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的用户
grpck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的群组
newgrp group_name 登陆进一个新的群组以改变新创建文件的预设群组
文件的权限 - 使用 "+" 设置权限，使用 "-" 用于取消
ls -lh 显示权限
ls /tmp | pr -T5 -W$COLUMNS 将终端划分成5栏显示
chmod ugo+rwx directory1 设置目录的所有人(u)、群组(g)以及其他人(o)以读（r ）、写(w)和执行(x)的权限
chmod go-rwx directory1 删除群组(g)与其他人(o)对目录的读写执行权限
chown user1 file1 改变一个文件的所有人属性
chown -R user1 directory1 改变一个目录的所有人属性并同时改变改目录下所有文件的属性
chgrp group1 file1 改变文件的群组
chown user1:group1 file1 改变一个文件的所有人和群组属性
find / -perm -u+s 罗列一个系统中所有使用了SUID控制的文件
chmod u+s /bin/file1 设置一个二进制文件的 SUID 位 - 运行该文件的用户也被赋予和所有者同样的权限
chmod u-s /bin/file1 禁用一个二进制文件的 SUID位
chmod g+s /home/public 设置一个目录的SGID 位 - 类似SUID ，不过这是针对目录的
chmod g-s /home/public 禁用一个目录的 SGID 位
chmod o+t /home/public 设置一个文件的 STIKY 位 - 只允许合法所有人删除文件
chmod o-t /home/public 禁用一个目录的 STIKY 位
文件的特殊属性 - 使用 "+" 设置权限，使用 "-" 用于取消
chattr +a file1 只允许以追加方式读写文件
chattr +c file1 允许这个文件能被内核自动压缩/解压
chattr +d file1 在进行文件系统备份时，dump程序将忽略这个文件
chattr +i file1 设置成不可变的文件，不能被删除、修改、重命名或者链接
chattr +s file1 允许一个文件被安全地删除
chattr +S file1 一旦应用程序对这个文件执行了写操作，使系统立刻把修改的结果写到磁盘
chattr +u file1 若文件被删除，系统会允许你在以后恢复这个被删除的文件
lsattr 显示特殊的属性
打包和压缩文件
bunzip2 file1.bz2 解压一个叫做 'file1.bz2'的文件
bzip2 file1 压缩一个叫做 'file1' 的文件
gunzip file1.gz 解压一个叫做 'file1.gz'的文件
gzip file1 压缩一个叫做 'file1'的文件
gzip -9 file1 最大程度压缩
rar a file1.rar test_file 创建一个叫做 'file1.rar' 的包
rar a file1.rar file1 file2 dir1 同时压缩 'file1', 'file2' 以及目录 'dir1'
rar x file1.rar 解压rar包
unrar x file1.rar 解压rar包
tar -cvf archive.tar file1 创建一个非压缩的 tarball
tar -cvf archive.tar file1 file2 dir1 创建一个包含了 'file1', 'file2' 以及 'dir1'的档案文件
tar -tf archive.tar 显示一个包中的内容
tar -xvf archive.tar 释放一个包
tar -xvf archive.tar -C /tmp 将压缩包释放到 /tmp目录下
tar -cvfj archive.tar.bz2 dir1 创建一个bzip2格式的压缩包
tar -xvfj archive.tar.bz2 解压一个bzip2格式的压缩包
tar -cvfz archive.tar.gz dir1 创建一个gzip格式的压缩包
tar -xvfz archive.tar.gz 解压一个gzip格式的压缩包
zip file1.zip file1 创建一个zip格式的压缩包
zip -r file1.zip file1 file2 dir1 将几个文件和目录同时压缩成一个zip格式的压缩包
unzip file1.zip 解压一个zip格式压缩包
RPM 包 - （Fedora, Redhat及类似系统）
rpm -ivh package.rpm 安装一个rpm包
rpm -ivh --nodeeps package.rpm 安装一个rpm包而忽略依赖关系警告
rpm -U package.rpm 更新一个rpm包但不改变其配置文件
rpm -F package.rpm 更新一个确定已经安装的rpm包
rpm -e package_name.rpm 删除一个rpm包
rpm -qa 显示系统中所有已经安装的rpm包
rpm -qa | grep httpd 显示所有名称中包含 "httpd" 字样的rpm包
rpm -qi package_name 获取一个已安装包的特殊信息
rpm -qg "System Environment/Daemons" 显示一个组件的rpm包
rpm -ql package_name 显示一个已经安装的rpm包提供的文件列表
rpm -qc package_name 显示一个已经安装的rpm包提供的配置文件列表
rpm -q package_name --whatrequires 显示与一个rpm包存在依赖关系的列表
rpm -q package_name --whatprovides 显示一个rpm包所占的体积
rpm -q package_name --scripts 显示在安装/删除期间所执行的脚本l
rpm -q package_name --changelog 显示一个rpm包的修改历史
rpm -qf /etc/httpd/conf/httpd.conf 确认所给的文件由哪个rpm包所提供
rpm -qp package.rpm -l 显示由一个尚未安装的rpm包提供的文件列表
rpm --import /media/cdrom/RPM-GPG-KEY 导入公钥数字证书
rpm --checksig package.rpm 确认一个rpm包的完整性
rpm -qa gpg-pubkey 确认已安装的所有rpm包的完整性
rpm -V package_name 检查文件尺寸、 许可、类型、所有者、群组、MD5检查以及最后修改时间
rpm -Va 检查系统中所有已安装的rpm包- 小心使用
rpm -Vp package.rpm 确认一个rpm包还未安装
rpm2cpio package.rpm | cpio --extract --make-directories *bin* 从一个rpm包运行可执行文件
rpm -ivh /usr/src/redhat/RPMS/`arch`/package.rpm 从一个rpm源码安装一个构建好的包
rpmbuild --rebuild package_name.src.rpm 从一个rpm源码构建一个 rpm 包
YUM 软件包升级器 - （Fedora, RedHat及类似系统）
yum install package_name 下载并安装一个rpm包
yum localinstall package_name.rpm 将安装一个rpm包，使用你自己的软件仓库为你解决所有依赖关系
yum update package_name.rpm 更新当前系统中所有安装的rpm包
yum update package_name 更新一个rpm包
yum remove package_name 删除一个rpm包
yum list 列出当前系统中安装的所有包
yum search package_name 在rpm仓库中搜寻软件包
yum clean packages 清理rpm缓存删除下载的包
yum clean headers 删除所有头文件
yum clean all 删除所有缓存的包和头文件
DEB 包 (Debian, Ubuntu 以及类似系统)
dpkg -i package.deb 安装/更新一个 deb 包
dpkg -r package_name 从系统删除一个 deb 包
dpkg -l 显示系统中所有已经安装的 deb 包
dpkg -l | grep httpd 显示所有名称中包含 "httpd" 字样的deb包
dpkg -s package_name 获得已经安装在系统中一个特殊包的信息
dpkg -L package_name 显示系统中已经安装的一个deb包所提供的文件列表
dpkg --contents package.deb 显示尚未安装的一个包所提供的文件列表
dpkg -S /bin/ping 确认所给的文件由哪个deb包提供
APT 软件工具 (Debian, Ubuntu 以及类似系统)
apt-get install package_name 安装/更新一个 deb 包
apt-cdrom install package_name 从光盘安装/更新一个 deb 包
apt-get update 升级列表中的软件包
apt-get upgrade 升级所有已安装的软件
apt-get remove package_name 从系统删除一个deb包
apt-get check 确认依赖的软件仓库正确
apt-get clean 从下载的软件包中清理缓存
apt-cache search searched-package 返回包含所要搜索字符串的软件包名称
查看文件内容
cat file1 从第一个字节开始正向查看文件的内容
tac file1 从最后一行开始反向查看一个文件的内容
more file1 查看一个长文件的内容
less file1 类似于 'more' 命令，但是它允许在文件中和正向操作一样的反向操作
head -2 file1 查看一个文件的前两行
tail -2 file1 查看一个文件的最后两行
tail -f /var/log/messages 实时查看被添加到一个文件中的内容
文本处理
cat file1 file2 ... | command <> file1_in.txt_or_file1_out.txt general syntax for text manipulation using PIPE, STDIN and STDOUT
cat file1 | command( sed, grep, awk, grep, etc...) > result.txt 合并一个文件的详细说明文本，并将简介写入一个新文件中
cat file1 | command( sed, grep, awk, grep, etc...) >> result.txt 合并一个文件的详细说明文本，并将简介写入一个已有的文件中
grep Aug /var/log/messages 在文件 '/var/log/messages'中查找关键词"Aug"
grep ^Aug /var/log/messages 在文件 '/var/log/messages'中查找以"Aug"开始的词汇
grep [0-9] /var/log/messages 选择 '/var/log/messages' 文件中所有包含数字的行
grep Aug -R /var/log/* 在目录 '/var/log' 及随后的目录中搜索字符串"Aug"
sed 's/stringa1/stringa2/g' example.txt 将example.txt文件中的 "string1" 替换成 "string2"
sed '/^$/d' example.txt 从example.txt文件中删除所有空白行
sed '/ *#/d; /^$/d' example.txt 从example.txt文件中删除所有注释和空白行
echo 'esempio' | tr '[:lower:]' '[:upper:]' 合并上下单元格内容
sed -e '1d' result.txt 从文件example.txt 中排除第一行
sed -n '/stringa1/p' 查看只包含词汇 "string1"的行
sed -e 's/ *$//' example.txt 删除每一行最后的空白字符
sed -e 's/stringa1//g' example.txt 从文档中只删除词汇 "string1" 并保留剩余全部
sed -n '1,5p;5q' example.txt 查看从第一行到第5行内容
sed -n '5p;5q' example.txt 查看第5行
sed -e 's/00*/0/g' example.txt 用单个零替换多个零
cat -n file1 标示文件的行数
cat example.txt | awk 'NR%2==1' 删除example.txt文件中的所有偶数行
echo a b c | awk '{print $1}' 查看一行第一栏
echo a b c | awk '{print $1,$3}' 查看一行的第一和第三栏
paste file1 file2 合并两个文件或两栏的内容
paste -d '+' file1 file2 合并两个文件或两栏的内容，中间用"+"区分
sort file1 file2 排序两个文件的内容
sort file1 file2 | uniq 取出两个文件的并集(重复的行只保留一份)
sort file1 file2 | uniq -u 删除交集，留下其他的行
sort file1 file2 | uniq -d 取出两个文件的交集(只留下同时存在于两个文件中的文件)
comm -1 file1 file2 比较两个文件的内容只删除 'file1' 所包含的内容
comm -2 file1 file2 比较两个文件的内容只删除 'file2' 所包含的内容
comm -3 file1 file2 比较两个文件的内容只删除两个文件共有的部分
字符设置和文件格式转换
dos2unix filedos.txt fileunix.txt 将一个文本文件的格式从MSDOS转换成UNIX
unix2dos fileunix.txt filedos.txt 将一个文本文件的格式从UNIX转换成MSDOS
recode ..HTML < page.txt > page.html 将一个文本文件转换成html
recode -l | more 显示所有允许的转换格式
文件系统分析
badblocks -v /dev/hda1 检查磁盘hda1上的坏磁块
fsck /dev/hda1 修复/检查hda1磁盘上linux文件系统的完整性
fsck.ext2 /dev/hda1 修复/检查hda1磁盘上ext2文件系统的完整性
e2fsck /dev/hda1 修复/检查hda1磁盘上ext2文件系统的完整性
e2fsck -j /dev/hda1 修复/检查hda1磁盘上ext3文件系统的完整性
fsck.ext3 /dev/hda1 修复/检查hda1磁盘上ext3文件系统的完整性
fsck.vfat /dev/hda1 修复/检查hda1磁盘上fat文件系统的完整性
fsck.msdos /dev/hda1 修复/检查hda1磁盘上dos文件系统的完整性
dosfsck /dev/hda1 修复/检查hda1磁盘上dos文件系统的完整性
初始化一个文件系统
mkfs /dev/hda1 在hda1分区创建一个文件系统
mke2fs /dev/hda1 在hda1分区创建一个linux ext2的文件系统
mke2fs -j /dev/hda1 在hda1分区创建一个linux ext3(日志型)的文件系统
mkfs -t vfat 32 -F /dev/hda1 创建一个 FAT32 文件系统
fdformat -n /dev/fd0 格式化一个软盘
mkswap /dev/hda3 创建一个swap文件系统
SWAP文件系统
mkswap /dev/hda3 创建一个swap文件系统
swapon /dev/hda3 启用一个新的swap文件系统
swapon /dev/hda2 /dev/hdb3 启用两个swap分区
备份
dump -0aj -f /tmp/home0.bak /home 制作一个 '/home' 目录的完整备份
dump -1aj -f /tmp/home0.bak /home 制作一个 '/home' 目录的交互式备份
restore -if /tmp/home0.bak 还原一个交互式备份
rsync -rogpav --delete /home /tmp 同步两边的目录
rsync -rogpav -e ssh --delete /home ip_address:/tmp 通过SSH通道rsync
rsync -az -e ssh --delete ip_addr:/home/public /home/local 通过ssh和压缩将一个远程目录同步到本地目录
rsync -az -e ssh --delete /home/local ip_addr:/home/public 通过ssh和压缩将本地目录同步到远程目录
dd bs=1M if=/dev/hda | gzip | ssh user@ip_addr 'dd of=hda.gz' 通过ssh在远程主机上执行一次备份本地磁盘的操作
dd if=/dev/sda of=/tmp/file1 备份磁盘内容到一个文件
tar -Puf backup.tar /home/user 执行一次对 '/home/user' 目录的交互式备份操作
( cd /tmp/local/ && tar c . ) | ssh -C user@ip_addr 'cd /home/share/ && tar x -p' 通过ssh在远程目录中复制一个目录内容
( tar c /home ) | ssh -C user@ip_addr 'cd /home/backup-home && tar x -p' 通过ssh在远程目录中复制一个本地目录
tar cf - . | (cd /tmp/backup ; tar xf - ) 本地将一个目录复制到另一个地方，保留原有权限及链接
find /home/user1 -name '*.txt' | xargs cp -av --target-directory=/home/backup/ --parents 从一个目录查找并复制所有以 '.txt' 结尾的文件到另一个目录
find /var/log -name '*.log' | tar cv --files-from=- | bzip2 > log.tar.bz2 查找所有以 '.log' 结尾的文件并做成一个bzip包
dd if=/dev/hda of=/dev/fd0 bs=512 count=1 做一个将 MBR (Master Boot Record)内容复制到软盘的动作
dd if=/dev/fd0 of=/dev/hda bs=512 count=1 从已经保存到软盘的备份中恢复MBR内容
光盘
cdrecord -v gracetime=2 dev=/dev/cdrom -eject blank=fast -force 清空一个可复写的光盘内容
mkisofs /dev/cdrom > cd.iso 在磁盘上创建一个光盘的iso镜像文件
mkisofs /dev/cdrom | gzip > cd_iso.gz 在磁盘上创建一个压缩了的光盘iso镜像文件
mkisofs -J -allow-leading-dots -R -V "Label CD" -iso-level 4 -o ./cd.iso data_cd 创建一个目录的iso镜像文件
cdrecord -v dev=/dev/cdrom cd.iso 刻录一个ISO镜像文件
gzip -dc cd_iso.gz | cdrecord dev=/dev/cdrom - 刻录一个压缩了的ISO镜像文件
mount -o loop cd.iso /mnt/iso 挂载一个ISO镜像文件
cd-paranoia -B 从一个CD光盘转录音轨到 wav 文件中
cd-paranoia -- "-3" 从一个CD光盘转录音轨到 wav 文件中（参数-3）
cdrecord --scanbus 扫描总线以识别scsi通道
dd if=/dev/hdc | md5sum 校验一个设备的md5sum编码，例如一张 CD
网络 - （以太网和WIFI无线）
ifconfig eth0 显示一个以太网卡的配置
ifup eth0 启用一个 'eth0' 网络设备
ifdown eth0 禁用一个 'eth0' 网络设备
ifconfig eth0 192.168.1.1 netmask 255.255.255.0 控制IP地址
ifconfig eth0 promisc 设置 'eth0' 成混杂模式以嗅探数据包 (sniffing)
dhclient eth0 以dhcp模式启用 'eth0'
route -n show routing table
route add -net 0/0 gw IP_Gateway configura default gateway
route add -net 192.168.0.0 netmask 255.255.0.0 gw 192.168.1.1 configure static route to reach network '192.168.0.0/16'
route del 0/0 gw IP_gateway remove static route
echo "1" > /proc/sys/net/ipv4/ip_forward activate ip routing
hostname show hostname of system
host www.example.com lookup hostname to resolve name to ip address and viceversa(1)
nslookup www.example.com lookup hostname to resolve name to ip address and viceversa(2)
ip link show show link status of all interfaces
mii-tool eth0 show link status of 'eth0'
ethtool eth0 show statistics of network card 'eth0'
netstat -tup show all active network connections and their PID
netstat -tupl show all network services listening on the system and their PID
tcpdump tcp port 80 show all HTTP traffic
iwlist scan show wireless networks
iwconfig eth1 show configuration of a wireless network card
hostname show hostname
host www.example.com lookup hostname to resolve name to ip address and viceversa
nslookup www.example.com lookup hostname to resolve name to ip address and viceversa
whois www.example.com lookup on Whois database
Microsoft Windows networks (SAMBA)
nbtscan ip_addr netbios name resolution
nmblookup -A ip_addr netbios name resolution
smbclient -L ip_addr/hostname show remote shares of a windows host
smbget -Rr smb://ip_addr/share like wget can download files from a host windows via smb
mount -t smbfs -o username=user,password=pass //WinClient/share /mnt/share mount a windows network share
```

## 如何使用Rsync在Linux中同步新的或更改/修改的文件
```
rsync -rogpav --delete /opt/www/henan/source/protected/models/* /opt/www/henan/pre_source/protected/models
```

## PHP安装redis扩展
```
以下操作需要在下载的 phpredis 目录中完成：

$ wget https://github.com/phpredis/phpredis/archive/3.1.4.tar.gz
$ cd phpredis-3.1.4                      # 进入 phpredis 目录
$ /usr/local/php/bin/phpize              # php安装后的路径
$ ./configure --with-php-config=/usr/local/php/bin/php-config
$ make && make install
修改php.ini文件
vi /usr/local/php/lib/php.ini
增加如下内容:

extension_dir = "/usr/local/php/lib/php/extensions/no-debug-zts-20090626"

extension=redis.so
安装完成后重启php-fpm 或 apache。查看phpinfo信息，就能看到redis扩展。
```
## centos安装redis服务
```
#/bin/bash
#############别道临#######################
#############2019-10-17###################
#############redis安装脚本#############

############预定义变量#####################
#为了避免报错,/bin/sh: cc: command not found,先执行下面的脚本
yum -y install gcc gcc-c++ libstdc++-devel 
make MALLOC=libc
#定义版本号
version=5.0.5
#下载redis安装包
#wget http://download.redis.io/releases/redis-$version.tar.gz
#解压安装包
tar xzvf redis-$version.tar.gz
#进入解压后的安装包
cd redis-$version
#编译
make
#进入安装包中src文件夹
cd src
#编译
make install PREFIX=/usr/local/redis
#移动配置文件到安装目录下
cd ../
mkdir /usr/local/redis/etc
mv redis.conf /usr/local/redis/etc
#配置redis为后台启动
sed -i "s/daemonize no/daemonize yes/g" /usr/local/redis/etc/redis.conf
#启动redis
/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf
```

## screen命令学习
**screen分session和window**

session就是执行screen [-S session-name]生成的一个会话，在会话中可以打开多个window

**screen命令使用说明**

```
-A 　将所有的视窗都调整为目前终端机的大小。

-d <作业名称> 　将指定的screen作业离线。

-m 　即使目前已在作业中的screen作业，仍强制建立新的screen作业。

-r <作业名称> 　恢复离线的screen作业。

-R 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业。

-s 　指定建立新视窗时，所要执行的shell。

-S <作业名称> 　指定screen作业的名称。

-v 　显示版本信息。

-x 　恢复之前离线的screen作业。

-ls或--list 　显示目前所有的screen作业。

-wipe 　检查目前所有的screen作业，并删除已经无法使用的screen作业。
```


screen -S test1          ##建立一个session,不带-S会随机session的名称
ls /tmp                        ##执行一个命令
Ctrl+a + d                   ##暂时离开当前session,回到原来的shell
screen -ls                    ##查看所有session

263.test1

screen -r  263              ##返回session,263是指session名称前面的数字

**在session中的一些快捷键**

在每个screen session 下，所有命令都以 ctrl+a(C-a) 开始。
C-a ? -> Help，显示简单说明
C-a c -> Create，开启新的 window
C-a n -> Next，切换到下个 window 
C-a p -> Previous，前一个 window 
C-a 0..9 -> 切换到第 0..9 个window
Ctrl+a [Space] -> 由視窗0循序換到視窗9
C-a C-a -> 在两个最近使用的 window 间切换 
C-a x -> 锁住当前的 window，需用用户密码解锁
C-a d -> detach，暂时离开当前session，将目前的 screen session (可能含有多个 windows) 丢到后台执行，并会回到还没进 screen 时的状态，此时在 screen session 里    每个 window 内运行的 process (无论是前台/后台)都在继续执行，即使 logout 也不影响。 
C-a z -> 把当前session放到后台执行，用 shell 的 fg 命令則可回去。
C-a w -> Windows，列出已开启的 windows 有那些 
C-a t -> Time，显示当前时间，和系统的 load 
C-a K -> kill window，强行关闭当前的 window

4.其他说明

若 screen -ls 里有 Attached sessions:
screen -d [id] -> 强制离线，然后再screen -r [id]恢复

不需要的session screen -r 进去以后，exit即可



## lftp FTP客户端软件 

1.1 安装VSFTPD

使用 yum 安装 vsftpd

yum install -y vsftpd

1.2 启动vsftpd

安装完成后，启动 FTP 服务：

service vsftpd start

启动后，可以看到系统已经监听了 21 端口：

netstat -nltp | grep 21

此时，访问 ftp:// 192.168.19.170 可在本机浏览机器上访问了

2、配置FTP 权限

2.1 了解VSFTP 配置

vsftpd 的配置目录为 /etc/vsftpd，包含下列的配置文件：

vsftpd.conf 为主要配置文件

ftpservers 配置禁止访问 FTP 服务器的用户列表

user_list 配置用户访问控制

2.2 阻止匿名访问和切换根目录

匿名访问和切换根目录都会给服务器带来安全风险，我们把这两个功能关闭。

编辑 /etc/vsftpd/vsftpd.conf，找到下面两处配置并修改：

 禁用匿名用户  YES 改为NO

anonymous_enable=NO

禁止切换根目录 删除#

chroot_local_user=YES

编辑完成后保存配置，重新启动 FTP 服务

service vsftpd restart

2.3 创建FTP 用户

创建一个用户 ftpserver

useradd ftpserver

为用户 ftpserver 设置密码

echo "ftp@123456" | passwd ftpserver--stdin

2.4 限制该用户仅能通过 FTP 访问

限制用户 ftpserver只能通过FTP 访问服务器，而不能直接登录服务器：

usermod -s /sbin/nologin ftpserver

2.5 为用户分配主目录

为用户 ftpserver创建主目录并约定：

/data/ftp 为主目录,该目录不可上传文件

/data/ftp/excelDir文件只能上传到该目录下

在/data中创建相关的目录

mkdir -p /data/ftp/excelDir

2.5.1 创建登录欢迎文件

echo "Welcome to use FTP service."> /data/ftp/welcome.txt

设置访问权限

chmod a-w /data/ftp && chmod 777 -R/data/ftp/excelDir

设置为用户的主目录：

usermod -d /data/ftp ftpserver

3、访问FTP

根据您个人的工作环境，选择一种方式来访问已经搭建的 FTP 服务

注意：记得关闭防火墙或者开放FTP默认端口(21)

## 关闭SELinux服务

setenforce  0

## 关闭防火墙

service iptables stop 或 iptables  -F

    vi /etc/vsftpd/ftpusers

/etc/vsftpd/user_list

都是禁止用户访问，不要吧ftp用户加入进去

通过 Windows 资源管理器访问

Windows 用户可以复制下面的链接

到资源管理器的地址栏访问：

ftp:// 192.168.19.170

其中ftpserver为登录FTP的用户名，ftp@123456为登录FTP的密码

**登录ftp**
(1)lftp username:password@127.0.0.1:21 回车
(2)lftp username@127.0.0.1 回车     ##默认21端口 回车后输入密码
(3)lftp 127.0.0.1 回车   ##回车后 login 登录
(4)lftp 回车 --> 127.0.0.1 --> login 登录
```
lftp 用户名:密码@ftp地址:传送端口（默认21）
lftp username:password@127.0.0.1:21 
```

**lftp中文乱码问题**
若登录后看到的都是乱码(因为一般本地都是utf-8的编码),怎么半呢，用 set 命令来解决
```
set ftp:charset gbk(或者 gb2312 或 utf-8) 　　##设置ftp端的编码格式
set file:charset utf-8 (...同上) 　　　　　　　##设置本地编码格式
```
> 附:set命令的技巧 (1)输入set 查看已经设置好的命令 (2)set -a 查看所有可以设置的命令

**查找ftp端文件**
ls *.txt　　　　 　　　　　　##查找当前目录下的所有txt文件

ls ./123/ 　　　　　　　　　##列出123目录下所有文件

find . -name "*.txt"   　　　　##递归查找站点上所有的txt文件

find ./xx -name "*.txt" 　　　##查找xx目录下所有的txt文件

附1: ls第二次读取的是本地,可以用 rels 代替 ls 或者catch off / catch on 来开关catch,catch flush清空本地catch

附2: 浏览本地目录的命令可用!ls, 如 !ls /usr/local/bin/

**下载文件**
下载文件之前要先设置好本地的目录，用来存放下载的文件

lcd /home/123/web   　　　　##设置本地存放目录 默认为 /home/usr

get 123.txt     　　　　　　　##下载123.txt文件到 /home/123/web 中

get -c 123.txt 　　　　　　　##断点续传下载

mget *.txt     　　　　　　　　##批量下载所有txt文件

mget -c *.txt 　　　　　　　　##断点续传

mget -c ./123/aaa/*.txt   　　　##断点续传、批量下载ftp端aaa目录下的所有txt文件

pget -c -n 10 file.dat　　　　##以最多10个线程以允许续传的方式下载file.dat　

　　　　　　　　　　　　　##可以通过设置 set pget:default-n 5 的值而使用默认值。

mirror aaa/　　　　　　　　##将aaa目录整个的下载下来，子目录也会自动复制 本地自动建立目录

**上传文件**
put 123.txt    　　　　　　 ##同下载

mput *.txt    　　　　　　 ##同下载

mirror -R aaa/ 　　　　　##同下载

**设置被动/非被动模式**
set ftp:passive-mode 1 　　　## 1 被动 0非主动

多任务处理

ctrl+z 　　　　　　　##将当前进行的任务移交后台处理

wait   　　　　　　　##将后台处理任务调至查看

jobs   　　　　　　　##查看后台进行的任务列表

kill all 或者 job_no 　##删除所有任务 或 指定的任务

**将任务加入任务列表**

queue get 123.txt

queue put 234.txt

queue mirror aaa/ 

queue 　　　　　##查看任务列表

jobs  　　　　　 ##查看后台任务列表

queue start 　　　##开始任务列表

queue stop 　　　##停止任务列表

其他命令 

alias []

定义别名

alias less more

alias reconnect "close; cd ."

直接输入 alias 即可看到目前定义了那些别名。如果只输入 alias name 的话, 则是取消 name 这个别名。

bookmark SUBCMD

设定书签, 可将目前站台及所在目录设成书签, 下次可直接进来, 不用再 cd 来 cd 去的

bookmark add name 　　用来新增名称为 name 的书签

bookmark del name 　　删除名称为 name 的书签

bookmark list 　　　　　显示目前有设定那些书签(另外直接打 bookmark 和 bookmark list 的结果一样)

bookmark edit 　　　　　呼叫修改书签 (~/.lftp/bookmarks)

cd 　　　　　　　　　　切换远端目录

cache SUBCMD　　　管理 lftp 的 cache

rels []　　　　　　　　从 cache 中显示远端档案列表

rels 则不会从 cache 中读取

recls opts [path/]pattern　从 cache 中显示远端的档案列表, 应该算是 ls 的加强版, 有很多参数可用,应该是可用来产生各种不同>的档案列表以供其他程式使用。

recls 则不会从 cache 中读取

du options　　　　计算远端整个目录占用容量

get OPTS -o　　　　抓取远端档案  

get rfile -o lfile

抓 rfile 到本地为 lfile

-c 为续传

-E 抓档完成后, 将远端的档案砍了

-a 为 ascii mode, 预设为 binary mode

-O 设定 base directory 为本地端放档案的目录

mget OPTS

下载远端档案(可用 wildcard expansion 也就是 *)

pget OPTS -o

使用多个连结来下载档案, 预设为五个。

-n 3 为叁个连结

jobs -v

显示目前有那些程序在背景执行

-v 显示详细的资讯(-v 可多加几个来显示更详细的资讯)

lcd

切换本地端的目录

mirror OPTS remote [local]

下载整个目录(楼上的 get 只能用来抓档案)

-c 续传

-e 这个要小心一些, 比较远端和本地端的档案, 假如远端没有的, 就将本地端的档案删除, 也就是将本地端和远端资料同步。

-R 上传整个目录

-n 只下载较新的档案

-r 不用递回到目录中

--parallel=n 同时下载 n 个档案(预设一次只下载一个) 

module name args    载入模组

put OPTS -o              上传档案

mput OPTS               上传档案(可用 wildcard expansion 也就是 *)

mv                              将远端的 file1 为 file2

mrm                            用 wildcard expansion 方式来删除远端档案

open OPTS              开启某个站台

-u , -p site

queue OPTS []         将 cmd 放到伫列中等待执行

-d index                    将编号为 index 的 job 删除

-m index new_index 将编号为 index 的 job 移至编号 new_index, 插队专用。

-n index 在编号 index 之前新增一个 job

wait []                      将背景执行中的程序移至前景(也可用 fg)

kill all|                    删除全部的 jobs 或 job_no

repeat delay command             每隔 delay 秒, 重覆执行 command, 预设是每隔一秒

rm -r -f                       移除远端档案

mkdir -p                     建立远端目录

rmdir -f                        移除远端目录

set OPT []                   设定变数

直接键入 set 可看目前定义了那些变数

source                      读取 file, 并执行 file 中的命令(应该是和 bash 中的 source 命令是一样的吧)

debug [|off] -o            设定 debug level 为 level

-o 将输出导向至 file

exit [|bg]                   结束 lftp

此时若还有 jobs, 则会将 lftp 放至背景执行, 继续未完成的工作

history -w file-r file-c|-l cnt              和 bash 中的 history 功能一样

renlist []　　只显示远端的档名

pwd -p　　显示目前远端所在目录

-p 连登入密码也显示

scache []

只打 scache 显示目前所有的 session, 加上 session_no 可切换至其他的 session,

对於同时开启多个站台或同个站台不同目录间切换。

## chown 指定文件的拥有者

把文件yusi123.com的所有者改为yusi。

`# chown yusi:yusi yusi123.com`


## SSH	登录服务器

> **SSH**为Secure Shell的缩写，由IETF的网络工作小组（Network Working Group）所制定；SSH为创建在应用层和传输层基础上的安全协议。
>
> 传统的网络服务程序，如FTP、POP和Telnet其本质上都是不安全的；因为它们在网络上用明文传送数据、用户帐号和用户口令，很容易受到中间人（man-in-the-middle）攻击方式的攻击。就是存在另一个人或者一台机器冒充真正的服务器接收用户传给服务器的数据，然后再冒充用户把数据传给真正的服务器。
>
> 而SSH是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用SSH协议可以有效防止远程管理过程中的信息泄露问题。通过**SSH**可以对所有传输的数据进行加密，也能够防止DNS欺骗和IP欺骗。
>
> SSH之另一项优点为其传输的数据是经过压缩的，所以可以加快传输的速度。SSH有很多功能，它既可以代替Telnet，又可以为FTP、POP、甚至为PPP提供一个安全的“通道”。

**查看是否已经安装了ssh**
```
rpm -qa|grep ssh	查看

yum -y install ssh		安装
```
>  在命令行中输入“rpm -qa|grep ssh”，一般情况下，linux系统在安装系统时已经做了默认安装，如果系统中ssh被卸载掉了，那么可以使用命令“yum -y install ssh”进行安装。

**ssh服务的启动停止**
```
systemctl start sshd	启动

systemctl stop sshd	停止
```
>  和别的服务的操作一样，ssh服务的启停使用命令“systemctl start sshd”和“systemctl stop sshd”。

**连接到远程服务器**

```
ssh root@服务器IP	连接服务器

ssh -p 端口 root@服务器IP	指定端口连接服务器
```

>  在命令行中输入“ssh -l root 服务器IP”可以连接到服务器，也可以使用“ssh root@服务器IP”连接到服务器。

**ssh配置的修改**

```
vi /etc/ssh/sshd_config	修改ssh配置
```

在命令行中输入“vi /etc/ssh/sshd_config”命令可以进入ssh的配置页面，在其中修改参数。

## SCP	传输文件

> scp 命令用于 Linux 之间复制文件和目录。
>
> scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令。
>
> scp 是加密的，rcp是不加密的，scp 是 rcp 的加强版。

```
scp -P 4588 remote@www.runoob.com:/usr/local/sin.sh /home/administrator		指定端口传送文件

scp root@www.runoob.com:/home/root/others/music /home/space/music/1.mp3 		从远程复制到本地

scp local_file remote_username@remote_ip:remote_folder 		从本地复制到远程

scp -r local_folder remote_username@remote_ip:remote_folder 		复制整个目录 -r递归复制整个目录
```

