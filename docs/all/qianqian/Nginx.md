<TOC />

## Nginx 的超时 timeout 配置详解
Nginx 处理的每个请求均有相应的超时设置。如果做好这些超时时间的限定，判定超时后资源被释放，用来处理其他的请求，以此提升 Nginx 的性能。

keepalive_timeout

HTTP 是一种无状态协议，客户端向服务器发送一个 TCP 请求，服务端响应完毕后断开连接。

如果客户端向服务器发送多个请求，每个请求都要建立各自独立的连接以传输数据。

HTTP 有一个 KeepAlive 模式，它告诉 webserver 在处理完一个请求后保持这个 TCP 连接的打开状态。若接收到来自客户端的其它请求，服务端会利用这个未被关闭的连接，而不需要再建立一个连接。

KeepAlive 在一段时间内保持打开状态，它们会在这段时间内占用资源。占用过多就会影响性能。

Nginx 使用 keepalive_timeout 来指定 KeepAlive 的超时时间（timeout）。指定每个 TCP 连接最多可以保持多长时间。Nginx 的默认值是 75 秒，有些浏览器最多只保持 60 秒，所以可以设定为 60 秒。若将它设置为 0，就禁止了 keepalive 连接。通常 keepalive_timeout 应该比 client_body_timeout(见下文)大。

### 配置段: http, server, location

keepalive_timeout 60s;

client_body_timeout

指定客户端与服务端建立连接后发送 request body 的超时时间。如果客户端在指定时间内没有发送任何内容，Nginx 返回 HTTP 408（Request Timed Out）。

### 配置段: http, server, location

client_body_timeout 20s;

client_header_timeout

客户端向服务端发送一个完整的 request header 的超时时间。如果客户端在指定时间内没有发送一个完整的 request header，Nginx 返回 HTTP 408（Request Timed Out）。

### 配置段: http, server, location

client_header_timeout 10s;

send_timeout

服务端向客户端传输数据的超时时间，根据转发的应用服务可以配置 proxy_send_timeout、uwsgi_send_timeout、fastcgi_send_timeout（见下文）。

### 配置段:http, server, location

send_timeout 30s;
Default: 

send_timeout 60s;

Context: http, server, location

Sets a timeout for transmitting a response to the client. The timeout is set only between two successive write operations,

not for the transmission of the whole response. If the client does not receive anything within this time, the connection is closed.


 
client_header_timeout

接收客户端 header 超时， 默认 60s, 如果 60s 内没有收到完整的 http 包头， 返回 408

Syntax: client_header_timeout time;

Default: 

client_header_timeout 60s;

Context: http, server

Defines a timeout for reading client request header. If a client does not transmit the entire header within this time,

the 408 (Request Time-out) error is returned to the client.

client_body_timeout

接收客户端 body 超时， 默认 60s, 如果连续的 60s 内没有收到客户端的 1 个字节， 返回 408

Syntax: client_body_timeout time;

Default: 

client_body_timeout 60s;

Context: http, server, location

Defines a timeout for reading client request body. The timeout is set only for a period between two successive read operations, not for the transmission of the whole request body.

If a client does not transmit anything within this time,

the 408 (Request Time-out) error is returned to the client.

lingering_timeout

可以理解为 TCP 连接关闭时的 SO_LINGER 延时设置，默认 5s

Syntax: lingering_timeout time;

Default: 

lingering_timeout 5s;

Context: http, server, location

When lingering_close is in effect, this directive specifies the maximum waiting time for more client data to arrive. If data are not received during this time,

the connection is closed. Otherwise, the data are read and ignored, and nginx starts waiting for more data again.

The “wait-read-ignore” cycle is repeated, but no longer than specified by the lingering_time directive.


 
resolver_timeout

域名解析超时，默认 30s

Syntax: resolver_timeout time;

Default: 

resolver_timeout 30s;

Context: http, server, location

Sets a timeout for name resolution, for example:

resolver_timeout 5s;

proxy_connect_timeout

nginx 与 upstream server 的连接超时时间，默认为 60s；根据应用不同可配置 uwsgi_send_timeout/fascgi_send_timeout/proxy_send_timeout

Syntax: proxy_connect_timeout time;

Default: 

proxy_connect_timeout 60s;

Context: http, server, location

Defines a timeout for establishing a connection with a proxied server. It should be noted that this timeout cannot usually exceed 75 seconds.

proxy_read_timeout

nginx 接收 upstream server 数据超时， 默认 60s, 如果连续的 60s 内没有收到 1 个字节， 连接关闭；根据应用不同可配置 uwsgi_send_timeout/fascgi_send_timeout/proxy_send_timeout

Syntax: proxy_read_timeout time;

Default: 

proxy_read_timeout 60s;

Context: http, server, location

Defines a timeout for reading a response from the proxied server. The timeout is set only between two successive read operations,

not for the transmission of the whole response. If the proxied server does not transmit anything within this time, the connection is closed.

proxy_send_timeout

nginx 发送数据至 upstream server 超时， 默认 60s, 如果连续的 60s 内没有发送 1 个字节， 连接关闭；根据应用不同可配置 uwsgi_send_timeout/fascgi_send_timeout/proxy_send_timeout。

Syntax: proxy_send_timeout time;

Default: 

proxy_send_timeout 60s;

Context: http, server, location

Sets a timeout for transmitting a request to the proxied server. The timeout is set only between two successive write operations,

not for the transmission of the whole request. If the proxied server does not rec

## nginx命令
`ps -A | grep nginx`    -查看nginx是否启动

`/application/nginx/sbin/nginx -t` –检查语法

`/application/nginx/sibn/nginx -s reload` —平滑加载配置文件(建议使用这个)

`/application/nginx/sbin/nginx` —启动nginx服务 


## nginx报错

**nginx: [alert] kill(1668, 1) failed (3: No such process)**
没有启动nginx服务，执行/app/nginx/sbin/nginx，开启nginx服务后解决

**上传文件nginx报错**
上传接口直接显示ngnix报错
日志显示：缺失某个文件夹
将文件夹创建即可



