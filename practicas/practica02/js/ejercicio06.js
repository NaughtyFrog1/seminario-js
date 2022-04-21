function isInteger(num) {
  return Number.isInteger(num)
}

console.log('isInteger(2):', isInteger(2))
console.log('isInteger(2.0):', isInteger(2.0)) //! Devuelve true
console.log('isInteger(2.1):', isInteger(2.1))
console.log('isInteger(-10):', isInteger(-10))
console.log('isInteger([1]):', isInteger([1]))
console.log("isInteger('2'):", isInteger('2'))
console.log('isInteger(true):', isInteger(true))
console.log('isInteger(null):', isInteger(null))
let num
console.log('isInteger(num):', isInteger(num))
