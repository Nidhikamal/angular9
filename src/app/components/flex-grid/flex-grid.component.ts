import { Component, OnInit } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import * as wjcOData from '@grapecity/wijmo.odata';

@Component({
  selector: 'app-flex-grid',
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.css']
})
export class FlexGridComponent implements OnInit {
  data: CollectionView;
  datas: wjcOData.ODataCollectionView;

  constructor() { 
    this.data = this._getData(), {
      refreshOnEdit: false // on-demand sorting and filtering
  };
  let url = 'https://services.odata.org/Northwind/Northwind.svc';
        this.datas = new wjcOData.ODataCollectionView(url, 'Customers', {
        pageSize: 6,
            pageOnServer: true,
            sortOnServer: true,
        });
  }
  private _getData() {
    let countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (let i = 0; i < countries.length; i++) {
        data.push({
            id: i,
            country: countries[i],
            active: i % 5 != 0,
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }
    return new CollectionView(data, {
      pageSize: 3
  });
}
  ngOnInit(): void {
  }

}
