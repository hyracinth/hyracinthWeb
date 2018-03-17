import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyraNavbarComponent } from './hyra-navbar.component';

describe('HyraNavbarComponent', () => {
  let component: HyraNavbarComponent;
  let fixture: ComponentFixture<HyraNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyraNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyraNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
