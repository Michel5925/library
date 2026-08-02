const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
    
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
};

function displayBooks() {
    const library = document.querySelector("#library");

    library.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("bookCard");

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>

            <button class="toggleRead ${book.read ? "read" : "notRead"}">
                ${book.read ? "Read" : "Not Read Yet"}
            </button>

            <button class="remove">Remove</button>
        `;

        const toggleButton = card.querySelector(".toggleRead");
        const removeButton = card.querySelector(".remove");

        removeButton.addEventListener("click", () => {
            const index = myLibrary.findIndex(item => item.id === book.id);
            myLibrary.splice(index, 1);
            displayBooks();
        });

        toggleButton.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });

        library.appendChild(card);
    });
}

const newBookBtn = document.querySelector("#newBook");
const form = document.querySelector("#bookForm");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

newBookBtn.addEventListener("click", () => {
    form.hidden = false;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    form.reset();
    form.hidden = true;
});

const cancelButton = document.querySelector("#cancel");

cancelButton.addEventListener("click", () => {
    form.reset();
    form.hidden = true;
})

addBookToLibrary("The Butterfly Lion", "Michael Morpurgo", 128, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, false);
displayBooks();