import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlistofissuedbooks',
  templateUrl: './userlistofissuedbooks.component.html',
  styleUrls: ['./userlistofissuedbooks.component.css']
})
export class UserlistofissuedbooksComponent implements OnInit {

  issuedBook:any;

  constructor() {


    this.issuedBook=[ {'bookname':'Linux Device Driver(3rd Ed)','author':'Rubini & Hartman','price':340,'issuedate':'12-8-2019'},
    {'bookname':'C Programming Language','author':'Dennise Ritche','price':720,'issuedate':'10-12-2019'},
    {'bookname':'C Programming Language','author':'Balaguruswami','price':840,'issuedate':'1-4-2019'},
    {'bookname':'C++ Programming Language','author':'Staustrop','price':540,'issuedate':'1-1-2020'}];

    
   }

  ngOnInit() {
  }

}
