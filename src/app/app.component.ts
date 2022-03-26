import { AfterViewChecked, Component } from '@angular/core';
import { AuthorService } from './authors/authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'author-manager';
  isAuthorLoading = 0;
  constructor() {
      
  }

}
