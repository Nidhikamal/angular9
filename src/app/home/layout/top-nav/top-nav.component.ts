import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor( private router: Router,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
