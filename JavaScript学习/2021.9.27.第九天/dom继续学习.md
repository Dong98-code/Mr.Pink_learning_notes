## dom继续学习

### 排他思想

- 练习： 点击按钮 更换颜色

1、 所有元素清除元素
2、 更改现有的元素的style

![20210927213011](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210927213011.png)

- 练习： 百度换肤

![20210927212954](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210927212954.png)

  - 思路：
    ![20210927213057](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210927213057.png)

    获取四张图片

    querySelectorAll

    ```javascript
    <script>
        let imgs = document.querySelectorAll('img');
        for (let i = 0 ;i < imgs.length; i++){
            imgs[i].onclick = function() {
                document.body.style.backgroundImage = 'url('+this.src+')';
            }
        }
    </script> 
    ```
    - 注意： 
    - 1. 获取body : ducument.body
    - 2. 点击图片，获得图片的src: `this.src`
    - 3. 修改背景图片的src:
      `body.style.backgroundImage = 'url(地址)'`

  ![20210928095040](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210928095040.png)

  ![20210928095055](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210928095055.png)
  - 改进： 点击图片，对应的边框变色，其他的不显示
    ![20210928100017](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210928100017.png)

- 2. 练习： 鼠标经过颜色变色

![20210928131312](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210928131312.png)
![20210928131334](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210928131334.png)

```javascript
    <script>
        let trs = document.querySelector('tbody').querySelectorAll('tr');
        for (let i=0;i<trs.length;i++) {
            trs[i].onmouseover = function () {
                this.className = 'bg';
            }
            trs[i].onmouseout = function() {
                this.className = '';
            }
        }
        
    </script>
```

#### 表单全选 取消全选

思路： 复选框的状态根据 全选框的状态

获取全选框， 
复选框的状态 ： `checked = `

![20211002152824](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002152824.png)

```javascript
<script>
    let j_thAll = document.getElementById('j_thAll');
    let checks = document.querySelector('tbody').querySelectorAll('input');
    j_thAll.onclick = function () {
        for (let i = 0; i < checks.length; i++) {
            checks[i].checked = this.checked;
        }
    }
    for (let i = 0; i < checks.length; i++) {

        checks[i].onclick = function () {
            let flag = true;
            for (let i = 0; i < checks.length; i++) {
                // 当复选框的按钮都被选中时，全选框才会被选中
                flag = flag && checks[i].checked;
            }
            j_thAll.checked = flag;
        }

    }
</script>
```
## 设置自定义属性的值

### 1. 获取元素的值

自定义属性操作

`element.属性`

`element.getAttribute('自定义属性')`

![20211002154248](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002154248.png)


### 设置属性值


`element.setAttribute('属性)` 

### 移除属性

`element.removeAttribute()`


### 练习 tab 键切换

```javascript
<script>
    let tab_list = document.querySelector('.tab_list').querySelectorAll('li');
    let items = document.querySelector('.tab_con').querySelectorAll('.item');
    for (let i=0;i<tab_list.length;i++) {
        tab_list[i].setAttribute('index'， i);
        tab_list[i].onclick = function (){
            for (let i=0;i<tab_list.length;i++) {
                tab_list[i].className = '';
            }
            this.className = 'current';
            // 设置对应模块显示
            for (let i=0;i<items.length;i++) {
                items[i].style.display = 'none';
            }
            // 使用let控制作用域 并不用单独设置 index
            
            items[i].style.display = 'block';
        }
        
        
    }
</script>
```

### h5自定义属性

`data-` 开头
依此开头的 为 自定义的属性

h5新增属性值

div.dataset.index

`dataset` 存放以`data-` 开头的所有的自定义属性的内容

ie11 开始兼容给

`getAttribute` 得到自定义 属性值

## 结点操作

获取元素

1.dom获取的方法

![20211002164736](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002164736.png)

2. 根据节点的关系获取结点

父子， 兄弟 等

![20211002164845](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002164845.png)


### 结点描述
![20211002165114](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002165114.png)
nodeName
nodeType
nodeValue

主要操作元素结点

### 结点层级

父子 

html 根

head body 子

1. 父子结点

`node.parentNode`

![20211002165309](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002165309.png)


得到 理他最近的父级结点；亲爹


2. 子节点

`childNodes`得到所有的子结点

包含文本结点等
主要希望得到元素结点

根据 `nodeType`筛选节点


`parentNode.children`

####   子节点 第一个元素和最后一个元素

`firstChild`
和`lastChild`

`firstElementChild`:IE9以上支持，子元素结点

解决方案：
使用`parentNode.children[0]`

- 练习： 下拉菜单


### 创建结点

创建元素结点 

`createElement`

添加结点：
node.appendChild(child)

node为父节点， child为子节点

![20211002180935](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002180935.png)

`insertBefore()`

结点前面插入结点

1。创建元素；2. 插入元素


- 练习：
- ![20211002181222](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002181222.png)

![20211002182414](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002182414.png)

```javascript
    <script>
        let text= document.querySelector('textarea');
        let ul = document.querySelector('ul');
        let btn = document.querySelector('button');
        btn.onclick = function () {
            if (text.value == "") {
                alert('发布内容为空，请重新出入内容');

            }
            let li = document.createElement('li');
            li.innerHTML = text.value;
            // ul.append(li);
            ul.insertBefore(li, ul.children[0]);
        }
    </script>

```