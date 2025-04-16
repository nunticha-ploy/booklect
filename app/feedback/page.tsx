"use client"

import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/page.css";
import '../globals.css';
import styles from "./page.module.css";

export default function FeedbackPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert("Thank you for the feedback!");
    };

    return (
        <div>
            <Header />
            <main>
                <div className={styles.container}>
                    <h1>Feedback</h1>
                    <div className="searchPlaceholder">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:            &nbsp;
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Email:            &nbsp;
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Message:            &nbsp;
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </label>
                            <br />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}