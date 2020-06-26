import { Component, OnInit, ViewChild } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import * as wjcOData from '@grapecity/wijmo.odata';
import { Popup } from 'src/app/shared/popupmethod';
import * as wijmo from '@grapecity/wijmo';
import * as grid from '@grapecity/wijmo.grid';
import * as pdf from '@grapecity/wijmo.pdf';
import * as gridPdf from '@grapecity/wijmo.grid.pdf';
import '@grapecity/wijmo.styles/wijmo.css';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcXlsx from '@grapecity/wijmo.xlsx';
import * as wjcGridXlsx from '@grapecity/wijmo.grid.xlsx';

@Component({
  selector: 'app-flex-grid',
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.css']
})
export class FlexGridComponent implements OnInit {

  // for PDF Export
  ScaleModeEnum = gridPdf.ScaleMode;
  PdfPageOrientationEnum = pdf.PdfPageOrientation;
  ExportModeEnum = gridPdf.ExportMode;
  
  scaleMode = gridPdf.ScaleMode.ActualSize;
  orientation = pdf.PdfPageOrientation.Portrait;
  exportMode = gridPdf.ExportMode.All;
  data: CollectionView;
  datas: wjcOData.ODataCollectionView;

  //for Excel Export
  includeColumnHeader = true;
  customContent = false;

  //flex ID is fetch here for PDF Export
  @ViewChild('flex') flexGrid: grid.FlexGrid;

  //flex ID is fetch here for Excel Export
  @ViewChild('flex') flex: wjcGrid.FlexGrid;

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

  //Export Excel Function
  save() {
    wjcGridXlsx.FlexGridXlsxConverter.saveAsync(this.flex,
        {
            includeColumnHeaders: this.includeColumnHeader,
            includeCellStyles: false,
            formatItem: this.customContent ? this._exportFormatItem : null
        },
        'FlexGrid.xlsx');
  }

  //for Export Excel Functionality
  private _exportFormatItem(args: wjcGridXlsx.XlsxFormatItemEventArgs) {
    var p = args.panel,
        row = args.row,
        col = args.col,
        xlsxCell = args.xlsxCell,
        cell: HTMLElement,
        color: string;

    if (p.cellType === wjcGrid.CellType.Cell) {
        if (p.columns[col].binding === 'color') {
            //color = p.rows[row].dataItem['color'];
            if (xlsxCell.value) {
                if (!xlsxCell.style.font) {
                    xlsxCell.style.font = {};
                }
                xlsxCell.style.font.color = (<string>xlsxCell.value).toLowerCase();
            }
        } else if (p.columns[col].binding === 'active' && p.rows[row] instanceof wjcGrid.GroupRow) {
            cell = args.getFormattedCell();
            xlsxCell.value = cell.textContent.trim();
            xlsxCell.style.hAlign = wjcXlsx.HAlign.Left;
        }
    }
  }

  //for Import Excel Functionality
  load() {
    let fileInput = <HTMLInputElement>document.getElementById('importFile');
        if (fileInput.files[0]) {
            this.customContent = false;
            wjcGridXlsx.FlexGridXlsxConverter.loadAsync(this.flex, fileInput.files[0], { includeColumnHeaders: this.includeColumnHeader });
        }
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
