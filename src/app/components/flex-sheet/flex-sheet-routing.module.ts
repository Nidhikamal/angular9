import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexSheetComponent } from './flex-sheet.component';


const routes: Routes = [{
  path: '',
  component: FlexSheetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexSheetRoutingModule { }
