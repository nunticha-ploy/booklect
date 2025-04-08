"use client"
import React, { useEffect, useState } from "react";

function GetBook() {
    const [books, setBooks] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();

                console.log(process.env.REACT_APP_GOOGLE_API_KEY) 

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

            <ul>
                {books?.map((books) => (
                    <li key={books.id}>
                        <h3>{books.volumeInfo.title}</h3>
                        <img
                            src={books.volumeInfo.imageLinks?.thumbnail}
                            alt={books.volumeInfo.title}
                        />
                    </li>
                ))}
            </ul>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

        </div>
    )

}

export default GetBook;