const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))


function getImc(height, weight) {
  return (parseInt(weight) / parseInt(height) ** 2) * 10000
}

function getAge(dob) {
  const MIN_TO_MS = 60000
  const dateDiff = new Date(Date.now() - dob.getTime())
  const diffOffset = dateDiff.getTimezoneOffset() * MIN_TO_MS
  const gmtDiff = new Date(dateDiff.getTime() + diffOffset)

  return gmtDiff.getFullYear() - 1970
}

app.get('/all', (req, res) => {
  res.json(JSON.parse(fs.readFileSync('./data/persons.json')))
})

/**
 * Devuelve en formato JSON un arreglo con los nombres de las personas con un
 * IMC mayor a 25
 */
app.get('/overweight_people', (req, res) => {
  const persons = JSON.parse(fs.readFileSync('./data/persons.json'))
  const arr = []
  persons.forEach(({ name, height, weight }) => {
    if (getImc(height, weight) > 25) arr.push(name)
  })
  res.json(arr)
})

/**
 * Devuelve en formato JSON un arreglo de las edades de las personas indexado
 * por el nombre de cada una
 */
app.get('/people_by_age', (req, res) => {
  const persons = JSON.parse(fs.readFileSync('./data/persons.json'))
  res.json(persons.map(({name, dob}) => ({[name]: getAge(new Date(dob))})))
})

app.listen(PORT, () => {
  console.log('\n', `Server listening on port http://localhost:${PORT}`, '\n\n')
})
