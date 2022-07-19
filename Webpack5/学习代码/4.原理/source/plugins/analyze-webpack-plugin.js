// 分析打包资源情况
class AnalyzeWebpackPlugin {
    apply (compiler) {
        compiler.hooks.emit.tap("AnalyzeWebpackPlugin", (compilation) => {
            // 使用Object.entries 将对象变成二维数组
            const assets = Object.entries(compilation.assets);
            /*
            [[kery1, va1]m, [key2, val2]]
             */
            let source = "#分析资源打包的大小 \n| 名称 | 大小 |\n| --- | --- |";
            assets.forEach(([filename, file]) => {
                source += `\n |${filename} | ${Math.ceil(file.size()/1024)} kb|`
            })
            // 添加资源
            compilation.assets["analyze.md"] = {
                source() {
                    return source;
                },
                size() {
                    return source.length;
                }
            }
        })
    }
}

module.exports = AnalyzeWebpackPlugin;