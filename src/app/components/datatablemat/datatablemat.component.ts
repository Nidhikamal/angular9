import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserdetailserviceService } from 'src/app/_services/userdetailservice.service';
import { Popup } from 'src/app/shared/popupmethod';

// For Datatable
export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
}

// For Datatable
const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-datatablemat',
  templateUrl: './datatablemat.component.html',
  styleUrls: ['./datatablemat.component.css']
})
export class DatatablematComponent implements OnInit {

  // For Datatable
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'email'];
  dataSource = new MatTableDataSource();    //Store data from backend
  
  // For Paginator as a Datatable child
  @ViewChild('userpaginator') paginator: MatPaginator;
  // For Sorting for Datatable
  @ViewChild(MatSort, {static: true}) matSort: MatSort;

  constructor(private dataService: UserdetailserviceService, 
              private popupcomp: Popup) { }
  

  ngOnInit() {
    //Call the function
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data.slice());
    
    // For Sorting for Datatable
    this.dataSource.sort = this.matSort;    
    this.dataSource.paginator = this.paginator;    
    })  
  }

  //For Search Filter
  public doFilter = (value: string) => {
    this.dataSource.filter=(value.trim().toLocaleLowerCase());
  }

  
// For Paginator
// MatPaginator Inputs
length = 10;
pageSize = 5;
pageSizeOptions: number[] = [5, 10, 25, 100];

// MatPaginator Output
  pageEvent: PageEvent;

   setPageSizeOptions(setPageSizeOptionsInput: string) {
     if (setPageSizeOptionsInput) {
       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
     }
   }

// For Datatable info popup
  openDialogue(matItem: string){
    this.popupcomp.openDialogue(matItem);
  }

}
