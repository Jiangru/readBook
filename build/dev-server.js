const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpackHotMiddleWare = require('webpack-hot-middleware')
const router = require('../server/router.js')

// 跨平台开启文件或者网页
const opn = require('opn')

// 创建一个express实例
const app = new express()

// 接口请求
app.use(router)

const compiler = webpack(config)

const devMiddleWare = (webpackDevMiddleWare(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

const hotMiddleWare = (webpackHotMiddleWare(compiler))

app.use(devMiddleWare)
app.use(hotMiddleWare)

var uri = 'http://localhost:8089/'

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

devMiddleWare.waitUntilValid(() => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'testing') {
      opn(uri)
  }
  _resolve
})

const sever = app.listen(8089, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening on 8089')
})

module.exports = {
  ready: readyPromise,
  close: () => {
      server.close()
  }
}
