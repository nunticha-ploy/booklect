import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetBookProvider from "../components/GetBookProvider";
import "../components/page.css";
import '../globals.css';

export default function SearchPage () {
    return (
        <div>
          <Header />
          <main>
            <section className="containerSearch">
                <h1>Search Book</h1>
                <GetBookProvider />
            </section>
          </main>
          <Footer />
        </div>
      );
}