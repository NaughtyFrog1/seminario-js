Array.prototype.isEmpty = function () {
  // console.log(this)
  if (this.length === 0) return true
  return this.every((elem) => elem === null || elem === undefined)
}

Array.prototype.isEmptyAF = () => {
  // console.log(this)  // window
  if (this.length === 0) return true
  return this.every((elem) => elem === null || elem === undefined)
}

const arrs = [
  [1, 2, 3, 4],           // false  
  [false],                // false
  [true],                 // false
  [''],                   // false
  [],                     // true
  [,,],                   // true
  [null],                 // true
  [undefined],            // true
  [, null, , undefined],  // true
]

arrs.forEach((arr) => console.log(arr, arr.isEmpty()))
// arrs[0].isEmpty()
// arrs[0].isEmptyAF()

console.log(arrs[5])