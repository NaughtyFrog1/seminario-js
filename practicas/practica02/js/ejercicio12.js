function reduce(array, callback, initialValue) {
  let acc = initialValue
  array.forEach((cur) => (acc = callback(acc, cur)))
  return acc
}

let numbers = [1, 3, 4, 6, 23, 56, 56, 67, 3, 567, 98, 45, 480, 324, 546, 56]
let sum = (x, y) => x + y

console.log('numbers.reduce(sum, 0):', numbers.reduce(sum, 0))
console.log('reduce(numbers, sum, 0):', reduce(numbers, sum, 0))
console.log(
  'reduce(numbers, (x, y) => x + y, 0):',
  reduce(numbers, (x, y) => x + y, 0)
)

console.log('esto es otra opcion', reduce(numbers, (x, y) => x + y, 0));
