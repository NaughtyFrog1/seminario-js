const URL_CAT_API = 'https://api.thecatapi.com/v1/images/search'

async function setRandomImage(img) {
  const resp = await fetch(URL_CAT_API)
  const [{ url }] = await resp.json()
  img.src = url
}

const image = document.createElement('img')
image.classList.add('gatites')
image.alt = 'Un michi'
setRandomImage(image)
document.body.appendChild(image)

image.addEventListener('load', () => {
  setTimeout(() => setRandomImage(image), 2000);
})