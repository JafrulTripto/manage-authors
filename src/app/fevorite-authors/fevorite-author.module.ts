import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";
import { FevoriteAuthorsRoutingModule } from "./fevorite-author-routing.module";
import { FevoriteAuthorsComponent } from "./fevorite-authors.component";

@NgModule({
    declarations:[
        FevoriteAuthorsComponent,
    ],
    exports: [
        FevoriteAuthorsComponent,
    ],
    imports:[
        SharedModule,
        FevoriteAuthorsRoutingModule
    ]
})
export class FevoritehAuthorModule {

}