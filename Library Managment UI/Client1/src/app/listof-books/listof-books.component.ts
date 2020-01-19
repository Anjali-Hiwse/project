import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listof-books',
  templateUrl: './listof-books.component.html',
  styleUrls: ['./listof-books.component.css']
})
export class ListofBooksComponent implements OnInit {

  books: any;
  constructor() { }

  listOfBooks(){
this.books=[
  {'id':5,'bookname':'Linux Device Driver','author':'Rubin & Hartman','subject':'OS','price':'440','isbn':2312434,'copy_id':18,'issue_id':6,'issuedon':'1-1-2020','returndue':'10-1-2020'},
];
  }
  ngOnInit() {
  }

}
