<template>
<div>
  <Card/>
  <salePanel/>
</div>
</template>

<script>
import Card from "./Card";
import salePanel from "./salePanel"
export default {
  name: "Dashboard",
  components: {
    Card,
    salePanel
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
