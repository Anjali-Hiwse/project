import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
prod:any
pid:any
  constructor(private route : ActivatedRoute,
    private service: DataService,
    private router: Router) { 
      this.route.paramMap.subscribe((result)=>{
        this.pid=result.get("pId");
        console.log(this.pid);
        
        let observableResult=this.service.SelectByprodId(this.pid);
        observableResult.subscribe((data)=>{
          console.log(data);
          this.prod=data;
         })
      })
    }

  ngOnInit() {
    
  }

  UpdateProduct(){ 
    console.log(this.prod);
    let observableResult = this.service.UpdateProd(this.prod);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/admin']);
    })
  }

}
