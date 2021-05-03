import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navBtnsVisible = true;
  constructor(private router:Router,private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    let urlPattern = this.router.url;
    if (['/login','/signup'].indexOf(urlPattern) != -1){
      this.navBtnsVisible = false;
    }
  }

  logout(){
    this.firebaseService.logout();
    this.router.navigateByUrl('login');
  }

}
