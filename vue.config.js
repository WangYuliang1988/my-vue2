/**
 * vue.config.js 是一个可选的配置文件，其出现的背景是：从 vue-cli3 开始，项目结构更简洁，默认省略了一些配置文件，
 * 如 webpack.config.js。如果需要进行某些配置，如项目打包、devServer、CSS处理等，可以通过 vue.config.js 进行配置。
 *
 * 当项目的根目录中存在该文件时，@vue/cli-service启动时会自动加载。
 */

const { defineConfig } = require("@vue/cli-service");

const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

/**
 * vue.config.js 文件应该导出一个包含了选项的对象
 *
 * @type {import('@vue/cli-service').ProjectOptions}
 */
// module.exports = {
//   transpileDependencies: true
// }

/**
 * 或者使用 @vue/cli-service 提供的 defineConfig 函数，以获得更好的类型提示
 */
module.exports = defineConfig({
  transpileDependencies: true,

  // vue.config.js 中修改 webpack 配置共有两种方式：configureWebpack 和 chainWebpack
  //
  // configureWebpack 接收两种类型的值：对象或函数：
  // 1. 接收对象
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       // 别名配置
  //       "@assets": "src/assets",
  //     },
  //   },
  // },
  // 2. 接收函数
  configureWebpack: (config) => {
    console.log("configure webpack");

    if (process.env.NODE_ENV === "production") {
      // 接收函数类型的值时，可以进行动态控制
    }

    // 别名配置
    config.resolve.alias["@assets"] = resolve("src/assets");
  },
  //
  // chainWebpack 接收函数类型的值
  chainWebpack: (config) => {
    console.log("chain webpack");

    if (process.env.NODE_ENV === "production") {
      // chainWebpack 中同样可以进行动态控制
    }

    // 别名配置
    config.resolve.alias.set("@assets", resolve("src/assets"));
  },
});
