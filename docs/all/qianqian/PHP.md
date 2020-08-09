<TOC />

## 基础篇

### Include和require的区别
```
1.require函数通常放在PHP程序的最前面，在PHP程序执行之前，
就会先读取require指定引入的文件，使它变成PHP程序网页的一部分。

2.include函数一般是放在流程控制的处理部分中。PHP程序在读到include的文件时，
才将它读进来，这种方式可以把程序执行时的流程简单化。

3.他们两个的用途是一样的，不一定非要哪个放在最前面哪个放在中间，
他们最根本的区别在于错误处理的方式不一样。

4.require一个文件存在错误的话，那么程序就会中断执行，并显示致命错误

5.include一个文件存在错误的话，那么程序不会中断，会继续执行，并显示一个警告的错误

6.其它区别：include有返回值，而require没有。
```

### PHP的变量类型
```
四种标量类型
1. boolean （布尔型）：这是最简单的类型，只有两种取值，可以为 TRUE/true 或 FALSE/false ，
不区分大小写。
2. integer （整型）：在32 位操作系统中它的有效范围是：-2 147 483 648~+2 147 483 647。
整型值可以使用十进制，十六进制或八进制表示，前面可以加上可选的符号（- 或者 +）。
八进制表示数字前必须加上 0（零），十六进制表示数字前必须加上 0x。
3. float （浮点型, 也称作 double)
4. string （字符串）：字符型变量不同于其他编程语言有字符与字符串之分，
在PHP 中，统一使用字符型变量来定义字符或者字符串。

两种复合类型
1. array （数组）：数组型变量是一种比较特殊的变量类型
2. object （对象）：对象也是一种特殊的数据类型。要创建object变量，请使用 new 关键字。

两种特殊类型
1. resource（资源）：源是一种特殊变量，保存了到外部资源的一个引用。
资源是通过专门的函数来建立和使用的。
2. NULL（NULL）：表示一个变量没有值。NULL 类型唯一可能的值就是 NULL。
```

### ??运算符(NULL 合并运算符)
```
由于日常使用中存在大量同时使用三元表达式和 isset()的情况，NULL 合并运算符使得变量存在且值不为NULL，
它就会返回自身的值，否则返回它的第二个操作数。

<?php
// 如果 $_GET['user'] 不存在返回 'nobody'，否则返回 $_GET['user'] 的值
$username = $_GET['user'] ?? 'nobody';
// 类似的三元运算符
$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
```

### <=> 太空船操作符（组合比较符）
```
太空船操作符用于比较两个表达式。当a大于、等于或小于b时它分别返回-1、0或1。

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

### 通过 define() 定义常量数组
```
<?php
define('ANIMALS', [
    'dog',
    'cat',
    'bird'
]);

echo ANIMALS[1]; // 输出 "cat"
?>
```

### 整除
```
新增了整除函数 intdiv()

<?php
var_dump(intdiv(10, 3));
// 输出结果： int(3)
?>
```

### [了解大部分数组处理函数](http://php.net/manual/zh/ref.array.php)
```
is_array — 检测变量是否是数组
explode — 使用一个字符串分割另一个字符串
implode — 将一个一维数组的值转化为字符串
split — 用正则表达式将字符串分割到数组中
preg_split — 通过一个正则表达式分隔字符串
unset — 释放给定的变量
array_change_key_case — 将数组中的所有键名修改为全大写或小写
array_chunk — 将一个数组分割成多个
array_column — 返回数组中指定的一列
array_combine — 创建一个数组，用一个数组的值作为其键名，另一个数组的值作为其值
array_count_values — 统计数组中所有的值
array_diff_assoc — 带索引检查计算数组的差集
array_diff_key — 使用键名比较计算数组的差集
array_diff_uassoc — 用用户提供的回调函数做索引检查来计算数组的差集
array_diff_ukey — 用回调函数对键名比较计算数组的差集
array_diff — 计算数组的差集
array_fill_keys — 使用指定的键和值填充数组
array_fill — 用给定的值填充数组
array_filter — 用回调函数过滤数组中的单元
array_flip — 交换数组中的键和值
array_intersect_assoc — 带索引检查计算数组的交集
array_intersect_key — 使用键名比较计算数组的交集
array_intersect_uassoc — 带索引检查计算数组的交集，用回调函数比较索引
array_intersect_ukey — 用回调函数比较键名来计算数组的交集
array_intersect — 计算数组的交集
array_key_exists — 检查数组里是否有指定的键名或索引
array_key_first —  获取数组的第一个键
array_key_last —  获取数组的最后一个键
array_keys — 返回数组中部分的或所有的键名
array_map — 为数组的每个元素应用回调函数
array_merge_recursive — 递归地合并一个或多个数组
array_merge — 合并一个或多个数组
array_multisort — 对多个数组或多维数组进行排序
array_pad — 以指定长度将一个值填充进数组
array_pop — 弹出数组最后一个单元（出栈）
array_product — 计算数组中所有值的乘积
array_push — 将一个或多个单元压入数组的末尾（入栈）
array_rand — 从数组中随机取出一个或多个单元
array_reduce — 用回调函数迭代地将数组简化为单一的值
array_replace_recursive — 使用传递的数组递归替换第一个数组的元素
array_replace — 使用传递的数组替换第一个数组的元素
array_reverse — 返回单元顺序相反的数组
array_search — 在数组中搜索给定的值，如果成功则返回首个相应的键名
array_shift — 将数组开头的单元移出数组
array_slice — 从数组中取出一段
array_splice — 去掉数组中的某一部分并用其它值取代
array_sum — 对数组中所有值求和
array_udiff_assoc — 带索引检查计算数组的差集，用回调函数比较数据
array_udiff_uassoc — 带索引检查计算数组的差集，用回调函数比较数据和索引
array_udiff — 用回调函数比较数据来计算数组的差集
array_uintersect_assoc — 带索引检查计算数组的交集，用回调函数比较数据
array_uintersect_uassoc — 带索引检查计算数组的交集，用单独的回调函数比较数据和索引
array_uintersect — 计算数组的交集，用回调函数比较数据
array_unique — 移除数组中重复的值
array_unshift — 在数组开头插入一个或多个单元
array_values — 返回数组中所有的值
array_walk_recursive — 对数组中的每个成员递归地应用用户函数
array_walk — 使用用户自定义函数对数组中的每个元素做回调处理
array — 新建一个数组
arsort — 对数组进行逆向排序并保持索引关系
asort — 对数组进行排序并保持索引关系
compact — 建立一个数组，包括变量名和它们的值
count — 计算数组中的单元数目，或对象中的属性个数
current — 返回数组中的当前单元
each — 返回数组中当前的键／值对并将数组指针向前移动一步
end — 将数组的内部指针指向最后一个单元
extract — 从数组中将变量导入到当前的符号表
in_array — 检查数组中是否存在某个值
key_exists — 别名 array_key_exists
key — 从关联数组中取得键名
krsort — 对数组按照键名逆向排序
ksort — 对数组按照键名排序
list — 把数组中的值赋给一组变量
natcasesort — 用“自然排序”算法对数组进行不区分大小写字母的排序
natsort — 用“自然排序”算法对数组排序
next — 将数组中的内部指针向前移动一位
pos — current 的别名
prev — 将数组的内部指针倒回一位
range — 根据范围创建数组，包含指定的元素
reset — 将数组的内部指针指向第一个单元
rsort — 对数组逆向排序
shuffle — 打乱数组
sizeof — count 的别名
sort — 对数组排序
uasort — 使用用户自定义的比较函数对数组中的值进行排序并保持索引关联
uksort — 使用用户自定义的比较函数对数组中的键名进行排序
usort — 使用用户自定义的比较函数对数组中的值进行排序
```

### [字符串处理函数](http://php.net/manual/zh/ref.strings.php)  [区别 mb_ 系列函数](http://php.net/manual/zh/book.mbstring.php)
```
addcslashes — 以 C 语言风格使用反斜线转义字符串中的字符
addslashes — 使用反斜线引用字符串
bin2hex — 函数把包含数据的二进制字符串转换为十六进制值
chop — rtrim 的别名
chr — 返回指定的字符
chunk_split — 将字符串分割成小块
convert_cyr_string — 将字符由一种 Cyrillic 字符转换成另一种
convert_uudecode — 解码一个 uuencode 编码的字符串
convert_uuencode — 使用 uuencode 编码一个字符串
count_chars — 返回字符串所用字符的信息
crc32 — 计算一个字符串的 crc32 多项式
crypt — 单向字符串散列
echo — 输出一个或多个字符串
explode — 使用一个字符串分割另一个字符串
fprintf — 将格式化后的字符串写入到流
get_html_translation_table — 返回使用 htmlspecialchars 和 htmlentities 后的转换表
hebrev — 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew）
hebrevc — 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew），并且转换换行符
hex2bin — 转换十六进制字符串为二进制字符串
html_entity_decode — 把 HTML 实体转换为字符
htmlentities — 将字符转换为 HTML 转义字符
htmlspecialchars_decode — 将特殊的 HTML 实体转换回普通字符
htmlspecialchars — 将特殊字符转换为 HTML 实体
implode — 将一个一维数组的值转化为字符串
join — 别名 implode
lcfirst — 使一个字符串的第一个字符小写
levenshtein — 计算两个字符串之间的编辑距离
localeconv — Get numeric formatting information
ltrim — 删除字符串开头的空白字符（或其他字符）
md5_file — 计算指定文件的 MD5 散列值
md5 — 计算字符串的 MD5 散列值
metaphone — Calculate the metaphone key of a string
money_format — 将数字格式化成货币字符串
nl_langinfo — Query language and locale information
nl2br — 在字符串所有新行之前插入 HTML 换行标记
number_format — 以千位分隔符方式格式化一个数字
ord — 转换字符串第一个字节为 0-255 之间的值
parse_str — 将字符串解析成多个变量
print — 输出字符串
printf — 输出格式化字符串
quoted_printable_decode — 将 quoted-printable 字符串转换为 8-bit 字符串
quoted_printable_encode — 将 8-bit 字符串转换成 quoted-printable 字符串
quotemeta — 转义元字符集
rtrim — 删除字符串末端的空白字符（或者其他字符）
setlocale — 设置地区信息
sha1_file — 计算文件的 sha1 散列值
sha1 — 计算字符串的 sha1 散列值
similar_text — 计算两个字符串的相似度
soundex — Calculate the soundex key of a string
sprintf — Return a formatted string
sscanf — 根据指定格式解析输入的字符
str_getcsv — 解析 CSV 字符串为一个数组
str_ireplace — str_replace 的忽略大小写版本
str_pad — 使用另一个字符串填充字符串为指定长度
str_repeat — 重复一个字符串
str_replace — 子字符串替换
str_rot13 — 对字符串执行 ROT13 转换
str_shuffle — 随机打乱一个字符串
str_split — 将字符串转换为数组
str_word_count — 返回字符串中单词的使用情况
strcasecmp — 二进制安全比较字符串（不区分大小写）
strchr — 别名 strstr
strcmp — 二进制安全字符串比较
strcoll — 基于区域设置的字符串比较
strcspn — 获取不匹配遮罩的起始子字符串的长度
strip_tags — 从字符串中去除 HTML 和 PHP 标记
stripcslashes — 反引用一个使用 addcslashes 转义的字符串
stripos — 查找字符串首次出现的位置（不区分大小写）
stripslashes — 反引用一个引用字符串
stristr — strstr 函数的忽略大小写版本
strlen — 获取字符串长度
strnatcasecmp — 使用“自然顺序”算法比较字符串（不区分大小写）
strnatcmp — 使用自然排序算法比较字符串
strncasecmp — 二进制安全比较字符串开头的若干个字符（不区分大小写）
strncmp — 二进制安全比较字符串开头的若干个字符
strpbrk — 在字符串中查找一组字符的任何一个字符
strpos — 查找字符串首次出现的位置
strrchr — 查找指定字符在字符串中的最后一次出现
strrev — 反转字符串
strripos — 计算指定字符串在目标字符串中最后一次出现的位置（不区分大小写）
strrpos — 计算指定字符串在目标字符串中最后一次出现的位置
strspn — 计算字符串中全部字符都存在于指定字符集合中的第一段子串的长度。
strstr — 查找字符串的首次出现
strtok — 标记分割字符串
strtolower — 将字符串转化为小写
strtoupper — 将字符串转化为大写
strtr — 转换指定字符
substr_compare — 二进制安全比较字符串（从偏移位置比较指定长度）
substr_count — 计算字串出现的次数
substr_replace — 替换字符串的子串
substr — 返回字符串的子串
trim — 去除字符串首尾处的空白字符（或者其他字符）
ucfirst — 将字符串的首字母转换为大写
ucwords — 将字符串中每个单词的首字母转换为大写
vfprintf — 将格式化字符串写入流
vprintf — 输出格式化字符串
vsprintf — 返回格式化字符串
wordwrap — 打断字符串为指定数量的字串
mb_check_encoding — 检查字符串在指定的编码里是否有效
mb_chr — Get a specific character
mb_convert_case — 对字符串进行大小写转换
mb_convert_encoding — 转换字符的编码
mb_convert_kana — Convert "kana" one from another ("zen-kaku", "han-kaku" and more)
mb_convert_variables — 转换一个或多个变量的字符编码
mb_decode_mimeheader — 解码 MIME 头字段中的字符串
mb_decode_numericentity — 根据 HTML 数字字符串解码成字符
mb_detect_encoding — 检测字符的编码
mb_detect_order — 设置/获取 字符编码的检测顺序
mb_encode_mimeheader — 为 MIME 头编码字符串
mb_encode_numericentity — Encode character to HTML numeric string reference
mb_encoding_aliases — Get aliases of a known encoding type
mb_ereg_match — Regular expression match for multibyte string
mb_ereg_replace_callback — Perform a regular expression search and replace with multibyte support using a callback
mb_ereg_replace — Replace regular expression with multibyte support
mb_ereg_search_getpos — Returns start point for next regular expression match
mb_ereg_search_getregs — Retrieve the result from the last multibyte regular expression match
mb_ereg_search_init — Setup string and regular expression for a multibyte regular expression match
mb_ereg_search_pos — Returns position and length of a matched part of the multibyte regular expression for a predefined multibyte string
mb_ereg_search_regs — Returns the matched part of a multibyte regular expression
mb_ereg_search_setpos — Set start point of next regular expression match
mb_ereg_search — Multibyte regular expression match for predefined multibyte string
mb_ereg — Regular expression match with multibyte support
mb_eregi_replace — Replace regular expression with multibyte support ignoring case
mb_eregi — Regular expression match ignoring case with multibyte support
mb_get_info — 获取 mbstring 的内部设置
mb_http_input — 检测 HTTP 输入字符编码
mb_http_output — 设置/获取 HTTP 输出字符编码
mb_internal_encoding — 设置/获取内部字符编码
mb_language — 设置/获取当前的语言
mb_list_encodings — 返回所有支持编码的数组
mb_ord — Get code point of character
mb_output_handler — 在输出缓冲中转换字符编码的回调函数
mb_parse_str — 解析 GET/POST/COOKIE 数据并设置全局变量
mb_preferred_mime_name — 获取 MIME 字符串
mb_regex_encoding — Set/Get character encoding for multibyte regex
mb_regex_set_options — Set/Get the default options for mbregex functions
mb_scrub — Description
mb_send_mail — 发送编码过的邮件
mb_split — 使用正则表达式分割多字节字符串
mb_str_split — Given a multibyte string, return an array of its characters
mb_strcut — 获取字符的一部分
mb_strimwidth — 获取按指定宽度截断的字符串
mb_stripos — 大小写不敏感地查找字符串在另一个字符串中首次出现的位置
mb_stristr — 大小写不敏感地查找字符串在另一个字符串里的首次出现
mb_strlen — 获取字符串的长度
mb_strpos — 查找字符串在另一个字符串中首次出现的位置
mb_strrchr — 查找指定字符在另一个字符串中最后一次的出现
mb_strrichr — 大小写不敏感地查找指定字符在另一个字符串中最后一次的出现
mb_strripos — 大小写不敏感地在字符串中查找一个字符串最后出现的位置
mb_strrpos — 查找字符串在一个字符串中最后出现的位置
mb_strstr — 查找字符串在另一个字符串里的首次出现
mb_strtolower — 使字符串小写
mb_strtoupper — 使字符串大写
mb_strwidth — 返回字符串的宽度
mb_substitute_character — 设置/获取替代字符
mb_substr_count — 统计字符串出现的次数
mb_substr — 获取部分字符串
```

### [& 引用，结合案例分析](https://secure.php.net/manual/zh/language.references.php)
```
引用是什么
不同的名字访问同一个变量内容。
与Ｃ语言中的指针是有差别的，Ｃ语言中的指针里面存储的是变量的内容在内存中存放的地址。

变量的引用
PHP 的引用允许你用两个变量来指向同一个内容
<?php
$a="ABC"; 
$b =&$a; 
echo $a;//这里输出:ABC 
echo $b;//这里输出:ABC 
$b="EFG"; 
echo $a;//这里$a的值变为EFG 所以输出EFG 
echo $b;//这里输出EFG 

函数的传址调用
<?php
function test(&$a) { 
$a=$a+100; 
} 
$b=1; 
echo $b;//输出１ 
test($b); // 实参为变量,传递引用.这里$b传递给函数的其实是$b的变量内容所处的内存地址，通过在函数里改变$a的值　就可以改变$b的值了 
// test(1); // 实参为值会出错,无法传递引用.PHP规定传递的引用不能为常量(Fatal error: Only variables can be passed by reference)
echo "<br>"; 
echo $b;//输出101 

函数的引用返回
<?php
function &test() { 
static $b=0;//申明一个静态变量 
$b=$b+1; 
echo $b; 
return $b; 
} 
$a=test();//这条语句会输出　$b的值　为１ 
$a=5; 
$a=test();//这条语句会输出　$b的值　为2 
$a=&test();//这条语句会输出　$b的值　为3 
$a=5; 
$a=test();//这条语句会输出　$b的值　为6 

通过这种方式$a=test();得到的其实不是函数的引用返回，这跟普通的函数调用没有区别　至于原因:这是PHP的规定
PHP规定通过$a=&test(); 方式得到的才是函数的引用返回
$a=test()方式调用函数，只是将函数的值赋给$a而已，　而$a做任何改变都不会影响到函数中的$b
而通过$a=&test()方式调用函数呢, 他的作用是　将return $b中的　$b变量的内存地址与$a变量的内存地址　
指向了同一个地方 即产生了相当于这样的效果($a=&b;) 所以改变$a的值　也同时改变了$b的值　所以在执行了
$a=&test();
$a=5;
以后，$b的值变为了5

对象的引用
<?php 
class a{ 
var $abc="ABC"; 
} 
$b=new a; 
$c=$b; 
echo $b->abc;//这里输出ABC 
echo $c->abc;//这里输出ABC 
$b->abc="DEF"; 
echo $c->abc;//这里输出DEF 

以上代码是在PHP5中的运行效果 在PHP5中 对象的复制 是通过引用来实现的。
上列中$b=new a; $c=$b; 其实等效于$b=new a; $c=&$b; 
PHP5中默认就是通过引用来调用对象， 但有时你可能想建立一个对象的副本，
并希望原来的对象的改变不影响到副本 . 为了这样的目的，PHP定义了一个特殊的方法，
称为__clone. 引用的作用 如果程序比较大,引用同一个对象的变量比较多,
并且希望用完该对象后手工清除它,个人建议用 "&" 方式,然后用$var=null的方式清除. 
其它时候还是用php5的默认方式吧. 另外, php5中对于大数组的传递,建议用 "&" 方式, 毕竟节省内存空间使用。

取消引用
当你 unset 一个引用，只是断开了变量名和变量内容之间的绑定。这并不意味着变量内容被销毁了。
<?php 
$a = 1; 
$b =& $a; 
unset ($a); 
echo $a;// Notice: Undefined variable
echo $b;// 1

不会 unset $b，只是 $a。

global 引用
当用 global $var 声明一个变量时实际上建立了一个到全局变量的引用。也就是说和这样做是相同的
<?php 
$var =& $GLOBALS["var"]; 

这意味着，例如，unset $var 不会 unset 全局变量。 $this 在一个对象的方法中，$this 永远是调用它的对象的引用。

php中对于地址的指向（类似指针）功能不是由用户自己来实现的，是由Zend核心实现的
php中引用采用的是“写时拷贝”的原理，就是除非发生写操作，指向同一个地址的变量或者对象是不会被拷贝的。
通俗的讲
1:如果有下面的代码
$a="ABC";
$b=$a;
其实此时　$a与$b都是指向同一内存地址　而并不是$a与$b占用不同的内存

２:如果在上面的代码基础上再加上如下代码
$a="EFG";
由于$a与$b所指向的内存的数据要重新写一次了，此时Zend核心会自动判断　
自动为$b生产一个$a的数据拷贝，重新申请一块内存进行存储
```

### [== 与 === 区别](https://stackoverflow.com/questions/80646/how-do-the-php-equality-double-equals-and-identity-triple-equals-comp)
```
==运算符，则它们在两种不同类型之间进行转换.
===运算符,执行“类型安全比较”。这意味着只有两个操作数具有相同的类型和相同的值时，它才会返回true。
<?php
1 === 1: true
1 == 1: true
1 === "1": false // 1是整数，1是字符串
1 == "1": true //  “1”被转换为整数，即1
"foo" === "foo": true //  两个操作数都是字符串，具有相同的值

警告：具有相等成员的同一个类的两个实例与===运算符不匹配
$a = new stdClass();
$a->foo = "bar";
$b = clone $a;
var_dump($a === $b); // bool(false)
```

### [isset 与 empty 区别](https://stackoverflow.com/questions/1219542/in-where-shall-i-use-isset-and-empty)
```
empty是判断变量值是非空或非零的值。
对应空定义包括：“”(空字符串)、0、“0”、NULL、FALSE、array()和$var(只声明但未赋值)。
也就是说当变量值为上述这些，empty返回TRUE，其他的都返回FALSE。

isset是检测变量是否设置，并且不是 NULL。变量设置可以从几个方面来说。
1：最简单的就是变量是否先声明和赋值；
2：array中是否存在对应的index或key；
3：object中是否存在对应的属性。

从上面的两个function定义可以看到，在某些情况下，两者可以公用，但其区别还是很大的。
另外它们都只能检测变量，检测任何非变量的东西都将 导致解析错误。
例如直接检查另一个function的返回值(empty(otherFunction()))，
你将看到“Fatal error: Can’t use function return value in write context in”这样的错误。
另外isset可以一次检查多个变量，例如：isset($var1, $var2, $var3)，
当这三个值分别的isset都为TRUE结果为TRUE，否则结果为FALSE。

<?php
$sep = "<br />";
echo 'test undeclared var empty : ';
var_dump(empty($var));	// TRUE
echo $sep . 'test undeclared var isset : ';
var_dump(isset($var));	// FALSE

$var;
echo $sep . 'test declared var but no set value empty : ';
var_dump(empty($var));	// TRUE
echo $sep . 'test declared var but no set value isset : ';
var_dump(isset($var));	// FALSE, 变量申明未赋值，默认值为NULL

$var = NULL;
echo $sep . 'test declared var and set value NULL empty : ';
var_dump(empty($var));	// TRUE
echo $sep . 'test declared var and set value NULL isset : ';
var_dump(isset($var));	// FALSE, 变量申明赋值为NULL

$var1 = ''; $var2 = '0'; $var3 = 0; $var4 = FALSE; $var5 = array();

echo $sep . 'test \'\' empty : ';
var_dump(empty($var1));	// TRUE
echo $sep . 'test \'0\' empty : ';
var_dump(empty($var2));	// TRUE
echo $sep . 'test 0 empty : ';
var_dump(empty($var3));	// TRUE
echo $sep . 'test FALSE empty : ';
var_dump(empty($var4));	// TRUE
echo $sep . 'test array() empty : ';
var_dump(empty($var5));	// TRUE
echo $sep . 'test \'\', \'0\', 0, FALSE, array() isset : ';
var_dump(isset($var1, $var2, $var3, $var4, $var5));	// TRUE,  变量申明并赋值为空字符串
```

### [全部魔术函数理解](http://php.net/manual/zh/language.oop5.magic.php)
```
__construct()
实例化对象时被调用， 当__construct和以类名为函数名的函数同时存在时，
__construct将被调用，另一个不被调用。

__destruct()
当删除一个对象或对象操作终止时被调用。

__call()
对象调用某个方法， 若方法存在，则直接调用；若不存在，则会去调用__call函数。

__get()
读取一个对象的属性时，若属性存在，则直接返回属性值； 若不存在，则会调用__get函数。

__set()
设置一个对象的属性时， 若属性存在，则直接赋值；
若不存在，则会调用__set函数。

__toString()
打印一个对象的时被调用。如echo obj;或printobj;或printobj;

__clone()
克隆对象时被调用。如：t=newTest();t=newTest();t1=clone $t;

__sleep()
serialize之前被调用。若对象比较大，想删减一点东东再序列化，可考虑一下此函数。

__wakeup()
unserialize时被调用，做些对象的初始化工作。

__isset()
检测一个对象的属性是否存在时被调用。如：isset($c->name)。

__unset()
unset一个对象的属性时被调用。如：unset($c->name)。

__set_state()
调用var_export时，被调用。用__set_state的返回值做为var_export的返回值。

__autoload()
实例化一个对象时，如果对应的类不存在，则该方法被调用。

__invoke()
当尝试以调用函数的方式调用一个对象时，__invoke() 方法会被自动调用。
本特性只在 PHP 5.3.0 及以上版本有效。

__debugInfo()
该方法在var_dump()类对象的时候被调用，如果没有定义该方法，则var_dump会打印出所有的类属性
该方法在PHP 5.6.0 及以上版本有效。
```

### [__toString() 作用](http://php.net/manual/en/language.oop5.magic.php#object.tostring)
```
_toString()，类被当成字符串时的回应方法
作用： __toString() 方法用于一个类被当成字符串时应怎样回应。例如 `echo $obj;` 应该显示些什么。
注意： 此方法必须返回一个字符串，否则将发出一条 `E_RECOVERABLE_ERROR` 级别的致命错误。
警告： 不能在 __toString() 方法中抛出异常。这么做会导致致命错误。

<?php
class Person
{
    public $sex;
    public $name;
    public $age;
    public function __construct($name="",  $age=25, $sex='男')
    {
        $this->name = $name;
        $this->age  = $age;
        $this->sex  = $sex;
    }
    public function __toString()
    {
        return  'go go go';
    }
}
$person = new Person('小明'); // 初始赋值
echo $person;
/*
结果：
go go go
*/

那么如果类中没有 __toString() 这个魔术方法运行会发生什么呢？让我们来测试下：

class Person
{
    public $sex;
    public $name;
    public $age;
    public function __construct($name="",  $age=25, $sex='男')
    {
        $this->name = $name;
        $this->age  = $age;
        $this->sex  = $sex;
    }
}
$person = new Person('小明'); // 初始赋值
echo $person;
/*
结果： 
Catchable fatal error: Object of class Person could not be converted to string in D:phpStudyWWWtestindex.php on line 18
*/

很明显，页面报了一个致命错误，这是语法所不允许的。
```

### static 作用（区分类与函数内）[手册](http://php.net/manual/zh/language.oop5.static.php) 、[SOF](https://stackoverflow.com/questions/7508284/static-variables-in-php)
```
Static（静态）关键字
static 关键字来定义静态方法和属性。static 也可用于定义静态变量以及后期静态绑定。

声明类属性或方法为静态，就可以不实例化类而直接访问。
静态属性不能通过一个类已实例化的对象来访问（但静态方法可以）。

为了兼容 PHP 4，如果没有指定访问控制，属性和方法默认为公有。

由于静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用。

静态属性不可以由对象通过 -> 操作符来访问。

用静态方式调用一个非静态方法会导致一个 E_STRICT 级别的错误。

就像其它所有的 PHP 静态变量一样，静态属性只能被初始化为文字或常量，不能使用表达式。
所以可以把静态属性初始化为整数或数组，但不能初始化为另一个变量或函数返回值，也不能指向一个对象。

自 PHP 5.3.0 起，可以用一个变量来动态调用类。但该变量的值不能为关键字 self，parent 或 static。
<?php
class Foo {
    static $my_var = 'Foo';
}

$x = new Foo();

echo $x::$my_var;  // works fine
echo $x->my_var;   // doesn't work - Notice: Undefined property: Foo::$my_var

<?php
class Foo
{
    public static $my_static = 'foo';

    public function staticValue() {
        return self::$my_static;
    }
}

class Bar extends Foo
{
    public function fooStatic() {
        return parent::$my_static;
    }
}

print Foo::$my_static . "\n"; // foo

$foo = new Foo();
print $foo->staticValue() . "\n"; // foo
print $foo->my_static . "\n"; // Undefined "Property" my_static 

print $foo::$my_static . "\n"; // Notice: Undefined property: Foo::$my_static
$classname = 'Foo';
print $classname::$my_static . "\n"; // foo   As of PHP 5.3.0

print Bar::$my_static . "\n"; // foo
$bar = new Bar();
print $bar->fooStatic() . "\n"; // foo
```

### [static、$this、self 区别](https://stackoverflow.com/questions/4718808/php-can-static-replace-self)
```
self::或是__CLASS__对当前类的引用，因此在一定范围内进行定义将无法满足对静态调用的需求。
static::在PHP 5.3.0中，这称为后期静态绑定。它解决了调用在运行时引用的类的限制。
考虑到这一点，我认为您现在可以充分看到并解决问题了。
如果您要继承几个静态成员，并且需要访问父成员和子成员，self::则将无法满足要求。

<?php
class Parent_{
    protected static $x = "parent";
    public static function makeTest(){
        echo "self => ".self::$x."<br>";
        echo "static => ".static::$x;       
    }
}

class Child_ extends Parent_{
    protected static $x = "child";
}

echo "<h4>using the Parent_ class</h4>";
Parent_::makeTest();

echo "<br><h4>using the Child_ class</h4>";
Child_::makeTest();

// using the Parent_ class
// self => parent
// static => parent
// using the Child_ class
// self => parent
// static => child
```

### private、protected、public、final 区别
```
protected        被保护的    本类，子类可以访问   
public           公有的      本类，子类，类的外面都可以访问
private          私有的      本类可以访问   
interface        接口：只含有抽象方法
abstract         抽象类：含有任意一个抽象方法的类；
抽象方法：没有方法体（没有大括号）的方法，eg:function a();。
final            最后的类和方法，不能再有子类，不能再重写
static           静态方法和属性，不依赖于对象产生，
不需要再new一个对象，直接冒号访问。如object类中有一个a方法，直接object::a();
```

### OOP 思想
```
OOP，Object Oriented Programming(面向对象的编程),还有OOD（面向对象的设计），OOA（面向对象的分析）。

很早很早以前的编程是面向过程的，比如实现一个算术运算1+1 = 2，通过这个简单的算法就可以解决问题。
但是随着时代的进步，人们不满足现有的算法了，因为问题越来越复杂
不是1+1那么单纯了，比如一个班级的学生的数据分析
这样就有了对象这个概念，一切事物皆对象。
将现实的事物抽象出来，注意抽象这个词是重点啊，把现实生活的事物以及关系
抽象成类，通过继承，实现，组合的方式把万事万物都给容纳了。
实现了对现实世界的抽象和数学建模。这是一次飞跃性的进步。

有一天你想吃鱼香肉丝了，怎么办呢？你有两个选择
1、自己买材料，肉，鱼香肉丝调料，蒜苔，胡萝卜等等然后切菜切肉，开炒，盛到盘子里。
2、去饭店，张开嘴：老板！来一份鱼香肉丝！

1是面向过程，2是面向对象。

面向对象有什么优势呢？首先你不需要知道鱼香肉丝是怎么做的，降低了耦合性。
如果你突然不想吃鱼香肉丝了，想吃洛阳白菜，对于1你可能不太容易了，还需要重新买菜，买调料什么的。
对于2，太容易了，大喊：老板！那个鱼香肉丝换成洛阳白菜吧，提高了可维护性。
总的来说就是降低耦合，提高维护性！

面向过程是具体化的，流程化的，解决一个问题，你需要一步一步的分析，一步一步的实现。

面向对象是模型化的，你只需抽象出一个类，这是一个封闭的盒子，在这里你拥有数据也拥有解决问题的方法。

面向对象的底层其实还是面向过程，把面向过程抽象成类，然后封装，方便我们我们使用的就是面向对象了。

面向过程：
优点：性能比面向对象好，因为类调用时需要实例化，开销比较大，比较消耗资源。
缺点：不易维护、不易复用、不易扩展.

面向对象:
优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，
可以设计出低耦合的系统，使系统 更加灵活、更加易于维护 .
缺点：性能比面向过程差

面向对象的三大特性：
封装:隐藏对象的属性和实现细节，仅对外提供公共访问方式，将变化隔离，便于使用，提高复用性和安全性。
继承:提高代码复用性；继承是多态的前提。
多态:父类或接口定义的引用变量可以指向子类或具体实现类的实例对象。提高了程序的拓展性。

五大基本原则：
单一职责原则SRP(Single Responsibility Principle):类的功能要单一，不能包罗万象，跟杂货铺似的。
开放封闭原则OCP(Open－Close Principle):一个模块对于拓展是开放的，
对于修改是封闭的，想要增加功能热烈欢迎，想要修改，哼，一万个不乐意。
里式替换原则LSP(the Liskov Substitution Principle LSP):子类可以替换父类出现在父类能够出现的任何地方。
比如你能代表你爸去你姥姥家干活。哈哈~~
依赖倒置原则DIP(the Dependency Inversion Principle DIP):高层次的模块不应该依赖于低层次的模块，
他们都应该依赖于抽象。抽象不应该依赖于具体实现，具体实现应该依赖于抽象。
就是你出国要说你是中国人，而不能说你是哪个村子的。比如说中国人是抽象的，
下面有具体的xx省，xx市，xx县。你要依赖的是抽象的中国人，而不是你是xx村的。
接口分离原则ISP(the Interface Segregation Principle ISP):
设计时采用多个与特定客户类有关的接口比采用一个通用的接口要好。
就比如一个手机拥有打电话，看视频，玩游戏等功能，把这几个功能拆分成不同的接口，比在一个接口里要好的多。

抽象会使复杂的问题更加简单化。
从以前面向过程的执行者，变成了张张嘴的指挥者。
面向对象更符合人类的思维，面向过程则是机器的思想
```

### 抽象类、接口 分别使用场景
```
抽象类
PHP 5 支持抽象类和抽象方法。定义为抽象的类不能被实例化。
任何一个类，如果它里面至少有一个方法是被声明为抽象的，
那么这个类就必须被声明为抽象的。
被定义为抽象的方法只是声明了其调用方式（参数），不能定义其具体的功能实现。

继承一个抽象类的时候，子类必须定义父类中的所有抽象方法；
另外，这些方法的访问控制必须和父类中一样（或者更为宽松）。
例如某个抽象方法被声明为受保护的，那么子类中实现的方法就应该声明为受保护的或者公有的，
而不能定义为私有的。此外方法的调用方式必须匹配，即类型和所需参数数量必须一致。
例如，子类定义了一个可选参数，而父类抽象方法的声明里没有，则两者的声明并无冲突。 
这也适用于 PHP 5.4 起的构造函数。在 PHP 5.4 之前的构造函数声明可以不一样的。

接口
使用接口（interface），可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。
接口是通过 interface 关键字来定义的，就像定义一个标准的类一样，但其中定义所有的方法都是空的。
接口中定义的所有方法都必须是公有，这是接口的特性。
需要注意的是，在接口中定义一个构造方法是被允许的。在有些场景下这可能会很有用，例如用于工厂模式时。

实现（implements）
要实现一个接口，使用 implements 操作符。类中必须实现接口中定义的所有方法，
否则会报一个致命错误。类可以实现多个接口，用逗号来分隔多个接口的名称。
在 PHP 5.3.9 之前，实现多个接口时，接口中的方法不能有重名，因为这可能会有歧义。
在最近的 PHP 版本中，只要这些重名的方法签名相同，这种行为就是允许的。
接口也可以继承，通过使用 extends 操作符。
类要实现接口，必须使用和接口中所定义的方法完全一致的方式。否则会导致致命错误。
接口中也可以定义常量。接口常量和类常量的使用完全相同，但是不能被子类或子接口所覆盖。

抽象类和接口在语法上的异同：
相同点
都不能被实例化

不同点     
第一点． 接口是抽象类的变体，接口中所有的方法都是抽象的。而抽象类是声明方法的存在而不去实现它的类。
第二点． 接口可以多继承，抽象类不行
第三点． 接口定义方法，不能实现，而抽象类可以实现部分方法。
第四点． 接口中基本数据类型为static 而抽类象不是的。

应用场景
抽象类表示的是，这个对象是什么。接口表示的是，这个对象能做什么。
比如，男人，女人，这两个类（如果是类的话……），他们的抽象类是人。
说明，他们都是人。人可以吃东西，狗也可以吃东西，你可以把“吃东西”定义成一个接口，然后让这些类去实现它.
所以，在高级语言上，一个类只能继承一个类（抽象类）
(正如人不可能同时是生物和非生物)，但是可以实现多个接口(吃饭接口、走路接口)。

当你关注一个事物的本质的时候，用抽象类；当你关注一个操作的时候，用接口。

另一个重要的概念就是多态，多态通过分离做什么和怎么做，从另一个角度将接口和实现分离出来。
多态不但能够改善代码的组织结果和可读性，还能创建可扩展的程序
即无论在项目最初创建时还是在需要添加新功能时都可以“生长”的程序。
由于接口更关注于动作的实现，多态主要是分离“做什么”和“怎么做”
所以接口的另一个重要的应用就是多态的实现（当然抽象类也可以实现多态，但是接口更加合适）。

抽象类的功能要远超过接口，但是，定义抽象类的代价高。
因为高级语言来说（从实际设计上来说也是）每个类只能继承一个类。
在这个类中，你必须继承或编写出其所有子类的所有共性。
虽然接口在功能上会弱化许多，但是它只是针对一个动作的描述。
而且你可以在一个类中同时实现多个接口。在设计阶段会降低难度的。
```

### [Trait 是什么东西](http://php.net/manual/zh/language.oop5.traits.php)
```
Trait
自 PHP 5.4.0 起，PHP 实现了一种代码复用的方法，称为 trait。

Trait 是为类似 PHP 的单继承语言而准备的一种代码复用机制。
Trait 为了减少单继承语言的限制，使开发人员能够自由地在不同层次结构内独立的类中复用 method。 
Trait 和 Class 组合的语义定义了一种减少复杂性的方式，避免传统多继承和 Mixin 类相关典型问题。

上述说明可以提取出几个关键词：代码复用、单继承、减少复杂性。

单继承与多继承
单继承：一个类只能继承一个父类的方式
多继承：一个类可以继承多个父类的方式

说到单继承，不得不提到另外一个特性：多态。
多态和继承是软件开发中常用的代码复用方式，但是继承的方式虽然也能解决问题，
但其思路违背了面向对象的原则，显得很粗暴；
多态方式也可行，但不符合软件开发中的 DRY （ Don't repeat yourself ） 原则，增加了维护成本。

此时此刻，Trait 以一种全新的继承方式出现了，
它既解决了前文叙述的两种继承方式的弊端，也相对优雅的实现了代码的复用。

简单说一下 Trait 在底层的运行原理：PHP 解释器在编译代码时会把 Trait 部分代码复制粘贴到类的定义体中，
但是不会处理这个操作引入的不兼容问题。

Trait 和 Class 相似，但仅仅旨在用细粒度和一致的方式来组合功能。 
无法通过 trait 自身来实例化。它为传统继承增加了水平特性的组合；
也就是说，应用的几个 Class 之间不需要继承。

使用了 Trait 之后，我们只需要再提取出『安卓系统』和『高分辨率』这两个特性
就可以很方便的在这三个类里随意组合，而且还能保证你的代码非常清晰。
<?php
// 共同拥有的面部识别功能
trait Faceable {
    protected $face_id = 0;
    // 就当我是获取面部信息的功能
    public function getFace()
    {
        return $this->face_id;
    }
    // 就当我是设置面部信息的功能
    public function setFace(string $face_id)
    {
        $this->face_id = $face_id;
    }
}
// 安卓系统
trait Androidable{
}
// 高分辨率
trait HDisplayable{
}
// 小米Note3
class MiNote3 {
    use Faceable,Androidable;
    // ...
}
// GalaxyS8
class SamsangS8 {
    use Faceable,Androidable,HDisplayable;
    // ...
}
// iPhoneX
class iPhoneX {
    use Faceable,HDisplayable;
    // ...
}
这样看起来是不是清晰很多呢？他不仅降低了代码的耦合性，还提升了代码的可读性。
依我看来，他不光是某种特性的集合，更像是将某个功能细化了的代码块。
```

### [echo、print、print_r 区别(区分出表达式与语句的区别)](https://stackoverflow.com/questions/1647322/whats-the-difference-between-echo-print-and-print-r-in-php)
```
print和echo或多或少是相同的; 它们都是显示字符串的语言构造。 差异是细微的：
print具有返回值，因此它可以在表达式中使用，
echo具有void返回类型; 
echo可以使用多个参数；
echo比print快一点。

var_dump打印出变量的详细转储，包括变量的类型和任何子项的类型（如果是数组或对象）。
print_r以更易于理解的形式打印变量：不带引号的字符串，忽略类型信息，不提供数组大小等。

var_dump print_r 根据我的经验，通常var_dump调试时有用。
当您不完全知道变量中具有哪些值/类型时，它特别有用。

$values = array(0, 0.0, false, '');
var_dump($values);
print_r ($values);

array(4) {
  [0]=>
  int(0)
  [1]=>
  float(0)
  [2]=>
  bool(false)
  [3]=>
  string(0) ""
}

Array
(
    [0] => 0
    [1] => 0
    [2] => 
    [3] => 
)
```

### [__construct 与 __destruct 区别](http://php.net/manual/zh/language.oop5.decon.php)
```
构造函数 __construct ([ mixed $args [, $... ]] ) : void
PHP 5 允行开发者在一个类中定义一个方法作为构造函数。
具有构造函数的类会在每次创建新对象时先调用此方法，所以非常适合在使用对象之前做一些初始化工作。

如果子类中定义了构造函数则不会隐式调用其父类的构造函数。
要执行父类的构造函数，需要在子类的构造函数中调用 parent::__construct()。
如果子类没有定义构造函数则会如同一个普通的类方法一样从父类继承（假如没有被定义为 private 的话）。

<?php
class BaseClass {
   function __construct() {
       print "In BaseClass constructor\n";
   }
}

class SubClass extends BaseClass {
   function __construct() {
       parent::__construct();
       print "In SubClass constructor\n";
   }
}

class OtherSubClass extends BaseClass {
    // inherits BaseClass's constructor
}

// In BaseClass constructor
$obj = new BaseClass();

// In BaseClass constructor
// In SubClass constructor
$obj = new SubClass();

// In BaseClass constructor
$obj = new OtherSubClass();

为了实现向后兼容性，如果 PHP 5 在类中找不到 __construct() 函数并且也没有从父类继承一个的话，
它就会尝试寻找旧式的构造函数
也就是和类同名的函数。因此唯一会产生兼容性问题的情况是：
类中已有一个名为 __construct() 的方法却被用于其它用途时。

与其它方法不同，当 __construct() 被与父类 __construct() 具有不同参数的方法覆盖时，
PHP 不会产生一个 E_STRICT 错误信息。

自 PHP 5.3.3 起，在命名空间中，与类名同名的方法不再作为构造函数。这一改变不影响不在命名空间中的类。

<?php
namespace Foo;
class Bar {
    public function Bar() {
        // treated as constructor in PHP 5.3.0-5.3.2
        // treated as regular method as of PHP 5.3.3
    }
}

析构函数 __destruct ( void ) : void
PHP 5 引入了析构函数的概念，这类似于其它面向对象的语言，
如 C++。析构函数会在到某个对象的所有引用都被删除或者当对象被显式销毁时执行。

<?php
class MyDestructableClass {
   function __construct() {
       print "In constructor\n";
       $this->name = "MyDestructableClass";
   }

   function __destruct() {
       print "Destroying " . $this->name . "\n";
   }
}

$obj = new MyDestructableClass();

和构造函数一样，父类的析构函数不会被引擎暗中调用。
要执行父类的析构函数，必须在子类的析构函数体中显式调用 parent::__destruct()。
此外也和构造函数一样，子类如果自己没有定义析构函数则会继承父类的。

析构函数即使在使用 exit() 终止脚本运行时也会被调用。
在析构函数中调用 exit() 将会中止其余关闭操作的运行。
```

### [单引号`'`与双引号`"`区别](https://stackoverflow.com/questions/3446216/what-is-the-difference-between-single-quoted-and-double-quoted-strings-in-php#answer-3446286)
```
1. 单引号内部的变量不会执行， 双引号会执行
2. 单引号解析速度比双引号快。
3. 单引号只能解析部分特殊字符，双引号可以解析所有特殊字符。

在PHP中，我们可以使用单引号或者双引号来表示字符串。
不过我们作为开发者，应该了解其中的区别。
单引号与双引号对于定义字符一个是可以解析变量一个是会把变量直接输出来，
同时单引号与双引号在字符处理上单引号要优于双引号

转义的字符不同
单引号和双引号中都可以使用转义字符(＼)，但只能转义在单引号中引起来的单引号和转义转义符本身。
如果用双引号(“”)括起字符串，PHP懂得更多特殊字符串的转义序列。

对变量的解析不同
单引号字符串中出现的变量不会被变量值替代。即PHP不会解析单引号中的变量，而是将变量名原样输出。
双引号字符串最重要的一点是其中的变量名会被变量值替代，即可以解析双引号中包含的变量。

解析速度不同
单引号不需要考虑变量的解析,速度比双引号快.推荐用单引号.
有的时候双引号也比较好用,比如在拼凑sql 语句

PHP引号使用原则
字符串的值用引号
PHP中尽量用单引号,HTML代码全部用双引号
在包含变量的时候,用双引号可以简化操作
复杂的情况下用大括号包起来
有的时候需要用php生成文本文件，换行符n需要用双引号才能好使，单引号则会直接把n当成字符输出。
在字符串里面不需要加入 变量 或者 单引号(')和反斜杠(＼) 时，尽量用单引号引字符串，
因为省去了双引号检查处理转义和解析变量上面的时间。能用单引号尽量用单引号。
```

### [常见 HTTP 状态码，分别代表什么含义](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
```
HTTP 状态码用来告诉客户端，发生了什么事情，状态码位于响应的起始行中

 状态码分类
|状态码|整体范围|已定义范围|分类|
|-|-|-|-|
|1XX|100~199|100~101|信息提示|
|2XX|200~299|200~206|成功|
|3XX|300~399|300~305|重定向|
|4XX|400~499|400~415|客户端错误|
|5XX|500~599|500~505|服务器错误|

 常见状态码
|状态码|原因短语|含义|考察概率|
|-|-|-|-|
|200|OK|请求没有问题|###**|
|206|Partial Content|部分或 Range(范围) 请求|###|
|301|Moved Permanently|在请求的链接被移除时使用|###*|
|302|Found|在请求临时的链接使用|###*|
|304|Not Modified|资源未被修改可使用旧资源|###*|
|307|Temporary Redirect|在请求临时的链接使用|###*|
|400|Bad Request|告知客户端发送了错误请求|###**|
|403|Forbidden|请求被服务器拒绝|###**|
|404|Not Found|无法找到所请求的 URL|###**|
|413|Request entiry too large|请求实体过大|###|
|500|Internal Server Error|服务器遇到错误|###**|
|502|Bad Gateway|代理或网关错误(无法连接到其父网关)|###**|
|503|Service Unavailable|无法为请求提供服务|###**|
|504|Gateway Timeout|代理或网关超时(等待另一服务器响应超时)|###**|
```

### [如何返回一个301重定向](https://stackoverflow.com/questions/7324645/php-header-redirect-301-what-are-the-implications) 
```
**[WARNING]** 一定当心设置 301 后脚本会继续执行，不要认为下面不会执行，必要时使用 `die` or `exit`
301的作用是搜索引擎将为/ option-a而不是/ option-x编制索引。
这可能是一件好事，因为/ option-x对于搜索索引而言是不可访问的，因此可能会对索引产生积极影响。仅当您明智地使用它时;

重定向后放入exit（）; 停止执行脚本的其余部分

header("HTTP/1.1 301 Moved Permanently"); 
header("Location: /option-a"); 
exit();
```

### [301](https://zh.wikipedia.org/wiki/HTTP_301) 什么意思 [404](https://zh.wikipedia.org/wiki/HTTP_404) 呢?
```
301 Move Permanently 是HTTP协议中的一个状态码（Status Code）。
可以简单地理解为该资源已经被永久改变了位置，通常会发送HTTP Location来重定向到正确的新位置。

HTTP 404或Not Found错误消息是HTTP的其中一种“标准回应消息”（HTTP状态码），
此消息代表客户端在浏览网页时，服务器无法正常提供消息，或是服务器无法回应且不知原因。
通常是因为用户所访问的对应网页已被删除、移动或从未存在。
404也是互联网上最常见的错误之一。
404错误消息可能与“server not found”（无法找到服务器）或其他类似消息产生混淆。
```

## 进阶篇

### [48条高效率的PHP优化写法](https://www.awaimai.com/1050.html)
```
1 字符串
1.1 少用正则表达式
能用PHP内部字符串操作函数的情况下，尽量用他们，不要用正则表达式， 因为其效率高于正则。
没得说，正则最耗性能。
str_replace函数要比preg_replace快得多，strtr函数又比str_replace来得快。
有没有你漏掉的好用的函数？
例如：strpbrk()、strncasecmp()、strpos()、strrpos()、stripos()、strripos()。

1.2 字符替换
如果需要转换的全是单个字符，用字符串作为 strtr() 函数完成替换，而不是数组：
$addr = strtr($addr, "abcd", "efgh");       // 建议
$addr = strtr($addr, array('a' => 'e', ));  // 不建议
效率提升：10 倍。
str_replace字符替换比正则替换preg_replace快，但strtr比str_replace又快1/4。
另外，不要做无谓的替换，即使没有替换，str_replace也会为其参数分配内存。很慢！
用 strpos 先查找（非常快），看是否需要替换，如果需要，再替换。
如果需要替换，效率几乎相等，差别在 0.1% 左右。
如果不需要替换：用 strpos 快 200%。

1.3 压缩大的字符串
使用 gzcompress() 和 gzuncompress() 对容量大的字符串进行压缩和解压，再存入和取出数据库。
这种内置的函数使用gzip算法，能压缩字符串90%。

1.4 echo 输出
echo 字符串用逗号代替点连接符更快些。
虽然，echo是一种语言结构，不是真正的函数。
但是，它可以把逗号隔开的多个字符串当作“函数”参数传入，所以速度会更快。
echo $str1, $str2;       // 速度快
echo $str1 . $str2;      // 速度稍慢

1.5 尽量用单引号
PHP 引擎允许使用单引号和双引号来封装字符串变量，但是它们的速度是有很大的差别的！
使用双引号的字符串会告诉 PHP 引擎，首先去读取字符串内容，查找其中的变量，并改为变量对应的值。
一般来说字符串是没有变量的，使用双引号会导致性能不佳。
最好使用字符串连接，而不是双引号字符串。

$output = "This is a plain string";  // 不好的实践
$output = 'This is a plain string';  // 好的实践

$type = "mixed";                     // 不好的实践
$output = "This is a $type string";

$type = 'mixed';                     // 好的实践
$output = 'This is a ' . $type . ' string';

1.6 使用isset代替strlen
在检验字符串长度时，我们第一想法会使用 strlen() 函数。
isset函数执行起来相当快，因为它不做任何计算，
只返回在zval结构（C的内置数据结构，用于存储PHP变量）中存储的已知字符串长度。
但是，由于strlen()是函数，多多少少会有些慢，因为函数调用会经过诸多步骤，
如字母小写化、哈希查找，会跟随被调用的函数一起执行。
在某些情况下，你可以使用 isset() 技巧加速执行你的代码。例如：

if (strlen($foo) < 5) {
    echo "Foo is too short";
}

// 使用isset()
if (!isset($foo{5})) {
    echo "Foo is too short";
}

1.7 用split分割字符串
在分割字符串时，split()要比explode()快。

split()
0.001813 - 0.002271 seconds (avg 0.002042 seconds)
explode()
0.001678 - 0.003626 seconds (avg 0.002652 seconds)

1.8 echo效率高于print
因为echo没有返回值，print返回一个整型。
注意：echo输出大字符串的时候，如果没有调整就会严重影响性能。
打开Apache的mod_deflate进行压缩，或者打开ob_start将内容放进缓冲区，可以改善性能问题。

2 语句
2.1 最好不用@
用@掩盖错误会降低脚本运行速度，并且在后台有很多额外操作。
用@比起不用，效率差距 3 倍。特别不要在循环中使用@。
在 5 次循环的测试中，即使是先用error_reporting(0)关掉错误，循环完成后再打开，都比用@快。

2.2 避免使用魔术方法
对于__开头的函数就命名为魔术函数，它们都在特定的条件下触发。
这些魔术函数包括：__construct()、__get()、__call()、__autoload()等等。
以__autoload() 为例，如果不能将类名与实际的磁盘文件对应起来，将不得不做大量的文件存在判断。
而判断文件存在需要磁盘I/O操作，众所周知，磁盘I/O操作的效率很低，
因此这才是使得autoload机制效率降低的原因。
因此，在系统设计时，需要定义一套清晰的、将类名与实际磁盘文件映射的机制。
这个规则越简单越明确，__autoload()机制的效率就越高。
autoload机制并不是天然的效率低下，只有滥用autoload、设计不好的自动装载函数，才会导致其效率的降低.
所以说，尽量避免使用__autoload等魔术方法，有待商榷。

2.3 别在循环里用函数
例如：
for($x=0; $x < count($array); $x++) {
}
这种写法在每次循环的时候都会调用 count() 函数，效率大大降低，建议这样：

$len = count($array);
for($x=0; $x < $len; $x++) {
}
让函数在循环外面一次获得循环次数。

2.4 使用三元运算符
在简单的判断语句中，三元运算符?:更简洁高效。

2.5 使用选择分支语句
switch、case好于使用多个if、else if语句，并且代码更加容易阅读和维护。

2.6 屏蔽敏感信息
使用 error_reporting() 函数来预防潜在的敏感信息显示给用户。
理想的错误报告应该被完全禁用在php.ini文件里。
如果用的是共享虚拟主机，php.ini不能修改，最好添加 error_reporting() 函数。
放在每个脚本文件的第一行，或者用require_once()来加载，
能有效的保护敏感的SQL查询和路径，在出错时不被显示。

2.7 不实用段标签<?
不要使用开始标志的缩写形式，你正在使用这样的符号吗<?，应该用完整的<?php开始标签。
当然，如果是输出变量，用<?= $value ?>这种方式是鼓励的，可以是代码更加简洁。

2.8 纯PHP代码不加结束标记
如果文件内容是纯 PHP 代码，最好在文件末尾删除 PHP 结束标记?>。
这可以避免在 PHP 结束标记之后万一意外加入了空格或者换行符，
会导致 PHP 开始输出这些空白，而脚本中此时并无输出的意图。

2.9 永远不要使用register_globals和magic quotes
这是两个很古老的功能，在当时（十年前）也许是一个好方法，但现在看来并非如此。
老版本的PHP在安装时会默认打开这两个功能，这会引起安全漏洞、编程错误及其他的问题。
如只有用户输入了数据时才会创建变量等。
PHP5.4.0开始这两个功能都被舍弃了，所以每个程序员都应该避免使用。
如果你过去的程序有使用这两项功能，那就尽快将其剔除吧。

3 函数
3.1 尽量使用PHP内部函数
内置函数使用C语言实现，并且经过PHP官方优化，效率更高。

3.2 使用绝对路径
在include和require中尽量使用绝对路径。
如果包含相对路径，PHP会在include_path里面遍历查找文件。
用绝对路径就会避免此类问题，解析路径所需的时间会更少。

3.3 包含文件
尽量不要用require_once和include_once包含文件，它们多一个判断文件是否被引用的过程，能不用尽量不用。
而使用require、include方法代替。
鸟哥在其博客中就多次声明，尽量不要用require_once和include_once。

3.4 函数快于类方法
调用只有一个参数、并且函数体为空的函数，花费的时间等于7-8次$localvar++运算。
而同一功能的类方法大约为15次$localvar++运算。

3.5 用子类方法
基类里面只放能重用的方法，其他功能尽量放在子类中实现，子类里方法的性能优于在基类中。

3.6 类的性能和其方法数量没有关系
新添加10个或多个方法到测试的类后，性能没什么差异。

3.7 读取文件内容
在可以用file_get_contents()替代file()、fopen()、feof()、fgets()
等系列方法的情况下，尽量用file_get_contents()。
因为他的效率高得多！

3.8  引用传递参数
通过参数地址引用的方式，实现函数多个返回值，这比按值传递效率高。
方法是在参数变量前加个 &。

3.9 方法不要细分得过多
仔细想想你真正打算重用的是哪些代码？

3.10 尽量静态化
如果一个方法能被静态，那就声明它为静态的，速度可提高1/4，甚至我测试的时候，这个提高了近三倍。
当然了，这个测试方法需要在十万级以上次执行，效果才明显。
其实，静态方法和非静态方法的效率主要区别在内存。
静态方法在程序开始时生成内存，实例方法（非静态方法）在程序运行中生成内存。
所以，静态方法可以直接调用，实例方法要先成生实例再调用，静态速度很快，但是多了会占内存。
任何语言都是对内存和磁盘的操作，至于是否面向对象，只是软件层的问题，底层都是一样的，只是实现方法不同。
静态内存是连续的，因为是在程序开始时就生成了，而实例方法申请的是离散的空间，所以当然没有静态方法快。
静态方法始终调用同一块内存，其缺点就是不能自动进行销毁，而实例化可以销毁。

3.11 用C扩展方式实现
如果在代码中存在大量耗时的函数，可以考虑用C扩展的方式实现它们。

4 变量
4.1 及时销毁变量
数组、对象和GLOBAL变量在 PHP 中特别占内存的，这个由于 PHP 的底层的zend引擎引起的。
一般来说，PHP数组的内存利用率只有 1/10。
也就是说，一个在C语言里面100M 内存的数组，在PHP里面就要1G。
特别是，在PHP作为后台服务器的系统中，经常会出现内存耗费太大的问题。

4.2 使用$_SERVER变量
如果你需要得到脚本执行的时间，$_SERVER['REQUSET_TIME']优于time()。
一个是现成就可以直接用，一个还需要函数得出的结果。

4.3 方法里建立局部变量
在类的方法里建立局部变量速度最快，几乎和在方法里调用局部变量一样快。

4.4 局部变量比全局变量快
由于局部变量是存在栈中的。
当一个函数占用的栈空间不是很大的时候，这部分内存很有可能全部命中cache，CPU访问的效率是很高的。
相反，如果一个函数同时使用全局变量和局部变量，
当这两段地址相差较大时，cpu cache需要来回切换，效率会下降。

4.5 局部变量而不是对象属性
建立一个对象属性（类里面的变量，例如：$this->prop++）比局部变量要慢3倍。

4.6 提前声明局部变量
建立一个未声明的局部变量，要比建立一个已经定义过的局部变量慢9-10倍。

4.7 谨慎声明全局变量
声明一个未被任何一个函数使用过的全局变量，也会使性能降低。
这和声明相同数量的局部变量一样，PHP可能去检查这个全局变量是否存在。

4.8 使用++$i递增
当执行变量$i的递增或递减时，$i++会比++$i慢一些。
这种差异是PHP特有的，并不适用于其他语言，所以请不要修改你的C或Java代码，并指望它们能立即变快，没用的。
++$i更快是因为它只需要3条指令(opcodes)，$i++则需要4条指令。
后置递增实际上会产生一个临时变量，这个临时变量随后被递增。
而前置递增直接在原值上递增。
这是最优化处理的一种，正如Zend的PHP优化器所作的那样。
牢记，这个优化处理不失为一个好主意，因为不是所有的指令优化器都会做同样的优化处理。

4.9 不要随便复制变量
有时候为了使 PHP 代码更加整洁，一些 PHP 新手（包括我）会把预定义好的变量，复制到一个名字更简短的变量中。
其实这样做的结果是增加了一倍的内存消耗，只会使程序更加慢。
试想一下，在下面的例子中，如果用户恶意插入 512KB 字节的文字，就会导致 1MB 的内存被消耗！

// 不好的实践
$description = $_POST['description'];
echo $description;

// 好的实践
 echo $_POST['description'];
4.10 循环内部不要声明变量

尤其是大变量，这好像不只是PHP里面要注意的问题吧？

4.11 一定要对变量进行初始化
这里的“初始化”指的是“声明”。
当需要没有初始化的变量，PHP解释器会自动创建一个变量，但依靠这个特性来编程并不是一个好主意。
这会造成程序的粗糙，或者使代码变得另人迷惑。
因为你需要探寻这个变量是从哪里开始被创建的。
另外，对一个没有初始化的变量进行递增操作要比初始化过的来得慢。
所以对变量进行初始化会是个不错的主意。

5 数组
5.1 用字符串而不是数组作为参数
如果一个函数既能接受数组，又能接受简单字符做为参数，那么尽量用字符作为参数。
例如，字符替换函数，参数列表并不是太长，就可以考虑额外写一段替换代码。
使得每次传递参数都是一个字符，而不是接受数组做为查找和替换参数。

5.2 数组元素加引号
$row['id']比$row[id]速度快7倍。
如果不带引号，例如$a[name]，那么PHP会首先检查有没有define定义的name常量。
如果有，就用这个常量值作为数组键值。如果没有，再查找键值为字符串'name'的数组元素。
多了一个查找判断的过程，所以建议养成数组键名加引号的习惯。
正如上面字符串部分所述，用'又比用"速度更快。

5.3 多维数组操作
多维数组尽量不要循环嵌套赋值。

5.4 循环用foreach
尽量用foreach代替while和for循环，效率更高。

6 架构
6.1 压缩输出
在php.ini中开启gzip压缩：
zlib.output_compression = On
zlib.output_compression_level = (level)
level可能是1-9之间的数字，你可以设置不同的数字。
几乎所有的浏览器都支持Gzip的压缩方式，gzip可以降低80%的输出.
付出的代价是，大概增加了10%的cpu计算量。
但是还是会赚到了，因为带宽减少了，页面加载会变得很快。
如果你使用apache，也可以激活mod_gzip模块。

6.2 静态化页面
Apache/Nginx解析一个PHP脚本的时间，要比解析一个静态HTML页面慢2至10倍。
所以尽量使页面静态化，或使用静态HTML页面。

6.3 将PHP升级到最新版
提高性能的最简单的方式是不断升级、更新PHP版本。

6.4 利用PHP的扩展
一直以来，大家都在抱怨PHP内容太过繁杂。
最近几年来，开发人员作出了相应的努力，移除了项目中的一些冗余特征。
即便如此，可用库以及其它扩展的数量还是很可观。
甚至一些开发人员开始考虑实施自己的扩展方案。

6.5 PHP缓存
一般情况下，PHP脚本被PHP引擎编译后执行，会被转换成机器语言，也称为操作码。
如果PHP脚本反复编译得到相同的结果，为什么不完全跳过编译过程呢？
PHP加速器缓存了编译后的机器码，允许代码根据要求立即执行，而不经过繁琐的编译过程。
对PHP开发人员而言，目前提供了两种可用的缓存方案。
一种是APC（Alternative PHP Cache，可选PHP缓存），它是一个可以通过PEAR安装的开源加速器。
另一种流行的方案是OPCode，也就是操作码缓存技术。

6.6 使用NoSQL缓存
Memchached或者Redis都可以。
这些是高性能的分布式内存对象缓存系统，能提高动态网络应用程序性能，减轻数据库的负担。
这对运算码 （OPcode）的缓存也很有用，使得脚本不必为每个请求重新编译。
```

### linux常用命令及工具
```
`ps aux` 查看进程pid等常用
`grep` 过滤，-E支持表达式
`curl` 发起一次请求
`kill -9 pid` 杀死进程
`top` linux版任务管理器，查看当前进程占用内存CPU
`wc -l` 计算行数
`tail -f file` 实时查看文件变化
`contab` 定时任务工具
```

### [进程的状态和转换详解](https://blog.csdn.net/qwe6112071/article/details/70473905)
```
进程的状态和转换
三态模型
一个进程从创建而产生至撤销而消亡的整个生命周期，可以用一组状态加以刻划，
根据三态模型，进程的生命周期可分为如下三种进程状态：
1. 运行态(running):占有处理器正在运行
2. 就绪态(ready):具备运行条件，等待系统分配处理器以便运行
3. 等待态(blocked):不具备运行条件，正在等待某个事件的完成

运行状态的进程将由于出现等待事件而进入等待状态，
当等待事件结束之后等待状态的进程将进入就绪状态，
而处理器的调度策略又会引起运行状态和就绪状态之间的切换。

引起进程状态转换的具体原因如下：
运行态—→等待态：等待使用资源；如等待外设传输；等待人工干预。
等待态—→就绪态：资源得到满足；如外设传输结束；人工干预完成。
运行态—→就绪态：运行时间片到；出现有更高优先权进程。
就绪态—→运行态：CPU 空闲时选择一个就绪进程。

五态模型
在一个实际的系统里进程的状态及其转换比上节叙述的会复杂一些，例如引入专门的新
建态（new）和终止态（exit ）
状态转换图如下所示：

建态对应于进程刚刚被创建的状态。创建一个进程要通过两个步骤，
1. 为一个新进程创建必要的管理信息，
2. 让该进程进入就绪态。此时进程将处于新建态，它并没有被提交执行，
而是在等待操作系统完成创建进程的必要操作。
需要注意的是，操作系统有时将根据系统性能或主存容量的限制推迟新建态进程的提交

类似地，进程的终止也要通过两个步骤，首先,是等待操作系统进行善后，然后,退出主存。当一个进
程到达了自然结束点，或是出现了无法克服的错误，或是被操作系统所终结，或是被其他有终止权的进
程所终结，它将进入终止态。进入终止态的进程以后不再执行，但依然临时保留在操作系统中等待善后 。
一旦其他进程完成了对终止态进程的信息抽取之后，操作系统将删除该进程。

引起进程状态转换的具体原因如下：
NULL—→新建态：执行一个程序，创建一个子进程。
新建态—→就绪态：当操作系统完成了进程创建的必要操作，并且当前系统的性能和虚拟内存的容量均允许。
运行态—→终止态：当一个进程到达了自然结束点，或是出现了无法克服的错误，
或是被操作系统所终结，或是被其他有终止权的进程所终结。
终止态—→NULL：完成善后操作。
就绪态—→终止态：未在状态转换图中显示，但某些操作系统允许父进程终结子进程。
等待态—→终止态：未在状态转换图中显示，但某些操作系统允许父进程终结子进程。

七态模型
进程的挂起
到目前为止，我们或多或少总是假设所有的进程都在内存中。
事实上，可能出现这样一些情况，例如由于进程的不断创建，
系统的资源已经不能满足进程运行的要求，这个时候就必须把某些进程挂起（suspend），
对换到磁盘镜像区中，暂时不参与进程调度，起到平滑系统操作负荷的目的。
引起进程挂起的原因是多样的，主要有：
1. 系统中的进程均处于等待状态，处理器空闲，
此时需要把一些阻塞进程对换出去，以腾出足够的内存装入就绪进程运行。
2. 进程竞争资源，导致系统资源不足，负荷过重，
此时需要挂起部分进程以调整系统负荷 ,保证系统的实时性或让系统正常运行。
3. 把一些定期执行的进程（如审计程序、监控程序、记账程序）对换出去，以减轻系统负荷。
4. 用户要求挂起自己的进程，以便根据中间执行情况和中间结果进行某些调试、检查和改正。
5. 父进程要求挂起自己的后代进程，以进行某些检查和改正。
6. 操作系统需要挂起某些进程，检查运行中资源使用情况，
以改善系统性能;或当系统出现故障或某些功能受到破坏时，需要挂起某些进程以排除故障。

七态模型描述
下面是具有七态模型的进程状态及其转换：

在此类系统中，进程增加了两个新状态：
挂起就绪态（ready,suspend）
挂起就绪态表明了进程具备运行条件但目前在二级存储器中，只有当它被对换到主存才能被调度执行
挂起等待态（blocked,suspend）挂起等待态则表明了进程正在等待某一个事件且在二级存储器中。
引起进程状态转换的具体原因如下：

等待态—→挂起等待态：如果当前不存在就绪进程，
那么至少有一个等待态进程将被对换出去成为挂起等待态；
操作系统根据当前资源状况和性能要求，可以决定把等待态进程对换出去成为挂起等待态。
挂起等待态—→挂起就绪态：引起进程等待的事件发生之后，相应的挂起等待态进程将转换为挂起就绪态。
挂起就绪态—→就绪态：当内存中没有就绪态进程，或者挂起就绪态进程具有比就绪态进程更高的优先级，
系统将把挂起就绪态进程转换成就绪态。
就绪态—→挂起就绪态：操作系统根据当前资源状况和性能要求，也可以决定把就绪态进程对换出去成为挂起就绪态。
挂起等待态—→等待态：当一个进程等待一个事件时，原则上不需要把它调入内存。但是在下面一种情况下，
这一状态变化是可能的。当一个进程退出后，主存已经有了一大块自由空间,
而某个挂起等待态进程具有较高的优先级并且操作系统已经得知导致它阻塞的事件即将结束，
此时便发生了这一状态变化。
运行态—→挂起就绪态：当一个具有较高优先级的挂起等待态进程的等待事件结束后，
它需要抢占 CPU，，而此时主存空间不够，从而可能导致正在运行的进程转化为挂起就绪态。
另外处于运行态的进程也可以自己挂起自己。
新建态—→挂起就绪态：考虑到系统当前资源状况和性能要求，
可以决定新建的进程将被对换出去成为挂起就绪态。
可以把一个挂起进程等同于不在主存的进程，因此挂起的进程将不参与进程调度直到它
们被对换进主存。一个挂起进程具有如下特征：
1. 该进程不能立即被执行。
2. 挂起进程可能会等待一个事件，但所等待的事件是独立于挂起条件的，事件结束并不能导致进程具备执行条件。
3. 进程进入挂起状态是由于操作系统、父进程或进程本身阻止它的运行。
4. 结束进程挂起状态的命令只能通过操作系统或父进程发出。
```

### TCP/IP
```
https://developer.51cto.com/art/201906/597961.htm
一、 计算机网络体系结构分层

计算机网络体系结构分层

不难看出，TCP/IP 与 OSI 在分层模块上稍有区别。
OSI 参考模型注重“通信协议必要的功能是什么”，
而 TCP/IP 则更强调“在计算机上实现协议应该开发哪种程序”。

二、 TCP/IP 基础
1. TCP/IP 的具体含义
从字面意义上讲，有人可能会认为 TCP/IP 是指 TCP 和 IP 两种协议。
实际生活当中有时也确实就是指这两种协议。
然而在很多情况下，它只是利用 IP 进行通信时所必须用到的协议群的统称。
具体来说，IP 或 ICMP、TCP 或 UDP、TELNET 或 FTP、以及 HTTP 等都属于 TCP/IP 协议。
他们与 TCP 或 IP 的关系紧密，是互联网必不可少的组成部分。
TCP/IP 一词泛指这些协议，因此，有时也称 TCP/IP 为网际协议群。

互联网进行通信时，需要相应的网络协议，TCP/IP 原本就是为使用互联网而开发制定的协议族。
因此，互联网的协议就是 TCP/IP，TCP/IP 就是互联网的协议。

网际协议群

2. 数据包

包、帧、数据包、段、消息

以上五个术语都用来表述数据的单位，大致区分如下：

包可以说是全能性术语；
帧用于表示数据链路层中包的单位；
数据包是 IP 和 UDP 等网络层以上的分层中包的单位；
段则表示 TCP 数据流中的信息；
消息是指应用协议中数据的单位。
每个分层中，都会对所发送的数据附加一个首部，在这个首部中包含了该层必要的信息，
如发送的目标地址以及协议相关信息。通常，为协议提供的信息为包首部，所要发送的内容为数据。
在下一层的角度看，从上一层收到的包全部都被认为是本层的数据。

数据包首部

网络中传输的数据包由两部分组成：一部分是协议所要用到的首部，另一部分是上一层传过来的数据。
首部的结构由协议的具体规范详细定义。在数据包的首部，明确标明了协议应该如何读取数据。
反过来说，看到首部，也就能够了解该协议必要的信息以及所要处理的数据。包首部就像协议的脸。

3. 数据处理流程

以用户 a 向用户 b 发送邮件为例子：

数据处理流程

应用程序处理

首先应用程序会进行编码处理，这些编码相当于 OSI 的表示层功能；

编码转化后，邮件不一定马上被发送出去，这种何时建立通信连接何时发送数据的管理功能，相当于 OSI 的会话层功能。

TCP 模块的处理

TCP 根据应用的指示，负责建立连接、发送数据以及断开连接。
TCP 提供将应用层发来的数据顺利发送至对端的可靠传输。
为了实现这一功能，需要在应用层数据的前端附加一个 TCP 首部。

IP 模块的处理
IP 将 TCP 传过来的 TCP 首部和 TCP 数据合起来当做自己的数据，并在 TCP 首部的前端加上自己的 IP 首部。
IP 包生成后，参考路由控制表决定接受此 IP 包的路由或主机。

网络接口（以太网驱动）的处理

从 IP 传过来的 IP 包对于以太网来说就是数据。
给这些数据附加上以太网首部并进行发送处理，生成的以太网数据包将通过物理层传输给接收端。

网络接口（以太网驱动）的处理

主机收到以太网包后，首先从以太网包首部找到 MAC 地址判断是否为发送给自己的包，若不是则丢弃数据。

如果是发送给自己的包，则从以太网包首部中的类型确定数据类型，
再传给相应的模块，如 IP、ARP 等。这里的例子则是 IP 。

IP 模块的处理

IP 模块接收到 数据后也做类似的处理。
从包首部中判断此 IP 地址是否与自己的 IP 地址匹配，
如果匹配则根据首部的协议类型将数据发送给对应的模块，如 TCP、UDP。这里的例子则是 TCP。

另外吗，对于有路由器的情况，接收端地址往往不是自己的地址，此时，需要借助路由控制表，在调查应该送往的主机或路由器之后再进行转发数据。

TCP 模块的处理

在 TCP 模块中，首先会计算一下校验和，判断数据是否被破坏。
然后检查是否在按照序号接收数据。***检查端口号，确定具体的应用程序。
数据被完整地接收以后，会传给由端口号识别的应用程序。

应用程序的处理

接收端应用程序会直接接收发送端发送的数据。通过解析数据，展示相应的内容。

三、传输层中的 TCP 和 UDP
TCP/IP 中有两个具有代表性的传输层协议，分别是 TCP 和 UDP。

TCP 是面向连接的、可靠的流协议。流就是指不间断的数据结构，当应用程序采用 TCP 发送消息时，
虽然可以保证发送的顺序，但还是犹如没有任何间隔的数据流发送给接收端。
TCP 为提供可靠性传输，实行“顺序控制”或“重发控制”机制。
此外还具备“流控制（流量控制）”、“拥塞控制”、提高网络利用率等众多功能。
UDP 是不具有可靠性的数据报协议。细微的处理它会交给上层的应用去完成。
在 UDP 的情况下，虽然可以确保发送消息的大小，却不能保证消息一定会到达。
因此，应用有时会根据自己的需要进行重发处理。
TCP 和 UDP 的优缺点无法简单地、绝对地去做比较：TCP 用于在传输层有必要实现可靠传输的情况；
而在一方面，UDP 主要用于那些对高速传输和实时性有较高要求的通信或广播通信。
TCP 和 UDP 应该根据应用的目的按需使用。

1. 端口号
数据链路和 IP 中的地址，分别指的是 MAC 地址和 IP 地址。
前者用来识别同一链路中不同的计算机，后者用来识别 TCP/IP 网络中互连的主机和路由器。
在传输层也有这种类似于地址的概念，那就是端口号。
端口号用来识别同一台计算机中进行通信的不同应用程序。因此，它也被称为程序地址。

1.1 根据端口号识别应用

一台计算机上同时可以运行多个程序。传输层协议正是利用这些端口号识别本机中正在进行通信的应用程序，并准确地将数据传输。

通过端口号识别应用

1.2 通过 IP 地址、端口号、协议号进行通信识别

仅凭目标端口号识别某一个通信是远远不够的。

通过端口号、IP地址、协议号进行通信识别

通信是在两台计算机上进行的。它们的目标端口号相同，都是80。这里可以根据源端口号加以区分。

目标端口号和源端口号完全相同，但它们各自的源 IP 地址不同。

此外，当 IP 地址和端口号全都一样时，我们还可以通过协议号来区分（TCP 和 UDP）。

1.3 端口号的确定
标准既定的端口号：这种方法也叫静态方法。它是指每个应用程序都有其指定的端口号。
但并不是说可以随意使用任何一个端口号。例如 HTTP、FTP、TELNET 等广为使用的应用协议中所使用的端口号就是固定的。
这些端口号被称为知名端口号，分布在 0~1023 之间；除知名端口号之外，还有一些端口号被正式注册，
它们分布在 1024~49151 之间，不过这些端口号可用于任何通信用途。
时序分配法：服务器有必要确定监听端口号，但是接受服务的客户端没必要确定端口号。
在这种方法下，客户端应用程序完全可以不用自己设置端口号，而全权交给操作系统进行分配。
动态分配的端口号范围在 49152~65535 之间。

1.4 端口号与协议
端口号由其使用的传输层协议决定。因此，不同的传输层协议可以使用相同的端口号。
此外，那些知名端口号与传输层协议并无关系。只要端口一致都将分配同一种应用程序进行处理。
2. UDP

UDP 不提供复杂的控制机制，利用 IP 提供面向无连接的通信服务。
并且它是将应用程序发来的数据在收到的那一刻，立即按照原样发送到网络上的一种机制。
即使是出现网络拥堵的情况，UDP 也无法进行流量控制等避免网络拥塞行为。
此外，传输途中出现丢包，UDP 也不负责重发。
甚至当包的到达顺序出现乱序时也没有纠正的功能。
如果需要以上的细节控制，不得不交由采用 UDP 的应用程序去处理。
UDP 常用于一下几个方面：
1.包总量较少的通信（DNS、SNMP等）；
2.视频、音频等多媒体通信（即时通信）；
3.限定于 LAN 等特定网络中的应用通信；4.广播通信（广播、多播）。
3. TCP
TCP 与 UDP 的区别相当大。它充分地实现了数据传输时各种控制功能，可以进行丢包时的重发控制，
还可以对次序乱掉的分包进行顺序控制。而这些在 UDP 中都没有。
此外，TCP 作为一种面向有连接的协议，只有在确认通信对端存在时才会发送数据，从而可以控制通信流量的浪费。
根据 TCP 的这些机制，在 IP 这种无连接的网络上也能够实现高可靠性的通信
（ 主要通过检验和、序列号、确认应答、重发控制、连接管理以及窗口控制等机制实现）。
3.1 三次握手（重点）
TCP 提供面向有连接的通信传输。面向有连接是指在数据通信开始之前先做好两端之间的准备工作。
所谓三次握手是指建立一个 TCP 连接时需要客户端和服务器端总共发送三个包以确认连接的建立。
在socket编程中，这一过程由客户端执行connect来触发。
三次握手
***次握手：客户端将标志位SYN置为1，随机产生一个值seq=J，并将该数据包发送给服务器端，
客户端进入SYN_SENT状态，等待服务器端确认。
第二次握手：服务器端收到数据包后由标志位SYN=1知道客户端请求建立连接，
服务器端将标志位SYN和ACK都置为1，ack=J+1，随机产生一个值seq=K，
并将该数据包发送给客户端以确认连接请求，服务器端进入SYN_RCVD状态。
第三次握手：客户端收到确认后，检查ack是否为J+1，ACK是否为1，如果正确则将标志位ACK置为1，
ack=K+1，并将该数据包发送给服务器端，服务器端检查ack是否为K+1，ACK是否为1，
如果正确则连接建立成功，客户端和服务器端进入ESTABLISHED状态，
完成三次握手，随后客户端与服务器端之间可以开始传输数据了。

3.2 四次挥手（重点）
四次挥手即终止TCP连接，就是指断开一个TCP连接时，需要客户端和服务端总共发送4个包以确认连接的断开。
在socket编程中，这一过程由客户端或服务端任一方执行close来触发。
由于TCP连接是全双工的，因此，每个方向都必须要单独进行关闭，这一原则是当一方完成数据发送任务后，
发送一个FIN来终止这一方向的连接，收到一个FIN只是意味着这一方向上没有数据流动了，即不会再收到数据了，
但是在这个TCP连接上仍然能够发送数据，直到这一方向也发送了FIN。
首先进行关闭的一方将执行主动关闭，而另一方则执行被动关闭。

四次挥手
中断连接端可以是客户端，也可以是服务器端。
***次挥手：客户端发送一个FIN=M，用来关闭客户端到服务器端的数据传送，
客户端进入FIN_WAIT_1状态。意思是说"我客户端没有数据要发给你了"，
但是如果你服务器端还有数据没有发送完成，则不必急着关闭连接，可以继续发送数据。
第二次挥手：服务器端收到FIN后，先发送ack=M+1，告诉客户端，你的请求我收到了，
但是我还没准备好，请继续你等我的消息。这个时候客户端就进入FIN_WAIT_2 状态，继续等待服务器端的FIN报文。
第三次挥手：当服务器端确定数据已发送完成，则向客户端发送FIN=N报文，告诉客户端，好了，
我这边数据发完了，准备好关闭连接了。服务器端进入LAST_ACK状态。
第四次挥手：客户端收到FIN=N报文后，就知道可以关闭连接了，但是他还是不相信网络，
怕服务器端不知道要关闭，所以发送ack=N+1后进入TIME_WAIT状态，如果Server端没有收到ACK则可以重传。
服务器端收到ACK后，就知道可以断开连接了。客户端等待了2MSL后依然没有收到回复，
则证明服务器端已正常关闭，那好，我客户端也可以关闭连接了。最终完成了四次握手。
上面是一方主动关闭，另一方被动关闭的情况，实际中还会出现同时发起主动关闭的情况。

同时挥手
3.3 通过序列号与确认应答提高可靠性
在 TCP 中，当发送端的数据到达接收主机时，接收端主机会返回一个已收到消息的通知。
这个消息叫做确认应答（ACK）。当发送端将数据发出之后会等待对端的确认应答。
如果有确认应答，说明数据已经成功到达对端。反之，则数据丢失的可能性很大。
在一定时间内没有等待到确认应答，发送端就可以认为数据已经丢失，并进行重发。
由此，即使产生了丢包，仍然能够保证数据能够到达对端，实现可靠传输。
未收到确认应答并不意味着数据一定丢失。也有可能是数据对方已经收到，只是返回的确认应答在途中丢失。
这种情况也会导致发送端误以为数据没有到达目的地而重发数据。
此外，也有可能因为一些其他原因导致确认应答延迟到达，在源主机重发数据以后才到达的情况也屡见不鲜。
此时，源主机只要按照机制重发数据即可。
对于目标主机来说，反复收到相同的数据是不可取的。为了对上层应用提供可靠的传输，目标主机必须放弃重复的数据包。
为此我们引入了序列号。
序列号是按照顺序给发送数据的每一个字节（8位字节）都标上号码的编号。
接收端查询接收数据 TCP 首部中的序列号和数据的长度，将自己下一步应该接收的序列号作为确认应答返送回去。
通过序列号和确认应答号，TCP 能够识别是否已经接收数据，又能够判断是否需要接收，从而实现可靠传输。

序列号和确认应答
3.4 重发超时的确定
重发超时是指在重发数据之前，等待确认应答到来的那个特定时间间隔。如果超过这个时间仍未收到确认应答，
发送端将进行数据重发。最理想的是，找到一个最小时间，它能保证“确认应答一定能在这个时间内返回”。
TCP 要求不论处在何种网络环境下都要提供高性能通信，并且无论网络拥堵情况发生何种变化，
都必须保持这一特性。为此，它在每次发包时都会计算往返时间及其偏差。将这个往返时间和偏差时间相加，
重发超时的时间就是比这个总和要稍大一点的值。
在 BSD 的 Unix 以及 Windows 系统中，超时都以0.5秒为单位进行控制，因此重发超时都是0.5秒的整数倍。
不过，最初其重发超时的默认值一般设置为6秒左右。
数据被重发之后若还是收不到确认应答，则进行再次发送。此时，等待确认应答的时间将会以2倍、4倍的指数函数延长。
此外，数据也不会被***、反复地重发。达到一定重发次数之后，如果仍没有任何确认应答返回，
就会判断为网络或对端主机发生了异常，强制关闭连接。并且通知应用通信异常强行终止。

3.5 以段为单位发送数据
在建立 TCP 连接的同时，也可以确定发送数据包的单位，我们也可以称其为“***消息长度”（MSS）。
最理想的情况是，***消息长度正好是 IP 中不会被分片处理的***数据长度。
TCP 在传送大量数据时，是以 MSS 的大小将数据进行分割发送。进行重发时也是以 MSS 为单位。
MSS 在三次握手的时候，在两端主机之间被计算得出。两端的主机在发出建立连接的请求时，
会在 TCP 首部中写入 MSS 选项，告诉对方自己的接口能够适应的 MSS 的大小。然后会在两者之间选择一个较小的值投入使用。
3.6 利用窗口控制提高速度
TCP 以1个段为单位，每发送一个段进行一次确认应答的处理。这样的传输方式有一个缺点，就是包的往返时间越长通信性能就越低。
为解决这个问题，TCP 引入了窗口这个概念。确认应答不再是以每个分段，而是以更大的单位进行确认，
转发时间将会被大幅地缩短。也就是说，发送端主机，在发送了一个段以后不必要一直等待确认应答，而是继续发送。如下图所示：

窗口控制
窗口大小就是指无需等待确认应答而可以继续发送数据的***值。上图中窗口大小为4个段。
这个机制实现了使用大量的缓冲区，通过对多个段同时进行确认应答的功能。
3.7 滑动窗口控制

滑动窗口
上图中的窗口内的数据即便没有收到确认应答也可以被发送出去。不过，在整个窗口的确认应答没有到达之前，
如果其中部分数据出现丢包，那么发送端仍然要负责重传。为此，
发送端主机需要设置缓存保留这些待被重传的数据，直到收到他们的确认应答。
在滑动窗口以外的部分包括未发送的数据以及已经确认对端已收到的数据。
当数据发出后若如期收到确认应答就可以不用再进行重发，此时数据就可以从缓存区清除。
收到确认应答的情况下，将窗口滑动到确认应答中的序列号的位置。
这样可以顺序地将多个段同时发送提高通信性能。这种机制也别称为滑动窗口控制。
3.8 窗口控制中的重发控制
在使用窗口控制中， 出现丢包一般分为两种情况：
确认应答未能返回的情况。在这种情况下，数据已经到达对端，是不需要再进行重发的，如下图：

部分确认应答丢失

② 某个报文段丢失的情况。接收主机如果收到一个自己应该接收的序列号以外的数据时，
会针对当前为止收到数据返回确认应答。如下图所示，当某一报文段丢失后，
发送端会一直收到序号为1001的确认应答，因此，在窗口比较大，又出现报文段丢失的情况下，
同一个序列号的确认应答将会被重复不断地返回。而发送端主机如果连续3次收到同一个确认应答，
就会将其对应的数据进行重发。这种机制比之前提到的超时管理更加高效，因此也被称为高速重发控制。

高速重发控制

四、网络层中的 IP 协议
IP（IPv4、IPv6）相当于 OSI 参考模型中的第3层——网络层。网络层的主要作用是“实现终端节点之间的通信”。
这种终端节点之间的通信也叫“点对点通信”。
网络的下一层——数据链路层的主要作用是在互连同一种数据链路的节点之间进行包传递。
而一旦跨越多种数据链路，就需要借助网络层。网络层可以跨越不同的数据链路，
即使是在不同的数据链路上也能实现两端节点之间的数据包传输。
IP 大致分为三大作用模块，它们是 IP 寻址、路由（最终节点为止的转发）以及 IP 分包与组包。
1. IP 地址

1.1 IP 地址概述

在计算机通信中，为了识别通信对端，必须要有一个类似于地址的识别码进行标识。
在数据链路中的 MAC 地址正是用来标识同一个链路中不同计算机的一种识别码。
作为网络层的 IP ,也有这种地址信息，一般叫做 IP 地址。
IP 地址用于在“连接到网络中的所有主机中识别出进行通信的目标地址”。
因此，在 TCP/IP 通信中所有主机或路由器必须设定自己的 IP 地址。
不论一台主机与哪种数据链路连接，其 IP 地址的形式都保持不变。
IP 地址（IPv4 地址）由32位正整数来表示。IP 地址在计算机内部以二进制方式被处理。
然而，由于我们并不习惯于采用二进制方式，我们将32位的 IP 地址以每8位为一组，
分成4组，每组以 “.” 隔开，再将每组数转换成十进制数。如下：

1.2 IP 地址由网络和主机两部分标识组成

如下图，网络标识在数据链路的每个段配置不同的值。网络标识必须保证相互连接的每个段的地址不相重复。
而相同段内相连的主机必须有相同的网络地址。IP 地址的“主机标识”则不允许在同一个网段内重复出现。
由此，可以通过设置网络地址和主机地址，在相互连接的整个网络中保证每台主机的 IP 地址都不会相互重叠。即 IP 地址具有了唯一性。

IP地址的主机标识

如下图，IP 包被转发到途中某个路由器时，正是利用目标 IP 地址的网络标识进行路由。
因为即使不看主机标识，只要一见到网络标识就能判断出是否为该网段内的主机。

IP地址的网络标识

1.3 IP 地址的分类

IP 地址分为四个级别，分别为A类、B类、C类、D类。它根据 IP 地址中从第 1 位到第 4 位的比特列对其网络标识和主机标识进行区分。
A 类 IP 地址是首位以 “0” 开头的地址。从第 1 位到第 8 位是它的网络标识。
用十进制表示的话，0.0.0.0~127.0.0.0 是 A 类的网络地址。A 类地址的后 24 位相当于主机标识。
因此，一个网段内可容纳的主机地址上限为16,777,214个。
B 类 IP 地址是前两位 “10” 的地址。从第 1 位到第 16 位是它的网络标识。
用十进制表示的话，128.0.0.0~191.255.0.0 是 B 类的网络地址。B 类地址的后 16 位相当于主机标识。
因此，一个网段内可容纳的主机地址上限为65,534个。
C 类 IP 地址是前三位为 “110” 的地址。从第 1 位到第 24 位是它的网络标识。
用十进制表示的话，192.0.0.0~223.255.255.0 是 C 类的网络地址。C 类地址的后 8 位相当于主机标识。
因此，一个网段内可容纳的主机地址上限为254个。
D 类 IP 地址是前四位为 “1110” 的地址。从第 1 位到第 32 位是它的网络标识。
用十进制表示的话，224.0.0.0~239.255.255.255 是 D 类的网络地址。D 类地址没有主机标识，常用于多播。
在分配 IP 地址时关于主机标识有一点需要注意。即要用比特位表示主机地址时，不可以全部为 0 或全部为 1。
因为全部为 0 只有在表示对应的网络地址或 IP 地址不可以获知的情况下才使用。
而全部为 1 的主机通常作为广播地址。因此，在分配过程中，应该去掉这两种情况。
这也是为什么 C 类地址每个网段最多只能有 254（ 28 - 2 = 254）个主机地址的原因。
1.4 广播地址

广播地址用于在同一个链路中相互连接的主机之间发送数据包。将 IP 地址中的主机地址部分全部设置为 1，就成了广播地址。
广播分为本地广播和直接广播两种。在本网络内的广播叫做本地广播；在不同网络之间的广播叫做直接广播。
1.5 IP 多播

多播用于将包发送给特定组内的所有主机。由于其直接使用 IP 地址，因此也不存在可靠传输。
相比于广播，多播既可以穿透路由器，又可以实现只给那些必要的组发送数据包。请看下图：
太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

IP 多播
多播使用 D 类地址。因此，如果从首位开始到第 4 位是 “1110”，就可以认为是多播地址。而剩下的 28 位可以成为多播的组编号。
此外， 对于多播，所有的主机（路由器以外的主机和终端主机）必须属于 224.0.0.1 的组，所有的路由器必须属于 224.0.0.2 的组。
1.6 子网掩码

现在一个 IP 地址的网络标识和主机标识已不再受限于该地址的类别，
而是由一个叫做“子网掩码”的识别码通过子网网络地址细分出比 A 类、B 类、C 类更小粒度的网络。
这种方式实际上就是将原来 A 类、B 类、C 类等分类中的主机地址部分用作子网地址，
可以将原网络分为多个物理网络的一种机制。
子网掩码用二进制方式表示的话，也是一个 32 位的数字。它对应 IP 地址网络标识部分的位全部为 “1”，
对应 IP 地址主机标识的部分则全部为 “0”。由此，一个 IP 地址可以不再受限于自己的类别，
而是可以用这样的子网掩码自由地定位自己的网络标识长度。当然，子网掩码必须是 IP 地址的首位开始连续的 “1”。
对于子网掩码，目前有两种表示方式。***种是，将 IP 地址与子网掩码的地址分别用两行来表示。
以 172.20.100.52 的前 26 位是网络地址的情况为例，如下：

第二种表示方式是，在每个 IP 地址后面追加网络地址的位数用 “/ ” 隔开，如下：
太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

2. 路由

发送数据包时所使用的地址是网络层的地址，即 IP 地址。然而仅仅有 IP 地址还不足以实现将数据包发送到对端目标地址，
在数据发送过程中还需要类似于“指明路由器或主机”的信息，以便真正发往目标地址。保存这种信息的就是路由控制表。
该路由控制表的形成方式有两种：一种是管理员手动设置，另一种是路由器与其他路由器相互交换信息时自动刷新。
前者也叫做静态路由控制，而后者叫做动态路由控制。
IP 协议始终认为路由表是正确的。然后，IP 本身并没有定义制作路由控制表的协议。
即 IP 没有制作路由控制表的机制。该表示由一个叫做“路由协议”的协议制作而成。
2.1 IP 地址与路由控制

IP 地址的网络地址部分用于进行路由控制。
路由控制表中记录着网络地址与下一步应该发送至路由器的地址。
在发送 IP 包时，首先要确定 IP 包首部中的目标地址，再从路由控制表中找到与该地址具有相同网络地址的记录，
根据该记录将 IP 包转发给相应的下一个路由器。如果路由控制表中存在多条相同网络地址的记录，就选择一个最为吻合的网络地址。

路由控制表与 IP 包发送

3. IP 分包与组包

每种数据链路的***传输单元（MTU）都不尽相同，因为每个不同类型的数据链路的使用目的不同。使用目的不同，可承载的 MTU 也就不同。
任何一台主机都有必要对 IP 分片进行相应的处理。分片往往在网络上遇到比较大的报文无法一下子发送出去时才会进行处理。
经过分片之后的 IP 数据报在被重组的时候，只能由目标主机进行。路由器虽然做分片但不会进行重组。
3.1 路径 MTU 发现

分片机制也有它的不足。如路由器的处理负荷加重之类。因此，只要允许，是不希望由路由器进行 IP 数据包的分片处理的。
为了应对分片机制的不足，“路径 MTU 发现” 技术应运而生。路径 MTU 指的是，
发送端主机到接收端主机之间不需要分片是*** MTU 的大小。即路径中存在的所有数据链路中最小的 MTU 。
进行路径 MTU 发现，就可以避免在中途的路由器上进行分片处理，也可以在 TCP 中发送更大的包。
4. IPv6

IPv6（IP version 6）是为了根本解决 IPv4 地址耗尽的问题而被标准化的网际协议。
IPv4 的地址长度为 4 个 8 位字节，即 32 比特。而 IPv6 的地址长度则是原来的 4 倍，即 128 比特，一般写成 8 个 16 位字节。
4.1 IPv6 的特点

IP 得知的扩大与路由控制表的聚合。
性能提升。包首部长度采用固定的值（40字节），不再采用首部检验码。简化首部结构，减轻路由器负担。路由器不再做分片处理。
支持即插即用功能。即使没有DHCP服务器也可以实现自动分配 IP 地址。
采用认证与加密功能。应对伪造 IP 地址的网络安全功能以及防止线路窃听的功能。
多播、Mobile IP 成为扩展功能。
4.2 IPv6 中 IP 地址的标记方法

一般人们将 128 比特 IP 地址以每 16 比特为一组，每组用冒号（“：”）隔开进行标记。
而且如果出现连续的 0 时还可以将这些 0 省略，并用两个冒号（“：：”）隔开。但是，一个 IP 地址中只允许出现一次两个连续的冒号。
4.3 IPv6 地址的结构

IPv6 类似 IPv4，也是通过 IP 地址的前几位标识 IP 地址的种类。
在互联网通信中，使用一种全局的单播地址。它是互联网中唯一的一个地址，不需要正式分配 IP 地址。
太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

4.4 全局单播地址

全局单播地址是指世界上唯一的一个地址。它是互联网通信以及各个域内部通信中最为常用的一个 IPv6 地址。
格式如下图所示，现在 IPv6 的网络中所使用的格式为，n = 48，m = 16 
以及 128 - n - m = 64。即前 64 比特为网络标识，后 64 比特为主机标识。
太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

全局单播地址

4.5 链路本地单播地址

链路本地单播地址是指在同一个数据链路内唯一的地址。它用于不经过路由器，
在同一个链路中的通信。通常接口 ID 保存 64 比特版的 MAC 地址。
太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

链路本地单播地址

4.6 唯一本地地址

唯一本地地址是不进行互联网通信时所用的地址。
唯一本地地址虽然不会与互联网连接，但是也会尽可能地随机生成一个唯一的全局 ID。
L 通常被置为 1
全局 ID 的值随机决定
子网 ID 是指该域子网地址
接口 ID 即为接口的 ID
太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

唯一本地地址

4.7 IPv6 分段处理

IPv6 的分片处理只在作为起点的发送端主机上进行，路由器不参与分片。
IPv6 中最小 MTU 为 1280 字节，因此，在嵌入式系统中对于那些有一定系统资源限制的设备来说，
不需要进行“路径 MTU 发现”，而是在发送 IP 包时直接以 1280 字节为单位分片送出。
4.8 IP 首部（暂略）

5. IP 协议相关技术

IP 旨在让最终目标主机收到数据包，但是在这一过程中仅仅有 IP 是无法实现通信的。
必须还有能够解析主机名称和 MAC 地址的功能，以及数据包在发送过程中异常情况处理的功能。
5.1 DNS

我们平常在访问某个网站时不适用 IP 地址，而是用一串由罗马字和点号组成的字符串。
而一般用户在使用 TCP/IP 进行通信时也不使用 IP 地址。
能够这样做是因为有了 DNS （Domain Name System）功能的支持。
DNS 可以将那串字符串自动转换为具体的 IP 地址。
这种 DNS 不仅适用于 IPv4，还适用于 IPv6。
5.2 ARP

只要确定了 IP 地址，就可以向这个目标地址发送 IP 数据报。然而，在底层数据链路层，
进行实际通信时却有必要了解每个 IP 地址所对应的 MAC 地址。
ARP 是一种解决地址问题的协议。以目标 IP 地址为线索，
用来定位下一个应该接收数据分包的网络设备对应的 MAC 地址。
不过 ARP 只适用于 IPv4，不能用于 IPv6。IPv6 中可以用 ICMPv6 替代 ARP 发送邻居探索消息。
RARP 是将 ARP 反过来，从 MAC 地址定位 IP 地址的一种协议。
5.3 ICMP

ICMP 的主要功能包括，确认 IP 包是否成功送达目标地址，通知在发送过程当中 IP 包被废弃的具体原因，改善网络设置等。
IPv4 中 ICMP 仅作为一个辅助作用支持 IPv4。也就是说，在 IPv4 时期，即使没有 ICMP，
仍然可以实现 IP 通信。然而，在 IPv6 中，ICMP 的作用被扩大，如果没有 ICMPv6，IPv6 就无法进行正常通信。
5.4 DHCP

如果逐一为每一台主机设置 IP 地址会是非常繁琐的事情。特别是在移动使用笔记本电脑、
只能终端以及平板电脑等设备时，每移动到一个新的地方，都要重新设置 IP 地址。
于是，为了实现自动设置 IP 地址、统一管理 IP 地址分配，
就产生了 DHCP（Dynamic Host Configuration Protocol）协议。有了 DHCP，计算机只要连接到网络，
就可以进行 TCP/IP 通信。也就是说，DHCP 让即插即用变得可能。
DHCP 不仅在 IPv4 中，在 IPv6 中也可以使用。
5.5 NAT

NAT（Network Address Translator）是用于在本地网络中使用私有地址，在连接互联网时转而使用全局 IP 地址的技术。
除转换 IP 地址外，还出现了可以转换 TCP、UDP 端口号的 NAPT（Network Address Ports Translator）技术，
由此可以实现用一个全局 IP 地址与多个主机的通信。
NAT（NAPT）实际上是为正在面临地址枯竭的 IPv4 而开发的技术。不过，在 IPv6 中为了提高网络安全也在使用 NAT，
在 IPv4 和 IPv6 之间的相互通信当中常常使用 NAT-PT。
5.6 IP 隧道

太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

夹着 IPv4 网络的两个 IPv6 网络

如上图的网络环境中，网络 A 与网络 B 之间无法直接进行通信，为了让它们之间正常通信，这时必须得采用 IP 隧道的功能。
IP 隧道可以将那些从网络 A 发过来的 IPv6 的包统合为一个数据，再为之追加一个 IPv4 的首部以后转发给网络 C。
一般情况下，紧接着 IP 首部的是 TCP 或 UDP 的首部。然而，现在的应用当中“ IP 首部的后面还是 IP 首部
”或者“ IP 首部的后面是 IPv6 的首部”等情况与日俱增。这种在网络层的首部后面追加网络层首部的通信方法就叫做“ IP 隧道”。
```

### 四层模型及OSI七层参考模型
```
https://blog.csdn.net/guoguo527/article/details/52078962
1. OSI七层和TCP/IP四层的关系

1.1 OSI引入了服务、接口、协议、分层的概念，TCP/IP借鉴了OSI的这些概念建立TCP/IP模型。

1.2 OSI先有模型，后有协议，先有标准，后进行实践；而TCP/IP则相反，先有协议和应用再提出了模型，且是参照的OSI模型。

1.3 OSI是一种理论下的模型，而TCP/IP已被广泛使用，成为网络互联事实上的标准。

TCP：transmission control protocol 传输控制协议

UDP：user data protocol 用户数据报协议

OSI七层网络模型

TCP/IP四层概念模型  

对应网络协议

应用层（Application）

应用层

HTTP、TFTP, FTP, NFS, WAIS、SMTP

表示层（Presentation）

Telnet, Rlogin, SNMP, Gopher

会话层（Session）

SMTP, DNS

传输层（Transport）

传输层

TCP, UDP

网络层（Network）

网络层

IP, ICMP, ARP, RARP, AKP, UUCP

数据链路层（Data Link）

数据链路层

FDDI, Ethernet, Arpanet, PDN, SLIP, PPP

物理层（Physical）

IEEE 802.1A, IEEE 802.2到IEEE 802.11

2. OSI七层协议模型

七层结构记忆方法：应、表、会、传、网、数、物

应用层协议需要掌握的是：HTTP（Hyper text transfer protocol）、FTP（file transfer protocol）、SMTP（simple mail transfer rotocol）、POP3（post office protocol 3）、IMAP4（Internet mail access protocol）

3. TCP/IP四层模型

3.1 应用层：对应OSI中的应用层、表示层、会话层

3.2 物理链路层：对应OSI中的数据链路层、物理层（也有叫网络接口层）

3.3 数据包说明：
IP层传输单位是IP分组，属于点到点的传输；TCP层传输单位是TCP段，属于端到端的传输
```

### 三次握手四次挥手
```
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
```

### http版本
```
1.0
- 无状态、无连接。
HTTP1.0规定浏览器和服务器保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接，
服务器处理完成后立即断开TCP连接（无连接），服务器不跟踪每个客户端也不记录过去的请求（无状态）。

- 队头阻塞
HTTP1.0规定下一个请求必须在前一个请求响应到达之前才能发送。
假设前一个请求响应一直不到达，那么下一个请求就不发送，同样的后面的请求也给阻塞了。

1.1
- 长连接
HTTP1.1增加了一个Connection字段，通过设置Keep-Alive可以保持HTTP连接不断开，
避免了每次客户端与服务器请求都要重复建立释放建立TCP连接，提高了网络的利用率。
如果客户端想关闭HTTP连接，可以在请求头中携带Connection: false来告知服务器关闭请求。

- 管道化
基于HTTP1.1的长连接，使得请求管线化成为可能。管线化使得请求能够“并行”传输。

- 新的字段
如cache-control，支持断点传输，以及增加了Host字段（使得一个服务器能够用来创建多个Web站点）。

2.0
- 二进制分帧
HTTP2.0通过在应用层和传输层之间增加一个二进制分帧层，突破了HTTP1.1的性能限制、改进传输性能。

- 多路复用（连接共享）
HTTP2.0实现了真正的并行传输，它能够在一个TCP上进行任意数量HTTP请求。而这个强大的功能则是基于“二进制分帧”的特性。

- 头部压缩
HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，
既避免了重复header的传输，又减小了需要传输的大小。
高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。

- 服务器推送
服务器除了对最初请求的响应外，服务器还可以额外的向客户端推送资源，而无需客户端明确的请求。
```


### PHP 的垃圾收集机制是怎样的
```
php作为脚本语言是页面结束即释放变量所占内存的。 
当一个 PHP线程结束时，当前占用的所有内存空间都会被销毁，
当前程序中所有对象同时被销毁。GC进程一般都跟着每起一个SESSION而开始运行的.
gc目的是为了在session文件过期以后自动销毁删除这些文件.
在PHP中，没有任何变量指向这个对象时，这个对象就成为垃圾。
PHP会将其在内存中销毁；这是PHP的GC垃圾处理机制，防止内存溢出。
执行这些函数也可以起到回收作用__destruct /unset/mysql_close /fclose php
对session有明确的gc处理时间设定session.gc_maxlifetime 如果说有垃圾，
那就是整体的程序在框架使用中，会多次调用同一文件等等造成的非单件模式等。
所以在出来的时候，必要的用_once引用，在声明类的时候使用单件模式。还有简化逻辑等等。
```

### 深入理解PHP7内核之zval
```
https://www.laruence.com/2018/04/08/3170.html
在PHP5的时候, zval的定义如下:

struct _zval_struct {
     union {
          long lval;
          double dval;
          struct {
               char *val;
               int len;
          } str;
          HashTable *ht;
          zend_object_value obj;
          zend_ast *ast;
     } value;
     zend_uint refcount__gc;
     zend_uchar type;
     zend_uchar is_ref__gc;
};

对PHP5内核有了解的同学应该对这个结构比较熟悉, 因为zval可以表示一切PHP中的数据类型, 
所以它包含了一个type字段, 表示这个zval存储的是什么类型的值, 
常见的可能选项是IS_NULL, IS_LONG, IS_STRING, IS_ARRAY, IS_OBJECT等等.
根据type字段的值不同, 我们就要用不同的方式解读value的值, 这个value是个联合体, 
比如对于type是IS_STRING, 那么我们应该用value.str来解读zval.value字段, 
而如果type是IS_LONG, 那么我们就要用value.lval来解读.
另外, 我们知道PHP是用引用计数来做基本的垃圾回收的, 所以zval中有一个refcount__gc字段, 
表示这个zval的引用数目, 但这里有一个要说明的, 在5.3以前, 这个字段的名字还叫做refcount, 
5.3以后, 在引入新的垃圾回收算法来对付循环引用计数的时候, 作者加入了大量的宏来操作refcount, 
为了能让错误更快的显现, 所以改名为refcount__gc, 迫使大家都使用宏来操作refcount.
类似的, 还有is_ref, 这个值表示了PHP中的一个类型是否是引用, 这里我们可以看到是不是引用是一个标志位.
这就是PHP5时代的zval, 在2013年我们做PHP5的opcache JIT的时候, 因为JIT在实际项目中表现不佳, 
我们转而意识到这个结构体的很多问题. 而PHPNG项目就是从改写这个结构体而开始的.

存在的问题
PHP5的zval定义是随着Zend Engine 2诞生的, 随着时间的推移, 当时设计的局限性也越来越明显:
首先这个结构体的大小是(在64位系统)24个字节, 我们仔细看这个zval.value联合体, 
其中zend_object_value是最大的长板, 它导致整个value需要16个字节, 这个应该是很容易可以优化掉的, 
比如把它挪出来, 用个指针代替,因为毕竟IS_OBJECT也不是最最常用的类型.
第二, 这个结构体的每一个字段都有明确的含义定义, 没有预留任何的自定义字段, 
导致在PHP5时代做很多的优化的时候, 需要存储一些和zval相关的信息的时候, 不得不采用其他结构体映射, 
或者外部包装后打补丁的方式来扩充zval, 比如5.3的时候新引入专门解决循环引用的GC, 它不得采用如下的比较hack的做法:

/* The following macroses override macroses from zend_alloc.h */
#undef  ALLOC_ZVAL
#define ALLOC_ZVAL(z)                                   \
    do {                                                \
        (z) = (zval*)emalloc(sizeof(zval_gc_info));     \
        GC_ZVAL_INIT(z);                                \
    } while (0)
它用zval_gc_info劫持了zval的分配:

typedef struct _zval_gc_info {
    zval z;
    union {
        gc_root_buffer       *buffered;
        struct _zval_gc_info *next;
    } u;
} zval_gc_info;

然后用zval_gc_info来扩充了zval, 所以实际上来说我们在PHP5时代申请一个zval其实真正的是分配了32个字节, 
但其实GC只需要关心IS_ARRAY和IS_OBJECT类型, 这样就导致了大量的内存浪费.
还比如我之前做的Taint扩展, 我需要对于给一些字符串存储一些标记, zval里没有任何地方可以使用, 所以我不得不采用非常手段:

Z_STRVAL_PP(ppzval) = erealloc(Z_STRVAL_PP(ppzval), Z_STRLEN_PP(ppzval) + 1 + PHP_TAINT_MAGIC_LENGTH);
PHP_TAINT_MARK(*ppzval, PHP_TAINT_MAGIC_POSSIBLE);

就是把字符串的长度扩充一个int, 然后用magic number做标记写到后面去, 
这样的做法安全性和稳定性在技术上都是没有保障的
第三, PHP的zval大部分都是按值传递, 写时拷贝的值, 但是有俩个例外, 就是对象和资源, 
他们永远都是按引用传递, 这样就造成一个问题, 对象和资源在除了zval中的引用计数以外, 
还需要一个全局的引用计数, 这样才能保证内存可以回收. 所以在PHP5的时代, 以对象为例, 
它有俩套引用计数, 一个是zval中的, 另外一个是obj自身的计数:

typedef struct _zend_object_store_bucket {
    zend_bool destructor_called;
    zend_bool valid;
    union _store_bucket {
        struct _store_object {
            void *object;
            zend_objects_store_dtor_t dtor;
            zend_objects_free_object_storage_t free_storage;
            zend_objects_store_clone_t clone;
            const zend_object_handlers *handlers;
            zend_uint refcount;
            gc_root_buffer *buffered;
        } obj;
        struct {
            int next;
        } free_list;
    } bucket;
} zend_object_store_bucket;

除了上面提到的两套引用以外, 如果我们要获取一个object, 则我们需要通过如下方式:

EG(objects_store).object_buckets[Z_OBJ_HANDLE_P(z)].bucket.obj

经过漫长的多次内存读取, 才能获取到真正的objec对象本身. 效率可想而知.
这一切都是因为Zend引擎最初设计的时候, 并没有考虑到后来的对象. 一个良好的设计,
一旦有了意外, 就会导致整个结构变得复杂, 维护性降低, 这是一个很好的例子.
第四, 我们知道PHP中, 大量的计算都是面向字符串的, 然而因为引用计数是作用在zval的, 
那么就会导致如果要拷贝一个字符串类型的zval, 我们别无他法只能复制这个字符串. 
当我们把一个zval的字符串作为key添加到一个数组里的时候, 我们别无他法只能复制这个字符串. 
虽然在PHP5.4的时候, 我们引入了INTERNED STRING, 但是还是不能根本解决这个问题.
还比如, PHP中大量的结构体都是基于Hashtable实现的, 增删改查Hashtable的操作占据了大量的CPU时间, 
而字符串要查找首先要求它的Hash值, 理论上我们完全可以把一个字符串的Hash值计算好以后, 就存下来, 避免再次计算等等
第五, 这个是关于引用的, PHP5的时代, 我们采用写时分离, 但是结合到引用这里就有了一个经典的性能问题:

<?php
    function dummy($array) {}
    $array = range(1, 100000);
    $b = &$array;
    dummy($array);
?>

当我们调用dummy的时候, 本来只是简单的一个传值就行的地方, 但是因为$array曾经引用赋值给了$b, 
所以导致$array变成了一个引用, 于是此处就会发生分离, 
导致数组复制, 从而极大的拖慢性能, 这里有一个简单的测试:

<?php
$array = range(1, 100000);
function dummy($array) {}
$i = 0;
$start = microtime(true);
while($i++ < 100) {
    dummy($array);
}
printf("Used %sS\n", microtime(true) - $start);
$b = &$array; //注意这里, 假设我不小心把这个Array引用给了一个变量
$i = 0;
$start = microtime(true);
while($i++ < 100) {
    dummy($array);
}
printf("Used %ss\n", microtime(true) - $start);
?>

我们在5.6下运行这个例子, 得到如下结果:

$ php-5.6/sapi/cli/php /tmp/1.php
Used 0.00045204162597656s
Used 4.2051479816437s

相差1万倍之多. 这就造成, 如果在一大段代码中, 我不小心把一个变量变成了引用(比如foreach as &$v), 
那么就有可能触发到这个问题, 造成严重的性能问题, 然而却又很难排查.
第六, 也是最重要的一个, 为什么说它重要呢? 因为这点促成了很大的性能提升, 
我们习惯了在PHP5的时代调用MAKE_STD_ZVAL在堆内存上分配一个zval, 然后对他进行操作, 
最后呢通过RETURN_ZVAL把这个zval的值"copy"给return_value, 然后又销毁了这个zval, 比如pathinfo这个函数:

PHP_FUNCTION(pathinfo)
{
.....
     MAKE_STD_ZVAL(tmp);
     array_init(tmp);
.....
    if (opt == PHP_PATHINFO_ALL) {
        RETURN_ZVAL(tmp, 0, 1);
    } else {
.....
}

这个tmp变量, 完全是一个临时变量的作用, 我们又何必在堆内存分配它呢?
MAKE_STD_ZVAL/ALLOC_ZVAL在PHP5的时候, 到处都有, 是一个非常常见的用法, 
如果我们能把这个变量用栈分配, 那无论是内存分配, 还是缓存友好, 都是非常有利的
还有很多, 我就不一一详细列举了, 但是我相信你们也有了和我们当时一样的想法, zval必须得改改了, 对吧?

现在的zval
到了PHP7中, zval变成了如下的结构, 要说明的是, 这个是现在的结构, 已经和PHPNG时候有了一些不同了, 
因为我们新增加了一些解释 (联合体的字段), 但是总体大小, 结构, 是和PHPNG的时候一致的:

struct _zval_struct {
     union {
          zend_long         lval;             /* long value */
          double            dval;             /* double value */
          zend_refcounted  *counted;
          zend_string      *str;
          zend_array       *arr;
          zend_object      *obj;
          zend_resource    *res;
          zend_reference   *ref;
          zend_ast_ref     *ast;
          zval             *zv;
          void             *ptr;
          zend_class_entry *ce;
          zend_function    *func;
          struct {
               uint32_t w1;
               uint32_t w2;
          } ww;
     } value;
    union {
        struct {
            ZEND_ENDIAN_LOHI_4(
                zend_uchar    type,         /* active type */
                zend_uchar    type_flags,
                zend_uchar    const_flags,
                zend_uchar    reserved)     /* call info for EX(This) */
        } v;
        uint32_t type_info;
    } u1;
    union {
        uint32_t     var_flags;
        uint32_t     next;                 /* hash collision chain */
        uint32_t     cache_slot;           /* literal cache slot */
        uint32_t     lineno;               /* line number (for ast nodes) */
        uint32_t     num_args;             /* arguments number for EX(This) */
        uint32_t     fe_pos;               /* foreach position */
        uint32_t     fe_iter_idx;          /* foreach iterator index */
    } u2;
};

虽然看起来变得好大, 但其实你仔细看, 全部都是联合体, 这个新的zval在64位环境下,
现在只需要16个字节(2个指针size), 它主要分为俩个部分, value和扩充字段, 
而扩充字段又分为u1和u2俩个部分, 其中u1是type info, u2是各种辅助字段.

其中value部分, 是一个size_t大小(一个指针大小), 可以保存一个指针, 或者一个long, 或者一个double.
而type info部分则保存了这个zval的类型. 扩充辅助字段则会在多个其他地方使用, 
比如next, 就用在取代Hashtable中原来的拉链指针, 这部分会在以后介绍HashTable的时候再来详解.

类型
PHP7中的zval的类型做了比较大的调整, 总体来说有如下17种类型:

/* regular data types */
#define IS_UNDEF                    0
#define IS_NULL                     1
#define IS_FALSE                    2
#define IS_TRUE                     3
#define IS_LONG                     4
#define IS_DOUBLE                   5
#define IS_STRING                   6
#define IS_ARRAY                    7
#define IS_OBJECT                   8
#define IS_RESOURCE                 9
#define IS_REFERENCE                10
/* constant expressions */
#define IS_CONSTANT                 11
#define IS_CONSTANT_AST             12
/* fake types */
#define _IS_BOOL                    13
#define IS_CALLABLE                 14
/* internal types */
#define IS_INDIRECT                 15
#define IS_PTR                      17

其中PHP5的时候的IS_BOOL类型, 现在拆分成了IS_FALSE和IS_TRUE俩种类型. 而原来的引用是一个标志位, 现在的引用是一种新的类型.
对于IS_INDIRECT和IS_PTR来说, 这俩个类型是用在内部的保留类型, 用户不会感知到, 这部分会在后续介绍HashTable的时候也一并介绍.
从PHP7开始, 对于在zval的value字段中能保存下的值, 就不再对他们进行引用计数了, 而是在拷贝的时候直接赋值, 
这样就省掉了大量的引用计数相关的操作, 这部分类型有:

IS_LONG
IS_DOUBLE
对于那种根本没有值, 只有类型的类型, 也不需要引用计数了:

IS_NULL
IS_FALSE
IS_TRUE
而对于复杂类型, 一个size_t保存不下的, 那么我们就用value来保存一个指针, 
这个指针指向这个具体的值, 引用计数也随之作用于这个值上, 而不在是作用于zval上了.
PHP7 zval示意图
以IS_ARRAY为例:

struct _zend_array {
    zend_refcounted_h gc;
    union {
        struct {
            ZEND_ENDIAN_LOHI_4(
                zend_uchar    flags,
                zend_uchar    nApplyCount,
                zend_uchar    nIteratorsCount,
                zend_uchar    reserve)
        } v;
        uint32_t flags;
    } u;
    uint32_t          nTableMask;
    Bucket           *arData;
    uint32_t          nNumUsed;
    uint32_t          nNumOfElements;
    uint32_t          nTableSize;
    uint32_t          nInternalPointer;
    zend_long         nNextFreeElement;
    dtor_func_t       pDestructor;
};

zval.value.arr将指向上面的这样的一个结构体, 由它实际保存一个数组, 引用计数部分保存在zend_refcounted_h结构中:

typedef struct _zend_refcounted_h {
    uint32_t         refcount;          /* reference counter 32-bit */
    union {
        struct {
            ZEND_ENDIAN_LOHI_3(
                zend_uchar    type,
                zend_uchar    flags,    /* used for strings & objects */
                uint16_t      gc_info)  /* keeps GC root number (or 0) and color */
        } v;
        uint32_t type_info;
    } u;
} zend_refcounted_h;

所有的复杂类型的定义, 开始的时候都是zend_refcounted_h结构, 这个结构里除了引用计数以外, 
还有GC相关的结构. 从而在做GC回收的时候, GC不需要关心具体类型是什么, 所有的它都可以当做zend_refcounted*结构来处理.
另外有一个需要说明的就是大家可能会好奇的ZEND_ENDIAN_LOHI_4宏, 这个宏的作用是简化赋值, 
它会保证在大端或者小端的机器上, 它定义的字段都按照一样顺序排列存储, 从而我们在赋值的时候, 
不需要对它的字段分别赋值, 而是可以统一赋值, 比如对于上面的array结构为例, 就可以通过:

arr1.u.flags = arr2.u.flags;
一次完成相当于如下的赋值序列:

arr1.u.v.flags                    = arr2.u.v.flags;
arr1.u.v.nApplyCount           = arr2.u.v.nApplyCount;
arr1.u.v.nIteratorsCount     = arr2.u.v.nIteratorsCount;
arr1.u.v.reserve                = arr2.u.v.reserve;
还有一个大家可能会问到的问题是, 为什么不把type类型放到zval类型的前面, 因为我们知道当我们去用一个zval的时候, 
首先第一点肯定是先去获取它的类型. 这里的一个原因是, 一个是俩者差别不大, 另外就是考虑到如果以后JIT的话, 
zval的类型如果能够通过类型推导获得, 就根本没有必要去读取它的type值了.

标志位
除了数据类型以外， 以前的经验也告诉我们， 一个数据除了它的类型以外， 还应该有很多其他的属性， 
比如对于INTERNED STRING，它是一种在整个PHP请求期都存在的字符串(比如你写在代码中的字面量), 
它不会被引用计数回收. 在5.4的版本中我们是通过预先申请一块内存， 然后再这个内存中分配字符串， 
最后用指针地址来比较， 如果一个字符串是属于INTERNED STRING的内存范围内， 
就认为它是INTERNED STRING. 这样做的缺点显而易见， 就是当内存不够的时候， 
我们就没有办法分配INTERNED STRING了， 另外也非常丑陋， 所以如果一个字符串能有一些属性定义则这个实现就可以变得很优雅.
还有， 比如现在我们对于IS_LONG, IS_TRUE等类型不再进行引用计数了， 
那么当我们拿到一个zval的时候如何判断它需要不需要引用计数呢？ 想当然的我们可能会说用:

if (Z_TYPE_P(zv) >= IS_STRING) {
  //需要引用计数
}
但是你忘了， 还有INTERNED STRING的存在啊， 所以你也许要这么写了：

if (Z_TYPE_P(zv) >= IS_STRING && !IS_INTERNED(Z_STR_P(zv))) {
  //需要引用计数
}
是不是已经让你感觉到有点不对劲了? 嗯，别急， 还有呢， 我们还在5.6的时候引入了常量数组， 
这个数组呢会存储在Opcache的共享内存中， 它也不需要引用计数：

if (Z_TYPE_P(zv) >= IS_STRING && !IS_INTERNED(Z_STR_P(zv))
    && (Z_TYPE_P(zv) != IS_ARRAY || !Z_IS_IMMUTABLE(Z_ARRVAL(zv)))) {
 //需要引用计数
}
你是不是也觉得这简直太丑陋了， 简直不能忍受这样墨迹的代码， 对吧？
是的，我们早想到了，回头看之前的zval定义， 注意到type_flags了么? 我们引入了一个标志位， 
叫做IS_TYPE_REFCOUNTED, 它会保存在zval.u1.v.type_flags中， 
我们对于需要引用计数的类型就赋予这个标志， 所以上面的判断就可以变得很优雅：

if (!(Z_TYPE_FLAGS(zv) & IS_TYPE_REFCOUNTED)) {
}
而对于INTERNED STRING来说， 这个IS_STR_INTERNED标志位应该是作用于字符串本身而不是zval的.
那么类似这样的标志位一共有多少呢？作用于zval的有：

IS_TYPE_CONSTANT            //是常量类型
IS_TYPE_IMMUTABLE           //不可变的类型， 比如存在共享内存的数组
IS_TYPE_REFCOUNTED          //需要引用计数的类型
IS_TYPE_COLLECTABLE         //可能包含循环引用的类型(IS_ARRAY, IS_OBJECT)
IS_TYPE_COPYABLE            //可被复制的类型， 还记得我之前讲的对象和资源的例外么？ 对象和资源就不是
IS_TYPE_SYMBOLTABLE         //zval保存的是全局符号表， 这个在我之前做了一个调整以后没用了， 但还保留着兼容，
                            //下个版本会去掉
作用于字符串的有:

IS_STR_PERSISTENT             //是malloc分配内存的字符串
IS_STR_INTERNED             //INTERNED STRING
IS_STR_PERMANENT            //不可变的字符串， 用作哨兵作用
IS_STR_CONSTANT             //代表常量的字符串
IS_STR_CONSTANT_UNQUALIFIED //带有可能命名空间的常量字符串
作用于数组的有:

#define IS_ARRAY_IMMUTABLE  //同IS_TYPE_IMMUTABLE
作用于对象的有：

IS_OBJ_APPLY_COUNT          //递归保护
IS_OBJ_DESTRUCTOR_CALLED    //析构函数已经调用
IS_OBJ_FREE_CALLED          //清理函数已经调用
IS_OBJ_USE_GUARDS           //魔术方法递归保护
IS_OBJ_HAS_GUARDS           //是否有魔术方法递归保护标志
有了这些预留的标志位， 我们就会很方便的做一些以前不好做的事情， 就比如我自己的Taint扩展， 
现在把一个字符串标记为污染的字符串就会变得无比简单：

/* it's important that make sure
 * this value is not used by Zend or
 * any other extension agianst string */
#define IS_STR_TAINT_POSSIBLE    (1<<7)
#define TAINT_MARK(str)     (GC_FLAGS((str)) |= IS_STR_TAINT_POSSIBLE)
这个标记就会一直随着这个字符串的生存而存在的， 省掉了我之前的很多tricky的做法.

zval预先分配
前面我们说过, PHP5的zval分配采用的是堆上分配内存, 也就是在PHP预案代码中随处可见的MAKE_STD_ZVAL和ALLOC_ZVAL宏. 
我们也知道了本来一个zval只需要24个字节, 但是算上gc_info, 其实分配了32个字节, 
再加上PHP自己的内存管理在分配内存的时候都会在内存前面保留一部分信息:

typedef struct _zend_mm_block {
    zend_mm_block_info info;
#if ZEND_DEBUG
    unsigned int magic;
# ifdef ZTS
    THREAD_T thread_id;
# endif
    zend_mm_debug_info debug;
#elif ZEND_MM_HEAP_PROTECTION
    zend_mm_debug_info debug;
#endif
} zend_mm_block;
从而导致实际上我们只需要24字节的内存, 但最后竟然分配48个字节之多.
然而大部分的zval, 尤其是扩展函数内的zval, 我们想想它接受的参数来自外部的zval, 
它把返回值返回给return_value, 这个也是来自外部的zval, 而中间变量的zval完全可以采用栈上分配. 
也就是说大部分的内部函数都不需要在堆上分配内存, 它需要的zval都可以来自外部.
于是当时我们做了一个大胆的想法, 所有的zval都不需要单独申请.
而这个也很容易证明, PHP脚本中使用的zval, 要么存在于符号表, 要么就以临时变量(IS_TMP_VAR)或者编译变量(IS_CV)的形式存在.
前者存在于一个Hashtable中, 而在PHP7中Hashtable默认保存的就是zval, 这部分的zval完全可以在Hashtable分配的时候一次性分配出来, 后面的存在于execute_data之后, 数量也在编译时刻确定好了, 也可以随着execute_data一次性分配, 所以我们确实不再需要单独在堆上申请zval了.
所以, 在PHP7开始, 我们移除了MAKE_STD_ZVAL/ALLOC_ZVAL宏, 不再支持存堆内存上申请zval. 
函数内部使用的zval要么来自外面输入, 要么使用在栈上分配的临时zval.
在后来的实践中, 总结出来的可能对于开发者来说最大的变化就是, 之前的一些内部函数, 
通过一些操作获得一些信息, 然后分配一个zval, 返回给调用者的情况:

static zval * php_internal_function() {
    .....
    str = external_function();
    MAKE_STD_ZVAL(zv);
    ZVAL_STRING(zv, str, 0);
     return zv;
}
PHP_FUNCTION(test) {
     RETURN_ZVAL(php_internal_function(), 1, 1);
}
要么修改为, 这个zval由调用者传递:

static void php_internal_function(zval *zv) {
    .....
    str = external_function();
    ZVAL_STRING(zv, str);
     efree(str);
}
PHP_FUNCTION(test) {
     php_internal_function(return_value);
}
要么修改为, 这个函数返回原始素材:

static char * php_internal_function() {
    .....
    str = external_function();
     return str;
}
PHP_FUNCTION(test) {
     str = php_internal_function();
     RETURN_STRING(str);
     efree(str);
}
总结
(这块还没想好怎么说, 本来我是要引出Hashtable不再存在zval**, 从而引出引用类型的存在的必要性, 
但是如果不先讲Hashtable的结构, 这个引出貌似很突兀, 先这么着吧, 以后再来修改)
到现在我们基本上把zval的变化概况介绍完毕, 抽象的来说, 其实在PHP7中的zval, 已经变成了一个值指针, 
它要么保存着原始值, 要么保存着指向一个保存原始值的指针. 也就是说现在的zval相当于PHP5的时候的zval *. 
只不过相比于zval *, 直接存储zval, 我们可以省掉一次指针解引用, 从而提高缓存友好性.
其实PHP7的性能, 我们并没有引入什么新的技术模式, 不过就是主要来自, 持续不懈的降低内存占用, 
提高缓存友好性, 降低执行的指令数的这些原则而来的, 可以说PHP7的重构就是这三个原则.
```

### [内存管理](https://www.jianshu.com/p/63a381a7f70c)
```
https://www.jianshu.com/p/63a381a7f70c
1） 操作系统直接管理着内存，所以操作系统也需要进行内存管理，
计算机中通常都有内存管理单元(MMU) 用于处理CPU对内存的访问。
2） 应用程序无法直接调用物理内存， 只能向系统申请内存。
向操作系统申请内存空间会引发系统调用。
系统调用会将CPU从用户态切换到内核。
为了减少系统调用开销。通常在用户态进行内存管理。 申请大块内存备用。
使用完的内存不马上释放，将内存复用，避免多次内存申请和释放所带来性能消耗。
3） PHP不需要显示内存管理，由Zend引擎进行管理。

PHP内存限制
1）php.ini中的默认32MB
memory_limit = 32M

2）动态修改内存
ini_set ("memory_limit", "128M")

3）获取目前内存占用
memory_get_usage() : 获取PHP脚本所用的内存大小
memory_get_peak_usage() ：返回当前脚本到目前位置所占用的内存峰值。

学习内存管理的目的
了解PHP如何占用内存，可以避免不必要的内存浪费。

PHP中的内存管理###
包含：
1）足够内存
2）可用内存获取部分内存
3）使用后的内存，是否销毁还是重新分配

PHP内存管理器

接口层，是一些宏定义。
**堆层 heap **
_zend_mm_heap

初始化内存，调用 zend_mm_startup
PHP内存管理维护三个列表:
1)小块内存列表 free_buckets
2)大块内存列表 large_free_buckets
3)剩余内存列表 rest_buckets

两个HashTable 结构，难点是查找和计算内存地址
1)free_buckets
Hash函数为：

#define ZEND_MM_BUCKET_INDEX(true_size) ((true_size>>ZEND_MM_ALIGNMENT_LOG2)-(ZEND_MM_ALIGNED_MIN_HEADER_SIZE>>ZEND_MM_ALIGNMENT_LOG2))
2)large_free_buckets
Hash函数为：

#define ZEND_MM_LARGE_BUCKET_INDEX(S) zend_mm_high_bit(S)
    static inline unsigned int zend_mm_high_bit(size_t _size){
       ..//省略若干不同环境的实现
      unsignedint n =0;
      while(_size !=0) { 
        _size = _size >>1; n++;}
        return n-1;
    }

存储层 storage

内存分配的方式对堆层透明化，实现存储层和heap层的分离。
不同的内存分配方案， 有对应的处理函数。
内存的申请

PHP底层对内存的管理， 围绕着小块内存列表（free_buckets）、 大块内存列表（large_free_buckets）和
 剩余内存列表（rest_buckets）三个列表来分层进行的

ZendMM向系统进行的内存申请，并不是有需要时向系统即时申请， 而是由ZendMM的最底层（heap层）
先向系统申请一大块的内存，通过对上面三种列表的填充， 建立一个类似于内存池的管理机制。 
在程序运行需要使用内存的时候，ZendMM会在内存池中分配相应的内存供使用。 
这样做的好处是避免了PHP向系统频繁的内存申请操作

ZendMM对内存分配的处理步骤：

1）内存检查；
2）命中缓存，找到内存块，调至步骤5；
3）在ZendMM管理的heap层存储中搜索合适大小的内存块, 是在三种列表中小到大进行的，找到block后，调至步骤5；
4）步骤3未找到内存，则使用 ZEND_MM_STORAGE_ALLOC 申请新内存块 （至少为ZEND_MM_SEG_SIZE）,进行步骤6

5）使用zend_mm_remove_from_free_list函数将已经使用block节点在zend_mm_free_block中移除;
6） 内存分配完毕，对zend_mm_heap结构中的各种标识型变量进行维护，包括large_free_buckets， peak，size等;
7） 返回分配的内存地址;

PHP内存管理器
内存的销毁

ZendMM在内存销毁的处理上采用与内存申请相同的策略，当程序unset一个变量或者是其他的释放行为时， 
ZendMM并不会直接立刻将内存交回给系统，而是只在自身维护的内存池中将其重新标识为可用， 
按照内存的大小整理到上面所说的三种列表（small,large,free）之中，以备下次内存申请时使用。

ZendMM将内存块以整理收回到zend_mm_heap的方式，回收到内存池中。
程序使用的所有内存，将在进程结束时统一交还给系统。

垃圾回收

自动回收内存的过程叫垃圾收集。PHP提供了语言层的垃圾回收机制，让程序员不必过分关心程序内存分配。

PHP5.3之前
引用计数方式的内存动态管理。

PHP中所有的变量都是以zval变量的形式存在。

变量引用计数变为0时，PHP将在内存中销毁这个变量。只是这里的垃圾并不能称之为垃圾。
并且PHP在一个生命周期结束后就会释放此进程/线程所占的内容，这种方式决定了PHP在前期不需要过多考虑内存的泄露问题。

PHP5.3的垃圾回收

引入垃圾收集机制的目的是为了打破引用计数中的循环引用，从而防止因为这个而产生的内存泄露。 
垃圾收集机制基于PHP的动态内存管理而存在。PHP5.3为引入垃圾收集机制，在变量存储的基本结构上有一些变动.

struct _zval_struct {
  /* Variable information */ 
  zvalue_value value;/* value */ 
  zend_uint refcount__gc; 
  zend_uchar type;/* active type */ 
  zend_uchar is_ref__gc;
};
添加了 __gc 以用于新的垃圾回收机制。

PHP5.3中的垃圾回收算法——Concurrent Cycle Collection in Reference Counted Systems

PHP5.3的垃圾回收算法仍然以引用计数为基础，但是不再是使用简单计数作为回收准则，
而是使用了一种同步回收算法，这个算法由IBM的工程师在论文Concurrent Cycle Collection in Reference Counted Systems中提出。
论文较复杂， 列出一些大体描述。
首先PHP会分配一个固定大小的“根缓冲区”，这个缓冲区用于存放固定数量的zval，这个数量默认是10,000，
如果需要修改则需要修改源代码Zend/zend_gc.c中的常量GC_ROOT_BUFFER_MAX_ENTRIES然后重新编译。
由上文我们可以知道，一个zval如果有引用，要么被全局符号表中的符号引用，要么被其它表示复杂类型的zval中的符号引用。
因此在zval中存在一些可能根（root）。这里我们暂且不讨论PHP是如何发现这些可能根的，
这是个很复杂的问题，总之PHP有办法发现这些可能根zval并将它们投入根缓冲区。
当根缓冲区满额时，PHP就会执行垃圾回收，此回收算法如下：
1、对每个根缓冲区中的根zval按照深度优先遍历算法遍历所有能遍历到的zval，并将每个zval的refcount减1，
同时为了避免对同一zval多次减1（因为可能不同的根能遍历到同一个zval），每次对某个zval减1后就对其标记为“已减”。
2、再次对每个缓冲区中的根zval深度优先遍历，如果某个zval的refcount不为0，则对其加1，否则保持其为0。
3、清空根缓冲区中的所有根（注意是把这些zval从缓冲区中清除而不是销毁它们），然后销毁所有refcount为0的zval，并收回其内存。
如果不能完全理解也没有关系，只需记住PHP5.3的垃圾回收算法有以下几点特性：
1、并不是每次refcount减少时都进入回收周期，只有根缓冲区满额后在开始垃圾回收。
2、可以解决循环引用问题。
3、可以总将内存泄露保持在一个阈值以下。

PHP5.2与PHP5.3垃圾回收算法的性能比较

PHP Manual中的相关章节：http://docs.php.net/manual/zh/features.gc.performance-considerations.php

首先是内存泄露试验，下面直接引用PHP Manual中的实验代码和试验结果图：

<?php
class Foo
{
   public $var = '3.1415962654';
}
$baseMemory = memory_get_usage();
for ( $i = 0; $i <= 100000; $i++ )
{
   $a = new Foo;
   $a->self = $a;
   if ( $i % 500 === 0 )
   {
       echo sprintf( '%8d: ', $i ), memory_get_usage() - $baseMemory, "\n";
   }
}
?>

可以看到在可能引发累积性内存泄露的场景下，PHP5.2发生持续累积性内存泄露，
而PHP5.3则总能将内存泄露控制在一个阈值以下（与根缓冲区大小有关）。

与垃圾回收算法相关的PHP配置

1、可以通过修改php.ini中的zend.enable_gc来打开或关闭PHP的垃圾回收机制，
也可以通过调用gc_enable()或gc_disable()打开或关闭PHP的垃圾回收机制。
2、在PHP5.3中即使关闭了垃圾回收机制，PHP仍然会记录可能根到根缓冲区，
只是当根缓冲区满额时，PHP不会自动运行垃圾回收
3、当然，任何时候您都可以通过手工调用gc_collect_cycles()函数强制执行内存回收。
```

### [垃圾回收机制](http://php.net/manual/zh/features.gc.php)
```
http://php.net/manual/zh/features.gc.php
引用计数基本知识
每个php变量存在一个叫"zval"的变量容器中。一个zval变量容器，除了包含变量的类型和值，
还包括两个字节的额外信息。第一个是"is_ref"，是个bool值，用来标识这个变量是否是属于引用集合(reference set)。
通过这个字节，php引擎才能把普通变量和引用变量区分开来，由于php允许用户通过使用&来使用自定义引用，
zval变量容器中还有一个内部引用计数机制，来优化内存使用。第二个额外字节是"refcount"，
用以表示指向这个zval变量容器的变量(也称符号即symbol)个数。所有的符号存在一个符号表中，
其中每个符号都有作用域(scope)，那些主脚本(比如：通过浏览器请求的的脚本)和每个函数或者方法也都有作用域。

回收周期(Collecting Cycles)
传统上，像以前的 php 用到的引用计数内存机制，无法处理循环的引用内存泄漏。
然而 5.3.0 PHP 使用文章» 引用计数系统中的同步周期回收
(Concurrent Cycle Collection in Reference Counted Systems)中的同步算法，来处理这个内存泄漏问题。

对算法的完全说明有点超出这部分内容的范围，将只介绍其中基础部分。首先，我们先要建立一些基本规则，
如果一个引用计数增加，它将继续被使用，当然就不再在垃圾中。如果引用计数减少到零，所在变量容器将被清除(free)。
就是说，仅仅在引用计数减少到非零值时，才会产生垃圾周期(garbage cycle)。其次，在一个垃圾周期中，
通过检查引用计数是否减1，并且检查哪些变量容器的引用次数是零，来发现哪部分是垃圾。

垃圾回收算法
为避免不得不检查所有引用计数可能减少的垃圾周期，这个算法把所有可能根(possible roots 都是zval变量容器),
放在根缓冲区(root buffer)中(用紫色来标记，称为疑似垃圾)，这样可以同时确保每个可能的垃圾根(possible garbage root)
在缓冲区中只出现一次。仅仅在根缓冲区满了时，才对缓冲区内部所有不同的变量容器执行垃圾回收操作。看上图的步骤 A。

在步骤 B 中，模拟删除每个紫色变量。模拟删除时可能将不是紫色的普通变量引用数减"1"，如果某个普通变量引用计数变成0了，
就对这个普通变量再做一次模拟删除。每个变量只能被模拟删除一次，模拟删除后标记为灰（原文说确保不会对同一个变量容器减两次"1",不对的吧）。

在步骤 C 中，模拟恢复每个紫色变量。恢复是有条件的，当变量的引用计数大于0时才对其做模拟恢复。
同样每个变量只能恢复一次，恢复后标记为黑，基本就是步骤 B 的逆运算。
这样剩下的一堆没能恢复的就是该删除的蓝色节点了，在步骤 D 中遍历出来真的删除掉。

算法中都是模拟删除、模拟恢复、真的删除，都使用简单的遍历即可（最典型的深搜遍历）。
复杂度为执行模拟操作的节点数正相关，不只是紫色的那些疑似垃圾变量。

现在，你已经对这个算法有了基本了解，我们回头来看这个如何与PHP集成。默认的，
PHP的垃圾回收机制是打开的，然后有个 php.ini 设置允许你修改它：zend.enable_gc。

当垃圾回收机制打开时，每当根缓存区存满时，就会执行上面描述的循环查找算法。
根缓存区有固定的大小，可存10,000个可能根,当然你可以通过修改PHP源码文件Zend/zend_gc.c中的常量GC_ROOT_BUFFER_MAX_ENTRIES，
然后重新编译PHP，来修改这个10,000值。当垃圾回收机制关闭时，循环查找算法永不执行，然而，
可能根将一直存在根缓冲区中，不管在配置中垃圾回收机制是否激活。

当垃圾回收机制关闭时，如果根缓冲区存满了可能根，更多的可能根显然不会被记录。那些没被记录的可能根，
将不会被这个算法来分析处理。如果他们是循环引用周期的一部分，将永不能被清除进而导致内存泄漏。

即使在垃圾回收机制不可用时，可能根也被记录的原因是，相对于每次找到可能根后检查垃圾回收机制是否打开而言，
记录可能根的操作更快。不过垃圾回收和分析机制本身要耗不少时间。

除了修改配置zend.enable_gc，也能通过分别调用gc_enable() 和 gc_disable()函数来打开和关闭垃圾回收机制。
调用这些函数，与修改配置项来打开或关闭垃圾回收机制的效果是一样的。即使在可能根缓冲区还没满时，
也能强制执行周期回收。你能调用gc_collect_cycles()函数达到这个目的。这个函数将返回使用这个算法回收的周期数。

允许打开和关闭垃圾回收机制并且允许自主的初始化的原因，是由于你的应用程序的某部分可能是高时效性的。
在这种情况下，你可能不想使用垃圾回收机制。当然，对你的应用程序的某部分关闭垃圾回收机制，是在冒着可能内存泄漏的风险，
因为一些可能根也许存不进有限的根缓冲区。因此，就在你调用gc_disable()函数释放内存之前，
先调用gc_collect_cycles()函数可能比较明智。因为这将清除已存放在根缓冲区中的所有可能根，
然后在垃圾回收机制被关闭时，可留下空缓冲区以有更多空间存储可能根。

性能方面考虑的因素
在上一节我们已经简单的提到：回收可能根有细微的性能上影响，但这是把PHP 5.2与PHP 5.3比较时才有的。
尽管在PHP 5.2中，记录可能根相对于完全不记录可能根要慢些，而PHP 5.3中对 PHP run-time 的其他修改减少了这个性能损失。

这里主要有两个领域对性能有影响。第一个是内存占用空间的节省，
另一个是垃圾回收机制执行内存清理时的执行时间增加(run-time delay)。我们将研究这两个领域。

内存占用空间的节省
首先，实现垃圾回收机制的整个原因是为了，一旦先决条件满足，通过清理循环引用的变量来节省内存占用。
在PHP执行中，一旦根缓冲区满了或者调用gc_collect_cycles() 函数时，就会执行垃圾回收。
在下图中，显示了下面脚本分别在PHP 5.2 和 PHP 5.3环境下的内存占用情况，其中排除了脚本启动时PHP本身占用的基本内存。
```

### cgi、fastcgi、php-fpm
```
https://www.zhihu.com/question/30672017
- ###*cgi**
早期的web server只可以处理简单的静态web文件，
但是随着技术的发展出现动态语言如PHP，Python。PHP语言交给PHP解析器进行处理，
但是处理之后如何和web server进行通信呢？
为了解决不同的语言处理器与web server之间的通讯，出现了CGI协议。
只要按照CGI协议编写程序，就可以实现与语言解析器与web server之间的通讯。
CGI协议虽然解决了语言解析器和seb server之间通讯的问题，
但是它的效率很低。因为web server每收到一个请求都会创建一个CGI进程，
PHP解析器都会解析php.ini文件，初始化环境，请求结束的时候再关闭进程。
对于每一个创建的CGI进程都会执行这些操作。所以效率很低。

- ###*FastCGI**
FastCGI是用来提高CGI性能的，FastCGI每次处理完请求之后不会关闭掉进程。
而是保留这个进程，使这个进程可以处理多个请求。
这样的话每个请求都不用再重新创建一个进程了。大大提升了处理效率。

- ###*PHP-FPM**
PHP-FPM(FastCGI Process Manager：FastCGI进程管理器)是一个实现了Fastcgi的程序，
并且提供进程管理的功能。进程包括master进程和worker进程。master进程只有一个，
负责监听端口，接受来自web server的请求。worker进程一般会有多个，
每个进程中会嵌入一个PHP解析器，进程PHP代码的处理。
```

### php.ini中的safe_mode 影响
```
###*Warning
本特性已自 PHP 5.3.0 起废弃并将自 PHP 5.4.0 起移除。###*
1)用户输入输出函数（fopen()file()require(),只能用于调用这些函数有相同脚本的拥有者）
2)创建新文件（限制用户只在该用户拥有目录下创建文件）
3)用户调用popen()systen()exec()等脚本，只有脚本处在safe_mode_exec_dir配置指令指定的目录中才可能
4)加强HTTP认证，认证脚本拥有者的UID的划入认证领域范围内，此外启用安全模式下，不会设置PHP_AUTH
5)mysql服务器所用的用户名必须与调用mysql_connect()的文件的拥有者用户名相同6)
受影响的函数变量以及配置命令达到40个
```

### [PSR 是什么，PSR-1, 2, 4, 7](http://psr.phphub.org/)
```
https://learnku.com/docs/psr
1. 概述
本 PSR 是关于由文件路径 自动载入 对应类的相关规范，
本规范是可互操作的，可以作为任一自动载入规范的补充，其中包括 [PSR-0]()，此外，
本 PSR 还包括自动载入的类对应的文件存放路径规范。

关于「能愿动词」的使用
为了避免歧义，文档大量使用了「能愿动词」，对应的解释如下：

必须 (MUST)：绝对，严格遵循，请照做，无条件遵守；
一定不可 (MUST NOT)：禁令，严令禁止；
应该 (SHOULD) ：强烈建议这样做，但是不强求；
不该 (SHOULD NOT)：强烈不建议这样做，但是不强求；
可以 (MAY) 和 可选 (OPTIONAL) ：选择性高一点，在这个文档内，此词语使用较少；
参见：RFC 2119

2. 详细说明
此处的「类」泛指所有的「Class 类」、「接口」、「traits 可复用代码块」以及其它类似结构。

一个完整的类名需具有以下结构:

\<命名空间>(\<子命名空间>)*\<类名>
完整的类名 必须 要有一个顶级命名空间，被称为 "vendor namespace"；

完整的类名 可以 有一个或多个子命名空间；

完整的类名 必须 有一个最终的类名；

完整的类名中任意一部分中的下滑线都是没有特殊含义的；

完整的类名 可以 由任意大小写字母组成；

所有类名都 必须 是大小写敏感的。

当根据完整的类名载入相应的文件

完整的类名中，去掉最前面的命名空间分隔符，前面连续的一个或多个命名空间和子命名空间，
作为「命名空间前缀」，其必须与至少一个「文件基目录」相对应；

紧接命名空间前缀后的子命名空间 必须 与相应的「文件基目录」相匹配，其中的命名空间分隔符将作为目录分隔符。

末尾的类名 必须 与对应的以 .php 为后缀的文件同名。

自动加载器（autoloader）的实现 一定不可 抛出异常、一定不可 触发任一级别的错误信息以及 不应该 有返回值。

3. 例子
下表展示了符合规范完整类名、命名空间前缀和文件基目录所对应的文件路径。

完整类名	命名空间前缀	文件基目录	文件路径
\Acme\Log\Writer\File_Writer	Acme\Log\Writer	./acme-log-writer/lib/	./acme-log-writer/lib/File_Writer.php
\Aura\Web\Response\Status	Aura\Web	/path/to/aura-web/src/	/path/to/aura-web/src/Response/Status.php
\Symfony\Core\Request	Symfony\Core	./vendor/Symfony/Core/	./vendor/Symfony/Core/Request.php
\Zend\Acl	Zend	/usr/includes/Zend/	/usr/includes/Zend/Acl.php
关于本规范的实现，可参阅 相关实例。

注意：实例并 不 属于规范的一部分，且随时 会 有所变动。
```

### Autoload、Composer 原理 [PSR-4](https://laravel-china.org/topics/2081/psr-specification-psr-4-automatic-loading-specification) 、[原理](https://segmentfault.com/a/1190000014948542)
```
PHP 自5.3的版本之后，已经重焕新生，
命名空间、性状（trait）、闭包、接口、PSR 规范、
以及 composer 的出现已经让 PHP 变成了一门现代化的脚本语言。
PHP 的生态系统也一直在演进，而 composer 的出现更是彻底的改变了以往构建 PHP 应用的方式，
我们可以根据 PHP 的应用需求混合搭配最合适的 PHP 组件。当然这也得益于 PSR 规范的提出。

PHP 自动加载功能
PSR 规范
comoposer 的自动加载过程
composer 源码分析
一、PHP 自动加载功能
PHP 自动加载功能的由来
在 PHP 开发过程中，如果希望从外部引入一个 Class ，通常会使用 include 和 require 方法，
去把定义这个 Class 的文件包含进来。这个在小规模开发的时候，没什么大问题。
但在大型的开发项目中，使用这种方式会带来一些隐含的问题：如果一个 PHP 文件需要使用很多其它类，
那么就需要很多的 require/include 语句，这样有可能会 造成遗漏 或者 包含进不必要的类文件。
如果大量的文件都需要使用其它的类，那么要保证每个文件都包含正确的类文件肯定是一个噩梦， 
况且 require或 incloud 的性能代价很大。

PHP5 为这个问题提供了一个解决方案，这就是 类的自动加载(autoload)机制。
autoload机制 可以使得 PHP 程序有可能在使用类时才自动包含类文件，
而不是一开始就将所有的类文件include进来，这种机制也称为 Lazy loading (惰性加载)。

总结起来，自动加载功能带来了几处优点：

使用类之前无需 include / require
使用类的时候才会 include / require 文件，实现了 lazy loading ，避免了 include / require 多余文件。
无需考虑引入 类的实际磁盘地址 ，实现了逻辑和实体文件的分离。
PHP 自动加载函数 __autoload()
从 PHP5 开始，当我们在使用一个类时，如果发现这个类没有加载，
就会自动运行 __autoload() 函数，这个函数是我们在程序中自定义的，
在这个函数中我们可以加载需要使用的类。下面是个简单的示例：

<?php

function __autoload($classname) {
        require_once ($classname . ".class.php");
}
在我们这个简单的例子中，我们直接将类名加上扩展名 .class.php 构成了类文件名，然后使用 require_once 将其加载。

从这个例子中，我们可以看出 __autoload 至少要做三件事情：

根据类名确定类文件名；
确定类文件所在的磁盘路径；
将类从磁盘文件中加载到系统中。
第三步最简单，只需要使用 include / require 即可。要实现第一步，第二步的功能，
必须在开发时约定类名与磁盘文件的映射方法，只有这样我们才能根据类名找到它对应的磁盘文件。
当有大量的类文件要包含的时候，我们只要确定相应的规则，然后在 __autoload() 函数中，
将类名与实际的磁盘文件对应起来，就可以实现 lazy loading 的效果 。
如果想详细的了解关于 autoload 自动加载的过程，可以查看手册资料：PHP autoload函数说明
__autoload() 函数存在的问题
如果在一个系统的实现中，如果需要使用很多其它的类库，这些类库可能是由不同的开发人员编写的， 
其类名与实际的磁盘文件的映射规则不尽相同。这时如果要实现类库文件的自动加载，
就必须 在 __autoload() 函数中将所有的映射规则全部实现，这样的话 __autoload() 函数有可能会非常复杂，
甚至无法实现。最后可能会导致 __autoload() 函数十分臃肿，这时即便能够实现，
也会给将来的维护和系统效率带来很大的负面影响。
那么问题出现在哪里呢？问题出现在 __autoload() 是全局函数只能定义一次 ，不够灵活，
所以所有的类名与文件名对应的逻辑规则都要在一个函数里面实现，造成这个函数的臃肿。
那么如何来解决这个问题呢？答案就是使用一个 __autoload调用堆栈 ，
不同的映射关系写到不同的 __autoload函数 中去，然后统一注册统一管理，这个就是 PHP5 引入的 SPL Autoload 。
SPL Autoload
SPL是 Standard PHP Library(标准PHP库)的缩写。它是 PHP5 引入的一个扩展标准库，
包括 spl autoload 相关的函数以及各种数据结构和迭代器的接口或类。
spl autoload 相关的函数具体可见 php中spl_autoload
<?php

// __autoload 函数
//
// function __autoload($class) {
//     include 'classes/' . $class . '.class.php';
// }


function my_autoloader($class) {
    include 'classes/' . $class . '.class.php';
}

spl_autoload_register('my_autoloader');


// 定义的 autoload 函数在 class 里

// 静态方法
class MyClass {
  public static function autoload($className) {
    // ...
  }
}

spl_autoload_register(array('MyClass', 'autoload'));

// 非静态方法
class MyClass {
  public function autoload($className) {
    // ...
  }
}

$instance = new MyClass();
spl_autoload_register(array($instance, 'autoload'));

spl_autoload_register() 就是我们上面所说的__autoload调用堆栈，我们可以向这个函数注册多个我们自己的 autoload() 函数，
当 PHP 找不到类名时，PHP就会调用这个堆栈，然后去调用自定义的 autoload() 函数，
实现自动加载功能。如果我们不向这个函数输入任何参数，那么就会默认注册 spl_autoload() 函数。

二、PSR 规范
与自动加载相关的规范是 PSR4，在说 PSR4 之前先介绍一下 PSR 标准。PSR 标准的发明和推出组织是：
PHP-FIG，它的网站是：www.php-fig.org。由几位开源框架的开发者成立于 2009 年，从那开始也选取了很多其他成员进来，
虽然不是 “官方” 组织，但也代表了社区中不小的一块。组织的目的在于：以最低程度的限制，来统一各个项目的编码规范，
避免各家自行发展的风格阻碍了程序员开发的困扰，于是大伙发明和总结了 PSR，PSR 是 PHP Standards Recommendation 的缩写，
截止到目前为止，总共有 14 套 PSR 规范，其中有 7 套PSR规范已通过表决并推出使用，分别是：

PSR-0 自动加载标准（已废弃，一些旧的第三方库还有在使用）
PSR-1 基础编码标准

PSR-2 编码风格向导

PSR-3 日志接口

PSR-4 自动加载的增强版，替换掉了 PSR-0

PSR-6 缓存接口规范

PSR-7 HTTP 消息接口规范

具体详细的规范标准可以查看PHP 标准规范

PSR4 标准
2013 年底，PHP-FIG 推出了第 5 个规范——PSR-4。

PSR-4 规范了如何指定文件路径从而自动加载类定义，同时规范了自动加载文件的位置。

1）一个完整的类名需具有以下结构：
\<命名空间>\<子命名空间>\<类名>

完整的类名必须要有一个顶级命名空间，被称为 "vendor namespace"；
完整的类名可以有一个或多个子命名空间；
完整的类名必须有一个最终的类名；
完整的类名中任意一部分中的下滑线都是没有特殊含义的；
完整的类名可以由任意大小写字母组成；
所有类名都必须是大小写敏感的。
2）根据完整的类名载入相应的文件
完整的类名中，去掉最前面的命名空间分隔符，前面连续的一个或多个命名空间和子命名空间，
作为「命名空间前缀」，其必须与至少一个「文件基目录」相对应；
紧接命名空间前缀后的子命名空间 必须 与相应的「文件基目录」相匹配，其中的命名空间分隔符将作为目录分隔符。
末尾的类名必须与对应的以 .php 为后缀的文件同名。
自动加载器（autoloader）的实现一定不可抛出异常、一定不可触发任一级别的错误信息以及不应该有返回值。
3) 例子
PSR-4风格

类名：ZendAbc 
命名空间前缀：Zend 
文件基目录：/usr/includes/Zend/ 
文件路径：/usr/includes/Zend/Abc.php
类名：SymfonyCoreRequest 
命名空间前缀：SymfonyCore 
文件基目录：./vendor/Symfony/Core/ 
文件路径：./vendor/Symfony/Core/Request.php
目录结构

-vendor/
| -vendor_name/
| | -package_name/
| | | -src/
| | | | -ClassName.php       # Vendor_Name\Package_Name\ClassName
| | | -tests/
| | | | -ClassNameTest.php   # Vendor_Name\Package_Name\ClassNameTest
Composer自动加载过程
Composer 做了哪些事情
你有一个项目依赖于若干个库。
其中一些库依赖于其他库。
你声明你所依赖的东西。
Composer 会找出哪个版本的包需要安装，并安装它们（将它们下载到你的项目中）。
例如，你正在创建一个项目，需要做一些单元测试。你决定使用 phpunit 。为了将它添加到你的项目中，
你所需要做的就是在 composer.json 文件里描述项目的依赖关系。

 {
   "require": {
     "phpunit/phpunit":"~6.0",
   }
 }
然后在 composer require 之后我们只要在项目里面直接 use phpunit 的类即可使用。

执行 composer require 时发生了什么
composer 会找到符合 PR4 规范的第三方库的源
将其加载到 vendor 目录下
初始化顶级域名的映射并写入到指定的文件里
（如：'PHPUnit\\Framework\\Assert' => __DIR__ . '/..' . '/phpunit/phpunit/src/Framework/Assert.php'）

写好一个 autoload 函数，并且注册到 spl_autoload_register()里
题外话：现在很多框架都已经帮我们写好了顶级域名映射了，我们只需要在框架里面新建文件，
在新建的文件中写好命名空间，就可以在任何地方 use 我们的命名空间了。

Composer 源码分析
下面我们通过对源码的分析来看看 composer 是如何实现 PSR4标准 的自动加载功能。

很多框架在初始化的时候都会引入 composer 来协助自动加载的，
以 Laravel 为例，它入口文件 index.php 第一句就是利用 composer 来实现自动加载功能。

启动
<?php
  define('LARAVEL_START', microtime(true));

  require __DIR__ . '/../vendor/autoload.php';
去 vendor 目录下的 autoload.php ：

<?php
  require_once __DIR__ . '/composer' . '/autoload_real.php';

  return ComposerAutoloaderInit7b790917ce8899df9af8ed53631a1c29::getLoader();
这里就是 Composer 真正开始的地方了

Composer自动加载文件
首先，我们先大致了解一下Composer自动加载所用到的源文件。

autoload_real.php: 自动加载功能的引导类。

composer 加载类的初始化(顶级命名空间与文件路径映射初始化)和注册(spl_autoload_register())。
ClassLoader.php : composer 加载类。

composer 自动加载功能的核心类。
autoload_static.php : 顶级命名空间初始化类，

用于给核心类初始化顶级命名空间。
autoload_classmap.php : 自动加载的最简单形式，

有完整的命名空间和文件目录的映射；
autoload_files.php : 用于加载全局函数的文件，

存放各个全局函数所在的文件路径名；
autoload_namespaces.php : 符合 PSR0 标准的自动加载文件，

存放着顶级命名空间与文件的映射；
autoload_psr4.php : 符合 PSR4 标准的自动加载文件，

存放着顶级命名空间与文件的映射；
autoload_real 引导类
在 vendor 目录下的 autoload.php 文件中我们可以看出，
程序主要调用了引导类的静态方法 getLoader() ，我们接着看看这个函数。

<?php
    public static function getLoader()
    {
      if (null !== self::$loader) {
          return self::$loader;
      }

      spl_autoload_register(
        array('ComposerAutoloaderInit7b790917ce8899df9af8ed53631a1c29', 'loadClassLoader'), true, true
      );

      self::$loader = $loader = new \Composer\Autoload\ClassLoader();

      spl_autoload_unregister(
        array('ComposerAutoloaderInit7b790917ce8899df9af8ed53631a1c29', 'loadClassLoader')
      );

      $useStaticLoader = PHP_VERSION_ID >= 50600 && !defined('HHVM_VERSION');

      if ($useStaticLoader) {
          require_once __DIR__ . '/autoload_static.php';

          call_user_func(
          \Composer\Autoload\ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::getInitializer($loader)
          );

      } else {
          $map = require __DIR__ . '/autoload_namespaces.php';
          foreach ($map as $namespace => $path) {
              $loader->set($namespace, $path);
          }

          $map = require __DIR__ . '/autoload_psr4.php';
          foreach ($map as $namespace => $path) {
              $loader->setPsr4($namespace, $path);
          }

          $classMap = require __DIR__ . '/autoload_classmap.php';
          if ($classMap) {
              $loader->addClassMap($classMap);
          }
      }

      /***********************注册自动加载核心类对象********************/
      $loader->register(true);

      /***********************自动加载全局函数********************/
      if ($useStaticLoader) {
          $includeFiles = Composer\Autoload\ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$files;
      } else {
          $includeFiles = require __DIR__ . '/autoload_files.php';
      }

      foreach ($includeFiles as $fileIdentifier => $file) {
          composerRequire7b790917ce8899df9af8ed53631a1c29($fileIdentifier, $file);
      }

      return $loader;
    }
我把自动加载引导类分为 5 个部分。

第一部分——单例
第一部分很简单，就是个最经典的单例模式，自动加载类只能有一个。

<?php
  if (null !== self::$loader) {
      return self::$loader;
  }
第二部分——构造ClassLoader核心类
第二部分 new 一个自动加载的核心类对象。

<?php
  /***********************获得自动加载核心类对象********************/
  spl_autoload_register(
    array('ComposerAutoloaderInit7b790917ce8899df9af8ed53631a1c29', 'loadClassLoader'), true, true
  );

  self::$loader = $loader = new \Composer\Autoload\ClassLoader();

  spl_autoload_unregister(
    array('ComposerAutoloaderInit7b790917ce8899df9af8ed53631a1c29', 'loadClassLoader')
  );
loadClassLoader()函数：

<?php
public static function loadClassLoader($class)
{
    if ('Composer\Autoload\ClassLoader' === $class) {
        require __DIR__ . '/ClassLoader.php';
    }
}
从程序里面我们可以看出，composer 先向 PHP 自动加载机制注册了一个函数，
这个函数 require 了 ClassLoader 文件。成功 new 出该文件中核心类 ClassLoader() 后，又销毁了该函数。

第三部分 —— 初始化核心类对象
<?php
  /***********************初始化自动加载核心类对象********************/
  $useStaticLoader = PHP_VERSION_ID >= 50600 && !defined('HHVM_VERSION');
  if ($useStaticLoader) {
     require_once __DIR__ . '/autoload_static.php';

     call_user_func(
       \Composer\Autoload\ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::getInitializer($loader)
     );
  } else {
      $map = require __DIR__ . '/autoload_namespaces.php';
      foreach ($map as $namespace => $path) {
         $loader->set($namespace, $path);
      }

      $map = require __DIR__ . '/autoload_psr4.php';
      foreach ($map as $namespace => $path) {
         $loader->setPsr4($namespace, $path);
      }

      $classMap = require __DIR__ . '/autoload_classmap.php';
      if ($classMap) {
          $loader->addClassMap($classMap);
      }
    }
    
这一部分就是对自动加载类的初始化，主要是给自动加载核心类初始化顶级命名空间映射。

初始化的方法有两种：

  1. 使用 autoload_static 进行静态初始化；
  2. 调用核心类接口初始化。

autoload_static 静态初始化 ( PHP >= 5.6 )
静态初始化只支持 PHP5.6 以上版本并且不支持 HHVM 虚拟机。我们深入 
autoload_static.php 这个文件发现这个文件定义了一个用于静态初始化的类，
名字叫 ComposerStaticInit7b790917ce8899df9af8ed53631a1c29，仍然为了避免冲突而加了 hash 值。这个类很简单：

<?php
  class ComposerStaticInit7b790917ce8899df9af8ed53631a1c29{
     public static $files = array(...);
     public static $prefixLengthsPsr4 = array(...);
     public static $prefixDirsPsr4 = array(...);
     public static $prefixesPsr0 = array(...);
     public static $classMap = array (...);

    public static function getInitializer(ClassLoader $loader)
    {
      return \Closure::bind(function () use ($loader) {
          $loader->prefixLengthsPsr4
                          = ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$prefixLengthsPsr4;

          $loader->prefixDirsPsr4
                          = ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$prefixDirsPsr4;

          $loader->prefixesPsr0
                          = ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$prefixesPsr0;

          $loader->classMap
                          = ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$classMap;

      }, null, ClassLoader::class);
  }
这个静态初始化类的核心就是 getInitializer() 函数，它将自己类中的顶级命名空间映射给了 ClassLoader 类。
值得注意的是这个函数返回的是一个匿名函数，为什么呢？原因就是 ClassLoader类 中的 
prefixLengthsPsr4 、prefixDirsPsr4等等变量都是 private的。
利用匿名函数的绑定功能就可以将这些 private 变量赋给 ClassLoader 类 里的成员变量。

关于匿名函数的绑定功能。

接下来就是命名空间初始化的关键了。

classMap（命名空间映射）
<?php
  public static $classMap = array (
      'App\\Console\\Kernel'
              => __DIR__ . '/../..' . '/app/Console/Kernel.php',

      'App\\Exceptions\\Handler'
              => __DIR__ . '/../..' . '/app/Exceptions/Handler.php',

      'App\\Http\\Controllers\\Auth\\ForgotPasswordController'
              => __DIR__ . '/../..' . '/app/Http/Controllers/Auth/ForgotPasswordController.php',

      'App\\Http\\Controllers\\Auth\\LoginController'
              => __DIR__ . '/../..' . '/app/Http/Controllers/Auth/LoginController.php',

      'App\\Http\\Controllers\\Auth\\RegisterController'
              => __DIR__ . '/../..' . '/app/Http/Controllers/Auth/RegisterController.php',
  ...)
直接命名空间全名与目录的映射，简单粗暴，也导致这个数组相当的大。

PSR4 标准顶级命名空间映射数组：
<?php
  public static $prefixLengthsPsr4 = array(
      'p' => array (
        'phpDocumentor\\Reflection\\' => 25,
    ),
      'S' => array (
        'Symfony\\Polyfill\\Mbstring\\' => 26,
        'Symfony\\Component\\Yaml\\' => 23,
        'Symfony\\Component\\VarDumper\\' => 28,
        ...
    ),
  ...);

  public static $prefixDirsPsr4 = array (
      'phpDocumentor\\Reflection\\' => array (
        0 => __DIR__ . '/..' . '/phpdocumentor/reflection-common/src',
        1 => __DIR__ . '/..' . '/phpdocumentor/type-resolver/src',
        2 => __DIR__ . '/..' . '/phpdocumentor/reflection-docblock/src',
    ),
       'Symfony\\Polyfill\\Mbstring\\' => array (
        0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
    ),
      'Symfony\\Component\\Yaml\\' => array (
        0 => __DIR__ . '/..' . '/symfony/yaml',
    ),
  ...)
PSR4 标准顶级命名空间映射用了两个数组，第一个是用命名空间第一个字母作为前缀索引，
然后是 顶级命名空间，但是最终并不是文件路径，而是 顶级命名空间的长度。为什么呢？

因为 PSR4 标准是用顶级命名空间目录替换顶级命名空间，所以获得顶级命名空间的长度很重要。

具体说明这些数组的作用：

假如我们找 Symfony\Polyfill\Mbstring\example 这个命名空间，通过前缀索引和字符串匹配我们得到了

<?php
    'Symfony\\Polyfill\\Mbstring\\' => 26,
这条记录，键是顶级命名空间，值是命名空间的长度。
拿到顶级命名空间后去 $prefixDirsPsr4数组 获取它的映射目录数组：(注意映射目录可能不止一条)

<?php
  'Symfony\\Polyfill\\Mbstring\\' => array (
              0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
          )
然后我们就可以将命名空间 Symfony\\Polyfill\\Mbstring\\example 前26个字符
替换成目录 __DIR__ . '/..' . '/symfony/polyfill-mbstring ，
我们就得到了__DIR__ . '/..' . '/symfony/polyfill-mbstring/example.php，
先验证磁盘上这个文件是否存在，如果不存在接着遍历。如果遍历后没有找到，则加载失败。

ClassLoader 接口初始化（ PHP < 5.6 ）
如果PHP版本低于 5.6 或者使用 HHVM 虚拟机环境，那么就要使用核心类的接口进行初始化。

<?php
    // PSR0 标准
    $map = require __DIR__ . '/autoload_namespaces.php';
    foreach ($map as $namespace => $path) {
       $loader->set($namespace, $path);
    }

    // PSR4 标准
    $map = require __DIR__ . '/autoload_psr4.php';
    foreach ($map as $namespace => $path) {
       $loader->setPsr4($namespace, $path);
    }

    $classMap = require __DIR__ . '/autoload_classmap.php';
    if ($classMap) {
       $loader->addClassMap($classMap);
    }
PSR4 标准的映射
autoload_psr4.php 的顶级命名空间映射

<?php
    return array(
    'XdgBaseDir\\'
        => array($vendorDir . '/dnoegel/php-xdg-base-dir/src'),

    'Webmozart\\Assert\\'
        => array($vendorDir . '/webmozart/assert/src'),

    'TijsVerkoyen\\CssToInlineStyles\\'
        => array($vendorDir . '/tijsverkoyen/css-to-inline-styles/src'),

    'Tests\\'
        => array($baseDir . '/tests'),

    'Symfony\\Polyfill\\Mbstring\\'
        => array($vendorDir . '/symfony/polyfill-mbstring'),
    ...
    )
PSR4 标准的初始化接口:

<?php
    public function setPsr4($prefix, $paths)
    {
        if (!$prefix) {
            $this->fallbackDirsPsr4 = (array) $paths;
        } else {
            $length = strlen($prefix);
            if ('\\' !== $prefix[$length - 1]) {
                throw new \InvalidArgumentException(
                  "A non-empty PSR-4 prefix must end with a namespace separator."
                );
            }
            $this->prefixLengthsPsr4[$prefix[0]][$prefix] = $length;
            $this->prefixDirsPsr4[$prefix] = (array) $paths;
        }
    }
总结下上面的顶级命名空间映射过程：

( 前缀 -> 顶级命名空间，顶级命名空间 -> 顶级命名空间长度 )
( 顶级命名空间 -> 目录 )
这两个映射数组。具体形式也可以查看下面的 autoload_static 的 、prefixDirsPsr4 。

命名空间映射
autoload_classmap：

<?php
public static $classMap = array (
    'App\\Console\\Kernel'
        => __DIR__ . '/../..' . '/app/Console/Kernel.php',

    'App\\Exceptions\\Handler'
        => __DIR__ . '/../..' . '/app/Exceptions/Handler.php',
    ...
)
addClassMap:

<?php
    public function addClassMap(array $classMap)
    {
        if ($this->classMap) {
            $this->classMap = array_merge($this->classMap, $classMap);
        } else {
            $this->classMap = $classMap;
        }
    }
自动加载核心类 ClassLoader 的静态初始化到这里就完成了！

其实说是5部分，真正重要的就两部分——初始化与注册。初始化负责顶层命名空间的目录映射，注册负责实现顶层以下的命名空间映射规则。

第四部分 —— 注册
讲完了 Composer 自动加载功能的启动与初始化，经过启动与初始化，
自动加载核心类对象已经获得了顶级命名空间与相应目录的映射，也就是说，
如果有命名空间 'App\Console\Kernel，我们已经可以找到它对应的类文件所在位置。那么，它是什么时候被触发去找的呢？

这就是 composer 自动加载的核心了，我们先回顾一下自动加载引导类：

 public static function getLoader()
 {
    /***************************经典单例模式********************/
    if (null !== self::$loader) {
        return self::$loader;
    }
    
    /***********************获得自动加载核心类对象********************/
    spl_autoload_register(array('ComposerAutoloaderInit
    7b790917ce8899df9af8ed53631a1c29', 'loadClassLoader'), true, true);
    
    self::$loader = $loader = new \Composer\Autoload\ClassLoader();
    
    spl_autoload_unregister(array('ComposerAutoloaderInit
    7b790917ce8899df9af8ed53631a1c29', 'loadClassLoader'));

    /***********************初始化自动加载核心类对象********************/
    $useStaticLoader = PHP_VERSION_ID >= 50600 && 
    !defined('HHVM_VERSION');
    
    if ($useStaticLoader) {
        require_once __DIR__ . '/autoload_static.php';

        call_user_func(\Composer\Autoload\ComposerStaticInit
        7b790917ce8899df9af8ed53631a1c29::getInitializer($loader));
  
    } else {
        $map = require __DIR__ . '/autoload_namespaces.php';
        foreach ($map as $namespace => $path) {
            $loader->set($namespace, $path);
        }

        $map = require __DIR__ . '/autoload_psr4.php';
        foreach ($map as $namespace => $path) {
            $loader->setPsr4($namespace, $path);
        }

        $classMap = require __DIR__ . '/autoload_classmap.php';
        if ($classMap) {
            $loader->addClassMap($classMap);
        }
    }

    /***********************注册自动加载核心类对象********************/
    $loader->register(true);

    /***********************自动加载全局函数********************/
    if ($useStaticLoader) {
        $includeFiles = Composer\Autoload\ComposerStaticInit
        7b790917ce8899df9af8ed53631a1c29::$files;
    } else {
        $includeFiles = require __DIR__ . '/autoload_files.php';
    }
    
    foreach ($includeFiles as $fileIdentifier => $file) {
        composerRequire
        7b790917ce8899df9af8ed53631a1c29($fileIdentifier, $file);
    }

    return $loader;
} 
现在我们开始引导类的第四部分：注册自动加载核心类对象。我们来看看核心类的 register() 函数：

public function register($prepend = false)
{
    spl_autoload_register(array($this, 'loadClass'), true, $prepend);
}
其实奥秘都在自动加载核心类 ClassLoader 的 loadClass() 函数上：

public function loadClass($class)
    {
        if ($file = $this->findFile($class)) {
            includeFile($file);

            return true;
        }
    }
这个函数负责按照 PSR 标准将顶层命名空间以下的内容转为对应的目录，
也就是上面所说的将 'App\Console\Kernel 中' Console\Kernel 这一段转为目录，
至于怎么转的在下面 “运行”的部分讲。核心类 ClassLoader 将 loadClass() 函数注册到PHP SPL中的 spl_autoload_register() 里面去。
这样，每当PHP遇到一个不认识的命名空间的时候，PHP会自动调用注册到 spl_autoload_register 里面的 loadClass() 函数，然后找到命名空间对应的文件。

全局函数的自动加载
Composer 不止可以自动加载命名空间，还可以加载全局函数。怎么实现的呢？把全局函数写到特定的文件里面去，
在程序运行前挨个 require就行了。这个就是 composer 自动加载的第五步，加载全局函数。

if ($useStaticLoader) {
    $includeFiles = Composer\Autoload\ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$files;
} else {
    $includeFiles = require __DIR__ . '/autoload_files.php';
}
foreach ($includeFiles as $fileIdentifier => $file) {
    composerRequire7b790917ce8899df9af8ed53631a1c29($fileIdentifier, $file);
}
跟核心类的初始化一样，全局函数自动加载也分为两种：静态初始化和普通初始化，静态加载只支持PHP5.6以上并且不支持HHVM。

静态初始化：
ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$files：

public static $files = array (
'0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
'667aeda72477189d0494fecd327c3641' => __DIR__ . '/..' . '/symfony/var-dumper/Resources/functions/dump.php',
...
);
普通初始化
autoload_files:

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);
    
return array(
'0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => $vendorDir . '/symfony/polyfill-mbstring/bootstrap.php',
'667aeda72477189d0494fecd327c3641' => $vendorDir . '/symfony/var-dumper/Resources/functions/dump.php',
   ....
);
其实跟静态初始化区别不大。

加载全局函数
class ComposerAutoloaderInit7b790917ce8899df9af8ed53631a1c29{
  public static function getLoader(){
      ...
      foreach ($includeFiles as $fileIdentifier => $file) {
        composerRequire7b790917ce8899df9af8ed53631a1c29($fileIdentifier, $file);
      }
      ...
  }
}

function composerRequire7b790917ce8899df9af8ed53631a1c29($fileIdentifier, $file)
 {
    if (empty(\$GLOBALS['__composer_autoload_files'][\$fileIdentifier])) {
        require $file;

        $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;
    }
}
第五部分 —— 运行
到这里，终于来到了核心的核心—— composer 自动加载的真相，命名空间如何通过 composer 转为对应目录文件的奥秘就在这一章。
前面说过，ClassLoader 的 register() 函数将 loadClass() 函数注册到 PHP 的 SPL 函数堆栈中，
每当 PHP 遇到不认识的命名空间时就会调用函数堆栈的每个函数，直到加载命名空间成功。所以 loadClass() 函数就是自动加载的关键了。

看下 loadClass() 函数:

public function loadClass($class)
{
    if ($file = $this->findFile($class)) {
        includeFile($file);

        return true;
    }
}

public function findFile($class)
{
    // work around for PHP 5.3.0 - 5.3.2 https://bugs.php.net/50731
    if ('\\' == $class[0]) {
        $class = substr($class, 1);
    }

    // class map lookup
    if (isset($this->classMap[$class])) {
        return $this->classMap[$class];
    }
    if ($this->classMapAuthoritative) {
        return false;
    }

    $file = $this->findFileWithExtension($class, '.php');

    // Search for Hack files if we are running on HHVM
    if ($file === null && defined('HHVM_VERSION')) {
        $file = $this->findFileWithExtension($class, '.hh');
    }

    if ($file === null) {
        // Remember that this class does not exist.
        return $this->classMap[$class] = false;
    }

    return $file;
}
我们看到 loadClass() ，主要调用 findFile() 函数。findFile() 在解析命名空间的时候主要分为两部分：
classMap 和 findFileWithExtension() 函数。classMap 很简单，直接看命名空间是否在映射数组中即可。
麻烦的是 findFileWithExtension() 函数，这个函数包含了 PSR0 和 PSR4 标准的实现。
还有个值得我们注意的是查找路径成功后 includeFile() 仍然是外面的函数，
并不是 ClassLoader 的成员函数，原理跟上面一样，
防止有用户写 $this 或 self。还有就是如果命名空间是以\开头的，要去掉\然后再匹配。

看下 findFileWithExtension 函数：

private function findFileWithExtension($class, $ext)
{
    // PSR-4 lookup
    $logicalPathPsr4 = strtr($class, '\\', DIRECTORY_SEPARATOR) . $ext;
    
    $first = $class[0];
    if (isset($this->prefixLengthsPsr4[$first])) {
        foreach ($this->prefixLengthsPsr4[$first] as $prefix => $length) {
            if (0 === strpos($class, $prefix)) {
                foreach ($this->prefixDirsPsr4[$prefix] as $dir) {
                    if (file_exists($file = $dir . DIRECTORY_SEPARATOR . substr($logicalPathPsr4, $length))) {
                        return $file;
                    }
                }
            }
        }
    }

    // PSR-4 fallback dirs
    foreach ($this->fallbackDirsPsr4 as $dir) {
        if (file_exists($file = $dir . DIRECTORY_SEPARATOR . $logicalPathPsr4)) {
            return $file;
        }
    }
    
    // PSR-0 lookup
    if (false !== $pos = strrpos($class, '\\')) {
        // namespaced class name
        $logicalPathPsr0 = substr($logicalPathPsr4, 0, $pos + 1)
            . strtr(substr($logicalPathPsr4, $pos + 1), '_', DIRECTORY_SEPARATOR);
    } else {
        // PEAR-like class name
        $logicalPathPsr0 = strtr($class, '_', DIRECTORY_SEPARATOR) . $ext;
    }
    
    if (isset($this->prefixesPsr0[$first])) {
        foreach ($this->prefixesPsr0[$first] as $prefix => $dirs) {
            if (0 === strpos($class, $prefix)) {
                foreach ($dirs as $dir) {
                    if (file_exists($file = $dir . DIRECTORY_SEPARATOR . $logicalPathPsr0)) {
                        return $file;
                    }
                }
            }
        }
    }
    
    // PSR-0 fallback dirs
    foreach ($this->fallbackDirsPsr0 as $dir) {
        if (file_exists($file = $dir . DIRECTORY_SEPARATOR . $logicalPathPsr0)) {
            return $file;
        }
    }
    
    // PSR-0 include paths.
    if ($this->useIncludePath && $file = stream_resolve_include_path($logicalPathPsr0)) {
        return $file;
    }
}
最后小结
我们通过举例来说下上面代码的流程：

如果我们在代码中写下 new phpDocumentor\Reflection\Element()，PHP 会通过 SPL_autoload_register 
调用 loadClass -> findFile -> findFileWithExtension。步骤如下：

将 \ 转为文件分隔符/，加上后缀php，变成 $logicalPathPsr4, 即 phpDocumentor/Reflection//Element.php;
利用命名空间第一个字母p作为前缀索引搜索 prefixLengthsPsr4 数组，查到下面这个数组：
        p' => 
            array (
                'phpDocumentor\\Reflection\\' => 25,
                'phpDocumentor\\Fake\\' => 19,
          )
遍历这个数组，得到两个顶层命名空间 phpDocumentor\Reflection\ 和 phpDocumentor\Fake\
在这个数组中查找 phpDocumentor\Reflection\Element，找出 phpDocumentor\Reflection\ 这个顶层命名空间并且长度为25。
在prefixDirsPsr4 映射数组中得到phpDocumentor\Reflection\ 的目录映射为：
    'phpDocumentor\\Reflection\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpdocumentor/reflection-common/src',
            1 => __DIR__ . '/..' . '/phpdocumentor/type-resolver/src',
            2 => __DIR__ . '/..' . '/phpdocumentor/reflection-docblock/src',
        ),
遍历这个映射数组，得到三个目录映射；
查看 “目录+文件分隔符//+substr(&dollar;logicalPathPsr4, &dollar;length)”文件是否存在，存在即返回。这里就是
'__DIR__/../phpdocumentor/reflection-common/src + substr(phpDocumentor/Reflection/Element.php,25)'
如果失败，则利用 fallbackDirsPsr4 数组里面的目录继续判断是否存在文件
以上就是 composer 自动加载的原理解析！
```

### 异常处理
```
PHP 异常处理
异常用于在指定的错误发生时改变脚本的正常流程。

异常是什么
PHP 5 提供了一种新的面向对象的错误处理方法。

异常处理用于在指定的错误（异常）情况发生时改变脚本的正常流程。这种情况称为异常。

当异常被触发时，通常会发生：

当前代码状态被保存
代码执行被切换到预定义（自定义）的异常处理器函数
根据情况，处理器也许会从保存的代码状态重新开始执行代码，终止脚本执行，或从代码中另外的位置继续执行脚本
我们将展示不同的错误处理方法：

异常的基本使用
创建自定义的异常处理器
多个异常
重新抛出异常
设置顶层异常处理器
注释：异常应该仅仅在错误情况下使用，而不应该用于在一个指定的点跳转到代码的另一个位置。

异常的基本使用
当异常被抛出时，其后的代码不会继续执行，PHP 会尝试查找匹配的 "catch" 代码块。

如果异常没有被捕获，而且又没用使用 set_exception_handler() 作相应的处理的话，
那么将发生一个严重的错误（致命错误），并且输出 "Uncaught Exception" （未捕获异常）的错误消息。

让我们尝试抛出一个异常，同时不去捕获它：

<?php
// 创建一个有异常处理的函数
function checkNum($number)
{
    if($number>1)
    {
        throw new Exception("Value must be 1 or below");
    }
    return true;
}
 
// 触发异常
checkNum(2);
?>
上面的代码会得到类似这样的一个错误：

Fatal error: Uncaught exception 'Exception' with message 'Value must be 1 or below' 
in /www/runoob/test/test.php:7 Stack trace: #0 /www/runoob/test/test.php(13): 
checkNum(2) #1 {main} thrown in /www/runoob/test/test.php on line 7
Try、throw 和 catch
要避免上面实例中出现的错误，我们需要创建适当的代码来处理异常。

适当的处理异常代码应该包括：

Try - 使用异常的函数应该位于 "try" 代码块内。如果没有触发异常，
则代码将照常继续执行。但是如果异常被触发，会抛出一个异常。
Throw - 里规定如何触发异常。每一个 "throw" 必须对应至少一个 "catch"。
Catch - "catch" 代码块会捕获异常，并创建一个包含异常信息的对象。
让我们触发一个异常：

<?php
// 创建一个有异常处理的函数
function checkNum($number)
{
    if($number>1)
    {
        throw new Exception("变量值必须小于等于 1");
    }
        return true;
}
    
// 在 try 块 触发异常
try
{
    checkNum(2);
    // 如果抛出异常，以下文本不会输出
    echo '如果输出该内容，说明 $number 变量';
}
// 捕获异常
catch(Exception $e)
{
    echo 'Message: ' .$e->getMessage();
}
?>
上面代码将得到类似这样一个错误：

Message: 变量值必须小于等于 1
实例解释：
上面的代码抛出了一个异常，并捕获了它：

创建 checkNum() 函数。它检测数字是否大于 1。如果是，则抛出一个异常。
在 "try" 代码块中调用 checkNum() 函数。
checkNum() 函数中的异常被抛出。
"catch" 代码块接收到该异常，并创建一个包含异常信息的对象 ($e)。
通过从这个 exception 对象调用 $e->getMessage()，输出来自该异常的错误消息。
然而，为了遵循 "每个 throw 必须对应一个 catch" 的原则，可以设置一个顶层的异常处理器来处理漏掉的错误。

创建一个自定义的 Exception 类
创建自定义的异常处理程序非常简单。我们简单地创建了一个专门的类，
当 PHP 中发生异常时，可调用其函数。该类必须是 exception 类的一个扩展。

这个自定义的 customException 类继承了 PHP 的 exception 类的所有属性，您可向其添加自定义的函数。

我们开始创建 customException 类：

<?php
class customException extends Exception
{
    public function errorMessage()
    {
        // 错误信息
        $errorMsg = '错误行号 '.$this->getLine().' in '.$this->getFile()
        .': <b>'.$this->getMessage().'</b> 不是一个合法的 E-Mail 地址';
        return $errorMsg;
    }
}
 
$email = "someone@example...com";
 
try
{
    // 检测邮箱
    if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE)
    {
        // 如果是个不合法的邮箱地址，抛出异常
        throw new customException($email);
    }
}
 
catch (customException $e)
{
//display custom message
echo $e->errorMessage();
}
?>
这个新的类是旧的 exception 类的副本，外加 errorMessage() 函数。正因为它是旧类的副本，
因此它从旧类继承了属性和方法，我们可以使用 exception 类的方法，比如 getLine()、getFile() 和 getMessage()。

实例解释：
上面的代码抛出了一个异常，并通过一个自定义的 exception 类来捕获它：

customException() 类是作为旧的 exception 类的一个扩展来创建的。这样它就继承了旧的 exception 类的所有属性和方法。
创建 errorMessage() 函数。如果 e-mail 地址不合法，则该函数返回一条错误消息。
把 $email 变量设置为不合法的 e-mail 地址字符串。
执行 "try" 代码块，由于 e-mail 地址不合法，因此抛出一个异常。
"catch" 代码块捕获异常，并显示错误消息。
多个异常
可以为一段脚本使用多个异常，来检测多种情况。

可以使用多个 if..else 代码块，或一个 switch 代码块，或者嵌套多个异常。
这些异常能够使用不同的 exception 类，并返回不同的错误消息：

<?php
class customException extends Exception
{
    public function errorMessage()
    {
        // 错误信息
        $errorMsg = '错误行号 '.$this->getLine().' in '.$this->getFile()
        .': <b>'.$this->getMessage().'</b> 不是一个合法的 E-Mail 地址';
        return $errorMsg;
    }
}
 
$email = "someone@example.com";
 
try
{
    // 检测邮箱
    if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE)
    {
        // 如果是个不合法的邮箱地址，抛出异常
        throw new customException($email);
    }
    // 检测 "example" 是否在邮箱地址中
    if(strpos($email, "example") !== FALSE)
    {
        throw new Exception("$email 是 example 邮箱");
    }
}
catch (customException $e)
{
    echo $e->errorMessage();
}
catch(Exception $e)
{
    echo $e->getMessage();
}
?>
实例解释：
上面的代码测试了两种条件，如果其中任何一个条件不成立，则抛出一个异常：

customException() 类是作为旧的 exception 类的一个扩展来创建的。这样它就继承了旧的 exception 类的所有属性和方法。
创建 errorMessage() 函数。如果 e-mail 地址不合法，则该函数返回一个错误消息。
把 $email 变量设置为一个字符串，该字符串是一个有效的 e-mail 地址，但包含字符串 "example"。
执行 "try" 代码块，在第一个条件下，不会抛出异常。
由于 e-mail 含有字符串 "example"，第二个条件会触发异常。
"catch" 代码块会捕获异常，并显示恰当的错误消息。
如果 customException 类抛出了异常，但没有捕获 customException，仅仅捕获了 base exception，则在那里处理异常。

重新抛出异常
有时，当异常被抛出时，您也许希望以不同于标准的方式对它进行处理。可以在一个 "catch" 代码块中再次抛出异常。

脚本应该对用户隐藏系统错误。对程序员来说，系统错误也许很重要，但是用户对它们并不感兴趣。
为了让用户更容易使用，您可以再次抛出带有对用户比较友好的消息的异常：

<?php
class customException extends Exception
{
    public function errorMessage()
    {
        // 错误信息
        $errorMsg = $this->getMessage().' 不是一个合法的 E-Mail 地址。';
        return $errorMsg;
    }
}
 
$email = "someone@example.com";
 
try
{
    try
    {
        // 检测 "example" 是否在邮箱地址中
        if(strpos($email, "example") !== FALSE)
        {
            // 如果是个不合法的邮箱地址，抛出异常
            throw new Exception($email);
        }
    }
    catch(Exception $e)
    {
        // 重新抛出异常
        throw new customException($email);
    }
}
catch (customException $e)
{
    // 显示自定义信息
    echo $e->errorMessage();
}
?>
实例解释：
上面的代码检测在邮件地址中是否含有字符串 "example"。如果有，则再次抛出异常：

customException() 类是作为旧的 exception 类的一个扩展来创建的。这样它就继承了旧的 exception 类的所有属性和方法。
创建 errorMessage() 函数。如果 e-mail 地址不合法，则该函数返回一个错误消息。
把 $email 变量设置为一个字符串，该字符串是一个有效的 e-mail 地址，但包含字符串 "example"。
"try" 代码块包含另一个 "try" 代码块，这样就可以再次抛出异常。
由于 e-mail 包含字符串 "example"，因此触发异常。
"catch" 代码块捕获到该异常，并重新抛出 "customException"。
捕获到 "customException"，并显示一条错误消息。
如果在当前的 "try" 代码块中异常没有被捕获，则它将在更高层级上查找 catch 代码块。

设置顶层异常处理器
set_exception_handler() 函数可设置处理所有未捕获异常的用户定义函数。

<?php
function myException($exception)
{
    echo "<b>Exception:</b> " , $exception->getMessage();
}
 
set_exception_handler('myException');
 
throw new Exception('Uncaught Exception occurred');
?>
以上代码的输出如下所示：

Exception: Uncaught Exception occurred
在上面的代码中，不存在 "catch" 代码块，而是触发顶层的异常处理程序。应该使用此函数来捕获所有未被捕获的异常。

异常的规则
需要进行异常处理的代码应该放入 try 代码块内，以便捕获潜在的异常。
每个 try 或 throw 代码块必须至少拥有一个对应的 catch 代码块。
使用多个 catch 代码块可以捕获不同种类的异常。
可以在 try 代码块内的 catch 代码块中抛出（再次抛出）异常。
简而言之：如果抛出了异常，就必须捕获它。
```

### [如何 foreach 迭代对象](https://secure.php.net/manual/zh/class.iterator.php)
```
Iterator（迭代器）接口
(No version information available, might only be in Git)

简介
可在内部迭代自己的外部迭代器或类的接口。

接口摘要
Iterator extends Traversable {
/* 方法 */
abstract public current ( void ) : mixed
abstract public key ( void ) : scalar
abstract public next ( void ) : void
abstract public rewind ( void ) : void
abstract public valid ( void ) : bool
}
预定义迭代器
PHP 已经提供了一些用于日常任务的迭代器。 详细列表参见 SPL 迭代器。

范例
Example #1 基本用法

这个例子展示了使用 foreach 时，迭代器方法的调用顺序。

<?php
class myIterator implements Iterator {
    private $position = 0;
    private $array = array(
        "firstelement",
        "secondelement",
        "lastelement",
    );  

    public function __construct() {
        $this->position = 0;
    }

    function rewind() {
        var_dump(__METHOD__);
        $this->position = 0;
    }

    function current() {
        var_dump(__METHOD__);
        return $this->array[$this->position];
    }

    function key() {
        var_dump(__METHOD__);
        return $this->position;
    }

    function next() {
        var_dump(__METHOD__);
        ++$this->position;
    }

    function valid() {
        var_dump(__METHOD__);
        return isset($this->array[$this->position]);
    }
}

$it = new myIterator;

foreach($it as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}
?>
以上例程的输出类似于：

string(18) "myIterator::rewind"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(0)
string(12) "firstelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(1)
string(13) "secondelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(2)
string(11) "lastelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
Table of Contents
Iterator::current — 返回当前元素
Iterator::key — 返回当前元素的键
Iterator::next — 向前移动到下一个元素
Iterator::rewind — 返回到迭代器的第一个元素
Iterator::valid — 检查当前位置是否有效
```

### [如何数组化操作对象 `$obj[key];`](https://secure.php.net/manual/zh/class.arrayaccess.php)
```
ArrayAccess（数组式访问）接口
(No version information available, might only be in Git)

简介
提供像访问数组一样访问对象的能力的接口。

接口摘要
ArrayAccess {
/* 方法 */
abstract public offsetExists ( mixed $offset ) : boolean
abstract public offsetGet ( mixed $offset ) : mixed
abstract public offsetSet ( mixed $offset , mixed $value ) : void
abstract public offsetUnset ( mixed $offset ) : void
}
Example #1 Basic usage

<?php
class obj implements arrayaccess {
    private $container = array();
    public function __construct() {
        $this->container = array(
            "one"   => 1,
            "two"   => 2,
            "three" => 3,
        );
    }
    public function offsetSet($offset, $value) {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }
    public function offsetExists($offset) {
        return isset($this->container[$offset]);
    }
    public function offsetUnset($offset) {
        unset($this->container[$offset]);
    }
    public function offsetGet($offset) {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }
}

$obj = new obj;
var_dump(isset($obj["two"]));
var_dump($obj["two"]);
unset($obj["two"]);
var_dump(isset($obj["two"]));
$obj["two"] = "A value";
var_dump($obj["two"]);
$obj[] = 'Append 1';
$obj[] = 'Append 2';
$obj[] = 'Append 3';
print_r($obj);
?>
以上例程的输出类似于：

bool(true)
int(2)
bool(false)
string(7) "A value"
obj Object
(
    [container:obj:private] => Array
        (
            [one] => 1
            [three] => 3
            [two] => A value
            [0] => Append 1
            [1] => Append 2
            [2] => Append 3
        )

)
Table of Contents
ArrayAccess::offsetExists — 检查一个偏移位置是否存在
ArrayAccess::offsetGet — 获取一个偏移位置的值
ArrayAccess::offsetSet — 设置一个偏移位置的值
ArrayAccess::offsetUnset — 复位一个偏移位置的值
```

### yield 是什么，说个使用场景 [yield](https://www.oschina.net/translate/cooperative-multitasking-using-coroutines-in-php)
```
PHP5.5一个比较好的新功能是实现对生成器和协同程序的支持。对于生成器，
PHP的文档和各种其他的博客文章（就像这一个或这一个）已经有了非常详细的讲解。
协同程序相对受到的关注就少了，所以协同程序虽然有很强大的功能但也很难被知晓，解释起来也比较困难。

这篇文章指导你通过使用协同程序来实施任务调度，通过实例实现对技术的理解。我将在前三节做一个简单的背景介绍。
如果你已经有了比较好的基础，可以直接跳到“协同多任务处理”一节。
 
生成器
生成器最基本的思想也是一个函数，这个函数的返回值是依次输出，而不是只返回一个单独的值。或者，换句话说，
生成器使你更方便的实现了迭代器接口。下面通过实现一个xrange函数来简单说明：

<?php
function xrange($start, $end, $step = 1) {
    for ($i = $start; $i <= $end; $i += $step) {
        yield $i;
    }
}
foreach (xrange(1, 1000000) as $num) {
    echo $num, "\n";
}

上面这个xrange（）函数提供了和PHP的内建函数range()一样的功能。但是不同的是range()函数返回的
是一个包含属组值从1到100万的数组（注：请查看手册）。而xrange（）函数返回的是依次输出这些值的一个迭代器，
而且并不会真正以数组形式计算。

这种方法的优点是显而易见的。它可以让你在处理大数据集合的时候不用一次性的加载到内存中。
甚至你可以处理无限大的数据流。

当然，也可以不同通过生成器来实现这个功能，而是可以通过继承Iterator接口实现。
通过使用生成器实现起来会更方便，而不用再去实现iterator接口中的5个方法了。

生成器为可中断的函数
要从生成器认识协同程序，理解它们内部是如何工作的非常重要：生成器是可中断的函数，在它里面，yield构成了中断点。 

紧接着上面的例子，如果你调用xrange(1,1000000)的话，xrange()函数里代码没有真正地运行。
相反，PHP只是返回了一个实现了迭代器接口的 生成器类实例： 

<?php
$range = xrange(1, 1000000);
var_dump($range); // object(Generator)#1
var_dump($range instanceof Iterator); // bool(true)

你对某个对象调用迭代器方法一次，其中的代码运行一次。例如，如果你调用$range->rewind(),
那么xrange()里的代码运行到控制流 第一次出现yield的地方。在这种情况下，
这就意味着当$i=$start时yield $i才运行。传递给yield语句的值是使用$range->current()获取的。
 
为了继续执行生成器中的代码，你必须调用$range->next()方法。这将再次启动生成器，直到yield语句出现。
因此，连续调用next()和current()方法 你将能从生成器里获得所有的值，直到某个点没有再出现yield语句。
对xrange()来说，这种情形出现在$i超过$end时。在这中情况下， 控制流将到达函数的终点，因此将不执行任何代码。
一旦这种情况发生，vaild()方法将返回假，这时迭代结束。
 
协程
协程给上面功能添加的主要东西是回送数据给生成器的能力。这将把生成器到调用者的单向通信转变为两者之间的双向通信。
通过调用生成器的send()方法而不是其next()方法传递数据给协程。下面的logger()协程是这种通信如何运行的例子：

<?php
function logger($fileName) {
    $fileHandle = fopen($fileName, 'a');
    while (true) {
        fwrite($fileHandle, yield . "\n");
    }
}

$logger = logger(__DIR__ . '/log');
$logger->send('Foo');
$logger->send('Bar')

正如你能看到，这儿yield没有作为一个语句来使用，而是用作一个表达式。即它有一个返回值。
yield的返回值是传递给send()方法的值。 在这个例子里，yield将首先返回"Foo",然后返回"Bar"。

上面的例子里yield仅作为接收者。混合两种用法是可能的，即既可接收也可发送。接收和发送通信如何进行的例子如下：

<?php
function gen() {
    $ret = (yield 'yield1');
    var_dump($ret);
    $ret = (yield 'yield2');
    var_dump($ret);
}
$gen = gen();
var_dump($gen->current());    // string(6) "yield1"
var_dump($gen->send('ret1')); // string(4) "ret1"   (the first var_dump in gen)
                              // string(6) "yield2" (the var_dump of the ->send() return value)
var_dump($gen->send('ret2')); // string(4) "ret2"   (again from within gen)
                              // NULL               (the return value of ->send())
马上理解输出的精确顺序有点困难，因此确定你知道为什按照这种方式输出。我愿意特别指出的有两点：
第一点，yield表达式两边使用 圆括号不是偶然。由于技术原因（虽然我已经考虑为赋值增加一个异常，就像Python那样），圆括号是必须的。
第二点，你可能已经注意到 调用current()之前没有调用rewind()。如果是这么做的，那么已经隐含地执行了rewind操作。
 
多任务协作
如果阅读了上面的logger()例子，那么你认为“为了双向通信我为什么要使用协程呢？ 为什么我不能只用常见的类呢？”，
你这么问完全正确。上面的例子演示了基本用法，然而上下文中没有真正的展示出使用协程的优点。
这就是列举许多协程例子的理由。正如上面介绍里提到的，协程是非常强大的概念，
不过这样的应用很稀少而且常常十分复杂。给出一些简单而真实的例子很难。

在这篇文章里，我决定去做的是使用协程实现多任务协作。我们尽力解决的问题是你想并发地运行多任务(或者“程序”）。
不过处理器在一个时刻只能运行一个任务（这篇文章的目标是不考虑多核的）。
因此处理器需要在不同的任务之间进行切换，而且总是让每个任务运行 “一小会儿”。
 
多任务协作这个术语中的“协作”说明了如何进行这种切换的：它要求当前正在运行的任务自动把控制传回给调度器，
这样它就可以运行其他任务了。这与“抢占”多任务相反，抢占多任务是这样的：调度器可以中断运行了一段时间的任务，
不管它喜欢还是不喜欢。协作多任务在Windows的早期版本（windows95)和Mac OS中有使用，不过它们后来都切换到使用抢先多任务了。
理由相当明确：如果你依靠程序自动传回 控制的话，那么坏行为的软件将很容易为自身占用整个CPU，不与其他任务共享。 

这个时候你应当明白协程和任务调度之间的联系：yield指令提供了任务中断自身的一种方法，然后把控制传递给调度器。
因此协程可以运行多个其他任务。更进一步来说，yield可以用来在任务和调度器之间进行通信。

我们的目的是 对 “任务”用更轻量级的包装的协程函数:

<?php
class Task {
    protected $taskId;
    protected $coroutine;
    protected $sendValue = null;
    protected $beforeFirstYield = true;
    public function __construct($taskId, Generator $coroutine) {
        $this->taskId = $taskId;
        $this->coroutine = $coroutine;
    }
    public function getTaskId() {
        return $this->taskId;
    }
    public function setSendValue($sendValue) {
        $this->sendValue = $sendValue;
    }
    public function run() {
        if ($this->beforeFirstYield) {
            $this->beforeFirstYield = false;
            return $this->coroutine->current();
        } else {
            $retval = $this->coroutine->send($this->sendValue);
            $this->sendValue = null;
            return $retval;
        }
    }
    public function isFinished() {
        return !$this->coroutine->valid();
    }
}

一个任务是用 任务ID标记一个协程。使用setSendValue()方法，你可以指定哪些值将被发送到下次的恢复（在之后你会了解到我们需要这个）。 
run()函数确实没有做什么，除了调用send()方法的协同程序。要理解为什么添加beforeFirstYieldflag，需要考虑下面的代码片段：

<?php
function gen() {
    yield 'foo';
    yield 'bar';
}
$gen = gen();
var_dump($gen->send('something'));
// As the send() happens before the first yield there is an implicit rewind() call,
// so what really happens is this:
$gen->rewind();
var_dump($gen->send('something'));
// The rewind() will advance to the first yield (and ignore its value), the send() will
// advance to the second yield (and dump its value). Thus we loose the first yielded value!
通过添加 beforeFirstYieldcondition 我们可以确定 first yield 的值 被返回。
 
调度器现在不得不比多任务循环要做稍微多点了，然后才运行多任务：

<?php
class Scheduler {
    protected $maxTaskId = 0;
    protected $taskMap = []; // taskId => task
    protected $taskQueue;
    public function __construct() {
        $this->taskQueue = new SplQueue();
    }
    public function newTask(Generator $coroutine) {
        $tid = ++$this->maxTaskId;
        $task = new Task($tid, $coroutine);
        $this->taskMap[$tid] = $task;
        $this->schedule($task);
        return $tid;
    }
    public function schedule(Task $task) {
        $this->taskQueue->enqueue($task);
    }
    public function run() {
        while (!$this->taskQueue->isEmpty()) {
            $task = $this->taskQueue->dequeue();
            $task->run();
            if ($task->isFinished()) {
                unset($this->taskMap[$task->getTaskId()]);
            } else {
                $this->schedule($task);
            }
        }
    }
}

newTask()方法（使用下一个空闲的任务id）创建一个新任务，然后把这个任务放入任务映射数组里。
接着它通过把任务放入任务队列里来实现对任务的调度。接着run()方法扫描任务队列，运行任务。
如果一个任务结束了，那么它将从队列里删除，否则它将在队列的末尾再次被调度。
让我们看看下面具有两个简单（并且没有什么意义）任务的调度器： 

<?php
function task1() {
    for ($i = 1; $i <= 10; ++$i) {
        echo "This is task 1 iteration $i.\n";
        yield;
    }
}
function task2() {
    for ($i = 1; $i <= 5; ++$i) {
        echo "This is task 2 iteration $i.\n";
        yield;
    }
}
$scheduler = new Scheduler;
$scheduler->newTask(task1());
$scheduler->newTask(task2());
$scheduler->run();
两个任务都仅仅回显一条信息，然后使用yield把控制回传给调度器。输出结果如下：
This is task 1 iteration 1.
This is task 2 iteration 1.
This is task 1 iteration 2.
This is task 2 iteration 2.
This is task 1 iteration 3.
This is task 2 iteration 3.
This is task 1 iteration 4.
This is task 2 iteration 4.
This is task 1 iteration 5.
This is task 2 iteration 5.
This is task 1 iteration 6.
This is task 1 iteration 7.
This is task 1 iteration 8.
This is task 1 iteration 9.
This is task 1 iteration 10.

输出确实如我们所期望的：对前五个迭代来说，两个任务是交替运行的，接着第二个任务结束后，只有第一个任务继续运行。
 
与调度器之间通信
既然调度器已经运行了，那么我们就转向日程表的下一项：任务和调度器之间的通信。
我们将使用进程用来和操作系统会话的同样的方式来通信：系统调用。我们需要系统调用的理由是操作系统与进程相比它处在不同的权限级别上。
因此为了执行特权级别的操作（如杀死另一个进程），就不得不以某种方式把控制传回给内核，这样内核就可以执行所说的操作了。
再说一遍，这种行为在内部是通过使用中断指令来实现的。过去使用的是通用的int指令，如今使用的是更特殊并且更快速的syscall/sysenter指令。

我们的任务调度系统将反映这种设计：不是简单地把调度器传递给任务（这样久允许它做它想做的任何事），
我们将通过给yield表达式传递信息来与系统调用通信。这儿yield即是中断，也是传递信息给调度器（和从调度器传递出信息）的方法。
 
为了说明系统调用，我将对可调用的系统调用做一个小小的封装：

<?php
class SystemCall {
    protected $callback;
    public function __construct(callable $callback) {
        $this->callback = $callback;
    }
    public function __invoke(Task $task, Scheduler $scheduler) {
        $callback = $this->callback; // Can't call it directly in PHP :/
        return $callback($task, $scheduler);
    }
}

它将像其他任何可调用那样(使用_invoke)运行，不过它要求调度器把正在调用的任务和自身传递给这个函数。
为了解决这个问题 我们不得不微微的修改调度器的run方法：

<?php
public function run() {
    while (!$this->taskQueue->isEmpty()) {
        $task = $this->taskQueue->dequeue();
        $retval = $task->run();
        if ($retval instanceof SystemCall) {
            $retval($task, $this);
            continue;
        }
        if ($task->isFinished()) {
            unset($this->taskMap[$task->getTaskId()]);
        } else {
            $this->schedule($task);
        }
    }
}

第一个系统调用除了返回任务ID外什么都没有做：

<?php
function getTaskId() {
    return new SystemCall(function(Task $task, Scheduler $scheduler) {
        $task->setSendValue($task->getTaskId());
        $scheduler->schedule($task);
    });
}

这个函数确实设置任务id为下一次发送的值，并再次调度了这个任务。由于使用了系统调用，所以调度器不能自动调用任务，
我们需要手工调度任务（稍后你将明白为什么这么做）。要使用这个新的系统调用的话，我们要重新编写以前的例子：

<?php
function task($max) {
    $tid = (yield getTaskId()); // <-- here's the syscall!
    for ($i = 1; $i <= $max; ++$i) {
        echo "This is task $tid iteration $i.\n";
        yield;
    }
}
$scheduler = new Scheduler;
$scheduler->newTask(task(10));
$scheduler->newTask(task(5));
$scheduler->run();

这段代码将给出与前一个例子相同的输出。注意系统调用同其他任何调用一样正常地运行，
不过预先增加了yield。要创建新的任务，然后再杀死它们的话，需要两个以上的系统调用：  

<?php
function newTask(Generator $coroutine) {
    return new SystemCall(
        function(Task $task, Scheduler $scheduler) use ($coroutine) {
            $task->setSendValue($scheduler->newTask($coroutine));
            $scheduler->schedule($task);
        }
    );
}
function killTask($tid) {
    return new SystemCall(
        function(Task $task, Scheduler $scheduler) use ($tid) {
            $task->setSendValue($scheduler->killTask($tid));
            $scheduler->schedule($task);
        }
    );
}

killTask函数需要在调度器里增加一个方法：

<?php
public function killTask($tid) {
    if (!isset($this->taskMap[$tid])) {
        return false;
    }
    unset($this->taskMap[$tid]);
    // This is a bit ugly and could be optimized so it does not have to walk the queue,
    // but assuming that killing tasks is rather rare I won't bother with it now
    foreach ($this->taskQueue as $i => $task) {
        if ($task->getTaskId() === $tid) {
            unset($this->taskQueue[$i]);
            break;
        }
    }
    return true;
}

用来测试新功能的微脚本：  

<?php
function childTask() {
    $tid = (yield getTaskId());
    while (true) {
        echo "Child task $tid still alive!\n";
        yield;
    }
}
function task() {
    $tid = (yield getTaskId());
    $childTid = (yield newTask(childTask()));
    for ($i = 1; $i <= 6; ++$i) {
        echo "Parent task $tid iteration $i.\n";
        yield;
        if ($i == 3) yield killTask($childTid);
    }
}

$scheduler = new Scheduler;
$scheduler->newTask(task());
$scheduler->run();
 这段代码将打印以下信息：
Parent task 1 iteration 1.
Child task 2 still alive!
Parent task 1 iteration 2.
Child task 2 still alive!
Parent task 1 iteration 3.
Child task 2 still alive!
Parent task 1 iteration 4.
Parent task 1 iteration 5.
Parent task 1 iteration 6.
```

### 如何获取客户端 IP 和服务端 IP 地址
```
[客户端 IP](https://stackoverflow.com/questions/3003145/how-to-get-the-client-ip-address-in-php)    
这是获取IP地址的更短，更简洁的方法：

function get_ip_address(){
    foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
        if (array_key_exists($key, $_SERVER) === true){
            foreach (explode(',', $_SERVER[$key]) as $ip){
                $ip = trim($ip); // just to be safe

                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
                    return $ip;
                }
            }
        }
    }
}

您的代码似乎已经很完整了，我看不到其中的任何可能的错误（除了常见的IP警告），validate_ip()尽管如此，我还是将功能更改为依赖过滤器扩展：

public function validate_ip($ip)
{
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false)
    {
        return false;
    }

    self::$ip = sprintf('%u', ip2long($ip)); // you seem to want this

    return true;
}

此外，您的HTTP_X_FORWARDED_FOR代码段可以通过以下方式简化：

// check for IPs passing through proxies
if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{
    // check if multiple ips exist in var
    if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') !== false)
    {
        $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        
        foreach ($iplist as $ip)
        {
            if ($this->validate_ip($ip))
                return $ip;
        }
    }
    
    else
    {
        if ($this->validate_ip($_SERVER['HTTP_X_FORWARDED_FOR']))
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
}
对此：

// check for IPs passing through proxies
if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{
    $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        
    foreach ($iplist as $ip)
    {
        if ($this->validate_ip($ip))
            return $ip;
    }
}

您可能还需要验证IPv6地址。

[服务端 IP](https://stackoverflow.com/questions/5800927/how-to-identify-server-ip-address-in-php)
$_SERVER['SERVER_ADDR'];
$_SERVER['SERVER_PORT'];

如果您使用的是PHP 5.3或更高版本，则可以执行以下操作：
$host= gethostname();
$ip = gethostbyname($host);

了解代理透传 实际IP 的概念
1.基于代理(七层负载均衡)情况下 透传客户端的真实IP
环境:
10.0.0.5 proxy_node1 一级代理
10.0.0.6 proxy_node2 二级代理
10.0.0.7 proxy_node3 三级代理
10.0.0.8 webserver 真实节点
域名:ip.cheng.com 解析 --> 10.0.0.5

1.一级代理proxy_node1 Nginx配置如下:

[root@lb01 conf.d]# cat proxy_ip.cheng.com.conf 
server {
	listen 80;
	server_name ip.cheng.com;

	location / {
	proxy_pass http://10.0.0.6;
	proxy_http_version 1.1;
	proxy_set_header Host $http_host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;	
	}
}

2.二级代理proxy_node2 Nginx配置如下:

[root@lb02 conf.d]# cat proxy_ip.cheng.com.conf 
server {
	listen 80;
	server_name ip.cheng.com;

	location / {
	proxy_pass http://10.0.0.7;
	proxy_http_version 1.1;
	proxy_set_header Host $http_host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;	
	}
}

3.三级代理proxy_node3 Nginx配置如下:

[root@web01 conf.d]# cat proxy_ip.cheng.com.conf 
server {
	listen 80;
	server_name ip.cheng.com;

	location / {
	proxy_pass http://10.0.0.8;
	proxy_http_version 1.1;
	proxy_set_header Host $http_host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;	
	}
}

4.WebServer Nginx配置如下:

[root@web02 conf.d]# cat proxy_ip.cheng.com.conf 
server {
	listen 80;
	server_name ip.cheng.com;
	root /code;

	location / {
	index index.php index.html;
	}

	location ~ \.php$ {
	fastcgi_pass 127.0.0.1:9000;
	fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
	include fastcgi_params;
	}
}

5.测试方式一，通过如下页面获取真实IP，或查看 phpinfo() 函数中的 HTTP_X_FORWARDED_FOR

[root@web02 code]# cat index.php 
<?php
	$ip = getenv("HTTP_X_FORWARDED_FOR");
	echo "X_FORWARDED_FOR: $ip";
?>

6.测试方式二，通过查看日志测试

2.Nginx RealIP获取真实IP
使用nginx Realip_module获取多级代理下的客户端真实IP地址,在真实Web节点上配置，配置信息如下：

[root@web02 conf.d]# cat proxy_ip.cheng.com.conf 
server {
	listen 80;
	server_name ip.cheng.com;
	root /code;
	set_real_ip_from 10.0.0.5;
	set_real_ip_from 10.0.0.6;
	set_real_ip_from 10.0.0.7;
	real_ip_header   X-Forwarded-For;
	real_ip_recursive on;

	location / {
	index index.php index.html;
	}

	location ~ \.php$ {
	fastcgi_pass 127.0.0.1:9000;
	fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
	include fastcgi_params;
	}
}

最终结果是"10.0.0.1 - - "GET /index.php HTTP/1.1" 200 "10.0.0.5, 10.0.0.6"
10.0.0.5，10.0.0.6都出现在set_real_ip_from中，仅仅10.0.0.1没出现，那么他就被认为是用户的ip地址，同时会被赋值到 $remote_addr变量中。

获取真实IP总结：
forwarded-for：可以获取到用户的真实IP地址。
nginx realip：程序无需改动，直接使用remote_addr变量即可获取真实IP地址，但需要知道所有沿途经过的IP地址或IP段
```

### 如何开启 PHP 异常提示
```
php.ini 开启 `display_errors` 设置 `error_reporting` 等级

运行时，使用 `ini_set(k, v);` 动态设置

PHP打开错误提示和关闭错误提示的方法
找到php的配置文件，也就是php.ini

在文件中查找 ‘display_errors’   查找到 display_errors = Off 或者 display_errors = On，
Off为关闭错误提示，On为打开错误提示，根据需求修改即可。

也可在php文件中加入以下代码

复制代码
//禁用错误报告
error_reporting(0);
//报告运行时错误
error_reporting(E_ERROR | E_WARNING | E_PARSE);
//报告所有错误
error_reporting(E_ALL);
```

### 如何获取扩展安装路径
```
`phpinfo();` 页面查找 `extension_dir`

命令行 `php -i |grep extension_dir`

运行时 `echo ini_get('extension_dir');`
```

### 字符串、数字比较大小的原理，注意 0 开头的8进制、0x 开头16进制
```
字符串比较大小，从左(高位)至右，逐个字符 ASCII 比较
```

### BOM 头是什么，怎么除去
```
`0xEF`,`0xBB`,`0xBF`
WINDOWS自带的记事本，在保存一个以 UTF-8 编码的文件时，会在文件开始的地方插入三个不可见的字符（0xEF 0xBB 0xBF，即BOM）。
它是一串隐藏的字符，用于让记事本等编辑器识别这个文件是否以UTF-8编码。对于一般的文本文件，
这样并不会产生什么麻烦。但对于 PHP来说，BOM是个大麻烦。
PHP并不会忽略BOM，所以在读取、包含或者引用这些文件时，会把 BOM 作为该文件开头正文的一部分。
根据嵌入式语言的特点，这串字符将被直接执行（显示）出来。由此造成即使页面的 top padding 设置为0，
也无法让整个网页紧贴浏览器顶部，因为在html一开头有这3个字符呢！
而且 BOM 是内容输入，如果没有开启缓冲区输出的时候，BOM 会影响 header 函数的使用，
因为在header之前不能有任何有效的内容输出，BOM也算是有效内容输出。
去掉BOM的方法，建议使用专业的代码编辑器工具来处理 例如 Notepad++ 或者 EditPlus 
在新建和保存以及转换编码的功能内都会有无 BOM的格式选择。

[检测、去除](https://stackoverflow.com/questions/10290849/how-to-remove-multiple-utf-8-bom-sequences-before-doctype)
you would use the following code to remove utf8 bom

//Remove UTF8 Bom

function remove_utf8_bom($text)
{
    $bom = pack('H*','EFBBBF');
    $text = preg_replace("/^$bom/", '', $text);
    return $text;
}
```

### 什么是 MVC 
```
MVC 即 Model、View、Controller 即模型、视图、控制器。

在 web 项目中 View 层是界面，Controller 层是业务逻辑，Model 层是数据库访问。

MVC 要实现的目标是将软件用户界面和业务逻辑分离以使代码可扩展性、可复用性、可维护性、灵活性加强。

控制器的作用就是这么简单， 用来将不同的View和不同的Model组织在一起，顺便替双方传递消息，仅此而已。

组成MVC的三个模式分别是组合模式、策咯模式、观察者模式，MVC在软件开发中发挥的威力，最终离不开这三个模式的默契配合。
```

### Memcached 与 Redis 区别
```
Redis和Memcache 都是基于内存的数据存储系统。Memcached是高性能分布式内存缓存服务，
其本质上就是一个内存key-value数据库。Redis是一个开源的key-value存储系统。与Memcached类似，
Redis将大部分数据存储在内存中，支持的数据类型包括：字符串、哈希表、链表、集合、有序集合以及基于这些数据类型的相关操作。
那么，Memcache与Redis有什么区别呢？

1、数据操作不同
与Memcached仅支持简单的key-value结构的数据记录不同，Redis支持的数据类型要丰富得多。
Memcached基本只支持简单的key-value存储，不支持枚举，不支持持久化和复制等功能。
Redis支持服务器端的数据操作相比Memcached来说，拥有更多的数据结构和并支持更丰富的数据操作，
支持list、set、sorted set、hash等众多数据结构，还同时提供了持久化和复制等功能。

而通常在Memcached里，使用者需要将数据拿到客户端来进行类似的修改再set回去，
这大大增加了网络IO的次数和数据体积。在Redis中，这些复杂的操作通常和一般的GET/SET一样高效。
所以，如果需要缓存能够支持更复杂的结构和操作， Redis会是更好的选择。

2、内存管理机制不同
在Redis中，并不是所有的数据都一直存储在内存中的。这是和Memcached相比一个最大的区别。
当物理内存用完时，Redis可以将一些很久没用到的value交换到磁盘。Redis只会缓存所有的key的信息，
如果Redis发现内存的使用量超过了某一个阀值，将触发swap的操作，Redis根据“swappability = age*log(size_in_memory)”
计算出哪些key对应的value需要swap到磁盘。然后再将这些key对应的value持久化到磁盘中，同时在内存中清除。
这种特性使得Redis可以保持超过其机器本身内存大小的数据。

而Memcached默认使用Slab Allocation机制管理内存，其主要思想是按照预先规定的大小，
将分配的内存分割成特定长度的块以存储相应长度的key-value数据记录，以完全解决内存碎片问题。

从内存利用率来讲，使用简单的key-value存储的话，Memcached的内存利用率更高。
而如果Redis采用hash结构来做key-value存储，由于其组合式的压缩，其内存利用率会高于Memcached。

3、性能不同
由于Redis只使用单核，而Memcached可以使用多核，所以平均每一个核上Redis在存储小数据时比Memcached性能更高。
而在100k以上的数据中，Memcached性能要高于Redis，虽然Redis也在存储大数据的性能上进行了优化，但是比起Memcached，还是稍有逊色。

4、集群管理不同
Memcached是全内存的数据缓冲系统，Redis虽然支持数据的持久化，但是全内存毕竟才是其高性能的本质。
作为基于内存的存储系统来说，机器物理内存的大小就是系统能够容纳的最大数据量。
如果需要处理的数据量超过了单台机器的物理内存大小，就需要构建分布式集群来扩展存储能力。

Memcached本身并不支持分布式，因此只能在客户端通过像一致性哈希这样的分布式算法来实现Memcached的分布式存储。
相较于Memcached只能采用客户端实现分布式存储，Redis更偏向于在服务器端构建分布式存储。
```

### redis
```
Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

redis包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hashs（哈希类型）。
这些数据类型都 支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。

php中reids的操作

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

### Yii2中的依赖注入
```
 基本概念
1.依赖倒置（反转）原则（DIP）：一种软件架构设计的原则（抽象概念，是一种思想）
在面向对象编程领域中，依赖反转原则（Dependency inversion principle，DIP）是指一种特定的解耦
（传统的依赖关系创建在高层次上，而具体的策略设置则应用在低层次的模块上）形式，
使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），从而使得低层次模块依赖于高层次模块的需求抽象。

该原则规定：
    1.高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。
    2.抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。

在上图中，高层对象A依赖于底层对象B的实现；图2中，把高层对象A对底层对象的需求抽象为一个接口A，
底层对象B实现了接口A，这就是依赖反转。
该原则颠倒了一部分人对于面向对象设计的认识方式。如高层次和低层次对象都应该依赖于相同的抽象接口。
它转换了依赖，高层模块不依赖于低层模块的实现，而低层模块依赖于高层模块定义的接口。通俗的讲，就是高层模块定义接口，低层模块负责实现。

2.控制反转（IoC）：一种反转流、依赖和接口的方式（DIP的具体实现方式，一种设计原则）
控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。
其中最常见的方式叫做依赖注入（Dependency Injection，简称DI），还有一种方式叫“依赖查找”（Dependency Lookup）。
通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体，将其所依赖的对象的引用传递给它。也可以说，依赖被注入到对象中。

参考：https://segmentfault.com/a/1190000010788354
 入口文件
> 文件位置：web\index.php

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

参考：https://segmentfault.com/a/1190000011823699
```

### 依赖注入实现原理
```
这篇文章主要介绍了PHP依赖注入原理与用法,简单讲述了依赖注入的概念、
原理并结合实例形式分析了php实现与使用依赖注入的相关操作技巧,需要的朋友可以参考下
 
本文实例讲述了PHP依赖注入原理与用法。分享给大家供大家参考，具体如下：

依然是来自到喜啦的一道面试题，你知道什么是依赖注入吗？

依赖注入（DI）的概念虽然听起来很深奥，但是如果你用过一些新兴的php框架的话，
对于DI一定不陌生，因为它们多多少少都用到了依赖注入来处理类与类之间的依赖关系。

php中传递依赖关系的三种方案
其实要理解DI，首先要明白在php中如何传递依赖关系。

第一种方案，也是最不可取的方案，就是在A类中直接用new关键词来创建一个B类，如下代码所示：

<?php
class A
{
  public function __construct()
  {
    $b = new B();
  }
}
为什么这种方案不可取呢？因为这样的话，A与B就耦合在了一起，也就是说A类无法脱离B类工作。

第二种方案就是在A类的方法中传入需要的B类，如下代码所示：

<?php
class A
{
  public function __construct(B $b)
  {
  }
}
这种方法比第一种方案有了改进，A类不必与B类捆绑在一起，只要传入的类满足A类的需求，也可以是C类，也可以是D类等等。

但是这种方案的弊端在于如果A类依赖的类较多，参数列表会很长，容易发生混乱。

第三种方案是使用set方法传入，如下代码所示：

<?php
class A
{
  public function setB(B $b)
  {
    $this->b = $b;
  }
}
这种方案同样存在和第二种方案一样的弊端，当依赖的类增多时，我们需要些很多很多的set方法。

这时我们在想如果有一个专门的类（或者说一个容器）可以帮我们管理这些依赖关系就好了。

一个简单的依赖注入的例子
如下代码来自twittee：

<?php
class Container {
 private $s=array();
 function __set($k, $c) { $this->s[$k]=$c; }
 function __get($k) { return $this->s[$k]($this); }
}
有了container类之后我们可以怎样管理A与B之间的依赖关系呢，用代码说话吧：

<?php
class A
{
  private $container;
  public function __construct(Container $container)
  {
    $this->container = $container;
  }
  public function doSomeThing()
  {
    //do something which needs class B
    $b = $this->container->getB();
    //to do
  }
}
再将B类注入到容器类中：

$c = new Container();
$c->setB(new B());
还可以传入一个匿名函数，这样B类就不会在传入时就立即实例化，而是在真正调用时才完成实例化的工作：

$c = new Container();
$c->setB(function (){
  return new B();
});
这里举的只是一个很简单的例子，在实际中，容器类要考虑的有很多，比如延迟加载等等。
```

### 如何异步执行命令
```
客户端与服务器端是通过HTTP协议进行连接通讯，客户端发起请求，服务器端接收到请求后执行处理，并返回处理结果。
有时服务器需要执行很耗时的操作，这个操作的结果并不需要返回给客户端。
但因为php是同步执行的，所以客户端需要等待服务处理完才可以进行下一步。
因此对于耗时的操作适合异步执行，服务器接收到请求后，处理完客户端需要的数据就返回，再异步在服务器执行耗时的操作。

1.使用Ajax 与 img 标记
原理，服务器返回的html中插入Ajax 代码或 img 标记，img的src为需要执行的程序。
优点：实现简单，服务端无需执行任何调用
缺点：在执行期间，浏览器会一直处于loading状态，因此这种方法并不算真正的异步调用。
$.get("doRequest.php", { name: "fdipzone"} );
<img src="doRequest.php?name=fdipzone">

2.使用popen
使用popen执行命令，语法：
// popen — 打开进程文件指针  
resource popen ( string $command , string $mode )
pclose(popen('php /home/fdipzone/doRequest.php &', 'r'));
优点：执行速度快
缺点：
1）.只能在本机执行
2）.不能传递大量参数
3）.访问量高时会创建很多进程

3.使用curl
设置curl的超时时间 CURLOPT_TIMEOUT 为1 （最小为1），因此客户端需要等待1秒
<?php 
$ch = curl_init(); 
$curl_opt = array( 
  CURLOPT_URL, 'http://www.example.com/doRequest.php'
  CURLOPT_RETURNTRANSFER,1, 
  CURLOPT_TIMEOUT,1 
); 
curl_setopt_array($ch, $curl_opt); 
curl_exec($ch); 
curl_close($ch); 
?>

4.使用fsockopen
fsockopen是最好的，缺点是需要自己拼接header部分。
<?php 
$url = 'http://www.example.com/doRequest.php'; 
$param = array( 
  'name'=>'fdipzone', 
  'gender'=>'male', 
  'age'=>30 
); 
doRequest($url, $param); 
function doRequest($url, $param=array()){ 
  $urlinfo = parse_url($url); 
  $host = $urlinfo['host']; 
  $path = $urlinfo['path']; 
  $query = isset($param)? http_build_query($param) : ''; 
  $port = 80; 
  $errno = 0; 
  $errstr = ''; 
  $timeout = 10; 
  $fp = fsockopen($host, $port, $errno, $errstr, $timeout); 
  $out = "POST ".$path." HTTP/1.1\r\n"; 
  $out .= "host:".$host."\r\n"; 
  $out .= "content-length:".strlen($query)."\r\n"; 
  $out .= "content-type:application/x-www-form-urlencoded\r\n"; 
  $out .= "connection:close\r\n\r\n"; 
  $out .= $query; 
  fputs($fp, $out); 
  fclose($fp); 
} 
?>
注意：当执行过程中，客户端连接断开或连接超时，都会有可能造成执行不完整，因此需要加上
ignore_user_abort(true); // 忽略客户端断开 
set_time_limit(0);    // 设置执行不超时
```

### 模板引擎是什么，解决什么问题、实现原理（Smarty、Twig、Blade）
```
PHP的模板引擎smarty原理是什么（整理）
目录
一、总结
一句话总结：其实所有的模板引擎的工作原理是差不多的，无非就是在php程序里面
用正则匹配将模板里面的标签替换为php代码从而将两者混合为一个php的混编文件，然后执行这个混编文件。
1、smarty模板引擎的主要作用是什么？
2、smarty的两个函数的主要作用是什么？
3、我们模板中没有php代码，我们只用了{$name}和{$age}就能把对应的变量给展示了出来，是为什么呢？
4、smarty模板引擎里面的display函数的最核心的操作是什么？
二、PHP的模板引擎smarty原理浅谈
三、Smarty模板执行原理
 
>  一、总结（点击显示或隐藏总结内容）
一句话总结：其实所有的模板引擎的工作原理是差不多的，无非就是在php程序里面
用正则匹配将模板里面的标签替换为php代码从而将两者混合为一个php的混编文件，然后执行这个混编文件。

1、smarty模板引擎的主要作用是什么？
smarty模板技术，可以让数据和视图进行分离，让视图中不能直接出现php代码。
这样的话，让前段页面的开发和后台数据的开发，可以双管齐下，同时进行了。

2、smarty的两个函数的主要作用是什么？
smarty模板的使用比较简单，主要有两个非常核心的函数。一个是assign()，
把模板中要使用的数据进行预赋值，一个是display()，用来解析和展示最后的视图模板。

使用的简单代码如下：
include_once "Smarty.class.php";//引入smarty类
$smarty = new Smarty;//创建smarty对象
$smarty->assign("name","zhangmiao");//赋值，以备模板中使用
$smarty->assign("age","18");
$smarty->display('index.tpl');//引入模板，展示视图页面
 
3、我们模板中没有php代码，我们只用了{$name}和{$age}就能把对应的变量给展示了出来，是为什么呢？
然后，我们一看smarty编译后的文件是这样的：

<h1>测试模板1</h1>
我的名字是：<?php echo $this->var["name"]; ?><br/>
我的年纪是：<?php echo $this->var["age"]; ?><br/>
原来如此，最终还是变成了含有php代码的模板，但是这个模板中把标签转成php代码的工作，我们交给了smarty模板引擎来完成的。

那到底smarty模板引擎是怎么把模板里面的非php代码的标签，转变成被最终可以解析执行的php代码的呢？

主要思路是：替换。

分成了两步：

　　1、用过assign函数把要解析的标签变量赋值

　　2、通过display函数把标签替换成对象的php变量

我们根据这个思路，自己也写了个简易版的smarty模板引擎，算是多smarty模板引擎设计原理的一种理解。
但是只能解析单个变量的标签，其他标签均没有处理。核心代码如下：

//获取模板源文件，用来替换
$template_content = file_get_contents($template_path);

$pattern = array(
    '/\{\s*\$([a-zA-Z][a-zA-Z0-9_]*)\s*\}/i'
);
$replace = array(
    '<?php echo $this->var["${1}"]; ?>'
);
//用正则去替换模板源文件中的变量符号{$varname}
$res = preg_replace($pattern,$replace,$template_content);
//编译后文件写入某个目录
file_put_contents($template_c_path,$res);

4、smarty模板引擎里面的display函数的最核心的操作是什么？
替换

把标签的内容替换成php的内容
例如把
<h1>测试模板1</h1>
我的名字是：{$name}<br/>
我的年纪是：{$age}<br/>
替换为：

<h1>测试模板1</h1>
我的名字是：<?php echo $this->var["name"]; ?><br/>
我的年纪是：<?php echo $this->var["age"]; ?><br/>

二、PHP的模板引擎smarty原理浅谈
　　mvc是开发中的一个伟大的思想，使得开发代码有了更加清晰的层次，让代码分为了三层各施其职、
无论是对代码的编写以及后期的阅读和维护，都提供了很大的便利。

　　我们在php开发中，视图层view是不允许有php代码来操作数据库之类的来获取数据的，
我们一般都会在控制器层controller，就已经把视图层要展示的数据准备好，方便视图层直接用来展示。

　　smarty模板技术，可以让数据和视图进行分离，让视图中不能直接出现php代码。
这样的话，让前段页面的开发和后台数据的开发，可以双管齐下，同时进行了。

　　

　　smarty模板的使用比较简单，主要有两个非常核心的函数。一个是assign()，
把模板中要使用的数据进行预赋值，一个是display()，用来解析和展示最后的视图模板。

　　使用的简单代码如下：
include_once "Smarty.class.php";//引入smarty类
$smarty = new Smarty;//创建smarty对象
$smarty->assign("name","zhangmiao");//赋值，以备模板中使用
$smarty->assign("age","18");
$smarty->display('index.tpl');//引入模板，展示视图页面

我们看下模板源代码是这样的：
<h1>测试模板1</h1>
我的名字是：{$name}<br/>
我的年纪是：{$age}<br/>
浏览器页面是这样的：

疑问：我们模板中没有php代码，我们只用了{$name}和{$age}就能把对应的变量给展示了出来，是什么鬼呢？

然后，我们一看smarty编译后的文件是这样的：

<h1>测试模板1</h1>
我的名字是：<?php echo $this->var["name"]; ?><br/>
我的年纪是：<?php echo $this->var["age"]; ?><br/>
原来如此，最终还是变成了含有php代码的模板，但是这个模板中把标签转成php代码的工作，我们交给了smarty模板引擎来完成的。

那到底smarty模板引擎是怎么把模板里面的非php代码的标签，转变成被最终可以解析执行的php代码的呢？

主要思路是：替换。

分成了两步：

　　1、用过assign函数把要解析的标签变量赋值

　　2、通过display函数把标签替换成对象的php变量

我们根据这个思路，自己也写了个简易版的smarty模板引擎，算是多smarty模板引擎设计原理的一种理解。
但是只能解析单个变量的标签，其他标签均没有处理。代码如下：

class MySmarty{

    //模板存放路径
    public $template = './template/';
    //编译后模板路径
    public $template_c = './template_c/';

    //存放变量的数组,通过assign函数赋值
    public $var = array();


    //变量赋值
    public function assign($vkey,$value){
        if($vkey != ""){
            $this->var[$vkey] = $value;//把要模板中解析的数据压入数组
        }
    }

    //模板中变量替换
    public function display($path){
        $template_path = $this->template.$path;
        $template_c_path = $this->template_c.$path.".php";
        if(!file_exists($template_path)){
            return false;
        }

        //只有解析后的模板文件不存在或者模板源文件有新的改动的情况下 重新解析模板       
        if(!file_exists($template_c_path) || filemtime($template_path)>filemtime($template_c_path)){
            //获取模板源文件，用来替换
            $template_content = file_get_contents($template_path);

            $pattern = array(
                '/\{\s*\$([a-zA-Z][a-zA-Z0-9_]*)\s*\}/i'
            );
            $replace = array(
                '<?php echo $this->var["${1}"]; ?>'
            );
            //用正则去替换模板源文件中的变量符号{$varname}
            $res = preg_replace($pattern,$replace,$template_content);
            //编译后文件写入某个目录
            file_put_contents($template_c_path,$res);
        }
        //引入编译后文件，其实就是执行了那个php文件的代码
        include_once $template_c_path;

    }
}
 
我们调用自己的assign和display放入引入，也能正常解析使用啦

三、Smarty模板执行原理
为了实现程序的业务逻辑和内容表现页面的分离从而提高开发速度，php 引入了模板引擎的概念，
php 模板引擎里面最流行的可以说是smarty了，smarty因其功能强大而且速度快而被广大php web开发者所认可。
本文将记录一下smarty模板引擎的工作执行原理，算是加深一下理解。

其实所有的模板引擎的工作原理是差不多的，无非就是在php程序里面
用正则匹配将模板里面的标签替换为php代码从而将两者混合为一个php的混编文件，
然后执行这个混编文件。基本上就是这么回事儿了。下面以smarty为例说下这个过程。

例如文章页面：http://www.phpernote.com/article.php?id=795

一般处理过程是这样的：

html模板页面部分代码（article.html）：

<body>
<div>{subject}</div>
<div>{content}</div>
</body>
php页面逻辑部分代码：

$subject='smarty视频教程分享';
$content='smarty视频教程分享，下面是具体的下载地址，有需要的朋友可以看看，对smarty模板讲解的非常详细，作者粗略看了一下目录，真是详细到细枝末节该......';
$str=file_get_contents('article.html');
$str=str_replace('{subject}',$subject,$str);
$str=str_replace('{content}',$content,$str);
echo $str;
使用面向对象技术实现模板功能的封装代码如下：

<?php
class Template{
    //属性
    public $vars;                        //保存要替换的标记和数据的内容
    public $left_delimiter='{*';        //左分隔符
    public $right_delimiter='*}';        //右分隔符
    //方法
    public function assign($key,$value){
        $this->vars[$key]=$value;
    }
    public function display($file){//file表示模板名
        $str=file_get_contents($file);//从模板中读取多有内容，并将内容放入$str中
        foreach ($this->vars as $key => $value){ //$key 键名（模板标记） $value 值
            $str=str_replace($this->left_delimiter.$key.$this->right_delimiter, $value, $str);
        }
        echo $str;
        //file_put_contents('bak.html', $str);
    }
}
注意：assign(‘name’,’zhangsan’)；这句的时候其实还没有进行数据替换，而是把传入的数据保存在vars[]中，当display的时候才进行数据替换。

smarty的处理过程：

1、 smarty将php源文件，首先编译成中间文件

2、 如果启用缓存，再根据编译文件生成缓存文件

3、 之后每次访问都会访问编译文件

如果启用缓存文件而且有缓存文件并且缓存文件没有过期，则直接访问缓存文件（先不考虑缓存的时候的流程）
编译文件里时间戳记录模板文件修改时间，如果模板被修改过就可以检测到，然后重新编译。

（编译是把静态内容保存起来，动态内容根据传入的参数不同而不同）

读取编译文件省去了读取模板文件，和字符串替换的时间，所以可以更快。

第一次请求article.php时候编译，产生编译文件，在编译文件里。

第二次请求article.php的时候，判断模板文件是否改变，如果模板文件已改变，
那么去读取模板文件，然后再编译，如果没有改变，则去读取编译文件，编译文件最终输出；

缓存默认是关闭的；缓存是把数据彻底的存在缓存文件里，直到缓存文件过期才会重新来缓存；
所以说smarty在一些实时性特别强的网站里不是特别合适；

对于以上文字可以抽象的理解为下面的一幅图，读者自己去体会吧！

考虑缓存：
在smarty程序里，判断是否开启了缓存文件，并且缓存文件没有过期，，就去找缓存文件，
如果没有开启缓存文件，就去判断模板文件，如果缓存文件已过期，也是去判断模板文件。
```

### 如何实现链式操作 `$obj->w()->m()->d();`
```
在php中有很多字符串函数，例如要先过滤字符串收尾的空格，再求出其长度，一般的写法是：

strlen(trim($str))

如果要实现类似js中的链式操作，比如像下面这样应该怎么写？

$str->trim()->strlen()

下面分别用三种方式来实现：

方法一、使用魔法函数__call结合call_user_func来实现
思想：首先定义一个字符串类StringHelper，构造函数直接赋值value，然后链式调用trim()和strlen()函数，通过在调用的魔法函数__call()中使用call_user_func来处理调用关系，实现如下：
class StringHelper
{
  private $value;
  function __construct($value)
  {
    $this->value = $value;
  }
  function __call($function, $args){
    $this->value = call_user_func($function, $this->value, $args[0]);
    return $this;
  }
  function strlen() {
    return strlen($this->value);
  }
}
$str = new StringHelper(" sd f 0");
echo $str->trim('0')->strlen();

终端执行脚本：
php test.php

方法二、使用魔法函数__call结合call_user_func_array来实现

class StringHelper
{
  private $value;
  function __construct($value)
  {
    $this->value = $value;
  }
  function __call($function, $args){
    array_unshift($args, $this->value);
    $this->value = call_user_func_array($function, $args);
    return $this;
  }
  function strlen() {
    return strlen($this->value);
  }
}
$str = new StringHelper(" sd f 0");
echo $str->trim('0')->strlen();

说明：
array_unshift(array,value1,value2,value3...)
array_unshift() 函数用于向数组插入新元素。新数组的值将被插入到数组的开头。
call_user_func()和call_user_func_array都是动态调用函数的方法，区别在于参数的传递方式不同。

方法三、不使用魔法函数__call来实现
只需要修改_call()为trim()函数即可：

public function trim($t)
{
  $this->value = trim($this->value, $t);
  return $this;
}

重点在于，返回$this指针，方便调用后者函数。
```

### Xhprof 、Xdebug 性能调试工具使用
```
php调试方式： https://blog.csdn.net/kikajack/article/details/81014804

PHP 后端开发之调试方法： https://blog.csdn.net/f786587718/article/details/90603514

//输出日志内容到文件
$fp = fopen('./php.log', '测试');
fwrite($fp, print_r($content, true));
fclose($fp);
 
//输出对象到文件，追加方式写入
file_put_contents("/php.log", var_export($objects,true), FILE_APPEND);
```

### 索引数组 `[1, 2]` 与关联数组 `['k1'=>1, 'k2'=>2]` 有什么区别
```
/*
	 *关联数组与索引数组的区别
	 */
 
	/*
	 *创建一个索引数组，索引数组的键是“0”，值是“苹果”
         *带有数字索引的数组。 
         */ 
	$fruit=array("苹果","香蕉");  
	// print_r($fruit); 
 
	//索引数组有三种赋值方式
	$arr = array[0]='苹果';
	$arr = array('0' => '苹果', '1' => '香蕉' );
	$arr = array('苹果');
 
	//请创建一个数组变量arr,并尝试创建一个索引数组，键是0，值是苹果  
	$arr1=array(0=>'a');
	// unset ($arr1); //销毁变量 
	if(isset($arr1)){ //isset — 检测变量是否已设置并且非 NULL $arr1 = NULL;
		//var_dump($arr1);
	}else{
		echo '未设置';
	}  
 
	//用for与foreach可以访问到数组里面的元素，因for比较容易下面只举使用foreach的例子，
	$fruit=array('苹果','香蕉','菠萝');
	//for和foreach的遍历
	for($i=0; $i < count($fruit) ; $i++){ 
	  	echo "数字是：$i"."的值是:".$fruit[$i]." <br>";
	}  
	foreach($fruit as $key=>$value){  
	    echo '<br>第'.$key.'值是：'.$value;  
	} 
        for($x=0;$x<count($arrlength);$x++) {}
 
 
 
 
	/*
	 *创建一个关联数组，关联数组的键“orange”，值是“橘子”
         *带有指定键的数组
        */  
	$fruit=array('orange'=>'橘子');  
	echo $fruit['orange'];
        foreach($age as $x=>$v) {
        $arr[$k]['name'] = $v['name'];
    }
```

### [缓存的使用方式、场景](https://zhuanlan.zhihu.com/p/40091810)
```
为什么使用缓存

提升性能：使用缓存可以跳过数据库查询，分布式系统中可以跳过多次网络开销。在读多写少的场景下，可以有效的提高性能，降低数据库等系统的压力。

缓存的适用场景

1.数据不需要强一致性

2.读多写少，并且读取得数据重复性较高

缓存的正确打开方式

1.Cache Aside 同时更新缓存和数据库

2.Read/Write Through 先更新缓存，缓存负责同步更新数据库

3.Write Behind Caching 先更新缓存，缓存负责异步更新数据库

下面具体分析每种模式

一、Cache Aside 更新模式

这是最常用的缓存模式了，具体的流程是：

读取：应用程序先从 cache 取数据，取到后成功返回；没有得到，则从数据库中取数据，成功后，放到缓存中。

更新：先把数据存到数据库中，再清理缓存使其失效。




不过这种模式有几个变种：

第一，如果先更新数据库再更新缓存。假设两个并发更新操作，数据库先更新的反而后更新缓存，数据库后更新的反而先更新缓存。这样就会造成数据库和缓存中的数据不一致，应用程序中读取的都是脏数据。

第二，先删除缓存再更新数据库。假设一个更新操作先删除了缓存，一个读操作没有命中缓存，从数据库中取出数据并且更新回缓存，再然后更新操作完成数据库更新。这时数据库和缓存中的数据是不一致的，应用程序中读取的都是原来的数据。

第三，先更新数据库再删除缓存。假设一个读操作没有命中缓存，然后读取数据库的老数据。同时有一个并发更新操作，在读操作之后更新了数据库并清空了缓存。此时读操作将之前从数据库中读取出的老数据更新回了缓存。这时数据库和缓存中的数据也是不一致的。

但是一般情况下，缓存用于读多写少的场景，所以第三种这种情况其实是小概率会出现的。

二、Read/Write Through 更新模式

Read Through 模式就是在查询操作中更新缓存，缓存服务自己来加载。

Write Through 模式和 Read Through 相仿，不过是在更新数据时发生。当有数据更新的时候，如果没有命中缓存，直接更新数据库，然后返回。如果命中了缓存，则更新缓存，然后由缓存自己更新数据库（这是一个同步操作）。


三、Write Behind Caching 更新模式

Write Behind Caching 更新模式就是在更新数据的时候，只更新缓存，不更新数据库，而我们的缓存会异步地批量更新数据库。但其带来的问题是，数据不是强一致性的，而且可能会丢失。


总结，三种缓存模式的优缺点：

Cache Aside 更新模式实现起来比较简单，最常用，实时性也高，但是需要应用需要关注核实加载数据进入缓存 。

Read/Write Through 更新模式只需要维护一个缓存，对应用屏蔽掉了缓存的细节，实时性也高。但是实现起来要复杂一些。

Write Behind Caching 吞吐量很高，多次操作可以合并。但是数据可能会丢失，例如系统断电等，实现起来最复杂。
```

## 实践篇
```
### 给定二维数组，根据某个字段排序
### 如何判断上传文件类型，如：仅允许 jpg 上传
### 不使用临时变量交换两个变量的值 `$a=1; $b=2;`  =>  `$a=2; $b=1;`
### strtoupper 在转换中文时存在乱码，你如何解决？```php echo strtoupper('ab你好c'); ```
### Websocket、Long-Polling、Server-Sent Events(SSE) 区别
### "Headers already sent" 错误是什么意思，如何避免
```

## 算法篇
```
### 快速排序（手写）
### 冒泡排序（手写）
### 二分查找（了解）
### 查找算法 KMP（了解）
### 深度、广度优先搜索（了解）
### LRU 缓存淘汰算法（了解，Memcached 采用该算法）
```

## 数据结构篇（了解）
```
### 堆、栈特性
### 队列
### 哈希表
### 链表
```

## 对比篇
### Cookie 与 Session 区别
```
cookie数据存放在客户的浏览器上，session数据放在服务器上。
cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗，考虑到安全应当使用session。
session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，
考虑到减轻服务器性能方面，应当使用COOKIE。
单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
```
### `GET` 与 `POST` 区别
```
### get和post的区别
```
1. get是从服务器上获取数据，post是向服务器传送数据。
2. get是把参数数据队列加到提交表单的ACTION属性所指的URL中，
值和表单内各个字段一一对应，在URL中可以看到。
post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML HEADER内
一起传送到ACTION属性所指的URL地址。用户看不到这个过程。
3. get传送的数据量较小，不能大于2KB。post传送的数据量较大，
一般被默认为不受限制。
4. get安全性非常低，post安全性较高。但是执行效率却比Post方法好。
```

 15. GET 与 POST 请求方式区别

|GET|POST|
|-|-|
|后退按钮/刷新无害|数据会被重新提交|
|数据长度限制/URL长度2048字符|长度无限制|
|数据可见/安全性差|不可见/更安全|
|可以被缓存|不可以被缓存|
|书签可收藏|书签不可收藏|
```

### MySQL 各个存储引擎、及区别（一定会问 MyISAM 与 Innodb 区别）
```
https://blog.csdn.net/qq_27607965/article/details/79925288?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight
InnoDB和MyISAM是很多人在使用MySQL时最常用的两个表类型，这两个表类型各有优劣，5.7之后就不一样了

1、事务和外键
InnoDB具有事务，支持4个事务隔离级别，回滚，崩溃修复能力和多版本并发的事务安全，
包括ACID。如果应用中需要执行大量的INSERT或UPDATE操作，则应该使用InnoDB，这样可以提高多用户并发操作的性能
MyISAM管理非事务表。它提供高速存储和检索，以及全文搜索能力。如果应用中需要执行大量的SELECT查询，那么MyISAM是更好的选择

2、全文索引
Innodb不支持全文索引，如果一定要用的话，最好使用sphinx等搜索引擎。myisam对中文支持的不是很好
不过新版本的Innodb已经支持了

3、锁
mysql支持三种锁定级别，行级、页级、表级;
MyISAM支持表级锁定，提供与 Oracle 类型一致的不加锁读取(non-locking read in SELECTs)
InnoDB支持行级锁，InnoDB表的行锁也不是绝对的，如果在执行一个SQL语句时MySQL不能确定要扫描的范围，
InnoDB表同样会锁全表，注意间隙锁的影响
例如update table set num=1 where name like “%aaa%”

4、存储
MyISAM在磁盘上存储成三个文件。第一个文件的名字以表的名字开始，扩展名指出文件类型，
.frm文件存储表定义，数据文件的扩展名为.MYD，  索引文件的扩展名是.MYI
InnoDB，基于磁盘的资源是InnoDB表空间数据文件和它的日志文件，InnoDB 表的大小只受限于操作系统文件的大小
注意：MyISAM表是保存成文件的形式，在跨平台的数据转移中使用MyISAM存储会省去不少的麻烦

5、索引
InnoDB（索引组织表）使用的聚簇索引、索引就是数据，顺序存储，因此能缓存索引，也能缓存数据
MyISAM（堆组织表）使用的是非聚簇索引、索引和文件分开，随机存储，只能缓存索引

6、并发
MyISAM读写互相阻塞：不仅会在写入的时候阻塞读取，MyISAM还会在读取的时候阻塞写入，但读本身并不会阻塞另外的读
InnoDB 读写阻塞与事务隔离级别相关

7、场景选择
MyISAM
不需要事务支持（不支持）
并发相对较低（锁定机制问题）
数据修改相对较少（阻塞问题），以读为主
数据一致性要求不是非常高
尽量索引（缓存机制）
调整读写优先级，根据实际需求确保重要操作更优先
启用延迟插入改善大批量写入性能
尽量顺序操作让insert数据都写入到尾部，减少阻塞
分解大的操作，降低单个操作的阻塞时间
降低并发数，某些高并发场景通过应用来进行排队机制
对于相对静态的数据，充分利用Query Cache可以极大的提高访问效率
MyISAM的Count只有在全表扫描的时候特别高效，带有其他条件的count都需要进行实际的数据访问

InnoDB 
需要事务支持（具有较好的事务特性）
行级锁定对高并发有很好的适应能力，但需要确保查询是通过索引完成
数据更新较为频繁的场景
数据一致性要求较高
硬件设备内存较大，可以利用InnoDB较好的缓存能力来提高内存利用率，尽可能减少磁盘 IO
主键尽可能小，避免给Secondary index带来过大的空间负担
避免全表扫描，因为会使用表锁
尽可能缓存所有的索引和数据，提高响应速度
在大批量小插入的时候，尽量自己控制事务而不要使用autocommit自动提交
合理设置innodb_flush_log_at_trx_commit参数值，不要过度追求安全性
避免主键更新，因为这会带来大量的数据移动

8、其它细节
1）InnoDB 中不保存表的具体行数，注意的是，当count(*)语句包含 where条件时，两种表的操作是一样的
2）对于AUTO_INCREMENT类型的字段，InnoDB中必须包含只有该字段的索引，但是在MyISAM表中，
可以和其他字段一起建立联合索引， 如果你为一个表指定AUTO_INCREMENT列，
在数据词典里的InnoDB表句柄包含一个名为自动增长计数器的计数器，
它被用在为该列赋新值。自动增长计数器仅被存储在主内存中，而不是存在磁盘
3）DELETE FROM table时，InnoDB不会重新建立表，而是一行一行的删除
4）LOAD TABLE FROM MASTER操作对InnoDB是不起作用的，解决方法是首先把InnoDB表改成MyISAM表，
导入数据后再改成InnoDB表，但是对于使用的额外的InnoDB特性(例如外键)的表不适用
5）如果执行大量的SELECT，MyISAM是更好的选择，如果你的数据执行大量的INSERT或UPDATE，
出于性能方面的考虑，应该使用InnoDB表

7、为什么MyISAM会比Innodb 的查询速度快
InnoDB 在做SELECT的时候，要维护的东西比MYISAM引擎多很多；
1）InnoDB 要缓存数据和索引，MyISAM只缓存索引块，这中间还有换进换出的减少
2）innodb寻址要映射到块，再到行，MyISAM记录的直接是文件的OFFSET，定位比INNODB要快
3）InnoDB 还需要维护MVCC一致；虽然你的场景没有，但他还是需要去检查和维护

MVCC ( Multi-Version Concurrency Control )多版本并发控制
InnoDB ：通过为每一行记录添加两个额外的隐藏的值来实现MVCC，这两个值一个记录这行数据何时被创建，
另外一个记录这行数据何时过期（或者被删除）。但是InnoDB并不存储这些事件发生时的实际时间，
相反它只存储这些事件发生时的系统版本号。这是一个随着事务的创建而不断增长的数字。
每个事务在事务开始时会记录它自己的系统版本号。每个查询必须去检查每行数据的版本号与事务的版本号是否相同。
让我们来看看当隔离级别是REPEATABLE READ时这种策略是如何应用到特定的操作的

SELECT InnoDB必须每行数据来保证它符合两个条件
1、InnoDB必须找到一个行的版本，它至少要和事务的版本一样老(也即它的版本号不大于事务的版本号)。
这保证了不管是事务开始之前，或者事务创建时，或者修改了这行数据的时候，这行数据是存在的。
2、这行数据的删除版本必须是未定义的或者比事务版本要大。这可以保证在事务开始之前这行数据没有被删除。

8、mysql性能讨论
MyISAM最为人垢病的缺点就是缺乏事务的支持
InnoDB 的磁盘性能很令人担心
MySQL 缺乏良好的 tablespace 
两种类型最主要的差别就是Innodb 支持事务处理与外键和行级锁.
而MyISAM不支持.所以MyISAM往往就容易被人认为只适合在小项目中使用。
我作为使用MySQL的用户角度出发，Innodb和MyISAM都是比较喜欢的，
但是从我目前运维的数据库平台要达到需求：99.9%的稳定性，
方便的扩展性和高可用性来说的话，MyISAM绝对是我的首选。

原因如下：
1、首先我目前平台上承载的大部分项目是读多写少的项目，而MyISAM的读性能是比Innodb强不少的。
2、MyISAM的索引和数据是分开的，并且索引是有压缩的，内存使用率就对应提高了不少。
能加载更多索引，而Innodb是索引和数据是紧密捆绑的，没有使用压缩从而会造成Innodb比MyISAM体积庞大不小。
3、从平台角度来说，经常隔1，2个月就会发生应用开发人员不小心update一个表where写的范围不对，
导致这个表没法正常用了，这个时候MyISAM的优越性就体现出来了，随便从当天拷贝的压缩包取出对应表的文件，
随便放到一个数据库目录下，然后dump成sql再导回到主库，并把对应的binlog补上。如果是Innodb，
恐怕不可能有这么快速度，别和我说让Innodb定期用导出xxx.sql机制备份，
因为我平台上最小的一个数据库实例的数据量基本都是几十G大小。
4、从我接触的应用逻辑来说，select count(*) 和order by 是最频繁的，大概能占了整个sql总语句的60%以上的操作，
而这种操作Innodb其实也是会锁表的，很多人以为Innodb是行级锁，那个只是where对它主键是有效，非主键的都会锁全表的。
5、还有就是经常有很多应用部门需要我给他们定期某些表的数据，MyISAM的话很方便，只要发给他们对应那表的frm.MYD,MYI的文件，
让他们自己在对应版本的数据库启动就行，而Innodb就需要导出xxx.sql了，因为光给别人文件，受字典数据文件的影响，对方是无法使用的。
6、如果和MyISAM比insert写操作的话，Innodb还达不到MyISAM的写性能，如果是针对基于索引的update操作，
虽然MyISAM可能会逊色Innodb,但是那么高并发的写，从库能否追的上也是一个问题，还不如通过多实例分库分表架构来解决。
7、如果是用MyISAM的话，merge引擎可以大大加快应用部门的开发速度，他们只要对这个merge表做一些select count(*)操作，
非常适合大项目总量约几亿的rows某一类型(如日志，调查统计)的业务表。
当然Innodb也不是绝对不用，用事务的项目如模拟炒股项目，我就是用Innodb的，活跃用户20多万时候，也是很轻松应付了，
因此我个人也是很喜欢Innodb的，只是如果从数据库平台应用出发，我还是会首选MyISAM。
另外，可能有人会说你MyISAM无法抗太多写操作，但是我可以通过架构来弥补，说个我现有用的数据库平台容量：
主从数据总量在几百T以上，每天十多亿 pv的动态页面，还有几个大项目是通过数据接口方式调用未算进pv总数，
(其中包括一个大项目因为初期memcached没部署,导致单台数据库每天处理 9千万的查询)。
而我的整体数据库服务器平均负载都在0.5-1左右。

MyISAM索引实现
MyISAM引擎使用B+Tree作为索引结构，叶节点的data域存放的是数据记录的地址。如图： 

MyISAM主键索引
这里设表一共有三列，假设我们以Col1为主键，则上图是一个MyISAM表的主索引（Primary key）示意。
可以看出MyISAM的索引文件仅仅保存数据记录的地址。在MyISAM中，主索引和辅助索引（Secondary key）在结构上没有任何区别，
只是主索引要求key是唯一的，而辅助索引的key可以重复。如果我们在Col2上建立一个辅助索引，则此索引的结构如下图所示： 

MyISAM辅助索引
同样也是一颗B+Tree，data域保存数据记录的地址。因此，MyISAM中索引检索的算法为首先按照B+Tree搜索算法搜索索引，
如果指定的Key存在，则取出其data域的值，然后以data域的值为地址，读取相应数据记录。 
MyISAM的索引方式也叫做“非聚集”的，之所以这么称呼是为了与InnoDB的聚集索引区分。

InnoDB索引实现
虽然InnoDB也使用B+Tree作为索引结构，但具体实现方式却与MyISAM截然不同。

第一个重大区别是InnoDB的数据文件本身就是索引文件。从上文知道，MyISAM索引文件和数据文件是分离的，
索引文件仅保存数据记录的地址。而在InnoDB中，表数据文件本身就是按B+Tree组织的一个索引结构，
这棵树的叶节点data域保存了完整的数据记录。这个索引的key是数据表的主键，因此InnoDB表数据文件本身就是主索引。

InnoDB主索引
上图是InnoDB主索引（同时也是数据文件）的示意图，可以看到叶节点包含了完整的数据记录。
这种索引叫做聚集索引。因为InnoDB的数据文件本身要按主键聚集，所以InnoDB要求表必须有主键（MyISAM可以没有），
如果没有显式指定，则MySQL系统会自动选择一个可以唯一标识数据记录的列作为主键，如果不存在这种列，
则MySQL自动为InnoDB表生成一个隐含字段作为主键，这个字段长度为6个字节，类型为长整形。

第二个与MyISAM索引的不同是InnoDB的辅助索引data域存储相应记录主键的值而不是地址。换句话说，
InnoDB的所有辅助索引都引用主键作为data域。例如，下图为定义在Col3上的一个辅助索引： 

InnoDB辅助索引
这里以英文字符的ASCII码作为比较准则。聚集索引这种实现方式使得按主键的搜索十分高效，
但是辅助索引搜索需要检索两遍索引：首先检索辅助索引获得主键，然后用主键到主索引中检索获得记录。

总结
在数据库开发中，了解不同存储引擎的索引实现方式对于正确使用和优化索引都非常有帮助。
例如，知道了InnoDB的索引实现后，就很容易明白为什么不建议使用过长的字段作为主键，因为所有辅助索引都引用主索引，
过长的主索引会令辅助索引变得过大。再例如，用非单调的字段作为主键在InnoDB中不是个好做法，
因为InnoDB数据文件本身是一颗B+Tree，非单调的主键会造成在插入新记录时数据文件为了维持B+Tree的特性而频繁的分裂调整，
十分低效，而使用自增字段作为主键则是一个很好的选择。
```

### HTTP 与 HTTPS 区别
```
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
```

### Apache 与 Nginx 区别
```
Nginx
轻量级，采用 C 进行编写，同样的 web 服务，会占用更少的内存及资源
抗并发，nginx 以 epoll and kqueue 作为开发模型，处理请求是异步非阻塞的，负载能力比 apache 高很多，
而 apache 则是阻塞型的。在高并发下 nginx 能保持低资源低消耗高性能 ，
而 apache 在 PHP 处理慢或者前端压力很大的情况下，很容易出现进程数飙升，从而拒绝服务的现象。

nginx 处理静态文件好，静态处理性能比 apache 高三倍以上
nginx 的设计高度模块化，编写模块相对简单
nginx 配置简洁，正则配置让很多事情变得简单，而且改完配置能使用 -t 测试配置有没有问题，apache 配置复杂 ，重启的时候发现配置出错了，会很崩溃
nginx 作为负载均衡服务器，支持 7 层负载均衡
nginx 本身就是一个反向代理服务器，而且可以作为非常优秀的邮件代理服务器
启动特别容易, 并且几乎可以做到 7*24 不间断运行，即使运行数个月也不需要重新启动，还能够不间断服务的情况下进行软件版本的升级
社区活跃，各种高性能模块出品迅速

Apache
apache 的 rewrite 比 nginx 强大，在 rewrite 频繁的情况下，用 apache
apache 发展到现在，模块超多，基本想到的都可以找到
apache 更为成熟，少 bug ，nginx 的 bug 相对较多
apache 超稳定
apache 对 PHP 支持比较简单，nginx 需要配合其他后端用
apache 在处理动态请求有优势，nginx 在这方面是鸡肋，一般动态请求要 apache 去做，nginx 适合静态和反向。
apache 仍然是目前的主流，拥有丰富的特性，成熟的技术和开发社区

总结
两者最核心的区别在于 apache 是同步多进程模型，一个连接对应一个进程，
而 nginx 是异步的，多个连接（万级别）可以对应一个进程
一般来说，需要性能的 web 服务，用 nginx 。如果不需要性能只求稳定，更考虑 apache ，后者的各种功能模块实现得比前者，
例如 ssl 的模块就比前者好，可配置项多。epoll(freebsd 上是 kqueue ) 网络 IO 模型是 nginx 处理性能高的根本理由，
但并不是所有的情况下都是 epoll 大获全胜的，如果本身提供静态服务的就只有寥寥几个文件，
apache 的 select 模型或许比 epoll 更高性能。当然，这只是根据网络 IO 模型的原理作的一个假设，
真正的应用还是需要实测了再说的。
更为通用的方案是，前端 nginx 抗并发，后端 apache 集群，配合起来会更好。
```

### define() 与 const 区别
```
在PHP中定义常量时，可用const与define这两种方式，那他们到底有什么区别呢？
1. const用于类成员变量定义，一旦定义且不能改变其值。define定义全局常量，在任何地方都可以访问。
2. define不能定义在类中，而const必须定义在类中，并且const定义的变量必须通过类名::变量名来进行访问。
3. const不能在条件语句中定义常量。
4. const采用一个普通的常量名称（静态的标量），define可以采用任何表达式作为名称。
5. const 总是大小写敏感，然而define()可以通过第三个参数来定义大小写不敏感的常量。
6.使用const简单易读，它本身是一个语言结构，而define是一个方法，用const定义在编译时比define快很多。

如果在类中定义常量，不能用define，而用const，如下例：

//在类外面通常这样定义常量
define("PHP","111cn.net");
class MyClass
{
    //常量的值将始终保持不变。在定义和使用常量的时候不需要使用$符号
    const constant = 'constant value';
    function showConstant() {
        echo  self::constant . " ";
    }
}
echo MyClass::constant . " ";
$classname = "MyClass";
echo $classname::constant . " "; // PHP 5.3.0之后
$class = new MyClass();
$class->showConstant();
echo $class::constant." "; // PHP 5.3.0之后
//print_r(get_defined_constants());  //可以用get_defined_constants()获取所有定义的常量
?>

一般是define在类外定义常量，const在类内定义常量，并且const必须通过类名::变量名来进行访问。
但是php5.3以上支持类外通过const定义常量，看如下，这样是ok的：

   const a = "abcdef";
   echo a;
?>

关于常量的基础知识，这里不说了，除了以上，define和const的其它区别
1.const不能再条件语句中定义常量，但是define是可以的，如下：

if(1){
   const a = 'java';
}   
echo a;  //必错
?>

2.const采用一个普通的常量名称，define可以采用表达式作为名称

for ($i = 0; $i < 32; ++$i) {
    define('PHP_' . $i, 1 << $i);
}
?>

3.const只能接受静态的标量，而define可以采用任何表达式。

const PHP = 1 << 5; // 错误
define('PHP', 1 << 5); // 正确
?>

4.const本身就是一个语言结构。而define是一个函数。所以使用const速度要快的多。
两者共同点：两者都是不能进行重新赋值。

下面内容摘自Rotted_Pencil的博文：PHP中定义常量的区别，define() vs. const

今天在Stackoverflow又看到一个很有趣的文章，所以翻译过后摘了过来。
文章是由PHP开发成员之一的NikiC写的，权威性自然毋庸置疑

在PHP5.3中，有两种方法可以定义常量：

1.使用const关键字

2.使用define()方法

const FOO = ‘BAR’;

define(‘FOO’,’BAR’);

这两种方式的根本区别在于const会在代码编译时定义一个常量，
而define则是在代码运行时才定义一个常量。这就使得const会有以下几个缺点：
const不能在条件语句中使用。如果要定义一个全局变量，const必须要处于整个代码的最外层：

if (...) {   
    const FOO = 'BAR';    // 无效的
}
// but
if (...) {
   define('FOO', 'BAR'); // 有效的
}

你可以能会问为什么我要这么做？一个最平常的例子是当你在检测一个常量是否已经被定义时：

if (!defined('FOO')) {
    define('FOO', 'BAR');
}

const只能用来声明变量（如数字、字符串，或者true, false, null, FILE），
而define()还能接受表达式。不过在PHP5.6之后const也可以接受常量的表达式了：

const BIT_5 = 1 << 5;    // 在PHP5.6之后有效，之前无效
define('BIT_5', 1 << 5); // 一直有效

const的常量命名只能用直白的文本，而define()允许你用任何表达式来对常量命名。这样我们就可以执行以下操作：

for ($i = 0; $i < 32; ++$i) {
    define('BIT_' . $i, 1 << $i);
}

const定义的常量是大小写敏感的，但是define允许你将其第三个参数设置为true来关闭其对大小写的敏感：

define('FOO', 'BAR', true);
echo FOO; // BAR
echo foo; // BAR

以上就是你需要注意的几点。那么现在我来说明以下，为什么不涉及以上情况下，我个人总是习惯使用const：
const更加易读、美观。
const默认在当前的namespace下定义常量，而使用define则需要你写明整个namespace的完整路径：

namespace A\B\C;
// 如果要定义常量 A\B\C\FOO:
const FOO = ‘BAR’;
define(‘A\B\C\FOO’, ‘BAR’);

自从PHP5.6后，使用const数组也能被定义为常量。而define目前是不支持这一功能的，但是该功能会在PHP7中被实现：

const FOO = [1, 2, 3];    // 在PHP 5.6中有效
define(‘FOO’, [1, 2, 3]); // 在PHP 5.6无效, 在PHP 7.0有效

因为const在编译时就被执行了，所以它在速度上要比define快一点。
尤其是在使用define定义大量常量时，PHP的运行速度会变得非常慢。
人们甚至发明了诸如apc_load_constantshide来避免这个问题
与define相比，const能使定义常量的效率提高一倍（在配置有XDebug的开发机器上，这个差异还会更大）。
但是在查询时间上，两者是没有区别的（因为二者用的都是同一个查询表）
最后需要注意的一点是，const可以在class和interface当中使用 ，而define是做不到这一点的：

class Foo {
    const BAR = 2; // 有效
}
class Baz {
    define('QUX', 2); // 无效
}

总结
除非你需要使用表达式或者在条件语句中定义常量，不然的话仅仅是为了代码的简单可读性你都最好要使用const！
```

### Git 与 SVN 区别
```
https://www.cnblogs.com/Sungeek/p/9152223.html
一、 集中式vs分布式
1. Subversion属于集中式的版本控制系统
集中式的版本控制系统都有一个单一的集中管理的服务器，保存所有文件的修订版本，
而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。

Subversion的特点概括起来主要由以下几条：
 每个版本库有唯一的URL（官方地址），每个用户都从这个地址获取代码和数据；
 获取代码的更新，也只能连接到这个唯一的版本库，同步以取得最新数据；
 提交必须有网络连接（非本地版本库）；
 提交需要授权，如果没有写权限，提交会失败；
 提交并非每次都能够成功。如果有其他人先于你提交，会提示“改动基于过时的版本，先更新再提交”… 诸如此类；
 冲突解决是一个提交速度的竞赛：手快者，先提交，平安无事；手慢者，后提交，可能遇到麻烦的冲突解决。

好处：每个人都可以一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限。

缺点：中央服务器的单点故障。

若是宕机一小时，那么在这一小时内，谁都无法提交更新、还原、对比等，也就无法协同工作。
如果中央服务器的磁盘发生故障，并且没做过备份或者备份得不够及时的话，还会有丢失数据的风险。
最坏的情况是彻底丢失整个项目的所有历史更改记录，被客户端提取出来的某些快照数据除外，
但这样的话依然是个问题，你不能保证所有的数据都已经有人提取出来。

Subversion原理上只关心文件内容的具体差异。每次记录有哪些文件作了更新，以及都更新了哪些行的什么内容。

2. Git属于分布式的版本控制系统

Git记录版本历史只关心文件数据的整体是否发生变化。Git 不保存文件内容前后变化的差异数据。

实际上，Git 更像是把变化的文件作快照后，记录在一个微型的文件系统中。每次提交更新时，
它会纵览一遍所有文件的指纹信息并对文件作一快照，然后保存一个指向这次快照的索引。为提高性能，
若文件没有变化，Git 不会再次保存，而只对上次保存的快照作一连接。

在分布式版本控制系统中，客户端并不只提取最新版本的文件快照，而是把原始的代码仓库完整地镜像下来。
这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。
这类系统都可以指定和若干不同的远端代码仓库进行交互。籍此，你就可以在同一个项目中，
分别和不同工作小组的人相互协作。你可以根据需要设定不同的协作流程。

另外，因为Git在本地磁盘上就保存着所有有关当前项目的历史更新，并且Git中的绝大多数操作都只需要访问本地文件和资源，
不用连网，所以处理起来速度飞快。用SVN的话，没有网络或者断开VPN你就无法做任何事情。但用Git的话，就算你在飞机或者火车上，
都可以非常愉快地频繁提交更新，等到了有网络的时候再上传到远程的镜像仓库。换作其他版本控制系统，这么做几乎不可能，抑或是非常麻烦。

Git具有以下特点：
Git中每个克隆(clone)的版本库都是平等的。你可以从任何一个版本库的克隆来创建属于你自己的版本库，
同时你的版本库也可以作为源提供给他人，只要你愿意。

Git的每一次提取操作，实际上都是一次对代码仓库的完整备份。

提交完全在本地完成，无须别人给你授权，你的版本库你作主，并且提交总是会成功。

甚至基于旧版本的改动也可以成功提交，提交会基于旧的版本创建一个新的分支。

Git的提交不会被打断，直到你的工作完全满意了，PUSH给他人或者他人PULL你的版本库，
合并会发生在PULL和PUSH过程中，不能自动解决的冲突会提示您手工完成。

冲突解决不再像是SVN一样的提交竞赛，而是在需要的时候才进行合并和冲突解决。

Git 也可以模拟集中式的工作模式

Git版本库统一放在服务器中

可以为 Git 版本库进行授权：谁能创建版本库，谁能向版本库PUSH，谁能够读取（克隆）版本库

团队的成员先将服务器的版本库克隆到本地；并经常的从服务器的版本库拉（PULL）最新的更新；

团队的成员将自己的改动推（PUSH）到服务器的版本库中，当其他人和版本库同步（PULL）时，会自动获取改变

Git 的集中式工作模式非常灵活

你完全可以在脱离Git服务器所在网络的情况下，如移动办公／出差时，照常使用代码库

你只需要在能够接入Git服务器所在网络时，PULL和PUSH即可完成和服务器同步以及提交

Git提供 rebase 命令，可以让你的改动看起来是基于最新的代码实现的改动

Git 有更多的工作模式可以选择，远非 Subversion可比

二、 版本库与工作区

Subversion的工作区和版本库是截然分开的，而Git的工作区和版本库是如影随形的。

1. SVN的版本库和工作区是分离的
• Subversion 的工作区和版本库物理上分开：Subversion的版本库和工作区是存储在不同路径下，
一般是在不同的主机中，Subversion的企业级部署中，版本库在服务器上，
只能通过 https, http, svn 等协议访问，而不能直接被用户接触到。
• Subversion的工作区是一份版本库在某个历史状态下的快照，如：版本库最新的数据检出到工作区。
• Subversion的工作区中每一个目录下都包含一个名为 .svn 的控制目录（隐藏的目录），该目录的作用是：
① 标识工作区和版本库的对应关系。
② 包含一份该子目录下检出文件的原始拷贝。当文件改动的差异比较或者本地改动的回退时，可以直接参考原始拷贝而无须通过网络访问远程版本库。
• Subversion 的 .svn 控制目录会引入很多麻烦：
① .svn 下的文件原始考本，会导致在目录下按照文件内容搜索时，多出一倍的搜索时间和搜索结果。
② .svn 很容易在集成时，引入产品中，尤其是 Web 应用，将 .svn 目录带入Web服务器会导致安全隐患。
因为一个不允许目录浏览的Web目录，可以通过 .svn/entries 文件查看到该目录下可能存在的文件。

2 .Git 的版本库和工作区如影随形
• Git 的版本库和工作区在同一个目录下，工作区的根目录有一个.git的子目录，这个名为 .git的目录就是版本库本身，
它是Git 用来保存元数据和对象数据库的地方。该目录非常重要，每次克隆镜像仓库的时候，
实际拷贝的就是这个目录里面的数据。所以千万要小心删除这个文件。
• 工作区中其他文件为工作区文件，可能是从 .git 中检出的，或者是要检入的，或者是运行产生的临时文件等。
• 版本库可以脱离工作区而存在，成为 bare（赤裸）版本库。可以用 –bare 参数来创建。但是工作区不能脱离版本库而存在，
即工作区的根目录下必须有一个名为 .git 的版本库克隆文件。
• Git 的版本库因为就在工作区中，能直接被用户接触到。
① 用户可以编辑 .git/config 文件，修改配置，增添新的源
② 用户可以编辑 .git/info/exclude 文件，创建本地忽略…
• Git 的工作区中只在工作区的根目录下有一个 .git 目录，此外再无任何控制目录。Git 工作区下唯一的 .git 目录是版本库，
并非 .svn 的等价物，如果删除了 .git 目录，而又没有该版本库的其他镜像（克隆）的话，你破坏了整个历史，版本库也永远的失去了。
• Git 在本地的 .git 版本库，提供了完全的改动历史。除了和其他人数据交换外，任何版本库相关的操作都在本地完成，
更多的本地操作，避免了冗长的网络延迟，大大节省了时间。例如：查看 log，切换到任何历史版本等操作都无须连接网络。
• Git如何保证安全：本地创建一个Git库，因为工作区和库是在同一个目录中，如果工作区删除了，或者所在的磁盘分区格式化了，
数据不是全都没有了么？其实我们可以这样做：
① 在一个磁盘分区中创建版本库（最好是用 –bare 参数创建），然后在另外的磁盘分区中克隆一个新的作为工作区。
在工作区的提交要不时的PUSH到另外分区的版本库，这样就实现了本地的数据镜像。你甚至可以在本地创建更多的版本库镜像，
安全性要比Subversion的一个库加上一个工作区安全。
② 另一个办法：把你的版本库共享给他人，当他人克隆了你的版本库时，你就拥有了一个异地备份。

三、 全局版本号和全球版本号

SVN的全局版本号和CVS的每个文件都独立维护一套版本号相比，是一个非常大的进步。在看似简单的全局版本号的背后，
是Subversion提供对于事物处理的支持，每一个事物处理（即一次提交）都具有整个版本库全局唯一的版本号。

Git的版本号则更进一步，版本号是全球唯一的。Git 对于每一次提交，通过对文件的内容或目录的结构计算出一个SHA-1 哈希值，
得到一个40位的十六进制字符串，Git将此字符串作为版本号。

1. SVN与Git版本号比较
• 所有保存在Git 数据库中的数据都是用此40位的哈希值作索引的，而不是靠文件名。
• 使用哈希值作版本号的好处就是对于一个分布式的版本控制系统，每个人每次提交后形成的版本号都不会出现重复。
另一好处是保证数据的完整性，因为哈希值是根据内容或目录结构计算出来的，所以我们还可以据此来判断数据内容是否被篡改。
• SVN 的版本号是连续的，可以预判下一个版本号，而 Git 的版本号则不是。
因为 subversion 是集中式版本控制，很容易实现版本号的连续性。Git 是分布式的版本控制系统，而且 Git 采用 40 位长的哈希值作为版本号，
每个人的提交都是各自独立完成的，没有先后之分（即使提交有先后之分，也由于PUSH/PULL的方向和时机而不同）。
Git 的版本号虽然不连续，但是是有线索的，即每一个版本都有对应的父版本（一个或者两个），进而可以形成一个复杂的提交链
• Git 的版本号简化：Git 可以使用从左面开始任意长度的字串作为简化版本号，只要该简化的版本号不产生歧义。
一般采用7位的短版本号（只要不会出现重复的，你也可以使用更短的版本号）。

四、 部分检出

Subversion可以将整个库检出到工作区，也可以将某个目录检出到工作区。对于要使用一个庞大、臃肿的版本库的用户来说，部分检出是非常方便和实际的。
但是Git只能全部检出，不支持按照目录进行的部分检出。

1. SVN的部分检出

• 在SVN中，从仓库checkout的一个工作树，每个子目录下都维护着自己的.svn目录，
记录着该目录中文件的修改情况以及和服务器端仓库的对应关系。所以SVN可以checkout部分路径下的内容（部分检出），
而不用checkout整个版本库或分支。
• Subversion 有一条命令：svn export ，可以将 subversion 版本库的一个目录下所有内容导出到指定的目录下。
Subversion 需要 svn export 命令是因为该命令可以导出一个干净的目录，即不包含 .svn 目录（包含配置文件和文件原始拷贝）。

2. Git的检出
• Git 没有部分检出，这并不是说只有将整个库克隆下来才能查看文件。有很多 git 工具，提供直接浏览git库的功能，
例如 gitweb, trac 的 git 版本库浏览, redmine 的 git 版本库浏览。
• Git-submodule 可以实现版本库的模块化：Git 通过子模块处理这个问题。
子模块允许你将一个Git 仓库当作另外一个Git仓库的子目录。这允许你克隆另外一个仓库到你的项目中并且保持你的提交相对独立。
• Git 为什么没有实现 svn export 的功能？由于git的本地仓库信息完全维护在project根目录的.git目录下，
（不像svn一样，每个子目录下都有单独的.svn目录）。所以，只要clone，checkout然后删除.git目录就可以了。

五、 更新和提交
1．更新操作
在SVN中，因为只有一个中心仓库，所以所谓的远程更新，也就是svn update ,通过此命令来使工作区和版本库保持同步。
对于git来说，别人的改动是存在于远程仓库上的，所以git checkout命令尽管在某些功能上和svn中的update类似
（例如取仓库特定版本的内容），但是在远程更新这一点上，还是不同的，不属于git checkout的功能涵盖范围。 
Git使用git fetch和git pull来完成远程更新任务，fetch操作只是将远程数据库的object拷贝到本地，
然后更新remotes head的refs，git pull 的操作则是在git fetch的基础上对当前分支外加merge操作。

2．SVN中的commit命令
对于SVN来说，由于是中心式的仓库管理形式，所以并不存在特殊的远程提交的概念，
所有的commit操作都可以认为是对远程仓库的更新动作。在工作区中对文件
进行添加、修改、删除操作要同步到版本库，必须使用 commit命令。
• add 命令，是将未标记为版本控制状态的文件标记为添加状态，并在下次提交时入库。
• delete命令，是通过SVN来删除文件，并在下次提交后有效。
• Subversion 有提交列表功能，即将某些文件加入一个修改列表，提交可以只提交处于该列表的文件。

3．Git中的暂存区域（stage）
Git 管理项目时，文件在三个工作区域中流转：Git 的本地数据目录，工作目录以及暂存区域。
暂存区域（stage）是介于 workcopy 和 版本库  HEAD 版本的一种中间状态。所谓的暂存区域只不过是个简单的文件，
一般都放在git 目录中。有时候人们会把这个文件叫做索引文件，不过标准说法还是叫暂存区域。
要将一个文件纳入版本管理的范畴，首先是要用git  add将文件纳入stage的监控范围，
只有更新到stage中的内容才会在commit的时候被提交。另外，文件本身的改动并不会自动更新到stage中，
每次的任何修改都必须重新更新到stage中去才会被提交。对于工作区直接删除的文件，
需要用 git rm 命令进行标记，在下次提交时，在版本库中删除。
• 工作区的文件改动（新增文件，修改文件，删除文件），必须用 git add 或者 git rm 命令标识，使得改动进入 stage
• 提交只对加入 stage 的改动进行提交
• 如果一个文件改动加入 stage 后再次改动，则后续改动不改变 stage。即该文件的改动有两个状态，
一个是标记到 stage 中并将在下次提交时入库的改动，另外的后续改动则不被提交，除非再次使用 git add 命令将改动加入到 stage 中。
• Git的stag让你在提交的时候清楚的知道git将要提交哪些改动。除非提交的时候使用 -a 参数（不建议使用）。

我们可以从文件所处的位置来判断其状态：如果是git目录中保存着的特定版本文件，就属于已提交状态；
如果作了修改并已放入暂存区域，就属于已暂存状态；如果自上次取出后，作了修改但还没有放到暂存区域，
就是已修改状态，如果取出后未进行修改则是未修改状态。

在git中，因为有本地仓库和remote仓库之分，所以也就区别于commit 操作，存在额外的push命令，
用于将本地仓库的数据更新到远程仓库中去。git push 可以选择需要提交的、更新的分支以及制定该分支在远程仓库上的名字。

六、 分支和里程碑的实现
几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着你可以从开发主线上分离开来，
然后在不影响主线的同时继续工作。在很多版本控制系统中，这是个昂贵的过程，
常常需要创建一个源代码目录的完整副本，对大型项目来说会花费很长时间。
轻量级分支/里程碑的含义是，创建分支/里程碑的复杂度是o(1)，不会因为版本库的愈加庞大而变得缓慢。在CVS中，
创建分支的复杂度是o(n)的，导致大的版本库的的分支创建非常缓慢。

1．Subversion的分支/里程碑
Subversion轻量级分支和里程碑的实现是通过svn cp命令，即带历史的拷贝就是创建快速创建分支和里程碑的秘籍。
Subversion的版本库有特殊的设计，当你复制一个目录，你不需要担心版本库会变得十分巨大—Subversion并不是拷贝所有的数据，
相反，它只是建立了一个已存在目录树的入口。这种“廉价的拷贝”就是创建分支/里程碑是轻量级的原因。
由于Svn的分支和标签是来自目录拷贝，约定俗成是拷贝在 branches/和tags/目录下。所谓分支，
tag等概念都只是仓库中不同路径上的一个对象或索引而已，和普通的路径并没有什么本质的区别，
谁也不能阻止在一个提交中同时修改不同分支中的数据。
里程碑是对某个历史提交所起的一个别名，作为历史的标记，是不应该被更改的。svn的里程碑要建立到 tags/目录下，
要求不要在tags/下的里程碑目录下进行提交。但是谁也阻止不了对未进行权限控制的里程碑的篡改。

2．Git 的轻量级分支和里程碑
Git中的分支实际上仅是一个包含所指对象校验和（40个字符长度SHA-1 哈希值）的文件，所以创建和销毁一个分支就变得非常廉价。
说白了，新建一个分支就是向一个文件写入41个字节（版本号外加一个换行符）那么简单，自然速度就很快了。 
Git的实现与项目复杂度无关，它永远可以在几毫秒的时间内完成分支的创建和切换。这和大多数版本控制系统形成了鲜明对比。

Git的分支是完全隔离的，而Subversion则没有。分支本来就应该是相对独立的命名空间，一个提交一般只能发生在一个分支中。
在Git中，其内部的对象层级依赖关系或许和SVN类似，但是其工作树的视图表现形式和SVN完全不同。工作树永远是一个完整的分支，
不同的分支由不同的head索引去构建，你不可能在工作树中同时获得多个分支的内容。

Git使用的标签有两种类型：轻量级的（lightweight）和含附注的（annotated）。① 轻量级标签就像是个不会变化的分支，
实际上它就是个指向特定提交对象的引用。② 而含附注标签，实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，
包含着标签的名字，电子邮件地址和日期，以及标签说明，标签本身也允许使用GNU Privacy Guard (GPG) 来签署或验证。

Git的里程碑是只读的，Git完全遵守历史不可更改这一时空法则。用户不能向git的里程碑中提交，否则里程碑就不是标记，
而成了一个分支。当然Git允许用户删除里程碑再重新创建指定到不同历史提交。

3．多分支间的切换
SVN中提供了一个功能switch，使用switch可以在同一个工作树上，在不同的分支中进行切换。
Git在分支中进行切换使用的命令是checkout。

七、 分支与合并
Git 和 Svn 的分支实现机制完全的不同，这也直接导致了 SVN 在分支合并中困难重重。尽管在 SVN 1.5 之后，
通过 svn:mergeinfo 属性引入了合并追踪机制，但是在特定情况下，合并仍会出现很多困难。

1． SVN的分支合并
当你在一个分支上工作数周或几个月之后，主干的修改也同时在进行着，两条线的开发会区别巨大，当你想合并分支回主干，
可能因为太多冲突，已经无法轻易合并你的分支和主干的修改。
另一个问题，Subversion不会记录任何合并操作，当你提交本地修改，版本库并不能判断出你是通过svn merge还是手工修改得到这些文件。
所以你必须手工记录这些信息（说明合并的特定版本号或是版本号的范围）。
要解决以上的问题只有通过有规律的将主干合并到分支来避免，制定这样一个政策：每周将上周的修改合并到分支，注意这样做时需要小心，
你必须手工记录合并的过程，以避免重复的合并，你需要小心的撰写合并的日志信息，精确的描述合并包括的范围。这样做看起来有点像是胁迫。
SVN 的版本号是连续的版本号。每一次新的提交都会版本号+1 ，而无论这个提交是在哪个分支中进行的。
SVN一个提交可以同时修改不同分支的不同文件，因为提交命令可以在 /trunk, /branches, /tags 的上一级目录执行。

• SVN 的提交是单线索的，每一个提交（最原始的提交0除外）都只有一个父节点（版本号小一个的提交节点）
• SVN 的提交链只有一条，仅从版本号和提交说明，我们无法获得分支图
• SVN 的分支图在某些工具（如乌龟SVN）可以提供，那是需要对提交内容进行检查，对目录拷贝动作视为分支，
对 svn:mergeinfo 的改动视为合并，但这会由于目录管理的灵活性，导致千奇百怪的分支图表。

2．Git的分支合并
在 git 版本库中创建分支的成本几乎为零，所以，不必吝啬多创建几个分支。当第一次执行git-init时，
系统就会创建一个名为”master”的分支。 而其它分支则通过手工创建。下面列举一些常见的分支策略。 

① 创建一个属于自己的个人工作分支，以避免对主分支 master 造成太多的干扰，也方便与他人交流协作。 
② 当进行高风险的工作时，创建一个试验性的分支，扔掉一个烂摊子总比收拾一个烂摊子好得多。 
③ 合并别人修改的时候，最好创建一个临时的分支用来合并，合并完成后再“fatch”到自己的分支。

Git分支相关的操作命令

八、 撤消操作
1．提交的撤销
在Subversion中一旦完成向服务器的数据提交，你就没有办法再从客户端追回，只能在后续的提交中修正（回退或者修改）等。
因为Subversion作为集中式的版本控制，不能允许个人对已提交的数据进行篡改。
Subversion具有一个非常重要的特性就是它的信息从不丢失，即使当你删除了文件或目录，
它也许从最新版本中消失了 ，但这个对象依然存在于历史的早期版本中。
Git则不同，Git是分布式版本控制系统，代码库是属于个人，允许任意修改。
Git通过对提交建立数字摘要来保证提交的唯一性和不可更改性，通过版本库在多人之间的多份拷贝来保障数据的安全性。
Git可以丢弃最新的一个或几个提交，使用 git reset –hard命令可以永远丢弃最新的一个或者几个提交。

2．提交说明的修改
提交后如果对提交说明不满意，如何实现对提交说明的修改：
⑴ Git可以使用命令git commit –amend修改提交说明。
• Git可以修改最后一次提交说明，并不是说不能修改历史版本的提交说明，只是修改最后一个版本提交说明拥有最简单的命令；
• Git修改提交说明，会改变提交的commit-id。即修改提交说明后，将产生一个新的提交；
• Git可以通过git reset –hard ，git commit –amend，git rebase onto 等命令来实现对历史提交的修改；
• 使用stg工具可以更为简单的修改历史提交的提交说明，包括提交内容；
⑵ Subversion也可以修改提交说明，是通过修改提交的svn:log版本属性实现的：
• 不但可以修改最后一次提交的说明，并且可以修改历史提交的提交说明；
• Subversion修改提交说明是不可逆的操作，可能会造成说明被恶意修改；
• Subversion缺省关闭修改提交说明的功能。管理员在设置了提交说明更改的邮件通知后，才可以打开该功能。

3．修改和重构历史提交
Git可以修改和重构历史提交：使用Git本身的reset以及 rebase 命令可以修改或者重整/重构历史提交，非常灵活。
使用强大的 stg 可以使得历史提交的重构更为简洁，如果您对 stg 或者 Hg/MQ 熟悉的话。
Subversion 修改历史提交，只能由管理员完成。
Subversion 是集中式版本控制系统，从客户端一旦完成提交，就没有办法从客户端撤销提交。
但是管理员可以在服务器端完成提交的撤销和修改，但是操作过程和代价较大。

九、 权限管理
Subversion通过对文件目录授权来实现权限管理，子目录默认继承父目录的权限。但是也有缺憾，即权限不能在分支中继承，
不能对单个文件授权。例如为 /trunk及其子目录的授权，不能继承到分支或者标签中相应的目录下。
Git 的授权做不到Subversion那样精细。Git的授权模型只能实现非零即壹式的授权，要么拥有全部的写权限，
要么没有写权限，要么拥有整个版本库的读权限，要么禁用。
从技术上将，Git可能永远也做不到类似SVN的路径授权（读授权）：
• 如果允许按照路径授权，则各个克隆的关系将不再是平等的关系，有的内容多，有的内容少，分布式的理念被破坏
• 如果只有部分路径可读，则克隆出来的提交和原始提交的提交ID可能不同。因为提交ID是和提交内容有关的，克隆中提交的部分内容被丢弃，势必提交的ID也要重新计算
• 允许全部代码可读，只允许部分代码可写，在版本控制的管理下，是没有多大实际意义的，而且导致了提交的逻辑上的不完整。

那么有什么办法来解决授权的问题？
1. 公司内部代码开放。即代码在公司内部，对项目组成员一视同仁的开放。
2. 公司对代码库进行合理分解，对每个代码库分别授权。即某个代码库对团队成员完全开放，对其它团队完全封闭。
3. 公司使用Subversion做集中式的版本控制，个人和/或团队使用 Git-svn。这样在无法改变公司版本控制策略时，程序员可以采用的变通之法。
4. Git服务器的部署实际上可以使用钩子对分支和路径进行写授权，即可以控制谁能够创建分支，能够写特定文件。
 
十、优缺点比较

1．SVN优缺点
优点： 
1、 管理方便，逻辑明确，符合一般人思维习惯。 
2、 易于管理，集中式服务器更能保证安全性。 
3、 代码一致性非常高。 
4、 适合开发人数不多的项目开发。 
缺点： 
1、 服务器压力太大，数据库容量暴增。 
2、 如果不能连接到服务器上，基本上不可以工作，看上面第二步，如果服务器不能连接上，就不能提交，还原，对比等等。 
3、 不适合开源开发（开发人数非常非常多，但是Google app engine就是用svn的）。
但是一般集中式管理的有非常明确的权限管理机制（例如分支访问限制），可以实现分层管理，从而很好的解决开发人数众多的问题。

2．Git优缺点
优点： 
1、适合分布式开发，强调个体。 
2、公共服务器压力和数据量都不会太大。 
3、速度快、灵活。 
4、任意两个开发者之间可以很容易的解决冲突。 
5、离线工作。 
缺点： 
1、学习周期相对而言比较长。 
2、不符合常规思维。 
3、代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息。
```

## 数据库篇
### mysql优化怎么做的？
```
1. 设计角度：存储引擎的选择，字段类型选择，范式
2. 功能角度：可以利用mysql自身的特性，如索引，查询缓存，碎片整理，分区、分表等
3. sql语句的优化方面:尽量简化查询语句，能查询字段少就尽量少查询字段，优化分页语句、分组语句等。
4. 部署大负载架构体系：数据库服务器单独出来，负载大时可以采用主从复制，读写分离机制进行设计
5. 从硬件上升级数据库服务器。
```

### sql注入是什么及如何预防sql注入？
```
SQL注入攻击指的是用户或者黑客通过构建特殊的输入作为参数传入我们的Web应用程序端，
而这些输入大都是SQL语法里的一些组合，通过执行SQL语句进而执行攻击者所要的操作，
其主要原因是程序员没有细致地过滤用户输入的数据，致使非法数据侵入系统而造成的。
因此我们在做开发过程中一定要预防sql注入，主要从两方面着手：
1、占位符的方式，就是对sql语句进行预处理，然后执行sql语句
2、通过addslashes或者mysql_real_escape_string这两个函数对用户输入的值进行转义处理，把一些特殊的字符转义掉。
```

### 预处理
```
预处理语句用于执行多个相同的 SQL 语句，并且执行效率更高。
###*预处理语句的工作原理如下**：
1. 预处理：创建 SQL 语句模板并发送到数据库。预留的值使用参数 "?" 标记 。例如：
`INSERT INTO MyGuests (firstname, lastname, email) VALUES(?, ?, ?)`
数据库解析，编译，对SQL语句模板执行查询优化，并存储结果不输出。
2. 执行：最后，将应用绑定的值传递给参数（"?" 标记），数据库执行语句。应用可以多次执行语句，如果参数的值不一样。
相比于直接执行SQL语句，预处理语句有两个主要优点：
1. 预处理语句大大减少了分析时间，只做了一次查询（虽然语句多次执行）。
2. 绑定参数减少了服务器带宽，你只需要发送查询的参数，而不是整个语句。
预处理语句针对###*SQL注入**是非常有用的，因为参数值发送后使用不同的协议，保证了数据的合法性。
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);
// 设置参数并执行
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();
$stmt->close();
```

### mysql索引
```
https://tech.meituan.com/2014/06/30/mysql-index.html
背景
MySQL凭借着出色的性能、低廉的成本、丰富的资源，已经成为绝大多数互联网公司的首选关系型数据库。
虽然性能出色，但所谓“好马配好鞍”，如何能够更好的使用它，已经成为开发工程师的必修课，
我们经常会从职位描述上看到诸如“精通MySQL”、“SQL语句优化”、“了解数据库原理”等要求。
我们知道一般的应用系统，读写比例在10:1左右，而且插入操作和一般的更新操作很少出现性能问题，遇到最多的，
也是最容易出问题的，还是一些复杂的查询操作，所以查询语句的优化显然是重中之重。

本人从2013年7月份起，一直在美团核心业务系统部做慢查询的优化工作，共计十余个系统，累计解决和积累了上百个慢查询案例。
随着业务的复杂性提升，遇到的问题千奇百怪，五花八门，匪夷所思。本文旨在以开发工程师的角度来解释数据库索引的原理和如何优化慢查询。

一个慢查询引发的思考
select
   count(*) 
from
   task 
where
   status=2 
   and operator_id=20839 
   and operate_time>1371169729 
   and operate_time<1371174603 
   and type=2;
系统使用者反应有一个功能越来越慢，于是工程师找到了上面的SQL。
并且兴致冲冲的找到了我，“这个SQL需要优化，给我把每个字段都加上索引”。
我很惊讶，问道：“为什么需要每个字段都加上索引？”
“把查询的字段都加上索引会更快”，工程师信心满满。
“这种情况完全可以建一个联合索引，因为是最左前缀匹配，所以operate_time需要放到最后，
而且还需要把其他相关的查询都拿来，需要做一个综合评估。”
“联合索引？最左前缀匹配？综合评估？”工程师不禁陷入了沉思。
多数情况下，我们知道索引能够提高查询效率，但应该如何建立索引？索引的顺序如何？许多人却只知道大概。
其实理解这些概念并不难，而且索引的原理远没有想象的那么复杂。

MySQL索引原理
索引目的
索引的目的在于提高查询效率，可以类比字典，如果要查“mysql”这个单词，我们肯定需要定位到m字母，然后从下往下找到y字母，
再找到剩下的sql。如果没有索引，那么你可能需要把所有单词看一遍才能找到你想要的，如果我想找到m开头的单词呢？
或者ze开头的单词呢？是不是觉得如果没有索引，这个事情根本无法完成？

索引原理
除了词典，生活中随处可见索引的例子，如火车站的车次表、图书的目录等。它们的原理都是一样的，
通过不断的缩小想要获得数据的范围来筛选出最终想要的结果，同时把随机的事件变成顺序的事件，
也就是我们总是通过同一种查找方式来锁定数据。

数据库也是一样，但显然要复杂许多，因为不仅面临着等值查询，还有范围查询(>、<、between、in)、模糊查询(like)、并集查询(or)等等。
数据库应该选择怎么样的方式来应对所有的问题呢？我们回想字典的例子，能不能把数据分成段，然后分段查询呢？
最简单的如果1000条数据，1到100分成第一段，101到200分成第二段，201到300分成第三段……这样查第250条数据，
只要找第三段就可以了，一下子去除了90%的无效数据。但如果是1千万的记录呢，分成几段比较好？稍有算法基础的同学会想到搜索树，
其平均复杂度是lgN，具有不错的查询性能。但这里我们忽略了一个关键的问题，复杂度模型是基于每次相同的操作成本来考虑的，
数据库实现比较复杂，数据保存在磁盘上，而为了提高性能，每次又可以把部分数据读入内存来计算，
因为我们知道访问磁盘的成本大概是访问内存的十万倍左右，所以简单的搜索树难以满足复杂的应用场景。

磁盘IO与预读
前面提到了访问磁盘，那么这里先简单介绍一下磁盘IO和预读，磁盘读取数据靠的是机械运动，
每次读取数据花费的时间可以分为寻道时间、旋转延迟、传输时间三个部分，寻道时间指的是磁臂移动到指定磁道所需要的时间，
主流磁盘一般在5ms以下；旋转延迟就是我们经常听说的磁盘转速，比如一个磁盘7200转，表示每分钟能转7200次，也就是说1秒钟能转120次，
旋转延迟就是1/120/2 = 4.17ms；传输时间指的是从磁盘读出或将数据写入磁盘的时间，一般在零点几毫秒，相对于前两个时间可以忽略不计。
那么访问一次磁盘的时间，即一次磁盘IO的时间约等于5+4.17 = 9ms左右，听起来还挺不错的，
但要知道一台500 -MIPS的机器每秒可以执行5亿条指令，因为指令依靠的是电的性质，换句话说执行一次IO的时间可以执行40万条指令，
数据库动辄十万百万乃至千万级数据，每次9毫秒的时间，显然是个灾难。下图是计算机硬件延迟的对比图，供大家参考：

various-system-software-hardware-latencies
various-system-software-hardware-latencies

考虑到磁盘IO是非常高昂的操作，计算机操作系统做了一些优化，当一次IO时，不光把当前磁盘地址的数据，
而是把相邻的数据也都读取到内存缓冲区内，因为局部预读性原理告诉我们，当计算机访问一个地址的数据的时候，
与其相邻的数据也会很快被访问到。每一次IO读取的数据我们称之为一页(page)。具体一页有多大数据跟操作系统有关，
一般为4k或8k，也就是我们读取一页内的数据时候，实际上才发生了一次IO，这个理论对于索引的数据结构设计非常有帮助。

索引的数据结构
前面讲了生活中索引的例子，索引的基本原理，数据库的复杂性，又讲了操作系统的相关知识，目的就是让大家了解，
任何一种数据结构都不是凭空产生的，一定会有它的背景和使用场景，我们现在总结一下，我们需要这种数据结构能够做些什么，
其实很简单，那就是：每次查找数据时把磁盘IO次数控制在一个很小的数量级，最好是常数数量级。
那么我们就想到如果一个高度可控的多路搜索树是否能满足需求呢？就这样，b+树应运而生。

详解b+树
b+树

如上图，是一颗b+树，关于b+树的定义可以参见B+树，这里只说一些重点，浅蓝色的块我们称之为一个磁盘块，
可以看到每个磁盘块包含几个数据项（深蓝色所示）和指针（黄色所示），如磁盘块1包含数据项17和35，
包含指针P1、P2、P3，P1表示小于17的磁盘块，P2表示在17和35之间的磁盘块，P3表示大于35的磁盘块。
真实的数据存在于叶子节点即3、5、9、10、13、15、28、29、36、60、75、79、90、99。非叶子节点只不存储真实的数据，
只存储指引搜索方向的数据项，如17、35并不真实存在于数据表中。

b+树的查找过程
如图所示，如果要查找数据项29，那么首先会把磁盘块1由磁盘加载到内存，此时发生一次IO，在内存中用二分查找确定29在17和35之间，
锁定磁盘块1的P2指针，内存时间因为非常短（相比磁盘的IO）可以忽略不计，通过磁盘块1的P2指针的磁盘地址把磁盘块3由磁盘加载到内存，
发生第二次IO，29在26和30之间，锁定磁盘块3的P2指针，通过指针加载磁盘块8到内存，发生第三次IO，同时内存中做二分查找找到29，
结束查询，总计三次IO。真实的情况是，3层的b+树可以表示上百万的数据，如果上百万的数据查找只需要三次IO，
性能提高将是巨大的，如果没有索引，每个数据项都要发生一次IO，那么总共需要百万次的IO，显然成本非常非常高。

b+树性质
1.通过上面的分析，我们知道IO次数取决于b+数的高度h，假设当前数据表的数据为N，每个磁盘块的数据项的数量是m，
则有h=㏒(m+1)N，当数据量N一定的情况下，m越大，h越小；而m = 磁盘块的大小 / 数据项的大小，
磁盘块的大小也就是一个数据页的大小，是固定的，如果数据项占的空间越小，数据项的数量越多，树的高度越低。
这就是为什么每个数据项，即索引字段要尽量的小，比如int占4字节，要比bigint8字节少一半。
这也是为什么b+树要求把真实的数据放到叶子节点而不是内层节点，一旦放到内层节点，
磁盘块的数据项会大幅度下降，导致树增高。当数据项等于1时将会退化成线性表。

2.当b+树的数据项是复合的数据结构，比如(name,age,sex)的时候，b+数是按照从左到右的顺序来建立搜索树的，
比如当(张三,20,F)这样的数据来检索的时候，b+树会优先比较name来确定下一步的所搜方向，
如果name相同再依次比较age和sex，最后得到检索的数据；但当(20,F)这样的没有name的数据来的时候，
b+树就不知道下一步该查哪个节点，因为建立搜索树的时候name就是第一个比较因子，
必须要先根据name来搜索才能知道下一步去哪里查询。比如当(张三,F)这样的数据来检索时，
b+树可以用name来指定搜索方向，但下一个字段age的缺失，所以只能把名字等于张三的数据都找到，
然后再匹配性别是F的数据了， 这个是非常重要的性质，即索引的最左匹配特性。

慢查询优化
关于MySQL索引原理是比较枯燥的东西，大家只需要有一个感性的认识，并不需要理解得非常透彻和深入。
我们回头来看看一开始我们说的慢查询，了解完索引原理之后，大家是不是有什么想法呢？先总结一下索引的几大基本原则：

建索引的几大原则
1.最左前缀匹配原则，非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，
比如a = 1 and b = 2 and c > 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，
如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。

2.=和in可以乱序，比如a = 1 and b = 2 and c = 3 建立(a,b,c)索引可以任意顺序，
mysql的查询优化器会帮你优化成索引可以识别的形式。

3.尽量选择区分度高的列作为索引，区分度的公式是count(distinct col)/count(*)，表示字段不重复的比例，
比例越大我们扫描的记录数越少，唯一键的区分度是1，而一些状态、性别字段可能在大数据面前区分度就是0，
那可能有人会问，这个比例有什么经验值吗？使用场景不同，这个值也很难确定，
一般需要join的字段我们都要求是0.1以上，即平均1条扫描10条记录。

4.索引列不能参与计算，保持列“干净”，比如from_unixtime(create_time) = ’2014-05-29’就不能使用到索引，
原因很简单，b+树中存的都是数据表中的字段值，但进行检索时，需要把所有元素都应用函数才能比较，
显然成本太大。所以语句应该写成create_time = unix_timestamp(’2014-05-29’)。

5.尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那么只需要修改原来的索引即可。

回到开始的慢查询
根据最左匹配原则，最开始的sql语句的索引应该是status、operator_id、type、operate_time的联合索引；
其中status、operator_id、type的顺序可以颠倒，所以我才会说，把这个表的所有相关查询都找到，
会综合分析；比如还有如下查询：

select * from task where status = 0 and type = 12 limit 10;
select count(*) from task where status = 0 ;
那么索引建立成(status,type,operator_id,operate_time)就是非常正确的，因为可以覆盖到所有情况。
这个就是利用了索引的最左匹配的原则

查询优化神器 - explain命令
关于explain命令相信大家并不陌生，具体用法和字段含义可以参考官网explain-output，这里需要强调rows是核心指标，
绝大部分rows小的语句执行一定很快（有例外，下面会讲到）。所以优化语句基本上都是在优化rows。

慢查询优化基本步骤
0.先运行看看是否真的很慢，注意设置SQL_NO_CACHE

1.where条件单表查，锁定最小返回记录表。这句话的意思是把查询语句的where都应用到表中返回的记录数最小的表开始查起，
单表每个字段分别查询，看哪个字段的区分度最高

2.explain查看执行计划，是否与1预期一致（从锁定记录较少的表开始查询）

3.order by limit 形式的sql语句让排序的表优先查

4.了解业务方使用场景

5.加索引时参照建索引的几大原则

6.观察结果，不符合预期继续从0分析

几个慢查询案例
下面几个例子详细解释了如何分析和优化慢查询。

复杂语句写法
很多情况下，我们写SQL只是为了实现功能，这只是第一步，不同的语句书写方式对于效率往往有本质的差别，
这要求我们对mysql的执行计划和索引原则有非常清楚的认识，请看下面的语句：

select
   distinct cert.emp_id 
from
   cm_log cl 
inner join
   (
      select
         emp.id as emp_id,
         emp_cert.id as cert_id 
      from
         employee emp 
      left join
         emp_certificate emp_cert 
            on emp.id = emp_cert.emp_id 
      where
         emp.is_deleted=0
   ) cert 
      on (
         cl.ref_table='Employee' 
         and cl.ref_oid= cert.emp_id
      ) 
      or (
         cl.ref_table='EmpCertificate' 
         and cl.ref_oid= cert.cert_id
      ) 
where
   cl.last_upd_date >='2013-11-07 15:03:00' 
   and cl.last_upd_date<='2013-11-08 16:00:00';
0.先运行一下，53条记录 1.87秒，又没有用聚合语句，比较慢

53 rows in set (1.87 sec)
1.explain

+----+-------------+------------+-------+---------------------------------+-----------------------+---------+-------------------+-------+--------------------------------+
| id | select_type | table      | type  | possible_keys                   | key                   | key_len | ref               | rows  | Extra                          |
+----+-------------+------------+-------+---------------------------------+-----------------------+---------+-------------------+-------+--------------------------------+
|  1 | PRIMARY     | cl         | range | cm_log_cls_id,idx_last_upd_date | idx_last_upd_date     | 8       | NULL              |   379 | Using where; Using temporary   |
|  1 | PRIMARY     | <derived2> | ALL   | NULL                            | NULL                  | NULL    | NULL              | 63727 | Using where; Using join buffer |
|  2 | DERIVED     | emp        | ALL   | NULL                            | NULL                  | NULL    | NULL              | 13317 | Using where                    |
|  2 | DERIVED     | emp_cert   | ref   | emp_certificate_empid           | emp_certificate_empid | 4       | meituanorg.emp.id |     1 | Using index                    |
+----+-------------+------------+-------+---------------------------------+-----------------------+---------+-------------------+-------+--------------------------------+
简述一下执行计划，首先mysql根据idx_last_upd_date索引扫描cm_log表获得379条记录；然后查表扫描了63727条记录，分为两部分，
derived表示构造表，也就是不存在的表，可以简单理解成是一个语句形成的结果集，后面的数字表示语句的ID。
derived2表示的是ID = 2的查询构造了虚拟表，并且返回了63727条记录。我们再来看看ID = 2的语句究竟做了写什么返回了这么大量的数据，
首先全表扫描employee表13317条记录，然后根据索引emp_certificate_empid关联emp_certificate表，rows = 1表示，
每个关联都只锁定了一条记录，效率比较高。获得后，再和cm_log的379条记录根据规则关联。从执行过程上可以看出返回了太多的数据，
返回的数据绝大部分cm_log都用不到，因为cm_log只锁定了379条记录。

如何优化呢？可以看到我们在运行完后还是要和cm_log做join,那么我们能不能之前和cm_log做join呢？仔细分析语句不难发现，
其基本思想是如果cm_log的ref_table是EmpCertificate就关联emp_certificate表，如果ref_table是Employee就关联employee表，
我们完全可以拆成两部分，并用union连接起来，注意这里用union，而不用union all是因为原语句有“distinct”来得到唯一的记录，
而union恰好具备了这种功能。如果原语句中没有distinct不需要去重，我们就可以直接使用union all了，因为使用union需要去重的动作，会影响SQL性能。

优化过的语句如下：

select
   emp.id 
from
   cm_log cl 
inner join
   employee emp 
      on cl.ref_table = 'Employee' 
      and cl.ref_oid = emp.id  
where
   cl.last_upd_date >='2013-11-07 15:03:00' 
   and cl.last_upd_date<='2013-11-08 16:00:00' 
   and emp.is_deleted = 0  
union
select
   emp.id 
from
   cm_log cl 
inner join
   emp_certificate ec 
      on cl.ref_table = 'EmpCertificate' 
      and cl.ref_oid = ec.id  
inner join
   employee emp 
      on emp.id = ec.emp_id  
where
   cl.last_upd_date >='2013-11-07 15:03:00' 
   and cl.last_upd_date<='2013-11-08 16:00:00' 
   and emp.is_deleted = 0
4.不需要了解业务场景，只需要改造的语句和改造之前的语句保持结果一致

5.现有索引可以满足，不需要建索引

6.用改造后的语句实验一下，只需要10ms 降低了近200倍！

+----+--------------+------------+--------+---------------------------------+-------------------+---------+-----------------------+------+-------------+
| id | select_type  | table      | type   | possible_keys                   | key               | key_len | ref                   | rows | Extra       |
+----+--------------+------------+--------+---------------------------------+-------------------+---------+-----------------------+------+-------------+
|  1 | PRIMARY      | cl         | range  | cm_log_cls_id,idx_last_upd_date | idx_last_upd_date | 8       | NULL                  |  379 | Using where |
|  1 | PRIMARY      | emp        | eq_ref | PRIMARY                         | PRIMARY           | 4       | meituanorg.cl.ref_oid |    1 | Using where |
|  2 | UNION        | cl         | range  | cm_log_cls_id,idx_last_upd_date | idx_last_upd_date | 8       | NULL                  |  379 | Using where |
|  2 | UNION        | ec         | eq_ref | PRIMARY,emp_certificate_empid   | PRIMARY           | 4       | meituanorg.cl.ref_oid |    1 |             |
|  2 | UNION        | emp        | eq_ref | PRIMARY                         | PRIMARY           | 4       | meituanorg.ec.emp_id  |    1 | Using where |
| NULL | UNION RESULT | <union1,2> | ALL    | NULL                            | NULL              | NULL    | NULL                  | NULL |             |
+----+--------------+------------+--------+---------------------------------+-------------------+---------+-----------------------+------+-------------+
53 rows in set (0.01 sec)
明确应用场景
举这个例子的目的在于颠覆我们对列的区分度的认知，一般上我们认为区分度越高的列，越容易锁定更少的记录，
但在一些特殊的情况下，这种理论是有局限性的。

select
   * 
from
   stage_poi sp 
where
   sp.accurate_result=1 
   and (
      sp.sync_status=0 
      or sp.sync_status=2 
      or sp.sync_status=4
   );
0.先看看运行多长时间,951条数据6.22秒，真的很慢。

951 rows in set (6.22 sec)
1.先explain，rows达到了361万，type = ALL表明是全表扫描。

+----+-------------+-------+------+---------------+------+---------+------+---------+-------------+
| id | select_type | table | type | possible_keys | key  | key_len | ref  | rows    | Extra       |
+----+-------------+-------+------+---------------+------+---------+------+---------+-------------+
|  1 | SIMPLE      | sp    | ALL  | NULL          | NULL | NULL    | NULL | 3613155 | Using where |
+----+-------------+-------+------+---------------+------+---------+------+---------+-------------+

2.所有字段都应用查询返回记录数，因为是单表查询 0已经做过了951条。

3.让explain的rows 尽量逼近951。

看一下accurate_result = 1的记录数：

select count(*),accurate_result from stage_poi  group by accurate_result;
+----------+-----------------+
| count(*) | accurate_result |
+----------+-----------------+
|     1023 |              -1 |
|  2114655 |               0 |
|   972815 |               1 |
+----------+-----------------+
我们看到accurate_result这个字段的区分度非常低，整个表只有-1,0,1三个值，加上索引也无法锁定特别少量的数据。

再看一下sync_status字段的情况：

select count(*),sync_status from stage_poi  group by sync_status;
+----------+-------------+
| count(*) | sync_status |
+----------+-------------+
|     3080 |           0 |
|  3085413 |           3 |
+----------+-------------+
同样的区分度也很低，根据理论，也不适合建立索引。

问题分析到这，好像得出了这个表无法优化的结论，两个列的区分度都很低，即便加上索引也只能适应这种情况，
很难做普遍性的优化，比如当sync_status 0、3分布的很平均，那么锁定记录也是百万级别的。

4.找业务方去沟通，看看使用场景。业务方是这么来使用这个SQL语句的，每隔五分钟会扫描符合条件的数据，
处理完成后把sync_status这个字段变成1,五分钟符合条件的记录数并不会太多，1000个左右。了解了业务方的使用场景后，
优化这个SQL就变得简单了，因为业务方保证了数据的不平衡，如果加上索引可以过滤掉绝大部分不需要的数据。

5.根据建立索引规则，使用如下语句建立索引

alter table stage_poi add index idx_acc_status(accurate_result,sync_status);
6.观察预期结果,发现只需要200ms，快了30多倍。

952 rows in set (0.20 sec)
我们再来回顾一下分析问题的过程，单表查询相对来说比较好优化，大部分时候只需要把where条件里面的字段依照规则加上索引就好，
如果只是这种“无脑”优化的话，显然一些区分度非常低的列，不应该加索引的列也会被加上索引，这样会对插入、更新性能造成严重的影响，
同时也有可能影响其它的查询语句。所以我们第4步调差SQL的使用场景非常关键，我们只有知道这个业务场景，才能更好地辅助我们更好的分析和优化查询语句。

无法优化的语句
select
   c.id,
   c.name,
   c.position,
   c.sex,
   c.phone,
   c.office_phone,
   c.feature_info,
   c.birthday,
   c.creator_id,
   c.is_keyperson,
   c.giveup_reason,
   c.status,
   c.data_source,
   from_unixtime(c.created_time) as created_time,
   from_unixtime(c.last_modified) as last_modified,
   c.last_modified_user_id  
from
   contact c  
inner join
   contact_branch cb 
      on  c.id = cb.contact_id  
inner join
   branch_user bu 
      on  cb.branch_id = bu.branch_id 
      and bu.status in (
         1,
      2)  
   inner join
      org_emp_info oei 
         on  oei.data_id = bu.user_id 
         and oei.node_left >= 2875 
         and oei.node_right <= 10802 
         and oei.org_category = - 1  
   order by
      c.created_time desc  limit 0 ,
      10;
还是几个步骤。

0.先看语句运行多长时间，10条记录用了13秒，已经不可忍受。

10 rows in set (13.06 sec)
1.explain

+----+-------------+-------+--------+-------------------------------------+-------------------------+---------+--------------------------+------+----------------------------------------------+
| id | select_type | table | type   | possible_keys                       | key                     | key_len | ref                      | rows | Extra                                        |
+----+-------------+-------+--------+-------------------------------------+-------------------------+---------+--------------------------+------+----------------------------------------------+
|  1 | SIMPLE      | oei   | ref    | idx_category_left_right,idx_data_id | idx_category_left_right | 5       | const                    | 8849 | Using where; Using temporary; Using filesort |
|  1 | SIMPLE      | bu    | ref    | PRIMARY,idx_userid_status           | idx_userid_status       | 4       | meituancrm.oei.data_id   |   76 | Using where; Using index                     |
|  1 | SIMPLE      | cb    | ref    | idx_branch_id,idx_contact_branch_id | idx_branch_id           | 4       | meituancrm.bu.branch_id  |    1 |                                              |
|  1 | SIMPLE      | c     | eq_ref | PRIMARY                             | PRIMARY                 | 108     | meituancrm.cb.contact_id |    1 |                                              |
+----+-------------+-------+--------+-------------------------------------+-------------------------+---------+--------------------------+------+----------------------------------------------+
从执行计划上看，mysql先查org_emp_info表扫描8849记录，再用索引idx_userid_status关联branch_user表，
再用索引idx_branch_id关联contact_branch表，最后主键关联contact表。

rows返回的都非常少，看不到有什么异常情况。我们在看一下语句，发现后面有order by + limit组合，
会不会是排序量太大搞的？于是我们简化SQL，去掉后面的order by 和 limit，看看到底用了多少记录来排序。

select
  count(*)
from
   contact c  
inner join
   contact_branch cb 
      on  c.id = cb.contact_id  
inner join
   branch_user bu 
      on  cb.branch_id = bu.branch_id 
      and bu.status in (
         1,
      2)  
   inner join
      org_emp_info oei 
         on  oei.data_id = bu.user_id 
         and oei.node_left >= 2875 
         and oei.node_right <= 10802 
         and oei.org_category = - 1  
+----------+
| count(*) |
+----------+
|   778878 |
+----------+
1 row in set (5.19 sec)
发现排序之前居然锁定了778878条记录，如果针对70万的结果集排序，将是灾难性的，怪不得这么慢，
那我们能不能换个思路，先根据contact的created_time排序，再来join会不会比较快呢？

于是改造成下面的语句，也可以用straight_join来优化：

select
   c.id,
   c.name,
   c.position,
   c.sex,
   c.phone,
   c.office_phone,
   c.feature_info,
   c.birthday,
   c.creator_id,
   c.is_keyperson,
   c.giveup_reason,
   c.status,
   c.data_source,
   from_unixtime(c.created_time) as created_time,
   from_unixtime(c.last_modified) as last_modified,
   c.last_modified_user_id   
from
   contact c  
where
   exists (
      select
         1 
      from
         contact_branch cb  
      inner join
         branch_user bu        
            on  cb.branch_id = bu.branch_id        
            and bu.status in (
               1,
            2)      
         inner join
            org_emp_info oei           
               on  oei.data_id = bu.user_id           
               and oei.node_left >= 2875           
               and oei.node_right <= 10802           
               and oei.org_category = - 1      
         where
            c.id = cb.contact_id    
      )    
   order by
      c.created_time desc  limit 0 ,
      10;
验证一下效果 预计在1ms内，提升了13000多倍！

10 rows in set (0.00 sec)
本以为至此大工告成，但我们在前面的分析中漏了一个细节，先排序再join和先join再排序理论上开销是一样的，
为何提升这么多是因为有一个limit！大致执行过程是：mysql先按索引排序得到前10条记录，然后再去join过滤，
当发现不够10条的时候，再次去10条，再次join，这显然在内层join过滤的数据非常多的时候，将是灾难的，极端情况，
内层一条数据都找不到，mysql还傻乎乎的每次取10条，几乎遍历了这个数据表！

用不同参数的SQL试验下：

select
   sql_no_cache   c.id,
   c.name,
   c.position,
   c.sex,
   c.phone,
   c.office_phone,
   c.feature_info,
   c.birthday,
   c.creator_id,
   c.is_keyperson,
   c.giveup_reason,
   c.status,
   c.data_source,
   from_unixtime(c.created_time) as created_time,
   from_unixtime(c.last_modified) as last_modified,
   c.last_modified_user_id    
from
   contact c   
where
   exists (
      select
         1        
      from
         contact_branch cb         
      inner join
         branch_user bu                     
            on  cb.branch_id = bu.branch_id                     
            and bu.status in (
               1,
            2)                
         inner join
            org_emp_info oei                           
               on  oei.data_id = bu.user_id                           
               and oei.node_left >= 2875                           
               and oei.node_right <= 2875                           
               and oei.org_category = - 1                
         where
            c.id = cb.contact_id           
      )        
   order by
      c.created_time desc  limit 0 ,
      10;
Empty set (2 min 18.99 sec)
2 min 18.99 sec！比之前的情况还糟糕很多。由于mysql的nested loop机制，遇到这种情况，
基本是无法优化的。这条语句最终也只能交给应用系统去优化自己的逻辑了。

通过这个例子我们可以看到，并不是所有语句都能优化，而往往我们优化时，由于SQL用例回归时落掉一些极端情况，
会造成比原来还严重的后果。所以，第一：不要指望所有语句都能通过SQL优化，第二：不要过于自信，只针对具体case来优化，而忽略了更复杂的情况。

慢查询的案例就分析到这儿，以上只是一些比较典型的案例。我们在优化过程中遇到过超过1000行，涉及到16个表join的“垃圾SQL”，
也遇到过线上线下数据库差异导致应用直接被慢查询拖死，也遇到过varchar等值比较没有写单引号，
还遇到过笛卡尔积查询直接把从库搞死。再多的案例其实也只是一些经验的积累，如果我们熟悉查询优化器、索引的内部原理，
那么分析这些案例就变得特别简单了。

写在后面的话
本文以一个慢查询案例引入了MySQL索引原理、优化慢查询的一些方法论;并针对遇到的典型案例做了详细的分析。
其实做了这么长时间的语句优化后才发现，任何数据库层面的优化都抵不上应用系统的优化，同样是MySQL，
可以用来支撑Google/FaceBook/Taobao应用，但可能连你的个人网站都撑不住。
套用最近比较流行的话：“查询容易，优化不易，且写且珍惜！”
```

### 了解InnoDB和Myisam，B+tree,聚簇索引等等
```
[InnoDB索引原理详解](https://www.cnblogs.com/shijingxiang/articles/4743324.html)
http://www.admin10000.com/document/5372.html
摘要：
本篇介绍下Mysql的InnoDB索引相关知识，从各种树到索引原理到存储的细节。
InnoDB是Mysql的默认存储引擎(Mysql5.5.5之前是MyISAM，文档)。本着高效学习的目的，本篇以介绍InnoDB为主，少量涉及MyISAM作为对比。
这篇文章是我在学习过程中总结完成的，内容主要来自书本和博客(参考文献会给出)，过程中加入了一些自己的理解，描述不准确的地方烦请指出。

1 各种树形结构
本来不打算从二叉搜索树开始，因为网上已经有太多相关文章，但是考虑到清晰的图示对理解问题有很大帮助，
也为了保证文章完整性，最后还是加上了这部分。

先看看几种树形结构：
1 搜索二叉树：每个节点有两个子节点，数据量的增大必然导致高度的快速增加，显然这个不适合作为大量数据存储的基础结构。
2 B树：一棵m阶B树是一棵平衡的m路搜索树。最重要的性质是每个非根节点所包含的关键字个数 j 满足：
┌m/2┐ - 1 <= j <= m - 1；一个节点的子节点数量会比关键字个数多1，这样关键字就变成了子节点的分割标志。
一般会在图示中把关键字画到子节点中间，非常形象，也容易和后面的B+树区分。由于数据同时存在于叶子节点和非叶子结点中，
无法简单完成按顺序遍历B树中的关键字，必须用中序遍历的方法。
3 B+树：一棵m阶B树是一棵平衡的m路搜索树。最重要的性质是每个非根节点所包含的关键字个数 j 满足：
┌m/2┐ - 1 <= j <= m；子树的个数最多可以与关键字一样多。非叶节点存储的是子树里最小的关键字。
同时数据节点只存在于叶子节点中，且叶子节点间增加了横向的指针，这样顺序遍历所有数据将变得非常容易。
4 B*树：一棵m阶B树是一棵平衡的m路搜索树。最重要的两个性质是1每个非根节点所包含的关键字个数 j 满足：
┌m2/3┐ - 1 <= j <= m；2非叶节点间添加了横向指针。

B/B+/B*三种树有相似的操作，比如检索/插入/删除节点。这里只重点关注插入节点的情况，且只分析他们在当前节点已满情况下的插入操作，
因为这个动作稍微复杂且能充分体现几种树的差异。与之对比的是检索节点比较容易实现，
而删除节点只要完成与插入相反的过程即可（在实际应用中删除并不是插入的完全逆操作，往往只删除数据而保留下空间为后续使用）。

先看B树的分裂，下图的红色值即为每次新插入的节点。每当一个节点满后，就需要发生分裂
（分裂是一个递归过程，参考下面7的插入导致了两层分裂），由于B树的非叶子节点同样保存了键值，
所以已满节点分裂后的值将分布在三个地方：1原节点，2原节点的父节点，3原节点的新建兄弟节点（参考5，7的插入过程）。
分裂有可能导致树的高度增加（参考3，7的插入过程），也可能不影响树的高度（参考5，6的插入过程）。

B+树的分裂：当一个结点满时，分配一个新的结点，并将原结点中1/2的数据复制到新结点，最后在父结点中增加新结点的指针；
B+树的分裂只影响原结点和父结点，而不会影响兄弟结点，所以它不需要指向兄弟节点的指针。

B*树的分裂：当一个结点满时，如果它的下一个兄弟结点未满，那么将一部分数据移到兄弟结点中，再在原结点插入关键字，
最后修改父结点中兄弟结点的关键字（因为兄弟结点的关键字范围改变了）。如果兄弟也满了，则在原结点与兄弟结点之间增加新结点，
并各复制1/3的数据到新结点，最后在父结点增加新结点的指针。可以看到B*树的分裂非常巧妙，因为B*树要保证分裂后的节点还要2/3满，
如果采用B+树的方法，只是简单的将已满的节点一分为二，会导致每个节点只有1/2满，这不满足B*树的要求了。
所以B*树采取的策略是在本节点满后，继续插入兄弟节点（这也是为什么B*树需要在非叶子节点加一个兄弟间的链表），
直到把兄弟节点也塞满，然后拉上兄弟节点一起凑份子，自己和兄弟节点各出资1/3成立新节点，
这样的结果是3个节点刚好是2/3满，达到B*树的要求，皆大欢喜。

B+树适合作为数据库的基础结构，完全是因为计算机的内存-机械硬盘两层存储结构。内存可以完成快速的随机访问
（随机访问即给出任意一个地址，要求返回这个地址存储的数据）但是容量较小。而硬盘的随机访问要经过机械动作
（1磁头移动 2盘片转动），访问效率比内存低几个数量级，但是硬盘容量较大。典型的数据库容量大大超过可用内存大小，
这就决定了在B+树中检索一条数据很可能要借助几次磁盘IO操作来完成。如下图所示：通常向下读取一个节点的动作可能会是一次磁盘IO操作，
不过非叶节点通常会在初始阶段载入内存以加快访问速度。同时为提高在节点间横向遍历速度，
真实数据库中可能会将图中蓝色的CPU计算/内存读取优化成二叉搜索树（InnoDB中的page directory机制）。

真实数据库中的B+树应该是非常扁平的，可以通过向表中顺序插入足够数据的方式来验证InnoDB中的B+树到底有多扁平。
我们通过如下图的CREATE语句建立一个只有简单字段的测试表，然后不断添加数据来填充这个表。
通过下图的统计数据（来源见参考文献1）可以分析出几个直观的结论，这几个结论宏观的展现了数据库里B+树的尺度。

1 每个叶子节点存储了468行数据，每个非叶子节点存储了大约1200个键值，这是一棵平衡的1200路搜索树！
2 对于一个22.1G容量的表，也只需要高度为3的B+树就能存储了，这个容量大概能满足很多应用的需要了。
如果把高度增大到4，则B+树的存储容量立刻增大到25.9T之巨！
3 对于一个22.1G容量的表，B+树的高度是3，如果要把非叶节点全部加载到内存也只需要少于18.8M的内存
（如何得出的这个结论？因为对于高度为2的树，1203个叶子节点也只需要18.8M空间，而22.1G从良表的高度是3，非叶节点1204个。
同时我们假设叶子节点的尺寸是大于非叶节点的，因为叶子节点存储了行数据而非叶节点只有键和少量数据。），
只使用如此少的内存就可以保证只需要一次磁盘IO操作就检索出所需的数据，效率是非常之高的。

2 Mysql的存储引擎和索引
可以说数据库必须有索引，没有索引则检索过程变成了顺序查找，O(n)的时间复杂度几乎是不能忍受的。
我们非常容易想象出一个只有单关键字组成的表如何使用B+树进行索引，只要将关键字存储到树的节点即可。
当数据库一条记录里包含多个字段时，一棵B+树就只能存储主键，如果检索的是非主键字段，则主键索引失去作用，
又变成顺序查找了。这时应该在第二个要检索的列上建立第二套索引。  这个索引由独立的B+树来组织。
有两种常见的方法可以解决多个B+树访问同一套表数据的问题，一种叫做聚簇索引（clustered index ），
一种叫做非聚簇索引（secondary index）。这两个名字虽然都叫做索引，但这并不是一种单独的索引类型，
而是一种数据存储方式。对于聚簇索引存储来说，行数据和主键B+树存储在一起，辅助键B+树只存储辅助键和主键，
主键和非主键B+树几乎是两种类型的树。对于非聚簇索引存储来说，主键B+树在叶子节点存储指向真正数据行的指针，而非主键。

InnoDB使用的是聚簇索引，将主键组织到一棵B+树中，而行数据就储存在叶子节点上，若使用"where id = 14"这样的条件查找主键，
则按照B+树的检索算法即可查找到对应的叶节点，之后获得行数据。若对Name列进行条件搜索，则需要两个步骤：
第一步在辅助索引B+树中检索Name，到达其叶子节点获取对应的主键。第二步使用主键在主索引B+树种再执行一次B+树检索操作，
最终到达叶子节点即可获取整行数据。

MyISM使用的是非聚簇索引，非聚簇索引的两棵B+树看上去没什么不同，节点的结构完全一致只是存储的内容不同而已，
主键索引B+树的节点存储了主键，辅助键索引B+树存储了辅助键。表数据存储在独立的地方，
这两颗B+树的叶子节点都使用一个地址指向真正的表数据，对于表数据来说，这两个键没有任何差别。
由于索引树是独立的，通过辅助键检索无需访问主键的索引树。

为了更形象说明这两种索引的区别，我们假想一个表如下图存储了4行数据。其中Id作为主索引，
Name作为辅助索引。图示清晰的显示了聚簇索引和非聚簇索引的差异。

我们重点关注聚簇索引，看上去聚簇索引的效率明显要低于非聚簇索引，因为每次使用辅助索引检索都要经过两次B+树查找，
这不是多此一举吗？聚簇索引的优势在哪？

1 由于行数据和叶子节点存储在一起，这样主键和行数据是一起被载入内存的，找到叶子节点就可以立刻将行数据返回了，
如果按照主键Id来组织数据，获得数据更快。

2 辅助索引使用主键作为"指针" 而不是使用地址值作为指针的好处是，减少了当出现行移动或者数据页分裂时辅助索引的维护工作，
使用主键值当作指针会让辅助索引占用更多的空间，换来的好处是InnoDB在移动行时无须更新辅助索引中的这个"指针"。
也就是说行的位置（实现中通过16K的Page来定位，后面会涉及）会随着数据库里数据的修改而发生变化
（前面的B+树节点分裂以及Page的分裂），使用聚簇索引就可以保证不管这个主键B+树的节点如何变化，
辅助索引树都不受影响。

3 Page结构
如果说前面的内容偏向于解释原理，那后面就开始涉及具体实现了。

理解InnoDB的实现不得不提Page结构，Page是整个InnoDB存储的最基本构件，也是InnoDB磁盘管理的最小单位，
与数据库相关的所有内容都存储在这种Page结构里。Page分为几种类型，常见的页类型有数据页（B-tree Node）
Undo页（Undo Log Page）系统页（System Page） 事务数据页（Transaction System Page）等。
单个Page的大小是16K（编译宏UNIV_PAGE_SIZE控制），每个Page使用一个32位的int值来唯一标识，
这也正好对应InnoDB最大64TB的存储容量（16Kib * 2^32 = 64Tib）。一个Page的基本结构如下图所示：

每个Page都有通用的头和尾，但是中部的内容根据Page的类型不同而发生变化。
Page的头部里有我们关心的一些数据，下图把Page的头部详细信息显示出来：

我们重点关注和数据组织结构相关的字段：Page的头部保存了两个指针，分别指向前一个Page和后一个Page，
头部还有Page的类型信息和用来唯一标识Page的编号。根据这两个指针我们很容易想象出Page链接起来就是一个双向链表的结构。

再看看Page的主体内容，我们主要关注行数据和索引的存储，他们都位于Page的User Records部分，
User Records占据Page的大部分空间，User Records由一条一条的Record组成，每条记录代表索引树上的一个节点（非叶子节点和叶子节点）。
在一个Page内部，单链表的头尾由固定内容的两条记录来表示，字符串形式的"Infimum"代表开头，"Supremum"代表结尾。
这两个用来代表开头结尾的Record存储在System Records的段里，这个System Records和User Records是两个平行的段。
InnoDB存在4种不同的Record，它们分别是1主键索引树非叶节点 2主键索引树叶子节点 3辅助键索引树非叶节点 
4辅助键索引树叶子节点。这4种节点的Record格式有一些差异，但是它们都存储着Next指针指向下一个Record。
后续我们会详细介绍这4种节点，现在只需要把Record当成一个存储了数据同时含有Next指针的单链表节点即可。

User Record在Page内以单链表的形式存在，最初数据是按照插入的先后顺序排列的，但是随着新数据的插入和旧数据的删除，
数据物理顺序会变得混乱，但他们依然保持着逻辑上的先后顺序。

把User Record的组织形式和若干Page组合起来，就看到了稍微完整的形式。

现在看下如何定位一个Record：
1 通过根节点开始遍历一个索引的B+树，通过各层非叶子节点最终到达一个Page，这个Page里存放的都是叶子节点。
2 在Page内从"Infimum"节点开始遍历单链表（这种遍历往往会被优化），如果找到该键则成功返回。
如果记录到达了"supremum"，说明当前Page里没有合适的键，这时要借助Page的Next Page指针，跳转到下一个Page继续从"Infimum"开始逐个查找。

详细看下不同类型的Record里到底存储了什么数据，根据B+树节点的不同，User Record可以被分成四种格式，下图种按照颜色予以区分。

1 主索引树非叶节点（绿色）
1 子节点存储的主键里最小的值（Min Cluster Key on Child），这是B+树必须的，作用是在一个Page里定位到具体的记录的位置。
2 最小的值所在的Page的编号（Child Page Number），作用是定位Record。
2 主索引树叶子节点（黄色）
1 主键（Cluster Key Fields），B+树必须的，也是数据行的一部分
2 除去主键以外的所有列（Non-Key Fields），这是数据行的除去主键的其他所有列的集合。
这里的1和2两部分加起来就是一个完整的数据行。
3 辅助索引树非叶节点非（蓝色）
1 子节点里存储的辅助键值里的最小的值（Min Secondary-Key on Child），这是B+树必须的，
作用是在一个Page里定位到具体的记录的位置。
2 主键值（Cluster Key Fields），非叶子节点为什么要存储主键呢？因为辅助索引是可以不唯一的，
但是B+树要求键的值必须唯一，所以这里把辅助键的值和主键的值合并起来作为在B+树中的真正键值，
保证了唯一性。但是这也导致在辅助索引B+树中非叶节点反而比叶子节点多了4个字节。
（即下图中蓝色节点反而比红色多了4字节）
3 最小的值所在的Page的编号（Child Page Number），作用是定位Record。
4 辅助索引树叶子节点（红色）
1 辅助索引键值（Secondary Key Fields），这是B+树必须的。
2 主键值（Cluster Key Fields），用来在主索引树里再做一次B+树检索来找到整条记录。

下面是本篇最重要的部分了，结合B+树的结构和前面介绍的4种Record的内容，我们终于可以画出一幅全景图。
由于辅助索引的B+树与主键索引有相似的结构，这里只画出了主键索引树的结构图，只包含了"主键非叶节点"和"主键叶子节点"两种节点，
也就是上图的的绿色和黄色的部分。

把上图还原成下面这个更简洁的树形示意图，这就是B+树的一部分。注意Page和B+树节点之间并没有一一对应的关系，
Page只是作为一个Record的保存容器，它存在的目的是便于对磁盘空间进行批量管理，
上图中的编号为47的Page在树形结构上就被拆分成了两个独立节点。

至此本篇就算结束了，本篇只是对InnoDB索引相关的数据结构和实现进行了一些梳理总结，
并未涉及到Mysql的实战经验。这主要是基于几点原因：
1 原理是基石，只有充分了解InnoDB索引的工作方式，我们才有能力高效的使用好它。
2 原理性知识特别适合使用图示，我个人非常喜欢这种表达方式。
3 关于InnoDB优化，在《高性能Mysql》里有更加全面的介绍，对优化Mysql感兴趣的同学完全可以自己获取相关知识，
我自己的积累还未达到能分享这些内容的地步。
另：对InnoDB实现有更多兴趣的同学可以看看Jeremy Cole的博客（参考文献三篇文章的来源），
这位老兄曾先后在Mysql，Yahoo，Twitter，Google从事数据库相关工作，他的文章非常棒！
```

### MongoDB
```
MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。
它支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。
Mongo最大的特点是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，
几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

SQL术语/概念|MongoDB术语/概念|解释/说明
-|-|-
database|database|数据库
table|collection|数据库表/集合
row|document|数据记录行/文档
column|field|数据字段/域
index|index|索引
table joins| |表连接,MongoDB不支持
primary key|primary key|主键,MongoDB自动将_id字段设置为主键

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

## Laravel5.8版本安装教程
```
参考：https://www.jianshu.com/p/a3cdec31be9b
1.安装
方式1：全局安装
通过composer安装 laravel 安装器
composer global require "laravel/installer"
确保将 composer vender bin 目录放置在你的系统环境变量 $PATH 中，以便系统可以找到 Laravel 的可执行文件。
该目录根据您的操作系统存在不同的位置中；一些常见的配置包括：

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
创建数据库并将数据库配 置信息写入.env文件
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=root
DB_PASSWORD=root
```

```

### 面试题
```
1. 计算机网络体系结构

- 应用层：应用层协议定义的是应用进程间通信和交互的规则
- 运输层：运输层的任务就是负责向两台主机中进程之间的通信提供通用的数据传输服务
- 网络层：把运输层产生的报文段或用户数据报封装成分组或包进行传送
- 数据链路层：将网络层交下来的 IP 数据报组装成帧，并在两个相邻结点间的链路上传送
- 物理层：利用物理媒体以比特形式传送数据

2. UDP 的主要特点

- UDP 是无连接的，即发送数据之前不需要建立连接(发送数据结束时也没有连接可释放)，减少了开销和发送数据之前的时延
- UDP 使用尽最大努力交付，即不保证可靠交付，主机不需要维持复杂的连接状态表
- UDP 是面向报文的，发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层。UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界
- UDP 没有拥塞控制，网络出现的拥塞不会使源主机的发送速率降低。这对某些实时应用是很重要的
- UDP 支持一对一、一对多、多对一和多对多的交互通信
- UDP 的首部开销小，只有8个字节，比 TCP 的20个字节的首部要短

3. TCP 的主要特点

- TCP 是面向连接的运输层协议。应用程序在使用 TCP 协议之前，必须先建立 TCP 连接。在传送数据完毕后，必须释放已经建立的 TCP 连接
- 每一条 TCP 连接只能有两个端点，每一条 TCP 连接只能是点对点的(一对一)
- TCP 提供可靠交付的服务。通过 TCP 连接传送的数据，无差错、不丢失、不重复，并且按序到达
- TCP 提供全双工通信。TCP 允许通信双方的应用进程在任何时候都能发送数据。TCP 连接的两端都设有发送缓存和接受缓存，用来临时存放双向通信的数据
- 面向字节流。TCP 中的“流”指的是流入到进程或从进程流出的字节序列

4. 简述三报文握手建立 TCP 连接

- 服务器进程先创建传输控制块 TCB，并处于监听状态，等待客户端的连接请求
- 客户端创建传输控制块 TCB，并向服务器发出连接请求报文段
- 服务器收到连接请求报文段后，如同意建立连接，则发送确认报文段
- 客户端进程收到服务器的确认报文段后，立即回复确认报文段，并进入已建立连接状态
- 服务器收到确认报文段之后，也进入已建立连接状态

> 传输控制块 TCB(Transmission Control Block)存储了每一个连接中的一些重要信息

 5. 建立 TCP 连接为什么最后还要发送确认

这主要是为了防止已失效的连接请求报文段突然又传到了 TCP 服务器，避免产生错误

 6. 简述 TCP 连接的释放

- 客户端应用进程发出连接释放报文段，并停止再发送数据，进入 FIN-WAIT-1(终止等待1)状态，等待服务器确认
- 服务器收到连接释放报文段后即发出确认，进入 CLOSE-WAIT(关闭等待)状态，服务器若发送数据，客户端扔要接收
- 客户端收到来自服务器的确认后，进入 FIN-WAIT-2(终止等待2)状态，等待服务器发出连接释放报文段
- 服务器没有要发送的数据，发出连接释放报文段，进入 LAST-ACK(最后确认)状态，等待客户端确认
- 客户端收到连接释放报文段后，发出确认，进入 TIME-WAIT(时间等待)状态，经过时间等待计时器设置的时间 2MSL 后，进入 CLOSED(关闭) 状态
- 服务器收到客户端报文段后，进入 CLOSED 状态

 7. TIME-WAIT 是什么，为什么必须等待 2MLS

TIME-WAIT 是一种 TCP 状态。等待 2MLS 可以保证客户端最后一个报文段能够到达服务器，如果未到达，服务器则会超时重传连接释放报文段，使得客户端、服务器都可以正常进入到 CLOSE(关闭) 状态

> MSL是Maximum Segment Lifetime英文的缩写，中文可以译为“报文最大生存时间”，他是任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃。

 8. TCP 粘包问题

在 TCP 这种字节流协议上做应用层分包是网络编程的基本需求。分包指的是在发生一个消息(message)或一帧(frame)数据时，通过一定的处理，让接收方能从字节流中识别并截取(还原)出一个个消息。因此，“粘包问题”是个伪命题

长连接分包: 
- 消息长度固定
- 使用特殊的字符或字符串作为消息的边界，例如 HTTP 协议的 headers 以“\r\n”为字段的分隔符
- 在每条消息的头部加一个长度字段，这恐怕是最常见的做法
- 利用消息本身的格式来分包，例如 XML 格式的消息中 `<root>`...`</root>` 的配对，或者 JSON 格式中的 { ... } 的配对。解析这种消息格式通常会用到状态机(state machine)

 9. UDP、TCP 区别，适用场景

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

UDP 适用场景

面向数据报方式、网络数据大多为短消息、拥有大量 Client、对数据安全性无特殊要求、网络负担非常重，但对响应速度要求高

 TCP 适用场景

文件传输(FTP HTTP 对数据准确性要求较高，速度可以相对慢)
发送或接收邮件(POP IMAP SMTP 对数据准确性要求高，非紧急应用)
远程登录(telnet SSH 对数据准确性有要求，有连接的概念)

 10. 建立 socket 需要哪些步骤

- 创建 socket
- 绑定 socket 到指定地址和端口
- 开始监听连接
- 读取客户端输入
- 关闭 socket

 11. DNS 主要作用是什么

计算机既可以被赋予 IP 地址，也可以被赋予主机名和域名。用户通常使用主机名或域名来访问对方的计算机，而不是直接通过 IP 地址访问

但要让计算机去理解名称，相对而言就变得困难，因为计算机更擅长处理一长串数字

为了解决上述问题，DNS 服务应运而生。DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名的服务

 12. HTTP 报文组成

HTTP 报文是由简单字符串组成，HTTP 报文都是纯文本，不是二进制代码，可以很方便地对其进行读写

从客户端发往服务器的 HTTP 报文称为请求报文(request message)。从服务器发往客户端的报文称为响应报文(response message)。HTTP 请求和响应报文的格式很类似

HTTP 报文组成部分

- 起始行：报文的第一行就是起始行，在请求报文中用来说明要做些什么，在响应报文中说明出现了什么情况
- 首部字段：起始行后面有零个或多个首部字段。每个首部字段都包含一个名字和一个值
- 主体：空行之后就是可选的报文主体了，其中包含了所有类型的数据

 13. HTTP 状态码

> HTTP 状态码用来告诉客户端，发生了什么事情，状态码位于响应的起始行中

 状态码分类

|状态码|整体范围|已定义范围|分类|
|-|-|-|-|
|1XX|100~199|100~101|信息提示|
|2XX|200~299|200~206|成功|
|3XX|300~399|300~305|重定向|
|4XX|400~499|400~415|客户端错误|
|5XX|500~599|500~505|服务器错误|

 常见状态码

|状态码|原因短语|含义|考察概率|
|-|-|-|-|
|200|OK|请求没有问题|###**|
|206|Partial Content|部分或 Range(范围) 请求|###|
|301|Moved Permanently|在请求的链接被移除时使用|###*|
|302|Found|在请求临时的链接使用|###*|
|304|Not Modified|资源未被修改可使用旧资源|###*|
|307|Temporary Redirect|在请求临时的链接使用|###*|
|400|Bad Request|告知客户端发送了错误请求|###**|
|403|Forbidden|请求被服务器拒绝|###**|
|404|Not Found|无法找到所请求的 URL|###**|
|413|Request entiry too large|请求实体过大|###|
|500|Internal Server Error|服务器遇到错误|###**|
|502|Bad Gateway|代理或网关错误(无法连接到其父网关)|###**|
|503|Service Unavailable|无法为请求提供服务|###**|
|504|Gateway Timeout|代理或网关超时(等待另一服务器响应超时)|###**|

 14. 常见的 HTTP 方法

HTTP 请求方法用于告诉服务器要做什么。HTTP 规范中定义了一组常用的请求方法。

 GET 方法

GET 是最常用的方法。通常用于请求服务器发送某个资源。HTTP/1.1 要求服务器实现此方法

 POST 方法

POST 方法起初是用来向服务器输入数据的。实际上，通常会用它来支持 HTML 的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到它要去的地方（比如，送到一个服务器网关程序中，然后由这个程序对其进行处理）

 DELETE

DELETE 方法所做的事情就是请服务器删除请求 URL 所指定的资源。但是，客户端应用程序无法保证删除操作一定会被执行。因为 HTTP 规范允许服务器在不通知客户端的情况下撤销请求

 16. HTTP 优缺点

基于应用级的接口，使用方便

传输速度慢，数据包大；如实现实时交互，服务器性能压力大；数据传输安全性差

 17. HTTPS 通信原理

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

 建立安全传输

在未加密 HTTP 中，客户端会打开一条到 Web 服务器端口 80 的 TCP 连接，发送一条请求报文，接收一条响应报文，关闭连接

由于 SSL 安全层的存在，HTTPS 中这个过程会略微复杂一些。在 HTTPS 中，客户端首先打开一条到 Web 服务器端口 443（安全 HTTP 的默认端口）的连接。一旦建立了 TCP 连接，客户端和服务器就会初始化 SSL 层，对加密参数进行沟通，并交换密钥。握手完成之后，SSL 初始化就完成了，客户端就可以将请求报文发送给安全层了。在将这些报文发送给 TCP 之前，要先对其进行加密

 SSL 握手

在发送已加密的 HTTP 报文之前，客户端和服务器要进行一次 SSL 握手，在这个握手过程中，它们要完成以下工作

- 交换协议版本号
- 选择一个两端都了解的密码
- 对两端的身份进行认证
- 生成临时的会话密钥，以便加密信道

在通过网络传输任何已加密的 HTTP 数据之前，SSL 已经发送了一组握手数据来建立通信连接了

这是 SSL 握手的简化版本。根据 SSL 的使用方式，握手过程可能会复杂一些，但总
的思想就是这样

 服务器证书

SSL 支持双向认证，将服务器证书承载回客户端，再将客户端的证书回送给服务器。而现在，浏览时并不经常使用客户端证书。大部分用户甚至都没有自己的客户端证书。服务器可以要求使用客户端证书，但实际中很少出现这种情况。

另一方面，安全 HTTPS 事务总是要求使用服务器证书的。在一个 Web 服务器上执行安全事务，比如提交信用卡信息时，你总是希望是在与你所认为的那个组织对话。由知名权威机构签发的服务器证书可以帮助你在发送信用卡或私人信息之前评估你对服务器的信任度。

服务器证书是一个显示了组织的名称、地址、服务器 DNS 域名以及其他信息的 X.509 v3 派生证书。你和你所用的客户端软件可以检查证书，以确保所有的信息都是可信的

 站点证书的有效性

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

 18. HTTP 2.0

多路复用、客户端拉拽/服务器推送、流量控制、WebSocket

 19. WebSocket

WebSocket 是一种通信协议，定义了一个全双工通信信道，仅通过 Web 上的一个 Socket 即可进行通信

 主要特点

- 推送功能：支持由服务器向客户端推送数据的推送功能
- 减少通信量：只要建立起 WebSocket 连接，就希望一直保持连接状态

 20. IPv6 与 IPv4 有什么变化

更大的地址空间、扩展的地址层次结构、灵活的首部格式、改进的选项、允许协议继续扩充、支持资源的预分配

 21. 什么是心跳机制

心跳机制是定时发送一个自定义的结构体(心跳包)，让对方知道自己还活着，以确保连接的有效性的机制

 22. 什么是长连接

长连接，指在一个连接上可以连续发送多个数据包，在连接保持期间，如果没有数据包发送，需要双方发链路检测包
```
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