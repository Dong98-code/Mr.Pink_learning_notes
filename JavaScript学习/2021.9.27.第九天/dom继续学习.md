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