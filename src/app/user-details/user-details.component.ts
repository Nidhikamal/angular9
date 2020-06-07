import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../_services/shared-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // @Output() spanChangeEmitter = new EventEmitter();
  @Output() spanChangeEmitter: EventEmitter<number> = new EventEmitter<number>();
  colspanLeft = 1;

  constructor(private sharedService: SharedService) { 
    this.colspanLeft = 1;
    this.spanChanged();
  }

  spanChanged() {
    this.sharedService.emitChange(this.colspanLeft);

  }

  ngOnInit(): void { 
  }
  spanChanged1() {
    console.log("event emitted: " + this.colspanLeft);
    this.spanChangeEmitter.emit(this.colspanLeft);
  }
}
