import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Popup } from '../shared/popupmethod';

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





  
  

  constructor(private authenticationService: AuthenticationService,private popupcomp: Popup) { this.loadList()

  }
  danger : string = "danger";
  warn : string = "warn";
  success : string = "success";
  info : string = "info";


  ngOnInit() {}

// For Datatable info popup
openDialogue(matItem: string){
  this.popupcomp.openDialogue(matItem);
}
  loadList(){
    this.authenticationService.getAllUsers().subscribe(data =>{  
     console.log(data);
    });  
  }
}

