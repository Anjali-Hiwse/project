import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categoryshoes',
  templateUrl: './categoryshoes.component.html',
  styleUrls: ['./categoryshoes.component.css']
})
export class CategoryshoesComponent implements OnInit {

  product:any;
  
  constructor(private service:DataService) { }

  ngOnInit() {
    
   let obeservable=this.service.SelectShoes();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;

   });
  }
}
