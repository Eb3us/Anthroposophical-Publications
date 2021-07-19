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
    let tabIndexIteratorAuthor = 5
    let tabIndexIteratorCategory = 7
    array.forEach(element => {
      const link = document.createElement("div")
      link.innerText = element
      link.id = element
      link.classList.add("highlight")
      if (array == authorsArray) {
        link.tabIndex = tabIndexIteratorAuthor
        tabIndexIteratorAuthor++
        link.classList.add("authors-link")
        authorsDiv.appendChild(link)
      } else {
        link.tabIndex = tabIndexIteratorCategory
        tabIndexIteratorCategory++
        link.classList.add("categories-link")
        categoriesDiv.appendChild(link)
      }
    })
  }
  addToDropdownMenu(authorsArray)
  addToDropdownMenu(categoriesArray)

  //event listeners
  document.addEventListener("click", e => {
    if (!e.target.matches(".authors-link")) return
    bookGrid.textContent = ""
    displayByAuthor(e.target.id, selectedPaterns.right)
  })
  document.addEventListener("click", e => {
    if (!e.target.matches(".categories-link")) return
    bookGrid.textContent = ""
    displayByCategories(e.target.id, selectedPaterns.right)
  })
  allBooksLink.addEventListener("click", () => {
    displayAllBooks(selectedPaterns.right)
  })

  //order alphabetically or inverse alphabetically
  const sortAZZA = (array, AZZA) => {
    const tempArray = [...array]
    tempArray.sort((a, b) => {
      if (a.title > b.title) {
        if (AZZA === "a-z") return 1
        if (AZZA === "z-a") return -1
      }
      if (a.title < b.title) {
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
    bookImg.src = `/img/${element.img}`
    bookImg.classList.add("book-img")
    bookImgDiv.appendChild(bookImg)
    bookImgDiv.dataset.id = element.id
    bookImgDiv.dataset.bookLink = ""
    bookImgDiv.tabIndex = "0"
    bookGrid.appendChild(bookImgDiv)
  }

  displayAllBooks(selectedPaterns.right)
}
