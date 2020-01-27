import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 order:any;

 constructor(private service:DataService) { }

 ngOnInit() {
   
  let obeservable=this.service.Selectordr();
  obeservable.subscribe((result)=>{
   console.log(result);
   this.order=result;

  });
 }

}
