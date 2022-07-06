module.exports = {

  lintOnSave: false,
  publicPath:'./',
  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // ws: true, //用于支持websocket,默认值为true
        // changeOrigin: true //用于控制请求头中的host值,默认值为true
        ws:false
      }
    }
  }
}