<TOC />

## Oracle的日期时间范围查询
AND A.CREATETIME between to_date('2020-04-10','yyyy-MM-dd') AND to_date('2020-04-13','yyyy-MM-dd');  

## oracle语句
> 查询最近七天内在数据
```sql
select * from table
where  datetime> to_char(sysdate-7,'yyyymmdd');
```
> 修改oracle有数据的字段类型
```sql
-- 修改字段类型
alter table BANKLIST rename column BANKCODE to BANKCODEBAK;
alter table BANKLIST add BANKCODE VARCHAR2(50);
update BANKLIST set BANKCODE=trim(BANKCODEBAK);
alter table BANKLIST drop column BANKCODEBAK;
COMMENT ON COLUMN "BANKLIST".BANKCODE IS '管辖';
```

## oracle查看被锁的表及解除锁
```
查询哪些对象被锁

select object_name, machine, s.sid, s.serial#
from v$locked_object l, dba_objects o, v$session s
where l.object_id　 = 　o.object_id
and l.session_id = s.sid;
 
下面的语句用来杀死一个进程：

alter system kill session '24,111'; --(其中24,111分别是上面查询出的sid,serial#)

获得进程(线程)号

select spid, osuser, s.PROGRAM
from v$session s, v$process p
where s.PADDR = p.ADDR
and s.SID = '425';
 
杀进程

kill - 9 26099 --查询出的spid

```
## oracle 分页查询数据重复问题
oracle 分页查询数据的时候必须要有排序；
排序的字段必须返回必须是唯一的，比如主键，或者添加多个排序。
`ORDER BY ID;`

