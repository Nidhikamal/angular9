import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';


@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatTabsModule
  ]
})
export class TaskModule { }
