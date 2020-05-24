## 设置php不报错
```
define('DEBUG',false); // 在开发时,声明一个DEBUG模式 
if(defined('DEBUG')) { //检测到处于开发模式 
　　error_reporting(E_ALL); 
} else { 
　　error_reporting(0); 
}
```

## 设置php报错等级为不报错
```
// 设置php报错等级为不报错
error_reporting(0); 
```
## PHP Notice: undefined index: header
```
119行改为以下配置
header = isset(POST['header'])?$POST['header']:'';
```

## PHP Warning:  date(): It is not safe to rely on the system's timezone settings.
在php.ini里找到date.timezone这行，把值改成PRC，如date.timezone = PRC。

如果没有这一行直接加上就好。最后重启WEB服务器与PHP即可。
```
// 设置时间格式
date_default_timezone_set("PRC");
```

## PHP Notice: curl_setopt(): CURLOPT_SSL_VERIFYHOST with value 1 is deprecated and will be removed as of libcurl 7.28.1. It is recommended to use value 2 instead in
```
1已被弃用，改为2即可
31行改为以下配置
// 对认证证书来源的检查
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
```
## Yii 更新数据时报错：列名必须是一个字符串或者数组
建表语句缺少主键
```
ALTER TABLE GUARANTEE ADD CHECK ("ID" IS NOT NULL);

ALTER TABLE GUARANTEE ADD PRIMARY KEY ("ID");
```
参考：https://www.zhangweijie.net/post/2013/10/31/1223.html


## 最完整的php验证手机号码
感觉网上的手机号码验证都不是很严格，自已写了一个,目前支持：

移动：134、135、136、137、138、139、150、151、152、157、158、159、182、183、184、187、188、178(4G)、147(上网卡)；

联通：130、131、132、155、156、185、186、176(4G)、145(上网卡)；

电信：133、153、180、181、189 、177(4G)；

卫星通信：1349

虚拟运营商：170
```
    /**
    * 验证手机号是否正确
    * @author honfei
    * @param number $mobile
    */
    function isMobile($mobile) {
        if (!is_numeric($mobile)) {
            return false;
        }
        return preg_match('#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#', $mobile) ? true : false;
    }
```

## Oracle数据库插入CLOB字段时，提示ORA-01704：字符串文字太长
```
DECLARE  
  clobValue 表名.字段名%TYPE;  
BEGIN  
  clobValue := 'XXX'; --字段内容  
  UPDATE 表名 T SET T.字段名 = clobValue WHERE 条件;  
  COMMIT;  
END;  
/  
```
参考：https://blog.csdn.net/Leolu007/article/details/81027704?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase

##　tomcat自动关闭
发现是有两个版本的tomcat在互相影响，一个重启，另一个将不能访问

## php错误级别的设置方法
```
define('DEBUG',true); // 在开发时,声明一个DEBUG模式 
if(defined('DEBUG')) { //检测到处于开发模式 
　　error_reporting(E_ALL); 
} else { 
　　error_reporting(0); 
}
```
## 过滤XSS潜在危险行为,过滤部分SQL注入
```
/**
 * 过滤XSS潜在危险行为,过滤部分SQL注入
 * 过滤字符串左右空格
 * @author gaowei<jeakry88@sina.com>
 * @param $mixed 要处理的原始字符串信息,字符串或字符串数组
 */
function match_xss_special($mixed) {
  $ra = Array('/([\x00-\x08,\x0b-\x0c,\x0e-\x19])/', '/script/', '/javascript/', '/vbscript/', '/expression/', '/applet/', '/meta/', '/xml/', '/blink/', '/link/', '/style/', '/embed/', '/object/', '/frame/', '/layer/', '/title/', '/bgsound/', '/base/', '/onload/', '/onunload/', '/onchange/', '/onsubmit/', '/onreset/', '/onselect/', '/onblur/', '/onfocus/', '/onabort/', '/onkeydown/', '/onkeypress/', '/onkeyup/', '/onclick/', '/ondblclick/', '/onmousedown/', '/onmousemove/', '/onmouseout/', '/onmouseover/', '/onmouseup/', '/onunload/');
  if (is_array($mixed)) {
    foreach ($mixed as $key => $value) {
      $mixed[$key] = match_xss_special($mixed[$key]);
    }
  } else if (is_string($mixed)) {
    //不对magic_quotes_gpc转义过的字符使用addslashes(),避免双重转义。
    if (!get_magic_quotes_gpc()) {
      //给单引号（'）、双引号（"）、反斜线（\）与 NUL（NULL 字符）加上反斜线转义
      //$mixed = addslashes($mixed);
    }
    $mixed=trim($mixed);
    //$mixed = str_replace(array('&', '<', '>'), array('&amp;', '&lt;', '&gt;'), $mixed);
    //删除非打印字符，粗暴式过滤xss可疑字符串
    //$mixed = preg_replace($ra, '', $mixed);
    //去除 HTML 和 PHP 标记并转换为 HTML 实体
    //$mixed = htmlentities(strip_tags($mixed));
    //$mixed = htmlspecialchars(trim($mixed), ENT_QUOTES);
  }
  return $mixed;
}
```

## java服务安装cenos7+apache-tomcat-7.0.85+jdk1.7.0_80

1.将jdk，apache解压到/user/local/下面

    tar -xf apache-tomcat-7.0.85.tar
    tar -xf jdk1.7.0_80.tar

2.修改/etc/profile

    vim /etc/profile
    export JAVA_HOME=/usr/local/jdk1.7.0_80/
    export JRE_HOME=/usr/local/jdk1.7.0_80/jre
    export PATH=$PATH:/usr/local/jdk1.7.0_80/bin
    export CLASSPATH=./:/usr/local/jdk1.7.0_80/lib
    source /etc/profile

source /etc/profile 立即生效

3.将curlraw.war放到apache下的webapps目录下

4.启动tomcat

/usr/local/apache-tomcat-7.0.85/bin/startup.sh

5.停止tomcat

/usr/local/apache-tomcat-7.0.85/bin/shutdown.sh

6.修改webapp/curlraw/data_config.txt里的数据库配置为

webapps/curlraw/WEB-INF/classes/data_config.txt

修改一下tomcat端口号，进入tomcat的conf目录下，修改server.xml文件，通过vi命令打开文件后直接输入/8080检索到端口号的位置，进入编辑模式后修改端口号为8081

注意查看端口是否和其他服务冲突

7重启tomcat

curl localhost:8081/curlraw/hello/testUploadCorp

## php使用curl对接row+json+java的接口

curl会出现一直不响应的情况。

后来改成curl访问我方java服务

我方java再传给对方java，将拿到的返回值给php

完成操作。

## .tar包解压

tar -xf all.tar

## Linux下安装PHP的mcrypt扩展
```
cd /data/nginx+php/php-5.5.12/ext/mcrypt

/usr/local/php/bin/phpize

./configure --with-php-config=/usr/local/php/bin/php-config

make && make install

vim /etc/php.ini

extension = /usr/local/php/lib/php/extensions/no-debug-zts-20131226/mcrypt.so

/usr/local/php/sbin/php-fpm -c /etc/php.ini
```

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