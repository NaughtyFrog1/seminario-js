function ejercicio6(a, b, c) {
  console.log({a, b, c})
  console.log((a + b) ** c)
  console.log(Math.max(a, b, c))
}

const a = Math.floor(Math.random() * 5)
const b = Math.floor(Math.random() * 5)
const c = Math.floor(Math.random() * 5)

ejercicio6(a, b, c)
