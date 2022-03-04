function Promise(executor) {
    // 添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    // 保存示例对象的this值
    const self = this;

    this.callbacks = []; // 用于then() 保存回调函数


    // 执行器函数 executor 在内部同步调用

    // 声明 函数： resolve 和 reject
    // resolve
    function resolve(data) {
        // 先判断状态才去改 状态
        if (self.PromiseState !== 'pending') return;
        // 功能 改变 promise的状态
        // 1. 改变状态 promiseState, 属于示例对象， 初始值pending
        // 2. 设置对象结果值 promiseResult
        self.PromiseState = 'fullfilled'; // resolved
        self.PromiseResult = data;
        // 异步执行的时候，是在状态改变的时候执行
        // 调用成功的回调函数
        // if (self.callback.onResolved) {
        //     // 如果此时callback中保存着 成功回调函数 则执行
        //     self.callback.onResolved(self.PromiseResult); // data
        // }
        self.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }
    // reject
    function reject(data) {
        // 同上 改变状态值 设置对象的结构值
        if (self.PromiseState !== 'pending') return;

        self.PromiseState = 'rejected';
        self.PromiseResult = data;

        // 调用成功的回调函数
        // if (self.callback.onRejected) {
        //     // 如果此时callback中保存着 成功回调函数 则执行
        //     self.callback.onRejected(self.PromiseResult); // data
        // }
        self.callbacks.forEach(item => {
            item.onRejected(data);
        })
    }

    try {
        executor(resolve, reject); //调用， 添加两个形参 resolve reject
    } catch (e) {
        reject(e); // promise的状态为 失败， 通过执行 reject(实现)
    }

}

// 添加then方法

Promise.prototype.then = function (onResolved, onRejected) {
    // 调用回调函数
    // 回调函数执行需要条件
    // 成功
    // this为函数调用者 为 p

    //允许之传入 onResloved 
    if (typeof onRejected !== 'function') {
        // 将 onRejected设为默认值
        onRejected = reason => {
            throw reason;
        }
    }

    if (typeof onResolved !== 'function') {
        onResolved = value => value;
        // 创建一个默认的 onReslved决定
    }

    const self = this;
    return new Promise((resolve, reject) => {
        function callback(type) {
            try {
                // 指向onResolved回调函数, 
                // 使用箭头函数 不会改变this的指向， 此时还是指向then这个函数的调用者 p
                let result = type(self.PromiseResult); // 需要传入实参value即 成功的时候 的promise的结果值 this.PromiseResult

                // result变为 调用的回调函数返回的结果
                if (result instanceof Promise) {
                    // 如果是Promise对象， 根绝result的值 来确定then()返回的promise的状态和值
                    // 如果result成功， 返回的也是成功的promise, 即执行了result的then()函数
                    result.then(v => {
                        resolve(v)
                    }, r => {
                        reject(r);
                    })

                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }
        if (this.PromiseState === 'fullfilled') {
            callback(onResolved);

        }

        // 失败
        if (this.PromiseState === 'rejected') {
            // // onRejected(this.PromiseResult);
            // try {
            //     // 指向onResolved回调函数, 
            //     // 使用箭头函数 不会改变this的指向， 此时还是指向then这个函数的调用者 p
            //     let result = onRejected(this.PromiseResult); // 需要传入实参value即 成功的时候 的promise的结果值 this.PromiseResult

            //     // result变为 调用的回调函数返回的结果
            //     if (result instanceof Promise) {
            //         // 如果是Promise对象， 根绝result的值 来确定then()返回的promise的状态和值
            //         // 如果result成功， 返回的也是成功的promise, 即执行了result的then()函数
            //         result.then(v => {
            //             resolve(v)
            //         }, r => {
            //             reject(r);
            //         })

            //     } else {
            //         resolve(result);
            //     }
            // } catch (e) {
            //     reject(e);
            // }
            callback(onRejected);
        }

        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved: function () {
                    // 执行成功的回调函数
                    // try {
                    //     let result = onResolved(self.PromiseResult);
                    //     if (result instanceof Promise) {
                    //         // 返回的新的promise是
                    //         result.then(v => {
                    //             resolve(v);
                    //         }, r => {
                    //             reject(r);
                    //         })
                    //     } else {
                    //         resolve(result); // 此时result为一个对象
                    //     }
                    // } catch (e) {
                    //     reject(e);
                    // }
                    callback(onResolved);

                },
                onRejected: function () {
                //     try {
                //         let result = onRejected(self.PromiseResult);
                //         if (result instanceof Promise) {
                //             // 返回的新的promise是
                //             result.then(v => {
                //                 resolve(v);
                //             }, r => {
                //                 reject(r);
                //             })
                //         } else {
                //             resolve(result); // 此时result为一个对象
                //         }
                //     } catch (e) {
                //         reject(e);
                //     }
                    callback(onRejected);
                }
                    
            })
        }

        // 根据执行结果 返回一个promise对象
    })
}

// catch方法  捕捉失败的 promise

Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        // 判断传入的值
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v);
            }, r => {
                reject(r);
            })
        } else {
            resolve(value);
        }
    })
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        // 无论好坏都执行reject函数
        reject(reason);
    })
}