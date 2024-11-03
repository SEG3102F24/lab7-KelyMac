import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorsService } from '../service/authors.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorId: string = '';
  author: any;
  authorNotFound: boolean = false;

  constructor(private authorsService: AuthorsService) {}

  searchAuthor() {
    this.authorsService.getAuthorById(this.authorId).subscribe(
      (data: any) => {
        this.author = data;
        this.authorNotFound = false;
      },
      (error: any) => {
        this.author = null;
        this.authorNotFound = true;
      }
    );
  }
}

