import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,    
    DashboardRoutingModule,
   // WjGridModule

  ]
})
export class DashboardModule { }
