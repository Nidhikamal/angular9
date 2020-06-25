import { Component, OnInit, ViewChild } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import * as wjcOData from '@grapecity/wijmo.odata';
import { Popup } from 'src/app/shared/popupmethod';
import * as wijmo from '@grapecity/wijmo';
import * as grid from '@grapecity/wijmo.grid';
import * as pdf from '@grapecity/wijmo.pdf';
import * as gridPdf from '@grapecity/wijmo.grid.pdf';
import '@grapecity/wijmo.styles/wijmo.css';

@Component({
  selector: 'app-flex-grid',
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.css']
})
export class FlexGridComponent implements OnInit {

  // Reference enumerations to use them in markup.
  ScaleModeEnum = gridPdf.ScaleMode;
  PdfPageOrientationEnum = pdf.PdfPageOrientation;
  ExportModeEnum = gridPdf.ExportMode;
  
  scaleMode = gridPdf.ScaleMode.ActualSize;
  orientation = pdf.PdfPageOrientation.Portrait;
  exportMode = gridPdf.ExportMode.All;
  data: CollectionView;
  datas: wjcOData.ODataCollectionView;

  //flex ID is fetch here
  @ViewChild('flex') flexGrid: grid.FlexGrid;
  //
  

  //Export PDF Function
  export() {
    gridPdf.FlexGridPdfConverter.export(this.flexGrid, 'FlexGrid.pdf', {
        maxPages: 10,
        exportMode: this.exportMode,
        scaleMode: this.scaleMode,
        documentOptions: {
            pageSettings: {
                layout: this.orientation
            },
            header: {
                declarative: {
                    text: '\t&[Page]\\&[Pages]'
                }
            },
            footer: {
                declarative: {
                    text: '\t&[Page]\\&[Pages]'
                }
            }
        },
        styles: {
            cellStyle: {
                backgroundColor: '#ffffff',
                borderColor: '#c6c6c6'
            },
            altCellStyle: {
                backgroundColor: '#f9f9f9'
            },
            groupCellStyle: {
                backgroundColor: '#dddddd'
            },
            headerCellStyle: {
                backgroundColor: '#eaeaea'
            }
        }
    });
  }

  constructor( private popupcomp: Popup) { 
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

  openDialogue(matItem: string){
    this.popupcomp.openDialogue(matItem);
  }
}
