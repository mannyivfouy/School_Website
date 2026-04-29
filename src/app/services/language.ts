import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    const savedLang = localStorage.getItem('lang') || 'en';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);

    if (lang === 'kh') {
      document.body.classList.remove('english');
      document.body.classList.add('khmer');
    } else {
      document.body.classList.remove('khmer');
      document.body.classList.add('english');
    }

    localStorage.setItem('lang', lang);
  }
}
