import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Author } from './author.model';
import { AuthorService } from './authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorComponent implements OnInit {

  public authors: Author[] = []
  public pageNumber = 0;
  public lastItemIndex = 0;
  public count = 9
  public loading = false;
  public totalPages = 0;
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.onFetchAuthors()
  }

  onFetchAuthors() {
    this.loading = true;
    this.authorService.fetchAuthors(this.lastItemIndex, this.count).subscribe(authors => {
      this.pageNumber = authors.page
      this.totalPages = authors.totalPages
      this.lastItemIndex = authors.lastItemIndex;
      this.authors = authors.results;
      this.loading = false;
    });
  }

  nextPage() {
    if (this.pageNumber< this.totalPages) {
      this.onFetchAuthors();
    }
  }
  previousPage() {
    if (this.pageNumber > 1) {
      this.lastItemIndex = this.lastItemIndex - this.count * 2;
      this.onFetchAuthors()
    }
  }
}
