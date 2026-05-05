import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../../../services/language';

@Component({
  selector: 'app-welcome-message',
  imports: [TranslateModule, CommonModule],
  templateUrl: './welcome-message.html',
  styleUrl: './welcome-message.css',
})
export class WelcomeMessage {
  currentLang: string = localStorage.getItem('lang') || 'en';
  isExpanded: boolean = false;

  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
