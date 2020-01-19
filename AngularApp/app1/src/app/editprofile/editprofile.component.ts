import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  details: any;
  phone: number;
  constructor(private service: DataService) { }

  onSignup()
  {
        this.service.editprofile(this.phone,this.details);
  }

  ngOnInit() {
  }

}
