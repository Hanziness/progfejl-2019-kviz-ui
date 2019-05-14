import { Component, OnInit } from '@angular/core';

// interface QuizDescriptor {
//   title : string,
//   numQuestions : number,
//   qId : string  // quiz ID (for leaderboard reference)
// }

@Component({
  selector: 'app-page-quizlist-item',
  templateUrl: './page-quizlist-item.component.html',
  styleUrls: ['./page-quizlist-item.component.css'],
  inputs: [ 'qid', 'numquestions', 'title' ]
})
export class PageQuizlistItemComponent implements OnInit {

  /*
  quiz : QuizDescriptor = {
    title: 'Ismeretlen',
    numQuestions: 0,
    qId : "asd"
  };
  */
  qid : String;
  numquestions : number;
  title : String;

  constructor() { }

  ngOnInit() {
  }

}
