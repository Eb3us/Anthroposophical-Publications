import { scrollFunction } from "./scroll.js"
export function adaptToDevices() {
  function resetHeight() {
    let isMobile = window.matchMedia("(max-width:650px)").matches
    let isMobilePortrait = window.matchMedia(
      "(max-width:800px) and (orientation:landscape)"
    ).matches
    if (isMobile) {
      document.body.style.gridTemplateRows = `92vh auto auto`
    } else if (isMobilePortrait) {
      document.body.style.gridTemplateRows = `84vh auto auto`
    } else {
      document.body.style.gridTemplateRows = `100vh auto auto`
    }
  }

  window.addEventListener("resize", () => {
    resetHeight()
    scrollFunction()
  })
  resetHeight()
}
