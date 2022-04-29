// 样式 脚本 和html分别提取和存放

const fs = require("fs");
const path = require("path");

// 正则 style 和 script标签, 匹配所有标签；



fs.readFile(path.join(__dirname, "../素材/index.html"),"utf8", function (err, dataStr) {
    // 处理错误
    if (err) {
        return console.log('提取文件失败'+err.message);
    }
    // 成功调用三个方法， 分别解析css, js, 和html文件
    resolve(dataStr, fileType = '.html');// fileType, str:'.html' or
    resolve(dataStr, fileType = '.css');
    resolve(dataStr, fileType='.js');
})

const resolve = function (data, fileType) {

    const regStyle = /<style>[\s\S]*<\/style>/;
    const regScript = /<script>[\s\S]*<\/script>/;
    let reg;
    // 处理js和css
    if (fileType === ".js" || fileType === ".css") {
        reg = fileType === ".js" ? regScript : regStyle;
        let tags = fileType === ".js" ? ["<script>", "</script>"] : ["<style>", "</style>"];
        let regData = reg.exec(data);
        let newData = regData[0].replace(tags[0], "").replace(tags[1], "");
        // 写文件
        fs.writeFile(path.join(__dirname, './clock', 'index' + fileType), newData, function (err) {
            if (err) return console.log('写入' + fileType + '文件成功' + err.message);
            console.log('写入'+fileType+'文件成功');
        })
    } else if (fileType === ".html") {
        let newData = data.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>');
        fs.writeFile(path.join(__dirname, './clock/index.html'), newData, function(err) {
            if (err) return console.log('写入 HTML 文件失败！' + err.message)
            console.log('写入 HTML 页面成功！')
          })
    } else {
        throw new Error("请输入争取的文件类型")
    }

    
}