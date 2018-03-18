import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyraProjectsComponent } from './hyra-projects.component';

describe('HyraProjectsComponent', () => {
  let component: HyraProjectsComponent;
  let fixture: ComponentFixture<HyraProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyraProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyraProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
