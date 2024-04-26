import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [
    trigger('leftAnimation', [
      state('show', style({
        opacity: 1,
        // transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        // transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms')),
      transition('hide => show', animate('700ms'))
    ]),
    trigger('rightAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('show => hide', animate('1700ms ease-out')),
      transition('hide => show', animate('1700ms ease-in'))
    ])
  ]
})
export class PortfolioComponent {

  leftState = 'hide';
  rightState = 'hide';

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= componentPosition - 150) {
      this.leftState = 'show';
      this.rightState = 'show';
    } else {
      this.leftState = 'hide';
      this.rightState = 'hide';
    }
    console.log('Left State:', this.leftState);
    console.log('Right State:', this.rightState);
  }


  forwardGithub(target: string) {
    window.open('https://github.com/ClaudiaDaneder/' + target, '_blank');
  }

  forwardLiveTest(target: string) {
    window.open('https://claudia-daneder.developerakademie.net/' + target, '_blank');
  }
}
