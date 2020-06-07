import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})


export class ErrorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  sub:any;
  status:any;
  message:any;
  onSubmit() {


  }

  ngOnInit() {
    this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.status = params['status'];
        this.message = params['message'];
      });

}
}
