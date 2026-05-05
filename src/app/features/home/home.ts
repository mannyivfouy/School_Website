import { Component } from '@angular/core';
import { ImageSlider } from './components/image-slider/image-slider';
import { WelcomeMessage } from "./components/welcome-message/welcome-message";

@Component({
  selector: 'app-home',
  imports: [ImageSlider, WelcomeMessage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
