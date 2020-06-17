import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WjGridModule} from '@grapecity/wijmo.angular2.grid';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedService } from '../../_services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WjGridModule,
    UserRoutingModule,
    MatButtonModule
  ],
  providers:[SharedService]
})
export class UserModule { }
