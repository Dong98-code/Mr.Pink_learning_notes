// loaders/loader1.js
// loader为一个函数时，调用这个函数
// normal loader

// content 为文件内容，返回处理过的文件内容

module.exports = function loader1(content, map, meta) {
    // map： source-map相关
    //meta: 别的loader传递的参数
    // console.log("hello loader");
    console.log("test1");
    return content;
    
};