import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from '../shared/child-routes';
import { AboutModule,FlexSheetModule } from '../components';

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
