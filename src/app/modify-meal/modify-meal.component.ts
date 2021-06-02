import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MealRecords } from '../model/records/meal-records';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-modify-meal',
  templateUrl: './modify-meal.component.html',
  styleUrls: ['./modify-meal.component.css']
})
export class ModifyMealComponent implements OnInit {
  editDate: boolean = false;
  date: string = "";

  user = localStorage.getItem('user');
  uid = JSON.parse(this.user ? this.user : '{}').uid;
  item:MealRecords = new MealRecords();
  meal:string = "null";

  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  date_title = new Date().toLocaleDateString();

  constructor(
    private store: AngularFirestore,
    private firebaseService: FirebaseService,
    private router:Router
  ) {}

  ngOnInit(): void {
    let url = this.router.url.toLowerCase();
    console.log("url",url.slice(6));
    this.date = url.slice(6);
    this.getMeals();
  }

  getMeals() {
    this.firebaseService.getMeals().subscribe((items) => {
      console.log("items from observable",items);
      
      this.item = items.filter((ele:MealRecords) => {
        return ele.record_id == this.date
      })[0];
      
      console.log("item",this.item);
      if (!this.item){
        this.firebaseService.initializeRecord(this.date);
      }
    });
  }

}
