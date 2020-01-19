import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { toUnicode } from 'punycode';
import { EmitterserviceService } from '../emitterservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  
  constructor(
    private emtService:EmitterserviceService,
    private userService: UserService,
    private router: Router) { }


  ngOnInit() {
  }

  onLogin() {
  
    if (this.email.length == 0) {
      alert('enter email');
    } else if (this.password.length ==0) {
      alert('enter password');
    } else {

      if(this.email=='Admin')
      {
          sessionStorage['login_status'] = '1';
          localStorage.setItem('email',this.email);
          localStorage.setItem('flag','true');
          this.router.navigate(['/home']);
      }
      else if(this.email=='Librarian')
      {
        
          sessionStorage['login_status'] = '1';
          localStorage.setItem('email',this.email);
          localStorage.setItem('flag','true');
         // this.emtService.navBarSwitch(true);
          this.router.navigate(['/home']);
      }else if(this.email=='User')
      {
          sessionStorage['login_status'] = '1';
          localStorage.setItem('email',this.email);
          localStorage.setItem('flag','true');
         // this.emtService.navBarSwitch(true);
          this.router.navigate(['/home']);
      }else{
        alert("invalid login");
        this.router.navigate(['']);
      }
      
    }
  }


  onSignup() {
    this.router.navigate(['/register']);
  }
}
