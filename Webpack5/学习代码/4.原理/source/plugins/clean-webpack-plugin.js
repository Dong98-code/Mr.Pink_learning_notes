// 在上一次打包输出前 把上一次的打包内容清空

const { fdatasync } = require("fs");
const { Compilation } = require("webpack");

/*
如何在打包输出前执行？需要使用 compiler.hooks.emit 钩子, 它是打包输出前触发。
如何清空上次打包内容？
1.获取打包输出目录：通过 compiler 对象。
2.通过文件操作清空内容：通过 compiler.outputFileSystem 操作文件
*/
class CleanWebpackPlugin {
    constructor() {

    }

    apply(compiler) {
        // debugger;
        const fs = compiler.outputFileSystem;// 操作文件的对象， 使用这个对象读取删除文件
        // debugger
        compiler.hooks.emit.tapAsync("CleanWebpackPlugin", (compilation, callback) => {
            //输出文件目录
            const outputPath = compiler.options.output.path; // ../../dist
            // debugger;
            // 使用remove函数来清空改文件夹下的文件
            const err = this.removeFiles(fs, outputPath);
            callback(err);
        })
    }

    removeFiles(fs, path) {
        // 删除文件的函数， 递归执行
        try {
            const files = fs.readdirSync(path); // 同步读取当前目录下的所有文件，返回数组形式
            // debugger;
            // 遍历文件删除
            files.forEach(file => {
                // 获取完整路径
                const filePath = `${path}/${file}` // path为此时文件夹的路径名， file为文件名称
                //判断是文件还是文件名
                const fileStat = fs.statSync(filePath);
                if (fileStat.isDirectory()) {
                    // 是文件夹，递归删除文件
                    this.removeFiles(fs, filePath);
                } else {
                    // 文件， 直接删除
                    fs.unlinkSync(filePath);
                }
            });

            // 删除当前目录
            fs.rmdirSync(path);
        } catch (e) {
            // 将错误返回
            return e
        }
    }
}

module.exports = CleanWebpackPlugin;