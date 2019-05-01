import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizlistComponent } from './page-quizlist.component';

describe('PageQuizlistComponent', () => {
  let component: PageQuizlistComponent;
  let fixture: ComponentFixture<PageQuizlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuizlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuizlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
