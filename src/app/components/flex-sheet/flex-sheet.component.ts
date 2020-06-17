import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcSheet from '@grapecity/wijmo.grid.sheet';
import { DataService } from './data';


@Component({
  selector: 'app-flex-sheet',
  templateUrl: './flex-sheet.component.html',
  styleUrls: ['./flex-sheet.component.css']
})
export class FlexSheetComponent implements OnInit {

  data: any[];
  sortManager: wjcSheet.SortManager;
  columns: string[];
  private _countries: string[];
  private _products: string[];

  constructor(@Inject(DataService) dataSvc: DataService) {
    this.data = dataSvc.getData(50);
    this._countries = dataSvc.countries;
    this._products = dataSvc.products;
  }

  ngOnInit(): void {
  }
  initializeFlexSheet(flex: wjcSheet.FlexSheet) {
    flex.deferUpdate(() => {
      let column = flex.columns.getColumn('countryId');
      if (column && !column.dataMap) {
        column.dataMap = this._buildDataMap(this._countries);
      }
      column = flex.columns.getColumn('productId');
      if (column && !column.dataMap) {
        column.width = 100;
        column.dataMap = this._buildDataMap(this._products);
      }
      column = flex.columns.getColumn('amount');
      if (column) {
        column.format = 'c2';
      }
      this.sortManager = flex.sortManager;
      this.columns = this._getColumns(flex);
    });

    flex.selectedSheetChanged.addHandler(() => {
      this.columns = this._getColumns(flex);
      if (!this.sortManager) {
        this.sortManager = flex.sortManager;
      }
    });

    flex.columnChanged.addHandler(() => {
      this.columns = this._getColumns(flex);
    });
  }


// commit the sorts
commitSort() {
    this.sortManager.commitSort();
};

// cancel the sorts
cancelSort() {
    this.sortManager.cancelSort();
};

// add new sort level
addSortLevel() {
    this.sortManager.addSortLevel();
};

// delete current sort level
deleteSortLevel() {
    this.sortManager.deleteSortLevel();
};

// copy a new sort level by current sort level setting.
copySortLevel() {
    this.sortManager.copySortLevel();
};

// move the sort level
moveSortLevel(offset: number) {
    this.sortManager.moveSortLevel(offset);
};

// apply column index property for sort item
applySortColumnIndex(e: any, sortItem: wjcSheet.ColumnSortDescription) {
    sortItem.columnIndex = +e.target.value;
}

// apply asceding property for sort item
applySortAscending(e: any, sortItem: wjcSheet.ColumnSortDescription) {
    if (e.target.value === 'true') {
        sortItem.ascending = true;
    } else {
        sortItem.ascending = false;
    }
}

  // build a data map from a string array using the indices as keys
  private _buildDataMap(items: string[]) {
    let map = [];
    for (let i = 0; i < items.length; i++) {
      map.push({ key: i, value: items[i] });
    }
    return new wjcGrid.DataMap(map, 'key', 'value');
  }

  private _getColumns(flexSheet: wjcSheet.FlexSheet): string[] {
    let columns = [],
      i = 0;
    if (flexSheet) {
      for (; i < flexSheet.columns.length; i++) {
        columns.push('Column ' + wjcSheet.FlexSheet.convertNumberToAlpha(i));
      }
    }
    return columns;
  }
}
