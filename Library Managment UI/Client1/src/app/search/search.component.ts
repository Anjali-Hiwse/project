import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  books:any;
  constructor() { 
    this.books=[
      {'id':1,'name':'C Programming Language','author': 'Dennis Ritche','subject':'C','price':120.00,'isbn':'120AD35'},
      {'id':2,'name':'C Programming Language','author': 'Balaguruswami','subject':'C','price':260.00,'isbn':'189AE35'},
      {'id':3,'name':'C++ Programming Language','author': 'Stroustrop','subject':'C','price':320.00,'isbn':'786BQ35'}
    ];
  }

  ngOnInit() {
  }


  
}
