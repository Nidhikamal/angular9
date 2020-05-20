import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WjGridModule} from '@grapecity/wijmo.angular2.grid';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
