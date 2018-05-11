import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarDetailComponent } from './guitar-detail.component';

describe('GuitarDetailComponent', () => {
  let component: GuitarDetailComponent;
  let fixture: ComponentFixture<GuitarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
