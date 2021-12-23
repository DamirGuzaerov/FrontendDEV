import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ToggleBtnComponent } from './components/toggle-btn/toggle-btn.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FilmSearchFormComponent } from './components/film-search-form/film-search-form.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FilmPreviewCardComponent } from './components/film-preview-card/film-preview-card.component';
import { FilmViewComponent } from './components/film-view/film-view.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import {OverlayModule} from "@angular/cdk/overlay";
import { FilmCreateFormComponent } from './components/film-create-form/film-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ToggleBtnComponent,
    FilmSearchFormComponent,
    TextInputComponent,
    FilmPreviewCardComponent,
    FilmViewComponent,
    GenreSearchComponent,
    FilmCreateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
