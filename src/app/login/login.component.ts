import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import {LoginService} from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private formBuilder: FormBuilder,private loginservice: LoginService ){}
  loginForm: FormGroup;
  isSubmitted  =  false;
  data: any = {};
  loginresult: any;
  response: any;

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { return this.loginForm.controls; }
  login(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      //alert s message
      return;
    }
    this.router.navigate(['/home/dashboard']);

    /*this.data = JSON.stringify(this.loginForm.value);
    
    const loginPayload = {
      username: this.loginForm.value.username,
      password:  this.loginForm.value.password
    };
    console.log(loginPayload);

    //do create a service folder and place all service.ts theree...its for coding std..
    this.loginservice.login(loginPayload).subscribe(result => {

      this.response = result;
      if (this.response && this.response.token) {
       
        console.log('user.token' + this.response.token);
        localStorage.setItem('token', this.response.token); // store token in local storage. /
        this.router.navigate(['/home']);//dashboard
      } else {
        // alert("username  or password is wrong");
        this.loginresult = 'Username or Password incorrect.';
      }
    }, error => {
       console.log(error);
    });*/
  }
}
