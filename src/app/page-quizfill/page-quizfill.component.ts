import { Component, OnInit } from '@angular/core';
import { Question, ServiceQuizService } from '../service-quiz.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ServiceUserService } from '../service-user.service';

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
  quizAnswers : Record<string, string> = {};
  quizPoints? : number;

  constructor(
    private quizService : ServiceQuizService, 
    private actRoute : ActivatedRoute, 
    private router : Router,
    private userService : ServiceUserService) { 
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.qid = params['quizId'];
      this.quizService.getQuizForm(this.qid).subscribe((data : any) => {
        console.debug(this.qid);
        this.quizForm = data.kerdesek as Record<string, Question>;
        this.quizService.shuffleQuiz(this.quizForm);
        this.quizTitle = data.quiz_nev;
        console.debug(this.quizForm);
      });
    })
  }

  submitQuiz() {
    if (this.quizPoints == undefined) {
      this.quizService.submitQuiz(this.quizAnswers, this.quizForm).subscribe((answer) => {
        // console.log(answer);
        // this.router.navigate(['/quiz']);
        this.quizPoints = this.quizService.evaluateQuiz(this.quizAnswers, this.quizForm);
      });
    } else {
      console.warn("Quiz already submitted!");
    }
  }

  testQuiz() {
    this.quizPoints = this.quizService.evaluateQuiz(this.quizAnswers, this.quizForm);
    // console.debug(this.quizPoints);
  }

  redirectToQuizzes() {
    this.router.navigate(['/quiz']);
  }

}
