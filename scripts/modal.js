import { books } from "./books.js"
import { descriptions } from "./descriptions.js"

export const openFullDescription = () => {
  const documentBody = document.querySelector("body")
  const modal = document.querySelector("#modal")
  const modalInner = document.querySelector("#modal-inner")
  const modalCloseBtn = document.querySelector("#close-modal-btn")
  const floatingArrow = document.querySelector("#floating-btn-top")
  const topButtonRow = document.querySelector("#top-button-row")

  document.addEventListener("click", e => {
    if (!e.target.closest("[data-book-link]")) return
    const parent = e.target.closest("[data-book-link]")
    const template = document.querySelector("[data-full-desc-template]")
    const newTemplate = template.content.cloneNode(true)
    modalInner.appendChild(newTemplate)
    fillModalTemplate(parent)
    floatingArrow.classList.add("hidden")
    floatingArrow.classList.remove("floating-btn-display-class")
    topButtonRow.style.display = "none"
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

        if (book.online.length > 0) {
          const onlineBtnDiv = modalInner.querySelector("#online-btn-div")
          const onlineButton = document.createElement("a")
          onlineButton.className = "online-button"
          onlineButton.href = book.online
          onlineButton.target = "_blank"
          onlineButton.innerText = "Research On-line"
          onlineBtnDiv.appendChild(onlineButton)
        }

        const description = modalInner.querySelector("[data-description]")
        description.innerHTML = descriptions[book.id - 1].long

        // const btn = modalInner.querySelector("[data-buy-btn]")
        // btn.href = book.url

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
            const btnDiv = modalInner.querySelector("#kindle .specs-center-div")
            const buyBtn = document.createElement("a")
            buyBtn.className = "online-button"
            if (book.kindle.url.length > 0) {
              buyBtn.innerText = "Buy The Book!"
              buyBtn.target = "_blank"
              buyBtn.href = book.kindle.url
            } else {
              buyBtn.innerText = "Coming Soon!"
              buyBtn.href = "javascript:void(0)"
            }
            btnDiv.appendChild(buyBtn)
            kindleArr = Object.keys(book.kindle)
            kindleColOne.style.gridTemplateRows = `repeat(${kindleArr.length}, 40px)`
            kindleColTwo.style.gridTemplateRows = `repeat(${kindleArr.length}, 40px)`
          }
          if (book.paperback) {
            const btnDiv = modalInner.querySelector(
              "#paperback .specs-center-div"
            )
            const buyBtn = document.createElement("a")
            buyBtn.className = "online-button"
            if (book.paperback.url.length > 0) {
              buyBtn.innerText = "Buy The Book!"
              buyBtn.target = "_blank"
              buyBtn.href = book.paperback.url
            } else {
              buyBtn.innerText = "Coming Soon!"
              buyBtn.href = "javascript:void(0)"
            }
            btnDiv.appendChild(buyBtn)
            paperbackArr = Object.keys(book.paperback)
            paperbackColOne.style.gridTemplateRows = `repeat(${paperbackArr.length}, 40px)`
            paperbackColTwo.style.gridTemplateRows = `repeat(${paperbackArr.length}, 40px)`
          }
          if (book.hardcover) {
            const btnDiv = modalInner.querySelector(
              "#hardcover .specs-center-div"
            )
            const buyBtn = document.createElement("a")
            buyBtn.className = "online-button"
            if (book.hardcover.url.length > 0) {
              buyBtn.innerText = "Buy The Book!"
              buyBtn.target = "_blank"
              buyBtn.href = book.hardcover.url
            } else {
              buyBtn.innerText = "Coming Soon!"
              buyBtn.href = "javascript:void(0)"
            }
            btnDiv.appendChild(buyBtn)
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
  const closeModal = () => {
    modal.classList.add("hidden")
    topButtonRow.style.display = "flex"
    documentBody.classList.remove("no-overflow")
    modalInner.textContent = ""
  }
  modalCloseBtn.addEventListener("click", () => {
    closeModal()
  })

  document.body.addEventListener("keydown", e => {
    if (e.key != "Escape") return
    closeModal()
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
