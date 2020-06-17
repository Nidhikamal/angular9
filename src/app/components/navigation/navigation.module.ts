import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent, DepartmentListComponent } from '../../components';


@NgModule({
  declarations: [DepartmentListComponent, EmployeeListComponent],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }

