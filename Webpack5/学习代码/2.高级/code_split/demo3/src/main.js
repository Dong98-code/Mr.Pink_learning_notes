// import { sum } from "./math";
console.log("hello main");
// console.log(sum(1, 2, 3, 4))
document.getElementById("btn").onclick = function () {
    //此时才去使用 import 引入对应的sum
    import("./math.js").then(({ sum}) => {
        alert(sum(1,2,3,4))
    })
}