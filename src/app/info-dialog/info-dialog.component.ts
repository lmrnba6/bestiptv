import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>,
              public snackBar: MatSnackBar) {

  }

  copySuccess(event: string): void {
    this.notifyMessage(`Succès: la balise ${event} est copiée`, '', 'success');
  }

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
