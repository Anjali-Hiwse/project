import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbookavailable',
  templateUrl: './checkbookavailable.component.html',
  styleUrls: ['./checkbookavailable.component.css']
})
export class CheckbookavailableComponent implements OnInit {

  booksbyId : any;
  constructor() { }

  checkBook(){
    this.booksbyId=[
      {'id':14,'bookid':'1','rack':1,'status':'available'},
      {'id':25,'bookid':'1','rack':1,'status':'available'},
      {'id':76,'bookid':'1','rack':1,'status':'available'}
    ];

  }

  ngOnInit() {
  }

}
