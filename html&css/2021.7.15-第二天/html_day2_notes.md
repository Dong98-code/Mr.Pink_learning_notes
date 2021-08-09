## 1.表格标签
### 1.表格的作用  
用于显示和展示数据，特点：清爽  
### 1.2.表格的基本语法 

```
<table>
    <tr>
        <td>单元格内的文字</td>
    </tr>
</table>
```  
1. ```<table></table>``` 定义表格
2. ```<tr></tr>```  定义表格的行，必须嵌套早table标签中, table row
3. ```<td></td>```  table data 单元格  
   
### 1.3 表头单元格标签

table head
```
<table>
    <tr>
        <th>姓名</th>
    </tr>
</table>
```  

突出重要性  
表头单元格的<b>文字加粗</b>，居中  
### 1.4 表格属性  
主要通过css设定  
写到table 标签中去

相关单词：  
1. align:  
   left:靠左对齐  
   center:居中  
   right:靠右 
2. border,边框  
   默认没有边框，border=1  
3. cellpadding  
   规定边沿和内容之间的空白，default=1 
4. cellspacing 
   单元格之间的像素填充值，defaul=2， 没有空隙设置为0
   ![20210716202038](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210716202038.png)  
5. width ,设置宽度;height 设置高度  
<font color=red>以上内容均可以通过css设置</font>  

### 1.5 表格结构标签  
```<thead></thead>```  表格的头部部分  
thead内必须拥有tr标签

```<tbody></tbody>```  表格的主体部分  

### 1.6 合并单元格 
1. 方式：  
   跨行：rowspan="合并的单元格的个数"  
   跨列：colspan="合并的单元格的个数"


2. 在目标单元格写合并的代码，跨列就写在最左侧的目标单元格，同理

3. 合并三部曲
   确定合并方式  
   找到目标单元格、写代码  
   删除多余单元格  
   ![20210716205548](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210716205548.png)  
   不删除就会多出来一块  


## 2.列表标签  
表格显示数据，列表用于布局  
无序列表 有序列表 自定义列表  
### 2.1 无序列表
```<ul>```表示html页面项目的无序列表，一般以项目符号呈现列表项，列表项使用```<li>```定义  
```
<ul>
    <li>列表项1</li>
    <li>列表项1</li>
</ul>
```  
列表项之间没有先后顺序之分，无序的   
ul <font color=red>只能放```<li></li>```标签</font>  
li 标签中可以放任意的元素  
### 2.2 有序列表  
使用 ol 表示```<ol></ol>```   

### 2.3 自定义列表 
![20210716211534](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210716211534.png)  
上面一个下标题 下面一堆小标题 ，一个大哥，一群小弟 
用于对属于或者名词进行解释和描述，没有任何项目符号  
语法格式：
```
<dl>
    <dt>名词1</dt>
    <dd>名词1解释1</dd>
</dl>
```
```<dl></dl>``` 表示自定义列表  
![20210716212008](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210716212008.png)  
<b>注意</b>：
dl 里面只能包含dt和dd  
dt和dd的个数没有限制，他俩是兄弟关系

### 2.4 总结  
自定义列表：  
![20210716212659](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210716212659.png)  
无序列表： 
![20210716212849](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210716212849.png)   

## 3.表单标签

收集用户信息，和用户交互 收集信息  
表单域，表单控件， 提示信息  
表单域： 表单的区域  

### 3.2 组成
表单域：  
 
 ```<form>```  把范围内表单元素信息提交给服务器  
 ```
 <form action="url地址" method="提交方式" name="名称"> 
 表单元素控件
 </form>
 ```  

 了解即可，以后学习，服务器编程以后会学习  

### 3.4 表单元素：  
1. input 输入表单元素  
2. selct 下拉表单元素
3. textarea 文本域元素    

#### 3.4.1 input
 
用于收集用户元素  
<font color=red>单标签</font>  
```
<input type="属性值" /> 
```
![20210717161946](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210717161946.png)  

密码：password  
单选 按钮： radio  
name 属性：   

多选1，需要设置为相同名字


value:  默认显示的内容

checked 属性:单选按钮和多选按钮，当页面打开的时候，默认打开  
maxlength: 设置最大值，最多输入几个字符  

type属性：   
submit: 点了之后把表单域的内容 提交给后台， 必须在form标签内  
reset 重置按钮  
button 按钮 用于启动js  
file 上传文件

 #### 3.4.2 label 标签  
 label 用于绑定一个表单元素 当点击  label的文本时，浏览器将自动聚焦到input 标签内容上去‘
 ```
 <label for="sex">男</label>
 <input type="radio" name="sex" id="sex"/>
 ```  
 for 和id设置为相同的属性，完成关联  


#### 3.4.3 select 下拉
 下拉：select  

 #### 3.4.4 文本域 textarea  
 多行文本输入  
 留言板等
 ![20210717172947](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210717172947.png)



