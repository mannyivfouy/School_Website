import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-structure',
  imports: [CommonModule, TranslateModule],
  templateUrl: './structure.html',
  styleUrl: './structure.css',
})
export class Structure {
  currentLang: string = localStorage.getItem('lang') || 'en';

  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }
}
