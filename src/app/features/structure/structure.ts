import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../services/language';
import { OrganizationNode, organizationData } from '../../../data/organization-chart';
import { ViewChild, AfterViewChecked, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-structure',
  imports: [CommonModule, TranslateModule],
  templateUrl: './structure.html',
  styles: [
    `
      .org-box {
        font-weight: 600;
        text-align: center;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition:
          box-shadow 0.3s,
          transform 0.3s;
        line-height: 1.35;
        cursor: default;
      }
      .org-box:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }
      .org-box.depth-0,
      .org-box.depth-1 {
        padding: 10px 20px;
        font-size: 14px;
        min-width: 150px;
        max-width: 220px;
      }
      .org-box.depth-2 {
        padding: 8px 14px;
        font-size: 12px;
        min-width: 120px;
        max-width: 185px;
      }
      .org-box.depth-3,
      .org-box.depth-4 {
        padding: 7px 12px;
        font-size: 11px;
        min-width: 100px;
        max-width: 165px;
      }
    `,
  ],
  styleUrl: './structure.css',
})
export class Structure implements OnInit {
  currentLang: string = localStorage.getItem('lang') || 'en';
  roots: OrganizationNode[] = [];
  private nodeMap = new Map<string, OrganizationNode>();

  @ViewChildren('hbarHost') hbarHosts!: QueryList<ElementRef<HTMLElement>>;

  constructor(private langService: Language) {}

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langService.setLanguage(lang);
  }

  ngOnInit(): void {
    organizationData.forEach((n) => this.nodeMap.set(n.title, n));
    const allReferenced = new Set(
      organizationData.flatMap((n) => [
        ...(n.children ?? []),
        ...(n.childGroups ?? []).flat(),
        ...(n.siblings ?? []),
      ]),
    );
    this.roots = organizationData.filter((n) => !allReferenced.has(n.title));
  }

  ngAfterViewChecked(): void {
    this.spanAllHBars();
  }

  getNode(title: string): OrganizationNode | undefined {
    return this.nodeMap.get(title);
  }

  hasDeepChildren(titles: string[]): boolean {
    return titles.some((t) => {
      const n = this.nodeMap.get(t);
      return (n?.children?.length ?? 0) > 0 || (n?.childGroups?.length ?? 0) > 0;
    });
  }

  private spanAllHBars(): void {
    this.hbarHosts.forEach((ref) => {
      const host = ref.nativeElement;
      const bar = host.querySelector<HTMLElement>('[data-hbar], &');
      // For sibling rows the bar IS the host element; for child rows it's data-hbar inside
      const barEl =
        host.hasAttribute('data-hbar-host') && !host.querySelector('[data-hbar]')
          ? host // sibling row: host itself is the bar
          : host.querySelector<HTMLElement>('[data-hbar]');

      const cols = Array.from(host.querySelectorAll<HTMLElement>('[data-hbar-col]')).filter(
        (el) => el.closest('[data-hbar-host]') === host,
      );

      if (!barEl || cols.length < 2) return;

      const hostRect = host.getBoundingClientRect();
      const firstRect = cols[0].getBoundingClientRect();
      const lastRect = cols[cols.length - 1].getBoundingClientRect();

      const left = firstRect.left + firstRect.width / 2 - hostRect.left;
      const right = lastRect.left + lastRect.width / 2 - hostRect.left;

      barEl.style.left = `${left}px`;
      barEl.style.width = `${right - left}px`;
    });
  }
}
