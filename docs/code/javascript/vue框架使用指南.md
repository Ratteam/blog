## 处理两种类型的图片地址
```
							// 处理两种类型的图片地址
							if(data.photourl.substr(0, 7).toLowerCase() == "http://" || data.photourl.substr(0, 8).toLowerCase() == "https://") {
								this.imageUrl = data.photourl
							} else {
								this.imageUrl = baseapi + data.photourl
							}
```

## vue.esm.js?915d:628 [Vue warn]: Property or method "dataList" is not defined on the

```
data() {
    return {
      totalLength: 0,
    //   dataList没有写导致报错
    //   dataList:[],
    };
  },
```

## javascript判断变量是否有值的方法

```
if(a !== null && a !== undefined) {
  //
}
```

## 在TinyMCE中javascript设置清空textarea值

```
tinymce.get(this.editorId).setContent(''); 
```

## vue 设置代理报错;occurred while trying to proxy request xxx

HPM] Error occurred while trying to proxy request /oauth/validate from localhost:8080 to localhost:8081 (ENOTFOUND) (https://nodejs.org/api/errors.html#errors_common_system_errors)

设置代理:

 '/xxxxx': {

            target:"localhost:8081",
            changeOrigin: true, //可否跨域
            pathRewrite: {
                '^/xxxxx': '' //重写接口，去掉/paas
            }
        }

代理要是完整的url, http://localhost:8081, http 不能少。

我是url写错了

## vue报错 Missing required prop: "value"

```
<!--正确-->
<el-form-item label="会签方式:">
            <el-select v-model="node.sign" style="width: 100%;">
              <el-option v-for="(key,item) in sign" :key="key" :value="item" :label="key"></el-option>
            </el-select>
          </el-form-item>
<!--错误v-model写在了el-form里面-->
           <el-form-item v-model="node.fallback" label="回退方式:">
            <el-select style="width: 100%;">
              <el-option v-for="(key,item) in backType" :key="key" :value="item" :label="key"></el-option>
            </el-select>
          </el-form-item>
```

## vue报错：Failed to resolve directive: modle

问题原因：我把model写成了modle

## js 负数转成正数的方法
<script>
    //取绝对值
    console.log(Math.abs(2.5));
    //取绝对值，负数转换成正数
    console.log(Math.abs(-2.5));
</script>
说明：

1、正数的绝对值，就数正数的本身

2、负数的绝对值，就是去掉负数前面的"-"号，也就是正数了

## app写法

//引入组件
import { Toast, Indicator } from 'mint-ui';
//提示信息
Toast({
         message: res.data.message,
         duration: 1000
         });
//开启loading
Indicator.open({
           spinnerType: 'fading-circle'
         });
//关闭loading
Indicator.close();

## js判断字符串是否为空和三元

this.name = this.baseName ?this.baseName:''; 

## vue中router以及route的使用

**路由基本概念**

> router可以理解为一个容器，或者说一种机制，它管理了一组route。

> 简单来说，route只是进行了URL和函数的映射，而在当接收到一个URL之后，去路由映射表中查找相应的函数，这个过程是由router来处理的。

```js
// 注册路由
const router = new VueRouter({
    routes // routes: routes 的简写
})
```

```js
// route，它是一条路由。
{ path: '/home', component: Home }
// routes，是一组路由。
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
```

**路由跳转**

> $route为当前router跳转对象里面可以获取name、path、query、params等。

```js
this.$router.push({path:`/user/index`);
```

**路由传递参数**

```js
// 也可以用params传递：
this.$router.push({name:'Login',params:{id:'leelei'}})
// 也可以用query传递：
this.$router.push({path:'/login',query:{id:'leelei'})
// 接收参数的方式是
this.$route.params.userId
```

> query传参是针对path的，params传参是针对name的。。接收参数的方式都差不多。this.$route.query和this.$route.params.

> 使用query传参的话，会在浏览器的url栏看到传的参数类似于get请求，使用params传参的话则不会，类似于post请求。

> 如果使用完整路径和query传参，刷新页面时不会造成路由传参的参数丢失。

## element 限制input输入文字数量

强制输入数字,并限制输入长度

```js
    <el-input 
    v-model="item.userScore" 
    onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
    maxlength="4"
    >
    </el-input>
```

> onkeyup 事件会在键盘按键被松开时发生。

> maxlength 属性规定 `<input>` 元素中允许的最大字符数。
