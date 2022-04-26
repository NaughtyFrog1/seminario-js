const URL_EPISODES = 'https://rickandmortyapi.com/api/episode'

/**
 * @param {keyof HTMLElementTagNameMap} tagName
 * @param {object} attributes
 * @param {HTMLElement} [parent]
 * @returns {HTMLElement}
 */
export function createElement(tagName, attributes, parent) {
  if (arguments.length === 3 && !(parent instanceof HTMLElement)) {
    throw new Error('parent is not instance of HTMLElement')
  }

  const element = document.createElement(tagName)
  Object.keys(attributes).forEach((attr) => (element[attr] = attributes[attr]))

  if (arguments.length > 2) parent.appendChild(element)
  return element
}

export async function fetchEpisodes(page, name = '') {
  const resp = await fetch(`${URL_EPISODES}?page=${page}&name=${name}`)
  if (resp.status !== 200) {
    return {
      pages: 0,
      episodes: [],
    }
  }
  const data = await resp.json()
  return {
    pages: data.info.pages,
    episodes: data.results,
  }
}
