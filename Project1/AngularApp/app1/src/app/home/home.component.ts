import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: any
  
  constructor(private service: AuthService,private router:Router) { }

  onSignOut()
  {
      this.service.SignOut();
      this.router.navigate(['login']);
  }

  ngOnInit() {

  }

}
