import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService implements CanActivate {
  flag: boolean = false;
  url = ''
  constructor(private router: Router,
    private http: HttpClient) {
    console.log("aaa");
    // this.flag=true;
  }

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
{
  //check if user login in
  if(sessionStorage['login_status']=='1')
  {
    console.log("bbbbbb");
    //this.flag=true;
    return true;
  }
  this.router.navigate[('/login')]
  return false
}
}
