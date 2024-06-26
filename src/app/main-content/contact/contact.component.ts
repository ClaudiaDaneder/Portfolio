import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PrivacyDialogComponent } from './../dialogs/privacy-dialog/privacy-dialog.component';
import { SentMessageDialogComponent } from '../dialogs/sent-message-dialog/sent-message-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatButtonModule, PrivacyDialogComponent, TranslateModule],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public privacyPolicyDialog: MatDialog,
    public sentDialog: MatDialog,
    private httpClient: HttpClient
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  sendEmail(name: String, email: String, message: String) {

    //Set the url with your secretKey from formspree.io
    let url = "https://formspree.io/f/xgegrbjr";

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: data => {
        console.log("email sent" + JSON.stringify(data));
      },
      error: error => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
      }
    })
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // If valid, proceed with form submission
    this.openSentDialog();
    this.resetForm();

  }

  resetForm() {
    this.submitted = false;
    this.contactForm.reset();
  }

  openPrivacyPolicy(): void {
    this.privacyPolicyDialog.open(PrivacyDialogComponent, {
      width: '50%',
      autoFocus: false,
    });
  }

  openSentDialog(): void {
    this.sentDialog.open(SentMessageDialogComponent);
  }



}
