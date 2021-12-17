import { content } from "./topbarLinksContent.js"

export const topBarLinksFunction = () => {
  const floatingArrow = document.querySelector("#floating-btn-top")
  const topButtonRow = document.querySelector("#top-button-row")
  const modal = document.querySelector("#modal")
  const modalInner = document.querySelector("#modal-inner")

  document.addEventListener("click", e => {
    floatingArrow.classList.add("hidden")
    floatingArrow.classList.remove("floating-btn-display-class")
    topButtonRow.classList.add("hidden")
    const link = e.target
    if (!link.matches(".top-button-row-button")) return
    if (!link.dataset.template) return
    content.forEach(element => {
      if (element.id === link.dataset.template) {
        const title = document.createElement("h1")
        title.innerText = element.title
        modalInner.appendChild(title)
      }
      if (element.subtitle && element.subtitle.lenght > 0) {
        const subTitle = document.createElement("h2")
        subTitle.innerText = element.subtitle
        modalInner.appendChild(subTitle)
      }
      element.paragraphs.forEach(paragraph => {
        const para = document.createElement("p")
        para.innerText = paragraph
        modalInner.appendChild(para)
      })
    })

    modal.classList.remove("hidden")
  })
}
