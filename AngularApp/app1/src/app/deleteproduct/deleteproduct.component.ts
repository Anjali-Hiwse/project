import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
product:any
  constructor(private service:DataService,private route : ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let id=result.get("pId");
      let observable=this.service.delete(id);
      observable.subscribe((data)=>{
        console.log(data);
       this.router.navigate(['/admin'])      
       })
    })
    
  }

}
