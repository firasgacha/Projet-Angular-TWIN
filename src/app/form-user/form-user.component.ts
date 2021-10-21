import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  user : User;
  list : User[];
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.user = new User();
    this.list = [];
  }
  save(){
    this.list.push(this.user);
    console.log(this.list);
  }
  ShowPassword(){
    this.show = !this.show;
  }

}
