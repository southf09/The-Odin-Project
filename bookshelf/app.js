let bookshelf = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

const shelf = document.querySelector(".shelf");
const theHobbit = new Book("The Hobbit", "Tolkien", 540, "Yes");
const wayKings = new Book("Way of Kings", "Sanderson", 850, "No");

bookshelf.push(theHobbit);
bookshelf.push(wayKings);

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

  //Have read button
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

const bookForm = document.querySelector(".book-form");
const showForm = document.querySelector(".button");

showForm.addEventListener("click", () => {
  bookForm.classList.toggle("hidden");
});

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

for (let i = 0; i < bookshelf.length; i++) {
  createCard(i);
}

const clearBook = document.querySelectorAll(".clear-btn");

for (clear of clearBook) {
  clear.addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    parent.remove();
  });
}
