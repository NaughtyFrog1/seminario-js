const form = document.getElementById('game-form')

let rndNumber

function updateRndNumber() {
  rndNumber = Math.floor(Math.random() * 100 + 1)
  return rndNumber
}



form.addEventListener('submit', (e) => {
  e.preventDefault()
  alert(rndNumber)
})
