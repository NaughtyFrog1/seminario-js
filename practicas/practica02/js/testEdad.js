import { alice, bob, charly, lucy, luke, peter } from './ejercicio13.data.js'

const personas = [alice, bob, charly, lucy, luke, peter]


/**
  La idea de la función es tomar *Date(0)* (1/1/1970 00:00:00) como 0

  El valor de Date(0) varía según el huso horario del cliente, solo para GMT es
  equivalente a 1/1/1970 00:00:00. Por lo que hay que tener en consideración
  el desfasaje de la fecha local respecto a GMT.

  Para solucionar ese problema de desfasaje simplemente tenemos que sumarlo al
  momento de contar las fechas. Pero el huso horario local puede variar según
  la fecha, hay países con horario de verano, por ejemplo; por lo que tenemos
  que calcularlo con la fecha de diferencia, no con la fecha actual. 

  ## Notas
  `new Date(0)`: Wed Dec 31 1969 21:00:00 GMT-0300 (Argentina Standard Time)

  `Date.now() === new Date().getTime()`

*/

function getEdad(dob) {
  const MIN_TO_MS = 60000
  const dateDiff = new Date(Date.now() - dob.getTime())
  const diffOffset = dateDiff.getTimezoneOffset() * MIN_TO_MS
  const gmtDiff = new Date(dateDiff.getTime() + diffOffset)

  return gmtDiff.getFullYear() - 1970
}

function getEdad2(dob) {
  const YEARS_TO_MS = 31556952000;
  return Math.floor((Date.now() - dob.getTime()) / YEARS_TO_MS) 
}


const fecha = new Date(2000, 2, 31, 22, 38)

console.log(getEdad(fecha))
console.log(getEdad2(fecha))
console.warn('')


personas.forEach((persona) => {
  console.log(`${persona.name}: ${getEdad(persona.dob)}`)
})

console.warn('')

personas.forEach((persona) => {
  console.log(`${persona.name}: ${getEdad2(persona.dob)}`)
})