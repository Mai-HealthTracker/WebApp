import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.css']
})
export class ItemIconComponent implements OnInit {

  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
