const pre = document.getElementById('result')

function renderData(query, textarea) {
  fetch(`http://localhost:3000/${query}`)
    .then((resp) => resp.json())
    .then((data) => (textarea.innerText = JSON.stringify(data, null, 2)))
}

document.querySelectorAll('button').forEach((button) => {
  button.onclick = () => renderData(button.dataset.query, pre)
})
