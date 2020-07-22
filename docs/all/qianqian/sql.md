<TOC />
## Oracle expdp导出导入数据
```
-- 切换权限
su - oracle

-- 导出数据(注意去除日志等无用的表)
expdp  root/123456@10.120.82.1/smz directory=exp_dir dumpfile=smz_2207_%U.dmp logfile=smz_2207.log exclude=table:\"in \(\'ATTENDANCEPUSH\' ,\'OPERATELOG\' ,\'ZJUPLOADRECORD\',\'UPLOADLOG\' \)\" owner=root compression=data_only parallel=4 cluster=N

-- 进入要导入数据的服务器
ssh 192.168.10.128

-- 切换权限
su - oracle

-- 进去oracle命令行
sqlplus / as sysdba

-- 删除用户
DROP USER c##root CASCADE;

-- 删除表空间
DROP TABLESPACE root INCLUDING CONTENTS AND DATAFILES;

-- 创建表空间
create tablespace root
logging 
datafile '/home/oracle/oracledatabase/app/admin/MIGRANTWORK/root.dbf'
size 5000m 
autoextend on 
next 50m 
extent management local;

-- 创建用户，授权
create user c##root identified by 123456 default tablespace root; 

-- 用户授予目录权限
grant read,write on directory c701 to c##root;

-- 用户授权数据库操作权限
GRANT CREATE ANY VIEW,DROP ANY VIEW,CONNECT,RESOURCE,CREATE SESSION,DBA TO c##root;

-- 退出sql操作命令
exit

-- 导入数据(注意磁盘空间是否足够)
impdp c##root/123456 directory=c701 dumpfile=smz_2207_01.dmp,smz_2207_02.dmp,smz_2207_03.dmp,smz_2207_04.dmp,smz_2207_05.dmp,smz_2207_06.dmp remap_schema=root:c##root  TRANSFORM=segment_attributes:n;

-- 问题：删除用户时出现ORA-01940: cannot drop a user that is currently connected
-- 查询是否有用户连接数据库
select username,sid,serial#,paddr from v$session where username='C##HNPRD';
select saddr,sid,serial#,paddr,username,status from v$session where username is not null;
-- 关闭这些连接
alter system kill session '2664,38155';
-- 删除用户和表空间
DROP USER c##root CASCADE;
DROP TABLESPACE root INCLUDING CONTENTS AND DATAFILES;

-- 问题：删除表空间发现磁盘空间没增加
-- 查看空间发现临时表文件大，怀疑被缓存，重启解决
du -h --max-depth=1 /home/oracle/oracledatabase
-- 重启oracle
sqlplus / as sysdba
shutdown immediate
startup

-- 问题：导入数据提示找不到文件
-- 将文件放到提示中的目录即可 mv /dmp/* /home/oracle/dump/
impdp c##hnprd/E2r201800 directory=c701 dumpfile=smz_a20200720_01.dmp,smz_a20200720_02.dmp,smz_a20200720_03.dmp,smz_a20200720_04.dmp,smz_a20200720_05.dmp,smz_a20200720_06.dmp remap_schema=hnprd:c##hnprd  TRANSFORM=segment_attributes:n;

-- 问题：磁盘空间被占用满
-- 归档日志目录
/home/oracle/oracledatabase/app/product/11.2.0/dbhome_1/dbs
-- 删除归档日志
cd /home/oracle/oracledatabase/app/product/11.2.0/dbhome_1/dbs 
rm -rf arch1_26* 

-- 脚本：定时删除归档日志
#/bin/bash
cd /home/oracle/oracledatabase/app/product/11.2.0/dbhome_1/dbs
find ./ -mtime +1 -name "arch1_*.dbf" -exec rm -rf {} \;

-- 错误：xshell窗口挂了，导致导入数据库终止
-- 使用screen挂在后台
yun install screen
screen -R oracle(关闭xshell后重新执行该命令则可进入挂起的后台)
执行导入命令
```


## Oracle expdp导出数据
Oracle EXPDP导出数据
上一章介绍了EXP导出数据，在数据量较大的情况下，由于导出的效率较低，所以EXPDP是Oracle 10g开始引入的数据泵技术，数据泵技术是在数据库之间或者在数据库与操作系统之间传输数据的工具。

EXPDP是数据泵导出的工具，它可以把数据库中的对象选择性的导出到操作系统中。比如：表、用户、表空间、数据库等。

使用EXPDP工具与EXP不同的是，在使用EXPDP时要先创建目录对象，通过这个对象就可以找到要备份数据的数据库服务器，并且使EXPDP工具备份出来的数据必须存放在目录对象对应的操作系统的目录中。

下面将分步讲解如何使用EXPDP导出数据：

1、创建目录对象：

创建目录对象是使用EXPDP工具进行导出的前提。

创建目录对象的语法如下:

CREATE DIRECTORY directoryname AS  'filename'
语法解析：

（1）、directoryname:创建的目录名称。

（2）、filename:存放数据的文件夹名。

2、给使用目录的用户赋权限：

新创建的目录对象不是任何用户都可以使用的，只有拥有该目录使用权的用户才能使用，所以要为使用该目录的用户赋一个权限。笔者要导出的数据都在STUDENT(学生)用户下，那么赋权限的语句如下:


GRANT READ,WRITE ON DIRECTORY directoryname TO student
这里，directoryname就是创建的目录名称。

案例1、创建目录对象dir并给student用户授予读写权限，代码如下：

--创建目录对象dir，数据文件存放的路径为d:/expdpdi
create directory dir as 'd:/expdpdir';
--给用户授予目录对象的读写权限
grant  read,write on directory dir to student ;


3、选择性导出数据库数据

前面已经创建好了目录，使用EXPDP工具导出数据的方法与EXP导出的方法类似，也是在DOS的命令窗口中实现的。

Oracle expdp导出表数据：

expdp student/123456@orcl dumpfile=student.dmp logfile=student.log tables= stuinfo directory=dir
命令解析：

（1）、dumpfile指定导出的dmp文件的名字。

（2）、logfile指定导出时的日志文件的 名字。

（3）、tables指定备份的表结构，可以导出多个表，通过（table1，table2...,tablen）进行选择

（4）、directory指定导出的目录对象，目录对象中有对应的数据文件保存在哪个目录下。

结果如下：

oracle expdp导出

然后，发现在D:\EXPDPDIR目录下已经生成了STUDENT.DMP的备份文件。

1548861364985_416926.png



Oracle expdp导出表数据（带条件）：

expdp student/123456@orcl dumpfile=student_1.dmp logfile=student_1.log tables= stuinfo directory=dir 
query="'where sex=1'"
query：指定要添加的条件，把表中的数据进行过滤导出

Oracle expdp导出表空间：

expdp student/123456@orcl dumpfile=student_tablespace.dmp logfile=student_tablespace.log 
tablespaces=(student)  directory=dir
tablespaces：指定要导出的表空间的名字。

Oracle expdp导出用户：

expdp student/123456@orcl dumpfile=student_user.dmp logfile=student_user.log 
owner=(student)  directory=dir
owner：指定要导出的用户，前提条件是具有该用户的操作权限

Oracle expdp导出整个库：

expdp student/123456@orcl dumpfile=full.dmp logfile=full.log 
full=y  directory=dir
full=y指的是导出整个数据库，前提是该用户具有管理员权限。

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

