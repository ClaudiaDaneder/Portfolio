import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from "aos";
import 'aos/dist/aos.css';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  ngOnInit(): void {
    AOS.init({
      duration: 600,
      delay: 400,
      offset: 1000,
      easing: 'ease-in',
      once: false
    });
    AOS.refresh();
  }


  forwardGithub(target: string) {
    window.open('https://github.com/ClaudiaDaneder/' + target, '_blank');
  }

  forwardLiveTest(target: string) {
    window.open('https://claudia-daneder.developerakademie.net/' + target, '_blank');
  }
}
