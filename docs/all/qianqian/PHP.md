<TOC />

## 报错：yii updateByPk 报错查询数据表 "specialaccount" 时，不会提供列 "Id" 的值
```
表中有两个主键，去掉一个就行了
```

## 插入数据报错SQLSTATE[HY000]: General error: 1 OCIStmtExecute: ORA-00001: unique constraint (C##HNPRD.SYS_C00112597)
```
-- 查看最大的id
select max(to_number(id)) from attendance;
-- 查看最大的序列
select SEQ_ATTENDANCE_ID.nextval from dual;
-- 删除序列 SEQ_ATTENDANCE_ID
DROP SEQUENCE SEQ_ATTENDANCE_ID;
-- 重建序列 SEQ_ATTENDANCE_ID（将START WITH 69500000改为超过最大的id）
CREATE SEQUENCE  "SEQ_ATTENDANCE_ID"  MINVALUE 1 
MAXVALUE 9999999999999999999999999999 
INCREMENT BY 1 START WITH 69500000 CACHE 10;

oracle修改序列当前值
很多时候，我们都会用到oracle序列，那么我们怎么修改序列的当前值呢？

首先我们可以查看当前序列值是多少，如下：
select 序列名.nextval from dual;

比方说我现在查出来值是10，那么我要把当前值改成8，那么可以这么改：
alter sequence 序列名 increment by -2;

如果我需要把当前值改成15，那么可以这么改：
alter sequence 序列名 increment by 5;

上述是通过修改当前序列增量长度间隔值，用于修改当前序列值，增加1或-1或n或-n，
当修改好当前值之后，记得一定要把序列增量改回来，改为1：
alter sequence 序列名 increment by 1;
```

