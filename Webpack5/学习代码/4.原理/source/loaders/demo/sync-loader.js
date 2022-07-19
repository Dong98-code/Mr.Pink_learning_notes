//loader的分类

// 1、同步loader
// module.exports = function (content, map, meta) {
//     return content;
// };
//   使用this.callback

// 优点：当loader出错时， 将错误传递出去
module.exports = function (content, map, meta) {
  // 传递map，让source-map不中断
  // 传递meta，让下一个loader接收到其他参数

  // 第一个为err ? err : null
  
  ; // 当调用 callback() 函数时，总是返回 
  this.callback(null,content, map, meta);
  return; // 当调用 callback() 函数时，总是返回 undefined
};