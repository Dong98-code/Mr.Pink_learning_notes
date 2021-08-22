# 变量作用域和内存

## 4.1 原始值和引用值

原始值： 
之前学习的6中原始值：
Number,Undefined,Buulen,Null,String,**Symbol**

原始值的变量 按值访问： by value；
引用值为保存在内存中的对象，对引用值的操作，操作的是该对象的引用，by reference

### 4.11 动态属性
只用引用值 可以动态的在后面添加属性；

![20210822134440](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822134440.png)

第一种 按照字面量形式初始化，
第二种 使用new关键字，然后 创建一个object 对象

### 4.1.2 复制 值

原始值复制，得到两个相互独立的变量，相互独立，互相不干扰

![20210822134641](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822134641.png)


引用值复制，其实复制的是指针，两者都指向内存中的同一个对象

![20210822134827](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822134827.png)


### 4.1.3 传递参数

按值传参：

值先被复制到一个局部变量，例如函数的参数为函数内部的一个局部变量，对函数外的值不会有影响，因为将值传入函数，是先将该值复制了一份，改变的是复制后的值，而跟原来的值没有关系

![20210822135357](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822135357.png)

变量 count 作为参数传入，他的值被复制到 参数num的位置，
num的变化并不会影响到 外面的count 的值


## 4.2执行上下文与作用域

变量对象：variable object

上下文定义的所有 变量和函数都存在这个 对象上

作用链 域 scope chain 

![20210822140802](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822140802.png)

晦涩

![20210822140958](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822140958.png)

![20210822141006](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822141006.png)

### 4.2.2 变量声明

未经声明就初始化的变量 会自动添加到全局上下文
![20210822141624](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822141624.png)


let 声明：

使用let声明变量 为块级变量，只能在块级作用域中被使用 {}


![20210822142717](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822142717.png)
## 小结
![20210822142519](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822142519.png)



# 数组

## 创建数组

- 数组字面量；
- new 关键字：
  `var 数组名 = new Array();`


`[]`: 表示数组
数组里可以放任何数据类型，`，`隔开


## 获取数组中的元素
 索引，下标 ，数组下标从0开始
 `数组名[元素下标]`


索引超出长度：输出 `undefined`

## 新增数组元素

### 修改length长度

修改完数组长度  ，数组会显示增加了几个empty，输出该值，显示为 `undefin`
![20210822150255](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822150255.png)

### 修改索引号
直接增加索引号
`arr[9] = value；`
索引号 被占用， 替换成新的索引元素

## 练习：
1. 数组转化成字符串


![20210822145804](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822145804.png)

![20210822145828](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822145828.png)

2. 数组中的最大值

```
    <script>
        let arr = [2, 6, 1, 7, 4];
        let max_num = -Infinity; // 无限小值开始比较
        for (let i = 0; i < arr.length; i++) {
            max_num = max_num >= arr[i] ? max_num : arr[i]; // 遍历数组，三元表达式， 比较max_num和arr[i]的值，将较大值赋值给max_num

        }
        console.log(max_num);
    </script>
```

3. 数组中新增元素

将1-10 放入到一个数组；

![20210822150941](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822150941.png)
```
    <script>
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr[i] = i + 1;

        }
        console.log(arr);
    </script>
```

4. 筛选数字，把 数组中大于10的元素 筛选出来。放入新数组
```

    <script>
        let arr_1 = [2, 0, 6, 1, 10, 52, 25, 7];
        let arr_2 = [];
        let index = 0; // 新数组的索引
        for (let i = 0; i < arr_1.length; i++) {
            if (arr_1[i] > 10) {
                arr_2[index] = arr_1[i];
                index += 1;
            }
        }
        console.log(arr_2);
    </script>
```
5. 反转数组

（1）. 逆序遍历；
```
    <script>
        let arr = ['red', 'green', 'blue', 'pink'];
        let arr_2 = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            arr_2[arr_2.length] = arr[i];
        }
        console.log(arr_2);
        
    </script>
```

（2）.双指针，原地修改

```
        let l = 0;
        let r = arr.length - 1;
        while (l < r) {
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;

        }
        console.log(arr);
```

# 函数

## 函数使用

声明函数:
```
function 函数名（）：{
    //函数体
}
```

调用函数： 函数名();


## 形参和实参

```
function 函数名（形参） {

}

函数名（实参）；
```

参数 传递
![20210822160049](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822160049.png)

多个参数，逗号隔开

参数不匹配的话：
- 实参多于形参， 取到形参的个数；
- 实参小于形参
  不用声明的变量， 没有参数接受值，那么默认为undefined

![20210822160935](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822160935.png)


## return 

- 终止函数，之后的代码不执行

- 返回值 只有一个，多个返回值 以最后一个为准
-  没有return 返回 `undefined`
-  ![20210822162135](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210822162135.png)
## 练习

1. 使用函数，返回最大值

```
    <script>
        function get_max_num(num1, num2) {
            return num1 > num2 ? num1 : num2
        }
        console.log(get_max_num(1,2));
    </script>
```
2. 任意数组中的最大值

```
    <script>
        function getArrayMax(arr) {
            let max_num = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max_num) {
                    max_num = arr[i];
                }
            }
            return max_num;
        }
        console.log(getArrayMax([1, 2, 3, 4]));
    </script>
```


## 作业
1. 写一个函数，用户输入两个数字的任意算数结果
2. 用户输入两个数字，弹出结果
3. 用户输入三个不同的数字的最大值，弹出结果
4. 用户判断一个数是否为素数

```
    <script>
        function isPrimeNumber(num) {
            for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }
        let num = prompt('请输入一个整数');
        if (isPrimeNumber(num) == false) {
            alert('您输入的不是素数')
        } else {
            alert('您输入的数是素数')
        }
    </script>

```