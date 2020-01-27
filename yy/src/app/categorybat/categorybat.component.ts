import { Router } from '@angular/router';
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
  
  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
    console.log("categry  bat");
    
   let obeservable=this.service.SelectBat();
   obeservable.subscribe((result)=>{
    console.log(result);
    this.product=result;
    console.log(this.product);
    

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
