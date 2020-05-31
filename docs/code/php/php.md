

## java获取客户端url
```
        String requestUrl = getRequest().getServerName();
    	String checkUrl = prop.get("CheckUrl");//CheckUrl
    	boolean checkUrlFlag = checkUrl.equals(requestUrl);
    	if(!checkUrlFlag) {
    		renderText("error:url验证失败");
    		return;
    	}
```

String requestUrl = getRequest().getServerName();

String getServerName()：获取服务器名，localhost；

String getServerPort()：获取服务器端口号，8080；

String getContextPath()：获取项目名，/Example；

String getServletPath()：获取Servlet路径，/AServlet；

String getQueryString()：获取参数部分，即问号后面的部分：username=zhangsan

String getRequestURI()：获取请求URI，等于项目名+Servlet路径：/Example/AServlet

String getRequestURL()：获取请求URL，等于不包含参数的整个请求路径：http://localhost:8080/Example/AServlet

String request.getRemoteAddr()：获取服务器的IP，如localhost对应ip为127.0.0.1


## Java获取当前时间的年月日方法
```
package com.ob;  
  
import java.text.ParseException;  
import java.text.SimpleDateFormat;  
import java.util.Calendar;  
import java.util.Date;  
  
public class DateTest {  
  
    public static void main(String[] args) throws ParseException {  
        Calendar now = Calendar.getInstance();  
        System.out.println("年: " + now.get(Calendar.YEAR));  
        System.out.println("月: " + (now.get(Calendar.MONTH) + 1) + "");  
        System.out.println("日: " + now.get(Calendar.DAY_OF_MONTH));  
        System.out.println("时: " + now.get(Calendar.HOUR_OF_DAY));  
        System.out.println("分: " + now.get(Calendar.MINUTE));  
        System.out.println("秒: " + now.get(Calendar.SECOND));  
        System.out.println("当前时间毫秒数：" + now.getTimeInMillis());  
        System.out.println(now.getTime());  
  
        Date d = new Date();  
        System.out.println(d);  
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
        String dateNowStr = sdf.format(d);  
        System.out.println("格式化后的日期：" + dateNowStr);  
          
        String str = "2012-1-13 17:26:33";  //要跟上面sdf定义的格式一样  
        Date today = sdf.parse(str);  
        System.out.println("字符串转成日期：" + today);  
    }  
}  
```

## Java中比较两个字符串是否相等的问题
==比较的是两个字符串的地址是否为相等（同一个地址），equals()方法比较的是两个字符串对象的内容是否相同（当然，若两个字符串引用同一个地址，使用equals()比较也返回true）。

## java 报错java.security.InvalidKeyException: Illegal key size。

在项目使用加解密时，发生了异常？由于在同事电脑上运行正常，所以很奇怪。run 运行时也没有异常，就是null。

debug测试发现，在解密和加密时发生了异常。java.security.InvalidKeyException: Illegal key size

而run没有异常抛出时因为代码里catch异常后，没有向外抛出。导致看不到异常，这是一个不好的习惯。

搜索后发现是由于jdk限制策略，导致只能128位key进行加解密，而256位加解密则抛出异常。

加解密使用的jdk里的如下两个jar包。

jdk 1.8处理：去以下地址下载，解压后替换原来的jar。

https://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html

再次运行则正常了。


## java 错误: 编码GBK的不可映射字符
解决办法：

1.使用javac -encoding UTF-8 test.java  编译通过：

2.修改文件encoding编码为 ANSI，编译通过：

## java jar包下载的网站
https://mvnrepository.com/

## java HelloWorld时报错:"找不到或无法加载主类"问题的解决办法
javac HelloWorld.java
java HelloWorld

注意:
不要带.class
检查第一行是否有package e2r.cn;

## java执行单文件、javac编译单文件、多文件引入jar包、-cp解决无法加载主类问题
注意：路径在linux中用：隔开  在windows中用；隔开，对于.class文件来说，只需要指明包的路径即可；但是对于jar文件来说，必须要指定全路径即路径+文件名的格式，不能只指定一个路径
windows环境
javac -cp Desktop\test\lib\pinyin4j-2.5.0.jar Desktop\test\src\A.java
java -cp Desktop\test\lib\pinyin4j-2.5.0.jar;Desktop\test\src A 不可不可以

javac -encoding UTF-8 -cp /test/lib/sigar.jar /test/src/GetComputerInfo.java
java -cp /test/lib/sigar.jar;/test/src/GetComputerInfo

linux环境
javac -cp /test/lib/sigar.jar /test/src/GetComputerInfo.java
java -cp /test/lib/sigar.jar:/test/src GetComputerInfo

