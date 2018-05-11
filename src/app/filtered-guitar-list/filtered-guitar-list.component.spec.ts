import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredGuitarListComponent } from './filtered-guitar-list.component';

describe('FilteredGuitarListComponent', () => {
  let component: FilteredGuitarListComponent;
  let fixture: ComponentFixture<FilteredGuitarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredGuitarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredGuitarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
