//
const styleLoader = () => {}; // 函数

styleLoader.pitch = function (remainingRequest) {
    /*
      remainingRequest: C:\Users\86176\Desktop\source\node_modules\css-loader\dist\cjs.js!C:\Users\86176\Desktop\source\src\css\index.css
      剩下的还需要处理的loader 

        这里是inline loader用法，代表后面还有一个css-loader等待处理

      最终我们需要将remainingRequest中的路径转化成相对路径，webpack才能处理
        希望得到：../../node_modules/css-loader/dist/cjs.js!./index.css

      所以：需要将绝对路径转化成相对路径
      要求：
        1. 必须是相对路径
        2. 相对路径必须以 ./ 或 ../ 开头
        3. 相对路径的路径分隔符必须是 / ，不能是 \
    */
    const relativeRequest = remainingRequest
        .split("!")
        .map((part) => {
            // 将路径转化为相对路径
            // path为绝对路径
            const relativePath = this.utils.contextify(this.context, part);
            // 
            return relativePath;
        })
        .join("!"); //再转换成 类似于原来的形式 !

    /*
      !!${relativeRequest} 
        relativeRequest：../../node_modules/css-loader/dist/cjs.js!./index.css

        relativeRequest是inline loader用法，代表要处理的index.css资源, 使用css-loader处理
        !!代表禁用所有配置的loader，只使用inline loader。（也就是外面我们style-loader和css-loader）,它们被禁用了，只是用我们指定的inline loader，也就是css-loader

      import style from "!!${relativeRequest}"  ！！终止后见的loader方法执行
      返回的是默认暴漏的文件 使用import 引入处理好的资源
        引入css-loader处理后的css文件
        为什么需要css-loader处理css文件，不是我们直接读取css文件使用呢？
        因为可能存在@import导入css语法，这些语法就要通过css-loader解析才能变成一个css文件，否则我们引入的css资源会缺少
      const styleEl = document.createElement('style')
        动态创建style标签
      styleEl.innerHTML = style
        将style标签内容设置为处理后的css代码
      document.head.appendChild(styleEl)
        添加到head中生效
    */
    const script = `
    import style from "!!${relativeRequest}"
    const styleEl = document.createElement('style')
    styleEl.innerHTML = style
    document.head.appendChild(styleEl)
  `;

    // style-loader是第一个loader, 由于return导致熔断，所以其他loader不执行了（不管是normal还是pitch）
    return script;
};

module.exports = styleLoader;