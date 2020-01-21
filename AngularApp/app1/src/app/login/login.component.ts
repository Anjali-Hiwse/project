import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 user={
email:"",
password:""
}
  constructor(private router:Router,
              private service: DataService) { }

  ngOnInit() {}

  onLogin()
  {
    if(this.user.email.length==0)
    {
    alert('enter email');
    } else if (this.user.password.length == 0){
      alert('enter password');
    }
    else{
      console.log(this.user);
      let observable = this.service.validateUser(this.user);
      observable.subscribe((result)=>{
         console.log(result);
         if(result == "CUSTOMER")
         {
           sessionStorage['login_status']='1';
           localStorage.setItem('email',this.user.email);
           localStorage.setItem('flag','true');
           this.router.navigate(['/user']);
         }
         else if(result == "ADMIN")
         {
           sessionStorage['login_status']='1';
           localStorage.setItem('email',this.user.email);
           localStorage.setItem('flag','true');
           this.router.navigate(['/admin']);
         }
         else{
          this.router.navigate(['/login']);
          alert("invalid login");
        }
      }
    )};
  }


  onCancel(){
    this.router.navigate(['/login']);
  }











  // onLogin() {
  
  //   if (this.email.length == 0) {
  //     alert('enter email');
  //   } else if (this.password.length ==0) {
  //     alert('enter password');
  //   } else {

  //     if(this.email=="admin")
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
  // }



  }