import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {FilmService} from "../../services/film.service";


@Component({
  selector: 'app-film-preview-card',
  templateUrl: './film-preview-card.component.html',
  styleUrls: ['./film-preview-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmPreviewCardComponent implements OnInit {

  @Input() id :number=0;
  @Input() previewImg:string = "";
  @Input() previewText:string ="Фильм не найден";
  @Input() year:string="";

  films$ = this.filmService.films$;

  constructor(private  filmService:FilmService) {}

  ngOnInit(): void {
  }



}
