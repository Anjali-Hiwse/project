import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpayment-history',
  templateUrl: './userpayment-history.component.html',
  styleUrls: ['./userpayment-history.component.css']
})
export class UserpaymentHistoryComponent implements OnInit {

  userpayhistory:any;
  constructor() { 
    this.userpayhistory=[
      {'id':1,'userid':4,'amount':990,'type':'fee','tx_time':'2-7-2019','due_date':'3-7-2019'},
      {'id':2,'userid':4,'amount':780,'type':'fee','tx_time':'2-10-2019','due_date':'3-10-2019'},
      {'id':3,'userid':4,'amount':540,'type':'fee','tx_time':'2-1-2020','due_date':'5-1-2020'},
    ];
  }

  ngOnInit() {
  }

}
