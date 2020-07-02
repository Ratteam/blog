### 入口文件
> 文件位置：web\index.php

```
//定义全局变量
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

//composer自动加载代码机制，可参考 https://segmentfault.com/a/1190000010788354
require(__DIR__ . '/../vendor/autoload.php');

//1.引入工具类Yii
//2.注册自动加载函数
//3.生成依赖注入中使用到的容器
require(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

//加载应用配置
$config = require(__DIR__ . '/../config/web.php');

//生成应用并运行
(new yii\web\Application($config))->run();
```

参考：https://segmentfault.com/a/1190000011823699