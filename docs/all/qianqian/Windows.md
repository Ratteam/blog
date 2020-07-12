<TOC />
## windows10怎么查看端口是否被占用
win+r呼出运行菜单，然后输入CMD，呼出命令符。

接下来我们输入：netstat -ano这个命令，这个命令可以让我们查看本机当前所有进程，我们如果想要查询某个端口被什么进程占用了，就可以使用这个命令。

通过上面的命令，我们已经可以明确知道什么应用占用了端口，如果我们想要查看所有占用该端口的进程，那么我们输入：netstat -aon|findstr "1889 ，1889是PID。

最后我们就可以通过任务管理器详情或者命令符结束掉这个进程了。

# Windows快捷键大全

>　Windows快捷键大全，是指在Windows操作系统下，操作电脑的快捷方式。

## **认识按键编辑**

标准计算机键盘共104键，除了26个字母键、符号键、数字键外，其余按键功能如下：

## **主键盘区：**

- Esc 键：escape，退出键。
- Tab 键：tabulator key，跳格键，在文本编辑软件中增加四个空格，Windows中可用于切换屏幕上的焦点。
- Ctrl 键：control，控制键。
- Shift 键：上档键。
- Alt 键：换档键。
- Caps Lock 键：大写锁定键，用于切系统大写锁定。
- Windows 键：键盘上画着一个Windows视窗图标的键。按这个键可以打开开始菜单。
- BackSpace 键：退格键，用于删除当前光标前的字符；退格键 在Win资源管理器后退；打开、另存为界面表示返回上级。
- Enter键：回车键，换行，在Windows资源管理器表示打开文件（夹）或选中菜单选项；在Cmd[DOS Mode]表执行命令。
- Space：空格键 如果活动选项是单选或复选框，则选中或清除框中的√

## **功能键区：**

- F1 显示帮助。
- F2 重命名。
- F3 焦点在桌面时打开“查找：所有文件” 对话框（WIN10不适用）；Win资源管理器中切至搜索栏。
- F4+Alt关闭窗口【焦点在桌面时是关机界面，在网页则关闭当前标签或浏览器】。
- F5 刷新。
- F6切换。焦点切到任务栏或活动窗口中的地址栏。F6或TAB键在左右窗格、地址栏、搜索栏、间切换
- F10+Shift =Alt+F10 Application键激活当前焦点的右键菜单。（word中Shift+F10出现右键快捷菜单）
- F11全屏、Esc退出。【Windows Explorer（即“计算机”点开的窗口，下简称Win资源管理器）是隐藏地址栏和树状图；网页隐藏搜索、收藏、插件、侧边、状态栏；媒体播放界面同理】
  F12在Excel 或Word文档是另存为；网页页面是打开调试环境（审查元素）。

##　**系统键区：**

- PrintScreen键：打印屏幕。按下该键后系统会自动全屏截图并保存至剪切板中（无任何提示可Ctrl+V贴至画图、QQ、Word等，BIOS中截的图可以在Windows等OS中查看），配合Alt键使用可以截取当前焦点所在的活动窗口。
- ScrollLock键：滚动条锁定键，配合ScrollLock指示灯来控制和显示当前滚动条锁定状态。常见的软件中只有Excel支持此功能，使用频率极低。
- Pause|Break键：暂停/中断键。当需要查看主板自检信息时，可以在自检时按下该键，自检结束后将不会自动进入下一步启动过程，而是等待用户操作。VBS（按键精灵等）、VBA编程中为暂停脚本。

## **编辑键区：**

- Insert键：插入/改写键。使用该键可以切换当前文本输入状态是插入状态还是改写状态。Word、写字板、记事本等文字处理和某些程序编译器支持该功能。
- Delete键：删除键，文本编辑可以删除光标后而不是前的字符，文件浏览可以删除选中的文件。部分主板通过该键进入BIOS。
- Delete+Shift删除被选中的项目，如果是文件，将被直接删除而不是放入回收站
- Home键：起始键，用于将光标移至行开头。浏览网页时，可以返回网页最上端。
- End键：结尾键，用于将光标移至结尾。浏览网页时，可以将页面滚至最下方。
- Page Up键：向上翻页键。
- PageDown键：向下翻页键。

