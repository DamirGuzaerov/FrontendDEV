import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-film-preview-card',
  templateUrl: './film-preview-card.component.html',
  styleUrls: ['./film-preview-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmPreviewCardComponent implements OnInit {

  @Input() previewImg:string = "";
  @Input() previewText:string ="Фильм не найден";
  @Input() year:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
