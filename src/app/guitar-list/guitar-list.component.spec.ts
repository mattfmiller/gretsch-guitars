import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarListComponent } from './guitar-list.component';

describe('GuitarListComponent', () => {
  let component: GuitarListComponent;
  let fixture: ComponentFixture<GuitarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
