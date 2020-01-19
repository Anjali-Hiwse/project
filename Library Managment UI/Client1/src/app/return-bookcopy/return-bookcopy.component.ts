import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-bookcopy',
  templateUrl: './return-bookcopy.component.html',
  styleUrls: ['./return-bookcopy.component.css']
})
export class ReturnBookcopyComponent implements OnInit {

  books:any;
  constructor() {
    this.books=[
      {'bookid':5,'fine':30},
      {'bookid':7,'fine':0},
      {'bookid':35,'fine':20}
    ];
   }

  ngOnInit() {
  }

}
