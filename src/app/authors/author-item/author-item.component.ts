import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {

  @Input() author!:Author;
  constructor() { }

  ngOnInit(): void {
  }

  addToFevorite(author: Author) {
    const authorsString = localStorage.getItem("authors");
    if (authorsString) {
      const authorsArray:Author[] =  JSON.parse(authorsString);
      const alreadyExist = authorsArray.filter(element => element._id === author._id).length > 0
      if (alreadyExist) {
        return
      }
      authorsArray.push(author)

      console.log(authorsArray);
      
      localStorage.setItem("authors", JSON.stringify(authorsArray))
      return
    } 
    
    
    let authors:Author[] = []
    authors.push(author);
    localStorage.setItem("authors", JSON.stringify(authors))
    
  }

}
