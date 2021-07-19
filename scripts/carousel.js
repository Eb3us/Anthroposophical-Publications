import { books } from "./books.js"
import { descriptions } from "./descriptions.js"

export const carouselFunction = () => {
  const outerCarousel = document.querySelector("#carousel-outer")
  const innerCarousel = document.querySelector("#carousel-inner")
  const bookTemplate = document.querySelector("[data-book-template]")
  const leftArrow = document.querySelector("#arrow-left")
  const rightArrow = document.querySelector("#arrow-right")
  const dotsDiv = document.querySelector("#dots")

  innerCarousel.scrollLeft = 0

  function createBookDivs() {
    innerCarousel.style.gridTemplate = `auto 30px / repeat(${books.length}, 100%) 18px`
    books.forEach(book => {
      const bookDiv = bookTemplate.content.cloneNode(true)
      const img = bookDiv.querySelector("[data-book-img]")
      const title = bookDiv.querySelector("[data-book-title]")
      const author = bookDiv.querySelector("[data-book-author]")
      const description = bookDiv.querySelector("[data-book-description]")
      bookDiv.querySelector(".book-rectangle").dataset.id = book.id
      dotsDiv.innerHTML = dotsDiv.innerHTML + '<span class="dots">.</span>'
      img.src = `/img/${book.img}`
      title.innerText = book.title
      author.innerText = book.global.Author
      innerCarousel.appendChild(bookDiv)
      if (descriptions[book.id - 1]) {
        description.innerHTML = descriptions[book.id - 1].short
      }
    })
  }

  let intervalBooks = []
  let isSet = false
  let initialValue = 0

  function scrollOneBook(pixels) {
    const selectedDot = document.querySelector(".selected-dot")
    initialValue += pixels
    if (initialValue >= innerCarousel.scrollWidth) {
      selectedDot.classList.remove("selected-dot")
      dotsDiv.querySelector("span:nth-child(1)").classList.add("selected-dot")
      innerCarousel.scroll({
        left: 0,
        behavior: "smooth",
      })
      initialValue = 0
    }

    innerCarousel.scroll({
      left: initialValue,
      behavior: "smooth",
    })

    selectedDot.classList.remove("selected-dot")
    if (selectedDot.nextSibling) {
      selectedDot.nextSibling.classList.add("selected-dot")
    }
  }

  const scrollBooks = pixels => {
    isSet = true
    intervalBooks = setInterval(scrollOneBook, 10000, pixels)
    innerCarousel.dataset.interval = intervalBooks
  }
  const stopScroll = () => {
    isSet = false
    clearInterval(innerCarousel.dataset.interval)
  }

  createBookDivs()

  const dots = document.querySelectorAll(".dots")
  dotsDiv.querySelector("span:nth-child(1)").classList.add("selected-dot")

  scrollBooks(innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10)
  //arrows event-listener

  document.addEventListener("click", e => {
    const selectedDot = document.querySelector(".selected-dot")
    if (!e.target.matches("[data-arrow]")) return
    if (isSet == true) {
      stopScroll()
    } else {
      clearTimeout(leftArrow.dataset.interval)
    }
    if (e.target.matches("#arrow-left")) {
      if (selectedDot.previousSibling) {
        selectedDot.classList.remove("selected-dot")
        selectedDot.previousSibling.classList.add("selected-dot")
      }
      if (initialValue > 0) {
        initialValue -=
          innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10
      }
    } else {
      if (selectedDot.nextSibling) {
        selectedDot.classList.remove("selected-dot")
        selectedDot.nextSibling.classList.add("selected-dot")
      }
      if (
        initialValue <
        innerCarousel.scrollWidth -
          innerCarousel.querySelector("div:nth-child(1)").offsetWidth
      ) {
        initialValue +=
          innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10
      }
    }

    innerCarousel.scroll({
      left: initialValue,
      behavior: "smooth",
    })

    let timerArrows = setTimeout(
      scrollBooks,
      25000,
      innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10
    )
    leftArrow.dataset.interval = timerArrows
  })
}
