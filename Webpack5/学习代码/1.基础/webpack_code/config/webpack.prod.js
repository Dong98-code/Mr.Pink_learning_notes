// Node.js的核心模块，专门用来处理文件路径
const path = require("path");
// 插件需要引用
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 插件形式使用
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//css压缩包的插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// 获取loaders包装成一个函数
// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

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
    path: path.resolve(__dirname, "../dist"), //生产模式输出
    // filename: 输出文件名
    filename: "static/js/main.js",
    // 打包前 清除 path目录中 的资源
    clean: true
  },
  // 加载器
  module: {
    rules: [{
      oneOf: [ // css配置
        {
          test: /\.css$/,
          // use: [
          //   // 从右往左 从下往上执行 loader
          //   // 此时不再是style-loader 换成插件
          //   MiniCssExtractPlugin.loader,// 将css创建styl标签的形式 添加到html中去
          //   'css-loader',//将css文件 编译成commonJS模块到js中
          // ]
          use: getStyleLoaders() // 返回一个 【】
        },
        // less处理
        {
          test: /\.less$/,
          // use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
          use: getStyleLoaders('less-loader')
        },
        {
          test: /\.s[ac]ss$/, //两种都安装
          // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          use: getStyleLoaders("sass-loader")
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
            filename: "static/imgs/[hash:10][ext][query]"
          }
        },
        // icon-font处理
        {
          test: /\.(ttf|woff2?)$/,
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
        // babel
        {
          test: /\.js$/,
          exclude: /node_modules/, // 排除node_modules代码不编译
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // 开启babel编译缓存
            cacheCompression: false, // 缓存文件不要压缩
          },
        },
      ]
    }],
  },
  // 插件
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules", // 默认值
      cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin({
      //定义输出的文件的名称
      filename: 'static/css/main.css'
    }),
    // css压缩
    new CssMinimizerPlugin(),
  ],
  // 模式
  mode: "production", // 开发模式，
  // 开发服务器
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  devtool: "source-map",
};