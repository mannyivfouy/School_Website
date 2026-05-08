import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-facilities',
  imports: [CommonModule, TranslateModule],
  templateUrl: './facilities.html',
  styleUrl: './facilities.css',
})
export class Facilities implements OnInit {
  currentLang: string = localStorage.getItem('lang') || 'en';
  rooms: any[] = [];

  constructor(
    private langService: Language,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.loadRooms();

    this.translate.onLangChange.subscribe(() => {
      this.loadRooms();
    });
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }

  loadRooms() {
    this.rooms = this.translate.instant('FACILITIES.ROOMS');
  }
}
