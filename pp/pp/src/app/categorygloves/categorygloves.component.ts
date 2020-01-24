import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categorygloves',
  templateUrl: './categorygloves.component.html',
  styleUrls: ['./categorygloves.component.css']
})
export class CategoryglovesComponent implements OnInit {

  product:any;
  
  constructor(private service:DataService) { }

  ngOnInit() {
    
   let obeservable=this.service.SelectGloves();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;

   });
  }
}
