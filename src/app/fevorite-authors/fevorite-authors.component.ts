import { Component, OnInit } from '@angular/core';
import { Author } from '../authors/author.model';

@Component({
  selector: 'app-fevorite-authors',
  templateUrl: './fevorite-authors.component.html',
  styleUrls: ['./fevorite-authors.component.css']
})
export class FevoriteAuthorsComponent implements OnInit {

  fevoriteAuthors: Author[] = []
  constructor() { }

  ngOnInit(): void {
    this.fevoriteAuthors = JSON.parse( localStorage.getItem("authors") || "")
  }

}