## java获取linux和windos服务器信息和验证器
获取
```
package e2r.cn;
import org.apache.commons.codec.binary.Base64;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.Security;
import java.security.spec.AlgorithmParameterSpec;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.File;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.lang.management.ManagementFactory;

import com.jfinal.core.Controller;
import com.jfinal.kit.Prop;
import com.jfinal.kit.PropKit;
import com.sun.management.OperatingSystemMXBean;

import com.jfinal.core.Controller;

public class GetAesPcInfoController extends Controller{
	private static Prop prop = PropKit.use("config.properties");//加载配置文件
    private static final String CHARSET_NAME = "UTF-8";
    private static final String AES_NAME = "AES";
    private static final String ALGORITHM = "AES/CBC/PKCS7Padding";
	static {
        Security.addProvider(new BouncyCastleProvider());
    }
    /**
               * 加密
     * @param content
     * @param key
     * @return
     */
    public static String encrypt(String content, String key) {
        byte[] result = null;
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(CHARSET_NAME), AES_NAME);
            AlgorithmParameterSpec paramSpec = new IvParameterSpec(subBytes(key.getBytes(CHARSET_NAME)));
            cipher.init(Cipher.ENCRYPT_MODE, keySpec, paramSpec);
            result = cipher.doFinal(content.getBytes(CHARSET_NAME));
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
        return Base64.encodeBase64String(result);
    }

    /**
               * 解密
     * @param content
     * @param key
     * @return
     */
    public static String decrypt(String content, String key) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(CHARSET_NAME), AES_NAME);
            AlgorithmParameterSpec paramSpec = new IvParameterSpec(subBytes(key.getBytes(CHARSET_NAME)));
            cipher.init(Cipher.DECRYPT_MODE, keySpec, paramSpec);
            return new String(cipher.doFinal(Base64.decodeBase64(content)), CHARSET_NAME);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
                * 从一个byte[]数组中截取一部分
     * @param src
     * @return
     */
    public static byte[] subBytes(byte[] src) {
        if (src.length < 16) {
            throw new RuntimeException("无法从Key中获取偏移量!");
        }
        byte[] bs = new byte[16];
        for (int i = 0; i < 16; i++) {
            bs[i] = src[i];
        }
        return bs;
    }
    public static Desk getDisk_linux() {
        Desk desk = new Desk();
        try {
            Runtime rt = Runtime.getRuntime();
            Process p = rt.exec("df -hl");// df -hl 查看硬盘空间
            BufferedReader in = null;
            try {
                in = new BufferedReader(new InputStreamReader(
                        p.getInputStream()));
                String str = null;
                String[] strArray = null;
                int line = 0;
                while ((str = in.readLine()) != null) {
                    line++;
                    if (line != 2) {
                        continue;
                    }
                    int m = 0;
                    strArray = str.split(" ");
                    for (String para : strArray) {
                        if (para.trim().length() == 0)
                            continue;
                        ++m;
                        if (para.endsWith("G") || para.endsWith("Gi")) {
                            // 目前的服务器
                            if (m == 2) {
                                desk.setTotal(para);
                            }
                            if (m == 3) {
                                desk.setUsed(para);
                            }
                        }
                        if (para.endsWith("%")) {
                            if (m == 5) {
                                desk.setUse_rate(para);
                            }
                        }
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                in.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return desk;
    }
 
    public static class Desk {
        private String total;
        private String used;
        private String use_rate;
         
        public String toString(){
            return total;
        }
 
        public String getTotal() {
            return total;
        }
 
        public void setTotal(String total) {
            this.total = total;
        }
 
        public String getUsed() {
            return used;
        }
 
        public void setUsed(String used) {
            this.used = used;
        }
 
        public String getUse_rate() {
            return use_rate;
        }
 
        public void setUse_rate(String use_rate) {
            this.use_rate = use_rate;
        }
 
    }
	/**
	 * TODO 获取文件系统使用率
	 * 
	 * @return
	 */
	private static double getDisk_windows() {
		double total = 0;
		for (char c = 'A'; c <= 'Z'; c++) {
			String dirName = c + ":/";
			File win = new File(dirName);
			if (win.exists()) {
				total = win.getTotalSpace() / 1024.0 / 1024.0 / 1024.0;
				// 保留一位小数
				total = Double.valueOf(String.valueOf(total).substring(0, String.valueOf(total).indexOf(".") + 2));	
				break;
			}
		}
		return total;
	}
 
	/**
	 * TODO 获取内存使用率
	 * 
	 * @return
	 */
	private static long getMemory_windows() {
		OperatingSystemMXBean osmxb = (com.sun.management.OperatingSystemMXBean) ManagementFactory
				.getOperatingSystemMXBean();
		// 物理内存（内存条）
		long physicalMemorySize = osmxb.getTotalPhysicalMemorySize();
		return physicalMemorySize;
	}
 
	/**
	 * 获取CPU_SN linux
	 * 
	 * @return
	 */
	public static String getCPU_linux() throws InterruptedException {
		String result = "";
		String CPU_ID_CMD = "dmidecode";
		BufferedReader bufferedReader = null;
		Process p = null;
		try {
			p = Runtime.getRuntime().exec(new String[] { "sh", "-c", CPU_ID_CMD });// 管道
			bufferedReader = new BufferedReader(new InputStreamReader(p.getInputStream()));
			String line = null;
			int index = -1;
			while ((line = bufferedReader.readLine()) != null) {
				// 寻找标示字符串[hwaddr]
				index = line.toLowerCase().indexOf("uuid");
				if (index >= 0) {// 找到了
					// 取出MAC并去除2边空格
					result = line.substring(index + "uuid".length() + 1).trim();
					break;
				}
			}
 
		} catch (IOException e) {
		}
		return result.trim();
	}
	/**
     * 获取客户端IP
     * 
     * @return
     */
    public static String getIP_linux() throws IOException {
        return InetAddress.getLocalHost().getHostAddress().toString();
    }
	private static String getIP_windows() throws IOException {
		 	String ip = null;
	        InetAddress addr;
	        addr = InetAddress.getLocalHost();
	        ip = addr.getHostAddress();
	        return ip;
	}
	public static String getCPU_windows() {
		Process process;
		String serial = null;
		try {
			process = Runtime.getRuntime().exec(
					new String[] { "wmic", "cpu", "get", "ProcessorId" });
			process.getOutputStream().close();
			Scanner sc = new Scanner(process.getInputStream());
			String property = sc.next();
			serial = sc.next();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return serial;
	}

        /*
                          * 获取Linux的mac
         */
        public static String getMAC_linux() {
		
		String mac = null;
		BufferedReader bufferedReader = null;
		Process process = null;
		try {
			// linux下的命令，一般取eth0作为本地主网卡
			process = Runtime.getRuntime().exec("ifconfig");
			// 显示信息中包含有MAC信息
			bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
			String line = null;
			while ((line = bufferedReader.readLine()) != null) 
			 {
				 Pattern pat = Pattern.compile("\\b\\w+:\\w+:\\w+:\\w+:\\w+:\\w+\\b");
				 Matcher mat= pat.matcher(line);
				 if(mat.find())
				 {
					 mac=mat.group(0);
				 }
			 }
 
		} catch (IOException e) {
		} finally {
			try {
				if (bufferedReader != null) {
					bufferedReader.close();
				}
			} catch (IOException e1) {
			}
			bufferedReader = null;
			process = null;
		}
		return mac;
	}
    	/**
    	 * 获取widnows网卡的MAC.
    	 */
    	public static String getMAC_windows() {
        {  
        	StringBuffer sb = new StringBuffer("");
            try   
            {  
        		InetAddress ia = InetAddress.getLocalHost();
        		// TODO Auto-generated method stubַ
        		byte[] mac = NetworkInterface.getByInetAddress(ia).getHardwareAddress();
        		
        		for(int i=0; i<mac.length; i++) {
        			if(i!=0) {
        				sb.append("-");
        			}
        			int temp = mac[i]&0xff;
        			String str = Integer.toHexString(temp);
        			if(str.length()==1) {
        				sb.append("0"+str);
        			}else {
        				sb.append(str);
        			}
        		}             
            } catch (Exception e) {  
                e.printStackTrace();  
            } 
              
            return sb.toString().toUpperCase();  
        }
    }
	/**
     * Purpose:采集内存使用率
     * @param args
     * @return float,内存使用率,小于1
     */
    public static float getMemory_linux() {
        long totalMem = 0;
        Process pro = null;
        Runtime r = Runtime.getRuntime();
        try {
            String command = "cat /proc/meminfo";
            pro = r.exec(command);
            BufferedReader in = new BufferedReader(new InputStreamReader(pro.getInputStream()));
            String line = null;
            while((line=in.readLine()) != null){ 
                String[] memInfo = line.split("\\s+");
                if(memInfo[0].startsWith("MemTotal")){
                    totalMem = Long.parseLong(memInfo[1]);
                    break;
                }               
            }
            in.close();
            pro.destroy();
        } catch (IOException e) {
            StringWriter sw = new StringWriter();
            e.printStackTrace(new PrintWriter(sw));
        }    
        return totalMem;
    }
    public void index() throws Exception {
		String Key = prop.get("Key");//key
    	String msg = null;
    	String os = null;
    	os = System.getProperty("os.name").toUpperCase();
		if("LINUX".equals(os)) {
			msg = (
			"OS:" + os+"&"+
			"CPU_SN:" + getCPU_linux()+"&"+
			"IP:" + getIP_linux()+"&"+
			"MAC:" + getMAC_linux()+"&"+
			"DISK_SIZE:" + getDisk_linux()+"&"+
			"MEMORY_SIZE:" + getMemory_linux());
		}else {
			msg = ("OS:" + os+"&"+
			"CPU_SN:" + getCPU_windows()+"&"+
			"IP:" + getIP_windows()+"&"+
			"MAC:" + getMAC_windows()+"&"+
			"DISK_SIZE:" + getDisk_windows()+"G"+"&"+
			"MEMORY_SIZE:" + getMemory_windows());
		}
        String mystr = msg;
        String secret = Key;
        String encode = encrypt(mystr, secret);
//        renderText(msg);
        renderText(encode);
    }
}

```
验证
```
package e2r.cn;
import org.apache.commons.codec.binary.Base64;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.Security;
import java.security.spec.AlgorithmParameterSpec;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.File;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Date;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.lang.management.ManagementFactory;

import com.jfinal.core.Controller;
import com.jfinal.kit.Prop;
import com.jfinal.kit.PropKit;
import com.sun.management.OperatingSystemMXBean;

import com.jfinal.core.Controller;
import com.jfinal.kit.Prop;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

public class CheckAesPcInfoController extends Controller{
	private static Prop prop = PropKit.use("config.properties");//加载配置文件
    private static final String CHARSET_NAME = "UTF-8";
    private static final String AES_NAME = "AES";
    private static final String ALGORITHM = "AES/CBC/PKCS7Padding";
	static {
        Security.addProvider(new BouncyCastleProvider());
    }
    /**
     * 加密
     * @param content
     * @param key
     * @return
     */
    public static String encrypt(String content, String key) {
        byte[] result = null;
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(CHARSET_NAME), AES_NAME);
            AlgorithmParameterSpec paramSpec = new IvParameterSpec(subBytes(key.getBytes(CHARSET_NAME)));
            cipher.init(Cipher.ENCRYPT_MODE, keySpec, paramSpec);
            result = cipher.doFinal(content.getBytes(CHARSET_NAME));
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
        return Base64.encodeBase64String(result);
    }

    /**
     * 解密
     * @param content
     * @param key
     * @return
     */
    public static String decrypt(String content, String key) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(CHARSET_NAME), AES_NAME);
            AlgorithmParameterSpec paramSpec = new IvParameterSpec(subBytes(key.getBytes(CHARSET_NAME)));
            cipher.init(Cipher.DECRYPT_MODE, keySpec, paramSpec);
            return new String(cipher.doFinal(Base64.decodeBase64(content)), CHARSET_NAME);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
                * 从一个byte[]数组中截取一部分
     * @param src
     * @return
     */
    public static byte[] subBytes(byte[] src) {
        if (src.length < 16) {
            throw new RuntimeException("无法从Key中获取偏移量!");
        }
        byte[] bs = new byte[16];
        for (int i = 0; i < 16; i++) {
            bs[i] = src[i];
        }
        return bs;
    }
    public static Desk getDisk_linux() {
        Desk desk = new Desk();
        try {
            Runtime rt = Runtime.getRuntime();
            Process p = rt.exec("df -hl");// df -hl 查看硬盘空间
            BufferedReader in = null;
            try {
                in = new BufferedReader(new InputStreamReader(
                        p.getInputStream()));
                String str = null;
                String[] strArray = null;
                int line = 0;
                while ((str = in.readLine()) != null) {
                    line++;
                    if (line != 2) {
                        continue;
                    }
                    int m = 0;
                    strArray = str.split(" ");
                    for (String para : strArray) {
                        if (para.trim().length() == 0)
                            continue;
                        ++m;
                        if (para.endsWith("G") || para.endsWith("Gi")) {
                            // 目前的服务器
                            if (m == 2) {
                                desk.setTotal(para);
                            }
                            if (m == 3) {
                                desk.setUsed(para);
                            }
                        }
                        if (para.endsWith("%")) {
                            if (m == 5) {
                                desk.setUse_rate(para);
                            }
                        }
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                in.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return desk;
    }
 
    public static class Desk {
        private String total;
        private String used;
        private String use_rate;
         
        public String toString(){
            return total;
        }
 
        public String getTotal() {
            return total;
        }
 
        public void setTotal(String total) {
            this.total = total;
        }
 
        public String getUsed() {
            return used;
        }
 
        public void setUsed(String used) {
            this.used = used;
        }
 
        public String getUse_rate() {
            return use_rate;
        }
 
        public void setUse_rate(String use_rate) {
            this.use_rate = use_rate;
        }
 
    }
	/**
	 * TODO 获取文件系统使用率
	 * 
	 * @return
	 */
	private static double getDisk_windows() {
		double total = 0;
		for (char c = 'A'; c <= 'Z'; c++) {
			String dirName = c + ":/";
			File win = new File(dirName);
			if (win.exists()) {
				total = win.getTotalSpace() / 1024.0 / 1024.0 / 1024.0;
				// 保留一位小数
				total = Double.valueOf(String.valueOf(total).substring(0, String.valueOf(total).indexOf(".") + 2));	
				break;
			}
		}
		return total;
	}
 
	/**
	 * TODO 获取内存使用率
	 * 
	 * @return
	 */
	private static long getMemory_windows() {
		OperatingSystemMXBean osmxb = (com.sun.management.OperatingSystemMXBean) ManagementFactory
				.getOperatingSystemMXBean();
		// 物理内存（内存条）
		long physicalMemorySize = osmxb.getTotalPhysicalMemorySize();
		return physicalMemorySize;
	}
 
	/**
	 * 获取CPU_SN linux
	 * 
	 * @return
	 */
	public static String getCPU_linux() throws InterruptedException {
		String result = "";
		String CPU_ID_CMD = "dmidecode";
		BufferedReader bufferedReader = null;
		Process p = null;
		try {
			p = Runtime.getRuntime().exec(new String[] { "sh", "-c", CPU_ID_CMD });// 管道
			bufferedReader = new BufferedReader(new InputStreamReader(p.getInputStream()));
			String line = null;
			int index = -1;
			while ((line = bufferedReader.readLine()) != null) {
				// 寻找标示字符串[hwaddr]
				index = line.toLowerCase().indexOf("uuid");
				if (index >= 0) {// 找到了
					// 取出MAC并去除2边空格
					result = line.substring(index + "uuid".length() + 1).trim();
					break;
				}
			}
 
		} catch (IOException e) {
		}
		return result.trim();
	}
	/**
     * 获取客户端IP
     * 
     * @return
     */
    public static String getIP_linux() throws IOException {
        return InetAddress.getLocalHost().getHostAddress().toString();
    }
	private static String getIP_windows() throws IOException {
		 	String ip = null;
	        InetAddress addr;
	        addr = InetAddress.getLocalHost();
	        ip = addr.getHostAddress();
	        return ip;
	}
	public static String getCPU_windows() {
		Process process;
		String serial = null;
		try {
			process = Runtime.getRuntime().exec(
					new String[] { "wmic", "cpu", "get", "ProcessorId" });
			process.getOutputStream().close();
			Scanner sc = new Scanner(process.getInputStream());
			String property = sc.next();
			serial = sc.next();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return serial;
	}

        /*
                          * 获取Linux的mac
         */
        public static String getMAC_linux() {
		
		String mac = null;
		BufferedReader bufferedReader = null;
		Process process = null;
		try {
			// linux下的命令，一般取eth0作为本地主网卡
			process = Runtime.getRuntime().exec("ifconfig");
			// 显示信息中包含有MAC信息
			bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
			String line = null;
			while ((line = bufferedReader.readLine()) != null) 
			 {
				 Pattern pat = Pattern.compile("\\b\\w+:\\w+:\\w+:\\w+:\\w+:\\w+\\b");
				 Matcher mat= pat.matcher(line);
				 if(mat.find())
				 {
					 mac=mat.group(0);
				 }
			 }
 
		} catch (IOException e) {
		} finally {
			try {
				if (bufferedReader != null) {
					bufferedReader.close();
				}
			} catch (IOException e1) {
			}
			bufferedReader = null;
			process = null;
		}
		return mac;
	}
    	/**
    	 * 获取widnows网卡的MAC.
    	 */
    	public static String getMAC_windows() {
        {  
        	StringBuffer sb = new StringBuffer("");
            try   
            {  
        		InetAddress ia = InetAddress.getLocalHost();
        		// TODO Auto-generated method stubַ
        		byte[] mac = NetworkInterface.getByInetAddress(ia).getHardwareAddress();
        		
        		for(int i=0; i<mac.length; i++) {
        			if(i!=0) {
        				sb.append("-");
        			}
        			int temp = mac[i]&0xff;
        			String str = Integer.toHexString(temp);
        			if(str.length()==1) {
        				sb.append("0"+str);
        			}else {
        				sb.append(str);
        			}
        		}             
            } catch (Exception e) {  
                e.printStackTrace();  
            } 
              
            return sb.toString().toUpperCase();  
        }
    }
	/**
     * Purpose:采集内存使用率
     * @param args
     * @return float,内存使用率,小于1
     */
    public static float getMemory_linux() {
        long totalMem = 0;
        Process pro = null;
        Runtime r = Runtime.getRuntime();
        try {
            String command = "cat /proc/meminfo";
            pro = r.exec(command);
            BufferedReader in = new BufferedReader(new InputStreamReader(pro.getInputStream()));
            String line = null;
            while((line=in.readLine()) != null){ 
                String[] memInfo = line.split("\\s+");
                if(memInfo[0].startsWith("MemTotal")){
                    totalMem = Long.parseLong(memInfo[1]);
                    break;
                }               
            }
            in.close();
            pro.destroy();
        } catch (IOException e) {
            StringWriter sw = new StringWriter();
            e.printStackTrace(new PrintWriter(sw));
        }    
        return totalMem;
    }
    public void getServer() {
//    	String param = getPara("param");
    	String param = "05HICfOg4YS65FuYS2KiJ3Gh0XVF3sS9ERBuIRsvNYUBVteQ0PNa7SYCpTriH+hSGavlWo1m93NnI8YomVvi4/w6/T0KNkB0NJv7vQhOIH5VQ4ZfDjYKPRJ3lXTGQTnq7zzlinwkbQr0Fl+St79zcp3dSFtCbkVF7QX8gZrrltk=";
    	renderText(param);
    }
//	public static void main(String[] args) throws Exception {
//		String param = "05HICfOg4YS65FuYS2KiJ3Gh0XVF3sS9ERBuIRsvNYUBVteQ0PNa7SYCpTriH+hSGavlWo1m93NnI8YomVvi4/w6/T0KNkB0NJv7vQhOIH5VQ4ZfDjYKPRJ3lXTGQTnq7zzlinwkbQr0Fl+St79zcp3dSFtCbkVF7QX8gZrrltk=";
//		if (param == null || param.trim().length() == 0) {
//    		System.out.println("error");
//			return;
//    	}else {
//    		String Key = prop.get("Key");//key
//    		String OSInfo = prop.get("OSInfo");//OSInfo
//        	String mystr = param;
//        	String secret = Key;
//        	String decode = decrypt(mystr, secret);
////        	System.out.println(decode);
////        	System.out.println(OSInfo);
//        	if(OSInfo.equals(decode)) {
//        		Date d = new Date();
//        		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
//                String dateNowStr = sdf.format(d);
//        		String Salt = prop.get("Salt");//Salt
//        		String msg = param+"&"+Salt+"&"+dateNowStr;
////        		System.out.println(msg);
//        		String encode = encrypt(msg, secret);
////        		System.out.println(encode);
//        	}else {
//        		System.out.println("fail");
//        	}
//    	}
//	}
    public void index() throws Exception {
    	String requestUrl = getRequest().getServerName();
    	String checkUrl = prop.get("CheckUrl");//CheckUrl
    	boolean checkUrlFlag = checkUrl.equals(requestUrl);
    	if(!checkUrlFlag) {
    		renderText("error:url验证失败");
    		return;
    	}
    	String param = getPara("param");
		if (param == null || param.trim().length() == 0) {
			renderText("error:请求参数不能为空");
			return;
    	}else {
    		String Key = prop.get("Key");//key
    		String OSInfo = prop.get("OSInfo");//OSInfo
        	String mystr = param;
        	String secret = Key;
        	String decode = decrypt(mystr, secret);
        	boolean checkOSInfoFlag = OSInfo.equals(decode);
        	if(checkOSInfoFlag) {
        		Date d = new Date();
        		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
                String dateNowStr = sdf.format(d);
        		String Salt = prop.get("Salt");//Salt
        		String msg = param+"&"+Salt+"&"+dateNowStr;
        		String encode = encrypt(msg, secret);
        		renderText(encode);
        		return;
        	}else {
        		renderText("error:信息验证失败");
        		return;
        	}
    	}
    }
}
```

