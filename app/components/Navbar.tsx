import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>

            {/* Desktop Menu */}
            <ul className="nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/">My books</Link></li>
                <li className="navIcon"><Link href="/Searchbooks"><Image src="/search.png" alt="search icon" width={24} height={24} priority /></Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="navMobileButton">≡</button>

            {/* Mobile Dropdown Menu*/}
            <div className={`navMobile ${isOpen ? "active" : ""}`}>
            <ul className="navDrop" >
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Dashboard</Link></li>
                <li><Link href="/">My books</Link></li>
                <li><Link href="/Searchbooks">Search book</Link></li>
            </ul>
            </div>
        </nav>
    )
}
