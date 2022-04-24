import { createElement, fetchEpisodes } from './helpers.js'

function renderEpisode({ name, air_date, episode }, parentNode) {
  const li = createElement('li', { className: 'episode glass' }, parentNode)

  const a = createElement(
    'a',
    {
      href: `https://rickandmorty.fandom.com/wiki/${name.replace(' ', '_')}`,
      target: '_blank',
    },
    li
  )

  createElement('h2', { className: 'episode__name', innerText: name }, a)

  const info = createElement('p', { className: 'episode__info' }, a)
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

function renderEmpty(parentNode) {
  const container = createElement('div', { className: 'container' }, parentNode)

  const noEpisodes = createElement(
    'div',
    { className: 'no-episodes glass' },
    container
  )

  createElement(
    'img',
    {
      className: 'no-episodes__gif',
      src: 'img/notFound.gif',
      alt: 'Existence is pain',
    },
    noEpisodes
  )

  const info = createElement('div', {}, noEpisodes)
  createElement(
    'h2',
    {
      className: 'episode__name',
      textContent: 'Ooh okay, Jerry!',
    },
    info
  )
  createElement(
    'p',
    {
      className: 'no-episodes__details',
      textContent: "We couldn't find an episode with that name, Jerry!",
    },
    info
  )
  const meeseeks = createElement(
    'div',
    { className: 'no-episodes__meeseeks' },
    info
  )
  createElement(
    'p',
    {
      textContent:
        "Aww, come on, Jerry, we've been over this. You know you got to do both! This is as frustrating for us as it is for you.",
    },
    meeseeks
  )
  createElement(
    'p',
    {
      textContent:
        "Uhh... Hey, Jerry, you mind if we get back to the task at hand? Meeseeks don't usually have to exist this long. It's getting weird.",
    },
    meeseeks
  )
  createElement(
    'p',
    {
      textContent: "I can't take it anymore. I just want to die!",
    },
    meeseeks
  )
  createElement(
    'p',
    {
      textContent:
        "It's become clear-look at me- that if we concentrate all our efforts on Jerry's follow-through, we will solve this problem. I'm Mr. Meeseeks.",
    },
    meeseeks
  )
  createElement(
    'p',
    {
      textContent:
        'Meeseeks are not born into this world fumbling for meaning, Jerry! We are created to serve a singular purpose for which we will go to any lengths to fulfill! Existence is pain to a Meeseeks, Jerry. And we will do anything to alleviate that pain.',
    },
    meeseeks
  )
}

function renderEpisodes(episodes, parentNode) {
  parentNode.textContent = ''

  if (episodes.length === 0) {
    renderEmpty(parentNode)
  } else {
    const container = createElement(
      'div',
      { className: 'container' },
      parentNode
    )
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
      type: 'submit',
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
        className:
          'btn glass glass--sm pagination__btn pagination__btn--selected',
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
