//异步loader

module.exports = function (content, map, meta) {
    const callback = this.async();
    // 进行异步操作
  setTimeout(() => {
      console.log("test2");
      callback(null, result, map, meta);
    }, 1000);
    // callback("test2")
  };