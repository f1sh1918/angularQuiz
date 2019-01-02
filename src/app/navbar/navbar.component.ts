import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  logout() {
localStorage.clear();
this.route.navigate(['/register']);
  }

 goToQuestions() {
    localStorage.clear();
    this.route.navigate(['/questions']);
      }

      goToQuiz() {
        localStorage.clear();
        this.route.navigate(['/quiz']);
          }

}
