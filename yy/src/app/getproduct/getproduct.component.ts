import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})

export class GetproductComponent implements OnInit {
  product:any;
  
  
  constructor(private service:DataService) { }

  ngOnInit() {
    
   let obeservable=this.service.Selectprod();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;

   });
  }

}
