import React from "react";
import BookList from "./books/index";
import BookStats from "./books/stats";
import styles from "./dashboard.module.css";

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

function Dashboard() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.booklist}>
          <BookList
            books_read={books_read} books_reading={books_reading} books_toread={books_toread} />
        </div>
        <div className={styles.bookstats}>
          <BookStats
            books_read={books_read} books_reading={books_reading} books_toread={books_toread} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;