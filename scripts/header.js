import { paintings } from "./paintings.js"

export function rotateHeaderImages() {
  const randomPainting = Math.floor(Math.random() * paintings.length)
  const header = document.querySelector("#header")
  const footer = document.querySelector("#footer")
  const middle = document.querySelector("#background-div")
  const text = document.querySelector("#painting-preview")
  const title = document.querySelector("#painting-title")
  const artist = document.querySelector("#painting-artist")
  const year = document.querySelector("#painting-year")
  const material = document.querySelector("#painting-material")
  header.style.backgroundImage = `url(${paintings[randomPainting].url})`
  footer.style.backgroundImage = `url(${paintings[randomPainting].url})`
  middle.style.backgroundImage = `url(${paintings[randomPainting].url})`
  text.style.backgroundImage = `url(${paintings[randomPainting].url})`
  title.innerText = paintings[randomPainting].title
  artist.innerText = `by ${paintings[randomPainting].artist}`
  if (paintings[randomPainting].year) {
    year.innerText = paintings[randomPainting].year
  }
  if (paintings[randomPainting].material) {
    material.innerText = paintings[randomPainting].material
  }
}
