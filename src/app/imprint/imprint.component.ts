import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ FooterComponent, NavbarComponent ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private _location: Location) {}

  linkBack() {
    this._location.back();
  }
}
