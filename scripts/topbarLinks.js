import { content } from "./topbarLinksContent.js"

export const topBarLinksFunction = () => {
  const floatingArrow = document.querySelector("#floating-btn-top")
  const topButtonRow = document.querySelector("#top-button-row")
  const modal = document.querySelector("#modal")
  const modalInner = document.querySelector("#modal-inner")

  document.addEventListener("click", e => {
    const link = e.target
    if (!link.matches(".top-button-row-button")) return
    if (!link.dataset.template) return
    floatingArrow.classList.add("hidden")
    floatingArrow.classList.remove("floating-btn-display-class")
    topButtonRow.classList.add("hidden")
    const contentWrapper = document.createElement("div")
    contentWrapper.className = "modal-content-wrapper"
    content.forEach(element => {
      if (element.id === link.dataset.template) {
        const title = document.createElement("h1")
        title.innerText = element.title
        contentWrapper.appendChild(title)

        if (element.subtitle && element.subtitle.lenght > 0) {
          const subTitle = document.createElement("h2")
          subTitle.innerText = element.subtitle
          contentWrapper.appendChild(subTitle)
        }
        element.paragraphs.forEach(paragraph => {
          const para = document.createElement("p")
          para.innerHTML = paragraph
          contentWrapper.appendChild(para)
        })
        modalInner.appendChild(contentWrapper)
      }
    })
    document.getElementByID("modal-inner")
    modal.classList.remove("hidden")
  })
}
