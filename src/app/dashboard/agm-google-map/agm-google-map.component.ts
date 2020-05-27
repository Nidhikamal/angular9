import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-google-map',
  templateUrl: './agm-google-map.component.html',
  styleUrls: ['./agm-google-map.component.css']
})
export class AgmGoogleMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'angulargooglemap';
  lat: number = 43.653908;
  lng: number = -79.384293;
}
