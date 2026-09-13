# Library

A browser-based library application built with **HTML, CSS and JavaScript** as part of my JavaScript learning journey.

The application allows users to add books to a personal library, track whether they have been read, remove books and dynamically update the library as changes are made.

## Features

* Add books to the library
* Store book title, author and page count
* Track read/unread status
* Toggle a book between **Read** and **Not Read Yet**
* Remove books from the library
* Add books using a form
* Cancel adding a new book
* Reset the form after adding or cancelling
* Unique ID generated for each book
* Dynamic book cards
* Responsive layout

## Technologies

* **HTML5** — Page structure and form
* **CSS3** — Styling and layout
* **JavaScript** — Application logic and DOM manipulation

## What I Learned

This project helped me develop my understanding of:

* JavaScript objects
* Constructor functions
* Prototypes
* Object methods
* Arrays
* DOM manipulation
* Creating elements dynamically
* Event listeners
* Form handling
* User input
* Conditional rendering
* Array methods
* `findIndex()`
* `splice()`
* `crypto.randomUUID()`
* Managing application state
* Re-rendering the interface when data changes
* CSS Flexbox

## Book System

Each book is represented as a JavaScript object created using a `Book` constructor.

Each book stores:

* Title
* Author
* Number of pages
* Read status
* Unique ID

The application uses a unique ID to identify individual books when removing or updating them.

## Read Status

Each book has a read status that can be changed using the **Read / Not Read Yet** button.

The application uses a prototype method to toggle the status:

```js
Book.prototype.toggleRead = function() {
    this.read = !this.read;
};
```

The button styling also changes depending on whether the book has been read.

## Adding Books

Clicking **New Book +** displays the book form.

Users can enter:

* Title
* Author
* Number of pages
* Read status

After submitting the form, a new `Book` object is created and added to the library array.

The library is then re-rendered to display the new book.

## Removing Books

Each book card has a **Remove** button.

When clicked, the application finds the book using its unique ID, removes it from the library array and re-renders the library.

## Dynamic Rendering

The application stores all books inside a `myLibrary` array.

Whenever a book is added, removed or its read status changes, the `displayBooks()` function clears the existing cards and generates the updated cards from the current library data.

This keeps the displayed interface synchronized with the application's state.

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Michel5925/library.git
```

### 2. Navigate into the project

```bash
cd library
```

### 3. Open the application

Open `index.html` in your browser.

No additional dependencies or installation steps are required.

## What This Project Demonstrates

This project demonstrates my ability to use **JavaScript to model data with objects, dynamically manipulate the DOM, handle forms and user interactions, and manage application state**.

It was also an important project for learning how JavaScript objects and constructor functions can be used to represent real-world entities such as books.

## Future Improvements

Potential future improvements include:

* 💾 Save books using Local Storage
* 🔍 Search and filter books
* 📊 Sort books by title, author or page count
* ✏️ Edit existing books
* 📚 Add book categories or genres
* ⭐ Add book ratings
* 🖼️ Add book cover images
* 📱 Improve mobile support

---

Built as part of my **JavaScript learning journey**.
