import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any
  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
    let observable=this.service.getLIst();
    observable.subscribe((data)=>{
      console.log(data);
      this.product=data;
      
    })
  }

  addtocart(p,pId)
  {
    console.log(p);
    console.log(pId);
    window.sessionStorage.setItem("prod",pId);
     this.router.navigate(['/confirm'])   
  }


}
