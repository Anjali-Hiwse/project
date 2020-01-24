import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
orders:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    let observable=this.service.getorders123();
    observable.subscribe((data)=>{
      console.log(data);
      this.orders=data;
  })
  }

  

}
