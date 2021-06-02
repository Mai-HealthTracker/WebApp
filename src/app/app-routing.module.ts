import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { ProfileComponent } from './accounts/profile/profile.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ModifyMealComponent } from './modify-meal/modify-meal.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'predict',component:PredictComponent},
  {path:'date/:date',component:ModifyMealComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
