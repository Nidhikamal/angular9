import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [DepartmentListComponent, UserListComponent, EmployeeListComponent],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
