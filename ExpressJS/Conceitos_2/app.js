const express = require('express')
const app = express()
const adminRoutes = require('../Conceitos_2/routes/admin')
const usuarioRoutes = require('../Conceitos_2/routes/usuario')
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res)=>{
  res.send('Teste de nova rota')
})

app.get('/setcookie', (req, res)=>{
  res.cookie('user', 'Gabriel', {maxAge:90000, httpOnly: true})
  return res.send('Cookie foi gravado com sucesso!')
}), 

app.use((req, res, next)=>{
  
  console.log('Executando Funçao de Middleware')

  return next()
})

app.use('/admin', adminRoutes)
app.use('/usuarios', usuarioRoutes)

app.get('*', (req, res, next)=>{
    setImmediate(()=>{
      next( new Error('Temos um problema'))
    })
})


app.use((err, req, res, next)=>{
  console.log(err.stack)
  res.status(500).json({message: err.message})
})

app.listen(3000, ()=> console.log('Servidor esta Rodando: http://localhost:3000'))