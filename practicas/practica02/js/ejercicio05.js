function arrayEquals(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false
  if (a.length !== b.length) return false

  return a.every((value, i) => value === b[i])
}

let a = [1, 2, 3, 4]
let b = [1, 2, 3, 4]
let c = [1, 2, 3, 4, 5]
let d = 'Hola'
let e = null

console.log('arrayEquals(a, a):', arrayEquals(a, a))
console.log('arrayEquals(a, b):', arrayEquals(a, b))
console.log('arrayEquals(b, c):', arrayEquals(b, c))
console.log('arrayEquals(e, c):', arrayEquals(e, c))
console.log('arrayEquals(c, d):', arrayEquals(c, d))
console.log('arrayEquals(d, d):', arrayEquals(d, d))
console.log('arrayEquals(e, e):', arrayEquals(e, e))
