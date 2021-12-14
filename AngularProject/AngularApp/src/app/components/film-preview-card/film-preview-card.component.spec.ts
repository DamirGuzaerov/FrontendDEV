import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPreviewCardComponent } from './film-preview-card.component';

describe('FilmPreviewCardComponent', () => {
  let component: FilmPreviewCardComponent;
  let fixture: ComponentFixture<FilmPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
