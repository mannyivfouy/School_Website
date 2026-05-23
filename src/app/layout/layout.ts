import { Component } from '@angular/core';
import { Navbar } from "../shared/navbar/navbar";
import { Footer } from "../shared/footer/footer";
import { RouterOutlet } from '@angular/router';
import { AnnouncementEnrollment } from "../shared/announcement-enrollment/announcement-enrollment";

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet, Footer, AnnouncementEnrollment],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
