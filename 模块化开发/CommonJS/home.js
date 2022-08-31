const sayName = require('./hello.js')
module.exports = function say(){
    return {
        name:sayName(),
        author:'我不是外星人'
    }
}