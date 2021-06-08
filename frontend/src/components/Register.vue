<template>
<div class="container">
    <h1>Register</h1>
    <div>id<input type="text"></div>
    <div>pwd<input type="password"></div>
    <div>pwdCheck<input type="password"></div>
    <div @click="save()">save</div>
</div>
</template>

<script>
export default {
    methods:{
        save(){
            this.$router.push("/Login")
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