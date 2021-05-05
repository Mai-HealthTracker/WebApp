import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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

  constructor(private store: AngularFirestore,private firebaseService:FirebaseService) {}

  ngOnInit(): void {
    
    this.getMeals(); 
  }

  getMeals(){
    this.firebaseService.getMeals().subscribe(items => {
      console.log(items);
      
    })
  }
}
