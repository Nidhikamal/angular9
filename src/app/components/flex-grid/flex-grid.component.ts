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
import { AuthenticationService } from 'src/app/_services';

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
  cbData;


  

  //for Excel Export
  includeColumnHeader = true;
  customContent = false;

  //flex ID is fetch here for PDF Export
  @ViewChild('grid') flexGrid: grid.FlexGrid;

  //flex ID is fetch here for Excel Export
  @ViewChild('grid') flex: wjcGrid.FlexGrid;

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

  constructor(private popupcomp :Popup ,private authenticationServ: AuthenticationService) { 
    this.getAllEmployee();
  }
  getAllEmployee() {
    console.log();
    
    this.authenticationServ.getAllEmployee().subscribe(data => {
      console.log("success");
      console.log(data); 
      this.data=data.content;
      this.cbData = [1, 5, 10, 20, 50];

    
      this._getData()

    }, error => {
      console.log("Error in getAllEmployee()");  
    });
  }
  private _getData() {
    
    this.data=new CollectionView(this.data);
    this.data.pageSize =5;
    return this.data;
  }
  ngOnInit(): void {
  }

  openDialogue(matItem: string){
   this.popupcomp.openDialogue(matItem);
  }
}
