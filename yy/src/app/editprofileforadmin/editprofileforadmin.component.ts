import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editprofileforadmin',
  templateUrl: './editprofileforadmin.component.html',
  styleUrls: ['./editprofileforadmin.component.css']
})
export class EditprofileforadminComponent implements OnInit {
  user :any;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService) { 
      this.route.paramMap.subscribe((result)=>{
        let aem=result.get("aem");
        let observableResult=this.service.SelectByemail(aem);
        observableResult.subscribe((data)=>{
          console.log(data);
          this.user=data;
         })
        })
    }

    Update()
    {
      console.log(this.user);
      let observableResult = this.service.update123(this.user);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/admin']);
    })
    }


  ngOnInit() {
    
  }

  }
