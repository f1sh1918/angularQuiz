import { QuizService } from './../provider/quiz.service';
import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private quizService: QuizService, private alerts: AlertsService) {
    this.getQuestions();
  }

  ngOnInit() {
    this.startTimer();
  }

getQuestions() {
  this.quizService.getQns().subscribe(
    (data: any) => {
this.quizService.qns = data;

    }
  );
}

Answer(QnID, index) {

// Check Answer
// An die Stelle answer die ausgewählte Antwort
this.quizService.qns[this.quizService.qnProgress].choice = index;
if (this.quizService.qns[this.quizService.qnProgress].choice === this.quizService.qns[this.quizService.qnProgress].Answer) {

this.quizService.correctAnswers++;
this.quizService.qnProgress++;
this.alerts.setMessage('Richtig!!', 'success');
} else {
  this.alerts.setMessage('Falsch!', 'error');
  this.quizService.qnProgress++;
}

if (this.quizService.qnProgress === 10) {
this.quizService.submitScore();

}

}

startTimer() {
  this.quizService.timer = setInterval(() => {
    this.quizService.seconds++;
    localStorage.setItem('seconds', this.quizService.seconds.toString());
  }, 1000);
}


}
