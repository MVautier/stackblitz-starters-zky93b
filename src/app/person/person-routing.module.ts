import { RouterModule, Routes } from "@angular/router";
import { PersonListComponent } from "./person-list/person-list.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: "",
    component: PersonListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}