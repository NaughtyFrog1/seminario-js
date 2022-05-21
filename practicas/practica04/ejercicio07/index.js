const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/all', (req, res) => {
  res.json(JSON.parse(fs.readFileSync('./data/persons.json')))
})

app.get('/overweight_people', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log('\n', `Server listening on port http://localhost:${PORT}`, '\n\n')
})
