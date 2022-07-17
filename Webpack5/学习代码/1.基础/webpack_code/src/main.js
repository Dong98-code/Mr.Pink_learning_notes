//入口文件
import count from "./js/count";
import sum from "./js/sum";

// 引入css文件，让webpack打包
import "./css/iconfont.css";
import "./css/index.css"
import "./less/index.less"
import "./sass/index.sass";
import "./sass/index.scss";
let res = count(2, 2)
console.log(res);
console.log(sum(2, 2, 3));