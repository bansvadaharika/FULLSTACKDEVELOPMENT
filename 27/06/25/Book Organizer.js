// 1. Create the books array
const books = [
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 },
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 }
];

// 2. Define the sortByYear function
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// 3. Filter books published in or before 1950
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// 4. Sort filteredBooks by releaseYear ascending
filteredBooks.sort(sortByYear);
