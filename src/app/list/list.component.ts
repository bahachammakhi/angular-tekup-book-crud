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
    // Navigate to edit book page with specific id
    this.router.navigate(['/edit-book/' + book.id]);
  }
  add() {
    // Navigate to add book page
    this.router.navigate(['/add-book/']);
  }

  delete(id: number) {
    // Runs delete method
    const books = this.BookService.deleteOne(id);
    // Affect the result to both data and search result
    this.data = books;
    this.searchResult = books;
  }

  // search by title
  search() {
    // Search by title and insure lowercase.
    this.searchResult = this.data.filter((book) => {
      return book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
