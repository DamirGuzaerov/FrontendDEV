import {Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, Output,EventEmitter} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {OverlayPositionBuilder} from "@angular/cdk/overlay";

export interface Genre{
  label:string,
  value:string
}
export const Genres :Array<Genre>= [
  {
    label:"Фэнтези",
    value:"Fantasy"
  },
  {
    label:"Комедия",
    value:"Comedy"
  },
  {
    label:"Боевик",
    value:"Action"
  },
  {
    label:"Ужасы",
    value:"Horror"
  },
  {
    label:"Приключения",
    value:"Adventures"
  },
  {
    label:"Детектив",
    value:"Detective"
  },
  {
    label:"Драма",
    value:"Drama"
  },

]
@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => GenreSearchComponent),
    }
  ]
})
export class GenreSearchComponent implements ControlValueAccessor  {

  inputSearch:FormControl = new FormControl("");
  name = "Жанр";
  genres: Array<Genre> = [];

  @Input() selectedGenres :Array<Genre> = [];
  @Output() newItemEvent = new EventEmitter<Array<Genre>>();

  overlayIsOpen:boolean= false;
  constructor() {
    this.inputSearch.valueChanges.subscribe(value => {

      if(!value||value.length<1){
        this.genres = [];
        this.overlayIsOpen = false;
        return;
      }
      this.overlayIsOpen=true;
      this.genres=Genres.filter(genre=> genre.label.startsWith(value))
    })
  }

  ngOnInit(): void {
  }


  selectGenre(genre :Genre){
    if(!this.selectedGenres.includes(genre)){
      this.selectedGenres.push(genre)
      this.newItemEvent.emit(this.selectedGenres)
    }
    this.overlayIsOpen = false;
    this.inputSearch.reset();
  }

  close():void{
    this.genres = [];
    this.overlayIsOpen = false;
  }

  removeGenre(genre:Genre) {
    this.selectedGenres = this.selectedGenres.filter(selectedGenre =>selectedGenre.value!==genre.value);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }
}
