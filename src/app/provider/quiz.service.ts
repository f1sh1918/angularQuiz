import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
rootUrl = 'http://localhost:59838/api/';
qns: any[] = [];
qnProgress = 0;
correctAnswers = 0;
seconds = 0;
timer;
participants: any[] = [];
  constructor(private http: HttpClient) { }

  insertParticipant(name, email) {
    const body = {
      Name: name,
      Email: email
    };
    return this.http.post(this.rootUrl + 'InsertParticipant', body);

  }
  getQns() {
 return this.http.get(this.rootUrl + 'Questions');
  }

insertQuestions(question: string, option1: string, option2: string, option3: string, option4: string, answer: number) {
  const body = {
    Qn: question,
    ImageName: null,
    Option1: option1,
    Option2: option2,
    Option3: option3,
    Option4: option4,
    Answer: answer
  };
  return this.http.post(this.rootUrl + 'InsertQuestions', body);
}

displayTimeElapsed() {
  return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
}

getParticipantName() {
  const participant = JSON.parse(localStorage.getItem('participant'));
  return participant.Name;
}

submitScore() {
  const body = JSON.parse(localStorage.getItem('participant'));
  body.Score = this.correctAnswers;
  body.TimeSpent = this.seconds;
  return this.http.post('UpdateOutput', body);
}

getParticipants() {
  return this.http.get(this.rootUrl + 'Participants');
   }

}
