//Bookshelf Application

//Creates an empty bookshelf, and a constructor for the purpose
//of creating new books to put on your bookshelf

let bookshelf = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

//Two placeholder books, 'The Hobbit' and 'The Way of Kings' are created
//and put on the bookshelf as placeholders for styling purposes while the books
//application is in development. These books could also be added directly into
//the 'bookshelf' array, but I wanted to demonstrate the constructor function

const theHobbit = new Book("The Hobbit", "Tolkien", 540, "Yes");
const wayKings = new Book("The Way of Kings", "Sanderson", 850, "No");
bookshelf.push(theHobbit);
bookshelf.push(wayKings);

const shelf = document.querySelector(".shelf");

//This function creates new cards (book covers), on which the book details and
//'remove book' button are added. These cards are then appended (added) to the
//bookshelf for storage

function createCard(num) {
  //Book Cover
  const cover = document.createElement("div");
  cover.classList.add("book-card");
  cover.classList.add(`book${num}`);

  //Unordered list that will hold the book details
  const information = document.createElement("ul");
  information.classList.add("book-details");

  //Book title
  const bookTitle = document.createElement("li");
  bookTitle.innerHTML = `<h3>${bookshelf[num].title}</h3>`;

  //Book author
  const bookAuthor = document.createElement("li");
  bookAuthor.innerText = bookshelf[num].author;

  //Book pages
  const bookPages = document.createElement("li");
  bookPages.innerText = bookshelf[num].pages;

  //Conditional statement assigns the 'Have Read' or 'Have Not Read' class
  //based on your input when constructing the book page

  if (bookshelf[num].read.toLowerCase() === "yes") {
    const haveRead = document.createElement("div");
    haveRead.classList.add("have-read-btn");
    haveRead.innerText = "read";
    information.appendChild(haveRead);
  } else {
    const haveRead = document.createElement("div");
    haveRead.classList.add("not-read-btn");
    haveRead.innerText = "not read";
    information.appendChild(haveRead);
  }

  const clearBtn = document.createElement("div");
  clearBtn.classList.add("clear-btn");
  clearBtn.innerText = "Clear";

  shelf.appendChild(cover);
  cover.appendChild(information);
  cover.appendChild(clearBtn);
  information.appendChild(bookTitle);
  information.appendChild(bookAuthor);
  information.appendChild(bookPages);
}

//The 'Add Book' button is used to pull up the hidden book form

const bookForm = document.querySelector(".book-form");
const showForm = document.querySelector(".button");

showForm.addEventListener("click", () => {
  bookForm.classList.toggle("hidden");
});

//After the form is pulled up (no longer hidden), the user may submit
//their desired information. This information is grabbed onto and used to
//create a new book with our constructor. The book is then added to the
//bookshelf and appending to the next open spot

const submitForm = document.querySelector(".submit-btn");

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  let bookTitle = document.getElementById("book-title").value;
  let bookAuthor = document.getElementById("book-author").value;
  let bookPages = document.getElementById("book-pages").value;
  let bookRead = document.getElementById("book-read").value;
  const addBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  bookshelf.push(addBook);
  createCard(bookshelf.length - 1);
  bookForm.classList.toggle("hidden");
});

//The following code allows the 'clear' button that is visible on each book
//to delete the book from the bookshelf

const clearBook = document.querySelectorAll(".clear-btn");

for (clear of clearBook) {
  clear.addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    parent.remove();
  });
}

//Iterates through the bookshelf to populate our placeholder books, this will be
//removed later when we begin with an empty array

for (let i = 0; i < bookshelf.length; i++) {
  createCard(i);
}
