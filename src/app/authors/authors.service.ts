import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { Author } from "./author.model";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    private authorsArray: Author[];
    private storageSub = new Subject<string>();
    constructor(private http: HttpClient) {
        this.authorsArray = []
    }

    watchStorage(): Observable<any> {
        return this.storageSub.asObservable();
    }

    fetchAuthors(skip:number, limit:number) {
        return this.http.get<any>(`https://api.quotable.io/authors?limit=${limit}&skip=${skip}`).pipe(map(response => {
            let authors: Author[] = []
            response.results.forEach((element: any) => {
                const author = new Author(element._id, element.name, element.bio);
                authors.push(author)
            });
            return {
                ...response, results: authors
            }
        }));
    }

    fetchFevoriteAuthors(): Author[] {
        const authorsString = localStorage.getItem("authors");
        if (!authorsString) {
            return [];
        }
        this.authorsArray = JSON.parse(authorsString);
        //this.storageSub.next("added")
        return this.authorsArray;
    }

    addFevoriteAuthor(author: Author) {
        if (this.authorsArray) {
            this.authorsArray.push(author)
            localStorage.setItem("authors", JSON.stringify(this.authorsArray))
            this.storageSub.next("added")
            return
        }
        let authors: Author[] = []
        authors.push(author);
        localStorage.setItem("authors", JSON.stringify(authors))
    }

    removeFevoriteAuthors(author: Author) {
        let authorsArray = []
        authorsArray = this.authorsArray.filter(element => element._id !== author._id);
        localStorage.setItem('authors', JSON.stringify(authorsArray))
        this.storageSub.next("removed")
    }
}