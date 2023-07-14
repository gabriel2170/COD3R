const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Listando os Usuarios')
})

router.get('/:id', (req, res) => {
    res.send('Listando Usuarios com id' + req.params.id)
})

function logReq(req, res, next) {

    console.log('Executando Funcao de Middleware com function')

    return next()
}

router.get('/', logReq, (req, res) => {
    res.send('Executando funçao de Middleware atravez da rota')
})
module.exports = router