1.安装

方式1：全局安装

通过composer安装 laravel 安装器

composer global require "laravel/installer"

确保将 composer vender bin 目录放置在你的系统环境变量 $PATH 中，以便系统可以找到 Laravel 的可执行文件。该目录根据您的操作系统存在不同的位置中；一些常见的配置包括：

macOS: $HOME/.composer/vendor/bin

GNU / Linux 发行版: $HOME/.config/composer/vendor/bin

安装完后可通过 laravel new 项目名安装laravel

方式二：命令行安装

composer create-project --prefer -dist laravel/laravel 项目名
2.配置公共目录

安装完laravel后必须将web服务器根目录指向public文件夹。如果是本地环境可忽略此操作。
3.配置读写权限

storage和bootstrap/cache 两个文件夹需要写入权限。如果未配置laravel程序将无法运行。如果是本地环境可忽略此操作。
4.创建.env文件

laravel安装完成，如果只有.env.example文件，需要创建.evn文件并将.env.example中的内容复制到.env中。
5.生成应用秘钥

laravel安装完成后，需要在命令行下运行php artisan key:generate，该命令会生成一个32位的随机数，并写入.env文件中
6.修改config/app.php下的timezone

app.php中的timezone默认是UTC,UTC是世界统一时间，需要将时区改成中国时区Asia/Shanghai
7.配置数据库

创建数据库并将数据库配

置信息写入.env文件
```
DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=homestead

DB_USERNAME=root

DB_PASSWORD=root

```

参考：https://www.jianshu.com/p/a3cdec31be9b