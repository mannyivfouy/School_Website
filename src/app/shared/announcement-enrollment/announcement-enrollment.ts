import { Component, OnInit } from '@angular/core';
import { ANNOUNCEMENT_CONFIG } from '../config/announcement.config';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-announcement-enrollment',
  imports: [CommonModule],
  templateUrl: './announcement-enrollment.html',
  styleUrl: './announcement-enrollment.css',
})
export class AnnouncementEnrollment implements OnInit {
  showAlert: boolean = false;
  isClosing: boolean = false;
  showOverlay = false;

  overlayClass = '';
  modalClass = '';
  announcement = ANNOUNCEMENT_CONFIG;

  private scrollY = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const now = new Date();

    const start = new Date(this.announcement.startDate);
    const end = new Date(this.announcement.endDate);

    const isInDateRange = now >= start && now <= end;

    this.showAlert = this.announcement.isActive && isInDateRange;

    if (this.showAlert) {
      this.overlayClass = 'animate__animated animate__fadeIn';
      this.modalClass = 'animate__animated animate__zoomIn';
      this.document.body.style.overflow = 'hidden';
    }
  }

  closeAlert(): void {
    this.isClosing = true;

    this.overlayClass = 'animate__animated animate__fadeOut pointer-events-none';
    this.modalClass = 'animate__animated animate__zoomOut';

    setTimeout(() => {
      this.showAlert = false;
      this.isClosing = false;
      this.showOverlay = false;
      this.document.body.style.overflow = 'auto';
    }, 1000);
  }
}
