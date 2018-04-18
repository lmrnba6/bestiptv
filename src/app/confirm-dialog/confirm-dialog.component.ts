import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  public title: string;
  public message: string;
  public icon: string;
  public dialog: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              public snackBar: MatSnackBar) {}

 /**
  * notifyMessage
  */
  public notifyMessage(message: string, action: string, result: string): void {
    this.snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      extraClasses: [result]
    });
  }

}
