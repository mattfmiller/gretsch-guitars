import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkListComponent } from './social-link-list.component';

describe('SocialLinkListComponent', () => {
  let component: SocialLinkListComponent;
  let fixture: ComponentFixture<SocialLinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
