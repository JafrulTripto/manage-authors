import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorComponent } from "./authors/authors.component";
import { FevoriteAuthorsComponent } from "./fevorite-authors/fevorite-authors.component";

const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'/authors',
        pathMatch: "full"
    },
    {
        path:'authors', 
        component: AuthorComponent
    },
    {
        path:'fevorite-authors',
        component: FevoriteAuthorsComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}