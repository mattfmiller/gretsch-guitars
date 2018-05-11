import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarListArtistComponent } from './guitar-list-artist.component';

describe('GuitarListArtistComponent', () => {
  let component: GuitarListArtistComponent;
  let fixture: ComponentFixture<GuitarListArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarListArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarListArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
