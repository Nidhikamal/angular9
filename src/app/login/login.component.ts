import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import {LoginService} from '../_services/login.service';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
               private formBuilder: FormBuilder,
               private loginservice: LoginService,
               private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/home']);
        }
    }



  
  loginForm: FormGroup;
  isSubmitted  =  false;
  data: any = {};
  loginresult: any;
  response: any;

    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

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
      // alert s message
      return;
    }
    

    this.data = JSON.stringify(this.loginForm.value);
    
    const loginPayload = {
      username: this.loginForm.value.username,
      password:  this.loginForm.value.password
    };
    console.log(loginPayload);


    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username,this.loginForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                     console.log(data);

                     this.router.navigate(['/home']);
                },
                error => {
                    this.error = error;
                    // this.loading = false;
                });

    // do create a service folder and place all service.ts theree...its for coding std..
    // this.loginservice.login(loginPayload).subscribe(result => {

    //   this.response = result;
    //   if (this.response && this.response.token) {
       
    //     console.log('user.token' + this.response.token);
    //     localStorage.setItem('token', this.response.token); // store token in local storage. /
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     // alert("username  or password is wrong");
    //     this.loginresult = 'Username or Password incorrect.';
    //   }
    // }, error => {
    //    console.log(error);
    // });
  }
}
