import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private router : Router,
              private service : DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
    let pid = result.get("p_id");
    console.log(pid);
      let observableResult = this.service.Delete(pid);
        observableResult.subscribe((records)=>{
        console.log(records);
        this.router.navigate(['/getproduct']);
      })
    })
  }

}
