import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogueComponent } from '../shared/models/dialogue/dialogue.component';

@Injectable({ providedIn: 'root' })
export class Popup {
    constructor(public dialog: MatDialog) { }
    openDialogue(matItem: string) {
        /*For dialogue box */
        const dialogRef = this.dialog.open(DialogueComponent, {
            height: '400px',
            width: '600px',
            data: { mat_component: matItem }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }
}
