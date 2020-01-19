import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  flag:boolean=false;
  constructor() {
    this.flag=localStorage['flag'];
    console.log("change"+this.flag);
   }

  ngOnInit() {
  }

}
