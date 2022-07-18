import { createApp } from "vue";
import App from "./App";
import router from "./router";
//引入element库和对应的样式文件
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

createApp(App)
  .use(router)
  // .use(ElementPlus)
  .mount(document.getElementById("app"));
