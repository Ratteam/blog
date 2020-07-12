# phpstudy

# php-fpm配置文件详解

## 第一部分：FPM 配置
-p　: 命令行中动态修改--prefix 　

;include=etc/fpm.d/*.conf　　#用于包含一个或多个文件，如果glob(3)存在(glob()函数返回匹配指定模式的文件名或目录)

## 第二部分：全局配置
由标志[global]开始：
```
;pid = run/php-fpm.pid　　　　　   设置pid文件的位置，默认目录路径 /usr/local/php/var
;error_log = log/php-fpm.log　　  记录错误日志的文件，默认目录路径 /usr/local/php/var
;syslog.facility = daemon　　　　  用于指定什么类型的程序日志消息。
;syslog.ident = php-fpm　　　　    用于FPM多实例甄别
;log_level = notice　　　　　　　   记录日志的等级，默认notice，可取值alert, error, warning, notice, debug
;emergency_restart_threshold = 0  如果子进程在这个时间段内带有IGSEGV或SIGBUS退出，则重启fpm，默认0表示关闭这个功能
;emergency_restart_interval = 0　 设置时间间隔来决定服务的初始化时间（默认单位：s秒），可选s秒，m分，h时，d天
;process_control_timeout = 0　　  子进程等待master进程对信号的回应（默认单位：s秒），可选s秒，m分，h时，d天
;process.max = 128　　　　　　　　  控制最大进程数，使用时需谨慎
;process.priority = -19　　　　　  处理nice(2)的进程优先级别-19(最高)到20(最低)
;rlimit_files = 1024　　　　　　　　设置主进程文件描述符rlimit的数量
;rlimit_core = 0　　　　　　　　　　 设置主进程rlimit最大核数
;events.mechanism = epoll　　　　　使用处理event事件的机制
　　; - select     (any POSIX os)
　　; - poll       (any POSIX os)
　　; - epoll      (linux >= 2.5.44)
　　; - kqueue     (FreeBSD >= 4.1, OpenBSD >= 2.9, NetBSD >= 2.0)
　　; - /dev/poll  (Solaris >= 7)
　　; - port       (Solaris >= 10)
;daemonize = yes　　　　　　　　　　 将fpm转至后台运行，如果设置为"no"，那么fpm会运行在前台
;systemd_interval = 10
```
## 第三部分：进程池的定义
通过监听不同的端口和不用管理选择可以定义多个不同的子进程池，进程池被用于记录和统计，对于fpm能够处理进程池数目的多少并没有限制

其中$pool变量可以在任何指令中使用，他将会替代相应的进程池名字。例如：这里的[www]

```
[root@test ～]# ps -ef | grep php-fpm
root      3028     1  0 20:33 ?        00:00:00 php-fpm: master process (/usr/local/php/etc/php-fpm.conf)
nobody    3029  3028  0 20:33 ?        00:00:00 php-fpm: pool www          
nobody    3030  3028  0 20:33 ?        00:00:00 php-fpm: pool www
```

```
[www]
; It only applies on the following directives:
; - 'access.log'
; - 'slowlog'
; - 'listen' (unixsocket)
; - 'chroot'
; - 'chdir'
; - 'php_values'
; - 'php_admin_values'

;prefix = /path/to/pools/$pool    如果没有制定，将使用全局prefix替代
user = nobody　　　　　　　　　　　　 进程的发起用户和用户组，用户user是必须设置，group不是
group = nobody
listen = 127.0.0.1:9000　　　　　　 监听ip和端口
;listen.backlog = 65535　　　　　　 设置listen(2)函数backlog
;listen.owner = nobody
;listen.group = nobody
;listen.mode = 0660
;listen.acl_users =
;listen.acl_groups =
;listen.allowed_clients = 127.0.0.1 允许FastCGI客户端连接的IPv4地址，多个地址用','分隔，为空则允许任何地址发来链接请求
; process.priority = -19
pm = dynamic　　　　　　　　　　　　　  选择进程池管理器如何控制子进程的数量
　　  static：　　                   对于子进程的开启数路给定一个锁定的值(pm.max_children)
　　  dynamic:　                    子进程的数目为动态的，它的数目基于下面的指令的值(以下为dynamic适用参数)
　　　　pm.max_children：            同一时刻能够存活的最大子进程的数量
　　　　pm.start_servers：           在启动时启动的子进程数量
　　　　pm.min_spare_servers：       处于空闲"idle"状态的最小子进程，如果空闲进程数量小于这个值，那么相应的子进程会被创建
　　　　pm.max_spare_servers：       最大空闲子进程数量，空闲子进程数量超过这个值，那么相应的子进程会被杀掉。
　　ondemand：                       在启动时不会创建，只有当发起请求链接时才会创建(pm.max_children, pm.process_idle_timeout)

pm.max_children = 5
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 3
;pm.process_idle_timeout = 10s;　　空闲进程超时时间
;pm.max_requests = 500　　　　　　　 在派生新的子进程前，每一个子进程应该处理的请求数目，在第三方库中解决内存溢出很有用，设置为0则不会限制
;pm.status_path = /status　　　     配置一个URI，以便查看fpm状态页

状态页描述：
　　accepted conn:                 该进程池接受的请求数量
　　pool:                          进程池的名字
　　process manager:               进程管理，就是配置中pm指令，可以选择值static，dynamic，ondemand
　　idle processes:                空闲进程数量
　　active processes:              当前活跃的进程数量
　　total processes:               总的进程数量=idle+active
　　max children reached:          达到最大子进程的次数，达到进程的限制，当pm试图开启更多的子进程的时候(仅当pm工作在dynamic时)
;ping.path = /ping　　　　          该ping URI将会去调用fpm监控页面，如果这个没有设置，那么不会有URI被做为ping页
;ping.response = pong　　          用于定制平请求的响应，响应的格式text/plain(对200响应代码)
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
;slowlog = log/$pool.log.slow　　 用于记录慢请求
;request_slowlog_timeout = 0　　  慢日志请求超时时间，对一个php程序进行跟踪。
;request_terminate_timeout = 0　　终止请求超时时间，在worker进程被杀掉之后，提供单个请求的超时间隔。由于某种原因不停止脚本执行时，应该使用该选项，0表示关闭不启用
　　(在php.ini中，max_execution_time 一般设置为30，表示每一个脚本的最大执行时间)
;rlimit_files = 1024　　　　　　　　设置打开文件描述符的限制
;rlimit_core = 0　　　　　　　　　　 设置内核对资源的使用限制，用于内核转储
;chroot =　　　　　　　　　　　　　　　设置chroot路径，程序一启动就将其chroot放置到指定的目录下，该指令值必须是一个绝对路径
;chdir = /var/www　　　　　　　　　　在程序启动时将会改变到指定的位置(这个是相对路径，相对当前路径或chroot后的“/”目录)　　　　
;catch_workers_output = yes　　　　将worker的标准输出和错误输出重定向到主要的错误日志记录中，如果没有设置，根据FastCGI的指定，将会被重定向到/dev/null上
;clear_env = no　　　　　　　　　　  清理环境
;security.limit_extensions = .php .php3 .php4 .php5　　限制FPM执行解析的扩展名
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
```
 

总结：
在php-fpm的配置文件中，有两个指令非常重要，就是"pm.max_children" 和 "request_terminate_timeout"

"pm.max_children" 确定了php-fpm的处理能力，原则上时越多越好，但这个是在内存足够打的前提下，每开启一个php-fpm进程要占用近30M左右的内存

如果请求访问较多，那么可能会出现502，504错误。对于502错误来说，属于繁忙进程而造成的，对于504来说，就是客户发送的请求在限定的时间内没有得到相应，过多的请求导致“504  Gateway  Time-out”。这里也有可能是服务器带宽问题。

另外一个需要注意的指令"request_terminate_timeout"，它决定php-fpm进程的连接/发送和读取的时间，如果设置过小很容易出现"502 Bad Gateway" 和 “504  Gateway  Time-out”，默认为0，就是说没有启用，不加限制，但是这种设置前提是你的php-fpm足够健康，这个需要根据实际情况加以限定。
## nginx服务超时处理centos7+nginx+php

\1. 什么是连接超时

(1) 举个例子，某饭店请了服务员招待顾客，但是现在饭店不景气，因此要解雇掉一些服务员，这里的服务员就相当于 Nginx 服务建立的连接

(2) 当服务器建立的连接没有接收处理请求时，可以在指定的时间内让它超时自动退出

\2. 连接超时的作用

(1) 将无用的连接设置为尽快超时，可以保护服务器的系统资源（CPU、内存、磁盘）

(2) 当连接很多时，及时断掉那些建立好的但又长时间不做事的连接，以减少其占用的服务器资源

(3) 如果黑客攻击，会不断地和服务器建立连接，因此设置连接超时以防止大量消耗服务器的资源

(4) 如果用户请求了动态服务，则 Nginx 就会建立连接，请求 FastCGI 服务以及后端 MySQL 服务，设置连接超时，使得在用户容忍的时间内返回数据

\3. 连接超时存在的问题

(1) 服务器建立新连接是要消耗资源的，因此，连接超时时间不宜设置得太短，否则会造成并发很大，导致服务器瞬间无法响应用户的请求

(2) 有些 PHP 站点会希望设置成短连接，因为 PHP 程序建立连接消耗的资源和时间相对要少些

(3) 有些 Java 站点会希望设置成长连接，因为 Java 程序建立连接消耗的资源和时间要多一些，这时由语言的运行机制决定的

\4. 设置连接超时

(1) keepalive_timeout ：该参数用于设置客户端连接保持会话的超时时间，超过这个时间服务器会关闭该连接

(2) client_header_timeout ：该参数用于设置读取客户端请求头数据的超时时间，如果超时客户端还没有发送完整的 header 数据，服务器将返回 "Request time out (408)" 错误

(3) client_body_timeout ：该参数用于设置读取客户端请求主体数据的超时时间，如果超时客户端还没有发送完整的主体数据，服务器将返回 "Request time out (408)" 错误

(4) send_timeout ：用于指定响应客户端的超时时间，如果超过这个时间，客户端没有任何活动，Nginx 将会关闭连接

(5) tcp_nodelay ：默认情况下当数据发送时，内核并不会马上发送，可能会等待更多的字节组成一个数据包，这样可以提高 I/O 性能，但是，在每次只发送很少字节的业务场景中，使用 tcp_nodelay 功能，等待时间会比较长

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

该问题未最终找到最优方案：
参考：https://www.cnblogs.com/fx-blog/p/7463590.html
参考：https://www.cnblogs.com/xiaozong/p/5071259.html
参考：https://www.cnblogs.com/erhangboke/p/11676885.html
参考：https://www.jb51.net/article/57709.htm

## apache服务超时处理phpstudy+apache+php
一 . 问题现象

有时再用xdebug调试程序时,由于调试时间过长会出现500服务器错误的现象，根本原因在于apache默认的连接时间过短导致。

二 . 适用于

中间件:Apache(Fastcgi)

错误日志为:End of script output before headers

三 . 解决方法

1.打开apache配置文件注释掉如下，并添加一行。

    # Various default settings
    Include conf/extra/httpd-default.conf 将注释去掉
    Include conf/extra/httpd-fcgid.conf 添加此行

\2. 更改httpd-default.conf如下内容

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

3.更改php.ini如下内容

    max_execution_time = 3600
    ; Maximum amount of time each script may spend parsing request data. It's a good
    ; idea to limit this time on productions servers in order to eliminate unexpectedly
    ; long running scripts.

4.在extra目录下创建httpd-fcgid.conf，写入如下内容。

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

搞定~

## ## phpstudy的php项目在nginx环境下404、403错误
在vhost-ini文件上配置下面
```
location / {
    if (!-e $request_filename) {
     rewrite ^(.*)$ /index.php?s=/$1 last;
     break;
    }
}
```

完整如下
```
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
```
当访问该网站的时，nginx 会按照 index.html，index.htm ，index.php 的先后顺序在根目录中查找文件。如果这三个文件都不存在，那么nginx就会返回403 Forbidden。

所以，在vhost里没有这段内容直接输入域名访问就会报403的错误，除非你在域名后面加个 /index.php才可以正常访问;

## phpstudy:首次访问提示forbidden 403错误的处理
设置一下：phpstudy设置->允许目录列表，然后就OK了

## phpstudy 500 Internal Server Error 解决办法
版本：phpstudy 2018

报错：500 Internal Server Error

原因：手动选择路径的时候，产生了斜杠不同  (正确："D:/phpStudy/PHPTutorial/WWW/thinkphp50/public")  错误（“D:\phpStudy\PHPTutorial\WWW\composer\tp51\public”）

解决办法：找到nginx的配置文件，改正路径就行
```
// 错误    \
root   "D:\phpStudy\PHPTutorial\WWW\composer\tp51\public";  // phpstudy 留下的一个小bug
// 正确   /
root   "D:/phpStudy/PHPTutorial/WWW/thinkphp50/public";
```