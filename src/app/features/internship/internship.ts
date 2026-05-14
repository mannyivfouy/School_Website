import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Language } from '../../services/language';
import { TranslateModule } from '@ngx-translate/core';
import { InternshipData } from '../../models/internship.model';
import internshipData from '../../../data/internship.data.json';

type Major = 'MIS' | 'BIT' | 'Design';

@Component({
  selector: 'app-internship',
  imports: [CommonModule, TranslateModule, CommonModule],
  templateUrl: './internship.html',
  styleUrl: './internship.css',
})
export class Internship {
  currentLang: string = localStorage.getItem('lang') || 'en';
  internships: InternshipData = internshipData;
  majors: Major[] = ['MIS', 'BIT', 'Design'];
  majorLabels: Record<Major, string> = {
    MIS: 'Management Information System',
    BIT: 'Business Information Technology',
    Design: 'Design',
  };

  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }

  trackByStudent(index: number, student: any): string {
    return `${student.name}-${student.company}`;
  }
}
