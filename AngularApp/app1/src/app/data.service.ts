import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addprod(prod,image)
{  console.log(prod);
     const formData = new FormData();
     formData.append("pName",prod.pName);
     formData.append("stock",prod.stock);
     formData.append("price",prod.price);
     formData.append("pDesc",prod.pDesc);
     formData.append("productCategory",prod.productCategory);
     formData.append("image",image);
    return this.http.post("http://localhost:8080/Garden_Fever/admin/addproduct", formData);
  }

  validateUser(userObj) {
    console.log(userObj);
    return this.http.post("http://localhost:8080/Garden_Fever/login_details/login", userObj);
  }
  
  UpdateProd(prod)
  {
    return this.http.post("http://localhost:8080/Garden_Fever/admin/updateproduct/"+prod.pId,prod);
  }

  Update(userobj) {
    return this.http.post("http://localhost:8080/Garden_Fever/admin/editprofile", userobj);
  }

  SelectByemail(email: string) {
    return this.http.get("http://localhost:8080/Garden_Fever/admin/val/" + email);
  }

  SelectByprodId(pId: number) {
    return this.http.get("http://localhost:8080/Garden_Fever/admin/editproduct/" + pId);
  }

  getLIst() {
    return this.http.get("http://localhost:8080/Garden_Fever/admin/productlist");
  }
  getcustLIst() {
    return this.http.get("http://localhost:8080/Garden_Fever/admin/custlist");
  }
  getorders123() {
    return this.http.get("http://localhost:8080/Garden_Fever/admin/showorders");
  }
  delete(id) {
    return this.http.delete("http://localhost:8080/Garden_Fever/admin/deleteproduct/"+id);
  }

  Insert(usrobj){
    return this.http.post("http://localhost:8080/Garden_Fever/login_details/register",usrobj);
  }
}
