import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Language } from '../../services/language';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-internship',
  imports: [CommonModule, TranslateModule],
  templateUrl: './internship.html',
  styleUrl: './internship.css',
})
export class Internship {
  currentLang: string = localStorage.getItem('lang') || 'en';

  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }
}
