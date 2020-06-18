import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexGridComponent } from './flex-grid.component';
import { FlexGridRoutingModule } from './flex-grid-routing.module';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridFilterModule } from "@grapecity/wijmo.angular2.grid.filter";


@NgModule({
  declarations: [FlexGridComponent],
  imports: [
    CommonModule,
    WjGridModule,WjGridFilterModule,WjInputModule,
    FlexGridRoutingModule
  ],
  providers: []
})
export class FlexGridModule { }
