<TOC />
## js 日期加一天或者减一天，最简单方法
```
通过计算一天的时间戳是多少进行换算：(new Date(new Date().getTime()-86400000)).Format("yyyy-MM-dd hh:mm:ss")
 
注:js是没有format函数，需要自己定义，下面是为js的date对象添加一个方法
 
Date.prototype.Format = function(fmt) 
{ //author: meizz 
var o = { 
"M+" : this.getMonth()+1, //月份 
"d+" : this.getDate(), //日 
"h+" : this.getHours(), //小时 
"m+" : this.getMinutes(), //分 
"s+" : this.getSeconds(), //秒 
"q+" : Math.floor((this.getMonth()+3)/3), //季度 
"S" : this.getMilliseconds() //毫秒 
}; 
if(/(y+)/.test(fmt)) 
fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
for(var k in o) 
if(new RegExp("("+ k +")").test(fmt)) 
fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
return fmt; 
}
```

## js获取当月的天数
```
  created() {
    let dates = new Date();
    var year = dates.getFullYear();
    let mon = dates.getMonth() + 1;
    this.month = year + "-" + mon;
  },
  methods: {
    getDataDay(){
				let year = this.month.substring(0,4)
				let nextMonth = this.month.substring(5,7);
				let d = new Date(year, nextMonth, 0);
				return d.getDate();
			},
		}
```
## 验证url是否可用
```
public function checkUrl($url){
    $response = get_headers($url);
    if(preg_match('/200/',$response[0])){ 
        return true;
    }else{ 
        return false;
    }
}
```

## js正则验证企业座机号码
```
const phoneReg = /^(0[1-9]\d{1,3}\-([2-9]\d{5,8}))$|^(1[356789]\d{9})$/;
export {
  phoneReg
}
```

## element-ui 多选表格怎么做单选
```
		handleselectionchange(val) {
			this.multipleselection = val
			if (this.multipleselection.length > 1) {
				this.$refs.multipletable.toggleRowSelection(this.multipleselection[0]);
			}
		},
```

## vue + elementui upload上传图片到服务器以及保存后回显问题
```
<el-form-item label="产品图片" prop="productImg">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :auto-upload="false"
            :on-change="addFile"
            :file-list="showFiles" //编辑时显示图片的精髓
            ref="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm('subjectForm')">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
```
```
openModal(val, data) {
        let fileArr = [];
        let fileObj = {};
        fileObj.name="file";
        fileObj.url = data.file;
        fileArr.push(fileObj);
        this.showFiles  = fileArr,
  },
```

## js中append与prepend的使用
1.append是指在被选元素的末尾插入一级子元素。而prepend是指在被选元素的首部插入一级子元素。

2.for循环append要看清重复的部分。可分为大的append和小的append。

## "export 'default' (imported as 'phoneReg') was not found in '@/common/utils/
发现是import语法问题

在import后面加上大括号解决

import {getCompanyList} from 'api/recruitManage/index';

import，export语法规范详解：http://es6.ruanyifeng.com/#docs/module#export


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
