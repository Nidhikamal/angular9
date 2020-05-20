import { Component, OnInit } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  source: any;

  constructor() {
    this.source = this.getData(100);
  }

  getData(count: number) {
    var task = 'aa,bb,cc,dd,ee,ff,gg,hh'.split(','), data = [];
    for (var i = 0; i < count; i++) {
      data.push({
        id: i,
        task: task[i % task.length]+"_"+i,
        date: new Date(2014, i % 12, i % 28),
        //amount: Math.random() * 10000,
        active: i % 4 == 0
      });
    }
    return new wjcCore.CollectionView(data);
  }

  ngOnInit(): void {
  }

}
