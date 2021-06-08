<template>
  <div id="app">
    <Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/css/main.css";
import Menu from './components/Menu.vue'

export default {
  name: "app",
  components:{
    Menu,
  },
};
</script>
