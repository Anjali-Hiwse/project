import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takepayment',
  templateUrl: './takepayment.component.html',
  styleUrls: ['./takepayment.component.css']
})
export class TakepaymentComponent implements OnInit {

  userId:number;
  amount:number;
  constructor() {
    this.userId=4;
    this.amount=1200;
   }

  ngOnInit() {
  }

}
