import { Input } from '@angular/core';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Icon } from 'src/app/model/records/icon';

@Component({
	selector: 'app-meal',
	templateUrl: './meal.component.html',
	styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

	@Input() meal: any;
	@Input() title: any;
	@Input() date: any;
	@Input() canEdit: any;

	food_names: string[] = []
	drink_names: string[] = []
	symptom_names: string[] = []

	food: Icon[] = [];
	drink: Icon[] = [];
	symptom: Icon[] = [];

	constructor() { }

	ngOnInit(): void {
		this.food_names = ['Bakery', 'Oats', 'Eggs', 'Fruits', 'Vegetables', 'Rice', 'Wheat', 'Salad', 'Sweet', 'Soup', 'Pizza', 'Burger', 'Noodles'];
		this.drink_names = ['Water', 'Tea', 'Coffee', 'Soda', 'Milk', 'Juice', 'Energy Drink', 'Alcohol'];
		this.symptom_names = ['Reflux', 'Gas', 'Rash', 'Vomiting', 'Diarrhea', 'Belly Pain', 'Headache', 'Fatigue', 'Constipation'];
		for (let food_name of this.food_names) {
			var index:number;
			if (this.meal){
				index = this.meal.foods.map((ele: any) => {
					return ele.name;
				}).indexOf(food_name);
			} else {
				index = -1;
			}
			
			if (index == -1) {
				console.log("inserting in index -1");
				this.food.push(new Icon(food_name, 'food', true, 0));
			} else {
				this.food.push(new Icon(food_name, 'food', true, this.meal.foods[index].count));
			}
		}
		for (let drink_name of this.drink_names) {
			
			var index:number;
			if (this.meal){
				index = this.meal.drinks.map((ele: any) => {
					return ele.name;
				}).indexOf(drink_name);
			} else {
				index = -1;
			}
			
			if (index == -1) {
				console.log("inserting drink in index -1");
				this.drink.push(new Icon(drink_name, 'drink', true, 0));
			} else {
				this.drink.push(new Icon(drink_name, 'drink', true, this.meal.drinks[index].count));
			}
		}
		for (let food_name of this.symptom_names) {
			var index:number;
			if (this.meal){
				index = this.meal.symptoms.map((ele: any) => {
					return ele.name;
				}).indexOf(food_name);
			} else {
				index = -1;
			}
			
			if (index == -1) {
				this.symptom.push(new Icon(food_name, 'symptom', true, 0));
			} else {
				this.symptom.push(new Icon(food_name, 'symptom', true, this.meal.symptoms[index].count));
			}
		}
		console.log("meal", this.meal);
		console.log("foods",this.food,"drinks",this.drink);

	}

	ngOnChanges(){
		console.log("meallllll change",this.meal)
		this.food = [];
		this.drink = [];
		this.symptom = [];
		for (let food_name of this.food_names) {
			var index:number;
			if (this.meal){
				index = this.meal.foods.map((ele: any) => {
					return ele.name;
				}).indexOf(food_name);
			} else {
				index = -1;
			}
			
			if (index == -1) {
				console.log("inserting in index -1");
				this.food.push(new Icon(food_name, 'food', true, 0));
			} else {
				this.food.push(new Icon(food_name, 'food', true, this.meal.foods[index].count));
			}
		}
		for (let drink_name of this.drink_names) {
			
			var index:number;
			if (this.meal){
				index = this.meal.drinks.map((ele: any) => {
					return ele.name;
				}).indexOf(drink_name);
			} else {
				index = -1;
			}
			
			if (index == -1) {
				this.drink.push(new Icon(drink_name, 'drink', true, 0));
			} else {
				this.drink.push(new Icon(drink_name, 'drink', true, this.meal.drinks[index].count));
			}
		}
		for (let food_name of this.symptom_names) {
			var index:number;
			if (this.meal){
				index = this.meal.symptoms.map((ele: any) => {
					return ele.name;
				}).indexOf(food_name);
			} else {
				index = -1;
			}
			
			if (index == -1) {
				this.symptom.push(new Icon(food_name, 'symptom', true, 0));
			} else {
				this.symptom.push(new Icon(food_name, 'symptom', true, this.meal.symptoms[index].count));
			}
		}
		console.log("change foods",this.food,"drinks",this.drink);
	}
}
