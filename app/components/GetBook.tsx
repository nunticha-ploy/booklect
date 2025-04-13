"use client"
import React, { useEffect, useState } from "react";
import "./page.css";

function GetBook() {
    const [books, setBooks] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    //make it private (API key in .env >> gitignore)
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=0&maxResults=40&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();

                setBooks(data.items);
                setError(null);
            } catch (error: any) {
                setError(error.message);
            }
        }
        if (search) {
            fetchBook();
        }

    }, [search]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSearchClick = () => {
        setSearch(input);
    }

    return (
        <div>
            <div className="searchPlaceholder">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearchClick();
                        }
                    }}
                    placeholder="Enter book title" />

                <button onClick={handleSearchClick}>Search</button>
            </div>

            <ul className="searchBookContainer">
                {books?.map((books) => (
                    <li key={books.id}>
                        <img
                            src={books.volumeInfo.imageLinks?.thumbnail || "/defaultCover.png"}
                            alt={books.volumeInfo.title}
                            loading="lazy"
                        />
                        <h3>{books.volumeInfo.title}</h3>
                    </li>
                ))}
            </ul>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

        </div>
    )

}

export default GetBook;