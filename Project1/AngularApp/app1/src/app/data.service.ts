import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient
              ) { }

  validateUser(userObj){
    console.log(userObj);
    
    return this.http.post("http://localhost:8080/Garden_Fever/login_details/login",userObj);
  }


}
