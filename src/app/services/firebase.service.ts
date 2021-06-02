import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Breakfast } from '../model/records/breakfast';
import { Dinner } from '../model/records/dinner';
import { Icon } from '../model/records/icon';
import { Lunch } from '../model/records/lunch';
import { MealRecords } from '../model/records/meal-records';
import { Snack } from '../model/records/snack';

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
                console.log("index of oats", indexOfTheFood);

                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].breakfast.foods.push(JSON.parse(JSON.stringify(new Icon(name, 'food', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].breakfast.foods[
                        indexOfTheFood
                    ].count += 1;
                }
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].breakfast.drinks
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                console.log('inside drinks');
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].breakfast.drinks.push(JSON.parse(JSON.stringify(new Icon(name, 'drink', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].breakfast.drinks[
                        indexOfTheFood
                    ].count += 1;
                }
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].breakfast.symptoms
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].breakfast.symptoms.push(JSON.parse(JSON.stringify(new Icon(name, 'symptom', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].breakfast.symptoms[
                        indexOfTheFood
                    ].count += 1;
                }
            }
        } else if (meal == 'Lunch') {

            if (itemType == 'food') {
                indexOfTheFood = this.updatedData[indexOfTheDay].lunch.foods
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].lunch.foods.push(JSON.parse(JSON.stringify(new Icon(name, 'food', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].lunch.foods[indexOfTheFood].count += 1;
                }
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].lunch.drinks
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].lunch.drinks.push(JSON.parse(JSON.stringify(new Icon(name, 'drink', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].lunch.drinks[indexOfTheFood].count += 1;
                }
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].lunch.symptoms
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].lunch.symptoms.push(JSON.parse(JSON.stringify(new Icon(name, 'symptom', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].lunch.symptoms[
                        indexOfTheFood
                    ].count += 1;
                }
            }
        } else if (meal == 'Dinner') {
            if (itemType == 'food') {
                indexOfTheFood = this.updatedData[indexOfTheDay].dinner.foods
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].dinner.foods.push(JSON.parse(JSON.stringify(new Icon(name, 'food', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].dinner.foods[indexOfTheFood].count += 1;
                }
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].dinner.drinks
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].dinner.drinks.push(JSON.parse(JSON.stringify(new Icon(name, 'drink', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].dinner.drinks[
                        indexOfTheFood
                    ].count += 1;
                }
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].dinner.symptoms
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].dinner.symptoms.push(JSON.parse(JSON.stringify(new Icon(name, 'symptom', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].dinner.symptoms[
                        indexOfTheFood
                    ].count += 1;
                }
            }
        } else if (meal == 'Snack') {

            if (itemType == 'food') {
                indexOfTheFood = this.updatedData[indexOfTheDay].snack.foods
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].snack.foods.push(JSON.parse(JSON.stringify(new Icon(name, 'food', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].snack.foods[indexOfTheFood].count += 1;
                }
            } else if (itemType == 'drink') {
                indexOfTheFood = this.updatedData[indexOfTheDay].snack.drinks
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].snack.drinks.push(JSON.parse(JSON.stringify(new Icon(name, 'drink', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].snack.drinks[indexOfTheFood].count += 1;
                }
            } else if (itemType == 'symptom') {
                indexOfTheFood = this.updatedData[indexOfTheDay].snack.symptoms
                    .map((ele) => {
                        return ele.name;
                    })
                    .indexOf(name);
                if (indexOfTheFood == -1) {
                    this.updatedData[indexOfTheDay].snack.symptoms.push(JSON.parse(JSON.stringify(new Icon(name, 'symptom', true, 1))));
                } else {
                    this.updatedData[indexOfTheDay].snack.symptoms[indexOfTheFood].count += 1;
                }
            }
        }
        console.log('after update', this.updatedData[indexOfTheDay]);

        this.store
            .collection(`Records/${this.uid}/items`)
            .doc(date)
            .update(this.updatedData[indexOfTheDay]);
    }

    cancelMeal(date: string, meal: string, itemType: string, name: string) {
        // write remove fil
        console.log("cancel meal");
        
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
                this.updatedData[indexOfTheDay].breakfast.foods = this.updatedData[indexOfTheDay].breakfast.foods.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'drink') {
                this.updatedData[indexOfTheDay].breakfast.drinks = this.updatedData[indexOfTheDay].breakfast.drinks.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'symptom') {
                this.updatedData[indexOfTheDay].breakfast.symptoms = this.updatedData[indexOfTheDay].breakfast.symptoms.filter((ele) => {
                    return ele.name != name;
                })
            }
        } else if (meal == 'Lunch') {

            if (itemType == 'food') {
                this.updatedData[indexOfTheDay].lunch.foods = this.updatedData[indexOfTheDay].lunch.foods.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'drink') {
                this.updatedData[indexOfTheDay].lunch.drinks = this.updatedData[indexOfTheDay].lunch.drinks.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'symptom') {
                this.updatedData[indexOfTheDay].lunch.symptoms = this.updatedData[indexOfTheDay].lunch.symptoms.filter((ele) => {
                    return ele.name != name;
                })
            }
        } else if (meal == 'Dinner') {
            if (itemType == 'food') {
                this.updatedData[indexOfTheDay].dinner.foods = this.updatedData[indexOfTheDay].dinner.foods.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'drink') {
                this.updatedData[indexOfTheDay].dinner.drinks = this.updatedData[indexOfTheDay].dinner.drinks.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'symptom') {
                this.updatedData[indexOfTheDay].dinner.symptoms = this.updatedData[indexOfTheDay].dinner.symptoms.filter((ele) => {
                    return ele.name != name;
                })
            }
        } else if (meal == 'Snack') {

            if (itemType == 'food') {
                this.updatedData[indexOfTheDay].snack.foods = this.updatedData[indexOfTheDay].snack.foods.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'drink') {
                this.updatedData[indexOfTheDay].snack.drinks = this.updatedData[indexOfTheDay].snack.drinks.filter((ele) => {
                    return ele.name != name;
                })
            } else if (itemType == 'symptom') {
                this.updatedData[indexOfTheDay].snack.symptoms = this.updatedData[indexOfTheDay].snack.symptoms.filter((ele) => {
                    return ele.name != name;
                })
            }
        }
        console.log('after update', this.updatedData[indexOfTheDay]);

        this.store
            .collection(`Records/${this.uid}/items`)
            .doc(date)
            .update(this.updatedData[indexOfTheDay]);
    }

    updateWater(increment:number,date:string){
       console.log("dataa ",this.updatedData);
       let indexOfTheDay = this.updatedData
            .map((ele: MealRecords) => {
                return ele.record_id;
            })
            .indexOf(date);
        this.updatedData[indexOfTheDay].water_count += increment;
        this.store
        .collection(`Records/${this.uid}/items`)
        .doc(date)
        .update(this.updatedData[indexOfTheDay]);
    }
    initializeRecord(date:string){
        let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        let thisDaysRecord = new MealRecords();
        thisDaysRecord.record_id = date;
        thisDaysRecord.water_count = 0;
        thisDaysRecord.day = parseInt(date.split('-')[0])
        thisDaysRecord.month = parseInt(date.split('-')[1])
        thisDaysRecord.year = parseInt(date.split('-')[2])
        thisDaysRecord.month_name = monthNames[parseInt(date.split('-')[1])-1]
        thisDaysRecord.breakfast = new Breakfast();
        thisDaysRecord.breakfast.foods = [];
        thisDaysRecord.breakfast.drinks = [];
        thisDaysRecord.breakfast.symptoms = [];
        thisDaysRecord.breakfast.health = 5;
        thisDaysRecord.lunch = new Lunch();
        thisDaysRecord.lunch.foods = [];
        thisDaysRecord.lunch.drinks = [];
        thisDaysRecord.lunch.symptoms = [];
        thisDaysRecord.lunch.health = 5;
        thisDaysRecord.snack = new Snack();
        thisDaysRecord.snack.foods = [];
        thisDaysRecord.snack.drinks = [];
        thisDaysRecord.snack.symptoms = [];
        thisDaysRecord.snack.health = 5;
        thisDaysRecord.dinner = new Dinner();
        thisDaysRecord.dinner.foods = [];
        thisDaysRecord.dinner.drinks = [];
        thisDaysRecord.dinner.symptoms = [];
        thisDaysRecord.dinner.health = 5;
        thisDaysRecord.notes = "";
        thisDaysRecord.user_id = this.getUid();
        thisDaysRecord.weight = 0;

        this.store
        .collection(`Records/${this.uid}/items`)
        .doc(date)
        .set(JSON.parse(JSON.stringify(thisDaysRecord)));
        
        console.log("see this",thisDaysRecord);
        
    }
}
