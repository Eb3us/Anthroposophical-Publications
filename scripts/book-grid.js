import { books } from "./books.js"

export function gridFunction() {
  const bookGrid = document.querySelector("#books-grid-inner")
  const allBooksLink = document.querySelector("#all-books")
  //generate authors/categories links
  const authorsDiv = document.querySelector("#authors-div")
  const categoriesDiv = document.querySelector("#categories-div")
  let authorsArray = []
  let categoriesArray = []
  const addAuthorToArray = () => {
    books.forEach(book => {
      if (authorsArray.indexOf(book.global.Author) >= 0) return
      authorsArray.push(book.global.Author)
    })
  }
  function addCategoryToArray() {
    books.forEach(book => {
      book.categories.forEach(category => {
        if (categoriesArray.indexOf(category) >= 0) return
        categoriesArray.push(category)
      })
    })
  }
  addCategoryToArray()
  addAuthorToArray()

  function addToDropdownMenu(array) {
    array.forEach(element => {
      const link = document.createElement("li")
      link.innerText = element
      link.id = element
      link.classList.add("highlight")
      link.classList.add(
        `${element
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/\s/g, "-")
          .toLowerCase()}-category`
      )
      if (array == authorsArray) {
        link.classList.add("authors-link")
        authorsDiv.appendChild(link)
      } else {
        link.classList.add("categories-link")
        categoriesDiv.appendChild(link)
      }
    })
  }
  addToDropdownMenu(authorsArray)
  addToDropdownMenu(categoriesArray)

  //event listeners
  document.addEventListener("click", e => {
    const btn = e.target
    if (!btn.matches(".dropbtn")) return

    if (btn.classList.contains("submenu-active")) {
      btn.classList.remove("submenu-active")
    } else {
      if (document.querySelector(".submenu-active")) {
        document
          .querySelector(".submenu-active")
          .classList.remove("submenu-active")
      }
      btn.classList.add("submenu-active")
    }
  })
  document.addEventListener("click", e => {
    if (!e.target.matches(".authors-link")) return
    bookGrid.textContent = ""
    displayByAuthor(e.target.id, selectedPaterns.right)
    if (document.querySelector(".submenu-active")) {
      document
        .querySelector(".submenu-active")
        .classList.remove("submenu-active")
    }
  })
  document.addEventListener("click", e => {
    if (!e.target.matches(".categories-link")) return
    bookGrid.textContent = ""
    displayByCategories(e.target.id, selectedPaterns.right)
    if (document.querySelector(".submenu-active")) {
      document
        .querySelector(".submenu-active")
        .classList.remove("submenu-active")
    }
  })
  allBooksLink.addEventListener("click", () => {
    displayAllBooks(selectedPaterns.right)
    if (document.querySelector(".submenu-active")) {
      document
        .querySelector(".submenu-active")
        .classList.remove("submenu-active")
    }
  })

  //order alphabetically or inverse alphabetically
  const sortAZZA = (array, AZZA) => {
    const tempArray = [...array]
    tempArray.sort((a, b) => {
      if (a.tsort > b.tsort) {
        if (AZZA === "a-z") return 1
        if (AZZA === "z-a") return -1
      }
      if (a.tsort < b.tsort) {
        if (AZZA === "a-z") return -1
        if (AZZA === "z-a") return 1
      }
      return 0
    })
    return tempArray
  }

  const selectedPaterns = {
    left: ["all"],
    right: "a-z",
  }
  //az-za buttons listener
  document.addEventListener("click", e => {
    if (!e.target.matches(".azzaBtn")) return
    selectedPaterns.right = e.target.id
    if (selectedPaterns.left.length < 2) {
      displayAllBooks(selectedPaterns.right)
    } else if (selectedPaterns.left[0] === "author") {
      displayByAuthor(selectedPaterns.left[1], selectedPaterns.right)
    } else if (selectedPaterns.left[0] === "categories") {
      displayByCategories(selectedPaterns.left[1], selectedPaterns.right)
    }
  })

  //render books function

  function displayAllBooks(sortUpOrDown) {
    if (bookGrid.hasChildNodes) {
      bookGrid.textContent = ""
    }
    randomFeaturedBook(sortAZZA(books, sortUpOrDown)).forEach(book => {
      displayBy(book)
    })
    selectedPaterns.left = ["all"]
  }

  function displayByAuthor(id, sortUpOrDown) {
    if (bookGrid.hasChildNodes) {
      bookGrid.textContent = ""
    }
    const thisCategoryArray = []
    sortAZZA(books, sortUpOrDown).forEach(book => {
      if (id == book.global.Author) {
        thisCategoryArray.push(book)
      }
    })
    randomFeaturedBook(thisCategoryArray).forEach(book => {
      if (id == book.global.Author) {
        displayBy(book)
      }
    })
    selectedPaterns.left = ["author", id]
  }

  function displayByCategories(id, sortUpOrDown) {
    if (bookGrid.hasChildNodes) {
      bookGrid.textContent = ""
    }
    const thisCategoryArray = []
    sortAZZA(books, sortUpOrDown).forEach(book => {
      book.categories.forEach(category => {
        if (id == category) {
          thisCategoryArray.push(book)
        }
      })
    })
    randomFeaturedBook(thisCategoryArray).forEach(book => {
      book.categories.forEach(category => {
        if (id == category) {
          displayBy(book)
        }
      })
    })
    selectedPaterns.left = ["categories", id]
  }

  function randomFeaturedBook(array) {
    if (array.length <= 5) return array
    const arrayTemp = [...array]
    const randomBook = arrayTemp.splice(
      Math.floor(Math.random() * arrayTemp.length),
      1
    )
    arrayTemp.splice(4, 0, randomBook[0])
    return arrayTemp
  }

  function displayBy(element) {
    const bookImgDiv = document.createElement("div")
    bookImgDiv.classList.add("book-img-div")
    const bookImg = document.createElement("img")
    bookImg.src = `./img/${element.img}`
    bookImg.classList.add("book-img")
    bookImgDiv.appendChild(bookImg)
    bookImgDiv.dataset.id = element.id
    bookImgDiv.dataset.bookLink = ""
    bookImgDiv.tabIndex = "0"
    const textDiv = document.createElement("div")
    textDiv.classList.add("grid-book-text")
    const title = document.createElement("h5")
    const author = document.createElement("p")
    title.classList.add("hidden-desktop")
    author.classList.add("hidden-desktop")
    const categoriesDiv = document.createElement("div")
    element["categories"].forEach(category => {
      const paragraph = document.createElement("p")
      paragraph.innerText = category
      paragraph.classList.add("book-img-div-category")
      //in category name remove special characters, swap white spaces for dashes and convert to lower case
      const className = category
        .replace(/[^a-zA-Z ]/g, "")
        .replace(/\s/g, "-")
        .toLowerCase()
      paragraph.classList.add(`${className}-category`)
      categoriesDiv.appendChild(paragraph)
    })
    title.innerText = element.title
    author.innerText = element["global"]["Author"]
    textDiv.appendChild(title)
    textDiv.appendChild(author)
    textDiv.appendChild(categoriesDiv)
    bookImgDiv.appendChild(textDiv)
    bookGrid.appendChild(bookImgDiv)
  }

  displayAllBooks(selectedPaterns.right)
}
