import { DataService } from './../data.service';
import { observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.css']
})
export class LivescoreComponent implements OnInit {
latest:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    let observable=this.service.currentmatches();
    observable.subscribe((data)=>{
      console.log(data);
      this.latest = data['matches']
      
    })
  }

}
