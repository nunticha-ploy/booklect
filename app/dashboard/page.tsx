import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/page.css";
import '../globals.css';

const books_read = [
  { id: 1, title: "Harry Potter and the Philosopher’s Stone" },
  { id: 2, title: "Harry Potter and the Chamber of Secrets" },
  { id: 3, title: "Harry Potter and the Prisoner of Azkaban" },
  { id: 4, title: "Harry Potter and the Goblet of Fire" },
  { id: 5, title: "Harry Potter and the Order of the Phoenix" },
  { id: 6, title: "Harry Potter and the Half-Blood Prince" },
  { id: 7, title: "Harry Potter and the Deathly Hallows" },
  { id: 8, title: "Harry Potter and the Cursed Child" },
  { id: 9, title: "Fantastic Beasts and Where To Find Them" },
];

const books_reading = [
  { id: 1, title: "The Lightning Thief" },
  { id: 2, title: "The Sea of Monsters" },
  { id: 3, title: "The Titan's Curse" },
  { id: 4, title: "The Battle of the Labyrinth" },
  { id: 5, title: "The Last Olympian" },
];

const books_toread = [
  { id: 1, title: "A Game of Thrones" },
  { id: 2, title: "A Clash of Kings" },
  { id: 3, title: "A Storm of Swords" },
  { id: 4, title: "A Feast for Crows" },
  { id: 5, title: "A Dance with Dragons" },
  { id: 6, title: "The Winds of Winter" },
  { id: 7, title: "A Dream of Spring" },
];

const last_read = books_read.slice((books_read.length - 3), books_read.length);
const last_reading = books_reading.slice((books_reading.length - 3), books_reading.length);
const last_toread = books_toread.slice((books_toread.length - 3), books_toread.length);

const temp_cover = "https://ew.com/thmb/rFdKGT0VYc71rXAlYnnj5UJLiB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hpsorcstone-e2b869c8764c4f6699f9877f99380f32.jpg"

function Dashboard() {
  return (
    <div>
      <Header />
      
      <main>
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
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;