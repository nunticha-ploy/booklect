"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

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
    const router = useRouter();

    //make it private (API key in .env >> gitignore)
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

                console.log(data.items)

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
            image: book.imageLinks.thumbnail,
            title: book.title,
            description: book.description,
            author: book.authors[0],
            pages: book.pageCount,
            pubDate: book.publishedDate,
            category: book.categories[0],
            rating: book.maturityRating,
        });
        setClick(!click);
    }

    return (
        <main>
            <section className="containerSearch">
                <h1>Search Book</h1>
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
                            <li key={books.id} onClick={() => handleClick(books.volumeInfo)}>
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
            </section>
        </main>
    )

}

export default GetBook;