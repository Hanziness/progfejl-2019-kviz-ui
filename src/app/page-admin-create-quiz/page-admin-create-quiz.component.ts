import { Component, OnInit } from '@angular/core';
import { Question } from '../service-quiz.service';

/* 
  TODO There's a problem with array elements (when deleting and adding new ones)!
*/ 

@Component({
  selector: 'app-page-admin-create-quiz',
  templateUrl: './page-admin-create-quiz.component.html',
  styleUrls: ['./page-admin-create-quiz.component.css']
})
export class PageAdminCreateQuizComponent implements OnInit {

  questions : Question[] = [];
  quizName : string;

  constructor() { }

  ngOnInit() {
  }

  addNewQuestion() {
    this.questions.push({
      leiras: '',
      valaszok: [{
        nev: '',
        helyes: true
      }]
    });
  }

  addNewAnswer(question : Question) {
    question.valaszok.push({
      nev: '',
      helyes: false
    });
  }

  /**
   * Turns the questions array into an associative array (ie. object)
   */
  getQuizFromQuestions() {
    let quiz = {};

    this.questions.forEach((value, index) => {
      quiz['q-' + index] = value;
    });

    quiz['name'] = this.quizName;

    return quiz;
  }

  deleteAnswer(question : Question, index : number) {
    question.valaszok.splice(index, 1);
  }

  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  debugQuiz() {
    console.debug(this.getQuizFromQuestions());
  }

}
