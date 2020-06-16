import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from '../shared/child-routes';
import { AboutComponent } from '../about/about.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...childRoutes
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
