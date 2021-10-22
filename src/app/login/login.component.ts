import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      'email': new FormControl('',Validators.required),
      'pwd': new FormControl('',Validators.required),
      'confirmPwd': new FormControl('',Validators.required)
    })
  }
  login(f: FormGroup){

    let test = false;
    this.userService.list.forEach((user)=>{
      if(user.email === f.controls['email'].value && user.email === f.controls['pwd'].value){
        test = true
      }
    })
    console.log(test);
    return test;
  }

}
