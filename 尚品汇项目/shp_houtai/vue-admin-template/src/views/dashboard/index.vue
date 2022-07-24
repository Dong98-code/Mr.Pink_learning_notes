<template>
<div>
  <Card/>
  <salePanel/>
  <Observe/>
</div>
</template>

<script>
import Card from "./Card";
import salePanel from "./salePanel"
import Observe from "./Observe"
export default {
  name: "Dashboard",
  components: {
    Card,
    salePanel,
    Observe
  },
  computed: {},
  mounted() {
    this.$store.dispatch("home/getData")
  },
};
</script>

<style lang="scss" scoped>
</style>
