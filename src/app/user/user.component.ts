import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { SharedService } from '../_services/shared-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  source: any;
<<<<<<< HEAD
  constructor(private sharedService: SharedService) {
    this.source = this.getData(100);
    sharedService.changeEmitted$.subscribe(
=======
  constructor(private _sharedService: SharedService) {
    this.source = this.getData(100);
    _sharedService.changeEmitted$.subscribe(
>>>>>>> eefb6c95c3ce6900f16acad9139edb6d9f13dd35
      span => {
        this.colspanLeft = span;
        this.colspanRight = span;
      });
  }


  colspanLeft = 2;
  colspanRight = 0;
  spanChanged(event: number) {
    console.log("event got");
    alert(event);
    this.colspanLeft = event;
  }

  clickedMe() {
    this.colspanLeft = 1;
    this.colspanRight = 1;
  }
  getData(count: number) {
<<<<<<< HEAD
    // tslint:disable-next-line:one-variable-per-declaration
    const task = 'aa,bb,cc,dd,ee,ff,gg,hh'.split(','), data = [];
    for (let i = 1; i < count; i++) {
=======
    var task = 'aa,bb,cc,dd,ee,ff,gg,hh'.split(','), data = [];
    for (var i = 1; i < count; i++) {
>>>>>>> eefb6c95c3ce6900f16acad9139edb6d9f13dd35
      data.push({
        id: i,
        task: task[i % task.length] + "_" + i,
        date: new Date(2014, i % 12, i % 28),
<<<<<<< HEAD
        // amount: Math.random() * 10000,
        active: i % 4 ===0
=======
        //amount: Math.random() * 10000,
        active: i % 4 == 0
>>>>>>> eefb6c95c3ce6900f16acad9139edb6d9f13dd35
      });
    }
    return new wjcCore.CollectionView(data);
  }
  ngOnInit(): void {

  }

}
