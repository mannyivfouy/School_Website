import { signal } from '@angular/core';

export interface StatItem {
  value: number;
  display: ReturnType<typeof signal<string>>;
}
