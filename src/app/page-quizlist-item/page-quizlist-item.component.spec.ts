import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizlistItemComponent } from './page-quizlist-item.component';

describe('PageQuizlistItemComponent', () => {
  let component: PageQuizlistItemComponent;
  let fixture: ComponentFixture<PageQuizlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuizlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuizlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
