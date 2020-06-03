import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './_services/login.service';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { UserDetailsComponent } from './user-details/user-details.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmGoogleMapComponent } from './dashboard/agm-google-map/agm-google-map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    //AgmGoogleMapComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WjGridModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule

  ],
  providers: [
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
