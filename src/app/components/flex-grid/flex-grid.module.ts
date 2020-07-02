import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexGridComponent } from './flex-grid.component';
import { FlexGridRoutingModule } from './flex-grid-routing.module';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridFilterModule } from "@grapecity/wijmo.angular2.grid.filter";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';


@NgModule({
  declarations: [FlexGridComponent],
  imports: [
    CommonModule,
    WjGridModule,WjGridFilterModule,WjInputModule,
    FlexGridRoutingModule,
    MatButtonModule,MatIconModule,FormsModule,
    WjGridSearchModule,
  ],
  providers: []
})
export class FlexGridModule { }
