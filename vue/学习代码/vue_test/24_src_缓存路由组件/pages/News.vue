<template>
  <ul>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "MyNews",
  beforeDestroy() {
    // console.log('news 即将被销毁');
  },
};
</script>
