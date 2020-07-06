# JavaScript

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
# javascript语法使用指南

## JavaScript 简介
> JavaScript 是互联网上最流行的脚本语言，这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。

JavaScript 是脚本语言
JavaScript 是一种轻量级的编程语言。
JavaScript 是可插入 HTML 页面的编程代码。
JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。
JavaScript 很容易学习。

**JavaScript：直接写入 HTML 输出流**
```
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
```

**JavaScript：对事件的反应**
```
<button type="button" onclick="alert('欢迎!')">点我!</button>
```
> alert() 函数在 JavaScript 中并不常用，但它对于代码测试非常方便。

> onclick 事件只是您即将在本教程中学到的众多事件之一。

**JavaScript：改变 HTML 内容**
```
x=document.getElementById("demo");  //查找元素
x.innerHTML="Hello JavaScript";    //改变内容
```
> document.getElementById("some id")。这个方法是 HTML DOM 中定义的。

> DOM (Document Object Model)（文档对象模型）是用于访问 HTML 元素的正式 W3C 标准。

**JavaScript：改变 HTML 图像**
```
<script>
function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("bulbon"))
    {
        element.src="/images/pic_bulboff.gif";
    }
    else
    {
        element.src="/images/pic_bulbon.gif";
    }
}
</script>
<img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">
```

**JavaScript：改变 HTML 样式**
```
x=document.getElementById("demo")  //找到元素 
x.style.color="#ff0000";           //改变样式
```

**JavaScript：验证输入**
```
if isNaN(x) {
    alert("不是数字");
}

if(isNaN(x)||x.replace(/(^\s*)|(\s*$)/g,"")==""){
    alert("不是数字");
}
```

**ECMAScript 版本**
JavaScript 已经由 ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。

| 年份   | 名称             | 描述                                       |
| :--- | :------------- | :--------------------------------------- |
| 1997 | ECMAScript 1   | 第一个版本                                    |
| 1998 | ECMAScript 2   | 版本变更                                     |
| 1999 | ECMAScript 3   | 添加正则表达式 添加 try/catch                     |
|      | ECMAScript 4   | 没有发布                                     |
| 2009 | ECMAScript 5   | 添加 "strict mode"，严格模式 添加 JSON 支持         |
| 2011 | ECMAScript 5.1 | 版本变更                                     |
| 2015 | ECMAScript 6   | 添加类和模块                                   |
| 2016 | ECMAScript 7   | 增加指数运算符 (**) 增加 Array.prototype.includes |

## JavaScript 用法
```
HTML 中的脚本必须位于 <script> 与 </script> 标签之间。
脚本可被放置在 HTML 页面的 <body> 和 <head> 部分中。
```

**`<script>` 标签**
```
<script>
alert("我的第一个 JavaScript");
</script>
```

**`<body>` 标签**
```
<!DOCTYPE html>
<html>
<body>
.
.
<script>
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落</p>");
</script>
.
.
</body>
</html>
```

**`<head>` 中的 JavaScript 函数**
```
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}
</script>
</head>
<body>
<h1>我的 Web 页面</h1>
<p id="demo">一个段落</p>
<button type="button" onclick="myFunction()">尝试一下</button>
</body>
</html>
```

**`<body>` 中的 JavaScript 函数**
```
<!DOCTYPE html>
<html>
<body>
<h1>我的 Web 页面</h1>
<p id="demo">一个段落</p>
<button type="button" onclick="myFunction()">尝试一下</button>
<script>
function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}
</script>
</body>
</html>
```

**外部的 JavaScript**
```
<!DOCTYPE html>
<html>
<body>
<script src="myScript.js"></script>
</body>
</html>
```

## JavaScript 输出
JavaScript 没有任何打印或者输出的函数。

**JavaScript 显示数据**
JavaScript 可以通过不同的方式来输出数据：
使用 window.alert() 弹出警告框。
使用 document.write() 方法将内容写到 HTML 文档中。
使用 innerHTML 写入到 HTML 元素。
使用 console.log() 写入到浏览器的控制台。

**使用 window.alert()**
```
<!DOCTYPE html>
<html>
<body>

<h1>我的第一个页面</h1>
<p>我的第一个段落。</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

**操作 HTML 元素**
```
<!DOCTYPE html>
<html>
<body>

<h1>我的第一个 Web 页面</h1>

<p id="demo">我的第一个段落</p>

<script>
document.getElementById("demo").innerHTML = "段落已修改。";
</script>

</body>
</html>
```
> document.getElementById("demo") 是使用 id 属性来查找 HTML 元素的 JavaScript 代码 。

> innerHTML = "段落已修改。" 是用于修改元素的 HTML 内容(innerHTML)的 JavaScript 代码。

**写到 HTML 文档**
```
<!DOCTYPE html>
<html>
<body>

<h1>我的第一个 Web 页面</h1>

<p>我的第一个段落。</p>

<button onclick="myFunction()">点我</button>

<script>
function myFunction() {
    document.write(Date());
}
</script>

</body>
</html>
```

**写到控制台**
```
<!DOCTYPE html>
<html>
<body>

<h1>我的第一个 Web 页面</h1>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html>
```

## JavaScript 语法
JavaScript 是一个程序语言。语法规则定义了语言结构。

JavaScript 是一个脚本语言。

它是一个轻量级，但功能强大的编程语言。

**JavaScript 字面量**
数字（Number）字面量 可以是整数或者是小数，或者是科学计数(e)。
`3.14 1001 123e5`
字符串（String）字面量 可以使用单引号或双引号
`"John Doe" 'John Doe'`
表达式字面量 用于计算
`5 + 6`
数组（Array）字面量 定义一个数组
`[40, 100, 1, 5, 25, 10]`
对象（Object）字面量 定义一个对象
`{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}`
函数（Function）字面量 定义一个函数
`function myFunction(a, b) { return a * b;}`

**JavaScript 变量**
```
var x, length

x = 5

length = 6
```

**JavaScript 关键字**
```
abstract	else	instanceof	super
boolean	enum	int	switch
break	export	interface	synchronized
byte	extends	let	this
case	false	long	throw
catch	final	native	throws
char	finally	new	transient
class	float	null	true
const	for	package	try
continue	function	private	typeof
debugger	goto	protected	var
default	if	public	void
delete	implements	return	volatile
do	import	short	while
double	in	static	with
```

**JavaScript 注释**
`// 我不会执行`

**JavaScript 数据类型**
```
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
```

**JavaScript 函数**
```
function myFunction(a, b) {
    return a * b;                                // 返回 a 乘以 b 的结果
}
```

**JavaScript 字母大小写**
JavaScript 对大小写是敏感的。

函数 getElementById 与 getElementbyID 是不同的。

同样，变量 myVariable 与 MyVariable 也是不同的。

**JavaScript 字符集**
JavaScript 使用 Unicode 字符集。

Unicode 覆盖了所有的字符，包含标点等字符。

## JavaScript 语句
JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。

**JavaScript 代码块**
JavaScript 可以分批地组合起来。
代码块以左花括号开始，以右花括号结束。
代码块的作用是一并地执行语句序列。
本例向网页输出一个标题和两个段落：
```
function myFunction()
{
    document.getElementById("demo").innerHTML="你好Dolly";
    document.getElementById("myDIV").innerHTML="你最近怎么样?";
}
```

**JavaScript 语句标识符**
JavaScript 语句通常以一个 语句标识符 为开始，并执行该语句。
语句标识符是保留关键字不能作为变量名使用。
break	用于跳出循环。
catch	语句块，在 try 语句块执行出错时执行 catch 语句块。
continue	跳过循环中的一个迭代。
do ... while	执行一个语句块，在条件语句为 true 时继续执行该语句块。
for	在条件语句为 true 时，可以将代码块执行指定的次数。
for ... in	用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
function	定义一个函数
if ... else	用于基于不同的条件来执行不同的动作。
return	退出函数
switch	用于基于不同的条件来执行不同的动作。
throw	抛出（生成）错误 。
try	实现错误处理，与 catch 一同使用。
var	声明一个变量。
while	当条件语句为 true 时，执行语句块。

**对代码行进行折行**
```
document.write("你好 \
世界!");
```

## JavaScript 注释
JavaScript 注释可用于提高代码的可读性。

**Javascript 单行注释**
```
// 输出标题：
document.getElementById("myH1").innerHTML="欢迎来到我的主页";
// 输出段落：
document.getElementById("myP").innerHTML="这是我的第一个段落。";
```

**JavaScript 多行注释**
```
/*
下面的这些代码会输出
一个标题和一个段落
并将代表主页的开始
*/
document.getElementById("myH1").innerHTML="欢迎来到我的主页";
document.getElementById("myP").innerHTML="这是我的第一个段落。";
```

## JavaScript 变量
变量是用于存储信息的"容器"。
变量必须以字母开头
变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
变量名称对大小写敏感（y 和 Y 是不同的变量）

**声明 JavaScript 变量**
```
var carname="Volvo";
document.getElementById("demo").innerHTML=carname;
```

**一条语句，多个变量**
```
var lastname="Doe",
age=30,
job="carpenter";
```

## JavaScript 数据类型
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

引用数据类型：对象(Object)、数组(Array)、函数(Function)。

**JavaScript 布尔**
```
var x=true;
var y=false;
```

**JavaScript 数组**
```
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
```

**JavaScript 对象**
```
var person={
firstname : "John",
lastname  : "Doe",
id        :  5566
};
```

**Undefined 和 Null**
Undefined 这个值表示变量不含有值。
可以通过将变量的值设置为 null 来清空变量。
```
cars=null;
person=null;
```

**声明变量类型**
```
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
```
> JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。

## JavaScript 对象
JavaScript 对象是拥有属性和方法的数据。

**对象定义**
```
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
```

**对象属性**
我们通常认为 "JavaScript 对象是键值对的容器"。

键值对通常写法为 name : value (键与值以冒号分割)。

键值对在 JavaScript 对象通常称为 对象属性。

**访问对象属性**
```
person.lastName;
person["lastName"];
```

**对象方法**
```
name = person.fullName();
```

**访问对象方法**
```
methodName : function() { code lines }

objectName.methodName()
```

## JavaScript 函数
函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>测试实例</title>
<script>
function myFunction()
{
    alert("Hello World!");
}
</script>
</head>
 
<body>
<button onclick="myFunction()">点我</button>
</body>
</html>
```

**调用带参数的函数**
```
<p>点击这个按钮，来调用带参数的函数。</p>
<button onclick="myFunction('Harry Potter','Wizard')">点击这里</button>
<script>
function myFunction(name,job){
    alert("Welcome " + name + ", the " + job);
}
</script>
```

**带有返回值的函数**
```
function myFunction(a,b)
{
    return a*b;
}
 
document.getElementById("demo").innerHTML=myFunction(4,3);
```

**局部 JavaScript 变量**
在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。

您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。

只要函数运行完毕，本地变量就会被删除。

**全局 JavaScript 变量**
在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。

**JavaScript 变量的生存期**
JavaScript 变量的生命期从它们被声明的时间开始。

局部变量会在函数运行以后被删除。

全局变量会在页面关闭后被删除。

**向未声明的 JavaScript 变量分配值**
如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性。

非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除。
```
var var1 = 1; // 不可配置全局属性
var2 = 2; // 没有使用 var 声明，可配置全局属性

console.log(this.var1); // 1
console.log(window.var1); // 1

delete var1; // false 无法删除
console.log(var1); //1

delete var2; 
console.log(delete var2); // true
console.log(var2); // 已经删除 报错变量未定义
```

**JavaScript 作用域**
作用域是可访问变量的集合。

在 JavaScript 中, 对象和函数同样也是变量。

在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。

JavaScript 函数作用域: 作用域在函数内修改。

**JavaScript 局部作用域**
变量在函数内声明，变量为局部作用域。

局部变量：只能在函数内部访问。
```
// 此处不能调用 carName 变量
function myFunction() {
    var carName = "Volvo";
    // 函数内可调用 carName 变量
}
```

**JavaScript 全局变量**
变量在函数外定义，即为全局变量。

全局变量有 全局作用域: 网页中所有脚本和函数均可使用。
```
var carName = " Volvo";
 
// 此处可调用 carName 变量
function myFunction() {
    // 函数内可调用 carName 变量
}
```

**JavaScript 变量生命周期**
JavaScript 变量生命周期在它声明时初始化。

局部变量在函数执行完毕后销毁。

全局变量在页面关闭后销毁。

**HTML 中的全局变量**
在 HTML 中, 全局变量是 window 对象: 所有数据变量都属于 window 对象。
```
//此处可使用 window.carName
 
