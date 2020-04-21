# g++编译器使用指南
> gcc and g++分别是GNU的c & c++编译器。

## g++编译时的步骤
gcc/g++在执行编译的时候一般有下面4步：

⒈预处理，生成.i的文件[预处理器cpp]。
⒉将预处理后的文件转换成汇编语言，生成文件.s[编译器egcs]。
⒊由汇编变为目标代码（机器代码）生成.o的文件[汇编器as]。
⒋连接目标代码，生成可执行程序[链接器ld]。

## 常用操作

```
$ gcc main.cpp -lstdc++ -o main
```
>下面是一个保存在文件 helloworld.cpp 中一个简单的 C++ 程序的代码：
```
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}
```
>最简单的编译方式：
```
$ g++ helloworld.cpp
```
>由于命令行中未指定可执行程序的文件名，编译器采用默认的 a.out。程序可以这样来运行：
```
$ ./a.out
Hello, world!
```
>通常我们使用 -o 选项指定可执行程序的文件名，以下实例生成一个 helloworld 的可执行文件：
```
$ g++ helloworld.cpp -o helloworld
```
>执行 helloworld:
```
$ ./helloworld
Hello, world!
```
>如果是多个 C++ 代码文件，如 runoob1.cpp、runoob2.cpp，编译命令如下：
```
$ g++ runoob1.cpp runoob2.cpp -o runoob
```
>生成一个 runoob 可执行文件。

>g++ 有些系统默认是使用 C++98，我们可以指定使用 C++11 来编译 main.cpp 文件：
```
g++ -g -Wall -std=c++11 main.cpp
```
g++ 常用命令选项
```
选项	解释
-ansi	只支持 ANSI 标准的 C 语法。这一选项将禁止 GNU C 的某些特色， 例如 asm 或 typeof 关键词。
-c 	只编译并生成目标文件。
-DMACRO 	以字符串"1"定义 MACRO 宏。
-DMACRO=DEFN	以字符串"DEFN"定义 MACRO 宏。
-E 	只运行 C 预编译器。
-g 	生成调试信息。GNU 调试器可利用该信息。
-IDIRECTORY 	指定额外的头文件搜索路径DIRECTORY。
-LDIRECTORY	指定额外的函数库搜索路径DIRECTORY。
-lLIBRARY	连接时搜索指定的函数库LIBRARY。
-m486 	针对 486 进行代码优化。
-o	FILE 生成指定的输出文件。用在生成可执行文件时。
-O0	不进行优化处理。
-O 	或 -O1 优化生成代码。
-O2	进一步优化。
-O3	比 -O2 更进一步优化，包括 inline 函数。
-shared	生成共享目标文件。通常用在建立共享库时。
-static	禁止使用共享连接。
-UMACRO 	取消对 MACRO 宏的定义。
-w	不生成任何警告信息。
-Wall 	生成所有警告信息。
```
