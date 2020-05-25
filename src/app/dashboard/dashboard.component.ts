import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;





  
  
  constructor() {}
  danger : string = "danger";
  warn : string = "warn";
  success : string = "success";
  info : string = "info";

  ngOnInit() {}
}

