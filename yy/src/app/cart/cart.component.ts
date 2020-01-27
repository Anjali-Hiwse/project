import { observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
order:any;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let aem=result.get("cem");
      let observableResult=this.service.SelectByorderbtemail(aem);
      observableResult.subscribe((data)=>{
       console.log(data);
       this.order=data;     
      });
    })
  }

}
