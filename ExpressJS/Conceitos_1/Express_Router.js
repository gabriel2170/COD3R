const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.
    `)
})

router.use('/produtos/:id', (req, res) => {
    res.json({id: req.params.id, name: 'Item'})
})


router.use('/clientes/id:', (req, res) => {
    res.json({id: req.params.id , name: 'Jonas'})
})

module.exports = router