import { BookListProps } from '@/types';


const BookList: React.FC<BookListProps> = ({ books, onDelete, onView }) => {
    return (
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <span>{book.name}</span>
            <span>{book.price}</span>
            <span>{book.category}</span>
            <button className='border-2 bg-red-100' onClick={() => onDelete(book.id)}>Delete</button>
            <button className='border-2 bg-blue-100' onClick={() => onView(book)}>View</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default BookList;