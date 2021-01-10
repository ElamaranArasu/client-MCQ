import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {QuestionsComponent} from './questions/questions.component'
import {QuestionHomeComponent} from './question-home/question-home.component'
import {ErrorComponent} from './error/error.component'

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'create-account',
    component:SignupComponent
  }
  ,
  {
    path:'questions',
    component:QuestionsComponent
  }
  ,
  {
    path:'question-home',
    component:QuestionHomeComponent
  }
  ,
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
