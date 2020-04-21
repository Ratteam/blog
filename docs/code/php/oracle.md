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