function myFunction() {
    carName = "Volvo";
}
```

##JavaScript 事件
HTML 事件是发生在 HTML 元素上的事情。

当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。

HTML 事件可以是浏览器行为，也可以是用户行为。
HTML 页面完成加载
HTML input 字段改变时
HTML 按钮被点击

在事件触发时 JavaScript 可以执行一些代码。

```
<button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
<button onclick="this.innerHTML=Date()">现在的时间是?</button>
<button onclick="displayDate()">现在的时间是?</button>
```

**常见的HTML事件**
onchange	HTML 元素改变
onclick	用户点击 HTML 元素
onmouseover	用户在一个HTML元素上移动鼠标
onmouseout	用户从一个HTML元素上移开鼠标
onkeydown	用户按下键盘按键
onload	浏览器已完成页面的加载

## JavaScript 字符串
JavaScript 字符串用于存储和处理文本。

字符串可以存储一系列字符，如 "John Doe"。

字符串可以是插入到引号中的任何字符。你可以使用单引号或双引号

**字符串长度**
可以使用内置属性 length 来计算字符串的长度
```
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```
**特殊字符**
在 JavaScript 中，字符串写在单引号或双引号中。
\'	单引号
\"	双引号
\\	反斜杠
\n	换行
\r	回车
\t	tab(制表符)
\b	退格符
\f	换页符

**字符串可以是对象**
```
var x = "John";             
var y = new String("John");
(x === y) // 结果为 false，因为 x 是字符串，y 是对象
```

**字符串属性**
constructor	返回创建字符串属性的函数
length	返回字符串的长度
prototype	允许您向对象添加属性和方法

**字符串方法**
charAt()	返回指定索引位置的字符
charCodeAt()	返回指定索引位置字符的 Unicode 值
concat()	连接两个或多个字符串，返回连接后的字符串
fromCharCode()	将 Unicode 转换为字符串
indexOf()	返回字符串中检索指定字符第一次出现的位置
lastIndexOf()	返回字符串中检索指定字符最后一次出现的位置
localeCompare()	用本地特定的顺序来比较两个字符串
match()	找到一个或多个正则表达式的匹配
replace()	替换与正则表达式匹配的子串
search()	检索与正则表达式相匹配的值
slice()	提取字符串的片断，并在新的字符串中返回被提取的部分
split()	把字符串分割为子字符串数组
substr()	从起始索引号提取字符串中指定数目的字符
substring()	提取字符串中两个指定的索引号之间的字符
toLocaleLowerCase()	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLocaleUpperCase()	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLowerCase()	把字符串转换为小写
toString()	返回字符串对象值
toUpperCase()	把字符串转换为大写
trim()	移除字符串首尾空白
valueOf()	返回某个字符串对象的原始值

## JavaScript 运算符
运算符 = 用于赋值。

运算符 + 用于加值。

**JavaScript 算术运算符**
```
+	加法
-	减法	
*	乘法
/	除法	
%	取模（余数）	
++	自增
--	自减
```
**JavaScript 赋值运算符**
```
=	x=y
+=	x+=y	
-=	x-=y
*=	x*=y	
/=	x/=y
%=	x%=y
```

**用于字符串的 + 运算符**
```
txt1="What a very";
txt2="nice day";
txt3=txt1+txt2;

What a verynice day
```

**对字符串和数字进行加法运算**
```
x=5+5;
y="5"+5;
z="Hello"+5;

10
55
Hello5
```

## JavaScript 比较 和 逻辑运算符
比较和逻辑运算符用于测试 true 或者 false。

**比较运算符**
比较运算符在逻辑语句中使用，以测定变量或值是否相等。
```
==	等于
===	绝对等于（值和类型均相等）	
!=	 不等于	
!==	 不绝对等于（值和类型有一个不相等，或两个都不相等）	
>	 大于	
<	 小于
>=	 大于或等于	
<=	 小于或等于
```
**逻辑运算符**
逻辑运算符用于测定变量或值之间的逻辑。
```
&&	and
||	or
!	not
```

**条件运算符**
`voteable=(age<18)?"年龄太小":"年龄已达到";`

## JavaScript if...Else 语句
条件语句用于基于不同的条件来执行不同的动作。
```
if (time<10)
{
    document.write("<b>早上好</b>");
}
else if (time>=10 && time<16)
{
    document.write("<b>今天好</b>");
}
else
{
    document.write("<b>晚上好!</b>");
}
```

## JavaScript switch 语句
switch 语句用于基于不同的条件来执行不同的动作。
```
var d=new Date().getDay();
switch (d)
{
    case 6:x="今天是星期六";
    break;
    case 0:x="今天是星期日";
    break;
    default:
    x="期待周末";
}
document.getElementById("demo").innerHTML=x;
```

## JavaScript for 循环
循环可以将代码块执行指定的次数。
```
for (var i=0,len=cars.length; i<len; i++)
{ 
    document.write(cars[i] + "<br>");
}
```
**For/In 循环**
```
var person={fname:"John",lname:"Doe",age:25}; 
 
for (x in person)  // x 为属性名
{
    txt=txt + person[x];
}
```

## JavaScript while 循环
只要指定条件为 true，循环就可以一直执行代码块。
```
while (i<5)
{
    x=x + "The number is " + i + "<br>";
    i++;
}
```

**do/while 循环**
do/while 循环是 while 循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环。
```
do
{
    x=x + "The number is " + i + "<br>";
    i++;
}
while (i<5);
```

## JavaScript break 和 continue 语句
break 语句用于跳出循环。

continue 用于跳过循环中的一个迭代。

**break 语句**
```
for (i=0;i<10;i++)
{
    if (i==3)
    {
        break;
    }
    x=x + "The number is " + i + "<br>";
}
```

**continue 语句**
continue 语句中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。
```
for (i=0;i<=10;i++)
{
    if (i==3) continue;
    x=x + "The number is " + i + "<br>";
}
```

**JavaScript 标签**
如需标记 JavaScript 语句，请在语句之前加上冒号：

continue 语句（带有或不带标签引用）只能用在循环中。

break 语句（不带标签引用），只能用在循环或 switch 中。

通过标签引用，break 语句可用于跳出任何 JavaScript 代码块：
```
cars=["BMW","Volvo","Saab","Ford"];
list: 
{
    document.write(cars[0] + "<br>"); 
    document.write(cars[1] + "<br>"); 
    document.write(cars[2] + "<br>"); 
    break list;
    document.write(cars[3] + "<br>"); 
    document.write(cars[4] + "<br>"); 
    document.write(cars[5] + "<br>"); 
}
```

## JavaScript typeof, null, 和 undefined
**typeof 操作符**
```
typeof "John"                // 返回 string
typeof 3.14                  // 返回 number
typeof false                 // 返回 boolean
typeof [1,2,3,4]             // 返回 object
typeof {name:'John', age:34} // 返回 object
```

**undefined 和 null 的区别**
```
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true
```

## JavaScript 类型转换
Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。

**JavaScript 数据类型**
在 JavaScript 中有 6 种不同的数据类型：
string
number
boolean
object
function
symbol
3 种对象类型：
Object
Date
Array
2 个不包含任何值的数据类型：
null
undefined

**typeof 操作符**
你可以使用 typeof 操作符来查看 JavaScript 变量的数据类型。
```
typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
typeof null                   // 返回 object
```

**constructor 属性**
constructor 属性返回所有 JavaScript 变量的构造函数。
```
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function () {}.constructor         // 返回函数 Function(){ [native code] }
```

**JavaScript 类型转换**
JavaScript 变量可以转换为新变量或其他数据类型：
通过使用 JavaScript 函数
通过 JavaScript 自身自动转换

**将数字转换为字符串**
```
String(x)         // 将变量 x 转换为字符串并返回
String(123)       // 将数字 123 转换为字符串并返回
String(100 + 23)  // 将数字表达式转换为字符串并返回

x.toString()
(123).toString()
(100 + 23).toString()
```
toExponential()	把对象的值转换为指数计数法。
toFixed()	把数字转换为字符串，结果的小数点后有指定位数的数字。
toPrecision()	把数字格式化为指定的长度。

**将布尔值转换为字符串**
```
String(false)        // 返回 "false"
String(true)         // 返回 "true"
false.toString()     // 返回 "false"
true.toString()      // 返回 "true"
```

**将日期转换为字符串**
```
Date()      // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)

String(new Date())      // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)

obj = new Date()
obj.toString()   // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)
```
getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
getFullYear()	从 Date 对象以四位数字返回年份。
getHours()	返回 Date 对象的小时 (0 ~ 23)。
getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
getMonth()	从 Date 对象返回月份 (0 ~ 11)。
getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
getTime()	返回 1970 年 1 月 1 日至今的毫秒数。


**将字符串转换为数字**
```
Number("3.14")    // 返回 3.14
Number(" ")       // 返回 0
Number("")        // 返回 0
Number("99 88")   // 返回 NaN
```
parseFloat()	解析一个字符串，并返回一个浮点数。
parseInt()	解析一个字符串，并返回一个整数。

**将布尔值转换为数字**
```
Number(false)     // 返回 0
Number(true)      // 返回 1
```

**将日期转换为数字**
```
d = new Date();
Number(d)          // 返回 1404568027739

d = new Date();
d.getTime()        // 返回 1404568027739
```

**自动转换类型**
```
5 + null    // 返回 5         null 转换为 0
"5" + null  // 返回"5null"   null 转换为 "null"
"5" + 1     // 返回 "51"      1 转换为 "1" 
"5" - 1     // 返回 4         "5" 转换为 5
```

**自动转换为字符串**
```
document.getElementById("demo").innerHTML = myVar;

myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"

myVar = 123             // toString 转换为 "123"
myVar = true            // toString 转换为 "true"
myVar = false           // toString 转换为 "false"
```

## JavaScript 正则表达式
正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。
搜索模式可用于文本搜索和文本替换。

**search() 方法使用正则表达式**
```
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);

6
```

**search() 方法使用字符串**
```
var str = "Visit Runoob!"; 
var n = str.search("Runoob");
```

**replace() 方法使用正则表达式**
```
var str = document.getElementById("demo").innerHTML; 
var txt = str.replace(/microsoft/i,"Runoob");

Visit Runoob!
```

**replace() 方法使用字符串**
```
var str = document.getElementById("demo").innerHTML; 
var txt = str.replace("Microsoft","Runoob");
```

**正则表达式修饰符**
i	执行对大小写不敏感的匹配。
g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
m	执行多行匹配。

**正则表达式模式**
[abc]	查找方括号之间的任何字符。
[0-9]	查找任何从 0 至 9 的数字。
(x|y)	查找任何以 | 分隔的选项。

\d	查找数字。
\s	查找空白字符。
\b	匹配单词边界。
\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。

n+	匹配任何包含至少一个 n 的字符串。
n*	匹配任何包含零个或多个 n 的字符串。
n?	匹配任何包含零个或一个 n 的字符串。

**

**使用 RegExp 对象**
在 JavaScript 中，RegExp 对象是一个预定义了属性和方法的正则表达式对象。

**使用 test()**
test() 方法是一个正则表达式方法。
test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
以下实例用于搜索字符串中的字符 "e"：
```
var patt = /e/;
patt.test("The best things in life are free!");

true

/e/.test("The best things in life are free!")
```

**使用 exec()**
exec() 方法是一个正则表达式方法。

exec() 方法用于检索字符串中的正则表达式的匹配。

该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

以下实例用于搜索字符串中的字母 "e":
```
/e/.exec("The best things in life are free!");

e
```

## JavaScript 错误 - throw、try 和 catch
try 语句测试代码块的错误。

catch 语句处理错误。

throw 语句创建自定义错误。

finally 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。

**JavaScript 错误**
当 JavaScript 引擎执行 JavaScript 代码时，会发生各种错误。

可能是语法错误，通常是程序员造成的编码错误或错别字。

可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。

可能是由于来自服务器或用户的错误输出而导致的错误。

当然，也可能是由于许多其他不可预知的因素。

**JavaScript 抛出（throw）错误**
当错误发生时，当事情出问题时，JavaScript 引擎通常会停止，并生成一个错误消息。

描述这种情况的技术术语是：JavaScript 将抛出一个错误。

**JavaScript try 和 catch**
try 语句允许我们定义在执行时进行错误测试的代码块。

catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。

JavaScript 语句 try 和 catch 是成对出现的。

```
var txt=""; 
function message() 
{ 
    try { 
        adddlert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n\n"; 
        txt+="错误描述：" + err.message + "\n\n"; 
        txt+="点击确定继续。\n\n"; 
        alert(txt); 
    } 
}
```

**finally 语句**
finally 语句不论之前的 try 和 catch 中是否产生异常都会执行该代码块。
```
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
```

**Throw 语句**
throw 语句允许我们创建自定义错误。

正确的技术术语是：创建或抛出异常（exception）。

如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息。

```
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "")  throw "值为空";
        if(isNaN(x)) throw "不是数字";
        x = Number(x);
        if(x < 5)    throw "太小";
        if(x > 10)   throw "太大";
    }
    catch(err) {
        message.innerHTML = "错误: " + err;
    }
}
```

## JavaScript 调试
在编写 JavaScript 时，如果没有调试工具将是一件很痛苦的事情。

没有调试工具是很难去编写 JavaScript 程序的。

你的代码可能包含语法错误，逻辑错误，如果没有调试工具，这些错误比较难于发现。

通常，如果 JavaScript 出现错误，是不会有提示信息，这样你就无法找到代码错误的位置。

**console.log() 方法**
```
a = 5;
b = 6;
c = a + b;
console.log(c);
```

**debugger 关键字**
```
var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x;
```

## JavaScript 变量提升
JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。

JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。

**JavaScript 初始化不会提升**
JavaScript 只有声明的变量会提升，初始化的不会。

**在头部声明你的变量**
对于大多数程序员来说并不知道 JavaScript 变量提升。

如果程序员不能很好的理解变量提升，他们写的程序就容易出现一些问题。

为了避免这些问题，通常我们在每个作用域开始前声明这些变量，这也是正常的 JavaScript 解析步骤，易于我们理解。

## JavaScript 严格模式(use strict)
JavaScript 严格模式（strict mode）即在严格的条件下运行。

**使用 "use strict" 指令**
"use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。

它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。

"use strict" 的目的是指定代码在严格条件下执行。

严格模式下你不能使用未声明的变量。

```
"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // 报错 (y 未定义)
}
```
> "use strict" 指令只允许出现在脚本或函数的开头。

## JavaScript 使用误区

**赋值运算符应用错误**
在 JavaScript 程序中如果你在 if 条件语句中使用赋值运算符的等号 (=) 将会产生一个错误结果, 正确的方法是使用比较运算符的两个等号 (==)。

```
if 条件语句返回 false (是我们预期的)因为 x 不等于 10:

