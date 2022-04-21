var words = [
  'perro',
  'gato',
  'casa',
  'árbol',
  'nube',
  'día',
  'noche',
  'zanahoria',
  'babuino',
]

console.log(words)
console.log(words.sort())
console.log(words.sort((a, b) => a.localeCompare(b)))
console.log(words.sort((a, b) => a.localeCompare(b)).reverse())
