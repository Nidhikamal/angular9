import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';







@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,    
    DashboardRoutingModule,
    MatIconModule,
    MatCardModule,
       // WjGridModule
       FlexLayoutModule,

  ]
})
export class DashboardModule { }
