import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarListNewComponent } from './guitar-list-new.component';

describe('GuitarListNewComponent', () => {
  let component: GuitarListNewComponent;
  let fixture: ComponentFixture<GuitarListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarListNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
