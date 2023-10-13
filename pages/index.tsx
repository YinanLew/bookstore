import React, { useState } from 'react';
import Head from 'next/head';
import BookList from '@/components/book-list';
import AddBook from '@/components/add-book';
import Books from '@/components/books';
import EditBook from '@/components/edit-book';
import { Book } from '../types';


const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddBook = (newBook: Book) => {
    setBooks([...books, newBook]);
    setShowAddPopup(false);
  };

  const handleEditBook = (editedBook: Book) => {
    const updatedBooks = books.map((book) => (book.id === editedBook.id ? editedBook : book));
    setBooks(updatedBooks);
    setShowEditPopup(false);
  };

  const handleDeleteBook = (bookId: number) => {
    setBooks(books.filter((book) => book.id !== bookId));
    setShowDetails(false); 
  };

  const handleOpenDetails = (book: Book) => {
    setSelectedBook(book);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
    setShowDetails(false);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <Head>
        <title>Bookstore</title>
        <meta name="description" content="Bookstore App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bookstore</h1>
        <button onClick={() => setShowAddPopup(true)}>Add Book</button>
        <BookList books={books} onView={handleOpenDetails} onDelete={handleDeleteBook} />
        {showAddPopup && <AddBook onAdd={handleAddBook} onCancel={() => setShowAddPopup(false)} />}
        {showDetails && selectedBook && (
          <Books
            book={selectedBook}
            onEdit={() => setShowEditPopup(true)}
            onDelete={() => handleDeleteBook(selectedBook.id)}
            onClose={handleCloseDetails}
          />
        )}
        {showEditPopup && (
          <EditBook
            book={selectedBook}
            onSave={handleEditBook}
            onCancel={() => setShowEditPopup(false)}
          />
        )}
      </main>

      <footer>
        <p>© {new Date().getFullYear()}, Bookstore</p>
      </footer>
    </div>
  );
};

export default Home;
