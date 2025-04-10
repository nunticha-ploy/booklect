"use client"
import Book from "./BookProvider";
import GetBook from "./GetBook";
import React, { useState } from "react";

export default function GetBookPorvider(){
        const [book, setBook] = useState<any[]>([]);

        return(
            <Book.Provider value={{book, setBook}}>
                <GetBook/>
            </Book.Provider>
        )
}