import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./components/page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.containerHome}>
          <div>
            <h1>Welcome to Booklect <br />
              Your Virtual Bookshelf!</h1>
            <p>Booklect helps you organize, track, and discover books with ease. Keep tabs on what you’ve read, what you’re reading, and what’s next, all in
              one place. </p>
            <h4>Start your reading journey today!</h4>
            <Link href="/SearchBooks"><button className={styles.button} type="button">Get Start!</button></Link>
          </div>
          <div>
            <Image src="/reading.png" alt="kids reading the book" width={604} height={480} priority />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
