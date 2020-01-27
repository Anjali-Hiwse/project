import { observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
  email :"",
  password :""
  }
  usr:any;

   constructor(private service : AuthService,
              private router : Router,
              private dataservice:DataService) { }

              ngOnInit() {
                
              }
  message;//variable

signin()
{
  if (this.user.email.length==0) {
    alert('enter email');
  } else if (this.user.password.length ==0) {
    alert('enter password');
  }
  else {
    console.log(this.user);
    let observable=this.dataservice.validateuser(this.user);
    //console.log(observable);
    observable.subscribe((result)=>{
      console.log(result);
      if(result=="CUSTOMER")
      {sessionStorage['login_status'] = '1';
      localStorage.setItem('email',this.user.email);
      localStorage.setItem('flag','true');
      this.router.navigate(['/user']);
    }else if(result=="ADMIN")
    {
      sessionStorage['login_status'] = '1';
        localStorage.setItem('email',this.user.email);
        localStorage.setItem('flag','true');
        this.router.navigate(['/admin']);
    }
    else{ 
      this.router.navigate(['/login']);
      alert("invalid login");
    }


    });  
  }
let observableresult=this.dataservice.getuser(this.user);
observableresult.subscribe((data)=>{
  console.log(data);
  this.usr=data;
  sessionStorage.setItem("user",this.usr);
  
})
}

cancel()
{
  this.router.navigate(['/login']);
}

//  SignIn(){
//   if (this.email.length == 0) {
//     alert('enter email');
//   } else if (this.password.length ==0) {
//     alert('enter password');
//   } else {
    

//     if(this.email=='admin')
//     {
//         sessionStorage['login_status'] = '1';
//         localStorage.setItem('email',this.email);
//         localStorage.setItem('flag','true');
//         this.router.navigate(['/admin']);
//     }
//     else if(this.email=='user')
//     {
//         sessionStorage['login_status'] = '1';
//         localStorage.setItem('email',this.email);
//         localStorage.setItem('flag','true');
//        // this.emtService.navBarSwitch(true);
//         this.router.navigate(['/user']);
//     }else{
//       alert("invalid login");
//       this.router.navigate(['']);
//     }
    
//   }

//  }//end of SignIn

}