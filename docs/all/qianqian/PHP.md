<TOC />
## 字符串类型时间前移一个小时
```
$one_hour_ago=(new DateTime('2017-04-20 11:46:00'))->modify('-1 hour')->format("Y-m-d H:i:s");
echo $one_hour_ago;
```

## phpstudy添加redis扩展
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

## 面试题
### 1. 计算机网络体系结构

- 应用层：应用层协议定义的是应用进程间通信和交互的规则
- 运输层：运输层的任务就是负责向两台主机中进程之间的通信提供通用的数据传输服务
- 网络层：把运输层产生的报文段或用户数据报封装成分组或包进行传送
- 数据链路层：将网络层交下来的 IP 数据报组装成帧，并在两个相邻结点间的链路上传送
- 物理层：利用物理媒体以比特形式传送数据

### 2. UDP 的主要特点

- UDP 是无连接的，即发送数据之前不需要建立连接(发送数据结束时也没有连接可释放)，减少了开销和发送数据之前的时延
- UDP 使用尽最大努力交付，即不保证可靠交付，主机不需要维持复杂的连接状态表
- UDP 是面向报文的，发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层。UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界
- UDP 没有拥塞控制，网络出现的拥塞不会使源主机的发送速率降低。这对某些实时应用是很重要的
- UDP 支持一对一、一对多、多对一和多对多的交互通信
- UDP 的首部开销小，只有8个字节，比 TCP 的20个字节的首部要短

### 3. TCP 的主要特点

- TCP 是面向连接的运输层协议。应用程序在使用 TCP 协议之前，必须先建立 TCP 连接。在传送数据完毕后，必须释放已经建立的 TCP 连接
- 每一条 TCP 连接只能有两个端点，每一条 TCP 连接只能是点对点的(一对一)
- TCP 提供可靠交付的服务。通过 TCP 连接传送的数据，无差错、不丢失、不重复，并且按序到达
- TCP 提供全双工通信。TCP 允许通信双方的应用进程在任何时候都能发送数据。TCP 连接的两端都设有发送缓存和接受缓存，用来临时存放双向通信的数据
- 面向字节流。TCP 中的“流”指的是流入到进程或从进程流出的字节序列

### 4. 简述三报文握手建立 TCP 连接

- 服务器进程先创建传输控制块 TCB，并处于监听状态，等待客户端的连接请求
- 客户端创建传输控制块 TCB，并向服务器发出连接请求报文段
- 服务器收到连接请求报文段后，如同意建立连接，则发送确认报文段
- 客户端进程收到服务器的确认报文段后，立即回复确认报文段，并进入已建立连接状态
- 服务器收到确认报文段之后，也进入已建立连接状态

> 传输控制块 TCB(Transmission Control Block)存储了每一个连接中的一些重要信息

### 5. 建立 TCP 连接为什么最后还要发送确认

这主要是为了防止已失效的连接请求报文段突然又传到了 TCP 服务器，避免产生错误

### 6. 简述 TCP 连接的释放

- 客户端应用进程发出连接释放报文段，并停止再发送数据，进入 FIN-WAIT-1(终止等待1)状态，等待服务器确认
- 服务器收到连接释放报文段后即发出确认，进入 CLOSE-WAIT(关闭等待)状态，服务器若发送数据，客户端扔要接收
- 客户端收到来自服务器的确认后，进入 FIN-WAIT-2(终止等待2)状态，等待服务器发出连接释放报文段
- 服务器没有要发送的数据，发出连接释放报文段，进入 LAST-ACK(最后确认)状态，等待客户端确认
- 客户端收到连接释放报文段后，发出确认，进入 TIME-WAIT(时间等待)状态，经过时间等待计时器设置的时间 2MSL 后，进入 CLOSED(关闭) 状态
- 服务器收到客户端报文段后，进入 CLOSED 状态

### 7. TIME-WAIT 是什么，为什么必须等待 2MLS

TIME-WAIT 是一种 TCP 状态。等待 2MLS 可以保证客户端最后一个报文段能够到达服务器，如果未到达，服务器则会超时重传连接释放报文段，使得客户端、服务器都可以正常进入到 CLOSE(关闭) 状态

> MSL是Maximum Segment Lifetime英文的缩写，中文可以译为“报文最大生存时间”，他是任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃。

### 8. TCP 粘包问题

在 TCP 这种字节流协议上做应用层分包是网络编程的基本需求。分包指的是在发生一个消息(message)或一帧(frame)数据时，通过一定的处理，让接收方能从字节流中识别并截取(还原)出一个个消息。因此，“粘包问题”是个伪命题

长连接分包: 
- 消息长度固定
- 使用特殊的字符或字符串作为消息的边界，例如 HTTP 协议的 headers 以“\r\n”为字段的分隔符
- 在每条消息的头部加一个长度字段，这恐怕是最常见的做法
- 利用消息本身的格式来分包，例如 XML 格式的消息中 `<root>`...`</root>` 的配对，或者 JSON 格式中的 { ... } 的配对。解析这种消息格式通常会用到状态机(state machine)

### 9. UDP、TCP 区别，适用场景

|对比项|UDP|TCP|
|-|-|-|
|连接性|无连接|面向连接|
|可靠性|不可靠|可靠|
|报文|面向报文-数据报模式|面向字节流-流模式|
|双工性|一对一、一对多、多对一、多对多|全双工|
|流量控制|无|有(滑动窗口)|
|拥塞控制|无|有(慢开始、拥塞避免、快重传、快恢复)|
|传输速度|快|慢|
|资源要求|较少|较多|
|首部开销|8字节|20字节|
|数据顺序|不保证|保证|

#### UDP 适用场景

面向数据报方式、网络数据大多为短消息、拥有大量 Client、对数据安全性无特殊要求、网络负担非常重，但对响应速度要求高

#### TCP 适用场景

文件传输(FTP HTTP 对数据准确性要求较高，速度可以相对慢)
发送或接收邮件(POP IMAP SMTP 对数据准确性要求高，非紧急应用)
远程登录(telnet SSH 对数据准确性有要求，有连接的概念)

### 10. 建立 socket 需要哪些步骤

- 创建 socket
- 绑定 socket 到指定地址和端口
- 开始监听连接
- 读取客户端输入
- 关闭 socket

### 11. DNS 主要作用是什么

计算机既可以被赋予 IP 地址，也可以被赋予主机名和域名。用户通常使用主机名或域名来访问对方的计算机，而不是直接通过 IP 地址访问

但要让计算机去理解名称，相对而言就变得困难，因为计算机更擅长处理一长串数字

为了解决上述问题，DNS 服务应运而生。DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名的服务

### 12. HTTP 报文组成

HTTP 报文是由简单字符串组成，HTTP 报文都是纯文本，不是二进制代码，可以很方便地对其进行读写

从客户端发往服务器的 HTTP 报文称为请求报文(request message)。从服务器发往客户端的报文称为响应报文(response message)。HTTP 请求和响应报文的格式很类似

HTTP 报文组成部分

- 起始行：报文的第一行就是起始行，在请求报文中用来说明要做些什么，在响应报文中说明出现了什么情况
- 首部字段：起始行后面有零个或多个首部字段。每个首部字段都包含一个名字和一个值
- 主体：空行之后就是可选的报文主体了，其中包含了所有类型的数据

### 13. HTTP 状态码

> HTTP 状态码用来告诉客户端，发生了什么事情，状态码位于响应的起始行中

#### 状态码分类

|状态码|整体范围|已定义范围|分类|
|-|-|-|-|
|1XX|100~199|100~101|信息提示|
|2XX|200~299|200~206|成功|
|3XX|300~399|300~305|重定向|
|4XX|400~499|400~415|客户端错误|
|5XX|500~599|500~505|服务器错误|

#### 常见状态码

|状态码|原因短语|含义|考察概率|
|-|-|-|-|
|200|OK|请求没有问题|***|
|206|Partial Content|部分或 Range(范围) 请求|*|
|301|Moved Permanently|在请求的链接被移除时使用|**|
|302|Found|在请求临时的链接使用|**|
|304|Not Modified|资源未被修改可使用旧资源|**|
|307|Temporary Redirect|在请求临时的链接使用|**|
|400|Bad Request|告知客户端发送了错误请求|***|
|403|Forbidden|请求被服务器拒绝|***|
|404|Not Found|无法找到所请求的 URL|***|
|413|Request entiry too large|请求实体过大|*|
|500|Internal Server Error|服务器遇到错误|***|
|502|Bad Gateway|代理或网关错误(无法连接到其父网关)|***|
|503|Service Unavailable|无法为请求提供服务|***|
|504|Gateway Timeout|代理或网关超时(等待另一服务器响应超时)|***|

### 14. 常见的 HTTP 方法

HTTP 请求方法用于告诉服务器要做什么。HTTP 规范中定义了一组常用的请求方法。

#### GET 方法

GET 是最常用的方法。通常用于请求服务器发送某个资源。HTTP/1.1 要求服务器实现此方法

#### POST 方法

POST 方法起初是用来向服务器输入数据的。实际上，通常会用它来支持 HTML 的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到它要去的地方（比如，送到一个服务器网关程序中，然后由这个程序对其进行处理）

### DELETE

DELETE 方法所做的事情就是请服务器删除请求 URL 所指定的资源。但是，客户端应用程序无法保证删除操作一定会被执行。因为 HTTP 规范允许服务器在不通知客户端的情况下撤销请求

### 15. GET 与 POST 请求方式区别

|GET|POST|
|-|-|
|后退按钮/刷新无害|数据会被重新提交|
|数据长度限制/URL长度2048字符|长度无限制|
|数据可见/安全性差|不可见/更安全|
|可以被缓存|不可以被缓存|
|书签可收藏|书签不可收藏|

### 16. HTTP 优缺点

基于应用级的接口，使用方便

传输速度慢，数据包大；如实现实时交互，服务器性能压力大；数据传输安全性差

### 17. HTTPS 通信原理

安全 HTTP 是可选的。因此，对 Web 服务器发起请求时，我们需要有一种方式来告知 Web 服务器去执行 HTTP 的安全协议版本。这是在 URL 的方案中实现的。通常情况下，非安全 HTTP 的 URL 方案前缀为 http，如下所示：

> http://blog.maplemark.cn

在安全 HTTPS 协议中，URL 的方案前缀为 https，如下所示：

> https://blog.maplemark.cn

请求一个客户端（比如 Web 浏览器）对某 Web 资源执行某事务时，它会去检查 URL 的方案

- 如果 URL 的方案为 http，客户端就会打开一条到服务器端口 80（默认情况下）
的连接，并向其发送老的 HTTP 命令
- 如果 URL 的方案为 https，客户端就会打开一条到服务器端口 443（默认情况下）
的连接，然后与服务器“握手”，以二进制格式与服务器交换一些 SSL 安全参数，
附上加密的 HTTP 命令

SSL 是个二进制协议，与 HTTP 完全不同，其流量是承载在另一个端口上的（SSL 通常是由端口 443 承载的）。如果 SSL 和 HTTP 流量都从端口 80 到达，大部分 Web 服务器会将二进制 SSL 流量理解为错误的 HTTP 并关闭连接。将安全服务进一步整合到 HTTP 层中去就无需使用多个目的端口了，在实际中这样不会引发严重的问题

#### 建立安全传输

在未加密 HTTP 中，客户端会打开一条到 Web 服务器端口 80 的 TCP 连接，发送一条请求报文，接收一条响应报文，关闭连接

由于 SSL 安全层的存在，HTTPS 中这个过程会略微复杂一些。在 HTTPS 中，客户端首先打开一条到 Web 服务器端口 443（安全 HTTP 的默认端口）的连接。一旦建立了 TCP 连接，客户端和服务器就会初始化 SSL 层，对加密参数进行沟通，并交换密钥。握手完成之后，SSL 初始化就完成了，客户端就可以将请求报文发送给安全层了。在将这些报文发送给 TCP 之前，要先对其进行加密

#### SSL 握手

在发送已加密的 HTTP 报文之前，客户端和服务器要进行一次 SSL 握手，在这个握手过程中，它们要完成以下工作

- 交换协议版本号
- 选择一个两端都了解的密码
- 对两端的身份进行认证
- 生成临时的会话密钥，以便加密信道

在通过网络传输任何已加密的 HTTP 数据之前，SSL 已经发送了一组握手数据来建立通信连接了

这是 SSL 握手的简化版本。根据 SSL 的使用方式，握手过程可能会复杂一些，但总
的思想就是这样

#### 服务器证书

SSL 支持双向认证，将服务器证书承载回客户端，再将客户端的证书回送给服务器。而现在，浏览时并不经常使用客户端证书。大部分用户甚至都没有自己的客户端证书。服务器可以要求使用客户端证书，但实际中很少出现这种情况。

另一方面，安全 HTTPS 事务总是要求使用服务器证书的。在一个 Web 服务器上执行安全事务，比如提交信用卡信息时，你总是希望是在与你所认为的那个组织对话。由知名权威机构签发的服务器证书可以帮助你在发送信用卡或私人信息之前评估你对服务器的信任度。

服务器证书是一个显示了组织的名称、地址、服务器 DNS 域名以及其他信息的 X.509 v3 派生证书。你和你所用的客户端软件可以检查证书，以确保所有的信息都是可信的

#### 站点证书的有效性

SSL 自身不要求用户检查 Web 服务器证书，但大部分现代浏览器都会对证书进行简单的完整性检查，并为用户提供进行进一步彻查的手段。网景公司提出的一种 Web 服务器证书有效性算法是大部分浏览器有效性验证技术的基础。

- 日期检测

首先，浏览器检查证书的起始日期和结束日期，以确保证书仍然有效。如果证书过期了，或者还未被激活，则证书有效性验证失败，浏览器显示一条错误信息

- 签名颁发者可信度检测

每个证书都是由某些证书颁发机构（CA）签发的，它们负责为服务器担保。证书有不同的等级，每种证书都要求不同级别的背景验证。比如，如果申请某个电子商务服务器证书，通常需要提供一个营业的合法证明

