import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLeaderboardComponent } from './page-leaderboard.component';

describe('PageLeaderboardComponent', () => {
  let component: PageLeaderboardComponent;
  let fixture: ComponentFixture<PageLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
