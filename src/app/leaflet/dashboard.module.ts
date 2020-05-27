import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmGoogleMapComponent } from './agm-google-map/agm-google-map.component'
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [DashboardComponent,
    LineChartComponent,
    BarChartComponent,
    AgmGoogleMapComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatCardModule,
    // WjGridModule
    FlexLayoutModule,
    ChartsModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    })

  ]
})
export class DashboardModule { }