## vscode正则表达式示例
```
下面是一些可能的恶意活动：
目标	Expression	示例
与任何单个字符匹配（换行符除外）	方法。	a.o 匹配“around”中的“aro”及“about”中的“abo”，但不匹配“across”中的“acro”。
零次或多次匹配前面的表达式（匹配尽可能多的字符）	*	a*r 匹配“rack”中的“r”，“ark”中的“ar”和“aardvark”中的“aar”
零次或多次匹配任何字符（通配符 *）	.*	c.*e 匹配“racket”中的“cke”，“comment”中的“comme”和“code”中的“code”
一次或多次匹配前面的表达式（匹配尽可能多的字符）	+	e.+e 匹配“feeder”中的“eede”，而不是“ee”。
一次或多次匹配任意字符（通配符 ?）	.+	e.+e 匹配“feeder”中的“eede”，而不是“ee”。
零次或多次匹配前面的表达式（匹配尽可能多的字符）	*?	e.*?e 匹配“feeder”中的“ee”，而不是“eede”。
一次或多次匹配前面的表达式（匹配尽可能多的字符）	+?	e.+?e 匹配“enterprise”中的“ente”和“erprise”，但不匹配整个单词“enterprise”。
将匹配字符串定位到行或字符串的开头	^	^car 仅在出现于行开头时才匹配单词“car”。
将匹配字符串定位到行尾	\r?$	End\r?$ 仅在出现于行尾时才匹配“end”。
匹配集中的任何单个字符	[abc]	b[abc] 匹配“ba”、“bb”和“bc”。
匹配的字符范围中的任意字符	[a-f]	be[n-t] 匹配“between”中的“bet”，“beneath”中的“ben”，“beside”中的“bes”，但不匹配“below”。
捕获包含在括号中的表达式并对其进行隐式编号	()	([a-z])X\1 匹配“aXa”和“bXb”，但不匹配“aXb”。 ". “\1”是指第一个表达式组“[a-z]”。
使匹配无效	(?!abc)	real (?!ity) 匹配“realty”和“really”中的“real”，但不匹配“reality”。 它还可找到“realityreal”中的第二个“real”（而非第一个“real”）。
匹配不在给定字符集中的任意字符	[^abc]	be[^n-t] 匹配“before”中的“bef”，“behind”中的“beh”和“below”中的“bel”，但不匹配“beneath”。
匹配符号前或符号后的表达式。	|	(sponge&#124;mud) bath 匹配“sponge bath”和“mud bath”。
对反斜杠后面的字符进行转义	|\^ 匹配字符 ^。	
指定前面的字符或组的出现次数	{x}，其中 x 是出现次数	x(ab){2}x 匹配“xababx”，x(ab){2,3}x 匹配“xababx”和“xabababx”，但不匹配“xababababx”。
匹配 Unicode 字符类中的文本，其中“X”是 Unicode 数字。 有关 Unicode 字符类的详细信息，请参阅

Unicode Standard 5.2 字符属性。	\p{X}	\p{Lu} 匹配“Thomas Doe”中的“T”和“D”。
与字边界匹配	\b（在字符类 \b 的外部指定字边界，而在字符类内部指定退格符）。	\bin 匹配“inside”中的“in”，不匹配“pinto”。
与换行符（即回车符后跟新行）相匹配。	\r?\n	仅当“End”是一行的最后一个字符串，且“Begin”是下一行的第一个字符串时，End\r?\nBegin 才匹配“End”和“Begin”。
匹配任意字母数字字符	\w	a\wd 匹配“add”和“a1d”，不匹配“a d”。
匹配任意空格字符。	(?([^\r\n])\s)	Public\sInterface 匹配词组“Public Interface”。
匹配任意数字字符	\d	\d 匹配“3456”中的“3”，“23”中的“2”和“1”中的“1”。
匹配 Unicode 字符	\uXXXX，其中 XXXX 指定 Unicode 字符值。	\u0065 匹配字符“e”。
匹配标识符	\b(\w+|[\w-[0-9\]]\w*)\b	匹配“Type1”，但不匹配“&type1”或“#define”。
与引号中的字符串匹配	((\".+?\")|('.+?'))	匹配单引号或双引号内的任意字符串。
匹配十六进制数	\b0[xX]([0-9a-fA-F])\b	匹配“0xc67f”但不匹配“0xc67fc67f”。
匹配整数和小数	\b[0-9]*\.*[0-9]+\b	匹配“1.333”。
```


