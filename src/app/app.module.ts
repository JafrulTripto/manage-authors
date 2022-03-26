import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorComponent } from './authors/authors.component';
import {HttpClientModule} from '@angular/common/http';
import {NotifierModule} from 'angular-notifier'
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    SidebarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NotifierModule.withConfig({
      behaviour: {
        autoHide: 2000,
      },
      position:{
        horizontal:{
          position:"right"
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