## **数字键盘区：**

- NumLock键：数字锁定键，与NumLock指示灯对应，按下该键可以控制NumLock指示灯的状态。当NumLock指示灯点亮时，小键盘区用于输入数字；当NumLock指示灯熄灭时，小键盘区可代替编辑键区使用。

## **107键键盘附加按键：**

- WakeUp键：唤醒键
- Sleep键：睡眠键
- Power键：电源键
- Fn在Win中编辑
- Up、Down、Left、Right 方向键编辑

## **方向键**

- 方向键 + Win键（简称Win键）使窗口全屏、最小化、靠左半边、靠右半边（部分版本不支持）；
- 方向键+Shift键将连续的文字或文件选中
- 方向键（左右）+Ctrl键 在英文单词或中文词语间跳跃
- 方向键（上下）+Ctrl键 在段落开头间跳跃

## **Ctrl键编辑**

系统类

- Ctrl+Alt+Delete打开安全选项（XP及以下为任务管理器，DOS系统中为重启）
- Ctrl+Shift+Esc打开任务管理器 （Win9x中打开开始菜单）
- Ctrl+Shift+N 新建一个新的文件夹（Win XP不适用）
- Ctrl+Shift切换中英文输入法。
- Ctrl+Space（空格）的作用不一样，是切换输入法和非输入法
- Ctrl+Tab焦点向下一项移动
- Ctrl+Shift+Tab=Shift+Tab焦点向上一项移动
- Ctrl+F4 Win资源管理器中切至地址栏；媒体播放中停止。
- Ctrl+Esc打开开始菜单

文字处理类
- Ctrl+a 全选All
- Ctrl+b 粗体 Bold
- Ctrl+c 或insert 拷贝 Copy
- Ctrl+d 字体格式 Decorate
- Ctrl+e 居中对齐 Encenter
- Ctrl+f 查找 Find
- Ctrl+g 定位 Get address
- Ctrl+h 替换 Huan
- Ctrl+i 斜体 italic
- Ctrl+j 两端对齐 Justify
- Ctrl+k 超级链接 King Link
- Ctrl+l 左对齐 Left Ailgn
- Ctrl+m 左缩进 M……
- Ctrl+n 新建 New 或Ctrl+Shift+n
- Ctrl+o 打开 Open
- Ctrl+p 打印 Print
- Ctrl+r 右对齐 Right Align
- Ctrl+s 保存 Save
- Ctrl+t 首行缩进 =Tab
- Ctrl+u 下划线 Underline
- Ctrl+v = Shift + Insert 粘贴 Paste 
- Ctrl+w关闭当前的窗口、标签页、工作、文件或停止媒体播放Work
- Ctrl+x 剪切
- Ctrl+y= Alt+Shift + Backspace重复 （反撤销）
- Ctrl+z= Alt + Backspace撤销


- Ctrl+F4 Word中关闭当前应用程序中的当前文件。
- Ctrl+F6 Word中切换到当前应用程序中的下一个文本。
- Alt + 双击超链接执行匹配的命令（或选择选项）
- Ctrl + 双击超链接打开链接

## **Shift键**

- Shift+右键点击目录：在此处打开命令行窗口选项。
- Shift+右键点击文件：发送到菜单。
- Shift+点击任务栏（已经打开的）图标打开新窗口

## **WIN键编辑**

可以使用 Microsoft自然键盘或含有 Windows徽标键的其他任何兼容键盘的以下快捷键。　　

