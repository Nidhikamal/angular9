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
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const loginPayload = {
        username: this.form.get('username').value,
        password:  this.form.get('password').value,
      };
      try {
       
        this.authenticationService.login(loginPayload)
            .pipe(first())
            .subscribe(
                data => {
                     console.log(data)

                    this.router.navigate(['/home']);
                })
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {

      this.formSubmitAttempt = true;

    }

  }

}