import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizfillComponent } from './page-quizfill.component';

describe('PageQuizfillComponent', () => {
  let component: PageQuizfillComponent;
  let fixture: ComponentFixture<PageQuizfillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuizfillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuizfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