任何人都可以生成证书，但有些 CA 是非常著名的组织，它们通过非常清晰的流程来验证证书申请人的身份及商业行为的合法性。因此，浏览器会附带一个签名颁发机构的受信列表。如果浏览器收到了某未知（可能是恶意的）颁发机构签发的证书，那它通常会显示一条警告信息。有些证书会携带到受信 CA 的有效签名路径，浏览器可能会选择接受所有此类证书。换句话说，如果某受信 CA 为“Sam 的签名商店”签发了一个证书，而 Sam 的签名商店也签发了一个站点证书，浏览器可能会将其作为从有效 CA 路径导出的证书接受

- 签名检测

一旦判定签名授权是可信的，浏览器就要对签名使用签名颁发机构的公开密钥，并将其与校验码进行比较，以查看证书的完整性

- 站点身份检测

为防止服务器复制其他人的证书，或拦截其他人的流量，大部分浏览器都会试着去验证证书中的域名与它们所对话的服务器的域名是否匹配。服务器证书中通常都包含一个域名，但有些 CA 会为一组或一群服务器创建一些包含了服务器名称列表或通配域名的证书。如果主机名与证书中的标识符不匹配，面向用户的客户端要么就去通知用户，要么就以表示证书不正确的差错报文来终止连接

### 18. HTTP 2.0

多路复用、客户端拉拽/服务器推送、流量控制、WebSocket

### 19. WebSocket

WebSocket 是一种通信协议，定义了一个全双工通信信道，仅通过 Web 上的一个 Socket 即可进行通信

#### 主要特点

- 推送功能：支持由服务器向客户端推送数据的推送功能
- 减少通信量：只要建立起 WebSocket 连接，就希望一直保持连接状态

### 20. IPv6 与 IPv4 有什么变化

更大的地址空间、扩展的地址层次结构、灵活的首部格式、改进的选项、允许协议继续扩充、支持资源的预分配

### 21. 什么是心跳机制

心跳机制是定时发送一个自定义的结构体(心跳包)，让对方知道自己还活着，以确保连接的有效性的机制

### 22. 什么是长连接

长连接，指在一个连接上可以连续发送多个数据包，在连接保持期间，如果没有数据包发送，需要双方发链路检测包

