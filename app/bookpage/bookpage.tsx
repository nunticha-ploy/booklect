'use client'
import React, { useState } from "react";
import "../components/page.css";
import '../globals.css';
import './bookpage.css';
import { books_read, books_reading, books_toread } from "../components/tempDB";

function BookPage({ click, setClick, details }: {
  click: boolean,
  setClick: React.Dispatch<React.SetStateAction<boolean>>,
  details: {
    image: string;
    title: string;
    description: string;
    author: string;
    pages: number;
    pubDate: string;
    category: string;
    rating: string;
  }
}) {
  const [list, setList] = useState(false)

  const image = details.image;
  const title = details.title;
  const description = details.description;
  const author = details.author;
  const pages = details.pages;
  const pubDate = details.pubDate;
  const category = details.category;
  const rating = details.rating;


  //function for adding a book to the specified table of the database
  const handleDBPopulation = async(tablename:string) => {

    if (tablename=="tbr"){
        books_toread.push({ id: books_toread.length+1, image, title, description, author, pages, pubDate, category, rating });

    } else if (tablename=="read"){
      books_read.push({ id: books_read.length+1, image, title, description, author, pages, pubDate, category, rating });

    } else {
      books_reading.push({ id: books_reading.length+1, image, title, description, author, pages, pubDate, category, rating });
    }

    // try {
    //   const res = await fetch('../bookdb/post', {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ image, title, description, author, pages, pubDate, category, rating, tablename })
    //   });

    //   const data = await res.json();
    //   if (res.ok) {
    //     console.log("Book added successfully!");
    //     setList(!list);
    //   } else {
    //     console.log(data.error || "Failed to add book")
    //   }
    // } catch (error:any) {
    //   console.log(error.message + ": Error adding the book")
    // }
  };


  return (
    <div className="mainContainer">
      <section className="child-two">
        <img src={details.image} alt="there is no book cover yet"></img>
        <h1>{details.title}</h1>
      </section>
      <section className="child-three">
        <p>{details.description}</p>
      </section>
      <section className="child-four">
        <div className="information">
          <div>Author</div>
          <div className="info">{details.author}</div>
          <div>Page count</div>
          <div className="info">{details.pages}</div>
          <div>Publication Year</div>
          <div className="info">{details.pubDate}</div>
          <div>Category</div>
          <div className="info">{details.category}</div>
          <div>Maturity rate</div>
          <div className="info">{details.rating}</div>
        </div>
        <div className="buttonContainer">
          <button type="button" className="addButton" onClick={() => setList(!list)}>Add to my books</button>
        </div>
        <p onClick={() => setClick(!click)}>Return to search</p>
      </section>
      {list ? (
        <section className="popUp" onClick={() => setList(!list)}>
          <div className="popDesc">
            <h1 className="listHeader">Choose list</h1>
            <div>
              <button type="button" className="popBut" onClick={() => handleDBPopulation("inprogress")}>In progress</button>
              <button type="button" className="popBut" onClick={() => handleDBPopulation("read")}>Finished</button>
              <button type="button" className="popBut" onClick={() => handleDBPopulation("tbr")}>TBR</button>
            </div>
          </div>
        </section>
      ) : ("")}
    </div>
  )
}

export default BookPage;