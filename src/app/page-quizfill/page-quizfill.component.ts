import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-quizfill',
  templateUrl: './page-quizfill.component.html',
  styleUrls: ['./page-quizfill.component.css'],
  inputs: ['qid']
})
export class PageQuizfillComponent implements OnInit {

  qid : string;

  constructor() { }

  ngOnInit() {
  }

}
