import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
    return (
        <header className={styles.containerHeader} >
            {/* change text to logo*/}
            <div>
                Booklect.
            </div>
            <nav>
                <ul className={styles.nav}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Dashboard">Dashboard</Link></li>
                    <li><Link href="/MyBooks">My books</Link></li>
                    {/* change emoji to icon later*/}
                    <li><Link href="/SearchBooks">🔍</Link></li>
                </ul>
            </nav>
        </header>
    );
}