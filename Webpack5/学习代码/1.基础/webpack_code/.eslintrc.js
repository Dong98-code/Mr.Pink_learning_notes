module.exports = {
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  parser: "@babel/eslint-parser", // 支持最新的最终 ECMAScript 标准
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    // allowImportExportEverywhere: true
  },
  rules: {
    "no-var": 2, // 不能使用 var 定义变量
  },
  globals: {
    "Promise": true
  }
};