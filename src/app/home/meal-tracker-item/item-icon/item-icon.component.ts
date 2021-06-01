import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/model/records/icon';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.css']
})
export class ItemIconComponent implements OnInit {

  @Input() item: any;
  @Input() meal: any;
  @Input() date: any;
  @Input() canEdit: any;

  

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    
  }

  incrementItem(nameOfitem: string) {
    console.log("name item", nameOfitem, this.item, this.meal);
    this.firebaseService.updateMealCount(this.date, this.meal, this.item.tag, nameOfitem);
  }

  cancelItem(nameOfitem: string) {
    console.log("cancel controller");
    this.firebaseService.cancelMeal(this.date, this.meal, this.item.tag, nameOfitem);
  }

}
