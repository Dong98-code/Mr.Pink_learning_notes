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
  mounted() {
    this.$store.dispatch("home/getData")
  },
};
</script>

<style lang="scss" scoped>
</style>
