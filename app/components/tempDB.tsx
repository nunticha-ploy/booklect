type Book = {
    id: number;
    image: string;
    title: string;
    description: string;
    author: string;
    pages: number;
    pubDate: string;
    category: string;
    rating: string;
  }

const books_read: Book[] = [];
  
const books_reading: Book[] = [];

const books_toread: Book[] = [];

export { books_read, books_reading, books_toread };