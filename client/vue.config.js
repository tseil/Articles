module.exports = {
  devServer: {
    proxy: 'http://localhost:8800'
  },
  transpileDependencies: [
    'vuetify'
  ]
}
