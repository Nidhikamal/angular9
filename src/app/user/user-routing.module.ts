import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { TaskComponent } from '../task/task.component';
import { UserDetailsComponent } from '../user-details/user-details.component';


const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'user-details', component: UserDetailsComponent
    },
    {
    path: 'addtask/:leftSpan',
    //component: TaskComponent
    loadChildren:()=>import('../task/task.module').then(m=>m.TaskModule),
  },
  {
    path: 'edittask', redirectTo: 'addtask'
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
