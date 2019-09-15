var express = require('express')
var path = require('path')

var app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(3000, function () {
    console.log('Servidor Web Iniciado!')
})