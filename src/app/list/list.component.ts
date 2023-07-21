import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  data = this.BookService.list;
  searchResult = this.data;

  searchTerm: string = '';

  constructor(private BookService: BookService, private router: Router) {}

  edit(book: Book) {
    console.log('Book', book);
    this.router.navigate(['/edit-book/' + book.id]);
  }
  add() {
    this.router.navigate(['/add-book/']);
  }

  delete(id: number) {
    const books = this.BookService.deleteOne(id);
    this.data = books;
    this.searchResult = books;
  }

  // search by title
  search() {
    this.searchResult = this.data.filter((book) => {
      return book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
