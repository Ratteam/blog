# CentOS Docker 安装
Docker 支持以下的 64 位 CentOS 版本：
CentOS 7
CentOS 8
更高版本...

## 使用官方安装脚本自动安装
安装命令如下：
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
也可以使用国内 daocloud 一键安装命令：
curl -sSL https://get.daocloud.io/docker | sh

## 手动安装
卸载旧版本
较旧的 Docker 版本称为 docker 或 docker-engine 。如果已安装这些程序，请卸载它们以及相关的依赖项。
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
安装 Docker Engine-Community
使用 Docker 仓库进行安装
在新主机上首次安装 Docker Engine-Community 之前，需要设置 Docker 仓库。之后，您可以从仓库安装和更新 Docker。
设置仓库
安装所需的软件包。yum-utils 提供了 yum-config-manager ，并且 device mapper 存储驱动程序需要 device-mapper-persistent-data 和 lvm2。
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
使用以下命令来设置稳定的仓库。
使用官方源地址（比较慢）
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
可以选择国内的一些源地址：
阿里云
$ sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
清华大学源
$ sudo yum-config-manager \
    --add-repo \
    https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo
安装 Docker Engine-Community
安装最新版本的 Docker Engine-Community 和 containerd，或者转到下一步安装特定版本：

$ sudo yum install docker-ce docker-ce-cli containerd.io
如果提示您接受 GPG 密钥，请选是。
有多个 Docker 仓库吗？
如果启用了多个 Docker 仓库，则在未在 yum install 或 yum update 命令中指定版本的情况下，进行的安装或更新将始终安装最高版本，这可能不适合您的稳定性需求。
Docker 安装完默认未启动。并且已经创建好 docker 用户组，但该用户组下没有用户。
要安装特定版本的 Docker Engine-Community，请在存储库中列出可用版本，然后选择并安装：
1、列出并排序您存储库中可用的版本。此示例按版本号（从高到低）对结果进行排序。
$ yum list docker-ce --showduplicates | sort -r
docker-ce.x86_64  3:18.09.1-3.el7                     docker-ce-stable
docker-ce.x86_64  3:18.09.0-3.el7                     docker-ce-stable
docker-ce.x86_64  18.06.1.ce-3.el7                    docker-ce-stable
docker-ce.x86_64  18.06.0.ce-3.el7                    docker-ce-stable
2、通过其完整的软件包名称安装特定版本，该软件包名称是软件包名称（docker-ce）加上版本字符串（第二列），从第一个冒号（:）一直到第一个连字符，并用连字符（-）分隔。例如：docker-ce-18.09.1。
$ sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
启动 Docker。
$ sudo systemctl start docker
通过运行 hello-world 映像来验证是否正确安装了 Docker Engine-Community 。
$ sudo docker run hello-world

# Docker Hello World
Docker 允许你在容器内运行应用程序， 使用 docker run 命令来在容器内运行一个应用程序。
输出Hello world
runoob@runoob:~$ docker run ubuntu:15.10 /bin/echo "Hello world"
Hello world
各个参数解析：
docker: Docker 的二进制执行文件。
run: 与前面的 docker 组合来运行一个容器。
ubuntu:15.10 指定要运行的镜像，Docker 首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。
/bin/echo "Hello world": 在启动的容器里执行的命令
以上命令完整的意思可以解释为：Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。

## 运行交互式的容器
我们通过 docker 的两个参数 -i -t，让 docker 运行的容器实现"对话"的能力：
runoob@runoob:~$ docker run -i -t ubuntu:15.10 /bin/bash
root@0123ce188bd8:/#
各个参数解析：
-t: 在新容器内指定一个伪终端或终端。
-i: 允许你对容器内的标准输入 (STDIN) 进行交互。
注意第二行 root@0123ce188bd8:/#，此时我们已进入一个 ubuntu15.10 系统的容器
我们尝试在容器中运行命令 cat /proc/version和ls分别查看当前系统的版本信息和当前目录下的文件列表
root@0123ce188bd8:/#  cat /proc/version
Linux version 4.4.0-151-generic (buildd@lgw01-amd64-043) (gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.10) ) #178-Ubuntu SMP Tue Jun 11 08:30:22 UTC 2019
root@0123ce188bd8:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@0123ce188bd8:/# 
我们可以通过运行 exit 命令或者使用 CTRL+D 来退出容器。
root@0123ce188bd8:/#  exit
exit
root@runoob:~# 
注意第三行中 root@runoob:~# 表明我们已经退出了当期的容器，返回到当前的主机中。

## 启动容器（后台模式）
使用以下命令创建一个以进程方式运行的容器
runoob@runoob:~$ docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"
2b1b7a428627c51ab8810d541d759f072b4fc75487eed05812646b8534a2fe63
在输出中，我们没有看到期望的 "hello world"，而是一串长字符
2b1b7a428627c51ab8810d541d759f072b4fc75487eed05812646b8534a2fe63
这个长字符串叫做容器 ID，对每个容器来说都是唯一的，我们可以通过容器 ID 来查看对应的容器发生了什么。
首先，我们需要确认容器有在运行，可以通过 docker ps 来查看：
runoob@runoob:~$ docker ps
CONTAINER ID        IMAGE                  COMMAND              ...  
5917eac21c36        ubuntu:15.10           "/bin/sh -c 'while t…"    ...
输出详情介绍：
CONTAINER ID: 容器 ID。
IMAGE: 使用的镜像。
COMMAND: 启动容器时运行的命令。
CREATED: 容器的创建时间。
STATUS: 容器状态。
状态有7种：
created（已创建）
restarting（重启中）
running（运行中）
removing（迁移中）
paused（暂停）
exited（停止）
dead（死亡）
PORTS: 容器的端口信息和使用的连接类型（tcp\udp）。
NAMES: 自动分配的容器名称。
在宿主主机内使用 docker logs 命令，查看容器内的标准输出：
runoob@runoob:~$ docker logs 2b1b7a428627
runoob@runoob:~$ docker logs amazing_cori

## 停止容器
我们使用 docker stop 命令来停止容器:
通过 docker ps 查看，容器已经停止工作:
runoob@runoob:~$ docker ps
可以看到容器已经不在了。
也可以用下面的命令来停止:
runoob@runoob:~$ docker stop amazing_cori