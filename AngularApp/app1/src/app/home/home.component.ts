import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cem: any
  
  constructor(private service: AuthService,private router:Router) {
    this.cem=localStorage.getItem('email');
   }

  onSignOut()
  {
      this.service.SignOut();
      this.router.navigate(['login']);
  }

  ngOnInit() {

  }

}
