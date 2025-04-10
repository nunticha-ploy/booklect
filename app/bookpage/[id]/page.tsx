import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../components/page.css";
import '../globals.css';
import './bookpage.css';
import Book from "../../components/BookProvider";
import { useContext } from "react";

export default function Bookpage(){
  const bookdetails = {
    "name": "Harry Potter and the sorcerer’s stone",
    "description": "Harry Potter has never played a sport while flying on a broomstick. He's never worn a cloak of invisibility, befriended a giant, or helped hatch a dragon. All Harry knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years...",
    "author": "J. K. Rowling",
    "pages": 320,
    "pubyear": "June 26, 1997",
    "category": "Fantasy",
    "mrate": "PG-13",
  }


  const {book} = useContext(Book);
  console.log(book);

    return (
        <div>
          <Header />
            <div className="mainContainer">
              <section className="child-one">
                <img src="https://m.media-amazon.com/images/I/91wKDODkgWL._SL1500_.jpg"></img>
                <p>Return to search</p>
              </section>
              <section className="child-two"></section>
              <section className="child-three">
                <h1>{bookdetails.name}</h1>
                <p>{bookdetails.description}</p>
                <button type="button">Add to my books</button>
              </section>
              <section className="child-four">
                <div>Author</div>
                <div className="info">{bookdetails.author}</div>
                <div>Page count</div>
                <div className="info">{bookdetails.pages}</div>
                <div>Publication Year</div>
                <div className="info">{bookdetails.pubyear}</div>
                <div>Category</div>
                <div className="info">{bookdetails.category}</div>
                <div>Maturity rate</div>
                <div className="info">{bookdetails.mrate}</div>
              </section>
            </div>
          <Footer />
        </div>
    )
}