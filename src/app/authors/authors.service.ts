import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";
import { Author } from "./author.model";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    constructor(private http: HttpClient) {

    }

    fetchAuthors() {
       return this.http.get<any>("https://api.quotable.io/authors?limit=10&skip=20").pipe(map(response => {
           let authors:Author[] = []
           response.results.forEach((element:any) => {
               const author = new Author(element._id, element.name, element.bio);
               authors.push(author)
           });
           return {
               ...response, results:authors
           }
       }));
    }
}