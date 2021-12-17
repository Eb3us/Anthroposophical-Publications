import { about } from "./about.js"

export const topBarLinksFunction = () => {
  document.addEventListener("click", e => {
    const link = e.target
    if (!link.matches(".top-button-row-button")) return
    if (!link.dataset.template) {
      console.log("no dataset")
    }
    console.log(link.dataset.template)
  })
}
