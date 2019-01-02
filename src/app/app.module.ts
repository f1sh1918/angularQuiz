import { QuizService } from './provider/quiz.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertsModule } from 'angular-alert-module';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
{path: 'register', component: RegisterComponent},
{path: 'result', component: ResultComponent},
{path: 'quiz', component: QuizComponent},
{path: 'questions', component: QuestionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
     FormsModule,
     HttpClientModule,
     AlertsModule.forRoot()
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
