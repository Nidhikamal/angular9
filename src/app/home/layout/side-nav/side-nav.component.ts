import { Component, OnInit } from '@angular/core';

import {childRoutes} from '../../../shared/child-routes';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  routes=childRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
