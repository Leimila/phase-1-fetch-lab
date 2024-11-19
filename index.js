// Function to fetch books from the Game of Thrones API
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json()) // Convert the response to JSON
    .then(data => renderBooks(data))   // Call renderBooks with the data
    .catch(error => console.error("Error:", error)); // Catch and log errors
}

// Function to render books on the webpage
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerText = book.name;
    main.appendChild(h2);
  });
}

// Wait for the DOM to load before running the fetchBooks function
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
