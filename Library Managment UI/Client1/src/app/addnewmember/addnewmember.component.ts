import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addnewmember',
  templateUrl: './addnewmember.component.html',
  styleUrls: ['./addnewmember.component.css']
})
export class AddnewmemberComponent implements OnInit {

  role:string="User";
  constructor() { }

  ngOnInit() {
  }

}
