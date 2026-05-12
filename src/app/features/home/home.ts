import { Component } from '@angular/core';
import { ImageSlider } from './components/image-slider/image-slider';
import { WelcomeMessage } from "./components/welcome-message/welcome-message";
import { StatsCard } from "./components/stats-card/stats-card";

@Component({
  selector: 'app-home',
  imports: [ImageSlider, WelcomeMessage, StatsCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
