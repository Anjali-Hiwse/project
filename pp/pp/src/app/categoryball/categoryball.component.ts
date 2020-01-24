import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categoryball',
  templateUrl: './categoryball.component.html',
  styleUrls: ['./categoryball.component.css']
})
export class CategoryballComponent implements OnInit {

  product:any;
  
  constructor(private service:DataService) { }

  ngOnInit() {
    
   let obeservable=this.service.SelectBall();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;

   });
  }
}
