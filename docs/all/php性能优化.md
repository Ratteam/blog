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