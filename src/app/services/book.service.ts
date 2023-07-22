import { Injectable } from '@angular/core';
import { Book } from '../models/book';

/**
 * Service implementation to manage book crud
 */

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  /**
   * Initialized Data
   *
   * @type {Book[]}
   * @memberof BookService
   */
  list: Book[] = [
    {
      id: 1,
      title: 'Learn JS',
      author: 'Baha eddine chammakhi',
      editor: 'Baha eddine chammakhi',
      publishDate: new Date(),
    },
  ];

  /**
   * Get a book by id
   * @param id book id
   * @returns
   */
  getById(id: number) {
    return this.list.find((book) => book.id === id);
  }

  /**
   * Add a new book to the list
   * @param book
   * @returns
   */
  addOne(book: Book) {
    this.list.push({ ...book, publishDate: new Date() });
    return this.list;
  }

  filterById(id: number) {
    return this.list.filter((_book) => _book.id !== id);
  }

  deleteOne(id: number) {
    const books = this.filterById(id);
    this.list = books;
    return books;
  }

  /**
   * Updates specific book
   * @param book
   */
  updateOne(book: Book) {
    // get the list without the updated book
    const books = this.filterById(book.id);
    // add the book to the new list.
    this.list = [...books, book];
  }
}
