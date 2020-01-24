import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
cust:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    let observable=this.service.getcustLIst();
    observable.subscribe((data)=>{
      console.log(data);
      this.cust=data;
  })
  }
}
