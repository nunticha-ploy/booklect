import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/page.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="containerHome">
          <div>
            <h1>Welcome to Booklect <br />
              Your Virtual Bookshelf!</h1>
            <p>Booklect helps you organize, track, and discover books with ease. Keep tabs on what you’ve read, what you’re reading, and what’s next, all in
              one place. </p>
            <h4>Start your reading journey today!</h4>
            <Link href="/Searchbooks"><button className="button" type="button">Get Start!</button></Link>
          </div>
          <div className="readingImgContainer">
            <Image className="readingImg" src="/reading.png" alt="kids reading the book" width={604} height={480} priority />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
