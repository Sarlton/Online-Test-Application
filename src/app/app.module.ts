import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    QuizStartComponent,
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
