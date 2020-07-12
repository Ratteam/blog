(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{292:function(e,n,t){"use strict";t.r(n);var s=t(17),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"phpstudy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpstudy"}},[e._v("#")]),e._v(" phpstudy")]),e._v(" "),t("h1",{attrs:{id:"php-fpm配置文件详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-fpm配置文件详解"}},[e._v("#")]),e._v(" php-fpm配置文件详解")]),e._v(" "),t("h2",{attrs:{id:"第一部分：fpm-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一部分：fpm-配置"}},[e._v("#")]),e._v(" 第一部分：FPM 配置")]),e._v(" "),t("p",[e._v("-p　: 命令行中动态修改--prefix")]),e._v(" "),t("p",[e._v(";include=etc/fpm.d/*.conf　　#用于包含一个或多个文件，如果glob(3)存在(glob()函数返回匹配指定模式的文件名或目录)")]),e._v(" "),t("h2",{attrs:{id:"第二部分：全局配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二部分：全局配置"}},[e._v("#")]),e._v(" 第二部分：全局配置")]),e._v(" "),t("p",[e._v("由标志[global]开始：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(';pid = run/php-fpm.pid　　　　　   设置pid文件的位置，默认目录路径 /usr/local/php/var\n;error_log = log/php-fpm.log　　  记录错误日志的文件，默认目录路径 /usr/local/php/var\n;syslog.facility = daemon　　　　  用于指定什么类型的程序日志消息。\n;syslog.ident = php-fpm　　　　    用于FPM多实例甄别\n;log_level = notice　　　　　　　   记录日志的等级，默认notice，可取值alert, error, warning, notice, debug\n;emergency_restart_threshold = 0  如果子进程在这个时间段内带有IGSEGV或SIGBUS退出，则重启fpm，默认0表示关闭这个功能\n;emergency_restart_interval = 0　 设置时间间隔来决定服务的初始化时间（默认单位：s秒），可选s秒，m分，h时，d天\n;process_control_timeout = 0　　  子进程等待master进程对信号的回应（默认单位：s秒），可选s秒，m分，h时，d天\n;process.max = 128　　　　　　　　  控制最大进程数，使用时需谨慎\n;process.priority = -19　　　　　  处理nice(2)的进程优先级别-19(最高)到20(最低)\n;rlimit_files = 1024　　　　　　　　设置主进程文件描述符rlimit的数量\n;rlimit_core = 0　　　　　　　　　　 设置主进程rlimit最大核数\n;events.mechanism = epoll　　　　　使用处理event事件的机制\n　　; - select     (any POSIX os)\n　　; - poll       (any POSIX os)\n　　; - epoll      (linux >= 2.5.44)\n　　; - kqueue     (FreeBSD >= 4.1, OpenBSD >= 2.9, NetBSD >= 2.0)\n　　; - /dev/poll  (Solaris >= 7)\n　　; - port       (Solaris >= 10)\n;daemonize = yes　　　　　　　　　　 将fpm转至后台运行，如果设置为"no"，那么fpm会运行在前台\n;systemd_interval = 10\n')])])]),t("h2",{attrs:{id:"第三部分：进程池的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三部分：进程池的定义"}},[e._v("#")]),e._v(" 第三部分：进程池的定义")]),e._v(" "),t("p",[e._v("通过监听不同的端口和不用管理选择可以定义多个不同的子进程池，进程池被用于记录和统计，对于fpm能够处理进程池数目的多少并没有限制")]),e._v(" "),t("p",[e._v("其中$pool变量可以在任何指令中使用，他将会替代相应的进程池名字。例如：这里的[www]")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@test ～]# ps -ef | grep php-fpm\nroot      3028     1  0 20:33 ?        00:00:00 php-fpm: master process (/usr/local/php/etc/php-fpm.conf)\nnobody    3029  3028  0 20:33 ?        00:00:00 php-fpm: pool www          \nnobody    3030  3028  0 20:33 ?        00:00:00 php-fpm: pool www\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[www]\n; It only applies on the following directives:\n; - 'access.log'\n; - 'slowlog'\n; - 'listen' (unixsocket)\n; - 'chroot'\n; - 'chdir'\n; - 'php_values'\n; - 'php_admin_values'\n\n;prefix = /path/to/pools/$pool    如果没有制定，将使用全局prefix替代\nuser = nobody　　　　　　　　　　　　 进程的发起用户和用户组，用户user是必须设置，group不是\ngroup = nobody\nlisten = 127.0.0.1:9000　　　　　　 监听ip和端口\n;listen.backlog = 65535　　　　　　 设置listen(2)函数backlog\n;listen.owner = nobody\n;listen.group = nobody\n;listen.mode = 0660\n;listen.acl_users =\n;listen.acl_groups =\n;listen.allowed_clients = 127.0.0.1 允许FastCGI客户端连接的IPv4地址，多个地址用','分隔，为空则允许任何地址发来链接请求\n; process.priority = -19\npm = dynamic　　　　　　　　　　　　　  选择进程池管理器如何控制子进程的数量\n　　  static：　　                   对于子进程的开启数路给定一个锁定的值(pm.max_children)\n　　  dynamic:　                    子进程的数目为动态的，它的数目基于下面的指令的值(以下为dynamic适用参数)\n　　　　pm.max_children：            同一时刻能够存活的最大子进程的数量\n　　　　pm.start_servers：           在启动时启动的子进程数量\n　　　　pm.min_spare_servers：       处于空闲\"idle\"状态的最小子进程，如果空闲进程数量小于这个值，那么相应的子进程会被创建\n　　　　pm.max_spare_servers：       最大空闲子进程数量，空闲子进程数量超过这个值，那么相应的子进程会被杀掉。\n　　ondemand：                       在启动时不会创建，只有当发起请求链接时才会创建(pm.max_children, pm.process_idle_timeout)\n\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\n;pm.process_idle_timeout = 10s;　　空闲进程超时时间\n;pm.max_requests = 500　　　　　　　 在派生新的子进程前，每一个子进程应该处理的请求数目，在第三方库中解决内存溢出很有用，设置为0则不会限制\n;pm.status_path = /status　　　     配置一个URI，以便查看fpm状态页\n\n状态页描述：\n　　accepted conn:                 该进程池接受的请求数量\n　　pool:                          进程池的名字\n　　process manager:               进程管理，就是配置中pm指令，可以选择值static，dynamic，ondemand\n　　idle processes:                空闲进程数量\n　　active processes:              当前活跃的进程数量\n　　total processes:               总的进程数量=idle+active\n　　max children reached:          达到最大子进程的次数，达到进程的限制，当pm试图开启更多的子进程的时候(仅当pm工作在dynamic时)\n;ping.path = /ping　　　　          该ping URI将会去调用fpm监控页面，如果这个没有设置，那么不会有URI被做为ping页\n;ping.response = pong　　          用于定制平请求的响应，响应的格式text/plain(对200响应代码)\n;access.log = log/$pool.access.log\n;access.format = \"%R - %u %t \\\"%m %r%Q%q\\\" %s %f %{mili}d %{kilo}M %C%%\"\n　　; The following syntax is allowed\n　　;  %%: the '%' character\n　　;  %C: %CPU used by the request\n　　;      it can accept the following format:\n　　;      - %{user}C for user CPU only\n　　;      - %{system}C for system CPU only\n　　;      - %{total}C  for user + system CPU (default)\n　　;  %d: time taken to serve the request\n　　;      it can accept the following format:\n　　;      - %{seconds}d (default)\n　　;      - %{miliseconds}d\n　　;      - %{mili}d\n　　;      - %{microseconds}d\n　　;      - %{micro}d\n　　;  %e: an environment variable (same as $_ENV or $_SERVER)\n　　;      it must be associated with embraces to specify the name of the env\n　　;      variable. Some exemples:\n　　;      - server specifics like: %{REQUEST_METHOD}e or %{SERVER_PROTOCOL}e\n　　;      - HTTP headers like: %{HTTP_HOST}e or %{HTTP_USER_AGENT}e\n　　;  %f: script filename\n　　;  %l: content-length of the request (for POST request only)\n　　;  %m: request method\n　　;  %M: peak of memory allocated by PHP\n　　;      it can accept the following format:\n　　;      - %{bytes}M (default)\n　　;      - %{kilobytes}M\n　　;      - %{kilo}M\n　　;      - %{megabytes}M\n　　;      - %{mega}M\n　　;  %n: pool name\n　　;  %o: output header\n　　;      it must be associated with embraces to specify the name of the header:\n　　;      - %{Content-Type}o\n　　;      - %{X-Powered-By}o\n　　;      - %{Transfert-Encoding}o\n　　;      - ....\n　　;  %p: PID of the child that serviced the request\n　　;  %P: PID of the parent of the child that serviced the request\n　　;  %q: the query string\n　　;  %Q: the '?' character if query string exists\n　　;  %r: the request URI (without the query string, see %q and %Q)\n　　;  %R: remote IP address\n　　;  %s: status (response code)\n　　;  %t: server time the request was received\n　　;      it can accept a strftime(3) format:\n　　;      %d/%b/%Y:%H:%M:%S %z (default)\n　　;  %T: time the log has been written (the request has finished)\n　　;      it can accept a strftime(3) format:\n　　;      %d/%b/%Y:%H:%M:%S %z (default)\n　　;  %u: remote user\n;slowlog = log/$pool.log.slow　　 用于记录慢请求\n;request_slowlog_timeout = 0　　  慢日志请求超时时间，对一个php程序进行跟踪。\n;request_terminate_timeout = 0　　终止请求超时时间，在worker进程被杀掉之后，提供单个请求的超时间隔。由于某种原因不停止脚本执行时，应该使用该选项，0表示关闭不启用\n　　(在php.ini中，max_execution_time 一般设置为30，表示每一个脚本的最大执行时间)\n;rlimit_files = 1024　　　　　　　　设置打开文件描述符的限制\n;rlimit_core = 0　　　　　　　　　　 设置内核对资源的使用限制，用于内核转储\n;chroot =　　　　　　　　　　　　　　　设置chroot路径，程序一启动就将其chroot放置到指定的目录下，该指令值必须是一个绝对路径\n;chdir = /var/www　　　　　　　　　　在程序启动时将会改变到指定的位置(这个是相对路径，相对当前路径或chroot后的“/”目录)　　　　\n;catch_workers_output = yes　　　　将worker的标准输出和错误输出重定向到主要的错误日志记录中，如果没有设置，根据FastCGI的指定，将会被重定向到/dev/null上\n;clear_env = no　　　　　　　　　　  清理环境\n;security.limit_extensions = .php .php3 .php4 .php5　　限制FPM执行解析的扩展名\n;env[HOSTNAME] = $HOSTNAME\n;env[PATH] = /usr/local/bin:/usr/bin:/bin\n;env[TMP] = /tmp\n;env[TMPDIR] = /tmp\n;env[TEMP] = /tmp\n\n; Additional php.ini defines, specific to this pool of workers. These settings\n; overwrite the values previously defined in the php.ini. The directives are the\n; same as the PHP SAPI:\n;   php_value/php_flag             - you can set classic ini defines which can\n;                                    be overwritten from PHP call 'ini_set'.\n;   php_admin_value/php_admin_flag - these directives won't be overwritten by\n;                                     PHP call 'ini_set'\n; For php_*flag, valid values are on, off, 1, 0, true, false, yes or no.\n\n; Defining 'extension' will load the corresponding shared extension from\n; extension_dir. Defining 'disable_functions' or 'disable_classes' will not\n; overwrite previously defined php.ini values, but will append the new value\n; instead.\n\n;php_admin_value[sendmail_path] = /usr/sbin/sendmail -t -i -f www@my.domain.com\n;php_flag[display_errors] = off\n;php_admin_value[error_log] = /var/log/fpm-php.www.log\n;php_admin_flag[log_errors] = on\n;php_admin_value[memory_limit] = 32M\n")])])]),t("p",[e._v('总结：\n在php-fpm的配置文件中，有两个指令非常重要，就是"pm.max_children" 和 "request_terminate_timeout"')]),e._v(" "),t("p",[e._v('"pm.max_children" 确定了php-fpm的处理能力，原则上时越多越好，但这个是在内存足够打的前提下，每开启一个php-fpm进程要占用近30M左右的内存')]),e._v(" "),t("p",[e._v("如果请求访问较多，那么可能会出现502，504错误。对于502错误来说，属于繁忙进程而造成的，对于504来说，就是客户发送的请求在限定的时间内没有得到相应，过多的请求导致“504  Gateway  Time-out”。这里也有可能是服务器带宽问题。")]),e._v(" "),t("p",[e._v('另外一个需要注意的指令"request_terminate_timeout"，它决定php-fpm进程的连接/发送和读取的时间，如果设置过小很容易出现"502 Bad Gateway" 和 “504  Gateway  Time-out”，默认为0，就是说没有启用，不加限制，但是这种设置前提是你的php-fpm足够健康，这个需要根据实际情况加以限定。')]),e._v(" "),t("h2",{attrs:{id:"nginx服务超时处理centos7-nginx-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务超时处理centos7-nginx-php"}},[e._v("#")]),e._v(" nginx服务超时处理centos7+nginx+php")]),e._v(" "),t("p",[e._v("\\1. 什么是连接超时")]),e._v(" "),t("p",[e._v("(1) 举个例子，某饭店请了服务员招待顾客，但是现在饭店不景气，因此要解雇掉一些服务员，这里的服务员就相当于 Nginx 服务建立的连接")]),e._v(" "),t("p",[e._v("(2) 当服务器建立的连接没有接收处理请求时，可以在指定的时间内让它超时自动退出")]),e._v(" "),t("p",[e._v("\\2. 连接超时的作用")]),e._v(" "),t("p",[e._v("(1) 将无用的连接设置为尽快超时，可以保护服务器的系统资源（CPU、内存、磁盘）")]),e._v(" "),t("p",[e._v("(2) 当连接很多时，及时断掉那些建立好的但又长时间不做事的连接，以减少其占用的服务器资源")]),e._v(" "),t("p",[e._v("(3) 如果黑客攻击，会不断地和服务器建立连接，因此设置连接超时以防止大量消耗服务器的资源")]),e._v(" "),t("p",[e._v("(4) 如果用户请求了动态服务，则 Nginx 就会建立连接，请求 FastCGI 服务以及后端 MySQL 服务，设置连接超时，使得在用户容忍的时间内返回数据")]),e._v(" "),t("p",[e._v("\\3. 连接超时存在的问题")]),e._v(" "),t("p",[e._v("(1) 服务器建立新连接是要消耗资源的，因此，连接超时时间不宜设置得太短，否则会造成并发很大，导致服务器瞬间无法响应用户的请求")]),e._v(" "),t("p",[e._v("(2) 有些 PHP 站点会希望设置成短连接，因为 PHP 程序建立连接消耗的资源和时间相对要少些")]),e._v(" "),t("p",[e._v("(3) 有些 Java 站点会希望设置成长连接，因为 Java 程序建立连接消耗的资源和时间要多一些，这时由语言的运行机制决定的")]),e._v(" "),t("p",[e._v("\\4. 设置连接超时")]),e._v(" "),t("p",[e._v("(1) keepalive_timeout ：该参数用于设置客户端连接保持会话的超时时间，超过这个时间服务器会关闭该连接")]),e._v(" "),t("p",[e._v('(2) client_header_timeout ：该参数用于设置读取客户端请求头数据的超时时间，如果超时客户端还没有发送完整的 header 数据，服务器将返回 "Request time out (408)" 错误')]),e._v(" "),t("p",[e._v('(3) client_body_timeout ：该参数用于设置读取客户端请求主体数据的超时时间，如果超时客户端还没有发送完整的主体数据，服务器将返回 "Request time out (408)" 错误')]),e._v(" "),t("p",[e._v("(4) send_timeout ：用于指定响应客户端的超时时间，如果超过这个时间，客户端没有任何活动，Nginx 将会关闭连接")]),e._v(" "),t("p",[e._v("(5) tcp_nodelay ：默认情况下当数据发送时，内核并不会马上发送，可能会等待更多的字节组成一个数据包，这样可以提高 I/O 性能，但是，在每次只发送很少字节的业务场景中，使用 tcp_nodelay 功能，等待时间会比较长")]),e._v(" "),t("p",[e._v("http {")]),e._v(" "),t("p",[e._v("include mime.types;")]),e._v(" "),t("p",[e._v("server_names_hash_bucket_size 512;")]),e._v(" "),t("p",[e._v("default_type application/octet-stream;")]),e._v(" "),t("p",[e._v("sendfile on;")]),e._v(" "),t("p",[e._v("keepalive_timeout 65;")]),e._v(" "),t("p",[e._v("tcp_nodelay on;")]),e._v(" "),t("p",[e._v("client_header_timeout 15;")]),e._v(" "),t("p",[e._v("client_body_timeout 15;")]),e._v(" "),t("p",[e._v("send_timeout 25;")]),e._v(" "),t("p",[e._v("include vhosts/*.conf;")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("该问题未最终找到最优方案：\n参考：https://www.cnblogs.com/fx-blog/p/7463590.html\n参考：https://www.cnblogs.com/xiaozong/p/5071259.html\n参考：https://www.cnblogs.com/erhangboke/p/11676885.html\n参考：https://www.jb51.net/article/57709.htm")]),e._v(" "),t("h2",{attrs:{id:"apache服务超时处理phpstudy-apache-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache服务超时处理phpstudy-apache-php"}},[e._v("#")]),e._v(" apache服务超时处理phpstudy+apache+php")]),e._v(" "),t("p",[e._v("一 . 问题现象")]),e._v(" "),t("p",[e._v("有时再用xdebug调试程序时,由于调试时间过长会出现500服务器错误的现象，根本原因在于apache默认的连接时间过短导致。")]),e._v(" "),t("p",[e._v("二 . 适用于")]),e._v(" "),t("p",[e._v("中间件:Apache(Fastcgi)")]),e._v(" "),t("p",[e._v("错误日志为:End of script output before headers")]),e._v(" "),t("p",[e._v("三 . 解决方法")]),e._v(" "),t("p",[e._v("1.打开apache配置文件注释掉如下，并添加一行。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("# Various default settings\nInclude conf/extra/httpd-default.conf 将注释去掉\nInclude conf/extra/httpd-fcgid.conf 添加此行\n")])])]),t("p",[e._v("\\2. 更改httpd-default.conf如下内容")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('# Timeout: The number of seconds before receives and sends time out.\n#\nTimeout 3600\n\n#\n# KeepAlive: Whether or not to allow persistent connections (more than\n# one request per connection). Set to "Off" to deactivate.\n#\nKeepAlive On\n\n#\n# MaxKeepAliveRequests: The maximum number of requests to allow\n# during a persistent connection. Set to 0 to allow an unlimited amount.\n# We recommend you leave this number high, for maximum performance.\n#\nMaxKeepAliveRequests 0\n\n#\n# KeepAliveTimeout: Number of seconds to wait for the next request from the\n# same client on the same connection.\n#\nKeepAliveTimeout 3600\n')])])]),t("p",[e._v("3.更改php.ini如下内容")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("max_execution_time = 3600\n; Maximum amount of time each script may spend parsing request data. It's a good\n; idea to limit this time on productions servers in order to eliminate unexpectedly\n; long running scripts.\n")])])]),t("p",[e._v("4.在extra目录下创建httpd-fcgid.conf，写入如下内容。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('ProcessLifeTime 3600\nFcgidIOTimeout 3600\nFcgidConnectTimeout 3600\nFcgidOutputBufferSize 128\nFcgidMaxRequestsPerProcess 1000\nFcgidMinProcessesPerClass 0 \nFcgidMaxProcesses 16 \nFcgidMaxRequestLen 268435456   \nFcgidInitialEnv PHP_FCGI_MAX_REQUESTS 1000\nIPCConnectTimeout 3600\nIPCCommTimeout 3600\nFcgidIdleTimeout 3600\nFcgidBusyTimeout 60000\nFcgidBusyScanInterval 120\nFcgidInitialEnv PHPRC "D:\\Software\\phpstudy_pro\\Extensions\\php\\php5.5.9nts" \n此处填写正在使用的php路径\nAddHandler fcgid-script .php\n')])])]),t("p",[e._v("搞定~")]),e._v(" "),t("h2",{attrs:{id:"phpstudy的php项目在nginx环境下404、403错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpstudy的php项目在nginx环境下404、403错误"}},[e._v("#")]),e._v(" ## phpstudy的php项目在nginx环境下404、403错误")]),e._v(" "),t("p",[e._v("在vhost-ini文件上配置下面")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("location / {\n    if (!-e $request_filename) {\n     rewrite ^(.*)$ /index.php?s=/$1 last;\n     break;\n    }\n}\n")])])]),t("p",[e._v("完整如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('server {\n        listen       80;\n        server_name  house.xxx.com ;\n        root   "E:\\code\\www\\html\\web\\xxx\\public";\n\t    location / {\n          if (!-e $request_filename) {\n             rewrite ^(.*)$ /index.php?s=/$1 last;\n             break;\n          }\n        }\n        location ~ \\.php(.*)$ {\n            fastcgi_pass   127.0.0.1:9000;\n            fastcgi_index  index.php;\n            fastcgi_split_path_info  ^((?U).+\\.php)(/?.+)$;\n            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;\n            fastcgi_param  PATH_INFO  $fastcgi_path_info;\n            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;\n            include        fastcgi_params;\n        }\n}\n')])])]),t("p",[e._v("当访问该网站的时，nginx 会按照 index.html，index.htm ，index.php 的先后顺序在根目录中查找文件。如果这三个文件都不存在，那么nginx就会返回403 Forbidden。")]),e._v(" "),t("p",[e._v("所以，在vhost里没有这段内容直接输入域名访问就会报403的错误，除非你在域名后面加个 /index.php才可以正常访问;")]),e._v(" "),t("h2",{attrs:{id:"phpstudy-首次访问提示forbidden-403错误的处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpstudy-首次访问提示forbidden-403错误的处理"}},[e._v("#")]),e._v(" phpstudy:首次访问提示forbidden 403错误的处理")]),e._v(" "),t("p",[e._v("设置一下：phpstudy设置->允许目录列表，然后就OK了")]),e._v(" "),t("h2",{attrs:{id:"phpstudy-500-internal-server-error-解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpstudy-500-internal-server-error-解决办法"}},[e._v("#")]),e._v(" phpstudy 500 Internal Server Error 解决办法")]),e._v(" "),t("p",[e._v("版本：phpstudy 2018")]),e._v(" "),t("p",[e._v("报错：500 Internal Server Error")]),e._v(" "),t("p",[e._v('原因：手动选择路径的时候，产生了斜杠不同  (正确："D:/phpStudy/PHPTutorial/WWW/thinkphp50/public")  错误（“D:\\phpStudy\\PHPTutorial\\WWW\\composer\\tp51\\public”）')]),e._v(" "),t("p",[e._v("解决办法：找到nginx的配置文件，改正路径就行")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 错误    \\\nroot   "D:\\phpStudy\\PHPTutorial\\WWW\\composer\\tp51\\public";  // phpstudy 留下的一个小bug\n// 正确   /\nroot   "D:/phpStudy/PHPTutorial/WWW/thinkphp50/public";\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);