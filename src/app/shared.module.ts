import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthorItemComponent } from "./authors/author-item/author-item.component";

@NgModule({
    declarations:[
        AuthorItemComponent,
    ],
    exports: [
        AuthorItemComponent,
        CommonModule
    ],
    imports:[
        CommonModule
    ]
})
export class SharedModule {

}