var x = 0;
if (x == 10)

if 条件语句返回 true (不是我们预期的)因为条件语句执行为 x 赋值 10，10 为 true:

var x = 0;
if (x = 10)

if 条件语句返回 false (不是我们预期的)因为条件语句执行为 x 赋值 0，0 为 false:

var x = 0;
if (x = 0)
```

**比较运算符常见错误**
```
在常规的比较中，数据类型是被忽略的，以下 if 条件语句返回 true：

var x = 10;
var y = "10";
if (x == y)

在严格的比较运算中，=== 为恒等计算符，同时检查表达式的值与类型，以下 if 条件语句返回 false：

var x = 10;
var y = "10";
if (x === y)

这种错误经常会在 switch 语句中出现，switch 语句会使用恒等计算符(===)进行比较:

以下实例会执行 alert 弹窗：

var x = 10;
switch(x) {
    case 10: alert("Hello");
}

以下实例由于类型不一致不会执行 alert 弹窗：

var x = 10;
switch(x) {
    case "10": alert("Hello");
}
```

**加法与连接注意事项**
加法是两个数字相加。

连接是两个字符串连接。

JavaScript 的加法和连接都使用 + 运算符。
```
接下来我们可以通过实例查看两个数字相加及数字与字符串连接的区别：

var x = 10 + 5;          // x 的结果为 15
var x = 10 + "5";        // x 的结果为 "105"

使用变量相加结果也不一致:

var x = 10;
var y = 5;
var z = x + y;           // z 的结果为 15

var x = 10;
var y = "5";
var z = x + y;           // z 的结果为 "105"

```

**浮点型数据使用注意事项**
JavaScript 中的所有数据都是以 64 位浮点型数据(float) 来存储。
```
所有的编程语言，包括 JavaScript，对浮点型数据的精确度都很难确定：

var x = 0.1;
var y = 0.2;
var z = x + y            // z 的结果为 0.30000000000000004
if (z == 0.3)            // 返回 false

为解决以上问题，可以用整数的乘除法来解决：

实例
var z = (x * 10 + y * 10) / 10;       // z 的结果为 0.3
```

**JavaScript 字符串分行**
JavaScript 允许我们在字符串中使用断行语句:
```
var x =
"Hello World!";
```
但是，在字符串中直接使用回车换行是会报错的：
```
var x = "Hello
World!";
```

字符串断行需要使用反斜杠(\)，如下所示:
```
var x = "Hello \
World!";
```

**错误的使用分号**
由于分号使用错误，if 语句中的代码块就一定会执行：
```
if (x == 19);
{
    // code block 
}
```

**return 语句使用注意事项**
JavaScript 默认是在代码的最后一行自动结束。

以下两个实例返回结果是一样的(一个有分号一个没有):
```
function myFunction(a) {
    var power = 10 
    return a * power
}

function myFunction(a) {
    var power = 10;
    return a * power;
}

JavaScript 也可以使用多行来结束一个语句。
function myFunction(a) {
    var
    power = 10; 
    return a * power;
}

function myFunction(a) {
    var
    power = 10; 
    return
    a * power;
}

function myFunction(a) {
    var
    power = 10;  
    return;       // 分号结束，返回 undefined
    a * power;
}
```
**数组中使用名字来索引**
许多程序语言都允许使用名字来作为数组的索引。

使用名字来作为索引的数组称为关联数组(或哈希)。

JavaScript 不支持使用名字来索引数组，只允许使用数字索引。
```
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;         // person.length 返回 3
var y = person[0];             // person[0] 返回 "John"
```

在 JavaScript 中, 对象 使用 名字作为索引。

如果你使用名字作为索引，当访问数组时，JavaScript 会把数组重新定义为标准对象。

执行这样操作后，数组的方法及属性将不能再使用，否则会产生错误:
```
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;         // person.length 返回 0
var y = person[0];             // person[0] 返回 undefined

```

定义数组元素，最后不能添加逗号
数组最后一个值的后面添加逗号虽然语法没有问题，但是在不同的浏览器可能得到不同的结果。
`var colors = [5, 6, 7,]; //这样数组的长度可能为3 也可能为4。`
正确的定义方式：
`points = [40, 100, 1, 5, 25, 10];`
定义对象，最后不能添加逗号
错误的定义方式：
`websites = {site:"菜鸟教程", url:"www.runoob.com", like:460,}`
正确的定义方式：
`websites = {site:"菜鸟教程", url:"www.runoob.com", like:460}`

**Undefined 不是 Null**
在 JavaScript 中, null 用于对象, undefined 用于变量，属性和方法。

对象只有被定义才有可能为 null，否则为 undefined。

如果我们想测试对象是否存在，在对象还没定义时将会抛出一个错误。

错误的使用方式：
`if (myObj !== null && typeof myObj !== "undefined") `
正确的方式是我们需要先使用 typeof 来检测对象是否已定义：
`if (typeof myObj !== "undefined" && myObj !== null) `
程序块作用域
在每个代码块中 JavaScript 不会创建一个新的作用域，一般各个代码块的作用域都是全局的。

以下代码的的变量 i 返回 10，而不是 undefined：
```
for (var i = 0; i < 10; i++) {
    // some code
}
return i;
```

## JavaScript 表单验证
HTML 表单验证可以通过 JavaScript 来完成。
```
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
```
```
<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
名字: <input type="text" name="fname">
<input type="submit" value="提交">
</form>
```

**HTML 表单自动验证**
HTML 表单验证也可以通过浏览器来自动完成。

如果表单字段 (fname) 的值为空, required 属性会阻止表单提交
```
<form action="demo_form.php" method="post">
  <input type="text" name="fname" required="required">
  <input type="submit" value="提交">
</form>
```
> Internet Explorer 9 及更早 IE 浏览器不支持表单自动验证。

**HTML 约束验证**
```
约束验证 HTML 输入属性
属性	描述
disabled	规定输入的元素不可用
max	规定输入元素的最大值
min	规定输入元素的最小值
pattern	规定输入元素值的模式
required	规定输入元素字段是必需的
type 	规定输入元素的类型

约束验证 CSS 伪类选择器
选择器	描述
:disabled	选取属性为 "disabled" 属性的 input 元素
:invalid	选取无效的 input 元素
:optional	选择没有"required"属性的 input 元素
:required	选择有"required"属性的 input 元素
:valid	选取有效值的 input 元素
```

## JavaScript 验证 API
**约束验证 DOM 方法**
checkValidity()	如果 input 元素中的数据是合法的返回 true，否则返回 false。

setCustomValidity()	设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法。
使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成true，则 checkValidity 总是会返回false。如果要重新判断需要取消自定义提示，方式如下：
setCustomValidity('') 
setCustomValidity(null) 
setCustomValidity(undefined)

```
<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">验证</button>
 
<p id="demo"></p>
 
<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}
</script>
```

**约束验证 DOM 属性**
validity	布尔属性值，返回 input 输入值是否合法
validationMessage	浏览器错误提示信息
willValidate	指定 input 是否需要验证

**Validity 属性**
customError	设置为 true, 如果设置了自定义的 validity 信息。
patternMismatch	设置为 true, 如果元素的值不匹配它的模式属性。
rangeOverflow	设置为 true, 如果元素的值大于设置的最大值。
rangeUnderflow	设置为 true, 如果元素的值小于它的最小值。
stepMismatch	设置为 true, 如果元素的值不是按照规定的 step 属性设置。
tooLong	设置为 true, 如果元素的值超过了 maxLength 属性设置的长度。
typeMismatch	设置为 true, 如果元素的值不是预期相匹配的类型。
valueMissing	设置为 true，如果元素 (required 属性) 没有值。
valid	设置为 true，如果元素的值是合法的。

```
<input id="id1" type="number" max="100">
<button onclick="myFunction()">验证</button>
 
<p id="demo"></p>
 
<script>
function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
       txt = "输入的值太大了";
    }
    document.getElementById("demo").innerHTML = txt;
}
</script>
```

```
<input id="id1" type="number" min="100" required>
<button onclick="myFunction()">OK</button>
 
<p id="demo"></p>
 
<script>
function myFunction() {
    var txt = "";
    var inpObj = document.getElementById("id1");
    if(!isNumeric(inpObj.value)) {
        txt = "你输入的不是数字";
    } else if (inpObj.validity.rangeUnderflow) {
        txt = "输入的值太小了";
    } else {
        txt = "输入正确";
    }
    document.getElementById("demo").innerHTML = txt;
}
 
// 判断输入是否为数字
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
</script>
```

## JavaScript 保留关键字
在 JavaScript 中，一些标识符是保留关键字，不能用作变量名或函数名。

**JavaScript 保留关键字**
Javascript 的保留关键字不可以用作变量、标签或者函数名。有些保留关键字是作为 Javascript 以后扩展使用。
```
abstract	arguments	boolean	break	byte
case	catch	char	class*	const
continue	debugger	default	delete	do
double	else	enum*	eval	export*
extends*	false	final	finally	float
for	function	goto	if	implements
import*	in	instanceof	int	interface
let	long	native	new	null
package	private	protected	public	return
short	static	super*	switch	synchronized
this	throw	throws	transient	true
try	typeof	var	void	volatile
while	with	yield		
```
> * 标记的关键字是 ECMAScript5 中新添加的。

**JavaScript 对象、属性和方法**
您也应该避免使用 JavaScript 内置的对象、属性和方法的名称作为 Javascript 的变量或函数名：
```
Array	Date	eval	function	hasOwnProperty
Infinity	isFinite	isNaN	isPrototypeOf	length
Math	NaN	name	Number	Object
prototype	String	toString	undefined	valueOf
```

**Java 保留关键字**
JavaScript 经常与 Java 一起使用。您应该避免使用一些 Java 对象和属性作为 JavaScript 标识符：
```
getClass	java	JavaArray	javaClass	JavaObject	JavaPackage
```

**Windows 保留关键字**
JavaScript 可以在 HTML 外部使用。它可在许多其他应用程序中作为编程语言使用。
在 HTML 中，您必须（为了可移植性，您也应该这么做）避免使用 HTML 和 Windows 对象和属性的名称作为 Javascript 的变量及函数名：
```
alert	all	anchor	anchors	area
assign	blur	button	checkbox	clearInterval
clearTimeout	clientInformation	close	closed	confirm
constructor	crypto	decodeURI	decodeURIComponent	defaultStatus
document	element	elements	embed	embeds
encodeURI	encodeURIComponent	escape	event	fileUpload
focus	form	forms	frame	innerHeight
innerWidth	layer	layers	link	location
mimeTypes	navigate	navigator	frames	frameRate
hidden	history	image	images	offscreenBuffering
open	opener	option	outerHeight	outerWidth
packages	pageXOffset	pageYOffset	parent	parseFloat
parseInt	password	pkcs11	plugin	prompt
propertyIsEnum	radio	reset	screenX	screenY
scroll	secure	select	self	setInterval
setTimeout	status	submit	taint	text
textarea	top	unescape	untaint	window
```

**HTML 事件句柄**
除此之外，您还应该避免使用 HTML 事件句柄的名称作为 Javascript 的变量及函数名。
```
onblur	onclick	onerror	onfocus
onkeydown	onkeypress	onkeyup	onmouseover
onload	onmouseup	onmousedown	onsubmit
```

## JavaScript this 关键字
面向对象语言中 this 表示当前对象的一个引用。
但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
在方法中，this 表示该方法所属的对象。
如果单独使用，this 表示全局对象。
在函数中，this 表示全局对象。
在函数中，在严格模式下，this 是未定义的(undefined)。
在事件中，this 表示接收事件的元素。
类似 call() 和 apply() 方法可以将 this 引用到任何对象。

**方法中的 this**
在对象方法中， this 指向调用它所在方法的对象。
```
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

**单独使用 this**
单独使用 this，则它指向全局(Global)对象。
在浏览器中，window 就是该全局对象为 [object Window]

**函数中使用 this（默认）**
在函数中，函数的所属者默认绑定到 this 上。
在浏览器中，window 就是该全局对象为 [object Window]

**函数中使用 this（严格模式）**
严格模式下函数是没有绑定到 this 上，这时候 this 是 undefined。
```
"use strict";
function myFunction() {
  return this;
}
```

**事件中的 this**
在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素
```
<button onclick="this.style.display='none'">
点我后我就消失了
</button>
```

**对象方法中绑定**
this 是 person 对象，person 对象是函数的所有者
```
var person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
> 说明: this.firstName 表示 this (person) 对象的 firstName 属性。

