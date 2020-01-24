import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editprofilecust',
  templateUrl: './editprofilecust.component.html',
  styleUrls: ['./editprofilecust.component.css']
})
export class EditprofilecustComponent implements OnInit {
  details: any
  constructor(
    private route : ActivatedRoute,
    private service: DataService,
    private router:Router
  ) { 
    this.route.paramMap.subscribe((result)=>{
      let cem=result.get("cem");
      let observableResult=this.service.SelectByemail(cem);
      observableResult.subscribe((data)=>{
        console.log(data);
        this.details=data;
       })
    })
  }
  Update(){ 
    console.log(this.details);
    let observableResult = this.service.Update(this.details);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/home']);
    })
  }


  ngOnInit() {
  }

}
