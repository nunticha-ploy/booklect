import React from "react";
import Link from "next/link";
import styles from "../page.module.css";

const BookList = ({ books_read, books_reading, books_toread }) => {
  const last_read = books_read.slice((books_read.length - 3), books_read.length);
  const last_reading = books_reading.slice((books_reading.length - 3), books_reading.length);
  const last_toread = books_toread.slice((books_toread.length - 3), books_toread.length);

  const temp_cover = "https://ew.com/thmb/rFdKGT0VYc71rXAlYnnj5UJLiB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hpsorcstone-e2b869c8764c4f6699f9877f99380f32.jpg"

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <img className={styles.cover} src={temp_cover} />
          <img className={styles.cover} src={temp_cover} />
          <img className={styles.cover} src={temp_cover} />
          <div className={styles.shelf} />
          {/* <ul>
          {last_read.map((book) => (
            <li key={book.id}>
              <Link href={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul> */}
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <h1>Read</h1>
            <Link href="#"><button className={styles.button} type="button">See all</button></Link>
          </div>
          <p className={styles.p}>You have <b>{books_read.length} books</b> on this shelf.</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <img className={styles.cover} src={temp_cover} />
          <img className={styles.cover} src={temp_cover} />
          <img className={styles.cover} src={temp_cover} />
          <div className={styles.shelf} />
          {/* <ul>
          {last_reading.map((book) => (
            <li key={book.id}>
              <Link href={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul> */}
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <h1>Still reading</h1>
            <Link href="#"><button className={styles.button} type="button">See all</button></Link>
          </div>
          <p className={styles.p}>You have <b>{books_reading.length} books</b> on this shelf.</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <img className={styles.cover} src={temp_cover} />
          <img className={styles.cover} src={temp_cover} />
          <img className={styles.cover} src={temp_cover} />
          <div className={styles.shelf} />
          {/* <ul>
          {last_toread.map((book) => (
            <li key={book.id}>
              <Link href={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul> */}
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <h1>To-read</h1>
            <Link href="#"><button className={styles.button} type="button">See all</button></Link>
          </div>
          <p className={styles.p}>You have <b>{books_toread.length} books</b> on this shelf.</p>
        </div>
      </div>

    </div>
  );
}

export default BookList;