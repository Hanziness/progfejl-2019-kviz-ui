import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceQuizService } from '../service-quiz.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  deleted : boolean = false;
  qid : string;
  numquestions : number;
  title : String;

  constructor(
    private userService : ServiceUserService,
    private modalService : NgbModal,
    private quizService : ServiceQuizService,
    private router : Router) {}

  ngOnInit() {
  }

  openDeleteModal(content) {
    this.modalService.open(content, {centered : true, windowClass: 'shadow-lg'}).result.then((res) => {
      if (res === 'delete') {
        this.deleteQuiz();
      }
    });
  }

  deleteQuiz() {
    this.quizService.deleteQuiz(this.qid).subscribe((res) => {
      this.router.navigate([this.router.url]); // reload the view
      this.deleted = true;
    });
  }

}
