import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  colspanLeft = 1;
  colspanRight = 1;

  constructor(private Activatedroute:ActivatedRoute) { }
  leftSpan:string;
  navLinks:NavLink[]=[];
  ngOnInit(): void {
    /*snapshot
    this.leftSpan=this._Activatedroute.snapshot.paramMap.get("leftSpan");*/
    this.Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
      this.leftSpan = params.get('leftSpan'); 
    });

    this.navLinks = [
      new NavLink('general', 'General'),
      new NavLink('owners', 'Owners')
    ];
  }

}


class NavLink {
constructor(public path: string, public label: string) {}
}
