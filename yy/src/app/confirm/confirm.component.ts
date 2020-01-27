import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
prod_id:any;
cust_id:any;
prod:any;
quantity:any;
bill;
custem;
total:any;
  constructor(private service:DataService,
    private router:Router) {
      this.custem=localStorage.getItem("email"); 
      console.log(this.custem);
      
    this.prod_id=window.sessionStorage.getItem("prod");
    console.log(this.prod_id);
    let observable=this.service.SelectByid(this.prod_id);
    observable.subscribe((data)=>{
      console.log(data);
      this.prod=data;
      console.log(this.prod);
    })
    
    
  }
  confirm()
  {
    console.log(this.quantity);
    this.bill=this.quantity*this.prod.p_price;
    console.log(this.bill);
    this.total="total:>";
    
  }

  pay()
  {
    alert("paid successfully");
    
    this.service.getid(this.custem).subscribe((data)=>{
      this.cust_id=data;
      console.log(this.cust_id);
     

     this.service.addtocart(this.quantity,this.cust_id,this.prod_id).subscribe((result)=>{
       console.log(result);
       this.router.navigate(['/user']);
     })
    })
    


  }

  ngOnInit() {
  }

}
