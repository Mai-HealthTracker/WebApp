import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
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
  records: MealRecords[];
  date: any = "";

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  date_title = this.monthNames[new Date().getMonth()] + ", " + new Date().getFullYear();

  constructor(
    private store: AngularFirestore,
    private firebaseService: FirebaseService,
    private router: Router,
  ) {
    this.records = [];
  }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals() {
    this.firebaseService.getMeals().subscribe((items) => {
      this.records = items.filter((ele: MealRecords) => {
        return ele.month_name == this.monthNames[new Date().getMonth()]
      });
      console.log(this.records);
    });
  }

  selectdate() {
    let dateString = this.date;
    let dateOut: any = dateString.split('-').reverse().join('-');
    // console.log(dateString,dateOut);
    this.router.navigateByUrl('date/' + dateOut);
  }

  today() {
    var today = new Date();
    var dd:any = today.getDate();

    var mm:any = today.getMonth() + 1;
    var yyyy:any = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    let datestring = dd + '-' + mm + '-' + yyyy;
    this.router.navigateByUrl('date/'+datestring);
  }
}
