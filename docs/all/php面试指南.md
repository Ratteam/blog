https://github.com/laravel-china/php-the-right-way

https://github.com/Twipped/InterviewThis

https://github.com/nineyang/clean-php-code

https://github.com/xingshaocheng/architect-awesome

https://github.com/CyC2018/CS-Notes

https://github.com/wudi/PHP-Interview-Best-Practices-in-China

https://github.com/colinlet/PHP-Interview-QA

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
