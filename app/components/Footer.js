import Link from "next/link";
import Image from "next/image";
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
                <ul className={`${styles.nav} ${styles.socialNav}`}>
                    {/* change icon later*/}
                    <li><Link href="/fb"><Image src="/facebook.png" alt="facebook logo" width={33} height={33} priority /></Link></li>
                    <li><Link href="/ig"><Image src="/instagram.png" alt="instagram logo" width={33} height={33} priority /></Link></li>
                    <li><Link href="/x"><Image src="/twitter.png" alt="twitter logo" width={33} height={33} priority /></Link></li>
                </ul>
                <p>© 2025 Booklect. All Rights Reserved.</p>
        </footer>
    );
}


