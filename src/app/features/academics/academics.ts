import { CommonModule } from '@angular/common';
import { Major, majorsData } from './../../../data/academics-data/majors.data';
import { Component } from '@angular/core';
import { MajorCard } from './components/major-card/major-card';
import { MajorModal } from './components/major-modal/major-modal';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-academics',
  imports: [CommonModule, MajorCard, MajorModal],
  templateUrl: './academics.html',
  styleUrl: './academics.css',
})
export class Academics {
  majors = majorsData;
  selectedMajor: Major | null = null;
  groupedDegrees: any[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.groupDegrees();
  }

  groupDegrees() {
    const map = new Map<string, any>();

    this.majors.forEach((major) => {
      major.degrees.forEach((degree) => {
        if (!map.has(degree.type)) {
          map.set(degree.type, {
            type: degree.type,
            majors: [],
          });
        }

        map.get(degree.type).majors.push(major);
      });
    });

    this.groupedDegrees = Array.from(map.values());
  }
  selectedCard: any = null;

  openMajor(major: any, degreeType: string) {
    const degree = major.degrees.find((d: any) => d.type === degreeType);

    this.selectedCard = {
      majorName: major.name,
      degreeType: degree.type,
      degreeDescription: degree.description,
      subjects: degree.subjects,
    };

    this.document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedCard = null;

    this.document.body.style.overflow = 'auto';
  }
}
