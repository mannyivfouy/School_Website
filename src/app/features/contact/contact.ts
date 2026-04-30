import { Component } from '@angular/core';
import { Language } from '../../services/language';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  currentLang: string = localStorage.getItem('lang') || 'en';

  constructor(private langService : Language){}

  changeLang(lang : string){
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }
}
