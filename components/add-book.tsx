import React, { useState } from 'react';
import { Book, AddBookProps } from '@/types';

const AddBook: React.FC<AddBookProps> = ({ onAdd, onCancel }) => {
    const [book, setBook] = useState<Book>({
      id: Date.now(),
      name: '',
      price: '',
      category: '',
      description: '',
    });
  
    const handleAddBook = () => {
      onAdd(book);
      setBook({
        id: Date.now(),
        name: '',
        price: '',
        category: '',
        description: '',
      });
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={book.category}
          onChange={(e) => setBook({ ...book, category: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
        />
        <button className='border-2 bg-blue-100' onClick={handleAddBook}>Add Book</button>
        <button className='border-2 bg-red-100' onClick={onCancel}>Cancel</button> {/* Add Cancel button */}
      </div>
    );
  };
  
  export default AddBook;