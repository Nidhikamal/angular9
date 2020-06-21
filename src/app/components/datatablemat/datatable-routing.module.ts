import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatablematComponent } from './datatablemat.component';


const routes: Routes = [{
  path:'',
  component:DatatablematComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatablematRoutingModule { }