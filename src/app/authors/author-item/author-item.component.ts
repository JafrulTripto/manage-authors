import { Component, Input, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Author } from '../author.model';
import { AuthorService } from '../authors.service';
@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {

  @Input() author!: Author;
  private readonly notifier: NotifierService;
  private authorService: AuthorService;
  private fevoriteAuthors:Author[] = [];
  
  constructor(notifierService: NotifierService, authorService: AuthorService) {
    this.notifier = notifierService;
    this.authorService = authorService
  }

  ngOnInit(): void {
    this.fevoriteAuthors = this.authorService.fetchFevoriteAuthors();
    this.authorService.watchStorage().subscribe((data:string) => {
      this.fevoriteAuthors = this.authorService.fetchFevoriteAuthors(); 
    })
  }
  addToFevorite(author: Author) {
    this.authorService.addFevoriteAuthor(author);
    this.notifier.notify('success', 'Success: Author added to fevorite!!!');
  }
  fevoriteAuthorExists(author: Author) {
    return this.fevoriteAuthors.filter(element => element._id === author._id).length > 0
  }

  onRemoveFevorite(author:Author) {
    this.authorService.removeFevoriteAuthors(author);
    this.notifier.notify('error', 'Author removed form fevorite!!!');
  }




}
