import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyraProjectsNavbarComponent } from './hyra-projects-navbar.component';

describe('HyraProjectsNavbarComponent', () => {
  let component: HyraProjectsNavbarComponent;
  let fixture: ComponentFixture<HyraProjectsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyraProjectsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyraProjectsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
