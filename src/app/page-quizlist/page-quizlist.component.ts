import { Component, OnInit } from '@angular/core';
import { ServiceQuizService, QuizDescriptor } from '../service-quiz.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-page-quizlist',
  templateUrl: './page-quizlist.component.html',
  styleUrls: ['./page-quizlist.component.css']
})
export class PageQuizlistComponent implements OnInit {


  quizzes : QuizDescriptor[] = [];

  constructor(private quizService : ServiceQuizService, private userService : ServiceUserService) { }

  ngOnInit() {
    this.getQuizList();
  }

  getQuizList = () => {
    this.quizService.getQuizList().subscribe(
      (data : Array<Object>) => {
        data.forEach((item : any) => {
          this.quizzes.push({
            qId: item._id,
            numQuestions: item.kerdesek.length,
            title: item.quiz_nev
          });
        })
      }
    );
  }

}
