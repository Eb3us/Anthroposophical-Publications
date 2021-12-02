import { scrollFunction } from "./scroll.js"
export function adaptToDevices() {
  function resetHeight() {
    const booksGridOuter = document.querySelector("#books-grid-outer")
    let isMobile = window.matchMedia("(max-width:650px)").matches
    let isMobilePortrait = window.matchMedia(
      "(max-width:800px) and (orientation:landscape)"
    ).matches
    let isTablet = window.matchMedia(
      "(min-width:850px) and (max-width:1023.9px)"
    ).matches
    let isDesktop = window.matchMedia("(min-width:1024px)").matches
    if (isMobile) {
      document.body.style.gridTemplateRows = `92vh auto auto`
      booksGridOuter.className = "book-div-list-version"
    } else if (isMobilePortrait) {
      document.body.style.gridTemplateRows = `84vh auto auto`
      booksGridOuter.className = "book-div-cover-version-mobile-landscape"
    } else if (isTablet) {
      document.body.style.gridTemplateRows = `100vh auto auto`
      booksGridOuter.className = "book-div-cover-version-tablet"
    } else if (isDesktop) {
      document.body.style.gridTemplateRows = `100vh auto auto`
      booksGridOuter.className = "book-div-cover-version-desktop"
    }
  }

  window.addEventListener("resize", () => {
    resetHeight()
    scrollFunction()
  })
  resetHeight()
}