## Nginx配置详解
```
; 代理内网服务7095到外网通过8200端口访问(7095_att.conf)
server {
    listen       8200;
    #server_name  eemed.net www-test.ememed.net www.ememed.net;
    server_name_in_redirect  off;
    charset utf-8;
    access_log  8200.access.log   main;
    error_log  logs/8200.error.log;
    set $wwwroot /usr/local/nginx/html;
    root $wwwroot;
    index index.html index.htm index.php;
    #error_page  404              /404.html;
    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarder-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass http://127.0.0.1:7095;       
    }
    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
            root   html;
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #include common.conf;
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
}

; yum源配置(7020_yum.conf)
server {
    listen       7020;
    server_name_in_redirect  off;
    charset utf-8;
    access_log  www.access.log  main;
    error_log  logs/www.error.log;
    set  $wwwroot /home/data/installfile/base;
    root $wwwroot;
    index index.html index.htm index.php;
    location / {
        root /home/data/installfile/base;
        index index.html index.html;
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
    }
    #error_page  404              /404.html;
    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
            root   html;
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    location ~ \.php?.*$ {
        root           $wwwroot;
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        fastcgi_connect_timeout 240;
        fastcgi_send_timeout 240;
        fastcgi_read_timeout 240;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 128k;
        include        fastcgi_params;
    }
    location ~* \.(gif|jpg|jpeg|png|bmp|swf|otf|svg|eot|ttf|woff)$
    {
        root                  $wwwroot;
        expires               30d;
    }
    location ~* \.(js|css)?$
    {
        root                  $wwwroot;
        expires               1d;
    }
    #include common.conf;
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    location ~ /\.ht {
        deny  all;
    }
}

; 本地nginx默认配置(7021_nginx.conf)
server {
    listen       7201;
    server_name_in_redirect  off;
    charset utf-8;
    access_log  www.access.log   main;
    error_log  logs/www.error.log;
    set $wwwroot /usr/local/nginx/html;
    root $wwwroot;
    index index.html index.htm index.php;
    #error_page  404              /404.html;
    location ~* ^/attachments/.*.(php|php5)$ {
        deny all;
    }
    location / {
    root $wwwroot;
        #   try_files  $uri /index.php?$args;
        #index index.php index.html index.htm;
        #站点的rewrite在这里写
        #rewrite ^/(\w+)\.html$ /$1.php;
        #rewrite ^/(\w+)/(\w+)$ /$1/$2.php;
    }
    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
            root   html;
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    location ~ \.php?.*$ {
        root           $wwwroot;
        #fastcgi_pass unix:/tmp/php-cgi.sock
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        fastcgi_connect_timeout 240;
        fastcgi_send_timeout 240;
        fastcgi_read_timeout 240;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 128k;
        include        fastcgi_params;
    }
    location ~* \.(gif|jpg|jpeg|png|bmp|swf|otf|svg|eot|ttf|woff)$
    {
        root                  $wwwroot;
        expires               30d;
    }
    location ~* \.(js|css)?$
    {
        root                  $wwwroot;
        expires               1d;
    }
    #include common.conf;
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    location ~ /\.ht {
        deny  all;
    }
}

; nginx的https的80配置(80_www.conf)
server {
    listen       80;
    server_name baidu.com;
    rewrite ^(.*)$ https://${server_name}$1 permanent;
}

; nginx的https的443配置(443_www.conf)
server {
    listen       443 ssl;
    charset utf-8;
    access_log  www.access.log  main;
    error_log  logs/www.error.log;
    #set $wwwroot /home/data/update;
    set $wwwroot  /usr/local/nginx/html;
    root $wwwroot;
    index index.html index.htm index.php;
    server_name baidu.com;
    #error_page  404              /404.html;
    ssl_certificate   3923894_baidu.com.pem;
    ssl_certificate_key  3923894_baidu.com.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location / {
        client_max_body_size 1000M;
        proxy_pass http://127.0.0.1:7090;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarder-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_buffer_size 1000k;
        proxy_buffers 24 1000k;
        proxy_busy_buffers_size 1000k;  
        proxy_connect_timeout   300; 
        proxy_send_timeout      300; 
        proxy_read_timeout      300;    
    }
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
            root   html;
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #include common.conf;
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    location ~ /\.ht {
        deny  all;
    }
}

; nginx.conf
http {
    include mime.types;
    server_names_hash_bucket_size 512;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    tcp_nodelay on;
    client_header_timeout 15;
    client_body_timeout 15;
    send_timeout 25;
    include vhosts/*.conf;
}

; keepalive_timeout 60s;
该参数用于设置客户端连接保持会话的超时时间，超过这个时间服务器会关闭该连接

; client_body_timeout 20s;
该参数用于设置读取客户端请求主体数据的超时时间，如果超时客户端还没有发送完整的主体数据。 
服务器将返回 "Request time out (408)" 错误

; client_header_timeout 10s;
该参数用于设置读取客户端请求头数据的超时时间，如果超时客户端还没有发送完整的 header 数据。 
服务器将返回 "Request time out (408)" 错误

; send_timeout 30s;
用于指定响应客户端的超时时间，如果超过这个时间，客户端没有任何活动，Nginx 将会关闭连接
根据转发的应用服务可以配置 proxy_send_timeout、uwsgi_send_timeout、fastcgi_send_timeout

; lingering_timeout 5s;
可以理解为 TCP 连接关闭时的 SO_LINGER 延时设置，默认 5s
当lingering_close有效时，此伪指令指定更多客户端数据到达的最大等待时间。 如果在此期间未收到数据
连接已关闭。 否则，将读取并忽略数据，并且nginx开始再次等待更多数据。
重复“ wait-read-ignore”周期，但不超过lingering_time指令指定的周期。

; tcp_nodelay 
默认情况下当数据发送时，内核并不会马上发送，可能会等待更多的字节组成一个数据包，这样可以提高 I/O 性能。
但是，在每次只发送很少字节的业务场景中，使用 tcp_nodelay 功能，等待时间会比较长
 
; resolver_timeout 30s;
域名解析超时，默认 30s

; proxy_connect_timeout 60s;
定义用于与代理服务器建立连接的超时。 请注意，此超时通常不能超过75秒。

; proxy_read_timeout 60s;
定义用于从代理服务器读取响应的超时。 仅在两个连续的读取操作之间设置超时，
而不是整个响应的传递。 如果代理服务器在此时间内未传输任何内容，则连接将关闭。

; proxy_send_timeout 60s;
设置用于将请求传输到代理服务器的超时。 仅在两个连续的写操作之间设置超时，
不用于传输整个请求。 如果代理服务器无法记录

```

