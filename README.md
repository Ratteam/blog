**第一篇文章**

使用markdown语法写文章，将文档放到docs目录内。

markdown文件在框架运行后将被编译为html文件

**参考文档**

markdown语法：https://www.runoob.com/markdown/md-tutorial.html

vuepress框架使用：https://www.vuepress.cn/

**目录文件含义**

```
-- config   配置文件夹
    -- headConf.js      头部配置文件            
    -- pluginConf.js    插件配置文件               
-- docs 工作目录文件夹
    -- .vuepress    核心配置文件夹
        -- components   组件文件夹
            -- Valine.vue   评论组件
        -- dist 打包后生成的文件夹
        -- public   资源文件夹
        -- config.js    核心配置文件
    -- about    关于我
    -- all  最新文章
    -- app  应用
    -- bad  入魔
    -- chess    弈棋
    -- code 编程
    -- exercise 运动
    -- financing    理财
    -- good 修仙
    -- message  留言板
    -- more 支持/打赏
    -- web 网站
-- node_modules 插件文件夹
-- .gitignore   git忽略设置文件
-- deploy.sh    推送到github部署网站脚本
-- LICENSE  开源协议
-- package.json 包配置文件
-- README.md    项目说明文档
-- yarn.lock    锁定包版本文件 
```

**常用命令**

> 下载包
yarn

> 运行项目
yarn docs:dev

> 推送项目到网站
./deploy.sh
