// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


//开启代理服务

module.exports = {
  pages: {
    index: {
      entry:'src/main.js'
    }
  },
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
  
}