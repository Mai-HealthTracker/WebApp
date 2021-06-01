import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  @Input() meal:any;
  @Input() title:any;
  @Input() date:any;

  constructor() { }

  ngOnInit(): void {
    console.log("meal",this.meal);
    
  }

}
