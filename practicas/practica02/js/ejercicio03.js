function max(values) {
  return Math.max(...values)
}

function min(values) {
  return Math.min(...values)
}

function avg(values) {
  return sum(values) / values.length
}

function sum(values = []) {
  if (values.length === 0) return NaN

  const parsedValues = values.map((value) => parseFloat(value, 10))
  return parsedValues.reduce((total, value) => total + value)
}

function test(name, values) {
  console.log(`\n%c${name}:\n`, 'font-size: 1.75em', values)
  console.log(max(values))
  console.log(min(values))
  console.log(avg(values))
  console.log(sum(values))
}

const numbers = [20, 50, 40, 10, 30]
const prices = [1.2, 2, 22, -33, 12, 0.0, '13', Math.PI]
const names = ['John', 'Paul', 'George', 'Ringo']

test('numbers', numbers)
test('prices', prices)
test('names', names)
test('empty', [])
