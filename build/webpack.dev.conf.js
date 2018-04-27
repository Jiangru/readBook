const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpckPlugin = require('html-webpack-plugin')

console.log(path.resolve(__dirname, '../dist'))

const pathsToClean = [
  'dist'
]

const devConfig = webpackMerge(baseConfig, {
  plugins: [
    new CleanWebpackPlugin(pathsToClean, {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpckPlugin({
      title: 'app',
      template: 'index.html',
      inject: true,
      chunks: ['app']
    })
  ]
})

module.exports = devConfig