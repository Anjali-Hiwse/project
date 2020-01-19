import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SignOut()
   {
     window.sessionStorage.setItem("active","0");
   }
  
  constructor() { }
}
