import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sent-message-dialog',
  standalone: true,
  imports: [ MatDialogModule ],
  templateUrl: './sent-message-dialog.component.html',
  styleUrl: './sent-message-dialog.component.scss'
})
export class SentMessageDialogComponent {
  constructor(public dialogRef: MatDialogRef<SentMessageDialogComponent>) {
    setTimeout(() => {
      this.onNoClick();
    }, 2000);
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
