import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navBtnsVisible = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    let urlPattern = this.router.url;
    if (['/login','/signup'].indexOf(urlPattern) != -1){
      this.navBtnsVisible = false;
    }
  }

}
