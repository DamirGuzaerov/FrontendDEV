import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Film, FilmService} from "../../services/film.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Genre} from "../genre-search/genre-search.component";
@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmViewComponent implements OnInit {

  film: Film  = {genre:[]};
  formGroup:FormGroup;
  constructor(
    private activateRoute: ActivatedRoute,
    private filmService:FilmService,
    private formBuilder:FormBuilder)
  {
    let film = this.filmService.getFilmById(activateRoute.snapshot.params['id']);
    if(film != undefined)
      this.film = film;
    this.formGroup = formBuilder.group({
      nameInput: [this.film?.name],
      descriptionInput:[this.film?.description],
      yearInput:[this.film?.year],
    });
  }

  ngOnInit() {
  }

  addNewGenre(genres:Array<Genre>){
    this.film.genre = genres;
  }

  saveChanges(){
    this.film.name = this.formGroup.get('nameInput')?.value;
    this.film.year = this.formGroup.get('yearInput')?.value;
    this.film.description = this.formGroup.get('descriptionInput')?.value;
  }
}
