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

  emps : any

  constructor(private service : DataService,private auth:AuthService,
              private router:Router )  { }

  LogOut(){
    this.auth.LogOut();
    this.router.navigate(['login']);
  }

  ngOnInit() {

    // // let observableResult = this.service.Select();
    // observableResult.subscribe((result)=>{

    //   console.log(result); 
    //   this.emps = result;
      // this.emps = [
      //   { "No" : 10 , "Name" : "abcd", "Age" : 23},
      //   { "No" : 11 , "Name" : "mnop", "Age" : 25},
      //   { "No" : 12 , "Name" : "ijkl", "Age" : 24}
      // ];
    //});    
  }
}
