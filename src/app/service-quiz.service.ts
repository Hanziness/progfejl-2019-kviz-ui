import { Injectable } from '@angular/core';

export interface Question {
  leiras: string,
  valaszok: Answer[]
}

export interface Answer {
  nev: string,
  helyes: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ServiceQuizService {

  constructor() { }

  public getQuizForm = function(qId : string) : Record<string, Question> {
    // TODO Implement using server-side communication
    return this.returnDummyQuiz();
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
