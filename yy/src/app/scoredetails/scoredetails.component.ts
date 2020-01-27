import { DataService } from './../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-scoredetails',
  templateUrl: './scoredetails.component.html',
  styleUrls: ['./scoredetails.component.css']
})
export class ScoredetailsComponent implements OnInit {
scores:any;
unique_id:any;
searchplayer:any;
  constructor(public activeRoute:ActivatedRoute,
    public service:DataService,
    public router:Router
) { 

  activeRoute.paramMap.subscribe((params)=>{
    this.unique_id=params.get("id");
    console.log(this.unique_id);
    
    this.service.getScore(this.unique_id).subscribe((data)=>{
      console.log(data);
      this.scores=data;
      console.log(this.scores);
      
      
    })

  })
}

search()
{
console.log(this.searchplayer);
this.router.navigate(['/search/' + this.searchplayer])

}
  ngOnInit() {
  }

}
