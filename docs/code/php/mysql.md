## Oracle的日期时间范围查询

AND A.CREATETIME between to_date('2020-04-10','yyyy-MM-dd') AND to_date('2020-04-13','yyyy-MM-dd');  

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

