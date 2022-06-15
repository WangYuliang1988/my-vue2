<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span @click="$store.commit('increment')">Like： {{ this.$store.state.count }}</span>
  </div>
</template>