**显式函数绑定**
在 JavaScript 中函数也是对象，对象则有方法，apply 和 call 就是函数对象的方法。这两个方法异常强大，他们允许切换函数执行的上下文环境（context），即 this 绑定的对象。

当我们使用 person2 作为参数来调用 person1.fullName 方法时, this 将指向 person2, 即便它是 person1 的方法
```
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // 返回 "John Doe"
```

## JavaScript let 和 const
ECMAScript 2015(ECMAScript 6)
ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: let 和 const。
let 声明的变量只在 let 命令所在的代码块内有效。
const 声明一个只读的常量，一旦声明，常量的值就不能改变。
在 ES6 之前，JavaScript 只有两种作用域： 全局变量 与 函数内的局部变量。

**全局变量**
```
var carName = "Volvo";
 
// 这里可以使用 carName 变量
 
function myFunction() {
    // 这里也可以使用 carName 变量
}
```
> 全局变量在 JavaScript 程序的任何地方都可以访问。

**局部变量**
```
// 这里不能使用 carName 变量
function myFunction() {
    var carName = "Volvo";
    // 这里可以使用 carName 变量
}
// 这里不能使用 carName 变量
```

**JavaScript 块级作用域(Block Scope)**
使用 var 关键字声明的变量不具备块级作用域的特性，它在 {} 外依然能被访问到。
在 ES6 之前，是没有块级作用域的概念的。
ES6 可以使用 let 关键字来实现块级作用域。
let 声明的变量只在 let 命令所在的代码块 {} 内有效，在 {} 之外不能访问。
```
{ 
    var x = 2; 
}
// 这里可以使用 x 变量

{ 
    let x = 2;
}
// 这里不能使用 x 变量
```

**重新定义变量**
使用 var 关键字重新声明变量可能会带来问题。

在块中重新声明变量也会重新声明块外的变量
```
var x = 10;
// 这里输出 x 为 10
{ 
    var x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 2

var x = 10;
// 这里输出 x 为 10
{ 
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
```

**循环作用域**
```
var i = 5;
for (var i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 10

let i = 5;
for (let i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 5
```
> 在第一个实例中，使用了 var 关键字，它声明的变量是全局的，包括循环体内与循环体外

> 在第二个实例中，使用 let 关键字， 它声明的变量作用域只在循环体内，循环体外的变量不受影响。

**局部变量**
在函数体内使用 var 和 let 关键字声明的变量有点类似。
```
// 使用 var
function myFunction() {
    var carName = "Volvo";   // 局部作用域
}

// 使用 let
function myFunction() {
    let carName = "Volvo";   //  局部作用域
}
```

**全局变量**
在函数体外或代码块外使用 var 和 let 关键字声明的变量也有点类似。
```
// 使用 var
var x = 2;       // 全局作用域

// 使用 let
let x = 2;       // 全局作用域
```

**HTML 代码中使用全局变量**
在 JavaScript 中, 全局作用域是针对 JavaScript 环境。
在 HTML 中, 全局作用域是针对 window 对象。
使用 var 关键字声明的全局作用域变量属于 window 对象:
```
var carName = "Volvo";
// 可以使用 window.carName 访问变量
使用 let 关键字声明的全局作用域变量不属于 window 对象:
let carName = "Volvo";
// 不能使用 window.carName 访问变量
```

**重置变量**
使用 var 关键字声明的变量在任何地方都可以修改
```
var x = 2;
 
// x 为 2
 
var x = 3;
 
// 现在 x 为 3
```
```
在相同的作用域或块级作用域中，不能使用 let 关键字来重置 var 关键字声明的变量:

var x = 2;       // 合法
let x = 3;       // 不合法

{
    var x = 4;   // 合法
    let x = 5   // 不合法
}
在相同的作用域或块级作用域中，不能使用 let 关键字来重置 let 关键字声明的变量:

let x = 2;       // 合法
let x = 3;       // 不合法

{
    let x = 4;   // 合法
    let x = 5;   // 不合法
}
在相同的作用域或块级作用域中，不能使用 var 关键字来重置 let 关键字声明的变量:

let x = 2;       // 合法
var x = 3;       // 不合法

{
    let x = 4;   // 合法
    var x = 5;   // 不合法
}
let 关键字在不同作用域，或不同块级作用域中是可以重新声明赋值的:

let x = 2;       // 合法

{
    let x = 3;   // 合法
}

{
    let x = 4;   // 合法
}
```

**变量提升**
```
JavaScript 中，var 关键字定义的变量可以在使用后声明，也就是变量可以先使用再声明
// 在这里可以使用 carName 变量
 
var carName;
let 关键字定义的变量则不可以在使用后声明，也就是变量需要先声明再使用。

// 在这里不可以使用 carName 变量

let carName;
```

**const 关键字**
const 用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改
```
const PI = 3.141592653589793;
PI = 3.14;      // 报错
PI = PI + 10;   // 报错
```
```
const定义常量与使用let 定义的变量相似：

二者都是块级作用域
都不能和它所在作用域内的其他变量或函数拥有相同的名称
两者还有以下两点区别：

const声明的常量必须初始化，而let声明的变量不用
const 定义常量的值不能通过再赋值修改，也不能再次声明。而 let 定义的变量值可以修改。
var x = 10;
// 这里输出 x 为 10
{ 
    const x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
const 声明的常量必须初始化：

// 错误写法
const PI;
PI = 3.14159265359;

// 正确写法
const PI = 3.14159265359;
```

**并非真正的常量**
```
const 的本质: const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用 const 定义的对象或者数组，其实是可变的。
// 创建常量对象
const car = {type:"Fiat", model:"500", color:"white"};
 
// 修改属性:
car.color = "red";
 
// 添加属性
car.owner = "Johnson";

但是我们不能对常量对象重新赋值：

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // 错误

以下实例修改常量数组：

// 创建常量数组
const cars = ["Saab", "Volvo", "BMW"];
 
// 修改元素
cars[0] = "Toyota";
 
// 添加元素
cars.push("Audi");

但是我们不能对常量数组重新赋值：

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // 错误
```

## JavaScript JSON
JSON 是用于存储和传输数据的格式。

JSON 通常用于服务端向网页传递数据 。

**JSON 格式化后为 JavaScript 对象**
JSON 格式在语法上与创建 JavaScript 对象代码是相同的。

由于它们很相似，所以 JavaScript 程序可以很容易的将 JSON 数据转换为 JavaScript 对象。

**JSON 语法规则**
数据为 键/值 对。
数据由逗号分隔。
大括号保存对象
方括号保存数组
JSON 数据 - 一个名称对应一个值
JSON 数据格式为 键/值 对，就像 JavaScript 对象属性。

键/值对包括字段名称（在双引号中），后面一个冒号，然后是值
`"name":"Runoob"`

**JSON 对象**
JSON 对象保存在大括号内。
`{"name":"Runoob", "url":"www.runoob.com"}`

**JSON 数组**
```
"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]
```

**JSON 字符串转换为 JavaScript 对象**
```
var text = '{ "sites" : [' +
    '{ "name":"Runoob" , "url":"www.runoob.com" },' +
    '{ "name":"Google" , "url":"www.google.com" },' +
    '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
    
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;
```
> JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
> JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。

## javascript:void(0) 含义
javascript:void(0) 中最关键的是 void 关键字， void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
```
<a href="javascript:void(0)">单击此处什么也不会发生</a>
<a href="javascript:void(alert('Warning!!!'))">点我!</a>
```

**href="#"与href="javascript:void(0)"的区别**
`#` 包含了一个位置信息，默认的锚是#top 也就是网页的上端。

而javascript:void(0), 仅仅表示一个死链接。

在页面很长的时候会使用 # 来定位页面的具体位置，格式为：# + id。

如果你要定义一个死链接请使用 javascript:void(0) 。
```
<a href="javascript:void(0);">点我没有反应的!</a>
<a href="#pos">点我定位到指定位置!</a>
<br>
...
<br>
<p id="pos">尾部定位点</p>
```

## JavaScript 代码规范
所有的 JavaScript 项目适用同一种规范。

**变量名**
变量名推荐使用驼峰法来命名(camelCase):
```
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```

**空格与运算符**
通常运算符 ( = + - * / ) 前后需要添加空格
```
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];
```

**代码缩进**
通常使用 4 个空格符号来缩进代码块

**语句规则**
简单语句的通用规则:
一条语句通常以分号作为结束符。

复杂语句的通用规则:
将左花括号放在第一行的结尾。
左花括号前添加一空格。
将右花括号独立放在一行。
不要以分号结束一个复杂的声明。
```
函数:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

循环:
for (i = 0; i < 5; i++) {
    x += i;
}

条件语句:
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```

**对象规则**
对象定义的规则:
将左花括号与类名放在同一行。
冒号与属性值间有个空格。
字符串使用双引号，数字不需要。
最后一个属性-值对后面不要添加逗号。
```
将右花括号独立放在一行，并以分号作为结束符号。
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
短的对象代码可以直接写成一行:

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

**每行代码字符小于 80**
如果一个 JavaScript 语句超过了 80 个字符，建议在 运算符或者逗号后换行。

**命名规则**
变量和函数为小驼峰法标识, 即除第一个单词之外，其他单词首字母大写（ lowerCamelCase）
全局变量为大写 (UPPERCASE )
常量 (如 PI) 为大写 (UPPERCASE )
变量命名你是否使用这几种规则： hyp-hens, camelCase, 或 under_scores ?

HTML 和 CSS 的横杠(-)字符:
HTML5 属性可以以 data- (如：data-quantity, data-price) 作为前缀。
CSS 使用 - 来连接属性名 (font-size)。

**HTML 载入外部 JavaScript 文件**
`<script src="myscript.js">`

**文件扩展名**
HTML 文件后缀可以是 .html (或 .htm)。
CSS 文件后缀是 .css 。
JavaScript 文件后缀是 .js 。

**使用小写文件名**
大多 Web 服务器 (Apache, Unix) 对大小写敏感： london.jpg 不能通过 London.jpg 访问。
其他 Web 服务器 (Microsoft, IIS) 对大小写不敏感： london.jpg 可以通过 London.jpg 或 london.jpg 访问。
你必须保持统一的风格，我们建议统一使用小写的文件名。

## JavaScript 函数定义
JavaScript 使用关键字 function 定义函数。

函数可以通过声明定义，也可以是一个表达式。

**函数声明**
```
function functionName(parameters) {
  执行的代码
}
function myFunction(a, b) {
    return a * b;
}
```

**函数表达式**
JavaScript 函数可以通过一个表达式定义。

函数表达式可以存储在变量中
```
var x = function (a, b) {return a * b};
var z = x(4, 3);
```
以上函数实际上是一个 匿名函数 (函数没有名称)。

函数存储在变量中，不需要函数名称，通常通过变量名来调用。

**Function() 构造函数**
在以上实例中，我们了解到函数通过关键字 function 定义。

函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。
```
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
实际上，你不必使用构造函数。上面实例可以写成
var myFunction = function (a, b) {return a * b};

var x = myFunction(4, 3);
```
在 JavaScript 中，很多时候，你需要避免使用 new 关键字。

**函数提升（Hoisting）**
提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。

提升（Hoisting）应用在变量的声明与函数的声明。
```
myFunction(5);

function myFunction(y) {
    return y * y;
}
```

**自调用函数**
函数表达式可以 "自调用"。

自调用表达式会自动调用。

如果表达式后面紧跟 () ，则会自动调用。
```
(function () {
    var x = "Hello!!";      // 我将调用自己
})();
```
以上函数实际上是一个 匿名自我调用的函数 (没有函数名)。

**函数可作为一个值使用**
```
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3);
```

**JavaScript 函数可作为表达式使用**
```
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3) * 2;
```

**箭头函数**
ES6 新增了箭头函数。
有的箭头函数都没有自己的 this。 不适合定义一个 对象的方法。

当我们使用箭头函数的时候，箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的。

箭头函数是不能提升的，所以需要在使用之前定义。

使用 const 比使用 var 更安全，因为函数表达式始终是一个常量。

如果函数部分只是一个语句，则可以省略 return 关键字和大括号 {}，这样做是一个比较好的习惯:
`const x = (x, y) => { return x * y };`

箭头函数表达式的语法比普通函数表达式更简洁。
```
(参数1, 参数2, …, 参数N) => { 函数声明 }

(参数1, 参数2, …, 参数N) => 表达式(单一)
// 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

当只有一个参数时，圆括号是可选的：

(单一参数) => {函数声明}
单一参数 => {函数声明}
没有参数的函数应该写成一对圆括号:

() => {函数声明}
```

```
// ES5
var x = function(x, y) {
     return x * y;
}
 
// ES6
const x = (x, y) => x * y;
```
> 注意：IE11 及更早 IE 版本不支持箭头函数。

## JavaScript 函数参数
JavaScript 函数对参数的值没有进行任何的检查。
JavaScript 函数定义显式参数时没有指定数据类型。
JavaScript 函数对隐式参数没有进行类型检测。
JavaScript 函数对隐式参数的个数没有进行检测。

**ES6 函数可以自带参数**
```
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
 
