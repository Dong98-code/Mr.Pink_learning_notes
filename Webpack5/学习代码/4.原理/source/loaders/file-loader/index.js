const loaderUtils = require("loader-utils");

async function fileLoader(content) {
    // 根据文件内容生产一个新的文件名称
    let filename = loaderUtils.interpolateName(this, "[hash].[ext]", {
        content,
    });
    filename = `images/${filename}`
    // 输出文件
    this.emitFile(filename, content);
    // 暴露出去，给js引用。
    // 记得加上''
    return `export default '${filename}'`;
}

// loader 解决的是二进制的内容
// 图片是 Buffer 数据
fileLoader.raw = true;

module.exports = fileLoader;