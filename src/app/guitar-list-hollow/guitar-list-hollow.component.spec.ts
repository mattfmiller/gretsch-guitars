import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarListHollowComponent } from './guitar-list-hollow.component';

describe('GuitarListHollowComponent', () => {
  let component: GuitarListHollowComponent;
  let fixture: ComponentFixture<GuitarListHollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarListHollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarListHollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
