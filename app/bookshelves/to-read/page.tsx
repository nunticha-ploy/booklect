"use client"
import React, { useEffect, useState } from "react";
import "../../components/page.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../globals.css';
import { books_read, books_reading, books_toread } from "../../components/tempDB";

function GetBook() {

    return (
        <div>
            <Header />
            <main>
                <section className="containerSearch">
                    <h1>To-Read Bookshelf</h1>
                    <div>
                        <ul className="searchBookContainer">
                            {books_toread?.map((books) => (
                                <li key={books.id}>
                                    <img
                                        src={books.image || "/defaultCover.png"}
                                        alt={books.title}
                                        loading="lazy"
                                    />
                                    <h3>{books.title}</h3>
                                </li>
                            ))}
                        </ul>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )

}

export default GetBook;