- Win键+ 向上键最大化窗口
- Win键+ 向左键将窗口左移
- Win键+ 向右键将窗口右移
- Win键+ 向下键最小化窗口
- Win键+ F1 显示“帮助”
- Win键+PrintScreen键截取当前屏幕到剪贴板，并保存截屏图片文件到“图片”文件夹中。（WIN8/10）
- Win键或Ctrl+Esc打开开始菜单
- Win键+Break打开“系统属性”对话框
- Win键+Pause显示“系统属性”对话框
- Win键+Tab循环切换任务栏上的程序（win7、win8）（windowsXP不适用）
- Win键 + Tab使用 Aero Flip 3-D 循环切换任务栏上的程序（win7、winvista）（windowsxp不适用）
- Win键 +Tab+Ctrl通过 Aero Flip 3-D 使用方向键循环切换任务栏上的程序 （win7）
- Win键 + Space如果开启了Aero效果，预览桌面 （win7）（在win10此项是小界面切换输入法）
- Win键+ Home最小化除活动窗口之外的所有窗口（win7）（windowsXP不适用

## **主键盘区上的数字**

Win键+数字启动锁定到任务栏中的由该数字所表示位置处的程序。如果该程序已在运行，则切换到该程序

- Win键+Shift+数字启动锁定到任务栏中的由该数字所表示位置处的程序的新实例
- Win键+Alt+ 数字打开锁定到任务栏中的第该数字个程序的跳转列表(Jump List)
- Win键+B选中桌面右下方托盘栏或任务栏Progress Bar
- Win键+D显示桌面Desktop
- Win键+E打开Windows资源管理器Explorer【即我的电脑、计算机】
- Win键+F打开“查找：所有文件”对话框（win10中为打开反馈中心）（Win资源管理器中为切至查找栏）
- Win键+F+Ctrl搜索计算机（如果已连接到网络）
- Win键+G循环切换小工具（win7）（win10打开xbox菜单）（windowsXP不适用）
- Win键+I 打开“设置”（win10）
- Win键+L 锁定计算机或切换用户
- Win键+M最小化所有窗口
- Win键+Shift+M将最小化的窗口还原到桌面
- WIN键+P多荧幕\投影仪选项选择演示显示模式。（WIN7）出现菜单后再摁Win+P选择选项，放开Win即可 确定。也可摁一次然后方向键选择回车键确定。
- Win键+R打开“运行”对话框
- WIN键+T显示任务栏当前所用程序的任务栏缩略图，再按一次切换到其他缩略图。（QWIN7）
- Win键+U打开辅助工具管理器、轻松访问中心
- Win键+X打开 Windows 移动中心（win7）（win10唤起开始按钮右键菜单）（windowsXP不适用）


## **Alt键编辑**

- Alt+Space 打开活动窗口最左上角的菜单
- Alt+Space+N 最小化活动窗口
- Alt+Tab切换当前程序 （加Shift反向）
- Alt+Esc 切换当前程序 （加Shift反向）
- Alt+Enter 将windows下运行的MSDOS窗口在窗口和全屏幕状态间切换
- Alt+Print Screen将当前活动程序窗口以图像方式拷贝到剪贴板（加shift 可以跳到前一个窗口）
- 向后移动到上一个视图 ALT+左箭头
- 向前移动到上一个视图 ALT+右箭头

## **小键盘编辑**

- NUM LOCK+负号(-)折叠所选的文件夹
- NUM LOCK+乘号(*)展开所选的文件夹下的所有文件及文件夹
- NUM LOCK+加号(+) 展开所选的文件夹

## **IE浏览器编辑**

