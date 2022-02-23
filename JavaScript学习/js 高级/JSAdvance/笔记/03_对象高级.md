## 对象的创建模式
* Object构造函数模式
  ```
  var obj = {};
  obj.name = 'Tom'
  obj.setName = function(name){this.name=name}
  ```
* 对象字面量模式
  ```
  var obj = {
    name : 'Tom',
    setName : function(name){this.name = name}
  }
  ```
* 构造函数模式
  ```
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.setName = function(name){this.name=name;};
  }
  new Person('tom', 12);
  ```
* 构造函数+原型的组合模式
  ```
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.setName = function(name){this.name=name;};
  new Person('tom', 12);
  ```
  
## 继承模式
* 原型链继承 : 得到方法
  ```
  function Parent(){}
  Parent.prototype.test = function(){};
  function Child(){}
  Child.prototype = new Parent(); // 子类型的原型指向父类型实例
  Child.prototype.constructor = Child
  var child = new Child(); //有test()
  ```
* 借用构造函数 : 得到属性
  ```
  function Parent(xxx){this.xxx = xxx}
  Parent.prototype.test = function(){};
  function Child(xxx,yyy){
      Parent.call(this, xxx);//借用构造函数   this.Parent(xxx)
  }
  var child = new Child('a', 'b');  //child.xxx为'a', 但child没有test()
  ```
* 组合
  ```
  function Parent(xxx){this.xxx = xxx}
  Parent.prototype.test = function(){};
  function Child(xxx,yyy){
      Parent.call(this, xxx);//借用构造函数   this.Parent(xxx)
  }
  Child.prototype = new Parent(); //得到test()
  var child = new Child(); //child.xxx为'a', 也有test()
  ```
* new一个对象背后做了些什么?
  * 创建一个空对象
  * 给对象设置__proto__, 值为构造函数对象的prototype属性值   this.__proto__ = Fn.prototype
  * 执行构造函数体(给对象添加属性/方法)
