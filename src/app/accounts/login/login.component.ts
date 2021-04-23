import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login/login';

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
  constructor() { }
  
  ngOnInit(): void {
  }

  onsubmit(){

  }

}
