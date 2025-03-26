import Link from "next/link";
import styles from "./page.module.css";

export default function Footer() {
    return (
        <footer className={styles.containerFooter}>
                <ul className={styles.nav}>
                    {/* change it later*/}
                    <li><Link href="/">About Us</Link></li>
                    <li><Link href="/">Team</Link></li>
                    <li><Link href="/">Policy</Link></li>
                    <li><Link href="/">Feedback</Link></li>
                </ul>
                <ul className={styles.nav}>
                    {/* change icon later*/}
                    <li><Link href="/fb">🔍</Link></li>
                    <li><Link href="/ig">🔍</Link></li>
                    <li><Link href="/x">🔍</Link></li>
                </ul>
                <p>© 2025 Booklect. All Rights Reserved.</p>
        </footer>
    );
}