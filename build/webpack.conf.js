const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    app: resolve('../src/index.js')
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [' ', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}