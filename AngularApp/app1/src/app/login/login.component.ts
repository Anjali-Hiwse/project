import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  constructor(private router:Router) { }

  ngOnInit() {}


  onLogin() {
  
    if (this.email.length == 0) {
      alert('enter email');
    } else if (this.password.length ==0) {
      alert('enter password');
    } else {

      if(this.email=="admin")
      {
          sessionStorage['login_status'] = '1';
          localStorage.setItem('email',this.email);
          localStorage.setItem('flag','true');
          this.router.navigate(['/admin']);
      }
      else if(this.email=='user')
      {
          sessionStorage['login_status'] = '1';
          localStorage.setItem('email',this.email);
          localStorage.setItem('flag','true');
         // this.emtService.navBarSwitch(true);
          this.router.navigate(['/user']);
      }else{
        alert("invalid login");
        this.router.navigate(['']);
      }
      
    }
  }



  }