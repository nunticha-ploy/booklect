'use client'
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetBook from "../components/GetBook";
import "../components/page.css";
import '../globals.css';
import BookPage from "../bookpage/page";

export default function SearchPage() {
  const [click, setClick] = useState(true)

  const [details, setDetails] = useState({
      image: "https://m.media-amazon.com/images/I/91wKDODkgWL._SL1500_.jpg",
      title: "Harry Potter and the sorcerer’s stone",
      description: "Harry Potter has never played a sport while flying on a broomstick. He's never worn a cloak of invisibility, befriended a giant, or helped hatch a dragon. All Harry knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years...",
      author: "J. K. Rowling",
      pages: 320,
      pubDate: "June 26, 1997",
      category: "Fantasy",
      rating: "PG-13",
  })

  return (
    <div>
      <Header />
      {click ? (
        <GetBook click={click} setClick={setClick} setDetails={setDetails}/>
      ) : (
        <BookPage click={click} setClick={setClick} details={details}/>
      )}
      <Footer />
    </div>
  );
}