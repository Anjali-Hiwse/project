import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  no;
  prod;
  image:any;
  constructor(public activeRoute:ActivatedRoute,
              public service:DataService,
              public router:Router
    ) { 

    activeRoute.paramMap.subscribe((params)=>{
      this.no=params.get("p_id");

      this.service.SelectByid(this.no).subscribe((res)=>{

        console.log(res);
        this.prod=res;
        
        console.log(this.prod);

      })


    })

}

onSelectFile(event) {
  this.image = event.target.files[0];
}

add(){
  this.prod.no=this.no;
   this.service.update(this.prod,this.image).subscribe((res)=>{
     console.log(res);
     this.router.navigate(['/getproduct']);

   })

 }

  ngOnInit() {
  }


}
