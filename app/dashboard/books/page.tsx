import React from "react";
import Link from "next/link";

const BookList = ({ books_read, books_reading, books_toread }) => {
  const last_read = books_read.slice((books_read.length-3), books_read.length);
  const last_reading = books_reading.slice((books_reading.length-3), books_reading.length);
  const last_toread = books_toread.slice((books_toread.length-3), books_toread.length);

  return (
    <div>
    <div>
      <h1>Read</h1>
      <ul>
        {last_read.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>

<div>
<h1>Still reading</h1>
<ul>
  {last_reading.map((book) => (
    <li key={book.id}>
      <Link href={`/books/${book.id}`}>{book.title}</Link>
    </li>
  ))}
</ul>
</div>

<div>
<h1>To-read</h1>
<ul>
  {last_toread.map((book) => (
    <li key={book.id}>
      <Link href={`/books/${book.id}`}>{book.title}</Link>
    </li>
  ))}
</ul>
</div>
</div>
  );
}

export default BookList;