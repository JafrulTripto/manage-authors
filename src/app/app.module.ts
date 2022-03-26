import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { FevoriteAuthorsComponent } from './fevorite-authors/fevorite-authors.component';
import { AuthorComponent } from './authors/authors.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthorItemComponent } from './authors/author-item/author-item.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    SidebarComponent,
    FevoriteAuthorsComponent,
    AuthorItemComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
