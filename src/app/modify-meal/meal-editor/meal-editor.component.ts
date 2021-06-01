import { Component, Input, OnInit } from '@angular/core';
import { MealRecords } from 'src/app/model/records/meal-records';

@Component({
  selector: 'app-meal-editor',
  templateUrl: './meal-editor.component.html',
  styleUrls: ['./meal-editor.component.css']
})
export class MealEditorComponent implements OnInit {
  @Input() day:MealRecords = new MealRecords();
  @Input() meal:string = "null";
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.day.breakfast);
  }

  onMealSelector(meal:string){
    this.meal = meal;    
  }
}
