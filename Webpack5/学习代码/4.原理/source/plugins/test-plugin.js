class TestPlugin {
    constructor() {
        console.log("constructor()");
    }
    // // 1. webpack读取配置时，new TestPlugin() ，会执行插件 constructor 方法
    // 2. webpack创建 compiler 对象
    // 3. 遍历所有插件，调用插件的 apply 方法
    apply(compiler) {
        debugger;
        console.log("test-plugin compiler");
        // console.log("compiler", compiler)
        // environment 同步钩子函数
        compiler.hooks.environment.tap('TestPlugin', () => {
            console.log("test-plugin environment");
        });

        // 从文档可知, emit 是 AsyncSeriesHook, 也就是异步串行钩子，特点就是异步任务顺序执行
        // 异步串行 输出 111 222 333
        compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
            setTimeout(() => {
                console.log("compiler.emit() 111");
                callback();
            }, 3000);
        });

        compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
            setTimeout(() => {
                console.log("compiler.emit() 222");
                callback();
            }, 2000);
        });

        compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
            setTimeout(() => {
                console.log("compiler.emit() 333");
                callback();
            }, 1000);
        });
        // 从文档可知, make 是 AsyncParalelHook, 也就是异步并行钩子，特点就是异步任务执行
        // 异步串行 输出 111 222 333
        compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
            setTimeout(() => {
                console.log("compiler.make() 111");
                callback();
            }, 3000);
        });

        compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
            setTimeout(() => {
                console.log("compiler.make() 222");
                callback();
            }, 2000);
        });

        compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
            setTimeout(() => {
                console.log("compiler.make() 333");
                callback();
            }, 1000);
        });
    }
}

module.exports = TestPlugin; // 对外暴漏