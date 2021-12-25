import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Genre} from "../components/genre-search/genre-search.component";


export interface Film{
  id?:number,
  name?:string,
  description?:string,
  imgUrl?:string,
  year?:string,
  link?:string,
  genre:Array<Genre>
}

export const FilmsMock:Array<Film> = [
  {
    id: 0,
    name:'Фильм не найден',
    link:'Добавьте его вручную',
    imgUrl:'/assets/images/emptyFilm.png',
    genre:[]
  },
  {
    id: 1,
    name:'Довод',
    year:'2020',
    imgUrl:'/assets/images/Dovlatov.png',
    description:'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана. ',
    genre:[
      {
      label:"Боевик",
        value:"Action"
      },
      {
        label:"Фантастика",
        value:"Fantasy"
      },
      ]
  },
  {
    id: 2,
    name:'Довакин',
    year:'2021',
    imgUrl:'/assets/images/Dovlatov.png',
    description:'Последний драконорожденный от которого зависит судьба всего Тамриэля',
    genre:[
      {
        label:"Боевик",
        value:"Action"
      },
      {
        label:"Фэнтези",
        value:"Fantasy"
      },
      {
        label:"Приключения",
        value:"Adventures"
      },
    ]
  },
  {
    id: 3,
    name:'Смешарики',
    year:'2008',
    imgUrl:'/assets/images/Dovlatov.png',
    genre:[
      {label:"Комедия",
      value:"Comedy"}
    ]
  },
  {
    id: 4,
    name:'Скайрим',
    year:'2021',
    imgUrl:'/assets/images/Dovlatov.png',
    genre:[
      {
        label:"Боевик",
        value:"Action"
      },
      {
        label:"Фэнтези",
        value:"Fantasy"
      },
      {
        label:"Приключения",
        value:"Adventures"
      },
    ]
  }

]

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  films$: BehaviorSubject<Array<Film>> = new BehaviorSubject<Array<Film>>([]);

  constructor() { }

  searchFilm(name:string){
    if(name.length===0){
      this.films$.next([]);
      return;
    }
    const Film = FilmsMock.filter(film=>film.name?.startsWith(name))

    if(Film.length ===0){
      this.films$.next(FilmsMock.filter(film=>film.id===0));
      return;
    }
    this.films$.next(Film)
  }

  getFilmById(id:number): Film | undefined{
    return FilmsMock.find(film=>film.id == id);
  }

  addNewFilm(film:Film): void{
    film.id = FilmsMock.length;
    film.imgUrl = '/assets/images/Dovlatov.png';
    console.log(film)
    FilmsMock.push(film);
  }
}
