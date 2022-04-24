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

function renderPagination(pages, episodesNode, parentNode) {
  function handlePaginationClick(e, episodesNode) {
    document
      .querySelector('.pagination__btn--selected')
      .classList.remove('pagination__btn--selected')

    e.target.classList.add('pagination__btn--selected')
  }

  parentNode.textContent = ''

  const pagination = createElement(
    'div',
    { className: 'pagination' },
    parentNode
  )

  if (pages > 1) {
    createElement(
      'button',
      {
        className: 'btn glass pagination__btn pagination__btn--selected',
        innerText: i,
        onclick: (e) => handlePaginationClick(e, episodesNode),
      },
      pagination
    )

    for (let i = 2; i <= pages; i++) {
      createElement(
        'button',
        {
          className: 'btn glass pagination__btn',
          innerText: i,
          onclick: (e) => handlePaginationClick(e, episodesNode),
        },
        pagination
      )
    }
  }
}