## 统一社会信用代码、身份证号、手机号后端验证
```
    最完整的php验证手机号码
    
    感觉网上的手机号码验证都不是很严格，自已写了一个,目前支持：
    
    移动：134、135、136、137、138、139、150、151、152、157、158、159、182、183、184、187、188、178(4G)、147(上网卡)；
    
    联通：130、131、132、155、156、185、186、176(4G)、145(上网卡)；
    
    电信：133、153、180、181、189 、177(4G)；
    
    卫星通信：1349
    
    虚拟运营商：170
    
        /**
        * 验证手机号是否正确
        * @author honfei
        * @param number $mobile
        */
        function isMobile($mobile) {
            if (!is_numeric($mobile)) {
                return false;
            }
            return preg_match('#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#', $mobile) ? true : false;
        }
     

        /**
         * 判断是否为合法的身份证号码
         * @author jyc
         * @param $mobile
         * @return int
         */
        function isCreditNo($vStr){
            $vCity = array(
                '11','12','13','14','15','21','22',
                '23','31','32','33','34','35','36',
                '37','41','42','43','44','45','46',
                '50','51','52','53','54','61','62',
                '63','64','65','71','81','82','91'
            );
            if (!preg_match('/^([\d]{17}[xX\d]|[\d]{15})$/', $vStr)) return false;
            if (!in_array(substr($vStr, 0, 2), $vCity)) return false;
            $vStr = preg_replace('/[xX]$/i', 'a', $vStr);
            $vLength = strlen($vStr);
            if ($vLength == 18) {
                $vBirthday = substr($vStr, 6, 4) . '-' . substr($vStr, 10, 2) . '-' . substr($vStr, 12, 2);
            } else {
                $vBirthday = '19' . substr($vStr, 6, 2) . '-' . substr($vStr, 8, 2) . '-' . substr($vStr, 10, 2);
            }
            if (date('Y-m-d', strtotime($vBirthday)) != $vBirthday) return false;
            if ($vLength == 18) {
                $vSum = 0;
                for ($i = 17 ; $i >= 0 ; $i--) {
                    $vSubStr = substr($vStr, 17 - $i, 1);
                    $vSum += (pow(2, $i) % 11) * (($vSubStr == 'a') ? 10 : intval($vSubStr , 11));
                }
                if($vSum % 11 != 1) return false;
            }
            return true;
        }

    /**
         * 描述: 验证统一社会信用代码
         * 作者：xyn
         * 创建时间:2019-08-29
         * 修改时间:
         * 最后修改人
         * 使用位置，
         */
        // 《GB_32100-2015_法人和其他组织统一社会信用代码编码规则.》
        // 按照编码规则:
        // 统一代码为18位，统一代码由十八位的数字或大写英文字母（不适用I、O、Z、S、V）组成，由五个部分组成：
        // 第一部分（第1位）为登记管理部门代码，9表示工商部门；(数字或大写英文字母)
        // 第二部分（第2位）为机构类别代码;(数字或大写英文字母)
        // 第三部分（第3-8位）为登记管理机关行政区划码；(数字)
        // 第四部分（第9-17位）为全国组织机构代码；(数字或大写英文字母)
        // 第五部分（第18位）为校验码(数字或大写英文字母)
        public static function unifiedSocialCreditIdentifier($value) {
            // 统一代码由十八位的阿拉伯数字或者大写英文字母（不使用I、O、Z、S、V）组成
            if (!is_string($value)) return false;
            $value = strtoupper($value);
            if (strlen($value) !== 18 || !preg_match('/^[\dA-HJ-NP-RT-UW-Y]{18}$/', $value)) return false;
            // todo 第1位：登记管理部门代码检查
            // todo 第2位：机构类别代码检查
            // todo 第3位～第8位：登记机关行政区划码检查
            if (!is_numeric(substr($value, 2, 6))) return false; // 简单检查，这部分一定是阿拉伯数字
            // todo 第9位～第17位：主体标识码检查
            // 第18位：检验码检查
            if(!preg_match('/^[A-Z0-9]+$/u', substr($value, 8, 9))) return false;
            if(!(substr($value, 17, 1))) return false; // 简单检查，这部分一定是阿拉伯数字
            return true;
        }
```

## 怎么查CPU序列号

一、CPU都有一个唯一的ID号，称CPUID，是在制造CPU的时候，由厂家置入到CPU内部知的。

二、查看方法：

1、右点开始，选运行，并输入CMD。

2、输入wmic CPU get ProcessorID ，就可以得到ID。

三、作道用和意义：

由于CPU外在的所有标记、符号，都是可以人为打磨，而CPUID却是终身不变的，只能用软件读出ID号；因此，利用这个原理，CPU ID工具可内以显出CPU的确切信息容，包括移动版本、主频、外频、二级缓存等关键信息，从而查出超频的CPU，并且醒目地显示出来。

