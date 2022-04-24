import { createElement } from './helpers.js'

const URL_EPISODES = 'https://rickandmortyapi.com/api/episode'

function renderEpisode({ name, air_date, episode }, parentNode) {
  const li = createElement('li', { className: 'episode glass' }, parentNode)

  createElement('h2', { className: 'episode__name', innerText: name }, li)

  const info = createElement('p', { className: 'episode__info' }, li)
  createElement(
    'span',
    { className: 'episode__episode', innerText: episode },
    info
  )
  createElement(
    'span',
    { className: 'episode__air-date', innerText: air_date },
    info
  )
}

function renderEpisodes(episodes, parentNode) {
  parentNode.textContent = ''

  const container = createElement('div', { className: 'container' }, parentNode)
  const ul = createElement('ul', { className: 'episodes' }, container)

  episodes.forEach((episodeData) => renderEpisode(episodeData, ul))
}

function renderSearch(parentNode) {
  function handleSubmit(e, search) {
    e.preventDefault()

    const searchValue = search.value.trim()

    console.log(searchValue)
  }

  const form = createElement(
    'form',
    { className: 'busqueda', onsubmit: (e) => handleSubmit(e, search) },
    parentNode
  )
  const search = createElement(
    'input',
    {
      className: 'busqueda__input',
      placeholder: 'Ingrese el nombre de un episodio...',
      type: 'text',
      value: '',
    },
    form
  )
  createElement(
    'input',
    {
      className: 'btn busqueda__btn',
      type: 'submit',
      value: 'Buscar',
    },
    form
  )
}
