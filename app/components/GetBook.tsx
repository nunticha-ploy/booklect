"use client"
import React, { useEffect, useState } from "react";
import "./page.css";

function GetBook({ click, setClick, setDetails }: { 
    click: boolean, 
    setClick: React.Dispatch<React.SetStateAction<boolean>>, 
    setDetails:  React.Dispatch<React.SetStateAction<{
    image: string;
    title: string;
    description: string;
    author: string;
    pages: number;
    pubDate: string;
    category: string;
    rating: string;}>> 
}) {
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

    const handleClick = (book:any) => {
        setDetails({
            image: book.imageLinks?.thumbnail || "/defaultCover.png",
            title: book.title || "No Title",
            description: book.description || "No Description",
            author: book.authors?.[0] || "Unknown",
            pages: book.pageCount || 0,
            pubDate: book.publishedDate || "Unknown",
            category: book.categories?.[0] || "Uncategorized",
            rating: book.maturityRating || "Unknown",
        });
        setClick(!click);
    }

    return (
        <main>
            <section className="containerSearch">
                <h1>Search Book</h1>
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
                            <li key={books.id} onClick={() => handleClick(books.volumeInfo)}>
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
            </section>
        </main>
    )

}

export default GetBook;