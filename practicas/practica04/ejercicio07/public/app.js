const btnOverweight = document.getElementById('overweight')
const btnAge = document.getElementById('age')
const btnImcOver40 = document.getElementById('imc-over-40')
const btnAverage = document.getElementById('average')
const btnYoungest = document.getElementById('youngest')
const btnHeight = document.getElementById('height')

const textarea = document.getElementById('result')

function renderData(query, textarea) {
  fetch(`http://localhost:3000/${query}`)
    .then((resp) => resp.json())
    .then((data) => (textarea.innerText = JSON.stringify(data, null, 2)))
}

btnOverweight.onclick = () => renderData('overweight_people', textarea)
btnAge.onclick = () => renderData('people_by_age', textarea)
btnImcOver40.onclick = () => renderData('imc_over_40', textarea)
btnAverage.onclick = () => renderData('average_imc', textarea)
btnYoungest.onclick = () => renderData('youngest', textarea)
btnHeight.onclick = () => renderData('people_by_height', textarea)
