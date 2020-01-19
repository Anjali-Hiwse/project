import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofuser',
  templateUrl: './listofuser.component.html',
  styleUrls: ['./listofuser.component.css']
})
export class ListofuserComponent implements OnInit {

  userlist :any;
  constructor() {
    this.userlist=[
      {'id':1,'name':'Nilesh Ghule','email':'nilesh@sunbeaminfo.com','phone':'9537331338','password':'*****','role':'User'},
      {'id':2,'name':'Vishal Salunkhe','email':'vishal@sunbeaminfo.com','phone':'9175019069','password':'*****','role':'User'},
      {'id':3,'name':'Nitin Kudale','email':'nitin@sunbeaminfo.com','phone':'9881208115','password':'*****','role':'User'},
      {'id':4,'name':'Yogesh Kolhe','email':'yogesh.kolhe@sunbeaminfo.com','phone':'99921573539','password':'*****','role':'User'},
      {'id':5,'name':'Praniti','email':'praniti@sunbeaminfo.com','phone':'8923234347','password':'*****','role':'Librarian'},
      {'id':6,'name':'Sarang Patil','email':'sarang@sunbeaminfo.com','phone':'432424587','password':'*****','role':'Admin'}
    ];
   }

  ngOnInit() {
  }

}
