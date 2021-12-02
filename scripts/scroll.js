export function scrollFunction() {
  const headerArrow = document.querySelector("#header-arrow")
  const midPageArrow = document.querySelector("#mid-page-arrow")
  const arrowTop = headerArrow.offsetTop
  const bookGridTop = document.querySelector("#books-grid-outer").offsetTop - 20
  const pointOfInversionMidPageArrow =
    document.querySelector("#carousel-outer").offsetTop - 40
  const floatingArrow = document.querySelector("#floating-btn-top")
  const main = document.querySelector("#main")
  const mainTop = main.offsetTop
  const carouselTop = document.querySelector("#carousel-outer").offsetTop
  const topButtonRow = document.querySelector("#top-button-row")
  const topButtonRowOffsetTop = topButtonRow.offsetTop

  headerArrow.addEventListener("click", () => {
    if (screen.width > 860) {
      arrowScroll(headerArrow, carouselTop - 65)
    } else if (screen.width > 560 && screen.width < 800) {
      arrowScroll(headerArrow, mainTop - 15)
    } else {
      arrowScroll(headerArrow, bookGridTop)
    }
  })

  midPageArrow.addEventListener("click", () => {
    arrowScroll(midPageArrow, bookGridTop - 60, 0)
  })

  floatingArrow.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY >= pointOfInversionMidPageArrow - 60) {
      floatingArrow.classList.remove("hidden")
      floatingArrow.classList.add("floating-btn-display-class")
    } else {
      floatingArrow.classList.add("hidden")
      floatingArrow.classList.remove("floating-btn-display-class")
    }
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY >= topButtonRowOffsetTop) {
      topButtonRow.classList.add("top-button-row-fixed")
    } else {
      topButtonRow.classList.remove("top-button-row-fixed")
    }
  })

  function arrowScroll(arrow, downPos) {
    window.scroll({
      top: downPos,
      behavior: "smooth",
    })
  }
}
