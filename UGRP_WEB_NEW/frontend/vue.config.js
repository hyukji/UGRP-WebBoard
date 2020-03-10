module.exports = {
  devServer: {
    proxy: {
      // proxyTable 설정
      "/api": {
        target: "http://localhost:3030/api",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  transpileDependencies: ["vuetify"]
}
