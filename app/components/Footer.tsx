import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

export default function Footer() {
    return (
        <footer className="containerFooterAll">
            <div className="containerFooter">
                <div className="contact">
                    <h3>Contact</h3>
                    <p>Booklect Headquarters 123 Story Lane, Suite 45 Toronto, Ontario M9C 1X5 Canada</p>
                    <p>booklect.ca@gmail.com</p>
                    <p>+1 (416) 123-4567
                        (Available Mon–Fri, 9AM–5PM EST)</p>
                </div>
                <div className="footerSection1">
                    <ul className="footer">
                        {/* change it later*/}
                        <li><Link href="/aboutUs">About Us</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/policy">Policy</Link></li>
                        <li><Link href="/feedback">Feedback</Link></li>
                    </ul>
                    <ul className="footer socialNav">
                        <li><Link href="https://www.facebook.com/profile.php?id=61574920897894 "><Image src="/facebook.png" alt="facebook logo" width={33} height={33} priority /></Link></li>
                        <li><Link href="https://www.instagram.com/booklect.ca?igsh=dG12cnNrdXdpOWxt&utm_source=qr"><Image src="/instagram.png" alt="instagram logo" width={33} height={33} priority /></Link></li>
                        <li><Link href="https://x.com/booklect_ca"><Image src="/x.png" alt="x logo" width={33} height={33} priority /></Link></li>
                    </ul>
                </div>
            </div>
            <p>© 2025 Booklect. All Rights Reserved.</p>
        </footer>
    );
}


