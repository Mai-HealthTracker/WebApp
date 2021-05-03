import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup/signup';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: Signup = new Signup(); 
  confirmPass:string = "";
  showError:boolean = false;
  userExists:boolean = false;
  showPassNotMatch:boolean = false;
  showLoading:boolean = false;
  constructor(private firebaseService:FirebaseService,private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit(){
    this.showPassNotMatch = false;
    this.showLoading = true;
    if (this.signup.password != this.confirmPass){
      this.showPassNotMatch = true;
      this.showLoading = false;
    } else {
      console.log(this.signup);
      this.firebaseService.signup(this.signup.email,this.signup.password).then(() =>{
        this.router.navigateByUrl('profile');
        this.showLoading = false;
      }
      ).catch((err) =>{
        if (err.code == "auth/email-already-in-use"){
          console.log("email already in use");
          this.userExists = true;
        } else {
          this.showError = true;
        }
        this.showLoading = false;
      })
    }
  }
}
