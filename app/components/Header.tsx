import Link from "next/link";
import Image from "next/image";
import "./page.css";

export default function Header() {
    return (
        <header className="containerHeader" >
            {/* change text to logo*/}
            <div>
                Booklect.
            </div>
            <nav>
                <ul className="nav">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Dashboard">Dashboard</Link></li>
                    <li><Link href="/MyBooks">My books</Link></li>
                    {/* change emoji to icon later*/}
                    <li className="navIcon"><Link href="/SearchBooks"><Image src="/search.png" alt="search icon" width={24} height={24} priority /></Link></li>
                </ul>
            </nav>
        </header>
    );
}