## ie11导出pdf中文乱码
```
        $user_agent = $_SERVER['HTTP_USER_AGENT'];
        $flag1 = substr_count($user_agent,"msie");
        $flag2 = substr_count($user_agent,"like Gecko");
        if ($flag1 || $flag2){
            $WorkerName= urlencode($WorkerName);
        }
```
完整导出代码
```
        /**
         * 描述: 电子合同pdf
         * 作者：jyc
         * 创建时间:2018-11-02
         * 修改时间:
         * 最后修改人:
         */
        public function actionExport_pdf()
        {
            Yii::import('lib.tcpdf.TCPDF', true);
            //实例化
            $pdf = new TCPDF('P', 'mm', 'A4', true, 'UTF-8', false);
            // 设置文档信息
            //$pdf->SetCreator('Helloweba');
            //$pdf->SetAuthor('yueguangguang');
    
            $pdf->SetSubject('TCPDF Tutorial');
            $pdf->SetKeywords('TCPDF, PDF, PHP');
            $pdf->setPrintHeader(false);
            $pdf->setPrintFooter(false);
    
            //        // 设置页眉和页脚信息
            //        $pdf->SetHeaderData('logo.png', 30, 'Helloweba.com', '致力于WEB前端技术在中国的应用',
            //            array(0,64,255), array(0,64,128));
            //        $pdf->setFooterData(array(0,64,0), array(0,64,128));
            //
            //        // 设置页眉和页脚字体
            //        $pdf->setHeaderFont(Array('stsongstdlight', '', '10'));
            //        $pdf->setFooterFont(Array('helvetica', '', '8'));
    
            // 设置默认等宽字体
            $pdf->SetDefaultMonospacedFont('courier');
    
            // 设置间距
            //$pdf->SetMargins(15, 0, 15);
            $pdf->SetHeaderMargin(5);
            $pdf->SetFooterMargin(0);
    
            // 设置分页
            //$pdf->SetAutoPageBreak(true, 25);
            //$pdf->SetAutoPageBreak(true, PDF_MARGIN_BOTTOM);
            // set image scale factor
            $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
    
            // set default font subsetting mode
            $pdf->setFontSubsetting(true);
            $pdf->Ln(4);
            //设置字体
            //$pdf->SetFont('stsongstdlight', '', 10);
            $pdf->SetFont('msyh', '', 10);
            $pdf->SetMargins(10, 0, 10);
            $pdf->AddPage();
            $id =  $_GET['id'];
            $contract_detail = Contract::get_detail($id);
            $pay_calculation_way_type = SysDictionary::pay_calculation_way();
            $work_type = SysDictionary::_findAllByTypeCode();
            $contract_detail['pay_calculation_way_text'] = $pay_calculation_way_type[ $contract_detail['PayCalculationWay']];
            //如果是八大员就显示施工总包
            if ($contract_detail['IsEightofficers'] ==1) {
                $contract_detail['LaborCompanyName'] = $contract_detail['ContractorName'];
            }
            $pdf->SetTitle($contract_detail['WorkerName'].'的电子合同');
            $year = explode('-', $contract_detail['StartTime']);
            //array(substr( $contract_detail['StartTime'],0,4),substr($contract_detail['StartTime'],5,2),substr($contract_detail['StartTime'],8,2));
            $html="<div style=\"width:100%; margin: 0 auto;\">";
            $html.="<h5 style=\"text-align:center;font-size: 26px\">建筑业简易劳动合同</h5>";
            $html.="<table  style=\"width:100%;font-size: 12px\">";
            $html.="<tr><td>";
            $html.="甲方： {$contract_detail['LaborCompanyName']}";
            $html.="</td>";
            $html.="<td style=\"text-align: right\">";
            $html.="乙方： {$contract_detail['WorkerName']} （{$contract_detail['IDnumber']}）";
            $html.="</td></tr>";
            $html.="</table>";
            $html.="<p style=\"font-size: 12px;line-height:1.6\">".
            "<span style=\"font-weight: bolder;font-size: 14px\">根据《劳动法》、《劳动合同法》及有关规定，甲乙双方遵循平等自愿、协商一致的原则签订本合同。</span><br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">一、合同类别、期限 </span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以完成一定工作（任务），自 {$year[0]}年{$year[1]}月{$year[2]}日起至工作（任务）完成时终止。<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">二、工作岗位、地点、内容、时间</span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲方招用乙方在{$contract_detail['ProjectName']}项目从事&nbsp;&nbsp;{$work_type[$contract_detail['WorkClasses']]} 工作。乙方的工作地点为{$contract_detail['Address']}。经双方协商一致，可以变更工作岗位（工种）和工作地点。甲方保证乙方每周至少休息一天。甲方因施工建设需要，征得乙方同意后，可安排乙方加班。延长工时、休息日加班无法安排补休、法定节假日加班的，甲方按《劳动法》第四十四条规定支付加班工资。<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">三、工资支付</span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乙方工资为{$contract_detail['Wage']}{$contract_detail['pay_calculation_way_text']}。甲方按月结算工资，并在下一个月的{$contract_detail['PayDate']} 日前向乙方支付工资。<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">四、工伤保险 </span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;双方按国家规定参加工伤保险。甲方为乙办理有关工伤保险手续，并承担相应的工伤保险义务。<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">五、劳动保护和劳动条件</span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲方应当在乙方上岗前进行安全生产培训，乙方从事国家规定的特殊工种，应当经过培训并取得相应的职业资格证书方可上岗。甲方根据生产岗位的需要，按照国家劳动安全卫生的有关规定为乙配备必要的安全防护设施，发放必要的劳动保护用品。甲方依法建立安全生产制度。乙方严格遵守甲方依法制定的各项规章制度，不违章作业，防止劳动过程中的事故，减少职业危害。乙方有权拒绝甲方的违章指挥。<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">六、解除和终止</span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本劳动合同的解除或终止，依《劳动合同法》规定执行。<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">七、劳动争议处理</span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲乙双方发生劳动争议，可以协商解决，也可以依照《劳动争议调解仲裁法》的规定通过申请调解、仲裁和提起诉讼解决。<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">八、其他约定</span>{$contract_detail['Remark']}<br/>".
            "<span style=\"font-weight: bolder;font-size: 14px\">九、其他</span><br/>".
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本劳动合同一式二份，甲乙双方各执一份。<br/>".
            "</p>";
            $html.="<table  style=\"width:100%;font-size: 14px\">";
            $html.="<tr><td>";
            $html.="甲方（公章）";
            $html.="</td>";
            $html.="<td style=\"text-align: right\">";
            $html.="乙方（签字或盖章）";
            $html.="</td></tr>";
            $html.="</table>";
            $html.="<table  style=\"width:100%;font-size: 14px\">";
            $html.="<tr><td><br/><br/>";
            $html.="法定代表人或委托代理人<br/>（签字或盖章）";
            $html.="</td>";
            $html.="<td style=\"text-align: right\"><br/><br/>";
            $html.="签订日期:&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日";
            $html.="</td></tr>";
            $html.="</table>";
            $html.="<br/><br/><br/>";
            // 判断文件是否损坏
            $pic_url = "./uploads/worker/front_{$contract_detail['AvatarEncryption']}.jpeg";
            $data = @file_get_contents($pic_url);
            $pic_status = @imagecreatefromstring($data);
            if( $pic_status != false ){
                $imgFlag = 1;
                // echo '图片状态正常！！';
            }else{
                $imgFlag = 0;
                // echo '图片已损坏！！';
            }
            if($imgFlag == 1){
                $html.="<table  style=\"width:100%;font-size: 14px\">";
                $html.="<tr><td>";
                $html.="<img src=\"/uploads/worker/front_{$contract_detail['AvatarEncryption']}.jpeg\"  style=\"width:280px;height:160px;\"/>";
                if (is_file(sprintf("%s/uploads/worker/front_%s.jpeg", WWWPATH, $contract_detail['AvatarEncryption']))===false) {
                    $html.="<p style=\"text-align: center\">身份证复印件正面粘贴</p>";
                }
                $html.="</td>";
                $html.="<td style=\"text-align: right\">";
                $html.="<img src=\"/uploads/worker/back_{$contract_detail['AvatarEncryption']}.jpeg\"  style=\"width:280px;height:160px;\"/>";
                if (is_file(sprintf("%s/uploads/worker/back_%s.jpeg", WWWPATH, $contract_detail['AvatarEncryption']))===false) {
                    $html.="<p style=\"text-align: center\">身份证复印件反面粘贴</p>";
                }
                $html.="</td></tr>";
                $html.="</table>";
            }
            $html.="</div>";
            $pdf->writeHTML($html, true, false, false, false, 'L');
            //输出PDF
            $dirname =IdCardPictureHandler::get_path().date('Ymd/');
            if(!is_dir($dirname)){
                mkdir($dirname,0777,true);
            }
            $name = $contract_detail['WorkerName'].$contract_detail['IDnumber'];
            $WorkerName = self::convertEncoding($name);
            $data = $pdf->Output('t.pdf', 'S');
            $fileName = $dirname."{$WorkerName}.pdf";
            $user_agent = $_SERVER['HTTP_USER_AGENT'];
            $flag1 = substr_count($user_agent,"msie");
            $flag2 = substr_count($user_agent,"like Gecko");
            if ($flag1 || $flag2){
                $WorkerName= urlencode($WorkerName);
            }
            file_put_contents($fileName,$data);
            $dist = IdCardPictureHandler::get_path().$name.'.pdf';
            Contract::model()->updateAll(array('ContractUrl'=>substr($dist,1)),'Id=:staff',array(':staff'=>$id));
            $pdf->Output("{$WorkerName}.pdf", 'I');
        }
```

