// const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  devServer: {
    disableHostCheck: true, // 花生壳显示Invalid Host header让其不检查hostname。
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: "http://localhost:9527" // 配置跨域处理,只有一个代理
    //端口
    port: 9529,
    // host: 'wxtest.com',
    proxy: {
      "/ajaxchattest/": {
        target: "http://123.207.136.134:9010",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/ajaxchattest/": "/"
        }
      }
    } // 配置多个代理,
  },
  // chainWebpack: config => {
  //   const types = ["vue-modules", "vue", "normal-modules", "normal"];
  //   types.forEach(type =>
  //     addStyleResource(config.modules.rule("less").oneOf(type))
  //   );
  // },
  configureWebpack: {
    externals: {
      AMap: "AMap" // 高德地图配置
    }
  }
};
// function addStyleResource(rule) {
//   rule
//     .use("style-resource")
//     .loader("style-resources-loader")
//     .options({
//       patterns: [path.resolve(__dirname, "./src/assets/less/color.less")]
//     });
// }
