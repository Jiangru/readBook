const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')
// 跨平台的开启文件或者网页的工具
const opn = require('opn')

// 创建一个express实例
const app = new express()

// 调用webpack并将配置传入
const compiler = webpack(config)
console.log(compiler)