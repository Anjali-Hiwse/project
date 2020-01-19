import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feesorfinereport',
  templateUrl: './feesorfinereport.component.html',
  styleUrls: ['./feesorfinereport.component.css']
})
export class FeesorfinereportComponent implements OnInit {

  fees:any;
  constructor() { }

  ngOnInit() {
  }

  showReport()
  {
    this.fees=[
      {'type':"fees",'amount':"5100"},
      {'type':"fine",'amount':"150"},
      {'type':"fine",'amount':"230"},
      {'type':"fees",'amount':"3400"},
    ];
  }
}
