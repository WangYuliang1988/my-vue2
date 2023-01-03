Vue 学习工程

## Vue
参考：https://cn.vuejs.org/v2/guide/

Vue 是一个用于构建UI的渐进式 JavaScript 框架。

## Vue CLI
参考：https://cli.vuejs.org/zh/guide/

Vue CLI是一个基于 Vue.js 进行快速开发的完整系统，致力于将Vue生态中的工具基础标准化，使开发人员专注于编写应用，而不必纠结配置的问题。

CLI 即 Command Line Interface，命令行交互界面，又称脚手架。

Vue CLI 由以下几个独立的部分组成：

### CLI
CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令。

### CLI 服务
CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。

CLI 服务构建于 webpack 和 webpack-dev-server 之上。包括：
- 加载其它 CLI 插件的核心服务；
- 一个针对绝大部分应用优化过的内部的 webpack 配置；
- 项目内部的 vue-cli-service 命令，提供 serve、build 和 lint 命令。

vue-cli-service 命令：
- npm run serve，启动开发调试
- npm run build，用于生产打包

### CLI 插件
CLI 插件是向 Vue 项目提供可选功能的 npm 包。Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头。

## Vue Router
参考：https://v3.router.vuejs.org/

Vue Router 是 Vue.js 官方的路由插件，用于构建单页面应用。

Vue Router 是基于路由和组件的，具体来说：
- 路由是一组映射关系（key-value），用来将路径（key）和组件（value）映射起来；
- 在单页面应用中，页面路径的改变实际上是组件的切换。

## Vuex
参考：https://v3.vuex.vuejs.org/zh/

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式，通俗地说，就是存储并管理需要被多个 Vue 组件共享的状态（或者说是数据），比如用户的登录状态、购物车数据等。

Vuex 的核心是 store，store 存储并管理着需要被 Vue 组件共享的状态（或者说是数据）。

Vuex 和全局对象的对象有以下两点不同：
1. Vuex 的状态存储是响应式的，当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么组件也会相应地得到更新。
2. store 中状态的改变，只能通过显式地提交（commit）mutation 实现，无法通过直接赋值等方式改变 store 中的状态。

**注意**：Vuex 管理的数据是不是持久化的，当刷新页面时 Vuex 会被重置从而导致其管理的数据丢失。若要实现 Vuex 数据的持久化，需结合 **localStorage** 或者 **sessionStorage**。