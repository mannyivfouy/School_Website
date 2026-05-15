import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-major-card',
  imports: [CommonModule],
  templateUrl: './major-card.html',
  styleUrl: './major-card.css',
})
export class MajorCard {
  @Input() major: any;
  @Output() learnMore = new EventEmitter<string>();
}
