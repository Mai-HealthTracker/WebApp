import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealRecords } from 'src/app/model/records/meal-records';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-meal-tracker-item',
  templateUrl: './meal-tracker-item.component.html',
  styleUrls: ['./meal-tracker-item.component.css'],
})
export class MealTrackerItemComponent implements OnInit {
  @Input() day:MealRecords = new MealRecords();
  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
  }
}
