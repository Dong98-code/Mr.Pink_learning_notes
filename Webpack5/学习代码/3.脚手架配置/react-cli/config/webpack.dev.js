// webpack.dev.js
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


const getStyleLoaders = (preProcessor) => {
    return [
        "style-loader",
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
    ].filter(Boolean); //把undefined的值过滤掉
};
module.exports = {
    entry: "./src/main.js",
    output: {
        path: undefined,
        filename: 'static/js/[name].js',
        chunkFileName: 'static/js/[name].chunk.js',
        assetModuleFilename: "static/js/[hash:10][ext][query]",
    },
    module: {
        rules: [{
                oneOf: [
                    //css
                    {
                        test: /\.css$/,
                        // use 数组里面 Loader 执行顺序是从右到左
                        use: getStyleLoaders(),
                    },
                    {
                        test: /\.less$/,
                        use: getStyleLoaders("less-loader"),
                    },
                    {
                        test: /\.s[ac]ss$/,
                        use: getStyleLoaders("sass-loader"),
                    },
                    {
                        test: /\.styl$/,
                        use: getStyleLoaders("stylus-loader"),
                    },
                    //js
                    {
                        test: /\.(jsx|js)$/,
                        include: path.resolve(__dirname, "../src"),
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            plugins: [
                                // "@babel/plugin-transform-runtime", // presets中包含了 react-app内置了已经
                                "react-refresh/babel", // 开启js的HMR功能
                            ],
                        },
                    },
                    //imgs
                    {
                        test: /\.(png|jpe?g|gif|svg)$/,
                        type: "asset", //可以转base64
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理， 减少请求数目， 体积增大一点点
                            },
                        },
                    },
                    // 字体图标资源
                    {
                        test: /\.(ttf|woff2?)$/,
                        type: "asset/resource", //原封不动输出
                    },
                ]
            }


        ]

    },
    plugins: [
        new ESLintWebpackPlugin({
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules", //指定处理范围， 排除node_modules
            cache: true, //缓存，第二次缓存
            cacheLocation: path.resolve(
                __dirname,
                "../node_modules/.cache/.eslintcache" //存放缓存的目录
            ),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    mode: 'development',
    devtool: 'cheap-module-source-map', // source-map
    optimization: {
        // 压缩的操作
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ["gifsicle", {
                                interlaced: true
                            }],
                            ["jpegtran", {
                                progressive: true
                            }],
                            ["optipng", {
                                optimizationLevel: 5
                            }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        "preset-default",
                                        "prefixIds",
                                        {
                                            name: "sortAttrs",
                                            params: {
                                                xmlnsOrder: "alphabetical",
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
    },
    devServer: {
        open: true,
        host: "localhost",
        port: 3000,
        hot: true, // hrm 热模替换
        compress: true,
        historyApiFallback: true, // 解决react-router刷新404问题
      },
}