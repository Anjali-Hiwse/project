import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  payhistory:any;
  constructor() { }

  paymentHistory()
  {
    this.payhistory=[
                {'id':1,'user_id':4,'amount':1000,'type':'fee','tx_time':'6-7-2019','due_date':'6-7-2019'},
                {'id':45,'user_id':4,'amount':1200,'type':'fee','tx_time':'2-10-2019','due_date':'5-10-2019'},
                {'id':700,'user_id':4,'amount':1350,'type':'fee','tx_time':'2-1-2020','due_date':'5-1-2020'},
    ];
  }
  ngOnInit() {
  }

}
