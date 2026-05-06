import { Component } from '@angular/core';
import { Language } from '../../services/language';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentLand: string = localStorage.getItem('lang') || 'en';

  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.currentLand = lang;
    this.langService.setLanguage(lang);
  }
}