## Nginx命令
```
-- 查看nginx是否启动
ps -A | grep nginx  
-- 检查语法
application/nginx/sbin/nginx -t 
-- 平滑加载配置文件(建议使用这个)
application/nginx/sibn/nginx -s reload 
-- 启动nginx服务 
application/nginx/sbin/nginx 
```

## Nginx报错
```
; nginx: [alert] kill(1668, 1) failed (3: No such process)
没有启动nginx服务，执行/app/nginx/sbin/nginx，开启nginx服务后解决

; 上传文件nginx报错
上传接口直接显示ngnix报错
日志显示：缺失某个文件夹
将文件夹创建即可
```

## Base64编码为什么会使数据量变大？
```
Base64编码的思想是是采用64个基本的ASCII码字符对数据进行重新编码。
它将需要编码的数据拆分成字节数组。
以3个字节为一组。按顺序排列24位数据，再把这24位数据分成4组，即每组6位。
再在每组的的最高位前补两个0凑足一个字节。
这样就把一个3字节为一组的数据重新编码成了4个字节。
当所要编码的数据的字节数不是3的整倍数，也就是说在分组时最后一组不够3个字节。
这时在最后一组填充1到2个0字节。并在最后编码完成后在结尾添加1到2个"="。
（ 注BASE64字符表：ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/）

从以上编码规则可以得知，通过Base64编码，原来的3个字节编码后将成为4个字节，
即字节增加了33.3%，数据量相应变大。所以20M的数据通过Base64编码后大小大概为20M*133.3%=26.67M。
```

## png转jpg(将png转为jpg后图片大小将减少一位数)
```
    // png转jpg
    public function PngChangeJpg($src_path)
    {
		$src_path = '.'.$src_path;
        // 图片不存在不做处理
        if(!file_exists($src_path)){
            return $src_path;
        }
        $info = getimagesize($src_path);
		$src_original_width = $info[0];
		$src_original_height = $info[1];
		$mime = $info['mime'];
        $type = substr(strrchr($mime, '/'), 1);
        $baseImgPath = str_replace($type,'',$src_path);
        // 图片不是png不做处理
        if($type!='png'){
            return $src_path;
        }
		$res = imagecreatefrompng($src_path);
		$new_path = $baseImgPath.'jpg';
        $res = imagejpeg($res, $new_path);
        if ($res) {
			return $new_path;
        } else {
			return $src_path;
        }
    } 
```

## PhpStudy升级到mysql8
```
下载
下载安装包mysql8.0,如果你想要下载其它版本可以选择：mysql历史版本地址。

将phpstudy的mysql目录重命名为Mysqlbak。

然后把下载好的新版本的mysql解压到这个目录里。我的是F:\phpStudy\MySQL

编辑my.ini文件
下载的mysql8默认是没有my.ini的，
复制原来的(Mysqlbak目录下的)一份my.ini到mysql目录下
注意Mysql8的新特性和配置，原来的my.ini是不能直接用的。需要改下
比如修改后我的my.ini

[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
 
[mysqld]
# 设置3306端口
port =3306
# 设置mysql的安装目录
basedir="F:\phpStudy\MySQL\"
#存放数据的目录
datadir="F:\phpStudy\MySQL\data"
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8mb4
collation-server = utf8mb4_unicode_ci
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
#认证方式(如果这里不修改，会新版的密码认证，会连接不了数据库的，并且要放到mysqld下)
default_authentication_plugin = mysql_native_password

启动
接下来我们来启动下 MySQL 数据库：

以管理员身份打开 cmd 命令行工具（可以到C盘system32下的cmd.exe右键管理员运行），切换目录：

我的是在F盘，先转到F盘先，然后再初始化MYSQL
C:\Users\Administrator>F:

F:\>cd F:\phpStudy\MySQL\bin

F:\phpStudy\MySQL\bin>mysqld --initialize --console

如果安装成功后，会出现mysql密码了比如上面我的是：+HVW8Qi(RT/d

然后继续安装
mysqld install

启动服务器
net start mysql

phpStudy自带的mysql是5.5版本的，无法启动 mysql了 这是为什么？？？ 

原因是phpStudy为我们注册了一个MySQL服务
而我们用mysql -install命令安装Mysql的时候注册 了一个MySQL所以问题来了，两者冲突了。
解决办法 很简单，打开CMD命令输入 sc delete MySQL 　

启动成功后，输入密码登录

注意：
因为mysql8.0的密码加密方式跟之前的保存方式不一样，所以要转码，Navicat 或 phpstudy才能连接得

更改密码：
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '这里输入你的密码自行修改';

到此mysql8更新成功，接下来测试下phpstudy启动服务试下：
先停掉Mysql服务：net stop mysql

切换到phpstydy客户度界面，我重启服务看下 OK
```
 
