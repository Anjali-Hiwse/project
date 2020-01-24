import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';


@Component({
  selector: 'app-categorybat',
  templateUrl: './categorybat.component.html',
  styleUrls: ['./categorybat.component.css']
})
export class CategorybatComponent implements OnInit {
  product:any;
  
  constructor(private service:DataService) { }

  ngOnInit() {
    
   let obeservable=this.service.SelectBat();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;

   });
  }

}