myFunction(0, 2) // 输出 2
myFunction(5); // 输出 15, y 参数的默认值
```

**arguments 对象**
JavaScript 函数有个内置的对象 arguments 对象。

argument 对象包含了函数调用的参数数组。

找到最大的一个参数的值
```
x = findMax(1, 123, 500, 115, 44, 88);
 
function findMax() {
    var i, max = arguments[0];
    
    if(arguments.length < 2) return max;
 
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
```
创建一个函数用来统计所有数值的和
```
x = sumAll(1, 123, 500, 115, 44, 88);
 
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```

**通过值传递参数**
在函数中调用的参数是函数的隐式参数。

JavaScript 隐式参数通过值来传递：函数仅仅只是获取值。

如果函数修改参数的值，不会修改显式参数的初始值（在函数外定义）。

隐式参数的改变在函数外是不可见的。

**通过对象传递参数**
在JavaScript中，可以引用对象的值。

因此我们在函数内部修改对象的属性就会修改其初始的值。

修改对象属性可作用于函数外部（全局变量）。

修改对象属性在函数外是可见的。

## JavaScript 函数调用
JavaScript 函数有 4 种调用方式。

每种方式的不同在于 this 的初始化。

**this 关键字**
一般而言，在Javascript中，this指向函数执行时的当前对象。

注意 this 是保留关键字，你不能修改 this 的值。

**调用 JavaScript 函数**
```
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);           // myFunction(10, 2) 返回 20

以上函数不属于任何对象。但是在 JavaScript 中它始终是默认的全局对象。

在 HTML 中默认的全局对象是 HTML 页面本身，所以函数是属于 HTML 页面。

在浏览器中的页面对象是浏览器窗口(window 对象)。以上函数会自动变为 window 对象的函数。

myFunction() 和 window.myFunction() 是一样的：

function myFunction(a, b) {
    return a * b;
}
window.myFunction(10, 2);    // window.myFunction(10, 2) 返回 20
```

**全局对象**
当函数没有被自身的对象调用时 this 的值就会变成全局对象。

在 web 浏览器中全局对象是浏览器窗口（window 对象）。

该实例返回 this 的值是 window 对象:
```
function myFunction() {
    return this;
}
myFunction();                // 返回 window 对象
```
函数作为全局对象调用，会使 this 的值成为全局对象。
使用 window 对象作为一个变量容易造成程序崩溃。

**函数作为方法调用**
在 JavaScript 中你可以将函数定义为对象的方法。
```
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // 返回 "John Doe"
```
fullName 方法是一个函数。函数属于对象。 myObject 是函数的所有者。

this对象，拥有 JavaScript 代码。实例中 this 的值为 myObject 对象。

```
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}
myObject.fullName();          // 返回 [object Object] (所有者对象)
```
Note	函数作为对象方法调用，会使得 this 的值成为对象本身。

**使用构造函数调用函数**
如果函数调用前使用了 new 关键字, 则是调用了构造函数。

这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象：
```
// 构造函数:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
 
// This    creates a new object
var x = new myFunction("John","Doe");
x.firstName;                             // 返回 "John"
```
构造函数的调用会创建一个新的对象。新对象会继承构造函数的属性和方法。

构造函数中 this 关键字没有任何的值。
this 的值在函数调用实例化对象(new object)时创建。

**作为函数方法调用函数**
在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。

call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
```
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);     // 返回 20

function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // 返回 20
```
两个方法都使用了对象本身作为第一个参数。 两者的区别在于第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。

在 JavaScript 严格模式(strict mode)下, 在调用函数时第一个参数会成为 this 的值， 即使该参数不是一个对象。

在 JavaScript 非严格模式(non-strict mode)下, 如果第一个参数的值是 null 或 undefined, 它将使用全局对象替代。

通过 call() 或 apply() 方法你可以设置 this 的值, 且作为已存在对象的新方法调用。

## JavaScript 闭包
私有变量可以用到闭包。
```
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 
// 计数器为 3
```
变量 add 指定了函数自我调用的返回字值。

自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。

add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。

这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。

计数器受匿名函数的作用域保护，只能通过 add 方法修改。

闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。

直观的说就是形成一个不销毁的栈环境。

## JavaScript HTML DOM
通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。
JavaScript 能够改变页面中的所有 HTML 元素
JavaScript 能够改变页面中的所有 HTML 属性
JavaScript 能够改变页面中的所有 CSS 样式
JavaScript 能够对页面中的所有事件做出反应

**查找 HTML 元素**
通过 JavaScript，您需要操作 HTML 元素。
为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：
通过 id 找到 HTML 元素
通过标签名找到 HTML 元素
通过类名找到 HTML 元素

**通过 id 查找 HTML 元素**
在 DOM 中查找 HTML 元素的最简单的方法，是通过使用元素的 id。
`var x=document.getElementById("intro");`

**通过标签名查找 HTML 元素**
查找 id="main" 的元素，然后查找 id="main" 元素中的所有 <p> 元素
```
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");
```

**通过类名找到 HTML 元素**
通过 getElementsByClassName 函数来查找 class="intro" 的元素：
`var x=document.getElementsByClassName("intro");`

## JavaScript HTML DOM - 改变 HTML
HTML DOM 允许 JavaScript 改变 HTML 元素的内容。

**改变 HTML 输出流**
在 JavaScript 中，document.write() 可用于直接向 HTML 输出流写内容。
```
<!DOCTYPE html>
<html>
<body>

<script>
document.write(Date());
</script>

</body>
</html>
```
> 绝对不要在文档(DOM)加载完成之后使用 document.write()。这会覆盖该文档。

**改变 HTML 内容**
修改 HTML 内容的最简单的方法是使用 innerHTML 属性。
`document.getElementById(id).innerHTML=新的 HTML`

```
改变了 <p>元素的内容：
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML="新文本!";
</script>

</body>
</html>

改变了 <h1> 元素的内容：
<!DOCTYPE html>
<html>
<body>

<h1 id="header">Old Header</h1>

<script>
var element=document.getElementById("header");
element.innerHTML="新标题";
</script>

</body>
</html>
上面的 HTML 文档含有 id="header" 的 <h1> 元素
我们使用 HTML DOM 来获得 id="header" 的元素
JavaScript 更改此元素的内容 (innerHTML)
```

**改变 HTML 属性**
```
如需改变 HTML 元素的属性，请使用这个语法：
`document.getElementById(id).attribute=新属性值`
改变了 <img> 元素的 src 属性：
<!DOCTYPE html>
<html>
<body>

<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src="landscape.jpg";
</script>

</body>
</html>
上面的 HTML 文档含有 id="image" 的 <img> 元素
我们使用 HTML DOM 来获得 id="image" 的元素
JavaScript 更改此元素的属性（把 "smiley.gif" 改为 "landscape.jpg"）
```

## JavaScript HTML DOM - 改变CSS
HTML DOM 允许 JavaScript 改变 HTML 元素的样式。

**改变 HTML 样式**
如需改变 HTML 元素的样式，请使用这个语法：
`document.getElementById(id).style.property=新样式`

```
改变 <p> 元素的样式：
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
 
<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>
<script>
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>
<p>以上段落通过脚本修改。</p>
 
</body>
</html>
```

**使用事件**
HTML DOM 允许我们通过触发事件来执行代码。
元素被点击。
页面加载完成。
输入框被修改。
```
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">我的标题 1</h1>
<button type="button"
onclick="document.getElementById('id1').style.color='red'">
点我!</button>

</body>
</html>
```

## JavaScript HTML DOM 事件
HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。

**对事件做出反应**
当用户点击鼠标时
当网页已加载时
当图像已加载时
当鼠标移动到元素上时
当输入字段被改变时
当提交 HTML 表单时
当用户触发按键时

**HTML 事件属性**
如需向 HTML 元素分配 事件，您可以使用事件属性。
`<button onclick="displayDate()">点这里</button>`

**使用 HTML DOM 来分配事件**
```
<script>
document.getElementById("myBtn").onclick=function(){displayDate()};
</script>
```

**onload 和 onunload 事件**
onload 和 onunload 事件会在用户进入或离开页面时被触发。

onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。

onload 和 onunload 事件可用于处理 cookie。

`<body onload="checkCookies()">`

**onchange 事件**
onchange 事件常结合对输入字段的验证来使用。

下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数。

`<input type="text" id="fname" onchange="upperCase()">`

**onmouseover 和 onmouseout 事件**
onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

**onmousedown、onmouseup 以及 onclick 事件**
onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。

## JavaScript HTML DOM EventListener
**addEventListener() 方法**
addEventListener() 方法用于向指定元素添加事件句柄。

addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。

你可以向一个元素添加多个事件句柄。

你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。

你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。

addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。

当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。

你可以使用 removeEventListener() 方法来移除事件的监听。

**语法**
`element.addEventListener(event, function, useCapture);`
第一个参数是事件的类型 (如 "click" 或 "mousedown").

第二个参数是事件触发后调用的函数。

第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

注意:不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。

**向原元素添加事件句柄**
```
element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}
```

**向同一个元素中添加多个事件句柄**
addEventListener() 方法允许向同一个元素添加多个事件，且不会覆盖已存在的事件
```
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
```

**向 Window 对象添加事件句柄**
addEventListener() 方法允许你在 HTML DOM 对象添加事件监听， HTML DOM 对象如： HTML 元素, HTML 文档, window 对象。或者其他支出的事件对象如: xmlHttpRequest 对象。

```
当用户重置窗口大小时添加事件监听：

window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = sometext;
});
```

**传递参数**
当传递参数值时，使用"匿名函数"调用带参数的函数：
`element.addEventListener("click", function(){ myFunction(p1, p2); });`

**事件冒泡或事件捕获？**
```
事件传递有两种方式：冒泡与捕获。

事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？

在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。

在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。

addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：
`addEventListener(event, function, useCapture);`
默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。
`document.getElementById("myDiv").addEventListener("click", myFunction, true);`

**removeEventListener() 方法**
removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄
`element.removeEventListener("mousemove", myFunction);`

## JavaScript HTML DOM 元素 (节点)
本章节介绍如何向文档中添加和移除元素(节点)。

**创建新的 HTML 元素 (节点) - appendChild()**
要创建新的 HTML 元素 (节点)需要先创建一个元素，然后在已存在的元素中添加它。
```

```
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
// 创建 <p> 元素:
var para = document.createElement("p");
// 为 <p> 元素创建一个新的文本节点
var node = document.createTextNode("这是一个新的段落。");
// 将文本节点添加到 <p> 元素中
para.appendChild(node);
 
// 在一个已存在的元素中添加 p 元素
var element = document.getElementById("div1");
// 添加到已存在的元素中
element.appendChild(para);
</script>
```

**创建新的 HTML 元素 (节点) - insertBefore()**
以上的实例我们使用了 appendChild() 方法，它用于添加新元素到尾部。

如果我们需要将新元素添加到开始位置，可以使用 insertBefore() 方法:

```
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);
</script>
```

**移除已存在的元素**
要移除一个元素，你需要知道该元素的父元素。
```
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>
```
> 注意：早期的 Internet Explorer 浏览器不支持 node.remove() 方法。

**替换 HTML 元素 - replaceChild()**
我们可以使用 replaceChild() 方法来替换 HTML DOM 中的元素。
```
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>
```

## JavaScript HTML DOM 集合(Collection)

**HTMLCollection 对象**
getElementsByTagName() 方法返回 HTMLCollection 对象。

HTMLCollection 对象类似包含 HTML 元素的一个数组。

```
var x = document.getElementsByTagName("p");
集合中的元素可以通过索引(以 0 为起始位置)来访问。

访问第二个 <p> 元素可以是以下代码:

y = x[1];
```

**HTMLCollection 对象 length 属性**
HTMLCollection 对象的 length 属性定义了集合中元素的数量。

```
// 获取 <p> 元素的集合
var myCollection = document.getElementsByTagName("p");
// 显示集合元素个数
document.getElementById("demo").innerHTML = myCollection.length;
```
```
// 修改所有 <p> 元素的背景颜色:

var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
    myCollection[i].style.backgroundColor = "red";
}
```
> HTMLCollection 不是一个数组！

> HTMLCollection 看起来可能是一个数组，但其实不是。

> 你可以像数组一样，使用索引来获取元素。

> HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。

## JavaScript HTML DOM 节点列表
NodeList 对象是一个从文档中获取的节点列表 (集合) 。

NodeList 对象类似 HTMLCollection 对象。

一些旧版本浏览器中的方法（如：getElementsByClassName()）返回的是 NodeList 对象，而不是 HTMLCollection 对象。

所有浏览器的 childNodes 属性返回的是 NodeList 对象。

大部分浏览器的 querySelectorAll() 返回 NodeList 对象。
```
var myNodeList = document.querySelectorAll("p");
NodeList 中的元素可以通过索引(以 0 为起始位置)来访问。

访问第二个 <p> 元素可以是以下代码:

y = myNodeList[1];
```

**NodeList 对象 length 属性**
NodeList 对象 length 属性定义了节点列表中元素的数量。
```
// 获取 <p> 元素的集合
var myNodelist = document.querySelectorAll("p");
// 显示节点列表的元素个数
document.getElementById("demo").innerHTML = myNodelist.length;
```
```
// 修改节点列表中所有 <p> 元素的背景颜色:

