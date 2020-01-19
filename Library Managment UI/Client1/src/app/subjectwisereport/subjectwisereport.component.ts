import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjectwisereport',
  templateUrl: './subjectwisereport.component.html',
  styleUrls: ['./subjectwisereport.component.css']
})
export class SubjectwisereportComponent implements OnInit {

  subjects : any;
  constructor() { 

    this.subjects = [
      {"subjectName" : "OS", "Count": "4"},
      {"subjectName" : "C++", "Count": "4"},
      {"subjectName" : "C", "Count": "9"},
      
    ];
  }

  ngOnInit() {
  }

}
