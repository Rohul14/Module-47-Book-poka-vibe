import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, []);
  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold text-center my-8">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {
            books.map(book=><Book 
                key={book.bookId} 
                book={book}
                ></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
