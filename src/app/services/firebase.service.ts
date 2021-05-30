import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Breakfast } from '../model/records/breakfast';
import { MealRecords } from '../model/records/meal-records';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    isLoggedIn = false;

    record: Observable<any>;
    updatedData: MealRecords[] = [];
    user = localStorage.getItem('user');
    uid = JSON.parse(this.user ? this.user : '{"uid":""}').uid;

    constructor(
        public firebaseAuth: AngularFireAuth,
        public store: AngularFirestore
    ) {
        this.record = this.store
            .collection(`Records/${this.uid}/items`)
            .valueChanges();
        this.record.subscribe((data) => {
            this.updatedData = data;
            console.log('updated data object model created', this.updatedData);
        });
    }

    async signin(email: string, password: string) {
        await this.firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                this.isLoggedIn = true;
                localStorage.setItem('user', JSON.stringify(res.user));
            });
    }

    async signup(email: string, password: string) {
        await this.firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                this.isLoggedIn = true;
                localStorage.setItem('user', JSON.stringify(res.user));
            });
    }

    logout() {
        this.firebaseAuth.signOut();
        localStorage.removeItem('user');
    }

    getUid() {
        let user = localStorage.getItem('user');
        console.log('try logout');
        return JSON.parse(user ? user : '{}').uid;
    }

    // Get meals

    getMeals() {
        return this.record;
    }

    updateMealCount(date: string, meal: string, itemType: string, name: string) {
        console.log('inside update meal service');
        let indexOfTheDay = this.updatedData
            .map((ele: MealRecords) => {
                return ele.record_id;
            })
            .indexOf(date);

        var indexOfTheFood: number = 0;
        console.log('item type ', itemType, ' meal ', meal);

        if (meal == 'BreakFast') {
            console.log('inside breakfast');
            if (itemType == 'food') {
                console.log('inside foods');
                indexOfTheFood = this.updatedData[indexOfTheDay].breakfast.foods
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                this.updatedData[indexOfTheDay].breakfast.foods[
                    indexOfTheFood
                ].count += 1;
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].breakfast.drinks
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                console.log('inside drinks');
                this.updatedData[indexOfTheDay].breakfast.drinks[
                    indexOfTheFood
                ].count += 1;
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].breakfast.symptoms
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                this.updatedData[indexOfTheDay].breakfast.symptoms[
                    indexOfTheFood
                ].count += 1;
            }
        } else if (meal == 'Lunch') {
        
            if (itemType == 'food') {
                indexOfTheFood = this.updatedData[indexOfTheDay].lunch.foods
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].lunch.foods[indexOfTheFood].count += 1;
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].lunch.drinks
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].lunch.drinks[indexOfTheFood].count += 1;
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].lunch.symptoms
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].lunch.symptoms[
                    indexOfTheFood
                ].count += 1;
            }
        } else if (meal == 'Dinner') {
            if (itemType == 'food') {
                indexOfTheFood = this.updatedData[indexOfTheDay].dinner.foods
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].dinner.foods[indexOfTheFood].count += 1;
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].dinner.drinks
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].dinner.drinks[
                    indexOfTheFood
                ].count += 1;
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].dinner.symptoms
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].dinner.symptoms[
                    indexOfTheFood
                ].count += 1;
            }
        } else if (meal == 'Snack') {
            
            if (itemType == 'food') {
                indexOfTheFood = this.updatedData[indexOfTheDay].snack.foods
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].snack.foods[indexOfTheFood].count += 1;
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].snack.drinks
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].snack.drinks[indexOfTheFood].count += 1;
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].snack.symptoms
                .map((ele) => {
                    return ele.name;
                })
                .indexOf(name);
                this.updatedData[indexOfTheDay].snack.symptoms[
                    indexOfTheFood
                ].count += 1;
            }
        }
        console.log('after update', this.updatedData[indexOfTheDay]);

        this.store
            .collection(`Records/${this.uid}/items`)
            .doc(date)
            .update(this.updatedData[indexOfTheDay]);
    }
}
