//入口文件
import count from "./js/count";
import sum from "./js/sum";
import { add } from "./js/math"

// 引入css文件，让webpack打包
import "./css/iconfont.css";
import "./css/index.css"
import "./less/index.less"
// import "./sass/index.sass";
import "./sass/index.scss";
let res = count(2, 2)
console.log(res);
console.log(sum(2, 2, 3));

let result1 = count(2, 1);
console.log(result1);
let result2 = sum(1, 2, 3, 4);
console.log(result2);

// 判断是否支持HMR功能
if (module.hot) {
    module.hot.accept("./js/count.js", function (count) {
      const result1 = count(2, 1);
      console.log(result1);
    });
  
    module.hot.accept("./js/sum.js", function (sum) {
      const result2 = sum(1, 2, 3, 4);
      console.log(result2);
    });
  }