const path = require("path")
// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    // 输出路径
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js',
        clean: true
    },
    module: {
        rules: [{
                test: /\.js$/, // 处理js的loader
                loader: './loaders/clean-log-loader.js' // 使用这个js文件去处理 js文件
            },
            // {
            //     test: /\.js$/, // 处理js的loader
            //     use:['./loaders/demo/raw-loader.js' ] // 使用这个js文件去处理 js文件
            // },
            // {
            //     test: /\.js$/, // 处理js的loader
            //     loader: './loaders/banner-loader/index.js', // 使用这个js文件去处理 js文件
            //     options: {
            //         author: "xdd"
            //     }
            // },
            {
                test: /\.js$/, // 处理js的loader
                loader: './loaders/babel-loader/index.js', // 使用这个js文件去处理 js文件
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "./loaders/file-loader",
                type: "javascript/auto", // 解决图片重复打包问题
            },
            // {
            //     test: /\.(png|jpe?g|gif|webp)$/,
            //     type: "asset",
            //     parser: {
            //       dataUrlCondition: {
            //         maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
            //       }
            //     },
            //     generator: {
            //       // 将图片文件输出到 static/imgs 目录中
            //       // 将图片文件命名 [hash:8][ext][query]
            //       // [hash:8]: hash值取8位
            //       // [ext]: 使用之前的文件扩展名
            //       // [query]: 添加之前的query参数
            //       filename:"images/[hash:10][ext][query]"
            //     }
            //   },
            {
                test: /\.css$/,
                use: [
                    // 从右往左 从下往上执行 loader
                    './loaders/style-loader/index.js', // 将css创建styl标签的形式 添加到html中去
                    'css-loader', //将css文件 编译成commonJS模块到js中
                ]
            },
        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ],
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3001", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
        hot: true // HotModuleRepalcement HMR 热模替换
    },
    mode: "development"

}