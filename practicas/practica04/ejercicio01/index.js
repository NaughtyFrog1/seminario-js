const express = require('express')
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
  const EMAIL = 'admin@mail.com'
  const PASS = '1234'

  const { email, pass } = req.body
  res.redirect(email === EMAIL && pass === PASS ? '/success.html' : '/')
})

// Abrir servidor
app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
)

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
