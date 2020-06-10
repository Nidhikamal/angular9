import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-mat',
  templateUrl: './login-mat.component.html',

  styleUrls: ['./login-mat.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  response: any;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/home']);
  }
  }

  async ngOnInit() {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }
  async onSubmit() {
    
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const loginPayload = {
        username: this.form.get('username').value,
        password:  this.form.get('password').value,
      };
      // const loginPayload = {
      //   grant_type: 'password',
      //   username: 'user',
      //   password: 'pass'
      // }
      
       
        this.authenticationService.login(this.form.get('username').value,this.form.get('password').value).subscribe(data => {
            console.log(data);
            this.response = data;
            if (this.response && this.response.token) {
            console.log('user.token' + this.response.token);
            localStorage.setItem('token', this.response.token); // store token in local storage. /
            this.router.navigate(['/home/dashboard']);
          } else {
            this.loginInvalid = true;
          }
        }, error => {
          this.loginInvalid = true;
       });
// this.router.navigate(['/home/dashboard']);

      
    } else {

      this.formSubmitAttempt = true;

    }

  }

}

