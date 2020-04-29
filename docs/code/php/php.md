## Git无法检测到文件名大小写的更改

在当前项目中，早先创建并已经push到远程的文件及文件夹，将名称大小写更改后，git无法检测出更改。
出现这种情况的原因是，git默认配置为忽略大小写，因此无法正确检测大小写的更改。
那么，解决办法是，在当前项目中，运行git config core.ignorecase false，关闭git忽略大小写配置，即可检测到大小写名称更改。

## failed to open stream:Permission denied in 错误的解决方法

1，问题：用php在做项目的时候，偶尔会出现failed to open stream:Permission denied in 这个错误，原因是因为某个没有某个文件的血的权限，所以在写入文件的时候会报错
2，解决方案：点击该文件，右击，点击属性，会看到该文件的所有属性，点击安全，即可设置所有组的用户权限，点击写入即可有写入权限

## MySql查重语句

```
SELECT
    count(*),
    IndentId
FROM
    t_customerforsale
-- WHERE
--     IndentId = ''
GROUP BY
    IndentId
HAVING
    count(*) > 1;
```

## 图片转base64和base64字符串转存图片
```
    /**
     * @desc base64字符串转存图片
     * @param string $imgBase64 图片base64格式字符串
     * @param string $filename 文件名称
     * @author tzg
     * @since 0.1
     * note:1.该方法使用了修改文件，所以./uploads/worker/必须加755权限
     */
    private static function base64_to_picture($imgBase64,$filename){
        //if(!file_exists(self::$path.$filename.'.jpeg')){
        if (preg_match('/^(data:\s*image\/(\w+);base64,)/',$imgBase64,$res)) {
            //获取图片类型
            $type = $res[2];
            //图片保存路径
    		$webroot = Yii::getPathOfAlias('webroot');
    		$ym = date('Ymd');
    		$home_images_path = '/uploads/images/' . $ym;
    		$new_file = $webroot . '/' . $home_images_path.'/';
            if (!file_exists($new_file)) {
                @mkdir($new_file,0755,true);
                @chmod($new_file,0755);
            }
            //图片名字
            $new_file = $new_file.$filename.'.'.$type;
            if (file_put_contents($new_file,base64_decode(str_replace($res[1],'', $imgBase64)))) {
                return true;
            } else {
                return false;
            }
        }
    }
    
        /**
         * @desc 图片base64字符串转存图片
         * @param string $imgBase64 图片base64格式字符串
         * @param string $filename 文件名称
         * @author tzg
         * @since 0.1
         * note:1.该方法使用了修改文件，所以./uploads/worker/必须加755权限
         */
        private static function base64_to_picture($imgBase64,$filename){
            //if(!file_exists(self::$path.$filename.'.jpeg')){
            if (preg_match('/^(data:\s*image\/(\w+);base64,)/',$imgBase64,$res)) {
                //获取图片类型
                $type = $res[2];
                //图片保存路径
    			$webroot = Yii::getPathOfAlias('webroot');
    			$ym = date('Ymd');
    			$home_images_path = '/uploads/images/' . $ym;
    			$new_file = $webroot . '/' . $home_images_path.'/';
                if (!file_exists($new_file)) {
                    @mkdir($new_file,0755,true);
                    @chmod($new_file,0755);
                }
                //图片名字
                $new_file = $new_file.$filename.'.'.$type;
                if (file_put_contents($new_file,base64_decode(str_replace($res[1],'', $imgBase64)))) {
                    return true;
                } else {
                    return false;
                }
            }
        }
```
## PHPexcel导出Maximum 31 characters allowed in sheet title.

```
$xls_name = mb_strimwidth($xls_name, 0, 28, "...");  //excel的文件名太长会报错，需要截取
```

## unlink:No such file or directory的解决办法

```
is_file($url) && $this->unlink($url)
```

## 安装php在zip扩展

```
wget http://pecl.php.net/get/zip-1.12.4.tgz
tar zxfv zip-1.12.4.tgz
cd /home/nginx+php/php-5.5.12/ext/zip
/usr/local/php/bin/phpize
./configure --with-php-config=/usr/local/php/bin/php-config
make
make install
```

## linux find 命令查找文件和文件夹
```
在/home目录下查找以.txt结尾的文件名

find /home -name "*.txt"
```

## **Fatal error**: Call to undefined function bcmul() 

不连网：

```
cd /opt/installfile/nginx+php/nginx+php/php-5.5.12/ext/bcmath
/usr/local/php/bin/phpize(phpize的路径根据各自安装有所不同)
/configure --with-php-config=/usr/local/php/bin/php-config(php-config文件的路径)
make && make install
最后还需要把生成的bcmath.so文件加入到php.ini中 extesion=bcmath.so（如果没有设定extesion_dir，可能要加上全路径，查看phpize执行后的生成的so文件的路径即可，这里是：extension_dir= /usr/local/php/lib/php/extensions/no-debug-non-zts-20121212/)
然后重启web服务器，就Ok了
```

## gitignore 不起作用的解决办法

.gitignore文件只是ignore没有被staged(cached)文件，对于已经被staged文件，加入ignore文件时一定要先从staged移除。

因此，要想用gitignore忽略文件，必须先把它们从staged中移除

```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

## php 判断日志文件夹是否存在,不存在则创建

```
//判断日志文件夹是否存在,不存在则创建
        $logPath = "./log/upload";
        if (!is_dir ($logPath)) {
            mkdir ( $logPath, 0755, true );
            chmod ( $logPath, 0755 );
        }
```

## php命令

`pkill php-fpm`     关闭php-fpm

`/usr/local/php/sbin/php-fpm -c /etc/php.ini`       指定php-fpm配置并开启

## 为什么要 urlencode()

url转义其实也只是为了符合url的规范而已。因为在标准的url规范中中文和很多的字符是不允许出现在url中的。

按照每个字符对应的字符编码，不是符合我们范围的，统统的转化为%的形式也就是了。自然也是16进制的形式。


## IIS数据量过大报错：C:\php\php5.6-nts\php-cgi.exe - FastCGI 进程超过了配置的请求超时时限

解决办法：
IIS7->FastCGI设置->双击"php-cgi.exe"->"活动超时" 项默认是设置为70(秒)，改为600(10分钟，此处根据需求设置可以略高~)

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