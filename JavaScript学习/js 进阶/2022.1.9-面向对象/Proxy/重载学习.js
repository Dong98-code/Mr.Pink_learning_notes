//我们先来看一个需求，我们有一个 users 对象，users 对象的values 属性中存着一些名字。 一个名字由两部分组成，空格左边的是 first-name ，空格右边的是 last-name，像下面这样。

var users = {
    values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};
// 添加一个find方法， 1. 不传入 任何参数的时候，返回users.values
// 2.当传一个参数时，就把 first-name 跟这个参数匹配的元素返回；
// 当传两个参数时，则把 first-name 和 last-name 都匹配的返回。
function addMethod (object, name, fn) {
    // 先把原来的object[name] 方法，保存在old中
    var old = object[name];
  
    // 重新定义 object[name] 方法
    object[name] = function () {
      // 如果函数需要的参数 和 实际传入的参数 的个数相同，就直接调用fn
      if (fn.length === arguments.length) {
        return fn.apply(this, arguments);
  
        // 如果不相同,判断old 是不是函数，
        // 如果是就调用old，也就是刚才保存的 object[name] 方法
      } else if (typeof old === "function") {
        return old.apply(this, arguments);
      }
    }
}
  
// 不传参数时，返回整个values数组
function find0 () {
    return this.values;
  }
  // 传一个参数时，返回firstName匹配的数组元素
  function find1 (firstName) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++) {
      if (this.values[i].indexOf(firstName) === 0) {
        ret.push(this.values[i
        ]);
      }
    }
    return ret;
  }
  // 传两个参数时，返回firstName和lastName都匹配的数组元素
  function find2 (firstName, lastName) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++) {
      if (this.values[i
      ] === (firstName + " " + lastName)) {
        ret.push(this.values[i
        ]);
      }
    }
    return ret;
  }
  // 给 users 对象添加处理 没有参数 的方法
  addMethod(users, "find", find0);
  
  // 给 users 对象添加处理 一个参数 的方法
  addMethod(users, "find", find1);
  
  // 给 users 对象添加处理 两个参数 的方法
  addMethod(users, "find", find2);
  
  // 测试：
  console.log(users.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
  console.log(users.find("Dean")); //["Dean Edwards", "Dean Tom"]
  console.log(users.find("Dean","Edwards")); //["Dean Edwards"]