// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    // 所有文件的输出路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "static/js/main.js",
    // 打包前 清除 path目录中 的资源
    clean:true
  },
  // 加载器
  module: {
    rules: [
      // css配置
      {
        test: /\.css$/,
        use: [
          // 从右往左 从下往上执行 loader
          'style-loader',// 将css创建styl标签的形式 添加到html中去
          'css-loader',//将css文件 编译成commonJS模块到js中
        ]
      },
      // less处理
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,//两种都安装
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //图片处理
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
          }
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename:"static/imgs/[hash:10][ext][query]"
        }
      },
      // icon-font处理
      {
        test:/\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      // 其他资源，原封动保留
      {
        test: /\.(ttf|woff2?|map4|map3|avi)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
    ],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "development", // 开发模式
};