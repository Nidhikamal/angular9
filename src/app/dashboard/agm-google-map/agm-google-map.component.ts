import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-google-map',
  templateUrl: './agm-google-map.component.html',
  styleUrls: ['./agm-google-map.component.css']
})
export class AgmGoogleMapComponent implements OnInit {
  title = 'angulargooglemap';
  lat = 43.653908;
  lng = -79.384293;

  constructor() { }

  ngOnInit(): void {
  }
  
}
