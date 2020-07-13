<TOC />
## 关于读取Oracle数据库小数点前面0不显示问题
```
to_char(af.Cash,'fm9999990.999999') as Cash,

含义：
①其9代表：如果存在数字则显示数字，不存在则显示空格
②其0代表：如果存在数字则显示数字，不存在则显示0，即占位符。
③其FM代表：删除如果是因9带来的空格，则删除之
```

## sqldeveloper的安装及其使用教程
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

## SQLyog详细使用教程
 
SQLyog是一款功能强大的mysql数据库管理工具，这篇文章为大家详细介绍SQLyog的使用方法！

SQLyog使用教程
1. 如何创建数据库

第一步，右键根结点->创建数据库。

SQLyog怎么用？SQLyog详细使用教程
第二步，填写数据库名称，选择默认字符集等后点确定即可。

SQLyog怎么用？SQLyog详细使用教程
2. 如何备份和还原数据库

2.1 备份数据库的步骤

第一步：右键要备份的数据库->备份/导出->备份数据库。

SQLyog怎么用？SQLyog详细使用教程
第二步，在SQL转储界面上根据自己需要进行设置。

SQLyog怎么用？SQLyog详细使用教程
1：可根据需要备份数据、结构或者两者。

2：选择备份文件存储的位置。

3：对自己要备份的内容进行勾选。

4：根据自己需要选择写入文件的内容，如Create Database，Use Database等语句。

第三步，点击导出即可。

2.2 还原数据库的步骤

第一步，右键要还原到的数据库->导入->执行SQL脚本。

SQLyog怎么用？SQLyog详细使用教程
第二步，在还原数据库界面选择以前备份好的文件。

SQLyog怎么用？SQLyog详细使用教程
第三步，点击‘执行’即可。

3. 关于数据库表的一些操作

3.1 备份表数据

右键选择某数据库下的表->备份表作为SQL转储。

SQLyog怎么用？SQLyog详细使用教程
以下步骤可以参考备份数据库的方法。

3.2 还原表数据 与还原数据库的步骤相同。

3.3 如何查看并修改表结构和索引

第一步，右键表->改变表，打开关于表的详细信息。

SQLyog怎么用？SQLyog详细使用教程
第二步，在打开的界面，修改表结构和索引等信息。比如，修改把索引属性修改为FULLTEXT的

SQLyog怎么用？SQLyog详细使用教程
4. 如何创建用户及授权用户对数据库操作

第一种方法：在SQLyog中添加用户并进行授权。

第一步，以root账户的身份创建新连接。

第二步，选择工具->用户管理。

SQLyog怎么用？SQLyog详细使用教程
第二步,填写用户名，选择主机localhost或%，输入密码，保存改动即可创建用户。

SQLyog怎么用？SQLyog详细使用教程
第三步，在第二步保存改动后右上角用户即相应的改为iyou@%或iyou@localhost(图中1);然后再选择要授权的数据库，比如是exjc6(图中2);接下来通过在具体操作前进行勾选给选择的数据库exjc6进行授予该操作的权利。

SQLyog怎么用？SQLyog详细使用教程
第二种方法：在命令窗口中进行创建用户和授权。 使用命令进行数据库授权步骤如下：

@>mysql–u root –p

mysql>grant all privileges on exjc6.* to iyou@’%’ (identified by PASSWORD(‘123’));

mysql>flush privileges;

说明： all表示所有权限(包括增、删、改、查等权限);

exjc6.*表示对exjc6数据库有所有操作权限， *.* 表示对所有数据库有所有操作权限;

iyou为添加的用户名; 123为密码;

%为匹配的所有主机，即所有主机都可访问该exjc6数据库，localhost表示匹配本机;

执行完会在mysql.user表插入一条记录,并添加一个名为iyou的用户;

上面的信息可以指定如grant select,update on exjc6.* to iyou@localhost identified by '123"。

5. 如何比较两个数据库之间的的差别并进行同步

第一步，选择高级工具->架构同步工具。

SQLyog怎么用？SQLyog详细使用教程
第二步，选择要比较的两个数据库，要修改的数据库放在右侧的目标源中。

SQLyog怎么用？SQLyog详细使用教程
第三步，根据需要可以选择仅比较表格或比较全部对象(表、函数、触发器、存储过程等)，然后单击比较，即可出现比较的结果。结果中通过具体颜色标注出创建或修改的对象，并在左下角显示出具体的内容。 第四步，点击执行所有，即可把右侧数据库同步成与左侧数据库结构相同的数据库。需要说明的是这种同步只包含表结构，不包含表数据。

