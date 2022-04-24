const URL_EPISODES = 'https://rickandmortyapi.com/api/episode'

/**
 * @param {keyof HTMLElementTagNameMap} tagName
 * @param {*} attributes
 * @param {HTMLElement} parent
 * @returns {HTMLElement}
 */

export function createElement(tagName, attributes = {}, parent) {
  const element = document.createElement(tagName)
  Object.keys(attributes).forEach((attr) => (element[attr] = attributes[attr]))

  if (parent instanceof HTMLElement) parent.appendChild(element)
  else if (parent !== undefined)
    new Error('parent is not instance of HTMLElement')

  return element
}

export async function fetchEpisodes(page, name = '') {
  const resp = await fetch(`${URL_EPISODES}?page=${page}&name=${name}`)
  const data = await resp.json()

  return {
    pages: data?.info?.pages ?? 0,
    episodes: data?.results ?? [],
  }
}