## PhpStudy2018 升级mysql版本，解决启动问题
```
点击phpStudy->其他选项菜单->服务管理器->MySQL->安装服务，
点击phpStudy->其他选项菜单->服务管理器->打开服务管理->MySQL->安装服务

应该有个MySQL和MySQLa，mysqla既然是phpstudy帮你注册的服务
那你自己mysqld -install的注册的服务是mysql。
执行sc delete mysql,再启动phpstudy就好了。
假如phpstudy安装失败的话，记得要把执行sc delete mysql。
skip-grant-tables，这个是跳过验证的，自己设置密码吧。
```

## php-fpm配置文件详解
```
第一部分：FPM 配置
-p　: 命令行中动态修改--prefix 　

;include=etc/fpm.d/*.conf　　
;用于包含一个或多个文件，如果glob(3)存在(glob()函数返回匹配指定模式的文件名或目录)

第二部分：全局配置
由标志[global]开始：
;pid = run/php-fpm.pid　　　　　   
;设置pid文件的位置，默认目录路径 /usr/local/php/var
;error_log = log/php-fpm.log　　  
;记录错误日志的文件，默认目录路径 /usr/local/php/var
;syslog.facility = daemon　　　　  
;用于指定什么类型的程序日志消息。
;syslog.ident = php-fpm　　　　    
;用于FPM多实例甄别
;log_level = notice　　　　　　　   
;记录日志的等级，默认notice，可取值alert, error, warning, notice, debug
;emergency_restart_threshold = 0  
;如果子进程在这个时间段内带有IGSEGV或SIGBUS退出，则重启fpm，默认0表示关闭这个功能
;emergency_restart_interval = 0　 
;设置时间间隔来决定服务的初始化时间（默认单位：s秒），可选s秒，m分，h时，d天
;process_control_timeout = 0　　  
;子进程等待master进程对信号的回应（默认单位：s秒），可选s秒，m分，h时，d天
;process.max = 128　　　　　　　　  
;控制最大进程数，使用时需谨慎
;process.priority = -19　　　　　  
;处理nice(2)的进程优先级别-19(最高)到20(最低)
;rlimit_files = 1024　　　　　　　　
;设置主进程文件描述符rlimit的数量
;rlimit_core = 0　　　　　　　　　　 
;设置主进程rlimit最大核数
;events.mechanism = epoll　　　　　
;使用处理event事件的机制
　　; - select     (any POSIX os)
　　; - poll       (any POSIX os)
　　; - epoll      (linux >= 2.5.44)
　　; - kqueue     (FreeBSD >= 4.1, OpenBSD >= 2.9, NetBSD >= 2.0)
　　; - /dev/poll  (Solaris >= 7)
　　; - port       (Solaris >= 10)
;daemonize = yes　　　　　　　　　　 
;将fpm转至后台运行，如果设置为"no"，那么fpm会运行在前台
;systemd_interval = 10

第三部分：进程池的定义
通过监听不同的端口和不用管理选择可以定义多个不同的子进程池。
进程池被用于记录和统计，对于fpm能够处理进程池数目的多少并没有限制
其中$pool变量可以在任何指令中使用，他将会替代相应的进程池名字。例如：这里的[www]

[root@test ～]# ps -ef | grep php-fpm
root      3028     1  0 20:33 ?        00:00:00 php-fpm: master process (/usr/local/php/etc/php-fpm.conf)
nobody    3029  3028  0 20:33 ?        00:00:00 php-fpm: pool www          
nobody    3030  3028  0 20:33 ?        00:00:00 php-fpm: pool www

[www]
; It only applies on the following directives:
; - 'access.log'
; - 'slowlog'
; - 'listen' (unixsocket)
; - 'chroot'
; - 'chdir'
; - 'php_values'
; - 'php_admin_values'

;prefix = /path/to/pools/$pool    
;如果没有制定，将使用全局prefix替代
user = nobody　　　　　　　　　　　　 
;进程的发起用户和用户组，用户user是必须设置，group不是
group = nobody
listen = 127.0.0.1:9000　　　　　　 
;监听ip和端口
;listen.backlog = 65535　　　　　　 
;设置listen(2)函数backlog
;listen.owner = nobody
;listen.group = nobody
;listen.mode = 0660
;listen.acl_users =
;listen.acl_groups =
;listen.allowed_clients = 127.0.0.1 
;允许FastCGI客户端连接的IPv4地址，多个地址用','分隔，为空则允许任何地址发来链接请求
; process.priority = -19
pm = dynamic　　　　　　　　　　　　　  
;选择进程池管理器如何控制子进程的数量
　　   static：　　                   
;对于子进程的开启数路给定一个锁定的值(pm.max_children)
　　   dynamic:　                    
;子进程的数目为动态的，它的数目基于下面的指令的值(以下为dynamic适用参数)
　　　　pm.max_children：            
;同一时刻能够存活的最大子进程的数量
　　　　pm.start_servers：           
;在启动时启动的子进程数量
　　　　pm.min_spare_servers：       
;处于空闲"idle"状态的最小子进程，如果空闲进程数量小于这个值，那么相应的子进程会被创建
　　　　pm.max_spare_servers：       
;最大空闲子进程数量，空闲子进程数量超过这个值，那么相应的子进程会被杀掉。
　　ondemand：                       
;在启动时不会创建，只有当发起请求链接时才会创建(pm.max_children, pm.process_idle_timeout)

pm.max_children = 5
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 3
;pm.process_idle_timeout = 10s;　　
;空闲进程超时时间
;pm.max_requests = 500　　　　　　　 
;在派生新的子进程前，每一个子进程应该处理的请求数目，在第三方库中解决内存溢出很有用，设置为0则不会限制
;pm.status_path = /status　　　     
;配置一个URI，以便查看fpm状态页

状态页描述：
　　accepted conn:                 
;该进程池接受的请求数量
　　pool:                          
;进程池的名字
　　process manager:               
;进程管理，就是配置中pm指令，可以选择值static，dynamic，ondemand
　　idle processes:                
;空闲进程数量
　　active processes:              
;当前活跃的进程数量
　　total processes:               
;总的进程数量=idle+active
　　max children reached:          
;达到最大子进程的次数，达到进程的限制，当pm试图开启更多的子进程的时候(仅当pm工作在dynamic时)
;ping.path = /ping　　　　          
;该ping URI将会去调用fpm监控页面，如果这个没有设置，那么不会有URI被做为ping页
;ping.response = pong　　          
;用于定制平请求的响应，响应的格式text/plain(对200响应代码)
;access.log = log/$pool.access.log
;access.format = "%R - %u %t \"%m %r%Q%q\" %s %f %{mili}d %{kilo}M %C%%"
　　; The following syntax is allowed
　　;  %%: the '%' character
　　;  %C: %CPU used by the request
　　;      it can accept the following format:
　　;      - %{user}C for user CPU only
　　;      - %{system}C for system CPU only
　　;      - %{total}C  for user + system CPU (default)
　　;  %d: time taken to serve the request
　　;      it can accept the following format:
　　;      - %{seconds}d (default)
　　;      - %{miliseconds}d
　　;      - %{mili}d
　　;      - %{microseconds}d
　　;      - %{micro}d
　　;  %e: an environment variable (same as $_ENV or $_SERVER)
　　;      it must be associated with embraces to specify the name of the env
　　;      variable. Some exemples:
　　;      - server specifics like: %{REQUEST_METHOD}e or %{SERVER_PROTOCOL}e
　　;      - HTTP headers like: %{HTTP_HOST}e or %{HTTP_USER_AGENT}e
　　;  %f: script filename
　　;  %l: content-length of the request (for POST request only)
　　;  %m: request method
　　;  %M: peak of memory allocated by PHP
　　;      it can accept the following format:
　　;      - %{bytes}M (default)
　　;      - %{kilobytes}M
　　;      - %{kilo}M
　　;      - %{megabytes}M
　　;      - %{mega}M
　　;  %n: pool name
　　;  %o: output header
　　;      it must be associated with embraces to specify the name of the header:
　　;      - %{Content-Type}o
　　;      - %{X-Powered-By}o
　　;      - %{Transfert-Encoding}o
　　;      - ....
　　;  %p: PID of the child that serviced the request
　　;  %P: PID of the parent of the child that serviced the request
　　;  %q: the query string
　　;  %Q: the '?' character if query string exists
　　;  %r: the request URI (without the query string, see %q and %Q)
　　;  %R: remote IP address
　　;  %s: status (response code)
　　;  %t: server time the request was received
　　;      it can accept a strftime(3) format:
　　;      %d/%b/%Y:%H:%M:%S %z (default)
　　;  %T: time the log has been written (the request has finished)
　　;      it can accept a strftime(3) format:
　　;      %d/%b/%Y:%H:%M:%S %z (default)
　　;  %u: remote user
;slowlog = log/$pool.log.slow　　 
;用于记录慢请求
;request_slowlog_timeout = 0　　  
;慢日志请求超时时间，对一个php程序进行跟踪。
;request_terminate_timeout = 0　　
;终止请求超时时间，在worker进程被杀掉之后，提供单个请求的超时间隔。
由于某种原因不停止脚本执行时，应该使用该选项，0表示关闭不启用
(在php.ini中，max_execution_time 一般设置为30，表示每一个脚本的最大执行时间)
;rlimit_files = 1024　　　　　　　　
;设置打开文件描述符的限制
;rlimit_core = 0　　　　　　　　　　 
;设置内核对资源的使用限制，用于内核转储
;chroot =　　　　　　　　　　　　　　　
;设置chroot路径，程序一启动就将其chroot放置到指定的目录下，该指令值必须是一个绝对路径
;chdir = /var/www　　　　　　　　　　
;在程序启动时将会改变到指定的位置(这个是相对路径，相对当前路径或chroot后的“/”目录)　　　　
;catch_workers_output = yes　　　　
;将worker的标准输出和错误输出重定向到主要的错误日志记录中。
如果没有设置，根据FastCGI的指定，将会被重定向到/dev/null上
;clear_env = no　　　　　　　　　　  
;清理环境
;security.limit_extensions = .php .php3 .php4 .php5　　
;限制FPM执行解析的扩展名
;env[HOSTNAME] = $HOSTNAME
;env[PATH] = /usr/local/bin:/usr/bin:/bin
;env[TMP] = /tmp
;env[TMPDIR] = /tmp
;env[TEMP] = /tmp

; Additional php.ini defines, specific to this pool of workers. These settings
; overwrite the values previously defined in the php.ini. The directives are the
; same as the PHP SAPI:
;   php_value/php_flag             - you can set classic ini defines which can
;                                    be overwritten from PHP call 'ini_set'.
;   php_admin_value/php_admin_flag - these directives won't be overwritten by
;                                     PHP call 'ini_set'
; For php_*flag, valid values are on, off, 1, 0, true, false, yes or no.

; Defining 'extension' will load the corresponding shared extension from
; extension_dir. Defining 'disable_functions' or 'disable_classes' will not
; overwrite previously defined php.ini values, but will append the new value
; instead.

;php_admin_value[sendmail_path] = /usr/sbin/sendmail -t -i -f www@my.domain.com
;php_flag[display_errors] = off
;php_admin_value[error_log] = /var/log/fpm-php.www.log
;php_admin_flag[log_errors] = on
;php_admin_value[memory_limit] = 32M

总结：
在php-fpm的配置文件中，有两个指令非常重要，就是"pm.max_children" 和 "request_terminate_timeout"

"pm.max_children" 确定了php-fpm的处理能力。
原则上时越多越好，但这个是在内存足够打的前提下，每开启一个php-fpm进程要占用近30M左右的内存

如果请求访问较多，那么可能会出现502，504错误。
对于502错误来说，属于繁忙进程而造成的。
对于504来说，就是客户发送的请求在限定的时间内没有得到相应。
过多的请求导致“504  Gateway  Time-out”。这里也有可能是服务器带宽问题。

另外一个需要注意的指令"request_terminate_timeout"，它决定php-fpm进程的连接/发送和读取的时间。
如果设置过小很容易出现"502 Bad Gateway" 和 “504  Gateway  Time-out”。
默认为0，就是说没有启用，不加限制，但是这种设置前提是你的php-fpm足够健康，这个需要根据实际情况加以限定。
```

