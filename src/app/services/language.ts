import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.setLanguage('en');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);

    if (lang === 'kh') {
      document.body.className = 'khmer';
    } else {
      document.body.className = 'english';
    }

    localStorage.setItem('lang', lang);
  }
}
