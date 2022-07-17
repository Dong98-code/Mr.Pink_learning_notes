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
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "main.js",
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
        }
      },
    ],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "development", // 开发模式
};