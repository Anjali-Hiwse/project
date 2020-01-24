import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: AuthService,private router:Router) { 
    this.aem=localStorage.getItem('email');
  }
  aem:any;

  ngOnInit() {
  }


  onSignOut()
  {
      this.service.SignOut();
      this.router.navigate(['login']);
  }

}
