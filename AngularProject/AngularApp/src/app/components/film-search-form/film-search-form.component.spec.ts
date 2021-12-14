import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSearchFormComponent } from './film-search-form.component';

describe('FilmSearchFormComponent', () => {
  let component: FilmSearchFormComponent;
  let fixture: ComponentFixture<FilmSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
