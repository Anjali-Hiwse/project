import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = { 
    addr: {
    city: "",
    country:"",
     pincode:"",
      state:"",
    },
      email : "" ,
    fName : "",
     lName : "",
     password:"",
     phoneNo :"" 
     
       
  }
  

constructor(private route : ActivatedRoute,
            private router : Router,
            private service : DataService) { }

  ngOnInit() {
  }

  Insert(){
    console.log(this.user);
    let observableResult = this.service.Insert(this.user);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/user']);
    })

  }
}
