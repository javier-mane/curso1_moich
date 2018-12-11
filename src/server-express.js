import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import helmet from 'helmet'

const app = express()

const heroes = [
  {
    id: 1,
    name: 'SpiderCholo',
    img: 'spider.png',
    active: true,
    createdAt: new Date()
  },
  {
    id: 2,
    name: 'IronHomi',
    img: 'ironhomi.png',
    active: true,
    createdAt: new Date()
  },
  {
    id: 3,
    name: 'Mary Juana',
    img: 'maryjuana.png',
    active: true,
    createdAt: new Date()
  }
]

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ exrended: false }))
app.use(bodyParser.json())

// Ruta Inicial
app.get('/', (req, res) => {
  res.send('<h1>Bienvenidos al Curso de MOICH</h1>')
})

app.get('/heroes', (req, res) => {
  return res.json(heroes)
})

app.get('/heroes/:id', (req, res) => {
  const id = req.params.id
  const heroe = heroes.filter(heroe => heroe.id === parseInt(id))[0]

  if (!heroe) {
    return res.status(404).json({
      statusCode: 404,
      status: 'Not Found',
      message: `El Heroe que con el id:${id} No Existe!`
    })
  }

  console.log(heroe)
  res.json(heroe)
})

app.post('/heroes', (req, res) => {
  console.log(req.body)
  const heroe = {
    createdAt: new Date(),
    ...req.body
  }
  heroes.push(heroe)
  return res.json(heroe)
})

app.put('/heroes', (req, res) => {
  const id = req.params.id
  const heroe = heroes.filter(heroe => heroe.id === parseInt(id))[0]

  if (!heroe) {
    return res.status(404).json({
      statusCode: 404,
      status: 'Not Found',
      message: `El Heroe que con el id:${id} No Existe!`
    })
  }
  // Codigo de sustitucion en el arreglo
  heroes.splice(heroes.indexOf(heroe), 1)

  heroe.name = req.body.name
  heroe.img = req.body.img
  heroe.active = req.body.active

  heroes.push(heroe)

  return res.json(heroe)
})

app.delete('/heroes/:id', (req, res) => {
  const { id } = req.params
  const heroe = heroes.filter(heroe => heroe.id === parseInt(id))[0]

  if (!heroe) {
    return res.status(404).json({
      statusCode: 404,
      status: 'Not Found',
      message: 'El heroe que estas buscando no existe'
    })
  }

  heroes.splice(heroes.indexOf(heroe), 1)

  return res.json(heroe)
})

app.listen(3000, () => {
  console.log('Servidor iniciado correctametne en http://localhost:3000')
})
