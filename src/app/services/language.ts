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

    const content = document.getElementById('main-content');

    if (content) {
      content.classList.remove('animate__animated', 'animate__fadeIn', 'animate__slow');
      void content.offsetWidth;
      content.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
    }

    localStorage.setItem('lang', lang);
  }
}
