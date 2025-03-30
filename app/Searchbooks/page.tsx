import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/page.css";

export default function SearchPage () {
    return (
        <div>
          <Header />
          <main>
            <section className="containerSearch">
                <h1>Search Book</h1>
            </section>
          </main>
          <Footer />
        </div>
      );
}