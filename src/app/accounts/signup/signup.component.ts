import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/model/signup/signup';

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
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    this.showPassNotMatch = false;
    if (this.signup.password != this.confirmPass){
      this.showPassNotMatch = true;
    } else {
      console.log(this.signup);

    }
  }
}
