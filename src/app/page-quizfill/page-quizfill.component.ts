import { Component, OnInit } from '@angular/core';
import { Question, ServiceQuizService } from '../service-quiz.service';

@Component({
  selector: 'app-page-quizfill',
  templateUrl: './page-quizfill.component.html',
  styleUrls: ['./page-quizfill.component.css'],
  inputs: ['qid']
})
export class PageQuizfillComponent implements OnInit {

  objectKeys = Object.keys;

  qid : string;
  quizForm : Record<string, Question>;

  constructor(private quizService : ServiceQuizService) { }

  ngOnInit() {
    this.quizForm = this.quizService.getQuizForm(this.qid);
  }

}
