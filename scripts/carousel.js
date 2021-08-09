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
      img.src = `./img/${book.img}`
      title.innerText = book.title
      author.innerText = book.global.Author
      innerCarousel.appendChild(bookDiv)
      if (descriptions[book.id - 1]) {
        description.innerHTML = descriptions[book.id - 1].short
      }
    })
  }
  createBookDivs()

  let intervalBooks = []
  let isSet = false
  let initialValue = 0
  let visibleDiv = 0
  const dots = Array.from(dotsDiv.children)

  dots[visibleDiv].classList.add("selected-dot")

  function scrollOneBook(direction) {
    if (direction === "right") {
      initialValue +=
        innerCarousel.querySelector("div:nth-child(1)").clientWidth
      visibleDiv++
    } else {
      initialValue -=
        innerCarousel.querySelector("div:nth-child(1)").clientWidth
      visibleDiv--
    }
    if (visibleDiv > books.length - 1) {
      initialValue = 0
      visibleDiv = 0
    }
    if (visibleDiv < 0) {
      initialValue = innerCarousel.scrollWidth - 900
      visibleDiv = books.length - 1
    }

    innerCarousel.scroll({
      left: initialValue,
      behavior: "smooth",
    })
    if (document.querySelector(".selected-dot")) {
      document.querySelector(".selected-dot").classList.remove("selected-dot")
    }
    dots[visibleDiv].classList.add("selected-dot")
  }

  const scrollBooks = direction => {
    isSet = true
    intervalBooks = setInterval(scrollOneBook, 10000, direction)
    innerCarousel.dataset.interval = intervalBooks
  }
  const stopScroll = () => {
    isSet = false
    clearInterval(innerCarousel.dataset.interval)
  }

  scrollBooks("right")

  //arrows event-listener
  document.addEventListener("click", e => {
    if (!e.target.matches("[data-arrow]")) return
    if (isSet == true) {
      stopScroll()
    } else {
      clearTimeout(leftArrow.dataset.interval)
    }
    if (e.target.matches("#arrow-left")) {
      scrollOneBook("left")
    } else {
      scrollOneBook("right")
    }

    innerCarousel.scroll({
      left: initialValue,
      behavior: "smooth",
    })

    let timerArrows = setTimeout(
      scrollBooks,
      25000,
      innerCarousel.querySelector("div:nth-child(1)").clientWidth
    )
    leftArrow.dataset.interval = timerArrows
  })
}
