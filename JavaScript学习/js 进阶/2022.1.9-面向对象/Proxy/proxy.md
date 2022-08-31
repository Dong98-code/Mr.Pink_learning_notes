## Proxy
### 定义

拦截器
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

>用自己的定义 重写了原始第项的定义；
> 重载 js没有真正意义上的函数重载；
> 函数重载：函数名相同，函数的参数列表不同(包括参数个数和参数类型)，根据参数的不同去执行不同的操作。
> 在JavaScript中，同一个作用域，出现两个名字一样的函数，后面的会覆盖前面的，所以 JavaScript 没有真正意义的重载。
> 但是有各种办法，能在 JavaScript 中模拟实现重载的效果。
> arguments对象： 函数内部的了类数组对象，它保存着调用函数时传递给函数的所有参数

### 实例方法 
####　1. get()

`get`
get方法传入三个参数： 代理对象， 属性名称和proxy实例本身 
```js
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});

proxy.name // "张三"
proxy.age // 抛出一个错误
```

get方法可以继承： 代理的对象是其原型对象， 上面代码中，拦截操作定义在Prototype对象上面，所以如果读取obj对象继承的属性时，拦截会生效。

- 使用proxy 将读取属性的操作get,变成执行一个函数，从而实现属性的链式调用；

```js
var pipe = function (value) {
  var funcStack = [];
  var oproxy = new Proxy({} , {
    get : function (pipeObject, fnName) {
      if (fnName === 'get') { // 最后调用get 将函数栈中的函数以此执行
    //   使用reduce函数，传入一个reducer执行函数，分别将数组中的每一个值以此执行 
        return funcStack.reduce(function (val, fn) {
          return fn(val);
        },value);
      }
      funcStack.push(window[fnName]);// 定义的各种函数 都存放在 fnName身上 
      return oproxy;
    }
  });

  return oproxy;
}

var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

pipe(3).double.pow.reverseInt.get; // 63
```

- get函数 传入第三个参数 proxy实例

```js
const proxy = new Proxy({}, {
  get: function(target, key, receiver) {
    return receiver;
  }
});

const d = Object.create(proxy);
d.a === d // true
// d本身没有 a属性， 回去其原型上找a，即 proxy.a 此操作被get函数所捕获， 然后 执行函数，返回receiver
// receiver 为原始的进行读操作的对象 即 对象d，而不应该是 对象proxy

```

#### 2. set()函数

set函数接收4个参数， `target`, `prop`,`value` 和`receiver`

示例：对尝试修改属性值的操作进行拦截， 例如 如果设置的属性值的前缀含有`_`，抛出错误

```js
const handler = {
  get (target, key) {
    invariant(key, 'get');
    return target[key];
  },
  set (target, key, value) {
    invariant(key, 'set');// 对prop进行校验，如果不符合直接抛错
    target[key] = value;
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
const target = {};
const proxy = new Proxy(target, handler);
proxy._prop
// Error: Invalid attempt to get private "_prop" property
proxy._prop = 'c'
```

`reveiver` set方法的第四个参数receiver，指的是原始的操作行为所在的那个对象，一般情况下是proxy实例本身，请看下面的例子。

- 如果目标对象自身的某个属性不可写，那么set方法将不起作用。

#### 3. apply()
`apply`方法拦截函数的调用、`call`和`apply`操作。

参数为： 目标对象，目标对象的上下文和目标对象的参数数组

![20220831143624](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220831143624.png)


#### 4. has()

has方法 用来拦截hasProperty操作， 判断对象是否具有某个属性时， 方法会生效 in

示例： 隐藏`_`开头的私有属性，使其不被in操作符发现
```js
var handler = {
  has (target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
var target = { _prop: 'foo', prop: 'foo' };
var proxy = new Proxy(target, handler);
'_prop' in proxy // false
```

![20220831145233](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220831145233.png)

![20220831145311](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220831145311.png)
> 这尼玛是什么 操作啊安安安啊


#### 5. construct()拦截 new命令

参数：target  args 构造函数

返回的必须是对象，否则报错
拦截的target 必须是一个函数

![20220831145805](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220831145805.png)


#### 其他

`deleteProperty`
`defineProperty`

`getOwnPropertyDescriptor() `

`getPrototypeOf`
![20220831145933](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220831145933.png)

`ownKeys`
![20220831145957](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220831145957.png)

### Proxy.revocable()
返回一个 可取消的Proxy实现

![20220831150117](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220831150117.png)

## Reflect()

使用 Proxy实现观察者模式

```js
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});// obj使用Proxy拦截set操作；
//拦截到了 即 对象的属性值发生变化时， 通知所有的观察者去改变数据


function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}
```