const config = require('./webpack.dev.conf')
const webpack = require('webpack')
const express = require('express')
const opn = require('opn')

const WebpackDevMiddleWare = require('webpack-dev-middleware')
const WebpackHotMiddleWare = require('webpack-hot-middleware')

const compiler = webpack(config)

const app = express()
const PORT = '8089'

const devMiddleware = WebpackDevMiddleWare(compiler, {
  publicPath: config.output.publicPath,
  quiet: false
})
const hotMiddleware = WebpackHotMiddleWare(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

const uri = 'http://localhost:' + PORT

devMiddleware.waitUntilValid(function () {
  console.log('> Listening on ' + uri + '\n')
})

module.exports = app.listen(PORT, function (err) {
  if (err) {
    console.log(err)
    return
  }

  opn(uri)
})

