import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertQuizComponent } from './alert-quiz.component';

describe('AlertQuizComponent', () => {
  let component: AlertQuizComponent;
  let fixture: ComponentFixture<AlertQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
