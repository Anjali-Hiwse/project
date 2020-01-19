import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''
  constructor(private router: Router) { }

  ngOnInit() {
  }
onLogin()
{
  if(this.email.length==0)
  {
    console.log(this.email)
    alert('enter email');
  }else if(this.password.length==0){
    alert('enter password');
  }else{
    if(this.email=='User')
    {
      sessionStorage['login_status']='1';
      localStorage.setItem('email',this.email);
      localStorage.setItem('flag','true');
      this.router.navigate(['/home']);
    }
    else if(this.email=='Admin')
    {
      sessionStorage['login_status']='1';
      localStorage.setItem('email',this.email);
      localStorage.setItem('flag','true');
      this.router.navigate(['/home']);
    }
    else
    {
      alert("invalid login");
      this.router.navigate(['']);
    }
  }
}
onSignup()
{
  this.router.navigate(['/register'])
}
}