## apache服务超时处理phpstudy+apache+php
```
问题现象
有时再用xdebug调试程序时,由于调试时间过长会出现500服务器错误的现象。
根本原因在于apache默认的连接时间过短导致。

适用于
中间件:Apache(Fastcgi)
错误日志为:End of script output before headers

解决方法
打开apache配置文件注释掉如下，并添加一行。

    # Various default settings
    Include conf/extra/httpd-default.conf 将注释去掉
    Include conf/extra/httpd-fcgid.conf 添加此行

更改httpd-default.conf如下内容

    # Timeout: The number of seconds before receives and sends time out.
    #
    Timeout 3600
    
    #
    # KeepAlive: Whether or not to allow persistent connections (more than
    # one request per connection). Set to "Off" to deactivate.
    #
    KeepAlive On
    
    #
    # MaxKeepAliveRequests: The maximum number of requests to allow
    # during a persistent connection. Set to 0 to allow an unlimited amount.
    # We recommend you leave this number high, for maximum performance.
    #
    MaxKeepAliveRequests 0
    
    #
    # KeepAliveTimeout: Number of seconds to wait for the next request from the
    # same client on the same connection.
    #
    KeepAliveTimeout 3600

更改php.ini如下内容

    max_execution_time = 3600
    ; Maximum amount of time each script may spend parsing request data. It's a good
    ; idea to limit this time on productions servers in order to eliminate unexpectedly
    ; long running scripts.

在extra目录下创建httpd-fcgid.conf，写入如下内容。

    ProcessLifeTime 3600
    FcgidIOTimeout 3600
    FcgidConnectTimeout 3600
    FcgidOutputBufferSize 128
    FcgidMaxRequestsPerProcess 1000
    FcgidMinProcessesPerClass 0 
    FcgidMaxProcesses 16 
    FcgidMaxRequestLen 268435456   
    FcgidInitialEnv PHP_FCGI_MAX_REQUESTS 1000
    IPCConnectTimeout 3600
    IPCCommTimeout 3600
    FcgidIdleTimeout 3600
    FcgidBusyTimeout 60000
    FcgidBusyScanInterval 120
    FcgidInitialEnv PHPRC "D:\Software\phpstudy_pro\Extensions\php\php5.5.9nts" 
    此处填写正在使用的php路径
    AddHandler fcgid-script .php

搞定
```

