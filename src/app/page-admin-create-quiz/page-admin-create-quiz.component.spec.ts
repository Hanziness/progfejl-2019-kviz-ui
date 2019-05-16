import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminCreateQuizComponent } from './page-admin-create-quiz.component';

describe('PageAdminCreateQuizComponent', () => {
  let component: PageAdminCreateQuizComponent;
  let fixture: ComponentFixture<PageAdminCreateQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminCreateQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminCreateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
