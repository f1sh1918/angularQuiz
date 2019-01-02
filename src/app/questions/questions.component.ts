import { QuizService } from './../provider/quiz.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
 answerDB;
  constructor(private quizService: QuizService) { }



  ngOnInit() {
  }

  onSubmit(question: string, option1: string, option2: string, option3: string, option4: string, answer: number, f: NgForm) {
    this.answerDB = answer - 1;
    this.quizService.insertQuestions(question, option1, option2, option3, option4, this.answerDB).subscribe(
      (data: any) => {
console.log(data);
      }
    );
f.resetForm();
  }

  clearData() {

  }

}
