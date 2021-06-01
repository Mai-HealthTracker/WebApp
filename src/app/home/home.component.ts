import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MealRecords } from '../model/records/meal-records';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  editDate: boolean = false;

  user = localStorage.getItem('user');
  uid = JSON.parse(this.user ? this.user : '{}').uid;
  records:MealRecords[];

  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  date_title = this.monthNames[new Date().getMonth()]+", "+new Date().getFullYear();  

  constructor(
    private store: AngularFirestore,
    private firebaseService: FirebaseService
  ) {
    this.records = [];
  }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals() {
    this.firebaseService.getMeals().subscribe((items) => {
      this.records = items.filter((ele:MealRecords) => {
        return ele.month_name == this.monthNames[new Date().getMonth()-1]
      });
      console.log(this.records);
    });
  }
}
