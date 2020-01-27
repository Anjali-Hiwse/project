import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cem:any;

    
  constructor(private service : DataService,private auth:AuthService,
    private router:Router )  {
      this.cem=localStorage.getItem('email');
     }
  LogOut(){
    this.auth.LogOut();
    this.router.navigate(['login']);
  }

  ngOnInit() {

   }
}