6. SQLyog过期，如何破解

我使用的是SQLyog 9.63，只有一个月的试用期，如何超过了试用期，怎么办? 在这时我可以告诉大家一个解决方案，那就是通过删除注册表项，再获得一个月的试用期。

具体的操作方法如下: 第一步，运行窗口中输入regedit，回车进入注册表编辑器。

第二步，按路径HKEY_CURRENT_USER->SoftWare找到红色标注的{8E919370-*}项。

SQLyog怎么用？SQLyog详细使用教程
第三步，右键该项，选择删除，再点击是即可。

## oracle超长字符查询
```
$sql = "select ID,REQUESTMETHOD,VERSION,APPID,ISCOMPANY,DATAFORMAT,TIMESTAMPNUMS,NONCENUMS,REQUESTDATA,SIGNSTR,REQUESTCODE,STATUS,RESULTINFO,CREATETIME,UPDATETIME,DELETEDMARK,
          dbms_lob.substr(REQUESTDATAINFO,4000,1) piece1,
  case when dbms_lob.getlength(REQUESTDATAINFO) > 4000 then dbms_lob.substr(REQUESTDATAINFO,4000,4001) end piece2,
  case when dbms_lob.getlength(REQUESTDATAINFO) > 8000 then dbms_lob.substr(REQUESTDATAINFO,4000,8001) end piece3,
  case when dbms_lob.getlength(REQUESTDATAINFO) > 12000 then dbms_lob.substr(REQUESTDATAINFO,4000,12001) end piece4,
  case when dbms_lob.getlength(REQUESTDATAINFO) > 16000 then dbms_lob.substr(REQUESTDATAINFO,4000,16001) end piece5,
  case when dbms_lob.getlength(REQUESTDATAINFO) > 20000 then dbms_lob.substr(REQUESTDATAINFO,4000,20001) end piece6,
  case when dbms_lob.getlength(REQUESTDATAINFO) > 24000 then dbms_lob.substr(REQUESTDATAINFO,4000,24001) end piece7,
  case when dbms_lob.getlength(REQUESTDATAINFO) > 28000 then dbms_lob.substr(REQUESTDATAINFO,4000,28001) end piece8
    from attendancepush where DeletedMark=0 AND Status=0 ";
```
## mysql 查询项目名称重复的项目
```
select * from project where name in (select   name from   project where deletedmark = 0 group by   name having count(name) > 1);
```

## Mysql 查询今日的数据、近七天的数据、近30天的数据，以此类推
```
查询近七天的数据
SELECT * FROM test_date where DATE_SUB(CURDATE(), INTERVAL 6 DAY) <= create_date
查询近30天的数据：
SELECT * FROM test_date where DATE_SUB(CURDATE(), INTERVAL 29 DAY) <= create_date;
查询今天的数据：
SELECT * FROM test_date where DATE_SUB(CURDATE(), INTERVAL 0 DAY) <= create_date
```
DATE_SUB() 函数从日期减去指定的时间间隔。

DATE_SUB(date,INTERVAL expr type)，6表示截取的天数，最后的DAY表示按天来进行截取。

CURDATE()表示当前的系统时间（日期），另有CURTIME（）表示当前的系统时间（时分秒）。

## mysql查找数据库中是否已经存在某张表
select count(*) from information_schema.TABLES t where t.TABLE_SCHEMA ="数据库名" and t.TABLE_NAME ="数据库表名";

##　mysql导入导出数据

**导出数据库**

- 导出完整数据：表结构+数据

`mysqldump -u用户名 -p 数据库名 > 数据库名.sql`

`# /usr/local/mysql/bin/mysqldump -uroot -p abc > abc.sql`

- 只导出表结构

`mysqldump -u用户名 -p -d 数据库名 > 数据库名.sql`

`#/usr/local/mysql/bin/mysqldump -uroot -p -d abc > abc.sql`

**导入数据库**

- 使用 mysql 命令导入

`mysql -u用户名 -p 数据库名 < 数据库名.sql`

`# mysql -uroot -p123456 < abc.sql`

- 使用 source 命令导入

```
mysql> create database abc;      # 创建数据库
mysql> use abc;                  # 使用已创建的数据库 
mysql> set names utf8;           # 设置编码
mysql> source /home/abc/abc.sql  # 导入备份数据库
```

