import { Component, Input, OnInit } from '@angular/core';
import { MealRecords } from 'src/app/model/records/meal-records';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
	selector: 'app-meal-editor',
	templateUrl: './meal-editor.component.html',
	styleUrls: ['./meal-editor.component.css']
})
export class MealEditorComponent implements OnInit {
	@Input() day: MealRecords = new MealRecords();
	@Input() meal: string = "null";
	@Input() date: string = "null";
	
	canEdit: boolean = true;

	constructor(private firebaseService: FirebaseService) { }

	ngOnInit(): void {
		console.log(this.day.breakfast);
	}

	onMealSelector(meal: string) {
		this.meal = meal;
	}

	updateWater(updateCondition: boolean) {
		if (updateCondition) {
			this.firebaseService.updateWater(1, this.day.record_id);
		} else {
			this.firebaseService.updateWater(-1, this.day.record_id);
		}
	}
}
