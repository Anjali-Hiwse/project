import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  editprofile(phone,details)
  {
    this.http.put("http://localhost:42/admin/editprofile"+phone,details);
  }
}
