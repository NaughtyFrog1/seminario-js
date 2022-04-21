function identity(x) {
  return x
}

let id = function (x) {
  return x
}

let iden = (x) => x

let identidad = identity

console.log(typeof identity)
console.log(typeof id)
console.log(typeof iden)
console.log(typeof identidad)

console.log(identity('Hola')); 
console.log(id('Hello')); 
console.log(iden('Buen día')); 
console.log(identidad('Buen día'));