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

1. 获取元素的值

自定义属性操作

`element.属性`

`element.getAttribute()`

![20211002154248](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211002154248.png)