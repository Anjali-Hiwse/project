import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookwise-report',
  templateUrl: './bookwise-report.component.html',
  styleUrls: ['./bookwise-report.component.css']
})
export class BookwiseReportComponent implements OnInit {

  books : any;
  constructor() { 

    this.books = [
      {"id":4,"bookName" : "Design of UNIX OS", "available": "3","issued":'true',"count":4},
      {"id":3,"bookName" : "C++ Programming Language", "available": "3","issued":'true',"count":4},
      {"id":2,"bookName" : "C Programming Language", "available": "5","issued":'false',"count":5},
      {"id":1,"bookName" : "C Programming Language", "available": "3","issued":'true',"count":4}
      
    ];
  }

  ngOnInit() {
  }

}
