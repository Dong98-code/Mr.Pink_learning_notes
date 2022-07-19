const schema = require("./schema.json"); // schema设置
const babel = require("@babel/core"); //babel预设

module.exports = function (content) {
    const options = this.getOptions(schema);
    // 使用异步loader
    const callback = this.async(); // 返回一个callback()
    // 使用babel对js代码进行编译
    babel.transform(content, options, function (err, result) {
        if (err) callback(err)

        else callback(err, result.code);
    });
};