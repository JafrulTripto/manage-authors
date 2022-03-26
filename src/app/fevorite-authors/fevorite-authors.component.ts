import { Component, OnInit } from '@angular/core';
import { Author } from '../authors/author.model';
import { AuthorService } from '../authors/authors.service';

@Component({
  selector: 'app-fevorite-authors',
  templateUrl: './fevorite-authors.component.html',
  styleUrls: ['./fevorite-authors.component.css']
})
export class FevoriteAuthorsComponent implements OnInit {

  fevoriteAuthors: Author[] = []
  authorService:AuthorService;
  constructor(authorService:AuthorService) {
    this.authorService = authorService
   }

  ngOnInit(): void {
    this.authorService.watchStorage().subscribe((data:string) => {
      // this will call whenever your localStorage data changes
      // use localStorage code here and set your data here for ngFor
      console.log(data);
      
      this.fevoriteAuthors = this.authorService.fetchFevoriteAuthors();
      console.log(this.fevoriteAuthors);
      
    })
    this.fevoriteAuthors = this.authorService.fetchFevoriteAuthors();
  }

}
