import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  list: Book[] = [
    {
      id: 1,
      title: 'Learn JS',
      author: 'Baha eddine chammakhi',
      editor: 'Baha eddine chammakhi',
      publishDate: new Date(),
    },
  ];

  getById(id: number) {
    return this.list.find((book) => book.id === id);
  }
  addOne(book: Book) {
    this.list.push({ ...book, publishDate: new Date() });
    return this.list;
  }

  deleteOne(id: number) {
    const books = this.list.filter((_book) => _book.id !== id);
    console.log('Books', books);
    this.list = books;
    return books;
  }
  updateOne(uBook: Book) {
    const i = this.list.indexOf(uBook);
    this.list[i] = uBook;
  }
}