## MySQL varchar 最大长度，text 类型占用空间剖析
MySQL 表中行的最大大小为 65,534（实际行存储从第二个字节开始）字节。每个 BLOB 和 TEXT 列只占其中的 5 至 9 个字节。

varchar 最长是 64k，但是注意 这里的 64k 是整个 row 的长度，要考虑到其它的 column，还有如果存在 not null 的时候也会占用一位，对不同的字符集，有效长度还不一样，比如 utf8，最多 21,845，还要除去别的 column，但是 varchar 在一般情况下存储都够用了。

如果遇到了大文本，考虑使用 text，最大能到 4G。效率来说基本是 char>varchar>text，但是如果使用的是 Innodb 引擎的话，推荐使用 varchar 代替 char。char 和 varchar 可以有默认值，text 不能指定默认值。


## 秒的单位

秒的单位都有毫秒，微秒，纳秒，皮秒，飞秒，阿秒，仄秒，幺秒。

1ms (毫秒) 1毫秒=0.001秒=10*3秒(millisecond)

1μs (微秒) 1微秒=0.000001=10*6秒(microsecond)

1ns (纳秒) 1纳秒=0.000000001秒=10*9秒(nanosecond)

1ps (皮秒) 1皮秒=0.000000000001秒=10*12秒

1fs (飞秒) 1飞秒=0.00000000000001秒=10*15秒

1as (阿秒) 1阿秒=0.00000000000000001秒=10*18秒

1zm (仄秒) 1仄秒=0.00000000000000000001秒=10*21秒

1ym (幺秒) 1幺秒=0.00000000000000000000001秒=10*24秒

10后面的数字是指数（3、6、9、12、*15）

## php-fpm推荐配置

 vim /usr/local/php/etc/php-fpm.conf
```
源

pm.max_children = 5

pm.start_servers = 2

pm.min_spare_servers = 1

pm.max_spare_servers = 3

;pm.process_idle_timeout = 10s

;pm.max_requests = 500

目标

pm.max_children = 500

pm.start_servers = 20

pm.min_spare_servers = 10

pm.max_spare_servers = 30

;m.process_idle_timeout = 10s

;m.max_requests = 500
```


## 兼容本地图片和网络图片转base64
```
                // 兼容本地图片和网络图片转base64
                // 有多张图片做截取
                if(substr_count($item['MachineUrl'], ',')){
                    $base64=explode(',', $item['MachineUrl']);
                    $images = $base64[0];//照片
                }else{
                    $images=$item['MachineUrl'];// 单照片
                }
                // 判断是本地图片，还是网络图片
                if(filter_var($images, FILTER_VALIDATE_URL)){
                    $images = $this->onlineimgtobase64($images);
                }else{
                    $images = fileToBase64('.'.$images);
                }
            }
```

## 通过外网把网络图片转成base64
```
/** 通过外网把uploads/tvscreen图片转成base64
* @param string $img 图片地址
* @return string
*/
public function onlineimgtobase64($img='')
{
    $url = 'http://52.82.105.19:81/Img.php';
    if(Yii::app()->params['Isstatus'] == 1){
        $url=sprintf($url."?img=%s", $img);
        $re = curl_requst($url,"GET");
        return $re;
    }
}
```

## PHP自带方法验证邮箱、URL、IP是否合法的函数
```
var_dump(filter_var('bob@example.com', FILTER_VALIDATE_EMAIL));
var_dump(filter_var('http://example.com', FILTER_VALIDATE_URL, FILTER_FLAG_PATH_REQUIRED));
```

## 解决java compiler level does not match the version of the installed java project facet
因工作的关系，Eclipse开发的Java项目拷来拷去，有时候会报一个很奇怪的错误。明明源码一模一样，为什么项目复制到另一台机器上，就会报“java compiler level does not match the version of the installed java project facet”错误呢？

其实要解决也很简单，在资源管理器下，找到项目所在的目录，在.settings子目录里面，用文本编辑器打开org.eclipse.wst.common.project.facet.core.xml配置文件

修改version，让它与项目的编译器版本设置保持一致即可。

要查看项目的编译器版本设置，在Eclipse环境中，鼠标右键选择项目，点击Properties，选择Java Compiler，可以在窗口右边看到编译器版本

## 执行shell脚本报错：不是有效的标识符ad
执行shell脚本一直报错

原因是在Windows上用notepad++写的脚本，不是Unix格式的

转为Unix格式即可

建议：直接在Linux环境下编写脚本便不会有格式问题

## java打包war包

右击项目——Export——WAR file

即可打包

## ie11正确卸载与重新安装

去掉勾选——重启即可卸载

勾选中——重启即可安装


## php 请求url并且获取返回值
```
// $conf = parse_ini_file(dirname(__FILE__) . '/configure.ini');
// if (!$conf) {
//     exit("Fatal: failed to read configure.ini file\n");
// }
// $javaMacUrl = trim($conf['java_mac_url']);
// $localMac = trim($conf['local_mac']);
// $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
// $context = stream_context_create($opts);
// $javaMac = file_get_contents($javaMacUrl, false,$context);
// if($localMac!=$javaMac){
//     header("Content-type: text/html; charset=utf-8");
//     exit("程序出错了!");
// }
```


## 用php扩展加密php代码
扩展地址：
https://github.com/liexusong/php-beast

在linux中安装beast扩展
```
wget https://github.com/liexusong/php-beast/archive/master.zip
unzip master.zip
cd php-beast-master
/usr/local/php/bin/phpize
./configure --with-php-config=/usr/local/php/bin/php-config
make && make install
编译好之后修改php.ini配置文件, 加入配置项: extension=beast.so, 重启php-fpm
```

更换base扩展源码秘钥
更换base扩展AES加密源码秘钥后，加密后的文件有变化
```
使用AES加密并更换key值为E2r201800xianweb

    	0x45, 0x32, 0x72, 0x32, 0x30, 0x31, 0x38, 0x30,
            0x30, 0x78, 0x69, 0x61, 0x6E, 0x77, 0x65, 0x62,
    	0x45	E
    	0x32	2
    	0x72	r
    	0x32	2
    	0x30	0
    	0x31	1
    	0x38	8
    	0x30	0
    	0x30	0
    	0x78	x
    	0x69	i
    	0x61	a
    	0x6E	n
    	0x77	w
    	0x65	e
    	0x62	b
```
设置base扩展mac地址绑定
可绑定多个mac地址
绑定mac地址后该扩展php-fpm就无法启动了

更改aes加密秘钥和mac地址后
将index.php和protected文件夹内文件加密
可以访问，暂时没有发现问题。

## mac地址是什么？
mac地址就相当于你这个人的身份证号，是全球唯一的，而且mac地址是物理层的，应用于数据链路层的，当一个数据报文要发送时，先添加源目ip地址，再添加源目mac地址，对端收到后，会拆解数据报文，先拆mac地址，然后查看数据报文的目的ip是不是自己，如果是，就会把数据报文自己留下来，如果不是，就会查自己的路由表，看有没有目的ip在里面，有的话，再次把已经拆解的数据报文再次添加上mac地址，继续往下传


## 用内网配源，安装lnmp服务
准备base文件

准备nginx服务指向base文件

/usr/local/nginx/vhosts
```
    server {
            listen       7097;
            server_name_in_redirect  off;
            charset utf-8;
    
            access_log  www.access.log  main;
            error_log  logs/www.error.log;
            set  $wwwroot /home/data/installfile/base;
            root $wwwroot;
            index index.html index.htm index.php;
            location / {
    	root /home/data/installfile/base;
    	index index.html index.html;
    	autoindex on;
    	autoindex_exact_size off;
    	autoindex_localtime on;
    }
            #error_page  404              /404.html;
            # redirect server error pages to the static page /50x.html
            #
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                    root   html;
            }
    
            # proxy the PHP scripts to Apache listening on 127.0.0.1:80
            #
            #location ~ \.php$ {
            #    proxy_pass   http://127.0.0.1;
            #}
    
            # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
            #
            location ~ \.php?.*$ {
                    root           $wwwroot;
                    fastcgi_pass   127.0.0.1:9000;
                    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
                    fastcgi_connect_timeout 240;
                    fastcgi_send_timeout 240;
                    fastcgi_read_timeout 240;
                    fastcgi_buffer_size 64k;
                    fastcgi_buffers 4 64k;
                    fastcgi_busy_buffers_size 128k;
                    fastcgi_temp_file_write_size 128k;
                    include        fastcgi_params;
            }
    
            location ~* \.(gif|jpg|jpeg|png|bmp|swf|otf|svg|eot|ttf|woff)$
            {
                      root                  $wwwroot;
                      expires               30d;
            }
    
            location ~* \.(js|css)?$
            {
                      root                  $wwwroot;
                      expires               1d;
            }
    
            #include common.conf;
    
            # deny access to .htaccess files, if Apache's document root
            # concurs with nginx's one
            #
            location ~ /\.ht {
                deny  all;
            }
    }
```
在另一台服务器更改/etc/yum.repos.d/centos.repo
```
    [centos]
    name=centos
    baseurl=http://10.0.21.193:7097
    gpgcheck=0
    enabled=1
```
yum clean all


