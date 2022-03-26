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
  public loading = false;
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.onFetchAuthors ()
  }

  onFetchAuthors () {
    this.loading = true;
    this.authorService.fetchAuthors().subscribe(authors => {
      this.authors = authors.results;
      this.loading = false;  
    });
  }

}
