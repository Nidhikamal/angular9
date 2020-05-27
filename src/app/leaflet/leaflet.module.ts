import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './leaflet.component';
import { LeafletRoutingModule } from './leaflet-routing.module';



@NgModule({
  declarations: [LeafletComponent],
  imports: [
    CommonModule,
    LeafletRoutingModule
  ]
})
export class LeafletModule { }
