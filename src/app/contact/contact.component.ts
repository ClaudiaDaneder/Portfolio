import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted, this.contactForm.value);
    


    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // If valid, proceed with form submission
    console.log('Form Submitted:', this.contactForm.value);
    this.closeDialog();
  }

  closeDialog() {
    // Reset form fields
    this.contactForm.reset();
    this.submitted = false;
  }
}