var myNodelist = document.querySelectorAll("p");
var i;
for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = "red";
}
```

**HTMLCollection 与 NodeList 的区别**
HTMLCollection 是 HTML 元素的集合。

NodeList 是一个文档节点的集合。

NodeList 与 HTMLCollection 有很多类似的地方。

NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。

NodeList 与 HTMLCollection 都有 length 属性。

HTMLCollection 元素可以通过 name，id 或索引来获取。

NodeList 只能通过索引来获取。

只有 NodeList 对象有包含属性节点和文本节点。

节点列表不是一个数组！

节点列表看起来可能是一个数组，但其实不是。

你可以像数组一样，使用索引来获取元素。

节点列表无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。

## JavaScript 对象
JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...

此外，JavaScript 允许自定义对象。

**所有事物都是对象**
JavaScript 提供多个内建对象，比如 String、Date、Array 等等。 对象只是带有属性和方法的特殊数据类型。

布尔型可以是一个对象。
数字型可以是一个对象。
字符串也可以是一个对象
日期是一个对象
数学和正则表达式也是对象
数组是一个对象
甚至函数也可以是对象

**JavaScript 对象**
对象只是一种特殊的数据。对象拥有属性和方法。

**访问对象的属性**
属性是与对象相关的值。

```
// 访问对象属性的语法是：
objectName.propertyName
// 这个例子使用了 String 对象的 length 属性来获得字符串的长度：
var message="Hello World!";
var x=message.length;
// 在以上代码执行后，x 的值将是：
// 12
```

**访问对象的方法**
方法是能够在对象上执行的动作。
```
// 您可以通过以下语法来调用方法：

objectName.methodName()
// 这个例子使用了 String 对象的 toUpperCase() 方法来将文本转换为大写：

var message="Hello world!";
var x=message.toUpperCase();
// 在以上代码执行后，x 的值将是：

// HELLO WORLD!
```

**创建 JavaScript 对象**
通过 JavaScript，您能够定义并创建自己的对象。

创建新对象有两种不同的方法：

定义并创建对象的实例
使用函数来定义对象，然后创建新的对象实例

**创建直接的实例**
这个例子创建了对象的一个新实例，并向其添加了四个属性：
```
person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";
// 替代语法（使用对象 literals）：
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
```

**使用对象构造器**
本例使用函数来构造对象：
```
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}
```
> 在JavaScript中，this通常指向的是我们正在执行的函数本身，或者是指向该函数所属的对象（运行时）

**创建 JavaScript 对象实例**
一旦您有了对象构造器，就可以创建新的对象实例，就像这样：
```
var myFather=new person("John","Doe",50,"blue");
var myMother=new person("Sally","Rally",48,"green");
```

**把属性添加到 JavaScript 对象**
您可以通过为对象赋值，向已有对象添加新属性：

假设 person 对象已存在 - 您可以为其添加这些新属性：firstname、lastname、age 以及 eyecolor：
```
person.firstname="John";
person.lastname="Doe";
person.age=30;
person.eyecolor="blue";

x=person.firstname;
在以上代码执行后，x 的值将是：

John
```

**把方法添加到 JavaScript 对象**
方法只不过是附加在对象上的函数。

在构造器函数内部定义对象的方法：
```
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;

    this.changeName=changeName;
    function changeName(name)
    {
        this.lastname=name;
    }
}
```

**JavaScript 类**
JavaScript 是面向对象的语言，但 JavaScript 不使用类。

在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。

JavaScript 基于 prototype，而不是基于类的。

**JavaScript for...in 循环**
JavaScript for...in 语句循环遍历对象的属性。
```
var person={fname:"John",lname:"Doe",age:25}; 
 
for (x in person)
{
    txt=txt + person[x];
}
```

## JavaScript prototype（原型对象）
所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。

```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
 
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```

**prototype 继承**
所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法：

Date 对象从 Date.prototype 继承。
Array 对象从 Array.prototype 继承。
Person 对象从 Person.prototype 继承。
所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。

JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

Date 对象, Array 对象, 以及 Person 对象从 Object.prototype 继承。

**添加属性和方法**
有的时候我们想要在所有已经存在的对象添加新的属性或方法。

另外，有时候我们想要在对象的构造函数中添加属性或方法。
```
// 使用 prototype 属性就可以给对象的构造函数添加新的属性：

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
 
Person.prototype.nationality = "English";

// 当然我们也可以使用 prototype 属性就可以给对象的构造函数添加新的方法：

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
 
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```

## JavaScript Number 对象
JavaScript 只有一种数字类型。

可以使用也可以不使用小数点来书写数字。

**JavaScript 数字**
JavaScript 数字可以使用也可以不使用小数点来书写：

```
var pi=3.14;    // 使用小数点
var x=34;       // 不使用小数点
// 极大或极小的数字可通过科学（指数）计数法来写：

var y=123e5;    // 12300000
var z=123e-5;   // 0.00123
```

**所有 JavaScript 数字均为 64 位**
JavaScript 不是类型语言。与许多其他编程语言不同，JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等。

在JavaScript中，数字不分为整数类型和浮点型类型，所有的数字都是由 浮点型类型。JavaScript采用IEEE754标准定义的64位浮点格式表示数字，它能表示最大值为±1.7976931348623157 x 10308，最小值为±5 x 10 -324

**精度**
整数（不使用小数点或指数计数法）最多为 15 位。
```
var x = 999999999999999;   // x 为 999999999999999
var y = 9999999999999999;  // y 为 10000000000000000

// 小数的最大位数是 17，但是浮点运算并不总是 100% 准确：

var x = 0.2+0.1; // 输出结果为 0.30000000000000004
```

**八进制和十六进制**
如果前缀为 0，则 JavaScript 会把数值常量解释为八进制数，如果前缀为 0 和 "x"，则解释为十六进制数。
```
var y = 0377;
var z = 0xFF;

lamp	绝不要在数字前面写零，除非您需要进行八进制转换。 
默认情况下，JavaScript 数字为十进制显示。

但是你可以使用 toString() 方法 输出16进制、8进制、2进制。

var myNumber=128;
myNumber.toString(16);   // 返回 80
myNumber.toString(8);    // 返回 200
myNumber.toString(2);    // 返回 10000000
```

**无穷大（Infinity）**
当数字运算结果超过了JavaScript所能表示的数字上限（溢出），结果为一个特殊的无穷大（infinity）值，在JavaScript中以Infinity表示。同样地，当负数的值超过了JavaScript所能表示的负数范围，结果为负无穷大，在JavaScript中以-Infinity表示。无穷大值的行为特性和我们所期望的是一致的：基于它们的加、减、乘和除运算结果还是无穷大（当然还保留它们的正负号）。
```
myNumber=2;
while (myNumber!=Infinity)
{
    myNumber=myNumber*myNumber; // 重复计算直到 myNumber 等于 Infinity
}

除以0也产生了无限:

var x = 2/0;
var y = -2/0;
```

**NaN - 非数字值**
NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值，来指示其不是数字值。

你可以使用 isNaN() 全局函数来判断一个值是否是 NaN 值。
```
var x = 1000 / "Apple";
isNaN(x); // 返回 true
var y = 100 / "1000";
isNaN(y); // 返回 false

除以0是无穷大，无穷大是一个数字:

var x = 1000 / 0;
isNaN(x); // 返回 false
```

**数字可以是数字或者对象**
数字可以私有数据进行初始化，就像 x = 123;

JavaScript 数字对象初始化数据， var y = new Number(123);
```
var x = 123;
var y = new Number(123);
typeof(x) // 返回 Number
typeof(y) // 返回 Object

var x = 123;             
var y = new Number(123);
(x === y) // 为 false，因为 x 是一个数字，y 是一个对象
```

**数字属性**
MAX_VALUE
MIN_VALUE
NEGATIVE_INFINITY
POSITIVE_INFINITY
NaN
prototype
constructor
**数字方法**
toExponential()
toFixed()
toPrecision()
toString()
valueOf()

## JavaScript 字符串（String） 对象
String 对象用于处理已有的字符块。

**JavaScript 字符串**
一个字符串用于存储一系列字符就像 "John Doe".

一个字符串可以使用单引号或双引号：

```
var carname="Volvo XC60";
var carname='Volvo XC60';
你使用位置（索引）可以访问字符串中任何的字符：

var character=carname[7];
字符串的索引从零开始, 所以字符串第一字符为 [0],第二个字符为 [1], 等等。

你可以在字符串中使用引号，如下实例：

var answer="It's alright";
var answer="He is called 'Johnny'";
var answer='He is called "Johnny"';
或者你可以在字符串中使用转义字符(\)使用引号：

var answer='It\'s alright';
var answer="He is called \"Johnny\"";
```

**字符串（String）**
字符串（String）使用长度属性length来计算字符串的长度：
```
var txt="Hello World!";
document.write(txt.length);

var txt="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.write(txt.length);
```

**在字符串中查找字符串**
字符串使用 indexOf() 来定位字符串中某一个指定的字符首次出现的位置：

```
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");
```
> 如果没找到对应的字符函数返回-1

> lastIndexOf() 方法在字符串末尾开始查找字符串出现的位置。

**内容匹配**
match()函数用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符。
```
var str="Hello world!";
document.write(str.match("world") + "<br>");
document.write(str.match("World") + "<br>");
document.write(str.match("world!"));
```

**替换内容**
replace() 方法在字符串中用某些字符替换另一些字符。
```
str="Please visit Microsoft!"
var n=str.replace("Microsoft","Runoob");
```

**字符串大小写转换**
字符串大小写转换使用函数 toUpperCase() / toLowerCase():
```
var txt="Hello World!";       // String
var txt1=txt.toUpperCase();   // txt1 文本会转换为大写
var txt2=txt.toLowerCase();   // txt2 文本会转换为小写
```

**字符串转为数组**
字符串使用split()函数转为数组:
```
txt="a,b,c,d,e"   // String
txt.split(",");   // 使用逗号分隔
txt.split(" ");   // 使用空格分隔
txt.split("|");   // 使用竖线分隔 
```

**特殊字符**
Javascript 中可以使用反斜线（\）插入特殊符号，如：撇号,引号等其他特殊符号。

查看如下 JavaScript 代码:
```
var txt="We are the so-called "Vikings" from the north.";
document.write(txt);
```
在JavaScript中，字符串的开始和停止使用单引号或双引号。这意味着，上面的字符串将被切成： We are the so-called

解决以上的问题可以使用反斜线来转义引号：
```
var txt="We are the so-called \"Vikings\" from the north.";
document.write(txt);
JavaScript将输出正确的文本字符串：We are the so-called "Vikings" from the north.

```
下表列出其他特殊字符，可以使用反斜线转义特殊字符：
\'	单引号
\"	双引号
\\	斜杆
\n	换行
\r	回车
\t	tab
\b	空格
\f	换页

**字符串属性和方法**
属性:
length
prototype
constructor
方法:
charAt()
charCodeAt()
concat()
fromCharCode()
indexOf()
lastIndexOf()
match()
replace()
search()
slice()
split()
substr()
substring()
toLowerCase()
toUpperCase()
valueOf()

## JavaScript Date（日期） 对象
日期对象用于处理日期和时间。

**创建日期**
Date 对象用于处理日期和时间。 

可以通过 new 关键词来定义 Date 对象。以下代码定义了名为 myDate 的 Date 对象：

有四种方式初始化日期:
```
new Date() // 当前日期和时间
new Date(milliseconds) //返回从 1970 年 1 月 1 日至今的毫秒数
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```
上面的参数大多数都是可选的，在不指定的情况下，默认参数是0。

实例化一个日期的一些例子：
```
var today = new Date()
var d1 = new Date("October 13, 1975 11:13:00")
var d2 = new Date(79,5,24)
var d3 = new Date(79,5,24,11,33,0)
```

**设置日期**
通过使用针对日期对象的方法，我们可以很容易地对日期进行操作。

在下面的例子中，我们为日期对象设置了一个特定的日期 (2010 年 1 月 14 日)：
```
var myDate=new Date();
myDate.setFullYear(2010,0,14);
在下面的例子中，我们将日期对象设置为 5 天后的日期：

var myDate=new Date();
myDate.setDate(myDate.getDate()+5);
注意: 如果增加天数会改变月份或者年份，那么日期对象会自动完成这种转换。
```

**两个日期比较**
日期对象也可用于比较两个日期。

下面的代码将当前日期与 2100 年 1 月 14 日做了比较：
```
var x=new Date();
x.setFullYear(2100,0,14);
var today = new Date();

if (x>today)
{
    alert("今天是2100年1月14日之前");
}
else
{
    alert("今天是2100年1月14日之后");
}
```

## JavaScript Array（数组） 对象
数组对象的作用是：使用单独的变量名来存储一系列的值。

**什么是数组?**
数组对象是使用单独的变量名来存储一系列的值。

数组可以用一个变量名存储所有的值，并且可以用变量名访问任何一个值。

数组中的每个元素都有自己的的ID，以便它可以很容易地被访问到。

**创建一个数组**
创建一个数组，有三种方法。

下面的代码定义了一个名为 myCars的数组对象：
```
// 1: 常规方式:

