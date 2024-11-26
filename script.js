const myLibrary = [];

function Book(title, author, date){
  this.title = title
  this.author = author
  this.date = date 
}

function addBook(title, author, date){
  temp_newbook = new Book(title, author, date)
  myLibrary.push(temp_newbook)
}

let arebooksdisplayed = false

addBook("Johnny", "sins", "1997")
addBook("color", "kjl", "199")
// displayAllBooks()

//// ------------------------------------- fillupform --------------------------------------------------------------------------

let form_button = document.querySelector(".button")
let dialog = document.querySelector(".dialog")
form_button.addEventListener("click", function(){dialog.showModal()})

let closebtn = document.querySelector(".close")
closebtn.addEventListener("click", function(){dialog.close()})

//// ------------------------------------- save and add new book --------------------------------------------------------------------------

// let addnewBook = document.querySelector(".button")
let saveNewBook = document.querySelector(".save")

saveNewBook.addEventListener("click", ()=>{
  let newbook = document.createElement("button")
  newbook.className = "book"

  let title = document.querySelector(".title")
  let author = document.querySelector(".author")
  let date = document.querySelector(".date")

  if (title.value != "" && author.value != "" && date.value != ""){
    newbook.textContent = title.value
    document.querySelector(".bookshelf").appendChild(newbook)
    addBook(title.value, author.value, date.value)

    title.value = ""
    author.value = ""
    date.value = ""
  }else{
    alert("Please input values to every entry")
  }
})
// =======================================================================
//// ------------------------------------- display books --------------------------------------------------------------------------

function displayAllBooks(){
  if (myLibrary != []){
    if(arebooksdisplayed == false){
      for (let i = 0; i < myLibrary.length; i++){

        let card = document.createElement("div")
        card.className = 'card'
        card.innerHTML =  `${myLibrary[i].title} <br> ${myLibrary[i].author} <br> ${myLibrary[i].date} <br>`
        let body = document.querySelector("body")
        body.appendChild(card)

        let remove = document.createElement("button")
        remove.className = "remove_button"
        card.appendChild(remove)
        remove.textContent = "remove"
        

        arebooksdisplayed = true
        display_button.textContent = "undisplay books"
      }

      //// ------------------------------------- remove books --------------------------------------------------------------------------
      // this portion is inside the display function cause the remove btn only appears after display button is pressed
      let removebtns = document.querySelectorAll(".remove_button")
      removebtns.forEach((btn, index) => {
        btn.addEventListener("click", ()=>{
          myLibrary.splice(index, 1)
          btn.parentElement.remove()
          myLibrary.forEach(element => {
            console.log(element)
          });          
        })
      })
    //  =========================================================
    }
    else{
      let card = document.querySelectorAll(".card")
      card.forEach(index =>{
        index.remove()
      })
      display_button.textContent = "display books"
      arebooksdisplayed = false
    }
  }
}


let display_button = document.querySelector(".display_button")
display_button.addEventListener("click", displayAllBooks)



