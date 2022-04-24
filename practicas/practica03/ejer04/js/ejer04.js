import { createElement, fetchEpisodes } from './helpers.js'

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
  if (episodes.length === 0) {
    createElement(
      'p',
      {
        className: 'no-episodes',
        textContent: 'Ups... parece que no hay episodios con ese nombre',
      },
      container
    )
  } else {
    const ul = createElement('ul', { className: 'episodes' }, container)
    episodes.forEach((episodeData) => renderEpisode(episodeData, ul))
  }
}

function renderSearch(parentEpisodes, parentPagination, parentNode) {
  async function handleSubmit(e, search) {
    e.preventDefault()
    const searchValue = search.value.trim()
    const { pages, episodes } = await fetchEpisodes(1, searchValue)
    renderEpisodes(episodes, parentEpisodes)
    renderPagination(pages, searchValue, parentEpisodes, parentPagination)
  }

  const form = createElement(
    'form',
    { className: 'search container', onsubmit: (e) => handleSubmit(e, search) },
    parentNode
  )
  const search = createElement(
    'input',
    {
      className: 'search__input glass',
      placeholder: 'Ingrese el nombre de un episodio...',
      type: 'text',
      value: '',
    },
    form
  )
  const btn = createElement(
    'button',
    {
      className: 'btn search__btn glass',
      type: 'submit'
    },
    form
  )
  createElement('img', { src: 'img/search.svg', alt: 'search' }, btn)
}

function renderPagination(pages, name, episodesNode, parentNode) {
  async function handlePaginationClick(e, episodesNode) {
    const { episodes } = await fetchEpisodes(e.target.textContent, name)

    document
      .querySelector('.pagination__btn--selected')
      .classList.remove('pagination__btn--selected')
    e.target.classList.add('pagination__btn--selected')

    renderEpisodes(episodes, episodesNode)
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
        className: 'btn glass glass--sm pagination__btn pagination__btn--selected',
        innerText: 1,
        onclick: (e) => handlePaginationClick(e, episodesNode),
      },
      pagination
    )

    for (let i = 2; i <= pages; i++) {
      createElement(
        'button',
        {
          className: 'btn glass glass--sm pagination__btn',
          innerText: i,
          onclick: (e) => handlePaginationClick(e, episodesNode),
        },
        pagination
      )
    }
  }
}

async function renderInit() {
  const { pages, episodes } = await fetchEpisodes(1)

  const root = document.getElementById('root')
  const episodesRoot = createElement('div', {})
  const paginationRoot = createElement('div', {})

  renderSearch(episodesRoot, paginationRoot, root)

  root.appendChild(episodesRoot)
  root.appendChild(paginationRoot)

  renderEpisodes(episodes, episodesRoot)
  renderPagination(pages, '', episodesRoot, paginationRoot)
}

renderInit()

/**
 * ? Poner `handlePaginationClick` dentro de `renderPagination` para dar mejor
 * ? legibilidad
 *
 * ? idem con `renderEpisode` y `renderEpisodes`
 *
 * ? Porque puedo inicializar búsqueda despues de form pero al pasarla como
 * ? parámetro funciona
 *
 * ? Por que muestra el 404, aunque haga un try catch
 */
