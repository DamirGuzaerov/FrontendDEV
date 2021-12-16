import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-film-search-form',
  templateUrl: './film-search-form.component.html',
  styleUrls: ['./film-search-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmSearchFormComponent implements OnInit {

  form:FormGroup;

  films$ = this.filmService.films$;

  constructor(private formBuilder:FormBuilder,
              private  filmService:FilmService) {
    this.form = formBuilder.group({
      searchInput:[],
    });

    this.form.get('searchInput')?.valueChanges.subscribe(res=>this.filmService.searchFilm(res))
  }

  ngOnInit(): void {
  }

}
