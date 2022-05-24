/*
  Leer y escribir archivos JSON con Node.js
  https://pharos.sh/leer-y-escribir-archivos-json-con-node-js/
*/

const express = require('express')
const fs = require('fs')
const app = express()

const PORT = 3000

// Indicamos la ubicación de los archivos estáticos
app.use(express.static('public'))
// Usamos el midleware de express para manejar la información
app.use(express.urlencoded({ extended: false }))

// Implementar una solicitud GET
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.post('/login', (req, res) => {
  function isAValidUser(email, pass) {
    const users = JSON.parse(fs.readFileSync('./data/usuarios.json'))
    return users.some(
      ({ username, password }) => username === email && password === pass
    )
  }

  const { email, pass } = req.body
  res.redirect(isAValidUser(email, pass) ? '/success.html' : '/')
})

app.get('/names', (req, res) => {
  if (req.query.hasOwnProperty('username')) {
    const usersData = JSON.parse(fs.readFileSync('./data/usuarios.json'))
    const usernameQuery = req.query.username

    if (Array.isArray(usernameQuery)) {
      const users = []
      usersData.forEach((user) => {
        if (usernameQuery.includes(user.username)) users.push({ name: user.name })
      })
      res.send(JSON.stringify(users))
    } else {
      const user = usersData.find(({ username }) => usernameQuery === username)
      res.json((user === undefined ? {} : { name: user.name }))
    }
  } else {
    res.status(400).send('Invalid query')
  }
})

// Abrir servidor
app.listen(PORT, () => {
  console.clear()
  console.log(`Server listening on port http://localhost:${PORT}`)
})

/*
  app.use indica que componentes de express se usan. Se usa para darle 
  propiedades a express, como usar un middleware. 

  Los middleware son herramientas intermedias que procesan la información que
  recibe el servidor. Hacen una función del servidor.

  El servidor acciona en el request y el response

  En este caso usamos express.urlencoded para procesar la información del
  formulario. Automáticamente express sabe que cuando recibe un método POST debe
  darle el control a urlencoded.
*/
