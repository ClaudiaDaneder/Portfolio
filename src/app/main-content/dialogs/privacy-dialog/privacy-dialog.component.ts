import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-dialog',
  standalone: true,
  imports: [MatDialogModule, TranslateModule],
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
