import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  image:any;
  p={
    pName:"",
    pDesc:"",
    productCategory:"",
    price:"",
    stock:"",
    image:"",
    pUpdated:""
  }
  constructor(public service:DataService,private router:Router) { }
  onSelectFile(event) {
    this.image = event.target.files[0];
  }

  addnewProduct(formdata){
    console.log(formdata.form.value);
    this.p=formdata.form.value;
    
    console.log(this.p);
    this.service.addprod(this.p,this.image).subscribe((res)=>{
      console.log(res);
      
      this.router.navigate(['/admin']);
    })
}
  ngOnInit() {
  }

 }

