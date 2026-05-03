import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  imports: [CommonModule],
  templateUrl: './image-slider.html',
  styleUrl: './image-slider.css',
})
export class ImageSlider implements OnInit, OnDestroy {
  images = [
    'assets/images/img-slide1.jpg',
    'assets/images/img-slide2.jpg',
    'assets/images/img-slide3.jpg',
    'assets/images/img-slide4.jpg',
    'assets/images/img-slide5.jpg',
  ];

  currentIndex: number = 0;
  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  trackByIndex(index: number, item: string) {
    return index;
  }
}
