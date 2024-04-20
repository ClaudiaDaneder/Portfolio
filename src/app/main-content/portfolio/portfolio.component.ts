import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  forwardGithub(target: string) {
    window.open('https://github.com/ClaudiaDaneder/' + target, '_blank');
  }

  forwardLiveTest(target: string) {
    window.open('https://claudia-daneder.developerakademie.net/' + target, '_blank');
  }
}
