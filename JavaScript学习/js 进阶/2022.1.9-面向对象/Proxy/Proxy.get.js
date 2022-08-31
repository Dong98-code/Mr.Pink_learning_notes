var pipe = function (value) {
    var funcStack = [];
    // var oproxy = new Proxy({} , {
    //   get : function (pipeObject, fnName) {
    //     if (fnName === 'get') {
    //       return funcStack.reduce(function (val, fn) {
    //         return fn(val);
    //       },value);
    //     }
    //     funcStack.push(window[fnName]);
    //     return oproxy;
    //   }
    // });
    
    let oproxy = new Proxy({}, {
        get: function (pipeObject, fnName) {
            if (fnName === 'get') {
                // fnName为通过.调用代理的proxy对象的属性名称
                return funcStack.reduce((val, fn) => {
                    return fn(val)
                }, value)
            }
            funcStack.push(window[fnName]);//送入函数栈
            return oproxy
        }
    })
    return oproxy;
  }
  
  var double = n => n * 2;
  var pow    = n => n * n;
  var reverseInt = n => n.toString().split("").reverse().join("") | 0;
  
  pipe(3).double.pow.reverseInt.get; // 63