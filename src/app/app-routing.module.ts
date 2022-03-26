import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorComponent } from "./authors/authors.component";

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
        path:"fevorite-authors",
        loadChildren:() => import('./fevorite-authors/fevorite-author.module').then(x => x.FevoritehAuthorModule)
    }
    
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}