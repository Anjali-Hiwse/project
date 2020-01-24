import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productstock',
  templateUrl: './productstock.component.html',
  styleUrls: ['./productstock.component.css']
})
export class ProductstockComponent implements OnInit {
  product:any
  constructor(private service:DataService) { }

  ngOnInit() {
    let observable=this.service.getLIst();
    observable.subscribe((data)=>{
      console.log(data);
      this.product=data;
      
    })
  }

}
