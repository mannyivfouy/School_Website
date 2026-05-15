import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SemesterList } from '../semester-list/semester-list';
import { CommonModule } from '@angular/common';
import { Major, DegreeProgram } from '../../../../../data/academics-data/majors.data';

@Component({
  selector: 'app-major-modal',
  imports: [SemesterList, CommonModule],
  templateUrl: './major-modal.html',
  styleUrl: './major-modal.css',
})
export class MajorModal {
  @Input() card!: any;
  @Output() close = new EventEmitter<void>();
}
