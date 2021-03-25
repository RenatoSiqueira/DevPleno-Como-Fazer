const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const path = require('path')

const api = require('./api')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
  const categorias = await api.list('categorias')
  response.render('index', { categorias })
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.listen(port, err => {
  if (err) {
    console.log('error')
  } else {
    console.log('Como-Fazer Server is running on port:', port)
  }
})