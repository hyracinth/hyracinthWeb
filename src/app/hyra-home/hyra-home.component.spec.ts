import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyraHomeComponent } from './hyra-home.component';

describe('HyraHomeComponent', () => {
  let component: HyraHomeComponent;
  let fixture: ComponentFixture<HyraHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyraHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
