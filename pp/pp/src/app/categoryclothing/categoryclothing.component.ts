import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categoryclothing',
  templateUrl: './categoryclothing.component.html',
  styleUrls: ['./categoryclothing.component.css']
})
export class CategoryclothingComponent implements OnInit {

  product:any;
  
  constructor(private service:DataService) { }

  ngOnInit() {
    
   let obeservable=this.service.SelectClothing();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;

   });
  }

}
