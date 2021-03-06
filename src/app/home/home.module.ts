import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { DialogueComponent } from '../shared/models/dialogue/dialogue.component';


@NgModule({
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent,DialogueComponent],
  imports: [
    CommonModule,
    WjGridModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule
  ],
  //entryComponents:[DialogueComponent]
})
export class HomeModule { }
