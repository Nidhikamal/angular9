import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Popup } from 'src/app/shared/popupmethod';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControlsService } from 'src/app/_services/form-controls.service';
import * as moment from 'moment';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {
  isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  
  //For Registration Form
  rgstrnGrp:FormGroup;


  constructor( private popupcomp: Popup,private fb: FormBuilder, private formServ: FormControlsService) { }

  //For get all controls
  get regForm() { return this.rgstrnGrp.controls; }

  ngOnInit(): void {
    // this.firstFormGroup = this.fb.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this.fb.group({
    //   secondCtrl: ['', Validators.required]
    // });
    this.rgstrnGrp = this.fb.group({
      firstname: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      lastname: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      gender: ['Male'],
      address: ['', Validators.required],
      dob: [''],
      userMail: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phoneno: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(20),Validators.pattern('[0-9 ]{12}')]],
      occupation: [''],
      qlfn1: [true],
      qlfn2: [false],
      qlfn3: [false],
    });
  }
  occupation = [
    {value: 'Doctor', viewValue: 'Doctor'},
    {value: 'Engineer', viewValue: 'Engineer'},
    {value: 'Other', viewValue: 'Other'}
  ];

  //For Documentation
  openDialogue(matItem: string){
    this.popupcomp.openDialogue(matItem);
  }

  //For Registration Form Submit
  onSubmit(form:FormGroup) {
    console.log(this.rgstrnGrp.controls['firstname'].errors);
    if (this.rgstrnGrp.controls['firstname'].errors ||
        this.rgstrnGrp.controls['lastname'].errors ||
        this.rgstrnGrp.controls['address'].errors ||
        this.rgstrnGrp.controls['userMail'].errors ||
        this.rgstrnGrp.controls['phoneno'].errors ||
        this.rgstrnGrp.controls['occupation'].errors) {    
      return;
    }
    

    //For combine the checkbox values
    let combine = '';
    if (this.regForm.qlfn1.value === true) {
      combine += 'Graduate,';
    } if (this.regForm.qlfn2.value === true) {
      combine += 'Post Graduate,';
    } if (this.regForm.qlfn3.value === true) {
      combine += 'Other';
    }

    //Change Date format
    const selectedDate = moment(this.regForm.dob.value,"MM-DD-YYYY").add(1,'days');

    //Ternary operator replace dob and Convert date time to String
    let newData = {...this.rgstrnGrp.value, dob: selectedDate.toISOString(), qualification: combine};

    console.log(newData);
    
    //Call the service
    this.formServ.sendGetRequest(newData).subscribe();
  }

  //For clear fields
  clearClick(){
    this.rgstrnGrp.reset();
  }
}
