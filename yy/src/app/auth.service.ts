import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.IsLogedIn())
      return true;
    else{
        this.router.navigate(['/login']);
        return false;
      }
      
  }//end of canActivate
  
  IsLogedIn(){
    if( window.sessionStorage.getItem('active')!=null &&
        window.sessionStorage.getItem('active')=="1")
      return true;
    else
      return false
  }// end of IsLogedIn

  constructor(private router : Router) { }

  LogIn(userDetails){
    if(userDetails.uname=="abc" && userDetails.password=="abc@123"){
      window.sessionStorage.setItem('active','1');
      return true;
    }else return false;    
  }// end of LogIn

  LogOut(){    
      window.sessionStorage.setItem('active','0'); 
      sessionStorage.clear();
  }// end of LogOut
}
