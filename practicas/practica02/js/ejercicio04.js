function concat(left, right) {
  return left.concat(right)
}

let names = ['John', 'Paul', 'George', 'Ringo']

console.log(names.reduce(concat))  // JohnPaulGeorgeRingo

// Equivalente: 
// names.redece((acc, cur) => concat(acc, cur))

