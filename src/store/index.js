import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex) // Vuex 是一个插件，需要通过 Vue.use() 方法来使用

// 注意：Vuex 管理的数据是不是持久化的，当刷新页面时 Vuex 会被重置从而导致其管理的数据丢失
// 若要实现 Vuex 数据的持久化存储，需结合 localStorage 或者 sessionStorage

// 创建 Vuex 的 store
const store = new Vuex.Store({
  // state 用于存储状态，通过 store.state.xxx 方法读取状态信息
  state: {
    count: 0
  },
  // mutations 包含改变 state 中状态的方法，由 store.commit 方法触发
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store