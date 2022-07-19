//清除console.log语句

module.exports = function cleanLogLoader(content) {
    // .*表示任意任容
    // ;?可以有分号，也可以没有
    return content.replace(/console\.log\(.*\);?/g, "");
}