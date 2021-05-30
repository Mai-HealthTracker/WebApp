import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.css']
})
export class ItemIconComponent implements OnInit {

  @Input() item:any;
  @Input() meal:any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
  }

  incrementItem(nameOfitem:string){
    console.log("name item",nameOfitem, this.item,this.meal);
    this.firebaseService.updateMealCount("05-05-2021",this.meal,this.item.tag,nameOfitem);
  }

}
