## Android 教程
参考：https://www.runoob.com/android/android-hello-world-example.html

Android是一个开源的，基于Linux的移动设备操作系统，主要使用于移动设备，如智能手机和平板电脑。Android是由谷歌及其他公司带领的开放手机联盟开发的。

Android编程是基于Java编程语言的，因此，如果你理解Java编程，这将利于你更好的学习Android应用程序开发。

## Android 概述

**什么是 Android？**

Android 是一个开源的，基于 Linux 的移动设备操作系统，如智能手机和平板电脑。Android 是由谷歌及其他公司带领的开放手机联盟开发的。

Android 提供了一个统一的应用程序开发方法，这意味着开发人员只需要为 Android 进行开发，这样他们的应用程序就能够运行在不同搭载 Android 的移动设备上。

谷歌在2007年发布了第一个测试版本的 Android 软件开发工具包（SDK），第一个商业版本的 Android 1.0，则发布于2008年9月。

2012年6月27日，在谷歌I/O大会上，谷歌宣布发布了 Android 版本4.1 Jelly Bean。 Jelly Bean 是一个在功能和性能方面的渐进的更新，主要目的是改进用户界面，

Android 源代码是根据自由和开放源码软件许可证。谷歌发布的大部分代码遵循 Apache 许可证2.0版，Linux 内核的变化遵循 GNU 通用公共许可证版本2。

**Android 开发优势**

开放源代码

众多开发者及强大的社区

不断增长的市场

国际化的 App 集成

低廉的开发成本

更高的成功几率

丰富的开发环境

**Android 的特性**

Android 是一款与 Apple 4GS 竞争的功能强大的操作系统，并支持一些伟大的特性。以下列举出部分功能：

漂亮的 UI	Android 操作系统的基本屏幕提供了漂亮又直观的用户界面。

连接性	GSM/EDGE, IDEN, CDMA, EV-DO, UMTS, Bluetooth, Wi-Fi, LTE, NFC 和 WiMAX.

存储	用于数据存储的轻量级关系型数据库SQLite

媒体支持	H.263, H.264, MPEG-4 SP, AMR, AMR-WB, AAC, HE-AAC, AAC 5.1, MP3, MIDI, Ogg Vorbis, WAV, JPEG, PNG, GIF, 和 BMP

消息	SMS 和 MMS

Web 浏览器	基于开源的 WebKit 布局引擎，再加上支持 HTML5 和 CSS3 Chrome 的 V8 JavaScript 引擎。

多点触控	Android原生支持多点触控，从最初的手持设备开始便有，如 HTC Hero。

多任务	用户可以跳从一个任务到另一个任务，并且相同时间可以同时运行各种应用。

可调整的 widgets	Widgets是可调整大小，这样用户就可以扩大更多的内容或缩小以节省空间。

多语言	支持单向和多向文本。

GCM	谷歌云消息（GCM）是一种服务，让开发人员对 Android 设备的用户发送短消息数据，而无需专有的同步解决方案。

Wi-Fi Direct	一种通过高带宽的对等网络连接来直接发现和配对应用的技术。

Android Beam	一个流行的基于 NFC 的技术，使用户能够即时共享，只需通过触摸 NFC 功能将两个手机连在一起。

**Android 应用程序**

Android 应用程序一般使用 Android 软件开发工具包，采用 Java 语言来开发。

一旦开发完成，Android 应用程序可以容易的打包，并在诸如 Google Play 和亚马逊应用商店上出售。

Android 在世界各地190多个国家有数以百万计的移动设备。这是任何移动平台和快速增长的最大的安装基础。全球每天有超过100万个新的 Android 设备被激活。

本教程的写作目的是教会你如何开发并打包 Android 应用程序。我们将从 Android 应用程序编程环境设置开始，然后深入 Android 应用程序开发的各个方面。

**Android 的历史**
Android 的代码名称现在从 A 排到了 L，分别是 Aestro, Blender, Cupcake, Donut, Eclair, Froyo, Gingerbread, Honeycomb, Ice Cream Sandwitch, Jelly Bean, KitKat and Lollipop。让我们按顺序了解 Android 的历史。

纸杯蛋糕 (Cupcake)

甜甜圈 (Donut)

闪电泡芙 (Eclair)

冻酸奶 (Froyo)

姜饼 (Gingerbread)

蜂巢 (Honeycomb)

冰淇淋三明治 (Ice Cream Sandwich)

果冻豆 (Jelly Bean)

奇巧 (KitKat)

棒棒糖 (Lollipop)

**什么是 API 级别？
API 级别是一个用于唯一标识 API 框架版本的整数，由某个版本的 Android 平台提供。

