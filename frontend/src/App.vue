<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
  import global from "./components/global";
  export default {
    components: {
      ...global,
    },
  };
</script>

<style></style>
