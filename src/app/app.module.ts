import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { ProfileComponent } from './accounts/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MealTrackerItemComponent } from './home/meal-tracker-item/meal-tracker-item.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './services/firebase.service';
import { ItemIconComponent } from './home/meal-tracker-item/item-icon/item-icon.component';
import { MealComponent } from './home/meal-tracker-item/meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MealTrackerItemComponent,
    ItemIconComponent,
    MealComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
