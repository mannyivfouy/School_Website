import { Component } from '@angular/core';
import { Language } from '../../services/language';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private langService: Language) {}

  changeLang(lang: string) {
    console.log('changing to:', lang);
    this.langService.setLanguage(lang);
  }
}
