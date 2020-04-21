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


