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
      document.body.classList.remove('english');
      document.body.classList.add('khmer');
    } else {
      document.body.classList.remove('khmer');
      document.body.classList.add('english');
    }
  }
}
