<template>
  <div class="container">
    <Menu/>
    <h1>Home</h1>
    <a @click="getMessage">Press Me!</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    getMessage: function() {
      var self = this;
      window.backend.basic().then(result => {
        self.message = result;
      });
    }
  }
};
</script>

<style scoped>

</style>
