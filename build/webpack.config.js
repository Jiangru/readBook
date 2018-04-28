const path = require('path')
// const { VueLoaderPlugin } = require('vue-loader')

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
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/ // 排除node_modules文件夹
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.less$/,
          // 多个loader可以用在同一个文件上并且被链式调用，链式调用时从右到左执行且loader之间用"!"来分割
          loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    // new VueLoaderPlugin()
  ]
}