## 设置php不报错
```
define('DEBUG',false); // 在开发时,声明一个DEBUG模式 
if(defined('DEBUG')) { //检测到处于开发模式 
　　error_reporting(E_ALL); 
} else { 
　　error_reporting(0); 
}
```

## 设置php报错等级为不报错
```
// 设置php报错等级为不报错
error_reporting(0); 
```
## PHP Notice: undefined index: header
```
119行改为以下配置
header = isset(POST['header'])?$POST['header']:'';
```

## PHP Warning:  date(): It is not safe to rely on the system's timezone settings.
在php.ini里找到date.timezone这行，把值改成PRC，如date.timezone = PRC。

如果没有这一行直接加上就好。最后重启WEB服务器与PHP即可。
```
// 设置时间格式
date_default_timezone_set("PRC");
```

## PHP Notice: curl_setopt(): CURLOPT_SSL_VERIFYHOST with value 1 is deprecated and will be removed as of libcurl 7.28.1. It is recommended to use value 2 instead in
```
1已被弃用，改为2即可
31行改为以下配置
// 对认证证书来源的检查
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
```
## Yii 更新数据时报错：列名必须是一个字符串或者数组
建表语句缺少主键
```
ALTER TABLE GUARANTEE ADD CHECK ("ID" IS NOT NULL);

ALTER TABLE GUARANTEE ADD PRIMARY KEY ("ID");
```
参考：https://www.zhangweijie.net/post/2013/10/31/1223.html


## 最完整的php验证手机号码
感觉网上的手机号码验证都不是很严格，自已写了一个,目前支持：

移动：134、135、136、137、138、139、150、151、152、157、158、159、182、183、184、187、188、178(4G)、147(上网卡)；

联通：130、131、132、155、156、185、186、176(4G)、145(上网卡)；

电信：133、153、180、181、189 、177(4G)；

卫星通信：1349

虚拟运营商：170
```
    /**
    * 验证手机号是否正确
    * @author honfei
    * @param number $mobile
    */
    function isMobile($mobile) {
        if (!is_numeric($mobile)) {
            return false;
        }
        return preg_match('#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#', $mobile) ? true : false;
    }
```

## Oracle数据库插入CLOB字段时，提示ORA-01704：字符串文字太长
```
DECLARE  
  clobValue 表名.字段名%TYPE;  
BEGIN  
  clobValue := 'XXX'; --字段内容  
  UPDATE 表名 T SET T.字段名 = clobValue WHERE 条件;  
  COMMIT;  
END;  
/  
```
参考：https://blog.csdn.net/Leolu007/article/details/81027704?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase

##　tomcat自动关闭
发现是有两个版本的tomcat在互相影响，一个重启，另一个将不能访问

## php错误级别的设置方法
```
define('DEBUG',true); // 在开发时,声明一个DEBUG模式 
if(defined('DEBUG')) { //检测到处于开发模式 
　　error_reporting(E_ALL); 
} else { 
　　error_reporting(0); 
}
```
## 过滤XSS潜在危险行为,过滤部分SQL注入
```
/**
 * 过滤XSS潜在危险行为,过滤部分SQL注入
 * 过滤字符串左右空格
 * @author gaowei<jeakry88@sina.com>
 * @param $mixed 要处理的原始字符串信息,字符串或字符串数组
 */
function match_xss_special($mixed) {
  $ra = Array('/([\x00-\x08,\x0b-\x0c,\x0e-\x19])/', '/script/', '/javascript/', '/vbscript/', '/expression/', '/applet/', '/meta/', '/xml/', '/blink/', '/link/', '/style/', '/embed/', '/object/', '/frame/', '/layer/', '/title/', '/bgsound/', '/base/', '/onload/', '/onunload/', '/onchange/', '/onsubmit/', '/onreset/', '/onselect/', '/onblur/', '/onfocus/', '/onabort/', '/onkeydown/', '/onkeypress/', '/onkeyup/', '/onclick/', '/ondblclick/', '/onmousedown/', '/onmousemove/', '/onmouseout/', '/onmouseover/', '/onmouseup/', '/onunload/');
  if (is_array($mixed)) {
    foreach ($mixed as $key => $value) {
      $mixed[$key] = match_xss_special($mixed[$key]);
    }
  } else if (is_string($mixed)) {
    //不对magic_quotes_gpc转义过的字符使用addslashes(),避免双重转义。
    if (!get_magic_quotes_gpc()) {
      //给单引号（'）、双引号（"）、反斜线（\）与 NUL（NULL 字符）加上反斜线转义
      //$mixed = addslashes($mixed);
    }
    $mixed=trim($mixed);
    //$mixed = str_replace(array('&', '<', '>'), array('&amp;', '&lt;', '&gt;'), $mixed);
    //删除非打印字符，粗暴式过滤xss可疑字符串
    //$mixed = preg_replace($ra, '', $mixed);
    //去除 HTML 和 PHP 标记并转换为 HTML 实体
    //$mixed = htmlentities(strip_tags($mixed));
    //$mixed = htmlspecialchars(trim($mixed), ENT_QUOTES);
  }
  return $mixed;
}
```

## java服务安装cenos7+apache-tomcat-7.0.85+jdk1.7.0_80

1.将jdk，apache解压到/user/local/下面

    tar -xf apache-tomcat-7.0.85.tar
    tar -xf jdk1.7.0_80.tar

2.修改/etc/profile

    vim /etc/profile
    export JAVA_HOME=/usr/local/jdk1.7.0_80/
    export JRE_HOME=/usr/local/jdk1.7.0_80/jre
    export PATH=$PATH:/usr/local/jdk1.7.0_80/bin
    export CLASSPATH=./:/usr/local/jdk1.7.0_80/lib
    source /etc/profile

source /etc/profile 立即生效

3.将curlraw.war放到apache下的webapps目录下

4.启动tomcat

/usr/local/apache-tomcat-7.0.85/bin/startup.sh

5.停止tomcat

/usr/local/apache-tomcat-7.0.85/bin/shutdown.sh

6.修改webapp/curlraw/data_config.txt里的数据库配置为

webapps/curlraw/WEB-INF/classes/data_config.txt

修改一下tomcat端口号，进入tomcat的conf目录下，修改server.xml文件，通过vi命令打开文件后直接输入/8080检索到端口号的位置，进入编辑模式后修改端口号为8081

注意查看端口是否和其他服务冲突

7重启tomcat

curl localhost:8081/curlraw/hello/testUploadCorp

## php使用curl对接row+json+java的接口

curl会出现一直不响应的情况。

后来改成curl访问我方java服务

我方java再传给对方java，将拿到的返回值给php

完成操作。

## .tar包解压

tar -xf all.tar

## Linux下安装PHP的mcrypt扩展
```
cd /data/nginx+php/php-5.5.12/ext/mcrypt

/usr/local/php/bin/phpize

./configure --with-php-config=/usr/local/php/bin/php-config

make && make install

vim /etc/php.ini

extension = /usr/local/php/lib/php/extensions/no-debug-zts-20131226/mcrypt.so

/usr/local/php/sbin/php-fpm -c /etc/php.ini
```

## Git无法检测到文件名大小写的更改

在当前项目中，早先创建并已经push到远程的文件及文件夹，将名称大小写更改后，git无法检测出更改。
出现这种情况的原因是，git默认配置为忽略大小写，因此无法正确检测大小写的更改。
那么，解决办法是，在当前项目中，运行git config core.ignorecase false，关闭git忽略大小写配置，即可检测到大小写名称更改。

## failed to open stream:Permission denied in 错误的解决方法

1，问题：用php在做项目的时候，偶尔会出现failed to open stream:Permission denied in 这个错误，原因是因为某个没有某个文件的血的权限，所以在写入文件的时候会报错
2，解决方案：点击该文件，右击，点击属性，会看到该文件的所有属性，点击安全，即可设置所有组的用户权限，点击写入即可有写入权限

## MySql查重语句

```
SELECT
    count(*),
    IndentId
FROM
    t_customerforsale
-- WHERE
--     IndentId = ''
GROUP BY
    IndentId
HAVING
    count(*) > 1;
```

