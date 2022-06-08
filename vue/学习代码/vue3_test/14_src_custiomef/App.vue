<template>
  <input type="text" name="" id="" v-model="keyWord" />
  <h2>{{ keyWord }}</h2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import { customRef } from "vue";
export default {
  name: "App",
  // 暂时不考虑 响应式

  setup() {
    // const keyWord = ref('hello') // VUE 提供ref
    // 使用自定义ref
    function myRef(value) {
      // 自定义 ref

      // 重写 set  get
      let timer;
      return customRef((track, trigger) => {
        // 接收 track 和 trigger 函数作为参数
        //返回含有get 和set的对象

        return {
          get() {
            // 返回初始化 value
            console.log(`修改了myRef数据读取了,把${value}给他了`);
            track(); // 追踪变化
            return value;
          },
          set(newValue) {
            console.log(`myref修改了, 改为了${newValue}`);
            // 此时应该再 调用get函数, 返回先的newRef
            //使用track 和trigger函数
            // trigger(); // 重新解析模板
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue;

              trigger(); // 重新解析模板
            }, 100);
          },
        };
      });
    }
    const keyWord = myRef("hello");
    return {
      keyWord,
    };
  },
};
</script>

