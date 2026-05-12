import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../../../services/language';
import { StatItem } from '../../../../models/stats-card.model';

@Component({
  selector: 'app-stats-card',
  imports: [CommonModule, TranslateModule],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.css',
})
export class StatsCard implements OnInit {
  currentLang: string = localStorage.getItem('lang') || 'en';
  stats: StatItem[] = [
    { value: 14000, display: signal('0') },
    { value: 80, display: signal('0') },
    { value: 52, display: signal('0') },
    { value: 12, display: signal('0') },
  ];

  constructor(private langService: Language) {}

  ngOnInit(): void {
    this.stats.forEach((stat, i) => {
      setTimeout(() => this.animate(stat), i * 150);
    });
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }

  easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  animate(stat: StatItem): void {
    const start = performance.now();
    const duration = 1400;

    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      stat.display.set(Math.round(stat.value * this.easeInOut(p)).toLocaleString());
      if (p < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }
}
