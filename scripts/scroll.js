export function scrollFunction() {
  const headerArrow = document.querySelector("#header-arrow")
  const midPageArrow = document.querySelector("#mid-page-arrow")
  const arrowTop = headerArrow.offsetTop
  const bookGridTop = document.querySelector("#books-grid-outer").offsetTop
  const pointOfInversionHeaderArrow = document.querySelector(
    "#header-description-div"
  ).offsetTop
  const pointOfInversionMidPageArrow =
    document.querySelector("#background-div").offsetTop
  const floatingArrow = document.querySelector("#floating-btn-top")

  headerArrow.addEventListener("click", () => {
    arrowScroll(headerArrow, arrowTop + 40, 0)
  })

  midPageArrow.addEventListener("click", () => {
    arrowScroll(midPageArrow, bookGridTop, 0)
  })

  floatingArrow.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY >= pointOfInversionHeaderArrow) {
      headerArrow.classList.remove("rotate-arrow-down")
      headerArrow.classList.add("rotate-arrow-up")
      headerArrow.dataset.position = "up"
    } else {
      headerArrow.classList.remove("rotate-arrow-up")
      headerArrow.classList.add("rotate-arrow-down")
      headerArrow.dataset.position = "down"
    }
  })
  window.addEventListener("scroll", () => {
    if (window.scrollY >= pointOfInversionMidPageArrow) {
      floatingArrow.classList.remove("hidden")
      floatingArrow.classList.add("floating-btn-display-class")
    } else {
      floatingArrow.classList.add("hidden")
      floatingArrow.classList.remove("floating-btn-display-class")
    }
  })

  function arrowScroll(arrow, downPos, upPos) {
    if (arrow.dataset.position === "down") {
      window.scroll({
        top: downPos,
        behavior: "smooth",
      })
    } else {
      window.scroll({
        top: upPos,
        behavior: "smooth",
      })
    }
  }
  console.log(midPageArrow.offsetTop)
}
