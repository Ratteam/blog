sqldeveloper的安装及其使用教程
1.安装
下载地址：http://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index-098778.html

解压之后，运行目录下面的文件即可。

sqldeveloper是基于jdbc的，所以需要创建连接。

打开SQL工作表：工具-->SQL工作表  或者使用快捷键Alt+F10

选择连接

2.连接Oracle数据库及其使用

比如输入一个1

3 连接MySQL数据库及其使用

完成之后，点击新建连接，里面就可以看到MySQL数据库了。需要连接其它数据库也是一样，添加jdbc驱动就可以了。

然后点击连接

查看当前正在使用得数据库

执行查询

4 PL/SQL文档的查看
本地离线文档

在线文档
网址：https://docs.oracle.com/pls/db102/homepage。操作和上面一样。

使用命令查看程序包
desc 程序包的名字

```
SQL> desc dbms_output
PROCEDURE DISABLE
PROCEDURE ENABLE
 Argument Name                  Type                    In/Out Default?
 ------------------------------ ----------------------- ------ --------
 BUFFER_SIZE                    NUMBER(38)              IN     DEFAULT
PROCEDURE GET_LINE
 Argument Name                  Type                    In/Out Default?
 ------------------------------ ----------------------- ------ --------
 LINE                           VARCHAR2                OUT
 STATUS                         NUMBER(38)              OUT
PROCEDURE GET_LINES
 Argument Name                  Type                    In/Out Default?
 ------------------------------ ----------------------- ------ --------
 LINES                          TABLE OF VARCHAR2(32767) OUT
 NUMLINES                       NUMBER(38)              IN/OUT
PROCEDURE GET_LINES
 Argument Name                  Type                    In/Out Default?
 ------------------------------ ----------------------- ------ --------
 LINES                          DBMSOUTPUT_LINESARRAY   OUT
 NUMLINES                       NUMBER(38)              IN/OUT
PROCEDURE NEW_LINE
PROCEDURE PUT
 Argument Name                  Type                    In/Out Default?
 ------------------------------ ----------------------- ------ --------
 A                              VARCHAR2                IN
PROCEDURE PUT_LINE
 Argument Name                  Type                    In/Out Default?
 ------------------------------ ----------------------- ------ --------
 A                              VARCHAR2                IN
```