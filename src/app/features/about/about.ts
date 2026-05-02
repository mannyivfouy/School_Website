import { Component } from '@angular/core';
import { Language } from '../../services/language';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  currentLang: string = localStorage.getItem('lang') || 'en';

  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }
}
