/**
 * Babel 是一个 JavaScript 编译器，主要作用是将 ES6 代码转换为 ES5 代码。
 *
 * Vue 项目中普遍使用 ES6 语法，若要求兼容低版本浏览器，就需要引入 Babel，将 ES6 转换为 ES5。
 *
 * Babel 是可配置的，'babel.config.js' 即为 Babel 的配置文件，作用于整个项目。
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
