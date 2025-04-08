import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

export default function Footer() {
    return (
        <footer className="containerFooter">
                <ul className="footer">
                    {/* change it later*/}
                    <li><Link href="/">About Us</Link></li>
                    <li><Link href="/">Team</Link></li>
                    <li><Link href="/">Policy</Link></li>
                    <li><Link href="/">Feedback</Link></li>
                </ul>
                <ul className="footer socialNav">
                    {/* change icon later*/}
                    <li><Link href="https://www.facebook.com/profile.php?id=61574920897894 "><Image src="/facebook.png" alt="facebook logo" width={33} height={33} priority /></Link></li>
                    <li><Link href="https://www.instagram.com/booklect.ca?igsh=dG12cnNrdXdpOWxt&utm_source=qr"><Image src="/instagram.png" alt="instagram logo" width={33} height={33} priority /></Link></li>
                    <li><Link href="https://x.com/booklect_ca"><Image src="/x.png" alt="x logo" width={33} height={33} priority /></Link></li>
                </ul>
                <p>© 2025 Booklect. All Rights Reserved.</p>
        </footer>
    );
}


