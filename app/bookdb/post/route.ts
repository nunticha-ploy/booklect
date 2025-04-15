import { NextResponse } from "next/server";
import { PrismaClient } from './client/client';

const prisma = new PrismaClient();

//function for posting a book to a 'read' table
export async function POST(req: Request){
    try{
        const {image, title, description, author, pages, pubDate, category, rating, tablename} = await req.json();

        if (!image || !title || !description || !author || !pages || !pubDate || !category || !rating || !tablename){
            return NextResponse.json({ error: "Required field were not provided" }, { status: 400 });
        }

        //depending on the tablename add book the the reqested table

        if (tablename == "tbr"){
            const newBook = await prisma.toRead.create({
                data: {image, title, description, author, pages, pubDate, category, rating},
            })
            return NextResponse.json(newBook, { status: 201 });
        } else if (tablename=="read"){
            const newBook = await prisma.read.create({
                data: {image, title, description, author, pages, pubDate, category, rating},
            })
    
            return NextResponse.json(newBook, { status: 201 });

        } else {
            const newBook = await prisma.inProgress.create({
                data: {image, title, description, author, pages, pubDate, category, rating},
            })
    
            return NextResponse.json(newBook, { status: 201 });
        }


    } catch (error) {

        return NextResponse.json({ error: "Failed to create book" }, { status: 500 });
      
       }};


// function for retrieving all the books from the specified table = "tbr", "read" or other

/*
I didn't test it, so txt me if it throws any issues (but im not sure if I know the answer lol)
To fetch all the book from the table you sould to a fetch inside try catch block, and in the body pass the name of the table
its 'tbr', 'read' or other (whatever u wanna call it, in the if else its not specified)
*/
export async function GET(req: Request) {
    const {tablename} = await req.json();
    try {
    if (tablename=="tbr"){
        const books = await prisma.toRead.findMany();
        return NextResponse.json(books);

    } else if (tablename=="read"){
        const books = await prisma.read.findMany();
        return NextResponse.json(books);
    } else {
        const books = await prisma.inProgress.findMany();
        return NextResponse.json(books);
    }
  
    } catch (error) {
     return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
    }};