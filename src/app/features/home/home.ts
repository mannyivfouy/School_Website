import { Component } from '@angular/core';
import { ImageSlider } from './components/image-slider/image-slider';

@Component({
  selector: 'app-home',
  imports: [ImageSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
