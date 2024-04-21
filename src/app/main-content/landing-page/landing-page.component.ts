import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, SocialsComponent ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
