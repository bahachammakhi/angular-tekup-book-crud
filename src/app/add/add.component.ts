import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private BookService: BookService, private router: Router) {}

  create(book: Book) {
    // Ensure that the book id is a number
    const newBook = {
      ...book,
      id: Number(book.id),
    };
    // Add the book
    this.BookService.addOne(newBook);
    this.router.navigate(['/list']);
  }
}
