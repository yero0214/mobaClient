<template>
<div class="container">
    <h1>Login</h1>
    <span>id</span>
    <input type="text" v-model="id"><br>
    <span>pwd</span>
    <input type="password" v-model="pwd"><br>
    <div @click="login()">Login</div>
    <router-link to="/Register">Register</router-link>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      id:'',
      pwd:'',
    }
  },
  methods:{
    login(){
      axios.post("http://localhost:8010/api/login",{"id":"test","pwd":"1234"})
      .then(result => console.log(result.data))
      .catch(error => console.log(error))
      // this.$router.push("/Home")
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