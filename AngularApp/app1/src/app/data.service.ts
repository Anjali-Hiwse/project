import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addprod(prod) {
    return this.http.post("http://localhost:8080/Garden_Fever/admin/addproduct", prod);
  }
  validateUser(userObj) {
    console.log(userObj);
    return this.http.post("http://localhost:8080/Garden_Fever/login_details/login", userObj);
  }

  Update(userobj) {
    return this.http.post("http://localhost:8080/Garden_Fever/admin/editprofile", userobj);
  }

  SelectByemail(email: string) {
    return this.http.get("http://localhost:8080/Garden_Fever/admin/val/" + email);
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

}
