"use client"
import React from "react";
import Image from "next/image";
import "./page.css";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="containerHeader" >
            <div>
                <Image src="/booklect_logo2.png" alt="booklect logo" width={190} height={67} priority />
            </div>
            <nav>
                <Navbar />
            </nav>
        </header >
    );
}




