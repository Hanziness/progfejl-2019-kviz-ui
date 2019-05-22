import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUserService } from './service-user.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

export interface Question {
  leiras: string,
  valaszok: Answer[]
}

export interface Answer {
  nev: string,
  helyes: boolean
}

export interface QuizDescriptor {
  title: string,
  qId: string,
  numQuestions: number
}

@Injectable({
  providedIn: 'root'
})
export class ServiceQuizService {

  httpOptionsJSON = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private userService : ServiceUserService) { }

  public submitQuiz(qId : string, answers : Record<string, string>, quizObject : Record<string, Question>) : Observable<any> {
    let score : number = 0;

    // Evaluate quiz
    Object.keys(quizObject).forEach(key => {
      quizObject[key].valaszok.forEach(answer => {
        if (answer.nev === answers[key] && answer.helyes) {
          score++;
        }
      });
    });

    return this.httpClient.post("http://localhost:5000", {
      username: this.userService.loggedInUserName,
      score: score
    }, this.httpOptionsJSON);
  }

  public getQuizList = () : Observable<Object> => {
    let req = this.httpClient.get("http://localhost:5000/allquiz", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true,
      responseType: 'json'
    });

    return req;

  }

  public getQuizForm = (qId : string) : Observable<Object> => {
    let req = this.httpClient.get("http://localhost:5000/quiz", {
      withCredentials: true,
      responseType: 'json',
      params: { id: qId }
    }).pipe(share());

    req.subscribe((data : any) => {
      console.debug("Received a quiz that looks like this:");
      console.debug(data);
    });

    return req;
  }

  returnDummyQuiz = function() : Record<string, Question> {
    return {
      "kerdes1": {
          "leiras": "Válaszd ki a macskát!",
          "valaszok": [
              {
                  "nev": "Kutya",
                  "helyes": false
              },
              {
                  "nev": "Macska",
                  "helyes": false
              }
          ]
      },
      "kerdes2": {
        "leiras": "Melyik nem macska?",
        "valaszok": [
          {
            "nev": "Macska",
            "helyes": false
          },
          {
            "nev": "Kutya",
            "helyes": true
          },
          {
            "nev": "macska",
            "helyes": false
          },
          {
            "nev": "m4cska",
            "helyes": false
          }
        ]
      }
    };
  }
}
