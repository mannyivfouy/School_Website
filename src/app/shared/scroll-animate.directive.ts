import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true,
})
export class scrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animClass = 'animate-fade-up';
  @Input() threshold = 0.15;
  @Output() animated = new EventEmitter<void>();

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'opacity-0');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
            this.renderer.addClass(this.el.nativeElement, this.animClass);
            this.animated.emit();
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: this.threshold },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