var myCars=new Array();
myCars[0]="Saab";      
myCars[1]="Volvo";
myCars[2]="BMW";
// 2: 简洁方式:

var myCars=new Array("Saab","Volvo","BMW");
// 3: 字面:

var myCars=["Saab","Volvo","BMW"];
```

**访问数组**
通过指定数组名以及索引号码，你可以访问某个特定的元素。
```
以下实例可以访问myCars数组的第一个值：

var name=myCars[0];
以下实例修改了数组 myCars 的第一个元素:

myCars[0]="Opel";

lamp	[0] 是数组的第一个元素。[1] 是数组的第二个元素。
```

**在一个数组中你可以有不同的对象**
所有的JavaScript变量都是对象。数组元素是对象。函数是对象。

因此，你可以在数组中有不同的变量类型。

你可以在一个数组中包含对象元素、函数、数组：
```
myArray[0]=Date.now;
myArray[1]=myFunction;
myArray[2]=myCars;
```

**数组方法和属性**
使用数组对象预定义属性和方法：
```
var x=myCars.length             // myCars 中元素的数量
var y=myCars.indexOf("Volvo")   // "Volvo" 值的索引值
```

**创建新方法**
原型是JavaScript全局构造函数。它可以构建新Javascript对象的属性和方法。
```
Array.prototype.myUcase=function(){
    for (i=0;i<this.length;i++){
        this[i]=this[i].toUpperCase();
    }
}
```

## JavaScript Boolean（布尔） 对象
Boolean（布尔）对象用于将非布尔值转换为布尔值（true 或者 false）。

**创建 Boolean 对象**
Boolean 对象代表两个值:"true" 或者 "false"
下面的代码定义了一个名为 myBoolean 的布尔对象：
`var myBoolean=new Boolean();`
如果布尔对象无初始值或者其值为:
0
-0
null
""
false
undefined
NaN
那么对象的值为 false。否则，其值为 true（即使当变量值为字符串 "false" 时）！

## JavaScript Math（算数） 对象
Math（算数）对象的作用是：执行常见的算数任务。

Math 对象提供多种算数值类型和函数。无需在使用这个对象之前对它进行定义。

使用Math的属性/方法的语法：
```
var x=Math.PI;
var y=Math.sqrt(16);
```
注意： Math对象无需在使用这个对象之前对它进行定义。

**算数值**
JavaScript 提供 8 种可被 Math 对象访问的算数值：

你可以参考如下Javascript常量使用方法：
```
Math.E
Math.PI
Math.SQRT2
Math.SQRT1_2
Math.LN2
Math.LN10
Math.LOG2E
Math.LOG10E
```

**算数方法**
除了可被 Math 对象访问的算数值以外，还有几个函数（方法）可以使用。

下面的例子使用了 Math 对象的 round 方法对一个数进行四舍五入。
```
document.write(Math.round(4.7));
上面的代码输出为：

5
```
下面的例子使用了 Math 对象的 random() 方法来返回一个介于 0 和 1 之间的随机数：
```
document.write(Math.random());
上面的代码输出为：

0.2868525030776532
```
下面的例子使用了 Math 对象的 floor() 方法和 random() 来返回一个介于 0 和 11 之间的随机数：
```
document.write(Math.floor(Math.random()*11));
上面的代码输出为：

2
```

## JavaScript RegExp 对象
RegExp：是正则表达式（regular expression）的简写。

**什么是 RegExp？**
正则表达式描述了字符的模式对象。

当您检索某个文本时，可以使用一种模式来描述要检索的内容。RegExp 就是这种模式。

简单的模式可以是一个单独的字符。

更复杂的模式包括了更多的字符，并可用于解析、格式检查、替换等等。

您可以规定字符串中的检索位置，以及要检索的字符类型，等等。

语法
```
var patt=new RegExp(pattern,modifiers);

或更简单的方法

var patt=/pattern/modifiers;
```
> 模式描述了一个表达式模型。
> 修饰符(modifiers)描述了检索是否是全局，区分大小写等。
> 注意：当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）。比如，以下是等价的：
```
var re = new RegExp("\\w+");
var re = /\w+/;
```

**RegExp 修饰符**
修饰符用于执行不区分大小写和全文的搜索。

i - 修饰符是用来执行不区分大小写的匹配。

g - 修饰符是用于执行全文的搜索（而不是在找到第一个就停止查找,而是找到所有的匹配）。

```
在字符串中不区分大小写找"runoob"

var str = "Visit RUnoob";
var patt1 = /runoob/i;
以下标记的文本是获得的匹配的表达式：

Visit RUnoob

全文查找 "is"

var str="Is this all there is?";
var patt1=/is/g;
以下标记的文本是获得的匹配的表达式：

Is this all there is?
全文查找和不区分大小写搜索 "is"

var str="Is this all there is?";
var patt1=/is/gi;
以下 标记的文本是获得的匹配的表达式：

Is this all there is?
```
**test()**
test()方法搜索字符串指定的值，根据结果并返回真或假。

```
下面的示例是从字符串中搜索字符 "e" ：
var patt1=new RegExp("e");
document.write(patt1.test("The best things in life are free"));
由于该字符串中存在字母 "e"，以上代码的输出将是：

true

当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）

var re = new RegExp("\\w+");

```

**exec()**
exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。

```
下面的示例是从字符串中搜索字符 "e" ：
var patt1=new RegExp("e");
document.write(patt1.exec("The best things in life are free"));
由于该字符串中存在字母 "e"，以上代码的输出将是：

e
```
## JavaScript Window - 浏览器对象模型
浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器"对话"。

**浏览器对象模型 (BOM)**
浏览器对象模型（Browser Object Model (BOM)）尚无正式标准。

由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是 BOM 的方法和属性。

**Window 对象**
所有浏览器都支持 window 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

window.document.getElementById("header");
与此相同：

document.getElementById("header");

**Window 尺寸**
有三种方法能够确定浏览器窗口的尺寸。
```
对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)
对于 Internet Explorer 8、7、6、5：

document.documentElement.clientHeight
document.documentElement.clientWidth
或者

document.body.clientHeight
document.body.clientWidth
实用的 JavaScript 方案（涵盖所有浏览器）：

var w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
```
> 该例显示浏览器窗口的高度和宽度。

**其他 Window 方法**
window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() - 移动当前窗口
window.resizeTo() - 调整当前窗口的尺寸

## JavaScript Window Screen
window.screen 对象包含有关用户屏幕的信息。

**Window Screen**
window.screen对象在编写时可以不使用 window 这个前缀。
screen.availWidth - 可用的屏幕宽度
screen.availHeight - 可用的屏幕高度

**Window Screen 可用宽度**
screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。
```
返回您的屏幕的可用宽度：

<script>
document.write("可用宽度: " + screen.availWidth);
</script>
以上代码输出为：

可用宽度: 1920
```

**Window Screen 可用高度**
screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任务栏。
```
返回您的屏幕的可用高度：

<script>

document.write("可用高度: " + screen.availHeight);

</script>
以上代码将输出：

可用高度: 1050
```

## JavaScript Window Location
window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

**Window Location**
window.location 对象在编写时可不使用 window 这个前缀。 一些例子：
location.hostname 返回 web 主机的域名
location.pathname 返回当前页面的路径和文件名
location.port 返回 web 主机的端口 （80 或 443）
location.protocol 返回所使用的 web 协议（http: 或 https:）

**Window Location Href**
location.href 属性返回当前页面的 URL。

```
返回（当前页面的）整个 URL：

<script>

document.write(location.href);

</script>
以上代码输出为：

https://www.runoob.com/js/js-window-location.html
```

**Window Location Pathname**
location.pathname 属性返回 URL 的路径名。

```
返回当前 URL 的路径名：

<script>

document.write(location.pathname);

</script>
以上代码输出为：

/js/js-window-location.html
```

**Window Location Assign**
location.assign() 方法加载新的文档。
```
加载一个新的文档：

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<head>
<script>
function newDoc(){
    window.location.assign("https://www.runoob.com")
}
</script>
</head>
<body>
 
<input type="button" value="加载新文档" onclick="newDoc()">
 
</body>
</html>
```

## JavaScript Window History
window.history 对象包含浏览器的历史。

**Window History**
window.history对象在编写时可不使用 window 这个前缀。

为了保护用户隐私，对 JavaScript 访问该对象的方法做出了限制。

history.back() - 与在浏览器点击后退按钮相同
history.forward() - 与在浏览器中点击向前按钮相同

**Window history.back()**
history.back() 方法加载历史列表中的前一个 URL。

这与在浏览器中点击后退按钮是相同的：
```
在页面上创建后退按钮：

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<head>
<script>
function goBack()
{
    window.history.back()
}
</script>
</head>
<body>
 
<input type="button" value="Back" onclick="goBack()">
 
</body>
</html>
```

**Window history.forward()**
history forward() 方法加载历史列表中的下一个 URL。

这与在浏览器中点击前进按钮是相同的：
```
在页面上创建一个向前的按钮：

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>
function goForward()
{
    window.history.forward()
}
</script>
</head>
<body>
 
<input type="button" value="Forward" onclick="goForward()">
 
</body>
</html>
```

## JavaScript Window Navigator
window.navigator 对象包含有关访问者浏览器的信息。

**Window Navigator**
window.navigator 对象在编写时可不使用 window 这个前缀。
```
<div id="example"></div>
<script>
txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
document.getElementById("example").innerHTML=txt;
</script>
```
来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：
navigator 数据可被浏览器使用者更改
一些浏览器对测试站点会识别错误
浏览器无法报告晚于浏览器发布的新操作系统

**浏览器检测**
由于 navigator 可误导浏览器检测，使用对象检测可用来嗅探不同的浏览器。

由于不同的浏览器支持不同的对象，您可以使用对象来检测浏览器。例如，由于只有 Opera 支持属性 "window.opera"，您可以据此识别出 Opera。

例子：if (window.opera) {...some action...}

## JavaScript 弹窗
可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。

**警告框**
警告框经常用于确保用户可以得到某些信息。

当警告框出现后，用户需要点击确定按钮才能继续进行操作。

window.alert("sometext");
window.alert() 方法可以不带上window对象，直接使用alert()方法。
```
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction()
{
    alert("你好，我是一个警告框！");
}
</script>
</head>
<body>

<input type="button" onclick="myFunction()" value="显示警告框">

</body>
</html>
```

**确认框**
确认框通常用于验证是否接受用户操作。

当确认卡弹出时，用户可以点击 "确认" 或者 "取消" 来确定用户操作。

当你点击 "确认", 确认框返回 true， 如果点击 "取消", 确认框返回 false。

语法
window.confirm("sometext");
window.confirm() 方法可以不带上window对象，直接使用confirm()方法。
```
var r=confirm("按下按钮");
if (r==true)
{
    x="你按下了\"确定\"按钮!";
}
else
{
    x="你按下了\"取消\"按钮!";
}

```

**提示框**
提示框经常用于提示用户在进入页面前输入某个值。

当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。

如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。

语法
window.prompt("sometext","defaultvalue");
window.prompt() 方法可以不带上window对象，直接使用prompt()方法。
```
var person=prompt("请输入你的名字","Harry Potter");
if (person!=null && person!="")
{
    x="你好 " + person + "! 今天感觉如何?";
    document.getElementById("demo").innerHTML=x;
}
```

**换行**
弹窗使用 反斜杠 + "n"(\n) 来设置换行。
```
alert("Hello\nHow are you?");
```

## JavaScript 计时事件
JavaScript 一个设定的时间间隔之后来执行代码,我们称之为计时事件

**JavaScript 计时事件**
通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。
在 JavaScritp 中使用计时事件是很容易的，两个关键方法是:
setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
setTimeout() - 在指定的毫秒数后执行指定代码。
> 注意: setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。

**setInterval() 方法**
setInterval() 间隔指定的毫秒数不停地执行指定的代码

语法
window.setInterval("javascript function",milliseconds);
window.setInterval() 方法可以不使用 window 前缀，直接使用函数 setInterval()。

setInterval() 第一个参数是函数（function）。

第二个参数间隔的毫秒数

注意: 1000 毫秒是一秒。
```
每三秒弹出 "hello" ：

setInterval(function(){alert("Hello")},3000);

```
实例展示了如何使用 setInterval() 方法，但是每三秒弹出一次对用户体验并不好。

以下实例将显示当前时间。 setInterval() 方法设置每秒钟执行一次代码，就是手表一样。
```
显示当前时间

var myVar=setInterval(function(){myTimer()},1000);
 
function myTimer()
{
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}
```

**如何停止执行?**
clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。

语法
window.clearInterval(intervalVariable)
window.clearInterval() 方法可以不使用window前缀，直接使用函数clearInterval()。

要使用 clearInterval() 方法, 在创建计时方法时你必须使用全局变量：

myVar=setInterval("javascript function",milliseconds);
然后你可以使用 clearInterval() 方法来停止执行。
```
以下例子,我们添加了 "停止" 按钮：

