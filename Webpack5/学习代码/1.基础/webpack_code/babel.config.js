module.exports = {
    presets: [
        [
            "@babel/preset-env",
            // 按需加载core-js的polyfill
            {
                useBuiltIns: "usage", // 按需加载自动引入
                corejs: {
                    version: "3",
                    proposals: true
                }
            },
        ],
    ],
};