## PhpStudy的php项目在nginx环境下404、403错误
```
在vhost-ini文件上配置下面
location / {
    if (!-e $request_filename) {
     rewrite ^(.*)$ /index.php?s=/$1 last;
     break;
    }
}

完整如下:
server {
        listen       80;
        server_name  house.xxx.com ;
        root   "E:\code\www\html\web\xxx\public";
	    location / {
          if (!-e $request_filename) {
             rewrite ^(.*)$ /index.php?s=/$1 last;
             break;
          }
        }
        location ~ \.php(.*)$ {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }
}
当访问该网站的时，nginx 会按照 index.html，index.htm ，index.php 的先后顺序在根目录中查找文件。
如果这三个文件都不存在，那么nginx就会返回403 Forbidden。
所以，在vhost里没有这段内容直接输入域名访问就会报403的错误。
除非你在域名后面加个 /index.php才可以正常访问;
```

## PhpStudy:首次访问提示forbidden 403错误的处理
```
设置一下：phpstudy设置->允许目录列表，然后就OK了
```

## PhpStudy 500 Internal Server Error 解决办法
```
版本：phpstudy 2018

报错：500 Internal Server Error

原因：手动选择路径的时候，产生了斜杠不同  
正确：("D:/phpStudy/PHPTutorial/WWW/thinkphp50/public")  
错误（“D:\phpStudy\PHPTutorial\WWW\composer\tp51\public”）

解决办法：找到nginx的配置文件，改正路径就行
// 错误    \
root   "D:\phpStudy\PHPTutorial\WWW\composer\tp51\public";  // phpstudy 留下的一个小bug
// 正确   /
root   "D:/phpStudy/PHPTutorial/WWW/thinkphp50/public";
```

