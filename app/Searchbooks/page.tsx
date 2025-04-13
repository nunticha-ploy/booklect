import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetBook from "../components/GetBook";
import "../components/page.css";
import '../globals.css';

export default function SearchPage () {
    return (
        <div className="searchPage">
          <Header />
          <main>
            <section className="containerSearch">
                <h1>Search Book</h1>
                <GetBook />
            </section>
          </main>
          <Footer />
        </div>
      );
}