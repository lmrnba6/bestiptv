import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string, dialog: string, icon: string, width: string, height: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent, {width, height});
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.dialog = dialog;
        dialogRef.componentInstance.icon = icon;

        return dialogRef.afterClosed();
    }
}
