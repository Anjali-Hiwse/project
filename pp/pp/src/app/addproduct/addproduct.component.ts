import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  prod={
    
	category:"",
	p_date:"",
	p_desc:"",
	p_image:"",
	p_name:"",
	p_price:"",
	p_weight:"",
	ratings:"",
	stock:""
  }
  
  constructor(public dataService:DataService,public router:Router) { }
  onSelectFile(event) {
    this.prod.p_image = event.target.files[0];
}
  a(formdata){
    console.log(formdata.form.value);
    this.prod=formdata.form.value;
    
    console.log(this.prod);
    this.dataService.addprod(this.prod).subscribe((res)=>{
      console.log(res);
   
      this.router.navigate(['admin']);
    })
    //alert("In Add");
  }



}
