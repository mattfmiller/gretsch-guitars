import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarFilterListComponent } from './guitar-filter-list.component';

describe('GuitarFilterListComponent', () => {
  let component: GuitarFilterListComponent;
  let fixture: ComponentFixture<GuitarFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
