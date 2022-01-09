class Person {
    // constructor 创建函数
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    say() {
        console.log('唱歌');
    }
}

let liudehua = new Person('xing', '30');
liudehua.say()