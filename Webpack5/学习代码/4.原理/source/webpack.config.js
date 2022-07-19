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
        rules: [
            {
                test: /\.js$/, // 处理js的loader
                loader:'./loaders/clean-log-loader.js' // 使用这个js文件去处理 js文件
            },
            // {
            //     test: /\.js$/, // 处理js的loader
            //     use:['./loaders/demo/raw-loader.js' ] // 使用这个js文件去处理 js文件
            // },
            {
                test: /\.js$/, // 处理js的loader
                loader: './loaders/banner-loader/index.js', // 使用这个js文件去处理 js文件
                options: {
                    author:"xdd"
                }
            },
        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'public/index.html')
        })
    ],
    mode:"development"

}