import { Component } from '@angular/core';
import { ImageSlider } from './components/image-slider/image-slider';
import { WelcomeMessage } from "./components/welcome-message/welcome-message";
import { StatsCard } from "./components/stats-card/stats-card";
import { CommonModule } from '@angular/common';
import { scrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { WhyChooseSetec } from "./components/why-choose-setec/why-choose-setec";

@Component({
  selector: 'app-home',
  imports: [ImageSlider, WelcomeMessage, StatsCard, CommonModule, scrollAnimateDirective, WhyChooseSetec],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
