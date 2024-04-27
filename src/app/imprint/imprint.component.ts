import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ FooterComponent, NavbarComponent, TranslateModule ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private _location: Location) {}

  linkBack() {
    this._location.back();
  }
}
