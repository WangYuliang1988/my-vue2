import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex) // Vuex 是一个插件，需要通过 Vue.use() 方法来使用

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