## Oracle中序列（Sequence）详解
```
一 序列定义

 

序列(SEQUENCE)是序列号生成器，可以为表中的行自动生成序列号，产生一组等间隔的数值(类型为数字)。不占用磁盘空间，占用内存。

其主要用途是生成表的主键值，可以在插入语句中引用，也可以通过查询检查当前值，或使序列增至下一个值。

 

二 创建序列

 

创建序列需要CREATE SEQUENCE系统权限。序列的创建语法如下：

　　CREATE SEQUENCE 序列名

　　[INCREMENT BY n]

　　[START WITH n]

　　[{MAXVALUE/ MINVALUE n| NOMAXVALUE}]

　　[{CYCLE|NOCYCLE}]

　　[{CACHE n| NOCACHE}];

    其中：

1)  INCREMENT BY用于定义序列的步长，如果省略，则默认为1，如果出现负值，则代表Oracle序列的值是按照此步长递减的。

2)  START WITH 定义序列的初始值(即产生的第一个值)，默认为1。

3)  MAXVALUE 定义序列生成器能产生的最大值。选项NOMAXVALUE是默认选项，代表没有最大值定义，这时对于递增Oracle序列，系统能够产生的最大值是10的27次方;对于递减序列，最大值是-1。

4)  MINVALUE定义序列生成器能产生的最小值。选项NOMAXVALUE是默认选项，代表没有最小值定义，这时对于递减序列，系统能够产生的最小值是?10的26次方;对于递增序列，最小值是1。

5)  CYCLE和NOCYCLE 表示当序列生成器的值达到限制值后是否循环。CYCLE代表循环，NOCYCLE代表不循环。如果循环，则当递增序列达到最大值时，循环到最小值;对于递减序列达到最小值时，循环到最大值。如果不循环，达到限制值后，继续产生新值就会发生错误。

6)  CACHE(缓冲)定义存放序列的内存块的大小，默认为20。NOCACHE表示不对序列进行内存缓冲。对序列进行内存缓冲，可以改善序列的性能。

大量语句发生请求，申请序列时，为了避免序列在运用层实现序列而引起的性能瓶颈。Oracle序列允许将序列提前生成 cache x个先存入内存，在发生大量申请序列语句时，可直接到运行最快的内存中去得到序列。但cache个数也不能设置太大，因为在数据库重启时，会清空内存信息，预存在内存中的序列会丢失，当数据库再次启动后，序列从上次内存中最大的序列号+1 开始存入cache x个。这种情况也能会在数据库关闭时也会导致序号不连续。

7)  NEXTVAL 返回序列中下一个有效的值，任何用户都可以引用。

8)  CURRVAL 中存放序列的当前值,NEXTVAL 应在 CURRVAL 之前指定 ，二者应同时有效。

 

例子：

复制代码
SQL> create sequence t1_seq increment by 1 start with 1;

SYS@orclasm > drop sequence t1_seq;


Sequence dropped.


SYS@orclasm > create sequence t1_seq increment by -1 start with  -5;


Sequence created.


SYS@orclasm > select t1_seq.currval,t1_seq.nextval from dual;


   CURRVAL    NEXTVAL
---------- ----------
        -5         -5


SYS@orclasm > select t1_seq.currval,t1_seq.nextval from dual;


   CURRVAL    NEXTVAL
---------- ----------
        -6         -6


SYS@orclasm > select t1_seq.currval,t1_seq.nextval from dual;


   CURRVAL    NEXTVAL
---------- ----------
        -7         -7
复制代码
 

 

三 使用序列

 

调用NEXTVAL将生成序列中的下一个序列号，调用时要指出序列名，即用以下方式调用: 序

列名.NEXTVAL

CURRVAL用于产生序列的当前值，无论调用多少次都不会产生序列的下一个值。如果序列还

没有通过调用NEXTVAL产生过序列的下一个值，先引用CURRVAL没有意义。调用CURRVAL

的方法同上，要指出序列名，即用以下方式调用:序列名.CURRVAL

复制代码
SQL> create table t1(id number,qq number,ww number);

SQL> insert into t1 values(t1_seq.nextval,1,1);

1 row created.

SQL> /

1 row created.

SQL> /

 

SQL> /

SQL> /

1 row created.

 

SQL> select * from t1;

 

        ID         QQ         WW

----------     ----------     ----------

         1          1          1

         2          1          1

         3          1          1

         4          1          1

         5          1          1

 

SQL> select t1_seq.currval from dual;

 

   CURRVAL

----------

         5

 

SQL> select t1_seq.nextval from dual;

 

   NEXTVAL

----------

         6

 

SQL> select t1_seq.nextval from dual;

 

   NEXTVAL

----------

         7
复制代码
 

 

 

四 修改序列

 

修改序列的注意事项：

1  必须是序列的拥有者或对序列有 ALTER any sequence权限

2  只有将来的序列值会被改变

3  改变序列的初始值只能通过删除序列之后重建序列的方法实现

 

Alter sequence示例：

ALTER SEQUENCE emp_sequence INCREMENT BY 10 MAXVALUE 10000 CYCLE -- 到10000后从头开始 NOCACHE ;
 

 可以影响Sequence的初始化参数：

 SEQUENCE_CACHE_ENTRIES =设置能同时被cache的sequence数目。

复制代码
SQL> alter sequence t1_seq increment by 2 maxvalue 10 cycle;

alter sequence t1_seq increment by 2 maxvalue 10 cycle

*

ERROR at line 1:

ORA-04013: number to CACHE must be less than one cycle

 

SQL> alter sequence t1_seq increment by 2 maxvalue 40 cycle;

Sequence altered.

 

SQL> insert into t1 values(t1_seq.nextval,1,1);

/

/

……….

/

SQL> select * from t1;

        ID         QQ         WW

----------     ----------     ----------

         1          1          1

         2          1          1

         3          1          1

         4          1          1

         5          1          1

         9          1          1

        11          1          1

        13          1          1

        15          1          1

        17          1          1

       ………………………………………………..

        37          1          1

        39          1          1

         1          1          1

         3          1          1

         5          1          1

 

24 rows selected.
复制代码
 

 

 

五 查询序列

 

1  通过数据字典USER_OBJECTS可以查看用户拥有的序列。

2  通过数据字典USER_SEQUENCES可以查看序列的设置。

　　例：查看用户的序列：

SELECT SEQUENCE_NAME,MIN_VALUE,MAX_VALUE,INCREMENT_BY,LAST_NUMBER FROM USER_SEQUENCES;
 

　　执行结果：

　　

SEQUENCE_NAME MIN_VALUE MAX_VALUE INCREMENT_BY LAST_NUMBER

 
 

复制代码
SQL> select object_name,object_type from user_objects;

 

OBJECT_NAM   OBJECT_TYPE

----------        -------------------

T1_SEQ        SEQUENCE

T1            TABLE

 

SQL> select sequence_name,increment_by,cycle_flag,cache_size from user_sequences;

SEQUENCE_N  INCREMENT_BY  CYCLE_FLAG   CACHE_SIZE

----------         ------------       ----------       ----------

T1_SEQ            2             Y            20
复制代码
 

 

六 删除序列

 

SQL> drop sequence t1_seq;
 

 

 


序列作为主键使用的原理、优缺点讨论 

这几天和同事一直在讨论关于表设计中主键选择的问题，用sequence作为主键究竟有什么好处，又有什么缺点，尤其是有些事务场景上下文需要用到创建的序列值，如何用？其实我想说的是，可能只是一个很简单的概念，可能深入理解，还是有很多未知的知识，当然也就可能会有一些容易忽略但又可能很关键的坑，只有碰了才知道。。。
以下是总结摘要，如有疏漏，还请过路的各位大侠赐教。

 

 
1、首先说下seq.nextval主要有以下两种使用场景：
(1). 如果一个事务中只是INSERT时需要序列，其他地方不会需要这个序列，那么只需要在INSERT ... VALUES (seq.nextval ...)语句中使用即可。
(2). 如果一个事务中INSERT一张表后，还需要插入时的主键ID值，作为外键插入其他表，那么就需要在INSERT第一张表前使用select seq.nextval from dual提前获取可用的ID保存到一个变量中，为后面使用。

2、其次可以简单说下调用序列的原理，只有理解了序列的原理，才能有助于我们知道如何正确使用序列。
使用序列时Oracle内部大体是按照如下步骤进行：
(1). 一个序列会被定义到Oracle内部的一张数据字典表(seq$)的一行。
(2). 第一次使用序列，序列的起始值会加上缓存大小，然后更新回行。
(3). Oracle内部会自动跟踪内存中的两个值，当前值和目标值。
(4). 每次有回话调用seq.nextval，Oracle会递增当前值，然后检查是否超过了目标值，再返回结果。
(5). 如果当前值和目标值相同，Oracle会更新数据字典表中的行，为目标值加上缓存大小，同时内存中产生了一个新的目标值。
例如create sequence seq cache 20;这样一序列。名称为seq的序列，缓存大小是20，默认初始值是1，步长默认是1。

当使用了一次seq.nextval后，可以看HIGHWATER字段值为21，即目标值1+缓存大小20=21。

当执行20次后，seq.nextval值变为21，此时HIGHWATER字段值是41，即目标值21+缓存大小20=41。

也就是每调用seq.nextval值20次，会更新一次seq$表，那么问题来了，如果cache值较小，且序列使用的频率较高，那么会对seq$表有频繁的更新操作，日志量会增加，尤其在RAC下，更新该行的时候，该数据块会在节点间不停的传送，就会产生可能的争用，这种问题会被放大。因此为了减少这种情况，我们可以将cache缓存值设置大一些，例如1000，减少对字典表的更新。
序列还有一个问题，就是cache缓存是实例级的，对于RAC，比如第一个节点使用序列时会分配1-20，第二个节点会被分配21-40，Oracle保证不会重复，但若节点crash了，比如节点1坏了，那么序列就会出现断号，节点1再次使用时，只会从41-60，由于我们用主键只为了标示唯一，不关心段号，也不关心产生的顺序，所以这些可以忽略。
 
注：最近在讨论某系统和一个外系统做全局事务的事情，本想用这个主键作为两系统传输的一部分，用于控制全局事务，且用其作为判断交易先后顺序的依据，这是不太符合要求的，因为是RAC，序列是基于实例级cache，那么如果不能保证某一类型的交易总在一个节点上执行，那么不同次交易产生的主键序列值可能不是递增的，例如节点1处理一次交易，产生序列是1，节点2处理一次交易，产生序列是21，此时节点1再处理一次交易，产生序列是2；除非设置序列为order，但这样在RAC就有可能产生资源争用的问题，因为为了保证多节点间每次产生的序列值是递增的，每次产生就需要多节点间判断当前值后，才能知道下一个值是多少，而且会有额外的锁，保证同一时间只有一个节点在做这个操作，当然究竟是否会产生资源争用，还是要依据实际的业务并发量，或者压力测试才能证明，这里只是说可能会这样的问题，不是一定会，否则Oracle就不会有提供这种order的创建属性，凡事不绝对。

3、结合(1)的场景，
(1). 如果一个事务中只是INSERT时需要序列，其他地方不会需要这个序列，那么只需要在INSERT ... VALUES (seq.nextval ...)语句中使用即可。
> 这个场景下，如果序列cache设置为1000，调用100次nextval几乎没有影响。
(2). 如果一个事务中INSERT一张表后，还需要插入时的主键ID值，作为外键插入其他表，那么就需要在INSERT第一张表前使用select seq.nextval from dual提前获取可用的ID保存到一个变量中，为后面使用。
> 这个场景，就有些说的了。如果是同一事务中需要用到之前的序列值，那么就需要提前用select seq.nextval from dual保存到变量中，(当然，如果是用PLSQL语句，则可以不用提前保存变量这步，但咱们的应用中不适用，就不多说了)。
```

