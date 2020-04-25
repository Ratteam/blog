## 如何给图片添加电子签名

将文档截图成图片

将图片发送到苹果手机

在苹果手机中编辑图片，选择画笔里的签名

将签名放在合适位置，保存图片

## php程序for异常退出

public function actionIndex()
    {
        $total = 10000;
        $pageCount = 100;
        $page = ceil(intval($total)/$pageCount);
        for ($i=1;$i<=$page;$i++) {
            $condition['page'] = $i;
            $condition['rows'] = $pageCount;
            // 下面语句影响到$page了,会把$page赋值为1会导致异常退出
            $page = $condition['page'] ? $condition['page'] : 1;
            $page_count = $condition['rows'] ? $condition['rows'] : 10;
            echo $i;
        }
    }

## php .htmlspecialchars()和htmlspecialchars_decode() html标签转义和反转义

https://blog.csdn.net/xiaomogg/article/details/44854355


## PHP中设置时区方法小结
设置data.timezone = "Asia/Shanghai";即可。
设置data.timezone = "PRC";即可。

PRC 是中国的意思,这段代码是把默认时区设置成了中国标准时间


## Fatal error Using $this when not in object context in
大致意思是 $this 没有上下文，原因是没有对此类进行实例化。
可以使用换为self::New();调用

## ftp报错处理
> put: Login failed: 530 Login incorrect.

重新设置ftp账户密码就正常了
应该是密码过期机制导致的
```
linux 用户密码到期导致ftp业务失败
外网反馈某业务失败，查看log发现FTP连接失败，定位发现提示密码不对，重新修改FTP密码后恢复正常。
但同时定位了下FTP密码被修改的原因，发现是密码过期了，因此查了下资料，查得修改过期时间的方法
1.vim /etc/login.defs
PASS_MAX_DAYS	99999

2.chage username -M 99999

下面是使用到的命令chage：
[root@APPServer yang]# chage --help
Usage: chage [options] [LOGIN]

Options:
-d, --lastday LAST_DAY set date of last password change to LAST_DAY
-E, --expiredate EXPIRE_DATE set account expiration date to EXPIRE_DATE
-h, --help display this help message and exit
-I, --inactive INACTIVE set password inactive after expiration
to INACTIVE
-l, --list show account aging information
-m, --mindays MIN_DAYS set minimum number of days before password
change to MIN_DAYS
-M, --maxdays MAX_DAYS set maximim number of days before password
change to MAX_DAYS
-W, --warndays WARN_DAYS set expiration warning days to WARN_DAYS

以及一个不过期的账户信息：
[root@APPServer yang]# chage username -l
Last password change	: May 17, 2018
Password expires	: never
Password inactive	: never
Account expires	: never
Minimum number of days between password change	: 0
Maximum number of days between password change	: 99999
Number of days of warning before password expires	: 7
```

##　PHP接口curl报错Connection timed out after 30001 milliseconds
```php
$timeout = 300;//设置大些
curl_setopt($curl, CURLOPT_TIMEOUT, $timeout); // 设置超时限制防止死循
```
**curl 超时设置**
 PHP cURL 的超时设置有两个 CURLOPT_CONNECTTIMEOUT 和 CURLOPT_TIMEOUT，他们的区别是：

- CURLOPT_CONNECTTIMEOUT 用来告诉 PHP 在成功连接服务器前等待多久（连接成功之后就会开始缓冲输出），这个参数是为了应对目标服务器的过载，下线，或者崩溃等可能状况。

- CURLOPT_TIMEOUT 用来告诉成功 PHP 从服务器接收缓冲完成前需要等待多长时间，如果目标是个巨大的文件，生成内容速度过慢或者链路速度过慢，这个参数就会很有用。

只加了CURLOPT_CONNECTTIMEOUT 经常会卡死

使用 cURL 下载 MP3 文件是一个对开发人员来说不错的例子，CURLOPT_CONNECTTIMEOUT 可以设置为10秒，标识如果服务器10秒内没有响应，脚本就会断开连接，CURLOPT_TIMEOUT 可以设置为100秒，如果MP3文件100秒内没有下载完成，脚本将会断开连接。

需要注意的是：CURLOPT_TIMEOUT 默认为0，意思是永远不会断开链接。所以不设置的话，可能因为链接太慢，会把 HTTP 资源用完。