<template>
  <div id="app">
    <nav>
      <!-- router-link是vue-router内置的一个组件，会被渲染成一个带链接的a标签，链接地址由to属性指定，
        router-link被选中时会自动添加router-link-active和router-link-exact-active两个class，其中：
        router-link-active是全包含匹配规则，被选中的router（如/about）及其全包含的其它router（如/）都会被添加；
        router-link-exact-active是精确匹配规则，只有被选中的router会被添加。 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <!-- router-view会根据当前的router渲染出对应的组件内容 -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
