const express = require('express')
const router = require('./Express_Router')
const server = express()


server.use('/api', router)

server.listen(3000, () => console.log('Executando Servidor ....'))