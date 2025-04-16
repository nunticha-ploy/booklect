import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import './aboutUs.css';
import '../globals.css';

export default function Home() {
    return (
        <div>
            <Header />
            <section className="mainContainer">
                <div className="headerContainer">
                    <div>Many Books?</div>
                    <div>One <span>Booklect</span></div>
                </div>
                <div className="descContainer">
                    <div className="descOne">Your reading journey on a single webpage.</div>
                    <div className="descTwo">A work of three computer science students to give you an elavated reader experience.</div>
                </div>
            </section>
            <Footer />
        </div>
    )
}