平台版本	API 等级	VERSION_CODE	
Android 5.1	22	LOLLIPOP_MR1	
Android 5.0	21	LOLLIPOP	
Android 4.4W	20	KITKAT_WATCH	KitKat for Wearables Only
Android 4.4	19	KITKAT	
Android 4.3	18	JELLY_BEAN_MR2	
Android 4.2, 4.2.2	17	JELLY_BEAN_MR1	
Android 4.1, 4.1.1	16	JELLY_BEAN	
Android 4.0.3, 4.0.4	15	ICE_CREAM_SANDWICH_MR1	
Android 4.0, 4.0.1, 4.0.2	14	ICE_CREAM_SANDWICH	
Android 3.2	13	HONEYCOMB_MR2	
Android 3.1.x	12	HONEYCOMB_MR1	
Android 3.0.x	11	HONEYCOMB	
Android 2.3.4
Android 2.3.3 10	GINGERBREAD_MR1	
Android 2.3.2
Android 2.3.1
Android 2.3 9	GINGERBREAD	
Android 2.2.x	8	FROYO
Android 2.1.x	7	ECLAIR_MR1	
Android 2.0.1	6	ECLAIR_0_1	
Android 2.0	5	ECLAIR	
Android 1.6	4	DONUT	
Android 1.5	3	CUPCAKE	
Android 1.1	2	BASE_1_1	
Android 1.0	1	BASE	

## Android 开发环境搭建

首先，你可以在以下的操作系统开始 Android 应用程序开发：

Microsoft Windows XP 或更高版本。
带有英特尔芯片的 Mac OS X10.5.8或更高版本。
包括 GNU C 库2.7或更高版本的 Linux 系统。
第二，开发 Android 应用程序所需的所有工具都是免费的，可以从网上下载。以下是开始开发 Android 应用程序需要用到的软件列表。

Java JDK5 或 以后版本
Android SDK
Java运行时环境（JRE）
Android Studio
(可选的)Java开发者使用的Eclipse IDE
(可选的)Android开发工具(ADT)Eclipse插件
最后两个组件是可选的，如果是在 Windows 机器上工作，这些组件将方便于开发基于 Java 的应用程序。因此，让我们来看看如何来设置所需的环境。

**安装 Java 开发工具包(JDK)**

你可以从 Oracle 的 Java 网站：JDKJava SE下载下载最新版本的 Java 。在下载的文件中找到安装JDK的说明文档，按照给定的说明来安装和配置设置。最后设置 PATH 和 JAVA_HOME 环境变量来引用包含 javac 和 java的目录，通常分别为 java_install_dir/bin 和 java_install_dir。

如果运行的是 Windows，把 JDK 安装在 C:\jdk1.6.0_15，在 C:\autoexec.bat 文件添加以下内容：

set PATH=C:\jdk1.6.0_15\bin;%PATH%
set JAVA_HOME=C:\jdk1.6.0_15

你也可以右键单击"我的电脑"，选择"属性"=》"高级"=》"环境变量"，然后通过按下"确定"按钮来更新 PATH 值。

在 Linux 上，如果 SDK 安装在 /usr/local/jdk1.6.0_15 下，并且使用的是 C shell，把下面的代码到写入 .cshrc 文件。

setenv PATH /usr/local/jdk1.6.0_15/bin:$PATH
setenv JAVA_HOME /usr/local/jdk1.6.0_15

如果你使用集成开发环境 Eclipse，那么它自动知道 Java 已安装在哪里。

Android IDE
有许多复杂而精巧的技术来开发 Android 应用程序。目前主要使用且相似的技术主要是以下两种：

Android Studio
Eclipse ID

## Android 架构
Android 操作系统是一个软件组件的栈，在架构图中它大致可以分为五个部分和四个主要层。

**Linux内核**
在所有层的最底下是 Linux - 包括大约115个补丁的 Linux 3.6。它提供了基本的系统功能，比如进程管理，内存管理，设备管理（如摄像头，键盘，显示器）。同时，内核处理所有 Linux 所擅长的工作，如网络和大量的设备驱动，从而避免兼容大量外围硬件接口带来的不便。

**程序库**
在 Linux 内核层的上面是一系列程序库的集合，包括开源的 Web 浏览器引擎 Webkit ，知名的 libc 库，用于仓库存储和应用数据共享的 SQLite 数据库，用于播放、录制音视频的库，用于网络安全的 SSL 库等。

**Android程序库**
这个类别包括了专门为 Android 开发的基于 Java 的程序库。这个类别程序库的示例包括应用程序框架库，如用户界面构建，图形绘制和数据库访问。一些 Android 开发者可用的 Android 核心程序库总结如下：

