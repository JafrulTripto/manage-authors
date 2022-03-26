import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FevoriteAuthorsComponent } from "./fevorite-authors.component";

const appRoutes: Routes = [

    {
        path:'',
        component: FevoriteAuthorsComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class FevoriteAuthorsRoutingModule {

}