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
  else throw new Error('parent is not instance of HTMLElement')

  return element
}
