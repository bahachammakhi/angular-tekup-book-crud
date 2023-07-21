import { Component } from '@angular/core';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  book: Book = {
    id: -1,
    title: '',
    author: '',
    editor: '',
    publishDate: new Date(),
  };
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private BookService: BookService
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params) => {
      const id = params.get('bookId');
      const book = this.BookService.getById(Number(id));
      if (book) {
        this.book = book;
        return;
      }
      this.router.navigate(['/list']);
    });
  }
  edit() {
    const newBook = {
      ...this.book,
      id: Number(this.book.id),
    };
    this.BookService.updateOne(newBook);
    this.router.navigate(['/list']);
  }
}
