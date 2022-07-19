class TestPlugin {
    constructor() {
        console.log("constructor()");
    }
    // // 1. webpack读取配置时，new TestPlugin() ，会执行插件 constructor 方法
    // 2. webpack创建 compiler 对象
    // 3. 遍历所有插件，调用插件的 apply 方法
    apply(compiler) {
        console.log("test-plugin compiler");
    }
}

module.exports = TestPlugin; // 对外暴漏