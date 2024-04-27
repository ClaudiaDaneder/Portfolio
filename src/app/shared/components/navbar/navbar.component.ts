import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    // Initialize translations
    this.translationService.init();
  }

  closeSidebar(): void {
    const checkbox = document.querySelector('#toggle-sidebar') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
  
  toggleLanguage() {
    if (this.translationService.currentLanguage == 'en') {
      this.translationService.switchLanguage('de')
    } else {
      this.translationService.switchLanguage('en')
    }

  }
}

