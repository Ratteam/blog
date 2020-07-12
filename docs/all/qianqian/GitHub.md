<TOC />
# GitHub

## gitclone文件较大时报错

错误提示：
error: RPC failed; curl 18 transfer closed with outstanding read data remaining
fatal: The remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed

解决方式一： 解决措施：命令终端输入
git config --global http.postBuffer 524288000（用完这个就行了）

还不行就尝试以下命令
$ git clone /github_com/large-repository --depth 1
$ cd large-repository
$ git fetch --unshallow

解决方式二：一般clone http方式的容易产生此问题，改成SSH的方式也有效，即https://改为git://