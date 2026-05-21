import { Component } from '@angular/core';
import { Language } from '../../../../services/language';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-choose-setec',
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-choose-setec.html',
  styleUrl: './why-choose-setec.css',
})
export class WhyChooseSetec {
  currentLang: string = localStorage.getItem('lang') || 'en';

  constructor(private langService : Language){}

  changeLang(lang : string){
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }
}
