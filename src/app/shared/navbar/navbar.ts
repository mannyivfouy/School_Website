import { Component, OnInit } from '@angular/core';
import { Language } from '../../services/language';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar{
  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.langService.setLanguage(lang);
  }
}
