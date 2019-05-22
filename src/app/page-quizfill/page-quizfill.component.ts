import { Component, OnInit } from '@angular/core';
import { Question, ServiceQuizService } from '../service-quiz.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-page-quizfill',
  templateUrl: './page-quizfill.component.html',
  styleUrls: ['./page-quizfill.component.css']
})
export class PageQuizfillComponent implements OnInit {

  objectKeys = Object.keys;

  qid : string;
  quizForm : Record<string, Question> = {};
  quizTitle : string = "";

  constructor(private quizService : ServiceQuizService, private actRoute : ActivatedRoute) { 
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.qid = params['quizId'];
      this.quizService.getQuizForm(this.qid).subscribe((data : any) => {
        console.debug(this.qid);
        console.debug(data);
        this.quizForm = data.kerdesek as Record<string, Question>;
        this.quizTitle = data.quiz_nev;
      });
    })
  }

}
