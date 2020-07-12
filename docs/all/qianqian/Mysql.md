<TOC />
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

