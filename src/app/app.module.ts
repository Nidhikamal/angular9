import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login/login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WjGridModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
