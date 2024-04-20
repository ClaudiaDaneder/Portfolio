import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-privacy-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './privacy-dialog.component.html',
  styleUrl: './privacy-dialog.component.scss'
})
export class PrivacyDialogComponent {

  constructor(public dialogRef: MatDialogRef<PrivacyDialogComponent>) {

  }
  onNoClick() {
    this.dialogRef.close();
  }
}
