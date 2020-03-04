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
  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../../backend/public/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../../backend/public"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/"
  },
  transpileDependencies: ["vuetify"]
}
