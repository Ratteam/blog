<TOC />
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

