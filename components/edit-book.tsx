import React, { useState } from 'react';
import { Book, EditBookProps } from '../types';

const EditBook: React.FC<EditBookProps> = ({ book, onSave, onCancel }) => {
    const [editedBook, setEditedBook] = useState<Book | null>(book); 
  
    if (!editedBook) {
      return null;
    }
  
    const handleSave = () => {
      onSave(editedBook);
    };
  
    return (
      <div>
        <h2>Edit Book</h2>
        <input
          type="text"
          placeholder="Name"
          value={editedBook.name}
          onChange={(e) => setEditedBook({ ...editedBook, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={editedBook.price}
          onChange={(e) => setEditedBook({ ...editedBook, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={editedBook.category}
          onChange={(e) => setEditedBook({ ...editedBook, category: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={editedBook.description}
          onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
        />
        <button className='border-2 bg-blue-100' onClick={handleSave}>Save</button>
        <button className='border-2 bg-red-100' onClick={onCancel}>Cancel</button>
      </div>
    );
  };
  
  export default EditBook;
