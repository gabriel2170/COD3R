const express = require('express')
const server = express()



server.get('/', function(req, res){
    res.send('<h1>Teste de Express!</h1>')
})

server.all('/', function(req, res){
    res.send('<h1>Recebendo todas as requisiçoes!</h1>')
})


server.get(/api/, function(req, res){
    res.send('<h1>Recebendo apenas os que contem o nome API!</h1>')
})

server.listen(3000, () => console.log('Executando Servidor ... '))