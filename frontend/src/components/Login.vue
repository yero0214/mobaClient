<template>
<div class="container">
    <h1>Login</h1>
    <span>id</span>
    <input type="text"><br>
    <span>pwd</span>
    <input type="password"><br>
    <div @click="login()">Login</div>
    <router-link to="/Register">Register</router-link>
</div>
</template>

<script>
export default {
  methods:{
    login(){
      this.$router.push("/Home")
    }
  }
}
</script>

<style scoped>
.container{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: #FFFFFF;
}
</style>