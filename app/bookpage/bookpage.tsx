'use client'
import React, { useState } from "react";
import "../components/page.css";
import '../globals.css';
import './bookpage.css';

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
  }}) {


    const handleInProgress = async() => {
      
    }

    const [list, setList] = useState(false)

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
          { list ? (
                      <section className="popUp" onClick={() => setList(!list)}>
                      <div className="popDesc">
                        <h1 className="listHeader">Choose list</h1>
                        <div>
                          <button type="button" className="popBut">In progress</button>
                          <button type="button" className="popBut">Finished</button>
                          <button type="button" className="popBut">TBR</button>
                        </div>
                      </div>
                    </section>
          ):("")}
          </div>
    )
  }
  
export default BookPage;