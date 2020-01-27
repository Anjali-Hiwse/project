import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = { 
    address: {
      city: "",
    country:"",
     zip:"",
     state:"",
     addressLine1:"",
     addressLine2:"",
    },
      email : "" ,
      firstName : "",
      lastName : "",
     password:"",
     phone:"",

  } 
  constructor(private route : ActivatedRoute,
    private router : Router,
    private service : DataService) { }

  ngOnInit() {
  }

  onSignup(){
    console.log(this.register);
    let observableResult = this.service.Insert(this.register);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/login']);
    })
 }


}
