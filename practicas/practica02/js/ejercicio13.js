import { alice, bob, charly, lucy, luke, peter } from './ejercicio13.data.js'

const personas = [alice, bob, charly, lucy, luke, peter]

//
// HELPERS

function getImc(height, weight) {
  return (weight / height ** 2) * 10000
}

function getEdad(dob) {
  const MIN_TO_MS = 60000
  const dateDiff = new Date(Date.now() - dob.getTime())
  const diffOffset = dateDiff.getTimezoneOffset() * MIN_TO_MS
  const gmtDiff = new Date(dateDiff.getTime() + diffOffset)

  return gmtDiff.getFullYear() - 1970
}

function getEdad2(dob) {
  const YEARS_TO_MS = 365 * 24 * 60 * 60 * 1000
  return Math.floor((Date.now() - dob.getTime()) / YEARS_TO_MS)
}

//
// Consignas

// Punto 1
function getNombresImcMayor25(personas) {
  const arr = []
  personas.forEach(({ name, height, weight }) => {
    if (getImc(height, weight) > 25) arr.push(name)
  })
  return arr
}

// Punto 2
function getNombresEdades(personas) {
  return personas.map(({ name, dob }) => `"${name}": ${getEdad(dob)}`)
}

// Punto 3
function getImcMayores40(personas) {
  const arr = []
  personas.forEach(({ dob, height, weight }) => {
    if (getEdad(dob) > 40) arr.push(getImc(height, weight))
  })
  return arr
}

// Punto 4
function getPromedioImc(personas) {
  const imcTotal = personas.reduce(
    (acc, { height, weight }) => acc + getImc(height, weight),
    0
  )
  return imcTotal / personas.length
}

// Punto 5
function getMasJoven(personas) {
  return personas.reduce((max, persona) =>
    persona.dob.getTime() > max.dob.getTime() ? persona : max
  )
}

// Punto 6
function getPersonasSortedByAltura(personas) {
  return personas.sort((a, b) => a.height - b.height)
}

console.log(getNombresImcMayor25(personas))
console.log(getNombresEdades(personas))
console.log(getImcMayores40(personas))
console.log(getPromedioImc(personas))
console.log(getMasJoven(personas))