- 显示前一页（前进键） ALT+RIGHT ARROW
- 显示后一页（后退键） ALT+LEFT ARROW
- 在页面上的各框架中切换 （加shift反向）Ctrl+TAB
- 这个键用来打开IE中的地址栏列表，要关闭IE窗口，可以用Alt+F4组合键 F4
- 刷新 F5
- 强行刷新 Ctrl+F5
- 可以快速在资源管理器及IE中定位到地址栏 F6
- 激活程序中的菜单栏 F10
- 可以使当前的资源管理器或IE变为全屏显示 F11
- 执行菜单上相应的命令 ALT+菜单上带下划线的字母
- 关闭多文档界面程序中的当前窗口 Ctrl+ F4
- 关闭当前窗口或退出程序 ALT+ F4
- 添加当前页面到收藏夹 Ctrl+ D
- 显示所选对话框项目的帮助 F1
- 显示当前窗口的系统菜单 ALT+空格键
- 显示所选项目的快捷菜单 Shift+ F10
- 显示“开始”菜单 Ctrl+ ESC
- 显示多文档界面程序的系统菜单 ALT+连字号(-)
- 切换到上次使用的窗口 按住ALT然后重复按TAB，
- 切换到另一个窗口 ALT+ TAB
- 在后台打开一个页面 Ctrl+ 鼠标左键单击
- 在新窗口中打开一个页面 Shift+ 鼠标左键单击

## **Windows资源管理器编辑**

- 插入光盘时不用“自动播放”功能 按住 Shift插入 CD-ROM
- 复制文件 按住Ctrl拖动文件
- 创建快捷方式按住 Ctrl+Shift拖动文件 或按住 ALT拖动文件
- 立即删除某项目而不将其放入回收站 Shift+DELETE
- 显示“查找：所有文件” F3
- 显示项目的快捷菜单 APPLICATION键
- 刷新窗口的内容 F5
- 重命名项目 F2
- 重命名项目 F2 重命名时按Tab键可重命名下一文件，不用按回车+向下+F2
- 选择所有项目 Ctrl+ A
- 查看项目的属性 ALT+ ENTER或 ALT+双击

## **辅助选项编辑**

- Num Lock 键五秒钟 切换“切换键”的开和关。
- 按住键盘右侧Shift 八秒 切换筛选键开关
- Shift 键五次 切换“粘滞键”的开和关。
- 左ALT+左Shift+PRINT SCREEN 切换高对比度开关
- 左ALT+左Shift+NUM LOCK 切换鼠标键开关
- NUM LOCK 五秒切换切换键开关
- 右侧 Shift 键八秒钟 切换“筛选键”的开和关。
- 左 ALT + 左 Shift + PRINT SCREEN 切换“高对比度”的开和关。
- 左 ALT + 左 Shift + NUM LOCK 切换“鼠标键”的开和关。
- WIN+ U 打开“辅助功能管理器”。

## **鼠标**

- 在同一分区目录间拖曳，默认执行剪切操作，按下Ctrl+拖曳，执行拷贝操作。
- 在不同分区间进行拖曳，默认执行拷贝操作，按下Shift+拖拽，执行剪切操作。
- Alt+拖曳，创建快捷方式。

## Win10 删除文件/文件夹速度慢的优化方法！
按下【Windows + R 】组合键打开运行框，在框中输入：services.msc 点击确定打开服务，也可以在“此电脑”用鼠标右键选择“管理”，打开后，在“服务与应用程序”中找到“服务”项；

在服务界面找到 Program Compatibility Assistant Service ，双击打开把”启动类型“更改为【自动】-【应用】-【启动】-【确定】。

设置完成后我们在Win10系统中删除大文件的时候就不会出现时间显示了，能够快速删除，如果有win7系统的用户也遇到了这样的情况可以按以上方法将【Application Experience】服务启动即可。


## 文本粘贴到Excel后自动分列
经常会碰到文本粘贴到EXCEL后要求自动分列的情况，一直没找到

一个好的解决办法。

其实，Excel里有一个自动分列的工具，可以识别常见分隔符自动分列。

请看下面的例子：

1.含空格的txt文本。

2.复制粘贴到Excel里。

3.选择当前列，找到“数据/分列”工具。

4.点击“分列”工具。

5.下一步，设置分隔符号。

6.选择列并设置数据格式。

7.选择是否替换。

8.确定，数据分列结果。
