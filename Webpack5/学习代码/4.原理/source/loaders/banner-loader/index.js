// 给文件添加作者信息
const schema = require("./schema.json"); // 引入options的规则
module.exports = function addBanner(content) {
    // 获取loader的options，同时对options内容进行校验
    // schema是options的校验规则（符合 JSON schema 规则）
    const options = this.getOptions(schema);

    const prefix = `
    /*
    * Author: ${options.author}
    */
  `;

    return `${prefix} \n ${content}`;
}