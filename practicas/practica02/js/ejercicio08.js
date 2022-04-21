function totalForIn(prices, amounts) {
  let acc = 0
  for (const key in prices) acc += prices[key] * amounts[key]
  return acc
}

function totalReduce(prices, amounts) {
  return Object.keys(prices).reduce(
    (acc, cur) => acc + prices[cur] * amounts[cur],
    0
  )
}

let prices = {
  MILK: 48.9,
  BREAD: 90.5,
  BUTTER: 130.12,
}

let amounts = {
  MILK: 1,
  BREAD: 0.5,
  BUTTER: 0.2,
}

let amounts2 = { BREAD: 1.5 }

console.log('typeof prices:', typeof prices)      // object
console.log('prices.BREAD:', prices.BREAD)        // 90.5
console.log('amounts["MILK"]:', amounts['MILK'])  // 1
console.log('')
console.log('Object.keys(prices)', Object.keys(prices))
console.log('Object.entries(prices)', Object.entries(prices))
console.log('')
console.log('totalForIn(prices, amounts):', totalForIn(prices, amounts))
console.log('totalReduce(prices, amounts):', totalReduce(prices, amounts))
console.log('')
console.log('totalForIn(prices, amounts2):', totalForIn(prices, amounts2))
console.log('totalReduce(prices, amounts2):', totalReduce(prices, amounts2))