android.app - 提供应用程序模型的访问，是所有 Android 应用程序的基石。
android.content - 方便应用程序之间，应用程序组件之间的内容访问，发布，消息传递。
android.database - 用于访问内容提供者发布的数据，包含 SQLite 数据库管理类。
android.opengl - OpenGL ES 3D 图片渲染 API 的 Java 接口。
android.os - 提供应用程序访问标注操作系统服务的能力，包括消息，系统服务和进程间通信。
android.text - 在设备显示上渲染和操作文本。
android.view - 应用程序用户界面的基础构建块。
android.widget - 丰富的预置用户界面组件集合，包括按钮，标签，列表，布局管理，单选按钮等。
android.webkit - 一系列类的集合，允许为应用程序提供内建的 Web 浏览能力。
看过了 Android 运行层内的基于 Java 的核心程序库，是时候关注一下 Android 软件栈中的基于 C/C++ 的程序库。

**Android运行时**
这是架构中的第三部分，自下而上的第二层。这个部分提供名为 Dalvik 虚拟机的关键组件，类似于 Java 虚拟机，但专门为 Android 设计和优化。

Dalvik 虚拟机使得可以在 Java 中使用 Linux 核心功能，如内存管理和多线程。Dalvik 虚拟机使得每一个 Android 应用程序运行在自己独立的虚拟机进程。

Android 运行时同时提供一系列核心的库来为 Android 应用程序开发者使用标准的 Java 语言来编写 Android 应用程序。

**应用框架**
应用框架层以 Java 类的形式为应用程序提供许多高级的服务。应用程序开发者被允许在应用中使用这些服务。

活动管理者 - 控制应用程序生命周期和活动栈的所有方面。
内容提供者 - 允许应用程序之间发布和分享数据。
资源管理器 - 提供对非代码嵌入资源的访问，如字符串，颜色设置和用户界面布局。
通知管理器 - 允许应用程序显示对话框或者通知给用户。
视图系统 - 一个可扩展的视图集合，用于创建应用程序用户界面。
应用程序
顶层中有所有的 Android 应用程序。你写的应用程序也将被安装在这层。这些应用程序包括通讯录，浏览器，游戏等。

## Android 应用程序组件
应用程序组件是一个Android应用程序的基本构建块。这些组件由应用清单文件松耦合的组织。AndroidManifest.xml描述了应用程序的每个组件，以及他们如何交互。

以下是可以在Android应用程序中使用的四个主要组件。

组件	描述
Activities	描述UI，并且处理用户与机器屏幕的交互。
Services	处理与应用程序关联的后台操作。
Broadcast Receivers	处理Android操作系统和应用程序之间的通信。
Content Providers	处理数据和数据库管理方面的问题。

**Activities**
一个活动标识一个具有用户界面的单一屏幕。举个例子，一个邮件应用程序可以包含一个活动用于显示新邮件列表，另一个活动用来编写邮件，再一个活动来阅读邮件。当应用程序拥有多于一个活动，其中的一个会被标记为当应用程序启动的时候显示。

一个活动是Activity类的一个子类，如下所示：

public class MainActivity extends Activity {

}

**Services**
服务是运行在后台，执行长时间操作的组件。举个例子，服务可以是用户在使用不同的程序时在后台播放音乐，或者在活动中通过网络获取数据但不阻塞用户交互。

一个服务是Service类的子类，如下所示：

public class MyService extends Service {

}

**Broadcast Receivers**
广播接收器简单地响应从其他应用程序或者系统发来的广播消息。举个例子，应用程序可以发起广播来让其他应用程序知道一些数据已经被下载到设备，并且可以供他们使用。因此广播接收器会拦截这些通信并采取适当的行动。

广播接收器是BroadcastReceiver类的一个子类，每个消息以Intent对象的形式来广播。

public class MyReceiver  extends  BroadcastReceiver {

}

**Content Providers**
内容提供者组件通过请求从一个应用程序到另一个应用程序提供数据。这些请求由ContentResolver类的方法来处理。这些数据可以是存储在文件系统、数据库或者其他其他地方。

内容提供者是ContentProvider类的子类，并实现一套标准的API，以便其他应用程序来执行事务。

public class MyContentProvider extends  ContentProvider {

}
我们将在独立的章节中通过这些标签的细节来涵盖应用程序组件。

**附件组件**
有一些附件的组件用于以上提到的实体、他们之间逻辑、及他们之间连线的构造。这些组件如下：

组件	描述
Fragments	代表活动中的一个行为或者一部分用户界面。
Views	绘制在屏幕上的UI元素，包括按钮，列表等。
Layouts	控制屏幕格式，展示视图外观的View的继承。
Intents	组件间的消息连线。
Resources	外部元素，例如字符串资源、常量资源及图片资源等。
Manifest	应用程序的配置文件。
