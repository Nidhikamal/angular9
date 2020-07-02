import { Component, OnInit } from '@angular/core';
import { Popup } from 'src/app/shared/popupmethod';

@Component({
  selector: 'app-agm-google-map',
  templateUrl: './agm-google-map.component.html',
  styleUrls: ['./agm-google-map.component.css']
})
export class AgmGoogleMapComponent implements OnInit {

 
  title = 'angulargooglemap';
  lat = 43.653908;
  lng = -79.384293;

  

  ngOnInit(): void {
    
  }
  constructor(private popupcomp: Popup) { }
  // For Datatable info popup
  openDialogue(matItem: string){
   this.popupcomp.openDialogue(matItem);
 }
 
  
}
