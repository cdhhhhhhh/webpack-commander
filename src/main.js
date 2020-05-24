import "./style.css";
import "./style1.less";
import "./style2.scss";
import _ from "lodash";

// const print = require("./print.js")(() => {
//     console.log("aaa");
// });
// _.add();
// new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove();
//     });
// });
//每次热更新触发修改，防止全部刷新
if (module.hot) {
    module.hot.accept("./print.js", function () {
        print();
    });
}
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     getX() {
//         return this.x;
//     }
// }
// let cp = new ColorPoint(25, 8);
