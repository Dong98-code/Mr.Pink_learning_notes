class BannerWebpackPlugin {
    constructor(options = {}) {
        this.options = options; // 传入配置

    }

    // apply函数
    apply(compiler) {
        // 需要处理js css文件
        const extensions = ["js", "css"];
        // 再emit hooks处理
        compiler.hooks.emit.tap("BannerWebpackPlugin", (compilation) => {
            // compilation.assets包含所有即将输出的资源
            // 通过过滤只保留需要处理的文件
            const assetPaths = Object.keys(compilation.assets).filter((path) => {
                const splited = path.split(".");
                return extensions.includes(splited[splited.length - 1]); //判断后缀名字是否包含 js和css
            });
            // 此时 assetPaths只是文件的key
            assetPaths.forEach((assetPath) => {
                const asset = compilation.assets[assetPath]; // 根据key 得到 文件

                const source = `/* *Author:${this.options.author}
                 *\n${asset.source()}`;

                compilation.assets[assetPath] = {
                    // 资源内容
                    source() {
                        return source;
                    },
                    // 资源大小
                    size() {
                        return source.length;
                    },
                };
            })
        })
    }
}

module.exports = BannerWebpackPlugin;