## 基础篇
* [了解大部分数组处理函数](http://php.net/manual/zh/ref.array.php)
* [字符串处理函数](http://php.net/manual/zh/ref.strings.php)  [区别 mb_ 系列函数](http://php.net/manual/zh/book.mbstring.php)
* [& 引用，结合案例分析](https://secure.php.net/manual/zh/language.references.php)
* [== 与 === 区别](https://stackoverflow.com/questions/80646/how-do-the-php-equality-double-equals-and-identity-triple-equals-comp)
* [isset 与 empty 区别](https://stackoverflow.com/questions/1219542/in-where-shall-i-use-isset-and-empty)
* [全部魔术函数理解](http://php.net/manual/zh/language.oop5.magic.php)
* [static、$this、self 区别](https://stackoverflow.com/questions/4718808/php-can-static-replace-self)
* private、protected、public、final 区别
* OOP 思想
* 抽象类、接口 分别使用场景
* [Trait 是什么东西](http://php.net/manual/zh/language.oop5.traits.php)
* [echo、print、print_r 区别(区分出表达式与语句的区别)](https://stackoverflow.com/questions/1647322/whats-the-difference-between-echo-print-and-print-r-in-php)
* [__construct 与 __destruct 区别](http://php.net/manual/zh/language.oop5.decon.php)
* static 作用（区分类与函数内）[手册](http://php.net/manual/zh/language.oop5.static.php) 、[SOF](https://stackoverflow.com/questions/7508284/static-variables-in-php)
* [__toString() 作用](http://php.net/manual/en/language.oop5.magic.php#object.tostring)
* [单引号`'`与双引号`"`区别](https://stackoverflow.com/questions/3446216/what-is-the-difference-between-single-quoted-and-double-quoted-strings-in-php#answer-3446286)
* [常见 HTTP 状态码，分别代表什么含义](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
* [301](https://zh.wikipedia.org/wiki/HTTP_301) 什么意思 [404](https://zh.wikipedia.org/wiki/HTTP_404) 呢?

## 进阶篇
* Autoload、Composer 原理 [PSR-4](https://laravel-china.org/topics/2081/psr-specification-psr-4-automatic-loading-specification) 、[原理](https://segmentfault.com/a/1190000014948542)
* Session 共享、存活时间
* 异常处理
* [如何 foreach 迭代对象](https://secure.php.net/manual/zh/class.iterator.php)
* [如何数组化操作对象 `$obj[key];`](https://secure.php.net/manual/zh/class.arrayaccess.php)
* [如何函数化对象 `$obj(123);`](http://php.net/manual/en/language.oop5.magic.php#object.invoke)
* yield 是什么，说个使用场景 [yield](https://www.oschina.net/translate/cooperative-multitasking-using-coroutines-in-php)
* [PSR 是什么，PSR-1, 2, 4, 7](http://psr.phphub.org/)
* 如何获取客户端 IP 和服务端 IP 地址
    * [客户端 IP](https://stackoverflow.com/questions/3003145/how-to-get-the-client-ip-address-in-php)    
    * [服务端 IP](https://stackoverflow.com/questions/5800927/how-to-identify-server-ip-address-in-php)
    * 了解代理透传 实际IP 的概念
* 如何开启 PHP 异常提示
    * php.ini 开启 `display_errors` 设置 `error_reporting` 等级
    * 运行时，使用 `ini_set(k, v);` 动态设置
* [如何返回一个301重定向](https://stackoverflow.com/questions/7324645/php-header-redirect-301-what-are-the-implications) 
    * **[WARNING]** 一定当心设置 301 后脚本会继续执行，不要认为下面不会执行，必要时使用 `die` or `exit`
* 如何获取扩展安装路径
    * `phpinfo();` 页面查找 `extension_dir`
    * 命令行 `php -i |grep extension_dir`
    * 运行时 `echo ini_get('extension_dir');`
* 字符串、数字比较大小的原理，注意 0 开头的8进制、0x 开头16进制
    * 字符串比较大小，从左(高位)至右，逐个字符 ASCII 比较
* BOM 头是什么，怎么除去
    * `0xEF`,`0xBB`,`0xBF`
    * [检测、去除](https://stackoverflow.com/questions/10290849/how-to-remove-multiple-utf-8-bom-sequences-before-doctype)
* 什么是 MVC 
* 依赖注入实现原理
* 如何异步执行命令
* 模板引擎是什么，解决什么问题、实现原理（Smarty、Twig、Blade）
* 如何实现链式操作 `$obj->w()->m()->d();`
* Xhprof 、Xdebug 性能调试工具使用
* 索引数组 `[1, 2]` 与关联数组 `['k1'=>1, 'k2'=>2]` 有什么区别
* [缓存的使用方式、场景](https://zhuanlan.zhihu.com/p/40091810)

## 实践篇
* 给定二维数组，根据某个字段排序
* 如何判断上传文件类型，如：仅允许 jpg 上传
* 不使用临时变量交换两个变量的值 `$a=1; $b=2;`  =>  `$a=2; $b=1;`
* strtoupper 在转换中文时存在乱码，你如何解决？```php echo strtoupper('ab你好c'); ```
* Websocket、Long-Polling、Server-Sent Events(SSE) 区别
* "Headers already sent" 错误是什么意思，如何避免

## 算法篇
* 快速排序（手写）
* 冒泡排序（手写）
* 二分查找（了解）
* 查找算法 KMP（了解）
* 深度、广度优先搜索（了解）
* LRU 缓存淘汰算法（了解，Memcached 采用该算法）

## 数据结构篇（了解）
* 堆、栈特性
* 队列
* 哈希表
* 链表

## 对比篇
* Cookie 与 Session 区别
* `GET` 与 `POST` 区别
* `include` 与 `require` 区别
* `include_once` 与 `require_once` 区别
* Memcached 与 Redis 区别
* MySQL 各个存储引擎、及区别（一定会问 MyISAM 与 Innodb 区别）
* HTTP 与 HTTPS 区别
* Apache 与 Nginx 区别
* define() 与 const 区别
* traits 与 interfaces 区别 及 traits 解决了什么痛点？
* Git 与 SVN 区别

## 数据库篇
* MySQL
    * CRUD
    * JOIN、LEFT JOIN 、RIGHT JOIN、INNER JOIN
    * UNION
    * GROUP BY + COUNT + WHERE 组合案例
    * [常用 MySQL 函数，如：now()、md5()、concat()、uuid()等](https://www.w3schools.com/sql/sql_ref_mysql.asp)
    * `1:1`、`1:n`、`n:n` 各自适用场景
    * 了解触发器是什么，说个使用场景
    * 数据库优化手段
        * 索引、联合索引（命中条件）
        * 分库分表（`水平分表`、`垂直分表`）
        * 分区
        * 会使用 `explain` 分析 SQL 性能问题，了解各参数含义
            * 重点理解 `type`、`rows`、`key`
        * Slow Log（有什么用，什么时候需要）
* MSSQL(了解)
    * 查询最新5条数据
* NOSQL
    * Redis、Memcached、MongoDB
    * 对比、适用场景（可从以下维度进行对比）
        * 持久化
        * 支持多钟数据类型
        * 可利用 CPU 多核心
        * 内存淘汰机制
        * 集群 Cluster
        * 支持 SQL
        * 性能对比
        * 支持事务
        * 应用场景
    * 你之前为了解决什么问题使用的什么，为什么选它？

## 服务器篇
* 查看 CPU、内存、时间、系统版本等信息
* find 、grep 查找文件
* awk 处理文本
* 查看命令所在目录
* 自己编译过 PHP 吗？如何打开 readline 功能
* 如何查看 PHP 进程的内存、CPU 占用
* 如何给 PHP 增加一个扩展
* 修改 PHP Session 存储位置、修改 INI 配置参数
* 负载均衡有哪几种，挑一种你熟悉的说明其原理
* 数据库主从复制 M-S 是怎么同步的？是推还是拉？会不会不同步？怎么办
* 如何保障数据的可用性，即使被删库了也能恢复到分钟级别。你会怎么做。
* 数据库连接过多，超过最大值，如何优化架构。从哪些方便处理？
* 502 大概什么什么原因？ 如何排查  504呢？

## 架构篇
* 偏运维（了解）：
    * 负载均衡（Nginx、HAProxy、DNS）
    * 主从复制（MySQL、Redis）
    * 数据冗余、备份（MySQL增量、全量 原理）
    * 监控检查（分存活、服务可用两个维度）
    * MySQL、Redis、Memcached Proxy 、Cluster 目的、原理
    * 分片
    * 高可用集群
    * RAID
    * 源代码编译、内存调优
* 缓存
    * 工作中遇到哪里需要缓存，分别简述为什么
* 搜索解决方案
* 性能调优
* 各维度监控方案
* 日志收集集中处理方案
* 国际化
* 数据库设计
* 静态化方案
* 画出常见 PHP 应用架构图

## 框架篇
* ThinkPHP（TP）、CodeIgniter（CI）、Zend（非 OOP 系列）
* Yaf、Phalcon（C 扩展系）
* Yii、Laravel、Symfony（纯 OOP 系列）
* Swoole、Workerman （网络编程框架）
* 对比框架区别几个方向点
    * 是否纯 OOP
    * 类库加载方式（自己写 autoload 对比 composer 标准）
    * 易用性方向（CI 基础框架，Laravel 这种就是高开发效率框架以及基础组件多少） 
    * 黑盒（相比 C 扩展系）
    * 运行速度（如：Laravel 加载一大堆东西）
    * 内存占用

## 设计模式
* 单例模式（重点）
* 工厂模式（重点）
* 观察者模式（重点）
* 依赖注入（重点）
* 装饰器模式
* 代理模式
* 组合模式

## 安全篇
* SQL 注入
* XSS 与 CSRF
* 输入过滤
* Cookie 安全
* 禁用 `mysql_` 系函数
* 数据库存储用户密码时，应该是怎么做才安全
* 验证码 Session 问题
* 安全的 Session ID （让即使拦截后，也无法模拟使用）
* 目录权限安全
* 包含本地与远程文件
* 文件上传 PHP 脚本
* `eval` 函数执行脚本
* `disable_functions` 关闭高危函数
* FPM 独立用户与组，给每个目录特定权限
* 了解 Hash 与 Encrypt 区别

## 高阶篇
* PHP 数组底层实现 （HashTable + Linked list）
* Copy on write 原理，何时 GC
* PHP 进程模型，进程通讯方式，进程线程区别
* yield 核心原理是什么
* PDO prepare 原理
* PHP 7 与 PHP 5 有什么区别
* Swoole 适用场景，协程实现方式

## 前端篇
* 原生获取 DOM 节点，属性
* 盒子模型
* CSS 文件、style 标签、行内 style 属性优先级
* HTML 与 JS 运行顺序（页面 JS 从上到下）
* JS 数组操作
* 类型判断
* this 作用域
* .map() 与 this 具体使用场景分析
* Cookie 读写
* JQuery 操作
* Ajax 请求（同步、异步区别）随机数禁止缓存
* Bootstrap 有什么好处
* 跨域请求 N 种解决方案
* 新技术（了解）
    * ES6
    * 模块化
    * 打包
    * 构建工具
    * vue、react、webpack、
    * 前端 mvc 
* 优化
    * 浏览器单域名并发数限制
    * 静态资源缓存 304 （If-Modified-Since 以及 Etag 原理）
    * 多个小图标合并使用 position 定位技术 减少请求
    * 静态资源合为单次请求 并压缩
    * CDN
    * 静态资源延迟加载技术、预加载技术
    * keep-alive
    * CSS 在头部，JS 在尾部的优化（原理）


## 网络篇

* IP 地址转 INT
* 192.168.0.1/16 是什么意思
* DNS 主要作用是什么？
* IPv4 与 v6 区别

## 网络编程篇

* TCP 三次握手流程
* TCP、UDP 区别，分别适用场景
* 有什么办法能保证 UDP 高可用性(了解)
* TCP 粘包如何解决？
* 为什么需要心跳？
* 什么是长连接？
* HTTPS 是怎么保证安全的？
* 流与数据报的区别
* 进程间通信几种方式，最快的是哪种？
* `fork()` 会发生什么？

## API 篇

* RESTful 是什么
* 如何在不支持 `DELETE` 请求的浏览器上兼容 `DELETE` 请求
* 常见 API 的 `APP_ID` `APP_SECRET` 主要作用是什么？阐述下流程 
* API 请求如何保证数据不被篡改？
* JSON 和 JSONP 的区别
* 数据加密和验签的区别
* RSA 是什么
* API 版本兼容怎么处理
* 限流（木桶、令牌桶）
* OAuth 2 主要用在哪些场景下
* JWT
* PHP 中 `json_encode(['key'=>123]);` 与 `return json_encode([]);` 区别，会产生什么问题？如何解决

## 加分项
* 了解常用语言特性，及不同场景适用性。
   * PHP VS Golang
   * PHP VS Python
   * PHP VS JAVA
* 了解 PHP 扩展开发
* 熟练掌握 C

## Yii2中的依赖注入

### 基本概念

1.依赖倒置（反转）原则（DIP）：一种软件架构设计的原则（抽象概念，是一种思想）
在面向对象编程领域中，依赖反转原则（Dependency inversion principle，DIP）是指一种特定的解耦（传统的依赖关系创建在高层次上，而具体的策略设置则应用在低层次的模块上）形式，使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），从而使得低层次模块依赖于高层次模块的需求抽象。

该原则规定：

    1.高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。
    2.抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。

图片描述

在上图中，高层对象A依赖于底层对象B的实现；图2中，把高层对象A对底层对象的需求抽象为一个接口A，底层对象B实现了接口A，这就是依赖反转。

该原则颠倒了一部分人对于面向对象设计的认识方式。如高层次和低层次对象都应该依赖于相同的抽象接口。它转换了依赖，高层模块不依赖于低层模块的实现，而低层模块依赖于高层模块定义的接口。通俗的讲，就是高层模块定义接口，低层模块负责实现。

2.控制反转（IoC）：一种反转流、依赖和接口的方式（DIP的具体实现方式，一种设计原则）
控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。其中最常见的方式叫做依赖注入（Dependency Injection，简称DI），还有一种方式叫“依赖查找”（Dependency Lookup）。通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体，将其所依赖的对象的引用传递给它。也可以说，依赖被注入到对象中。

参考：https://segmentfault.com/a/1190000010788354
### 入口文件
> 文件位置：web\index.php

```
//定义全局变量
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

//composer自动加载代码机制，可参考 https://segmentfault.com/a/1190000010788354
require(__DIR__ . '/../vendor/autoload.php');

//1.引入工具类Yii
//2.注册自动加载函数
//3.生成依赖注入中使用到的容器
require(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

//加载应用配置
$config = require(__DIR__ . '/../config/web.php');

//生成应用并运行
(new yii\web\Application($config))->run();
```

参考：https://segmentfault.com/a/1190000011823699
## sql注入获取后台管理员账号密码
在完全拿下服务器主机之前，存在sql注入漏洞的网站，可能会因此提供给黑客后台管理员的账号密码，黑客登录后台后，上传木马，拿下整个主机。这是sql注入的一种应用场景。

以下讲解sql注入获取后台管理员账号密码的过程，本文以尽力对新手友好的展现过程来讲解基本原理，高手与百事通请避免观看，以免徒耗时间。

为避免读者惹上麻烦，已对原本目标网站信息进行涂抹，并提供笔者自己搭建的测试网站供有兴趣的朋友操作，换句话说，黑我的网站是合法的。

正式开始，在网站中，点击人才招聘，跳转到如下页面，同时地址栏url变为图中所示。

可以看到链接中传给服务器参数，id=2，此处逻辑一般为：服务器获取到id值为2，再通过id值返回给浏览器对应页面或内容，这个过程有可能会经过数据库。

首先惯常试试是否存在sql注入漏洞，将地址栏中的id=2更改为id=2'，即在值2后面添加单引号，回车看结果。

sweet，塔斯丁狗，服务器返回了数据库错误，并详细的打印了错误信息。由错误信息可以得知，网站使用了mysql数据库，并展示了具体的sql语句：

select * from sy_page where 1 and id=2
这条语句表示：查询sy_page表里id为2的全部数据，而发生错误的原因则是因为多出的单引号使sql语句语法发生错误。

同时可以看出，我们只加过一个单引号'，上图错误信息却显示，实际sql语句中变为了\'反斜杠加单引号，这说明，服务器是做了特殊符号过滤的，以此来防sql注入，这确实起作用，我们便无法注入带有单引号双引号等特殊符号的语句，但其他的注入却是没问题的。

在确定存在sql注入漏洞后，对于查询语句，可以先确定查询的数据有多少列，通过如下图链接所示增加排序条件order by来探测，将地址栏中id=2改为id=2 order by 15，这将使原本的查询语句变成

select * from sy_page where 1 and id=2 order by 15
这表示，在原来查询结果的基础上进行排序，排序的依据是第15列数据的值。

但实际结果却报错，显示不存在第15列，这正是我们追求的结果，说明查询的出数据不超过15列。

递减列数尝试，直到列数降为10時，才不再报错，如下图所示，说明数据有10列。

在得知列数后，便可以开启真正的掠夺了。那就是在原本的查询结果中加入自己的查询数据。如下图所示，将地址栏中

id=2
改为

id=2 union select 1,2,3,4,5,6,7,8,9,10

这样变化的意图是什么？举个例子，假如下图所示查询数据为网站本来正常的查询结果，id=852，从左至右刚好10列数据。

而加入union select 1,2,3,4,5,6,7,8,9,10后，查询结果便如下图所示。多出了一行结果为1 2 3 4 5 6 7 8 9 10的数据。

而网站中这行多出来的数据没有显示在页面上的原因是什么？可以想像，网站在获取到两行数据后只取了第一行的数据，因为网站根本没预料到会有两行以上的数据。那么我们只需要将自己的数据排到第一行，就可以替代网站本身的数据了。于是再做一次排序，继续追加一句order by 1，根据第一列的值进行排序，便产生如下结果

可以看到，我们自己的数据排到了最前面，这是因为我们自己构建的数据中，第一列的值为1，小于上图示例数据852，于是排到了前面。

随后拿到网站中测试，将

id=2
改为

id=2 union select 1,2,3,4,5,6,7,8,9,10 order by 1
可以看到，我们的内容替换掉了网站内容，第二列数据值2与第6列数据值6显示在了网站页面。

这两列显示数据便成了数据输出窗口。换言之，只需要将2和6的值替换为数据库实际内容，就可以输出到页面显示，被我们看见。

得知第2列和第6列会显示后，便可以开始尝试将2和6替换为系统表数据，将前面的

id=2 union select 1,2,3,4,5,6,7,8,9,10 order by 1
更改为

id=2 union select 1,table_schema,3,4,5,table_name,7,8,9,10 from information_schema.columns order by 1

这句表示，我们自己追加的数据不再是单纯的10个数字，而是从mysql的系统表columns中查询的数据，第二列与第六列分别显示columns表中的table_schema列与table_name列数据。table_schema列存储的是数据库名字信息，table_name列存储着表名信息。下图查询到的数据库名为information_schema，表名为character_sets

上面查询的columns表是mysql的系统表，里面存储着mysql中所有的表名及列信息，如下图的本机展示可以看到所有的表名，列名，列的数据类型，通过这个表，可以爆出所有的表名，列名，及所在数据库，是获取数据的突破口。

下图是一个本机测试，用的是前面爆网站表名的语句：

select * from table1 where id=852 union select 1,table_schema,3,4,5,table_name,7,8,9,10 from information_schema.columns order by 1
可以看到，所有的表列数据被追加到我们自己的数据里，做个对比的话，下图最后一列数据就像网站正常显示的数据，其他的则是我们注入的数据。

那么如何把这么多行数据逐个爆出来呢？很明显依靠排序是不足以实现的，这时可以再在之前的查询语句后追加一个limit条件，如下图所示

limit m,n
表示筛选出从第m+1行开始的n行数据

limit 0,1
便表示筛选出第一行开始的一行数据，这样如下图就得到了第一行数据，换成limit 1,1则是筛选出第二行数据，以此类推，可以分别得出每一行的数据。

应用到网站中，发现从第41行开始不再是系统表，如下图所示，第41行爆出了数据库名sq_sydata，表名sy_admin

一行一行爆，如图展示，更改limit限定值会爆出其他的表名。

最后爆出了所有的表，如下图所示。

按照命名推断，sy_admin表必定是后台管理员账号表，既然columns系统表中存放着所有列信息，自然也可以用来将sy_admin表的列名爆出来，将

id=2 union select 1,table_schema,3,4,5,table_name,7,8,9,10 from information_schema.columns order by 1
中的table_schema（数据库名）替换为table_name（表名），table_name（表名）替换为column_name（列名），再尝试更改limit的限定值，直到更改为480時开始出现sy_admin表的内容，下图可以看到第481列（limit 480,1）爆出了sy_admin表的一个列名为id。

继续递增列爆481，得到列名loginname。

继续递增，最终爆出sy_admin表的所有列名，如下图所示。

可以推断，上图中的lpginname列应该是用户名，password则是登录密码。

ok，已经得到了sy_admin表的所有列名，接下来就可以开始获取sy_admin表中的实际数据了。

然后我们不再查询系统表，转向sy_admin表，如下图所示，将第二列替换为loginname，第六列替换为password，表名从系统表information_schema.columns（information_schema数据库中的columns表）更换为sq_sydata.sy_admin（sq_sydata数据库中的sy_admin表），再稍微更换limit限定条件，最终得到了后台管理员admin的密码，如下图所示

目标达成。

上图中加密后的密码可以通过工具或百度在线md5解密工具解密，不作赘述。

同样也可以更换列名查出其他的信息，比如下图所示登录次数27次，上次登录于2月1号。以及其他的东西，你懂的。
# php性能优化
## php语言级的性能优化
优化点：少写代码，多用php自身能力
- 性能问题：自身代码冗余较多，可读性不佳，并且性能低。
- 为什么性能低：php代码需要编译解析为底层语言，这一过程每次请求都会处理一遍，开销大。
- 解决方案：多用php内置变量、常量、函数
- 测试方法：直接使用ab对比

优化点：php内置函数的性能优劣
- 性能问题：php内置函数，之间依然存在快慢差异
- 解决方案：多去了解php内置函数的时间复杂度
- 测试方法：对比isset()和array_key_exists()的性能差异
```php
<?php
    $start = current_time();
    $i = 0;
    $arr = range(1, 200000);
    while($i<200000){
        ++$i;
        //isset($arr[$i]);
        array_key_exists($i,$arr);
    }
    $end = current_time();
    echo "Lost Time:". number_format($end-$start,3)*1000;
    echo "\n";
    function current_time(){
        list($usec, $sec) = explode(" ".microtime());
        return ((float)$usec + (float)$sec);
    }
?>
```
优化点：尽可能少用魔法函数
- 情况描述：php提供的魔法函数，性能不佳
- 为什么性能低：为了给php程序员省事，php语言为你做了很多
- 解决方案：尽可能规避使用魔法函数
- 测试方法：time php test.php
    - time  liunx命令
    - php 指定程序
    - test.php 指定文件 
    > 注意：php主要在返回值中看user耗时

优化点：产生额外开销在错误抑制符
- 情况描述：php提供的错误抑制符只是为了方便懒人
- @的实际逻辑：在代码开始前，结束后，增加Opcode,忽略报错
    vld php Opcode查看扩展:用于将Opcode显示出来
- 解决方案：尽量不要使用@错误抑制符
- 测试方法：php -dvld.active=1 -dvld.execute=0 at.php
    
- php 执行php的vld显示Opcode
    
优化点：避免在循环内做运算
- 情况描述：循环内在函数或运算会被重复执行
- 解决方案：在循环外获取需要在值，再给循环操作

优化点：减少计算密集型业务
- 情况描述：php不适合密集型的场景
- 为什么：php语言特性决定php不适合做大数据业务
- php适合场景：适合衔接webserver与sql

优化点：务必使用带引号字符串做键值
- 情况描述：php会将没有引号的键值当作常量，产生查找常量在开销。
- 解决方案：严格使用带引号作为键值

## php周边问题的性能优化
- php周边有什么:
    - linux运行环境
    - 文件存储  硬盘
    - 数据库    mysql
    - 缓存      redis
    - 网络  

优化点：减少文件类操作
- 常见php场景在开销次序
读写内存 << 读写数据库 << 读写磁盘 << 读写网络数据

优化点：优化网络请求
- 网络请求的坑：
    1. 对方接口的不确定因素
    2. 网络稳定性
- 如何优化网络请求：
    - 设置超时时间
    1. 连接超时 <200ms
    2. 读超时   <800ms
    3. 写超时   <500ms
    - 将串行请求并行化
    1. 使用curl_multi_*()
    2. 使用swoole扩展

优化点：压缩php接口输出
- 如何压缩：使用Gzip即可
- 压缩的利于弊：利于我们的数据输出，Client段能更快获取数据;弊端为会有额外的CPU开销

优化点：缓存重复计算内容
- 什么情况下坐输出内容缓存：多次请求，内容不变情况

重叠时间窗口思想===并行
旁路方案===并行

## php语言自身分析、优化

### php性能分析

工具:XHPorf（源自FackBook的php性能分析工具）
实践：通过分析Wordpress程序，做优化。
使用: php --ri xhprof   查看版本
在入口文件index.php添加

```php
xhprof_enable();

// ...

$data = xhporf_disable();
include_once "/var/www/html/xhprof_lib/utils/xhprof_lib.php";
include_once "/var/www/html/xhprof_lib/utils/xhprof_runs.php";
$objXhprofRun = new XHProfRuns_Default();
$run_id = $objXhprofRun->save_run($data,"test");
var_dump($run_id);
```
查看xhp目录查看相关信息
参数：
    runction_name   函数名
    calls   被调用在次数
    InclWallTime    当流程走到该函数，之前和现在这个函数处理在总耗时
    ExclWallTime    这个函数执行了多少微秒

其他工具推荐：
    ab  压力测试
    vld opcode代码分析

php性能瓶颈解决方案：
    Opcode Cache:php扩展APC等
    peci.php.net    php扩展网站
    使用php扩展解决复杂的业务
    Runtime优化:HHVM

### Apache Benchmark(ab)

> ab是由Apache提供的压力测试软件。安装apache服务器时会自带该压测软件
- 使用方法: ./ab -n1000 -c100 http://www.baidu.com/
    - -n 请求数
    - -c 并发数
    - http 压测目标地址
    - -h 帮助 

**返回参数说明**
- Requests per second（每秒接受请求数尽可能多）
- Time per request（每秒请求在耗时尽可能少）
## Laravel5.8版本安装教程
1.安装

方式1：全局安装

通过composer安装 laravel 安装器

composer global require "laravel/installer"

确保将 composer vender bin 目录放置在你的系统环境变量 $PATH 中，以便系统可以找到 Laravel 的可执行文件。该目录根据您的操作系统存在不同的位置中；一些常见的配置包括：

macOS: $HOME/.composer/vendor/bin

GNU / Linux 发行版: $HOME/.config/composer/vendor/bin

安装完后可通过 laravel new 项目名安装laravel

方式二：命令行安装

composer create-project --prefer -dist laravel/laravel 项目名
2.配置公共目录

安装完laravel后必须将web服务器根目录指向public文件夹。如果是本地环境可忽略此操作。
3.配置读写权限

storage和bootstrap/cache 两个文件夹需要写入权限。如果未配置laravel程序将无法运行。如果是本地环境可忽略此操作。
4.创建.env文件

laravel安装完成，如果只有.env.example文件，需要创建.evn文件并将.env.example中的内容复制到.env中。
5.生成应用秘钥

laravel安装完成后，需要在命令行下运行php artisan key:generate，该命令会生成一个32位的随机数，并写入.env文件中
6.修改config/app.php下的timezone

app.php中的timezone默认是UTC,UTC是世界统一时间，需要将时区改成中国时区Asia/Shanghai
7.配置数据库

创建数据库并将数据库配

置信息写入.env文件
```
DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=homestead

DB_USERNAME=root

DB_PASSWORD=root

```

参考：https://www.jianshu.com/p/a3cdec31be9b
## Composer 安装与使用

Composer 是 PHP 的一个依赖管理工具。我们可以在项目中声明所依赖的外部工具库，Composer 会帮你安装这些依赖的库文件，有了它，我们就可以很轻松的使用一个命令将其他人的优秀代码引用到我们的项目中来。

Composer 默认情况下不是全局安装，而是基于指定的项目的某个目录中（例如 vendor）进行安装。

Composer 需要 PHP 5.3.2+ 以上版本，且需要开启 openssl。

Composer 可运行在 Windows 、 Linux 以及 OSX 平台上。

Composer 的安装
Wondows 平台

Wondows 平台上，我们只需要下载 Composer-Setup.exe 后，一步步安装即可。

需要注意的是你需要开启 openssl 配置，我们打开 php 目录下的 php.ini，将 extension=php_openssl.dll 前面的分号去掉就可以了。

安装成功后，我们可以通过命令窗口(cmd) 输入 composer --version 命令来查看是否安装成功：

接下来我们可以更改 Packagist 为国内镜像：

composer config -g repo.packagist composer https://packagist.phpcomposer.com

Linux 平台

Linux 平台可以使用以下命令来安装：

# php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
# php composer-setup.php

All settings correct for using Composer
Downloading...

Composer (version 1.6.5) successfully installed to: /root/composer.phar
Use it: php composer.phar

移动 composer.phar，这样 composer 就可以进行全局调用：

# mv composer.phar /usr/local/bin/composer

切换为国内镜像：

# composer config -g repo.packagist composer https://packagist.phpcomposer.com

更新 composer：

# composer selfupdate

Mac OS 系统

Mac OS 系统可以使用以下命令来安装：

$ curl -sS https://getcomposer.org/installer | php
$ sudo mv composer.phar /usr/local/bin/composer
$ composer --version
Composer version 1.7.2 2018-08-16 16:57:12

切换为国内镜像：

$ composer config -g repo.packagist composer https://packagist.phpcomposer.com

更新 composer：

$ composer selfupdate

Composer 的使用

要使用 Composer，我们需要先在项目的目录下创建一个 composer.json 文件，文件描述了项目的依赖关系。

文件格式如下：

{
    "require": {
        "monolog/monolog": "1.2.*"
    }
}

以上文件说明我们需要下载从 1.2 开始的任何版本的 monolog。

接下来只要运行以下命令即可安装依赖包：

composer install

require 命令

除了使用 install 命令外，我们也可以使用 require 命令快速的安装一个依赖而不需要手动在 composer.json 里添加依赖信息：

$ composer require monolog/monolog

Composer 会先找到合适的版本，然后更新composer.json文件，在 require 那添加 monolog/monolog 包的相关信息，再把相关的依赖下载下来进行安装，最后更新 composer.lock 文件并生成 php 的自动加载文件。
update 命令

update 命令用于更新项目里所有的包，或者指定的某些包：

# 更新所有依赖
$ composer update

# 更新指定的包
$ composer update monolog/monolog

# 更新指定的多个包
$ composer update monolog/monolog symfony/dependency-injection

# 还可以通过通配符匹配包
$ composer update monolog/monolog symfony/*

需要注意的时，包能升级的版本会受到版本约束的约束，包不会升级到超出约束的版本的范围。例如如果 composer.json 里包的版本约束为 ^1.10，而最新版本为 2.0。那么 update 命令是不能把包升级到 2.0 版本的，只能最高升级到 1.x 版本。关于版本约束请看后面的介绍。
remove 命令

remove 命令用于移除一个包及其依赖（在依赖没有被其他包使用的情况下），如果依赖被其他包使用，则无法移除：

$ composer remove monolog/monolog
Loading composer repositories with package information
Updating dependencies (including require-dev)
Package operations: 0 installs, 0 updates, 2 removals
  - Removing psr/log (1.0.2)
  - Removing monolog/monolog (1.23.0)
Generating autoload files

search 命令

search 命令可以搜索包：

$ composer search monolog

该命令会输出包及其描述信息，如果只想输出包名可以使用 --only-name 参数：

$ composer search --only-name monolog

show 命令

show 命令可以列出当前项目使用到包的信息：

# 列出所有已经安装的包
$ composer show

# 可以通过通配符进行筛选
$ composer show monolog/*

# 显示具体某个包的信息
$ composer show monolog/monolog

基本约束
精确版本

我们可以告诉 Composer 安装的具体版本，例如：1.0.2，指定 1.0.2 版本。
范围

通过使用比较操作符来指定包的范围。这些操作符包括：>，>=，<，<=，!=。

你可以定义多个范围，使用空格或者逗号 , 表示逻辑上的与，使用双竖线 || 表示逻辑上的或。其中与的优先级会大于或。 实例：

    >=1.0
    >=1.0 <2.0
    >=1.0 <1.1 || >=1.2

我们也可以通过使用连字符 - 来指定版本范围。

连字符的左边表明了 >= 的版本，如果右边的版本不是完整的版本号，则会被使用通配符进行补全。例如1.0 - 2.0等同于>=1.0.0 <2.1（2.0相当于2.0.*），而1.0.0 - 2.1.0则等同于>=1.0.0 <=2.1.0。
通配符

可以使用通配符来设置版本。1.0.*相当于>=1.0 <1.1。
例子：1.0.*
波浪号 ~

我们先通过后面这个例子去解释~操作符的用法：~1.2相当于>=1.2 <2.0.0，而~1.2.3相当于>=1.2.3 <1.3.0。对于使用Semantic Versioning作为版本号标准的项目来说，这种版本约束方式很实用。例如~1.2定义了最小的小版本号，然后你可以升级2.0以下的任何版本而不会出问题，因为按照Semantic Versioning的版本定义，小版本的升级不应该有兼容性的问题。简单来说，~定义了最小的版本，并且允许版本的最后一位版本号进行升级（没懂得话，请再看一边前面的例子）。
例子：~1.2

    需要注意的是，如果~作用在主版本号上，例如~1，按照上面的说法，Composer可以安装版本1以后的主版本，但是事实上是~1会被当作~1.0对待，只能增加小版本，不能增加主版本。

折音号 ^

^操作符的行为跟Semantic Versioning有比较大的关联，它允许升级版本到安全的版本。例如，^1.2.3相当于>=1.2.3 <2.0.0，因为在2.0版本前的版本应该都没有兼容性的问题。而对于1.0之前的版本，这种约束方式也考虑到了安全问题，例如^0.3会被当作>=0.3.0 <0.4.0对待。
例子：^1.2.3
版本稳定性

如果你没有显式的指定版本的稳定性，Composer会根据使用的操作符，默认在内部指定为-dev或者-stable。例如：
约束 	内部约束
1.2.3 	=1.2.3.0-stable
>1.2 	>1.2.0.0-stable
>=1.2 	>=1.2.0.0-dev
>=1.2-stable 	>=1.2.0.0-stable
<1.3 	<1.3.0.0-dev
<=1.3 	<=1.3.0.0-stable
1 - 2 	>=1.0.0.0-dev <3.0.0.0-dev
~1.3 	>=1.3.0.0-dev <2.0.0.0-dev
1.4.* 	>=1.4.0.0-dev <1.5.0.0-dev
例子：1.0 - 2.0

如果你想指定版本只要稳定版本，你可以在版本后面添加后缀-stable。

minimum-stability 配置项定义了包在选择版本时对稳定性的选择的默认行为。默认是stable。它的值如下（按照稳定性排序）：dev，alpha，beta，RC和stable。除了修改这个配置去修改这个默认行为，我们还可以通过稳定性标识（例如@stable和@dev）来安装一个相比于默认配置不同稳定性的版本。例如：

{
    "require": {
        "monolog/monolog": "1.0.*@beta",
        "acme/foo": "@dev"
    }
}

参考：https://www.runoob.com/w3cnote/composer-install-and-usage.html
## php面试指南

1.PHP 的底层性能特点。

2.面向对象开发经验。

3.至少掌握几个主流框架的架构原理，例如 Yii，CI，ThinkPHP 等。可以帮助拓展视野，站在巨人的肩膀上，可以省去很多走弯路的时间。

4.服务器端了解 Python，erlang等其他编程语言能做的工作，并不是所有工作都需要交给 PHP 来实现的，学会多语言架构很重要。

5.对于客户端，无论是 C 端还是 B 端的展现方式有了解。

6.沟通能力，尤其要学会了解需求方的真正意图，制定出较优解决方案，这个多数是靠经验积累了。

1、给你四个坐标点，判断它们能不能组成一个矩形，如判断([0,0],[0,1],[1,1],[1,0])能组成一个矩形。

勾股定理，矩形是对角线相等的四边形。只要任意三点不在一条直线上，任选一点，求这一点到另外三点的长度的平方,两个短的之和如果等于最长的，那么这就是矩形。

2、写一段代码判断单向链表中有没有形成环，如果形成环，请找出环的入口处，即P点
```
/*
 *单链表的结点类
 */
class LNode{
    //为了简化访问单链表,结点中的数据项的访问权限都设为public
    public int data;
    public LNode next;
}
 
class LinkListUtli {
    //当单链表中没有环时返回null，有环时返回环的入口结点
    public static LNode searchEntranceNode(LNode L)
    {
        LNode slow=L;//p表示从头结点开始每次往后走一步的指针
        LNode fast=L;//q表示从头结点开始每次往后走两步的指针
        while(fast !=null && fast.next !=null) 
        {
            if(slow==fast) break;//p与q相等，单链表有环
            slow=slow.next;
            fast=fast.next.next;
        }
        if(fast==null || fast.next==null) return null;
 
        // 重新遍历，寻找环的入口点
        slow=L;
        while(slow!=fast)
        {
            slow=slow.next;
            fast=fast.next;
        }
 
        return slow;
    }
}
```

3、写一个函数，获取一篇文章内容中的全部图片，并下载

```
function download_images($article_url = '', $image_path = 'tmp'){
    // 获取文章类容
    $content = file_get_contents($article_url);
    // 利用正则表达式得到图片链接
    $reg_tag = '/<img.*?\"([^\"]*(jpg|bmp|jpeg|gif|png)).*?>/';
    $ret = preg_match_all($reg_tag, $content, $match_result); 
    $pic_url_array = array_unique($match_result1[1]);
    // 创建路径
    $dir = getcwd() . DIRECTORY_SEPARATOR .$image_path;
    mkdir(iconv("UTF-8", "GBK", $dir), 0777, true);
    foreach($pic_url_array as $pic_url){
        // 获取文件信息
        $ch = curl_init($pic_url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_NOBODY, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE );
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $fileInfo = curl_exec($ch);
        $httpinfo = curl_getinfo($ch);
        curl_close($ch);
        // 获取图片文件后缀
        $ext = strrchr($pic_url, '.');
        $filename = $dir . '/' . uniqid() . $ext; 
        // 保存图片信息到文件
        $local_file = fopen($filename, 'w');
        if(false !== $local_file){
            if( false !== fwrite($local_file, $filecontent) ){
            fclose($local_file);
            }
        }
    }
}
```

4、获取当前客户端的IP地址，并判断是否在（111.111.111.111,222.222.222.222)

```
如果没有使用代理服务器：

$ip = $_SERVER['REMOTE_ADDR'];

使用透明代理

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];

参考文章

https://www.cnblogs.com/rendd/p/6183094.html
```

5、nginx的log_format配置如下：

log_format main ‘remoteaddr−remote_user [timelocal]"request”’ 
‘statusbody_bytes_sent “httpreferer"″"http_user_agent” “upstreamresponsetime""request_time” “http_x_forwarded_for"';
从今天的nginx log文件 access.log中：

a、列出“request_time”最大的20行？
b、列出早上10点访问量做多的20个url地址？

6、什么是CSRF攻击？XSS攻击？如何防范？

CSRF：跨站请求伪造，可以通过通过判断来源和加 Token 的方式来防范。

XSS：跨站脚本攻击，可以通过对内容转义和过滤来防范,还有CSP

7、应用中我们经常会遇到在user表随机调取10条数据来展示的情况，简述你如何实现该功能。
```
SELECT * FROM `table` WHERE id >= (SELECT FLOOR( MAX(id) * RAND()) FROM `table` ) ORDER BY id LIMIT 1;
```
参考文章：

https://www.cnblogs.com/riasky/p/3367558.html

http://www.jb51.net/article/48801.htm

8、从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是连续的

这个问题有个关键点，扑克牌，1-13 不能再多了。这就很简单了。用PHP来做，定义一个数组分别存着1到13,拿出一个，置空一个，最后看下 这五个置空的 是不是连续的。这种情况不考虑抽出的顺序。

9、两条相交的单向链表，如何求它们的第一个公共节点

思想：

如果两个链表相交，则从相交点开始，后面的节点都相同，即最后一个节点肯定相同；
从头到尾遍历两个链表，并记录链表长度，当二者的尾节点不同，则二者肯定不相交；
尾节点相同，如果A长为LA，B为LB，如果LA>LB,则A前LA-LB个先跳过
如果两个单向链表有公共的结点，也就是说两个链表从某一结点开始，它们的m_pNext都指向同一个结点。但由于是单向链表的结点，每个结点只有一个m_pNext，因此从第一个公共结点开始，之后它们所有结点都是重合的，不可能再出现分叉。所以，两个有公共结点而部分重合的链表，拓扑形状看起来像一个Y，而不可能像X。

参考文献：

https://blog.csdn.net/wcyoot/article/details/6426436

https://blog.csdn.net/Lieacui/article/details/52046548

10、最长公共子序列问题LCS，如有[1,2,5,11,32,15,77]和[99,32,15,5,1,77]两个数组，找到它们共同都拥有的数，写出时间复杂度最优的代码，不能用array_intersect（这里有坑，需要去研究一下动态规划）。

11、linux的内存分配和多线程原理

12、MYSQL中主键与唯一索引的区别

主键：绝对不能有空值。唯一索引：可以有空值

参考：https://www.cnblogs.com/lonelyxmas/p/4594624.html

13、http与https的主要区别

关键是S上。简而言之，https建立连接后要先把SSL的证书发下去，有了公钥和私钥，就可以解密了。

参考：https://www.cnblogs.com/zyl-Tara/p/7079696.html

14、http状态码及其含意

200 请求已成功，请求所希望的响应头或数据体将随此响应返回。
301 被请求的资源已永久移动到新位置。
302 请求的资源现在临时从不同的 URI 响应请求。
400 1、语义有误，当前请求无法被服务器理解。2、请求参数有误。
401 当前请求需要用户验证。
403 服务器已经理解请求，但是拒绝执行它。
404 请求失败，请求所希望得到的资源未被在服务器上发现。
500 服务器遇到了一个未曾预料的状况，无法完成对请求的处理，会在程序码出错时出现。
501 服务器不支持当前请求所需要的某个功能。无法识别请求的方法。
502 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。
503 由于临时的服务器维护或者过载，服务器当前无法处理请求。
参考：http://tool.oschina.net/commons?type=5

15、linux中怎么查看系统资源占用情况

top、htop、free、uptime

16、SQL注入的原理是什么？如何防止SQL注入

原理：第一SQL本身有问题（这个不是主要问题）。第二你写的SQL很有问题（这是最主要的）

防范：第一，绝对不要相信用户输入的任何东西。第二，预编译。现在的框架一般都会有SQL过滤的。

17、isset(null) isset(false) empty(null) empty(false)输出

PHP入门问题,isset和empty的区别

分别是false, true, true, true

18、优化MYSQL的方法

第一，数据超过一定数量或者体积，请拆分表，垂直或者水平分（最有效果的优化）

第二，务必有自增主键。通过自增主键来查数据是最快的。

第三，常用的查询字段建立联合索引，写SQL一定要尊从最左原则，用到这个索引。

第四，不要把逻辑运算放到sql里。言外之意是，不要写太复杂的SQL，你能写复杂的SQL 你肯定也能通过PHP实现。

参考：https://cloud.tencent.com/developer/article/1004367

19、数据库中的事务是什么？

事务（transaction）是作为一个单元的一组有序的数据库操作。如果组中的所有操作都成功，则认为事务成功，即使只有一个操作失败，事务也不成功。如果所有操作完成，

事务则提交，其修改将作用于所有其他数据库进程。如果一个操作失败，则事务将回滚，该事务所有操作的影响都将取消。

20、写一个函数，尽可能高效的从一个标准URL中取出文件的扩展名

会 写正则最好。我反正不会正则，需要用的时候就百度。

21、参数为多个日期时间的数组，返回离当前时间最近的那个时间

遍历数组，求当前时间差，和第一个进行对比，小于第一个交换位置。最后取第一个即可。

22、echo、print、print_r的区别

这三个放在一起，回答的点在于，print_r是函数，echo、print是结构语言。

至于他们具体的区别参考：https://www.cnblogs.com/xiaotaoing/p/6687368.html

23、http协议的header中有哪些key及含义

这个问题，很难。一会半会说不清楚。如果做过PHP restful 接口开发，也踩过这里面的坑，那应该是可以答出来常用的几个KEY的。

参考：https://blog.csdn.net/u014175572/article/details/54861813

24、二叉树前中后遍历代码

1.层序遍历
2.先序遍历
3.中序遍历
4.后序遍历

参考：https://blog.csdn.net/wk199351/article/details/65936001

25、PHP的数组和C语言的数组结构上有何区别？

但从PHP来讲，考的是PHP数组的实现。可以简单的认为，PHP的数组是hash桶+十字链表（实际上是数列Array，列表List，散列表/关联数组/字典Hashtable的聚合体）。优点是查询效率很高，遍历很方便，缺点是，占内存较多。（还是空间换时间的思路，毕竟现在内存又不值钱）

C语言的数组，就是定长定类型的数列。

26、Redis的跳跃表怎么实现的

跳跃表(skiplist)是一种有序数据结构，它通过在每个节点中维持多个指向其他节点的指针，从而达到快速访问节点的目的。

参考：https://blog.csdn.net/universe_ant/article/details/51134020

27、哈希是什么？hash冲突后，数据怎么存？

28、聚簇索引，聚集索引的区别？

29、B+Tree是怎么进行搜索的

30、数组和hash的区别是什么？

31、写个函数，判断下面扩号是否闭合，左右对称即为闭合： ((()))，)(())，(())))，(((((())，(()())，()()

32、 找出数组中不重复的值[1,2,3,3,2,1,5]

用普通方法，肯定很容易的。

33、32题你的时间复杂度是多少？有的情况下，你写了个算法，然后面试官会让你把你的算法的时间复杂度表达式写出来

34、PHP的的这种弱类型变量是怎么实现的？

考zval的，PHP的八种类型，本质只有一个结构。

参考：https://blog.csdn.net/ohmygirl/article/details/41542445

35、在HTTP通讯过程中，是客户端还是服务端主动断开连接？

三次握手和四次挥手，以及他们每步的状态。

这个问题最好能一步到位回答的全面的。一般都是有客户端告诉服务端，我这边东西发完了，可以断连接了么。但是如果客户端发完FIN服务端没有回复，就会重试，直到超过超时时间，就断了。服务端也一样，超过时间，服务端就断了。

36、PHP中发起http请求有哪几种方式？它们有何区别？

GET
POST
HEAD
PUT
DELETE
OPTIONS
TRACE
CONNECT

37、有一颗二叉树，写代码找出来从根节点到flag节点的最短路径并打印出来，flag节点有多个。比如下图这个树中的6和14是flag节点，请写代码打印8、3、6 和 8、10、14两个路径

 



典型的二叉搜索树。大学数据结构的基础题。

参考：https://blog.csdn.net/BaiHuaXiu123/article/details/52488443

38、有两个文件文件，大小都超过了1G，一行一条数据，每行数据不超过500字节，两文件中有一部分内容是完全相同的，请写代码找到相同的行，并写到新文件中。PHP最大允许内内为255M。

将文件拆分成若干个小文件，根据内容计算hash值，分散到不同文件。

39、请写出自少两个支持回调处理的PHP函数，并自己实现一个支持回调的PHP函数

array_map,array_filter, array_walk

40、请写出自少两个获取指定文件夹下所有文件的方法（代码或思路）。

核心方法是scandir,核心思想是递归。

41、请写出自少三种截取文件名后缀的方法或函数（PHP原生函数和自己实现函数均可）

echo substr(strrchr($file, '.'), 1);
 
echo substr($file, strrpos($file, '.')+1);
 
$arr=explode('.', $file);
echo $arr[count($arr)-1];
 
$arr=explode('.', $file);
echo end($arr);
 
echo strrev(explode('.', strrev($file))[0]);
 
echo pathinfo($file)['extension'];
 
echo pathinfo($file, PATHINFO_EXTENSION);
42、PHP如何实现不用自带的cookie函数为客户端下发cookie。对于分布式系统，如何来保存session值。

这个题有点绕。考的还是COOKIE和SESSION的基础知识。服务端通过set-cookie命令来通知客户端保存cookie。

只要按照domain path 过期时间等规则 用header函数就可以实现。

分布式系统session，集中处理。按我们公司的架构，为了实现高可用和高容灾，提供一个分布式的验签服务。具体的可以看下redis的分布式服务架构。

43、请用SHELL统计5分钟内，nginx日志里访问最多的URL地址，对应的IP是哪些？

44、写一段shell脚本实现备份mysql指定库（如test)到指定文件夹并打包，并删除30天前的备份，然后将新的备份推送到远端服务器，完成后送邮件通知。

45、mysql数据库中innodb和myisam引擎的区别

区别主要在数据和索引的存储结构和存储方式上，以及对于事务的支持。

参考：https://blog.csdn.net/chajinglong/article/details/56666771

46、从用户在浏览器中输入网址并回车，到看到完整的见面，中间都经历了哪些过程。

入门问题。这个问题有一个很大的坑，面试官可能会从这个问题下手问你一大堆问题。

以PHP为例：通常最简单的回答，从用户的电脑找到最近的DNS服务，然后解析到对应的IP 然后双方开始HTTP连接，然后发送请求信息，服务器拿到请求信息就开始准备回应的信息，中间要经过nginx转发到frstCGI(PHP-FPM),然后PHP开始解析框架，解析请求头部，找到对应的API，该查数据库查数据，该组装HTML组装HTML，完事了就重新返回给用户。用户拿到返回数据，浏览器开始渲染页面，JS开始加载。

47、如何分析一条sql语句的性能。

explain，具体的请百度。（基本很少用性能分析语句。MYSQL的表设计上尽量冗余一部分字段，避免在MYSQL里处理大量的逻辑运算。我们是做PHP服务开发的，mysql语句能简单尽量简单。逻辑运算的地方可以在PHP里做。）

48、ping一个服务器ping不通，用哪个命令跟踪路由包？

linux:traceroute,windows:tracert
49、$a=[0,1,2,3]; $b=[1,2,3,4,5]; $a+=$b; var_dump($a)等于多少？

基础问题。本质还是考PHP数组的结构和特点。

结果是01235。PHP用数字索引和STRING索引差别还是很大的

参考：http://www.jb51.net/article/38593.htm

50、$a=[1,2,3]; foreach($a as &$v){} foreach($a as $v){} var_dump($a)等于多少;

122
此处有一坑。foreach 完之后，$index , $value 并不会消失保留最后一次赋值。
这里的第一次foreach之后，数组中最后一个元素变成引用，引用变量 $v 继续存在且指向数组的最后一个元素。第二次遍历，因为遍历变量名是 $v , 所以等于说每次遍历都将此次遍历的值修改成最后元素的值，直至到遍历最后一个元素（引用元素），因为此时数组的最后一个元素已被修改成上一个元素的值，最后一次赋值就是 自己==自己。 故最后一个等于倒数第二个

https://learnku.com/articles/7001/php-ray-foreach-and-references-thunder

51、数据库中的存放了用户ID,扣费很多行，redis中存放的是用户的钱包，现在要写一个脚本，将数据库中的扣费记录同步到redis中，每5分钟执行一次。请问要考虑哪些问题？

思路：生产者和消费者模式。这个问题也没有说其他的状态，比如数据库的数据会实时增加么？redis中每个钱包是否有其他服务在读取或者写入啊。什么的。数据库和REDIS放一起，要么考数据一致性，要么考出现锁，导致效率降低。

52、MYSQL主从服务器，如果主服务器是innodb引擎,从服务器是myisam引擎，在实际应用中，会遇到什么问题？

不知道，没用过，为什么这么设计？故意给自己找不愉快？

53、linux中进程信号有哪些？

kill -l 很少用

54、redis的底层实现

面试官这么样问你，你就反问他，你要的底层实现是字段的设计？内存分配管理？网络模型？数据同步？还是分布式的实现？（TIPS:面试就是两个人的博弈。面试官给出一个描述不清晰的问题，我们没必要回答。让他把问题讲清楚再思考怎么回复）

参考：https://cloud.tencent.com/developer/article/1004377

这篇文章 要多读几遍。

55、异步模型

问清楚是IO异步模型。还是AJAX这类的异步请求模型。差别非常大的。

参考：https://cloud.tencent.com/developer/article/1005481

狗东某风控研发必考题。

56、10g文件，用php查看它的行数

粗暴一点的方法 ini_set('memory_limit','-1'); 先把当前内存限制解除了 然后直接逐行统计。时间会非常的久。

有更好的方法请留言。

57、有10亿条订单数据，属于1000个司机的，请取出订单量前20的司机

（TIPS）不要中招。不要用常用思路来处理，10亿数据 你再怎么优化，全表求和，都是要死人的。

我们从设计上解决这个问题。只有一千个司机。我们可以做个简单哈希，分库分表，%求余数。保证这一千个司机分在一千个表里，每个人有每个人的单独表。引擎用MYSAIM，求表中数据的总数，效率飞快，遍历一千张表，求最大前二十即可。

58、设计一个微信红包的功能

没做过。其实题目表达不清楚。如果做过微信公众号开发，知道微信事件模型的XML数据结构，应该会好做一点。

59、根据access.log文件统计最近5秒的qps，并以如下格式显示，01 1000（难点在01序号）

tail -f access.log | awk -F '[' '{print $2}' | awk '{print $1}' | uniq -c
参考：https://blog.csdn.net/dong_007_007/article/details/78330337

60、php7性能为什么提升这么高

不逼逼，直接参考：http://www.laruence.com/php-internal

鸟哥的文章要多读，多读。

61、遍历一个多维数组

递归。array_map传入一个回调函数。

62、有这样一个字符串abcdefgkbcdefab......随机长度，写一个函数来求bcde在这个字符串中出现的次数

substr_count（）；

63、有一个1G大小的一个文件，里面每一行是一个词，词的大小不超过16个字节，内存限制大小是1M。返回频数最高的100个词

方法太多了，但是实现起来 各有各的问题。

我可能只会用HASH映射做。其他的，不会。

参考：第64题。

64、十道海量数据处理面试题与十个方法大总结

> https://blog.csdn.net/v_JULY_v/article/details/6279498
65、php进程模型，php怎么支持多个并发

守护进程模型（需要知道php-fpm的各种配置了）

参考：https://www.jianshu.com/p/542935a3bfa8

66、nginx的进程模型，怎么支持多个并发

这个三言两语说不清楚。

参考：https://www.zhihu.com/question/22062795

67、php-fpm各配置含义，fpm的daemonize模式

php-fpm 的配置并不多，常用的就更少了。

参考：http://www.4wei.cn/archives/1002061

static - 子进程的数量是固定的（pm.max_children）
ondemand - 进程在有需求时才产生（当请求时，与 dynamic 相反，pm.start_servers 在服务启动时即启动
dynamic - 子进程的数量在下面配置的基础上动态设置：pm.max_children，pm.start_servers，pm.min_spare_servers，pm.max_spare_servers
68、让你实现一个简单的架构，并保持高可用，两个接口，一个上传一条文本，一个获取上传的内容，你怎么来设计？要避免单机房故障，同时要让代码层面无感。

参考：分布式架构设计必备CAP原理。

69、两台mysql服务器，其中一台挂了，怎么让业务端无感切换，并保证正常情况下讲台服务器的数据是一致的

不是核心业务的话，先停写，把备机拉起来，查看两台机器的日志，进行数据补偿，开写。

如果是核心业务的话，现在所有的写操作都在正常的状态机器上。把好的这台机器的备机拉起来，当主机。

以上全是应急操作。实际上数据库的容灾设计要复杂的多。

面试官要是问你，备机的数据不一致怎么办，你要勇敢怼回去，你们每秒多少写入操作。按照百万级表，每秒1000的写入效率，正常的设计是，分布在2台机器上每台500。这个级别的数据同步，出现差异的概率 可以忽略不计的。有一台出现问题，另一台也可以抗住。

（正常的操作，还是先停写，等数据一致，切换，开写。我们公司搞这些切换都是在凌晨4.00左右，核心业务的每秒写操作，只有十几个。前后耽搁不到20秒）。

70、http协议具体的定义

这种题 有是很难回答的。太宽泛了，我们面试早就不问这种问题了。

参考：日本人写的《图解HTTP》

71、什么是锁，怎么解决锁的问题

计算机原理学的，生产者消费者模型，银行家模型，都可以解决锁的问题。

72、rand与mt_rand的区别

我实习的时候遇到这个坑。

说是mt_rand比rand快4倍。

在随机数区间不大的情况下并没有很大的效率差距。但是出现重复数的几率，rand要比mt_rand高很多。

73、mysql事务隔离是怎么实现的

通过各种行锁表锁，各种乐观锁悲观锁，排他锁实现的呀。

74、mysql的锁怎么实现的

https://blog.csdn.net/alexdamiao/article/details/52049993

https://www.cnblogs.com/luyucheng/p/6297752.html

https://blog.csdn.net/tangkund3218/article/details/47704527

75、对称加密和非对称加密的方式

对称加密：我们俩共用一个秘钥，你加密，我解密。

非对称加密：我给你一个公钥，你加密完了，我还能有我的私钥把密文解开。但是你没有我的私钥。

扩展：椭圆加密算法。

76、10瓶水，其中一瓶有毒，小白鼠喝完有毒的水之后,会在24小时后死亡,问:最少用几只小白鼠可以在24小时后找到具体是哪一瓶水有毒。

四只

二进制问题。薛定谔的老鼠。

一只老鼠有两个状态，死活，对应01。假设老鼠的个数为A，则有2^A>=10; A=4；

思路很简单，十瓶药编号：0,1,10,11....1001;

0不喝。第一只老鼠喝所有个位是1的：13579，第二只喝十位是1的，第三只和百位是1的，第四只喝千位是1的。

24小时后，看下死了的是1，活着的是0。按老鼠的顺序乖乖站好……假如第一只和第三只死了，那就是0101，就是5 有问题。

77、redis是如何进行同步的，同步的方式，同步回滚怎么办，数据异常怎么办，同时会问MYSQL的同步方式和相关异常情况

redis 集群主从同步的简单原理

　　Redis的复制功能是基于内存快照的持久化策略基础上的，也就是说无论你的持久化策略选择的是什么，只要用到了Redis的复制功能，就一定会有内存快照发生。

　　当Slave启动并连接到Master之后，它将主动发送一个SYNC命令( 首先Master会启动一个后台进程，将数据快照保存到文件中[rdb文件] Master 会给Slave 发送一个

Ping命令来判断Slave的存活状态 当存活时 Master会将数据文件发送给Slave 并将所有写命令发送到Slave )。

　　Slave首先会将数据文件保存到本地 之后再将 数据 加载到内存中。

　　当第一次链接 或者是 故障后 重新连接 都会先判断Slave的存活状态 在做全部数据的同步 ， 之后只会同步Master的写操作(将命令发送给Slave)

问题：

　　当 Master 同步数据时 若数据量较大 而Master本身只会启用一个后台进程 来对多个Slave进行同步 ， 这样Master就会压力过大 ， 而且Slave 恢复的时间也会很慢！

redis 主从复制的优点：

  (1)在一个Redis集群中，master负责写请求，slave负责读请求，这么做一方面通过将读请求分散到其他机器从而大大减少了master服务器的压力，另一方面slave专注于提供
读服务从而提高了响应和读取速度。

　　(2)在一个Redis集群中，如果master宕机，slave可以介入并取代master的位置，因此对于整个Redis服务来说不至于提供不了服务，这样使得整个Redis服务足够安全。

　　(3)水平增加Slave机器可以提高性能

参考：

https://blog.csdn.net/hxpjava1/article/details/78347890/
https://www.cnblogs.com/zhao-blog/p/6131524.html
78、怎么解决跨域

JSONP
添加响应头，允许跨域
代理的方式
79、json和xml区别,各有什么优缺点

（1）可读性方面：基本相同，XML的可读性比较好；

（2）可扩展性方面：都具有良好的扩展性；

（3）编码难度方面：相对而言，JSON的编码比较容易；

（4）解码难度：JSON的解码难度基本为零，XML需要考虑子节点和父节点；

（5）数据体积方面：JSON相对于XML来讲，数据体积小，传递的速度比较快；

（6）数据交互方面：JSON与javascript的交互更加方便，更容易解析处理，更好的数据交互；

（7）数据描述方面：XML对数据描述性比较好；

（8）传输速度方面：JSON的速度远远快于XML。

参考：https://blog.csdn.net/java19880223/article/details/20054111

80、Trait优先级

在trait继承中，优先顺序依次是：来自当前类的成员覆盖了 trait 的方法，而 trait 则覆盖了被继承的方法

81、a引用b，报错c里面类重复定义，循环引用会出现什么问题

82、下面员工3的薪水大于其主管的薪水，一条SQL找到薪水比下属低的主管

id	username	salary	pid
1	a	3000	null
2	b	8000	null
3	c	5000	1
4	d	6000	3
SELECT a.*, b.*
FROM `user` as a
LEFT JOIN `user` as b ON a.pid = b.id AND a.salary > b.salary
WHERE b.id > 0;
82、在一个坐标系内有一个N个点组成的多边形,现在有一个坐标点,写代码或思路来判断这个点是否处于多边形内

83、数据库如果出现了死锁,你怎么排查,怎么判断出现了死锁?

https://www.cnblogs.com/huanyou/p/5775965.html

84、写一个一个程序来查找最长子串

http://www.jb51.net/article/128449.htm

85、分析一个问题:php-fpm的日志正常,但客户端却超时了,你认为可能是哪里出了问题,怎么排查?

检查nginx log，请求是否达到nginx 和是否正常转发给 php-fpm

86、nginx的工作流程是什么样的,可以画图描述

87、进程间通信方式有哪些

1)管道
管道分为有名管道和无名管道
无名管道是一种半双工的通信方式,数据只能单向流动,而且只能在具有亲缘关系的进程间使用.进程的亲缘关系一般指的是父子关系。无明管道一般用于两个不同进程之间的通信。当一个进程创建了一个管道,并调用fork创建自己的一个子进程后,父进程关闭读管道端,子进程关闭写管道端,这样提供了两个进程之间数据流动的一种方式。
有名管道也是一种半双工的通信方式,但是它允许无亲缘关系进程间的通信。

2)信号量
信号量是一个计数器,可以用来控制多个线程对共享资源的访问.,它不是用于交换大批数据,而用于多线程之间的同步.它常作为一种锁机制,防止某进程在访问资源时其它进程也访问该资源.因此,主要作为进程间以及同一个进程内不同线程之间的同步手段.

3)信号
信号是一种比较复杂的通信方式,用于通知接收进程某个事件已经发生.

4)消息队列
消息队列是消息的链表,存放在内核中并由消息队列标识符标识.消息队列克服了信号传递信息少,管道只能承载无格式字节流以及缓冲区大小受限等特点.消息队列是UNIX下不同进程之间可实现共享资源的一种机制,UNIX允许不同进程将格式化的数据流以消息队列形式发送给任意进程.对消息队列具有操作权限的进程都可以使用msget完成对消息队列的操作控制.通过使用消息类型,进程可以按任何顺序读信息,或为消息安排优先级顺序.

5)共享内存
共享内存就是映射一段能被其他进程所访问的内存,这段共享内存由一个进程创建,但多个进程都可以访问.共享内存是最快的IPC(进程间通信)方式,它是针对其它进程间通信方式运行效率低而专门设计的.它往往与其他通信机制,如信号量,配合使用,来实现进程间的同步与通信.

6)套接字：可用于不同及其间的进程通信

88、主从复制，从服务器会读取到主服务器正在回滚的数据吗？主数据库写成功，从服务器因为一些原因写失败，最后会出现什么情况？主从复制如果键冲突怎么办？

不会；主从数据不一致；正常是不会出现这种情景，具体看情况，是否可以修复，恢复到之前的时间点，然后追回同步。

89、事务有几种隔离级别？事务的隔离级别是怎么实现的?

读未提交（read-uncommitted）
不可重复读（read-committed）
可重复读（repeatable-read）
串行化（serializable）
https://www.cnblogs.com/huanongying/p/7021555.html

90、什么是B+树,请画b+树的结构

https://blog.csdn.net/qq_23217629/article/details/52510485

91、mysql中的字符集，客户端与数据库不一致，怎么办? MYSQL中字符串到显示到界面,字符转换的过程是怎样的？数据库中的字符集是latin1,你现在将utf8的字符串存到latin1字符集的数据库表,你能将utf8的字符串存进去吗？假如你说能存,追问:能否恢复?假如能,那怎么恢复?

92、写一段代码，找到所有子集合，如[a,b,c]的子集合有{},{a},{b},{c},{ab},{ac},{abc}

93、['a'=>200,'b'=>100,'c'=>100],写一个自定义排序函数，按值降序,如果值一样，按键排序

冒泡排序

94、设计一个缓存系统，可以定期或空间占满之后自动删除长期不用的数据，不能使用用遍历。

我当时的答案是用链表来存,缓存命中就将该缓存移到链表头,然后链表尾就都是冷数据了。
我记得之前是在哪里看过这个设计,但我忘记在连接了,请知道朋友的把连接贴上来。

95、==和===的区别，写出以下输出："aa"==1,"bb"==0，1=="1"

== 等于，不需要对比数据类型
=== 全等，需要对比类型
false, true, true

96、一个排序好的数组,将它从中间任意一个位置切分成两个数组,然后交换它们的位置并合并，合并后新数组元素如:20,21,22,25,30,1,2,3,5,6,7,8,15,18,19,写一个查询函数来查找某个值是否存在。

97、设计一个树形结构，再写一个函数对它进行层序遍历

98、'$var'和"$var"的区别

双引号串中的内容可以被解释而且替换，而单引号串中的内容总被认为是普通字符。

在单引号串中甚至反斜杠也失去了他的扩展含义（除了插入反斜杠\和插入单引号\'）。所以，当你想在字串中进行变量代换和包 含\n（换行符）等转义序列时，你应该使用双引号。单引号串可以用在其他任何地方，脚本中使用单引号串处理速度会更快些。

99、self和static的区别

static：如果在子类中重写了父类中的static方法、属性，父类就会去访问了子类的static方法

self: 是类内指针，不管子类有没有重写过父类中的方法、属性都指向本类的静态方法、属性

100、PHP的协程以及用途

http://www.laruence.com/2015/05/28/3038.html

https://blog.csdn.net/gavin_new/article/details/54603490

101、描述autoload的机制

https://blog.csdn.net/zhihua_w/article/details/52723402

102、mysql中字段类型各占几个字节：smallint、int、bigint、datetime、varchar(8)

smallint 2字节
int 4字节
bigint 8字节
datetime 8字节
varchar(8) 8*3字节
http://www.jb51.net/article/55853.htm

103、哪些属性唯一确定一条TCP连接

104、myisam和innodb的区别，为什么myisam比innodb快，myisam和innodb的索引数据结构是什么样的?innodb主键索引和非主键索引的区别?其索引上存放的数据是什么样的？

区别主要在数据和索引的存储结构和存储方式上，以及对于事务的支持。

参考：https://blog.csdn.net/chajinglong/article/details/56666771

105、断开TCP连接时，timewait状态会出现在发起分手的一端还是被分手的一端

为什么建立TCP连接需要三次握手？
原因：为了应对网络中存在的延迟的重复数组的问题
例子：
假设client发起连接的连接请求报文段在网络中没有丢失，而是在某个网络节点长时间滞留了，导致延迟到达server。本来这是一个已经失效的连接报文，但是server接收到这个连接报文之后，误认为client发起了新的连接，于是向client发送确认报文段。此时因为没有了连接的3次握手，client不会对server的确认报文作出回应，也不会向server发送数据，server就以为连接已经建立，一直在空等client的数据，这样server的这一部分网络资源就被浪费了。

为什么断开TCP连接需要进行四次握手 ？
因为TCP连接是全双工的网络协议，允许同时通信的双方同时进行数据的收发，同样也允许收发两个方向的连接被独立关闭，以避免client数据发送完毕，向server发送FIN关闭连接，而server还有发送到client的数据没有发送完毕的情况。所以关闭TCP连接需要进行四次握手，每次关闭一个方向上的连接需要FIN和ACK两次握手。

TIME_WAIT状态的意义

在TCP连接中，当被动关闭连接的一方(图中client)发送的FIN报文到达时，被动关闭连接的一方会发送ACK确认报文，并且进入TIME_WAIT状态，并且等待2MSL时间段(MSL:maximum segment life)。这么做有下述两个原因：

被动关闭连接的一方(图中的server)在一段时间内没有收到对方的ACK确认数据包，会重新发送FIN数据包，因而主动关闭连接的一方需要停留在等待状态以处理对方重新发送的FIN数据包。否则他会回应一个RST数据包给被动关闭连接的一方，使得对方莫名其妙。

在TIME_WAIT状态下，不允许应用程序在当前ip和端口上和之前通信的client(这个client的ip和端口号不变)建立一个新的连接。这样就能避免新的连接收到之前的ip和端口一致的连接残存在网络中的数据包。这也是TIME_WAIT状态的等待时间被设置为2MSL的原因，以确保网络上当前连接两个方向上尚未接收的TCP报文已经全部消失。

https://www.cnblogs.com/zhoudayang/p/6012257.html

106、AWK各种数据分析考得非常多，要多练习，题目不再一一写了

107、redis中集合、有序集合、hyperLog、hash的数据结构是啥样的

key value

108、描述一下:一个请求到达nginx的全部处理过程（nginx自身会调用哪些逻辑）、然后怎么与php通信，中间的流程是什么样的等等？

https://www.jianshu.com/p/df89b530db89

https://blog.csdn.net/xiajun07061225/article/details/9309273

109、nginx和php-fpm的相关配置,随便问里面各种参数啥意思

php-fpm可以通过tcp socket和unix socket两种方式实现。

https://blog.csdn.net/koastal/article/details/52303316

110、假如有一张地图,如下图,"-"代表海洋、"+"代表陆地,用你最擅长的方式,取出陆地的坐标。

--++----++--+++---
-++++----+++++++--
-+++----++++------
-----++------++++-
---++++++-----+++-
-----+++------+++-
比如上图在数组中表示成,1表示成陆地,0表示海洋:

[
    [0,0,1,1,0,0,0,1,1....],
    [0,1,1,1.....],
]
写个算法取出所有陆地的坐标,并按块放到一起,如地图上左上角第一个陆地的坐标是:

[
    [0,2],[0,3],
    [1,1],[1,2],[1,3],[1,4],
    [2,1],[2,2],[2,3]
]
111、Jsonp的实现原理，你还知道哪些跨域方式？

JSONP
添加响应头，允许跨域
代理的方式
112、如果某个博客通过判断 referer 方式来进行图片防盗链，如何破解？

curl 设置来源地址来欺骗对方服务器验证

113、简述 mysql 查询优化的本质，并举2个例子

114、设计一个秒杀系统，如何保证商品不超卖？

https://blog.csdn.net/zhoudaxia/article/details/38067003

115、单例模式的优点是什么？抽象类是什么？ 还了解哪些设计模式？

单例模式又称为职责模式，它用来在程序中创建一个单一功能的访问点，通俗地说就是实例化出来的对象是唯一的。
所有的单例模式至少拥有以下三种公共元素：

它们必须拥有一个构造函数，并且必须被标记为private
它们拥有一个保存类的实例的静态成员变量
它们拥有一个访问这个实例的公共的静态方法
单例类不能再其它类中直接实例化，只能被其自身实例化。它不会创建实例副本，而是会向单例类内部存储的实例返回一个引用。
抽象的类不能被实例化。任何一个类，如果它里面至少有一个方法是被声明为抽象的，那么这个类就必须被声明为抽象的。被定义为抽象的方法只是声明了其调用方式（参数），不能定义其具体的功能实现。

https://www.cnblogs.com/kangxl/p/6347179.html

工厂模式
适配器模式

116、斗地主中，地主比农民得到王炸的概率多多少？

# php面试相关

## tip

这个文档只是一个提纲，以及一些可能的考点或者demo代码。列出了大概的技术栈，每一个点都需要花更多的时间去深入钻研，万不能只看一点点皮毛就去面试。而应该在广泛学习的基础上，通过文档里的每一个点引出无数个思维方向，从而在大脑里形成一个自己的知识树，明白自己的欠缺，不断学习，丰富自己的技术栈。

## redis

Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

redis包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hashs（哈希类型）。这些数据类型都 支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。

#### php中reids的操作

```php
// from 菜鸟runoob
// 从代码中以点带面，在什么样的场景中会运用到

// 配置连接的IP、端口、以及相应的数据库
$server = array(
‘host’     => ’127.0.0.1′,
‘port’     => 6379,
‘database’ => 15
);
$redis = new Client($server);

// 普通set/get操作
$redis->set(‘library’, ‘predis’);
$retval = $redis->get(‘library’);
echo $retval; //显示 ‘predis’

$redis->exists(‘foo’);//true

// del 删除
$redis->del(‘foo’);//true

// hset/hget 存取hash表的数据
$redis->hset(‘hash1′,’key1′,’v1′); //将key为’key1′ value为’v1′的元素存入hash1表
$redis->hset(‘hash1′,’key2′,’v2′);
$redis->hget(‘hash1′,’key1′);  //取出表’hash1′中的key ‘key1′的值,返回’v1′

// 同步保存服务器数据到磁盘
$redis->save();
```

## mysql

#### mysql优化怎么做的？

1. 设计角度：存储引擎的选择，字段类型选择，范式

2. 功能角度：可以利用mysql自身的特性，如索引，查询缓存，碎片整理，分区、分表等

3. sql语句的优化方面:尽量简化查询语句，能查询字段少就尽量少查询字段，优化分页语句、分组语句等。

4. 部署大负载架构体系：数据库服务器单独出来，负载大时可以采用主从复制，读写分离机制进行设计

5. 从硬件上升级数据库服务器。

#### sql注入是什么及如何预防sql注入？

SQL注入攻击指的是用户或者黑客通过构建特殊的输入作为参数传入我们的Web应用程序端，而这些输入大都是SQL语法里的一些组合，通过执行SQL语句进而执行攻击者所要的操作，其主要原因是程序员没有细致地过滤用户输入的数据，致使非法数据侵入系统而造成的。因此我们在做开发过程中一定要预防sql注入，主要从两方面着手：

1、占位符的方式，就是对sql语句进行预处理，然后执行sql语句

2、通过addslashes或者mysql_real_escape_string这两个函数对用户输入的值进行转义处理，把一些特殊的字符转义掉。

#### 预处理

预处理语句用于执行多个相同的 SQL 语句，并且执行效率更高。

**预处理语句的工作原理如下**：

1. 预处理：创建 SQL 语句模板并发送到数据库。预留的值使用参数 "?" 标记 。例如：
`INSERT INTO MyGuests (firstname, lastname, email) VALUES(?, ?, ?)`
数据库解析，编译，对SQL语句模板执行查询优化，并存储结果不输出。

2. 执行：最后，将应用绑定的值传递给参数（"?" 标记），数据库执行语句。应用可以多次执行语句，如果参数的值不一样。

相比于直接执行SQL语句，预处理语句有两个主要优点：

1. 预处理语句大大减少了分析时间，只做了一次查询（虽然语句多次执行）。

2. 绑定参数减少了服务器带宽，你只需要发送查询的参数，而不是整个语句。

预处理语句针对**SQL注入**是非常有用的，因为参数值发送后使用不同的协议，保证了数据的合法性。

```php
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

// 设置参数并执行
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();

$stmt->close();
```

#### mysql索引

- **非常重要！**

了解InnoDB和Myisam，B+tree,聚簇索引等等
[InnoDB索引原理详解](https://www.cnblogs.com/shijingxiang/articles/4743324.html)

## MongoDB

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。它支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

SQL术语/概念|MongoDB术语/概念|解释/说明
-|-|-
database|database|数据库
table|collection|数据库表/集合
row|document|数据记录行/文档
column|field|数据字段/域
index|index|索引
table joins| |表连接,MongoDB不支持
primary key|primary key|主键,MongoDB自动将_id字段设置为主键

```php
<?php
// from runoob
$m = new MongoClient(); // 连接默认主机和端口为：mongodb://localhost:27017
$db = $m->test; // 获取名称为 "test" 的数据库

$collection = $db->createCollection("runoob"); // 创建集合

$collection = $db->runoob; // 选择集合
$document = array( 
    "title" => "MongoDB", 
    "description" => "database", 
    "likes" => 100,
    "url" => "http://www.runoob.com/mongodb/",
    "by", "菜鸟教程"
);

// 插入文档
$collection->insert($document);

// 查找文档
$cursor = $collection->find();

// 更新文档
$collection->update(array("title"=>"MongoDB"), array('$set'=>array("title"=>"MongoDB 教程")));

// 删除文档
$collection->remove(array("title"=>"MongoDB 教程"), array("justOne" => true));
?>
```

## composer

Composer 是 PHP5.3以上 的一个依赖管理工具。它允许你声明项目所依赖的代码库，它会在你的项目中为你安装他们。

#### 创建一个 composer.json 文件

```json
{
    "require": {
        "monolog/monolog": "1.2.*"
    }
}
```

## php web相关

#### cookie与session的区别

1. cookie数据存放在客户的浏览器上，session数据放在服务器上。

2. cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗，考虑到安全应当使用session。

3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用COOKIE。

4. 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

#### get和post的区别
1. get是从服务器上获取数据，post是向服务器传送数据。
2. get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。
3. get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。4.. get安全性非常低，post安全性较高。但是执行效率却比Post方法好。

#### php在储存session以什么形式存在

PHP为session的存储提供了三种方式: 文件/ 内存/ 自定义存储,默认是使用文件存储.在访问量大的网站上采用这种方式就不大合 适,因为这样会导致大量的输入输出的冗余.我们可以在php.ini更改配置文件或者php脚本中通过相应的函数来设置session文件的存储类型来改变session文件的存储形式

#### xss攻击怎么防止
  
XSS又称CSS，全称Cross SiteScript(跨站脚本攻击)， XSS攻击类似于SQL注入攻击，是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当用户浏览该网站时，这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie信息、破坏页面结

常见的恶意字符XSS输入：

1. XSS 输入通常包含 JavaScript 脚本，如弹出恶意警告框：
`<script>alert("XSS");</script>`

2. XSS 输入也可能是 HTML 代码段，譬如：

    (1) 网页不停地刷新 `<meta http-equiv="refresh" content="0;">`

    (2) 嵌入其它网站的链接，重定向到其它网站等。

方法：利用php htmlentities()函数

php防止XSS跨站脚本攻击的方法：是针对非法的HTML代码包括单双引号等，使用htmlspecialchars()函数。


#### [静态化如何实现的](https://blog.csdn.net/qq_39618306/article/details/79014438)
这里要说的静态化指的是页面静态化，也即生成实实在在的静态文件，也即不需要查询数据库就可以直接从文件中获取数据，指的是真静态。它的实现方式主要有两种：

- 一种是我们在添加信息入库的时候就生成的静态文件，也称为模板替换技术，这种主要用在后台，用于一些基本上很少变化的信息上，在添加信息的时候使用添加的信息来替换制定好的模板中的内容，达到生成静态文件的目的，这样在前台访问该信息时，可以直接从生成好的静态文件中获取信息，如一些CMS系统。

- 另外一种是用户在访问我们的页面时先判断是否有对应的缓存文件存在，如果存在就读缓存，不存在就读数据库，同时生成缓存文件。这种实现的主要原理是基于PHP中的ob缓冲技术来实现的，当没有静态文件时，从数据库中读取，读取的数据使用OB缓存，使用相关的函数从OB缓冲中读取数据，写入到文件中，形成静态文件。当然这个过程中要考虑静态文件的缓存周期问题，我们可以根据文件的最后修改时间和当前时间及设定的缓存时间来定时更新缓存文件。

#### 如何处理负载、高并发
从低成本、高性能和高扩张性的角度来说有如下处理方案：

1. HTML静态化
其实大家都知道，效率最高、消耗最小的就是纯静态化的html页面，所以我们尽可能使我们的 网站上的页面采用静态页面来实现，这个最简单的方法其实也是最有效的方法。

2. 图片服务器分离
把图片单独存储，尽量减少图片等大流量的开销，可以放在一些相关的平台上，如骑牛等

3. 数据库集群和库表散列及缓存
数据库的并发连接为100，一台数据库远远不够，可以从读写分离、主从复制，数据库集群方面来着手。另外尽量减少数据库的访问，可以使用缓存数据库如memcache、redis。

4. 镜像：
尽量减少下载，可以把不同的请求分发到多个镜像端。

5. 负载均衡：
Apache的最大并发连接为1500，只能增加服务器，可以从硬件上着手，如F5服务器。当然硬件的成本比较高，我们往往从软件方面着手。
**负载均衡**建立在现有网络结构之上，它提供了一种廉价有效透明的方法扩展网络设备和服务器的带宽、增加吞吐量、加强网络数据处理能力，同时能够提高网络的灵活性和可用性。目前使用最为广泛的负载均衡软件是Nginx、LVS、HAProxy。
- 知识点： [反向代理](https://www.cnblogs.com/Anker/p/6056540.html)

## 服务器

心中有概念，然后足够的实际操作。

#### Apache

[百度百科介绍](https://baike.baidu.com/item/apache/6265)

#### Nginx

[百度百科介绍](https://baike.baidu.com/item/nginx/3817705)

## php特性

#### PHP 的垃圾收集机制是怎样的
php作为脚本语言是页面结束即释放变量所占内存的。 当一个 PHP线程结束时，当前占用的所有内存空间都会被销毁，当前程序中所有对象同时被销毁。GC进程一般都跟着每起一个SESSION而开始运行的.gc目的是为了在session文件过期以后自动销毁删除这些文件.在PHP中，没有任何变量指向这个对象时，这个对象就成为垃圾。PHP会将其在内存中销毁；这是PHP的GC垃圾处理机制，防止内存溢出。 执行这些函数也可以起到回收作用__destruct /unset/mysql_close /fclose php对session有明确的gc处理时间设定session.gc_maxlifetime 如果说有垃圾，那就是整体的程序在框架使用中，会多次调用同一文件等等造成的非单件模式等。所以在出来的时候，必要的用_once引用，在声明类的时候使用单件模式。还有简化逻辑等等。

#### zval

[内存管理](https://www.jianshu.com/p/63a381a7f70c)

[垃圾回收机制](http://php.net/manual/zh/features.gc.php)

#### cgi、fastcgi、php-fpm

- **cgi**
早期的web server只可以处理简单的静态web文件，但是随着技术的发展出现动态语言如PHP，Python。PHP语言交给PHP解析器进行处理，但是处理之后如何和web server进行通信呢？
为了解决不同的语言处理器与web server之间的通讯，出现了CGI协议。只要按照CGI协议编写程序，就可以实现与语言解析器与web server之间的通讯。
CGI协议虽然解决了语言解析器和seb server之间通讯的问题，但是它的效率很低。因为web server每收到一个请求都会创建一个CGI进程，PHP解析器都会解析php.ini文件，初始化环境，请求结束的时候再关闭进程。对于每一个创建的CGI进程都会执行这些操作。所以效率很低。

- **FastCGI**
FastCGI是用来提高CGI性能的，FastCGI每次处理完请求之后不会关闭掉进程。而是保留这个进程，使这个进程可以处理多个请求。这样的话每个请求都不用再重新创建一个进程了。大大提升了处理效率。

- **PHP-FPM**
PHP-FPM(FastCGI Process Manager：FastCGI进程管理器)是一个实现了Fastcgi的程序，并且提供进程管理的功能。进程包括master进程和worker进程。master进程只有一个，负责监听端口，接受来自web server的请求。worker进程一般会有多个，每个进程中会嵌入一个PHP解析器，进程PHP代码的处理。

#### php.ini中的safe_mode 影响
**Warning
本特性已自 PHP 5.3.0 起废弃并将自 PHP 5.4.0 起移除。**

1)用户输入输出函数（fopen()file()require(),只能用于调用这些函数有相同脚本的拥有者）

2)创建新文件（限制用户只在该用户拥有目录下创建文件）

3)用户调用popen()systen()exec()等脚本，只有脚本处在safe_mode_exec_dir配置指令指定的目录中才可能

4)加强HTTP认证，认证脚本拥有者的UID的划入认证领域范围内，此外启用安全模式下，不会设置PHP_AUTH

5)mysql服务器所用的用户名必须与调用mysql_connect()的文件的拥有者用户名相同6)

受影响的函数变量以及配置命令达到40个

#### php的设计模式

1. **单例模式**
一个类在整个应用中，只有一个对象实例的设计模式
类必须自行创建这个实例
必须自行向整个系统提供这个实例
**三私**：私有静态成员变量、构造函数、克隆函数
**一公**：公共的静态方法

2. **工厂模式**
可以根据输入的参数或者应用程序配置的不同,创建一种专门用来实例化并返回其它类的实例的类

3. 观察者模式
观察者模式提供了组件之间紧密耦合的另一种方法。
该模式：一个对象通过添加一个方法（该方法允许另一个对象，即观察者注册自己）全本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。这些观察者使用该信息执行的操作与可观察的对象无关。

4. 命令链模式：
以松散耦合主题为基础，发送消息、命令和请求，或通过一组处理程序发送任意内容。每个处理程序都会自行判断自己能否处理请求，如果可以，该请求被处理，进程停止。

5. 策略模式：
此算法是从复杂类提取的，因而可以方便地替换。

## php语法

#### Include和require的区别

require函数通常放在PHP程序的最前面，在PHP程序执行之前，就会先读取require指定引入的文件，使它变成PHP程序网页的一部分。

include函数一般是放在流程控制的处理部分中。PHP程序在读到include的文件时，才将它读进来，这种方式可以把程序执行时的流程简单化。

他们两个的用途是一样的，不一定非要哪个放在最前面哪个放在中间，他们最根本的区别在于错误处理的方式不一样。

require一个文件存在错误的话，那么程序就会中断执行，并显示致命错误

而include一个文件存在错误的话，那么程序不会中断，会继续执行，并显示一个警告的错误

其它区别：include有返回值，而require没有。

#### PHP的变量类型

**四种标量类型**

1. boolean （布尔型）：这是最简单的类型，只有两种取值，可以为 TRUE/true 或 FALSE/false ，不区分大小写。详细请查看：PHP布尔类型（boolean）

2. integer （整型）：在32 位操作系统中它的有效范围是：-2 147 483 648~+2 147 483 647。整型值可以使用十进制，十六进制或八进制表示，前面可以加上可选的符号（- 或者 +）。八进制表示数字前必须加上 0（零），十六进制表示数字前必须加上 0x。

3. float （浮点型, 也称作 double)

4. string （字符串）：字符型变量不同于其他编程语言有字符与字符串之分，在PHP 中，统一使用字符型变量来定义字符或者字符串。

**两种复合类型**

1. array （数组）：数组型变量是一种比较特殊的变量类型，将在后续章节中详细说明。

2. object （对象）：对象也是一种特殊的数据类型。要创建object变量，请使用 new 关键字。详细请查看：PHP对象类型（object）

**两种特殊类型**：

1. resource（资源）：源是一种特殊变量，保存了到外部资源的一个引用。资源是通过专门的函数来建立和使用的。详情请查看：PHP资源类型（resource）

2. NULL（NULL）：表示一个变量没有值。NULL 类型唯一可能的值就是 NULL。

#### 单引号与双引号的区别
1. 单引号内部的变量不会执行， 双引号会执行

2. 单引号解析速度比双引号快。

3. 单引号只能解析部分特殊字符，双引号可以解析所有特殊字符。

## php扩展

#### GD库

图像处理扩展
[GD 和图像处理 函数](http://php.net/manual/zh/ref.image.php)

#### yaf
[Yet Another Framework](http://php.net/manual/zh/book.yaf.php)

#### curl

[Client URL](http://php.net/manual/zh/book.curl.php)

#### mysqli

[mysql增强版](http://php.net/manual/zh/book.mysqli.php)

## php7

[php7新特性](http://www.runoob.com/w3cnote/php7-new-features.html)

- ??运算符(NULL 合并运算符)

由于日常使用中存在大量同时使用三元表达式和 isset()的情况，NULL 合并运算符使得变量存在且值不为NULL， 它就会返回自身的值，否则返回它的第二个操作数。

```php
<?php
// 如果 $_GET['user'] 不存在返回 'nobody'，否则返回 $_GET['user'] 的值
$username = $_GET['user'] ?? 'nobody';
// 类似的三元运算符
$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
?>
```

- <=> 太空船操作符（组合比较符）

太空船操作符用于比较两个表达式。当a大于、等于或小于b时它分别返回-1、0或1。

```php
<?php
// 整型
echo 1 <=> 1; // 0
echo 1 <=> 2; // -1
echo 2 <=> 1; // 1

// 浮点型
echo 1.5 <=> 1.5; // 0
echo 1.5 <=> 2.5; // -1
echo 2.5 <=> 1.5; // 1
 
// 字符串
echo "a" <=> "a"; // 0
echo "a" <=> "b"; // -1
echo "b" <=> "a"; // 1
?>
```

- 通过 define() 定义常量数组

```php
<?php
define('ANIMALS', [
    'dog',
    'cat',
    'bird'
]);

echo ANIMALS[1]; // 输出 "cat"
?>
```

- 整除

新增了整除函数 intdiv()

```php
<?php
var_dump(intdiv(10, 3));
// 输出结果： int(3)
?>
```

## php优化

[48条高效率的PHP优化写法](https://www.awaimai.com/1050.html)

## 操作系统相关

操作系统是本科计算机中可以说是非常重要的课程，一定要认真复习。

#### linux常用命令及工具
`ps aux` 查看进程pid等常用
`grep` 过滤，-E支持表达式
`curl` 发起一次请求
`kill -9 pid` 杀死进程
`top` linux版任务管理器，查看当前进程占用内存CPU
`wc -l` 计算行数
`tail -f file` 实时查看文件变化
`contab` 定时任务工具
……

#### 进程各个状态

[进程的状态和转换详解](https://blog.csdn.net/qwe6112071/article/details/70473905)

## 网络相关

[TCP/IP - 百度百科](https://baike.baidu.com/item/TCP/IP%E5%8D%8F%E8%AE%AE)

[HTTP协议详解](http://www.cnblogs.com/ranyonsue/p/5984001.html)

#### http状态码

**12345法则**
- 1** 消息
100  客户端应当继续发送请求。
- 2** 成功
200 成功
- 3** 重定向
301 永久重定向，例如http定向到https
302 临时重定向，例如js跳转
- 4** 请求错误
403 forbidden 拒绝请求。
404 not found 找不到请求的网页。
- 5** 服务器错误
500 Internal Server Error 服务器内部错误，例如php代码错误

#### http版本

##### 1.0

- 无状态、无连接。
HTTP1.0规定浏览器和服务器保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接，服务器处理完成后立即断开TCP连接（无连接），服务器不跟踪每个客户端也不记录过去的请求（无状态）。

- 队头阻塞
HTTP1.0规定下一个请求必须在前一个请求响应到达之前才能发送。假设前一个请求响应一直不到达，那么下一个请求就不发送，同样的后面的请求也给阻塞了。

##### 1.1

- 长连接
HTTP1.1增加了一个Connection字段，通过设置Keep-Alive可以保持HTTP连接不断开，避免了每次客户端与服务器请求都要重复建立释放建立TCP连接，提高了网络的利用率。如果客户端想关闭HTTP连接，可以在请求头中携带Connection: false来告知服务器关闭请求。

- 管道化
基于HTTP1.1的长连接，使得请求管线化成为可能。管线化使得请求能够“并行”传输。

- 新的字段
如cache-control，支持断点传输，以及增加了Host字段（使得一个服务器能够用来创建多个Web站点）。

##### 2.0

- 二进制分帧
HTTP2.0通过在应用层和传输层之间增加一个二进制分帧层，突破了HTTP1.1的性能限制、改进传输性能。

- 多路复用（连接共享）
HTTP2.0实现了真正的并行传输，它能够在一个TCP上进行任意数量HTTP请求。而这个强大的功能则是基于“二进制分帧”的特性。

- 头部压缩
HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。

- 服务器推送
服务器除了对最初请求的响应外，服务器还可以额外的向客户端推送资源，而无需客户端明确的请求。

#### http和https的区别

||http|https|
-|-|-
端口|80|443
内容|明文传输|加密传输
安全|无状态|需要安全证书

HTTPS 约等于 HTTP+SSL
- 优点
相对安全/SEO排名更高
- 缺点
证书需要申请，服务器资源占用更高，连接建立需要传送证书，速度更慢.

#### TCP/IP

[四层模型及OSI七层参考模型](https://blog.csdn.net/guoguo527/article/details/52078962)

[三次握手四次挥手](https://www.cnblogs.com/Jessy/p/3535612.html)

简略快速回忆版：
- 三次握手
客户端：我要和你通信(syn-sent)
服务端：你的请求已收到，发送确认(syn-rcvd)
客户端：你的确认已收到，连接建立(est)

- 四次挥手
客户端：我没有东西了，准备关闭(fin-wait)
服务端：你的关闭我收到了，但我还有点东西没传完(close-wait)
……一段时间后……
服务端：我的东西传完了，可以关闭了(last-ack)
客户端：收到关闭通知，你也可以关闭了(time-wait)

## 算法相关

各种数据结构，栈图树；各种算法，动态规划balabala

中等难度算法题在解答基础上提高速度，高级算法题能够有思路，不求ac，至少通过一部分。


## Phpstudy升级到Mysql8

### 下载

下载安装包mysql8.0,如果你想要下载其它版本可以选择：mysql历史版本地址。

将phpstudy的mysql目录重命名为Mysqlbak。

然后把下载好的新版本的mysql解压到这个目录里。我的是F:\phpStudy\MySQL

### 安装
编辑my.ini文件，下载的mysql8默认是没有my.ini的，复制原来的(Mysqlbak目录下的)一份my.ini到mysql目录下，注意Mysql8的新特性和配置，原来的my.ini是不能直接用的。需要改下，比如修改后我的my.ini
```
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
```

### 启动
接下来我们来启动下 MySQL 数据库：

以管理员身份打开 cmd 命令行工具（可以到C盘system32下的cmd.exe右键管理员运行），切换目录：

我的是在F盘，先转到F盘先，然后再初始化MYSQL
```
C:\Users\Administrator>F:

F:\>cd F:\phpStudy\MySQL\bin

F:\phpStudy\MySQL\bin>mysqld --initialize --console
```

如果安装成功后，会出现mysql密码了比如上面我的是：+HVW8Qi(RT/d

然后继续安装
```
mysqld install

```

### 启动服务器
```
net start mysql
```
phpStudy自带的mysql是5.5版本的，无法启动 mysql了 这是为什么？？？ 

原因是phpStudy为我们注册了一个MySQL服务，而我们用mysql -install命令安装Mysql的时候注册 了一个MySQL所以问题来了，两者冲突了。解决办法 很简单，打开CMD命令输入 sc delete MySQL 　

启动成功后，输入密码登录

注意：

因为mysql8.0的密码加密方式跟之前的保存方式不一样，所以要转码，Navicat 或 phpstudy才能连接得

更改密码：
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '这里输入你的密码自行修改';
```

到此mysql8更新成功，接下来测试下phpstudy启动服务试下：
先停掉Mysql服务：net stop mysql

切换到phpstydy客户度界面，我重启服务看下

 OK
 
## phpStudy2018 升级mysql版本，解决启动问题
点击phpStudy->其他选项菜单->服务管理器->MySQL->安装服务，点击phpStudy->其他选项菜单->服务管理器->打开服务管理->MySQL->安装服务

应该有个MySQL和MySQLa，mysqla既然是phpstudy帮你注册的服务，那你自己mysqld -install的注册的服务是mysql。执行sc delete mysql,再启动phpstudy就好了。假如phpstudy安装失败的话，记得要把执行sc delete mysql。skip-grant-tables，这个是跳过验证的，自己设置密码吧。

## php-fpm配置文件详解

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