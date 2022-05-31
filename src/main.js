import Vue from 'vue'
import App from './App.vue'
import router from './router' // 相当于'./router/index.js'，加载某个目录下的index.js文件时可以简写

Vue.config.productionTip = false // 设置为true时，开发环境下控制台会出现"You are running Vue in development mode..."的提示

new Vue({
  // 将router实例挂载到Vue实例中，该写法是'router': router的简写
  // 挂载后，即可在任何组件内通过this.$router访问路由器，通过this.$route访问当前路由
  router,
  // Vue通过建立一个虚拟DOM来追踪如何改变真实DOM，该虚拟DOM中的节点称为虚拟节点（VNode）
  // render函数的作用，是将App.vue组件内容渲染成虚拟节点VNode
  // render函数的形参h，在render方法被调用时传入的实参是createElement函数
  render: h => h(App)
}).$mount('#app') // 将该vue实例挂载到index.html中id为'app'的DOM节点上，相当于new Vue({el: '#app'})
