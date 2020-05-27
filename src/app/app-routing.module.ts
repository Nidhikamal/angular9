import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './navigation/department-list/department-list.component';
import { EmployeeListComponent } from './navigation/employee-list/employee-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login-mat/login-mat.module').then(m => m.LoginmatModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule )
  },
  {
    path: 'loginold',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {path :'departments',component:DepartmentListComponent},
{path :'employee',component:EmployeeListComponent},


                                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
