import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SocialsComponent } from './socials/socials.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, SocialsComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, NavbarComponent ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
