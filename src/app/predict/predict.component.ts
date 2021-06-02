import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  predictors: any;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getPredictors().subscribe((data) => {
      this.predictors = data;
      console.log("predict", this.predictors);
    })
  }

}
