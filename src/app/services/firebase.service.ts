import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false

  userOb: Observable<any>;
  user = localStorage.getItem('user')
  uid = JSON.parse(this.user?this.user:'{"uid":""}').uid

  constructor(public firebaseAuth: AngularFireAuth,public store:AngularFirestore) {
    this.userOb = this.store.collection(`Records/${this.uid}/items`).valueChanges();
   }
   
  async signin(email:string, password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    })
  }

  async signup(email:string, password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    })
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

  getUid(){
    let user = localStorage.getItem('user');
    console.log("try logout");
    return JSON.parse(user?user:'{}').uid
  }

  // Get meals

  getMeals(){
    return this.userOb;
  }
}
