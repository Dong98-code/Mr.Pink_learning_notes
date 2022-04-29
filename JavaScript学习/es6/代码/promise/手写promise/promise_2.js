function Promise(executor) {
    // 执行器函数同步调用
    this.PromiseState = 'Pending'; // 默认值为pending
    this.PromiseResult = null;
    const self = this;
    this.callbacks = [];

    function resolve(data) {
        // 改变状态，
        //设置返回的Promise的结果值 PromiseResult
        if (!self.PromiseState === "Pending") return;
        self.PromiseState = 'Resolved';
        self.PromiseResult = data; // 传递进来的实参；
        self.callbacks.forEach(item => {
            item.onResolved(data);
        });
    }

    function reject(data) {
        if (!self.PromiseState === "Pending") return;
        self.PromiseState = "Rejected";
        self.PromiseResult = data;
        // 在这之前就指定了回调对象， 改变状态之后，采取执行相对应的回调函数
        self.callbacks.forEach(item => {
            item.onRejected(data);
        })
    }
    // 同步调用执行器函数
    try {
        executor(resolve, reject);

    } catch (e) {
        reject(e);
    }

}

Promise.prototype.then = function (onResolved, onRejected) {
    // 调用回调函数；
    // this指向实例对象P
    return new Promise((resolve, reject) => {
        if (this.PromiseState === "Resolved") {
            try {
                let result = onResolved(this.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => { // v为成功的结果
                        resolve(v);
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
        if (this.PromiseState === "Rejected") {
            onRejected(this.PromiseResult);
        }
        // 异步 判断pending
        if (this.PromiseState === "Pending") {
            // 改变状态之后， 再执行
            // 保存回调函数， 状态不确定
            this.callback.push({
                onResolved: onResolved,
                onRejected: onRejected
            })
        }
    })

}