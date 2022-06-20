/**
 * vue.config.js 是一个可选的配置文件，其出现的背景是：从 vue-cli3 开始，项目结构更简洁，默认省略了一些配置文件，
 * 如 webpack.config.js。如果需要进行某些配置，如项目打包、devServer、CSS处理等，可以通过 vue.config.js 进行配置。
 *
 * 当项目的根目录中存在该文件时，@vue/cli-service启动时会自动加载。
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
