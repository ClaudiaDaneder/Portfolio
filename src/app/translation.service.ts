import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public currentLanguage!: string;

  constructor(private http: HttpClient, private translate: TranslateService) { }

  init(): void {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    this.loadTranslations(this.translate.getDefaultLang());
  }

  private loadTranslations(language: string): void {
    this.http.get(`assets/i18n/${language}.json`)
      .pipe(
        map((translations) => {
          this.translate.setTranslation(language, translations);
        })
      )
      .subscribe();
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.loadTranslations(language);
    this.currentLanguage = language;
  }
}
