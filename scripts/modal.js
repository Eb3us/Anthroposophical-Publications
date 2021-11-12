import { books } from "./books.js"
import { descriptions } from "./descriptions.js"

export const openFullDescription = () => {
  const documentBody = document.querySelector("body")
  const modal = document.querySelector("#modal")
  const modalInner = document.querySelector("#modal-inner")
  const modalCloseBtn = document.querySelector("#close-modal-btn")
  const floatingArrow = document.querySelector("#floating-btn-top")

  document.addEventListener("click", e => {
    if (!e.target.closest("[data-book-link]")) return
    const parent = e.target.closest("[data-book-link]")
    const template = document.querySelector("[data-full-desc-template]")
    const newTemplate = template.content.cloneNode(true)
    modalInner.appendChild(newTemplate)
    fillModalTemplate(parent)
    floatingArrow.classList.add("hidden")
    floatingArrow.classList.remove("floating-btn-display-class")
  })

  function fillModalTemplate(eventTargetParent) {
    books.forEach(book => {
      if (eventTargetParent.dataset.id == book.id) {
        const img = modalInner.querySelector("[data-img]")
        img.src = `./img/${book.img}`

        const title = modalInner.querySelector("[data-title]")
        title.innerText = book.title

        if (book["sub-title"]) {
          const subTitle = modalInner.querySelector("[data-sub-title]")
          subTitle.innerText = book["sub-title"]
        }

        if (book.online !== "no") {
          const onlineButton = modalInner.querySelector("[data-online-btn]")
          onlineButton.classList.remove("hidden")
          onlineButton.href = book.online
        }

        const description = modalInner.querySelector("[data-description]")
        description.innerHTML = descriptions[book.id - 1].long

        const btn = modalInner.querySelector("[data-buy-btn]")
        btn.href = book.url

        const globalDiv = document.querySelector("[data-global-specs]")

        let globalColOne
        let globalColTwo
        let globalColThree
        let globalColFour

        const paperbackColOne = modalInner.querySelector(
          "[data-paperback-specs] .col-1"
        )
        const paperbackColTwo = modalInner.querySelector(
          "[data-paperback-specs] .col-2"
        )
        const hardcoverColOne = modalInner.querySelector(
          "[data-hardcover-specs] .col-1"
        )
        const hardcoverColTwo = modalInner.querySelector(
          "[data-hardcover-specs] .col-2"
        )
        const kindleColOne = modalInner.querySelector(
          "[data-kindle-specs] .col-1"
        )
        const kindleColTwo = modalInner.querySelector(
          "[data-kindle-specs] .col-2"
        )
        let globalArr
        let globalArr2 = 0
        let paperbackArr
        let hardcoverArr
        let kindleArr

        const asignArraysAndCreateColumns = () => {
          if (book.kindle) {
            kindleArr = Object.keys(book.kindle)
            kindleColOne.style.gridTemplateRows = `repeat(${kindleArr.length}, 40px)`
            kindleColTwo.style.gridTemplateRows = `repeat(${kindleArr.length}, 40px)`
            console.log(kindleArr.length)
          }
          if (book.paperback) {
            paperbackArr = Object.keys(book.paperback)
            paperbackColOne.style.gridTemplateRows = `repeat(${paperbackArr.length}, 40px)`
            paperbackColTwo.style.gridTemplateRows = `repeat(${paperbackArr.length}, 40px)`
          }
          if (book.hardcover) {
            hardcoverArr = Object.keys(book.hardcover)
            hardcoverColOne.style.gridTemplateRows = `repeat(${hardcoverArr.length}, 40px)`
            hardcoverColTwo.style.gridTemplateRows = `repeat(${hardcoverArr.length}, 40px)`
          }
          globalArr = Object.keys(book.global)
          if (globalArr.length > 4) {
            globalArr2 = globalArr.splice(3)
          }
          globalColOne = document.createElement("div")
          globalColOne.classList.add("col-1")
          globalColTwo = document.createElement("div")
          globalColTwo.classList.add("col-2")
          globalColOne.style.gridTemplateRows = `repeat(${globalArr.length}, 40px)`
          globalColTwo.style.gridTemplateRows = `repeat(${globalArr.length}, 40px)`
          globalDiv.appendChild(globalColOne)
          globalDiv.appendChild(globalColTwo)
          if (globalArr2.length > 0) {
            globalColThree = document.createElement("div")
            globalColThree.classList.add("col-3")
            globalColFour = document.createElement("div")
            globalColFour.classList.add("col-4")
            globalColThree.style.gridTemplateRows = `repeat(${globalArr2.length}, 40px)`
            globalColFour.style.gridTemplateRows = `repeat(${globalArr2.length}, 40px)`
            globalDiv.appendChild(globalColThree)
            globalDiv.appendChild(globalColFour)
            globalDiv.style.gridTemplate = "1fr / 1fr 1fr 1fr 1fr;"
          } else {
            globalDiv.style.gridTemplate = "1fr / 1fr 1fr;"
          }
        }
        asignArraysAndCreateColumns()

        addToColOne(globalArr, globalColOne)
        addToColOne(paperbackArr, paperbackColOne)
        addToColOne(kindleArr, kindleColOne)
        addToColOne(hardcoverArr, hardcoverColOne)
        addToColTwo(globalArr, globalColTwo, book.global)
        addToColTwo(paperbackArr, paperbackColTwo, book.paperback)
        addToColTwo(kindleArr, kindleColTwo, book.kindle)
        addToColTwo(hardcoverArr, hardcoverColTwo, book.hardcover)
        if (globalArr2.length > 0) {
          addToColOne(globalArr2, globalColThree)
          addToColTwo(globalArr2, globalColFour, book.global)
        }

        modal.classList.remove("hidden")
        documentBody.classList.add("no-overflow")
      }
    })
  }

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden")
    documentBody.classList.remove("no-overflow")
    modalInner.textContent = ""
  })

  document.body.addEventListener("keydown", e => {
    if (e.key != "Escape") return
    modal.classList.add("hidden")
    documentBody.classList.remove("no-overflow")
    modalInner.textContent = ""
  })

  const addToColOne = (array, div) => {
    if (!array) return
    array.forEach(item => {
      const paragraph = document.createElement("p")
      paragraph.innerText = item + ":"
      paragraph.style.gridRow = "span 1"
      div.appendChild(paragraph)
    })
  }
  const addToColTwo = (array, div, object) => {
    if (!array) return
    array.forEach(item => {
      const paragraph = document.createElement("p")
      paragraph.innerText = object[item]
      paragraph.style.gridRow = "span 1"
      div.appendChild(paragraph)
    })
  }
}
