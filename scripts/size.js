import { scrollFunction } from "./scroll.js"
export function adaptToDevices() {
  function resetHeight() {
    const booksGridOuter = document.querySelector("#books-grid-outer")
    const listOrCover = document.querySelector("#aZzA")
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
      booksGridOuter.dataset.size = "mobile"
    } else if (isMobilePortrait) {
      document.body.style.gridTemplateRows = `84vh auto auto`
      booksGridOuter.dataset.size = "mobile-landscape"
    } else if (isTablet) {
      document.body.style.gridTemplateRows = `100vh auto auto`
      booksGridOuter.dataset.size = "tablet"
    } else if (isDesktop) {
      document.body.style.gridTemplateRows = `100vh auto auto`
      booksGridOuter.dataset.size = "desktop"
    }
    if (listOrCover.dataset.version === "cover") {
      if (booksGridOuter.dataset.size === "mobile") {
        booksGridOuter.className = "book-div-list-version"
      } else if (booksGridOuter.dataset.size === "mobile-landscape") {
        booksGridOuter.className = "book-div-cover-version-mobile-landscape"
      } else if (booksGridOuter.dataset.size === "tablet") {
        booksGridOuter.className = "book-div-cover-version-tablet"
      } else if (booksGridOuter.dataset.size === "desktop") {
        booksGridOuter.className = "book-div-cover-version-desktop"
      }
    } else {
      booksGridOuter.className = "book-div-list-version"
    }
  }

  window.addEventListener("resize", () => {
    resetHeight()
    scrollFunction()
  })
  resetHeight()
}