## 浅谈Oracle归档日志
```
什么是归档日志
归档日志(Archive Log)是非活动的重做日志备份.通过使用归档日志,可以保留所有重做历史记录,当数据库处于ARCHIVELOG模式并进行日志切换式,后台进程ARCH会将重做日志的内容保存到归档日志中.当数据库出现介质失败时,使用数据文件备份,归档日志和重做日志可以完全恢复数据库。

如何开启归档模式
查询是否开启归档
[oracle@osc ~]$ sqlplus / as sysdba

SQL*Plus: Release 11.2.0.4.0 Production on Mon Nov 12 17:36:13 2018

Copyright (c) 1982, 2013, Oracle.  All rights reserved.


Connected to:
Oracle Database 11g Enterprise Edition Release 11.2.0.4.0 - 64bit Production
With the Partitioning, OLAP, Data Mining and Real Application Testing options

SQL> archive log list; 
Database log mode              No Archive Mode
Automatic archival             Disabled
Archive destination            USE_DB_RECOVERY_FILE_DEST
Oldest online log sequence     1124
Current log sequence           1126
由上可见，数据库未开启归档

开启归档模式
SQL> shutdown immediate;
Database closed.
Database dismounted.
ORACLE instance shut down.
SQL>  startup mount;
ORACLE instance started.

Total System Global Area 2421825536 bytes
Fixed Size                  2255632 bytes
Variable Size             620758256 bytes
Database Buffers         1778384896 bytes
Redo Buffers               20426752 bytes
Database mounted.
SQL> alter database archivelog;

Database altered.

SQL> alter database open;

Database altered.
再观察归档情况

SQL> archive log list; 
Database log mode              Archive Mode
Automatic archival             Enabled
Archive destination            USE_DB_RECOVERY_FILE_DEST
Oldest online log sequence     1124
Next log sequence to archive   1126
Current log sequence           1126
归档已经开启

经常会遇到的问题
错误代码:ORA-00257
在项目中可能经常会遇到ORA-00257归档写满这种情况,先看一下官方描述：

[oracle@osc ~]$ oerr ORA 00257
00257, 00000, "archiver error. Connect internal only, until freed."
// *Cause:  The archiver process received an error while trying to archive
//       a redo log.  If the problem is not resolved soon, the database
//       will stop executing transactions. The most likely cause of this
//       message is the destination device is out of space to store the
//       redo log file.
// *Action:  Check archiver trace file for a detailed description
//        of the problem. Also verify that the
//       device specified in the initialization parameter
//       ARCHIVE_LOG_DEST is set up properly for archiving.
也就是说当空间问题导致归档日志无法继续写入的时候会报错误，当前也只能允许内部链接。
这种情况下也只能最快速的清理归档日志。

清理归档日志
[oracle@osc ~]$ rman target /

Recovery Manager: Release 11.2.0.4.0 - Production on Mon Nov 12 17:48:41 2018

Copyright (c) 1982, 2011, Oracle and/or its affiliates.  All rights reserved.

connected to target database: ORCL (DBID=1511487649)
RMAN> crosscheck archivelog all; 
RMAN> delete archivelog until time 'sysdate-1';
RMAN> delete expired archivelog all;
分别看一下这三句话的意思

crosscheck archivelog all
验证的是DB的归档日志即log_archive_dest参数指定位置的文件，当手工删除了归档日志以后，Rman备份会检测到日志缺失，从而无法进一步继续执行。
所以此时需要手工执行crosscheck过程，之后Rman备份可以恢复正常。
也就是说当无法进入rman的时候，可以直接删除归档日志文件，然后再执行这条语句！

delete archivelog until time 'sysdate-1'
这句话是删除当前时间-1天的归档日志

-3就表示保留3天归档日志

delete expired archivelog all
删除过期或无效的归档日志
强烈建议：在删除归档日志后做一次物理备份

为什么会产生上面的问题
当归档日志每天都有大量的生成的时候，说明数据库存在了大量DML语句，而归档日志就是记录这些操作,所以我们要考虑能不能避免这些操作，如:

是不是数据库设计不合理，需要不要进行频繁操作
大量的操作有可能是日志类（日志、操作记录等）的数据，那么是不是考虑把日志表放入非关系数据库中
DML语句:SQL语言中，负责对数据库对象运行数据访问工作的指令集，以INSERT、UPDATE、DELETE三种指令为核心
非关系数据库如文档型文数据MongoDB、键值数据库Redis等

<b style="color:red">在了解了归档日志的副作用后，是否觉得不开启归档模式，更省心一些呢？</b>
下面我们看一看归档模式的优缺点（摘自网络）

归档模式和非归档模式的优缺点
归档模式的优点
可以进行完全、不完全恢复：由于对数据库所做的全部改动都记录在日志文件中，如果发生硬盘故 障等导致数据文件丢失的话，则可以利用物理备份和归档日志完全恢复数据库，不会丢失任何数据。
可以进行联机热备：所谓联机热备，就是在数据库运行状态下，对数据库进行备份。备份时用户对 数据库的使用不受任何影响。
可以实施 Data Guard：可以部署 1 个或多个备用数据库，从而最大限度地提供灾难保护手段。
可以实施 Stream：利用 Stream 技术，可以实现最简单的单向复制到复杂的双向复制、多向复制， 提供更加灵活的数据冗余方案。
表空间可以脱机：可以备份部分数据库，比如重要的表空间。
能够增量备份：只需做一次完全备份，以后只备份发生改变的数据，可以提高备份速度。
更多的优化选项：随着 Oracle 版本升级，在联机热备方面不断有新的优化策略出现。
归档模式的缺点
需要更多的磁盘空间保存归档日志；
DBA 会有更多的管理工作，包括维护归档空间、备份归档日志。
非归档模式的缺点
只能进行脱机备份，也就是所谓的“ 冷备份”，和联机备份的“ 热备份” 相对应，数据库必须完全 关闭后备份，在备份过程中数据库不可用；
必须备份整个数据库，不能只备份部分数据库；
不能增量备份，对于 TB 级数据库（VLDB） ，这是一个非常大的缺点；
只能部分恢复，如果数据文件丢失需要恢复，DBA 只能恢复最后一次的完全备份，而之后的所有 数据库改变全部丢失。
非归档模式的优点
DBA 的管理工作减少，因为非归档模式不产生归档日志，因此 DBA 不用考虑对归档的管理；
性能会有提升。
非归档模式不生成归档日志，从数据安全角度来说，这种模式缺点是主要的，而优点可以忽略不计。
```

