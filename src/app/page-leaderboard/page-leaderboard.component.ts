import { Component, OnInit } from '@angular/core';
import { ServiceUserService, LeaderboardEntry } from '../service-user.service';

@Component({
  selector: 'app-page-leaderboard',
  templateUrl: './page-leaderboard.component.html',
  styleUrls: ['./page-leaderboard.component.css']
})
export class PageLeaderboardComponent implements OnInit {

  leaderBoardList : LeaderboardEntry[] = [];

  constructor(private userService : ServiceUserService) { }

  ngOnInit() {
    this.userService.getLeaderBoard().subscribe((data) => {
      data.forEach(element => {
        this.leaderBoardList.push({
          username: element.username,
          score: element.pontszam
        });
      });
    })
  }

}
