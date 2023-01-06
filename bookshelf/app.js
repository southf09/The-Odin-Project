//The following code creates books using a constructor. The books
//are added to bookshelf (array), which through DOM manipulation is
//visible to the user.

const shelf = document.querySelector(".shelf");

let bookshelf = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 375,
    haveRead: "yes",
  },
];

function newBook(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

function addBookToLibrary() {
  createCard();
}

addBookToLibrary();

function createCard() {
  //Book Cover
  const cover = document.createElement("div");
  cover.classList.add("book-card");

  //Unordered list that will hold the book details
  const information = document.createElement("ul");
  information.classList.add("book-details");

  //Book title
  const bookTitle = document.createElement("li");
  bookTitle.innerHTML = `<h3>${bookshelf[0].title}</h3>`;

  //Book author
  const bookAuthor = document.createElement("li");
  bookAuthor.innerText = bookshelf[0].author;

  //Book pages
  const bookPages = document.createElement("li");
  bookPages.innerText = bookshelf[0].pages;

  //Have read button
  const haveRead = document.createElement("div");
  haveRead.classList.add("have-read-btn");
  haveRead.innerText = "read";

  shelf.appendChild(cover);
  cover.appendChild(information);
  information.appendChild(bookTitle);
  information.appendChild(bookAuthor);
  information.appendChild(bookPages);
  cover.appendChild(haveRead);
}