<p id="demo"></p>
<button onclick="myStopFunction()">停止</button>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}
function myStopFunction(){
    clearInterval(myVar);
}
</script>
```

**setTimeout() 方法**
语法
myVar= window.setTimeout("javascript function", milliseconds);
setTimeout() 方法会返回某个值。在上面的语句中，值被储存在名为 myVar 的变量中。假如你希望取消这个 setTimeout()，你可以使用这个变量名来指定它。

setTimeout() 的第一个参数是含有 JavaScript 语句的字符串。这个语句可能诸如 "alert('5 seconds!')"，或者对函数的调用，诸如 alertMsg。

第二个参数指示从当前起多少毫秒后执行第一个参数。

提示：1000 毫秒等于一秒。
```
等待3秒，然后弹出 "Hello":

setTimeout(function(){alert("Hello")},3000);
```

**如何停止执行?**
clearTimeout() 方法用于停止执行setTimeout()方法的函数代码。

语法
window.clearTimeout(timeoutVariable)
window.clearTimeout() 方法可以不使用window 前缀。

要使用clearTimeout() 方法, 你必须在创建超时方法中（setTimeout）使用全局变量:

myVar=setTimeout("javascript function",milliseconds);
如果函数还未被执行，你可以使用 clearTimeout() 方法来停止执行函数代码。
```
以下是同一个实例, 但是添加了 "Stop the alert" 按钮:

var myVar;
 
function myFunction()
{
    myVar=setTimeout(function(){alert("Hello")},3000);
}
 
function myStopFunction()
{
    clearTimeout(myVar);
}

```

## JavaScript Cookie
Cookie 用于存储 web 页面的用户信息。

**什么是 Cookie？**
Cookie 是一些数据, 存储于你电脑上的文本文件中。

当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。

Cookie 的作用就是用于解决 "如何记录客户端的用户信息":

当用户访问 web 页面时，他的名字可以记录在 cookie 中。
在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。
Cookie 以名/值对形式存储，如下所示:

username=John Doe
当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息。

**使用 JavaScript 创建Cookie**
JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。

JavaScript 中，创建 cookie 如下所示：

document.cookie="username=John Doe";
您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";

**使用 JavaScript 读取 Cookie**
在 JavaScript 中, 可以使用以下代码来读取 cookie：

var x = document.cookie;

Note	document.cookie 将以字符串的方式返回所有的 cookie，类型格式： cookie1=value; cookie2=value; cookie3=value;

**使用 JavaScript 修改 Cookie**
在 JavaScript 中，修改 cookie 类似于创建 cookie，如下所示：

document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
旧的 cookie 将被覆盖。

**使用 JavaScript 删除 Cookie**
删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
注意，当您删除时不必指定 cookie 的值。

**Cookie 字符串**
document.cookie 属性看起来像一个普通的文本字符串，其实它不是。

即使您在 document.cookie 中写入一个完整的 cookie 字符串, 当您重新读取该 cookie 信息时，cookie 信息是以名/值对的形式展示的。

如果您设置了新的 cookie，旧的 cookie 不会被覆盖。 新 cookie 将添加到 document.cookie 中，所以如果您重新读取document.cookie，您将获得如下所示的数据：

cookie1=value; cookie2=value;

显示所有 Cookie  创建 Cookie 1  创建 Cookie 2 删除 Cookie 1  删除 Cookie 2

如果您需要查找一个指定 cookie 值，您必须创建一个JavaScript 函数在 cookie 字符串中查找 cookie 值。

**JavaScript Cookie 实例**
在以下实例中，我们将创建 cookie 来存储访问者名称。

首先，访问者访问 web 页面, 他将被要求填写自己的名字。该名字会存储在 cookie 中。

访问者下一次访问页面时，他会看到一个欢迎的消息。

在这个实例中我们会创建 3 个 JavaScript 函数:

设置 cookie 值的函数
获取 cookie 值的函数
检测 cookie 值的函数

**设置 cookie 值的函数**
首先，我们创建一个函数用于存储访问者的名字：

function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
函数解析：

以上的函数参数中，cookie 的名称为 cname，cookie 的值为 cvalue，并设置了 cookie 的过期时间 expires。

该函数设置了 cookie 名、cookie 值、cookie过期时间。

**获取 cookie 值的函数**
然后，我们创建一个函数用户返回指定 cookie 的值：
```
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
```
函数解析：

```
cookie 名的参数为 cname。

创建一个文本变量用于检索指定 cookie :cname + "="。

使用分号来分割 document.cookie 字符串，并将分割后的字符串数组赋值给 ca (ca = document.cookie.split(';'))。

循环 ca 数组 (i=0;i<ca.length;i++)，然后读取数组中的每个值，并去除前后空格 (c=ca[i].trim())。

如果找到 cookie(c.indexOf(name) == 0)，返回 cookie 的值 (c.substring(name.length,c.length)。

如果没有找到 cookie, 返回 ""。
```

**检测 cookie 值的函数**
最后，我们可以创建一个检测 cookie 是否创建的函数。

如果设置了 cookie，将显示一个问候信息。

如果没有设置 cookie，将会显示一个弹窗用于询问访问者的名字，并调用 setCookie 函数将访问者的名字存储 365 天：
```
function checkCookie()
{
  var username=getCookie("username");
  if (username!="")
  {
    alert("Welcome again " + username);
  }
  else 
  {
    username = prompt("Please enter your name:","");
    if (username!="" && username!=null)
    {
      setCookie("username",username,365);
    }
  }
}

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
function checkCookie(){
    var user=getCookie("username");
    if (user!=""){
        alert("欢迎 " + user + " 再次访问");
    }
    else {
        user = prompt("请输入你的名字:","");
          if (user!="" && user!=null){
            setCookie("username",user,30);
        }
    }
}
```
以下实例在页面载入时执行 checkCookie() 函数。

## JavaScript 库
JavaScript 库 - jQuery、Prototype、MooTools。

**JavaScript 框架（库）**
JavaScript 高级程序设计（特别是对浏览器差异的复杂处理），通常很困难也很耗时。

为了应对这些调整，许多的 JavaScript (helper) 库应运而生。

这些 JavaScript 库常被称为 JavaScript 框架。

**jQuery**
jQuery 是目前最受欢迎的 JavaScript 框架。

它使用 CSS 选择器来访问和操作网页上的 HTML 元素（DOM 对象）。

jQuery 同时提供 companion UI（用户界面）和插件。

许多大公司在网站上使用 jQuery：

**Prototype**
Prototype 是一种库，提供用于执行常见 web 任务的简单 API。

API 是应用程序编程接口（Application Programming Interface）的缩写。它是包含属性和方法的库，用于操作 HTML DOM。

Prototype 通过提供类和继承，实现了对 JavaScript 的增强。

**MooTools**
MooTools 也是一个框架，提供了可使常见的 JavaScript 编程更为简单的 API。

MooTools 也含有一些轻量级的效果和动画函数。

**其他框架**
```
下面是其他一些在上面未涉及的框架：

YUI - Yahoo! User Interface Framework，涵盖大量函数的大型库，从简单的 JavaScript 功能到完整的 internet widget。

Ext JS - 可定制的 widget，用于构建富因特网应用程序（rich Internet applications）。

Dojo - 用于 DOM 操作、事件、widget 等的工具包。

script.aculo.us - 开源的 JavaScript 框架，针对可视效果和界面行为。

UIZE - Widget、AJAX、DOM、模板等等。

CDN -内容分发网络
您总是希望网页可以尽可能地快。您希望页面的容量尽可能地小，同时您希望浏览器尽可能多地进行缓存。

如果许多不同的网站使用相同的 JavaScript 框架，那么把框架库存放在一个通用的位置供每个网页分享就变得很有意义了。

CDN (Content Delivery Network) 解决了这个问题。CDN 是包含可分享代码库的服务器网络。

Google 为一系列 JavaScript 库提供了免费的 CDN，包括：

jQuery
Prototype
MooTools
Dojo
Yahoo! YUI
但是由于 Google 在中国经常被GFW（防火长城，英文名称Great Firewall of China，简写为Great Firewall，缩写GFW）屏蔽，造成访问不稳定，所以建议使用百度静态资源公共库。

如需在您的网页中使用 JavaScript 框架库，只需在 <script> 标签中引用该库即可：
```

**引用 jQuery**
```
<script src="https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js">
</script>
```

**使用框架**
在您决定为网页使用 JavaScript 框架之前，首先对框架进行测试是明智的。

JavaScript 框架很容易进行测试。您无需在计算机上安装它们，同时也没有安装程序。

通常您只需从网页中引用一个库文件。

## JavaScript - 测试 jQuery
测试 JavaScript 框架库 - jQuery

**引用 jQuery**
```
如需测试 JavaScript 库，您需要在网页中引用它。

为了引用某个库，请使用 <script> 标签，其 src 属性设置为库的 URL：
```

**引用 jQuery**
```
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.staticfile.org/jquery/1.8.3/jquery.min.js">
</script>
</head>
<body>
</body>
</html>
```

**jQuery 描述**
主要的 jQuery 函数是 $() 函数（jQuery 函数）。如果您向该函数传递 DOM 对象，它会返回 jQuery 对象，带有向其添加的 jQuery 功能。

jQuery 允许您通过 CSS 选择器来选取元素。

在 JavaScript 中，您可以分配一个函数以处理窗口加载事件：
```
function myFunction()
{
    var obj=document.getElementById("h01");
    obj.innerHTML="Hello jQuery";
}
onload=myFunction;
等价的 jQuery 是不同的：

jQuery 方式：
function myFunction()
{
    $("#h01").html("Hello jQuery");
}
$(document).ready(myFunction);
```
上面代码的最后一行，HTML DOM 文档对象被传递到 jQuery ：$(document)。

当您向 jQuery 传递 DOM 对象时，jQuery 会返回以 HTML DOM 对象包装的 jQuery 对象。

jQuery 函数会返回新的 jQuery 对象，其中的 ready() 是一个方法。

由于在 JavaScript 中函数就是变量，因此可以把 myFunction 作为变量传递给 jQuery 的 ready 方法。

lamp	jQuery 返回 jQuery 对象，与已传递的 DOM 对象不同。
jQuery 对象拥有的属性和方法，与 DOM 对象的不同。
您不能在 jQuery 对象上使用 HTML DOM 的属性和方法。

**测试 jQuery**
```
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.staticfile.org/jquery/1.8.3/jquery.min.js">
</script>
<script>
function myFunction()
{
    $("#h01").html("Hello jQuery")
}
$(document).ready(myFunction);
</script>
</head>
<body>
<h1 id="h01"></h1>
</body>
</html>
```
```
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.staticfile.org/jquery/1.8.3/jquery.min.js">
</script>
<script>
function myFunction()
{
    $("#h01").attr("style","color:red").html("Hello jQuery")
}
$(document).ready(myFunction);
</script>
</head>
<body>
<h1 id="h01"></h1>
</body>
</html>
```
正如您在上面的例子中看到的，jQuery 允许链接（链式语法）。

链接（Chaining）是一种在同一对象上执行多个任务的便捷方法。

## JavaScript - 测试 Prototype
测试 JavaScript 框架库 - Prototype

**引用 Prototype**
```
如需测试 JavaScript 库，您需要在网页中引用它。

为了引用某个库，请使用 <script> 标签，其 src 属性设置为库的 URL：
```

```
<!DOCTYPE html>
<html>
<head>
<script
src="https://cdn.staticfile.org/prototype/1.7.3/prototype.min.js">
</script>
</head>
<body>
</body>
</html>
```

**Prototype 描述**
Prototype 提供的函数可使 HTML DOM 编程更容易。

与 jQuery 类似，Prototype 也有自己的 $() 函数。

$() 函数接受 HTML DOM 元素的 id 值（或 DOM 元素），并会向 DOM 对象添加新的功能。

与 jQuery 不同，Prototype 没有用以取代 window.onload() 的 ready() 方法。相反，Prototype 会向浏览器及 HTML DOM 添加扩展。

在 JavaScript 中，您可以分配一个函数以处理窗口加载事件：
```
JavaScript 方式：
function myFunction()
{
    var obj=document.getElementById("h01");
    obj.innerHTML="Hello Prototype";
}
onload=myFunction;
等价的 Prototype 是不同的：

Prototype 方式：
function myFunction()
{
    $("h01").insert("Hello Prototype!");
}
Event.observe(window,"load",myFunction);
Event.observe() 接受三个参数：
```

您希望处理的 HTML DOM 或 BOM（浏览器对象模型）对象
您希望处理的事件
您希望调用的函数
测试 Prototype
```
Example
<!DOCTYPE html>
<html>
<script src="https://cdn.staticfile.org/prototype/1.7.3/prototype.min.js">
</script>
<script>
function myFunction()
{
    $("h01").insert("Hello Prototype!");
}
Event.observe(window,"load",myFunction);
</script>
</head>
<body>
<h1 id="h01"></h1>
</body>
</html>
```
```
Example
<!DOCTYPE html>
<html>
<script src="https://cdn.staticfile.org/prototype/1.7.3/prototype.min.js">
</script>
<script>
function myFunction()
{
    $("h01").writeAttribute("style","color:red").insert("Hello Prototype!");
}
Event.observe(window,"load",myFunction);
</script>
</head>
<body>
<h1 id="h01"></h1>
</body>
</html>
```
正如您在上面的例子中看到的，与 jQuery 相同，Prototype 允许链式语法。

链接（Chaining）是一种在同一对象上执行多个任务的便捷方法。
