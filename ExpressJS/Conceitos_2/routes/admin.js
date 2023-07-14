const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Acesso a pagina')
})

router.post('/', (req, res) => {
    const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`

    res.send('Acesso a pagina via POST\n' + corpo)
})

router.get('/:id', (req, res) => {
    res.send('Acesso a pagina com o id' + req.params.id)
})

router.patch('/:id', (req, res) => {
    res.send('Acesso a pagina via PATH')
})

router.put('/:id', (req, res) => {
    res.send('Acesso a pagina via PUT')
})

router.delete('/:id', (req, res) => {
    res.send('Acesso a pagina via DELETE')
})


module.exports = router