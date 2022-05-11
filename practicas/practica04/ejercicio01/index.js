const express = require('express')
const app = express()

const PORT = 3000

// Indicamos la ubicación de los archivos estáticos
app.use(express.static('public'))

// Implementar una solicitud GET
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Abrir servidor
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
