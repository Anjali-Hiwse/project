import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categorygloves',
  templateUrl: './categorygloves.component.html',
  styleUrls: ['./categorygloves.component.css']
})
export class CategoryglovesComponent implements OnInit {

  product:any;
  
  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
    
   let obeservable=this.service.SelectGloves();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;

   });
  }

  addtocart(prod,p_id)
  {
     console.log(prod);
     console.log(p_id);
     window.sessionStorage.setItem("prod",p_id);
     this.router.navigate(['/confirm'])
     
     
  }
}
