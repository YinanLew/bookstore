import React from 'react';
import { BooksProps } from '../types';

  const Books: React.FC<BooksProps> = ({ book, onEdit, onDelete, onClose }) => {
    return (
      <div>
        <h2>Book Details</h2>
        <div>
          <strong>Name:</strong> {book.name}
        </div>
        <div>
          <strong>Price:</strong> {book.price}
        </div>
        <div>
          <strong>Category:</strong> {book.category}
        </div>
        <div>
          <strong>Description:</strong> {book.description}
        </div>
        <button className='border-2 bg-green-100' onClick={onEdit}>Edit</button>
        <button className='border-2 bg-red-100' onClick={onDelete}>Delete</button>
        <button className='border-2 bg-blue-100' onClick={onClose}>Close</button> 
      </div>
    );
  };
  
  export default Books;
