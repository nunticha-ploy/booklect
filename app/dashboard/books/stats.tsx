import React from "react";
import Link from "next/link";

const BookStats = ({ books_read, books_reading, books_toread }) => {
  return (
    <div>
      <h1>Read</h1>
      <p>You have {books_read.length} books on this shelf.</p>
      <button>See all</button>

      <h1>Still reading</h1>
      <p>You have {books_reading.length} books on this shelf.</p>
      <button>See all</button>

      <h1>To-read</h1>
      <p>You have {books_toread.length} books on this shelf.</p>
      <button>See all</button>
    </div>
  );
}

export default BookStats;