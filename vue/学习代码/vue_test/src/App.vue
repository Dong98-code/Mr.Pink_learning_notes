<template>
  <div class="container">
    <MySearch />
    <MyList />
  </div>
</template>

<script>
import MyList from "./components/MyList.vue";
import MySearch from "./components/MySearch.vue";
export default {
  name: "App",
  components: {
    MyList,
    MySearch,
  },
};
</script>

