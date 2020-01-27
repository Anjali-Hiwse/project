import { DataService } from './../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
details:any;
  name:any;
  constructor(public activeRoute:ActivatedRoute,
    public service:DataService,
    public router:Router
) { 

  activeRoute.paramMap.subscribe((params)=>{
    this.name=params.get("player");
    console.log(this.name);
    
    this.service.search(this.name).subscribe((data)=>{
      console.log(data);
      this.details=data['data'];
      console.log(this.details);
      
      
    })

  })
}


  ngOnInit() {
  }

}
