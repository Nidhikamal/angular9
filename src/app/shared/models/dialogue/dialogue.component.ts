import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

//import  matdata from '../../mat-items.json';

export interface DialogData {
  mat_component: string;
}

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  matDataJson: any = {};
  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public diaData: DialogData,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/mat-items.json").subscribe(data => {
      let tempJson = data as JSON[];
       this.getMatItemJson(tempJson);
      console.log(this.matDataJson);
    });
  }
  getMatItemJson(tempJson: JSON[]) {
    tempJson.forEach(item=> {
      if(item["component"]==this.diaData.mat_component)
      this.matDataJson = item;
    });
  }
}
