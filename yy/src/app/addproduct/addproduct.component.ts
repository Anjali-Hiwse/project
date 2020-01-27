import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  prod:any;
  
  image:any;
  constructor(public dataService:DataService,public router:Router) { }
  onSelectFile(event) {
    this.image = event.target.files[0];
}
  add(formdata){
    console.log(formdata.form.value);
    this.prod=formdata.form.value;
    
    console.log(this.prod);
    this.dataService.addprod(this.prod,this.image).subscribe((res)=>{
      console.log(res);
      
      this.router.navigate(['admin']);
    })
    
  }

  ngOnInit() {

  
  }

}
