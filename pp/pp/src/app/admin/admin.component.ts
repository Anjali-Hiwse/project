import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service : DataService,private auth:AuthService,
    private router:Router )  { }

LogOut(){
this.auth.LogOut();
this.router.navigate(['login']);
}

  ngOnInit() {
  }

}
