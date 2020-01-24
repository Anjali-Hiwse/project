import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  details: any
  constructor( private route : ActivatedRoute,
              private service: DataService,
              private router: Router) {
                this.route.paramMap.subscribe((result)=>{
                  let aem=result.get("aem");
                  let observableResult=this.service.SelectByemail(aem);
                  observableResult.subscribe((data)=>{
                    console.log(data);
                    this.details=data;
                   })
                })
               }
  
  ngOnInit() {
  }


Update(){ 
    console.log(this.details);
    let observableResult = this.service.Update(this.details);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/home']);
    })
  }

}