## 字符串类型时间前移一个小时
```
$one_hour_ago=(new DateTime('2017-04-20 11:46:00'))->modify('-1 hour')->format("Y-m-d H:i:s");
echo $one_hour_ago;
```

## PhpStudy添加redis扩展
```
查看php版本 我的是5.6

查看phpinfo 没有redis

下载对应版本的扩展文件
http://windows.php.net/downloads/pecl/releases/redis/2.2.7/php_redis-2.2.7-5.6-nts-vc11-x86.zip
http://windows.php.net/downloads/pecl/releases/igbinary/1.2.1/php_igbinary-1.2.1-5.5-nts-vc11-x86.zip

拷贝php_igbinary.dll，php_igbinary.pdb，php_redis.dll，php_redis.pdb到php-5.6.27-nts\ext

修改php.ini
extension=php_igbinary.dll
extension=php_redis.dll

注意：php_igbinary.dll 在前
;extension=php_snmp.dll  放这个前面

在phpstudy中重启服务，查看phpinfo即可
```

## get_headers
```
get_headers — 取得服务器响应一个 HTTP 请求所发送的所有标头

说明
get_headers ( string $url [, int $format = 0 ] ) : array
get_headers() 返回一个数组，包含有服务器响应一个 HTTP 请求所发送的标头。

参数
url
目标 URL。

format
如果将可选的 format 参数设为 1，则 get_headers() 会解析相应的信息并设定数组的键名。

返回值
返回包含有服务器响应一个 HTTP 请求所发送标头的索引或关联数组，如果失败则返回 FALSE。
```

## 打印文件日志
```
file_put_contents("./log/OutUrlChangeInUrl.log", print_r($baseUrl,true).PHP_EOL, FILE_APPEND);
```

## laravel 500 Server Error，完美解决
```
打开配置文件 laravel/config/app.php

找到 'debug'项 设置为 true

刷新网页 抛出运行异常：No application encryption key has been specified.(未指定应用加密密钥)

在laravel下找到 .env.example，将其复制一份重命名为 ".env"

在laravel下执行命令：php artisan key:generate，后刷新页面
```

## 解决composer install遇到：Your requirements could not be resolved to an installable set of packages
```
解决办法：直接忽略版本就是了
composer install --ignore-platform-reqs 或者 composer update --ignore-platform-reqs
```

## laravel 代码报错 Warning: require(D:\WWW\laravel\bootstrap/../vendor/autoload.php
```
删除 composer.lock 文件，重新执行 composer install

php版本不匹配，接着 composer install --ignore-platform-reqs     忽略版本匹配
```

## 源码安装禅道诡异的的 no input file specified
```
确实没有input.php文件，将input.php.tmp 改为input.php即可
```