## oracle查看被锁的表和解锁
```
第一步：通过管理员权限用户查询被锁表信息
　　system kill session “sid,serial#”；或者使用相关操作系统kill进程的命令，如UNIX下kill -9 sid,或者使用其它工具杀掉死锁进程。

　　

复制代码
select t2.username,
       t2.sid,
       t2.serial#,
       t3.object_name,
       t2.OSUSER,
       t2.MACHINE,
       t2.PROGRAM,
       t2.LOGON_TIME,
       t2.COMMAND,
       t2.LOCKWAIT,
       t2.SADDR,
       t2.PADDR,
       t2.TADDR,
       t2.SQL_ADDRESS,
       t1.LOCKED_MODE
  from v$locked_object t1, v$session t2, dba_objects t3
 where t1.session_id = t2.sid
   and t1.object_id = t3.object_id
 order by t2.logon_time;
复制代码
上面这条SQL语句用到了Oracle的两个视图和一个表，分别是v$locked_object、v$session、dba_objects： 
v$locked_object 视图中记录了所有session中的所有被锁定的对象信息。 
v$session 视图记录了所有session的相关信息。 
dba_objects 为oracle用户对象及系统对象的集合，通过关联这张表能够获取被锁定对象的详细信息。

说明： 
username：oracle用户名 
sid：进程号 
serial#：序列号 
object_name：表名 
osuser：操作系统用户名 
machine：机器名 
program：操作工具 
logon_time：登陆时间 
lockwait：表示当前这张表是否正在等待其他用户解锁这张表 
locked_mode：锁表模式（下面详细说明）

第二步：通过拥有管理员权限的用户解除数据库中被锁住的表(SID,SERIAL)
通过第一步查出来的信息找到被锁的表之后执行如下语句解锁该表：

alter system kill session 'sid,seial#';
1
注意：sid和seial#就是第一步中查询出来的进程号和序列号。

eg：解除第一步中表的锁

alter system kill session '10,15';
锁的模式
v$locked_object中的LOCKED_MODE字段表示锁的模式，oracle中锁的模式有如下几种: 
0：none 
1：null 空 
2：Row-S 行共享(RS)：共享表锁，sub share 
3：Row-X 行独占(RX)：用于行的修改，sub exclusive 
4：Share 共享锁(S)：阻止其他DML操作，share 
5：S/Row-X 共享行独占(SRX)：阻止其他事务操作，share/sub exclusive 
6：exclusive 独占(X)：独立访问使用，exclusive

数字越大锁级别越高, 影响的操作越多。

1级锁有：Select，有时会在v$locked_object出现。 
2级锁有：Select for update,Lock For Update,Lock Row Share 
select for update当对话使用for update子串打开一个游标时，所有返回集中的数据行都将处于行级(Row-X)独占式锁定，其他对象只能查询这些数据行，不能进行update、delete或select for update操作。 
3级锁有：Insert, Update, Delete, Lock Row Exclusive 
没有commit之前插入同样的一条记录会没有反应, 因为后一个3的锁会一直等待上一个3的锁, 我们必须释放掉上一个才能继续工作。 
4级锁有：Create Index, Lock Share 
locked_mode为2,3,4不影响DML(insert,delete,update,select)操作, 但DDL(alter,drop等)操作会提示ora-00054错误。 
00054, 00000, “resource busy and acquire with NOWAIT specified” 
// *Cause: Resource interested is busy. 
// *Action: Retry if necessary. 
5级锁有：Lock Share Row Exclusive 
具体来讲有主外键约束时update / delete … ; 可能会产生4,5的锁。 
6级锁有：Alter table, Drop table, Drop Index, Truncate table, Lock Exclusive

--以下几个为相关表
SELECT * FROM v$lock;
SELECT * FROM v$sqlarea;
SELECT * FROM v$session;
SELECT * FROM v$process ;
SELECT * FROM v$locked_object;
SELECT * FROM all_objects;
SELECT * FROM v$session_wait;

--查看被锁的表
select b.owner,b.object_name,a.session_id,a.locked_mode from v$locked_object a,dba_objects b where b.object_id = a.object_id;

--查看那个用户那个进程照成死锁
select b.username,b.sid,b.serial#,logon_time from v$locked_object a,v$session b where a.session_id = b.sid order by b.logon_time;

--查看连接的进程
SELECT sid, serial#, username, osuser FROM v$session;

--3.查出锁定表的sid, serial#,os_user_name, machine_name, terminal，锁的type,mode
SELECT s.sid, s.serial#, s.username, s.schemaname, s.osuser, s.process, s.machine,
s.terminal, s.logon_time, l.type
FROM v$session s, v$lock l
WHERE s.sid = l.sid
AND s.username IS NOT NULL
ORDER BY sid;

这个语句将查找到数据库中所有的DML语句产生的锁，还可以发现，
任何DML语句其实产生了两个锁，一个是表锁，一个是行锁。

--杀掉进程 sid,serial#
alter system kill session'210,11562';
```



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

