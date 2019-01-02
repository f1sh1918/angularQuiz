import { QuizService } from './../provider/quiz.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private quizService: QuizService, private route: Router) { }

  ngOnInit() {
    this.getParticipants();
  }

  onSubmit(name: string, email: string) {
console.log(name, email);

// http Post arbeitet mit Observable --> Subscribe
this.quizService.insertParticipant(name, email).subscribe(
  (data: any) => {
localStorage.clear();
localStorage.setItem('participant', JSON.stringify(data));

// navigate to quiz
this.route.navigate(['/quiz']);

  }
);
  }

  getParticipants() {
    this.quizService.getParticipants().subscribe(
      (data: any) => {
        this.quizService.participants = data;
      }
    );
  }

}
