import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sent-message-dialog',
  standalone: true,
  imports: [ MatDialogModule, TranslateModule ],
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
