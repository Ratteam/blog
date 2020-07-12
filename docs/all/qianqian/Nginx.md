<TOC />
## nginx命令
`ps -A | grep nginx`    -查看nginx是否启动

`/application/nginx/sbin/nginx -t` –检查语法

`/application/nginx/sibn/nginx -s reload` —平滑加载配置文件(建议使用这个)

`/application/nginx/sbin/nginx` —启动nginx服务 


## nginx报错

**nginx: [alert] kill(1668, 1) failed (3: No such process)**
没有启动nginx服务，执行/app/nginx/sbin/nginx，开启nginx服务后解决

**上传文件nginx报错**
上传接口直接显示ngnix报错
日志显示：缺失某个文件夹
将文件夹创建即可