## 图片转base64和base64字符串转存图片
```
    /**
     * @desc base64字符串转存图片
     * @param string $imgBase64 图片base64格式字符串
     * @param string $filename 文件名称
     * @author tzg
     * @since 0.1
     * note:1.该方法使用了修改文件，所以./uploads/worker/必须加755权限
     */
    private static function base64_to_picture($imgBase64,$filename){
        //if(!file_exists(self::$path.$filename.'.jpeg')){
        if (preg_match('/^(data:\s*image\/(\w+);base64,)/',$imgBase64,$res)) {
            //获取图片类型
            $type = $res[2];
            //图片保存路径
    		$webroot = Yii::getPathOfAlias('webroot');
    		$ym = date('Ymd');
    		$home_images_path = '/uploads/images/' . $ym;
    		$new_file = $webroot . '/' . $home_images_path.'/';
            if (!file_exists($new_file)) {
                @mkdir($new_file,0755,true);
                @chmod($new_file,0755);
            }
            //图片名字
            $new_file = $new_file.$filename.'.'.$type;
            if (file_put_contents($new_file,base64_decode(str_replace($res[1],'', $imgBase64)))) {
                return true;
            } else {
                return false;
            }
        }
    }
    
        /**
         * @desc 图片base64字符串转存图片
         * @param string $imgBase64 图片base64格式字符串
         * @param string $filename 文件名称
         * @author tzg
         * @since 0.1
         * note:1.该方法使用了修改文件，所以./uploads/worker/必须加755权限
         */
        private static function base64_to_picture($imgBase64,$filename){
            //if(!file_exists(self::$path.$filename.'.jpeg')){
            if (preg_match('/^(data:\s*image\/(\w+);base64,)/',$imgBase64,$res)) {
                //获取图片类型
                $type = $res[2];
                //图片保存路径
    			$webroot = Yii::getPathOfAlias('webroot');
    			$ym = date('Ymd');
    			$home_images_path = '/uploads/images/' . $ym;
    			$new_file = $webroot . '/' . $home_images_path.'/';
                if (!file_exists($new_file)) {
                    @mkdir($new_file,0755,true);
                    @chmod($new_file,0755);
                }
                //图片名字
                $new_file = $new_file.$filename.'.'.$type;
                if (file_put_contents($new_file,base64_decode(str_replace($res[1],'', $imgBase64)))) {
                    return true;
                } else {
                    return false;
                }
            }
        }
```
## PHPexcel导出Maximum 31 characters allowed in sheet title.

```
$xls_name = mb_strimwidth($xls_name, 0, 28, "...");  //excel的文件名太长会报错，需要截取
```

## unlink:No such file or directory的解决办法

```
is_file($url) && $this->unlink($url)
```

## 安装php在zip扩展

```
wget http://pecl.php.net/get/zip-1.12.4.tgz
tar zxfv zip-1.12.4.tgz
cd /home/nginx+php/php-5.5.12/ext/zip
/usr/local/php/bin/phpize
./configure --with-php-config=/usr/local/php/bin/php-config
make
make install
```

## linux find 命令查找文件和文件夹
```
在/home目录下查找以.txt结尾的文件名

find /home -name "*.txt"
```

## **Fatal error**: Call to undefined function bcmul() 

不连网：

```
cd /opt/installfile/nginx+php/nginx+php/php-5.5.12/ext/bcmath
/usr/local/php/bin/phpize(phpize的路径根据各自安装有所不同)
/configure --with-php-config=/usr/local/php/bin/php-config(php-config文件的路径)
make && make install
最后还需要把生成的bcmath.so文件加入到php.ini中 extesion=bcmath.so（如果没有设定extesion_dir，可能要加上全路径，查看phpize执行后的生成的so文件的路径即可，这里是：extension_dir= /usr/local/php/lib/php/extensions/no-debug-non-zts-20121212/)
然后重启web服务器，就Ok了
```

## gitignore 不起作用的解决办法

.gitignore文件只是ignore没有被staged(cached)文件，对于已经被staged文件，加入ignore文件时一定要先从staged移除。

因此，要想用gitignore忽略文件，必须先把它们从staged中移除

```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

## php 判断日志文件夹是否存在,不存在则创建

```
//判断日志文件夹是否存在,不存在则创建
        $logPath = "./log/upload";
        if (!is_dir ($logPath)) {
            mkdir ( $logPath, 0755, true );
            chmod ( $logPath, 0755 );
        }
```

## php命令

`pkill php-fpm`     关闭php-fpm

`/usr/local/php/sbin/php-fpm -c /etc/php.ini`       指定php-fpm配置并开启

## 为什么要 urlencode()

url转义其实也只是为了符合url的规范而已。因为在标准的url规范中中文和很多的字符是不允许出现在url中的。

按照每个字符对应的字符编码，不是符合我们范围的，统统的转化为%的形式也就是了。自然也是16进制的形式。


## IIS数据量过大报错：C:\php\php5.6-nts\php-cgi.exe - FastCGI 进程超过了配置的请求超时时限

解决办法：
IIS7->FastCGI设置->双击"php-cgi.exe"->"活动超时" 项默认是设置为70(秒)，改为600(10分钟，此处根据需求设置可以略高~)

## 如何给图片添加电子签名

将文档截图成图片

将图片发送到苹果手机

在苹果手机中编辑图片，选择画笔里的签名

将签名放在合适位置，保存图片

## php程序for异常退出

public function actionIndex()
    {
        $total = 10000;
        $pageCount = 100;
        $page = ceil(intval($total)/$pageCount);
        for ($i=1;$i<=$page;$i++) {
            $condition['page'] = $i;
            $condition['rows'] = $pageCount;
            // 下面语句影响到$page了,会把$page赋值为1会导致异常退出
            $page = $condition['page'] ? $condition['page'] : 1;
            $page_count = $condition['rows'] ? $condition['rows'] : 10;
            echo $i;
        }
    }

## php .htmlspecialchars()和htmlspecialchars_decode() html标签转义和反转义

https://blog.csdn.net/xiaomogg/article/details/44854355


## PHP中设置时区方法小结
设置data.timezone = "Asia/Shanghai";即可。
设置data.timezone = "PRC";即可。

PRC 是中国的意思,这段代码是把默认时区设置成了中国标准时间


## Fatal error Using $this when not in object context in
大致意思是 $this 没有上下文，原因是没有对此类进行实例化。
可以使用换为self::New();调用

## ftp报错处理
> put: Login failed: 530 Login incorrect.

重新设置ftp账户密码就正常了
应该是密码过期机制导致的
```
linux 用户密码到期导致ftp业务失败
外网反馈某业务失败，查看log发现FTP连接失败，定位发现提示密码不对，重新修改FTP密码后恢复正常。
但同时定位了下FTP密码被修改的原因，发现是密码过期了，因此查了下资料，查得修改过期时间的方法
1.vim /etc/login.defs
PASS_MAX_DAYS	99999

2.chage username -M 99999

下面是使用到的命令chage：
[root@APPServer yang]# chage --help
Usage: chage [options] [LOGIN]

Options:
-d, --lastday LAST_DAY set date of last password change to LAST_DAY
-E, --expiredate EXPIRE_DATE set account expiration date to EXPIRE_DATE
-h, --help display this help message and exit
-I, --inactive INACTIVE set password inactive after expiration
to INACTIVE
-l, --list show account aging information
-m, --mindays MIN_DAYS set minimum number of days before password
change to MIN_DAYS
-M, --maxdays MAX_DAYS set maximim number of days before password
change to MAX_DAYS
-W, --warndays WARN_DAYS set expiration warning days to WARN_DAYS

以及一个不过期的账户信息：
[root@APPServer yang]# chage username -l
Last password change	: May 17, 2018
Password expires	: never
Password inactive	: never
Account expires	: never
Minimum number of days between password change	: 0
Maximum number of days between password change	: 99999
Number of days of warning before password expires	: 7
```

##　PHP接口curl报错Connection timed out after 30001 milliseconds
```php
$timeout = 300;//设置大些
curl_setopt($curl, CURLOPT_TIMEOUT, $timeout); // 设置超时限制防止死循
```
**curl 超时设置**
 PHP cURL 的超时设置有两个 CURLOPT_CONNECTTIMEOUT 和 CURLOPT_TIMEOUT，他们的区别是：

- CURLOPT_CONNECTTIMEOUT 用来告诉 PHP 在成功连接服务器前等待多久（连接成功之后就会开始缓冲输出），这个参数是为了应对目标服务器的过载，下线，或者崩溃等可能状况。

- CURLOPT_TIMEOUT 用来告诉成功 PHP 从服务器接收缓冲完成前需要等待多长时间，如果目标是个巨大的文件，生成内容速度过慢或者链路速度过慢，这个参数就会很有用。

只加了CURLOPT_CONNECTTIMEOUT 经常会卡死

使用 cURL 下载 MP3 文件是一个对开发人员来说不错的例子，CURLOPT_CONNECTTIMEOUT 可以设置为10秒，标识如果服务器10秒内没有响应，脚本就会断开连接，CURLOPT_TIMEOUT 可以设置为100秒，如果MP3文件100秒内没有下载完成，脚本将会断开连接。

需要注意的是：CURLOPT_TIMEOUT 默认为0，意思是永远不会断开链接。所以不设置的话，可能因为链接太慢，会把 HTTP 资源用完。