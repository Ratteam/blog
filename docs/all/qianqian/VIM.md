<TOC />
# VIM

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