function isNumeric(str) {
  if (typeof str !== 'string') return false
  return !isNaN(str)
}

console.log('isNumeric("2"):', isNumeric('2'))
console.log('isNumeric("2a")', isNumeric('2a'))
console.log('isNumeric(2):', isNumeric(2))
