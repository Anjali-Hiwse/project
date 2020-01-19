import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-bookcopy',
  templateUrl: './issue-bookcopy.component.html',
  styleUrls: ['./issue-bookcopy.component.css']
})
export class IssueBookcopyComponent implements OnInit {

  books :any;
  constructor() { 
    this.books = [
      {"id":44,"bookName" : "Design of UNIX OS", "author":'Stroustrop'},
      {"id":32,"bookName" : "C++ Programming Language", "author":'Stroustrop'},
      {"id":12,"bookName" : "C Programming Language", "author":'Dennis Ritchie'},
      {"id":100,"bookName" : "C Programming Language", "author":'Dennis Ritchie'}
      
    ];
  }

  ngOnInit() {
  }

}
