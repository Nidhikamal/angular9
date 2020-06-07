import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './navigation/department-list/department-list.component';
import { EmployeeListComponent } from './navigation/employee-list/employee-list.component';
import { AuthGuard } from '../app/_helpers/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login-mat/login-mat.module').then(m => m.LoginmatModule)
  },
  {
    path: 'home',canActivate: [AuthGuard] ,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule )
  },
  {
    path: 'loginold',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'error', 
  loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  },

  {path :'departments',component:DepartmentListComponent},
{path :'employee',component:EmployeeListComponent},


                                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
