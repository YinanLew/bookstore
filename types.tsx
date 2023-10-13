export interface Book {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
  }

  export interface BookListProps {
    books: Book[];
    onDelete: (id: number) => void;
    onView: (book: Book) => void;
}

export interface AddBookProps {
  onAdd: (book: Book) => void;
  onCancel: () => void;
}

export interface EditBookProps {
  book: Book | null;
  onSave: (book: Book) => void;
  onCancel: () => void;
}

export interface BooksProps {
  book: Book;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void; 
}
