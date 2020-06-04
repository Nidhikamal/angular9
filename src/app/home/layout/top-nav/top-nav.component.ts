import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  //@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() themeChangeEmitter : EventEmitter<string> = new EventEmitter<string>();
  themeItems = [
    {"themeKey":"theme-pink","theme":"Pink"},
    {"themeKey":"theme-light","theme":"Light"},
  {"themeKey": "theme-red","theme":"Red"}, 
  {"themeKey":"theme-blue","theme":"Blue"}, 
  {"themeKey":"theme-dark","theme":"Dark"}];
  public theme: string = 'theme-light';

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  themeChange(color:string) {
    this.themeChangeEmitter.emit(color);
  }
}
