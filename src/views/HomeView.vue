<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "Welcome to Your Vue.js App"
    }
  }
}
</script>
