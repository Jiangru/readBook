const express = require('express')
const http = require('http')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('hello world')
})

module.exports = router