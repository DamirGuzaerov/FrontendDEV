import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmSearchFormComponent} from "./components/film-search-form/film-search-form.component";
import {FilmViewComponent} from "./components/film-view/film-view.component";
import {HomeComponent} from "./pages/home/home.component";
import {FilmCreateFormComponent} from "./components/film-create-form/film-create-form.component";


const routes: Routes = [
  { path: '', component: FilmSearchFormComponent },
  { path: 'film/:id', component: FilmViewComponent},
  { path: 'edit', component: FilmCreateFormComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
