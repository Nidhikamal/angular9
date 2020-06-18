import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatablematComponent } from './datatablemat.component';
import { DatatablematRoutingModule } from './datatable-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [DatatablematComponent],
  imports: [
    CommonModule,
    DatatablematRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class DatatablematModule { }