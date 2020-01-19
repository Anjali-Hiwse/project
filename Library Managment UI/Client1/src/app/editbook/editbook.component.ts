import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  books:any;
  constructor() { }

  showBooks(){

    this.books=[
      {'id':5,'name':'C Programming Language','author': 'Dennis Ritche','subject':'C','price':120.00,'isbn':'120AD35'}
    ];
  }
  ngOnInit() {
  }

}
