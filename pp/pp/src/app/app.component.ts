import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';

  constructor(public service : AuthService,
    private router : Router) { }

  LogOut(){
    this.service.LogOut();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    // document.body.classList.add('image');
  }

}
