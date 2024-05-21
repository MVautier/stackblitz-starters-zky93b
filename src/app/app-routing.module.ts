import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "personnes",
    loadChildren: () => import('./person/person.module').then((mod) => mod.PersonModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "personnes"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
