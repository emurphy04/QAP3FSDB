const express = require('express')
const request = require('request')
const router = express.Router()

request.get('http://localhost:3000/items', function (error, res, body) {
    items = JSON.parse(body)
})

router.get('/', (req, res) => {
    res.render('index', {title: "App", request: request})
})

module.exports = router