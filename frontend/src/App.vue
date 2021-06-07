<template>
  <div id="app">
    <router-link to='/'>Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/css/main.css";

export default {
  name: "app",
  components: {
  }
};
</script>
