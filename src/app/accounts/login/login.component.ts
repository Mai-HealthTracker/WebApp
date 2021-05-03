import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login/login';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showSplash:boolean = false;
  showError:boolean = false;
  showLoading:boolean = false;
  login: Login = new Login();
  constructor(private firebaseService:FirebaseService,private router:Router) { }
  
  ngOnInit(): void {
  }

  onsubmit(){
    this.showLoading = true;
    this.firebaseService.signin(this.login.email,this.login.password).then(() => {
      this.router.navigateByUrl('profile');
      this.showLoading = false;
    }).catch((err) => {
      this.showError = true;
      this.showLoading = false;
    })
  }

}
