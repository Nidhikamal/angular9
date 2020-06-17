import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WjGridSheetModule } from '@grapecity/wijmo.angular2.grid.sheet';

import { FlexSheetRoutingModule } from './flex-sheet-routing.module';
import { FlexSheetComponent } from './flex-sheet.component';
import { DataService } from './data';


@NgModule({
  declarations: [FlexSheetComponent],
  imports: [
    CommonModule,
    WjGridSheetModule,
    FlexSheetRoutingModule
  ],
  providers: [DataService]
})
export class FlexSheetModule { }
